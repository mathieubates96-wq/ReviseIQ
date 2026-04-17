/* =============================================
   Exam Countdown & Study Planner
   ============================================= */

const PLANNER_SUBJECTS = [
  { id: 'maths',     name: 'Maths',     emoji: '📐' },
  { id: 'english',   name: 'English',   emoji: '📖' },
  { id: 'irish',     name: 'Irish',     emoji: '🇮🇪' },
  { id: 'biology',   name: 'Biology',   emoji: '🧬' },
  { id: 'chemistry', name: 'Chemistry', emoji: '⚗️' },
  { id: 'history',   name: 'History',   emoji: '🏛️' },
  { id: 'geography', name: 'Geography', emoji: '🌍' },
  { id: 'business',  name: 'Business',  emoji: '💼' },
  { id: 'french',    name: 'French',    emoji: '🥐' },
  { id: 'spanish',   name: 'Spanish',   emoji: '🇪🇸' },
  { id: 'economics', name: 'Economics', emoji: '📉' },
];

const WEEK_DAYS_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const SUBJECT_COLORS = {
  maths:     '#6366f1',
  english:   '#0ea5e9',
  irish:     '#f59e0b',
  biology:   '#10b981',
  chemistry: '#ef4444',
  history:   '#8b5cf6',
  geography: '#14b8a6',
  business:  '#f97316',
  french:    '#3b82f6',
  spanish:   '#ec4899',
  economics: '#22c55e',
};

// ── EXAM DATE ────────────────────────────────────────
function getFirstWednesdayOfJune(year) {
  const d = new Date(year, 5, 1); // June 1
  const dow = d.getDay(); // 0=Sun, 3=Wed
  const diff = (3 - dow + 7) % 7;
  d.setDate(1 + diff);
  d.setHours(9, 0, 0, 0);
  return d;
}

function getNextExamDate() {
  const now = new Date();
  let year = now.getFullYear();
  let exam = getFirstWednesdayOfJune(year);
  if (now >= exam) exam = getFirstWednesdayOfJune(year + 1);
  return exam;
}

// ── COUNTDOWN ────────────────────────────────────────
function startCountdown() {
  const examDate = getNextExamDate();

  const opts = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const dateEl = document.getElementById('cdExamDate');
  if (dateEl) {
    dateEl.textContent = 'First exam: ' + examDate.toLocaleDateString('en-IE', opts);
  }

  function tick() {
    const diff = examDate - new Date();
    const days  = Math.max(0, Math.floor(diff / 86400000));
    const hours = Math.max(0, Math.floor((diff % 86400000) / 3600000));
    const mins  = Math.max(0, Math.floor((diff % 3600000) / 60000));
    const secs  = Math.max(0, Math.floor((diff % 60000) / 1000));
    const pad = n => String(n).padStart(2, '0');
    const d = document.getElementById('cdDays');
    const h = document.getElementById('cdHours');
    const m = document.getElementById('cdMins');
    const s = document.getElementById('cdSecs');
    if (d) d.textContent = pad(days);
    if (h) h.textContent = pad(hours);
    if (m) m.textContent = pad(mins);
    if (s) s.textContent = pad(secs);
  }
  tick();
  setInterval(tick, 1000);
}

// ── STATE ────────────────────────────────────────────
let subjectState = {};

function loadSubjectState() {
  try {
    const saved = localStorage.getItem('riq_planner_subjects');
    if (saved) subjectState = JSON.parse(saved);
  } catch (e) {}
  PLANNER_SUBJECTS.forEach(s => {
    if (!subjectState[s.id]) subjectState[s.id] = { checked: false, weak: false };
  });
}

function saveSubjectState() {
  localStorage.setItem('riq_planner_subjects', JSON.stringify(subjectState));
}

// ── CHECKLIST ────────────────────────────────────────
function renderChecklist() {
  const el = document.getElementById('subjectChecklist');
  if (!el) return;

  el.innerHTML = PLANNER_SUBJECTS.map(s => {
    const st = subjectState[s.id];
    return `
      <div class="sc-row${st.checked ? ' sc-row--checked' : ''}" data-id="${s.id}">
        <label class="sc-label">
          <input type="checkbox" class="sc-checkbox" data-id="${s.id}"${st.checked ? ' checked' : ''}>
          <span class="sc-check-custom"></span>
          <span class="sc-emoji">${s.emoji}</span>
          <span class="sc-name">${s.name}</span>
        </label>
        <button class="sc-weak-btn${st.weak ? ' active' : ''}" data-id="${s.id}"
          title="Mark as weak — gets extra slots"${!st.checked ? ' disabled' : ''}>★</button>
      </div>`;
  }).join('');

  el.querySelectorAll('.sc-checkbox').forEach(cb => {
    cb.addEventListener('change', e => {
      const id = e.target.dataset.id;
      subjectState[id].checked = e.target.checked;
      const row = e.target.closest('.sc-row');
      row.classList.toggle('sc-row--checked', e.target.checked);
      const weakBtn = row.querySelector('.sc-weak-btn');
      if (!e.target.checked) {
        subjectState[id].weak = false;
        weakBtn.classList.remove('active');
        weakBtn.disabled = true;
      } else {
        weakBtn.disabled = false;
      }
      saveSubjectState();
    });
  });

  el.querySelectorAll('.sc-weak-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = e.currentTarget.dataset.id;
      if (!subjectState[id].checked) return;
      subjectState[id].weak = !subjectState[id].weak;
      e.currentTarget.classList.toggle('active', subjectState[id].weak);
      saveSubjectState();
    });
  });
}

// ── TIMETABLE GENERATION ─────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildPool(selected) {
  const pool = [];
  selected.forEach(s => {
    pool.push(s.id);
    if (subjectState[s.id].weak) pool.push(s.id); // extra slot for weak subjects
  });
  return shuffle(pool);
}

