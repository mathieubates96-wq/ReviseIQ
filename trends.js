/* =============================================
   trends.js — Topic Trends with Chart.js
   Bar chart (frequency) + Line chart (by year)
   ============================================= */

// ─────────────────────────────────────────────
// Colour palette — one colour per topic slot.
// Up to 6 topics per subject.
// ─────────────────────────────────────────────
const PALETTE = [
  { bg: 'rgba(22, 163, 74,  0.85)', border: '#15803d', light: 'rgba(22,163,74,0.15)'  }, // green
  { bg: 'rgba(8,  145, 178, 0.85)', border: '#0e7490', light: 'rgba(8,145,178,0.15)'  }, // cyan
  { bg: 'rgba(124, 58, 237, 0.85)', border: '#6d28d9', light: 'rgba(124,58,237,0.15)' }, // purple
  { bg: 'rgba(220, 38,  38, 0.85)', border: '#b91c1c', light: 'rgba(220,38,38,0.15)'  }, // red
  { bg: 'rgba(217,119,  6,  0.85)', border: '#b45309', light: 'rgba(217,119,6,0.15)'  }, // amber
  { bg: 'rgba(13, 148, 136, 0.85)', border: '#0f766e', light: 'rgba(13,148,136,0.15)' }, // teal
];

// ─────────────────────────────────────────────
// Years axis — 2015 to 2025 (2020 = COVID, 0)
// ─────────────────────────────────────────────
const YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
const LATEST_YEAR = 2025;

