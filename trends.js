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
// Economics per-year data (from gen_year_data.py)
// ─────────────────────────────────────────────
const ECO_SECTION_YEARS = {
  years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  sections: [
    {name:'Economic Concepts',       data:[4,  0,  1,  0,  3,  1,  3,  2,  6,  1,  2]},
    {name:'Microeconomics',          data:[7, 12,  9,  9,  6,  3, 10, 11,  8, 11,  7]},
    {name:'Macroeconomics',          data:[4,  8,  6,  7,  7,  8,  7,  7,  7, 10, 10]},
    {name:'International Economics', data:[2,  0,  1,  1,  1,  0,  2,  2,  1,  2,  4]},
    {name:'Irish Economy',           data:[0,  0,  0,  2,  0,  2,  0,  4,  0,  2,  0]},
    {name:'Economic Development',    data:[1,  0,  0,  0,  1,  1,  3,  2,  0,  1,  1]},
  ],
};

// Official LC Economics syllabus strands (5 strands)
const ECO_STRAND_YEARS = {
  'Strand 1 — Foundations': { chapters: [
    { name: '1.1 Economic Thinking & Methodology', data: [2, 0, 1, 0, 1, 0, 1, 2, 2, 1, 3] },
    { name: '1.2 Scarcity, Choice & PPF',          data: [2, 0, 0, 0, 2, 1, 2, 0, 4, 0, 0] },
  ]},
  'Strand 2 — Decision Making': { chapters: [
    { name: '2.1 Supply, Demand & Equilibrium',    data: [4, 2, 2, 3, 3, 2, 0, 1, 1, 2, 0] },
    { name: '2.2 Elasticity',                      data: [1, 5, 2, 0, 0, 0, 0, 1, 2, 0, 1] },
    { name: '2.3 Costs of Production',             data: [0, 2, 0, 2, 0, 0, 0, 2, 3, 3, 0] },
    { name: '2.4 Govt Intervention & Prices',      data: [0, 0, 2, 0, 0, 0, 3, 4, 1, 3, 3] },
  ]},
  'Strand 3 — Markets': { chapters: [
    { name: '3.1 Market Structures',               data: [2, 3, 3, 4, 3, 1, 7, 3, 1, 2, 1] },
    { name: '3.2 Labour Market',                   data: [0, 4, 1, 1, 3, 4, 0, 0, 0, 3, 2] },
    { name: '3.3 Market Failure & Externalities',  data: [0, 0, 2, 0, 0, 0, 3, 4, 1, 3, 3] },
  ]},
  'Strand 4 — Macro Policy': { chapters: [
    { name: '4.1 National Income & Circular Flow', data: [0, 0, 0, 3, 0, 0, 0, 3, 1, 5, 1] },
    { name: '4.2 Fiscal Policy & Taxation',        data: [4, 2, 4, 2, 4, 2, 3, 1, 4, 2, 1] },
    { name: '4.3 Employment & Unemployment',       data: [0, 4, 1, 1, 3, 4, 0, 0, 0, 3, 2] },
    { name: '4.4 Monetary Policy & ECB',           data: [0, 2, 1, 1, 0, 2, 4, 3, 2, 0, 3] },
    { name: '4.5 Inflation & Price Level',         data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3] },
  ]},
  'Strand 5 — International': { chapters: [
    { name: '5.1 Economic Growth & Development',   data: [1, 0, 0, 0, 1, 1, 3, 0, 0, 1, 1] },
    { name: '5.2 Globalisation & Trade Blocs',     data: [0, 0, 0, 2, 0, 2, 0, 4, 0, 2, 0] },
    { name: '5.3 International Trade & BOP',       data: [2, 0, 1, 1, 1, 0, 2, 2, 1, 2, 4] },
  ]},
};

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
let currentSubject         = 'economics';
let currentLevel           = 'higher';
let currentMode            = 'bar';
let chartInstance          = null;
let ecoStrandInstance      = null;
let ecoChapterInstance     = null;
let ecoByYearChartInstance = null;
let ecoDeepDiveInstance    = null;
let selectedStrand         = 'Strand 2 — Decision Making';
let selectedByYearStrand   = 'Strand 4 — Macro Policy';

