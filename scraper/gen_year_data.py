import json
from collections import defaultdict

SECTIONS = {
  'Economic Concepts': ['Consumer Behaviour','Consumer Behaviour / Price Effects','Consumer Utility and Demand','Utility and Consumer Behaviour','Equi-Marginal Principle','Law of Diminishing Marginal Utility','Law of Diminishing Marginal Returns','Fundamental Economic Concepts','Opportunity Cost','Opportunity Cost and Externalities','Economic Theory','Economic Thought','Economic Statements/Methodology','Methodology - Positive and Normative Statements','Production Possibilities Frontier','Production Possibility Frontier'],
  'Microeconomics': ['Supply and Demand','Demand and Supply','Demand and Market Equilibrium','Law of Demand','Market Equilibrium','Supply and Price Discrimination','Elasticity of Demand','Price Elasticity of Demand','Market Structures','Market Structures - Monopoly','Market Structures - Oligopoly','Market Structures - Perfect Competition','Market Structures / Oligopoly','Market Structures and Price Controls','Perfect Competition','Price Discrimination','Pricing Strategies','Cost Analysis','Cost Curves','Cost-Benefit Analysis','Production and Costs','Short Run Production Decisions','Capital and Labour','Land Economics','Market Failure','Market Failure - Demerit Goods','Externalities','Merit Goods','Greenwashing/Market Failure','Housing Market and Government Intervention','Environmental Sustainability','Price Controls','Price Controls and Housing Market','Price Controls and Market Failure','Economic Impact of Events/Cost-Benefit Analysis'],
  'Macroeconomics': ['National Income','Circular Flow of Income','National Income/Household Savings','Consumption','Investment','Multiplier','Inflation/Consumer Price Index','Inflation/Cost of Living','Types of Inflation','Unemployment','Employment','Labour Market and Employment','Labour Economics','Labour Market / Gig Economy','Labour Economics and Demographic Change','Labour Demand','Labour Force, Economic Rent, Bonds, Capital','Labour Market/Price Controls','Monetary Policy','Monetary Policy and Eurozone','Monetary Policy and Interest Rates','Banking / Financial Services','Banking and Credit','Central Bank and Financial Regulation','European Central Bank','Household Savings','Fiscal Policy','Government Finance','Government Finance and Employment','Government Finance and National Debt','Government Intervention','Government Policy Objectives','Government Policy and Ageing Population','Taxation'],
  'International Economics': ['International Trade','International Trade and Exchange Rates','Balance of Payments','Exchange Rates','Trade Protection/Tariffs','Trade Protectionism','Specialisation and Cost Advantages','Supply Chain'],
  'Irish Economy': ['Regional Development','Housing and Regional Development','Tourism','Tourism and Circular Flow','Foreign Direct Investment','Hidden Economy','Income Inequality and Government Policy'],
  'Economic Development': ['Economic Growth','Economic Growth and Development','Development Economics','Development Economics - HDI','Economic Development','Economic Aims','Ageing Population','Demographics and Population'],
}

