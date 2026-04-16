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
// Economics strand data — from real SEC papers
// ─────────────────────────────────────────────
const ECO_STRAND_DATA = [
  {strand:'Market Structures',        total:10, yearData:{2015:1,2016:1,2017:1,2018:1,2019:1,2020:1,2021:1,2022:1,2023:1,2024:1,2025:1}, chapters:[{name:'Market Structures',total:8,recent:3},{name:'Perfect Competition',total:3,recent:3},{name:'Oligopoly',total:3,recent:3},{name:'Price Discrimination',total:3,recent:3},{name:'Pricing Strategies',total:2,recent:2},{name:'Monopoly',total:3,recent:0}]},
  {strand:'Government & Fiscal Policy',total:10, yearData:{2015:1,2016:1,2017:1,2018:1,2019:1,2020:1,2021:1,2022:1,2023:1,2024:1,2025:1}, chapters:[{name:'Government Intervention',total:4,recent:4},{name:'Fiscal Policy',total:5,recent:3},{name:'National Debt',total:3,recent:3},{name:'Taxation',total:9,recent:2},{name:'Ageing Population Policy',total:1,recent:1}]},
  {strand:'Consumer Theory',           total:10, yearData:{2015:1,2016:1,2017:1,2018:1,2019:1,2020:1,2021:1,2022:1,2023:1,2024:1,2025:1}, chapters:[{name:'Cost Curves',total:3,recent:3},{name:'Consumer Utility',total:2,recent:2},{name:'PPF',total:2,recent:2},{name:'Land Economics',total:2,recent:2},{name:'Economic Methodology',total:2,recent:2},{name:'Consumer Behaviour',total:4,recent:1}]},
  {strand:'Supply & Demand',           total:8,  yearData:{2015:1,2016:1,2017:1,2018:1,2019:1,2020:1,2021:0,2022:1,2023:1,2024:1,2025:0}, chapters:[{name:'Supply & Demand',total:6,recent:4},{name:'Law of Demand',total:1,recent:1},{name:'Market Equilibrium',total:6,recent:0},{name:'Demand Analysis',total:4,recent:0},{name:'Demand & Market Equilibrium',total:2,recent:0}]},
  {strand:'International Trade',       total:9,  yearData:{2015:1,2016:0,2017:1,2018:1,2019:1,2020:0,2021:1,2022:1,2023:1,2024:1,2025:1}, chapters:[{name:'International Trade',total:6,recent:4},{name:'Balance of Payments',total:3,recent:3},{name:'Supply Chain',total:1,recent:1},{name:'Trade Protectionism',total:2,recent:1},{name:'Exchange Rates',total:1,recent:0}]},
  {strand:'Money & Banking',           total:7,  yearData:{2015:0,2016:1,2017:1,2018:1,2019:0,2020:1,2021:1,2022:1,2023:1,2024:0,2025:1}, chapters:[{name:'European Central Bank',total:3,recent:3},{name:'Monetary Policy',total:5,recent:2},{name:'Banking & Financial Services',total:2,recent:2},{name:'Central Bank Regulation',total:2,recent:2},{name:'Interest Rates',total:2,recent:2},{name:'Household Savings',total:2,recent:2}]},
  {strand:'Economic Development',      total:7,  yearData:{2015:1,2016:0,2017:0,2018:1,2019:1,2020:1,2021:1,2022:1,2023:0,2024:1,2025:1}, chapters:[{name:'Regional Development',total:3,recent:3},{name:'HDI',total:3,recent:3},{name:'Income Inequality',total:2,recent:2},{name:'Foreign Direct Investment',total:1,recent:1},{name:'Demographics & Population',total:1,recent:1}]},
  {strand:'Unemployment & Labour',     total:6,  yearData:{2015:0,2016:1,2017:1,2018:1,2019:1,2020:1,2021:0,2022:0,2023:0,2024:1,2025:1}, chapters:[{name:'Labour Market & Employment',total:5,recent:0},{name:'Unemployment',total:3,recent:3},{name:'Gig Economy',total:2,recent:2},{name:'Demographic Change',total:2,recent:0},{name:'Labour Economics',total:1,recent:1}]},
  {strand:'Market Failure',            total:6,  yearData:{2015:0,2016:0,2017:1,2018:0,2019:0,2020:0,2021:1,2022:1,2023:1,2024:1,2025:1}, chapters:[{name:'Demerit Goods',total:3,recent:3},{name:'Externalities',total:3,recent:3},{name:'Market Failure',total:2,recent:2},{name:'Price Controls & Housing',total:2,recent:1},{name:'Merit Goods',total:1,recent:1},{name:'Greenwashing',total:1,recent:1}]},
  {strand:'Elasticity',                total:6,  yearData:{2015:1,2016:1,2017:1,2018:0,2019:0,2020:0,2021:0,2022:1,2023:1,2024:0,2025:1}, chapters:[{name:'Elasticity of Demand',total:9,recent:2},{name:'Price Elasticity',total:3,recent:2}]},
  {strand:'National Income',           total:5,  yearData:{2015:0,2016:0,2017:0,2018:1,2019:0,2020:0,2021:0,2022:1,2023:1,2024:1,2025:1}, chapters:[{name:'National Income',total:6,recent:3},{name:'Circular Flow of Income',total:3,recent:3},{name:'Consumption',total:1,recent:1},{name:'Investment',total:1,recent:1},{name:'Multiplier',total:1,recent:1}]},
  {strand:'Inflation',                 total:1,  yearData:{2015:0,2016:0,2017:0,2018:0,2019:0,2020:0,2021:0,2022:0,2023:0,2024:0,2025:1}, chapters:[{name:'CPI',total:1,recent:1},{name:'Cost of Living',total:1,recent:1},{name:'Types of Inflation',total:1,recent:1}]},
];

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
let currentSubject    = 'economics';
let currentLevel      = 'higher';
let currentMode       = 'bar';
let chartInstance     = null;
let ecoStrandInstance = null;
let ecoChapterInstance= null;
let selectedStrand    = ECO_STRAND_DATA[0].strand;

