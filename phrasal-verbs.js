const DATA = [
  { verb: "abide by",        def: "accept or follow a rule or decision" },
  { verb: "account for",     def: "explain something" },
  { verb: "act on",          def: "take action because of information received" },
  { verb: "act out",         def: "perform something with actions and gestures" },
  { verb: "act up",          def: "behave badly or strangely" },
  { verb: "add up",          def: "make a mathematical total" },
  { verb: "aim at",          def: "target or intend to achieve something" },
  { verb: "allow for",       def: "include something in a plan or calculation" },
  { verb: "ask out",         def: "invite someone on a date" },
  { verb: "back away",       def: "retreat or move backwards" },
  { verb: "back down",       def: "withdraw your position in an argument" },
  { verb: "back off",        def: "retreat or stop pressuring someone" },
  { verb: "back out",        def: "fail to keep a promise or arrangement" },
  { verb: "back up",         def: "make a copy of computer data" },
  { verb: "bail out",        def: "save or rescue someone" },
  { verb: "bank on",         def: "count or rely on something" },
  { verb: "bear with",       def: "be patient" },
  { verb: "beat up",         def: "attack someone violently" },
  { verb: "beef up",         def: "make something stronger or more solid" },
  { verb: "black out",       def: "fall unconscious" },
  { verb: "blow off",        def: "not keep an appointment" },
  { verb: "blow out",        def: "extinguish candles or a flame" },
  { verb: "blow up",         def: "explode" },
  { verb: "bog down",        def: "slow or stop progress" },
  { verb: "boil down to",    def: "amount to something" },
  { verb: "boil over",       def: "spill out of a container when heated" },
  { verb: "bone up on",      def: "study hard for a specific purpose" },
  { verb: "book in",         def: "make a reservation in advance" },
  { verb: "boot up",         def: "start a computer" },
  { verb: "border on",       def: "be very nearly something" },
  { verb: "boss around",     def: "use authority to control people excessively" },
  { verb: "botch up",        def: "ruin or spoil something" },
  { verb: "bottle out",      def: "lack the courage to do something" },
  { verb: "bottle up",       def: "keep emotions hidden instead of expressing them" },
  { verb: "bottom out",      def: "reach the lowest point and start rising" },
  { verb: "bounce back",     def: "recover from a setback" },
  { verb: "break away",      def: "leave a group, usually to form a new one" },
  { verb: "break down",      def: "stop working or lose emotional control" },
  { verb: "break in",        def: "enter a building illegally to steal" },
  { verb: "break off",       def: "end a relationship" },
  { verb: "break out",       def: "start suddenly, as war or conflict" },
  { verb: "break through",   def: "pass a barrier or obstacle" },
  { verb: "break up",        def: "end a romantic relationship" },
  { verb: "breeze through",  def: "succeed or pass something easily" },
  { verb: "bring about",     def: "cause something to happen" },
  { verb: "bring back",      def: "make someone feel nostalgic" },
  { verb: "bring down",      def: "cause a government or person to lose power" },
  { verb: "bring forward",   def: "move an event to an earlier date" },
  { verb: "bring in",        def: "earn or introduce something" },
  { verb: "bring off",       def: "succeed at something difficult" },
  { verb: "bring out",       def: "release or publish something new" },
  { verb: "bring round",     def: "make someone regain consciousness" },
  { verb: "bring up",        def: "mention a topic in conversation" },
  { verb: "brush off",       def: "ignore or pay little attention to something" },
  { verb: "brush up on",     def: "improve a skill you haven't used recently" },
  { verb: "buckle down",     def: "start working hard and seriously" },
  { verb: "build up",        def: "increase or develop gradually" },
  { verb: "bump into",       def: "meet someone by chance" },
  { verb: "bump off",        def: "kill someone" },
  { verb: "call back",       def: "return a phone call" },
  { verb: "call for",        def: "demand something publicly" },
  { verb: "call off",        def: "cancel something" },
  { verb: "call on",         def: "visit someone" },
  { verb: "call out",        def: "expose or publicly accuse someone" },
  { verb: "call up",         def: "telephone someone" },
  { verb: "calm down",       def: "stop being angry or upset" },
  { verb: "cancel out",      def: "neutralize or have the opposite effect" },
  { verb: "care for",        def: "like something or look after someone" },
  { verb: "carry on",        def: "continue doing something" },
  { verb: "carry out",       def: "perform or complete a task" },
  { verb: "cash in on",      def: "profit from a situation" },
  { verb: "catch on",        def: "become popular or finally understand" },
  { verb: "catch up",        def: "reach the same level as someone ahead" },
  { verb: "catch up on",     def: "do something you didn't have time for" },
  { verb: "cave in",         def: "collapse or stop resisting" },
  { verb: "change over",     def: "change from one system to another" },
  { verb: "chase up",        def: "remind someone about something overdue" },
  { verb: "cheer up",        def: "become or make someone happier" },
  { verb: "chicken out",     def: "be too afraid to do something" },
  { verb: "chill out",       def: "relax" },
  { verb: "chip in",         def: "contribute money or an idea" },
  { verb: "chop up",         def: "cut something into small pieces" },
  { verb: "clean out",       def: "tidy thoroughly and remove unwanted things" },
  { verb: "clean up",        def: "tidy and clean a place" },
  { verb: "clear off",       def: "leave somewhere quickly" },
  { verb: "clear out",       def: "leave a place or tidy it thoroughly" },
  { verb: "clear up",        def: "tidy, explain, or improve (weather)" },
  { verb: "climb down",      def: "admit you were wrong and change position" },
  { verb: "close down",      def: "close a business permanently" },
  { verb: "come across",     def: "find something by accident" },
  { verb: "come around",     def: "recover consciousness" },
  { verb: "come back",       def: "return" },
  { verb: "come down with",  def: "fall ill with a disease" },
  { verb: "come off",        def: "be successful" },
  { verb: "come out",        def: "be revealed, published, or released" },
  { verb: "come up",         def: "arise or appear unexpectedly" },
  { verb: "come up against", def: "encounter a problem or difficulty" },
  { verb: "come up with",    def: "think of an idea or solution" },
  { verb: "cool down",       def: "become calmer after anger" },
  { verb: "count on",        def: "depend or rely on someone" },
  { verb: "cover for",       def: "make excuses or do the work of someone absent" },
  { verb: "cover up",        def: "conceal wrongdoing or a mistake" },
  { verb: "crack down on",   def: "enforce rules more strictly" },
  { verb: "crack up",        def: "have a breakdown or burst out laughing" },
  { verb: "cross off",       def: "remove an item from a list" },
  { verb: "cry off",         def: "cancel an arrangement" },
  { verb: "cut back",        def: "reduce spending or consumption" },
  { verb: "cut down",        def: "reduce or fell a tree" },
  { verb: "cut off",         def: "disconnect or make inaccessible" },
  { verb: "cut out",         def: "stop doing or exclude something" },
  { verb: "do away with",    def: "abolish or get rid of something" },
  { verb: "do up",           def: "fasten or renovate something" },
  { verb: "do without",      def: "manage without having something" },
  { verb: "doze off",        def: "fall asleep gradually" },
  { verb: "drag on",         def: "last much longer than necessary" },
  { verb: "draw up",         def: "prepare a formal document or plan" },
  { verb: "dream up",        def: "invent or think of something creative" },
  { verb: "dress up",        def: "put on smart or formal clothing" },
  { verb: "drift apart",     def: "gradually stop being close friends" },
  { verb: "drop in",         def: "visit without a prior arrangement" },
  { verb: "drop off",        def: "fall asleep or decrease" },
  { verb: "drop out",        def: "quit a course or activity" },
  { verb: "ease off",        def: "reduce or become less intense" },
  { verb: "eat out",         def: "eat at a restaurant instead of home" },
  { verb: "eat up",          def: "eat all of something" },
  { verb: "end up",          def: "reach a situation or place unplanned" },
  { verb: "face up to",      def: "accept an unpleasant truth or situation" },
  { verb: "fall apart",      def: "break into pieces or fail completely" },
  { verb: "fall behind",     def: "fail to keep pace with others" },
  { verb: "fall for",        def: "be attracted to or deceived by someone" },
  { verb: "fall out",        def: "quarrel and stop being friendly" },
  { verb: "fall through",    def: "fail to happen or be completed" },
  { verb: "figure out",      def: "find the answer or solution to something" },
  { verb: "fill in",         def: "complete a form" },
  { verb: "fill up",         def: "fill something completely" },
  { verb: "find out",        def: "discover information" },
  { verb: "finish off",      def: "complete or consume entirely" },
  { verb: "fit in",          def: "feel accepted in a group" },
  { verb: "fix up",          def: "arrange or repair something" },
  { verb: "flare up",        def: "suddenly start or get worse" },
  { verb: "follow through",  def: "complete what you have started" },
  { verb: "follow up",       def: "check or add to an earlier action" },
  { verb: "freak out",       def: "become very disturbed or panicked" },
  { verb: "get along",       def: "have a good relationship with someone" },
  { verb: "get away",        def: "escape from a place" },
  { verb: "get away with",   def: "avoid punishment for something wrong" },
  { verb: "get back",        def: "return to a place" },
  { verb: "get by",          def: "manage with the money or resources available" },
  { verb: "get down to",     def: "start working seriously on something" },
  { verb: "get in",          def: "enter a vehicle or arrive" },
  { verb: "get off",         def: "escape punishment or leave a vehicle" },
  { verb: "get on",          def: "continue doing something or make progress" },
  { verb: "get out",         def: "escape from or leave a place" },
  { verb: "get out of",      def: "avoid a duty or responsibility" },
  { verb: "get over",        def: "recover from an illness or difficulty" },
  { verb: "get round to",    def: "finally find time to do something" },
  { verb: "get through",     def: "contact someone or finish something" },
  { verb: "get together",    def: "meet socially" },
  { verb: "get up",          def: "get out of bed" },
  { verb: "give away",       def: "reveal a secret unintentionally" },
  { verb: "give back",       def: "return something to its owner" },
  { verb: "give in",         def: "stop resisting or surrender" },
  { verb: "give out",        def: "distribute to many people" },
  { verb: "give up",         def: "stop trying and admit defeat" },
  { verb: "go ahead",        def: "proceed with something" },
  { verb: "go along with",   def: "accept or agree to something" },
  { verb: "go away",         def: "leave a place or disappear" },
  { verb: "go back on",      def: "break a promise" },
  { verb: "go down",         def: "decrease or sink" },
  { verb: "go off",          def: "explode or start ringing" },
  { verb: "go on",           def: "continue or happen" },
  { verb: "go out",          def: "leave home or stop burning" },
  { verb: "go over",         def: "review or look at something again" },
  { verb: "go through",      def: "experience something difficult" },
  { verb: "go without",      def: "manage without having something" },
  { verb: "grow up",         def: "mature and become an adult" },
  { verb: "hand in",         def: "submit work for assessment" },
  { verb: "hand out",        def: "distribute to a group of people" },
  { verb: "hand over",       def: "give something to someone else" },
  { verb: "hang on",         def: "wait or hold tightly" },
  { verb: "hang out",        def: "spend time relaxing socially" },
  { verb: "hang up",         def: "end a phone call" },
  { verb: "head for",        def: "move or travel toward something" },
  { verb: "head off",        def: "prevent something bad from happening" },
  { verb: "hear from",       def: "receive contact from someone" },
  { verb: "help out",        def: "give assistance to someone" },
  { verb: "hit on",          def: "suddenly have a good idea" },
  { verb: "hold back",       def: "prevent progress or hide emotions" },
  { verb: "hold on",         def: "wait or hold tightly" },
  { verb: "hold out",        def: "resist pressure or last" },
  { verb: "hold up",         def: "delay something or rob with threats" },
  { verb: "iron out",        def: "resolve small problems or irregularities" },
  { verb: "join in",         def: "participate in an activity" },
  { verb: "jump at",         def: "accept an opportunity eagerly" },
  { verb: "keep at",         def: "continue doing something difficult" },
  { verb: "keep on",         def: "continue doing something" },
  { verb: "keep up",         def: "maintain the same speed or level as others" },
  { verb: "keep up with",    def: "stay current or maintain pace with someone" },
  { verb: "knock down",      def: "demolish or hit and injure someone" },
  { verb: "knock off",       def: "finish work for the day" },
  { verb: "knock out",       def: "make someone unconscious" },
  { verb: "lay off",         def: "dismiss an employee from their job" },
  { verb: "lay on",          def: "organize or provide something for others" },
  { verb: "lead to",         def: "result in something" },
  { verb: "leave out",       def: "not include someone or something" },
  { verb: "let down",        def: "fail to meet someone's expectations" },
  { verb: "let off",         def: "not punish someone" },
  { verb: "let out",         def: "allow someone or something to leave" },
  { verb: "light up",        def: "illuminate or brighten" },
  { verb: "log in",          def: "enter a username and password to access a system" },
  { verb: "log out",         def: "exit a computer system" },
  { verb: "look after",      def: "take care of someone or something" },
  { verb: "look forward to", def: "anticipate something pleasant with excitement" },
  { verb: "look into",       def: "investigate or research something" },
  { verb: "look out",        def: "be careful or watchful" },
  { verb: "look out for",    def: "watch carefully for something or someone" },
  { verb: "look up",         def: "search for information in a reference" },
  { verb: "look up to",      def: "respect and admire someone" },
  { verb: "make for",        def: "head in a certain direction" },
  { verb: "make out",        def: "be able to see or hear something" },
  { verb: "make up",         def: "invent a story or end a disagreement" },
  { verb: "make up for",     def: "compensate for something" },
  { verb: "miss out",        def: "fail to experience something enjoyable" },
  { verb: "miss out on",     def: "lose a chance to gain or experience something" },
  { verb: "mix up",          def: "confuse two people or things" },
  { verb: "move in",         def: "start living in a new place" },
  { verb: "move on",         def: "change to a new subject or stage in life" },
  { verb: "move out",        def: "leave a place where you have been living" },
  { verb: "narrow down",     def: "reduce options to make choosing easier" },
  { verb: "nod off",         def: "fall asleep, often unintentionally" },
  { verb: "opt for",         def: "choose one thing over another" },
  { verb: "opt out",         def: "choose not to be part of something" },
  { verb: "own up",          def: "confess to something you have done wrong" },
  { verb: "pack in",         def: "stop doing something or quit" },
  { verb: "pass away",       def: "die" },
  { verb: "pass on",         def: "transmit or give something to someone else" },
  { verb: "pass out",        def: "faint or lose consciousness" },
  { verb: "pay back",        def: "repay borrowed money" },
  { verb: "pay off",         def: "produce a successful result" },
  { verb: "pick out",        def: "choose one from a group" },
  { verb: "pick up",         def: "collect, improve, or learn quickly" },
  { verb: "pick up on",      def: "notice something others may have missed" },
  { verb: "pile up",         def: "accumulate in large quantities" },
  { verb: "point out",       def: "draw attention to something" },
  { verb: "pull off",        def: "succeed in doing something difficult" },
  { verb: "pull out",        def: "withdraw from something" },
  { verb: "pull through",    def: "recover from a serious illness or problem" },
  { verb: "put away",        def: "return something to its correct place" },
  { verb: "put down",        def: "put something on a surface or end an animal's life" },
  { verb: "put off",         def: "postpone or cause someone to dislike" },
  { verb: "put on",          def: "start wearing or gain weight" },
  { verb: "put out",         def: "extinguish a fire or light" },
  { verb: "put up with",     def: "tolerate something unpleasant" },
  { verb: "ring back",       def: "return a phone call" },
  { verb: "ring up",         def: "telephone someone" },
  { verb: "rule out",        def: "exclude a possibility" },
  { verb: "run across",      def: "meet or find something by accident" },
  { verb: "run after",       def: "chase or pursue someone" },
  { verb: "run away",        def: "escape from a place or person" },
  { verb: "run into",        def: "meet someone by accident" },
  { verb: "run out of",      def: "have no more of something left" },
  { verb: "run over",        def: "hit someone with a vehicle" },
  { verb: "run through",     def: "practice or explain something quickly" },
  { verb: "save up",         def: "save money for a specific purpose" },
  { verb: "see off",         def: "go somewhere to say goodbye to someone" },
  { verb: "see through",     def: "realize someone is lying or deceiving" },
  { verb: "see to",          def: "deal with or arrange something" },
  { verb: "sell out",        def: "have no more of a product left" },
  { verb: "send off",        def: "mail a letter or expel a sports player" },
  { verb: "set back",        def: "delay progress or cost money" },
  { verb: "set off",         def: "start a journey or trigger something" },
  { verb: "set out",         def: "begin a journey or explain in detail" },
  { verb: "set up",          def: "start a company or arrange something" },
  { verb: "settle down",     def: "start a stable and routine life" },
  { verb: "settle for",      def: "accept something less than you wanted" },
  { verb: "show off",        def: "behave to attract attention or impress" },
  { verb: "show up",         def: "arrive or attend an event" },
  { verb: "shut down",       def: "close a business or turn off a machine" },
  { verb: "shut up",         def: "stop talking" },
  { verb: "sign up",         def: "register or agree to do something" },
  { verb: "slow down",       def: "reduce speed" },
  { verb: "sort out",        def: "resolve a problem or organize something" },
  { verb: "speak out",       def: "talk openly and freely about something" },
  { verb: "speed up",        def: "move or work faster" },
  { verb: "split up",        def: "end a romantic relationship" },
  { verb: "stand by",        def: "support someone or be ready and waiting" },
  { verb: "stand for",       def: "represent or tolerate something" },
  { verb: "stand out",       def: "be noticeably different or exceptional" },
  { verb: "stand up for",    def: "defend or support someone or something" },
  { verb: "stand up to",     def: "keep your principles when challenged" },
  { verb: "start up",        def: "open a business or start an engine" },
  { verb: "stay in",         def: "remain at home and not go out" },
  { verb: "stay up",         def: "go to bed later than usual" },
  { verb: "stick to",        def: "not change a plan, decision, or habit" },
  { verb: "stop off",        def: "make a brief stop during a journey" },
  { verb: "take after",      def: "resemble a relative in looks or behavior" },
  { verb: "take in",         def: "absorb information or deceive someone" },
  { verb: "take off",        def: "when a plane leaves the ground" },
  { verb: "take on",         def: "accept a responsibility or employ someone" },
  { verb: "take out",        def: "take someone somewhere as a social occasion" },
  { verb: "take over",       def: "assume control of something" },
  { verb: "take up",         def: "start a new hobby or occupy space or time" },
  { verb: "talk over",       def: "discuss something with someone" },
  { verb: "tell off",        def: "scold or rebuke someone" },
  { verb: "think over",      def: "consider something carefully before deciding" },
  { verb: "throw away",      def: "discard something you no longer need" },
  { verb: "throw up",        def: "vomit" },
  { verb: "tidy up",         def: "put things back in their correct places" },
  { verb: "tie up",          def: "fasten securely or occupy someone completely" },
  { verb: "tone down",       def: "make something less extreme or offensive" },
  { verb: "track down",      def: "find something after a long search" },
  { verb: "turn around",     def: "reverse a bad situation to a good one" },
  { verb: "turn down",       def: "reject an offer or reduce volume" },
  { verb: "turn into",       def: "become something different" },
  { verb: "turn off",        def: "stop a machine by switching it off" },
  { verb: "turn on",         def: "start a machine by switching it on" },
  { verb: "turn out",        def: "happen or develop in a certain way" },
  { verb: "turn over",       def: "hand something to authorities" },
  { verb: "turn up",         def: "arrive or appear unexpectedly" },
  { verb: "use up",          def: "consume all of something" },
  { verb: "wake up",         def: "stop sleeping" },
  { verb: "walk out",        def: "leave a place in protest" },
  { verb: "warm up",         def: "exercise gently before a sport" },
  { verb: "watch out",       def: "be careful of a danger" },
  { verb: "wear off",        def: "gradually stop having an effect" },
  { verb: "wear out",        def: "use something so much it stops working" },
  { verb: "wind up",         def: "end up in a situation or close a company" },
  { verb: "wipe out",        def: "destroy or make someone very tired" },
  { verb: "work out",        def: "find a solution or end successfully" },
  { verb: "wrap up",         def: "finish something or dress warmly" },
  { verb: "write off",       def: "destroy a vehicle or accept something as lost" },
  { verb: "zone out",        def: "stop paying attention" },
];

