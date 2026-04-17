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
];
