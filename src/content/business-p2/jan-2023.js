export default {
  id: 'jan-2023',
  label: 'Jan 2023',
  kind: 'paper',
  title: 'January 2023 paper',
  summary: `This paper builds on 2022 but makes everything **applied**. Instead of asking what management is, it asks you to **use, critique and transfer** management ideas: judge intuition, diagnose a toxic team in a memo, critique Porter, connect the module to another one, and rank climate strategies by feasibility.

Compare it with 2022: "what is management?" became "how has it informed another module?"; toxic teams became a first-person memo; "does Porter deserve his citations?" became "critique Porter"; and win-win became "which climate ideas are feasible?".`,
  meta: [['Setter', 'Norah Campbell'], ['Format', 'Five questions, answer three'], ['Time', '2 h 15 min, ~45 min each']],
  answer: 'answer three',
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      id: 'q1',
      n: 1,
      title: 'Mintzberg and intuition: the benefits and drawbacks of deciding by gut',
      tags: ['Decision-making', 'Mintzberg', 'Bias', 'Evidence-based management'],
      paraphrased: true,
      prompt: `Drawing on Mintzberg's "The Manager's Job: Folklore and Fact" (1975), critically discuss the potential benefits and drawbacks of intuition-based decision-making in organisations.`,
      plan: `## Introduction
- **Hook:** in January 2009 Captain Sullenberger had about **208 seconds** after both engines failed to decide to land on the Hudson. Simulations later showed a return to the airport was technically possible only with an immediate turn; his trained intuition saved all **155** people on board.
- **Mintzberg (1975):** the "folklore" says managers are reflective, systematic planners; the "fact" is that their work is brief, varied, fragmented and verbal, with most activities lasting minutes. They cannot analyse everything, so intuition is unavoidable.
- **Define intuition:** judgement reached without conscious step-by-step reasoning, often from pattern recognition. Distinguish **expert intuition** from a **strong feeling**.
- **Thesis:** intuition is a genuine managerial asset where experience is relevant and feedback is fast, but it reproduces biases and overconfidence where those conditions fail. The best managers use intuition to generate options and evidence to test them.
- **Roadmap:** benefits; drawbacks; how to combine the two.

## Main point 1 — Why intuition makes managers effective
- **Claim:** under time pressure and uncertainty, intuition is faster and often as good as analysis.
  - **Simon (1955):** bounded rationality: full analysis is impossible, so managers satisfice.
  - **Klein:** the recognition-primed decision model: experienced fire commanders recognised patterns and acted; in his studies most decisions were made this way, not by comparing options.
  - **Gigerenzer (2007):** fast-and-frugal heuristics can outperform complex models in uncertain environments ("less is more").
  - **Isenberg (1984):** senior managers rely on intuition to sense problems and integrate scattered information.
  - **Where useful:** crises, negotiation, hiring conversations, interpersonal conflict, fast-moving markets.
  - **Example:** an operations manager facing a sudden supply failure picks the most reliable alternative supplier from years of experience; waiting for perfect data would cost more.
- **Counter-argument:** experience misleads when a new situation only looks like an old one.
- **Judgement:** intuition is strongest with relevant experience, repeated feedback and a fairly stable environment.

## Main point 2 — Why intuition leads managers astray
- **Claim:** gut feeling is where systematic bias enters.
  - **Kahneman and Tversky (1974):** anchoring, availability, representativeness.
  - **Confirmation and overconfidence:** executives convinced a deal fits interpret every forecast as support; **70–90%** of acquisitions disappoint (Christensen et al., 2011).
  - **Kahneman and Klein (2009):** they agree intuition is trustworthy only in "high-validity" environments with regular patterns and quick feedback (chess, firefighting), not in long-range forecasting, stock-picking or strategy.
  - **Groupthink (Janis, 1972):** a team of confident intuitions reinforces itself.
  - **Example:** Kodak's leaders believed customers would always want prints, despite having invented the digital camera in 1975; Kodak filed for bankruptcy in 2012.
- **Counter-argument:** analysis is not automatically objective either: Coca-Cola's **New Coke** (1985) followed about **200,000** taste tests, yet missed customers' emotional attachment; it was withdrawn within three months.
- **Judgement:** the problem is not intuition but **untested** intuition.

## Main point 3 — Combining intuition with evidence
- **Claim:** organisations should design decisions so intuition proposes and evidence disposes.
  - **Evidence-based management (Pfeffer and Sutton, 2006; Rousseau):** combine research, organisational data, professional expertise and stakeholder views.
  - **Scale scrutiny to stakes:** fast intuition for small reversible decisions; structured challenge for costly irreversible ones (Bezos's "one-way" vs "two-way" doors).
  - **Tools:** pre-mortems, devil's advocacy, independent review, decision journals to check whose intuitions prove right.
  - **Test, don't argue:** pilots, A/B tests, scenario analysis.
  - **Example:** a manager sure a product will succeed runs a limited launch before committing the full budget.
- **Counter-argument:** too much analysis causes "paralysis by analysis" and missed windows.
- **Judgement:** the aim is calibrated intuition, not its elimination.

## Conclusion
- **Answer:** Mintzberg is right that intuition is central to real managerial work; it brings speed and pattern recognition.
- **But:** it carries bias and overconfidence, especially in unfamiliar, slow-feedback situations.
- **Final line:** good management is not choosing intuition or analysis; it is knowing when each is appropriate and never letting either go unchallenged.`,
      evidence: `!stat ~208 seconds | Sullenberger's decision window on the Hudson (2009); 155 survived
!stat ~200,000 | Taste tests behind New Coke (1985), withdrawn after 79 days
!stat 1975 | Kodak engineer Steve Sasson built the first digital camera; Kodak bankrupt in 2012
!stat 70–90% | Acquisitions that disappoint (Christensen et al., 2011)

#### Theories
- **Mintzberg (1973, 1975):** the reality of managerial work; ten roles.
- **Simon (1955):** bounded rationality.
- **Klein (1998):** recognition-primed decisions.
- **Kahneman and Klein (2009):** conditions for intuitive expertise.
- **Gigerenzer (2007):** fast-and-frugal heuristics.
- **Pfeffer and Sutton (2006):** evidence-based management.

#### If the wording changes
- "Will AI replace managerial intuition?" Add Main point 3 from Jan 2022 Q4 (algorithms and bias).`,
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      id: 'q2',
      n: 2,
      title: 'A memo to yourself as HR manager: diagnosing a toxic team',
      tags: ['Teams', 'Role-play', 'HR', 'Team dynamics'],
      paraphrased: true,
      prompt: `Imagine you are an HR manager. Write a personal memo to yourself describing a toxic team, using the language of team dynamics to diagnose the worsening situation.`,
      plan: `## Introduction
- **What is being tested:** applying team theory to a believable scenario, not writing an essay about toxicity. Write in the **first person**, as a private professional reflection.
- **Memo header:** CONFIDENTIAL. To: Myself. From: HR Manager. Subject: deteriorating dynamics in the Marketing team. Date.
- **Situation (opening paragraph):** a six-person marketing team in a mid-sized tech firm performed well, but tension has grown over two months before a major product launch.
- **Cast:** Sarah (team leader, results-driven, increasingly controlling); James (senior, influential, dismissive of juniors); Aisha (creative, ideas ignored); Daniel (capable, disengaging); Emma (junior, silent in meetings); Michael (takes credit, avoids accountability).
- **Purpose of the memo:** to diagnose what is happening using team-dynamics concepts and decide what to do.

## Main point 1 — How the team deteriorated: stages and sub-groups
- **Tuckman (1965):** the team formed and performed early, but launch pressure pushed it back into **storming**, and it is developing dysfunctional norms rather than re-norming.
- **Social categorisation and social identity (Tajfel and Turner, 1979):** Sarah and James form an in-group; others feel like an out-group. A **faultline** (Lau and Murnighan, 1998) is opening along seniority.
- **Norms:** public criticism of mistakes has become the accepted way to behave.
- **Progression to show the examiner:** initial tension, then dysfunctional norms, then reduced trust, then poor performance.

## Main point 2 — Diagnosis in the language of team dynamics
- **Low psychological safety (Edmondson, 1999):** Sarah criticises mistakes publicly, so people stop asking questions or admitting errors.
- **Withdrawal and disengagement:** Aisha has stopped suggesting ideas; the team loses creativity.
- **Social loafing (Ringelmann, 1913; Latané et al., 1979):** Daniel contributes less because effort is unrecognised and others coast.
- **Groupthink and conformity (Janis, 1972):** Emma agrees in meetings but disagrees privately; apparent consensus hides risk.
- **Accountability failure (Lencioni, 2002):** Michael takes credit for shared work; trust and fairness erode.
- **Task conflict turning into relationship conflict:** disagreements about the launch plan have become personal.

## Main point 3 — Consequences and my response
- **If nothing changes:** lower engagement, absenteeism, loss of good people (Aisha first), and a launch at risk because information is withheld and weak plans go unchallenged.
- **Individual level:** a private conversation with Sarah about leadership style; clear expectations on conduct for James and Michael; check in with Emma and Daniel.
- **Team level:** a facilitated session to rebuild trust, clarify roles (who owns what), and agree norms, including how to disagree.
- **Structural level:** add team-based goals and recognition so credit is shared; set up a safe route to raise concerns.
- **Priority:** not short-term productivity but conditions where accountability, psychological safety and collaboration coexist.

## Conclusion
- **Summary line for the memo:** "The team is not failing because of one difficult person. It is failing because pressure has turned leadership into control, sub-groups into factions and disagreement into silence."
- **Next steps with dates:** meet Sarah this week; team session within a fortnight; review in a month.
- **Reflective close:** as HR I must also ask whether our incentives and promotion criteria helped create this.`,
      evidence: `#### Diagnosis table to adapt

| What happens | Concept | What it reveals |
| --- | --- | --- |
| Sarah criticises mistakes publicly | Low psychological safety | People stop speaking up |
| Sarah and James form an inner circle | Social categorisation; faultline | In-group and out-group |
| Aisha stops suggesting ideas | Disengagement | Lost creativity |
| Daniel contributes less | Social loafing | Effort falls when unrecognised |
| Emma agrees despite private doubts | Groupthink, conformity | False consensus |
| Michael takes credit | Accountability failure | Trust and fairness erode |
| Meetings turn personal | Relationship conflict | Task disagreement became hostility |

#### Model memo paragraph (diagnosis)
> The most concerning issue is the loss of psychological safety. Employees no longer seem comfortable admitting mistakes, asking questions or challenging decisions. Sarah's public criticism has created an informal norm in which disagreement is treated as a threat rather than a way to improve the work. An in-group of Sarah and James has also formed, and others feel excluded from key discussions. The result is that task disagreements have become personal, and in meetings people now agree with proposals they privately doubt.

#### Theories to name
- **Edmondson (1999); Tuckman (1965); Janis (1972); Tajfel and Turner (1979); Lencioni (2002); Latané et al. (1979); Lau and Murnighan (1998); Jehn (1995) on task vs relationship conflict.**

#### How to maximise marks
- Connect every theory to a specific behaviour in your scenario.
- Include formal authority (Sarah) and informal power (James).
- Distinguish task from relationship conflict.
- End with a realistic HR intervention.`,
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      id: 'q3',
      n: 3,
      title: "What critique would you offer of Porter's Five Forces?",
      tags: ['Strategy', 'Porter', 'Critique', 'Platforms'],
      prompt: `What critique would you offer of Porter's Five Forces framework?`,
      plan: `## Introduction
- **Hook:** in 2008, taxis looked like a protected industry with licences as entry barriers. Within a decade **Uber** had redrawn it, without owning a single car. A Five Forces analysis from 2008 would have missed the threat.
- **The framework (Porter, HBR 1979):** rivalry, new entrants, substitutes, buyer power and supplier power determine industry attractiveness and profit potential.
- **Thesis:** Five Forces deserves its influence as a systematic way to read an industry. The strongest critique is not that it is wrong but that it is **incomplete**: static, centred on industries and competition, and blind to internal capabilities and to wider stakeholders and ecology.
- **Roadmap:** too static; underplays cooperation and ecosystems; overlooks internal capabilities (plus a note on sustainability and stakeholders).

## Main point 1 — Too static for fast-changing markets
- **Claim:** it is a snapshot that treats industry boundaries as given.
  - **Netflix:** competed with DVD rental shops, then broadband streaming, then became a content producer competing with studios.
  - **Uber and Airbnb:** entered without the assets incumbents treated as barriers.
  - **D'Aveni (1994):** hypercompetition: advantages are short-lived.
  - **Downes and Nunes (2013):** "big bang disruption" can arrive from outside the industry, better and cheaper at once.
- **Counter-argument:** the analysis can be repeated over time; McGahan (2004) shows industries change in recognisable patterns.
- **Judgement:** useful for diagnosing pressures now, not for predicting them.

## Main point 2 — It underplays cooperation, complements and platforms
- **Claim:** value is often created together, not only fought over.
  - **Brandenburger and Nalebuff (1996):** the value net adds complementors; firms compete and cooperate (co-opetition).
  - **Apple:** its position depends on app developers, accessory makers and services; developers gain customers and Apple gains apps.
  - **Van Alstyne, Parker and Choudary (HBR, 2016):** in platform businesses, value comes from orchestrating outside participants, so "buyers" and "suppliers" can be the same people.
  - **Government:** regulation shapes all five forces; some writers treat it as a sixth force.
- **Counter-argument:** Porter (2008) argues complements and government act *through* the five forces.
- **Judgement:** modern strategy needs both competition and collaboration lenses.

## Main point 3 — It overlooks internal resources, and wider stakeholders
- **Claim:** firms in the same industry earn very different profits, so the inside matters more.
  - **Rumelt (1991):** industry explained about **8%** of profit variance; business-unit factors about **46%**.
  - **Barney (1991):** advantage from VRIN resources; **Teece et al. (1997):** dynamic capabilities.
  - **Example:** Amazon's logistics and data, or Ryanair's cost discipline, explain more than retail or airline structure.
  - **Wider critique:** the model assumes profit maximisation and treats society and nature as background. Freeman's stakeholder theory and Hart's natural-resource-based view fill that gap. Fast fashion can look strategically attractive while imposing large externalities.
- **Counter-argument:** Porter was answering a narrower question: what drives industry profitability.
- **Judgement:** combine outside-in (Porter) with inside-out (RBV) and stakeholder views.

## Conclusion
- **Answer:** my critique is that Five Forces is a powerful diagnostic that becomes dangerous when used alone.
- **Its gaps:** change over time, cooperation and platforms, internal capabilities, and wider social and environmental costs.
- **Final line:** a company can build advantage in an unattractive industry, and fail in an attractive one; Five Forces alone cannot tell you which.`,
      evidence: `!stat ~8% vs ~46% | Industry vs business-unit effects on profits (Rumelt, 1991)
!stat 1996 | *Co-opetition* adds complementors (Brandenburger and Nalebuff)
!stat 2008 | Porter's own update, "The Five Competitive Forces That Shape Strategy"

#### Theories
- **Porter (1979, 1980, 2008).**
- **Barney (1991); Teece, Pisano and Shuen (1997); Prahalad and Hamel (1990).**
- **Brandenburger and Nalebuff (1996).**
- **D'Aveni (1994):** hypercompetition.
- **Kim and Mauborgne (2005):** Blue Ocean.
- **Freeman (1984); Hart (1995).**

#### Examples
- **Netflix, Uber, Airbnb, Apple, Amazon, Ryanair, Kodak.**

#### Pitfalls
- A critique still needs balance. Credit the framework first, then show the limits, then judge.
- Do not repeat the 2022 answer word for word: here the focus is the critique itself.`,
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      id: 'q4',
      n: 4,
      title: 'How has Fundamentals of Management informed a second-year module?',
      tags: ['Reflection', 'Transfer of learning', 'Operations', 'Lean'],
      prompt: `Reflect on any one module you are taking in your Senior Fresh year. How has your learning in Fundamentals of Management and Organisation informed that second-year module? Critically consider the extent to which the skills and knowledge in Fundamentals of Management and Organisation are applicable.`,
      plan: `## Introduction
- **Choose one module and name it.** Operations Management is the easiest bridge; Organisational Behaviour, Marketing, Accounting or Economics also work. Use your real lectures, assignments and readings; the plan below is a model.
- **Frame:** management theory explains how organisations coordinate people, resources and decisions. Operations Management studies how goods and services are actually produced and delivered.
- **Thesis:** Fundamentals of Management provides the **organisational foundation** (planning, structure, motivation, decision-making), but it does not on its own tell you the optimal process, inventory level or schedule. Its value depends on combining it with the technical tools of the second-year module.
- **Roadmap:** management functions in operations; organisational behaviour in operations; the limits.

## Main point 1 — Management functions explain how operations are organised
- **Fayol (1916) mapped onto operations:**
  - Planning: forecasting demand, setting production requirements.
  - Organising: allocating staff, equipment and responsibilities.
  - Coordinating: linking purchasing, production and logistics.
  - Controlling: monitoring quality, cost and output.
- **Taylor (1911):** standard work and time study underpin process design.
- **Toyota Production System:** standard work, just-in-time and kanban. Womack, Jones and Roos (*The Machine That Changed the World*, 1990) found Toyota's plant built cars in roughly half the labour hours of a comparable GM plant, with far fewer defects.
- **Weber:** clear roles and procedures give operational consistency and accountability.
- **Limit:** knowing the functions does not tell you how much stock to hold.

## Main point 2 — Organisational behaviour shapes operational performance
- **Mayo and human relations:** productivity depends on social conditions, not just process design.
- **Kaizen:** continuous improvement depends on workers spotting problems and suggesting fixes; Toyota's **andon cord** lets any worker stop the line.
- **Psychological safety (Edmondson):** people only report defects or near-misses when it is safe; this links to quality and safety.
- **Motivation (Herzberg; Deci and Ryan):** engaged staff follow and improve procedures.
- **Example:** a technically efficient line fails if staff are disengaged or afraid to report faults; Boeing's 737 MAX crises (2018–2019 crashes, 2024 door-plug blowout) were partly quality-culture failures.
- **Counter-argument:** participation cannot replace investment, engineering and sound process design.

## Main point 3 — The limits: technical and quantitative knowledge is also needed
- **Operations decisions use models:** economic order quantity, capacity utilisation, forecasting, scheduling, statistical process control and queueing.
- **Example:** choosing between suppliers during a disruption requires comparing cost, lead time, reliability and risk, which management theory alone does not provide.
- **Bounded rationality (Simon):** even with data, managers cannot foresee every disruption, as COVID-19 supply-chain shocks and the 2026 Hormuz oil shock showed.
- **Critical point:** Fundamentals was most useful for the "people and organisation" half of the module and least useful for the calculations.
- **Judgement:** management theory frames the problem; operations techniques solve it.

## Conclusion
- **Answer:** Fundamentals of Management has been highly applicable as a foundation, especially for understanding coordination, structure and the human side of operations.
- **But:** its applicability is partial; it must be combined with specialised quantitative tools.
- **Personal reflection:** name one concept you now see everywhere (for example psychological safety or Fayol's functions) and one gap you noticed.
- **Final line:** an organisation can be technically efficient but poorly managed, or well managed but technically inefficient; the two modules together explain why.`,
      evidence: `!stat ~½ | Labour hours per car at Toyota vs a comparable GM plant (Womack, Jones and Roos, 1990)

#### Theories
- **Fayol, Taylor, Weber, Mayo, Simon.**
- **Lean (Womack and Jones, 1996):** value, value stream, flow, pull, perfection.
- **Total Quality Management (Deming):** quality is a system property.
- **Kaizen and andon** (Toyota).

#### Alternative modules
- **Organisational Behaviour:** motivation and teams map directly; the limit is that OB adds psychological depth Fundamentals lacked.
- **Marketing:** strategy (Porter, segmentation) and stakeholder theory; the limit is consumer psychology.
- **Financial or management accounting:** control systems and performance measurement (Fayol's "control"); Goodhart's law on targets.

#### Pitfalls
- This is a reflection: use "I" and real course content. A generic essay about operations loses marks.`,
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      id: 'q5',
      n: 5,
      title: 'Which climate strategies are feasible, and which are not?',
      tags: ['Sustainability', 'Climate strategy', 'Offsets', 'Adaptation'],
      paraphrased: true,
      prompt: `There are many ideas in management theory and practice on how organisations can strategically plan for climate change. Which ideas are more feasible, and which are less feasible?`,
      plan: `## Introduction
- **Hook:** a 2023 investigation by *The Guardian*, *Die Zeit* and SourceMaterial concluded that more than **90%** of the rainforest offset credits it examined from Verra, the largest certifier, were likely "phantom credits" that did not represent real reductions.
- **Define:** climate strategy is an organisation's long-term approach to cutting its contribution to climate change (**mitigation**) and preparing for its effects (**adaptation**). **Net zero** means balancing remaining emissions with removals after deep cuts.
- **Thesis:** the most feasible strategies combine real emission cuts with financial and operational benefits: efficiency, renewable power and resilience planning. Supply-chain and circular models are feasible but harder. Relying on offsets or future carbon removal is the least feasible, and often a way to delay. Feasible should not be confused with sufficient.
- **Roadmap:** highly feasible; feasible but difficult; less feasible; plus adaptation.

## Main point 1 — Most feasible: efficiency, renewables and climate-risk planning
- **Why:** they pay back, so they survive without extra regulation.
  - **Efficiency:** insulation, heat pumps, efficient motors, LED lighting, less business travel, fleet electrification where practical.
  - **Renewable electricity:** corporate power purchase agreements (PPAs); Amazon has been the world's largest corporate buyer of renewable energy since 2020.
  - **Internal carbon pricing:** Microsoft has charged an internal carbon fee across its divisions since 2012.
  - **Porter and van der Linde (1995):** regulation and efficiency can drive innovation.
  - **Disclosure:** the TCFD (2017) framework, now built into the ISSB's IFRS S2 (2023), makes boards assess climate risk.
- **Limit:** capital costs, and relative improvement can hide absolute growth (rebound).
- **Judgement:** most feasible, but must be measured in absolute emissions.

## Main point 2 — Feasible but harder: supply chains and circular models
- **Why harder:** most emissions lie outside the firm's walls.
  - **Scopes:** Scope 1 (direct), Scope 2 (purchased energy), Scope 3 (value chain). CDP has found supply-chain emissions are on average about **11 times** operational emissions.
  - **Fashion:** a brand's offices are trivial; its emissions are in fibres, dyeing and factories powered by coal.
  - **Circular economy:** repair, resale, take-back, durable design. **Patagonia**'s Worn Wear repairs and resells garments.
  - **Science Based Targets initiative:** sets 1.5°C-aligned targets including Scope 3.
- **Difficulty:** limited influence over thousands of suppliers, poor data, consumer habits.
- **Counter-argument:** long-term contracts, supplier finance and collaboration increase influence.
- **Judgement:** essential but slow; requires sustained investment and cooperation.

## Main point 3 — Least feasible now: offsets and future removals instead of cuts
- **Offsets:** cheap and quick, but questions of additionality, permanence and verification, as the Verra investigation showed. The EU's Empowering Consumers Directive bans claims of climate neutrality based on offsets from **27 September 2026**.
- **Carbon capture and direct air capture:** costly (direct air capture costs hundreds of dollars per tonne), energy-hungry and small-scale so far.
- **Hard-to-abate sectors:** aviation, cement and steel may genuinely need removals; sustainable aviation fuel is about **2%** of EU jet fuel by mandate in 2025, rising to **70%** by 2050 (ReFuelEU).
- **Counter-argument:** dismissing new technology could starve it of investment.
- **Judgement:** removals should complement deep cuts, never replace them.

## Conclusion
- **Ranking:** efficiency and renewables (high); adaptation planning (high to medium); supply-chain and circular change (medium); carbon capture (low to medium for now); offsetting instead of cutting (low).
- **Adaptation is also feasible and necessary:** flood risk assessment for sites, heat plans for staff, diversified sourcing for drought.
- **Key distinction:** what is feasible for a firm is not always what is sufficient for the climate.
- **Final line:** credible strategy prioritises direct cuts, efficiency and resilience; technology and offsets can support the transition but cannot replace changes to high-emission business models.`,
      evidence: `!stat >90% | Verra rainforest credits judged likely "phantom" (Guardian/Zeit investigation, 2023)
!stat ~11× | Supply-chain vs operational emissions on average (CDP)
!stat 2% → 70% | Sustainable aviation fuel mandate, 2025 to 2050 (ReFuelEU)
!stat 27 Sep 2026 | EU ban on offset-based "climate neutral" claims applies

#### Feasibility table

| Strategy | Feasibility | Reason |
| --- | --- | --- |
| Energy efficiency | High | Cuts costs and emissions together |
| Renewable electricity | High to medium | Depends on grid and location |
| Supply-chain decarbonisation | Medium | Needs supplier cooperation and data |
| Circular economy | Medium | Redesign and behaviour change |
| Adaptation planning | High to medium | Protects continuity; can be costly |
| Carbon capture and direct air capture | Low to medium now | Costly, small scale |
| Offsets instead of cuts | Low | Weak verification; delays real cuts |

#### Theories and frameworks
- **Paris Agreement (2015):** well below 2°C, pursue 1.5°C.
- **IPCC:** deep, rapid cuts plus adaptation.
- **Hart (1995):** natural-resource-based view.
- **TCFD (2017) and IFRS S2 (2023):** governance, strategy, risk, metrics.
- **SBTi:** science-based targets.
- **Carbon leakage:** production moving to laxer jurisdictions; the EU's carbon border adjustment mechanism entered its definitive phase on 1 January 2026.`,
    },
  ],
};