const ROUND_SIZE    = 5;
const STORAGE_KEY   = 'verbitup-mistakes';
const SEEN_KEY      = 'verbitup-seen';

// ── Theme toggle ──────────────────────────────────────────────────────────────

(function () {
  const btn = document.getElementById('theme-toggle');

  function applyTheme(isLight) {
    if (isLight) {
      document.documentElement.dataset.theme = 'light';
      btn.textContent = '🌙';
      btn.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      delete document.documentElement.dataset.theme;
      btn.textContent = '☀️';
      btn.setAttribute('aria-label', 'Switch to light theme');
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }

  btn.addEventListener('click', () => {
    applyTheme(document.documentElement.dataset.theme !== 'light');
  });

  if (document.documentElement.dataset.theme === 'light') {
    btn.textContent = '🌙';
    btn.setAttribute('aria-label', 'Switch to dark theme');
  }
})();

let matched        = 0;
let selectedVerbId = null;
let draggedVerbId  = null;
let selectedTime   = 0;
let timeLeft       = 0;
let timerInterval  = null;
let roundData      = [];
let practiceMode   = false;

// ── Mistake tracking ──────────────────────────────────────────────────────────

const loadMistakes = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
const saveMistakes = obj => localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));

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

function recordMistake(verb) {
  const m = loadMistakes();
  m[verb] = (m[verb] || 0) + 1;
  saveMistakes(m);
  updateWeakSection();
}

