/* =============================================
   MS Viewer — All Questions Data
   Add questions by following the same object
   structure. topicLabel must be consistent
   within a subject.
   ============================================= */

const MSV_SUBJECTS = [
  { id: 'economics', label: 'Economics', emoji: '📉' },
  { id: 'business',  label: 'Business',  emoji: '💼' },
  { id: 'biology',   label: 'Biology',   emoji: '🧬' },
  { id: 'chemistry', label: 'Chemistry', emoji: '⚗️' },
  { id: 'history',   label: 'History',   emoji: '🏛️' },
  { id: 'maths',     label: 'Maths',     emoji: '📐' },
];

const MSV_QUESTIONS = [

  /* ══════════════════════════════════════════
     ECONOMICS
  ══════════════════════════════════════════ */

  // ── Supply & Demand ──────────────────────
  {
    id: 'eco-sd-1',
    subject: 'economics', topic: 'supply-demand', topicLabel: 'Supply & Demand',
    year: 2022, level: 'Higher Level', section: 'Section A — Q1', marks: 10,
    question: 'Explain, using a supply and demand diagram, the effect of an increase in income on the market for a normal good.\n(10 marks)',
    markingScheme: [
      'Normal good defined: A good for which demand increases as consumer income rises. (2M)',
      'Demand curve shifts right: An increase in income causes the demand curve (D1) to shift rightward to D2 — more is demanded at every price. (3M)',
      'New equilibrium: Equilibrium price rises from P1 to P2 and equilibrium quantity rises from Q1 to Q2. (3M)',
      'Diagram: Well-labelled diagram showing D1, D2, the S curve, and both equilibrium points. (2M)',
    ],
    fullMarksTips: [
      'State "normal good" and link income rise to the rightward shift — the mechanism is what earns marks.',
      'Use subscript notation (D1 → D2, P1 → P2, Q1 → Q2) — unlabelled diagrams lose marks.',
      'State that SUPPLY does not change — many students omit this and lose a mark.',
    ],
  },
  {
    id: 'eco-sd-2',
    subject: 'economics', topic: 'supply-demand', topicLabel: 'Supply & Demand',
    year: 2021, level: 'Higher Level', section: 'Section B — Q5', marks: 20,
    question: '(a) State and explain THREE non-price factors that can cause a shift in the supply curve.\n(15 marks)\n\n(b) Using a diagram, explain the effect of a fall in the price of a complement on the equilibrium price and quantity of the original good.\n(5 marks)',
    markingScheme: [
      'Factor 1 — Cost of inputs: If wages or raw material costs rise, production becomes more expensive and firms supply less at every price — supply curve shifts left. (5M)',
      'Factor 2 — Technology: Improved technology reduces costs, allowing firms to produce more at every price — supply curve shifts right. (5M)',
      'Factor 3 — Taxes/Subsidies: A new tax increases costs shifting supply left; a subsidy reduces costs shifting supply right. (5M)',
      'Part (b) — Complement defined: A good consumed together with another (e.g. cars and petrol). (1M)',
      'Part (b) — Effect: Fall in price of the complement raises demand for it; demand for the original good rises; D shifts right; both P and Q rise. (4M)',
    ],
    fullMarksTips: [
      'For each supply shifter: name it, explain the mechanism, and state which direction the curve moves.',
      'Other accepted factors: number of suppliers, weather, expectations of future prices, government regulations.',
      'In part (b), identify the complement relationship before drawing the diagram.',
    ],
  },
  {
    id: 'eco-sd-3',
    subject: 'economics', topic: 'supply-demand', topicLabel: 'Supply & Demand',
    year: 2019, level: 'Higher Level', section: 'Section A — Q4', marks: 10,
    question: 'Using a diagram, explain the concept of a price ceiling and describe ONE consequence of setting it below the equilibrium price.\n(10 marks)',
    markingScheme: [
      'Price ceiling defined: A maximum legal price set by the government below the equilibrium to keep goods affordable. (2M)',
      'Diagram: Shows S and D curves, equilibrium at P* and Q*, with Pc drawn below P* as a horizontal line. (3M)',
      'Consequence — Shortage: At Pc, Qd > Qs, creating a persistent excess demand (shortage). (3M)',
      'Alternative consequence accepted: Black markets, queuing, rationing, quality deterioration. (2M)',
    ],
    fullMarksTips: [
      'Stress the ceiling is set BELOW equilibrium — a ceiling above equilibrium has no effect.',
      'On the diagram, mark both Qd and Qs at the ceiling price and show the shortage with a double-headed arrow.',
      'Name the consequence specifically ("shortage") and explain the mechanism.',
    ],
  },

  // ── Elasticity ───────────────────────────
  {
    id: 'eco-el-1',
    subject: 'economics', topic: 'elasticity', topicLabel: 'Elasticity',
    year: 2023, level: 'Higher Level', section: 'Section A — Q3', marks: 10,
    question: 'Define "elasticity of demand" and, using an example, explain why the demand for insulin is said to be price inelastic.\n(10 marks)',
    markingScheme: [
      'Definition: Elasticity of demand measures the responsiveness of quantity demanded to a change in the price of the good. (2M)',
      'Formula: PED = % change in quantity demanded ÷ % change in price. (2M)',
      'Price inelastic defined: Absolute value of PED is between 0 and 1 — a price rise causes a proportionally smaller fall in Qd. (2M)',
      'Insulin — WHY inelastic: No close substitutes; insulin is a life-sustaining necessity for diabetics so demand barely falls regardless of price. (4M)',
    ],
    fullMarksTips: [
      'Always state the PED formula — it earns dedicated marks in almost every elasticity question.',
      'Say "between 0 and 1 in absolute value" not just "inelastic" — the examiner needs the numeric range.',
      'The insulin answer must explain WHY: "no close substitutes" and "necessity / life-critical good" are the required phrases.',
    ],
  },
  {
    id: 'eco-el-2',
    subject: 'economics', topic: 'elasticity', topicLabel: 'Elasticity',
    year: 2022, level: 'Higher Level', section: 'Section B — Q6', marks: 25,
    question: '(a) Explain cross elasticity of demand (XED) and state what a positive XED value indicates.\n(10 marks)\n\n(b) Explain income elasticity of demand (YED) and discuss how a knowledge of YED could be useful to a firm.\n(15 marks)',
    markingScheme: [
      'XED defined: Measures the responsiveness of demand for Good A to a change in the price of Good B. (2M)',
      'XED formula: XED = % change in Qd of Good A ÷ % change in price of Good B. (3M)',
      'Positive XED = substitutes: A rise in price of Good B increases demand for Good A (e.g. butter and margarine). (5M)',
      'YED defined + formula: Measures responsiveness of demand to a change in income. YED = % change in Qd ÷ % change in income. (5M)',
      'YED categories: YED > 0 = normal good; YED > 1 = luxury; YED < 0 = inferior good. (5M)',
      'Usefulness to firm: In a recession, a luxury goods firm (high YED) can forecast falling demand and cut production/shift to budget range. (5M)',
    ],
    fullMarksTips: [
      'For XED, state the sign interpretation: positive = substitutes, negative = complements — with one example each.',
      'For YED, distinguish all three categories (normal, luxury, inferior) with numeric ranges — all may be tested.',
      'For the firm application, name the type of firm, name the YED category, and state a specific action.',
    ],
  },
  {
    id: 'eco-el-3',
    subject: 'economics', topic: 'elasticity', topicLabel: 'Elasticity',
    year: 2020, level: 'Higher Level', section: 'Section A — Q5', marks: 10,
    question: 'Distinguish between elastic and inelastic supply and explain ONE factor that determines the price elasticity of supply.\n(10 marks)',
    markingScheme: [
      'Elastic supply (PES > 1): A % change in price leads to a proportionally larger change in Qs — producers respond easily to price signals. (3M)',
      'Inelastic supply (PES < 1): A % change in price leads to a proportionally smaller change in Qs — producers cannot respond quickly. (3M)',
      'Factor — Time: In the short run supply is inelastic (capacity fixed); in the long run supply is more elastic as firms expand capacity. (4M)',
    ],
    fullMarksTips: [
      'Include PES numeric values (> 1 and < 1) — definitions alone without the value range lose marks.',
      'Other accepted factors: spare capacity, storability of goods, availability of inputs.',
      'For the time factor, explicitly contrast short run vs long run.',
    ],
  },

  // ── Market Failure ───────────────────────
  {
    id: 'eco-mf-1',
    subject: 'economics', topic: 'market-failure', topicLabel: 'Market Failure',
    year: 2023, level: 'Higher Level', section: 'Section B — Q7', marks: 30,
    question: '(a) Explain what is meant by "market failure" and identify THREE causes.\n(15 marks)\n\n(b) With reference to ONE cause, discuss the role of the government in correcting market failure.\n(15 marks)',
    markingScheme: [
      'Market failure defined: When the free market fails to allocate resources efficiently, resulting in a loss of economic welfare. (3M)',
      'Cause 1 — Externalities: Costs or benefits imposed on third parties not involved in the transaction (e.g. pollution). (3M)',
      'Cause 2 — Public Goods: Non-rival, non-excludable goods the market under-provides (e.g. national defence). (3M)',
      'Cause 3 — Asymmetric Information: One party has more information than the other, causing adverse selection or moral hazard. (3M)',
      'Cause 4 (alternative) — Monopoly power: A monopolist restricts output and raises price above MC, creating deadweight welfare loss. (3M)',
      'Government intervention — e.g. Pigouvian tax on negative externality: Tax set equal to marginal external cost internalises the externality, shifting output to the socially optimal level. (8M)',
      'Diagram showing MSC, MPC, deadweight loss before correction, and restored efficiency after intervention. (7M)',
    ],
    fullMarksTips: [
      'Use "allocative efficiency" or "welfare loss" in your definition — precise economic language is rewarded.',
      'For each cause: name → mechanism → real-world Irish example (carbon emissions, vaccination, etc.).',
      'In part (b), name the specific intervention (e.g. "carbon tax", "direct provision") and trace the mechanism step by step.',
    ],
  },
  {
    id: 'eco-mf-2',
    subject: 'economics', topic: 'market-failure', topicLabel: 'Market Failure',
    year: 2021, level: 'Higher Level', section: 'Section A — Q6', marks: 10,
    question: 'Explain the concept of a "public good" as a cause of market failure, using an example.\n(10 marks)',
    markingScheme: [
      'Non-rival defined: Consumption by one person does not reduce availability to others. (2M)',
      'Non-excludable defined: Once provided, no one can be prevented from consuming it. (2M)',
      'Free rider problem: Because non-payers cannot be excluded, individuals have no incentive to pay voluntarily — the market will not provide the good profitably. (4M)',
      'Example: National defence, street lighting, flood barriers, public fireworks. (2M)',
    ],
    fullMarksTips: [
      'Define BOTH characteristics (non-rival AND non-excludable) — defining only one loses marks.',
      'Explicitly link the free rider problem to market under-provision.',
      'National defence is the safest example. Avoid toll roads (excludable) and rival goods.',
    ],
  },

  // ── Market Structures ────────────────────
  {
    id: 'eco-ms-1',
    subject: 'economics', topic: 'market-structures', topicLabel: 'Market Structures',
    year: 2022, level: 'Higher Level', section: 'Section B — Q8', marks: 30,
    question: '(a) Outline FOUR characteristics of perfect competition.\n(10 marks)\n\n(b) Using a diagram, explain how a perfectly competitive firm reaches short-run equilibrium.\n(10 marks)\n\n(c) Discuss the view that monopoly is always worse for consumers than perfect competition.\n(10 marks)',
    markingScheme: [
      'Characteristic 1: Large number of buyers and sellers — no individual has market power. (2.5M)',
      'Characteristic 2: Homogeneous (identical) products — no brand differentiation. (2.5M)',
      'Characteristic 3: Perfect information — all parties have full knowledge of prices. (2.5M)',
      'Characteristic 4: Freedom of entry and exit — no barriers to enter or leave the market. (2.5M)',
      'Part (b) Diagram: Horizontal AR=MR=P line (price taker), U-shaped MC and AC curves, profit-maximising output at MC=MR. (5M)',
      'Part (b) Explanation: Firm is a price taker; maximises profit at MC=MR; supernormal profit attracts entry until normal profit. (5M)',
      'Part (c) Against monopoly: Higher prices (P>MC), lower output, deadweight loss, no productive efficiency incentive. (5M)',
      'Part (c) For monopoly: Economies of scale may reduce costs; monopoly profits fund R&D and innovation. (5M)',
    ],
    fullMarksTips: [
      'For characteristics, a clear name + one-line explanation for each — exhaustive paragraphs waste time.',
      'The horizontal MR=AR=P line is the defining diagram feature of perfect competition — a downward-sloping MR means you have drawn monopoly.',
      '"Discuss" in part (c) requires both sides — present the case against AND for monopoly with equal depth.',
    ],
  },
  {
    id: 'eco-ms-2',
    subject: 'economics', topic: 'market-structures', topicLabel: 'Market Structures',
    year: 2020, level: 'Higher Level', section: 'Section B — Q6', marks: 20,
    question: 'Explain, with the aid of a diagram, the equilibrium position of a monopolist, and state whether the monopolist is productively and allocatively efficient.\n(20 marks)',
    markingScheme: [
      'Diagram: Downward-sloping AR curve, MR below it (twice as steep), U-shaped MC and AC, profit-maximising output Qm at MC=MR, price Pm read from AR above Qm. (8M)',
      'Supernormal profit shown: Shaded rectangle between AR and AC at Qm. (3M)',
      'Productive efficiency: NOT productively efficient — does not produce at minimum average cost. (3M)',
      'Allocative efficiency: NOT allocatively efficient — price (Pm) exceeds marginal cost (MC), so P > MC. (3M)',
      'Deadweight welfare loss: Triangle between Pm, competitive price, and demand curve — lost consumer and producer surplus. (3M)',
    ],
    fullMarksTips: [
      'MR must be BELOW AR and steeper — overlapping MR and AR loses marks immediately.',
      'Productive efficiency: explicitly state the monopolist produces to the LEFT of minimum AC.',
      'Allocative efficiency: the key phrase is "Price exceeds Marginal Cost (P > MC)" — state it explicitly.',
    ],
  },
  {
    id: 'eco-ms-3',
    subject: 'economics', topic: 'market-structures', topicLabel: 'Market Structures',
    year: 2019, level: 'Higher Level', section: 'Section A — Q7', marks: 10,
    question: 'Distinguish between a monopoly and an oligopoly and give ONE example of each in Ireland.\n(10 marks)',
    markingScheme: [
      'Monopoly: A single seller supplies the entire market; high barriers to entry prevent competition. (3M)',
      'Oligopoly: A small number of large firms dominate; high barriers to entry; significant interdependence between firms. (3M)',
      'Irish monopoly example: An Post, Irish Water, ESB (historically). (2M)',
      'Irish oligopoly example: Irish banking sector (AIB, BOI, PTSB), Irish supermarkets (Dunnes, Tesco, Lidl, Aldi). (2M)',
    ],
    fullMarksTips: [
      'Monopoly: stress "single seller" AND "barriers to entry".',
      'Oligopoly: stress "few large firms" and "interdependence" — firms react to each other\'s pricing.',
      'Use current Irish examples — foreign examples score nothing unless they operate in Ireland.',
    ],
  },

  // ── National Income ───────────────────────
  {
    id: 'eco-ni-1',
    subject: 'economics', topic: 'national-income', topicLabel: 'National Income',
    year: 2022, level: 'Higher Level', section: 'Section A — Q8', marks: 10,
    question: 'Distinguish between GDP and GNP and explain why GNP is considered a more accurate measure of Irish living standards.\n(10 marks)',
    markingScheme: [
      'GDP defined: Total monetary value of all goods and services produced within a country\'s borders in a year, regardless of nationality. (2M)',
      'GNP defined: GDP plus net factor income from abroad (income earned by Irish residents abroad minus income earned by foreign residents in Ireland). (3M)',
      'Formula: GNP = GDP + Net Factor Income from Abroad (NFIA). (1M)',
      'Why GNP is better for Ireland: GDP is inflated by MNC profit repatriation; GNP removes this and better reflects income of Irish residents. (4M)',
    ],
    fullMarksTips: [
      'State the formula GNP = GDP + NFIA — this single line earns a dedicated mark.',
      'Mention multinational profit repatriation specifically — this is the reason the distinction matters more for Ireland.',
      'Bonus marks for mentioning GNI* (Modified GNI) which strips out aircraft leasing and IP transfer distortions.',
    ],
  },
  {
    id: 'eco-ni-2',
    subject: 'economics', topic: 'national-income', topicLabel: 'National Income',
    year: 2021, level: 'Higher Level', section: 'Section B — Q5', marks: 25,
    question: '(a) Explain THREE injections into the circular flow of income.\n(15 marks)\n\n(b) Using the concept of the multiplier, explain how an increase in government expenditure can lead to a larger increase in national income.\n(10 marks)',
    markingScheme: [
      'Injection 1 — Investment (I): Spending by firms on capital goods that enters the circular flow without first coming from household income. (5M)',
      'Injection 2 — Government Expenditure (G): Government spending on public goods/services that injects new money into the economy. (5M)',
      'Injection 3 — Exports (X): Revenue from sales abroad brings foreign money into the domestic circular flow. (5M)',
      'Multiplier defined + formula: Ratio of change in national income to the initial change in spending. k = 1/(1 − MPC) or k = 1/MPS. (4M)',
      'Mechanism: Rise in G → income for households → they spend fraction MPC → creates income for others → process repeats → final rise in Y is a multiple of original ΔG. (4M)',
      'Numerical example: If MPC = 0.8, k = 5; a €100m rise in G leads to a €500m rise in national income. (2M)',
    ],
    fullMarksTips: [
      'For each injection: state what it IS, where it comes from, and how it enters the circular flow.',
      'State the multiplier formula k = 1/(1 − MPC) — both forms (MPC and MPS) are accepted.',
      'Include a numerical example — it demonstrates understanding and earns the final 2 marks.',
    ],
  },

  // ── Inflation ────────────────────────────
  {
    id: 'eco-inf-1',
    subject: 'economics', topic: 'inflation', topicLabel: 'Inflation',
    year: 2022, level: 'Higher Level', section: 'Section B — Q7', marks: 25,
    question: '(a) Explain the difference between demand-pull and cost-push inflation.\n(10 marks)\n\n(b) Discuss TWO effects of high inflation on the Irish economy.\n(15 marks)',
    markingScheme: [
      'Demand-pull: Occurs when aggregate demand exceeds aggregate supply — "too much money chasing too few goods"; associated with boom periods. (5M)',
      'Cost-push: Occurs when production costs rise (wages, raw materials, energy), forcing firms to raise prices; AD/AS supply curve shifts left. (5M)',
      'Effect 1 — Reduced competitiveness: Irish goods become more expensive relative to trading partners, reducing exports and worsening the current account. (7M)',
      'Effect 2 — Redistribution of income: Inflation erodes real value of savings and fixed incomes; savers/pensioners lose while debtors benefit as real debt falls. (8M)',
    ],
    fullMarksTips: [
      'Contrast demand-side vs supply-side origins clearly — one starts with excess spending, the other with rising costs.',
      'For each effect: State → Mechanism → Link to Ireland specifically.',
      '"Real value" is a key phrase for the redistribution point.',
    ],
  },
  {
    id: 'eco-inf-2',
    subject: 'economics', topic: 'inflation', topicLabel: 'Inflation',
    year: 2020, level: 'Higher Level', section: 'Section A — Q9', marks: 10,
    question: 'Explain how the Consumer Price Index (CPI) is used to measure inflation in Ireland and state ONE limitation of the CPI.\n(10 marks)',
    markingScheme: [
      'CPI — basket of goods: A representative sample basket of goods/services purchased by households is compiled and priced each month. (4M)',
      'Base year: A base year is given index value 100; subsequent years are expressed relative to this base. (2M)',
      'Weights: Items are weighted by their share of average household expenditure. (2M)',
      'Limitation: The basket may not reflect all groups equally — e.g. retirees spend proportionally more on healthcare; the CPI may over- or understate inflation for specific groups. (2M)',
    ],
    fullMarksTips: [
      'Explain the basket → weighting → pricing → percentage change chain clearly.',
      'Any well-explained limitation is accepted: substitution bias, quality improvements, housing costs.',
    ],
  },

  // ── Unemployment ─────────────────────────
  {
    id: 'eco-un-1',
    subject: 'economics', topic: 'unemployment', topicLabel: 'Unemployment',
    year: 2023, level: 'Higher Level', section: 'Section B — Q5', marks: 25,
    question: '(a) Distinguish between cyclical, structural and frictional unemployment.\n(15 marks)\n\n(b) Discuss TWO economic consequences of long-term unemployment.\n(10 marks)',
    markingScheme: [
      'Cyclical: Caused by a fall in aggregate demand during a recession; firms reduce output and lay off workers; rises in downturns, falls in booms. (5M)',
      'Structural: Caused by a permanent change in the economy\'s structure; workers\' skills no longer match industry needs (e.g. decline of manufacturing, rise of IT). (5M)',
      'Frictional: Workers between jobs; a natural feature of a dynamic economy; always present even at "full employment". (5M)',
      'Consequence 1 — Loss of output: Unemployed workers produce nothing; GDP falls below potential; tax revenue falls and welfare spending rises, widening the fiscal deficit. (5M)',
      'Consequence 2 — Deskilling/Hysteresis: Prolonged unemployment causes skill erosion, making workers harder to re-employ even when jobs return; creates persistent unemployment. (5M)',
    ],
    fullMarksTips: [
      'For each type, identify the CAUSE (not just what it is) — the mechanism earns the marks.',
      'Cyclical = business cycle; structural = changing industry patterns; frictional = voluntary/temporary.',
      'For consequences, develop fully: consequence → mechanism → macroeconomic impact → Irish context.',
    ],
  },

  // ── Fiscal Policy ────────────────────────
  {
    id: 'eco-fp-1',
    subject: 'economics', topic: 'fiscal-policy', topicLabel: 'Fiscal Policy',
    year: 2023, level: 'Higher Level', section: 'Section B — Q8', marks: 30,
    question: '(a) Explain the difference between a budget deficit and a budget surplus, and state ONE consequence of each.\n(10 marks)\n\n(b) Explain how fiscal policy can reduce unemployment during a recession.\n(10 marks)\n\n(c) Discuss ONE argument for and ONE against expansionary fiscal policy.\n(10 marks)',
    markingScheme: [
      'Budget deficit: G exceeds revenue — government must borrow. Consequence: increases national debt. (5M)',
      'Budget surplus: Revenue exceeds G — government can repay debt. Consequence: reduces national debt / saves for future. (5M)',
      'Expansionary fiscal policy mechanism: Increased G and/or tax cuts → raises AD → output rises → firms hire more workers → unemployment falls. (5M)',
      'Example: Capital expenditure on infrastructure creates direct construction jobs; multiplier effect creates further employment. (5M)',
      'Argument for: In deep recession, private spending collapses; government must fill the demand gap; effective when monetary policy is constrained. (5M)',
      'Argument against: Crowding out — government borrowing raises interest rates, reducing private investment; may increase debt to unsustainable levels. (5M)',
    ],
    fullMarksTips: [
      'For part (a), state the consequence AND explain the mechanism — "increases debt, which raises future interest payments" beats just "increases debt".',
      'For part (b), trace the chain from fiscal action all the way to reduced unemployment — each step earns marks.',
      '"Discuss" in part (c) means two sides with equal depth — one named argument each, not vague statements.',
    ],
  },

  // ── Monetary Policy ──────────────────────
  {
    id: 'eco-mp-1',
    subject: 'economics', topic: 'monetary-policy', topicLabel: 'Monetary Policy',
    year: 2022, level: 'Higher Level', section: 'Section B — Q9', marks: 25,
    question: '(a) Explain the role of the ECB in setting monetary policy for Ireland.\n(10 marks)\n\n(b) Explain how an increase in ECB interest rates can be used to control inflation in Ireland.\n(15 marks)',
    markingScheme: [
      'ECB role: Sets the benchmark interest rate for the entire Eurozone; Ireland as a eurozone member cannot set its own rate. (4M)',
      'ECB primary objective: Price stability — maintaining inflation at or close to 2% across the eurozone. (3M)',
      'ECB tools: Open market operations, minimum reserve requirements, standing facilities. (3M)',
      'Rate rise → reduced borrowing: Higher rates make loans more expensive, reducing household borrowing and consumer spending. (4M)',
      'Rate rise → reduced investment: Higher cost of capital reduces firm investment spending. (3M)',
      'Reduced AD → lower inflation: Fall in C and I reduces aggregate demand, removing upward pressure on prices. (4M)',
      'Ireland-specific issue: One rate for 20 eurozone countries — may be too tight or too loose for Ireland\'s specific conditions. (4M) [accept as bonus/higher-order point]',
    ],
    fullMarksTips: [
      'State Ireland\'s loss of monetary sovereignty explicitly — Ireland cannot set its own interest rate since joining the euro.',
      'Trace the full transmission mechanism: rate rise → higher borrowing costs → fall in C and I → fall in AD → lower inflation.',
      'The "one-size-fits-all" limitation earns higher-order marks — mention it if time allows.',
    ],
  },

  // ── International Trade ──────────────────
  {
    id: 'eco-it-1',
    subject: 'economics', topic: 'international-trade', topicLabel: 'International Trade',
    year: 2021, level: 'Higher Level', section: 'Section A — Q2', marks: 10,
    question: 'Distinguish between a "free trade area" and a "customs union" as forms of economic integration, giving ONE example of each.\n(10 marks)',
    markingScheme: [
      'Free trade area: Member countries remove tariffs and quotas between themselves but each retains its own trade policy toward non-members. (3M)',
      'Example of free trade area: USMCA/NAFTA, EFTA. (1M)',
      'Customs union: Member countries remove internal trade barriers AND adopt a common external tariff (CET) toward all non-members. (4M)',
      'Example of customs union: The European Union, Turkey–EU Customs Union. (1M)',
      'Key distinction: The CET eliminates the need for rules of origin checks at internal borders. (1M)',
    ],
    fullMarksTips: [
      'The single most-tested distinction is the common external tariff — state it explicitly.',
      'Use well-known examples only.',
      'Do not confuse customs union with the Single Market — the Single Market adds free movement of people, capital, and services.',
    ],
  },
  {
    id: 'eco-it-2',
    subject: 'economics', topic: 'international-trade', topicLabel: 'International Trade',
    year: 2023, level: 'Higher Level', section: 'Section B — Q6', marks: 20,
    question: '(a) Explain the theory of comparative advantage as a basis for international trade.\n(10 marks)\n\n(b) Discuss TWO arguments in favour of protectionism.\n(10 marks)',
    markingScheme: [
      'Comparative advantage defined: A country has a comparative advantage if it can produce a good at a lower opportunity cost than another country. (3M)',
      'Principle: Even if one country has an absolute advantage in all goods, both countries benefit from specialising where their opportunity cost is lowest. (4M)',
      'Example: Numerical 2-country, 2-good illustration showing gains from trade. (3M)',
      'Argument 1 — Infant industry: Newly established industries need temporary protection from established foreign competitors until they achieve economies of scale. (5M)',
      'Argument 2 — Strategic industries: Defence, food security, and key technology sectors may be too important to leave to free markets — protection ensures self-sufficiency. (5M)',
    ],
    fullMarksTips: [
      'Comparative advantage is about OPPORTUNITY COST — the words "opportunity cost" must appear.',
      'A numerical example (simple 2-country, 2-good table) demonstrates understanding clearly.',
      'For protectionism arguments, name the specific argument, explain the logic, and briefly acknowledge the counterargument.',
    ],
  },

  // ── Labour Market ────────────────────────
  {
    id: 'eco-lm-1',
    subject: 'economics', topic: 'labour-market', topicLabel: 'Labour Market',
    year: 2022, level: 'Higher Level', section: 'Section A — Q10', marks: 10,
    question: 'Explain what is meant by the "demand for labour" and identify TWO factors that can increase the demand for labour.\n(10 marks)',
    markingScheme: [
      'Demand for labour is a derived demand: Firms hire workers for the output they produce — demand for labour depends on demand for the final good. (3M)',
      'Factor 1 — Increase in demand for the final good: More consumer demand means firms need more workers to produce it. (3M)',
      'Factor 2 — Improvement in labour productivity: Higher productivity raises the marginal revenue product (MRP) of labour, making workers more valuable to hire. (4M)',
    ],
    fullMarksTips: [
      'Stress "derived demand" — this is the defining characteristic and earns marks by itself.',
      'Link each factor clearly to the direction of the demand curve shift (rightward = increase).',
      'MRP theory earns higher-order marks — worth mentioning at HL if you know it.',
    ],
  },

  // ── Economic Growth ──────────────────────
  {
    id: 'eco-eg-1',
    subject: 'economics', topic: 'economic-growth', topicLabel: 'Economic Growth',
    year: 2021, level: 'Higher Level', section: 'Section B — Q8', marks: 30,
    question: '(a) Define economic growth and explain TWO determinants of long-run economic growth.\n(15 marks)\n\n(b) Discuss ONE benefit and ONE cost of economic growth for a country such as Ireland.\n(15 marks)',
    markingScheme: [
      'Economic growth defined: An increase in the productive capacity of an economy, measured as a sustained rise in real GDP over time. (3M)',
      'Determinant 1 — Physical capital investment: Higher investment in machinery, technology and infrastructure increases productive capacity — shifts LRAS rightward. (6M)',
      'Determinant 2 — Human capital: Education, training and healthcare improve labour force quality and productivity — a more skilled workforce produces more per person. (6M)',
      'Benefit — Higher living standards: Rising real GDP per capita means higher average incomes, greater access to goods/services and improved quality of life. (7M)',
      'Cost — Environmental degradation: Rapid growth increases industrial output, energy use and pollution, contributing to climate change and depleting natural resources. (8M)',
    ],
    fullMarksTips: [
      'Define growth as an increase in REAL GDP — nominal GDP growth is partly inflation.',
      'For determinants, explain the mechanism fully rather than just naming the factor.',
      '"Environmental degradation" is the strongest cost — link it to sustainability and the trade-off between current and future welfare.',
    ],
  },

  /* ══════════════════════════════════════════
     BUSINESS
  ══════════════════════════════════════════ */

  {
    id: 'bus-org-1',
    subject: 'business', topic: 'business-organisation', topicLabel: 'Business Organisation',
    year: 2022, level: 'Higher Level', section: 'Unit 3 — Q1', marks: 20,
    question: 'Distinguish between a private limited company and a public limited company, and outline TWO advantages of forming a private limited company.\n(20 marks)',
    markingScheme: [
      'Private limited company (Ltd): Shares cannot be offered to the general public; shareholding restricted to a small group; typically family-owned or SMEs. (4M)',
      'Public limited company (PLC): Shares listed on a stock exchange and available to the public; must publish detailed financial accounts. (4M)',
      'Key distinction: A PLC can raise capital from the public via the stock exchange; a private company cannot. (2M)',
      'Advantage 1 — Limited liability: Shareholders can only lose the amount invested — personal assets are protected; encourages investment. (5M)',
      'Advantage 2 — Separate legal entity: The company exists independently of its owners; can own property, sue and be sued; continues if a shareholder dies. (5M)',
    ],
    fullMarksTips: [
      'The key distinction is stock exchange listing and public share offering — always state this explicitly.',
      'For advantages, name, define, then explain why it matters to a small business owner.',
      'Other accepted advantages: perpetual succession, corporate tax treatment.',
    ],
  },
  {
    id: 'bus-org-2',
    subject: 'business', topic: 'business-organisation', topicLabel: 'Business Organisation',
    year: 2021, level: 'Higher Level', section: 'Unit 3 — Q2', marks: 15,
    question: 'Explain the concept of "limited liability" and discuss why it is important for the development of business in Ireland.\n(15 marks)',
    markingScheme: [
      'Limited liability defined: The financial liability of shareholders is limited to the amount they invested — personal assets cannot be seized to pay company debts. (4M)',
      'Contrast with unlimited liability: In a sole trader or partnership, owners are personally liable for all business debts — deters investment. (3M)',
      'Importance 1 — Encourages investment: Investors risk only their investment — enables firms to raise larger amounts of capital. (4M)',
      'Importance 2 — Encourages entrepreneurship: Entrepreneurs willing to start ventures knowing failure will not cause personal bankruptcy. (4M)',
    ],
    fullMarksTips: [
      'Contrast with unlimited liability (sole trader) — shows you understand the significance.',
      'Link to the Irish economy: FDI, SME development, or the tech sector.',
      'The key word in "importance" questions is WHY it matters — explain the consequence, not just the definition.',
    ],
  },
  {
    id: 'bus-mkt-1',
    subject: 'business', topic: 'marketing', topicLabel: 'Marketing',
    year: 2023, level: 'Higher Level', section: 'Unit 5 — Q1', marks: 20,
    question: 'Explain the concept of market segmentation and describe TWO bases on which a company might segment its market.\n(20 marks)',
    markingScheme: [
      'Market segmentation defined: The process of dividing a total market into distinct subgroups of consumers who share similar characteristics, needs or buying behaviour. (4M)',
      'Purpose: Allows a firm to tailor product, price, promotion and distribution to each segment\'s needs, improving effectiveness. (4M)',
      'Basis 1 — Demographic: Age, gender, income, family size, occupation; e.g. a car manufacturer targets high-income earners with luxury models. (6M)',
      'Basis 2 — Geographic: Country, region, urban/rural; e.g. a clothing brand stocks heavier coats in colder regions. (6M)',
    ],
    fullMarksTips: [
      'Define segmentation as dividing a market into groups with SIMILAR characteristics — the similarity aspect is key.',
      'For each basis: name it, define it, give a specific real company example.',
      'Other accepted bases: psychographic (lifestyle, values), behavioural (usage rate, brand loyalty).',
    ],
  },
  {
    id: 'bus-fin-1',
    subject: 'business', topic: 'finance', topicLabel: 'Finance & Accounts',
    year: 2022, level: 'Higher Level', section: 'Unit 6 — Q1', marks: 20,
    question: 'Explain the difference between a current asset and a fixed asset, and explain how the current ratio is used to assess short-term liquidity.\n(20 marks)',
    markingScheme: [
      'Current asset defined: Assets expected to be converted to cash within one year — cash, debtors, stock, prepaid expenses. (4M)',
      'Fixed asset defined: Assets held for long-term use (more than one year) — land, buildings, machinery, vehicles. (4M)',
      'Current ratio formula: Current Ratio = Current Assets ÷ Current Liabilities. (3M)',
      'Interpretation: A ratio of 2:1 is generally acceptable — twice as many current assets as liabilities, comfortable for meeting short-term debts. (5M)',
      'Limitation: Very high ratio (e.g. 4:1) may indicate excess cash tied up in stock; ratio below 1:1 signals inability to meet short-term obligations. (4M)',
    ],
    fullMarksTips: [
      'State the formula clearly — Current Assets ÷ Current Liabilities.',
      'The 2:1 benchmark is widely accepted in LC marking — state it and explain what it means.',
      'Show nuance by mentioning that both too high and too low ratios are problematic.',
    ],
  },
  {
    id: 'bus-mgmt-1',
    subject: 'business', topic: 'management', topicLabel: 'Management',
    year: 2021, level: 'Higher Level', section: 'Unit 4 — Q2', marks: 25,
    question: '(a) Outline the FOUR functions of management.\n(12 marks)\n\n(b) Discuss the importance of effective communication within a business organisation.\n(13 marks)',
    markingScheme: [
      'Function 1 — Planning: Setting objectives and strategies and allocating resources to achieve goals. (3M)',
      'Function 2 — Organising: Arranging resources and assigning responsibilities. (3M)',
      'Function 3 — Leading/Directing: Motivating and guiding employees toward organisational goals. (3M)',
      'Function 4 — Controlling: Monitoring performance against targets and taking corrective action. (3M)',
      'Communication — Coordination: Clear communication ensures all departments understand their roles, reducing duplication and conflict. (6M)',
      'Communication — Motivation: Regular, honest feedback from management improves morale and engagement, reducing absenteeism and turnover. (7M)',
    ],
    fullMarksTips: [
      'For each function, state the name AND a one-sentence explanation — listing names alone is insufficient.',
      'The four core functions (Planning, Organising, Leading, Controlling) are standard — other mnemonics are accepted if the four functions are covered.',
      'For communication, link each point to a business outcome (efficiency, staff retention, decision quality).',
    ],
  },
  {
    id: 'bus-hr-1',
    subject: 'business', topic: 'human-resources', topicLabel: 'Human Resources',
    year: 2022, level: 'Higher Level', section: 'Unit 4 — Q3', marks: 20,
    question: 'Distinguish between recruitment and selection, and explain the steps involved in the recruitment process.\n(20 marks)',
    markingScheme: [
      'Recruitment defined: The process of attracting a pool of suitable candidates for a job vacancy. (3M)',
      'Selection defined: The process of choosing the best candidate from the pool of applicants. (3M)',
      'Step 1 — Job analysis: Identifying the duties, responsibilities and requirements of the vacant position. (3M)',
      'Step 2 — Job description and person specification: Documenting the role and the qualifications/skills required. (3M)',
      'Step 3 — Advertising: Publishing the vacancy internally (notice boards, intranet) or externally (websites, newspapers). (4M)',
      'Step 4 — Receiving applications: Collecting CVs/application forms from interested candidates. (4M)',
    ],
    fullMarksTips: [
      'Distinguish clearly: recruitment = attracting candidates; selection = choosing the best one.',
      'Name each step of the process with a one-line explanation — the examiner awards marks per step.',
      'Further steps also accepted: shortlisting, interviews, references, job offer.',
    ],
  },

  /* ══════════════════════════════════════════
     BIOLOGY
  ══════════════════════════════════════════ */

  {
    id: 'bio-cell-1',
    subject: 'biology', topic: 'cell-biology', topicLabel: 'Cell Biology',
    year: 2022, level: 'Higher Level', section: 'Section B — Q6', marks: 25,
    question: '(a) Explain the fluid mosaic model of the cell membrane.\n(10 marks)\n\n(b) Distinguish between osmosis and diffusion, using a biological example of each.\n(15 marks)',
    markingScheme: [
      'Fluid: The lipid bilayer is not rigid — phospholipids move laterally, giving the membrane flexibility. (3M)',
      'Mosaic: Proteins are embedded in a mosaic (irregular) pattern — some span the full membrane (integral), others sit on the surface (peripheral). (4M)',
      'Function of proteins: Channel proteins facilitate selective transport; receptor proteins allow cell signalling; glycoproteins aid cell recognition. (3M)',
      'Diffusion: Net movement of molecules from high to low concentration down a concentration gradient — passive (no energy); e.g. oxygen entering red blood cells in the lungs. (7M)',
      'Osmosis: Movement of WATER molecules from high water potential (low solute) to low water potential (high solute) through a selectively permeable membrane; e.g. water absorption by root hair cells. (8M)',
    ],
    fullMarksTips: [
      'Address BOTH "fluid" (lipid movement) AND "mosaic" (protein distribution) — each word refers to a different structural feature.',
      'Diffusion applies to any molecule; osmosis applies ONLY to water — this distinction is critical.',
      'For osmosis, mention "selectively permeable membrane" and "water potential" — these are the required technical terms.',
    ],
  },
  {
    id: 'bio-cell-2',
    subject: 'biology', topic: 'cell-biology', topicLabel: 'Cell Biology',
    year: 2021, level: 'Higher Level', section: 'Section A — Q3', marks: 15,
    question: 'Explain the process of mitosis and state its biological importance.\n(15 marks)',
    markingScheme: [
      'Interphase: DNA replication occurs — cell prepares for division; chromosomes duplicated. (2M)',
      'Prophase: Chromosomes condense and become visible; nuclear envelope breaks down; spindle fibres form. (3M)',
      'Metaphase: Chromosomes align along the cell\'s equator (metaphase plate); spindle fibres attach to centromeres. (3M)',
      'Anaphase: Sister chromatids are pulled to opposite poles of the cell by spindle fibres. (3M)',
      'Telophase/Cytokinesis: Nuclear envelopes reform around each set of chromosomes; cell divides producing two identical daughter cells. (2M)',
      'Importance: Growth and repair of tissues; asexual reproduction; replacement of damaged or dead cells — all daughter cells genetically identical to parent cell. (2M)',
    ],
    fullMarksTips: [
      'Name each stage in sequence — examiners award marks per stage and will not credit stages out of order.',
      'At each stage, state what HAPPENS to the chromosomes — they are the focus of mitosis.',
      'For importance, mention "genetically identical" — this is the key phrase that distinguishes mitosis from meiosis.',
    ],
  },
  {
    id: 'bio-gen-1',
    subject: 'biology', topic: 'genetics', topicLabel: 'Genetics',
    year: 2023, level: 'Higher Level', section: 'Section B — Q7', marks: 25,
    question: '(a) Explain the terms genotype, phenotype, dominant and recessive.\n(12 marks)\n\n(b) A plant homozygous dominant for flower colour (RR) is crossed with a homozygous recessive (rr). Show the F1 and F2 generations using a Punnett square and state the F2 phenotypic ratio.\n(13 marks)',
    markingScheme: [
      'Genotype: The genetic makeup of an organism — the alleles present at a locus (e.g. RR, Rr, rr). (3M)',
      'Phenotype: The observable physical characteristics resulting from genotype and environment interaction. (3M)',
      'Dominant: An allele expressed in the phenotype even when only one copy is present (heterozygous) — capital letter. (3M)',
      'Recessive: An allele expressed only when two copies are present (homozygous recessive) — lower case letter. (3M)',
      'F1 generation: All offspring are Rr — phenotype is dominant (red). Punnett square correctly drawn. (5M)',
      'F2 generation: Rr × Rr gives RR : Rr : rr in ratio 1:2:1; phenotypic ratio = 3 dominant : 1 recessive. (5M)',
      'Phenotypic ratio stated: 3:1. (3M)',
    ],
    fullMarksTips: [
      'Define genotype and phenotype in terms of alleles and observable characteristics — use examples.',
      'Draw the Punnett square neatly with all four boxes filled — a missing box loses marks.',
      'State the phenotypic ratio as "3 red : 1 white" not just "3:1" — identify which phenotype is which.',
    ],
  },
  {
    id: 'bio-eco-1',
    subject: 'biology', topic: 'ecology', topicLabel: 'Ecology',
    year: 2022, level: 'Higher Level', section: 'Section A — Q3', marks: 15,
    question: 'Explain the terms producer, primary consumer, secondary consumer and decomposer in the context of a food chain, and explain the significance of energy loss at each trophic level.\n(15 marks)',
    markingScheme: [
      'Producer: Autotrophic organism (e.g. green plant) that converts solar energy to chemical energy via photosynthesis — base of every food chain. (3M)',
      'Primary consumer: Herbivore feeding directly on producers (e.g. rabbit, grasshopper). (2M)',
      'Secondary consumer: Carnivore feeding on primary consumers (e.g. fox, frog). (2M)',
      'Decomposer: Bacteria/fungi that break down dead organic matter, releasing inorganic nutrients back to soil — complete the nutrient cycle. (3M)',
      'Energy loss: Only ~10% of energy transfers from one trophic level to the next; remainder lost as heat through respiration, movement, and unconsumed biomass. (5M)',
    ],
    fullMarksTips: [
      'Link producers to photosynthesis and solar energy — they are the entry point of energy into the food chain.',
      'Decomposers are often forgotten — include them and stress their role in nutrient cycling.',
      'For energy loss, state the 10% rule and explain WHERE the energy goes (heat via respiration).',
    ],
  },
  {
    id: 'bio-hum-1',
    subject: 'biology', topic: 'human-biology', topicLabel: 'Human Biology',
    year: 2021, level: 'Higher Level', section: 'Section B — Q8', marks: 25,
    question: '(a) Describe the structure of the human heart and explain how it pumps blood.\n(15 marks)\n\n(b) Distinguish between arteries, veins and capillaries.\n(10 marks)',
    markingScheme: [
      'Heart structure: Four chambers — two atria (receiving) and two ventricles (pumping); right and left sides separated by the septum. (4M)',
      'Valves: Atrioventricular valves (tricuspid right, bicuspid/mitral left) and semilunar valves prevent backflow. (4M)',
      'Pumping action: Right side: deoxygenated blood from body (vena cava) → pumps to lungs (pulmonary artery). Left side: oxygenated blood from lungs (pulmonary vein) → pumps to body (aorta). (4M)',
      'Cardiac cycle: Systole (contraction) and diastole (relaxation); coordinated by SA node (natural pacemaker). (3M)',
      'Arteries: Carry blood away from the heart; thick muscular walls; no valves; carry oxygenated blood (except pulmonary artery). (3M)',
      'Veins: Carry blood toward the heart; thinner walls; contain valves to prevent backflow; carry deoxygenated blood (except pulmonary vein). (4M)',
      'Capillaries: One cell thick; site of gaseous exchange, nutrient delivery, waste collection between blood and tissues. (3M)',
    ],
    fullMarksTips: [
      'Identify left vs right sides clearly — right = pulmonary circuit (to lungs), left = systemic circuit (to body).',
      'Name specific valves (bicuspid, tricuspid, semilunar) — generic "valves" without names will not receive full marks at HL.',
      'For blood vessels, a three-column comparison (artery/vein/capillary vs wall/valve/blood type) ensures all points are covered.',
    ],
  },
  {
    id: 'bio-micro-1',
    subject: 'biology', topic: 'microbiology', topicLabel: 'Microbiology',
    year: 2022, level: 'Higher Level', section: 'Section A — Q5', marks: 15,
    question: 'Explain the differences between bacteria and viruses, and describe how antibiotics work to combat bacterial infections.\n(15 marks)',
    markingScheme: [
      'Bacteria: Prokaryotic, single-celled organisms with cell wall, cytoplasm and ribosomes; can reproduce independently; DNA not enclosed in nucleus. (4M)',
      'Viruses: Non-living (acellular); consist of genetic material (DNA or RNA) surrounded by a protein coat (capsid); can only replicate inside a host cell. (4M)',
      'Key difference: Bacteria are living cells capable of independent reproduction; viruses require a host cell and are not considered alive. (2M)',
      'Antibiotics — mechanism: Interfere with bacterial cell processes — e.g. penicillin inhibits cell wall synthesis, causing the bacterium to burst (lyse) when it tries to divide. (3M)',
      'Antibiotics not effective vs viruses: Viruses have no cell wall and use host cell machinery — antibiotics target bacterial structures only. (2M)',
    ],
    fullMarksTips: [
      'The prokaryote/acellular distinction is the core difference — state it explicitly.',
      'For antibiotics, name a specific example (penicillin) and state the specific mechanism (inhibits cell wall synthesis).',
      'Always state that antibiotics do NOT work on viruses — this is a key exam point tested regularly.',
    ],
  },

  /* ══════════════════════════════════════════
     HISTORY
  ══════════════════════════════════════════ */

  {
    id: 'his-rev-1',
    subject: 'history', topic: 'irish-revolution', topicLabel: 'Irish Revolution 1916–1923',
    year: 2022, level: 'Higher Level', section: 'Document Q — Ireland', marks: 30,
    question: 'How significant was the 1916 Rising in the achievement of Irish independence?\n(30 marks)',
    markingScheme: [
      'Context — initial reaction: The Rising initially received little popular support; the execution of its leaders by the British transformed public opinion toward republicanism. (6M)',
      'Political impact: The 1918 General Election saw Sinn Féin win 73 seats; Dáil Éireann was established — the Rising provided Sinn Féin\'s mandate for independence. (6M)',
      'Military legacy: The War of Independence (1919–1921) was the direct continuation of the 1916 tradition; Collins\'s guerrilla campaign made British rule untenable. (6M)',
      'International dimension: The Rising drew attention (especially from Irish-America) to the cause, increasing diplomatic pressure on Britain. (6M)',
      'Limitations: The Treaty of 1921 gave only 26 counties independence; partition remained; the Civil War (1922–23) divided the nationalist movement. (6M)',
    ],
    fullMarksTips: [
      '"How significant" requires you to argue a view — evaluate the importance and reach a judgement, don\'t just describe events.',
      'Address both direct effects (political shift, 1918 election) and indirect effects (War of Independence).',
      'Include a counterargument — the Rising alone did not cause independence; the War of Independence and Treaty negotiations were equally crucial.',
    ],
  },
  {
    id: 'his-rev-2',
    subject: 'history', topic: 'irish-revolution', topicLabel: 'Irish Revolution 1916–1923',
    year: 2021, level: 'Higher Level', section: 'Section 3 — Q2', marks: 25,
    question: 'Explain why the Anglo-Irish War of Independence (1919–1921) ended in a Treaty rather than a military victory for either side.\n(25 marks)',
    markingScheme: [
      'IRA guerrilla campaign: Michael Collins organised a highly effective intelligence network and flying columns; assassinations of British intelligence agents (Bloody Sunday, Nov 1920) undermined British security. (6M)',
      'British failures: Crown forces (Black and Tans/Auxiliaries) used brutal reprisals that alienated Irish public opinion and international observers, undermining Britain\'s moral position. (5M)',
      'British political pressure: British public opinion, US pressure (Irish-American community), and political costs made prolonged war unsustainable for Lloyd George\'s government. (6M)',
      'IRA limitations: Despite successes, the IRA was running low on weapons and manpower by mid-1921; Collins acknowledged they could not win outright. (4M)',
      'Truce and negotiations: Both sides agreed to a truce in July 1921; the resulting Treaty of December 1921 gave 26-county Dominion status. (4M)',
    ],
    fullMarksTips: [
      'Explain both sides\' limitations — the Treaty resulted from BOTH sides being unable/unwilling to continue, not just one.',
      'Name specific events (Bloody Sunday, Black and Tans, Lloyd George) — vague references to "British forces" and "Irish fighters" lack precision.',
      'Link international pressure (especially USA) to why Britain was willing to negotiate.',
    ],
  },
  {
    id: 'his-eur-1',
    subject: 'history', topic: 'modern-europe', topicLabel: 'Modern Europe & World',
    year: 2023, level: 'Higher Level', section: 'Section 4 — Q1', marks: 30,
    question: 'Assess the impact of World War II on European society and politics in the period 1945–1960.\n(30 marks)',
    markingScheme: [
      'Human cost: ~70–85 million deaths; displacement of millions of refugees; the Holocaust — systematic genocide of 6 million Jews and millions of others. (6M)',
      'Political transformation: Collapse of pre-war regimes; Soviet-backed communist governments in Eastern Europe; beginning of the Cold War division of Europe. (6M)',
      'Economic reconstruction: Marshall Plan (1948) — $13 billion US aid to rebuild Western Europe; prevented communist expansion; enabled economic recovery by the 1950s. (6M)',
      'Institutional building: United Nations (1945); European Coal and Steel Community (1951); NATO (1949) — architecture for post-war co-operation. (6M)',
      'Social change: Mass urbanisation; shift in women\'s roles after wartime work; baby boom; decolonisation movements accelerated by European weakness. (6M)',
    ],
    fullMarksTips: [
      '"Assess" requires you to weigh different impacts and reach a conclusion about which was most significant.',
      'Use specific dates and named agreements (Marshall Plan, NATO, ECSC) — vague references to "international organisations" lose marks.',
      'Show the link between WWII and the Cold War — the post-war settlement directly created the bipolar world of 1945–1991.',
    ],
  },
  {
    id: 'his-ire-1',
    subject: 'history', topic: 'ireland-1922-1945', topicLabel: 'Ireland 1922–1945',
    year: 2022, level: 'Higher Level', section: 'Section 3 — Q1', marks: 25,
    question: 'Discuss the political and economic challenges facing the Irish Free State in the 1920s.\n(25 marks)',
    markingScheme: [
      'Civil War legacy (1922–23): The Treaty split the nationalist movement; the Free State government defeated the anti-Treaty IRA but left deep divisions — Fianna Fáil founded 1926 as political expression of the losing side. (6M)',
      'Political stability: W.T. Cosgrave and Cumann na nGaedheal established democratic institutions; peaceful transfer of power to Fianna Fáil in 1932 was significant democratic milestone. (5M)',
      'Economic challenge — agriculture: Economy heavily dependent on cattle exports to Britain; de Valera\'s later Economic War (1932–38) severely damaged this. (5M)',
      'Economic challenge — underdevelopment: Limited industrialisation; high emigration persisted throughout the 1920s as the economy struggled to provide employment. (5M)',
      'Currency and financial policy: Establishment of the Irish pound (pegged to sterling); Fiscal policy was conservative — small government and balanced budgets. (4M)',
    ],
    fullMarksTips: [
      'Distinguish political from economic challenges — the question asks for both, so structure your answer with clear sections.',
      'The Civil War\'s political legacy is essential — the divisions of the 1920s shaped Irish politics for decades.',
      'Name specific policies and people (Cosgrave, Collins, Cumann na nGaedheal) to demonstrate specific knowledge.',
    ],
  },

  /* ══════════════════════════════════════════
     MATHS
  ══════════════════════════════════════════ */

  {
    id: 'mth-alg-1',
    subject: 'maths', topic: 'algebra', topicLabel: 'Algebra & Functions',
    year: 2023, level: 'Higher Level', section: 'Paper 1 — Q2', marks: 25,
    question: '(a) Solve the simultaneous equations:\n    3x + 2y = 16\n    x − y = 2\n(10 marks)\n\n(b) Find the range of values of k for which x² + kx + 9 = 0 has no real roots.\n(15 marks)',
    markingScheme: [
      'Part (a) — method: From x − y = 2 → x = y + 2; substitute: 3(y+2) + 2y = 16 → 5y = 10 → y = 2. (5M)',
      'Part (a) — solution: x = y + 2 = 4; solution: x = 4, y = 2. Verification in both equations. (5M)',
      'Part (b) — discriminant condition stated: For no real roots, b² − 4ac < 0. (4M)',
      'Part (b) — substitution: a=1, b=k, c=9; condition becomes k² − 36 < 0. (4M)',
      'Part (b) — solve: k² < 36 → −6 < k < 6. (4M)',
      'Part (b) — final answer stated clearly with correct notation. (3M)',
    ],
    fullMarksTips: [
      'Show every substitution step — method marks are awarded even if arithmetic goes wrong later.',
      'For the discriminant, write b² − 4ac < 0 explicitly before substituting — this earns a dedicated method mark.',
      'State the final inequality clearly: −6 < k < 6.',
    ],
  },
  {
    id: 'mth-alg-2',
    subject: 'maths', topic: 'algebra', topicLabel: 'Algebra & Functions',
    year: 2022, level: 'Higher Level', section: 'Paper 1 — Q3', marks: 20,
    question: 'f(x) = 2x³ − 3x² − 11x + 6\n\n(a) Show that (x − 3) is a factor of f(x).\n(b) Fully factorise f(x).\n(c) Solve f(x) = 0.',
    markingScheme: [
      'Part (a) — Factor theorem: f(3) = 2(27) − 3(9) − 11(3) + 6 = 54 − 27 − 33 + 6 = 0; since f(3) = 0, (x−3) is a factor. (5M)',
      'Part (b) — Division: Divide f(x) by (x−3) to get quotient 2x² + 3x − 2. (5M)',
      'Part (b) — Factorise quadratic: 2x² + 3x − 2 = (2x−1)(x+2); full factorisation: (x−3)(2x−1)(x+2). (5M)',
      'Part (c) — Roots: x = 3, x = ½, x = −2. (5M)',
    ],
    fullMarksTips: [
      'Use the factor theorem explicitly — substitute x = 3, show f(3) = 0, then state the conclusion.',
      'Set out polynomial long division or synthetic division clearly — marks are awarded per row of working.',
      'In part (c), write "f(x) = 0 when x = 3, x = ½, x = −2" — make your answer unambiguous.',
    ],
  },
  {
    id: 'mth-sta-1',
    subject: 'maths', topic: 'statistics', topicLabel: 'Statistics & Probability',
    year: 2023, level: 'Higher Level', section: 'Paper 2 — Q4', marks: 25,
    question: 'A bag contains 4 red, 3 blue and 2 green balls. Two balls are drawn at random without replacement.\n\n(a) Find P(both balls are red).\n(b) Find P(the two balls are different colours).\n(c) Find P(at least one ball is blue).',
    markingScheme: [
      'Total = 9 balls. Part (a): P(both red) = (4/9) × (3/8) = 12/72 = 1/6. (6M)',
      'Part (b): C(9,2) = 36. Same colour: C(4,2)+C(3,2)+C(2,2) = 6+3+1 = 10. P(same) = 10/36. P(different) = 1 − 10/36 = 26/36 = 13/18. (10M)',
      'Part (c): Use complement. P(no blue) = C(6,2)/C(9,2) = 15/36 = 5/12. P(at least one blue) = 1 − 5/12 = 7/12. (9M)',
    ],
    fullMarksTips: [
      '"Without replacement" — reduce BOTH numerator and denominator after the first draw.',
      'For "at least one" questions, always use P(at least one) = 1 − P(none) — it is faster and safer.',
      'Show each combination calculation clearly: C(n,r) = n! / (r!(n−r)!).',
    ],
  },
  {
    id: 'mth-tri-1',
    subject: 'maths', topic: 'trigonometry', topicLabel: 'Trigonometry',
    year: 2022, level: 'Higher Level', section: 'Paper 2 — Q5', marks: 25,
    question: '(a) Prove that sin²θ + cos²θ = 1.\n(10 marks)\n\n(b) Hence, solve 2sin²θ − cosθ − 1 = 0 for 0° ≤ θ ≤ 360°.\n(15 marks)',
    markingScheme: [
      'Part (a) — right triangle: In a right triangle with hypotenuse r, sinθ = a/r, cosθ = b/r. (2M)',
      'Part (a) — Pythagorean theorem: a² + b² = r²; divide by r²: a²/r² + b²/r² = 1; therefore sin²θ + cos²θ = 1. QED. (8M)',
      'Part (b) — substitution: Replace sin²θ with 1 − cos²θ: 2(1−cos²θ) − cosθ − 1 = 0 → 2cos²θ + cosθ − 1 = 0. (5M)',
      'Part (b) — factorise: (2cosθ − 1)(cosθ + 1) = 0; cosθ = ½ or cosθ = −1. (5M)',
      'Part (b) — all solutions: cosθ = ½ → θ = 60°, 300°; cosθ = −1 → θ = 180°. All three stated. (5M)',
    ],
    fullMarksTips: [
      'For the proof, start from Pythagoras and divide by r² — this is the standard expected method.',
      'In part (b), replace sin²θ with 1 − cos²θ immediately — this creates a factorable quadratic in cosθ.',
      'Find ALL solutions in the range — both quadrant angles for cosθ = ½ (60° AND 300°) must be stated.',
    ],
  },
  {
    id: 'mth-cal-1',
    subject: 'maths', topic: 'calculus', topicLabel: 'Calculus',
    year: 2023, level: 'Higher Level', section: 'Paper 1 — Q7', marks: 25,
    question: 'f(x) = 3x⁴ − 8x³ + 6x²\n\n(a) Find f\'(x) and f\'\'(x).\n(b) Find the coordinates of any local maximum or minimum points.\n(c) Determine whether each stationary point is a maximum or minimum.',
    markingScheme: [
      'Part (a) — f\'(x): f\'(x) = 12x³ − 24x² + 12x. (4M)',
      'Part (a) — f\'\'(x): f\'\'(x) = 36x² − 48x + 12. (3M)',
      'Part (b) — stationary points: Set f\'(x) = 0: 12x³ − 24x² + 12x = 0 → 12x(x² − 2x + 1) = 0 → 12x(x−1)² = 0; x = 0 or x = 1. (8M)',
      'Part (b) — y-coordinates: f(0) = 0; f(1) = 3 − 8 + 6 = 1. Points: (0, 0) and (1, 1). (4M)',
      'Part (c) — second derivative test: f\'\'(0) = 12 > 0 → (0,0) is a local minimum. f\'\'(1) = 36 − 48 + 12 = 0 → inconclusive — use first derivative test or note x=1 is a point of inflection. (6M)',
    ],
    fullMarksTips: [
      'Differentiate carefully term by term — arithmetic errors in derivatives cascade through the whole question.',
      'Factorise f\'(x) fully before solving — partial factorisation misses solutions.',
      'When the second derivative is zero, state clearly that the test is inconclusive and use an alternative method (first derivative sign change).',
    ],
  },
  {
    id: 'mth-geo-1',
    subject: 'maths', topic: 'geometry', topicLabel: 'Geometry & Co-ordinate',
    year: 2022, level: 'Higher Level', section: 'Paper 2 — Q2', marks: 20,
    question: 'A circle has centre C(3, −2) and passes through the point P(7, 1).\n\n(a) Find the equation of the circle.\n(b) Find the equation of the tangent to the circle at P.',
    markingScheme: [
      'Part (a) — radius: r = √[(7−3)² + (1−(−2))²] = √[16+9] = √25 = 5. (4M)',
      'Part (a) — equation: (x−3)² + (y+2)² = 25. (4M)',
      'Part (b) — slope of CP: m_CP = (1−(−2))/(7−3) = 3/4. (4M)',
      'Part (b) — slope of tangent: m_tangent = −4/3 (negative reciprocal). (3M)',
      'Part (b) — equation of tangent: y − 1 = −4/3(x − 7) → 4x + 3y − 31 = 0. (5M)',
    ],
    fullMarksTips: [
      'The radius is the distance from the centre to the point — show the distance formula working in full.',
      'The tangent is perpendicular to the radius at the point of tangency — state this fact explicitly.',
      'Express the final tangent equation in the form ax + by + c = 0 with integer coefficients.',
    ],
  },

  /* ══════════════════════════════════════════
     ADDITIONAL YEARS — ECONOMICS
  ══════════════════════════════════════════ */

  // ── 2024 ─────────────────────────────────
  {
    id: 'eco-sd-2024',
    subject: 'economics', topic: 'supply-demand', topicLabel: 'Supply & Demand',
    year: 2024, level: 'Higher Level', section: 'Section A — Q1', marks: 10,
    question: 'Explain, using a diagram, the effect of a reduction in the cost of production on the equilibrium price and quantity in a market.\n(10 marks)',
    markingScheme: [
      'Fall in production cost: Lower costs mean firms can supply more at every price level — supply curve shifts rightward from S1 to S2. (3M)',
      'New equilibrium: The rightward shift in supply leads to a lower equilibrium price (P2 < P1) and a higher equilibrium quantity (Q2 > Q1). (4M)',
      'Diagram: Well-labelled diagram showing original S1, D curve, initial equilibrium (P1, Q1), shifted S2, and new equilibrium (P2, Q2). (3M)',
    ],
    fullMarksTips: [
      'Make clear that demand does not change — only the supply curve shifts.',
      'Use subscript notation (S1 → S2, P1 → P2, Q1 → Q2) on your diagram — unlabelled shifts lose marks.',
      'State the direction of both price and quantity changes explicitly in your written answer.',
    ],
  },
  {
    id: 'eco-mf-2024',
    subject: 'economics', topic: 'market-failure', topicLabel: 'Market Failure',
    year: 2024, level: 'Higher Level', section: 'Section B — Q5', marks: 25,
    question: '(a) Explain the concept of a negative externality and illustrate it with a diagram.\n(12 marks)\n\n(b) Discuss TWO methods by which the government can correct a negative externality.\n(13 marks)',
    markingScheme: [
      'Negative externality defined: A cost imposed on a third party who is not involved in the transaction between buyer and seller — a cost that spills over to society. (3M)',
      'Example: Factory emitting pollution imposes health costs on local residents who bear no part in the production/consumption decision. (2M)',
      'Diagram: MPC (marginal private cost) below MSC (marginal social cost); market output Qm exceeds socially optimal output Q*; deadweight welfare loss triangle shown. (7M)',
      'Method 1 — Pigouvian tax: A tax set equal to the marginal external cost shifts MPC upward to equal MSC; output falls to Q*; the externality is internalised. (6M)',
      'Method 2 — Regulation/Legislation: Government sets a legal limit on output or emissions (e.g. emissions cap); firms must comply; output is restricted to Q*. (7M)',
    ],
    fullMarksTips: [
      'The diagram must show MPC below MSC — if your MPC equals MSC from the start there is no externality.',
      'Label the deadweight loss triangle clearly — it represents the welfare cost of market over-production.',
      'For correction methods, trace the mechanism to the outcome (Q reduced to Q*) — naming the method alone is not enough.',
    ],
  },
  {
    id: 'eco-ni-2024',
    subject: 'economics', topic: 'national-income', topicLabel: 'National Income',
    year: 2024, level: 'Higher Level', section: 'Section B — Q7', marks: 30,
    question: '(a) Explain THREE limitations of using GDP per capita as a measure of living standards.\n(15 marks)\n\n(b) Discuss the Keynesian view of how government can use fiscal policy to close a deflationary gap.\n(15 marks)',
    markingScheme: [
      'Limitation 1 — Distribution of income: GDP per capita is an average — it does not show how income is distributed; a high GDP per capita can mask extreme inequality. (5M)',
      'Limitation 2 — Non-market activity: GDP excludes unpaid work (e.g. caring for family members, volunteering) and the informal/black economy, understating true living standards. (5M)',
      'Limitation 3 — Quality of life factors: GDP does not capture leisure time, life expectancy, political freedom, environmental quality or subjective well-being. (5M)',
      'Deflationary gap: Actual national income (Y) is below full employment income (Yfe) — there is spare capacity and unemployment. (4M)',
      'Keynesian solution: Increase government expenditure (G) and/or cut taxes → raises aggregate demand → multiplier effect increases Y by more than the initial injection → gap is closed. (6M)',
      'Diagram showing AD/AS or 45° Keynesian cross with initial Y below Yfe, shift of AD or AE, new equilibrium at Yfe. (5M)',
    ],
    fullMarksTips: [
      'For each limitation, name it, explain the mechanism, and give a real-world example — all three elements for full marks.',
      'The deflationary gap question requires a diagram — sketch the Keynesian cross or AD/AS model.',
      'Link the multiplier explicitly to why the gap is closed by MORE than the initial injection of G.',
    ],
  },
  {
    id: 'eco-ms-2024',
    subject: 'economics', topic: 'market-structures', topicLabel: 'Market Structures',
    year: 2024, level: 'Higher Level', section: 'Section A — Q4', marks: 10,
    question: 'Explain the concept of "barriers to entry" in the context of market structures and give TWO examples.\n(10 marks)',
    markingScheme: [
      'Barriers to entry defined: Obstacles that prevent or deter new firms from entering a market and competing with established firms. (3M)',
      'Barrier 1 — Economies of scale: Existing large firms produce at lower average costs; a new entrant cannot match this cost efficiency at low volumes, making it uncompetitive. (3M)',
      'Barrier 2 — Patents/legal barriers: Exclusive legal rights prevent rivals from using the same product or process; e.g. pharmaceutical patents protect drug monopolies for up to 20 years. (2M)',
      'Alternative accepted: High start-up capital requirements, brand loyalty/advertising, control of key resources, government licences. (2M)',
    ],
    fullMarksTips: [
      'Define barriers to entry in terms of deterring or preventing entry — not just "making it hard".',
      'For each example, explain WHY it deters entry (the economic mechanism), not just what it is.',
      'Economies of scale is the strongest example to use at HL — link it to the long-run average cost curve.',
    ],
  },
  {
    id: 'eco-fp-2024',
    subject: 'economics', topic: 'fiscal-policy', topicLabel: 'Fiscal Policy',
    year: 2024, level: 'Higher Level', section: 'Section B — Q6', marks: 20,
    question: '(a) Explain the difference between the national debt and the budget deficit.\n(8 marks)\n\n(b) Discuss the possible consequences of a persistently high national debt for the Irish economy.\n(12 marks)',
    markingScheme: [
      'Budget deficit: The annual shortfall when government expenditure exceeds tax revenue in a single year — a flow concept. (4M)',
      'National debt: The accumulated total of all past budget deficits minus surpluses; the stock of all government borrowing outstanding. (4M)',
      'Consequence 1 — High interest payments: Servicing a large debt diverts tax revenue away from public services (health, education), creating opportunity costs. (4M)',
      'Consequence 2 — Reduced fiscal space: High debt limits the government\'s ability to increase spending in a recession (automatic stabilisers constrained); reduces policy flexibility. (4M)',
      'Consequence 3 — Sovereign credit risk: Very high debt may cause credit rating agencies to downgrade Ireland; borrowing costs rise; investor confidence falls. (4M)',
    ],
    fullMarksTips: [
      'The key distinction: deficit is annual (flow), debt is cumulative (stock) — use these precise terms.',
      'For consequences, link each to a specific Irish context — mention the Troika bailout period (2010–2013) as a real-world example if relevant.',
      'Each consequence needs a mechanism, not just a label — "reduced fiscal space" must be explained as "less ability to stimulate the economy".',
    ],
  },

  // ── 2018 ─────────────────────────────────
  {
    id: 'eco-el-2018',
    subject: 'economics', topic: 'elasticity', topicLabel: 'Elasticity',
    year: 2018, level: 'Higher Level', section: 'Section A — Q2', marks: 10,
    question: 'Explain what is meant by a "unit elastic" demand and illustrate it with a diagram. State ONE implication for a firm\'s total revenue.\n(10 marks)',
    markingScheme: [
      'Unit elastic demand defined: PED = −1 (absolute value of 1); a percentage change in price leads to an equal and opposite percentage change in quantity demanded. (3M)',
      'Diagram: A rectangular hyperbola — a curve that is neither horizontal nor vertical, where every price-quantity combination gives the same total revenue. (3M)',
      'Total revenue implication: When demand is unit elastic, a change in price leaves total revenue unchanged — a price rise is exactly offset by the proportional fall in quantity demanded. (4M)',
    ],
    fullMarksTips: [
      'State PED = −1 (or |PED| = 1) explicitly — the numeric value is required.',
      'The diagram is a rectangular hyperbola — if you draw a straight diagonal line you have drawn unitary elastic SUPPLY, not demand.',
      'Total revenue (TR = P × Q) stays constant under unit elastic demand — state and explain this explicitly.',
    ],
  },
  {
    id: 'eco-lm-2018',
    subject: 'economics', topic: 'labour-market', topicLabel: 'Labour Market',
    year: 2018, level: 'Higher Level', section: 'Section B — Q8', marks: 30,
    question: '(a) Explain FOUR factors that determine the wage rate in the labour market.\n(20 marks)\n\n(b) Discuss the economic arguments for and against the introduction of a national minimum wage.\n(10 marks)',
    markingScheme: [
      'Factor 1 — Supply and demand for labour: When demand for a type of labour exceeds supply, wages rise; excess supply pushes wages down — equilibrium wage clears the market. (5M)',
      'Factor 2 — Productivity/MRP: More productive workers generate higher marginal revenue product; firms are willing to pay more for workers who add greater value. (5M)',
      'Factor 3 — Trade union power: Strong unions can use collective bargaining and the threat of strike action to push wages above the competitive market rate. (5M)',
      'Factor 4 — Level of education/skill: Skilled workers are scarcer and harder to replace; the supply of skilled labour is more inelastic, commanding higher wages. (5M)',
      'For minimum wage — benefits: Reduces poverty and inequality; increases consumer spending; may increase productivity through reduced turnover. (5M)',
      'Against minimum wage: May cause unemployment if set above equilibrium — firms hire fewer workers; small businesses may be disproportionately affected. (5M)',
    ],
    fullMarksTips: [
      'For each wage determinant, name it, explain the mechanism, and show how it pushes wages up or down.',
      'Productivity factor earns extra marks if you reference Marginal Revenue Product (MRP) theory specifically.',
      'For the minimum wage discussion, use a labour market diagram showing the wage floor above equilibrium — this illustrates the unemployment effect.',
    ],
  },
  {
    id: 'eco-eg-2018',
    subject: 'economics', topic: 'economic-growth', topicLabel: 'Economic Growth',
    year: 2018, level: 'Higher Level', section: 'Section A — Q6', marks: 10,
    question: 'Explain the difference between actual economic growth and potential economic growth, and state ONE cause of each.\n(10 marks)',
    markingScheme: [
      'Actual growth: An increase in real GDP — the economy moves closer to its existing productive capacity; measured by real GDP growth rate. (2M)',
      'Potential growth: An increase in the productive capacity of the economy — the maximum output it is capable of producing shifts outward (LRAS shifts right). (2M)',
      'Cause of actual growth: An increase in aggregate demand (e.g. rise in consumer spending, export growth, government investment). (3M)',
      'Cause of potential growth: An increase in the quantity or quality of factors of production — e.g. net investment in capital, increase in workforce through immigration, technological progress. (3M)',
    ],
    fullMarksTips: [
      'Actual growth = moving toward full capacity (using idle resources); potential growth = expanding the capacity frontier itself.',
      'On a PPF diagram: actual growth moves a point inside the frontier toward the boundary; potential growth shifts the boundary outward.',
      'Causes must match the type: demand-side causes → actual growth; supply-side causes → potential growth.',
    ],
  },
  {
    id: 'eco-it-2018',
    subject: 'economics', topic: 'international-trade', topicLabel: 'International Trade',
    year: 2018, level: 'Higher Level', section: 'Section B — Q9', marks: 25,
    question: '(a) Explain THREE causes of a deficit on the current account of the balance of payments.\n(15 marks)\n\n(b) Discuss TWO policies a government might use to reduce a current account deficit.\n(10 marks)',
    markingScheme: [
      'Cause 1 — Uncompetitive exports: If domestic inflation is higher than trading partners\', Irish goods become relatively more expensive, reducing export revenues. (5M)',
      'Cause 2 — High consumer spending on imports: Strong domestic income growth increases demand for imported goods (high marginal propensity to import). (5M)',
      'Cause 3 — Structural weakness in exporting industries: Lack of diversification or investment in export sectors means the economy cannot expand exports to match import demand. (5M)',
      'Policy 1 — Deflationary fiscal/monetary policy: Raising taxes or interest rates reduces consumer spending, cutting the demand for imports and improving the current account. (5M)',
      'Policy 2 — Supply-side policies: Investment in education, infrastructure, and R&D improves competitiveness and productivity, boosting exports over the long run. (5M)',
    ],
    fullMarksTips: [
      'For each cause, show the mechanism: how it reduces export revenue or increases import spending — the BOP effect must be explicit.',
      'Note Ireland is in the eurozone and cannot devalue — mention this as a constraint when discussing exchange rate policy.',
      'Supply-side policies are a strong long-run answer — they address the root cause (competitiveness) not just the symptom.',
    ],
  },
  {
    id: 'eco-mp-2018',
    subject: 'economics', topic: 'monetary-policy', topicLabel: 'Monetary Policy',
    year: 2018, level: 'Higher Level', section: 'Section A — Q9', marks: 10,
    question: 'Explain what is meant by "quantitative easing" (QE) and describe how it was used by the ECB to stimulate the eurozone economy.\n(10 marks)',
    markingScheme: [
      'QE defined: A non-conventional monetary policy tool where a central bank creates new money electronically to purchase financial assets (usually government bonds) from banks and financial institutions. (4M)',
      'Mechanism: Asset purchases inject new money into the financial system; banks have more funds to lend; lending increases, interest rates fall, investment and consumer spending rise. (3M)',
      'ECB use: The ECB launched its Asset Purchase Programme (APP) from 2015, buying €80 billion of assets per month at its peak to combat deflation risk and stimulate growth after the 2008 financial crisis. (3M)',
    ],
    fullMarksTips: [
      'Stress that QE is used when conventional interest rate cuts are no longer possible (rates at or near zero) — this is why it is called "unconventional".',
      'The transmission mechanism (new money → more lending → lower rates → higher spending) must be explained step by step.',
      'Mention the ECB specifically and give approximate dates/figures if known — this demonstrates real-world awareness.',
    ],
  },

  // ── 2017 ─────────────────────────────────
  {
    id: 'eco-sd-2017',
    subject: 'economics', topic: 'supply-demand', topicLabel: 'Supply & Demand',
    year: 2017, level: 'Higher Level', section: 'Section A — Q3', marks: 10,
    question: 'Explain the concept of "consumer surplus" and illustrate it on a supply and demand diagram.\n(10 marks)',
    markingScheme: [
      'Consumer surplus defined: The difference between the maximum price consumers are willing to pay for a good and the actual market price they pay — the benefit consumers receive above what they spend. (4M)',
      'Diagram: Downward-sloping demand curve, supply curve, equilibrium price P*; consumer surplus is the triangular area above P* and below the demand curve. (4M)',
      'Significance: Represents welfare gained by consumers; a price rise reduces consumer surplus; a price fall increases it. (2M)',
    ],
    fullMarksTips: [
      'Define consumer surplus in terms of willingness to pay minus actual price — "benefit above cost" in plain language.',
      'On the diagram, shade the triangle clearly and label it "CS" — the shaded area IS the consumer surplus.',
      'Mention that consumer surplus falls when price rises — this links to welfare analysis and is tested at HL.',
    ],
  },
  {
    id: 'eco-mf-2017',
    subject: 'economics', topic: 'market-failure', topicLabel: 'Market Failure',
    year: 2017, level: 'Higher Level', section: 'Section B — Q6', marks: 20,
    question: '(a) Explain the concept of a merit good and explain why the free market tends to under-provide merit goods.\n(10 marks)\n\n(b) Discuss ONE way the government can correct the under-provision of merit goods.\n(10 marks)',
    markingScheme: [
      'Merit good defined: A good that society deems beneficial and that consumers may under-value or under-consume if left to the free market — e.g. education, healthcare, vaccination. (3M)',
      'Under-provision reason 1: Consumers underestimate the long-run private benefits (information failure) — they discount future benefits too heavily. (3M)',
      'Under-provision reason 2: Positive externalities are not reflected in the market price; the social benefit exceeds the private benefit, so the market produces less than the socially optimal quantity. (4M)',
      'Government correction — Subsidy: A subsidy reduces the price and increases the quantity consumed toward the social optimum; e.g. free secondary education, subsidised GP visits. (5M)',
      'Mechanism: Subsidy shifts supply right, lowering price; consumption increases; the gap between private and social benefit is narrowed. (5M)',
    ],
    fullMarksTips: [
      'Merit goods involve information failure (consumers don\'t know what\'s good for them) AND positive externalities — mention both.',
      'Distinguish merit goods from public goods: merit goods ARE excludable and rival; the under-provision is a different problem.',
      'For the government correction, trace the full mechanism through to the outcome — more consumption, closer to socially optimal level.',
    ],
  },
  {
    id: 'eco-un-2017',
    subject: 'economics', topic: 'unemployment', topicLabel: 'Unemployment',
    year: 2017, level: 'Higher Level', section: 'Section A — Q7', marks: 10,
    question: 'Distinguish between the "natural rate of unemployment" and the "full employment" rate of unemployment.\n(10 marks)',
    markingScheme: [
      'Natural rate of unemployment: The rate of unemployment that exists when the labour market is in equilibrium — comprising only frictional and structural unemployment; typically estimated at 4–5% in most economies. (4M)',
      'Full employment: An economic condition where all those who want to work at the prevailing wage are employed; does NOT mean zero unemployment — frictional unemployment still exists. (3M)',
      'Relationship: Full employment corresponds to the natural rate — cyclical unemployment is zero; any unemployment below the natural rate creates inflationary pressure (Phillips curve). (3M)',
    ],
    fullMarksTips: [
      'Full employment does NOT mean 0% unemployment — frictional and structural unemployment always exist.',
      'Link the natural rate to the Phillips curve trade-off: below the natural rate, inflation rises; above it, there is spare capacity.',
      'Give an approximate natural rate figure (4–5%) to show familiarity with real-world magnitudes.',
    ],
  },
  {
    id: 'eco-inf-2017',
    subject: 'economics', topic: 'inflation', topicLabel: 'Inflation',
    year: 2017, level: 'Higher Level', section: 'Section B — Q8', marks: 25,
    question: '(a) Explain the relationship between inflation and unemployment as described by the Phillips curve.\n(10 marks)\n\n(b) Discuss the view that there is no long-run trade-off between inflation and unemployment.\n(15 marks)',
    markingScheme: [
      'Short-run Phillips curve: An inverse relationship between inflation and unemployment — lower unemployment is associated with higher inflation as the economy approaches full capacity. (4M)',
      'Mechanism: Near full employment, labour shortages push up wages; firms raise prices to cover higher costs; inflation increases. (3M)',
      'Diagram: Downward-sloping SRPC with inflation on vertical axis, unemployment on horizontal; a point to the left implies lower unemployment but higher inflation. (3M)',
      'Long-run Phillips curve (LRPC): Vertical at the natural rate of unemployment — in the long run, attempts to reduce unemployment below the natural rate only produce higher inflation with no lasting employment gain. (6M)',
      'Expectation-augmented Phillips curve: Workers and firms adjust their inflation expectations; any policy that reduces unemployment below the natural rate is temporary — expectations adjust and the SRPC shifts upward. (5M)',
      'Conclusion: In the long run, there is no trade-off — the economy always returns to the natural rate regardless of inflation. (4M)',
    ],
    fullMarksTips: [
      'Draw both the SRPC (downward sloping) and the LRPC (vertical) on the same diagram — this is the core of the question.',
      'The key to the long-run argument is adaptive expectations — workers demand higher wages when they expect inflation, shifting the SRPC up.',
      'Name Friedman and Phelps if you know them — the expectation-augmented model is associated with their work and earns higher-order marks.',
    ],
  },
  {
    id: 'eco-ms-2017',
    subject: 'economics', topic: 'market-structures', topicLabel: 'Market Structures',
    year: 2017, level: 'Higher Level', section: 'Section A — Q5', marks: 10,
    question: 'Explain what is meant by "price discrimination" and give ONE condition necessary for it to occur.\n(10 marks)',
    markingScheme: [
      'Price discrimination defined: The practice by a firm of charging different prices to different consumers for the same good or service, where the price difference is not due to cost differences. (4M)',
      'Example: Airlines charging different fares for the same seat; cinemas charging lower prices for students and OAPs; electricity at different rates for peak/off-peak. (2M)',
      'Condition 1 — Market segmentation: The firm must be able to separate consumers into distinct groups with different price elasticities of demand and prevent resale between groups. (4M)',
    ],
    fullMarksTips: [
      'Stress "not due to cost differences" in your definition — this distinguishes price discrimination from normal differential pricing.',
      'For conditions, other accepted answers: the firm must have market power (some monopoly control over price); there must be different PED values across segments.',
      'Preventing resale is crucial — without it, buyers in the cheap segment would resell to those in the expensive segment, eliminating the price difference.',
    ],
  },

  // ── 2016 ─────────────────────────────────
  {
    id: 'eco-ni-2016',
    subject: 'economics', topic: 'national-income', topicLabel: 'National Income',
    year: 2016, level: 'Higher Level', section: 'Section B — Q5', marks: 25,
    question: '(a) Explain the THREE methods of measuring national income.\n(15 marks)\n\n(b) Explain TWO reasons why comparing national income figures between countries may be misleading.\n(10 marks)',
    markingScheme: [
      'Method 1 — Expenditure method: Total spending on final goods and services: GDP = C + I + G + (X − M); counts all spending by households, firms, government and net exports. (5M)',
      'Method 2 — Income method: Totals all factor incomes earned in production — wages, rent, interest and profit — avoiding double-counting of intermediate goods. (5M)',
      'Method 3 — Output/Production method: Totals the value added at each stage of production across all industries; only net value added counted to avoid double-counting. (5M)',
      'Misleading comparison 1 — Exchange rate fluctuations: Converting national incomes to a common currency using market exchange rates distorts comparisons; Purchasing Power Parity (PPP) adjustments are needed. (5M)',
      'Misleading comparison 2 — Income distribution: A country with high average income may have extreme inequality — GDP per capita masks poverty for large sections of the population. (5M)',
    ],
    fullMarksTips: [
      'For the expenditure method, state the formula GDP = C + I + G + (X − M) — the formula earns its own mark.',
      'Stress that all three methods, correctly applied, should give the same answer — they measure the same circular flow from different angles.',
      'For PPP comparison: explain that €1 buys different amounts in different countries — a dollar-denominated comparison using market rates ignores this.',
    ],
  },
  {
    id: 'eco-fp-2016',
    subject: 'economics', topic: 'fiscal-policy', topicLabel: 'Fiscal Policy',
    year: 2016, level: 'Higher Level', section: 'Section A — Q8', marks: 10,
    question: 'Explain the concept of "automatic stabilisers" in fiscal policy and give TWO examples.\n(10 marks)',
    markingScheme: [
      'Automatic stabilisers defined: Features of the tax and welfare system that automatically reduce the size of the fiscal multiplier and dampen economic fluctuations without any new government action. (4M)',
      'How they work: In a recession, tax receipts fall automatically (less income, less VAT) while welfare spending rises — both tend to support aggregate demand without deliberate policy. (2M)',
      'Example 1 — Progressive income tax: As incomes fall in a recession, workers pay less tax automatically — more disposable income is retained, cushioning the fall in consumption. (2M)',
      'Example 2 — Unemployment benefit: As unemployment rises, more workers receive welfare payments — this automatically boosts spending and limits the multiplied fall in national income. (2M)',
    ],
    fullMarksTips: [
      'Stress "automatic" — no new government decision is needed; these mechanisms trigger by themselves.',
      'Link automatic stabilisers to the business cycle: they reduce the amplitude of booms and recessions.',
      'Both examples must explain the mechanism (how it supports AD) not just state the example.',
    ],
  },
  {
    id: 'eco-el-2016',
    subject: 'economics', topic: 'elasticity', topicLabel: 'Elasticity',
    year: 2016, level: 'Higher Level', section: 'Section B — Q6', marks: 20,
    question: '(a) Explain what is meant by the price elasticity of demand and explain how a firm can use knowledge of PED to maximise its total revenue.\n(20 marks)',
    markingScheme: [
      'PED defined: The responsiveness of quantity demanded to a change in the price of the good. PED = % change in Qd ÷ % change in P. (4M)',
      'Elastic demand (PED > 1): A price cut increases total revenue (% rise in Qd > % fall in P); a price rise reduces total revenue. (4M)',
      'Inelastic demand (PED < 1): A price rise increases total revenue (% fall in Qd < % rise in P); a price cut reduces total revenue. (4M)',
      'Unit elastic (PED = 1): Total revenue is maximised at this point — neither a price rise nor cut increases total revenue. (4M)',
      'Firm application: A firm facing elastic demand should lower prices to maximise revenue; a firm facing inelastic demand should raise prices; total revenue is maximised where PED = 1. (4M)',
    ],
    fullMarksTips: [
      'Structure the answer around the three PED ranges (elastic, inelastic, unit elastic) and what each implies for TR.',
      'The total revenue rule: TR = P × Q; when demand is elastic, cutting price raises TR because the volume gain outweighs the price cut.',
      'The relationship between PED and TR is a core LC topic — a clear table (PED range | Price change | TR change) impresses examiners.',
    ],
  },
  {
    id: 'eco-it-2016',
    subject: 'economics', topic: 'international-trade', topicLabel: 'International Trade',
    year: 2016, level: 'Higher Level', section: 'Section B — Q9', marks: 20,
    question: '(a) Explain what is meant by the "terms of trade" and state TWO factors that can cause the terms of trade to deteriorate.\n(12 marks)\n\n(b) Explain how Ireland\'s membership of the eurozone affects its international trade.\n(8 marks)',
    markingScheme: [
      'Terms of trade defined: The ratio of a country\'s export prices to its import prices. ToT = (Index of export prices / Index of import prices) × 100. (4M)',
      'Deterioration factor 1: A fall in world demand for a country\'s exports reduces export prices relative to import prices — terms of trade fall. (4M)',
      'Deterioration factor 2: A rise in commodity/oil import prices increases import costs relative to export revenues — terms of trade fall. (4M)',
      'Eurozone benefit — No exchange rate risk: Ireland trades in euros with other eurozone members — eliminates transaction costs and currency uncertainty, boosting trade volumes. (4M)',
      'Eurozone constraint — No devaluation option: Ireland cannot devalue its currency to regain competitiveness; must rely on internal devaluation (wage and cost cuts) instead. (4M)',
    ],
    fullMarksTips: [
      'State the ToT formula and explain: an index above 100 means favourable terms (exports worth more than imports); below 100 means unfavourable.',
      'For deterioration causes, show the ratio falling: export price index falls or import price index rises.',
      'For the eurozone effect, give one benefit (stable exchange rate, lower transaction costs) and one constraint (no devaluation) — both sides are needed.',
    ],
  },

  // ── 2015 ─────────────────────────────────
  {
    id: 'eco-sd-2015',
    subject: 'economics', topic: 'supply-demand', topicLabel: 'Supply & Demand',
    year: 2015, level: 'Higher Level', section: 'Section B — Q5', marks: 25,
    question: '(a) Using supply and demand analysis, explain the effect of a specific tax on the equilibrium price and quantity in a market.\n(12 marks)\n\n(b) Explain the concept of "tax incidence" and explain the circumstances under which the consumer bears most of the tax burden.\n(13 marks)',
    markingScheme: [
      'Specific tax effect on supply: A specific tax increases production costs by a fixed amount per unit — supply curve shifts left (upward) from S to S+tax. (4M)',
      'New equilibrium: Price rises from P1 to P2 (but by less than the full tax); quantity falls from Q1 to Q2 — both consumers and producers share the tax burden. (4M)',
      'Diagram: S curve, S+tax curve above it by the tax amount; D curve; new P2 and Q2; tax revenue rectangle shown. (4M)',
      'Tax incidence defined: The distribution of the tax burden between buyers and sellers — who actually bears the cost of the tax in terms of price and quantity changes. (4M)',
      'Consumer bears most of the burden when: Demand is price inelastic and/or supply is price elastic — consumers cannot easily reduce their purchases, so the price rise is passed on to them. (5M)',
      'Example: Taxes on cigarettes, alcohol, petrol — inelastic demand means consumers bear most of the burden. (4M)',
    ],
    fullMarksTips: [
      'The supply curve shifts LEFT (or UP by the tax amount) — the vertical distance between S and S+tax equals the tax per unit.',
      'Price does not rise by the full tax — the split depends on relative elasticities; show this gap on your diagram.',
      'Tax incidence depends on PED and PES — if demand is perfectly inelastic, consumers bear 100% of the tax.',
    ],
  },
  {
    id: 'eco-ms-2015',
    subject: 'economics', topic: 'market-structures', topicLabel: 'Market Structures',
    year: 2015, level: 'Higher Level', section: 'Section B — Q7', marks: 25,
    question: '(a) Explain, using a diagram, the long-run equilibrium position of a firm in monopolistic competition.\n(15 marks)\n\n(b) Give TWO reasons why monopolistic competition is considered wasteful.\n(10 marks)',
    markingScheme: [
      'Monopolistic competition features: Many firms, differentiated products, low barriers to entry and exit. (3M)',
      'Short-run: Firm makes supernormal profit attracting new entrants — demand curve for each firm shifts left as market share is divided. (4M)',
      'Long-run equilibrium diagram: Downward-sloping AR curve tangent to the AC curve at equilibrium output (Qm); AR = AC (normal profit only); MR intersects MC below this point. (5M)',
      'Productive inefficiency: Firm does not produce at minimum AC — output is less than optimal scale; excess capacity exists. (3M)',
      'Reason 1 — Excess capacity/productive inefficiency: Firms operate with idle capacity (to the left of minimum AC) — resources are wasted. (5M)',
      'Reason 2 — Allocative inefficiency: Price (AR) exceeds marginal cost (MC) — consumers pay more than the cost of producing the last unit. (5M)',
    ],
    fullMarksTips: [
      'The long-run diagram is distinctive: AR must be tangent to AC (touching but not crossing) — this shows zero supernormal profit.',
      '"Tangent to AC" means the firm is not at minimum AC — this IS the excess capacity result.',
      'Name both inefficiencies (productive AND allocative) even if only asked for one — you earn credit for both.',
    ],
  },
  {
    id: 'eco-un-2015',
    subject: 'economics', topic: 'unemployment', topicLabel: 'Unemployment',
    year: 2015, level: 'Higher Level', section: 'Section A — Q5', marks: 10,
    question: 'Explain the difference between voluntary and involuntary unemployment and discuss whether the distinction matters for policy.\n(10 marks)',
    markingScheme: [
      'Voluntary unemployment: Workers who choose not to accept available jobs at the prevailing wage — they prefer leisure or find the wage insufficient to compensate for working. (3M)',
      'Involuntary unemployment: Workers who are willing and able to work at the prevailing wage but cannot find a job — caused by insufficient aggregate demand or structural mismatches. (3M)',
      'Policy relevance: Involuntary unemployment requires demand-side or structural policies (fiscal stimulus, retraining); voluntary unemployment may respond to welfare reform or wage incentives — different causes require different solutions. (4M)',
    ],
    fullMarksTips: [
      'The key distinction: voluntary = choice not to work; involuntary = want to work but no job available.',
      'For policy relevance, show that the distinction changes what type of policy is appropriate — demand management vs supply-side reform.',
      'Note that in practice, distinguishing between the two is difficult — this shows analytical depth.',
    ],
  },
  {
    id: 'eco-mp-2015',
    subject: 'economics', topic: 'monetary-policy', topicLabel: 'Monetary Policy',
    year: 2015, level: 'Higher Level', section: 'Section B — Q9', marks: 25,
    question: '(a) Explain the main objectives of the European Central Bank (ECB).\n(10 marks)\n\n(b) Using the quantity theory of money, explain the relationship between money supply and inflation.\n(15 marks)',
    markingScheme: [
      'Primary objective: Maintaining price stability — keeping inflation close to but below 2% in the medium term across the eurozone. (4M)',
      'Secondary objectives: Supporting general EU economic policies — high employment, sustainable growth, stable exchange rates — but only when consistent with the primary mandate. (3M)',
      'Independence: The ECB is politically independent; cannot accept instructions from EU governments or institutions. (3M)',
      'Quantity theory of money — equation: MV = PT (or MV = PY); M = money supply, V = velocity of circulation, P = price level, T/Y = volume of transactions/real output. (5M)',
      'Assumptions: V and T are constant in the short run. (2M)',
      'Inflation relationship: If M increases while V and T are held constant, P must rise proportionally — an increase in money supply causes inflation. (5M)',
      'Policy implication: To control inflation, the central bank must control growth in the money supply. (3M)',
    ],
    fullMarksTips: [
      'State the ECB\'s primary mandate as "price stability" and define it as inflation "close to but below 2%" — the specific target earns marks.',
      'For the quantity theory, write the equation MV = PT clearly and identify each variable before applying it.',
      'The key assumption is constant V and T — without stating this, the inflation conclusion does not follow logically.',
    ],
  },

  /* ══════════════════════════════════════════
     ADDITIONAL YEARS — BUSINESS
  ══════════════════════════════════════════ */

  {
    id: 'bus-org-2015',
    subject: 'business', topic: 'business-organisation', topicLabel: 'Business Organisation',
    year: 2015, level: 'Higher Level', section: 'Unit 3 — Q1', marks: 20,
    question: 'Explain the term "sole trader" and outline THREE advantages and TWO disadvantages of this form of business organisation.\n(20 marks)',
    markingScheme: [
      'Sole trader defined: A business owned and operated by a single individual who bears unlimited personal liability for all debts. (3M)',
      'Advantage 1 — Easy to set up: No legal formalities required; can trade immediately; low start-up costs. (3M)',
      'Advantage 2 — Full control: The owner makes all decisions independently without consulting partners or shareholders. (3M)',
      'Advantage 3 — Keep all profits: No profit-sharing required; all after-tax profits belong to the owner. (3M)',
      'Disadvantage 1 — Unlimited liability: The owner\'s personal assets (home, savings) can be seized to pay business debts — full personal financial exposure. (4M)',
      'Disadvantage 2 — Limited capital: Cannot issue shares; growth is limited to personal savings and loans; expansion is constrained. (4M)',
    ],
    fullMarksTips: [
      'Unlimited liability is the most important disadvantage — explain the full implications, not just "you lose your money".',
      'For each point, name it then explain the mechanism clearly in one or two sentences.',
      'Other accepted advantages: privacy (no public accounts), flexibility, direct customer relationships.',
    ],
  },
  {
    id: 'bus-fin-2017',
    subject: 'business', topic: 'finance', topicLabel: 'Finance & Accounts',
    year: 2017, level: 'Higher Level', section: 'Unit 6 — Q2', marks: 20,
    question: 'Explain the difference between short-term and long-term sources of finance and give ONE example of each.\n(20 marks)',
    markingScheme: [
      'Short-term finance defined: Finance repayable within one year; used to fund day-to-day working capital needs (e.g. buying stock, paying wages). (4M)',
      'Short-term example — Bank overdraft: The business draws more money from its account than it has; bank allows this up to a limit; repayable on demand; suitable for temporary cash flow gaps. (6M)',
      'Long-term finance defined: Finance repayable over more than one year; used to fund capital expenditure (e.g. machinery, property, expansion). (4M)',
      'Long-term example — Debenture/Long-term loan: A fixed-term loan from a bank at an agreed interest rate; repaid over many years; secured against business assets. (6M)',
    ],
    fullMarksTips: [
      'The key distinction is the time period: short-term = under 1 year; long-term = over 1 year — and link each to the purpose (working capital vs capital expenditure).',
      'For each example, explain: what it is, how it works, why it suits the time frame.',
      'Other valid examples — short: trade credit, factoring; long: equity/share issue, venture capital, leasing.',
    ],
  },
  {
    id: 'bus-mkt-2016',
    subject: 'business', topic: 'marketing', topicLabel: 'Marketing',
    year: 2016, level: 'Higher Level', section: 'Unit 5 — Q2', marks: 20,
    question: 'Explain the concept of the "product life cycle" and discuss the marketing strategies a firm might use at each stage.\n(20 marks)',
    markingScheme: [
      'Introduction stage: Low sales, high costs, heavy promotion needed; price skimming or penetration pricing used to gain market entry. (4M)',
      'Growth stage: Rapid sales growth, increasing competition enters; focus on differentiation; marketing emphasises brand building and distribution expansion. (4M)',
      'Maturity stage: Sales plateau, market saturation, intense competition; price competition increases; firms seek product extensions or new market segments. (4M)',
      'Decline stage: Falling sales, reduced marketing spend; firm may harvest profits, reposition, or withdraw the product from market. (4M)',
      'Diagram: S-shaped (or bell-shaped) curve with the four stages labelled on the time axis and sales/profit on the vertical axis. (4M)',
    ],
    fullMarksTips: [
      'Link marketing strategy to each stage specifically — generic "promote the product" answers do not earn marks.',
      'Draw the PLC curve; label all four stages on the x-axis; show a separate profit curve if possible (profit lags behind sales).',
      'The maturity stage is where most real competition occurs — show awareness that firms use brand extensions, new segments, or price cuts here.',
    ],
  },
  {
    id: 'bus-hr-2015',
    subject: 'business', topic: 'human-resources', topicLabel: 'Human Resources',
    year: 2015, level: 'Higher Level', section: 'Unit 4 — Q3', marks: 20,
    question: 'Discuss the importance of motivation in the workplace and explain ONE motivational theory.\n(20 marks)',
    markingScheme: [
      'Importance of motivation: Motivated employees are more productive, produce better quality work, have lower absenteeism and turnover, and contribute to a positive workplace culture. (6M)',
      'Maslow\'s Hierarchy of Needs: Five levels — physiological (food, shelter), safety, social/love, esteem, and self-actualisation; lower needs must be satisfied before higher ones motivate. (6M)',
      'Application to management: Managers must identify which level employees are at and offer appropriate rewards — e.g. good salary satisfies physiological needs; promotion and recognition satisfy esteem. (4M)',
      'Alternative theory accepted: Herzberg\'s Two-Factor Theory (hygiene vs motivators); McGregor\'s Theory X and Y; Taylor\'s scientific management. (4M)',
    ],
    fullMarksTips: [
      'Name a specific theory (Maslow, Herzberg, etc.) and explain it clearly with all its components — vague references to "motivation theories" earn nothing.',
      'For Maslow, draw the hierarchy pyramid and label all five levels — this demonstrates full knowledge.',
      'Link the theory to management practice — how does it tell a manager what to do in practice?',
    ],
  },

  /* ══════════════════════════════════════════
     ADDITIONAL YEARS — BIOLOGY
  ══════════════════════════════════════════ */

  {
    id: 'bio-cell-2015',
    subject: 'biology', topic: 'cell-biology', topicLabel: 'Cell Biology',
    year: 2015, level: 'Higher Level', section: 'Section B — Q6', marks: 25,
    question: '(a) Describe the structure and function of mitochondria.\n(10 marks)\n\n(b) Explain the role of ATP in cellular metabolism.\n(15 marks)',
    markingScheme: [
      'Mitochondria structure: Double membrane — outer membrane (smooth) and inner membrane (folded into cristae); matrix contains enzymes, DNA and ribosomes. (5M)',
      'Function: Site of aerobic respiration — glucose is broken down in the presence of oxygen to produce ATP, CO₂ and water; the more active the cell, the more mitochondria it contains. (5M)',
      'ATP structure: Adenosine triphosphate — adenosine + 3 phosphate groups; energy stored in high-energy phosphate bonds. (4M)',
      'ATP function: Universal energy currency of the cell; provides energy for active transport, protein synthesis, muscle contraction, and all energy-requiring cellular processes. (5M)',
      'ATP synthesis: Produced in mitochondria (aerobic respiration) and cytoplasm (anaerobic respiration/glycolysis); ADP + Pi + energy → ATP. (6M)',
    ],
    fullMarksTips: [
      'Name both the inner membrane folds ("cristae") and the fluid inside ("matrix") — these specific terms earn marks.',
      'Link the number of mitochondria to the cell\'s energy needs — muscle cells and liver cells have many; this shows understanding.',
      'For ATP, stress that it is the immediate energy source — glucose is not directly used; it must be converted to ATP first.',
    ],
  },
  {
    id: 'bio-gen-2016',
    subject: 'biology', topic: 'genetics', topicLabel: 'Genetics',
    year: 2016, level: 'Higher Level', section: 'Section B — Q7', marks: 25,
    question: '(a) Explain the process of meiosis and state its biological importance.\n(15 marks)\n\n(b) Distinguish between crossing over and independent assortment as sources of genetic variation.\n(10 marks)',
    markingScheme: [
      'Meiosis overview: Two successive divisions (Meiosis I and II) producing four haploid daughter cells from one diploid parent cell — reduces chromosome number by half. (3M)',
      'Meiosis I: Homologous chromosomes pair up (synapsis) and separate — chromosome number halved; crossing over occurs during prophase I. (5M)',
      'Meiosis II: Similar to mitosis — sister chromatids separate; four haploid cells produced. (3M)',
      'Importance: Produces gametes (sperm and egg) for sexual reproduction; maintains chromosome number across generations; generates genetic variation. (4M)',
      'Crossing over: During prophase I, non-sister chromatids of homologous chromosomes exchange segments — new combinations of alleles are created (recombination). (5M)',
      'Independent assortment: During metaphase I, homologous chromosome pairs align randomly — each gamete receives a random mix of maternal and paternal chromosomes (2ⁿ combinations possible). (5M)',
    ],
    fullMarksTips: [
      'Distinguish meiosis from mitosis clearly: meiosis has TWO divisions and produces 4 haploid cells; mitosis has ONE division and produces 2 diploid cells.',
      'Crossing over and independent assortment both create new allele combinations but by different mechanisms — crossing over is within a chromosome pair; independent assortment is between different chromosome pairs.',
      'State the importance of meiosis in terms of sexual reproduction AND variation — both points are tested.',
    ],
  },
  {
    id: 'bio-hum-2016',
    subject: 'biology', topic: 'human-biology', topicLabel: 'Human Biology',
    year: 2016, level: 'Higher Level', section: 'Section A — Q4', marks: 15,
    question: 'Explain the role of the kidney in osmoregulation and describe how ADH (antidiuretic hormone) controls water reabsorption.\n(15 marks)',
    markingScheme: [
      'Osmoregulation: The control of water and salt balance in the blood — the kidney maintains constant blood osmotic pressure. (3M)',
      'Nephron role: The loop of Henle creates a concentration gradient in the medulla; filtrate is concentrated as it passes through the collecting duct — water is reabsorbed by osmosis. (4M)',
      'ADH release: When blood osmotic pressure rises (dehydration), the hypothalamus detects this and signals the posterior pituitary to release ADH into the blood. (4M)',
      'ADH action: ADH increases the permeability of the collecting duct to water — more water is reabsorbed from the filtrate into the blood; urine becomes more concentrated and volume decreases. (4M)',
    ],
    fullMarksTips: [
      'State clearly that ADH increases the permeability of the COLLECTING DUCT (not the entire nephron) to water.',
      'Use the words "osmotic pressure" and "concentration gradient" — these are the technical terms the examiner expects.',
      'Describe the negative feedback loop: dehydration → high osmotic pressure → more ADH → more water reabsorption → osmotic pressure falls — this shows full understanding.',
    ],
  },
  {
    id: 'bio-eco-2017',
    subject: 'biology', topic: 'ecology', topicLabel: 'Ecology',
    year: 2017, level: 'Higher Level', section: 'Section B — Q8', marks: 25,
    question: '(a) Describe the nitrogen cycle and explain its importance for living organisms.\n(15 marks)\n\n(b) Explain what is meant by eutrophication and describe its ecological consequences.\n(10 marks)',
    markingScheme: [
      'Nitrogen fixation: Atmospheric N₂ converted to ammonium (NH₄⁺) by nitrogen-fixing bacteria (e.g. Rhizobium in root nodules of legumes) or by lightning. (4M)',
      'Nitrification: Ammonium → nitrite (NO₂⁻) → nitrate (NO₃⁻) by nitrifying bacteria (Nitrosomonas, Nitrobacter); nitrate is absorbed by plant roots. (4M)',
      'Denitrification: Denitrifying bacteria convert nitrates back to N₂ in anaerobic conditions (waterlogged soils) — returns nitrogen to the atmosphere. (3M)',
      'Importance: Nitrogen is essential for amino acids, proteins, nucleic acids (DNA, RNA), and chlorophyll — without the cycle, nitrogen would not be available in usable form. (4M)',
      'Eutrophication defined: Over-enrichment of water bodies with nutrients (especially nitrates and phosphates) from agricultural run-off or sewage. (3M)',
      'Ecological consequences: Algal bloom → blocks light → aquatic plants die → bacteria decompose dead material → aerobic bacteria use up dissolved oxygen → fish and other organisms die (BOD rises). (7M)',
    ],
    fullMarksTips: [
      'Name specific bacteria for each stage (Rhizobium, Nitrosomonas, Nitrobacter, Pseudomonas for denitrification) — generic "bacteria" loses marks at HL.',
      'For eutrophication, trace the full chain from nutrient enrichment to fish death — each step must be linked to the next.',
      'State that eutrophication raises the Biological Oxygen Demand (BOD) — this technical term is expected in HL answers.',
    ],
  },

  /* ══════════════════════════════════════════
     ADDITIONAL YEARS — HISTORY
  ══════════════════════════════════════════ */

  {
    id: 'his-rev-2015',
    subject: 'history', topic: 'irish-revolution', topicLabel: 'Irish Revolution 1916–1923',
    year: 2015, level: 'Higher Level', section: 'Section 3 — Q3', marks: 25,
    question: 'What were the main terms of the Anglo-Irish Treaty of 1921 and why did it divide the nationalist movement?\n(25 marks)',
    markingScheme: [
      'Main terms — Dominion status: The Irish Free State was to have Dominion status within the British Empire (like Canada/Australia) — not a fully independent republic. (5M)',
      'Partition: The six counties of Northern Ireland were excluded — they would remain part of the United Kingdom; a Boundary Commission was promised to review the border. (5M)',
      'Oath of Allegiance: Members of the Dáil would be required to swear an oath of fidelity to the British Crown — deeply offensive to republican principles. (5M)',
      'Division — Pro-Treaty: Collins argued it was "the freedom to achieve freedom"; practical step toward full independence; avoiding renewed all-out war. (5M)',
      'Division — Anti-Treaty: De Valera and others rejected the oath and partition; saw it as a betrayal of the 1916 proclamation and the All-Ireland republic declared in 1919. (5M)',
    ],
    fullMarksTips: [
      'Cover the three main contentious terms: Dominion status (not republic), partition, and the oath — all three are needed for full marks.',
      'The division question requires BOTH pro-Treaty arguments (Collins) and anti-Treaty arguments (de Valera) — balance is essential.',
      'Note that Collins signed under duress ("otherwise immediate and terrible war") — this context explains why leaders accepted difficult terms.',
    ],
  },
  {
    id: 'his-eur-2016',
    subject: 'history', topic: 'modern-europe', topicLabel: 'Modern Europe & World',
    year: 2016, level: 'Higher Level', section: 'Section 4 — Q2', marks: 30,
    question: 'How did Stalin consolidate power in the Soviet Union in the 1920s and 1930s?\n(30 marks)',
    markingScheme: [
      'Struggle for succession: After Lenin\'s death (1924), Stalin outmanoeuvred rivals — Trotsky, Zinoviev, Kamenev — through control of party appointments as General Secretary. (6M)',
      'Collectivisation (1928–33): Forced collectivisation of agriculture; peasant resistance crushed; kulaks liquidated as a class; state control of agricultural output secured. (6M)',
      'Five Year Plans: Rapid industrialisation under centralised state planning; heavy industry prioritised; economic base for Soviet power built at great human cost. (6M)',
      'Purges (1936–38): Great Terror — show trials of Old Bolsheviks; mass arrests and executions through NKVD; Red Army purged, removing potential rivals and cementing Stalin\'s absolute control. (6M)',
      'Cult of personality: Stalin portrayed as infallible leader; censorship and propaganda; rewriting of history — Trotsky airbrushed from official photographs. (6M)',
    ],
    fullMarksTips: [
      'Cover multiple methods — party control, economic transformation, terror — rather than focusing on one exclusively.',
      'Give specific dates and events (Great Purge 1936–38, collectivisation 1928–33) — precision demonstrates depth of knowledge.',
      'Link each method to how it eliminated opposition or secured loyalty — always connect back to the question of power consolidation.',
    ],
  },
  {
    id: 'his-ire-2015',
    subject: 'history', topic: 'ireland-1922-1945', topicLabel: 'Ireland 1922–1945',
    year: 2015, level: 'Higher Level', section: 'Section 3 — Q1', marks: 25,
    question: 'Discuss the economic policies of Éamon de Valera\'s government in Ireland during the 1930s.\n(25 marks)',
    markingScheme: [
      'Economic nationalism / self-sufficiency: De Valera pursued an autarkic policy — aimed to make Ireland economically self-sufficient, reduce dependence on Britain. (5M)',
      'Protectionism: High tariff barriers erected against imported goods; domestic industries protected behind trade walls to promote industrialisation. (5M)',
      'Economic War with Britain (1932–38): De Valera refused to pay land annuities to Britain; Britain retaliated with tariffs on Irish cattle exports; Irish agriculture severely damaged. (6M)',
      'Industrial development: Establishment of semi-state companies (Aer Lingus 1936, Irish Sugar Company); Shannon Airport developed; limited industrialisation achieved. (5M)',
      'Anglo-Irish Trade Agreement 1938: Economic War ended; land annuities dispute settled; Treaty ports returned; trade normalised — pragmatic compromise. (4M)',
    ],
    fullMarksTips: [
      'The Economic War (1932–38) is the centrepiece of this topic — explain its causes, effects on Irish agriculture, and resolution.',
      'Note the contradiction: protectionism helped create some industry but damaged agriculture and living standards — this tension is worth exploring.',
      'The 1938 Anglo-Irish Agreement was a significant milestone — it resolved the Economic War and returned the Treaty ports.',
    ],
  },

  /* ══════════════════════════════════════════
     ADDITIONAL YEARS — MATHS
  ══════════════════════════════════════════ */

  {
    id: 'mth-alg-2015',
    subject: 'maths', topic: 'algebra', topicLabel: 'Algebra & Functions',
    year: 2015, level: 'Higher Level', section: 'Paper 1 — Q4', marks: 20,
    question: 'Let f(x) = x² − 4x + 3.\n\n(a) Find the roots of f(x) = 0.\n(b) Sketch the graph of f(x), showing all key features.\n(c) Find the range of values of x for which f(x) < 0.',
    markingScheme: [
      'Part (a): f(x) = (x−1)(x−3) = 0; roots: x = 1 and x = 3. (5M)',
      'Part (b) — Sketch: Upward-opening parabola; roots at x = 1 and x = 3 labelled; vertex at (2, −1) found by completing the square or x = −b/2a; y-intercept at (0, 3). (8M)',
      'Part (c): f(x) < 0 between the roots; solution: 1 < x < 3. (7M)',
    ],
    fullMarksTips: [
      'Factor first for the roots — show the factored form (x−1)(x−3) before stating the roots.',
      'For the sketch: mark both roots AND the vertex AND the y-intercept — all four features earn marks.',
      'For part (c), the parabola is below the x-axis between the roots — if the coefficient of x² is positive, f(x) < 0 between the roots.',
    ],
  },
  {
    id: 'mth-sta-2016',
    subject: 'maths', topic: 'statistics', topicLabel: 'Statistics & Probability',
    year: 2016, level: 'Higher Level', section: 'Paper 2 — Q3', marks: 25,
    question: 'In a class of 30 students, 18 study French, 14 study Spanish, and 6 study both languages.\n\n(a) Draw a Venn diagram to represent this information.\n(b) How many students study neither language?\n(c) A student is chosen at random. Find the probability that the student studies exactly one language.',
    markingScheme: [
      'Part (a) — Venn diagram: Two overlapping circles; French only = 18 − 6 = 12; Spanish only = 14 − 6 = 8; both = 6; correctly placed in diagram. (8M)',
      'Part (b): Total studying at least one = 12 + 8 + 6 = 26; neither = 30 − 26 = 4 students. (7M)',
      'Part (c): Students studying exactly one language = 12 + 8 = 20; P(exactly one) = 20/30 = 2/3. (10M)',
    ],
    fullMarksTips: [
      'Always start a Venn diagram question by finding the intersection first — then subtract to find "only" regions.',
      'For part (b), find the union first (|F ∪ S| = |F| + |S| − |F ∩ S|) then subtract from the total.',
      'For part (c), "exactly one language" means French only OR Spanish only — not both; 12 + 8 = 20, not 26.',
    ],
  },
  {
    id: 'mth-tri-2015',
    subject: 'maths', topic: 'trigonometry', topicLabel: 'Trigonometry',
    year: 2015, level: 'Higher Level', section: 'Paper 2 — Q6', marks: 20,
    question: 'A triangle ABC has sides a = 8 cm, b = 11 cm and included angle C = 35°.\n\n(a) Find the length of side c using the cosine rule.\n(b) Find the area of triangle ABC.',
    markingScheme: [
      'Part (a) — Cosine rule stated: c² = a² + b² − 2ab cos C. (3M)',
      'Part (a) — Substitution: c² = 64 + 121 − 2(8)(11)cos 35° = 185 − 176(0.8192) = 185 − 144.18 = 40.82. (5M)',
      'Part (a) — c = √40.82 ≈ 6.39 cm. (4M)',
      'Part (b) — Area formula: Area = ½ab sin C = ½(8)(11)sin 35° = 44 × 0.5736 ≈ 25.24 cm². (8M)',
    ],
    fullMarksTips: [
      'State the cosine rule formula before substituting — this earns a method mark even if arithmetic goes wrong.',
      'Use your calculator carefully: cos 35° ≈ 0.8192; show this value in your working.',
      'The area formula ½ab sin C requires the INCLUDED angle (the angle between the two given sides) — identify this correctly from the question.',
    ],
  },
  {
    id: 'mth-cal-2016',
    subject: 'maths', topic: 'calculus', topicLabel: 'Calculus',
    year: 2016, level: 'Higher Level', section: 'Paper 1 — Q8', marks: 25,
    question: 'A curve has equation y = x³ − 6x² + 9x.\n\n(a) Find dy/dx.\n(b) Find the equations of the tangent and normal to the curve at the point where x = 1.\n(c) Find the x-coordinates of the stationary points and determine their nature.',
    markingScheme: [
      'Part (a): dy/dx = 3x² − 12x + 9. (4M)',
      'Part (b) — y at x=1: y = 1 − 6 + 9 = 4; point (1, 4). Slope of tangent = 3(1) − 12(1) + 9 = 0; tangent is y = 4 (horizontal). (6M)',
      'Part (b) — Normal: Perpendicular to a horizontal tangent is vertical; normal is x = 1. (3M)',
      'Part (c) — Stationary points: dy/dx = 0 → 3x² − 12x + 9 = 0 → x² − 4x + 3 = 0 → (x−1)(x−3) = 0; x = 1 and x = 3. (5M)',
      'Part (c) — Nature: d²y/dx² = 6x − 12; at x=1: −6 < 0 → local maximum; at x=3: +6 > 0 → local minimum. (7M)',
    ],
    fullMarksTips: [
      'Differentiate each term carefully — the most common error is dropping a coefficient.',
      'When the slope is 0 (horizontal tangent), the normal is a vertical line x = c — state this explicitly.',
      'The second derivative test: negative → maximum; positive → minimum; zero → inconclusive (use first derivative test).',
    ],
  },
  {
    id: 'mth-geo-2015',
    subject: 'maths', topic: 'geometry', topicLabel: 'Geometry & Co-ordinate',
    year: 2015, level: 'Higher Level', section: 'Paper 2 — Q3', marks: 20,
    question: 'A line l has equation 3x − 4y + 12 = 0.\n\n(a) Find the slope and y-intercept of l.\n(b) Find the perpendicular distance from the point P(2, −1) to the line l.\n(c) Find the equation of the line through P perpendicular to l.',
    markingScheme: [
      'Part (a): Rearrange: 4y = 3x + 12 → y = ¾x + 3; slope = ¾; y-intercept = 3. (5M)',
      'Part (b) — Distance formula: d = |ax₁ + by₁ + c| / √(a² + b²) = |3(2) − 4(−1) + 12| / √(9+16) = |6 + 4 + 12| / 5 = 22/5 = 4.4 units. (8M)',
      'Part (c): Perpendicular slope = −4/3 (negative reciprocal of ¾); equation: y − (−1) = −4/3(x − 2) → 4x + 3y − 5 = 0. (7M)',
    ],
    fullMarksTips: [
      'State the perpendicular distance formula and identify a, b, c from the line equation before substituting.',
      'For the perpendicular line, the slope is the NEGATIVE RECIPROCAL of the original slope — ¾ becomes −4/3.',
      'Express the final equation with integer coefficients in the form ax + by + c = 0.',
    ],
  },

  /* ══════════════════════════════════════════
     CHEMISTRY
  ══════════════════════════════════════════ */

  // ── Acid-Base & Titration ─────────────────
  {
    id: 'chem-2024-acid-01',
    subject: 'chemistry', topic: 'acid-base', topicLabel: 'Acid-Base & Titration',
    year: 2024, level: 'HL', section: 'Q1', marks: 50,
    question: 'A student carried out an experiment to determine the concentration of ethanoic acid in vinegar. A 10.0 cm³ portion of vinegar was diluted to exactly 50.0 cm³. The diluted vinegar was titrated against 0.09 M NaOH; on average 12.4 cm³ of diluted vinegar neutralised 25.0 cm³ of NaOH. (a) Name the piece of apparatus used to measure the 10.0 cm³ portion accurately. (b) Describe how to dilute the portion to exactly 50.0 cm³. (c) Name a suitable indicator and state the colour change at the end point. (d) Calculate the concentration of ethanoic acid in the original vinegar in mol/L. (50 marks)',
    markingScheme: [
      'Pipette (or burette) used to accurately measure 10.0 cm³. (5M)',
      'Transfer 10.0 cm³ vinegar to a 50 cm³ volumetric flask; add distilled water to the graduation mark; stopper and invert repeatedly to mix. (9M)',
      'Indicator: phenolphthalein. Colour change: colourless to pink (pale pink) at end point. (9M)',
      'Moles NaOH in 25 cm³ = 0.025 × 0.09 = 0.00225 mol. (5M)',
      'Moles CH₃COOH per cm³ diluted = 0.00225 ÷ 12.4 = 1.815 × 10⁻⁴ mol/cm³. (9M)',
      'Concentration of diluted vinegar = 1.815 × 10⁻⁴ × 1000 = 0.1815 mol/L. (5M)',
      'Original vinegar = 0.1815 × 5 = 0.908 mol/L (dilution factor 50/10 = 5). (8M)',
    ],
    fullMarksTips: [
      'Always name the PIPETTE — "measuring cylinder" will not score marks for this step.',
      'State ALL steps for dilution: transfer to volumetric flask, add water to the mark, invert to mix.',
      'Use phenolphthalein (not litmus) for strong base/weak acid titrations.',
      'Show all working for the calculation — each arithmetic slip costs 1 mark.',
      'Remember to apply the dilution factor (×5) to convert back to original concentration.',
    ],
  },
  {
    id: 'chem-2023-acid-01',
    subject: 'chemistry', topic: 'acid-base', topicLabel: 'Acid-Base & Titration',
    year: 2023, level: 'HL', section: 'Q1', marks: 50,
    question: 'The reagent (NH₄)₂SO₄·FeSO₄·6H₂O (Mr = 392) was used to prepare a standard solution. (a) State two properties that make it suitable as a primary standard. (b) Describe how to prepare exactly 250 cm³ of a solution containing 9.31 g. (c) The standard Fe²⁺ solution was titrated against KMnO₄. On average 22.6 cm³ of KMnO₄ neutralised 25.0 cm³ of the Fe²⁺ solution. Equation: MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O. Calculate the concentration of KMnO₄. (50 marks)',
    markingScheme: [
      'High molar mass (392 g/mol) reduces weighing errors. (4M)',
      'Stable / does not absorb moisture / does not react with air / available in high purity. (4M)',
      'Weigh 9.31 g; dissolve in distilled water in a beaker; transfer quantitatively to 250 cm³ volumetric flask; add dilute H₂SO₄; make up to the mark with distilled water; stopper and invert to mix. (15M)',
      'Concentration Fe²⁺: mol = 9.31 ÷ 392 = 0.02375 mol in 250 cm³ → 0.095 mol/L. (8M)',
      'Moles Fe²⁺ in 25.0 cm³ = 0.025 × 0.095 = 0.002375 mol. (5M)',
      'Moles KMnO₄ = 0.002375 ÷ 5 = 4.75 × 10⁻⁴ mol (from 1:5 mole ratio). (5M)',
      'Concentration KMnO₄ = (4.75 × 10⁻⁴ × 1000) ÷ 22.6 = 0.021 mol/L. (9M)',
    ],
    fullMarksTips: [
      'Give TWO distinct properties for primary standard — high purity AND high molar mass are the best.',
      'Describe volumetric flask preparation in full: beaker → flask → acid → water to mark → invert.',
      'Dilute H₂SO₄ must be added to prevent oxidation of Fe²⁺ to Fe³⁺.',
      'The 1:5 mole ratio (MnO₄⁻:Fe²⁺) is critical — identify this from the balanced equation.',
      'Show full step-by-step calculation — each arithmetic error costs 1 mark.',
    ],
  },
  {
    id: 'chem-2022-acid-08',
    subject: 'chemistry', topic: 'acid-base', topicLabel: 'Acid-Base & Titration',
    year: 2022, level: 'HL', section: 'Q8', marks: 50,
    question: '(a) Explain, with the aid of a diagram, the acidic nature of the carboxylic acid functional group. (b) Give an example of a reaction demonstrating the acidity of ethanol. (c) Distinguish between a strong acid and a weak acid, giving one example of each. (d) Define pH. Calculate the pH of 0.12 M NaOH (Kw = 1 × 10⁻¹⁴). (50 marks)',
    markingScheme: [
      'Carboxylic group: –COOH; the O–H bond is polar (diagram: δ+ on H, δ– on O); H⁺ is released in water forming –COO⁻. (12M)',
      'Ethanol reacts with sodium metal: 2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂ (shows H⁺ donation). (8M)',
      'Strong acid: fully dissociates in water (e.g. HCl, H₂SO₄). (6M)',
      'Weak acid: partially dissociates in water (e.g. CH₃COOH, HNO₂). (6M)',
      'pH = −log[H⁺]; a measure of the acidity or alkalinity of a solution. (6M)',
      '[OH⁻] = 0.12 mol/L; [H⁺] = Kw ÷ [OH⁻] = 1×10⁻¹⁴ ÷ 0.12 = 8.33×10⁻¹⁴; pH = −log(8.33×10⁻¹⁴) = 13.08. (12M)',
    ],
    fullMarksTips: [
      'Always draw AND label the carboxylic acid diagram — the polar O–H bond with δ+/δ– symbols.',
      'The ethanol/sodium reaction is the standard answer — write the full balanced equation.',
      'Distinguish strong vs weak by "fully" vs "partially" dissociates — not just "more acidic".',
      'For pH of a base: use [H⁺] = Kw ÷ [OH⁻], then pH = −log[H⁺].',
      'Show all working — a missing negative sign or wrong rounding loses marks.',
    ],
  },

  // ── Chemical Equilibrium ──────────────────
  {
    id: 'chem-2022-equil-07',
    subject: 'chemistry', topic: 'equilibrium', topicLabel: 'Chemical Equilibrium',
    year: 2022, level: 'HL', section: 'Q7', marks: 50,
    question: 'Methanol is manufactured: CO(g) + 2H₂(g) ⇌ CH₃OH(g), ΔH = −94.4 kJ/mol. 5.0 mol CO and 10.0 mol H₂ were placed in a 5.0 L container at 250°C; 25% of CO was converted at equilibrium. (a) Explain chemical equilibrium in terms of (i) rates and (ii) concentrations. (b) Write the expression for Kc and calculate its value. (c) State one advantage of using a catalyst. (d) State Le Chatelier\'s principle. Explain the effect of adding more CO on (i) methanol yield and (ii) Kc. (50 marks)',
    markingScheme: [
      'Equilibrium: rate of forward reaction equals rate of reverse reaction. (4M)',
      'Concentrations of reactants and products remain constant (not equal) over time. (4M)',
      'Kc = [CH₃OH] / ([CO][H₂]²). (8M)',
      'ICE: CO reacted = 1.25 mol, remaining CO = 3.75 mol, H₂ = 7.5 mol, CH₃OH = 1.25 mol. In 5 L: [CO]=0.75, [H₂]=1.5, [CH₃OH]=0.25 mol/L. Kc = 0.25 / (0.75 × 1.5²) = 0.148 L² mol⁻². (18M)',
      'Catalyst advantage: equilibrium reached faster (lowers activation energy for both reactions). (6M)',
      'Le Chatelier: when a system at equilibrium is disturbed, it responds to minimise the disturbance. (6M)',
      'Adding CO shifts equilibrium to the right → yield of methanol increases. (4M)',
      'Kc is unchanged — only temperature changes Kc, not concentration or catalysts. (4M)',
    ],
    fullMarksTips: [
      'Rates are EQUAL at equilibrium — not that concentrations are equal to each other.',
      'Write Kc as products over reactants; apply stoichiometric powers (H₂ is SQUARED here).',
      'Build a full ICE table to find equilibrium concentrations before calculating Kc.',
      'Kc ONLY changes with temperature — this is a classic exam trap for catalyst/concentration questions.',
      'Le Chatelier: always state the principle first, then apply it to the specific change.',
    ],
  },
  {
    id: 'chem-2023-equil-09',
    subject: 'chemistry', topic: 'equilibrium', topicLabel: 'Chemical Equilibrium',
    year: 2023, level: 'HL', section: 'Q9', marks: 50,
    question: 'PCl₃(g) + Cl₂(g) ⇌ PCl₅(g), ΔH = −88 kJ/mol. 2.0 mol PCl₃ and 2.0 mol Cl₂ are placed in a 1.0 L container; at equilibrium 1.5 mol PCl₅ is present. (a) Write the expression for Kc. (b) Calculate the value of Kc. (c) Predict and explain the effect on equilibrium position of (i) increasing pressure and (ii) increasing temperature. (d) What is the effect of a catalyst on Kc? (50 marks)',
    markingScheme: [
      'Kc = [PCl₅] / ([PCl₃][Cl₂]). (8M)',
      'At equilibrium: PCl₃ = 0.5 mol/L, Cl₂ = 0.5 mol/L, PCl₅ = 1.5 mol/L (1 L container). (8M)',
      'Kc = 1.5 / (0.5 × 0.5) = 6.0 mol⁻¹ L. (12M)',
      'Increasing pressure: 2 mol gas on left, 1 mol gas on right → equilibrium shifts RIGHT (to fewer moles of gas) → yield of PCl₅ increases. (8M)',
      'Increasing temperature: reaction is exothermic → equilibrium shifts LEFT to absorb heat → yield of PCl₅ decreases → Kc decreases. (8M)',
      'Catalyst has NO effect on Kc — speeds up both forward and reverse reactions equally; only temperature changes Kc. (6M)',
    ],
    fullMarksTips: [
      'Always include units for Kc — here mol⁻¹ L since the expression has more reactant moles.',
      'For pressure: count moles of GAS on each side — high pressure favours the side with fewer gas moles.',
      'For temperature: identify exo/endo first (ΔH sign), then apply Le Chatelier.',
      'Catalyst NEVER changes Kc or equilibrium position — only temperature does.',
      'ICE table: PCl₃ and Cl₂ each decrease by 1.5 mol (same as PCl₅ formed).',
    ],
  },

  // ── Rates of Reaction ─────────────────────
  {
    id: 'chem-2022-rates-03',
    subject: 'chemistry', topic: 'rates', topicLabel: 'Rates of Reaction',
    year: 2022, level: 'HL', section: 'Q3', marks: 50,
    question: 'The decomposition of H₂O₂ using MnO₂ as catalyst was investigated. 25 cm³ H₂O₂ decomposed in presence of 0.5 g MnO₂; O₂ volume was monitored over time. (a) Define catalyst. (b) Explain in terms of collision theory why increasing [H₂O₂] increases the rate. (c) From a graph calculate (i) average rate over the first 4 minutes and (ii) instantaneous rate at 4 minutes. (d) How would the rate change if MnO₂ was in larger pieces rather than powder? Explain. (50 marks)',
    markingScheme: [
      'Catalyst: a substance that increases the rate of a chemical reaction without itself being permanently changed; it provides an alternative reaction pathway with lower activation energy. (8M)',
      'Higher [H₂O₂] → more molecules per unit volume → more frequent collisions between H₂O₂ and MnO₂ → more collisions with energy ≥ Ea → higher rate. (12M)',
      'Average rate = volume O₂ at 4 min ÷ 4 minutes (read value from graph); units: cm³/min. (10M)',
      'Instantaneous rate = slope of tangent drawn to the curve at t = 4 min; calculate rise ÷ run from tangent. (10M)',
      'Larger pieces → smaller total surface area → fewer collisions per second between H₂O₂ and MnO₂ → lower rate. (10M)',
    ],
    fullMarksTips: [
      'Catalyst definition must include: increases rate, not permanently changed, lower activation energy.',
      'Collision theory: link concentration → more molecules → more collisions → more successful collisions.',
      'Instantaneous rate: draw a TANGENT at the point, then calculate its gradient.',
      'For solid catalysts: larger pieces = smaller surface area = slower rate (fewer collision sites).',
      'Always state units for rate calculations (cm³/min or mol/L/s).',
    ],
  },
  {
    id: 'chem-2023-rates-thio',
    subject: 'chemistry', topic: 'rates', topicLabel: 'Rates of Reaction',
    year: 2023, level: 'HL', section: 'Q3', marks: 50,
    question: 'Na₂S₂O₃ + 2HCl → 2NaCl + SO₂ + S + H₂O. The reaction was repeated at different [Na₂S₂O₃] and at different temperatures. (a) Describe the end-point detection method used. (b) Explain why increasing concentration increases the rate. (c) What does a straight-line graph of rate (1/t) vs concentration tell you about the order of reaction? (d) Describe how the effect of temperature was investigated and explain the results. (50 marks)',
    markingScheme: [
      'End point: a cross is drawn on paper under the flask; the stopwatch is stopped when the cross is no longer visible due to sulfur (S) precipitate forming. (8M)',
      'Higher [Na₂S₂O₃] → more particles per unit volume → more frequent collisions → more collisions with energy ≥ Ea → higher rate. (12M)',
      'Straight-line graph through origin: rate is directly proportional to concentration → first-order reaction with respect to Na₂S₂O₃. (12M)',
      'Temperature effect: same concentration; reactants heated to different temperatures in a water bath; temperature measured with thermometer; stopwatch started when mixed. (10M)',
      'Higher temperature → more particles with energy ≥ Ea AND more frequent collisions → more successful collisions → higher rate (shorter time). (8M)',
    ],
    fullMarksTips: [
      'The "cross" method is specific to this experiment — name it explicitly.',
      'For collision theory: always include "energy ≥ activation energy" for successful collisions.',
      'Straight line through origin = rate ∝ concentration = FIRST ORDER reaction.',
      'Water bath is essential for temperature control — state it clearly in the description.',
      'Temperature increases both collision FREQUENCY and the PROPORTION with energy ≥ Ea.',
    ],
  },

  // ── Organic Chemistry ─────────────────────
  {
    id: 'chem-2023-organic-02',
    subject: 'chemistry', topic: 'organic', topicLabel: 'Organic Chemistry',
    year: 2023, level: 'HL', section: 'Q2', marks: 50,
    question: 'A student prepared ethyne from CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂. (a) Draw and label the apparatus for preparation and collection of ethyne over water. Why is the first test-tube less pure? (b) Describe and explain observations when (i) dilute bromine water and (ii) acidified KMnO₄ are added to ethyne. (c) Write a balanced combustion equation for ethyne. (d) Calculate the maximum volume of ethyne at RTP from 2.0 g of 80% pure CaC₂ (Mr CaC₂ = 64; molar volume = 24 L). (50 marks)',
    markingScheme: [
      'Diagram: flat-bottomed flask with CaC₂ and water; delivery tube into water trough; inverted water-filled test-tubes for collection. All labelled. (14M)',
      'First test-tube less pure: initially contains air from the apparatus — the first tube collected is a mixture of air and ethyne. (6M)',
      'Bromine water: decolourised (orange/brown to colourless) — addition reaction across C≡C. (4M)',
      'KMnO₄: decolourised (purple to colourless) — oxidation of C≡C triple bond. (4M)',
      'Both tests show ethyne is unsaturated (contains C≡C triple bond) — undergoes addition/oxidation reactions. (6M)',
      'Balanced combustion: 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O. (8M)',
      'Pure CaC₂ = 2.0 × 0.80 = 1.6 g; mol CaC₂ = 1.6 ÷ 64 = 0.025 mol; mol C₂H₂ = 0.025 mol; V = 0.025 × 24 = 0.60 L. (8M)',
    ],
    fullMarksTips: [
      'Diagram MUST be labelled — water trough, delivery tube, upturned test-tubes all required.',
      'First test-tube: state explicitly it contains AIR that was already in the apparatus.',
      'State the EXACT colour change for each reagent (orange→colourless; purple→colourless).',
      'Combustion equation: check C, H, O balance in sequence — 4C, 4H → 4CO₂, 2H₂O, then 5O₂.',
      'Apply purity percentage FIRST to get mass of pure CaC₂ before using Mr.',
    ],
  },
  {
    id: 'chem-2024-organic-02',
    subject: 'chemistry', topic: 'organic', topicLabel: 'Organic Chemistry',
    year: 2024, level: 'HL', section: 'Q2', marks: 50,
    question: 'A student purified benzoic acid by recrystallisation using water as the solvent. (a) Why is water a suitable solvent? (b) Explain the purpose of the hot filtration. (c) Why is the second filtration only done after sufficient cooling? (d) What observation shows the product is pure? (e) A second student tested ethanal for easy oxidation: identify the reagent, state the colour change, identify the organic product, and write a half-equation for the reduction of the inorganic reagent. (50 marks)',
    markingScheme: [
      'Water suitable: benzoic acid is much more soluble in HOT water than cold → dissolves completely on heating, crystallises on cooling. (8M)',
      'Hot filtration: removes insoluble impurities (e.g. charcoal) while benzoic acid remains dissolved in the hot filtrate. (8M)',
      'Second filtration after cooling: allows recrystallisation to complete — benzoic acid becomes insoluble as it cools, forming crystals that are then filtered off. (8M)',
      'Product is pure when it has a sharp, single melting point (122°C); no depression or broadening of melting point range. (6M)',
      'Reagent: Tollens\' reagent (ammoniacal AgNO₃) or Fehling\'s solution. (5M)',
      'Colour change: Tollens\' → silver mirror on test tube wall; Fehling\'s → blue to brick-red precipitate (Cu₂O). (5M)',
      'Organic product: ethanoic acid (CH₃COOH). (5M)',
      'Half-equation: Ag⁺ + e⁻ → Ag (Tollens\') OR Cu²⁺ + 2e⁻ → Cu (Fehling\'s). (5M)',
    ],
    fullMarksTips: [
      'Recrystallisation: HOT = soluble (dissolves), COLD = insoluble (crystallises) — state both.',
      'Hot filtration removes INSOLUBLE impurities; the benzoic acid stays in solution at this stage.',
      'Purity shown by SHARP melting point — not a range, exactly at 122°C.',
      'Tollens\' gives silver mirror; Fehling\'s gives brick-red Cu₂O precipitate — know both.',
      'Ethanal → ethanoic acid; the −CHO group is oxidised to −COOH.',
    ],
  },

  // ── Atomic Structure ──────────────────────
  {
    id: 'chem-2022-atomic-05',
    subject: 'chemistry', topic: 'atomic', topicLabel: 'Atomic Structure',
    year: 2022, level: 'HL', section: 'Q5', marks: 50,
    question: '(a) Define atomic number and mass number. (b) Define isotopes and relative atomic mass. (c) Explain the aufbau principle, Hund\'s rule, and the Pauli exclusion principle. Write the electronic configuration of Fe (Z = 26). (d) Explain the trend in first ionisation energy across Period 3, including the exceptions between Mg→Al and P→S. (50 marks)',
    markingScheme: [
      'Atomic number: number of protons in the nucleus. Mass number: total protons + neutrons. (8M)',
      'Isotopes: atoms of the same element with the same atomic number but different mass numbers (different neutrons). (6M)',
      'Relative atomic mass: weighted average mass of all naturally occurring isotopes of an element relative to 1/12 the mass of ¹²C. (6M)',
      'Aufbau: electrons fill orbitals in order of increasing energy. Hund\'s: electrons singly occupy all orbitals in a subshell before pairing. Pauli: no two electrons can have the same four quantum numbers (max 2 electrons per orbital, opposite spins). (12M)',
      'Fe configuration: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² (or [Ar] 3d⁶ 4s²). (6M)',
      'Period 3 trend: first IE generally increases from Na to Ar due to increasing nuclear charge with same shielding → electrons held more tightly. (6M)',
      'Exception Mg→Al: Al removes a 3p¹ electron (higher energy, less tightly held than 3s²) → lower IE than Mg. (3M)',
      'Exception P→S: S has a paired 3p electron; electron-electron repulsion makes it easier to remove → lower IE than P. (3M)',
    ],
    fullMarksTips: [
      'Atomic number = protons only; mass number = protons + neutrons — be precise.',
      'Isotopes: SAME proton number, DIFFERENT neutron number (hence different mass number).',
      'Relative atomic mass must mention "weighted average" and "relative to ¹²C".',
      'For Fe configuration: 3d fills before 4s when writing the full configuration is [Ar] 3d⁶ 4s².',
      'Period 3 IE exceptions: Mg>Al (3s² easier than 3p¹ expected) and P>S (paired electrons repel).',
    ],
  },

  // ── Thermochemistry ───────────────────────
  {
    id: 'chem-2023-thermo-03b',
    subject: 'chemistry', topic: 'thermochemistry', topicLabel: 'Thermochemistry',
    year: 2023, level: 'HL', section: 'Q3', marks: 50,
    question: 'A student measured the enthalpy of neutralisation of HCl by NaOH. 25 cm³ of 1.0 M HCl was mixed with 25 cm³ of 1.0 M NaOH; the temperature rose from 20.0°C to 26.7°C. (SHC = 4.18 J g⁻¹ K⁻¹; density = 1 g/cm³) (a) Write the equation for the reaction. (b) Calculate the heat released. (c) Calculate the molar enthalpy of neutralisation. (d) Suggest two sources of error and how to minimise them. (50 marks)',
    markingScheme: [
      'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l), or ionic: H⁺(aq) + OH⁻(aq) → H₂O(l). (6M)',
      'Mass of solution = 50 g; ΔT = 26.7 − 20.0 = 6.7°C; Q = mcΔT = 50 × 4.18 × 6.7 = 1400.3 J = 1.40 kJ. (12M)',
      'Moles H₂O formed = moles HCl = 0.025 × 1.0 = 0.025 mol. (6M)',
      'Molar enthalpy ΔH = −1.40 ÷ 0.025 = −56.0 kJ mol⁻¹ (negative = exothermic). (12M)',
      'Error 1: heat loss to surroundings → minimise by using an insulated polystyrene cup with a lid. (7M)',
      'Error 2: inaccurate temperature measurement → use a calibrated digital thermometer. (7M)',
    ],
    fullMarksTips: [
      'Q = mcΔT: use the TOTAL mass of solution (25 cm³ + 25 cm³ = 50 g, since density = 1 g/cm³).',
      'ΔT = T_final − T_initial; double-check which is higher before subtracting.',
      'Moles = volume (L) × concentration; convert cm³ to L first.',
      'ΔH must be NEGATIVE for neutralisation (exothermic) — a missing minus sign loses marks.',
      'Two distinct errors: heat loss and temperature measurement are the standard correct answers.',
    ],
  },

  // ── Electrochemistry ──────────────────────
  {
    id: 'chem-2022-electro-06',
    subject: 'chemistry', topic: 'electrochemistry', topicLabel: 'Electrochemistry',
    year: 2022, level: 'HL', section: 'Q6', marks: 50,
    question: 'A hydrogen fuel-cell uses H₂ and O₂; overall reaction: H₂ + ½O₂ → H₂O. (a) Distinguish between electrolytic and galvanic cells. (b) Write half-equations at the anode and cathode of the fuel cell. (c) Describe electrolysis of aqueous CuSO₄ using copper electrodes and state observations at each electrode. (d) Calculate the mass of copper deposited when 0.5 A is passed for 10 minutes through CuSO₄. (Mr Cu = 64; F = 96,500 C mol⁻¹) (50 marks)',
    markingScheme: [
      'Electrolytic cell: electrical energy used to drive a non-spontaneous chemical reaction. Galvanic cell: a spontaneous chemical reaction produces electrical energy. (8M)',
      'Anode (oxidation): H₂ → 2H⁺ + 2e⁻. (6M)',
      'Cathode (reduction): ½O₂ + 2H⁺ + 2e⁻ → H₂O. (6M)',
      'Cu electrodes in CuSO₄: at cathode Cu²⁺ + 2e⁻ → Cu (copper deposits, cathode gains mass); at anode Cu → Cu²⁺ + 2e⁻ (anode dissolves, anode loses mass). (12M)',
      'Charge = I × t = 0.5 × (10 × 60) = 300 C. (6M)',
      'Moles electrons = 300 ÷ 96,500 = 3.11 × 10⁻³ mol. (6M)',
      'Moles Cu = 3.11 × 10⁻³ ÷ 2 = 1.555 × 10⁻³ mol (2 electrons per Cu²⁺). (3M)',
      'Mass Cu = 1.555 × 10⁻³ × 64 = 0.10 g. (3M)',
    ],
    fullMarksTips: [
      'Galvanic = spontaneous (produces electricity); electrolytic = non-spontaneous (uses electricity).',
      'Fuel cell: H₂ oxidised at ANODE (loses e⁻); O₂ reduced at CATHODE (gains e⁻).',
      'Cu electrodes in CuSO₄: CATHODE gains mass (Cu deposits), ANODE loses mass (Cu dissolves).',
      'Charge = I × t: convert minutes to SECONDS (×60) before calculating.',
      'Cu²⁺ requires 2 electrons — divide moles of electrons by 2 to get moles of Cu.',
    ],
  },
];
