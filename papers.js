/* =============================================
   Past Papers — papers.js
   Generates paper cards from a data catalogue
   and handles filtering/sorting.
   ============================================= */

// --------------------------------------------
// Data: Maps SEC exam paper URLs
// Pattern: https://www.examinations.ie/includes/documents/exams/[year]/LC/[code].pdf
// These are the official exam paper PDFs from examinations.ie
// --------------------------------------------

const SUBJECTS = {
  maths:     { label: 'Maths',     emoji: '📐', code: 'EV_MT' },
  english:   { label: 'English',   emoji: '📖', code: 'EV_EN' },
  irish:     { label: 'Irish',     emoji: '🇮🇪', code: 'EV_GE' },
  biology:   { label: 'Biology',   emoji: '🧬', code: 'EV_BI' },
  chemistry: { label: 'Chemistry', emoji: '⚗️', code: 'EV_CH' },
  history:   { label: 'History',   emoji: '🏛️', code: 'EV_HI' },
  geography: { label: 'Geography', emoji: '🌍', code: 'EV_GG' },
  business:  { label: 'Business',  emoji: '💼', code: 'EV_BU' },
  french:    { label: 'French',    emoji: '🥐', code: 'EV_FH' },
  spanish:   { label: 'Spanish',   emoji: '🇪🇸', code: 'EV_SP' },
};

const LEVELS = ['higher', 'ordinary'];
const YEARS  = [2024, 2023, 2022, 2021, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

// Build a flat catalogue of all papers
function buildCatalogue() {
  const catalogue = [];
  for (const [subjectKey, subjectData] of Object.entries(SUBJECTS)) {
    for (const year of YEARS) {
      for (const level of LEVELS) {
        // Skip foundation for most subjects (only Maths has it)
        if (level === 'foundation' && subjectKey !== 'maths') continue;
        catalogue.push({
          id: `${subjectKey}-${year}-${level}`,
          subject: subjectKey,
          subjectLabel: subjectData.label,
          emoji: subjectData.emoji,
          year,
          level,
          // SEC URL pattern — these are real paper locations on examinations.ie
          url: `https://www.examinations.ie/includes/documents/exams/${year}/LC/${subjectData.code}_${level === 'higher' ? 'H' : 'O'}_EV_LC_${year}.pdf`,
          markScheme: `https://www.examinations.ie/includes/documents/exams/${year}/LC/${subjectData.code}_${level === 'higher' ? 'H' : 'O'}_MS_LC_${year}.pdf`,
        });
      }
    }
  }
  return catalogue;
}

let catalogue = buildCatalogue();
let filtered  = [...catalogue];

// --------------------------------------------
// Render
// --------------------------------------------
function renderPapers(papers) {
  const grid  = document.getElementById('papersGrid');
  const count = document.getElementById('papersCount');
  if (!grid) return;

  count.textContent = `Showing ${papers.length} paper${papers.length !== 1 ? 's' : ''}`;

  if (papers.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--gray-400);">
      No papers match your filters.
    </div>`;
    return;
  }

  grid.innerHTML = papers.map(p => `
    <div class="paper-card fade-in">
      <div class="paper-card-header">
        <span class="paper-year">${p.year}</span>
        <span class="paper-level-badge level-${p.level}">${p.level.charAt(0).toUpperCase() + p.level.slice(1)}</span>
      </div>
      <div class="paper-subject">${p.emoji} ${p.subjectLabel}</div>
      <div class="paper-desc">Leaving Certificate ${p.year}</div>
      <div class="paper-actions">
        <a href="${p.url}" target="_blank" rel="noopener" class="paper-btn paper-btn-primary">
          📄 View Paper
        </a>
        <a href="${p.markScheme}" target="_blank" rel="noopener" class="paper-btn paper-btn-secondary">
          ✅ Mark Scheme
        </a>
      </div>
    </div>
  `).join('');

  // Fade in newly added cards
  grid.querySelectorAll('.fade-in').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 30);
  });
}

// --------------------------------------------
// Filter & Sort
// --------------------------------------------
function applyFiltersAndSort() {
  const subjectVal  = document.getElementById('filterSubject').value;
  const yearFrom    = parseInt(document.getElementById('yearFrom').value);
  const yearTo      = parseInt(document.getElementById('yearTo').value);
  const checkedLevels = [...document.querySelectorAll('.check-label input:checked')].map(c => c.value);
  const sortVal     = document.getElementById('sortPapers').value;

  filtered = catalogue.filter(p => {
    if (subjectVal && p.subject !== subjectVal) return false;
    if (!checkedLevels.includes(p.level)) return false;
    if (p.year < yearFrom || p.year > yearTo) return false;
    return true;
  });

  if (sortVal === 'year-desc') filtered.sort((a, b) => b.year - a.year || a.subjectLabel.localeCompare(b.subjectLabel));
  else if (sortVal === 'year-asc') filtered.sort((a, b) => a.year - b.year || a.subjectLabel.localeCompare(b.subjectLabel));
  else if (sortVal === 'subject') filtered.sort((a, b) => a.subjectLabel.localeCompare(b.subjectLabel) || b.year - a.year);

  renderPapers(filtered);
}

// --------------------------------------------
// Init
// --------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Respect URL ?s= param
  const params  = new URLSearchParams(location.search);
  const subParam = params.get('s');
  if (subParam) {
    const sel = document.getElementById('filterSubject');
    if (sel) sel.value = subParam;
  }

  applyFiltersAndSort();

  document.getElementById('applyFilters')?.addEventListener('click', applyFiltersAndSort);
  document.getElementById('sortPapers')?.addEventListener('change', applyFiltersAndSort);
});