function recordCorrect(verb) {
  const m = loadMistakes();
  if (!m[verb]) return;
  m[verb]--;
  if (m[verb] <= 0) delete m[verb];
  saveMistakes(m);
  updateWeakSection();
}

function getWeakVerbs() {
  const m = loadMistakes();
  return DATA.filter(item => m[item.verb] > 0)
             .sort((a, b) => m[b.verb] - m[a.verb]);
}

function updateWeakSection() {
  const weak = getWeakVerbs();
  const section = document.getElementById('weak-section');
  if (weak.length < 2) {
    section.setAttribute('hidden', '');
    return;
  }
  section.removeAttribute('hidden');
  document.getElementById('weak-list').textContent =
    weak.map(item => item.verb).join(', ');
}

// ── Sound effects ─────────────────────────────────────────────────────────────

let sfxEnabled = localStorage.getItem('verbitup-sfx') !== '0';

function setSfx(val) {
  sfxEnabled = val;
  localStorage.setItem('verbitup-sfx', val ? '1' : '0');
  const btn = document.getElementById('sound-toggle');
  btn.setAttribute('data-sfx', val ? 'on' : 'off');
  btn.setAttribute('aria-label', val ? 'Sound on' : 'Sound off');
}

document.getElementById('sound-toggle').addEventListener('click', () => setSfx(!sfxEnabled));