// ─────────────────────────────────────────────
// Trend data
// yearData[year] = 1 if topic appeared, 0 if not
// ─────────────────────────────────────────────
const TREND_DATA = {

  // ── MATHS ─────────────────────────────────
  maths: {
    higher: [
      {
        topic: 'Calculus',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Statistics',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Trigonometry',
        yearData: { 2015:1, 2016:1, 2017:0, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Algebra',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:0, 2024:1 },
      },
      {
        topic: 'Probability',
        yearData: { 2015:1, 2016:0, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:0 },
      },
    ],
    ordinary: [
      {
        topic: 'Algebra',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Statistics',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Trigonometry',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:0, 2023:1, 2024:1 },
      },
      {
        topic: 'Calculus',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:0, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Probability',
        yearData: { 2015:1, 2016:0, 2017:1, 2018:1, 2019:1, 2020:0, 2021:0, 2022:1, 2023:1, 2024:1 },
      },
    ],
  },

  // ── BIOLOGY ───────────────────────────────
  biology: {
    higher: [
      {
        topic: 'Genetics',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Ecology',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'The Cell',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Human Biology',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:0, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Evolution',
        yearData: { 2015:0, 2016:1, 2017:1, 2018:1, 2019:0, 2020:0, 2021:1, 2022:1, 2023:1, 2024:0 },
      },
    ],
    ordinary: [
      {
        topic: 'The Cell',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Human Biology',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Genetics',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:0, 2024:1 },
      },
      {
        topic: 'Ecology',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:0, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Evolution',
        yearData: { 2015:0, 2016:1, 2017:0, 2018:1, 2019:1, 2020:0, 2021:0, 2022:1, 2023:1, 2024:1 },
      },
    ],
  },

  // ── ECONOMICS ─────────────────────────────
  economics: {
    higher: [
      { topic: 'Market Structures',        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:1, 2021:1, 2022:1, 2023:1, 2024:1, 2025:1 }, subtopics: { 'Market Structures':8, 'Perfect Competition':7, 'Monopoly':3, 'Price Discrimination':3, 'Oligopoly':3 } },
      { topic: 'Government & Fiscal Policy',yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:1, 2021:1, 2022:1, 2023:1, 2024:1, 2025:1 }, subtopics: { 'Taxation':9, 'Fiscal Policy':5, 'Government Intervention':4, 'Govt Finance & Employment':3, 'National Debt':3 } },
      { topic: 'Consumer Theory',           yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:1, 2021:1, 2022:1, 2023:1, 2024:1, 2025:1 }, subtopics: { 'Consumer Behaviour':4, 'Production & Costs':4, 'Cost Curves':3, 'Consumer Utility':2, 'PPF':2 } },
      { topic: 'Supply & Demand',           yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:1, 2021:0, 2022:1, 2023:1, 2024:1, 2025:0 }, subtopics: { 'Market Equilibrium':6, 'Supply & Demand':6, 'Demand Analysis':4, 'Market Equilibrium':2, 'Law of Demand':1 } },
      { topic: 'International Trade',       yearData: { 2015:1, 2016:0, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1, 2025:1 }, subtopics: { 'International Trade':6, 'Balance of Payments':3, 'Exchange Rates':2, 'Trade & Exchange Rates':1, 'Supply Chain':1 } },
      { topic: 'Money & Banking',           yearData: { 2015:0, 2016:1, 2017:1, 2018:1, 2019:0, 2020:1, 2021:1, 2022:1, 2023:1, 2024:0, 2025:1 }, subtopics: { 'Monetary Policy':5, 'European Central Bank':3, 'Banking & Financial Services':2, 'Central Bank Regulation':2, 'Interest Rates':2 } },
      { topic: 'Economic Development',      yearData: { 2015:1, 2016:0, 2017:0, 2018:1, 2019:1, 2020:1, 2021:1, 2022:1, 2023:0, 2024:1, 2025:1 }, subtopics: { 'Regional Development':3, 'HDI':3, 'Income Inequality':2, 'Economic Development':1, 'Growth & Development':1 } },
      { topic: 'Unemployment & Labour',     yearData: { 2015:0, 2016:1, 2017:1, 2018:1, 2019:1, 2020:1, 2021:0, 2022:0, 2023:0, 2024:1, 2025:1 }, subtopics: { 'Labour Market & Employment':5, 'Unemployment':3, 'Demographic Change':2, 'Gig Economy':2, 'Employment':2 } },
      { topic: 'Market Failure',            yearData: { 2015:0, 2016:0, 2017:1, 2018:0, 2019:0, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1, 2025:1 }, subtopics: { 'Demerit Goods':3, 'Externalities':3, 'Price Controls & Housing':2, 'Market Failure':2, 'Price Controls':1 } },
      { topic: 'Elasticity',                yearData: { 2015:1, 2016:1, 2017:1, 2018:0, 2019:0, 2020:0, 2021:0, 2022:1, 2023:1, 2024:0, 2025:1 }, subtopics: { 'Elasticity of Demand':9, 'Price Elasticity':3 } },
      { topic: 'National Income',           yearData: { 2015:0, 2016:0, 2017:0, 2018:1, 2019:0, 2020:0, 2021:0, 2022:1, 2023:1, 2024:1, 2025:1 }, subtopics: { 'National Income':6, 'Circular Flow':3, 'Consumption':1, 'Investment':1, 'Tourism & Circular Flow':1 } },
      { topic: 'Inflation',                 yearData: { 2015:0, 2016:0, 2017:0, 2018:0, 2019:0, 2020:0, 2021:0, 2022:0, 2023:0, 2024:0, 2025:1 }, subtopics: { 'CPI':1, 'Cost of Living':1, 'Types of Inflation':1 } },
    ],
    ordinary: [],
  },

  // ── HISTORY ───────────────────────────────
  history: {
    higher: [
      {
        topic: 'Irish History',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'The Cold War',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'European History',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Revolution',
        yearData: { 2015:1, 2016:1, 2017:0, 2018:1, 2019:1, 2020:0, 2021:1, 2022:0, 2023:1, 2024:1 },
      },
    ],
    ordinary: [
      {
        topic: 'Irish History',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'European History',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:1, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'The Cold War',
        yearData: { 2015:1, 2016:1, 2017:1, 2018:0, 2019:1, 2020:0, 2021:1, 2022:1, 2023:1, 2024:1 },
      },
      {
        topic: 'Revolution',
        yearData: { 2015:0, 2016:1, 2017:1, 2018:1, 2019:0, 2020:0, 2021:1, 2022:1, 2023:0, 2024:1 },
      },
    ],
  },
};

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function totalAppearances(topicObj) {
  return Object.values(topicObj.yearData).reduce((a, b) => a + b, 0);
}

