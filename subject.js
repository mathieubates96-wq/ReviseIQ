/* subject.js — populates the subject landing page */

const SUBJECTS_META = {
  irish:     { label: 'Irish',     emoji: '🇮🇪', desc: 'Higher & Ordinary Level' },
  english:   { label: 'English',   emoji: '📖', desc: 'Higher & Ordinary Level' },
  maths:     { label: 'Maths',     emoji: '📐', desc: 'Higher, Ordinary & Foundation Level' },
  biology:   { label: 'Biology',   emoji: '🧬', desc: 'Higher & Ordinary Level' },
  chemistry: { label: 'Chemistry', emoji: '⚗️', desc: 'Higher & Ordinary Level' },
  history:   { label: 'History',   emoji: '🏛️', desc: 'Higher & Ordinary Level' },
  geography: { label: 'Geography', emoji: '🌍', desc: 'Higher & Ordinary Level' },
  business:  { label: 'Business',  emoji: '💼', desc: 'Higher & Ordinary Level' },
  french:    { label: 'French',    emoji: '🥐', desc: 'Higher & Ordinary Level' },
  spanish:   { label: 'Spanish',   emoji: '🇪🇸', desc: 'Higher & Ordinary Level' },
};

const SEC_CODE = {
  irish: 'EV_GE', english: 'EV_EN', maths: 'EV_MT',
  biology: 'EV_BI', chemistry: 'EV_CH', history: 'EV_HI',
  geography: 'EV_GG', business: 'EV_BU', french: 'EV_FH', spanish: 'EV_SP',
};

const RECENT_YEARS = [2024, 2023, 2022, 2021, 2019];

document.addEventListener('DOMContentLoaded', () => {
  const params  = new URLSearchParams(location.search);
  const subject = params.get('s') || 'maths';
  const meta    = SUBJECTS_META[subject] || SUBJECTS_META.maths;

  document.title = `${meta.label} — ReviseIQ`;
  document.getElementById('subjectEmoji').textContent  = meta.emoji;
  document.getElementById('subjectTitle').textContent  = meta.label;
  document.getElementById('subjectDesc').textContent   = meta.desc;

  document.getElementById('linkPapers').href = `past-papers.html?s=${subject}`;
  document.getElementById('linkQuiz').href   = `quiz.html?s=${subject}`;
  document.getElementById('linkTrends').href = `trends.html?s=${subject}`;
  document.getElementById('allPapersLink').href = `past-papers.html?s=${subject}`;

  // Recent papers
  const grid = document.getElementById('recentPapersGrid');
  const code = SEC_CODE[subject] || 'EV_MT';
  grid.innerHTML = RECENT_YEARS.flatMap(y => ['higher', 'ordinary'].map(level => {
    const lvlChar = level === 'higher' ? 'H' : 'O';
    const url     = `https://www.examinations.ie/includes/documents/exams/${y}/LC/${code}_${lvlChar}_EV_LC_${y}.pdf`;
    const ms      = `https://www.examinations.ie/includes/documents/exams/${y}/LC/${code}_${lvlChar}_MS_LC_${y}.pdf`;
    return `
      <div class="paper-card">
        <div class="paper-card-header">
          <span class="paper-year">${y}</span>
          <span class="paper-level-badge level-${level}">${level === 'higher' ? 'Higher' : 'Ordinary'}</span>
        </div>
        <div class="paper-subject">${meta.emoji} ${meta.label}</div>
        <div class="paper-actions" style="margin-top:10px;">
          <a href="${url}" target="_blank" rel="noopener" class="paper-btn paper-btn-primary">📄 Paper</a>
          <a href="${ms}"  target="_blank" rel="noopener" class="paper-btn paper-btn-secondary">✅ Marks</a>
        </div>
      </div>
    `;
  })).join('');
});
