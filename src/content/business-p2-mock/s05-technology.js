export default {
  id: 'technology',
  num: 5,
  label: 'AI and algorithmic management',
  kind: 'notes',
  title: 'Technology, AI and algorithmic management',
  summary: `"The impact of technology" is a management-module outcome examined only once (2025's philosophical question), and **AI in people management is the likely Section B examiner's own research**. 2026 is full of material: the EU Platform Work Directive deadline, the AI Act delay, Gallup's engagement slump and evidence that AI is reshaping entry-level work.`,
  meta: [['Section', 'B'], ['Confidence', '55%'], ['Past papers', '2025 Q5 (concept of technology); 2022 Q4 (algorithms and bias)']],
  sections: [
    {
      id: 'glance',
      title: 'At a glance',
      md: `!stat 2 Dec 2026 | EU Platform Work Directive must be in national law
!stat 2 Dec 2027 | EU AI Act high-risk rules for hiring and worker-management AI now apply (delayed by the 2026 Digital Omnibus deal)
!stat +14% / +34% | AI assistant's productivity effect for all agents / novices (Brynjolfsson, Li and Raymond)
!stat 13–16% | Relative fall in employment of 22–25-year-olds in the most AI-exposed jobs (Stanford)
!stat 23% | Irish metered electricity used by data centres in 2025 (CSO)

#### Likely wordings
- "Assess the benefits and risks of algorithmic management for employees and organisations. Could such tools encourage or undermine sustainable behaviour at work?"
- "Does algorithmic management improve performance at the expense of autonomy and wellbeing?"
- "Will AI augment or replace managers?"
- "Is algorithmic management a new Taylorism?"
- "Who is responsible when an algorithm makes an unfair decision about a worker?"
- "How should organisations govern the use of AI in HR?"

#### The core argument
- Algorithmic management **extends classical management's logic** (measure, standardise, control) with unprecedented scale and precision.
- Its outcomes are **not determined by the technology** but by design choices about what to measure, who can see and contest decisions, and whether it augments or replaces human judgement.
- The benefits flow mainly to organisations **unless** workers have transparency and voice, which is exactly what 2026 EU law is trying to build.`,
    },
    {
      id: 'definitions',
      title: 'Key definitions',
      md: `- **Algorithmic management:** the use of software algorithms to carry out coordination and control functions traditionally done by managers (Lee et al., 2015).
- **Kellogg, Valentine and Christin's "6 Rs" (2020):** algorithms **direct** work (restricting, recommending), **evaluate** it (recording, rating) and **discipline** workers (replacing, rewarding).
- **People analytics:** using data about employees to inform HR decisions (hiring, promotion, attrition prediction).
- **Automation vs augmentation:** replacing human tasks vs enhancing human capability.
- **Socio-technical system:** an organisation's technical and social systems are interdependent and should be designed together (Trist and Bamforth, 1951).
- **Algorithmic bias:** systematic, unfair outcomes from data or design.
- **Automation bias:** over-reliance on automated output. **Algorithm aversion** (Dietvorst et al., 2015): abandoning an algorithm after seeing it err, even when it outperforms humans. **Algorithm appreciation** (Logg et al., 2019): people sometimes prefer algorithmic advice to human advice.
- **Surveillance:** the panopticon (Bentham; Foucault, 1975): people who might be watched discipline themselves.
- **"Human in the loop":** a person reviews or can override automated decisions.`,
    },
    {
      id: 'theories',
      title: 'Theories and frameworks',
      md: `#### From Taylor to the algorithm
- **Taylor (1911):** time-and-motion study, standard tasks, separation of planning from doing; algorithmic management is often called **"digital Taylorism"**.
- **Braverman, *Labor and Monopoly Capital* (1974):** labour process theory: management uses technology to deskill work and capture control.
- **Edwards (1979):** "technical control" embedded in machines (the assembly line) and "bureaucratic control" in rules; algorithms combine both.
- **Weber's iron cage:** rationalisation, now coded into software.

#### Socio-technical and organisational theory
- **Trist and Bamforth (1951):** mechanised coal mining broke up self-managing teams and productivity fell; restoring team autonomy around the new technology fixed it.
- **Orlikowski (1992, 2007):** technology is shaped by how people use it ("duality of technology"; sociomateriality).
- **Zuboff, *In the Age of the Smart Machine* (1988):** technology can **automate** (replace) or **informate** (give people new information and understanding). Her later *Surveillance Capitalism* (2019) warns of data extraction for prediction and control.
- **Winner (1980):** artefacts have politics; design choices distribute power.

#### Motivation and wellbeing
- **Self-determination theory (Deci and Ryan):** constant monitoring and algorithmic control undermine autonomy; transparent feedback can support competence.
- **Job demands–resources model (Bakker and Demerouti):** algorithms that raise pace and pressure (demands) without support (resources) cause burnout.
- **Organisational justice:** workers judge algorithms by distributive, procedural and interactional fairness; opacity damages procedural justice.

#### The economics of automation
- **Polanyi's paradox:** "we know more than we can tell"; tacit tasks were hard to automate, though generative AI now reaches some of them.
- **Autor (2015):** automation hollows out middle-skill routine jobs.
- **Acemoglu and Restrepo:** "so-so automation" replaces workers without raising productivity much.
- **Brynjolfsson, "The Turing Trap" (2022):** designing AI to imitate and replace humans concentrates wealth; designing it to augment humans spreads gains.
- **Goodhart's law / Campbell's law:** when a measure becomes a target, it stops being a good measure; behaviour games the metric.`,
    },
    {
      id: 'evidence',
      title: 'Evidence and statistics',
      md: `!stat +14% / +34% | Call-centre productivity with an AI assistant: average / least experienced (Brynjolfsson, Li and Raymond, 2023–25)
!stat 758 | BCG consultants: +12% tasks, +25% speed, +40% quality inside AI's frontier, worse outside it (Dell'Acqua et al., 2023)
!stat 13% → 16% | Relative employment fall for 22–25-year-olds in most AI-exposed jobs (Stanford, Aug and Nov 2025 versions)
!stat 20% | Global engagement in 2025 (Gallup); employees managed by "watching" systems report more stress
!stat ~415 TWh → ~945 TWh | Global data-centre electricity, 2024 to 2030 projection (IEA, *Energy and AI*, 2025)
!stat 23% | Irish metered electricity used by data centres (2025); up to 30% by 2030 (EirGrid)
!stat 40% | Cut in Google data-centre cooling energy using DeepMind's AI (2016)`,
    },
    {
      id: 'cases',
      title: 'Case studies',
      md: `#### Monitoring and control
- **Amazon warehouses:** scanners track "time off task"; France's data regulator (CNIL) fined Amazon France Logistique **€32 million** (January 2024) for excessively intrusive monitoring, including tracking scanner inactivity to the second.
- **Ride-hailing and delivery:** Uber and Deliveroo assign jobs, set prices and rate workers through apps. Amsterdam courts (2021–23) ordered Uber and Ola to give drivers information about automated decisions, including dismissals.
- **Deliveroo, Bologna (December 2020):** a court found its rider-ranking algorithm ("Frank") discriminatory because it penalised cancellations without distinguishing illness or strikes.
- **Foodinho/Glovo (Italy, 2021):** the data regulator fined it **€2.6 million** over its rider-scoring algorithm.
- **Spain's "Rider Law" (2021):** presumed delivery riders are employees and required firms to disclose to unions how their algorithms affect working conditions, the model for the EU directive.

#### Hiring and evaluation
- **Amazon (2018):** scrapped an experimental CV-screening tool that downgraded CVs containing "women's", because it learned from a decade of male-dominated hiring.
- **HireVue (2021):** dropped facial analysis from video interviews after criticism.
- **Mobley v. Workday (US, 2025):** a court allowed age-discrimination claims about AI screening to proceed as a nationwide collective action, raising the question of vendor liability.

#### Automation and its limits
- **Klarna (2024–25):** said its AI assistant did the work of about **700** customer-service agents; in 2025 its CEO said quality had suffered and it would ensure customers could always reach a human.
- **IBM (2023):** said it would pause hiring for back-office roles AI could do, estimated at around **7,800** jobs over several years.
- **Duolingo (2025):** an "AI-first" memo saying contractors would be phased out where AI could do the work prompted public backlash.

#### Augmentation and sustainability
- **UPS ORION route optimisation:** the company says it saves about **100 million** miles and **10 million** gallons of fuel a year.
- **Google DeepMind (2016):** AI cut data-centre cooling energy by **40%**.
- **Ireland's data centres:** the flip side; 23% of metered electricity, constrained grid, EirGrid restrictions on new Dublin connections.`,
    },
    {
      id: 'law',
      title: 'Regulation in 2026',
      md: `| Law | What it does | Status |
| --- | --- | --- |
| GDPR Article 22 | Right not to be subject to solely automated decisions with significant effects, with exceptions; right to human intervention | In force since 2018 |
| EU AI Act | AI used in recruitment, promotion, task allocation and monitoring is **high-risk**: risk management, data quality, transparency, human oversight. **Emotion recognition in workplaces is banned** (from 2 February 2025) | High-risk rules delayed to **2 December 2027** after the Digital Omnibus deal (7 May 2026) |
| Platform Work Directive (2024/2831) | Presumption of employment where platforms control work; transparency about automated monitoring and decisions; **human review** of significant decisions; ban on processing data about emotional state, private conversations or union activity | Transposition deadline **2 December 2026**; Ireland's law not yet published in late 2026 |
| Spain Rider Law (2021) | Employment presumption; algorithm transparency to unions | In force |

- **Framing the delay:** the AI Act delay was presented as "simplification"; critics see a pattern with Omnibus I (sections 7 and 8).`,
    },
    {
      id: 'debates',
      title: 'Debates: arguments and counter-arguments',
      md: `#### 1. Efficiency vs autonomy
- **For:** better matching, routing and scheduling; real-time feedback; lower costs; flexible hours for platform workers.
- **Against:** loss of autonomy and discretion; work intensification; stress (SDT; job demands–resources).
- **Judgement:** the same data can inform workers (Zuboff's "informate") or control them ("automate"); design decides.

#### 2. Objective or biased?
- **For algorithms:** humans are biased and inconsistent; statistical prediction often beats experts (Meehl, 1954); algorithms can be audited, humans less so.
- **Against:** biased data reproduce bias (Amazon 2018; Obermeyer et al., 2019); proxies hide discrimination; opacity prevents challenge.
- **Judgement:** algorithms can reduce bias only with representative data, audits and contestability.

#### 3. Augmentation or replacement?
- **Augmentation:** biggest gains for novices (+34%); AI as teammate (P&G 2025).
- **Replacement:** entry-level jobs falling (Stanford); "so-so automation"; Klarna.
- **Judgement:** the Turing Trap is a choice; managers decide whether to replace or augment.

#### 4. Who is accountable?
- **Problem:** responsibility diffuses between vendor, data scientist, manager and system (a version of the "many hands" problem from the 2025 opioid question).
- **Answer emerging in law:** deployers keep responsibility; human oversight; vendor liability (Workday).

#### 5. Is it really new?
- **Continuity:** Taylor's stopwatch, Ford's line, call-centre metrics.
- **Novelty:** scale, invisibility, real-time adjustment, opacity, and managers themselves being managed by dashboards.

#### 6. Does it deskill managers?
- **Yes:** if algorithms allocate and evaluate, managers become exception-handlers.
- **No:** it frees managers for coaching and judgement, which Gallup's data say matter most.`,
    },
    {
      id: 'sustainability',
      title: 'Can it encourage or undermine sustainable behaviour?',
      md: `#### Encourage
- **Optimisation:** route planning (UPS ORION), load consolidation, predictive maintenance, smart building controls, demand forecasting that reduces waste (food retail).
- **Information:** real-time energy and waste dashboards for teams; social comparison feedback (Opower: about **2%** less household energy).
- **Nudges:** default low-carbon travel options, digital meeting defaults.
- **Measurement:** Scope 3 data collection across suppliers.

#### Undermine
- **Speed targets:** delivery and warehouse metrics reward speed over safe, efficient driving; "instant delivery" promises raise emissions per parcel.
- **Rebound:** cheaper computation increases demand (Jevons); global data-centre demand projected to more than double by 2030.
- **Energy and water footprint of AI itself:** Irish data centres at 23% of metered electricity.
- **Crowding out:** targets and surveillance displace intrinsic environmental motivation and the trust needed for voluntary green behaviour.
- **Narrow metrics:** what is not measured (environmental quality, care) gets ignored (Goodhart).

#### Design principles
1. Include environmental metrics alongside productivity.
2. Measure the tool's own energy use.
3. Transparency and worker participation in design (socio-technical principles).
4. Human oversight of significant decisions.
5. Use data to **informate** teams, not just to control individuals.`,
    },
    {
      id: 'links',
      title: 'Links to other topics and past questions',
      md: `| Link | How to use it |
| --- | --- |
| 2025 Q5 technology | Marx, Heidegger, Winner, Trist and Bamforth |
| 2025 Q1 origins | Taylorism to algorithmic management |
| 2022 Q4 cognitive errors | Algorithms reduce some biases and add others |
| Teams (section 1) | AI teammates; hybrid; juniors |
| Leadership (section 4) | Who leads when software allocates work |
| Decision-making (section 10) | Automation bias; algorithm aversion |
| Critiques (section 7) | Rebound effect in computing |`,
    },
    {
      id: 'structures',
      title: 'Model answer structures',
      md: `#### Benefits, risks and sustainable behaviour (see Mock 2027 B2)
1. **Intro:** define (Kellogg et al.'s 6 Rs); 2026 law; thesis.
2. **Benefits:** efficiency, consistency, augmentation (+14% / +34%), flexibility.
3. **Risks:** neo-Taylorism (Amazon €32m), autonomy (SDT), bias (Amazon 2018, Workday), opacity (Uber Amsterdam), Goodhart.
4. **Sustainability:** encourage (UPS, DeepMind, dashboards) vs undermine (speed targets, rebound, AI energy).
5. **Conclusion:** governance determines which.

#### "Is algorithmic management a new Taylorism?"
1. **Intro:** Taylor's principles; thesis: yes in logic, new in scale and opacity.
2. **Continuities:** measurement, standardisation, separation of planning and doing (Braverman).
3. **Discontinuities:** real-time, invisible, self-learning, managing managers too.
4. **Resistance and regulation:** courts, Rider Law, Platform Work Directive.
5. **Conclusion.**

#### "Will AI replace managers?"
1. **Intro:** Mintzberg's roles; thesis: AI will take informational tasks, not interpersonal ones.
2. **What AI can do:** monitoring, scheduling, analysis (informational and some decisional roles).
3. **What it cannot:** trust, judgement in ambiguity, accountability, coaching (Gallup's 70%).
4. **Risks:** automation bias, deskilling, accountability gaps.
5. **Conclusion.**`,
    },
    {
      id: 'memorise',
      title: 'Memorise',
      md: `1. Lee et al. (2015) definition; Kellogg, Valentine and Christin (2020): direct, evaluate, discipline (6 Rs).
2. Taylor (1911); Braverman (1974); Edwards (1979): technical control.
3. Trist and Bamforth (1951): socio-technical systems.
4. Zuboff: automate vs informate (1988); surveillance capitalism (2019).
5. Brynjolfsson, Li and Raymond: +14% overall, +34% novices.
6. BCG jagged frontier: 758 consultants; +12%, +25%, +40%.
7. Stanford: 13% → 16% fall for young workers in exposed jobs.
8. Amazon France €32m (CNIL, 2024); Foodinho €2.6m (2021); Deliveroo Bologna (2020).
9. Amazon CV tool scrapped (2018); Mobley v. Workday (2025).
10. Spain Rider Law (2021); Platform Work Directive deadline 2 Dec 2026.
11. AI Act: emotion recognition at work banned from Feb 2025; high-risk rules from 2 Dec 2027.
12. Klarna: ~700 agents' work, then back to human access.
13. IEA: data centres ~415 TWh (2024) to ~945 TWh (2030).
14. UPS ORION: ~100m miles saved a year; DeepMind cooling −40%.
15. Brynjolfsson's "Turing Trap": augment, don't imitate.`,
    },
  ],
};