// ─────────────────────────────────────────────
// Build & render Chart.js chart
// ─────────────────────────────────────────────
function renderChart() {
  // Economics gets its own two-chart layout
  if (currentSubject === 'economics') {
    document.getElementById('genericChartSection').style.display = 'none';
    document.getElementById('ecoChartSection').style.display     = 'block';
    document.querySelector('.trends-mode-wrap').style.display    = 'none';
    renderEconomicsStrands();
    renderEconomicsChapters(selectedStrand);
    renderSidebar(ECO_STRAND_DATA.map(s => ({ topic: s.strand, yearData: s.yearData })));
    return;
  }

  // Generic subjects
  document.getElementById('genericChartSection').style.display = 'block';
  document.getElementById('ecoChartSection').style.display     = 'none';
  document.querySelector('.trends-mode-wrap').style.display    = '';

  const data   = TREND_DATA[currentSubject]?.[currentLevel] ?? [];
  const canvas = document.getElementById('trendsChart');
  const ctx    = canvas.getContext('2d');

  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }

  const subjectLabel   = document.getElementById('selSubject').selectedOptions[0]?.text?.replace(/^\S+\s/, '') ?? currentSubject;
  const levelLabel     = currentLevel === 'higher' ? 'Higher' : 'Ordinary';
  const validYearCount = YEARS.filter(y => y !== 2020).length;

  if (currentMode === 'bar') {
    document.getElementById('chartHeading').textContent = `Topic Frequency — ${subjectLabel} ${levelLabel} (2015–2025)`;
    document.getElementById('chartSub').textContent     = `Total appearances across ${validYearCount} exam sittings (2020 excluded — no written exams)`;
  } else {
    document.getElementById('chartHeading').textContent = `Year-by-Year Appearances — ${subjectLabel} ${levelLabel}`;
    document.getElementById('chartSub').textContent     = 'Each line shows whether a topic appeared per year';
  }

  canvas.parentElement.style.height = currentMode === 'bar' ? '340px' : '320px';
  if (currentMode === 'bar') renderBarChart(ctx, data);
  else                       renderLineChart(ctx, data);

  renderLegend(data);
  renderSidebar(data.map(t => ({ topic: t.topic, yearData: t.yearData })));
}

