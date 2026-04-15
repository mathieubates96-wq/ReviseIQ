/* =============================================
   quiz.js — ReviseIQ Quiz Engine
   Calls /api/quiz (Vercel serverless) which
   proxies Anthropic so the key stays server-side.
   ============================================= */

// ─────────────────────────────────────────────
// Topic catalogue per subject
// ─────────────────────────────────────────────
const TOPICS = {
  economics: [
    'Supply & Demand',
    'Market Structures & Competition',
    'National Income & GDP',
    'Inflation & Deflation',
    'Unemployment',
    'International Trade & Balance of Payments',
    'Money, Banking & Interest Rates',
    'Government & Fiscal Policy',
    'Economic Growth & Development',
    'Irish Economy & EU',
    'Price Elasticity',
    'Consumer & Producer Surplus',
  ],
  maths: [
    'Calculus — Differentiation',
    'Calculus — Integration',
    'Algebra & Functions',
    'Trigonometry',
    'Sequences & Series',
    'Complex Numbers',
    'Probability & Statistics',
    'Coordinate Geometry',
    'Geometry & Proofs',
    'Financial Maths',
  ],
  english: [
    'Prescribed Poetry',
    'Unseen Poetry & Language',
    'Drama (Shakespeare)',
    'Novel / Prose Text',
    'Functional Writing',
    'Composition & Essay',
    'Comprehension',
  ],
  irish: [
    'Léamhthuiscint (Reading Comprehension)',
    'Filíocht (Poetry)',
    'Prós (Prose)',
    'Scríobh (Writing)',
    'Gramadach (Grammar)',
    'Drámaíocht (Drama)',
  ],
  biology: [
    'Cell Biology & Organelles',
    'Genetics & DNA',
    'Ecology & Environment',
    'Human Digestive System',
    'Photosynthesis & Respiration',
    'Human Nervous System',
    'Evolution & Natural Selection',
    'Biotechnology & Microbiology',
    'Plant Biology',
    'Human Circulatory System',
  ],
  chemistry: [
    'Atomic Structure & Periodic Table',
    'Organic Chemistry',
    'Acids, Bases & pH',
    'Chemical Equilibrium',
    'Thermodynamics & Energy',
    'Electrochemistry',
    'Water Chemistry',
    'Rates of Reaction',
  ],
  history: [
    'The 1916 Easter Rising',
    'Irish War of Independence & Civil War',
    'Ireland 1922–1949',
    'Ireland 1960s–1990s',
    'Nazi Germany',
    'World War II',
    'The Cold War',
    'USA 1920s–1960s',
    'European Integration',
  ],
  geography: [
    'Plate Tectonics & Volcanoes',
    'Rivers & Drainage Basins',
    'Glaciation',
    'Coastal Processes',
    'Climate & Weather Patterns',
    'Population & Migration',
    'Urbanisation & Settlement',
    'Economic Development & HDI',
    'Irish Physical Geography',
  ],
  business: [
    'Enterprise & Entrepreneurship',
    'Business Finance & Accounts',
    'Management & Leadership',
    'Marketing & Consumer',
    'Insurance',
    'Industrial Relations & Employment Law',
    'International Trade',
    'Household & Personal Finance',
  ],
  french: [
    'Grammar — Tenses & Verbs',
    'Grammar — Sentence Structure',
    'Vocabulary — Everyday Life',
    'Vocabulary — Society & Environment',
    'Reading Comprehension',
  ],
  spanish: [
    'Grammar — Tenses & Verbs',
    'Grammar — Sentence Structure',
    'Vocabulary — Everyday Life',
    'Vocabulary — Society & Culture',
    'Reading Comprehension',
  ],
  physics: [
    'Mechanics — Forces & Motion',
    'Electricity & Circuits',
    'Waves & Optics',
    'Heat & Thermodynamics',
    'Modern Physics & Radioactivity',
    'Fields — Gravitational & Magnetic',
    'Sound',
  ],
  accounting: [
    'Final Accounts — Sole Trader',
    'Company Final Accounts',
    'Cash Flow Statements',
    'Budgeting & Variance Analysis',
    'Interpretation of Accounts',
    'Manufacturing Accounts',
    'Club Accounts',
  ],
};

