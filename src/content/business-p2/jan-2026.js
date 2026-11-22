export default {
  id: 'jan-2026',
  label: 'Jan 2026',
  kind: 'paper',
  title: 'January 2026 paper: the new two-section format',
  summary: `The most important paper in the set. It splits the exam into **Section A: Enacting Sustainable Development** and **Section B: Fundamentals of Management and Organisation**, and you must answer **two from each**, so preparing only your favourite management topics is no longer possible.

Sustainability is no longer one question among five: it runs through ecological economics, food policy, framing, climate strategy and the ending of every management question. **The overarching theme:** how organisations and economies can transform their underlying systems, rather than simply make existing systems more efficient.`,
  meta: [['Setters', 'Norah Campbell and Ulrich Leicht-Deobald'], ['External', 'Mary Lee Rhodes'], ['Format', 'Two from A, two from B'], ['Time', '2 h 15 min, ~33 min each']],
  answer: 'answer two from each section',
  sectionNotes: {
    'Section A: Enacting Sustainable Development': 'Rewards thinking like a policymaker and questioning economic assumptions.',
    'Section B: Fundamentals of Management and Organisation': 'Rewards named theory applied to real organisations, always with a sustainability ending.',
  },
  questions: [
    /* ------------------------------------------------------------------ A1 */
    {
      id: 'a1',
      label: 'Question A1',
      section: 'Section A: Enacting Sustainable Development',
      title: 'Doughnut Economics: what makes it a paradigm shift?',
      tags: ['Raworth', 'Growth', 'GDP', 'Planetary boundaries'],
      paraphrased: true,
      prompt: `Doughnut Economics: what makes it a paradigm shift? Focus on the tacit assumptions it questions and the solutions and transformations it proposes.`,
      plan: `## Introduction
- **Hook:** in April 2020 **Amsterdam** became the first city to adopt the Doughnut as the basis of its circular-economy strategy. The same year, the Planetary Health Check counted six planetary boundaries crossed; by **2025** it was **seven of nine**.
- **Define:** Kate Raworth's Doughnut (Oxfam paper 2012; book 2017) has an inner ring, the **social foundation** (12 dimensions such as food, water, health, education, housing, income, voice), and an outer ring, the **ecological ceiling** (the nine planetary boundaries). Between them lies the "safe and just space for humanity".
- **Paradigm shift (Kuhn, 1962):** a change in the basic assumptions through which a field sees the world.
- **Thesis:** the Doughnut is a paradigm shift because it replaces **endless GDP growth** as the goal with **thriving within social and ecological limits**, and treats the economy as embedded in society and nature. Its weakness is that it is clearer as a compass than as a set of policy instruments.
- **Roadmap:** the assumptions it questions; the transformations it proposes; how far it really changes practice.

## Main point 1 — The tacit assumptions it questions
- **That GDP growth equals progress.** GDP counts market output, not inequality, unpaid care, depletion or wellbeing. An oil spill raises GDP through clean-up costs. Kuznets himself warned in 1934 that national income was not a measure of welfare.
- **Ireland makes the point:** GDP "grew" **26%** in 2015 because multinationals moved assets ("leprechaun economics"); modified GNI (GNI*) is only about three-fifths of GDP. Ireland now publishes a **Well-being Framework** alongside each Budget.
- **That the economy is a closed loop:** Raworth redraws it as embedded in society and the living world (Daly: the economy is a subsystem of the biosphere).
- **That "rational economic man" is human nature;** that markets self-correct; that inequality will trickle down; that growth will clean up the environment later (the environmental Kuznets curve).
- **Roots:** Meadows et al., *Limits to Growth* (1972); Daly's steady-state economics; Rockström et al.'s planetary boundaries (2009).
- **Counter-argument:** GDP still measures output, jobs and tax capacity; nobody seriously uses it alone.
- **Judgement:** the shift is in the **goal**, not the abolition of GDP.

## Main point 2 — The transformations it proposes
- **Raworth's seven ways to think:** change the goal; see the big picture; nurture human nature; get savvy with systems; design to distribute; create to regenerate; be agnostic about growth.
- **Regenerative by design:** circular economy: durable, repairable, reusable products; Amsterdam aims to halve its use of new raw materials by **2030** and be fully circular by **2050**.
- **Distributive by design:** spread ownership of wealth, land, knowledge and money creation (co-operatives, open-source, community energy).
- **Commons:** Ostrom (Nobel, 2009) shows communities can govern shared resources without privatisation or state control.
- **Business:** Patagonia (Worn Wear repairs and resale; owned since 2022 by a trust and non-profit), B Corps, steward ownership.
- **Counter-argument:** markets and technology are powerful decarbonisation tools; solar costs fell about 90% in a decade.
- **Judgement:** the problem is not markets but assuming they deliver good outcomes without direction.

## Main point 3 — How far does it change practice? A critical view
- **Evidence of the challenge:** O'Neill et al. (*Nature Sustainability*, 2018) found **no country** meets its citizens' basic needs within a sustainable level of resource use; rich countries overshoot, poor ones fall short.
- **Strengths:** a simple visual that unites social and ecological goals; adopted by cities (Amsterdam, Brussels, Copenhagen) and used in teaching and some firms.
- **Weaknesses:** "growth agnosticism" pleases neither green-growth advocates nor degrowth scholars; it offers few concrete instruments; competitive and political pressure limits voluntary adoption; city adoption has been patchy in delivery.
- **What would make it real:** regulation, carbon pricing, new indicators, public investment and changed corporate purpose.
- **Judgement:** a paradigm shift in **what we ask**, still only a partial shift in **what we do**.

## Conclusion
- **Answer:** the Doughnut is a paradigm shift because it changes the question from "how much can we grow?" to "how can we thrive within limits?"
- **Assumptions overturned:** growth as progress, the economy as separate from nature, the self-correcting market.
- **Solutions:** regenerative and distributive design, new metrics, commons, purpose-led business.
- **Final line:** its success will depend less on the elegance of the drawing than on whether governments and firms build institutions that hold economies inside it.`,
      evidence: `!stat 7 of 9 | Planetary boundaries breached (Planetary Health Check, 2025)
!stat 12 | Dimensions of the social foundation
!stat 2020 | Amsterdam adopts the Doughnut
!stat 26% | Ireland's 2015 GDP "growth" from multinational asset moves
!stat 0 countries | Meet basic needs within planetary limits (O'Neill et al., 2018)
!stat 30 July | Earth Overshoot Day 2026 (Global Footprint Network)

#### Theories
- **Raworth (2012, 2017); Meadows et al. (1972); Daly; Rockström et al. (2009); Ostrom (1990); Kuhn (1962); Polanyi (1944) on the "embedded" economy.**
- **Stiglitz, Sen and Fitoussi (2009):** beyond GDP.

#### Exam hook
- "Can an economy be successful if it grows richer while becoming less socially and environmentally sustainable?"`,
    },
    /* ------------------------------------------------------------------ A2 */
    {
      id: 'a2',
      label: 'Question A2',
      section: 'Section A: Enacting Sustainable Development',
      title: 'A Minister for Agriculture: can we feed ourselves without devouring the planet?',
      tags: ['Role-play', 'Food systems', 'Ireland', 'Just transition'],
      paraphrased: true,
      prompt: `"Can we feed ourselves without devouring the planet?" Write a position statement as a national Minister for Agriculture, setting out the current state of the national agri-food industry, a vision for it, and how stakeholders should achieve it.`,
      plan: `## Introduction
- **Choose Ireland:** it gives you livestock, dairy exports, methane, water quality, land use and rural livelihoods.
- **Opening of the statement:** "Ireland's agri-food sector is central to our economy, our rural communities and our identity abroad. It also places real pressure on our climate, water and nature. Both facts are true, and our policy must respect both."
- **Define:** agri-food system (production, processing, distribution, consumption, waste); food security; regenerative agriculture; sustainable intensification; just transition.
- **Position:** Ireland should become a world leader in producing high-quality food within clear environmental limits, through lower-emission, more diverse and more resource-efficient farming, with costs shared fairly along the food chain.
- **Structure to signal:** where we are; where we want to be; how we get there.

## Main point 1 — Where we are: the current state of the sector
- **Economic weight:** agri-food exports of around **€17 billion** a year (Bord Bia); about 135,000 farms; the largest indigenous industry and a pillar of rural employment.
- **Model:** grass-based dairy and beef, with about **7 million** cattle; dairy expanded rapidly after EU milk quotas ended in 2015.
- **Climate:** agriculture is Ireland's largest source of emissions, roughly **38%** of the national total, mostly methane from cattle and nitrous oxide from fertiliser and soils. The legal target is a **25%** cut in the sector by 2030 (vs 2018).
- **Water:** nitrogen and phosphorus run-off is the main pressure on Irish water quality; the EU extended Ireland's **nitrates derogation** for three years from 1 January 2026.
- **Wider system:** the whole country is off track: the EPA projects at most a **25%** national cut by 2030 against a **51%** legal target.
- **Honest admission:** economic success has not meant environmental sustainability.

## Main point 2 — Where we want to be: the vision
- **Lower-emission production:** breeding for lower-methane animals, feed additives where proven (3-NOP reduces enteric methane by about **30%** in trials), better manure and slurry management, protected urea, clover and multi-species swards to cut synthetic nitrogen.
- **Precision agriculture:** soil testing and sensors to apply exactly what is needed.
- **Diversified land use:** tillage, horticulture, agroforestry, hedgerows, rewetted peatland (paludiculture), renewable energy, nature restoration under the EU Nature Restoration Law.
- **Absolute, not just per-unit, targets:** efficiency alone invites rebound if output keeps growing.
- **Global perspective:** food systems produce about **a third** of global emissions (Crippa et al., 2021); livestock uses about **83%** of farmland for **18%** of calories (Poore and Nemecek, 2018); about **670 million** people still face hunger (FAO).
- **Counter-argument:** cutting Irish output may shift production to less efficient producers abroad (carbon leakage).
- **Response:** Ireland's grass-based dairy is relatively efficient per litre, but total national emissions are what our targets and the atmosphere count.

## Main point 3 — How stakeholders get there: a just transition
- **Government:** stable long-term policy; pay farmers for ecosystem services (carbon, water, biodiversity); fund research (Teagasc) and advisory services; voluntary schemes to diversify or reduce herds; protect incomes through transition.
- **Farmers:** adopt nutrient management and low-emission practices; join agri-environment schemes; explore diversification.
- **Processors (Kerry, Tirlán, Dairygold, ABP):** measure and share supply-chain emissions; pay premiums for verified low-impact output; cut processing and transport emissions.
- **Retailers:** fair contracts; do not push all sustainability costs onto farmers.
- **Consumers:** reduce Ireland's roughly **750,000 tonnes** of annual food waste (EPA); seasonal and lower-impact choices where affordable.
- **Lesson from abroad:** the Netherlands' compulsory nitrogen cuts triggered farmer protests and helped a new farmers' party win the 2023 provincial elections. Voluntary, funded, local solutions are more durable.
- **Counter-argument:** consumer choice alone cannot transform a food system.

## Conclusion
- **Closing of the statement:** "We will judge our food system not only by the value of what it produces, but by what it leaves behind: clean water, living soils, a stable climate and viable farm families."
- **Commitments to name:** a funded transition plan, ecosystem-service payments, transparent annual measurement, and a seat at the table for farmers.
- **Final line:** we can feed ourselves without devouring the planet, but only if we stop treating food production and the ecosystems that make it possible as rivals.`,
      evidence: `!stat ~38% | Agriculture's share of Irish greenhouse-gas emissions (largest sector)
!stat 25% | Legal cut required in agricultural emissions by 2030 vs 2018
!stat ~€17bn | Irish agri-food exports a year (Bord Bia)
!stat ~7 million | Cattle in Ireland
!stat ~30% | Enteric methane cut from the 3-NOP feed additive in trials
!stat 83% / 18% | Livestock's share of farmland vs calories (Poore and Nemecek, 2018)
!stat ~⅓ | Food systems' share of global emissions (Crippa et al., 2021)

#### Model position-statement paragraph
> First, we must support farmers in reducing emissions and using resources better: better nutrient management, improved slurry handling, proven methane-reduction technologies, healthier soils and precision agriculture. Public funding and research must make these changes practical and affordable. Farmers should be rewarded for the public goods they provide, not asked to absorb their cost alone.

#### Concepts
- **Food security vs food sovereignty; regenerative agriculture; sustainable intensification; just transition (ILO, 2015); carbon leakage; rebound effect.**
- **Methane:** about **80 times** the warming power of CO2 over 20 years, but short-lived, so cuts work fast.

#### Pitfalls
- Write in role: first person, a minister's voice, concrete commitments.
- Cover all three parts the question asks for: current state, vision, stakeholders.`,
    },
    /* ------------------------------------------------------------------ A3 */
    {
      id: 'a3',
      label: 'Question A3',
      section: 'Section A: Enacting Sustainable Development',
      title: 'Health-harming industries used framing to delay change. Can framing catalyse it?',
      tags: ['Framing', 'Misinformation', 'Tobacco', 'Greenwashing'],
      paraphrased: true,
      prompt: `Industries have used framing to deflect, delay or disrupt transformative system change. Can framing be used positively to catalyse change? (Spend about one third of your answer on how framing has been used to obstruct change, and the rest on how it could be used positively.)`,
      plan: `## Introduction
- **Hook:** in 1969 a Brown & Williamson tobacco executive wrote: "Doubt is our product." Fifty years later, the *Lancet* series on the **commercial determinants of health** (2023) traced a large share of global deaths to the products and practices of four industries: tobacco, ultra-processed food, fossil fuels and alcohol.
- **Define framing:** selecting and emphasising some aspects of reality to promote a particular problem definition, cause, moral judgement and remedy (Entman, 1993).
- **Related:** agenda-setting; discourse; greenwashing; counter-framing; transformative framing.
- **Thesis:** harmful industries have used framing to manufacture doubt, individualise responsibility and exaggerate the costs of action. But framing is not inherently manipulative: used transparently, it can make systemic problems understandable, link them to people's everyday concerns and build coalitions for change. Positive framing only works if it is backed by real policy.
- **Proportions:** one third on obstruction, two thirds on positive framing, as the question requires.

## Main point 1 — How industries framed their way out of change (one third)
- **Manufacturing doubt:** Oreskes and Conway, *Merchants of Doubt* (2010): the same playbook ran from tobacco to acid rain, ozone and climate.
- **Exxon:** Supran, Rahmstorf and Oreskes (*Science*, 2023) found Exxon's own scientists' projections from 1977–2003 accurately predicted warming, while its public messaging stressed uncertainty.
- **Individualising responsibility:** BP's advertising popularised the personal "carbon footprint" in the mid-2000s; the packaging industry funded litter campaigns that framed plastic as a consumer problem; "drink responsibly" frames harm as individual misuse.
- **Economic fear:** regulation framed as job losses and higher prices.
- **Freedom and choice:** tobacco control framed as the "nanny state".
- **Ireland:** in 2025 the government deferred mandatory alcohol health-warning labels, due in May 2026, to 2028 after industry and trade pressure.
- **Theory:** Goffman's *Frame Analysis* (1974); Gramsci's hegemony: some ideas come to feel like common sense.
- **Fair point:** concerns about jobs and affordability can be legitimate; the problem is selective, misleading framing.

## Main point 2 — Positive framing: connecting change to what people already care about
- **Health:** climate action as cleaner air and fewer deaths now (the *Lancet* Countdown); Maibach et al. (2010) found a public-health frame increased support across political groups.
- **Security:** renewables as energy independence. After Russia's 2022 invasion and the 2026 Hormuz oil shock, the largest supply disruption in oil-market history (IEA), "home-grown power" became an argument conservatives also accept.
- **Jobs and place:** the US Inflation Reduction Act (2022) was framed as industrial policy and jobs, not climate.
- **Fairness:** intergenerational justice; young people's climate litigation (KlimaSeniorinnen, European Court of Human Rights, 2024).
- **Montreal Protocol (1987):** ozone loss framed as skin cancer, a personal and immediate risk; it has phased out about **99%** of ozone-depleting substances.
- **Hope over fear:** fear appeals can cause denial or fatalism (O'Neill and Nicholson-Cole, 2009); efficacy messages ("this works, here is what to do") motivate.
- **Lakoff (2004):** frames must connect to values; facts alone do not persuade.

## Main point 3 — Positive framing must change systems, not just attitudes
- **Framing plus structure:** narratives need regulation, investment, incentives and infrastructure behind them.
- **Food waste:** framed as lost money, households and firms act; framed as an environmental issue, it gains wider support; firms then change inventory and redistribution.
- **Inside organisations:** frame sustainability as a shared operational goal with measurable targets, not a CSR side project.
- **Counter-framing the 2026 backlash:** the EU called Omnibus I "simplification"; critics called it "deregulation". Whoever wins the frame shapes what seems possible.
- **Risks:** positive framing can become spin (greenwashing) if it hides trade-offs. The EU now bans unsubstantiated generic green claims from **27 September 2026**.
- **Judgement:** positive framing works when it is honest about costs, gives affected groups a voice and is tied to real change.

## Conclusion
- **Answer:** yes, framing can catalyse change, but it is a tool, not a virtue.
- **Contrast:** industries used frames to delay; reformers can use frames of health, security, jobs and fairness to accelerate.
- **Condition:** transparency and real policy behind the story.
- **Final line:** whoever controls the story influences which solutions look possible; the task is to tell a true story well.`,
      evidence: `!stat 1969 | "Doubt is our product" (Brown & Williamson memo)
!stat 1977–2003 | Exxon's internal projections accurately predicted warming (Supran et al., 2023)
!stat ~99% | Ozone-depleting substances phased out under the Montreal Protocol
!stat 27 Sep 2026 | EU ban on unsubstantiated generic green claims applies
!stat 2028 | New date for Ireland's alcohol health-warning labels (deferred from May 2026)

#### Theories
- **Goffman (1974); Entman (1993): four functions of a frame; Lakoff (2004); Gramsci (hegemony); Tversky and Kahneman (1981): framing effects.**
- **Oreskes and Conway (2010).**
- **Commercial determinants of health (Lancet, 2023).**

#### Examples
- **Tobacco, Exxon, BP carbon footprint, plastic litter campaigns, alcohol labelling in Ireland.**
- **Positive:** Montreal Protocol, energy security, Inflation Reduction Act, public-health climate frames.

#### Pitfalls
- Respect the proportions. Spending half the answer on tobacco loses marks.`,
    },
    /* ------------------------------------------------------------------ A4 */
    {
      id: 'a4',
      label: 'Question A4',
      section: 'Section A: Enacting Sustainable Development',
      title: 'Mitigation and adaptation: harmonious or not?',
      tags: ['Mitigation', 'Adaptation', 'Maladaptation', 'Just transition'],
      paraphrased: true,
      prompt: `Is the combination of climate mitigation and adaptation harmonious or disharmonious? Discuss win-wins and trade-offs for businesses, industries and national policies.`,
      plan: `## Introduction
- **Hook:** Copernicus confirmed that **2023–2025** was the first three-year period to average more than **1.5°C** above pre-industrial levels. In January 2025 **Storm Éowyn** left about **768,000** Irish homes and businesses without power, a reminder that adaptation is no longer optional.
- **Define:** **mitigation** reduces emissions or increases removals; **adaptation** adjusts systems to actual or expected impacts; **resilience**; **co-benefits**; **maladaptation** (action that increases vulnerability or shifts risk).
- **Thesis:** mitigation and adaptation are complementary but not automatically harmonious. Many investments do both, but some adaptation raises emissions, and both compete for money and land. Good strategy evaluates them together and avoids protecting one place or group by harming another.
- **Roadmap:** win-wins; trade-offs; national policy and fairness.

## Main point 1 — Win-wins for firms and nations
- **Building retrofits:** insulation cuts heating demand and emissions and keeps buildings cooler in heatwaves.
- **Nature-based solutions:** wetlands and peatlands store carbon and absorb floods; mangroves are estimated to prevent tens of billions of dollars of flood damage a year.
- **Urban trees:** shade, cooling and carbon.
- **Renewables:** cut emissions and exposure to fossil price shocks; distributed solar and batteries improve grid resilience.
- **Agriculture:** healthier soils hold water (drought resilience) and carbon.
- **Supply chains:** diversified, closer sourcing can lower climate risk and transport emissions.
- **Business example:** a food company investing in drip irrigation and regenerative practices cuts water risk and emissions.
- **IPCC (AR6, 2022):** "climate-resilient development" integrates both.

## Main point 2 — Trade-offs and maladaptation
- **Cooling:** air conditioning already uses about **10%** of global electricity (IEA), and the number of units could more than triple by 2050; leaking refrigerants are powerful greenhouse gases (addressed by the Kigali Amendment, 2016).
- **Hard flood defences:** concrete sea walls carry large embodied emissions and can push flooding elsewhere.
- **Desalination:** improves water security but is energy-intensive and produces brine.
- **Snow-making and indoor ski slopes, more cars for evacuation, backup diesel generators:** each protects someone while adding emissions.
- **Fossil resilience:** governments that respond to energy shocks with new fossil infrastructure gain short-term security but lock in emissions.
- **Maladaptation (Barnett and O'Neill, 2010):** increases emissions, burdens the vulnerable, has high opportunity cost, reduces incentives to adapt, or creates path dependency.
- **Counter-argument:** where lives are at risk now, adaptation must come first even if it emits.
- **Judgement:** trade-offs should be evaluated, not hidden; design adaptation to minimise emissions.

## Main point 3 — National policy, finance and fairness
- **Competing budgets:** Ireland must fund renewables, retrofits and transport while expanding flood relief (OPW schemes), grid resilience and heat planning.
- **Global justice:** UNEP's Adaptation Gap Report (2025) estimates developing countries need roughly **$310–365 billion** a year by 2035, many times current flows; COP30 agreed to triple adaptation finance by 2035, and COP31 drafts kept that goal but argued over the baseline.
- **Distribution:** low-income households are least able to insulate, cool or insure; carbon taxes can be regressive. Ireland ring-fences carbon-tax revenue for welfare, retrofits and farmers.
- **Insurance retreat:** as risks rise, cover becomes unaffordable, shifting costs to the state.
- **Judgement:** policy is durable only when it protects vulnerable groups and shares costs fairly.

## Conclusion
- **Answer:** largely complementary, sometimes conflicting; harmony must be designed.
- **Rule of thumb:** prefer measures that do both (retrofits, wetlands, renewables); price and limit those that trade one for the other.
- **Final line:** a country can adapt to climate change while making it worse; integrated planning is how it avoids doing so.`,
      evidence: `!stat >1.5°C | Average warming over 2023–2025, the first three-year period above the line (Copernicus)
!stat ~768,000 | Irish customers left without power by Storm Éowyn (January 2025)
!stat ~10% | Global electricity used for air conditioning (IEA)
!stat $310–365bn | Annual adaptation need of developing countries by 2035 (UNEP, 2025)
!stat 3× by 2035 | Adaptation finance goal agreed at COP30

#### Theories and frameworks
- **IPCC AR6 (2022):** climate-resilient development.
- **Barnett and O'Neill (2010):** five pathways to maladaptation.
- **Co-benefits; just transition; common but differentiated responsibilities.**

#### Examples
- **Ireland:** Storm Éowyn; OPW flood relief; retrofit grants (SEAI); carbon tax revenue recycling.
- **Global:** cooling demand; Kigali Amendment; desalination in the Gulf; Dutch "Room for the River" (giving rivers space instead of higher dikes).`,
    },
    /* ------------------------------------------------------------------ B1 */
    {
      id: 'b1',
      label: 'Question B1',
      section: 'Section B: Fundamentals of Management and Organisation',
      title: 'Individual and group motivation, conflict between them, and team purpose for green behaviour',
      tags: ['Motivation', 'Teams', 'SDT', 'Social identity'],
      paraphrased: true,
      prompt: `Drawing on two theoretical lenses from motivation or teamwork theory, explain how individual and group motivation operate and interact. Give real-world examples of conflict between them, and discuss how a shared team purpose can encourage environmentally sustainable behaviour.`,
      plan: `## Introduction
- **Hook:** Gallup's 2026 report found only **20%** of employees worldwide engaged at work in 2025, costing about **$10 trillion** in lost productivity. Managers explain much of the variation between teams.
- **Define:** motivation is the direction, intensity and persistence of effort; **intrinsic** (interest, meaning) vs **extrinsic** (rewards, sanctions); **collective motivation** is a group's shared willingness to pursue a goal.
- **Two lenses:** Self-Determination Theory (Deci and Ryan, 1985) for the individual; Social Identity Theory (Tajfel and Turner, 1979) for the group. Goal-setting (Locke and Latham) as a bridge.
- **Thesis:** individual and group motivation reinforce each other when personal needs are met through belonging to a group with a meaningful purpose, and clash when incentives reward individuals at the group's expense. A genuine, shared team purpose can make sustainable behaviour part of "who we are", but only with autonomy and resources.
- **Roadmap:** how each lens works; where they conflict; applying them to sustainability.

## Main point 1 — How individual and group motivation operate
- **Self-Determination Theory:** three needs: **autonomy**, **competence**, **relatedness**. Meet them and intrinsic motivation grows.
  - **Overjustification:** Deci, Koestner and Ryan's meta-analysis (1999) of **128** studies found expected tangible rewards undermined intrinsic motivation for interesting tasks.
- **Social Identity Theory:** people take part of their self-concept from groups, so group success feels like personal success; this drives cooperation, loyalty and shared norms, but also conformity and in-group bias.
- **Goal-setting (Locke and Latham, 1990):** specific, challenging goals with feedback raise performance; team goals coordinate effort.
- **Interaction:** relatedness (SDT) is satisfied through group identity (SIT); a team that grants autonomy and builds competence also builds identity.
- **Other lenses you can swap in:** Maslow, Herzberg's two factors, Vroom's expectancy theory, Hackman and Oldham's job characteristics model.

## Main point 2 — Where individual and group motivation conflict
- **Commission-only sales teams:** colleagues compete for customers and hoard information.
- **Forced ranking:** Microsoft's "stack ranking" pitted team members against each other and was abandoned in 2013; critics blamed it for a culture of internal rivalry.
- **Wells Fargo:** individual cross-selling targets led staff to open about **3.5 million** unauthorised accounts; personal survival trumped collective integrity.
- **Social loafing:** in group assignments some maximise grades, others minimise effort.
- **Strong identity can backfire:** groupthink, exclusion of outsiders, or pressure to overwork for "the mission" (purpose exploited).
- **Counter-argument:** individual competition can raise effort and accountability.
- **Judgement:** balance individual rewards with team goals; reward cooperation, not just output.

## Main point 3 — Shared purpose and environmentally sustainable behaviour
- **SDT applied:**
  - **Autonomy:** let teams propose and own green initiatives, not just obey rules.
  - **Competence:** train staff in energy, waste and procurement choices; show progress data.
  - **Relatedness:** team challenges and recognition.
- **SIT applied:** make environmental responsibility part of what it means to belong ("we are the team that…").
- **Social norms work:** Opower's home energy reports, which compared households with neighbours, cut energy use by about **2%** on average (Allcott, 2011), cheaply and at scale.
- **Examples:** Patagonia's purpose ("we're in business to save our home planet"); Interface staff driving Mission Zero; office teams monitoring energy dashboards; cycle-to-work and car-sharing challenges that are cooperative, not purely competitive.
- **Counter-argument:** sustainability should not depend on enthusiasm; it needs infrastructure, budgets and policy from management.
- **Judgement:** shared purpose motivates when it is genuine, inclusive and backed by real authority and resources.

## Conclusion
- **Answer:** individual and group motivation interact through needs and identity; they conflict when incentives pit people against the team.
- **Design principle:** align individual needs (autonomy, competence, relatedness) with a collective identity and goal.
- **Final line:** people care about collective goals when those goals become part of who they are, and when management gives them the means to act.`,
      evidence: `!stat 20% | Global employee engagement in 2025 (Gallup, 2026)
!stat ~$10tn | Annual cost of low engagement (Gallup)
!stat 128 studies | Deci, Koestner and Ryan's (1999) meta-analysis on rewards and intrinsic motivation
!stat ~2% | Energy saved by social-comparison reports (Opower; Allcott, 2011)
!stat ~3.5 million | Unauthorised Wells Fargo accounts driven by individual targets

#### Theories
- **Deci and Ryan (1985):** SDT.
- **Tajfel and Turner (1979):** SIT.
- **Locke and Latham (1990):** goal-setting.
- **Maslow (1943); Herzberg (1959); Vroom (1964); Hackman and Oldham (1976).**
- **Latané et al. (1979):** social loafing.

#### Pitfalls
- The question has three parts: explain the two lenses and how they interact; give real conflicts; discuss sustainability. Do all three.`,
    },
    /* ------------------------------------------------------------------ B2 */
    {
      id: 'b2',
      label: 'Question B2',
      section: 'Section B: Fundamentals of Management and Organisation',
      title: 'Is Five Forces outdated for sustainability? Contrast and adapt it',
      tags: ['Strategy', 'Porter', 'NRBV', 'Stakeholders'],
      paraphrased: true,
      prompt: `Porter's Five Forces is increasingly criticised as outdated in the context of ecological sustainability. Assess its relevance, contrast it with another strategic framework, and discuss whether it can be adapted.`,
      plan: `## Introduction
- **Hook:** more than **17 million** electric cars were sold worldwide in 2024, over **20%** of all new cars (IEA). Battery makers such as CATL gained bargaining power, Tesla and BYD entered as new players, and carmakers' rivalry shifted to battery range and emissions. Environmental change is redrawing industry structure.
- **Define:** Five Forces (Porter, 1979) analyses competitive pressure and industry profitability; the **natural-resource-based view** (Hart, 1995) argues environmental capabilities can create advantage; externality; stakeholder pressure; dynamic capabilities.
- **Thesis:** Five Forces remains useful for understanding how environmental change reshapes competition, but it is insufficient alone because it measures success in profit and treats ecological harm as external. Hart's NRBV better explains environmental strategy. Five Forces can be adapted, but is best used alongside NRBV and stakeholder theory.
- **Roadmap:** relevance; the contrast with NRBV; adaptation.

## Main point 1 — Five Forces is still relevant
- **Environmental pressures act through all five forces:**
  - **Entrants:** regulation and green capital requirements raise barriers; new green challengers enter (Tesla, BYD).
  - **Suppliers:** scarce critical minerals and batteries increase supplier power.
  - **Buyers:** customers and corporate purchasers demand low-carbon products and data.
  - **Substitutes:** heat pumps for gas boilers, rail for short flights, plant proteins for meat.
  - **Rivalry:** firms compete on emissions, efficiency and credibility.
- **Judgement:** it is a good tool for seeing how sustainability changes competitive dynamics.

## Main point 2 — Why it is insufficient, and what the NRBV adds
- **Limits of Five Forces:** it asks where profit can be captured, not what damage is done; biodiversity loss, water pollution, carbon and labour conditions sit outside the model.
- **Fast fashion:** the forces reward low prices, fast cycles and volume; the framework explains the incentives but cannot judge whether the outcomes are sustainable.
- **Fossil fuels:** an oil major can have a strong position while its product drives the climate crisis.
- **Hart's NRBV (1995):**
  - **Pollution prevention:** cut waste and emissions at source; lowers costs (3M's Pollution Prevention Pays).
  - **Product stewardship:** reduce life-cycle impacts and bring stakeholders into design (Patagonia's Worn Wear; Interface).
  - **Sustainable development:** build capabilities for long-term transformation (Ørsted moved from roughly **85%** fossil-based generation in 2009 to mostly renewable within about a decade).
- **Contrast:** Porter is outside-in (industry structure); NRBV is inside-out (capabilities shaped by the natural environment).
- **Critique of NRBV:** it still frames sustainability as a route to advantage; some necessary action does not pay.

## Main point 3 — Can Five Forces be adapted?
- **Yes, in five ways:**
  - Entrants: regulation, green technology and sustainable-finance conditions as barriers.
  - Suppliers: resource scarcity, supplier emissions, ethical sourcing.
  - Buyers: demand for transparency and low-carbon products; corporate Scope 3 targets push requirements down chains.
  - Substitutes: circular and service-based models (renting, repair).
  - Rivalry: competition on emissions and credibility; greenwashing risk (EU rules from **27 September 2026**).
- **Extra considerations:** regulators, communities, NGOs, investors, physical and transition climate risks (TCFD).
- **Porter and Kramer's shared value (2011)** is Porter's own attempt to integrate society.
- **Counter-argument:** adding too much destroys the model's simplicity.
- **Judgement:** keep Five Forces focused and pair it with NRBV, stakeholder theory and life-cycle assessment.

## Conclusion
- **Answer:** not outdated, but no longer sufficient alone.
- **Contrast:** Porter explains the competitive arena; Hart explains how firms build advantage by working within ecological limits.
- **Final line:** a business can be strategically successful while environmentally destructive; managers need frameworks that see both the advantage and its cost.`,
      evidence: `!stat 17m+ | Electric cars sold in 2024, over 20% of new cars (IEA)
!stat 1995 | Hart's natural-resource-based view
!stat ~85% | Ørsted's (then DONG Energy's) fossil-based generation share in 2009
!stat 2022 | Patagonia transferred to a trust and non-profit; profits not reinvested go to climate work

#### Adapted Five Forces

| Force | Sustainability adaptation |
| --- | --- |
| New entrants | Regulation, green technology, sustainable-finance conditions |
| Suppliers | Resource scarcity, supplier emissions, ethical sourcing |
| Buyers | Demand for low-carbon products and transparency |
| Substitutes | Low-carbon, circular and service-based alternatives |
| Rivalry | Competition on emissions and credibility |

#### Theories
- **Porter (1979, 2008); Porter and Kramer (2006, 2011); Hart (1995); Barney (1991); Freeman (1984); Teece et al. (1997).**

#### Exam hook
- "Can a business be strategically successful while being environmentally destructive?"`,
    },
    /* ------------------------------------------------------------------ B3 */
    {
      id: 'b3',
      label: 'Question B3',
      section: 'Section B: Fundamentals of Management and Organisation',
      title: 'Differentiation vs integration as a firm scales',
      tags: ['Structure', 'Lawrence and Lorsch', 'Growth', 'Contingency'],
      paraphrased: true,
      prompt: `Explain the trade-offs between differentiation and integration in organisational design. Using a rapidly scaling organisation, analyse how and why the optimal structure changes over time and the managerial challenges associated with each transition.`,
      plan: `## Introduction
- **Hook:** Amazon's "two-pizza teams" rule (no team bigger than two pizzas can feed) is a deliberate answer to a scaling problem: how to stay fast while growing to over a million employees.
- **Define:** **differentiation** is dividing an organisation into specialised units with their own goals, time horizons and styles; **integration** is coordinating those units towards shared goals (Lawrence and Lorsch, 1967). Also: functional, divisional, matrix and network structures; span of control.
- **Thesis:** design is a balance: more differentiation brings expertise but silos; more integration brings coordination but bureaucracy. As a firm scales, the right balance shifts, typically from simple to functional to divisional or matrix, and each transition creates predictable crises in authority, communication and culture.
- **Roadmap:** the trade-off; stages of growth; managing transitions.

## Main point 1 — The trade-off (Lawrence and Lorsch; contingency theory)
- **Lawrence and Lorsch (1967):** studied firms in plastics, food and containers; the best performers in uncertain environments had **high differentiation and high integration** together.
- **Too much differentiation:** silos, local goals, conflict (marketing promises what engineering cannot deliver).
- **Too much integration:** slow decisions, committees, red tape.
- **Integration mechanisms (Galbraith, 1973):** hierarchy, rules, plans, liaison roles, task forces, integrating managers, matrix.
- **Burns and Stalker (1961):** mechanistic structures suit stable settings; organic ones suit change.
- **Contingency:** no one best structure; fit depends on size, environment, strategy and technology.

## Main point 2 — How the optimal structure changes as a firm scales
- **Greiner's growth model (1972):** each stage of growth ends in a crisis that forces a new structure: creativity, then a crisis of leadership; direction, then a crisis of autonomy; delegation, then a crisis of control; coordination, then a crisis of red tape; collaboration.
- **Start-up (simple structure):** founder-centred, flexible, fast. Problem: the founder becomes a bottleneck; roles blur beyond about 20–50 people.
- **Functional structure:** finance, marketing, engineering, operations, HR. Expertise and economies of scale; problem: silos. Shopify built specialised engineering, product, sales and support functions as it grew.
- **Divisional structure:** by product, market or region (Amazon retail, AWS, advertising). Responsiveness and clear accountability; problem: duplication and inter-division rivalry.
- **Matrix and networks:** functional and product lines at once; collaboration but dual reporting and unclear accountability.
- **Agile models:** Spotify's squads, tribes, chapters and guilds aimed to keep start-up speed at scale, though Spotify itself has said the model was never followed as rigidly as outsiders thought.
- **Dunbar's number (about 150):** W. L. Gore historically capped plants at around **150–200** people to keep informal coordination.

## Main point 3 — The managerial challenges of each transition
- **Letting go:** founders must delegate (Greiner's crisis of leadership).
- **Decision rights:** who decides what, and how disagreements between units are settled.
- **Culture:** growth dilutes shared identity; values must be written down and modelled (Schein).
- **Metrics:** unit targets encourage local optimisation; add shared goals.
- **Hiring speed:** new managers may not share norms.
- **Experiments that struggled:** after Zappos moved to holacracy (from 2014), about one in seven staff took a buy-out rather than work under it (2015).
- **Sustainability twist:** a separate sustainability team is differentiation; integration requires shared KPIs, cross-functional teams and executive pay linked to targets.
- **Judgement:** formalise enough to coordinate, not so much that you kill the flexibility that created growth.

## Conclusion
- **Answer:** the optimal structure changes as complexity grows; differentiation must rise with specialisation, and integration mechanisms must rise with it.
- **Each transition is a managerial challenge,** not just a new organisation chart.
- **Final line:** the structure that made a company successful is often the one that later prevents it from growing; good managers redesign before the crisis, not after it.`,
      evidence: `!stat 1967 | Lawrence and Lorsch, *Organization and Environment*
!stat 5 phases | Greiner's model of organisational growth (1972)
!stat ~150 | Dunbar's number; W. L. Gore's plant-size cap
!stat ~1 in 7 | Zappos staff who took a buy-out rather than adopt holacracy (2015)

#### Theories
- **Lawrence and Lorsch (1967); Burns and Stalker (1961); Galbraith (1973); Greiner (1972); Mintzberg (1979): five configurations; Weber; contingency theory; Chandler (1962): structure follows strategy.**

#### Examples
- **Amazon:** two-pizza teams; divisions for retail, AWS and ads.
- **Shopify:** functional specialisation through growth.
- **Spotify:** squads and tribes.
- **Zappos:** holacracy.

#### Exam hook
- "When does the structure that made a company successful become the structure that prevents it from growing?"`,
    },
    /* ------------------------------------------------------------------ B4 */
    {
      id: 'b4',
      label: 'Question B4',
      section: 'Section B: Fundamentals of Management and Organisation',
      title: 'Internationalisation, global value chains and sustainability',
      tags: ['International business', 'Value chains', 'Rana Plaza', 'Uppsala and OLI'],
      paraphrased: true,
      prompt: `Internationalisation exposes firms to diverse institutional, cultural and environmental contexts. Explain how firms expand internationally and configure global operations. Evaluate the sustainability opportunities and risks, using an example from the fashion, technology or food industry, and discuss how firms can redesign their value chains.`,
      plan: `## Introduction
- **Hook:** on **24 April 2013** the **Rana Plaza** building in Bangladesh collapsed, killing **1,134** garment workers who made clothes for Western brands. Cracks had been seen the day before.
- **Define:** internationalisation; global value chain (the cross-border network of design, production, distribution and sales); FDI; institutional distance; global integration vs local responsiveness.
- **Thesis:** firms internationalise to reach markets, inputs, skills and scale, but this exposes them to different laws, cultures and environmental conditions. Global value chains create economic opportunity yet can hide environmental damage and poor labour conditions. Firms must redesign chains around transparency, supplier partnership and life-cycle impact, not just the lowest cost.
- **Example industry:** fashion (with notes on tech and food).
- **Roadmap:** how firms expand; how they configure operations; risks, opportunities and redesign.

## Main point 1 — How firms expand internationally
- **Motives:** markets, resources, efficiency, strategic assets (Dunning).
- **Uppsala model (Johanson and Vahlne, 1977; revised 2009):** gradual commitment as knowledge grows: exporting, then sales subsidiaries, then production; starting with "psychically close" markets. The 2009 revision stresses networks.
- **Born globals (Oviatt and McDougall, 1994; Knight and Cavusgil, 1996):** digital firms internationalise from day one, challenging Uppsala.
- **Dunning's OLI (eclectic paradigm):** firms invest abroad when they have **Ownership** advantages (brand, technology), a **Location** advantage (labour, resources, markets) and an **Internalisation** advantage (better to control than contract).
- **Entry modes:** exporting, licensing and franchising, joint ventures, wholly owned subsidiaries.
- **Ghemawat's CAGE framework (2001):** cultural, administrative, geographic and economic distance.

## Main point 2 — Configuring global operations: integration vs responsiveness
- **Bartlett and Ghoshal (1989):** international, multidomestic, global and transnational strategies.
- **Global integration:** standard products and policies for scale and control (one supplier code worldwide).
- **Local responsiveness:** adapt to local laws, culture, water stress and energy mix.
- **Fashion configuration:** design in Europe or the US; fibres from China, India or the US; dyeing and assembly in Bangladesh, Vietnam, China and India; retail worldwide.
- **Sustainability risks:** fashion accounts for an estimated **2–8%** of global emissions (UNEP); dyeing is a major source of industrial water pollution; Shein-style ultra-fast fashion releases thousands of new items a day.
- **Social risks:** low wages, excessive hours, unsafe buildings, as at Rana Plaza.
- **Tech:** advanced chips are concentrated in Taiwan; export controls and the 2026 Hormuz shock show geopolitical fragility.
- **Food:** Côte d'Ivoire and Ghana grow about **60%** of the world's cocoa; climate-hit harvests pushed cocoa prices above **$12,000 a tonne** in late 2024; child labour persists in cocoa farming.
- **Opportunities:** jobs and industrial upgrading in producing countries, technology transfer, diversified supply, scale for green technology.

## Main point 3 — Redesigning value chains for sustainability
- **Traceability:** map tiers 2 and 3, not just direct suppliers.
- **Binding standards:** the **Bangladesh Accord** (2013), signed by **200+** brands, created independent inspections and legally binding commitments; factory safety improved markedly.
- **Purchasing practices:** stable orders, fair prices and long-term contracts so suppliers can invest; codes of conduct fail if buyers squeeze prices.
- **Life-cycle assessment and Scope 3 targets.**
- **Circularity:** durable design, repair, resale (Patagonia Worn Wear), take-back.
- **Diversification and nearshoring** for resilience.
- **Worker voice:** grievance channels, unions.
- **Regulation:** EU due diligence (CSDDD), now narrowed by **Omnibus I** to firms with **5,000+** employees and **€1.5bn+** turnover from 2029; Germany's Supply Chain Act; the EU Forced Labour Regulation.
- **Counter-argument:** costs rise, monitoring thousands of suppliers is hard, and withdrawal can harm workers.
- **Judgement:** responsibility cannot stop at the factory gate of the brand's own offices.

## Conclusion
- **Answer:** firms expand gradually or rapidly to exploit ownership and location advantages, configuring between global integration and local responsiveness.
- **Sustainability:** global chains can spread opportunity or export harm; the outcome depends on purchasing practices, transparency and accountability.
- **Final line:** a company cannot claim to be sustainable if it outsources its environmental and social costs to another country.`,
      evidence: `!stat 1,134 | Deaths at Rana Plaza, 24 April 2013
!stat 200+ | Brands that signed the Bangladesh Accord (2013)
!stat 2–8% | Fashion's estimated share of global emissions (UNEP)
!stat ~60% | World cocoa from Côte d'Ivoire and Ghana
!stat 5,000+ / €1.5bn | New CSDDD thresholds after Omnibus I (2026)

#### Theories
- **Johanson and Vahlne (1977, 2009); Dunning (OLI); Oviatt and McDougall (1994); Bartlett and Ghoshal (1989); Ghemawat (2001); Kostova (1999): institutional distance; Gereffi on global value chains.**

#### Exam hook
- "Can a company claim to be sustainable if it outsources its environmental and social costs to another country?"`,
    },
  ],
};
