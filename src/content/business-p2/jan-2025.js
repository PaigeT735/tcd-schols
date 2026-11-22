export default {
  id: 'jan-2025',
  label: 'Jan 2025',
  kind: 'paper',
  title: 'January 2025 paper',
  summary: `A clear shift from 2022–23: this paper asks you to **question the assumptions underneath management itself**. Management appears as a historical invention, efficiency as a source of harm, technology as a philosophical question and the opioid crisis as a case where organisations "worked too well" at the wrong goal.

**The recurring theme is that management is not neutral.** How organisations are designed, measured and controlled shapes what they achieve, what they overlook and who bears the consequences. Prepare **Marx, Heidegger, Jevons, Georgescu-Roegen and Winner** carefully: they give arguments most candidates will not have.`,
  meta: [['Setter', 'Norah Campbell'], ['Format', 'Five questions, answer three'], ['Time', '2 h 15 min, ~45 min each']],
  answer: 'answer three',
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      id: 'q1',
      n: 1,
      title: 'The contested origins of management: a coherent body of knowledge?',
      tags: ['History', 'Taylor', 'Weber', 'Critical management'],
      paraphrased: true,
      prompt: `The origins of management are contested. Critically analyse the origins of management, whether it has produced a coherent body of knowledge, and whether it has addressed the problems it was created to solve.`,
      plan: `## Introduction
- **Hook:** in 1961 Harold Koontz called the field a "management theory jungle", with schools that barely spoke to each other. In 1980 he said the jungle had grown denser.
- **Define:** management is the coordination of people and resources towards goals; scientific management is the use of measurement and standardisation to raise efficiency; bureaucracy is rule-based, hierarchical administration.
- **Why "contested":** standard histories start with factories and Taylor, but historians show earlier roots in armies, churches, states, railways and also **slave plantations** (Cooke, 2003; Rosenthal, 2018), which management textbooks long ignored.
- **Thesis:** modern management emerged from industrialisation and the need to coordinate large-scale production. It has built an extensive body of knowledge, but not a single coherent science. It has improved productivity and coordination, yet the problems it was created to manage (control of labour, alienation, conflict over rewards, social costs) persist in new forms.
- **Roadmap:** origins; coherence; whether it solved its problems.

## Main point 1 — Where management came from
- **Before modern management:** the Pyramids, Roman legions, the Catholic Church and the East India Company all planned, delegated and controlled.
- **Industrialisation:** factories, machines and large workforces required supervision, scheduling and standardised processes (Pollard, 1965).
- **Railways:** Chandler's *The Visible Hand* (1977) shows US railroads created the first salaried managerial hierarchies because coordination across distance was a matter of safety.
- **The contested root:** plantation owners in the Caribbean and US South used detailed record-keeping, labour quotas and depreciation of enslaved people as assets (Rosenthal, *Accounting for Slavery*, 2018). Cooke (2003) argues management studies "denied" this history.
- **Classical management:** Taylor (1911): at Bethlehem Steel, a loader's output allegedly rose from about **12.5 to 47.5 tons** of pig iron a day; Fayol (1916); Weber (1922).
- **Professionalisation:** Wharton (1881) and Harvard's MBA (1908) made management a subject.
- **Judgement:** management's origins lie in coordination **and** control of labour, which matters for how we judge it.

## Main point 2 — Has it produced a coherent body of knowledge?
- **For:** established frameworks for structure, strategy, motivation, leadership and decision-making; systematic research; the World Management Survey shows management practices predict productivity across thousands of firms (Bloom and Van Reenen).
- **Against: fragmentation.**
  - Taylor: efficiency and control; Mayo: social relationships (Hawthorne, 1924–32); Follett: participation and "power with"; Simon: bounded rationality; Porter: competitive positioning; Freeman: stakeholders.
  - These rest on different assumptions about people (economic, social, self-actualising) and purpose (profit, stakeholders).
  - Contingency theory (Burns and Stalker, 1961; Lawrence and Lorsch, 1967) admits there is no one best way, which is itself a sign there is no universal science.
  - **Replication problems:** the Hawthorne findings have been reinterpreted; McKinsey's diversity–profit link failed to replicate (Green and Hand, 2024).
- **Counter-argument:** a coherent discipline does not need one theory; medicine and economics are also plural.
- **Judgement:** management is a substantial body of complementary and competing perspectives, not a unified science.

## Main point 3 — Has it solved the problems it was created to address?
- **Successes:** huge productivity gains; coordination of global firms; quality control (Deming, Toyota); planning and accounting systems.
- **Persisting problems:**
  - **Control and alienation:** Braverman (1974) argued Taylorism deskilled work. Ford's 1913 assembly line led to labour turnover of about **370%**, which Ford answered with the **$5 day** in 1914.
  - **Neo-Taylorism:** algorithmic management now allocates, monitors and rates work. France's data regulator fined Amazon France Logistique **€32 million** (2024) for excessively intrusive warehouse monitoring.
  - **Rewards:** conflicts between pay and shareholder returns remain.
  - **Externalities:** environmental costs of production were never part of the original problem definition.
  - **Engagement:** Gallup finds only **20%** of employees worldwide were engaged in 2025.
- **Counter-argument:** it is unfair to judge management for problems that law, politics and economics also shape.
- **Judgement:** management improved coordination, but did not resolve the tensions between efficiency, power, wellbeing and social responsibility; often it relocated them.

## Conclusion
- **Answer:** management's origins are plural and partly uncomfortable; its knowledge is extensive but fragmented; its success is real but incomplete.
- **Why it matters:** if management began as a technology of control, its success should be judged not only by output but by who controls work and who benefits.
- **Final line:** management has made work more productive; whether it has made it better is still the open question.`,
      evidence: `!stat 1961 | Koontz's "management theory jungle"
!stat 12.5 → 47.5 tons | Taylor's claimed pig-iron gain per worker per day (Bethlehem Steel)
!stat ~370% | Ford's labour turnover in 1913, before the $5 day (1914)
!stat €32m | CNIL fine on Amazon France Logistique for warehouse monitoring (2024)
!stat 20% | Employees engaged worldwide in 2025 (Gallup, 2026)

#### Theories and thinkers
- **Classical:** Taylor (1911), Fayol (1916), Weber (1922).
- **Human relations:** Mayo, Follett, Barnard (1938).
- **Behavioural:** Simon (1947).
- **History:** Pollard (1965), Chandler (1977), Cooke (2003), Rosenthal (2018).
- **Critical:** Braverman (1974); Ghoshal (2005).
- **Contemporary:** Drucker, Porter, Freeman, Elkington.

#### Exam hook
- "Has management made work more productive, or simply made workers more controllable?"`,
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      id: 'q2',
      n: 2,
      title: 'The unintended consequences of efficiency-driven sustainability',
      tags: ['Sustainability', 'Jevons', 'Rebound', 'Decoupling'],
      prompt: `Businesses have driven efficiency to reduce waste and material throughput to address the climate and environmental crises. What are the unintended consequences of such a management mindset?`,
      plan: `## Introduction
- **Hook:** Google's 2024 environmental report showed its emissions **48%** higher than in 2019, despite world-leading data-centre efficiency, because AI demand grew faster than efficiency improved. In Ireland, data centres used **23%** of metered electricity in 2025, up from **5%** in 2015.
- **Define:** resource efficiency is producing more output with fewer inputs; material throughput is the total flow of materials extracted, used and discarded; the rebound effect is when savings make use cheaper and so increase it; decoupling is growth without rising environmental impact (relative or absolute).
- **Thesis:** efficiency is necessary, but as the main answer it backfires. Lower costs stimulate consumption, efficiency gains are used to produce more, impact per unit falls while total impact rises, and costs are shifted to suppliers. Efficiency improves how resources are used, not how much is used, so firms need absolute targets and business-model change.
- **Roadmap:** rebound and Jevons; efficiency serving growth; the illusion of sustainability and shifted costs.

## Main point 1 — Rebound effects and the Jevons paradox
- **Jevons, *The Coal Question* (1865):** more efficient steam engines made coal power cheaper, so coal use rose.
- **Rebound:** direct (drive more in an efficient car), indirect (spend savings elsewhere), economy-wide. Sorrell's UK Energy Research Centre review (2007) found direct rebounds for household energy often around **10–30%**, larger economy-wide.
- **Cars:** engines became more efficient, but SUVs took about **half** of new car sales by 2023 (IEA), absorbing the gains.
- **Computing:** cheaper computation fuels AI, cloud and streaming, so total electricity rises (Google; Irish data centres; EirGrid expects up to **30%** of demand by 2030).
- **Counter-argument:** without efficiency, damage would be even greater.
- **Judgement:** measure absolute resource use and emissions, not just efficiency ratios.

## Main point 2 — Efficiency in the service of growth
- **Claim:** efficiency usually lowers costs to sell more, not to use less.
  - **Global material extraction** roughly **tripled** since 1970 to over **100 billion tonnes** a year (UNEP International Resource Panel, 2024).
  - **Circularity Gap Report (2024):** the share of secondary materials in the global economy fell from **9.1%** (2018) to **7.2%**.
  - **Fast fashion:** clothing production roughly doubled between 2000 and 2014, while each garment was worn fewer times; less than **1%** of clothing material is recycled into new clothing (Ellen MacArthur Foundation, 2017).
  - **Georgescu-Roegen (1971):** production follows the entropy law: it always uses energy and creates waste, so growth has physical limits.
  - **Jackson, *Prosperity Without Growth* (2009); Raworth (2017).**
- **Decoupling evidence:** Haberl et al.'s 2020 review of 835 studies found absolute decoupling rare and too slow; Vogel and Hickel (2023) found decoupling rich countries would need about **220 years** to cut emissions by 95% at current rates.
- **Counter-argument:** growth funds clean technology; some countries have absolutely decoupled CO2.
- **Judgement:** the issue is not growth itself but whether it allows absolute reductions fast enough.

## Main point 3 — The illusion of sustainability and shifted costs
- **Measurable efficiency is easy to report,** so it crowds out harder questions about products and business models.
- **Recycling:** only about **9%** of plastic waste is recycled globally (OECD, 2022); recycling cannot justify rising production.
- **Electric vehicles:** zero tailpipe emissions, but impacts in mining, batteries and grid mix.
- **Outsourcing:** closing a domestic plant cuts Scope 1 emissions while Scope 3 rises; consumption-based accounting shows rich countries' footprints are higher than their territorial emissions.
- **Efficiency vs sufficiency (Princen, *The Logic of Sufficiency*, 2005):** asking "how much is enough?" rather than "how much per unit?"
- **Counter-argument:** incremental gains are often the only politically feasible path and still matter.
- **Judgement:** combine efficiency with durability, reuse, reduced demand and full value-chain accounting.

## Conclusion
- **Answer:** the unintended consequences are rebound, growth-driven throughput, an illusion of progress and displaced harms.
- **What managers should do:** set absolute targets, account for Scope 3, redesign products for longevity, and ask sufficiency questions.
- **Final line:** a business can become more efficient while making the environmental crisis worse; efficiency must serve limits, not growth.`,
      evidence: `!stat +48% | Google's emissions vs 2019 (2024 environmental report)
!stat 23% | Irish metered electricity used by data centres in 2025 (CSO)
!stat 3× | Global material extraction since 1970, now 100bn+ tonnes (UNEP IRP, 2024)
!stat 7.2% | Global circularity, down from 9.1% in 2018 (Circularity Gap Report, 2024)
!stat <1% | Clothing material recycled into new clothing (Ellen MacArthur Foundation)
!stat ~9% | Plastic waste recycled globally (OECD, 2022)

#### Theories
- **Jevons (1865); Khazzoom–Brookes postulate.**
- **Georgescu-Roegen (1971):** entropy and economics.
- **Daly:** steady-state economics.
- **Jackson (2009); Raworth (2017); Hickel (2020).**
- **Princen (2005):** sufficiency.
- **Porter and van der Linde (1995):** why efficiency appeals.

#### Exam hook
- "Can a business become more environmentally efficient while making the environmental crisis worse?"`,
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      id: 'q3',
      n: 3,
      title: 'Critically reflect on a team experience from the last year',
      tags: ['Teams', 'Reflection', 'Tuckman', 'Psychological safety'],
      prompt: `Critically reflect on a team experience you have had in the last year. Use concepts from teamwork and comment on whether you observed phenomena of team dynamics discussed in class.`,
      plan: `## Introduction
- **Set the scene (your real experience):** "Over the past year I worked in a [number]-person university team on [project and objective]. We shared a goal, but our experience showed that teamwork needs more than dividing tasks."
- **Define a team:** a group whose work is interdependent and aimed at a shared objective (Katzenbach and Smith, 1993), as opposed to a working group of individuals.
- **This is not the 2023 toxic-team memo:** reflect honestly on positive and negative dynamics, including your own role.
- **Thesis:** our performance depended less on individual ability than on role clarity, psychological safety, how we handled conflict and whether accountability was shared.
- **Roadmap:** development and roles; communication, trust and conflict; accountability and what I would change.

## Main point 1 — Team development and role allocation
- **Tuckman (1965; adjourning added with Jensen, 1977):** we spent the first week forming (polite, unclear); disagreement about [scope, standards or division of work] marked storming; [an event] helped us norm. Caveat: we cycled back to storming before the deadline, so the model was not linear.
- **Belbin (1981):** we had a natural coordinator and an implementer but no completer-finisher, which showed in a rushed final edit. Use Belbin as a reflection tool, not as a scientifically validated personality test.
- **Role ambiguity:** two of us drafted the same section while nobody owned referencing.
- **Counter-argument:** strict task division created silos; we lost a shared view of the argument.
- **Judgement:** clear ownership plus regular integration meetings.

## Main point 2 — Communication, trust and conflict
- **Psychological safety (Edmondson, 1999):** [was it safe to admit you had not finished, or to challenge a plan?]. Google's Project Aristotle (180 teams) found this the most important factor.
- **Task vs relationship conflict (Jehn, 1995):** our disagreement about [approach] improved the final structure because we argued about ideas; when [a comment] felt personal, it turned into relationship conflict and slowed us down. De Dreu and Weingart (2003) found even task conflict often hurts performance unless trust is high.
- **Groupthink (Janis, 1972):** near the deadline we agreed quickly to avoid tension and missed [a weakness].
- **Collective intelligence (Woolley et al., 2010):** groups did better when members took turns speaking evenly and were socially perceptive, not when they had the highest individual IQ. Ask whether one voice dominated.
- **Judgement:** the goal is not to remove conflict but to keep it about ideas.

## Main point 3 — Accountability, social loafing and what I would change
- **Social loafing (Ringelmann, 1913; Latané et al., 1979):** effort falls when individual contributions are invisible. Karau and Williams's meta-analysis (1993) found it reliably across tasks, weaker when work is identifiable and valued.
- **Example:** one member submitted late twice; others compensated, creating resentment and lower quality.
- **My own contribution:** be honest about one thing you did well and one you did badly (for example, avoiding a conversation about the late work).
- **Counter-argument:** contribution is not just word count; some members contributed in ideas or presentation.
- **What I would change:** a team charter in week one; named owners and internal deadlines; short weekly check-ins; peer feedback halfway through.

## Conclusion
- **Learning:** talented individuals do not automatically make a talented team.
- **Theory confirmed and challenged:** Tuckman described our early stages but not our relapse; psychological safety and social loafing explained the key moments.
- **Final line:** good teamwork needs clear roles, constructive disagreement and shared accountability, and I now see my own behaviour as part of the team's dynamics, not outside them.`,
      evidence: `!stat 180 teams | Google's Project Aristotle; psychological safety ranked first
!stat 1913 | Ringelmann's rope-pulling: per-person effort fell as group size grew
!stat 78 studies | Karau and Williams's (1993) meta-analysis of social loafing
!stat 2010 | Woolley et al.: a "collective intelligence" factor linked to equal turn-taking and social sensitivity

#### Theories
- **Tuckman (1965); Tuckman and Jensen (1977).**
- **Belbin (1981):** nine team roles.
- **Edmondson (1999).**
- **Janis (1972).**
- **Lencioni (2002).**
- **Jehn (1995); De Dreu and Weingart (2003).**
- **Katzenbach and Smith (1993):** teams vs working groups.

#### How to maximise marks
- One genuine experience with enough detail to be believable.
- Two or three theories in depth, not ten listed.
- What happened, why, and its effect on performance.
- Positive and negative dynamics, and your own role.
- Do not turn it into a complaint about teammates.`,
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      id: 'q4',
      n: 4,
      title: 'The US opioid crisis: organisations that failed, or worked too well',
      tags: ['Case analysis', 'Ethics', 'Incentives', 'Regulation'],
      prompt: `What caused the opioid crisis in the United States? Critically analyse two or three aspects of organisation and management that did not work, or indeed worked too well.`,
      plan: `## Introduction
- **Hook:** the CDC estimates nearly **806,000** people died from opioid-involved overdoses in the US between **1999 and 2022**.
- **Waves:** prescription opioids (from the late 1990s), then heroin (from about 2010), then illicitly made fentanyl (from about 2013), which now dominates deaths.
- **Define the tools:** principal–agent problem (an agent's incentives diverge from the principal's interests); regulatory capture; externality; organisational failure.
- **Thesis:** the crisis was not caused by one company or one regulator. It came from the interaction of aggressive pharmaceutical marketing, weak oversight, distributors that moved pills without scrutiny, and a fragmented health system. Some organisations failed; others were **exceptionally good at the wrong objective**.
- **Roadmap:** marketing that worked too well; oversight and supply chains that failed; fragmented accountability.

## Main point 1 — Purdue's marketing machine worked too well
- **OxyContin:** approved by the FDA in **1995**, launched **1996**; its label suggested the delayed-absorption formula reduced abuse.
- **Sales system:** bonuses for reps; prescriber data used to target high-volume doctors; promotion of claims that addiction risk was under 1%, misusing a five-sentence 1980 letter (Porter and Jick) cited hundreds of times.
- **Shaping the context:** "pain as the fifth vital sign" campaigns (late 1990s) encouraged aggressive pain treatment.
- **Consultants:** McKinsey advised Purdue on how to "turbocharge" sales; it later paid about **$573 million** (2021) and **$650 million** (2024) to settle claims.
- **Consequences:** Purdue and executives pleaded guilty to misbranding in **2007**; Purdue pleaded guilty again in **2020**; the US Supreme Court blocked a deal shielding the Sackler family in 2024; a revised settlement of about **$7.4 billion** followed in 2025.
- **Principal–agent chain:** patients rely on doctors; doctors relied partly on company information; the company was paid for volume.
- **Counter-argument:** companies legitimately inform doctors; pain treatment matters.
- **Judgement:** commercial success cannot justify misleading promotion.

## Main point 2 — Oversight and supply chains failed to detect risk
- **FDA:** approved a misleading label; the reviewing officer later went to work for Purdue, a textbook concern about regulatory capture.
- **Distributors:** McKesson, Cardinal Health and AmerisourceBergen had legal duties to report suspicious orders. Wholesalers shipped about **9 million** hydrocodone pills over two years to one pharmacy in **Kermit, West Virginia**, a town of about **400** people.
- **Settlement:** about **$26 billion** with the three distributors and Johnson & Johnson (2022).
- **Management lesson:** systems were built to move product at scale; compliance was a secondary function that lagged behind commercial growth.
- **Normalisation of deviance (Vaughan, 1996):** each unusual order became normal.
- **Counter-argument:** regulators and distributors cannot foresee every misuse; illicit fentanyl is a separate supply.
- **Judgement:** oversight must be built into operations, not bolted on after expansion.

## Main point 3 — Fragmented accountability and externalised costs
- **The problem of many hands (Thompson, 1980):** manufacturers promoted, doctors prescribed, distributors shipped, pharmacies dispensed, insurers reimbursed pills more readily than addiction treatment or physiotherapy, regulators supervised parts.
- **Each actor optimised its own task;** nobody owned the system outcome.
- **Externality:** profits were private; addiction, deaths, foster care, lost work and policing costs were public.
- **Counter-argument:** many doctors prescribed in good faith; opioids are appropriate for some patients.
- **Judgement:** systems need someone accountable for the full patient journey, from prescription to recovery.

## Conclusion
- **Answer:** the crisis was caused by organisations that did their narrow jobs too well and their wider responsibilities badly.
- **Generalise:** incentives, metrics and fragmented responsibility can produce catastrophe without any single actor intending it.
- **Final line:** effective management means aligning incentives, oversight and accountability with public welfare; otherwise organisational efficiency becomes social harm.`,
      evidence: `!stat ~806,000 | US opioid-involved overdose deaths, 1999–2022 (CDC)
!stat 1996 | OxyContin launched (approved 1995)
!stat ~9 million | Hydrocodone pills shipped over two years to one pharmacy in a town of ~400 (Kermit, WV)
!stat ~$26bn | Distributors and J&J settlement (2022)
!stat ~$7.4bn | Revised Purdue and Sackler settlement (2025)

#### Concepts
- **Principal–agent theory (Jensen and Meckling, 1976).**
- **Regulatory capture (Stigler, 1971).**
- **Externalities.**
- **Normalisation of deviance (Vaughan, 1996).**
- **Problem of many hands (Thompson, 1980).**
- **Goodhart's law:** sales targets became the goal.

#### Exam hook
- "What happens when an organisation becomes exceptionally good at achieving the wrong objective?"
- Comparable cases: **Wells Fargo** fake accounts; **Boeing 737 MAX**; **Volkswagen** emissions.`,
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      id: 'q5',
      n: 5,
      title: 'What does a broader concept of technology offer managers?',
      tags: ['Technology', 'Philosophy', 'Power', 'Socio-technical systems'],
      prompt: `What does a more expanded philosophical, historical or anthropological concept of technology offer managers in understanding the organisation and its environment?`,
      plan: `## Introduction
- **Hook:** Kranzberg's first law (1986): "technology is neither good nor bad; nor is it neutral."
- **Narrow view:** technology as tools and software that raise efficiency (an **instrumental** view). **Broader view:** the knowledge, practices and material arrangements through which people organise and transform the world.
- **Key terms:** technological determinism (technology drives change inevitably); social construction of technology (people and power shape technology); socio-technical systems (the technical and social must be designed together); Heidegger's "enframing".
- **Thesis:** a broader concept shows managers that technology shapes behaviour, power, culture and the environment, and is itself shaped by choices. Managers who see this make better decisions about what to adopt and how.
- **Roadmap:** history (technology and control of work); philosophy (technology is not neutral); anthropology and sociology (technology is shaped by culture and practice).

## Main point 1 — History: technology has always reorganised work and power
- **Marx (*Capital*, 1867):** machinery raises productive power but intensifies labour and shifts control to owners.
- **Mumford, *Technics and Civilization* (1934):** the clock, not the steam engine, was the key machine of industrial society: it imposed time discipline.
- **Industrial Revolution:** factories brought centralised workplaces, specialised tasks and supervision; technology changed structure as well as output.
- **Trist and Bamforth (1951):** mechanised longwall coal mining broke up self-managing teams and productivity fell; the Tavistock **socio-technical systems** view says technical and social systems must be designed together.
- **Today:** algorithmic management allocates, times and rates work, as Taylor's stopwatch once did.
- **Judgement:** ask who gains control and who loses discretion when new systems arrive.

## Main point 2 — Philosophy: technology is not neutral
- **Heidegger, "The Question Concerning Technology" (1954):** modern technology "enframes" the world as a stock of resources to be ordered and optimised.
- **Ellul, *The Technological Society* (1954):** technique, the search for the most efficient means, becomes an end in itself.
- **Winner, "Do Artifacts Have Politics?" (1980):** artefacts can embody political choices and distribute power.
- **Zuboff (2019):** surveillance capitalism turns human experience into data for prediction.
- **Example:** productivity dashboards reduce employees to measurable outputs; Amazon France was fined **€32 million** (2024) for over-intrusive monitoring.
- **Example:** recruitment algorithms trained on past data reproduce past bias (Amazon scrapped its tool in 2018).
- **Counter-argument:** technology also removes drudgery, improves safety and creates flexibility.
- **Judgement:** ask not only "does it work?" but "what values does it embed?"

## Main point 3 — Anthropology and sociology: technology is shaped by culture and use
- **Pinch and Bijker (1984):** the social construction of technology: the bicycle's design was settled by competing social groups, not by engineering alone.
- **Orr, *Talking About Machines* (1996):** Xerox repair technicians fixed copiers through shared stories, not manuals; formal systems missed this tacit knowledge.
- **Suchman (1987):** people use technology through situated action, not by following designed plans.
- **Same tool, different outcomes:** the same software succeeds or fails depending on culture and trust.
- **Environment:** AI depends on data centres, energy, water, chips and global supply chains; Irish data centres used **23%** of metered electricity in 2025.
- **Counter-argument:** managers cannot philosophise about every tool before adopting it.
- **Judgement:** a broader view does not mean rejecting technology; it means seeing consequences beyond operations.

## Conclusion
- **Answer:** the broader concept gives managers a way to see technology as a decision about power, culture and the environment, not just a productivity tool.
- **Practical upshot:** involve workers in design, audit algorithms, account for energy and materials, keep humans accountable.
- **Final line:** technology can serve the organisation, or the organisation can quietly reorganise itself around technology; only managers who see the difference can choose.`,
      evidence: `!stat 1986 | Kranzberg: technology is "neither good nor bad; nor is it neutral"
!stat 1951 | Trist and Bamforth's coal-mining study founds socio-technical systems theory
!stat €32m | CNIL fine on Amazon France Logistique (2024)
!stat 23% | Irish metered electricity used by data centres (2025)

#### Thinkers
| Thinker | Idea | Use |
| --- | --- | --- |
| Marx (1867) | Machinery, labour and control | Power |
| Mumford (1934) | Technics and civilisation; the clock | History |
| Heidegger (1954) | Enframing | Philosophy |
| Ellul (1954) | Technique as an end | Efficiency critique |
| Winner (1980) | Artefacts have politics | Power |
| Pinch and Bijker (1984) | Social construction of technology | Choice |
| Trist and Bamforth (1951) | Socio-technical systems | Management design |
| Orr (1996); Suchman (1987) | Tacit and situated knowledge | Anthropology |
| Zuboff (2019) | Surveillance capitalism | Data and control |

#### Exam hook
- "Does technology serve the organisation, or does the organisation reorganise itself around technology?"`,
    },
  ],
};
