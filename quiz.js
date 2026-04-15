/* =============================================
   quiz.js — AI-powered Quiz Engine
   Calls the Anthropic Claude API directly from
   the browser to generate fresh LC questions.
   ============================================= */

// ─────────────────────────────────────────────
// Topic catalogue per subject
// ─────────────────────────────────────────────
const TOPICS = {
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
    'Fuels & Energy',
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
    'The Church & State in Ireland',
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
    'Environmental Issues',
  ],
  business: [
    'Enterprise & Entrepreneurship',
    'Business Finance & Accounts',
    'Management & Leadership',
    'Marketing & Consumer',
    'Insurance',
    'Industrial Relations & Employment Law',
    'International Trade',
    'Business Ethics & CSR',
    'Household & Personal Finance',
  ],
  french: [
    'Grammar — Tenses & Verbs',
    'Grammar — Sentence Structure',
    'Vocabulary — Everyday Life',
    'Vocabulary — Society & Environment',
    'Reading Comprehension',
    'Listening & Oral',
  ],
  spanish: [
    'Grammar — Tenses & Verbs',
    'Grammar — Sentence Structure',
    'Vocabulary — Everyday Life',
    'Vocabulary — Society & Culture',
    'Reading Comprehension',
    'Listening & Oral',
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
  subject:   'maths',
  topic:     '',
  level:     'higher',
  questions: [],   // parsed from API
  current:   0,
  answers:   {},   // index → chosen option index
  score:     0,
};

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
// Claude API call
// Returns parsed array of question objects.
// ─────────────────────────────────────────────
async function generateQuestions(subject, topic, level) {
  const apiKey = window.ANTHROPIC_API_KEY;

  if (!apiKey || apiKey === 'sk-ant-YOUR-KEY-HERE') {
    throw new Error(
      'API key not set. Open config.js and replace sk-ant-YOUR-KEY-HERE with your real key.'
    );
  }

  const systemPrompt = `You are an expert Leaving Certificate examiner for Irish secondary schools.
You create challenging, accurate multiple-choice questions that reflect the style and difficulty
of real Leaving Certificate exam questions set by the State Examinations Commission (SEC).
Always respond with valid JSON and nothing else — no markdown, no explanation, just the JSON object.`;

  const userPrompt = `Generate exactly 5 multiple-choice questions for the following:

Subject: ${subject.charAt(0).toUpperCase() + subject.slice(1)}
Topic: ${topic}
Level: ${level.charAt(0).toUpperCase() + level.slice(1)} Level
Exam: Leaving Certificate (Ireland)

Requirements:
- Questions must be at ${level} level difficulty
- Each question must have exactly 4 answer options labelled A–D
- Questions should cover different aspects of the topic
- Include a clear, educational explanation for the correct answer
- Explanations should help the student understand the concept, not just state the answer

Respond ONLY with a JSON object in this exact format:
{
  "questions": [
    {
      "question": "Full question text here?",
      "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
      "correct": 0,
      "explanation": "Clear explanation of why option A is correct and the key concept involved."
    }
  ]
}

The "correct" field must be the 0-based index (0, 1, 2 or 3) of the correct option.`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type':                          'application/json',
      'x-api-key':                             apiKey,
      'anthropic-version':                     '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model:      'claude-sonnet-4-20250514',
      max_tokens: 2048,
      system:     systemPrompt,
      messages: [
        { role: 'user', content: userPrompt }
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    const msg = err?.error?.message || `HTTP ${response.status}`;
    throw new Error(`Anthropic API error: ${msg}`);
  }

  const data = await response.json();
  const raw  = data?.content?.[0]?.text;

  if (!raw) throw new Error('Empty response from API.');

  // Strip potential markdown fences just in case
  const cleaned = raw.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    throw new Error(`Could not parse JSON response.\n\nRaw: ${raw.slice(0, 300)}`);
  }

  if (!Array.isArray(parsed?.questions) || parsed.questions.length === 0) {
    throw new Error('API returned unexpected JSON structure.');
  }

  return parsed.questions;
}

// ─────────────────────────────────────────────
// Render one question
// ─────────────────────────────────────────────
const LETTERS = ['A', 'B', 'C', 'D'];

function renderQuestion(index) {
  const q      = state.questions[index];
  const total  = state.questions.length;
  const pct    = (index / total) * 100;

  // Progress
  document.getElementById('progressFill').style.width = `${pct}%`;
  document.getElementById('questionCounter').textContent = `Question ${index + 1} of ${total}`;
  document.getElementById('liveScore').textContent = `Score: ${state.score} / ${total}`;

  // Badges
  document.getElementById('qTopicBadge').textContent  = state.topic;
  document.getElementById('qLevelBadge').textContent  =
    state.level === 'higher' ? 'Higher Level' : 'Ordinary Level';

  // Question
  document.getElementById('questionText').textContent = q.question;

  // Options
  const list = document.getElementById('optionsList');
  list.innerHTML = q.options.map((opt, i) => `
    <button class="option-btn" data-index="${i}">
      <span class="option-letter">${LETTERS[i]}</span>
      <span>${opt}</span>
    </button>
  `).join('');

  // Hide explanation
  const expBox = document.getElementById('explanationBox');
  expBox.classList.add('hidden');
  expBox.classList.remove('is-correct', 'is-wrong');

  // Restore previous answer if navigating back
  const prev = state.answers[index];
  if (prev !== undefined) {
    applyAnswerUI(index, prev);
  } else {
    // Bind click handlers
    list.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(index, parseInt(btn.dataset.index)));
    });
  }

  // Nav buttons
  document.getElementById('btnPrev').disabled = index === 0;
  const isLast = index === total - 1;
  const btnNext = document.getElementById('btnNext');
  btnNext.textContent  = isLast ? 'See Results →' : 'Next Question →';
  btnNext.disabled     = prev === undefined; // disabled until answered
}