// ─────────────────────────────────────────────
// Build & render Chart.js chart
// ─────────────────────────────────────────────
function renderChart() {
  // Economics gets its own two-chart layout
  if (currentSubject === 'economics') {
    document.getElementById('genericChartSection').style.display = 'none';
    document.getElementById('ecoChartSection').style.display     = 'block';
    document.querySelector('.trends-mode-wrap').style.display    = ''; // show mode toggle

    if (currentMode === 'line') {
      // "View by Year" mode → per-year stacked + deep dive
      document.getElementById('ecoFreqSection').style.display    = 'none';
      document.getElementById('ecoByYearSection').style.display  = 'block';
      renderEcoByYear();
      renderEcoStrandDeepDive(selectedByYearStrand);
    } else {
      // "Frequency" mode → strand bar + chapter breakdown
      document.getElementById('ecoFreqSection').style.display    = 'block';
      document.getElementById('ecoByYearSection').style.display  = 'none';
      renderEconomicsStrands();
      renderEconomicsChapters(selectedStrand);
    }
    renderEcoPredictions(); // always shown for economics
    // Sidebar — build from ECO_SECTION_YEARS so we get real yearly presence
    const ecoSidebarData = ECO_SECTION_YEARS.sections.map(sec => {
      const yearData = {};
      ECO_SECTION_YEARS.years.forEach((y, i) => { yearData[y] = sec.data[i] > 0 ? 1 : 0; });
      return { topic: sec.name, yearData };
    });
    renderSidebar(ecoSidebarData);
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

// ── Helper: build numbered strand pills ──
function buildStrandPills(containerId, activeStrand, onSelect) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = Object.keys(ECO_STRAND_YEARS).map(name => {
    const m   = name.match(/Strand\s*(\d+)\s*[—\-]\s*(.+)/i);
    const num = m ? m[1] : '?';
    const lbl = m ? m[2] : name;
    return `
      <button class="eco-strand-pill${name === activeStrand ? ' active' : ''}" data-strand="${name}">
        <span class="eco-strand-num">${num}</span>${lbl}
      </button>`;
  }).join('');
  el.querySelectorAll('.eco-strand-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      el.querySelectorAll('.eco-strand-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onSelect(btn.dataset.strand);
    });
  });
}

// ── ECONOMICS: Section frequency chart (uses real ECO_SECTION_YEARS data) ──
function renderEconomicsStrands() {
  if (ecoStrandInstance) { ecoStrandInstance.destroy(); ecoStrandInstance = null; }
  const canvas = document.getElementById('ecoStrandChart');
  if (!canvas) return;

  // Compute total questions per section from ECO_SECTION_YEARS
  const sections = ECO_SECTION_YEARS.sections.map((sec, i) => ({
    name:  sec.name,
    total: sec.data.reduce((s, v) => s + v, 0),
    color: PALETTE[i % PALETTE.length],
  })).sort((a, b) => b.total - a.total);

  ecoStrandInstance = new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: {
      labels: sections.map(s => s.name),
      datasets: [{
        label: 'Total questions',
        data:  sections.map(s => s.total),
        backgroundColor: sections.map(s => s.color.bg),
        borderColor:     sections.map(s => s.color.border),
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
              const total = ctx.parsed.x;
              const allTotal = sections.reduce((s, v) => s + v.total, 0);
              const pct = Math.round((total / allTotal) * 100);
              return ` ${total} questions (${pct}% of all past-paper questions)`;
            },
          },
        },
      },
      scales: {
        x: {
          min: 0,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { stepSize: 10, font: { family: 'Inter', size: 12 }, color: '#6b7280' },
          title: { display: true, text: 'Total questions in past papers (2015–2025)', font: { family: 'Inter', size: 11 }, color: '#9ca3af' },
        },
        y: {
          grid: { display: false },
          ticks: { font: { family: 'Inter', size: 13, weight: '600' }, color: '#374151' },
        },
      },
    },
  });

  // Build section selector pills
  buildStrandPills('ecoStrandSelector', selectedStrand, name => {
    selectedStrand = name;
    renderEconomicsChapters(selectedStrand);
  });
}