if (!sfxEnabled) setSfx(false);

let audioCtx = null;

function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone({ freq, type = 'sine', duration = 0.15, gain = 0.25, delay = 0 }) {
  const ctx = getCtx();
  const osc  = ctx.createOscillator();
  const vol  = ctx.createGain();
  osc.connect(vol);
  vol.connect(ctx.destination);
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
  vol.gain.setValueAtTime(gain, ctx.currentTime + delay);
  vol.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
  osc.start(ctx.currentTime + delay);
  osc.stop(ctx.currentTime + delay + duration + 0.01);
}

const soundCorrect = () => {
  if (!sfxEnabled) return;
  playTone({ freq: 600, duration: 0.1 });
  playTone({ freq: 800, duration: 0.15, delay: 0.09 });
};
const soundWrong = () => {
  if (!sfxEnabled) return;
  playTone({ freq: 180, type: 'square', duration: 0.18, gain: 0.15 });
};
const soundWin = () => {
  if (!sfxEnabled) return;
  [523, 659, 784, 1047].forEach((freq, i) =>
    playTone({ freq, duration: 0.18, delay: i * 0.11 })
  );
};
const soundTimeUp = () => {
  if (!sfxEnabled) return;
  playTone({ freq: 440, duration: 0.25 });
  playTone({ freq: 330, duration: 0.35, delay: 0.22 });
};