STRAND_CHAPTERS = {
  'Microeconomics': {
    'Supply & Demand': ['Supply and Demand','Demand and Supply','Demand and Market Equilibrium','Law of Demand','Market Equilibrium','Supply and Price Discrimination'],
    'Elasticity': ['Elasticity of Demand','Price Elasticity of Demand'],
    'Market Structures': ['Market Structures','Market Structures - Monopoly','Market Structures - Oligopoly','Market Structures - Perfect Competition','Market Structures / Oligopoly','Perfect Competition','Price Discrimination','Pricing Strategies'],
    'Production & Costs': ['Cost Analysis','Cost Curves','Production and Costs','Short Run Production Decisions','Capital and Labour','Land Economics'],
    'Market Failure': ['Market Failure','Market Failure - Demerit Goods','Externalities','Merit Goods','Greenwashing/Market Failure','Price Controls','Price Controls and Housing Market','Price Controls and Market Failure','Environmental Sustainability','Housing Market and Government Intervention'],
  },
  'Macroeconomics': {
    'National Income': ['National Income','Circular Flow of Income','National Income/Household Savings','Consumption','Investment','Multiplier','Tourism and Circular Flow'],
    'Inflation': ['Inflation/Consumer Price Index','Inflation/Cost of Living','Types of Inflation'],
    'Unemployment': ['Unemployment','Employment','Labour Market and Employment','Labour Economics','Labour Market / Gig Economy','Labour Economics and Demographic Change','Labour Demand','Labour Force, Economic Rent, Bonds, Capital','Labour Market/Price Controls'],
    'Monetary Policy': ['Monetary Policy','Monetary Policy and Eurozone','Monetary Policy and Interest Rates','Banking / Financial Services','Banking and Credit','Central Bank and Financial Regulation','European Central Bank','Household Savings'],
    'Fiscal Policy': ['Fiscal Policy','Government Finance','Government Finance and Employment','Government Finance and National Debt','Government Intervention','Government Policy Objectives','Government Policy and Ageing Population','Taxation'],
  },
  'International Economics': {
    'International Trade': ['International Trade','International Trade and Exchange Rates','Supply Chain','Specialisation and Cost Advantages','Trade Protection/Tariffs','Trade Protectionism'],
    'Balance of Payments': ['Balance of Payments'],
    'Exchange Rates': ['Exchange Rates'],
  },
  'Economic Concepts': {
    'Consumer Theory': ['Consumer Behaviour','Consumer Behaviour / Price Effects','Consumer Utility and Demand','Utility and Consumer Behaviour','Equi-Marginal Principle','Law of Diminishing Marginal Utility','Law of Diminishing Marginal Returns'],
    'Economic Fundamentals': ['Fundamental Economic Concepts','Opportunity Cost','Opportunity Cost and Externalities','Production Possibilities Frontier','Production Possibility Frontier','Economic Theory','Economic Thought','Economic Statements/Methodology','Methodology - Positive and Normative Statements','Economic Impact of Events/Cost-Benefit Analysis'],
  },
  'Irish Economy': {
    'Regional Development': ['Regional Development','Housing and Regional Development','Tourism','Tourism and Circular Flow','Foreign Direct Investment','Hidden Economy','Income Inequality and Government Policy'],
  },
  'Economic Development': {
    'Development Economics': ['Economic Growth','Economic Growth and Development','Development Economics','Development Economics - HDI','Economic Development','Economic Aims'],
    'Demographics & Population': ['Ageing Population','Demographics and Population'],
  },
}

reverse_sec = {}
for sec, topics in SECTIONS.items():
    for t in topics:
        reverse_sec[t] = sec

chapter_reverse = {}
for strand, chapters in STRAND_CHAPTERS.items():
    for chapter, topics in chapters.items():
        for t in topics:
            chapter_reverse[t] = (strand, chapter)

with open('C:/Users/mathi/LCStudy/data/economics_questions.json', encoding='utf-8') as f:
    questions = json.load(f)

YEARS = list(range(2015, 2026))

section_year = defaultdict(lambda: defaultdict(int))
strand_chapter_year = defaultdict(lambda: defaultdict(lambda: defaultdict(int)))

for q in questions:
    raw = q['topic']
    yr = q['year']
    sec = reverse_sec.get(raw)
    if sec:
        section_year[sec][yr] += 1
    chap_info = chapter_reverse.get(raw)
    if chap_info:
        strand, chapter = chap_info
        strand_chapter_year[strand][chapter][yr] += 1

# Write output
out = []
out.append('const ECO_SECTION_YEARS = {')
out.append(f'  years: {YEARS},')
out.append('  sections: [')
for sec in SECTIONS:
    yr_data = [section_year[sec].get(yr, 0) for yr in YEARS]
    out.append(f"    {{name:'{sec}', data:{yr_data}}},")
out.append('  ]')
out.append('};')
out.append('')
out.append('const ECO_STRAND_YEARS = {')
for strand, chapters in STRAND_CHAPTERS.items():
    out.append(f"  '{strand}': {{chapters:[")
    for chapter, topics in chapters.items():
        yr_data = [strand_chapter_year[strand][chapter].get(yr, 0) for yr in YEARS]
        if sum(yr_data) > 0:
            out.append(f"    {{name:'{chapter}', data:{yr_data}}},")
    out.append('  ]},')
out.append('};')

result = '\n'.join(out)
print(result)