// ── ECONOMICS: Chapter breakdown (styled list with real data + percentages) ──
function renderEconomicsChapters(sectionName) {
  ecoChapterInstance = null;
  const el = document.getElementById('ecoChapterChart');
  if (!el) return;

  const sectionData = ECO_STRAND_YEARS[sectionName];
  if (!sectionData) return;

  const years     = ECO_SECTION_YEARS.years; // [2015..2025]
  const n         = years.length;            // 11
  const recent4Idx = [2022, 2023, 2024, 2025].map(y => years.indexOf(y)); // indices 7-10

  // Compute stats for each chapter from real year-by-year data
  const chapters = sectionData.chapters.map(ch => {
    const total         = ch.data.reduce((s, v) => s + v, 0);
    const yearsAppeared = ch.data.filter(v => v > 0).length;
    const pct           = Math.round((yearsAppeared / n) * 100);
    const recent4       = recent4Idx.reduce((s, i) => s + ch.data[i], 0);
    const older         = total - recent4;

    let lastYearIdx = -1;
    for (let i = ch.data.length - 1; i >= 0; i--) {
      if (ch.data[i] > 0) { lastYearIdx = i; break; }
    }
    const lastYear = lastYearIdx >= 0 ? years[lastYearIdx] : null;
    const gap      = lastYear ? 2025 - lastYear : 99;

    return { name: ch.name, total, yearsAppeared, pct, recent4, older, lastYear, gap };
  }).filter(c => c.total > 0).sort((a, b) => b.total - a.total);

  const maxTotal   = Math.max(...chapters.map(c => c.total), 1);
  const sectionIdx = Object.keys(ECO_STRAND_YEARS).indexOf(sectionName);
  const color      = PALETTE[sectionIdx % PALETTE.length];

  el.innerHTML = chapters.map((ch, i) => {
    const recent4Pct = Math.round((ch.recent4 / maxTotal) * 100);
    const olderPct   = Math.round((ch.older   / maxTotal) * 100);

    // Tag
    let tagHtml = '';
    if (ch.recent4 >= 4)                            tagHtml = `<span class="likely-tag tag-hot">Trending ↑</span>`;
    else if (ch.gap >= 3 && ch.yearsAppeared >= 3)  tagHtml = `<span class="likely-tag tag-due">Overdue</span>`;
    else if (ch.pct >= 80)                          tagHtml = `<span class="likely-tag tag-hot">Staple</span>`;

    return `
      <div class="chapter-item">
        <div class="chapter-item-top">
          <span class="chapter-num">${i + 1}</span>
          <span class="chapter-name">${ch.name}</span>
          <span class="chapter-pct-badge" style="color:${color.border}; border-color:${color.border}">${ch.pct}%</span>
          ${tagHtml}
        </div>
        <div class="chapter-bar-track">
          <div class="chapter-bar-fill" style="width:${recent4Pct}%; background:${color.bg};${recent4Pct > 0 && olderPct > 0 ? ' border-right:2px solid #fff' : ''}"></div>
          <div class="chapter-bar-fill chapter-bar-older" style="width:${olderPct}%"></div>
        </div>
        <div class="chapter-stats">
          <span>Appeared in <strong>${ch.yearsAppeared}/${n}</strong> past papers</span>
          <span style="color:${color.border}"><strong>${ch.recent4}</strong> questions in last 4 exams</span>
        </div>
      </div>
    `;
  }).join('') + `
    <div class="chapter-bar-legend" style="margin-top:12px; padding-top:10px; border-top:1px solid var(--gray-100)">
      <span style="color:${color.border}">■ Recent (2022–2025)</span>
      <span style="color:var(--gray-400)">■ Older (2015–2021)</span>
      <span style="color:var(--gray-400); margin-left:auto">% = proportion of the 11 past papers where topic appeared</span>
    </div>
  `;
}