// ── Utilities ─────────────────────────────────────────────────────────────────

const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const formatTime = s =>
  s < 60 ? `${s}s` : `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

// ── Screen management ─────────────────────────────────────────────────────────

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector('header').classList.toggle('header-hidden', id === 'screen-start');
}

// ── Modal helpers ─────────────────────────────────────────────────────────────

function openModal(overlayEl, { firstFocus, trigger } = {}) {
  overlayEl.removeAttribute('hidden');
  const toFocus = firstFocus ||
    overlayEl.querySelector('button:not([disabled]), input, [tabindex]:not([tabindex="-1"])');
  if (toFocus) toFocus.focus();
  overlayEl._trigger = trigger || null;

  function trapKeyDown(e) {
    if (e.key === 'Escape') { closeModal(overlayEl); return; }
    if (e.key !== 'Tab') return;
    const focusable = [...overlayEl.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )];
    if (focusable.length < 2) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  }

  overlayEl._trapKeyDown = trapKeyDown;
  overlayEl.addEventListener('keydown', trapKeyDown);
}

function closeModal(overlayEl, returnFocus) {
  overlayEl.setAttribute('hidden', '');
  if (overlayEl._trapKeyDown) {
    overlayEl.removeEventListener('keydown', overlayEl._trapKeyDown);
    delete overlayEl._trapKeyDown;
  }
  const target = returnFocus !== undefined ? returnFocus : overlayEl._trigger;
  if (target) target.focus();
  delete overlayEl._trigger;
}

// ── Start screen ──────────────────────────────────────────────────────────────

document.querySelector('header').classList.add('header-hidden');
updateWeakSection();
updateProgress();

document.querySelectorAll('.time-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.time-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    selectedTime = parseInt(btn.dataset.time, 10);
  });
});

const grammarOverlay = document.getElementById('grammar-overlay');
document.getElementById('grammar-btn').addEventListener('click', () => {
  openModal(grammarOverlay, { trigger: document.getElementById('grammar-btn') });
});
document.getElementById('grammar-close-btn').addEventListener('click', () => {
  closeModal(grammarOverlay);
});
grammarOverlay.addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal(grammarOverlay);
});

// ── Verb list modal ───────────────────────────────────────────────────────────

function buildVerbTable(filter) {
  const tbody = document.getElementById('verb-table-body');
  const q = filter ? filter.toLowerCase() : '';
  const rows = q ? DATA.filter(item => item.verb.includes(q) || item.def.includes(q)) : DATA;
  tbody.innerHTML = '';
  rows.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${item.verb}</td><td>${item.def}</td>`;
    tbody.appendChild(tr);
  });
}

