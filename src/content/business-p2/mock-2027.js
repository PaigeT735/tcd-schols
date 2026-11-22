export default {
  id: 'mock-2027',
  label: 'Mock 2027',
  kind: 'mock',
  title: 'Predicted mock paper, January 2027',
  summary: `Eight questions in the January 2026 format, built on the themes the course covers but the papers have not yet examined: **systems, worldviews, leadership and technology**, plus the reliable returners (framing, role-play, teams, strategy). Practise it **timed**: 2 h 15 min, two from each section, about 33 minutes per answer.

These are predictions, not leaks. The depth behind each plan is in the matching section of the **Paper 2 Mock Exam** tab.`,
  meta: [['Paper', 'XSCH3460 · Business Paper 2 (predicted)'], ['Answer', 'Two from A, two from B'], ['Materials', 'None']],
  answer: 'answer two from each section',
  sectionNotes: {
    'Section A: Enacting Sustainable Development': 'Predicted from course themes 2 and 3 (never examined) and the 2026 genres.',
    'Section B: Fundamentals of Management and Organisation': 'Predicted from the learning outcomes 2026 did not use and the examiner’s research.',
  },
  questions: [
    /* ------------------------------------------------------------------ A1 */
    {
      id: 'a1',
      label: 'Question A1',
      section: 'Section A: Enacting Sustainable Development',
      title: 'Leverage points: why do sustainability policies target the weakest ones?',
      tags: ['Systems', 'Meadows', 'Feedback loops', 'Transport'],
      prompt: `Systems thinkers argue that sustainability problems persist because we intervene at the wrong "leverage points". Using one sustainability challenge as an example, (i) map the main feedback loops that sustain the problem, and (ii) identify where an intervention would have the greatest effect, explaining why policies so often target weaker leverage points.`,
      plan: `## Introduction
- **Hook:** Ireland's transport emissions are only slightly lower than in 2018 despite EV grants, and most Irish commuters still travel by car. Subsidising cleaner cars changes a parameter; it does not change why people need cars.
- **Define:** a **system** is a set of elements connected by feedback towards a purpose; **reinforcing loops** amplify change; **balancing loops** resist it; **delays** cause overshoot; a **leverage point** is where a small change produces a large shift (Meadows, 1999).
- **Meadows's hierarchy (weakest to strongest):** parameters (taxes, subsidies), buffers, structure, delays, balancing and reinforcing loops, information flows, rules, self-organisation, **goals**, **paradigms**, the power to transcend paradigms.
- **Example:** car dependence in Ireland.
- **Thesis:** car dependence is locked in by reinforcing loops of sprawl and road-building; the strongest levers are rules, goals and paradigms, but policy targets parameters because they are visible, quick, measurable and politically safe.

## Main point 1 — Mapping the loops (part i)
- **R1: sprawl loop.** Car ownership makes low-density housing viable; low density makes public transport unviable; that increases car dependence.
- **R2: induced demand.** Congestion leads to new roads; new roads make driving easier; more driving brings congestion back (Duranton and Turner, 2011: vehicle-kilometres rise roughly one-for-one with new urban road capacity).
- **R3: public-transport death spiral.** Low ridership leads to cuts, worse service and lower ridership.
- **B1: congestion** limits driving temporarily, until R2 restores it.
- **Delays:** planning decisions lock in land use for 50+ years.
- **Rebound:** cheaper-to-run EVs can increase kilometres driven.
- **Wicked problem (Rittel and Webber, 1973):** housing, jobs, transport and climate are entangled.

## Main point 2 — Where intervention has the greatest effect (part ii)
- **Parameters (weak):** fuel duties, EV grants. Useful but slow and offset by rebound.
- **Information flows (stronger):** showing people the true cost and time of car trips; real-time public-transport data.
- **Rules (strong):** abolish parking minimums, zone for density near rail, reallocate road space to buses and bikes (Dublin's BusConnects corridors).
- **Goals (very strong):** plan for **access** (can people reach jobs and services?) rather than traffic flow; Paris's "15-minute city".
- **Paradigm (strongest):** mobility as a service and a public good, not private ownership; streets as places.
- **Positive tipping points (Lenton et al.):** once enough people cycle or use transit, safety and service improve, reinforcing the shift (Copenhagen; Seville built a cycle network quickly and saw cycling multiply).

## Main point 3 — Why policies target weak levers
- **Visibility and measurability:** a grant has a number and a ribbon to cut; a paradigm shift does not.
- **Political cost:** rules and goals create losers now (motorists, landowners); benefits arrive later and are diffuse.
- **Short-termism and delays:** electoral cycles are shorter than system delays.
- **Siloed institutions:** transport, housing and climate sit in different departments (too much differentiation).
- **Framing:** "war on motorists" frames block road-space reallocation.
- **Meadows's own warning:** people often push leverage points in the wrong direction.
- **Counter-argument:** parameter changes can tip systems when large enough (carbon prices; Norway's EV tax exemptions pushed EVs to over **80%** of new cars).
- **Judgement:** parameters work best as part of a package that changes rules and goals.

## Conclusion
- **Answer:** car dependence is held in place by reinforcing loops; the biggest gains come from changing rules, goals and the paradigm of mobility.
- **Why we don't:** weak levers are easier to see, measure and sell.
- **Final line:** sustainability policy fails less from lack of effort than from pulling the levers nearest to hand.`,
      evidence: `!stat 12 | Meadows's leverage points (1999), from parameters to paradigms
!stat ~1:1 | Rise in urban driving per new road capacity (Duranton and Turner, 2011)
!stat 80%+ | Electric share of new cars in Norway, after decades of tax incentives
!stat 51% | Ireland's legal emissions-cut target for 2030; EPA projects at most 25%

#### Alternative examples for the same plan
- **Fast fashion:** R loop of cheaper clothes, more purchases, more trend cycles; leverage at rules (extended producer responsibility, France's anti-waste law) and goals (durability).
- **Irish agriculture and water:** milk price signals drive herd growth; nitrogen loads rise; leverage at rules (nitrates limits) and paradigm (farmers paid for water quality).
- **Data centres:** cheaper compute drives demand; leverage at rules (grid connection conditions requiring on-site renewables).

See Mock Exam section 2 for the full systems toolkit.`,
    },
    /* ------------------------------------------------------------------ A2 */
    {
      id: 'a2',
      label: 'Question A2',
      section: 'Section A: Enacting Sustainable Development',
      title: 'Green growth or degrowth: which worldview is more just?',
      tags: ['Worldviews', 'Justice', 'Degrowth', 'Decoupling'],
      prompt: `"Green growth" and "degrowth" are often presented as rival responses to the ecological crisis. Set out the worldview and values that underpin each. Which offers a more just path to sustainable development? Refer to the interests of at least two groups who would gain or lose under each.`,
      plan: `## Introduction
- **Hook:** the richest **1%** of humanity produced about as much carbon as the poorest **two-thirds** in 2019 (Oxfam, 2023). Any answer to the ecological crisis is also an answer about who pays.
- **Define:** **green growth** (OECD, 2011; EU Green Deal, 2019): continued GDP growth decoupled from environmental harm through technology, markets and investment. **Degrowth** (Latouche, Kallis, Hickel): a planned, democratic reduction of material and energy throughput in rich countries, prioritising wellbeing and equity.
- **Sustainable development (Brundtland, 1987):** meeting present needs without compromising future generations.
- **Thesis:** green growth is more politically feasible but rests on decoupling evidence that is too weak and too slow; degrowth is more consistent with planetary limits but risks harming the vulnerable if unmanaged. The most just path is **post-growth for rich economies and growth for the poorest**, with strong redistribution.
- **Groups:** workers in carbon-intensive industries; the Global South; future generations.

## Main point 1 — Green growth: worldview, values and who gains or loses
- **Worldview:** ecological modernisation and weak sustainability; human-made capital can substitute for natural capital (Solow); technology and markets solve scarcity (Dryzek's "Promethean" and "ecological modernisation" discourses).
- **Values:** prosperity, innovation, consumer freedom, jobs.
- **Evidence for:** some countries have absolutely decoupled CO2 from GDP; solar costs fell about 90% in a decade; EVs passed **20%** of global car sales in 2024.
- **Evidence against:** Haberl et al. (2020): absolute decoupling rare; Vogel and Hickel (2023): decoupling rich countries would need about **220 years** to cut emissions 95%; material use still rising.
- **Gains:** workers in new green industries; investors; developing countries that receive technology.
- **Loses:** future generations if decoupling is too slow; communities near mines for lithium and copper.

## Main point 2 — Degrowth: worldview, values and who gains or loses
- **Worldview:** strong sustainability (natural capital is not substitutable); the economy is inside the biosphere (Daly; Georgescu-Roegen); wellbeing depends on needs, not GDP (Jackson, 2009; Raworth, 2017).
- **Values:** sufficiency, equity, care, democracy, conviviality.
- **Proposals:** shorter working weeks, universal basic services, job guarantees, caps on luxury emissions, wealth taxes.
- **Gains:** future generations; Global South (ecological space freed); low-income groups through redistribution.
- **Loses:** workers in high-throughput sectors without a guarantee; pension funds and growth-dependent public finances.
- **Critiques:** politically unpopular; recession without a plan causes unemployment; may lock poor countries out of development (most degrowth scholars exempt them).

## Main point 3 — Which is more just?
- **Distributive justice:** green growth leaves existing inequality largely intact; degrowth puts redistribution at its centre.
- **Intergenerational justice:** green growth gambles on future technology; degrowth reduces risk now.
- **Procedural and recognition justice (Schlosberg):** who decides? Just-transition mechanisms (ILO, 2015) matter more than the label.
- **Global justice:** common but differentiated responsibilities (UNFCCC, 1992): rich countries should reduce throughput so poorer ones can grow.
- **A middle path:** "a-growth" (van den Bergh): stop treating GDP as the goal; post-growth policies in rich countries; well-being budgets (New Zealand, 2019; Ireland's Well-being Framework).
- **Judgement:** degrowth is more consistent with justice in principle, but only with a just-transition package; green growth is more feasible but unjust if it fails.

## Conclusion
- **Answer:** neither alone; the most just path is green investment plus post-growth goals for rich economies and redistribution.
- **Final line:** the real choice is not growth against no growth, but whether we let GDP or human wellbeing within planetary limits be the measure of success.`,
      evidence: `!stat 1% ≈ 66% | Richest 1%'s emissions equal the poorest two-thirds' (Oxfam, 2023)
!stat ~220 years | Time decoupling rich countries would need to cut emissions 95% (Vogel and Hickel, 2023)
!stat 835 studies | Reviewed by Haberl et al. (2020): absolute decoupling rare
!stat 1987 | Brundtland definition of sustainable development

See Mock Exam section 3 for the full worldviews and justice toolkit.`,
    },
    /* ------------------------------------------------------------------ A3 */
    {
      id: 'a3',
      label: 'Question A3',
      section: 'Section A: Enacting Sustainable Development',
      title: '"Simplification": framing the EU rollback, and whether voluntary action is enough',
      tags: ['Framing', 'Omnibus I', 'Regulation', 'Voluntary action'],
      prompt: `In 2026 the European Union significantly reduced its corporate sustainability reporting and due-diligence requirements, describing the change as "simplification". Spend about one third of your answer analysing how this change was framed, and the rest evaluating whether voluntary approaches can deliver what mandatory rules were designed to achieve.`,
      plan: `## Introduction
- **Hook:** on **24 February 2026** the EU Council gave final approval to the **Omnibus I** Directive. The CSRD now applies only to firms with more than **1,000 employees and €450 million** turnover, and the CSDDD only to firms with more than **5,000 employees and €1.5 billion**, from July **2029**. Most companies previously in scope are now out.
- **Define:** framing (Entman, 1993); mandatory disclosure and due diligence; voluntary initiatives (CDP, SBTi, UN Global Compact).
- **Thesis:** the change was framed as **"simplification" and "competitiveness"**, which made deregulation sound like tidying up. Voluntary approaches can complement but not replace mandatory rules, because they suffer from selection bias, inconsistent data and no enforcement.
- **Proportion:** one third on framing, two thirds on voluntary vs mandatory.

## Main point 1 — How the change was framed (one third)
- **The official frame:** "simplification", "reducing red tape", "competitiveness" (following the 2024 Draghi report on EU competitiveness).
- **What the frame hides:** reduced transparency, fewer firms accountable for supply-chain human rights and climate plans.
- **The counter-frame:** NGOs and many investors called it "deregulation" and a rollback of the Green Deal; the Business & Human Rights Resource Centre noted the final cuts went further than the Commission proposed.
- **Entman's functions:** problem = burden on business; cause = complex EU rules; moral judgement = red tape harms jobs; remedy = cut rules.
- **Context:** US anti-ESG politics; trade tension; the 2026 energy shock made "competitiveness" a stronger frame.
- **Fair point:** reporting costs were real; early ESRS had over 1,000 data points.

## Main point 2 — What voluntary approaches can do
- **Strengths:** flexibility, innovation, leaders move faster than the law.
- **Evidence:** thousands of companies have emissions targets validated by the Science Based Targets initiative; CDP collects environmental data from tens of thousands of firms; investor pressure (Climate Action 100+) won some commitments.
- **Market incentives:** large buyers push Scope 3 requirements down supply chains; banks need data for their own disclosure; reputational benefits.
- **Example:** firms dropping out of CSRD may keep reporting because customers and lenders ask.

## Main point 3 — Why voluntary approaches cannot deliver what the rules were designed for
- **Selection bias:** leaders volunteer; laggards hide. Greenhushing: some firms stop publicising targets to avoid scrutiny.
- **Comparability:** voluntary data are inconsistent and unaudited; the CSRD was designed to make ESG data as reliable as financial data.
- **Enforcement:** no penalties; companies have quietly dropped targets (BP's 2025 strategy reset cut renewables).
- **Due diligence:** Rana Plaza (2013) happened despite voluntary codes; the Bangladesh Accord worked because it was legally binding.
- **Free riding:** firms that invest bear costs; laggards do not.
- **Partial counterweight:** other rules still apply: the Empowering Consumers Directive bans unsubstantiated green claims from **27 September 2026**; ISSB standards spread globally.
- **Judgement:** voluntary action is a useful accelerator, not a foundation.

## Conclusion
- **Answer:** "simplification" framed a political choice as a technical fix; voluntary approaches cannot replace transparency and accountability that only mandatory rules guarantee.
- **Final line:** what is not measured and enforced tends not to be managed.`,
      evidence: `!stat 24 Feb 2026 | Council adopts Omnibus I (in force 18 March 2026)
!stat 1,000 / €450m | New CSRD thresholds
!stat 5,000 / €1.5bn | New CSDDD thresholds, applying from July 2029
!stat 27 Sep 2026 | EU generic green-claims ban applies

See Mock Exam section 8 for greenwashing, greenhushing and the deregulation backlash.`,
    },
    /* ------------------------------------------------------------------ A4 */
    {
      id: 'a4',
      label: 'Question A4',
      section: 'Section A: Enacting Sustainable Development',
      title: 'Role-play: CEO of a national electricity company, statement to the board',
      tags: ['Role-play', 'Energy', 'Security vs transition', 'Ireland'],
      prompt: `Assume the position of the chief executive of a national electricity company (of any country). Write a statement to your board setting out the state of the company's energy mix, a vision for 2040, and how the company will manage the tension between energy security, affordability and decarbonisation.`,
      plan: `## Introduction
- **Choose Ireland.** Opening: "This has been the year that tested every assumption about energy. The war that began on 28 February closed the Strait of Hormuz and caused the largest oil supply disruption in history. Our customers felt it in their bills. Our response must be a faster transition, not a slower one."
- **Frame the "energy trilemma":** security, affordability, sustainability.
- **Position:** by 2040 the company will run a renewable-led, flexible, interconnected system that is more secure and cheaper to operate because it depends less on imported fuel.
- **Structure:** where we are; where we are going; how we manage the trade-offs.

## Main point 1 — State of the energy mix
- **Renewables:** wind is the backbone, supplying roughly a third of Irish electricity in recent years; solar is growing fast from a low base.
- **Coal is gone:** Moneypoint stopped burning coal in **June 2025**.
- **Gas:** still the main source of dispatchable power, and the main source of price shocks.
- **Interconnection:** Greenlink to Wales began operating in **2025**; the Celtic Interconnector to France is due later this decade.
- **Demand:** data centres used **23%** of metered electricity in 2025 and could reach **30%** by 2030 (EirGrid); heat pumps and EVs will add demand.
- **Targets:** **80%** renewable electricity by 2030 under the Climate Action Plan; the country is off track on its **51%** economy-wide cut.

## Main point 2 — Vision for 2040
- **Renewable-led:** onshore and offshore wind at scale, rooftop and utility solar.
- **Flexible:** batteries, demand response, smart tariffs, pumped hydro, long-duration storage; green hydrogen for back-up.
- **Interconnected:** trade surplus wind with Britain and France.
- **Electrified:** heat and transport moving onto the grid.
- **Grid first:** network investment is the binding constraint; planning reform and community consent are critical.
- **Large users pay their way:** data-centre connections conditional on on-site generation, storage or flexible demand.

## Main point 3 — Managing security, affordability and decarbonisation
- **Security:** keep some gas capacity as insurance, but cut fuel dependence; strategic gas storage; diversified interconnection. Renewables are home-grown security.
- **Affordability:** renewables have near-zero fuel costs; protect vulnerable households with targeted supports; long-term contracts to stabilise prices; time-of-use tariffs that reward flexibility.
- **Decarbonisation:** no new unabated fossil capacity without a decarbonisation pathway; avoid lock-in.
- **Trade-offs admitted:** grid costs rise before fuel savings arrive; wind farms and pylons face local opposition; community benefit funds and co-ownership help.
- **Stakeholders:** government (planning, regulation), regulator (CRU), customers, communities, workers (retraining from fossil plants), investors.
- **KPIs for the board:** renewable share, curtailment, outage minutes, customer bills relative to EU, emissions intensity, community-benefit spend.

## Conclusion
- **Closing:** "The lesson of 2026 is that dependence on imported fuels is the real risk. Every turbine and battery we build makes Ireland more secure, more affordable and cleaner at once."
- **Commitments:** a costed 2040 plan, annual progress report, a just transition for our workforce.
- **Final line:** security and sustainability are not rivals; in the long run, the second is how we achieve the first.`,
      evidence: `!stat 28 Feb 2026 | Start of the Iran war and the Hormuz oil shock (IEA: largest supply disruption on record)
!stat June 2025 | Moneypoint stops burning coal
!stat 23% → 30% | Data centres' share of Irish electricity, 2025 to EirGrid's 2030 forecast
!stat 80% | Renewable electricity target for 2030

#### Writing tips
- Write as the CEO: first person, decisive, commitments with numbers.
- Cover all three parts: current mix, 2040 vision, managing the trilemma.

See Mock Exam section 9 for the position-statement template and other sectors.`,
    },
    /* ------------------------------------------------------------------ B1 */
    {
      id: 'b1',
      label: 'Question B1',
      section: 'Section B: Fundamentals of Management and Organisation',
      title: 'Two theories of leadership, their different outcomes, and responsible leadership',
      tags: ['Leadership', 'Transformational', 'Servant', 'Responsible leadership'],
      prompt: `Drawing on two theories of leadership, explain how leaders influence the behaviour of individuals and teams. Provide real-world examples where these approaches produce different outcomes. Finally, discuss what "responsible leadership" requires of managers facing environmental and social crises.`,
      plan: `## Introduction
- **Hook:** when Satya Nadella became Microsoft's CEO in 2014 he replaced a "know-it-all" culture with a "learn-it-all" one; Microsoft's market value rose from about **$300 billion** to over **$3 trillion**. Same company, different leadership.
- **Define:** leadership is the process of influencing others towards shared goals; distinct from management (Kotter, 1990).
- **Two theories:** transformational vs transactional leadership (Burns, 1978; Bass, 1985), and servant leadership (Greenleaf, 1970). Responsible leadership (Maak and Pless, 2006) for the final part.
- **Thesis:** transformational leaders influence by vision and identity; transactional leaders by exchange; servant leaders by developing followers. Each produces different outcomes depending on context. Responsible leadership adds accountability to all stakeholders and future generations, which environmental crises demand.

## Main point 1 — How leaders influence: the two theories
- **Transformational (Bass's four Is):** idealised influence, inspirational motivation, intellectual stimulation, individualised consideration. Works through **identification** and meaning.
- **Transactional:** contingent reward and management by exception; works through **exchange** and compliance.
- **Evidence:** Judge and Piccolo's (2004) meta-analysis found transformational leadership strongly linked to follower satisfaction and leader effectiveness; contingent reward was also effective.
- **Servant leadership (Greenleaf):** the leader serves first: listening, empathy, stewardship, growth of people. Influence through trust and reciprocity.
- **Team level:** leaders set psychological safety (Edmondson); Gallup attributes about **70%** of the variance in team engagement to the manager.

## Main point 2 — Different approaches, different outcomes
- **Transformational success:** Nadella's Microsoft; Paul Polman at Unilever, who dropped quarterly earnings guidance in 2009 to focus on the long term.
- **Transformational risk:** charisma without checks: Elizabeth Holmes (Theranos) and Adam Neumann (WeWork) inspired followers into fraud or collapse; Volkswagen's top-down culture under Winterkorn preceded the 2015 emissions scandal.
- **Transactional fit and failure:** effective for routine, measurable work (call centres, logistics), but Wells Fargo's target-and-reward system produced about **3.5 million** fake accounts.
- **Servant leadership:** strong in professional services and healthcare; criticised as slow in crises and open to exploitation.
- **Contingency (Fiedler, 1967; Hersey and Blanchard):** effectiveness depends on situation; Grint (2005) says wicked problems need leadership that asks questions, critical crises need command.
- **Judgement:** no style is best everywhere; the best leaders combine vision with clear exchange and genuine care.

## Main point 3 — What responsible leadership requires in crises
- **Maak and Pless (2006):** leaders build trusting relationships with all stakeholders; roles include steward, citizen, servant, visionary, architect and change agent.
- **Requirements:**
  - **Long-term accountability:** to future generations and the planet, not just quarterly results.
  - **Honesty:** no greenwashing; admit trade-offs.
  - **Systems thinking:** act on Scope 3 and supply chains.
  - **Voice:** create safety for staff to raise ethical and environmental concerns.
  - **Courage under backlash:** in 2025–26, as the EU cut sustainability rules and US firms retreated, responsible leaders kept commitments.
- **Examples:** Yvon Chouinard transferred Patagonia (valued at about **$3 billion**) to a trust and non-profit in 2022 so profits fund climate work; Ørsted's leadership moved from 85% fossil to mostly renewable.
- **Critique:** responsible leadership can be rhetoric; boards and investors may punish it (Emmanuel Faber was ousted from Danone in 2021 after activist pressure).
- **Judgement:** responsible leadership is tested when it is costly.

## Conclusion
- **Answer:** leaders influence through vision, exchange and service; outcomes depend on fit and on checks against abuse.
- **Responsible leadership** extends the leader's accountability in time and space.
- **Final line:** in environmental crises, the question is not only "will people follow?" but "where are we taking them, and who pays?"`,
      evidence: `!stat $300bn → $3tn+ | Microsoft's market value under Nadella (2014 onward)
!stat ~70% | Variance in team engagement attributed to the manager (Gallup)
!stat 22% | Manager engagement worldwide in 2025, down from 31% in 2022 (Gallup)
!stat ~$3bn | Value of Patagonia transferred to a trust and non-profit (2022)

See Mock Exam section 4 for all leadership theories and cases.`,
    },
    /* ------------------------------------------------------------------ B2 */
    {
      id: 'b2',
      label: 'Question B2',
      section: 'Section B: Fundamentals of Management and Organisation',
      title: 'Algorithmic management: benefits, risks, and sustainable behaviour at work',
      tags: ['Technology', 'AI', 'Algorithmic management', 'Platform work'],
      prompt: `Organisations increasingly use algorithms and AI to recruit, monitor and evaluate employees. Drawing on management and organisational theory, assess the benefits and risks of algorithmic management for employees and organisations. Finally, discuss whether such tools could be used to encourage, or would undermine, sustainable behaviour at work.`,
      plan: `## Introduction
- **Hook:** the EU's Platform Work Directive must be in national law by **2 December 2026**. It requires human oversight of algorithmic decisions about workers and bans processing of certain personal data, the EU's first dedicated rules on algorithmic management.
- **Define:** algorithmic management is the use of software to allocate, direct, monitor, evaluate and discipline work (Kellogg, Valentine and Christin, 2020); people analytics; automation vs augmentation.
- **Thesis:** algorithmic management can improve consistency, speed and fairness, but risks surveillance, loss of autonomy, bias and opacity. Outcomes depend on design, transparency and worker voice. Used well, it can support sustainable behaviour; used as neo-Taylorism, it undermines both wellbeing and sustainability.

## Main point 1 — Benefits for organisations and employees
- **Efficiency and scale:** route optimisation, scheduling, matching (Uber, Deliveroo).
- **Consistency:** structured, data-based decisions can reduce human bias in hiring if well designed (Meehl's statistical prediction).
- **Augmentation:** Brynjolfsson, Li and Raymond (2023) found AI assistance raised call-centre productivity about **14%** on average and **34%** for novices.
- **Feedback:** real-time information helps workers improve.
- **Flexibility:** platform work lets some workers choose hours.

## Main point 2 — Risks
- **Neo-Taylorism:** the stopwatch becomes software; CNIL fined Amazon France Logistique **€32 million** (2024) for over-intrusive monitoring of warehouse staff.
- **Autonomy (Deci and Ryan):** constant monitoring erodes autonomy and intrinsic motivation.
- **Bias:** Amazon scrapped an AI recruiting tool in 2018 for penalising women; in *Mobley v. Workday* a US court allowed age-discrimination claims about AI screening to proceed as a collective action (2025).
- **Opacity and accountability:** workers cannot contest decisions; courts in Amsterdam (2021–23) ordered Uber and Ola to explain automated decisions; Italy's data regulator fined Foodinho/Glovo **€2.6 million** (2021) over its rider algorithm.
- **Goodhart's law:** targets distort behaviour (speed over safety).
- **Entry-level jobs:** Stanford found a **13–16%** relative fall in employment for 22–25-year-olds in the most AI-exposed jobs.
- **Regulation:** EU AI Act classes employment AI as high-risk (now from **2 December 2027**); Platform Work Directive; GDPR Article 22.

## Main point 3 — Sustainable behaviour: encourage or undermine?
- **Encourage:** algorithms can optimise delivery routes and loads, schedule energy use, nudge low-carbon travel, and give teams real-time energy and waste data (social comparison cut household energy about **2%** in Opower trials).
- **Undermine:** speed targets push drivers to rush and idle; ultra-fast delivery promises raise emissions; the energy cost of AI (Irish data centres **23%** of metered electricity); metrics crowd out intrinsic environmental motivation; surveillance damages trust needed for voluntary green behaviour.
- **Design principles:** human oversight; transparency; worker participation in design (socio-technical systems, Trist and Bamforth); include environmental metrics; measure the tool's own footprint.
- **Judgement:** the same tool can serve either; governance decides.

## Conclusion
- **Answer:** algorithmic management offers efficiency and consistency but risks control, bias and opacity; benefits flow mainly to organisations unless workers have voice.
- **Final line:** algorithms will manage work in sustainable ways only if they are themselves managed: transparent, contestable and aligned with human and environmental goals.`,
      evidence: `!stat 2 Dec 2026 | Platform Work Directive transposition deadline
!stat 2 Dec 2027 | EU AI Act high-risk rules for employment AI now apply
!stat +14% / +34% | AI productivity gain overall / for novices (Brynjolfsson, Li and Raymond)
!stat €32m | CNIL fine on Amazon France Logistique (2024)
!stat €2.6m | Italian fine on Foodinho/Glovo over its rider algorithm (2021)

See Mock Exam section 5 for the full technology toolkit.`,
    },
    /* ------------------------------------------------------------------ B3 */
    {
      id: 'b3',
      label: 'Question B3',
      section: 'Section B: Fundamentals of Management and Organisation',
      title: 'Why some teams beat the sum of their members, and how hybrid work and AI change that',
      tags: ['Teams', 'Tuckman', 'Diversity', 'Hybrid and AI'],
      prompt: `Using one model of team development and one theory of team diversity, explain why some teams perform better than the sum of their members while others perform worse. Then analyse how hybrid working or AI tools change these dynamics, using an example from an organisation of your choice.`,
      plan: `## Introduction
- **Hook:** Woolley et al. (*Science*, 2010) found that a group's "collective intelligence" was linked to members' social sensitivity and how evenly they took turns speaking, not to the average or highest IQ in the group.
- **Define:** synergy (the team outperforms the best individual or the sum); process losses (Steiner, 1972): actual productivity = potential productivity minus process losses.
- **Theories:** Tuckman's stages (1965); diversity through the information/decision-making perspective vs social categorisation, and **faultlines** (Lau and Murnighan, 1998).
- **Thesis:** teams exceed the sum when they move through development to shared norms and turn diversity into information; they fall short when they stall in storming, split along faultlines or lose effort. Hybrid work and AI change both: they weaken informal norm-building but can widen information if managed.

## Main point 1 — Team development (Tuckman)
- **Forming, storming, norming, performing, adjourning (Tuckman and Jensen, 1977).**
- **Better than the sum:** teams that resolve storming into clear norms, roles and psychological safety (Edmondson, 1999). Project Aristotle (180 Google teams) ranked psychological safety first.
- **Worse than the sum:** teams stuck in storming, or "pseudo-norming" where conflict is buried (groupthink, Janis, 1972); social loafing (Latané et al., 1979).
- **Critique:** Gersick's punctuated equilibrium (1988): teams change sharply at their midpoint, not in neat stages.

## Main point 2 — Diversity and faultlines
- **Information/decision-making view:** different knowledge and perspectives improve problem-solving (Page, 2007), especially on complex tasks.
- **Social categorisation view (Tajfel and Turner):** people form sub-groups, reducing trust and cohesion.
- **Faultlines:** when several attributes align (for example, all seniors are one nationality and one function), the team splits.
- **Evidence:** diversity effects are mixed overall (van Knippenberg and Schippers, 2007); the outcome depends on inclusion, task interdependence and leadership.
- **Better than the sum:** diverse teams with inclusive leadership and shared goals; **worse:** diverse teams with strong faultlines and low safety.

## Main point 3 — How hybrid work and AI change the dynamics
- **Hybrid:** Microsoft's study of **61,000** employees (Yang et al., *Nature Human Behaviour*, 2021) found remote work made collaboration more siloed and static. A Trip.com experiment (Bloom et al., *Nature*, 2024) found hybrid work cut quit rates by about a **third** with no loss of performance.
  - **Effect on Tuckman:** forming and norming are harder without informal contact; new joiners suffer most.
  - **Effect on faultlines:** office vs remote can become a new faultline.
- **AI:** a BCG field experiment with **758** consultants (Dell'Acqua et al., 2023) found GPT-4 users completed **12%** more tasks, **25%** faster, at about **40%** higher quality inside AI's capabilities, but did worse on a task outside them (the "jagged frontier"). A Procter & Gamble study (2025) found individuals with AI matched the performance of two-person teams without it.
  - **Risk:** AI can reduce interaction and junior learning; homogenise ideas.
- **Example organisation:** a consulting or product team that sets core in-person days for forming and norming, explicit norms for hybrid meetings, and rules on when AI output must be checked.

## Conclusion
- **Answer:** teams exceed their members when development produces safety and norms and diversity produces information; they underperform when process losses dominate.
- **Hybrid and AI** change the costs of coordination and the sources of information; they help teams that manage them and harm teams that drift.
- **Final line:** the team is still the unit that turns individual talent into collective performance, and leaders must design for that deliberately.`,
      evidence: `!stat 2010 | Woolley et al.: collective intelligence linked to equal turn-taking
!stat 61,000 | Microsoft employees in the remote-work collaboration study (2021)
!stat ~⅓ | Fall in quit rates under hybrid at Trip.com, no performance loss (2024)
!stat 758 | Consultants in the "jagged frontier" AI experiment (2023)

See Mock Exam section 1 for the full teams toolkit.`,
    },
    /* ------------------------------------------------------------------ B4 */
    {
      id: 'b4',
      label: 'Question B4',
      section: 'Section B: Fundamentals of Management and Organisation',
      title: 'Resource-based view vs Porter: which explains sustainable advantage from sustainability?',
      tags: ['Strategy', 'RBV', 'Porter', 'Energy and fashion'],
      prompt: `Compare the resource-based view of the firm with Porter's positioning approach to strategy. Using an example from the energy, fashion or food industry, evaluate which framework better explains how firms can build lasting competitive advantage from sustainability.`,
      plan: `## Introduction
- **Hook:** in 2009 DONG Energy generated about **85%** of its power from fossil fuels; by the end of the 2010s, renamed **Ørsted**, it was mostly renewable and the world's largest offshore wind developer. Its advantage came from capabilities built over a decade, not from a favourable industry.
- **Define:** **positioning** (Porter): advantage comes from choosing an attractive industry and a defensible position (cost leadership, differentiation, focus) given the Five Forces; **resource-based view** (Barney, 1991): advantage comes from resources and capabilities that are valuable, rare, inimitable and organised (VRIO).
- **Thesis:** positioning explains where sustainability creates profit opportunities; the RBV, extended by Hart's natural-resource-based view and dynamic capabilities, better explains why some firms keep that advantage. The two are complements, but for **lasting** advantage the RBV is stronger.

## Main point 1 — Porter's positioning applied to sustainability
- **Differentiation:** green products for willing payers (Patagonia's durability and brand).
- **Cost leadership:** efficiency and waste reduction lower costs.
- **Industry shifts:** regulation raises entry barriers; EVs and renewables become substitutes; buyer demand changes.
- **Porter and van der Linde (1995); Porter and Kramer (2011):** environmental innovation and shared value as positioning.
- **Limitation:** positions are imitable; once "green" becomes standard, it stops differentiating.

## Main point 2 — The RBV and natural-resource-based view
- **VRIO:** advantage lasts when resources are valuable, rare, hard to imitate (path dependence, causal ambiguity, social complexity) and organised to capture value.
- **Hart (1995):** pollution prevention, product stewardship and sustainable development as capabilities.
- **Dynamic capabilities (Teece et al., 1997):** sensing, seizing and reconfiguring.
- **Ørsted:** offshore wind engineering, supply-chain relationships, project finance know-how and government partnerships; hard to copy quickly.
- **Patagonia:** brand trust and repair networks built over decades; competitors cannot easily imitate authenticity.
- **Critique:** RBV can be tautological (valuable resources create value) and static; capabilities can become rigidities (Leonard-Barton, 1992). Ørsted's 2023–25 offshore wind setbacks (project cancellations and a large rights issue in 2025) show capabilities do not guarantee returns when costs and interest rates shift.

## Main point 3 — Which explains lasting advantage better?
- **Contrast with fast fashion:** Shein's position (ultra-low cost, data-driven speed) is powerful under current rules, but exposed to regulation (French anti-fast-fashion law; EU ecodesign and extended producer responsibility).
- **Synthesis:** positioning tells you where the market is going; capabilities determine whether you can get there first and stay.
- **Judgement:** the RBV better explains *lasting* advantage, because positions in sustainability are easily copied while capabilities are not; but firms must reposition as the industry changes (combine with Five Forces and stakeholder theory).
- **Caveat:** sustainability as advantage is not the same as sustainability as sufficient; some necessary action does not pay.

## Conclusion
- **Answer:** both matter; the RBV, especially Hart's natural-resource-based view, better explains durable advantage from sustainability.
- **Final line:** firms do not win the transition by standing in the right place, but by building what others cannot quickly copy.`,
      evidence: `!stat ~85% | DONG Energy's fossil share of generation in 2009
!stat 1991 | Barney's resource-based view
!stat 1995 | Hart's natural-resource-based view
!stat VRIO | Valuable, rare, inimitable, organised

See Mock Exam section 6 for the full strategy toolkit.`,
    },
  ],
};