// ── ECONOMICS: Strand frequency chart ──
function renderEconomicsStrands() {
  if (ecoStrandInstance) { ecoStrandInstance.destroy(); ecoStrandInstance = null; }
  const canvas = document.getElementById('ecoStrandChart');
  if (!canvas) return;

  const sorted  = [...ECO_STRAND_DATA].sort((a, b) => b.total - a.total);
  const labels  = sorted.map(s => s.strand);
  const counts  = sorted.map(s => s.total);
  const maxYrs  = YEARS.filter(y => y !== 2020).length;

  ecoStrandInstance = new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Years appeared',
        data: counts,
        backgroundColor: sorted.map((_, i) => PALETTE[i % PALETTE.length].bg),
        borderColor:     sorted.map((_, i) => PALETTE[i % PALETTE.length].border),
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 700, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(ctx) {
              const pct = Math.round((ctx.parsed.x / maxYrs) * 100);
              return ` Appeared in ${ctx.parsed.x} of ${maxYrs} sittings (${pct}%)`;
            },
          },
        },
      },
      scales: {
        x: {
          min: 0, max: maxYrs,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { stepSize: 1, font: { family: 'Inter', size: 12 }, color: '#6b7280' },
          title: { display: true, text: 'Number of exam years', font: { family: 'Inter', size: 11 }, color: '#9ca3af' },
        },
        y: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 13, weight: '600' }, color: '#374151' },
        },
      },
    },
  });

  // Build strand selector pills
  const selector = document.getElementById('ecoStrandSelector');
  if (selector) {
    selector.innerHTML = ECO_STRAND_DATA.map(s => `
      <button class="eco-strand-pill${s.strand === selectedStrand ? ' active' : ''}"
              data-strand="${s.strand}">${s.strand}</button>
    `).join('');
    selector.querySelectorAll('.eco-strand-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        selector.querySelectorAll('.eco-strand-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedStrand = btn.dataset.strand;
        renderEconomicsChapters(selectedStrand);
      });
    });
  }
}

// ── ECONOMICS: Chapter breakdown chart ──
function renderEconomicsChapters(strandName) {
  if (ecoChapterInstance) { ecoChapterInstance.destroy(); ecoChapterInstance = null; }
  const canvas = document.getElementById('ecoChapterChart');
  if (!canvas) return;

  const strand = ECO_STRAND_DATA.find(s => s.strand === strandName);
  if (!strand) return;

  // Sort by recent first, then total
  const chapters = [...strand.chapters].sort((a, b) => b.recent - a.recent || b.total - a.total);
  const labels   = chapters.map(c => c.name);
  const recent   = chapters.map(c => c.recent);
  const older    = chapters.map(c => c.total - c.recent);

  const strandIdx = ECO_STRAND_DATA.findIndex(s => s.strand === strandName);
  const color     = PALETTE[strandIdx % PALETTE.length];

  ecoChapterInstance = new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Recent (2020–2025)',
          data: recent,
          backgroundColor: color.bg,
          borderColor: color.border,
          borderWidth: 2,
          borderRadius: 4,
          borderSkipped: false,
        },
        {
          label: 'Older (2015–2019)',
          data: older,
          backgroundColor: 'rgba(156,163,175,0.4)',
          borderColor: '#9ca3af',
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 500, easing: 'easeOutQuart' },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: { font: { family: 'Inter', size: 12 }, color: '#6b7280', boxWidth: 14 },
        },
        tooltip: {
          callbacks: {
            label(ctx) {
              return ` ${ctx.dataset.label}: ${ctx.parsed.x} question${ctx.parsed.x !== 1 ? 's' : ''}`;
            },
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          min: 0,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { stepSize: 1, font: { family: 'Inter', size: 12 }, color: '#6b7280' },
          title: { display: true, text: 'Number of questions', font: { family: 'Inter', size: 11 }, color: '#9ca3af' },
        },
        y: {
          stacked: true,
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 12 }, color: '#374151' },
        },
      },
    },
  });
}

// ── BAR CHART ──
function renderBarChart(ctx, data) {
  const sorted   = [...data].sort((a, b) => totalAppearances(b) - totalAppearances(a));
  const labels   = sorted.map(t => t.topic);
  const counts   = sorted.map(t => totalAppearances(t));
  const maxYears = YEARS.filter(y => y !== 2020).length;
  const colors  = sorted.map((_, i) => PALETTE[i % PALETTE.length].bg);
  const borders = sorted.map((_, i) => PALETTE[i % PALETTE.length].border);

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
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(ctx) {
              const pct = Math.round((ctx.parsed.x / maxYears) * 100);
              return ` Appeared ${ctx.parsed.x} / ${maxYears} times (${pct}%)`;
            },
          },
        },
      },
      scales: {
        x: {
          min: 0, max: maxYears,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { stepSize: 1, font: { family: 'Inter', size: 12 }, color: '#6b7280', callback: v => v === 0 ? '0' : v },
          title: { display: true, text: 'Number of exam sittings topic appeared', font: { family: 'Inter', size: 11 }, color: '#9ca3af' },
        },
        y: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 13, weight: '600' }, color: '#374151' },
        },
      },
    },
  });
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
  // data items may have .total already (economics) or need calculating
  const sorted = [...data]
    .map(t => ({ ...t, total: t.total ?? totalAppearances(t) }))
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