// ─────────────────────────────────────────────
// Handle an answer click
// ─────────────────────────────────────────────
function handleAnswer(qIndex, chosenIndex) {
  if (state.answers[qIndex] !== undefined) return; // already answered

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

    if (i === q.correct && i === chosenIndex) {
      btn.classList.add('correct');
    } else if (i === chosenIndex && i !== q.correct) {
      btn.classList.add('wrong');
    } else if (i === q.correct) {
      btn.classList.add('reveal'); // show correct in muted green
    }
  });

  // Show explanation
  const isCorrect = chosenIndex === q.correct;
  const expBox    = document.getElementById('explanationBox');
  expBox.classList.remove('hidden', 'is-correct', 'is-wrong');
  expBox.classList.add(isCorrect ? 'is-correct' : 'is-wrong');

  document.getElementById('explanationIcon').textContent    = isCorrect ? '✅' : '❌';
  document.getElementById('explanationVerdict').textContent = isCorrect ? 'Correct!' : 'Incorrect';
  document.getElementById('explanationText').textContent    = q.explanation;

  // Enable Next button
  document.getElementById('btnNext').disabled = false;
}

// ─────────────────────────────────────────────
// Render results
// ─────────────────────────────────────────────
function renderResults() {
  showScreen('screenResults');

  const total = state.questions.length;
  const score = state.score;
  const pct   = score / total;

  // Score ring SVG animation
  const CIRCUMFERENCE = 264; // 2π × 42
  document.getElementById('scoreArc').style.strokeDashoffset =
    CIRCUMFERENCE - pct * CIRCUMFERENCE;

  // Colour arc by performance
  const arc = document.getElementById('scoreArc');
  if (pct >= 0.8)       arc.style.stroke = 'var(--green-500)';
  else if (pct >= 0.5)  arc.style.stroke = '#f59e0b';
  else                  arc.style.stroke = '#ef4444';

  document.getElementById('scoreNum').textContent   = score;
  document.getElementById('scoreDenom').textContent = `/${total}`;

  let title = 'Keep going!';
  if (pct === 1)        title = 'Perfect score! 🎉';
  else if (pct >= 0.8)  title = 'Excellent work! 🌟';
  else if (pct >= 0.6)  title = 'Good job! 👍';
  else if (pct >= 0.4)  title = 'Getting there! 📚';
  document.getElementById('resultsTitle').textContent = title;
  document.getElementById('resultsSub').textContent   =
    `You scored ${score} out of ${total} (${Math.round(pct * 100)}%)`;

  // Per-question review
  const list = document.getElementById('reviewList');
  list.innerHTML = state.questions.map((q, i) => {
    const chosen    = state.answers[i];
    const correct   = q.correct;
    const isCorrect = chosen === correct;
    const cls       = isCorrect ? 'review-correct' : 'review-wrong';
    const icon      = isCorrect ? '✅' : '❌';

    const chosenLabel  = chosen !== undefined
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

  // Check API key on load
  const apiKey = window.ANTHROPIC_API_KEY;
  if (!apiKey || apiKey === 'sk-ant-YOUR-KEY-HERE') {
    document.getElementById('apiKeyWarning').classList.remove('hidden');
  }

  // Subject change → repopulate topics
  const selSubject = document.getElementById('selSubject');
  selSubject.addEventListener('change', () => {
    populateTopics(selSubject.value);
  });
  populateTopics(selSubject.value); // initial population

  // Level toggle
  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.level = btn.dataset.level;
    });
  });

  // ── Generate Quiz ──
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

    // Show loading
    document.getElementById('loadingTopic').textContent = topic;
    showScreen('screenLoading');

    try {
      state.questions = await generateQuestions(subject, topic, state.level);
      if (typeof Auth !== 'undefined') {
        Auth.track('quiz_taken', `Took a quiz on ${topic} (${subject}, ${state.level})`);
      }
      showScreen('screenQuestion');
      renderQuestion(0);
    } catch (err) {
      document.getElementById('errorMsg').textContent =
        'Unable to generate quiz questions. Check your API key and internet connection.';
      document.getElementById('errorDetail').textContent = err.message;
      showScreen('screenError');
    }
  });

  // ── Question navigation ──
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

  // ── Results actions ──
  document.getElementById('btnRetry').addEventListener('click', async () => {
    // Same subject + topic, fresh questions
    state.questions = [];
    state.current   = 0;
    state.answers   = {};
    state.score     = 0;

    document.getElementById('loadingTopic').textContent = state.topic;
    showScreen('screenLoading');

    try {
      state.questions = await generateQuestions(state.subject, state.topic, state.level);
      showScreen('screenQuestion');
      renderQuestion(0);
    } catch (err) {
      document.getElementById('errorMsg').textContent = 'Failed to regenerate questions.';
      document.getElementById('errorDetail').textContent = err.message;
      showScreen('screenError');
    }
  });

  document.getElementById('btnNewTopic').addEventListener('click', () => {
    showScreen('screenSetup');
  });

  // ── Error back button ──
  document.getElementById('btnErrorBack').addEventListener('click', () => {
    showScreen('screenSetup');
  });
});