// ── ECONOMICS: Sections stacked bar by year ──
function renderEcoByYear() {
  if (ecoByYearChartInstance) { ecoByYearChartInstance.destroy(); ecoByYearChartInstance = null; }
  const canvas = document.getElementById('ecoSectionYearChart');
  if (!canvas) return;

  const labels   = ECO_SECTION_YEARS.years.map(String);
  const datasets = ECO_SECTION_YEARS.sections.map((sec, i) => {
    const color = PALETTE[i % PALETTE.length];
    return {
      label:           sec.name,
      data:            sec.data,
      backgroundColor: color.bg,
      borderColor:     color.border,
      borderWidth:     1,
      borderRadius:    3,
      borderSkipped:   false,
    };
  });

  ecoByYearChartInstance = new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 700, easing: 'easeOutQuart' },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: { font: { family: 'Inter', size: 12 }, color: '#6b7280', boxWidth: 14, padding: 16 },
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label(ctx) {
              if (ctx.parsed.y === 0) return null;
              return ` ${ctx.dataset.label}: ${ctx.parsed.y} q`;
            },
            footer(items) {
              const total = items.reduce((s, i) => s + i.parsed.y, 0);
              return `Total: ${total} questions`;
            },
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { font: { family: 'Inter', size: 12 }, color: '#6b7280' },
        },
        y: {
          stacked: true,
          min: 0,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { stepSize: 5, font: { family: 'Inter', size: 12 }, color: '#6b7280' },
          title: { display: true, text: 'Number of questions', font: { family: 'Inter', size: 11 }, color: '#9ca3af' },
        },
      },
    },
  });
}

// ── ECONOMICS: Strand deep dive by year ──
function renderEcoStrandDeepDive(strandName) {
  if (ecoDeepDiveInstance) { ecoDeepDiveInstance.destroy(); ecoDeepDiveInstance = null; }
  const canvas = document.getElementById('ecoDeepDiveChart');
  if (!canvas) return;

  const strandData = ECO_STRAND_YEARS[strandName];
  if (!strandData) return;

  const heading = document.getElementById('ecoDeepDiveHeading');
  if (heading) heading.textContent = `Strand Deep Dive — ${strandName}`;

  const labels   = ECO_SECTION_YEARS.years.map(String);
  const datasets = strandData.chapters.map((ch, i) => {
    const color = PALETTE[i % PALETTE.length];
    return {
      label:           ch.name,
      data:            ch.data,
      backgroundColor: color.bg,
      borderColor:     color.border,
      borderWidth:     1.5,
      borderRadius:    3,
      borderSkipped:   false,
    };
  });

  ecoDeepDiveInstance = new Chart(canvas.getContext('2d'), {
    type: 'bar',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 500, easing: 'easeOutQuart' },
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: { font: { family: 'Inter', size: 12 }, color: '#6b7280', boxWidth: 14, padding: 14 },
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label(ctx) {
              if (ctx.parsed.y === 0) return null;
              return ` ${ctx.dataset.label}: ${ctx.parsed.y} question${ctx.parsed.y !== 1 ? 's' : ''}`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { font: { family: 'Inter', size: 12 }, color: '#6b7280' },
        },
        y: {
          min: 0,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { stepSize: 1, font: { family: 'Inter', size: 12 }, color: '#6b7280' },
          title: { display: true, text: 'Number of questions', font: { family: 'Inter', size: 11 }, color: '#9ca3af' },
        },
      },
    },
  });

  // Build strand selector pills
  buildStrandPills('ecoByYearStrandSelector', strandName, name => {
    selectedByYearStrand = name;
    renderEcoStrandDeepDive(selectedByYearStrand);
  });
}