function appearedInYear(topicObj, year) {
  return (topicObj.yearData[year] ?? 0) === 1;
}

// ─────────────────────────────────────────────
// State
// ─────────────────────────────────────────────
let currentSubject   = 'economics';
let currentLevel     = 'higher';
let currentMode      = 'bar';
let chartInstance    = null;
let subtopicInstance = null;
let selectedUnit     = null;

// ─────────────────────────────────────────────
// Build & render Chart.js chart
// ─────────────────────────────────────────────
function renderChart() {
  const data    = TREND_DATA[currentSubject]?.[currentLevel] ?? [];
  const canvas  = document.getElementById('trendsChart');
  const ctx     = canvas.getContext('2d');

  // Destroy existing chart before creating a new one
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null;
  }

  const subjectLabel   = document.getElementById('selSubject').selectedOptions[0]?.text?.replace(/^\S+\s/, '') ?? currentSubject;
  const levelLabel     = currentLevel === 'higher' ? 'Higher' : 'Ordinary';
  const validYearCount = YEARS.filter(y => y !== 2020).length;

  // Hide subtopics panel when switching subjects
  const panel = document.getElementById('subtopicsPanel');
  if (panel && currentSubject !== 'economics') panel.style.display = 'none';

  // Update headings
  if (currentMode === 'bar') {
    document.getElementById('chartHeading').textContent =
      `Unit Frequency — ${subjectLabel} ${levelLabel} (2015–2025)`;
    document.getElementById('chartSub').textContent =
      currentSubject === 'economics'
        ? `Based on real SEC past papers (2015–2025) — click a bar to see subtopics`
        : `Total appearances across ${validYearCount} exam sittings (2020 excluded — no written exams)`;
  } else {
    document.getElementById('chartHeading').textContent =
      `Year-by-Year Appearances — ${subjectLabel} ${levelLabel}`;
    document.getElementById('chartSub').textContent =
      `Each line shows how often a topic appeared per year (1 = appeared, 0 = did not appear)`;
  }

  // Resize canvas wrapper
  canvas.parentElement.style.height = currentMode === 'bar' ? '340px' : '320px';

  if (currentMode === 'bar') {
    renderBarChart(ctx, data);
  } else {
    renderLineChart(ctx, data);
  }

  renderLegend(data);
  renderSidebar(data);
}

// ── BAR CHART ──
function renderBarChart(ctx, data) {
  const sorted   = [...data].sort((a, b) => totalAppearances(b) - totalAppearances(a));
  const labels   = sorted.map(t => t.topic);
  const counts   = sorted.map(t => totalAppearances(t));
  const maxYears = YEARS.filter(y => y !== 2020).length;
  const colors   = sorted.map((_, i) => PALETTE[i % PALETTE.length].bg);
  const borders  = sorted.map((_, i) => PALETTE[i % PALETTE.length].border);
  const hasSubtopics = currentSubject === 'economics';

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Appearances',
        data: counts,
        backgroundColor: colors,
        borderColor: borders,
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 900, easing: 'easeOutQuart' },
      onClick: hasSubtopics ? (evt, elements) => {
        if (!elements.length) return;
        const idx   = elements[0].index;
        const unit  = sorted[idx];
        if (unit.subtopics && Object.keys(unit.subtopics).length) {
          renderSubtopics(unit);
        }
      } : undefined,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(ctx) {
              const total = ctx.parsed.x;
              const pct   = Math.round((total / maxYears) * 100);
              const hint  = hasSubtopics ? ' — click to see subtopics' : '';
              return ` Appeared ${total} / ${maxYears} times (${pct}%)${hint}`;
            },
          },
        },
      },
      scales: {
        x: {
          min: 0,
          max: maxYears,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            stepSize: 1,
            font: { family: 'Inter', size: 12 },
            color: '#6b7280',
            callback: v => v === 0 ? '0' : v,
          },
          title: {
            display: true,
            text: 'Number of exam sittings topic appeared',
            font: { family: 'Inter', size: 11 },
            color: '#9ca3af',
          },
        },
        y: {
          grid: { display: false },
          ticks: {
            font: { family: 'Inter', size: 13, weight: '600' },
            color: '#374151',
          },
        },
      },
    },
  });

  // Show/hide subtopics panel
  const panel = document.getElementById('subtopicsPanel');
  if (panel) panel.style.display = hasSubtopics ? 'block' : 'none';
  if (hasSubtopics) {
    // Auto-show the top unit
    renderSubtopics(sorted[0]);
  }
}

