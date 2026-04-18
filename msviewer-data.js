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
  { id: 'pe',        label: 'Physical Education', emoji: '🏃' },
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

  /* ══════════════════════════════════════════
     PHYSICAL EDUCATION
  ══════════════════════════════════════════ */

  // ── Anatomy & Movement ────────────────────
  {
    id: 'pe-2022-anatomy-01',
    subject: 'pe', topic: 'anatomy', topicLabel: 'Anatomy & Movement',
    year: 2022, level: 'HL', section: 'Q14d', marks: 12,
    question: 'Examine how each of Newton\'s three laws of motion apply to performance in a physical activity of your choice. (12 marks)',
    markingScheme: [
      'Law 1 — Law of Inertia: an object at rest remains at rest and a body in motion remains in motion unless acted upon by an external force. Application: e.g. a sprinter in the blocks remains still until the starting force is applied; the ball continues moving until friction or air resistance acts on it. (4M)',
      'Law 2 — Law of Acceleration: Force = Mass × Acceleration (F = ma). Application: e.g. a heavier shot-put requires more force to accelerate to the same speed; a footballer kicking with greater force produces more acceleration on the ball. (4M)',
      'Law 3 — Law of Reaction: every action has an equal and opposite reaction. Application: e.g. a swimmer pushes water backwards (action) and is propelled forward (reaction); a runner pushes down on the ground and the ground pushes back, propelling them forward. (4M)',
    ],
    fullMarksTips: [
      'Name and define each of the three laws — the definition alone earns the base mark.',
      'Apply EACH law to a specific physical activity with a clear sporting example.',
      'Law 2: always write the formula F = ma, not just the name.',
      'Law 3: state both the action AND the equal/opposite reaction in your example.',
      'Use the same physical activity for all three laws for a more coherent answer.',
    ],
  },
  {
    id: 'pe-2023-anatomy-01',
    subject: 'pe', topic: 'anatomy', topicLabel: 'Anatomy & Movement',
    year: 2023, level: 'HL', section: 'Q1', marks: 8,
    question: '(a) Name any two planes of human movement. (b) Describe each plane and give a sporting example of movement in each plane. (8 marks)',
    markingScheme: [
      'Sagittal plane: divides the body into left and right halves; movement occurs in a forward/backward direction. Example: running, jumping, squatting. (3M)',
      'Frontal plane: divides the body into front and back halves; movement occurs side to side. Example: side shuffle, star jump (abduction/adduction). (3M)',
      'Transverse plane: divides the body into upper and lower halves; rotational movement. Example: golf swing, discus throw, turning in gymnastics. (3M — any two planes for full marks)',
      'Award 1 mark for correctly naming each plane, plus 2 marks for a clear description + sporting example. (2M)',
    ],
    fullMarksTips: [
      'Name the plane clearly — "sagittal", "frontal", or "transverse" (not just "horizontal/vertical").',
      'Description must link the plane to a direction of movement (forward/back, side/side, rotational).',
      'Give a SPECIFIC sporting example — not just "sport" but the actual movement (e.g. "a squat in weightlifting").',
      'Any two of the three planes are accepted — pick the two you know best.',
    ],
  },

  // ── Physical Fitness & Training ───────────
  {
    id: 'pe-2022-fitness-14b',
    subject: 'pe', topic: 'fitness', topicLabel: 'Physical Fitness & Training',
    year: 2022, level: 'HL', section: 'Q14b', marks: 8,
    question: '(i) Describe a warm-up structure (e.g. RAMP) that athletes can use to ensure appropriate preparation for performance. (ii) Outline two reasons why a coach includes a cool-down at the end of a training session. (8 marks)',
    markingScheme: [
      'RAMP warm-up: Raise (increase heart rate, body temperature, blood flow — e.g. light jog); Activate (activate key muscle groups — e.g. glute bridges); Mobilise (move joints through full range of motion — e.g. hip circles); Potentiate (sport-specific, high-intensity prep — e.g. sprints, plyometrics). (4M)',
      'Reason 1: Gradually reduces heart rate and blood pressure back to resting levels, preventing blood pooling in the muscles. (2M)',
      'Reason 2: Reduces muscle soreness and stiffness (DOMS) by flushing out lactic acid and metabolic waste. (2M)',
    ],
    fullMarksTips: [
      'RAMP is the ideal framework — state what each letter stands for and give an example for each stage.',
      'Warm-up purpose: raise core temperature, increase blood flow to muscles, reduce injury risk.',
      'Cool-down reasons: gradual heart rate reduction AND DOMS/lactic acid removal are the two key answers.',
      'Be specific — "it\'s good for you" is not enough; explain the physiological benefit.',
    ],
  },
  {
    id: 'pe-2024-fitness-07',
    subject: 'pe', topic: 'fitness', topicLabel: 'Physical Fitness & Training',
    year: 2024, level: 'HL', section: 'Q7', marks: 8,
    question: 'Explain two methods of physical fitness training used to develop performance for a named physical activity of your choice. (8 marks)',
    markingScheme: [
      'Method 1 example — Interval Training: alternating periods of high-intensity exercise with rest/low-intensity periods. Develops anaerobic capacity and speed. E.g. 10 × 100 m sprints with 60-second recovery for a GAA player. (4M)',
      'Method 2 example — Resistance/Strength Training: using weights or body weight against resistance to develop muscular strength. E.g. squats and deadlifts to improve power and tackling strength in rugby. (4M)',
      'Other valid methods: Continuous training (aerobic base), Fartlek (varied pace), Plyometrics (explosive power), Circuit training. All accepted with clear explanation and sporting application. (4M per method)',
    ],
    fullMarksTips: [
      'Always name the physical activity first — the marker needs this context.',
      'Each method needs: (1) a clear description of WHAT it involves and (2) how it develops performance in your sport.',
      'Two DIFFERENT methods required — do not describe the same type of training twice.',
      'Link the training method to a specific fitness component (e.g. interval → speed/anaerobic capacity).',
    ],
  },
  {
    id: 'pe-2023-fitness-14d',
    subject: 'pe', topic: 'fitness', topicLabel: 'Physical Fitness & Training',
    year: 2023, level: 'HL', section: 'Q14d', marks: 12,
    question: 'The principles of training are used by coaches in the design of training programmes. Examine the impact that any two principles of training can have on the performance of an athlete. (12 marks)',
    markingScheme: [
      'Overload: the body must be stressed beyond its normal level to cause adaptation. Impact: progressive increases in intensity/volume force the body to adapt — building fitness over time. Without overload, performance plateaus. (6M)',
      'Specificity: training must be specific to the demands of the sport and the athlete\'s needs. Impact: a 100 m sprinter trains with short explosive work not long slow runs — specific training produces specific improvements in the required energy systems and muscle groups. (6M)',
      'Other valid principles: Reversibility (fitness is lost if training stops), Progression (gradual increase in training load), Rest and Recovery (adaptation occurs during rest), Variation (prevents boredom and overuse injuries). (6M per principle)',
    ],
    fullMarksTips: [
      'Name the principle, define it clearly, then explain its impact on athletic PERFORMANCE.',
      'Use a specific sport/athlete example to support each principle.',
      'Overload and Specificity are the two safest choices — most candidates know these well.',
      '"Examine" requires more than defining — you must discuss the impact and consequences.',
    ],
  },

  // ── Psychology of Sport ───────────────────
  {
    id: 'pe-2023-psych-14b',
    subject: 'pe', topic: 'psychology', topicLabel: 'Psychology of Sport',
    year: 2023, level: 'HL', section: 'Q14b', marks: 10,
    question: '(i) Define confidence related to sports performance. (ii) Discuss how confidence can impact performance in a physical activity of your choice. (10 marks)',
    markingScheme: [
      'Confidence: the belief in one\'s own ability to successfully execute a skill or perform in a given situation. Self-efficacy is the sport-specific term for confidence in performing a specific task. (2M)',
      'Positive impact: high confidence allows the athlete to focus on performance rather than fear of failure; enables risk-taking and trying difficult skills; increases persistence after mistakes. (4M)',
      'Negative impact (low confidence): leads to anxiety, hesitation, avoidance of difficult situations, reduced performance under pressure. (4M)',
      'Must name a specific physical activity and apply the discussion to it. (0M — implicit requirement)',
    ],
    fullMarksTips: [
      'Define confidence first — self-efficacy is the exact psychological term for sports contexts.',
      'Discuss BOTH positive effects of high confidence AND negative effects of low confidence.',
      'Name a specific physical activity and keep your examples relevant to it.',
      '"Discuss" requires more than listing — explain the mechanism behind each impact.',
    ],
  },
  {
    id: 'pe-2024-psych-03',
    subject: 'pe', topic: 'psychology', topicLabel: 'Psychology of Sport',
    year: 2024, level: 'HL', section: 'Q3', marks: 8,
    question: '(a) Discuss how motivation can impact an athlete\'s practice. (b) Name a strategy athletes use to enhance motivation and explain how it works. (8 marks)',
    markingScheme: [
      'High motivation: athlete trains harder, more consistently, with greater effort and focus; more likely to persist through difficult sessions; sets challenging goals. (4M)',
      'Low motivation: athlete may skip training, put in minimal effort, lack focus, give up easily when challenged. (2M)',
      'Strategy example — Goal Setting: setting SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) gives the athlete clear targets and a sense of progress which maintains motivation. (4M)',
      'Other valid strategies: mental imagery/visualisation, positive self-talk, performance profiling, reward systems. (4M if well explained)',
    ],
    fullMarksTips: [
      'Contrast HIGH and LOW motivation — both are needed for a full discussion.',
      'For the strategy: name it clearly (e.g. "Goal Setting") then explain the mechanism.',
      'SMART goals is the safest answer — examiners expect it and it\'s easy to explain fully.',
      'Link motivation back to specific aspects of practice (effort, consistency, persistence).',
    ],
  },

  // ── Sport & Society ───────────────────────
  {
    id: 'pe-2022-society-15b',
    subject: 'pe', topic: 'society', topicLabel: 'Sport & Society',
    year: 2022, level: 'HL', section: 'Q15b', marks: 8,
    question: 'Examine how women (or another named group) might tackle the barriers that exist for them in relation to participation in physical activity. (8 marks)',
    markingScheme: [
      'Barrier 1 — Time constraints: women often balance work and childcare responsibilities. Solution: flexible scheduling, online classes, workplace exercise initiatives. (4M)',
      'Barrier 2 — Cost: gym memberships and sports equipment can be expensive. Solution: community sport schemes, free public parks/facilities, Sport Ireland funding initiatives. (4M)',
      'Barrier 3 — Social/cultural: stereotypes about women in sport or lack of female role models. Solution: media representation of female athletes, school-based promotion, women-only classes to build confidence. (4M — any two barriers + solutions for full marks)',
    ],
    fullMarksTips: [
      'Name the group first (e.g. "women") and keep your answer focused on that group.',
      '"Examine" means: identify the barrier AND propose how they would TACKLE/overcome it.',
      'Two well-developed barrier + solution pairs will score better than four shallow ones.',
      'Reference real initiatives (e.g. Sport Ireland\'s Women in Sport policy) for extra quality.',
    ],
  },
  {
    id: 'pe-2023-society-14c',
    subject: 'pe', topic: 'society', topicLabel: 'Sport & Society',
    year: 2023, level: 'HL', section: 'Q14c', marks: 12,
    question: 'Being involved with a sports team can provide a valuable social outlet for a person while also helping them to be physically active. Discuss three social benefits of physical activity for teenagers. (12 marks)',
    markingScheme: [
      'Benefit 1 — Social connections and friendships: team sport provides a shared goal and regular social interaction, helping teenagers form lasting friendships and develop communication skills. (4M)',
      'Benefit 2 — Sense of belonging and identity: being part of a team gives teenagers a sense of community and purpose, particularly important during the social development stage of adolescence. (4M)',
      'Benefit 3 — Reduced antisocial behaviour: organised sport provides structured activity and positive peer influence, reducing the likelihood of engaging in antisocial or risky behaviours. (4M)',
      'Other valid benefits: improved mental health / reduced isolation, development of teamwork and leadership skills, cross-cultural interaction. (4M per benefit)',
    ],
    fullMarksTips: [
      'Three distinct benefits required — do not repeat the same idea in different words.',
      '"Discuss" means more than listing — explain WHY each benefit matters for teenagers specifically.',
      'Link each benefit to social development, not just physical health.',
      'Include a brief example for each benefit to demonstrate understanding.',
    ],
  },

  // ── Physical Activity & Health ────────────
  {
    id: 'pe-2024-health-18',
    subject: 'pe', topic: 'health', topicLabel: 'Physical Activity & Health',
    year: 2024, level: 'HL', section: 'Q18a', marks: 20,
    question: 'Define five components of health-related fitness. For each component, describe an activity that would develop it and explain the health benefit of developing that component. (20 marks)',
    markingScheme: [
      'Cardiovascular endurance: the ability of the heart and lungs to supply oxygen to working muscles over prolonged exercise. Activity: 30-minute jog. Benefit: reduces risk of heart disease, lowers blood pressure. (4M)',
      'Muscular strength: the maximum force a muscle or muscle group can exert in a single effort. Activity: weight training (bench press). Benefit: improves posture, reduces injury risk, maintains bone density. (4M)',
      'Muscular endurance: the ability of muscles to sustain repeated contractions over time. Activity: circuit training, press-ups. Benefit: reduces fatigue in daily activities, supports metabolic health. (4M)',
      'Flexibility: the range of motion available at a joint. Activity: yoga, static stretching. Benefit: reduces muscle soreness and injury risk, improves posture. (4M)',
      'Body composition: the ratio of lean body mass (muscle, bone) to body fat. Activity: combination of cardio and resistance training. Benefit: healthy body composition reduces risk of obesity-related diseases (Type 2 diabetes, heart disease). (4M)',
    ],
    fullMarksTips: [
      'Five distinct components required — do not repeat similar ones (e.g. strength and endurance are different).',
      'Each component needs: definition + activity example + specific health benefit.',
      'Name the activity specifically (not just "exercise") and link it to the component.',
      'Health benefits should mention specific diseases or conditions where possible.',
      'Body composition is often forgotten — remember it as the fifth component.',
    ],
  },
  {
    id: 'pe-2022-health-14a',
    subject: 'pe', topic: 'health', topicLabel: 'Physical Activity & Health',
    year: 2022, level: 'HL', section: 'Q14a', marks: 6,
    question: 'Describe appropriate first aid treatment for two different injuries commonly sustained by participants in a physical activity of your choice. (6 marks)',
    markingScheme: [
      'Injury 1 example — Sprained ankle: RICE protocol: Rest (stop activity immediately, avoid weight-bearing); Ice (apply ice pack wrapped in cloth for 15–20 min); Compression (apply bandage to reduce swelling); Elevation (raise the ankle above heart level). Seek medical attention if severe. (3M)',
      'Injury 2 example — Muscle strain/tear: RICE protocol; gentle movement to avoid stiffness after 24–48 hours; avoid heat or massage in first 48 hours (increases inflammation). (3M)',
      'Other valid injuries: concussion (remove from play, rest, no return to sport without medical clearance), fracture (immobilise, call emergency services), heat exhaustion (cool down, hydrate, move to shade). (3M per injury)',
    ],
    fullMarksTips: [
      'Name the physical activity and both injuries specifically.',
      'RICE (Rest, Ice, Compression, Elevation) is the core first aid for soft tissue injuries — know it in full.',
      'For concussion: the key answer is removal from play and NO return without medical clearance.',
      'State the steps in order — examiners want a clear procedure, not a list of random points.',
    ],
  },

  // ── Exercise Physiology ───────────────────
  {
    id: 'pe-2023-physio-q5',
    subject: 'pe', topic: 'physiology', topicLabel: 'Exercise Physiology',
    year: 2023, level: 'HL', section: 'Q5', marks: 8,
    question: '(a) Define skill. (b) Identify two characteristics of skilled performance. (c) Explain the term "creative application of skill". (8 marks)',
    markingScheme: [
      'Skill: the learned ability to bring about predetermined results with maximum certainty, minimum energy and minimum time. (2M)',
      'Characteristic 1: consistency — the skilled performer can reproduce the movement accurately and reliably. (2M)',
      'Characteristic 2: efficiency — uses minimal energy and effort to produce the desired outcome. Other valid characteristics: accuracy, fluency, adaptability, automaticity. (2M)',
      'Creative application of skill: using a fundamental skill in an innovative or novel way to solve a performance problem or gain an advantage; adapting skills to the demands of the situation. E.g. a footballer using a dummy or backheel pass in an unexpected way. (2M)',
    ],
    fullMarksTips: [
      'Definition of skill: use the key words "learned", "predetermined results", "maximum certainty", "minimum energy".',
      'Two characteristics: consistency and efficiency are the safest choices.',
      'Creative application: stress the ADAPTATION and NOVELTY of the skill — it\'s not just using a skill, it\'s adapting it innovatively.',
      'Always give a sporting example to clarify your answer.',
    ],
  },
  {
    id: 'pe-2024-physio-recovery',
    subject: 'pe', topic: 'physiology', topicLabel: 'Exercise Physiology',
    year: 2024, level: 'HL', section: 'Q15b', marks: 8,
    question: 'Explain two recovery strategies that athletes use after exercise to support adaptations of the body. (8 marks)',
    markingScheme: [
      'Strategy 1 — Sleep/Rest: during sleep, growth hormone is released which stimulates muscle repair and protein synthesis; sleep deprivation impairs recovery and adaptation. Athletes should aim for 8–10 hours. (4M)',
      'Strategy 2 — Ice Bath/Cold Water Immersion: cold water constricts blood vessels, reducing inflammation and muscle swelling; on exiting the cold, blood rushes back bringing nutrients for repair. Reduces DOMS. (4M)',
      'Strategy 3 — Active Recovery: low-intensity exercise (e.g. light jog or swim) after training promotes blood circulation, helping flush out metabolic waste (lactic acid) without adding muscle stress. (4M — any two strategies accepted)',
      'Strategy 4 — Nutrition: consuming protein within 30–60 min post-exercise provides amino acids for muscle protein synthesis; carbohydrates replenish glycogen stores. (4M)',
    ],
    fullMarksTips: [
      'Each strategy needs: what it involves AND the physiological mechanism behind recovery.',
      'Sleep is the most overlooked strategy — the growth hormone release angle scores well.',
      'Ice bath: state the mechanism (vasoconstriction → reduced inflammation, then vasodilation → nutrient delivery).',
      'Nutrition: be specific — protein for muscle repair AND carbs for glycogen replenishment.',
    ],
  },

  // ── PE 2020 ───────────────────────────────
  {
    id: 'pe-2020-health-q6',
    subject: 'pe', topic: 'health', topicLabel: 'Physical Activity & Health',
    year: 2020, level: 'HL', section: 'Section A — Q6', marks: 8,
    question: 'Regular participation in physical activity can improve mental health. Outline two reasons to support this statement. (8 marks)',
    markingScheme: [
      'Reason 1 — Endorphin release: physical activity triggers the release of endorphins (\'feel-good\' hormones) in the brain, which reduce feelings of stress, anxiety and depression and elevate mood. (4M)',
      'Reason 2 — Reduced stress hormones: exercise reduces levels of cortisol (the body\'s primary stress hormone), lowering anxiety and promoting relaxation. (4M)',
      'Reason 3 — Improved sleep: physical activity promotes better quality sleep, which is directly linked to improved mood, cognitive function, and emotional regulation. (4M — any two accepted)',
      'Reason 4 — Social connection: group or team activities reduce isolation and loneliness, providing social support which is protective against depression. (4M)',
    ],
    fullMarksTips: [
      'Each reason needs: the specific mechanism AND its effect on mental health.',
      'Endorphin release is the most commonly awarded answer — name the hormone and state it improves mood.',
      'Stress/cortisol angle: name cortisol and state that exercise reduces it.',
      'Avoid vague answers like "it makes you feel better" — name the physiological or psychological process.',
    ],
  },
  {
    id: 'pe-2020-psych-q7',
    subject: 'pe', topic: 'psychology', topicLabel: 'Psychology of Sport',
    year: 2020, level: 'HL', section: 'Section A — Q7', marks: 8,
    question: 'With reference to a named physical activity, discuss two ways mental preparation can help improve performance. (8 marks)',
    markingScheme: [
      'Way 1 — Mental imagery/visualisation: the athlete creates a detailed mental picture of successfully executing skills or winning a competition; this activates the same neural pathways as physical practice, builds confidence and prepares the mind for performance. E.g. a GAA player mentally rehearses free-taking routine before a match. (4M)',
      'Way 2 — Self-talk: using positive internal dialogue (e.g. "I can do this") to maintain focus, boost confidence, manage anxiety and reinforce technique cues. E.g. a swimmer repeating a focus word at the start of a race. (4M)',
      'Way 3 — Relaxation techniques (e.g. deep breathing, progressive muscle relaxation): reduce somatic and cognitive anxiety, lower heart rate, and help the athlete reach optimal arousal for performance. (4M — any two accepted)',
      'Way 4 — Goal setting (pre-performance routines): creating a consistent routine before competition reduces anxiety and promotes focus. (4M)',
    ],
    fullMarksTips: [
      'Name a specific physical activity and keep your examples relevant to it throughout.',
      'Each way needs: what it involves + how it specifically improves performance (mechanism).',
      'Visualisation: state that it activates neural pathways similar to physical practice.',
      'Self-talk: distinguish between instructional ("arm high") and motivational ("I\'m ready") self-talk.',
    ],
  },
  {
    id: 'pe-2020-society-q8b',
    subject: 'pe', topic: 'society', topicLabel: 'Sport & Society',
    year: 2020, level: 'HL', section: 'Section A — Q8b', marks: 6,
    question: 'Anabolic steroids are a type of performance-enhancing drug. Discuss how anabolic steroids affect performance. (6 marks)',
    markingScheme: [
      'Anabolic steroids are synthetic versions of the male hormone testosterone. They promote protein synthesis, leading to increased muscle mass and strength. (2M)',
      'Effect on performance: increased muscle bulk improves power output; athletes can train harder and recover faster; increased red blood cell production (in some cases) improves aerobic capacity. (2M)',
      'Side effects (relevant to sport): aggression ("roid rage") may be beneficial in power sports but counterproductive; liver damage; hormonal imbalances; cardiovascular disease risk; banned by WADA and subject to 4-year ban. (2M)',
    ],
    fullMarksTips: [
      'Specifically state: testosterone → protein synthesis → increased muscle mass and strength.',
      'Link the effect to performance: more muscle = more power, faster recovery.',
      'Mention the ban: WADA prohibited list, 4-year ban for violation — this scores marks in "discuss" questions.',
    ],
  },

  // ── PE 2021 ───────────────────────────────
  {
    id: 'pe-2021-health-q1',
    subject: 'pe', topic: 'health', topicLabel: 'Physical Activity & Health',
    year: 2021, level: 'HL', section: 'Section A — Q1', marks: 8,
    question: 'Describe two personal health and wellbeing benefits for teenagers who participate in physical activity. (8 marks)',
    markingScheme: [
      'Benefit 1 — Physical health: regular physical activity strengthens the cardiovascular system, reduces body fat, builds bone density (reducing future osteoporosis risk), and improves muscular strength and endurance. (4M)',
      'Benefit 2 — Mental health: participation reduces anxiety and depression, releases endorphins that elevate mood, improves sleep quality, and builds self-esteem and body image. (4M)',
      'Note: economic benefits are NOT accepted. Benefits must relate to personal health and wellbeing only.',
    ],
    fullMarksTips: [
      'Both benefits must be from the personal health and wellbeing domain — not social or economic benefits.',
      'Mental health benefit: name the psychological mechanism (endorphins, reduced cortisol, improved self-esteem).',
      'Physical health benefit: be specific — cardiovascular, bone density, body composition, etc.',
      'A \'good description\' earns 4M; a \'fair description\' earns 2M — add specific physiological detail to reach full marks.',
    ],
  },
  {
    id: 'pe-2021-anatomy-q7',
    subject: 'pe', topic: 'anatomy', topicLabel: 'Anatomy & Movement',
    year: 2021, level: 'HL', section: 'Section A — Q7', marks: 8,
    question: '(a) Explain the frontal plane of movement from a biomechanical perspective. (4 marks)\n(b) Give two different examples of movement in the frontal plane in physical activity. (4 marks)',
    markingScheme: [
      '(a) A plane is an imaginary surface running through the body. The frontal plane (also called the coronal plane) splits the body vertically into equal front and back halves. Movements in the frontal plane are lateral (side-to-side) movements — specifically abduction (moving a limb away from the midline) and adduction (moving a limb towards the midline). (4M)',
      '(b) Example 1: Performing a cartwheel (the gymnast moves laterally in the frontal plane). (2M)',
      '(b) Example 2: A star jump / jumping jacks — the arms and legs abduct and adduct in the frontal plane. (2M)',
      'Other accepted examples: side shuffle, lateral raise exercise, hip abduction in swimming, sidestep in soccer.',
    ],
    fullMarksTips: [
      'Define the frontal plane clearly: splits body into FRONT and BACK halves (not left/right — that\'s sagittal).',
      'Key movements: ABDUCTION and ADDUCTION occur in the frontal plane.',
      'Examples must be clearly lateral movements — running and jumping are sagittal, not frontal.',
      'Naming the axis (sagittal/anteroposterior axis) around which frontal plane movements occur earns extra marks.',
    ],
  },
  {
    id: 'pe-2021-psych-q9',
    subject: 'pe', topic: 'psychology', topicLabel: 'Psychology of Sport',
    year: 2021, level: 'HL', section: 'Section A — Q9', marks: 8,
    question: '(a) What is the difference between state anxiety and trait anxiety? (4 marks)\n(b) Describe how state anxiety can have an impact on performance in sport. (4 marks)',
    markingScheme: [
      '(a) State anxiety: an immediate, temporary emotional state characterised by apprehension, fear, tension and increased physiological arousal in response to a specific situation (e.g. before a penalty shoot-out). It is situation-specific and transient. (2M)',
      '(a) Trait anxiety: a stable personality characteristic — a general tendency to perceive many situations as threatening, regardless of actual danger. Athletes with high trait anxiety experience more state anxiety in competition. (2M)',
      '(b) State anxiety can impair performance through: muscle tension leading to poor coordination and movement efficiency; narrowed attention and poor decision-making; negative self-talk and loss of confidence; increased heart rate and sweating that disrupts rhythm. In extreme cases (choking), performance collapses under pressure. (4M)',
    ],
    fullMarksTips: [
      'State anxiety = temporary, situation-specific. Trait anxiety = stable personality predisposition.',
      'Link the two: athletes high in trait anxiety are more likely to experience high state anxiety before competition.',
      'Part (b): give specific performance impacts — muscle tension, poor coordination, narrowed attention — not just "it makes you nervous".',
      'Inverted-U theory is relevant: too much state anxiety takes arousal beyond optimal and performance declines.',
    ],
  },
  {
    id: 'pe-2021-society-q11',
    subject: 'pe', topic: 'society', topicLabel: 'Sport & Society',
    year: 2021, level: 'HL', section: 'Section A — Q11', marks: 8,
    question: 'Explain why a lack of media coverage of women\'s sports might maintain gender stereotyping of women in sport. (8 marks)',
    markingScheme: [
      'When women\'s sport receives little or no media coverage, it reinforces the idea that women\'s sport is less important, less exciting or less skilled than men\'s sport — perpetuating the stereotype that sport is a male domain. (3M)',
      'Lack of female sporting role models in mainstream media reduces girls\' aspirations to participate, as they have fewer inspiring figures to look up to — maintaining the stereotype that sport is "not for women". (3M)',
      'Media framing: when women\'s sport is covered, it is often trivialised (focusing on appearance rather than athletic performance) or treated as secondary news — reinforcing gender stereotypes rather than challenging them. (2M)',
    ],
    fullMarksTips: [
      'Explain the mechanism: low coverage → reinforces the idea sport is a male domain → stereotype maintained.',
      'Role models: lack of visible female athletes means girls don\'t see sport as an option for them.',
      'If you discuss media framing, focus on trivialisation — the way coverage demeans rather than celebrates women\'s athletic achievement.',
      'A good well-developed explanation earns 8M; a fair explanation 6M; poor 4M; very poor 2M.',
    ],
  },

  // ── PE 2025 ───────────────────────────────
  {
    id: 'pe-2025-society-q3',
    subject: 'pe', topic: 'society', topicLabel: 'Sport & Society',
    year: 2025, level: 'HL', section: 'Section A — Q3', marks: 8,
    question: '(a) Explain gender stereotyping in sport. (4 marks)\n(b) What role can the media play in relation to gender stereotyping in sport? (4 marks)',
    markingScheme: [
      '(a) Gender stereotyping in sport: the holding of generalised beliefs about the roles and capabilities of males and females in sport. For example, the belief that certain sports are "for men" (e.g. rugby, weightlifting) or "for women" (e.g. gymnastics, netball), and that women are less athletic, weaker or less competitive than men. These stereotypes can discourage participation and limit opportunities. (4M)',
      '(b) The media can reinforce gender stereotypes by giving significantly less airtime, coverage and prominence to women\'s sport, making it appear less important or entertaining than men\'s. Coverage that focuses on female athletes\' appearance rather than performance also trivialises women\'s sport. (2M)',
      '(b) Alternatively, media can challenge stereotypes by increasing coverage of women\'s sport, presenting female athletes as strong, skilled role models, and using positive language and framing that emphasises athletic achievement. (2M)',
    ],
    fullMarksTips: [
      'Part (a): define gender stereotyping — generalised assumptions about sport based on gender — and give a concrete example.',
      'Part (b): cover BOTH sides — media can REINFORCE stereotypes (less coverage, trivialisation) AND CHALLENGE them (more coverage, positive role models).',
      'Key point: quantity AND quality of coverage matter — not just how much but how women are portrayed.',
    ],
  },
  {
    id: 'pe-2025-fitness-q5',
    subject: 'pe', topic: 'fitness', topicLabel: 'Physical Fitness & Training',
    year: 2025, level: 'HL', section: 'Section A — Q5', marks: 8,
    question: 'Describe two categories of performance-enhancing drugs. You are not permitted to use anabolic steroids as one of your answers. (8 marks)',
    markingScheme: [
      'Category 1 — EPO (Erythropoietin): a hormone that stimulates the production of red blood cells, increasing oxygen delivery to muscles. This improves aerobic endurance significantly. Used (illegally) in endurance sports such as cycling and distance running. Side effects include increased blood viscosity, clotting, and risk of stroke. (4M)',
      'Category 2 — Stimulants (e.g. amphetamines, caffeine at high doses): increase heart rate, alertness, aggression and reduce perception of fatigue. Can enhance speed and power in short-duration events. Risks include cardiac arrhythmia, anxiety, addiction. Many are on the WADA prohibited list. (4M)',
      'Category 3 — Beta-blockers: reduce heart rate and tremors — used in precision sports (archery, shooting) to achieve steadiness. Banned in these sports by WADA. (4M — any two categories accepted)',
      'Category 4 — Peptide hormones (e.g. HGH — Human Growth Hormone): promotes muscle growth, fat loss and recovery. Harder to detect than steroids. Risks: acromegaly, diabetes, organ enlargement.',
    ],
    fullMarksTips: [
      'Do NOT use anabolic steroids — the question explicitly prohibits it.',
      'Each category needs: name of drug/category + how it works + performance benefit + at least one risk or ban status.',
      'EPO is the strongest answer for an endurance-focused example; stimulants or beta-blockers work for other sports.',
      'Mention WADA for extra marks on the ethics/regulatory angle.',
    ],
  },
  {
    id: 'pe-2025-health-q14a',
    subject: 'pe', topic: 'health', topicLabel: 'Physical Activity & Health',
    year: 2025, level: 'HL', section: 'Section C — Q14a', marks: 20,
    question: '(i) Define the following components of health-related fitness: Cardiorespiratory endurance; Body composition; Flexibility. (6 marks)\n\n(ii) Apply the FITT formula to ONE of the following components: Cardiorespiratory endurance, Body composition, or Flexibility. (14 marks)',
    markingScheme: [
      'Cardiorespiratory endurance: the ability of the heart, lungs, and circulatory system to supply oxygen and nutrients to working muscles during sustained physical activity. (2M)',
      'Body composition: the proportion of lean body mass (muscle, bone, organs) to fat mass in the body, usually expressed as percentage body fat. (2M)',
      'Flexibility: the range of motion available at a joint, influenced by muscle length, joint structure, and connective tissue elasticity. (2M)',
      'FITT for Cardiorespiratory Endurance — Frequency: 3–5 times per week (2M); Intensity: 60–80% maximum heart rate / moderate to vigorous (2M); Time: 20–60 minutes per session (2M); Type: aerobic activities — running, cycling, swimming, rowing (2M). Plus justification of each element. (up to 14M total)',
    ],
    fullMarksTips: [
      'Definitions: use key physiological terms — "cardiovascular system", "range of motion", "lean body mass vs fat mass".',
      'FITT formula: cover all four elements — Frequency (how often), Intensity (how hard), Time (how long), Type (what exercise).',
      'For cardiorespiratory endurance: intensity should be expressed as % max heart rate or RPE scale — not just "hard".',
      'Justify each FITT component: e.g. 60–80% MHR is the aerobic training zone where cardiorespiratory adaptations occur.',
    ],
  },

  /* ══════════════════════════════════════════
     CHEMISTRY — Additional Years
  ══════════════════════════════════════════ */

  // ── Equilibrium (additional years) ───────
  {
    id: 'chem-2016-equil-q7',
    subject: 'chemistry', topic: 'equilibrium', topicLabel: 'Chemical Equilibrium',
    year: 2016, level: 'Higher Level', section: 'Q7', marks: 50,
    question: 'In the Contact process for the manufacture of sulfuric acid, the key stage is the reaction of sulfur dioxide and oxygen over a vanadium(V) oxide catalyst:\n\n2SO₂(g) + O₂(g) ⇌ 2SO₃(g)     ΔH = −196 kJ\n\n(a) State Le Châtelier\'s principle. Use it to predict and explain the conditions (high or low) of (i) temperature and (ii) pressure that would maximise the yield of sulfur trioxide. Explain why the predicted temperature conditions are not used industrially. (20 marks)\n\n(b) State and explain the effect, if any, of the presence of the catalyst on the equilibrium yield of sulfur trioxide. (6 marks)\n\n(c) A mixture of 96 g of sulfur dioxide and 24 g of oxygen was placed in a 50 litre container and reached equilibrium. At equilibrium 112 g of sulfur trioxide were present. Write the Kc expression for this reaction and calculate the value of Kc. (24 marks)',
    markingScheme: [
      '(a) Le Châtelier\'s principle: systems in equilibrium react to oppose (minimise, relieve) applied stresses/disturbances. (5M)',
      '(a)(i) Temperature: low temperature — favours the exothermic (forward) reaction, producing more SO₃. High temperature would favour the endothermic reverse reaction. (6M)',
      'Industrial reason: at low temperature the reaction rate is too slow/uneconomical. A compromise temperature (~450°C) is used. (3M)',
      '(a)(ii) Pressure: high pressure — favours fewer moles of gas (3 mol reactants → 2 mol products), increasing yield of SO₃. (6M)',
      '(b) Catalyst: no effect on equilibrium yield. The catalyst speeds up both forward and reverse reactions equally, so it does not change the position of equilibrium — only the time taken to reach equilibrium is reduced. (6M)',
      '(c) Kc = [SO₃]² / ([SO₂]²[O₂]). (6M)',
      'Initial moles: SO₂ = 96/64 = 1.5 mol; O₂ = 24/32 = 0.75 mol. At equilibrium: SO₃ = 112/80 = 1.4 mol. (6M)',
      'Equilibrium moles: SO₂ = 1.5 − 1.4 = 0.1 mol; O₂ = 0.75 − 0.7 = 0.05 mol. Divide by 50L: [SO₂]=0.002M, [O₂]=0.001M, [SO₃]=0.028M. (6M)',
      'Kc = (0.028)² / ((0.002)²(0.001)) = 196,000 / 1.96 × 10⁵. (6M)',
    ],
    fullMarksTips: [
      'Le Châtelier\'s: must mention "oppose" the change — not just "shift equilibrium".',
      'Temperature: state forward reaction is EXOTHERMIC — that\'s why low temperature favours it.',
      'Industrial reason: "too slow at low temperature" earns the 3M. Always include this.',
      'Catalyst: the key phrase is "speeds up forward and reverse equally" — not just "doesn\'t change it".',
      'Kc calculation: work through moles → equilibrium moles → divide by volume → substitute into Kc. Show working clearly.',
    ],
  },
  {
    id: 'chem-2018-equil-q9',
    subject: 'chemistry', topic: 'equilibrium', topicLabel: 'Chemical Equilibrium',
    year: 2018, level: 'Higher Level', section: 'Q9', marks: 50,
    question: 'Phosgene (COCl₂) is formed from carbon monoxide and chlorine:\n\nCO(g) + Cl₂(g) ⇌ COCl₂(g)     ΔH = −109.6 kJ mol⁻¹\n\n(a) What is meant by a chemical equilibrium? (5 marks)\n\n(b) Write the equilibrium constant (Kc) expression for this reaction. (6 marks)\n\n(c) State and explain the effect, if any, on (i) the colour of the equilibrium mixture if the pressure is increased by reducing the container size, (ii) the equilibrium yield of phosgene of using a higher temperature, (iii) the value of Kc of using the charcoal catalyst. (18 marks)\n\n(d) A 12.0 litre container was filled with 0.200 moles of Cl₂ and 0.200 moles of CO and heated to temperature T. At equilibrium, 85.0% of the chlorine had reacted. Calculate the value of Kc at temperature T. (15 marks)\n\n(e) Le Châtelier\'s principle predicts best yields at low temperatures and high pressures. Suggest reasons why these conditions might not be used industrially. (6 marks)',
    markingScheme: [
      '(a) Chemical equilibrium: the state of a reversible reaction in which the rate of the forward reaction equals the rate of the reverse reaction, and the concentrations of reactants and products remain constant. (5M)',
      '(b) Kc = [COCl₂] / ([CO][Cl₂]). (6M)',
      '(c)(i) Pressure increased → equilibrium shifts toward fewer moles of gas (right side: 1 mol vs 2 mol on left) → more COCl₂ (colourless) produced, less green Cl₂ → mixture becomes paler/less green. (6M)',
      '(c)(ii) Higher temperature: reaction is exothermic → higher temperature favours endothermic reverse reaction → smaller yield of phosgene. (6M)',
      '(c)(iii) Catalyst: no effect on Kc. The catalyst speeds up both forward and reverse reactions equally — it does not change the position of equilibrium or the value of Kc. (6M)',
      '(d) Initial: CO = 0.200 mol, Cl₂ = 0.200 mol. 85% of Cl₂ reacted: Cl₂ reacted = 0.170 mol; COCl₂ formed = 0.170 mol. Equilibrium: CO = 0.030 mol, Cl₂ = 0.030 mol, COCl₂ = 0.170 mol. (9M)',
      'Concentrations: [CO] = 0.030/12 = 0.0025M; [Cl₂] = 0.0025M; [COCl₂] = 0.170/12 = 0.01417M. Kc = 0.01417/(0.0025×0.0025) = 2267 / ≈2.27×10³. (6M)',
      '(e) Low temperature: reaction rate too slow, uneconomical, long time to reach equilibrium; compromise temperature required. High pressure: costly to build and maintain high-pressure vessels; safety risks. (6M)',
    ],
    fullMarksTips: [
      'Equilibrium definition: must state (1) forward rate = reverse rate AND (2) concentrations remain constant.',
      'Kc: note this reaction has only ONE product — Kc = [COCl₂]/([CO][Cl₂]).',
      'Le Châtelier colour effect: Cl₂ is green/yellow — identify it as the coloured species and say it decreases.',
      'Temperature effect: always identify whether the forward reaction is exo or endothermic first.',
      'Catalyst and Kc: a catalyst NEVER changes Kc — it only changes the rate at which equilibrium is reached.',
    ],
  },
  {
    id: 'chem-2017-equil-q7',
    subject: 'chemistry', topic: 'equilibrium', topicLabel: 'Chemical Equilibrium',
    year: 2017, level: 'Higher Level', section: 'Q7', marks: 50,
    question: 'At a certain temperature, the equilibrium constant Kc for the reaction:\n\nN₂O₄(g) ⇌ 2NO₂(g)\n\nis 0.2. 1 mol of N₂O₄ was placed in a 10 litre container at this temperature.\n\n(a) Write the Kc expression for this reaction and calculate the equilibrium concentrations of N₂O₄ and NO₂. (25 marks)\n\n(b) It is observed that the equilibrium mixture is paler in colour at 0°C than at temperature T. Is this reaction endothermic or exothermic? Explain your answer. (12 marks)\n\n(c) A student repeats the experiment with 2 mol of N₂O₄ in 10 litres. State and explain the effect, if any, of the higher initial concentration of N₂O₄ on the value of Kc. (13 marks)',
    markingScheme: [
      '(a) Kc = [NO₂]² / [N₂O₄]. (5M)',
      'Let x = moles of N₂O₄ that decompose. Equilibrium: N₂O₄ = (1−x)/10 M; NO₂ = 2x/10 M. (6M)',
      '0.2 = (2x/10)² / ((1−x)/10) → 0.2(1−x)/10 = (2x)²/100 → 0.2(1−x) = 4x²/10 → 2(1−x) = 4x² → 4x² + 2x − 2 = 0 → 2x² + x − 1 = 0 → (2x−1)(x+1) = 0 → x = 0.5. (9M)',
      '[N₂O₄] = 0.5/10 = 0.05 M; [NO₂] = 1.0/10 = 0.1 M. Check: Kc = (0.1)² / 0.05 = 0.01/0.05 = 0.2 ✓. (5M)',
      '(b) Endothermic. At lower temperature (0°C) the mixture is paler — less NO₂ (coloured brown) present. Le Châtelier: lower temperature shifts equilibrium toward the exothermic (reverse) direction → less NO₂. Therefore the forward decomposition reaction is endothermic. (12M)',
      '(c) No effect on Kc. Kc depends only on temperature. Increasing the initial amount of N₂O₄ shifts the equilibrium position (more NO₂ forms) but does not change the value of Kc, which remains 0.2 at the same temperature. (13M)',
    ],
    fullMarksTips: [
      'Kc calculation: set up ICE table clearly (Initial, Change, Equilibrium) — examiners follow your working.',
      'Solve the quadratic: 2x² + x − 1 = 0 → factors to (2x − 1)(x + 1) = 0. Accept x = 0.5 only (x = −1 rejected).',
      'Colour argument: NO₂ is brown/dark — paler at 0°C means less NO₂ → forward (endothermic) reaction less favoured at low temperature.',
      'Kc and concentration: Kc only changes with temperature — changing concentration or pressure does NOT change Kc.',
    ],
  },
  {
    id: 'chem-2017-acid-q9',
    subject: 'chemistry', topic: 'acid-base', topicLabel: 'Acid-Base & Titration',
    year: 2017, level: 'Higher Level', section: 'Q9', marks: 50,
    question: 'A solution of methanoic acid (HCOOH) has pH = 2.37.\n\n(a) Define base and conjugate acid-base pair according to the Brønsted-Lowry theory. (10 marks)\n\n(b) Define pH. (5 marks)\n\n(c) Account for the difference in pH of: 0.1 M HCl (strong acid), 0.05 M H₂SO₄ (diprotic strong acid), and 0.1 M methanoic acid (weak acid), each with approximately pH = 1, 1.0, and 2.37 respectively. (15 marks)\n\n(d) Calculate Ka for methanoic acid at this pH. Calculate the pH of a 0.05 M solution of methanoic acid at the same temperature. (20 marks)',
    markingScheme: [
      '(a) Brønsted-Lowry base: a proton acceptor — accepts H⁺ from an acid. (5M)',
      '(a) Conjugate acid-base pair: two species that differ by a single proton (H⁺). E.g. HCOOH/HCOO⁻ — HCOOH donates H⁺ to become its conjugate base HCOO⁻. (5M)',
      '(b) pH = −log₁₀[H⁺] / −log₁₀[H₃O⁺]. (5M)',
      '(c) HCl (strong acid, fully dissociates): [H⁺] = 0.1 M → pH = 1. H₂SO₄ (diprotic strong acid): 0.05 M provides 2×0.05 = 0.1 M H⁺ → pH ≈ 1. Methanoic acid (weak acid, partially dissociates): [H⁺] < 0.1 M → higher pH = 2.37. (15M)',
      '(d) Ka calculation: pH = 2.37 → [H⁺] = 10⁻²·³⁷ = 4.27×10⁻³ M. For weak acid: [H⁺] = [HCOO⁻] = 4.27×10⁻³; [HCOOH] ≈ 0.1 − 0.00427 ≈ 0.0957 M. Ka = (4.27×10⁻³)² / 0.0957 = 1.82×10⁻⁵ / 0.0957 ≈ 1.9×10⁻⁴. (10M)',
      'pH of 0.05 M: [H⁺] = √(Ka × 0.05) = √(1.9×10⁻⁴ × 0.05) = √(9.5×10⁻⁶) ≈ 3.08×10⁻³ M → pH ≈ 2.51. (10M)',
    ],
    fullMarksTips: [
      'Brønsted-Lowry base: must say "proton acceptor" — not just "reacts with acids".',
      'Conjugate pair: differ by ONE proton — e.g. HCOOH and HCOO⁻ is one pair; H₂O and OH⁻ is another.',
      'Weak vs strong acid: the key distinction is DEGREE OF DISSOCIATION — strong acids fully dissociate, weak acids partially.',
      'Ka calculation: assume [H⁺] = [A⁻] and [HA] ≈ initial concentration (weak acid approximation).',
      'H₂SO₄: it is diprotic — 0.05 M gives 0.1 M H⁺ (both protons donate), same pH as 0.1 M HCl.',
    ],
  },
  {
    id: 'chem-2019-acid-q7',
    subject: 'chemistry', topic: 'acid-base', topicLabel: 'Acid-Base & Titration',
    year: 2019, level: 'Higher Level', section: 'Q7', marks: 50,
    question: 'Consider the reaction: HCl(aq) + NH₃(aq) → NH₄⁺(aq) + Cl⁻(aq)\n\n(a) Using the above reaction, show that HCl is a Brønsted-Lowry acid and that NH₃ is a Brønsted-Lowry base. Identify the conjugate acid-base pairs. Explain why the conjugate base of HCl is a very weak base, and why the conjugate acid of NH₃ is a moderately strong acid. (30 marks)\n\n(b) The ionic product of water Kw varies with temperature. Kw = 1.01×10⁻¹⁴ at 25°C and Kw = 9.61×10⁻¹⁴ at 60°C. Is the self-ionisation of water exothermic or endothermic? Explain. Calculate the pH of pure water at 60°C. (20 marks)',
    markingScheme: [
      '(a) HCl is a Brønsted-Lowry acid: HCl donates H⁺ to NH₃ in this reaction — a proton donor is a BL acid. (6M)',
      'NH₃ is a BL base: NH₃ accepts H⁺ from HCl — a proton acceptor is a BL base. (6M)',
      'Conjugate pairs: HCl/Cl⁻ (HCl loses H⁺ to give Cl⁻ — its conjugate base). NH₃/NH₄⁺ (NH₃ gains H⁺ to give NH₄⁺ — its conjugate acid). (6M)',
      'Cl⁻ is a very weak base: HCl is a very strong acid (almost completely dissociates), so its conjugate base Cl⁻ has almost no tendency to regain the proton — very weak proton acceptor. (6M)',
      'NH₄⁺ is a moderately strong acid: NH₃ is a moderately weak base, so its conjugate acid NH₄⁺ is a moderately strong acid — it readily donates H⁺ back. (6M)',
      '(b) Self-ionisation is endothermic: as temperature increases, Kw increases (from 10⁻¹⁴ at 25°C to 9.61×10⁻¹⁴ at 60°C). By Le Châtelier\'s principle, increasing temperature favours endothermic reactions — so the forward ionisation is endothermic. (10M)',
      'pH of water at 60°C: Kw = 9.61×10⁻¹⁴ = [H⁺][OH⁻] = [H⁺]². [H⁺] = √(9.61×10⁻¹⁴) = 3.1×10⁻⁷ M. pH = −log(3.1×10⁻⁷) = 6.51. (Note: water is still neutral at 60°C — [H⁺] = [OH⁻] — but pH < 7.) (10M)',
    ],
    fullMarksTips: [
      'BL acid/base: quote the definition AND apply it to the specific reaction — HCl donates H⁺, NH₃ accepts H⁺.',
      'Conjugate pairs: both pairs must be identified — HCl/Cl⁻ and NH₃/NH₄⁺.',
      'Strength of conjugate: strong acid → very weak conjugate base; weak base → moderate conjugate acid.',
      'Kw and temperature: state endothermic AND justify using Le Châtelier (Kw increases with T → forward reaction absorbs heat).',
      'pH at 60°C: note that neutral pH at 60°C is 6.51, NOT 7 — still neutral (not acidic) because [H⁺] = [OH⁻].',
    ],
  },
  {
    id: 'chem-2020-acid-q7',
    subject: 'chemistry', topic: 'acid-base', topicLabel: 'Acid-Base & Titration',
    year: 2020, level: 'Higher Level', section: 'Q7', marks: 50,
    question: 'Consider the reaction: HSO₄⁻(aq) + H₂O(l) ⇌ SO₄²⁻(aq) + H₃O⁺(aq)\n\n(a) Define acid according to the Brønsted-Lowry theory. Distinguish between a strong acid and a weak acid. Identify the conjugate acid and conjugate base of HSO₄⁻ in this reaction. (20 marks)\n\n(b) Calculate [H₃O⁺] and pH for a solution with pH = 5.6. Calculate [OH⁻] for a solution with pH = 7.2 at 25°C (Kw = 1.0×10⁻¹⁴). (30 marks)',
    markingScheme: [
      '(a) Brønsted-Lowry acid: a proton donor — a substance that donates H⁺ (a proton) to another substance. (5M)',
      'Strong acid: almost fully (completely) dissociated in aqueous solution — donates protons readily. Weak acid: only partially (slightly) dissociated in solution — poor proton donor. (10M)',
      'HSO₄⁻ conjugate base: SO₄²⁻ (HSO₄⁻ donates H⁺ to form SO₄²⁻). HSO₄⁻ conjugate acid: H₂SO₄ (HSO₄⁻ accepts H⁺ to form H₂SO₄). Note: in this specific reaction, HSO₄⁻ acts as an acid. (5M)',
      '(b) pH = 5.6: [H₃O⁺] = 10⁻⁵·⁶ = 2.51×10⁻⁶ M. pH = −log(2.51×10⁻⁶) = 5.6. (10M)',
      'pH = 7.2: [H₃O⁺] = 10⁻⁷·² = 6.31×10⁻⁸ M. [OH⁻] = Kw/[H₃O⁺] = 1.0×10⁻¹⁴ / 6.31×10⁻⁸ = 1.58×10⁻⁷ M. (20M)',
    ],
    fullMarksTips: [
      'BL acid definition: must say "proton donor" — "hydrogen ion donor" or "H⁺ donor" also accepted.',
      'Strong vs weak: degree of dissociation is the key concept — not just "more reactive".',
      'HSO₄⁻ is amphoteric: can act as acid (donating H⁺ → SO₄²⁻) or base (accepting H⁺ → H₂SO₄). In this reaction it is the acid.',
      '[OH⁻] calculation: use Kw = [H⁺][OH⁻] → [OH⁻] = Kw/[H⁺]. Show this formula explicitly.',
      'Calculator: 10⁻⁵·⁶ — use the antilog function: 10⁻⁵ × 10⁻⁰·⁶ = 10⁻⁵ × 0.251 = 2.51×10⁻⁶.',
    ],
  },
  {
    id: 'chem-2021-acid-q7',
    subject: 'chemistry', topic: 'acid-base', topicLabel: 'Acid-Base & Titration',
    year: 2021, level: 'Higher Level', section: 'Q7', marks: 50,
    question: 'A weak acid HA has a degree of dissociation of 1.5% in 0.10 M solution.\n\n(a) Define acid according to (i) the Arrhenius theory and (ii) the Brønsted-Lowry theory. State one limitation of the Arrhenius theory. (15 marks)\n\n(b) Identify the conjugate acid-base pairs in the reaction: HA + H₂O ⇌ H₃O⁺ + A⁻. Distinguish between a strong acid and a weak acid. Using H₂SO₄ as an example, show how the conjugate base can itself act as a Brønsted-Lowry acid. (20 marks)\n\n(c) Calculate [H₃O⁺], [A⁻], pH, and Ka for the 0.10 M solution of HA. (15 marks)',
    markingScheme: [
      '(a) Arrhenius acid: a substance that produces hydrogen ions (H⁺) in aqueous solution. (5M)',
      'Brønsted-Lowry acid: a proton donor — donates H⁺ to another substance. (5M)',
      'Limitation of Arrhenius: it only applies to aqueous solutions — it cannot explain acidic behaviour of HCl in non-aqueous solvents, or explain why NH₃ acts as a base without producing OH⁻ itself. (5M)',
      '(b) Conjugate pairs: HA/A⁻ (HA donates H⁺ to give A⁻) and H₂O/H₃O⁺ (H₂O accepts H⁺ to give H₃O⁺). (6M)',
      'Strong acid: almost fully dissociated; weak acid: slightly (partially) dissociated in solution. (7M)',
      'H₂SO₄ conjugate base as BL acid: H₂SO₄ → HSO₄⁻ + H⁺ (first dissociation). HSO₄⁻ (conjugate base) then donates another H⁺: HSO₄⁻ → SO₄²⁻ + H⁺ — acting as a BL acid. (7M)',
      '(c) 1.5% of 0.10 M dissociates: [H₃O⁺] = [A⁻] = 0.015 × 0.10 = 0.0015 M = 1.5×10⁻³ M. (5M)',
      'pH = −log(1.5×10⁻³) = 2.82. (5M)',
      'Ka = [H₃O⁺][A⁻]/[HA] = (1.5×10⁻³)² / (0.10 − 0.0015) = 2.25×10⁻⁶ / 0.0985 ≈ 2.25×10⁻⁵. (5M)',
    ],
    fullMarksTips: [
      'Arrhenius vs BL: Arrhenius = produces H⁺ in water; BL = proton donor (broader, covers non-aqueous).',
      'Limitation of Arrhenius: requires aqueous solution — misses reactions like NH₃ + HCl → NH₄Cl where OH⁻ never appears.',
      'Conjugate pairs: there are TWO pairs in any acid-base reaction — identify both.',
      'Ka calculation: [H⁺] = [A⁻] = 0.015 × 0.10 = 0.0015 M. [HA] at equilibrium = 0.10 − 0.0015 ≈ 0.0985 M.',
      'Degree of dissociation: 1.5% means 1.5/100 of the original concentration has dissociated.',
    ],
  },
  {
    id: 'chem-2025-acid-q7',
    subject: 'chemistry', topic: 'acid-base', topicLabel: 'Acid-Base & Titration',
    year: 2025, level: 'Higher Level', section: 'Q7', marks: 50,
    question: '(a) Define acid and base according to the Brønsted-Lowry theory. Distinguish between a strong acid and a weak acid. Identify the conjugate acid-base pairs in: HCO₃⁻(aq) + H₂O(l) ⇌ H₂CO₃(aq) + OH⁻(aq). (20 marks)\n\n(b) Define pH. A solution has pH = 1.4. Calculate [H₃O⁺]. Calculate the pH of a 0.015 M weak acid HA with Ka = 3.2×10⁻⁴. (20 marks)\n\n(c) Write the expression for Kw. Calculate the pH of pure water at 60°C given that Kw = 9.61×10⁻¹⁴ at 60°C. (10 marks)',
    markingScheme: [
      '(a) BL acid: a proton donor — donates H⁺. BL base: a proton acceptor — accepts H⁺. (6M)',
      'Strong acid: almost fully/completely dissociated in water. Weak acid: only slightly/partially dissociated. (6M)',
      'Conjugate pairs: HCO₃⁻/H₂CO₃ (HCO₃⁻ acts as base, accepts H⁺ from H₂O → H₂CO₃) and H₂O/OH⁻ (H₂O donates H⁺ → OH⁻). (8M)',
      '(b) pH = −log₁₀[H₃O⁺]. (4M) [H₃O⁺] = 10⁻¹·⁴ = 3.98×10⁻² M ≈ 0.0398 M. (8M)',
      'For 0.015 M HA: Ka = [H⁺]²/[HA] = 3.2×10⁻⁴. [H⁺]² = 3.2×10⁻⁴ × 0.015 = 4.8×10⁻⁶. [H⁺] = 2.19×10⁻³ M. pH = −log(2.19×10⁻³) = 2.66. (8M)',
      '(c) Kw = [H⁺][OH⁻] (or [H₃O⁺][OH⁻]). (4M) At 60°C: [H⁺] = √(9.61×10⁻¹⁴) = 3.1×10⁻⁷ M. pH = −log(3.1×10⁻⁷) = 6.51. (6M)',
    ],
    fullMarksTips: [
      'BL definitions: acid = "proton donor", base = "proton acceptor" — these exact phrases earn the marks.',
      'HCO₃⁻ is amphoteric — here it acts as a BASE (accepting H⁺ from H₂O). Note H₂O is acting as the acid.',
      '[H₃O⁺] from pH: [H₃O⁺] = 10⁻pH. For pH = 1.4: 10⁻¹·⁴ = 10⁻¹ × 10⁻⁰·⁴ = 0.1 × 0.398 = 0.0398 M.',
      'Ka weak acid: assume [H⁺] = [A⁻] and [HA] ≈ initial concentration. [H⁺] = √(Ka × C).',
      'Kw at 60°C: pH is 6.51, NOT 7 — the water is still neutral but pH neutrality shifts with temperature.',
    ],
  },
  {
    id: 'chem-2025-equil-q9',
    subject: 'chemistry', topic: 'equilibrium', topicLabel: 'Chemical Equilibrium',
    year: 2025, level: 'Higher Level', section: 'Q9', marks: 50,
    question: 'NOBr decomposes according to the reaction:\n\n2NOBr(g) ⇌ 2NO(g) + Br₂(g)\n\n(a) Define a reversible reaction. Explain why concentrations remain constant at equilibrium. (10 marks)\n\n(b) 55 g of NOBr is placed in a 2 litre container. At equilibrium, 78% of the NOBr has decomposed. Calculate the initial moles of NOBr and the equilibrium moles of all species. Write the Kc expression and calculate Kc. (30 marks)\n\n(c) State Le Châtelier\'s principle. State the effect of increased pressure on the moles of Br₂ at equilibrium. If Kc increases with temperature, is the forward reaction endothermic or exothermic? (10 marks)',
    markingScheme: [
      '(a) Reversible reaction: a reaction that can proceed in both forward and reverse directions — products can react to re-form reactants. (5M)',
      'Concentrations constant at equilibrium: the rate of the forward reaction equals the rate of the reverse reaction — reactants are being consumed at the same rate they are being produced, and vice versa. (5M)',
      '(b) Mr of NOBr = 14 + 16 + 80 = 110. Moles NOBr initially = 55/110 = 0.5 mol. (5M)',
      '78% decomposes: moles NOBr decomposed = 0.78 × 0.5 = 0.39 mol. Equilibrium: NOBr = 0.5 − 0.39 = 0.11 mol; NO = 0.39 mol; Br₂ = 0.195 mol. (10M)',
      'Concentrations (÷ 2L): [NOBr] = 0.055 M; [NO] = 0.195 M; [Br₂] = 0.0975 M. (5M)',
      'Kc = [NO]²[Br₂] / [NOBr]². (5M) Kc = (0.195)²(0.0975) / (0.055)² = 0.003705/0.003025 = 0.00371/0.003025 ≈ 6.57. (5M)',
      '(c) Le Châtelier\'s principle: when a stress is applied to a system at equilibrium, the system shifts to oppose the stress. (3M)',
      'Increased pressure: system shifts toward fewer moles of gas — the left side has 2 mol gas vs 3 mol on the right → shifts left → moles of Br₂ decrease. (4M)',
      'Kc increases with temperature → forward reaction is endothermic (absorbs heat). Higher temperature shifts equilibrium right (toward products), increasing Kc. (3M)',
    ],
    fullMarksTips: [
      'NOBr molar mass: N=14, O=16, Br=80 → Mr = 110. 55g/110 = 0.5 mol.',
      'ICE table: NOBr starts at 0.5, loses 0.78×0.5 = 0.39; NO starts at 0, gains 0.39; Br₂ gains half of that = 0.195.',
      'Kc expression: [NO]²[Br₂]/[NOBr]² — always match stoichiometry (squared terms for coefficient of 2).',
      'Pressure effect: count total moles on each side — 2 mol NOBr vs 2 mol NO + 1 mol Br₂ = 3 mol. Pressure increase → shift left → less Br₂.',
      'Kc and temperature: if Kc increases with T → equilibrium favours products more at higher T → forward reaction absorbs heat → endothermic.',
    ],
  },

  /* ══════════════════════════════════════════
     BIOLOGY — Additional Years
  ══════════════════════════════════════════ */

  // ── Genetics (additional years) ──────────
  {
    id: 'bio-2025-genetics-q12a',
    subject: 'biology', topic: 'genetics', topicLabel: 'Genetics',
    year: 2025, level: 'Higher Level', section: 'Section C — Q12a', marks: 9,
    question: '(i) Explain the term mutation. (3 marks)\n(ii) Give two causes of mutations. (6 marks)',
    markingScheme: [
      '(i) Mutation: a change in the structure (or sequence) of DNA or of a chromosome. (3M)',
      '(ii) Cause 1: Radiation — e.g. UV light, X-rays, gamma rays can damage DNA and cause mutations. (3M)',
      '(ii) Cause 2: Chemical mutagens — e.g. certain chemicals (benzene, mustard gas, tobacco smoke compounds) can alter DNA base sequences. (3M)',
      'Other accepted causes: viruses (e.g. retroviruses integrating DNA into host genome), spontaneous errors during DNA replication.',
    ],
    fullMarksTips: [
      'Mutation definition: must mention change in DNA structure/sequence — not just "a change in the organism".',
      'Two distinct causes required: radiation and chemical mutagens are the standard examples.',
      'Radiation: name specific types — UV, X-rays, gamma radiation — not just "light".',
      'Errors in DNA replication are accepted as a spontaneous cause — no external mutagen required.',
    ],
  },
  {
    id: 'bio-2025-genetics-q12b',
    subject: 'biology', topic: 'genetics', topicLabel: 'Genetics',
    year: 2025, level: 'Higher Level', section: 'Section C — Q12b', marks: 27,
    question: 'In fruit flies, body colour and wing type are controlled by genes on different chromosomes. Ebony body (E) is dominant over black body (e); normal wing (N) is dominant over curly wing (n).\n\n(i) Distinguish between the terms gene and allele. (6 marks)\n(ii) 1. Give the genotype of a fruit fly with ebony body and normal wing, heterozygous for both. 2. Give the genotype of a fruit fly with black body and curly wings. 3. Give all possible genotypes and phenotypes of offspring from a cross between these two flies. (18 marks)\n(iii) What term is used for genes found on the same chromosome? (3 marks)',
    markingScheme: [
      '(i) Gene: a region of a chromosome (or DNA) that contains genetic code for the production of a specific protein. (3M)',
      '(i) Allele: a form (variant) of a gene — two alleles of the same gene may produce different phenotypes. (3M)',
      '(ii)1. EeNn (heterozygous for both, ebony body and normal wing). (3M)',
      '(ii)2. eenn (homozygous recessive for both, black body and curly wing). (3M)',
      '(ii)3. Cross EeNn × eenn gives four genotypes in 1:1:1:1 ratio: EeNn (ebony, normal); Eenn (ebony, curly); eeNn (black, normal); eenn (black, curly). (12M — 3M per genotype + phenotype pair)',
      '(iii) Linked genes — genes found on the same chromosome are called linked genes. (3M)',
    ],
    fullMarksTips: [
      'Gene vs allele: gene = the locus/code for a protein; allele = the alternative form at that locus.',
      'Dihybrid cross: EeNn × eenn — use a Punnett square or branch diagram. Gametes of EeNn are EN, En, eN, en.',
      'All four offspring phenotypes appear in equal frequency (1:1:1:1 ratio).',
      'Linked: genes on the same chromosome are linked — they tend to be inherited together unless crossing over occurs.',
    ],
  },
  {
    id: 'bio-2025-genetics-q12c',
    subject: 'biology', topic: 'genetics', topicLabel: 'Genetics',
    year: 2025, level: 'Higher Level', section: 'Section C — Q12c', marks: 24,
    question: '(i) What do the letters DNA stand for? (3 marks)\n(ii) State which two of the four bases (Adenine, Thymine, Cytosine, Guanine) are purines and which two are pyrimidines. (6 marks)\n(iii) State one structural difference between DNA and RNA. (3 marks)\n(iv) Describe the four main steps in creating a DNA profile. (12 marks)',
    markingScheme: [
      '(i) DNA = Deoxyribonucleic acid. (3M)',
      '(ii) Purines (double-ring structure): Adenine (A) and Guanine (G). (3M) Pyrimidines (single-ring structure): Cytosine (C) and Thymine (T). (3M)',
      '(iii) One structural difference: DNA is double-stranded; RNA is single-stranded. OR DNA contains deoxyribose sugar; RNA contains ribose sugar. OR DNA contains thymine; RNA contains uracil instead. (3M)',
      '(iv) Step 1 — DNA extraction: DNA is extracted from a biological sample (blood, saliva, hair follicle). (3M)',
      '(iv) Step 2 — PCR (amplification): DNA is amplified using Polymerase Chain Reaction to produce millions of copies of specific DNA regions. (3M)',
      '(iv) Step 3 — Restriction enzyme digestion / gel electrophoresis: DNA is cut at specific sequences and fragments separated by size using gel electrophoresis. (3M)',
      '(iv) Step 4 — Comparison: the resulting banding pattern (DNA profile) is compared against a reference sample or database to identify the individual. (3M)',
    ],
    fullMarksTips: [
      'DNA: Deoxyribonucleic acid — all three words required for the mark.',
      'Purines vs pyrimidines: purines have a double (fused) ring = Adenine and Guanine; pyrimidines have a single ring = Cytosine and Thymine.',
      'DNA vs RNA: three acceptable differences — double/single strand, deoxyribose/ribose, thymine/uracil. Any ONE earns the mark.',
      'DNA profiling steps: extraction → amplification (PCR) → electrophoresis → comparison. Name each step clearly.',
    ],
  },

  // ── Ecology ──────────────────────────────
  {
    id: 'bio-2022-ecology-q12a',
    subject: 'biology', topic: 'ecology', topicLabel: 'Ecology',
    year: 2022, level: 'Higher Level', section: 'Section C — Q12a', marks: 9,
    question: 'Explain the following three ecological terms: (i) Biosphere (ii) Niche (iii) Symbiosis. (9 marks)',
    markingScheme: [
      '(i) Biosphere: the part of the Earth (including the atmosphere, lithosphere and hydrosphere) where life can exist. (3M)',
      '(ii) Niche: the role of an organism in an ecosystem — including what it eats, where it lives, when it is active, and what eats it. (3M)',
      '(iii) Symbiosis: a close, long-term relationship between two different species, which involves benefit to at least one species. Types include mutualism (both benefit), commensalism (one benefits, other unaffected), and parasitism (one benefits, other harmed). (3M)',
    ],
    fullMarksTips: [
      'Biosphere: must include the idea that it encompasses all places on Earth where organisms can survive.',
      'Niche: not just "where an organism lives" (that is its habitat) — niche = its ROLE in the ecosystem.',
      'Symbiosis: must mention "relationship between species" and involve some form of benefit. Examples: lichens (mutualism); mistletoe on a tree (parasitism).',
    ],
  },
  {
    id: 'bio-2022-ecology-q12b',
    subject: 'biology', topic: 'ecology', topicLabel: 'Ecology',
    year: 2022, level: 'Higher Level', section: 'Section C — Q12b', marks: 27,
    question: 'Read the passage about dragonflies and answer the questions:\n\n"Dragonflies are a deadly group of Irish predators. They chase down gnats with dazzling aerobatics and have a high strike rate due to their huge compound eyes. They hunt close to river banks. The water quality has to be very good for most species. They also require vegetation for protection and laying eggs. Dragonflies spend most of their lives as nymphs in waterways — feeding mostly on small invertebrates. Adults only survive for a few weeks as they fall prey to birds such as swallows."\n\n(i) Suggest one reason why dragonflies are such successful predators. (3M)\n(ii) Give two benefits for dragonfly populations living near freshwater vegetation. (6M)\n(iii) Suggest a benefit of the adult and the nymph having different food sources. (3M)\n(iv) What type of ecological relationship exists between swallows and dragonflies? (3M)\n(v) Suggest one possible effect on the dragonfly population of: 1. a disease affecting swallows; 2. cutting of riverside vegetation. (6M)\n(vi) Suggest one reason why volunteers are asked to identify dragonflies. (3M)\n(vii) What might a volunteer use to help them identify a dragonfly? (3M)',
    markingScheme: [
      '(i) Successful predator: huge compound eyes giving wide field of vision; dazzling aerobatics allowing pursuit; opportunistic/ambush hunting style. (3M)',
      '(ii) Benefit 1: protection — vegetation provides cover from their own predators (e.g. swallows). (3M)',
      '(ii) Benefit 2: laying eggs — vegetation provides a site for egg deposition. (3M)',
      '(iii) Adults and nymphs not in competition with each other for the same food resources — reduces intraspecific competition, improving survival chances of both. (3M)',
      '(iv) Predator-prey relationship (predation) — swallows (predator) eat dragonflies (prey). (3M)',
      '(v)1. Disease reducing swallow population → dragonfly population increases (fewer predators). (3M)',
      '(v)2. Cutting vegetation → dragonfly population decreases (less protection and fewer egg-laying sites). (3M)',
      '(vi) To monitor population numbers; to assess biodiversity; to check water quality (indicator species); conservation purposes. (3M)',
      '(vii) An identification key; comparison charts or pictures; field guide. (3M)',
    ],
    fullMarksTips: [
      'All answers should be based on information given in the passage — quote or clearly reference the text.',
      '(iii) Key concept: niche separation — adults and nymphs occupy different feeding niches so do not compete.',
      '(iv) Predator-prey: swallows EAT dragonflies — so swallows are predators, dragonflies are prey.',
      '(v)1: Disease kills swallows → predation pressure reduced → dragonfly numbers INCREASE.',
      '(v)2: Cutting vegetation removes protection AND egg sites → numbers DECREASE.',
    ],
  },
  {
    id: 'bio-2022-ecology-q12c',
    subject: 'biology', topic: 'ecology', topicLabel: 'Ecology',
    year: 2022, level: 'Higher Level', section: 'Section C — Q12c', marks: 24,
    question: '(i) Outline the main events of the carbon cycle. (ii) Explain why the carbon cycle is critical to life on Earth. (iii) Explain the term "greenhouse gas". (iv) Give one example of waste management from agriculture, fisheries, or forestry. (v) Other than global warming or pollution, give two factors that can affect the human population. (24 marks)',
    markingScheme: [
      '(i) Carbon cycle events: CO₂ in atmosphere absorbed by plants during photosynthesis (carbon fixation) → carbon enters food chains through feeding → returned to atmosphere by respiration (animals, plants, decomposers); fossil fuel combustion releases stored carbon; decomposition releases carbon. (8M)',
      '(ii) Critical to life: carbon is the basis of all organic molecules (carbohydrates, proteins, lipids, nucleic acids) — the cycle ensures carbon is continuously recycled and available for living organisms. Without it, carbon would be locked away and life could not be sustained. (4M)',
      '(iii) Greenhouse gas: a gas (e.g. CO₂, methane, water vapour, N₂O) that absorbs and re-emits infrared radiation in the atmosphere, trapping heat and warming the Earth\'s surface (the greenhouse effect). (4M)',
      '(iv) Waste management example: composting agricultural waste / treating fish farm effluent before release / sustainable forestry harvesting / slurry management to prevent run-off. (4M)',
      '(v) Factors affecting human population: disease/pandemic; war/conflict; famine/food shortages; emigration/immigration; birth rate/death rate changes; natural disasters. (Any two: 4M)',
    ],
    fullMarksTips: [
      'Carbon cycle: follow carbon through — photosynthesis (CO₂ → organic) → feeding → respiration (organic → CO₂). Include decomposition and combustion.',
      'Critical to life: carbon is the backbone of ALL organic molecules — this is the fundamental reason.',
      'Greenhouse gas: name examples (CO₂, CH₄, N₂O) AND state the mechanism (traps heat/infrared radiation).',
      'The question asks for factors OTHER THAN global warming/pollution — name specific examples like disease, war, famine.',
    ],
  },

  // ── Human Biology ─────────────────────────
  {
    id: 'bio-2025-photosynthesis-q13',
    subject: 'biology', topic: 'photosynthesis', topicLabel: 'Photosynthesis',
    year: 2025, level: 'Higher Level', section: 'Section C — Q13a', marks: 9,
    question: '(i) Explain why photosynthesis is an example of an anabolic reaction. (5 marks)\n(ii) Write a balanced chemical equation to represent photosynthesis. (4 marks)',
    markingScheme: [
      '(i) Photosynthesis is anabolic because it builds up (synthesises) complex organic molecules (glucose) from simple inorganic molecules (CO₂ and H₂O), using energy (light). Anabolic reactions = energy-consuming reactions that build up molecules. (5M)',
      '(ii) 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (using light energy). Balanced equation: all reactants and products correctly written with correct coefficients. (4M)',
    ],
    fullMarksTips: [
      'Anabolic: building up complex molecules from simple ones, requiring energy input — contrast with catabolic (breaking down, releasing energy).',
      'Equation: must be balanced — 6 CO₂, 6 H₂O on left; C₆H₁₂O₆ (glucose) and 6 O₂ on right. Light energy should be shown above the arrow.',
      'Common error: writing CO₂ + H₂O → C₆H₁₂O₆ + O₂ without balancing — loses marks.',
    ],
  },

  /* ══════════════════════════════════════════
     BUSINESS — 2019-2025
  ══════════════════════════════════════════ */

  // ── People in Business ────────────────────
  {
    id: 'bus-2025-people-q1a',
    subject: 'business', topic: 'people', topicLabel: 'People in Business',
    year: 2025, level: 'Higher Level', section: 'Section 3 — Q1A', marks: 20,
    question: 'Illustrate your understanding of the following essential elements of a valid contract:\n(i) Consideration (ii) Capacity to Contract (iii) Consent to Contract (iv) Legality of Form. (20 marks)',
    markingScheme: [
      '(i) Consideration: something of value that each party gives to the other as part of the contract. It is the "price" each party pays for the other\'s promise — e.g. money paid for goods received. Must be real, definite, and not past. (5M)',
      '(ii) Capacity to Contract: both parties must have the legal ability to enter into a contract. Minors (under 18), persons of unsound mind, and intoxicated persons generally lack full capacity. (5M)',
      '(iii) Consent to Contract: both parties must freely and genuinely agree to the contract. Consent is invalidated by: fraud (misrepresentation of facts), duress (force or threats), undue influence, or mistake. (5M)',
      '(iv) Legality of Form: some contracts must be in a specific form to be enforceable — e.g. contracts for the sale of land must be in writing under the Statute of Frauds; contracts made under seal (deeds) must follow specific formalities. Other contracts can be oral. (5M)',
    ],
    fullMarksTips: [
      'Each element: name it + define it + give an example. This structure earns full marks.',
      'Consideration: must be "something of value" — past consideration is not valid; consideration must move from the promisee.',
      'Capacity: specifically mention minors and persons of unsound mind.',
      'Consent: list the vitiating factors — fraud, duress, undue influence, mistake.',
      'Legality of form: distinguish contracts that must be written (land sales) from those that can be oral.',
    ],
  },
  {
    id: 'bus-2025-people-q1b',
    subject: 'business', topic: 'people', topicLabel: 'People in Business',
    year: 2025, level: 'Higher Level', section: 'Section 3 — Q1B', marks: 20,
    question: 'Explain, using examples, the different types of industrial action. (20 marks)',
    markingScheme: [
      'Strike: workers collectively refuse to attend work until their demands are met. E.g. nurses striking over pay — the most drastic form of industrial action. (5M)',
      'Work to rule: employees do only the minimum required by their contract — no overtime, no extra cooperation. E.g. train drivers refusing to work beyond their scheduled hours, causing severe delays. (5M)',
      'Go slow: employees continue to work but at a deliberately reduced pace, reducing productivity without technically breaking any rules. E.g. factory workers reducing their output rate. (5M)',
      'Overtime ban: workers refuse to work beyond their contracted hours, disrupting businesses that rely on overtime. E.g. postal workers refusing all overtime during a busy period. (5M)',
      'Picketing: striking workers stand outside the workplace to discourage other workers, customers or suppliers from entering. Must be peaceful and lawful under the Industrial Relations Act.',
    ],
    fullMarksTips: [
      'Each type of industrial action needs: a definition + a clear example. Marks are split between name/explanation and example.',
      'Strike = most extreme; work to rule = mild but disruptive; go slow and overtime ban are intermediate.',
      'Picketing is a support action, not industrial action on its own, but can be mentioned.',
      'Legal context: workers have a right to strike and picket under Irish law — mention the Industrial Relations Act for extra marks.',
    ],
  },
  {
    id: 'bus-2025-people-q1c',
    subject: 'business', topic: 'people', topicLabel: 'People in Business',
    year: 2025, level: 'Higher Level', section: 'Section 3 — Q1C', marks: 20,
    question: '(i) Define discrimination as set out in the Employment Equality Act 1998/2015. (8 marks)\n(ii) List four grounds other than age and sexual orientation on which discrimination is outlawed under this Act. (12 marks)',
    markingScheme: [
      '(i) Discrimination: treating one person less favourably than another person in a comparable situation on the basis of one of the nine protected grounds listed in the Employment Equality Act 1998/2015. (8M)',
      '(ii) Four of the following grounds (excluding age and sexual orientation): Gender; Civil status (married/unmarried); Family status; Sexual orientation; Religion; Race; Disability; Membership of the Traveller community; Age. (3M each × 4)',
    ],
    fullMarksTips: [
      'Definition: must state "treating one person less favourably" AND "on the basis of a protected characteristic/ground".',
      'The nine grounds: Gender, Civil status, Family status, Sexual orientation, Religion, Race, Disability, Age, Traveller community.',
      'The question says EXCLUDE age and sexual orientation — so list from the remaining seven.',
      'State the Act name: Employment Equality Act 1998/2015 — amended in 2015.',
    ],
  },
  {
    id: 'bus-2025-environ-q2b',
    subject: 'business', topic: 'environment', topicLabel: 'Business Environment',
    year: 2025, level: 'Higher Level', section: 'Section 3 — Q2B', marks: 20,
    question: 'Discuss the benefits and challenges of increasing employment for Irish businesses. (20 marks)',
    markingScheme: [
      'Benefit 1 — Increased consumer spending: higher employment → more people with income → higher consumer demand for goods and services → benefits businesses through increased sales/revenue. (5M)',
      'Benefit 2 — Access to skilled labour: businesses can recruit qualified and skilled workers more easily in a growing economy with expanding labour supply. (5M)',
      'Challenge 1 — Rising wage costs: low unemployment (e.g. 4.1%) creates a competitive labour market — employers must pay higher wages to attract and retain staff, increasing operating costs. (5M)',
      'Challenge 2 — Skills shortages: in a near-full employment economy, specific skills may be in short supply — businesses struggle to fill specialised roles, limiting growth. (5M)',
    ],
    fullMarksTips: [
      'Discuss means: give both benefits AND challenges — don\'t write only one side.',
      'Benefits: link to businesses specifically — more consumer spending, larger talent pool, improved morale.',
      'Challenges: high employment rate = labour scarcity = rising wages, staff turnover, skills gaps.',
      'Use data where possible: the question references 4.1% unemployment — reference this as "near-full employment" for context.',
    ],
  },
  {
    id: 'bus-2025-intl-q3c',
    subject: 'business', topic: 'international', topicLabel: 'Business Environment',
    year: 2025, level: 'Higher Level', section: 'Section 3 — Q3C', marks: 20,
    question: 'Illustrate the following barriers to free trade that can exist between countries:\n(i) Embargo (ii) Quota (iii) Subsidy (iv) Tariff. (20 marks)',
    markingScheme: [
      '(i) Embargo: a complete ban on trade with a specific country or on specific goods. E.g. the USA\'s embargo on Cuba prohibited all trade between the two countries. Embargoes are typically imposed for political or security reasons. (5M)',
      '(ii) Quota: a government-imposed limit on the quantity of a good that can be imported or exported over a period. E.g. the EU imposed a quota on Chinese steel imports — once the limit is reached, no more steel can enter. This protects domestic producers. (5M)',
      '(iii) Subsidy: a government grant or financial support given to domestic producers to lower their costs, allowing them to sell at lower prices than foreign competitors. E.g. EU agricultural subsidies under the Common Agricultural Policy (CAP) help EU farmers compete globally. (5M)',
      '(iv) Tariff: a tax imposed by a government on imported goods, making them more expensive for consumers and less competitive vs domestic products. E.g. the USA imposed a 25% tariff on imported steel — raising the cost and reducing demand for foreign steel. (5M)',
    ],
    fullMarksTips: [
      'Each barrier: define it clearly AND give a real-world example.',
      'Embargo vs quota: embargo = TOTAL ban; quota = a LIMIT on quantity (not a ban).',
      'Subsidy: a payment TO domestic producers (not a tax on imports); it distorts fair competition.',
      'Tariff: specifically a TAX on imports — raises price, reduces demand for imported goods.',
      'WTO: the World Trade Organisation works to reduce these barriers through multilateral agreements.',
    ],
  },
  {
    id: 'bus-2024-people-q4',
    subject: 'business', topic: 'people', topicLabel: 'People in Business',
    year: 2024, level: 'Higher Level', section: 'Section 3 — Q4', marks: 60,
    question: 'A company recently dismissed an employee who had worked there for 5 years after he was consistently underperforming despite multiple warnings.\n\n(A) Explain three characteristics of an effective manager. (20 marks)\n\n(B) Distinguish between constructive dismissal and wrongful dismissal. Explain how the Unfair Dismissals Act 1977/2015 protects employees. (20 marks)\n\n(C) Outline the role of the Workplace Relations Commission (WRC) in resolving workplace disputes. (20 marks)',
    markingScheme: [
      '(A) Characteristic 1 — Leadership: an effective manager motivates and guides their team toward organisational goals, building trust and morale. (7M)',
      '(A) Characteristic 2 — Communication: ability to clearly convey expectations, give feedback, and listen to employees — essential for coordination and problem-solving. (7M)',
      '(A) Characteristic 3 — Decision-making: the ability to analyse situations, evaluate options, and make sound decisions, including in uncertain or time-pressured situations. (6M)',
      '(B) Wrongful dismissal: dismissal that breaches the employee\'s contract of employment (e.g. dismissal without proper notice or without following contractual procedures). (5M)',
      '(B) Constructive dismissal: the employee resigns because the employer\'s conduct (e.g. harassment, demotion, unsafe conditions) makes continued employment unreasonable — effectively forcing the employee out. (5M)',
      '(B) Unfair Dismissals Act: protects employees with 1+ year\'s continuous service from unfair dismissal. Fair grounds for dismissal include: competence, conduct, redundancy, statutory requirement. Employees can take a case to the WRC within 6 months. Remedies: reinstatement, re-engagement, or compensation (up to 2 years\' remuneration). (10M)',
      '(C) WRC: the Workplace Relations Commission handles all employment disputes in Ireland. Its functions include: mediation (helping parties reach agreement voluntarily); adjudication (making legally binding decisions); inspection (ensuring compliance with employment law); providing information on employment rights. (20M)',
    ],
    fullMarksTips: [
      '(A) Manager characteristics: use specific management terms — leadership, communication, planning, decision-making, delegation.',
      '(B) Key distinction: wrongful = breach of contract; constructive = forced resignation by employer conduct.',
      '(B) Unfair Dismissals Act: state the 1-year qualifying period and the specific fair grounds (conduct, competence, redundancy).',
      '(C) WRC: list its functions — mediation, adjudication, inspection, information. Each function should be explained briefly.',
    ],
  },
  {
    id: 'bus-2023-finance-q5',
    subject: 'business', topic: 'finance', topicLabel: 'Finance & Accounts',
    year: 2023, level: 'Higher Level', section: 'Section 3 — Q5', marks: 60,
    question: '(A) Explain the importance of working capital management to a business. (20 marks)\n\n(B) Distinguish between a debtor and a creditor. Explain two methods a business might use to manage its debtors effectively. (20 marks)\n\n(C) Explain the following sources of finance: Overdraft; Hire Purchase; Venture Capital; Retained Earnings. (20 marks)',
    markingScheme: [
      '(A) Working capital = Current Assets − Current Liabilities. It represents the funds available for day-to-day operations. Importance: ensures a business can pay its short-term debts (suppliers, wages, utilities); poor working capital management leads to liquidity crisis — unable to pay debts even if profitable (insolvency). Positive working capital = healthy cash flow. (20M)',
      '(B) Debtor: a person or business that OWES money to the business (they bought goods/services on credit). Creditor: a person or business to WHOM the business owes money (the business bought on credit). (8M)',
      '(B) Debtor management methods: (1) Credit control — set credit limits and credit periods; check creditworthiness before extending credit. (2) Debt collection — send invoices promptly, follow up overdue accounts, use debt collection agencies if necessary. (3) Offering early payment discounts to incentivise prompt payment. (12M)',
      '(C) Overdraft: short-term bank facility allowing a business to withdraw more than is in its account up to an agreed limit — flexible, used for day-to-day cash flow. (5M)',
      '(C) Hire Purchase: a method of acquiring assets by paying in instalments; the business gets use of the asset immediately but does not own it until the final payment is made. (5M)',
      '(C) Venture Capital: investment provided by specialist investors (venture capitalists) in exchange for equity/shares in a high-growth business — usually for start-ups or expansion with high risk/reward potential. (5M)',
      '(C) Retained Earnings: profits that are kept in the business rather than distributed to shareholders as dividends — an internal, low-cost source of finance with no interest or repayment obligations. (5M)',
    ],
    fullMarksTips: [
      'Working capital: state the formula AND explain WHY it matters — cash flow, paying debts, avoiding insolvency.',
      'Debtor vs creditor: debtor OWES you money; creditor is OWED money by you. Simple reversal.',
      'Debtor management: credit control (prevention) vs debt collection (cure). Both earn marks.',
      'Sources of finance: each needs a clear definition + advantage or use-case to earn full marks.',
      'Retained earnings vs dividends: retained earnings = profits kept in business; dividends = distributed to shareholders.',
    ],
  },
  {
    id: 'bus-2022-marketing-q6',
    subject: 'business', topic: 'marketing', topicLabel: 'Marketing',
    year: 2022, level: 'Higher Level', section: 'Section 3 — Q6', marks: 60,
    question: '(A) Explain the concept of market segmentation. Identify and explain three bases of market segmentation. (20 marks)\n\n(B) Distinguish between market research and marketing research. Explain two methods of primary research a business might use. (20 marks)\n\n(C) Discuss the role of branding in marketing. Refer to at least TWO named brands in your answer. (20 marks)',
    markingScheme: [
      '(A) Market segmentation: dividing a total market into smaller, distinct groups (segments) of consumers who share similar needs, characteristics or behaviours, and targeting each segment with an appropriate marketing mix. (6M)',
      '(A) Basis 1 — Geographic: dividing market by location — country, region, city. E.g. selling heavier coats in colder northern regions. (4M)',
      '(A) Basis 2 — Demographic: dividing by age, gender, income, education, family size. E.g. a luxury car brand targeting high-income adults. (4M)',
      '(A) Basis 3 — Psychographic: dividing by lifestyle, values, personality, attitudes. E.g. a sports brand targeting health-conscious, active consumers. (6M)',
      '(B) Market research: specifically the collection of data about the market, competitors, and the size of a potential market. (5M)',
      '(B) Marketing research: broader — the collection, analysis and interpretation of data about all aspects of the marketing mix (product, price, place, promotion), not just the market itself. (5M)',
      '(B) Primary research method 1 — Survey/questionnaire: designed questions distributed to a sample of consumers — can be online, postal, telephone. Advantages: specific, current data; can be tailored to business needs. (5M)',
      '(B) Primary research method 2 — Focus group: a small group of target consumers brought together to discuss a product or concept in depth. Advantage: provides qualitative insights, opinions and attitudes. (5M)',
      '(C) Role of branding: a brand (name, logo, symbol) differentiates a product and creates an identity. Functions: builds customer loyalty, allows premium pricing, differentiates from competitors, conveys quality. E.g. Apple brand commands premium prices and fiercely loyal customers. Coca-Cola\'s brand recognition is so strong it commands global market dominance. (20M)',
    ],
    fullMarksTips: [
      'Market segmentation: state WHY businesses segment — to target specific groups more effectively with tailored marketing.',
      '(B) Market vs marketing research: market research is a SUBSET of marketing research. Marketing research covers all 4Ps.',
      'Primary research: distinguish primary (new data collected for specific purpose) from secondary (existing published data).',
      'Branding: must name at least two specific brands and link branding functions to them — Apple, Coca-Cola, Nike etc.',
    ],
  },
];


