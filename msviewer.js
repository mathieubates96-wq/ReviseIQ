/* =============================================
   Marking Scheme Viewer — Controller
   Data lives in msviewer-data.js
   ============================================= */

const POINT_COLORS = [
  '#6366f1','#0ea5e9','#10b981','#f59e0b',
  '#8b5cf6','#14b8a6','#ef4444','#f97316',
];

// ── STATE ─────────────────────────────────────
let activeSubject = null;
let activeTopic   = null;
let activeQIdx    = 0;
let schemeVisible = false;

// ── DERIVED HELPERS ───────────────────────────
function questionsFor(subject, topic) {
  return MSV_QUESTIONS.filter(q => q.subject === subject && q.topic === topic);
}

function topicsFor(subject) {
  const seen = new Set();
  const topics = [];
  MSV_QUESTIONS
    .filter(q => q.subject === subject)
    .forEach(q => {
      if (!seen.has(q.topic)) {
        seen.add(q.topic);
        topics.push({ id: q.topic, label: q.topicLabel });
      }
    });
  return topics;
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
      activeQIdx    = 0;
      schemeVisible = false;
      renderSubjects();
      renderTopics();
      renderQList();
      clearViewer();
    });
  });
}

// ── RENDER: Topic row ─────────────────────────
function renderTopics() {
  const row = document.getElementById('msvTopicRow');
  if (!row) return;

  if (!activeSubject) { row.innerHTML = ''; return; }

  const topics = topicsFor(activeSubject);
  row.innerHTML = topics.map(t => `
    <button class="msv-filter-btn msv-topic-btn${t.id === activeTopic ? ' active' : ''}"
            data-topic="${t.id}">
      ${t.label}
      <span class="msv-topic-count">${questionsFor(activeSubject, t.id).length}</span>
    </button>`).join('');

  row.querySelectorAll('.msv-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTopic   = btn.dataset.topic;
      activeQIdx    = 0;
      schemeVisible = false;
      renderTopics();
      renderQList();
      loadQuestion(0);
    });
  });
}

// ── RENDER: Question list ─────────────────────
function renderQList() {
  const list = document.getElementById('msvQList');
  if (!list) return;

  if (!activeTopic) { list.innerHTML = ''; return; }

  const qs = questionsFor(activeSubject, activeTopic);
  if (!qs.length) { list.innerHTML = '<span class="msv-q-empty">No questions yet for this topic.</span>'; return; }

  list.innerHTML = qs.map((q, i) => `
    <button class="msv-q-btn${i === activeQIdx ? ' active' : ''}" data-idx="${i}">
      <span class="msv-q-year">${q.year}</span>
      <span class="msv-q-section">${q.section}</span>
      <span class="msv-q-marks">${q.marks}m</span>
    </button>`).join('');

  list.querySelectorAll('.msv-q-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeQIdx    = parseInt(btn.dataset.idx, 10);
      schemeVisible = false;
      renderQList();
      loadQuestion(activeQIdx);
    });
  });
}

// ── RENDER: Viewer ────────────────────────────
function clearViewer() {
  const wrap = document.getElementById('msvWrap');
  const empty = document.getElementById('msvViewerEmpty');
  const viewer = document.getElementById('msvViewer');
  if (wrap) wrap.classList.remove('msv-open');
  if (empty) empty.style.display = 'flex';
  if (viewer) viewer.style.display = 'none';
}

function loadQuestion(idx) {
  const qs = questionsFor(activeSubject, activeTopic);
  if (!qs.length) { clearViewer(); return; }

  const q = qs[idx];
  const empty = document.getElementById('msvViewerEmpty');
  const viewer = document.getElementById('msvViewer');
  if (empty)  empty.style.display  = 'none';
  if (viewer) viewer.style.display = 'flex';

  // Meta chips
  document.getElementById('msvMeta').innerHTML = `
    <span class="msv-meta-chip">${q.subject.charAt(0).toUpperCase() + q.subject.slice(1)}</span>
    <span class="msv-meta-chip">${q.level}</span>
    <span class="msv-meta-chip msv-marks-chip">${q.marks} marks</span>`;

  document.getElementById('msvQuestionSection').textContent = q.section;

  // Bold mark annotations like "(15 marks)" in question text
  const formatted = q.question.replace(/(\(\d+\s*marks?\))/gi, '<strong>$1</strong>');
  document.getElementById('msvQuestionText').innerHTML = formatted;

  renderScheme(q);
  applyToggleState();
}

function applyToggleState() {
  const wrap = document.getElementById('msvWrap');
  const btn  = document.getElementById('msvToggleBtn');
  if (!wrap || !btn) return;
  if (schemeVisible) {
    wrap.classList.add('msv-open');
    btn.classList.add('active');
    btn.innerHTML = `<span class="msv-toggle-icon">▲</span> Hide Marking Scheme`;
  } else {
    wrap.classList.remove('msv-open');
    btn.classList.remove('active');
    btn.innerHTML = `<span class="msv-toggle-icon">👁</span> Show Marking Scheme`;
  }
}

// ── RENDER: Scheme panel ──────────────────────
function parsePoint(text) {
  const re = /\((\d+(?:[–\-]\d+)?)\s*[Mm](?:arks?)?\)\s*$/;
  const m = text.match(re);
  return m
    ? { text: text.slice(0, m.index).trim(), marks: m[1] }
    : { text, marks: null };
}

function totalMarksFromScheme(q) {
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

function renderScheme(q) {
  const pointsHtml = q.markingScheme.map((raw, i) => {
    const { text, marks } = parsePoint(raw);
    const col = POINT_COLORS[i % POINT_COLORS.length];
    return `
      <div class="msv-point" style="--point-color:${col}; animation-delay:${60 + i * 55}ms;">
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

  const tot = totalMarksFromScheme(q);

  document.getElementById('msvSchemeContent').innerHTML = `
    <div class="msv-points-wrap">
      <div class="msv-points-title">Marking Points</div>
      ${pointsHtml}
    </div>
    ${tot > 0 ? `<div class="msv-score-bar">
      <span>Scheme total</span>
      <span class="msv-score-total">${tot} / ${q.marks} marks accounted for</span>
    </div>` : ''}
    <div class="msv-fm-box">
      <div class="msv-fm-header"><span class="msv-fm-icon">🎯</span> How to Get Full Marks</div>
      <ul class="msv-fm-list">${tipsHtml}</ul>
    </div>`;
}

// ── EVENTS ────────────────────────────────────
function bindEvents() {
  document.getElementById('msvToggleBtn')?.addEventListener('click', () => {
    schemeVisible = !schemeVisible;
    applyToggleState();
  });
  document.getElementById('msvCloseBtn')?.addEventListener('click', () => {
    schemeVisible = false;
    applyToggleState();
  });
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Default to first subject with questions
  activeSubject = MSV_SUBJECTS[0].id;
  activeTopic   = topicsFor(activeSubject)[0]?.id || null;
  activeQIdx    = 0;

  renderSubjects();
  renderTopics();
  renderQList();
  if (activeTopic) loadQuestion(0);
  else clearViewer();
  bindEvents();
});