// ─────────────────────────────────────────────
// State
// ─────────────────────────────────────────────
let state = {
  subject:    'economics',
  topic:      '',
  level:      'higher',
  count:      5,
  timerSecs:  0,
  questions:  [],
  current:    0,
  answers:    {},
  score:      0,
};

let timerInterval  = null;
let timerRemaining = 0;

// ─────────────────────────────────────────────
// Screen helpers
// ─────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.quiz-screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// ─────────────────────────────────────────────
// Populate topic dropdown from subject
// ─────────────────────────────────────────────
function populateTopics(subject) {
  const sel    = document.getElementById('selTopic');
  const topics = TOPICS[subject] || [];
  sel.innerHTML = topics.map(t => `<option value="${t}">${t}</option>`).join('');
}

// ─────────────────────────────────────────────
// Call /api/quiz serverless function
// ─────────────────────────────────────────────
async function generateQuestions(subject, topic, level, count) {
  const res = await fetch('/api/quiz', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ subject, topic, level, count }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || `Server error ${res.status}`);
  }

  if (!Array.isArray(data?.questions) || data.questions.length === 0) {
    throw new Error('Unexpected response from server.');
  }

  return data.questions;
}

// ─────────────────────────────────────────────
// Timer
// ─────────────────────────────────────────────
function startQuestionTimer(seconds) {
  clearQuestionTimer();
  if (!seconds || seconds <= 0) return;

  timerRemaining = seconds;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timerRemaining--;
    updateTimerDisplay();
    if (timerRemaining <= 0) {
      clearQuestionTimer();
      timeOutQuestion();
    }
  }, 1000);
}

function clearQuestionTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  const badge = document.getElementById('qTimerBadge');
  if (badge) badge.classList.add('hidden');
}

function updateTimerDisplay() {
  const badge = document.getElementById('qTimerBadge');
  if (!badge) return;
  badge.classList.remove('hidden', 'timer-badge--low', 'timer-badge--critical');
  badge.textContent = timerRemaining;
  if (timerRemaining <= 5)       badge.classList.add('timer-badge--critical');
  else if (timerRemaining <= 15) badge.classList.add('timer-badge--low');
}

function timeOutQuestion() {
  const idx = state.current;
  if (state.answers[idx] !== undefined) return;
  state.answers[idx] = -1; // -1 = timed out

  const q    = state.questions[idx];
  const list = document.getElementById('optionsList');
  list.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    if (parseInt(btn.dataset.index) === q.correct) btn.classList.add('reveal');
  });

  const expBox = document.getElementById('explanationBox');
  expBox.classList.remove('hidden', 'is-correct', 'is-wrong');
  expBox.classList.add('is-wrong');
  document.getElementById('explanationIcon').textContent    = '⏱️';
  document.getElementById('explanationVerdict').textContent = "Time's up!";
  document.getElementById('explanationText').textContent    = q.explanation;
  document.getElementById('btnNext').disabled = false;
  document.getElementById('liveScore').textContent =
    `Score: ${state.score} / ${state.questions.length}`;
}

// ─────────────────────────────────────────────
// Render one question
// ─────────────────────────────────────────────
const LETTERS = ['A', 'B', 'C', 'D'];