// ── SUBTOPICS PANEL ──
function renderSubtopics(unit) {
  selectedUnit = unit.topic;
  const panel = document.getElementById('subtopicsPanel');
  if (!panel) return;

  const heading = document.getElementById('subtopicsHeading');
  if (heading) heading.textContent = `${unit.topic} — What Comes Up Most`;

  const canvas = document.getElementById('subtopicsChart');
  if (!canvas) return;

  if (subtopicInstance) { subtopicInstance.destroy(); subtopicInstance = null; }

  const subs    = Object.entries(unit.subtopics).sort((a, b) => b[1] - a[1]);
  const labels  = subs.map(s => s[0]);
  const counts  = subs.map(s => s[1]);
  const total   = counts.reduce((a, b) => a + b, 0);
  const unitIdx = (TREND_DATA[currentSubject]?.[currentLevel] ?? [])
    .sort((a,b) => totalAppearances(b) - totalAppearances(a))
    .findIndex(u => u.topic === unit.topic);
  const color   = PALETTE[unitIdx >= 0 ? unitIdx % PALETTE.length : 0];

  subtopicInstance = new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Total questions',
        data: counts,
        backgroundColor: color.bg,
        borderColor: color.border,
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 600, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(ctx) {
              const pct = Math.round((ctx.parsed.x / total) * 100);
              return ` ${ctx.parsed.x} questions (${pct}% of unit)`;
            },
          },
        },
      },
      scales: {
        x: {
          min: 0,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { stepSize: 1, font: { family: 'Inter', size: 12 }, color: '#6b7280' },
        },
        y: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 12 }, color: '#374151' },
        },
      },
    },
  });

  panel.style.display = 'block';
}

// ── LINE CHART ──
function renderLineChart(ctx, data) {
  const labels   = YEARS.map(String);
  const datasets = data.map((topicObj, i) => {
    const color = PALETTE[i % PALETTE.length];
    return {
      label:           topicObj.topic,
      data:            YEARS.map(y => topicObj.yearData[y] ?? 0),
      borderColor:     color.border,
      backgroundColor: color.light,
      pointBackgroundColor: color.border,
      pointBorderColor:     '#fff',
      pointBorderWidth:     2,
      pointRadius:          5,
      pointHoverRadius:     7,
      borderWidth: 2.5,
      tension: 0.35,
      fill: false,
    };
  });

  chartInstance = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 900,
        easing: 'easeOutQuart',
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(ctx) {
              const v = ctx.parsed.y;
              return ` ${ctx.dataset.label}: ${v === 1 ? '✅ Appeared' : '— Did not appear'}`;
            },
            title(items) {
              const yr = items[0].label;
              return yr === '2020' ? `${yr} (COVID — no written exam)` : yr;
            },
          },
        },
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            font: { family: 'Inter', size: 12 },
            color: '#6b7280',
          },
        },
        y: {
          min: -0.1,
          max: 1.1,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: {
            stepSize: 1,
            font: { family: 'Inter', size: 12 },
            color: '#6b7280',
            callback: v => v === 1 ? 'Yes' : v === 0 ? 'No' : '',
          },
          title: {
            display: true,
            text: 'Topic appeared in exam',
            font: { family: 'Inter', size: 11 },
            color: '#9ca3af',
          },
        },
      },
    },
  });
}

