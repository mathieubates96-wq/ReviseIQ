/* =============================================
   Question Bank — Controller
   Data lives in msviewer-data.js
   ============================================= */

const POINT_COLORS = [
  '#6366f1','#0ea5e9','#10b981','#f59e0b',
  '#8b5cf6','#14b8a6','#ef4444','#f97316',
];

// ── STATE ─────────────────────────────────────
let activeSubject = null;
let activeTopic   = null;
let activeYear    = 'all';

// ── HELPERS ───────────────────────────────────
function getQuestions() {
  return MSV_QUESTIONS.filter(q => {
    if (q.subject !== activeSubject) return false;
    if (q.topic   !== activeTopic)   return false;
    if (activeYear !== 'all' && String(q.year) !== activeYear) return false;
    return true;
  });
}

function topicsFor(subject) {
  const seen = new Set();
  const out  = [];
  MSV_QUESTIONS
    .filter(q => q.subject === subject)
    .forEach(q => {
      if (!seen.has(q.topic)) {
        seen.add(q.topic);
        out.push({ id: q.topic, label: q.topicLabel });
      }
    });
  return out;
}

function yearsFor(subject, topic) {
  return [...new Set(
    MSV_QUESTIONS
      .filter(q => q.subject === subject && q.topic === topic)
      .map(q => String(q.year))
  )].sort().reverse();
}

// ── RENDER: Subject row ───────────────────────
function renderSubjects() {
  const row = document.getElementById('msvSubjectRow');
  if (!row) return;
  row.innerHTML = MSV_SUBJECTS.map(s => `
    <button class="msv-filter-btn${s.id === activeSubject ? ' active' : ''}"
            data-subject="${s.id}">
      ${s.emoji} ${s.label}
    </button>`).join('');

  row.querySelectorAll('.msv-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeSubject = btn.dataset.subject;
      activeTopic   = null;
      activeYear    = 'all';
      renderSubjects();
      renderTopics();
      renderYears();
      renderQuestions();
    });
  });
}

// ── RENDER: Topic row ─────────────────────────
function renderTopics() {
  const row = document.getElementById('msvTopicRow');
  if (!row) return;

  if (!activeSubject) {
    row.innerHTML = '<span class="msv-filter-hint">Select a subject first</span>';
    return;
  }

  const topics = topicsFor(activeSubject);
  row.innerHTML = topics.map(t => {
    const count = MSV_QUESTIONS.filter(q => q.subject === activeSubject && q.topic === t.id).length;
    return `
      <button class="msv-filter-btn${t.id === activeTopic ? ' active' : ''}"
              data-topic="${t.id}">
        ${t.label}
        <span class="msv-topic-count">${count}</span>
      </button>`;
  }).join('');

  row.querySelectorAll('.msv-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTopic = btn.dataset.topic;
      activeYear  = 'all';
      renderTopics();
      renderYears();
      renderQuestions();
    });
  });
}

// ── RENDER: Year filter ───────────────────────
function renderYears() {
  const wrap = document.getElementById('msvYearRowWrap');
  const row  = document.getElementById('msvYearRow');
  if (!wrap || !row) return;

  if (!activeTopic) { wrap.style.display = 'none'; return; }

  const years = yearsFor(activeSubject, activeTopic);
  if (years.length <= 1) { wrap.style.display = 'none'; return; }

  wrap.style.display = 'flex';
  row.innerHTML = [
    `<button class="msv-filter-btn${activeYear === 'all' ? ' active' : ''}" data-year="all">All years</button>`,
    ...years.map(y => `
      <button class="msv-filter-btn${activeYear === y ? ' active' : ''}" data-year="${y}">${y}</button>`)
  ].join('');

  row.querySelectorAll('.msv-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeYear = btn.dataset.year;
      renderYears();
      renderQuestions();
    });
  });
}

// ── RENDER: Question cards list ───────────────
function renderQuestions() {
  const container = document.getElementById('msvQuestionList');
  const emptyEl   = document.getElementById('msvListEmpty');
  if (!container) return;

  const qs = getQuestions();

  if (!activeTopic) {
    container.innerHTML = `
      <div class="msv-list-empty" id="msvListEmpty">
        <div class="msv-empty-icon">📚</div>
        <p>Select a subject and topic above to load questions.</p>
      </div>`;
    return;
  }

  if (!qs.length) {
    container.innerHTML = `
      <div class="msv-list-empty" id="msvListEmpty">
        <div class="msv-empty-icon">🔍</div>
        <p>No questions found for ${activeYear === 'all' ? 'this topic' : activeYear}.</p>
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="msv-results-bar">
      <span>${qs.length} question${qs.length !== 1 ? 's' : ''} — ${topicsFor(activeSubject).find(t => t.id === activeTopic)?.label}</span>
      <button class="msv-expand-all-btn" id="msvExpandAll">Show all schemes</button>
    </div>
    <div class="msv-card-list" id="msvCardList">
      ${qs.map((q, i) => buildCard(q, i)).join('')}
    </div>`;

  // Bind toggle buttons
  container.querySelectorAll('.qb-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => toggleCard(btn.dataset.id));
  });

  // Expand all
  document.getElementById('msvExpandAll')?.addEventListener('click', e => {
    const btn = e.currentTarget;
    const allOpen = [...container.querySelectorAll('.qb-card')].every(c => c.classList.contains('open'));
    container.querySelectorAll('.qb-card').forEach(card => {
      allOpen ? closeCard(card) : openCard(card);
    });
    btn.textContent = allOpen ? 'Show all schemes' : 'Hide all schemes';
  });
}