// ── ECONOMICS: Compute exam predictions ──
function computeEcoPredictions() {
  const years = ECO_SECTION_YEARS.years; // 2015–2025
  const n     = years.length;
  const recent3Idx = [2023, 2024, 2025].map(y => years.indexOf(y));

  const candidates = [];

  for (const [strandName, strandObj] of Object.entries(ECO_STRAND_YEARS)) {
    for (const ch of strandObj.chapters) {
      const total = ch.data.reduce((s, v) => s + v, 0);
      if (total === 0) continue;

      const yearsAppeared = ch.data.filter(v => v > 0).length;
      const recent3       = recent3Idx.reduce((s, i) => s + (ch.data[i] > 0 ? 1 : 0), 0);

      let lastYearIdx = -1;
      for (let i = ch.data.length - 1; i >= 0; i--) {
        if (ch.data[i] > 0) { lastYearIdx = i; break; }
      }
      const lastYear = lastYearIdx >= 0 ? years[lastYearIdx] : null;
      const gap      = lastYear ? 2025 - lastYear : 99;

      // Base score: historical frequency + recent presence
      let score = (yearsAppeared / n) * 60 + recent3 * 13;
      // Overdue boost: lots of history but absent recently
      if (gap >= 2 && yearsAppeared >= 4) score += gap * 4;

      // Tag
      let tag, tagLabel;
      if      (yearsAppeared >= 8)                       { tag = 'staple';   tagLabel = 'Staple';    }
      else if (recent3 >= 2)                             { tag = 'hot';      tagLabel = 'Hot streak'; }
      else if (gap >= 2 && yearsAppeared >= 4)           { tag = 'due';      tagLabel = 'Overdue';   }
      else                                               { tag = 'watch';    tagLabel = 'Watch';     }

      // Reason
      let reason;
      if (tag === 'staple') {
        reason = `A core topic — appeared in ${yearsAppeared} of ${n} past papers. Expect it every year.`;
      } else if (tag === 'hot') {
        reason = `Appeared in ${recent3} of the last 3 exams — a clear upward trend worth prioritising.`;
      } else if (tag === 'due') {
        reason = `${yearsAppeared} historical appearances but not seen since ${lastYear} — statistically due for a return.`;
      } else {
        reason = `${yearsAppeared} past-paper appearances. A solid topic to have covered.`;
      }

      const pct = Math.round((yearsAppeared / n) * 100);
      candidates.push({ strand: strandName, chapter: ch.name, score, tag, tagLabel, reason, yearsAppeared, pct, recent3, lastYear, gap });
    }
  }

  candidates.sort((a, b) => b.score - a.score);
  return candidates.slice(0, 5);
}

// ── ECONOMICS: Render predictions card ──
function renderEcoPredictions() {
  const container = document.getElementById('ecoPredictionsList');
  if (!container) return;

  const predictions = computeEcoPredictions();
  const tagClass = { staple: 'tag-hot', hot: 'tag-hot', due: 'tag-due', watch: 'tag-due' };
  const rankBg   = ['#f59e0b', 'var(--gray-400)', '#a16207', 'var(--gray-400)', 'var(--gray-400)'];

  container.innerHTML = predictions.map((p, i) => `
    <div class="pred-item">
      <span class="pred-rank" style="background:${rankBg[i]}">${i + 1}</span>
      <div class="pred-info">
        <div class="pred-header">
          <span class="pred-name">${p.chapter}</span>
          <span class="pred-strand-badge">${p.strand}</span>
          <span class="likely-tag ${tagClass[p.tag] || 'tag-due'}">${p.tagLabel}</span>
          <span class="pred-pct">${p.pct}%</span>
        </div>
        <p class="pred-reason">${p.reason}</p>
      </div>
    </div>
  `).join('');
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
