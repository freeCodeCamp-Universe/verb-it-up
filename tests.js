// Run with: node tests.js
'use strict';

// ── Minimal DOM / localStorage stubs ─────────────────────────────────────────

const _store = {};
const localStorage = {
  getItem:    key       => Object.prototype.hasOwnProperty.call(_store, key) ? _store[key] : null,
  setItem:    (key, val) => { _store[key] = String(val); },
  removeItem: key       => { delete _store[key]; },
  clear:      ()        => { Object.keys(_store).forEach(k => delete _store[k]); },
};

const _elements = {};
const document = {
  getElementById: id => (_elements[id] ??= { textContent: '' }),
};

function reset() { localStorage.clear(); }

// ── Logic extracted from phrasal-verbs.js (keep in sync) ─────────────────────

const STORAGE_KEY = 'verbitup-mistakes';
const SEEN_KEY    = 'verbitup-seen';

const DATA = [
  { verb: 'act up',    def: 'behave badly or strangely' },
  { verb: 'back off',  def: 'retreat or stop pressuring someone' },
  { verb: 'call out',  def: 'expose or publicly accuse someone' },
  { verb: 'calm down', def: 'stop being angry or upset' },
];

const loadMistakes = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
const saveMistakes = obj => localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));

function recordMistake(verb) {
  const m = loadMistakes();
  m[verb] = (m[verb] || 0) + 1;
  saveMistakes(m);
}

function recordCorrect(verb) {
  const m = loadMistakes();
  if (!m[verb]) return;
  m[verb]--;
  if (m[verb] <= 0) delete m[verb];
  saveMistakes(m);
}

function getWeakVerbs() {
  const m = loadMistakes();
  return DATA.filter(item => m[item.verb] > 0)
             .sort((a, b) => m[b.verb] - m[a.verb]);
}

const loadSeen = () => new Set(JSON.parse(localStorage.getItem(SEEN_KEY) || '[]'));
const saveSeen = set => localStorage.setItem(SEEN_KEY, JSON.stringify([...set]));

function markSeen(items) {
  const seen = loadSeen();
  items.forEach(item => seen.add(item.verb));
  saveSeen(seen);
  updateProgress();
}

function updateProgress() {
  const count = loadSeen().size;
  document.getElementById('progress-label').textContent =
    `${count} / ${DATA.length} verbs practiced`;
}

// ── Test runner ───────────────────────────────────────────────────────────────

let passed = 0, failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✓  ${name}`);
    passed++;
  } catch (e) {
    console.error(`  ✗  ${name}\n     ${e.message}`);
    failed++;
  }
}

function assert(condition, msg) {
  if (!condition) throw new Error(msg || 'assertion failed');
}

function assertEqual(a, b, msg) {
  if (a !== b) throw new Error(msg || `expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`);
}

// ── Progress tracking ─────────────────────────────────────────────────────────

console.log('\nProgress tracking');

test('starts with 0 seen verbs', () => {
  reset();
  assertEqual(loadSeen().size, 0);
});

test('markSeen adds verbs to the seen set', () => {
  reset();
  markSeen([DATA[0], DATA[1]]);
  assertEqual(loadSeen().size, 2);
});

test('markSeen is idempotent — repeated verbs not double-counted', () => {
  reset();
  markSeen([DATA[0], DATA[1]]);
  markSeen([DATA[0], DATA[2]]);
  assertEqual(loadSeen().size, 3);
});

test('seen set survives a simulated reload', () => {
  reset();
  markSeen([DATA[0]]);
  const fresh = loadSeen();
  assertEqual(fresh.size, 1);
  assert(fresh.has('act up'), 'act up should be in the seen set');
});

test('updateProgress sets the correct label text', () => {
  reset();
  markSeen([DATA[0], DATA[1], DATA[2]]);
  const label = document.getElementById('progress-label').textContent;
  assertEqual(label, `3 / ${DATA.length} verbs practiced`);
});

test('progress label reads "0 / N" before any round', () => {
  reset();
  updateProgress();
  const label = document.getElementById('progress-label').textContent;
  assertEqual(label, `0 / ${DATA.length} verbs practiced`);
});

// ── Mistake tracking ──────────────────────────────────────────────────────────

console.log('\nMistake tracking');

test('recordMistake sets count to 1 on first mistake', () => {
  reset();
  recordMistake('act up');
  assertEqual(loadMistakes()['act up'], 1);
});

test('repeated mistakes accumulate', () => {
  reset();
  recordMistake('act up');
  recordMistake('act up');
  assertEqual(loadMistakes()['act up'], 2);
});

test('recordCorrect decrements mistake count', () => {
  reset();
  recordMistake('act up');
  recordMistake('act up');
  recordCorrect('act up');
  assertEqual(loadMistakes()['act up'], 1);
});

test('recordCorrect removes verb when count reaches 0', () => {
  reset();
  recordMistake('act up');
  recordCorrect('act up');
  assertEqual(loadMistakes()['act up'], undefined);
});

test('recordCorrect is a no-op for a verb with no mistakes', () => {
  reset();
  recordCorrect('act up');
  assertEqual(loadMistakes()['act up'], undefined);
});

test('getWeakVerbs returns only verbs with outstanding mistakes', () => {
  reset();
  recordMistake('act up');
  recordMistake('back off');
  recordCorrect('act up');
  const weak = getWeakVerbs();
  assertEqual(weak.length, 1);
  assertEqual(weak[0].verb, 'back off');
});

test('getWeakVerbs sorts by mistake count descending', () => {
  reset();
  recordMistake('act up');
  recordMistake('back off');
  recordMistake('back off');
  const weak = getWeakVerbs();
  assertEqual(weak[0].verb, 'back off');
  assertEqual(weak[1].verb, 'act up');
});

test('mistakes and seen set are stored independently', () => {
  reset();
  markSeen([DATA[0]]);
  recordMistake('back off');
  assertEqual(loadSeen().size, 1);
  assert(loadSeen().has('act up'));
  assertEqual(Object.keys(loadMistakes()).length, 1);
});

// ── Summary ───────────────────────────────────────────────────────────────────

console.log(`\n${passed} passed, ${failed} failed\n`);
if (failed > 0) process.exit(1);