// ── CARD BUILDER ──────────────────────────────
function buildCard(q, idx) {
  const schemeHtml  = buildSchemeHtml(q);
  const formatted   = q.question.replace(/(\(\d+\s*marks?\))/gi, '<strong>$1</strong>');
  return `
    <div class="qb-card" id="qb-${q.id}">
      <div class="qb-card-header">
        <div class="qb-card-meta">
          <span class="qb-year">${q.year}</span>
          <span class="qb-section">${q.section}</span>
          <span class="qb-level">${q.level}</span>
          <span class="qb-marks">${q.marks} marks</span>
        </div>
        <button class="qb-toggle-btn" data-id="${q.id}">
          <span class="qb-toggle-icon">👁</span>
          Show Marking Scheme
        </button>
      </div>
      <div class="qb-question-text">${formatted}</div>
      <div class="qb-scheme-wrap">
        <div class="qb-scheme-inner">
          ${schemeHtml}
        </div>
      </div>
    </div>`;
}

function buildSchemeHtml(q) {
  const pointsHtml = q.markingScheme.map((raw, i) => {
    const { text, marks } = parsePoint(raw);
    const col = POINT_COLORS[i % POINT_COLORS.length];
    return `
      <div class="msv-point" style="--point-color:${col}; animation-delay:${i * 50}ms;">
        <div class="msv-point-num">${i + 1}</div>
        <div class="msv-point-body">
          <div class="msv-point-text">${text}</div>
          ${marks ? `<div class="msv-point-marks">+${marks} mark${marks === '1' ? '' : 's'}</div>` : ''}
        </div>
      </div>`;
  }).join('');

  const tipsHtml = q.fullMarksTips.map(tip => `
    <li class="msv-fm-item">
      <div class="msv-fm-check">✓</div>
      <span>${tip}</span>
    </li>`).join('');

  const tot = totalMarks(q);

  return `
    <div class="qb-scheme-header">
      <span class="msv-badge msv-badge-scheme">✅ Marking Scheme</span>
      ${tot > 0 ? `<span class="msv-score-total">${tot} / ${q.marks} marks accounted for</span>` : ''}
    </div>
    <div class="msv-points-wrap">
      <div class="msv-points-title">Marking Points</div>
      ${pointsHtml}
    </div>
    <div class="msv-fm-box">
      <div class="msv-fm-header"><span class="msv-fm-icon">🎯</span> How to Get Full Marks</div>
      <ul class="msv-fm-list">${tipsHtml}</ul>
    </div>`;
}

// ── CARD OPEN / CLOSE ─────────────────────────
function openCard(card) {
  card.classList.add('open');
  const btn = card.querySelector('.qb-toggle-btn');
  if (btn) btn.innerHTML = '<span class="qb-toggle-icon open">▲</span> Hide Marking Scheme';
}

function closeCard(card) {
  card.classList.remove('open');
  const btn = card.querySelector('.qb-toggle-btn');
  if (btn) btn.innerHTML = '<span class="qb-toggle-icon">👁</span> Show Marking Scheme';
}

function toggleCard(id) {
  const card = document.getElementById(`qb-${id}`);
  if (!card) return;
  card.classList.contains('open') ? closeCard(card) : openCard(card);
}

// ── PARSE HELPERS ─────────────────────────────
function parsePoint(text) {
  const m = text.match(/\((\d+(?:[–\-]\d+)?)\s*[Mm](?:arks?)?\)\s*$/);
  return m ? { text: text.slice(0, m.index).trim(), marks: m[1] } : { text, marks: null };
}

function totalMarks(q) {
  let sum = 0;
  q.markingScheme.forEach(p => {
    const { marks } = parsePoint(p);
    if (marks) {
      const n = parseInt(marks.split(/[–-]/)[0], 10);
      if (!isNaN(n)) sum += n;
    }
  });
  return sum;
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  activeSubject = MSV_SUBJECTS[0].id;
  renderSubjects();
  renderTopics();
  renderYears();
  renderQuestions();
});