function renderQuestion(index) {
  clearQuestionTimer();

  const q     = state.questions[index];
  const total = state.questions.length;
  const pct   = (index / total) * 100;

  document.getElementById('progressFill').style.width   = `${pct}%`;
  document.getElementById('questionCounter').textContent = `Question ${index + 1} of ${total}`;
  document.getElementById('liveScore').textContent       = `Score: ${state.score} / ${total}`;
  document.getElementById('qTopicBadge').textContent     = state.topic;
  document.getElementById('qLevelBadge').textContent     =
    state.level === 'higher' ? 'Higher Level' : 'Ordinary Level';

  document.getElementById('questionText').textContent = q.question;

  const list = document.getElementById('optionsList');
  list.innerHTML = q.options.map((opt, i) => `
    <button class="option-btn" data-index="${i}">
      <span class="option-letter">${LETTERS[i]}</span>
      <span>${opt}</span>
    </button>
  `).join('');

  const expBox = document.getElementById('explanationBox');
  expBox.classList.add('hidden');
  expBox.classList.remove('is-correct', 'is-wrong');

  const prev = state.answers[index];
  if (prev !== undefined) {
    if (prev === -1) {
      // Timed out
      list.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        if (parseInt(btn.dataset.index) === q.correct) btn.classList.add('reveal');
      });
      expBox.classList.remove('hidden');
      expBox.classList.add('is-wrong');
      document.getElementById('explanationIcon').textContent    = '⏱️';
      document.getElementById('explanationVerdict').textContent = "Time's up!";
      document.getElementById('explanationText').textContent    = q.explanation;
    } else {
      applyAnswerUI(index, prev);
    }
  } else {
    list.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(index, parseInt(btn.dataset.index)));
    });
    startQuestionTimer(state.timerSecs);
  }

  document.getElementById('btnPrev').disabled = index === 0;
  const isLast  = index === total - 1;
  const btnNext = document.getElementById('btnNext');
  btnNext.textContent = isLast ? 'See Results →' : 'Next Question →';
  btnNext.disabled    = prev === undefined;
}

// ─────────────────────────────────────────────
// Handle an answer click
// ─────────────────────────────────────────────
function handleAnswer(qIndex, chosenIndex) {
  if (state.answers[qIndex] !== undefined) return;
  clearQuestionTimer();

  const q = state.questions[qIndex];
  state.answers[qIndex] = chosenIndex;
  if (chosenIndex === q.correct) state.score++;

  document.getElementById('liveScore').textContent =
    `Score: ${state.score} / ${state.questions.length}`;

  applyAnswerUI(qIndex, chosenIndex);
}

function applyAnswerUI(qIndex, chosenIndex) {
  const q    = state.questions[qIndex];
  const list = document.getElementById('optionsList');

  list.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    const i = parseInt(btn.dataset.index);
    if      (i === q.correct && i === chosenIndex) btn.classList.add('correct');
    else if (i === chosenIndex && i !== q.correct) btn.classList.add('wrong');
    else if (i === q.correct)                      btn.classList.add('reveal');
  });

  const isCorrect = chosenIndex === q.correct;
  const expBox    = document.getElementById('explanationBox');
  expBox.classList.remove('hidden', 'is-correct', 'is-wrong');
  expBox.classList.add(isCorrect ? 'is-correct' : 'is-wrong');

  document.getElementById('explanationIcon').textContent    = isCorrect ? '✅' : '❌';
  document.getElementById('explanationVerdict').textContent = isCorrect ? 'Correct!' : 'Incorrect';
  document.getElementById('explanationText').textContent    = q.explanation;
  document.getElementById('btnNext').disabled = false;
}