const verbListOverlay = document.getElementById('verb-list-overlay');
document.getElementById('verb-list-btn').addEventListener('click', () => {
  document.getElementById('verb-search').value = '';
  buildVerbTable('');
  openModal(verbListOverlay, {
    firstFocus: document.getElementById('verb-search'),
    trigger: document.getElementById('verb-list-btn'),
  });
});

document.getElementById('verb-list-close-btn').addEventListener('click', () => {
  closeModal(verbListOverlay);
});

verbListOverlay.addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal(verbListOverlay);
});

document.getElementById('verb-search').addEventListener('input', e => {
  buildVerbTable(e.target.value);
});

document.getElementById('start-btn').addEventListener('click', () => {
  practiceMode = false;
  showScreen('screen-game');
  startRound();
});

document.getElementById('practice-btn').addEventListener('click', () => {
  practiceMode = true;
  showScreen('screen-game');
  startRound();
});

document.getElementById('weak-clear-btn').addEventListener('click', () => {
  saveMistakes({});
  updateWeakSection();
});

// ── Navigation ────────────────────────────────────────────────────────────────

function goHome() {
  clearInterval(timerInterval);
  showScreen('screen-start');
}

document.getElementById('home-btn').addEventListener('click', goHome);

// ── Modal ─────────────────────────────────────────────────────────────────────

