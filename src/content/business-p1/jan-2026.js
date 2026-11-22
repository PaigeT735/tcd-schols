export default {
  id: 'jan-2026',
  label: 'Jan 2026',
  kind: 'paper',
  title: 'January 2026 paper (2025/26 Schols)',
  summary: `The most recent paper you have, and it confirms the house style: long context paragraphs, normative sub-questions and a 2025 headline behind most questions (DEIB rollbacks, far-right protests, the Albanese report). It also brings back **business schools themselves** twice (Q2 and Q4), a self-referential move last seen in 2021, and finally sets the **generative AI** question the analysis predicted.`,
  meta: [['Format', 'Six questions, answer two'], ['Time', '2 h 15 min'], ['News window', '2025']],
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      id: 'q1',
      n: 1,
      title: 'DEIB under political pressure: should European organisations follow the US?',
      tags: ['HR / OB', 'Ethics', 'EU law', 'Strategy'],
      prompt: `In recent years, political pressure to scrap diversity, equity, inclusion and belonging (DEIB) initiatives has risen. For example, in the United States, Meta, Google, and Walmart scaled back or "sunsetted" their DEIB initiatives citing legal pressure, controversy, or a desire to shift toward broader bias mitigation. Should European organisations follow suit or stand by their DEIB efforts? Discuss.`,
      plan: `## Introduction
- **Hook:** on **21 January 2025** President Trump signed Executive Order 14173 targeting "illegal DEI" in federal contractors. Within weeks **Meta** (10 January), **McDonald's**, **Google** (February) and **Accenture** (which ended its global diversity goals) followed **Walmart** (November 2024) in scaling back.
- **Legal backdrop:** the US Supreme Court's *SFFA v Harvard* (June 2023) ended race-conscious university admissions and emboldened legal challenges to corporate programmes.
- **Define DEIB:** policies to widen access (diversity), remove unequal barriers (equity), make people able to contribute (inclusion) and feel they belong (belonging). Distinguish **process fairness** (structured hiring, pay audits) from **outcome targets** (quotas).
- **Thesis:** European organisations should **stand by** DEIB, because EU law, labour markets and evidence support it, but **reform** it towards merit-protecting, measurable, legally grounded practice rather than performative statements.
- **Roadmap:** the business and evidence case; the European legal and social context; how to reform rather than retreat.

## Main point 1 — The business case is real, but narrower than claimed
- **Claim:** well-designed inclusion improves decisions and talent, though the headline studies overstate it.
  - **Bias exists:** in Bertrand and Mullainathan's field experiment (2004), CVs with white-sounding names received about **50% more callbacks** than identical CVs with Black-sounding names.
  - **Blind processes work:** orchestras using blind auditions increased the share of women advancing (Goldin and Rouse, 2000).
  - **Performance:** McKinsey's *Diversity Matters Even More* (2023) found firms in the top quartile for executive gender diversity **39% more likely** to outperform financially.
  - **But:** Green and Hand (2024) could **not replicate** McKinsey's link, which is correlation, not causation.
  - **What fails:** Dobbin and Kalev (*HBR*, 2016) found **mandatory diversity training** often has no lasting effect or backfires, while mentoring, structured hiring and accountability work.
- **Theory:** Janis's *groupthink* (1972); Page's *The Difference* (2007): cognitive diversity improves problem-solving; human capital (wasting talent is inefficient).
- **Link:** the case is for **good** DEIB, not every DEIB activity.

## Main point 2 — Europe is not the US: law, labour markets and stakeholders
- **Claim:** copying US rollbacks would put European firms in conflict with their own legal and social environment.
  - **EU law:** the Race Equality Directive (2000/43/EC) and Employment Equality Directive (2000/78/EC) ban discrimination; Ireland's Employment Equality Acts cover **nine grounds**, including the Traveller community.
  - **New obligations:** the **Pay Transparency Directive** (2023/970), to be transposed by **7 June 2026**, requires pay ranges in job ads, bans pay-history questions and forces a joint pay assessment where an unexplained gender gap is **5% or more**; the **Women on Boards Directive** requires **40%** of non-executive seats (or 33% of all board seats) for the under-represented sex in listed companies by **30 June 2026**.
  - **Ireland:** gender pay gap reporting has covered firms with **50+** staff since 2025; about **20%** of Ireland's residents were born abroad (Census 2022), so inclusion is a labour-market necessity.
  - **US pressure abroad:** in March 2025 US embassies wrote to French firms with US contracts asking them to certify they had no DEI programmes, a direct test of European corporate independence.
  - **Stakeholders:** shareholders largely backed DEI: Costco's (January 2025) rejected an anti-DEI proposal by about **98%**, and Apple's by about **97%**; Target faced a consumer boycott after its rollback.
- **Counter-argument:** multinationals need one global policy, and US legal risk now outweighs EU benefits.
- **Rebuttal:** firms already run jurisdiction-specific compliance (GDPR vs US privacy); a common core of fair process can satisfy both.

## Main point 3 — Reform, not retreat: what good DEIB looks like
- **Claim:** the criticism of performative DEIB is fair; the answer is evidence-based design.
  - **Drop:** symbolic statements, unmeasured training, anything resembling unlawful quotas in hiring decisions.
  - **Keep and strengthen:** structured interviews, anonymised CV screening, transparent pay bands (which the EU now requires), mentoring and sponsorship, flexible work, accessibility.
  - **Measure:** applications, hiring, promotion and pay-gap data by group, and **belonging** survey scores; publish progress.
  - **Reframe:** around **fairness and merit** (removing barriers to merit) rather than ideology, which is also more defensible politically.
  - **Rebrand without retreat:** some firms renamed programmes "inclusion" or "belonging" while keeping the substance; the test is whether the practices remain.
- **Theory:** procedural justice; Goodhart's law (target the process, not crude numbers); legitimacy theory.
- **Counter-argument:** any DEIB is unfair to majority groups (reverse discrimination).
- **Rebuttal:** fair-process measures remove bias for everyone; quotas in individual hiring decisions are already unlawful in most EU states.

## Conclusion
- **Answer:** European organisations should **stand by** DEIB, but evolve it from performance to practice.
- **Reasons:** EU law increasingly requires it; their workforces and customers are diverse; the evidence supports fair process.
- **Condition:** focus on measurable, merit-protecting practices and drop the symbolic.
- **Generalise:** a firm's values are tested when they become costly; dropping them under political pressure tells employees what they were worth.
- **Final line:** Europe should not import America's culture war; it should export its model of fairness grounded in law and evidence.`,
      evidence: `!stat 21 Jan 2025 | Executive Order 14173 targets "illegal DEI"
!stat ~50% | Extra callbacks for white-sounding names (Bertrand and Mullainathan, 2004)
!stat 39% | Outperformance likelihood for gender-diverse executive teams (McKinsey, 2023, contested)
!stat 5% | Unexplained gender pay gap that triggers a joint pay assessment (EU Pay Transparency Directive)
!stat 40% | Non-executive board seats for the under-represented sex by 30 June 2026 (EU)
!stat ~98% | Costco shareholders rejecting an anti-DEI proposal (January 2025)
!stat ~20% | Irish residents born abroad (Census 2022)

#### Theories and thinkers
- **Groupthink (Janis, 1972);** **diversity and problem-solving (Page, 2007).**
- **Procedural justice;** **legitimacy theory;** **stakeholder theory (Freeman).**
- **Dobbin and Kalev (2016):** why diversity programmes fail.
- **"Woke capitalism" critique (Rhodes, 2021)** for balance.

#### Extra examples
- **SFFA v Harvard (2023):** the legal trigger in the US.
- **Accenture (February 2025):** ended global diversity goals, relevant to its large Irish workforce.
- **Ireland's Employment Equality Acts 1998–2015:** nine protected grounds.

#### Pitfalls
- "Discuss": weigh both sides properly before your verdict.
- Distinguish lawful positive action from unlawful quotas.`,
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      id: 'q2',
      n: 2,
      title: 'Far-right protests and disenfranchisement: should business schools critique economic paradigms?',
      tags: ['Political economy', 'Education', 'Inequality', 'Self-referential'],
      prompt: `It has been argued that the rise in far-right and anti-immigration protests in Ireland, the UK and elsewhere recently, is a symptom of a larger societal problem; a growing sense of disenfranchisement and marginalisation among lower socio-economic sectors of the population.

In light of this argument, do you think business schools have a responsibility to their students to critique current economic paradigms?`,
      plan: `## Introduction
- **Hook:** Dublin saw its worst rioting in decades on **23 November 2023** after a knife attack on schoolchildren; the UK's Southport riots (July–August 2024) led to over **1,000 arrests**; in Germany the AfD came second with about **21%** in February 2025.
- **The argument in the question:** these movements are symptoms of economic marginalisation, not only of cultural attitudes.
- **Define a paradigm:** the dominant set of assumptions in a discipline (Kuhn, 1962). In business and economics, broadly: markets allocate efficiently, growth benefits all, firms maximise shareholder value.
- **Thesis:** yes, business schools have a responsibility to **critique** current paradigms, because their graduates run the firms and institutions whose decisions shape these outcomes. But critique means **testing** ideas against evidence, not replacing one ideology with another.
- **Roadmap:** is the disenfranchisement argument right?; what business schools owe students; how to critique without indoctrinating.

## Main point 1 — Is the disenfranchisement argument right? Partly
- **Claim:** economic grievance is a real driver, but not the only one.
  - **Evidence for:** Autor, Dorn and Hanson's "China shock" research found US areas hit hardest by import competition shifted towards more extreme candidates; Case and Deaton (*Deaths of Despair*, 2020) document collapsing prospects for non-graduates.
  - **Ireland's paradox:** headline GDP soars, but new-tenancy rents averaged **€1,839** a month (Q1 2026) and a record **17,885** people were in emergency accommodation (August 2026). Growth is not felt evenly.
  - **Inequality:** Ireland has some of the highest **market-income** inequality in the OECD, reduced to around average only by taxes and transfers.
  - **Evidence against:** Norris and Inglehart's *Cultural Backlash* (2019) argues values and identity matter as much as income; many protesters are not the poorest.
- **Link:** if paradigms that ignore distribution contribute to the grievance, the institutions teaching them should examine them.

## Main point 2 — Why business schools have this responsibility
- **Claim:** business schools shape the mental models of the people who make economic decisions.
  - **Ghoshal (2005):** "bad management theories are destroying good management practices", because teaching that managers are self-interested agents becomes self-fulfilling.
  - **2008:** the Queen's question at the LSE ("why did no one see it coming?") exposed the narrowness of mainstream models; students formed *Rethinking Economics* to demand pluralism.
  - **Shareholder primacy (Friedman, 1970)** vs **stakeholder theory (Freeman)**: even the US Business Roundtable (August 2019) abandoned shareholder primacy in principle (181 CEOs).
  - **Housing as asset vs home, GDP vs GNI\*, profit vs wages:** issues where the standard toolkit is silent on distribution.
  - **Graduates' power:** they will set wages, locate plants, design algorithms and lobby governments.
- **Theory:** Kuhn's paradigms; Polanyi's *The Great Transformation* (1944): markets disembedded from society provoke backlash; Rodrik's *globalisation trilemma*.
- **Counter-argument:** business schools exist to give students employable skills, not to politicise them.
- **Rebuttal:** critical thinking is an employable skill, and mispricing social risk (as in 2008) is a business failure.

## Main point 3 — How to critique responsibly: pluralism, evidence and practice
- **Claim:** the duty is to teach students **how** to think, not **what** to think.
  - **Plural curricula:** teach Keynesian, Austrian, behavioural and institutional economics alongside the mainstream; CORE Econ's free textbook is one model.
  - **Evidence over ideology:** include the evidence that immigrants make net fiscal contributions in many settings and fill labour shortages (about one in five Irish residents was born abroad), as well as studies of local wage and housing pressures.
  - **Live cases:** Irish housing, data centres' electricity use (**23%** of Irish electricity in 2025), corporation-tax concentration, platform work.
  - **Business responses:** fair pay, local hiring, skills investment and housing partnerships as practical ways firms address marginalisation.
  - **Principles:** the UN's PRME (2007) commits business schools to "responsible management education".
- **Counter-argument:** academics lean left, so "critique" will be one-sided.
- **Rebuttal:** that is a reason for structured pluralism and debate, not for avoiding critique.

## Conclusion
- **Answer:** yes. If economic marginalisation is fuelling political extremism, the schools that train economic decision-makers have a responsibility to examine the paradigms behind that marginalisation.
- **Limits:** critique must be rigorous and plural, not ideological.
- **Generalise:** an institution that shapes power has a duty to question how it uses it (the same logic applies to platforms and AI firms).
- **Final line:** a business school that only teaches students to succeed within the system, never to question it, is training technicians, not leaders.`,
      evidence: `!stat 23 Nov 2023 | Dublin riot after the Parnell Square stabbing
!stat 1,000+ | Arrests after the UK's Southport riots (2024)
!stat ~21% | AfD vote share, German election February 2025
!stat €1,839 | Average new-tenancy rent in Ireland (Q1 2026)
!stat 17,885 | People in Irish emergency accommodation (August 2026)
!stat 181 | CEOs signing the Business Roundtable stakeholder statement (2019)

#### Theories and thinkers
- **Kuhn (1962):** paradigms and paradigm shifts.
- **Ghoshal (2005):** bad theories, bad practice; **Mintzberg, *Managers, Not MBAs* (2004).**
- **Polanyi (1944):** the double movement against markets.
- **Autor, Dorn and Hanson:** the China shock; **Case and Deaton:** deaths of despair.
- **Norris and Inglehart (2019):** cultural backlash, the counter-view.

#### Extra examples
- **Brexit (2016):** the "left behind" thesis.
- **Irish 2024 general election and 2025 presidential election:** anti-immigration candidates won few seats; Catherine Connolly became President.
- **Coolock (2024):** protests at a proposed asylum centre.

#### Pitfalls
- Test the premise (is it economic?) before answering the question about business schools.
- Self-referential question: examiners teach in a business school, so critique respectfully but genuinely.`,
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      id: 'q3',
      n: 3,
      title: 'The Albanese report: are firms responsible for how their products are used?',
      tags: ['Complicity', 'Human rights', 'Free markets', 'Tech'],
      prompt: `This year, UN Special Rapporteur Francesca Albanese issued a report listing companies deemed complicit in Israel's genocide in Gaza. The report names arms companies, finance companies, companies complicit in illegal settlement expansion (Booking.com and Air BnB) and several large tech corporations (IBM, Microsoft, Alphabet and Amazon) which are granting government wide access to their cloud and AI technologies.

Are companies responsible for how, in what contexts, and for what purposes their products and services are used? Does pressure to pull products and services from use in Israel and by the Israeli government constitute an infringement on companies' right to participate in a free market system? Please use examples to illustrate your argument.`,
      plan: `## Introduction
- **Context:** in July 2025 the UN Special Rapporteur published *From Economy of Occupation to Economy of Genocide*, naming **48 corporate actors** drawn from a database of around 1,000. The US sanctioned Albanese days later (9 July 2025).
- **Background, stated neutrally:** Hamas's attack of **7 October 2023** killed about 1,200 people in Israel; by mid-2025 Gaza's health ministry reported over **60,000** Palestinian deaths. The ICJ found a **plausible** risk under the Genocide Convention (January 2024), and its **19 July 2024** advisory opinion held the occupation unlawful. Israel rejects the genocide charge, and the legal questions remain before the courts.
- **Two questions:** (1) responsibility for end use; (2) whether pressure to withdraw infringes a right to trade.
- **Thesis:** firms **are** responsible for foreseeable uses of their products, in proportion to their **knowledge, contribution and leverage**; and pressure to withdraw does **not** infringe a legitimate market right, because free markets include others' freedom to boycott and states' duty to regulate.
- **Roadmap:** the basis of end-use responsibility; the free-market objection; targeted versus blanket withdrawal.

## Main point 1 — Responsibility for end use: knowledge, contribution, leverage
- **Claim:** the UN Guiding Principles (2011) distinguish firms that **cause**, **contribute to** or are **directly linked to** harm. Responsibility rises along that scale.
  - **Arms:** weapons and components have a foreseeable lethal use; several states (the Netherlands, Spain, the UK partially) restricted exports to Israel in 2024–25.
  - **Cloud and AI:** Google and Amazon's **$1.2bn** *Project Nimbus* contract (2021) supplies cloud services to the Israeli government; Google fired about **50** employees who protested in April 2024.
  - **Microsoft:** after reporting in August 2025 that an Israeli military intelligence unit stored intercepted Palestinian phone calls on its Azure cloud, Microsoft **disabled** that unit's access to some services in **September 2025**, finding a breach of its terms. This shows a firm can act on end use.
  - **Settlement tourism:** Airbnb announced it would delist settlement listings in **November 2018**, then reversed in **April 2019** after lawsuits; Booking.com continued listing.
  - **Investors:** Norway's oil fund (worth nearly $2tn) excluded **Caterpillar** and Israeli banks in **August 2025** on ethical grounds.
- **Theory:** complicity (Lepora and Goodin); Kenneth Silver on corporate moral responsibility; due diligence.
- **Counter-argument:** general-purpose tools (cloud, office software) have countless civilian uses; firms cannot police every customer.
- **Rebuttal:** correct for unknown uses, but not where the firm **knows** the specific use and could stop it, which is what Microsoft eventually did.

## Main point 2 — Does pressure to withdraw infringe a right to trade?
- **Claim:** no. A free market is a system of mutual freedoms, not a right to any particular customer or immunity from criticism.
  - **Boycotts are market freedom:** consumers, workers and investors choosing not to buy, work for or invest in a firm are exercising the same freedom the firm claims (Hirschman's *exit*).
  - **States regulate trade legitimately:** sanctions, export controls and arms embargoes are lawful limits (e.g. sanctions on Russia since 2022).
  - **Ireland's Occupied Territories Act (signed 23 July 2026):** bans imports of goods from Israeli settlements, while excluding services on EU-law grounds.
  - **Counter-pressure:** some **38** US states have anti-boycott laws, and the federal Anti-Boycott Act penalises participation in foreign boycotts the US doesn't support, so "freedom" is contested on both sides.
- **Theory:** Friedman (profit within the rules of the game, which include law and ethical custom); Nozick's freedom of contract; consumer sovereignty.
- **Counter-argument:** singling out Israel is discriminatory, when other states with rights abuses face no comparable pressure.
- **Rebuttal:** consistency is a fair demand, and firms should apply the same human-rights test everywhere (Russia, Xinjiang, Myanmar). Inconsistency elsewhere is not a defence here.

## Main point 3 — Targeted accountability rather than blanket withdrawal
- **Claim:** the responsible approach focuses on **specific contracts that enable specific harms**.
  - **Distinguish:** supplying weapons or surveillance capability to military units differs from selling consumer software or medicine to civilians.
  - **Avoid collective punishment:** blanket withdrawal can hurt civilians, including Palestinians who depend on the same services.
  - **Due diligence process:** map end users; contractual use restrictions; audits; suspension where misuse is found; public reporting.
  - **Regulation:** the EU's Corporate Sustainability Due Diligence Directive (2024) makes human-rights due diligence mandatory for large firms, though the 2025 Omnibus package narrowed and delayed it.
  - **Precedent:** apartheid South Africa: the Sullivan Principles (1977) tried "constructive engagement"; by the late 1980s divestment (e.g. Barclays' 1986 exit) and the US Comprehensive Anti-Apartheid Act (1986) did more.
- **Counter-argument:** targeted measures are too weak, because money is fungible.
- **Rebuttal:** fungibility matters most for finance and arms, which is why those firms carry heavier duties.

## Conclusion
- **Answer (1):** yes, firms are responsible for how their products are used **to the extent they know, contribute and can act**; "we just sell tools" fails once the use is known.
- **Answer (2):** pressure to withdraw is not an infringement of free-market rights; it is the market (and democracy) working.
- **Approach:** targeted, evidence-based action on specific enabling contracts, consistently applied across countries.
- **Final line:** freedom to trade has never included freedom from responsibility for what the trade makes possible.`,
      evidence: `!stat 48 | Corporate actors named in the Albanese report (July 2025)
!stat $1.2bn | Google–Amazon Project Nimbus contract with the Israeli government (2021)
!stat Sept 2025 | Microsoft disabled services to an Israeli military unit after reviewing misuse
!stat Aug 2025 | Norway's oil fund excluded Caterpillar and Israeli banks
!stat 19 July 2024 | ICJ advisory opinion: the occupation is unlawful
!stat 23 July 2026 | Ireland's Occupied Territories Act signed (goods only)

#### Theories and thinkers
- **UN Guiding Principles (2011):** cause, contribute, directly linked; leverage.
- **Complicity (Lepora and Goodin, 2013);** **corporate moral responsibility (Silver).**
- **Hirschman:** exit, voice and loyalty (boycotts as exit).
- **Friedman vs Freeman;** **Nozick's freedom of contract.**

#### Extra examples
- **Ben & Jerry's (2021):** stopped sales in the occupied territories, leading to a dispute with its owner Unilever.
- **Airbnb reversal (2019)** shows legal risk shaping ethics.
- **Russia (2022):** the same structure, applied to another state.

#### Pitfalls
- A highly sensitive topic: be precise about legal status (the ICJ has not ruled on genocide on the merits) and represent Israel's position fairly.
- Answer both questions with examples, as instructed.`,
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      id: 'q4',
      n: 4,
      title: 'Generative AI: how should business schools respond to its impact on work?',
      paraphrased: true,
      tags: ['AI', 'Education', 'Future of work', 'Self-referential'],
      prompt: `Generative AI is reshaping workplaces and employment. How should business schools respond?`,
      plan: `## Introduction
- **Hook:** within three years of ChatGPT's launch (November 2022), about **75%** of knowledge workers reported using generative AI at work (Microsoft and LinkedIn, 2024), and about **92%** of UK students used it in their studies (HEPI, 2025).
- **Labour market:** the WEF's *Future of Jobs Report 2025* expects **170m** jobs created and **92m** displaced by 2030, with **39%** of core skills changing; Stanford researchers found employment of 22–25-year-olds in the most AI-exposed jobs fell about **13%** relative to others (2025).
- **Thesis:** business schools should **integrate** AI into every subject, **redesign assessment** around judgement, and **teach the ethics and economics** of AI, because their graduates will both use AI and decide how it is deployed.
- **Roadmap:** teaching with AI; teaching what AI can't do; teaching about AI's consequences.

## Main point 1 — Integrate AI into the curriculum, and redesign assessment
- **Claim:** graduates who can use AI well will outperform those who can't.
  - **Productivity evidence:** consultants using GPT-4 finished **12% more tasks**, **25% faster**, at **40% higher quality** (Harvard–BCG, 2023); novices gain most (**+34%** in a call-centre study).
  - **Jagged frontier:** the same study found consultants did **worse** on tasks just outside AI's competence, so students must learn **when not** to trust it.
  - **Subject examples:** finance (valuation drafts, data cleaning), marketing (concept testing), accounting (anomaly detection), operations (forecasting).
  - **Assessment:** AI detectors are unreliable (OpenAI withdrew its own in July 2023 for low accuracy), so move towards oral defences, in-class work, process portfolios and "AI-allowed, judgement-tested" tasks.
- **Counter-argument:** over-reliance erodes learning; an MIT Media Lab study (2025) found lower brain engagement among students writing with ChatGPT.
- **Rebuttal:** hence structured use: foundations without AI first, then AI as a tool to check, critique and extend.

## Main point 2 — Prioritise what AI can't easily do: judgement, people and accountability
- **Claim:** as routine analysis becomes cheap, human judgement becomes the scarce input.
  - **Polanyi's paradox:** "we know more than we can tell", so tacit judgement resists automation.
  - **Skills:** problem framing, negotiation, leadership, ethical reasoning, persuasion, and verifying AI output.
  - **Entry-level problem:** if AI does junior tasks, students lose the apprenticeship stage, so schools must build it in (live client projects, simulations, placements).
  - **Lifelong learning:** **85%** of employers plan to prioritise upskilling (WEF, 2025), so schools should offer executive and micro-credential pathways.
- **Theory:** Goldin and Katz's "race between education and technology"; complementarity vs substitution (Acemoglu and Restrepo).
- **Counter-argument:** today's "human" skills may be automated tomorrow.
- **Rebuttal:** adaptability and learning how to learn are themselves the durable skill.

## Main point 3 — Teach the ethics, economics and governance of AI
- **Claim:** graduates will decide how AI is deployed, so they must understand its consequences.
  - **Bias:** Amazon scrapped an AI hiring tool in 2018 after it downgraded CVs mentioning "women's".
  - **Law:** the **EU AI Act** (in force August 2024) bans some practices (e.g. emotion recognition at work, from February 2025) and imposes duties on high-risk uses such as recruitment.
  - **Distribution:** who captures productivity gains: shareholders, workers or consumers?
  - **Energy and Ireland:** data centres used **23%** of Irish electricity in 2025.
  - **Accountability:** who is responsible when an AI system errs (the vendor, the deployer, the manager)?
- **Counter-argument:** ethics modules are box-ticking.
- **Rebuttal:** embed ethics in core cases (finance, marketing, HR), not just a standalone module.

## Conclusion
- **Answer:** business schools should embrace AI as a tool, protect the foundations of learning, and teach students to govern AI, not just operate it.
- **Priorities:** AI literacy across all modules; assessment redesign; human judgement; ethics and distribution.
- **Generalise:** the institutions that train decision-makers must change as fast as the decisions do.
- **Final line:** the goal is graduates who can use AI, question it and lead people through it.`,
      evidence: `!stat 75% | Knowledge workers using generative AI at work (Microsoft/LinkedIn, 2024)
!stat 92% | UK students using AI in their studies (HEPI, 2025)
!stat 170m / 92m | Jobs created / displaced by 2030 (WEF Future of Jobs 2025)
!stat 39% | Core skills expected to change by 2030 (WEF)
!stat −13% | Relative employment fall for 22–25-year-olds in AI-exposed jobs (Stanford, 2025)
!stat +40% | Quality gain for consultants using GPT-4 inside the frontier (Harvard–BCG)

#### Theories and thinkers
- **Polanyi's paradox;** **Goldin and Katz;** **Acemoglu and Restrepo.**
- **Bloom's taxonomy:** move assessment up from recall to evaluation and creation.
- **Human capital theory (Becker).**

#### Extra examples
- **Business schools' self-interest:** the MBA's analytical core is exactly what AI automates.
- **EU AI Act timeline:** August 2024, February 2025, August 2025, August 2026.

#### Pitfalls
- Address the employment impact (the question's premise), not just teaching.
- Be specific about practices, not just "embrace AI".`,
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      id: 'q5',
      n: 5,
      title: 'What will business on Earth look like 100 years from now?',
      paraphrased: true,
      tags: ['Speculative', 'Technology', 'Sustainability', 'Humanistic sources'],
      prompt: `What will business on Earth look like 100 years from now? *(Your notes pair a technical source with a humanistic source for each point; check the paper for any instruction on sources.)*`,
      plan: `## Introduction
- **Hook:** 100 years ago (1926) the largest firms made steel, oil and cars, and Ford had only recently introduced the moving assembly line (1913). Today's largest firms sell software, chips and advertising. The average tenure of an S&P 500 firm has fallen from about **33 years** (1964) to about **20** (Innosight).
- **Approach:** predict from **durable forces** rather than gadgets: demography, technology, planetary limits and institutions.
- **Thesis:** by 2126 business will be **automated, circular and partly off-planet**, but its central question will shift from producing enough to **distributing** abundance and **governing** powerful technology.
- **Roadmap:** an AI-run economy; a resource-constrained, circular planet; space and the changing meaning of wealth and work.

## Main point 1 — An AI-driven, automated economy
- **Claim:** most routine cognitive and physical work will be automated.
  - **Trajectory:** McKinsey estimates generative AI alone could add **$2.6–4.4tn** a year; AlphaFold's protein predictions won the **2024 Nobel Prize**.
  - **Firms:** smaller human teams running fleets of AI agents; personalised production at mass scale; markets cleared by algorithms.
  - **Work:** Keynes (1930) predicted a **15-hour week** by 2030; automation could finally deliver it, or create mass redundancy.
  - **Technical source:** Kurzweil, *The Singularity Is Near* (2005) and *The Singularity Is Nearer* (2024), predicting human-level AI around **2029**.
  - **Humanistic source:** Shelley's *Frankenstein* (1818): a creator who abandons responsibility for his creation; a warning for autonomous AI decision-making.
- **Counter-argument:** forecasts of automation always overshoot (Frey and Osborne's **47%** of US jobs at risk in 2013 has not materialised).
- **Rebuttal:** timing is uncertain over decades, but over a century the direction is clear.

## Main point 2 — A resource-constrained planet and the circular economy
- **Claim:** climate and resource limits will force business models to change.
  - **Climate:** 2024 was the first calendar year above **1.5°C** of warming (WMO); by 2126 adaptation and decarbonisation will shape every industry.
  - **Circularity:** today only about **7.2%** of materials re-enter the economy (Circularity Gap Report, 2024); future firms may sell services (lighting, mobility) rather than products.
  - **Energy and biology:** abundant solar, nuclear and perhaps fusion; synthetic biology producing food and materials.
  - **Demography:** the UN projects world population to peak around **10.3bn** in the mid-2080s, with more over-65s than under-18s by the late 2070s, so ageing markets and labour scarcity.
  - **Technical source:** Raworth's *Doughnut Economics* (2017): meet human needs within planetary boundaries (adopted by Amsterdam in 2020).
  - **Humanistic source:** Carson's *Silent Spring* (1962): industrial progress with unseen ecological costs, leading to the US DDT ban (1972).
- **Link:** success will be measured by wellbeing within limits, not just output.

## Main point 3 — Beyond Earth, and the changing meaning of wealth and work
- **Claim:** space industries and abundance will raise old questions of ownership and purpose.
  - **Space economy:** about **$630bn** in 2023, projected to reach **$1.8tn** by 2035 (WEF and McKinsey); launch costs fell from about **$54,500/kg** (Space Shuttle) to about **$2,700/kg** (Falcon 9).
  - **Ownership:** the 1967 Outer Space Treaty bans national appropriation, but US law (2015) lets firms own resources they mine. Who owns asteroid wealth?
  - **Concentration:** SpaceX's 2026 IPO made Elon Musk the first trillionaire, a preview of private power over infrastructure.
  - **Technical source:** NASA's Artemis programme, with commercial partners building lunar landers.
  - **Humanistic source:** More's *Utopia* (1516): a society organised around shared resources, raising the question of distribution.
  - **Purpose:** if work is optional, what gives people identity? (Dubin's "central life interest"; Aristotle's *eudaimonia*).
- **Counter-argument:** space is a distraction from Earth's problems.
- **Rebuttal:** much space technology serves Earth (satellite communications, climate monitoring).

## Conclusion
- **Answer:** business in 2126 will be highly automated, circular in its use of materials, partly interplanetary, and organised around services and data.
- **Constant:** the human questions will not change: who owns, who decides, who benefits.
- **Generalise:** technology determines what is possible; institutions determine who gains.
- **Final line:** the real forecast is not about machines but about whether we build institutions wise enough to share what they make.`,
      evidence: `!stat 33 → 20 years | Average S&P 500 company tenure, 1964 vs today (Innosight)
!stat 7.2% | Share of the world economy that is circular (2024)
!stat 1.55°C | 2024 warming above pre-industrial levels, the first year above 1.5°C (WMO)
!stat ~10.3bn | Projected world population peak, mid-2080s (UN, 2024)
!stat $630bn → $1.8tn | Space economy 2023 → 2035 (WEF/McKinsey)
!stat $54,500 → $2,700 | Launch cost per kg, Shuttle vs Falcon 9

#### Technical and humanistic sources (pairs)
- **AI:** Kurzweil (2005, 2024) ↔ Shelley's *Frankenstein* (1818).
- **Planet:** Raworth's *Doughnut Economics* (2017) ↔ Carson's *Silent Spring* (1962).
- **Space and wealth:** NASA Artemis ↔ More's *Utopia* (1516).
- **Work:** Keynes (1930) ↔ Aristotle's *Nicomachean Ethics*.

#### Pitfalls
- Speculative questions still need evidence: anchor each prediction in a current trend with a number.
- Don't just list technologies; argue about what changes for people and institutions.`,
    },
    /* ------------------------------------------------------------------ Q6 */
    {
      id: 'q6',
      n: 6,
      title: 'Can organisations be efficient and resilient at the same time?',
      paraphrased: true,
      tags: ['Operations', 'Strategy', 'Supply chains', 'Risk'],
      prompt: `Can organisations achieve both efficiency and resilience simultaneously?`,
      plan: `## Introduction
- **Hook:** in 2021 the semiconductor shortage cost carmakers about **$210bn** in lost revenue and **7.7m** vehicles (AlixPartners); in March 2021 the *Ever Given* blocked the Suez Canal for six days, holding up about **$9.6bn** of trade a day.
- **Define:** *efficiency* = producing at the lowest cost under normal conditions (lean, just-in-time); *resilience* = the capacity to absorb, adapt to and recover from shocks (slack, redundancy, flexibility).
- **Thesis:** in a **narrow, static** sense they trade off (slack costs money), but in a **dynamic** sense they can be combined through targeted redundancy, information and flexible capabilities. **Over a full cycle, resilience is part of efficiency.**
- **Roadmap:** why lean systems are fragile; why resilience pays; how to get both.

## Main point 1 — How the pursuit of efficiency created fragility
- **Claim:** decades of cost-cutting removed the buffers that absorb shocks.
  - **Just-in-time:** the Toyota Production System (Ohno) minimised inventory; global supply chains concentrated production in the cheapest location.
  - **Concentration:** advanced chip production is concentrated in Taiwan; Ireland imports most of its gas through the UK.
  - **Shocks:** COVID-19 (2020); Red Sea attacks from late 2023, which cut Suez traffic by about half and added 10–14 days via the Cape; the CrowdStrike outage (**19 July 2024**) crashed about **8.5m** Windows devices and cost Delta about **$500m**.
  - **2026:** the Hormuz crisis cut daily transits from about **85 ships to around 5**; Brent stayed over **60%** above pre-war levels in October 2026.
- **Theory:** Taleb's *fragility* (2012): systems optimised for the average break in the tails.
- **Link:** the hidden cost of efficiency is exposure to rare, severe events.

## Main point 2 — Why resilience pays over the cycle
- **Claim:** resilience is insurance with a positive expected return.
  - **Frequency:** McKinsey (2020) found supply-chain disruptions lasting a month or more occur about every **3.7 years**, and firms can expect to lose about **45%** of one year's profits over a decade.
  - **Toyota's lesson:** after the 2011 earthquake it built a supplier-risk database and held months of chip stock, so it weathered the 2021 shortage better than rivals.
  - **Organisational slack (Cyert and March, 1963; Bourgeois, 1981):** spare cash, inventory and staff let firms adapt and innovate.
  - **Reputation and customers:** firms that keep delivering in a crisis gain market share.
- **Counter-argument:** slack is waste; markets punish idle capital in the short term.
- **Rebuttal:** only if the cost of disruption is ignored; resilient firms recover faster and outperform over a full cycle.

## Main point 3 — Getting both: targeted redundancy and dynamic capabilities
- **Claim:** the trade-off can be managed by being selective and flexible.
  - **Segment:** buffer only critical, single-sourced inputs ("just-in-case" for chips, "just-in-time" for commodities).
  - **Diversify:** dual sourcing, "China plus one", nearshoring for strategic items.
  - **Information:** real-time supply-chain visibility and AI forecasting reduce the buffer needed for a given level of protection.
  - **Flexibility:** cross-trained staff, modular product designs, flexible contracts.
  - **Research:** Lücker, Timonina-Farkas and Seifert (2024) show some resources (e.g. flexible capacity) improve both efficiency and resilience.
- **Theory:** dynamic capabilities (Teece, Pisano and Shuen, 1997); Sheffi, *The Resilient Enterprise* (2005); real options.
- **Counter-argument:** these are still costs, so the tension remains.
- **Rebuttal:** yes, but the right comparison is total cost over a cycle including disruptions, not operating cost in a calm year.

## Conclusion
- **Answer:** not perfectly, and not by accident, but yes by design: firms can be efficient in normal times and resilient in bad ones by targeting their buffers and building flexibility.
- **Condition:** measure efficiency over the full cycle, including disruption costs.
- **Generalise:** the same logic applies to states (energy security, Ireland's reliance on a few firms for tax) and to personal finance.
- **Final line:** the most efficient organisation is not the one with the lowest costs this year, but the one still standing after the next shock.`,
      evidence: `!stat $210bn | Carmakers' 2021 revenue lost to the chip shortage (AlixPartners)
!stat $9.6bn/day | Trade held up by the Ever Given in the Suez Canal (2021)
!stat 3.7 years | Average interval between month-long supply-chain disruptions (McKinsey, 2020)
!stat 45% | Share of a year's profits firms can expect to lose to disruptions per decade
!stat 8.5m | Windows devices crashed by the CrowdStrike update (July 2024)
!stat 85 → ~5 | Daily ship transits through Hormuz, pre-war vs September 2026

#### Theories and thinkers
- **Lean / just-in-time (Ohno, Toyota)** vs **just-in-case.**
- **Organisational slack (Cyert and March; Bourgeois).**
- **Antifragility (Taleb, 2012);** **dynamic capabilities (Teece et al., 1997).**
- **Sheffi (2005):** the resilient enterprise.

#### Extra examples
- **Brexit:** Irish hauliers shifted to direct ferries to the continent to avoid the UK landbridge.
- **Pharma:** Ireland's pharma plants take 5–10 years to build, so capacity is a strategic asset.

#### Pitfalls
- Define both terms precisely; the answer depends on the time horizon.
- Give a clear yes / no / "yes, if" answer.`,
    },
  ],
};