// ─────────────────────────────────────────────
// Render colour legend below chart
// ─────────────────────────────────────────────
function renderLegend(data) {
  const container = document.getElementById('chartLegend');
  container.innerHTML = data.map((t, i) => {
    const color = PALETTE[i % PALETTE.length];
    return `
      <div class="legend-item">
        <span class="legend-swatch" style="background:${color.border}"></span>
        ${t.topic}
      </div>
    `;
  }).join('');
}

// ─────────────────────────────────────────────
// Render sidebar panels
// ─────────────────────────────────────────────
function renderSidebar(data) {
  // Sort by total appearances
  const sorted = [...data]
    .map(t => ({ ...t, total: totalAppearances(t) }))
    .sort((a, b) => b.total - a.total);

  const maxTotal = sorted[0]?.total ?? 9;
  const top3     = sorted.slice(0, 3);

  // ── Likely to Come Up ──
  const likelyList = document.getElementById('likelyList');
  likelyList.innerHTML = top3.map((t, i) => {
    const maxYears  = YEARS.filter(y => y !== 2020).length;
    const pct       = Math.round((t.total / maxTotal) * 100);
    const appearedLast = appearedInYear(t, LATEST_YEAR);
    const tagCls    = appearedLast ? 'tag-hot' : 'tag-due';
    const tagText   = appearedLast ? `Appeared in ${LATEST_YEAR}` : `Not in ${LATEST_YEAR} — watch out!`;
    const color     = PALETTE[data.indexOf(data.find(d => d.topic === t.topic)) % PALETTE.length];

    return `
      <div class="likely-item">
        <span class="likely-rank rank-${i + 1}">${i + 1}</span>
        <div class="likely-info">
          <div class="likely-name">${t.topic}</div>
          <div class="likely-count">${t.total} / ${maxYears} years</div>
          <span class="likely-tag ${tagCls}">${tagText}</span>
        </div>
        <div class="likely-bar-wrap">
          <div class="likely-bar-track">
            <div class="likely-bar-fill" style="width:${pct}%; background:${color.border}"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // ── 2024 at a Glance ──
  const glanceList = document.getElementById('glanceList');
  glanceList.innerHTML = data.map(t => {
    const appeared = appearedInYear(t, LATEST_YEAR);
    return `
      <div class="glance-item">
        <span class="glance-topic">${t.topic}</span>
        <span class="glance-pill ${appeared ? 'pill-yes' : 'pill-no'}">
          ${appeared ? '✓ Yes' : '✗ No'}
        </span>
      </div>
    `;
  }).join('');
}

// ─────────────────────────────────────────────
// Init
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Subject dropdown
  document.getElementById('selSubject').addEventListener('change', e => {
    currentSubject = e.target.value;
    renderChart();
  });

  // Level toggle
  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLevel = btn.dataset.level;
      renderChart();
    });
  });

  // Chart mode toggle
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.dataset.mode;
      renderChart();
    });
  });

  // Initial render
  renderChart();

  // Download chart as PNG
  const downloadBtn = document.getElementById('downloadChartBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      if (!chartInstance) return;
      const url      = chartInstance.toBase64Image('image/png', 1.0);
      const heading  = document.getElementById('chartHeading')?.textContent || 'chart';
      const filename = heading.replace(/[^a-z0-9]+/gi, '-').toLowerCase() + '.png';
      const a        = document.createElement('a');
      a.href         = url;
      a.download     = filename;
      a.click();
    });
  }
});