const genericOverlay = document.getElementById('modal-overlay');

function showModal({ title, titleColor, borderColor, message, actions }) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-title').style.color = `var(--${titleColor})`;
  document.getElementById('modal-msg').textContent   = message;
  document.getElementById('modal').style.borderColor = `var(--${borderColor})`;

  const actionsEl = document.getElementById('modal-actions');
  actionsEl.innerHTML = '';
  let firstBtn = null;
  actions.forEach(({ label, primary, onClick }) => {
    const btn = document.createElement('button');
    btn.className = `btn ${primary ? 'btn-primary' : 'btn-outline'}`;
    btn.textContent = label;
    btn.addEventListener('click', onClick);
    actionsEl.appendChild(btn);
    if (!firstBtn) firstBtn = btn;
  });

  openModal(genericOverlay, { firstFocus: firstBtn });
}

function hideModal() {
  closeModal(genericOverlay);
}

genericOverlay.addEventListener('click', e => {
  if (e.target === e.currentTarget) hideModal();
});

// ── Round summary ─────────────────────────────────────────────────────────────

const summaryOverlay = document.getElementById('summary-overlay');

function showSummary() {
  const meta = selectedTime > 0
    ? `All ${roundData.length} verbs matched in ${selectedTime - timeLeft}s`
    : `All ${roundData.length} verbs matched`;
  document.getElementById('summary-meta').textContent = meta;

  const list = document.getElementById('summary-list');
  list.innerHTML = '';
  roundData.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="s-verb">${item.verb}</span><span class="s-def">${item.def}</span>`;
    list.appendChild(li);
  });

  const nextBtn = document.getElementById('summary-next-btn');
  nextBtn.hidden = practiceMode && getWeakVerbs().length < 2;

  openModal(summaryOverlay, {
    firstFocus: nextBtn.hidden
      ? document.getElementById('summary-home-btn')
      : nextBtn,
  });
}

function hideSummary(returnFocus) {
  closeModal(summaryOverlay, returnFocus);
}

document.getElementById('summary-close-btn').addEventListener('click', () => {
  hideSummary(document.getElementById('home-btn'));
});

document.getElementById('summary-next-btn').addEventListener('click', () => {
  hideSummary(null);
  startRound();
});

document.getElementById('summary-home-btn').addEventListener('click', () => {
  hideSummary(null);
  goHome();
  document.getElementById('start-btn').focus();
});

// ── Round management ──────────────────────────────────────────────────────────

function startRound(sameVerbs = false) {
  clearInterval(timerInterval);
  matched        = 0;
  selectedVerbId = null;
  draggedVerbId  = null;

  if (!sameVerbs) {
    const pool = practiceMode ? getWeakVerbs() : DATA;
    roundData = shuffle(pool).slice(0, ROUND_SIZE);
    markSeen(roundData);
  }

  document.getElementById('score').textContent = '0';
  document.getElementById('total').textContent = roundData.length;
  hideModal();
  hideSummary();

  const verbsList = document.getElementById('verbs-list');
  const defsList  = document.getElementById('defs-list');
  verbsList.innerHTML = '';
  defsList.innerHTML  = '';

  shuffle(roundData).forEach(item => verbsList.appendChild(makeVerbCard(item)));
  shuffle(roundData).forEach(item => defsList.appendChild(makeDefCard(item)));

  startTimer();

  const firstCard = verbsList.querySelector('.verb-card');
  if (firstCard) firstCard.focus();
}

// ── Timer ─────────────────────────────────────────────────────────────────────

function timerClass() {
  if (timeLeft > selectedTime * 2 / 3) return 'high';
  if (timeLeft > selectedTime * 1 / 3) return 'medium';
  return 'low';
}

function startTimer() {
  const el = document.getElementById('timer-display');
  if (selectedTime === 0) {
    el.textContent = '';
    el.className = 'timer-display';
    return;
  }
  timeLeft = selectedTime;
  el.textContent = formatTime(timeLeft);
  el.className = `timer-display ${timerClass()}`;
  timerInterval = setInterval(tick, 1000);
}

function tick() {
  timeLeft--;
  const el = document.getElementById('timer-display');
  el.textContent = formatTime(timeLeft);
  el.className = `timer-display ${timerClass()}`;
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    handleTimeUp();
  }
}

function handleTimeUp() {
  soundTimeUp();
  document.querySelectorAll('.verb-card:not(.matched)').forEach(c => {
    c.classList.add('frozen');
    c.tabIndex = -1;
  });
  document.querySelectorAll('.def-card:not(.matched)').forEach(c => {
    c.classList.add('frozen');
    c.tabIndex = -1;
  });
  showModal({
    title: "Time's up!",
    titleColor: 'red',
    borderColor: 'red',
    message: `You matched ${matched} of ${roundData.length} verbs.`,
    actions: [
      { label: 'Try Again', primary: true,  onClick: () => { hideModal(); startRound(true); } },
      { label: 'Home',      primary: false, onClick: () => { hideModal(); goHome(); document.getElementById('start-btn').focus(); } },
    ],
  });
}

// ── Card factories ────────────────────────────────────────────────────────────

function makeVerbCard(item) {
  const card = document.createElement('button');
  card.type        = 'button';
  card.className   = 'card verb-card';
  card.textContent = item.verb;
  card.dataset.id  = item.verb;
  card.draggable   = true;
  card.setAttribute('aria-pressed', 'false');

  card.addEventListener('dragstart', e => {
    draggedVerbId = item.verb;
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });
  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
    draggedVerbId = null;
  });

  card.addEventListener('click', () => {
    if (card.classList.contains('matched') || card.classList.contains('frozen')) return;
    if (selectedVerbId === item.verb) {
      card.classList.remove('selected');
      card.setAttribute('aria-pressed', 'false');
      selectedVerbId = null;
      return;
    }
    document.querySelectorAll('.verb-card.selected').forEach(c => {
      c.classList.remove('selected');
      c.setAttribute('aria-pressed', 'false');
    });
    card.classList.add('selected');
    card.setAttribute('aria-pressed', 'true');
    selectedVerbId = item.verb;
  });

  return card;
}

function makeDefCard(item) {
  const card = document.createElement('button');
  card.type        = 'button';
  card.className   = 'card def-card';
  card.textContent = item.def;
  card.dataset.id  = item.verb;

  card.addEventListener('dragover', e => {
    e.preventDefault();
    if (!card.classList.contains('matched') && !card.classList.contains('frozen'))
      card.classList.add('drag-over');
  });
  card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
  card.addEventListener('drop', e => {
    e.preventDefault();
    card.classList.remove('drag-over');
    if (card.classList.contains('matched') || card.classList.contains('frozen') || !draggedVerbId) return;
    attemptMatch(draggedVerbId, item.verb, card);
  });

  card.addEventListener('click', () => {
    if (card.classList.contains('matched') || card.classList.contains('frozen') || !selectedVerbId) return;
    attemptMatch(selectedVerbId, item.verb, card);
  });

  return card;
}

// ── Match logic ───────────────────────────────────────────────────────────────

function attemptMatch(verbId, defId, defCard) {
  const statusEl = document.getElementById('match-status');
  if (verbId === defId) {
    const verbCard = document.querySelector(`.verb-card[data-id="${verbId}"]`);
    if (verbCard) {
      verbCard.classList.remove('selected');
      verbCard.classList.add('matched');
      verbCard.setAttribute('aria-pressed', 'false');
      verbCard.draggable = false;
      verbCard.tabIndex  = -1;
    }
    defCard.classList.add('matched');
    defCard.tabIndex = -1;
    selectedVerbId = null;
    recordCorrect(verbId);
    soundCorrect();
    document.getElementById('score').textContent = ++matched;
    statusEl.textContent = `Correct! Score: ${matched} of ${roundData.length}.`;

    if (matched === roundData.length) {
      clearInterval(timerInterval);
      soundWin();
      setTimeout(showSummary, 400);
    }
  } else {
    recordMistake(verbId);
    soundWrong();
    statusEl.textContent = 'Incorrect, try again.';
    defCard.classList.add('wrong');
    defCard.addEventListener('animationend', () => defCard.classList.remove('wrong'), { once: true });
  }
}