// ─────────────────────────────────────────────
// Render results
// ─────────────────────────────────────────────
function renderResults() {
  clearQuestionTimer();
  showScreen('screenResults');

  const total = state.questions.length;
  const score = state.score;
  const pct   = score / total;

  const CIRCUMFERENCE = 264;
  document.getElementById('scoreArc').style.strokeDashoffset = CIRCUMFERENCE - pct * CIRCUMFERENCE;

  const arc = document.getElementById('scoreArc');
  if      (pct >= 0.8) arc.style.stroke = 'var(--green-500)';
  else if (pct >= 0.5) arc.style.stroke = '#f59e0b';
  else                 arc.style.stroke = '#ef4444';

  document.getElementById('scoreNum').textContent   = score;
  document.getElementById('scoreDenom').textContent = `/${total}`;

  let title = 'Keep going!';
  if      (pct === 1)   title = 'Perfect score! 🎉';
  else if (pct >= 0.8)  title = 'Excellent work! 🌟';
  else if (pct >= 0.6)  title = 'Good job! 👍';
  else if (pct >= 0.4)  title = 'Getting there! 📚';
  document.getElementById('resultsTitle').textContent = title;
  document.getElementById('resultsSub').textContent   =
    `You scored ${score} out of ${total} (${Math.round(pct * 100)}%)`;

  const list = document.getElementById('reviewList');
  list.innerHTML = state.questions.map((q, i) => {
    const chosen    = state.answers[i];
    const correct   = q.correct;
    const timedOut  = chosen === -1;
    const isCorrect = chosen === correct;
    const cls       = isCorrect ? 'review-correct' : 'review-wrong';
    const icon      = isCorrect ? '✅' : (timedOut ? '⏱️' : '❌');

    const chosenLabel  = timedOut
      ? '(time ran out)'
      : chosen !== undefined
        ? `${LETTERS[chosen]}. ${q.options[chosen]}`
        : '(not answered)';
    const correctLabel = `${LETTERS[correct]}. ${q.options[correct]}`;

    return `
      <div class="review-item ${cls}">
        <span class="review-icon">${icon}</span>
        <div class="review-body">
          <div class="review-q">Q${i + 1}: ${q.question}</div>
          <div class="review-ans">
            ${isCorrect
              ? `Your answer: <span>${chosenLabel}</span>`
              : `Your answer: <span>${chosenLabel}</span> · Correct: <span>${correctLabel}</span>`}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ─────────────────────────────────────────────
// Init
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  const selSubject = document.getElementById('selSubject');

  // Subject change → repopulate topics
  selSubject.addEventListener('change', () => populateTopics(selSubject.value));
  populateTopics(selSubject.value);

  // Level toggle
  document.querySelectorAll('[data-level]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-level]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.level = btn.dataset.level;
    });
  });

  // Question count toggle
  document.querySelectorAll('[data-count]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-count]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.count = parseInt(btn.dataset.count);
    });
  });

  // Timer input
  const timerInput = document.getElementById('timerInput');
  timerInput.addEventListener('input', () => {
    state.timerSecs = Math.max(0, parseInt(timerInput.value) || 0);
  });

  // Timer preset buttons
  document.querySelectorAll('.timer-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = parseInt(btn.dataset.val);
      timerInput.value = val;
      state.timerSecs  = val;
    });
  });

  // Generate quiz
  document.getElementById('generateBtn').addEventListener('click', async () => {
    const subject = selSubject.value;
    const topic   = document.getElementById('selTopic').value;
    if (!topic) return;

    state.subject   = subject;
    state.topic     = topic;
    state.questions = [];
    state.current   = 0;
    state.answers   = {};
    state.score     = 0;

    document.getElementById('loadingTopic').textContent = topic;
    document.getElementById('loadingCount').textContent = state.count;
    showScreen('screenLoading');

    try {
      state.questions = await generateQuestions(subject, topic, state.level, state.count);
      if (typeof Auth !== 'undefined') {
        Auth.track('quiz_taken', `Took a quiz on ${topic} (${subject}, ${state.level})`);
      }
      showScreen('screenQuestion');
      renderQuestion(0);
    } catch (err) {
      document.getElementById('errorMsg').textContent =
        'Unable to generate quiz questions. Check your internet connection.';
      document.getElementById('errorDetail').textContent = err.message;
      showScreen('screenError');
    }
  });

  // Question navigation
  document.getElementById('btnNext').addEventListener('click', () => {
    const next = state.current + 1;
    if (next < state.questions.length) {
      state.current = next;
      renderQuestion(next);
    } else {
      renderResults();
    }
  });

  document.getElementById('btnPrev').addEventListener('click', () => {
    if (state.current > 0) {
      state.current--;
      renderQuestion(state.current);
    }
  });

  // Results actions
  document.getElementById('btnRetry').addEventListener('click', async () => {
    state.questions = [];
    state.current   = 0;
    state.answers   = {};
    state.score     = 0;

    document.getElementById('loadingTopic').textContent = state.topic;
    document.getElementById('loadingCount').textContent = state.count;
    showScreen('screenLoading');

    try {
      state.questions = await generateQuestions(state.subject, state.topic, state.level, state.count);
      showScreen('screenQuestion');
      renderQuestion(0);
    } catch (err) {
      document.getElementById('errorMsg').textContent    = 'Failed to regenerate questions.';
      document.getElementById('errorDetail').textContent = err.message;
      showScreen('screenError');
    }
  });

  document.getElementById('btnNewTopic').addEventListener('click', () => showScreen('screenSetup'));
  document.getElementById('btnErrorBack').addEventListener('click', () => showScreen('screenSetup'));
});