function getMondayOnOrBefore(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const dow = d.getDay(); // 0=Sun
  const diff = dow === 0 ? -6 : 1 - dow;
  d.setDate(d.getDate() + diff);
  return d;
}

function generateTimetable() {
  const selected = PLANNER_SUBJECTS.filter(s => subjectState[s.id].checked);
  if (selected.length === 0) {
    alert('Please select at least one subject first.');
    return;
  }

  const examDate = getNextExamDate();
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  // Start from current or next Monday
  let startMonday = getMondayOnOrBefore(now);
  if (startMonday < now) {
    startMonday.setDate(startMonday.getDate() + 7);
  }

  const pool = buildPool(selected);
  let poolIdx = 0;
  const nextFromPool = () => {
    const val = pool[poolIdx % pool.length];
    poolIdx++;
    if (poolIdx % pool.length === 0) {
      // Reshuffle to vary sequence each cycle
      pool.splice(0, pool.length, ...shuffle(pool));
    }
    return val;
  };

  const weeks = [];
  let weekStart = new Date(startMonday);

  while (weekStart < examDate && weeks.length < 16) {
    const days = [];
    for (let wd = 0; wd < 7; wd++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + wd);

      if (date >= examDate) {
        days.push({ date, sessions: [], past: false, examDay: true });
        continue;
      }

      const isPast = date < now;
      const isWeekend = wd >= 5;

      // Mon-Fri: 2 sessions. Sat: 1. Sun: 0 (rest day).
      let sessionCount = 0;
      if (!isWeekend) sessionCount = 2;
      else if (wd === 5) sessionCount = 1;

      const sessions = [];
      for (let i = 0; i < sessionCount; i++) {
        sessions.push(nextFromPool());
      }
      days.push({ date, sessions, past: isPast, weekend: isWeekend });
    }
    weeks.push({ startDate: new Date(weekStart), days });
    weekStart.setDate(weekStart.getDate() + 7);
  }

  // Persist
  try {
    localStorage.setItem('riq_planner_timetable', JSON.stringify({
      generated: Date.now(),
      weeks: weeks.map(w => ({
        startDate: w.startDate.toISOString(),
        days: w.days.map(d => ({
          date: d.date.toISOString(),
          sessions: d.sessions,
          past: d.past,
          weekend: d.weekend || false,
          examDay: d.examDay || false,
        }))
      }))
    }));
  } catch (e) {}

  renderTimetable(weeks);
}

// ── TIMETABLE RENDER ─────────────────────────────────
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function subjectById(id) {
  return PLANNER_SUBJECTS.find(s => s.id === id);
}

function renderTimetable(weeks) {
  const emptyEl  = document.getElementById('plannerEmpty');
  const contentEl = document.getElementById('timetableContent');
  if (!emptyEl || !contentEl) return;

  emptyEl.style.display = 'none';
  contentEl.style.display = 'block';

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const weeksHtml = weeks.map((week, wi) => {
    const label = `Week ${wi + 1} — ${week.startDate.toLocaleDateString('en-IE', { day: 'numeric', month: 'short' })}`;

    const daysHtml = week.days.map((day, di) => {
      const isToday = isSameDay(day.date, today);
      const dateStr = day.date.toLocaleDateString('en-IE', { day: 'numeric', month: 'short' });
      let classes = 'tt-day';
      if (day.past && !isToday) classes += ' tt-past';
      if (isToday) classes += ' tt-today';
      if (day.weekend) classes += ' tt-weekend';

      const sessionsHtml = day.examDay
        ? '<div class="tt-session tt-session-exam" style="--s-color:#ef4444;">🎓 Exam period</div>'
        : day.sessions.map(sid => {
            const subj = subjectById(sid);
            if (!subj) return '';
            const col = SUBJECT_COLORS[sid] || '#6b7280';
            const isWeak = subjectState[sid]?.weak;
            return `<div class="tt-session" style="--s-color:${col};">${subj.emoji} ${subj.name}${isWeak ? ' ★' : ''}</div>`;
          }).join('') || '<div style="padding:6px 6px;font-size:0.7rem;color:var(--gray-400);">Rest</div>';

      return `
        <div class="${classes}">
          <div class="tt-day-header">
            <span class="tt-day-name">${WEEK_DAYS_SHORT[di]}</span>
            <span class="tt-day-date">${dateStr}</span>
          </div>
          <div class="tt-sessions">${sessionsHtml}</div>
        </div>`;
    }).join('');

    return `
      <div class="tt-week">
        <div class="tt-week-label">${label}</div>
        <div class="tt-grid">${daysHtml}</div>
      </div>`;
  }).join('');

  contentEl.innerHTML = `
    <div class="tt-header">
      <div class="tt-header-title">Your Study Timetable</div>
      <button class="btn btn-secondary tt-regen-btn" id="regenBtn">↻ Regenerate</button>
    </div>
    ${weeksHtml}`;

  document.getElementById('regenBtn')?.addEventListener('click', generateTimetable);
}

function loadSavedTimetable() {
  try {
    const saved = localStorage.getItem('riq_planner_timetable');
    if (!saved) return;
    const data = JSON.parse(saved);
    const weeks = data.weeks.map(w => ({
      startDate: new Date(w.startDate),
      days: w.days.map(d => ({
        date: new Date(d.date),
        sessions: d.sessions || [],
        past: d.past || false,
        weekend: d.weekend || false,
        examDay: d.examDay || false,
      }))
    }));
    renderTimetable(weeks);
  } catch (e) {}
}

// ── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
  loadSubjectState();
  renderChecklist();
  loadSavedTimetable();

  document.getElementById('plannerGenBtn')?.addEventListener('click', generateTimetable);
});
