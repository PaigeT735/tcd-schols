export default {
  id: 'decisions',
  num: 10,
  label: 'Decision-making and bias',
  kind: 'notes',
  title: 'Decision-making, intuition and cognitive bias',
  summary: `Examined in **2022** (can managers escape their cognitive errors?) and **2023** (Mintzberg and intuition), absent since. Its most likely return is through **AI**: will algorithms improve managerial judgement or automate managers' biases? It also supplies arguments for almost every other question (groupthink in teams, overconfident leaders, present bias in climate policy).`,
  meta: [['Section', 'B'], ['Confidence', '30%'], ['Past papers', '2022 Q4 · 2023 Q1']],
  sections: [
    {
      id: 'glance',
      title: 'At a glance',
      md: `!stat 8.5% | Of 16,000+ projects that met budget and schedule; 0.5% also met benefits (Flyvbjerg)
!stat 6× | Process vs analysis in decision quality (Lovallo and Sibony, 1,048 decisions)
!stat 55% | Median difference between two underwriters' quotes for the same case; executives expected about 10% (Kahneman, Sibony and Sunstein, *Noise*, 2021)
!stat ~2× | Losses loom about twice as large as equal gains (prospect theory)

#### Likely wordings
- "Will AI improve managerial decision-making or simply automate managers' biases?"
- "Can managers ever escape their cognitive errors?" (2022)
- "Discuss the benefits and drawbacks of intuition in organisational decisions." (2023)
- "Why do organisations persist with failing projects?"
- "Why do managers and governments under-react to long-term risks such as climate change?"

#### The core argument
- Managers are **boundedly rational**: they satisfice under limited time, information and attention.
- Their shortcuts (heuristics) are usually useful but produce **predictable** errors (biases) and **unpredictable** scatter (noise).
- Individuals cannot remove bias, but **organisations can design decision processes** that reduce it; algorithms help with noise but import bias from data and add automation bias.`,
    },
    {
      id: 'definitions',
      title: 'Key definitions',
      md: `- **Rational decision model:** define the problem, identify criteria, generate all alternatives, evaluate, choose the optimum.
- **Bounded rationality (Simon, 1947; 1955):** decision-makers have limited information, time and cognitive capacity, so they **satisfice** (choose the first option good enough). Simon won the Nobel Prize in economics in 1978.
- **Heuristic:** a mental shortcut.
- **Bias:** a systematic deviation from rational judgement.
- **Noise:** random variability in judgements that should be identical (Kahneman, Sibony and Sunstein, 2021).
- **System 1 and System 2 (Kahneman, 2011):** fast, automatic, intuitive vs slow, effortful, deliberate.
- **Intuition:** judgement without conscious reasoning; expert intuition is pattern recognition.
- **Escalation of commitment (Staw, 1976):** continuing to invest in a failing course of action because of past investment.
- **Present bias / hyperbolic discounting:** overweighting immediate payoffs relative to later ones.
- **Automation bias:** over-trusting machine output. **Algorithm aversion:** rejecting algorithms after seeing them err.
- **Evidence-based management (Pfeffer and Sutton, 2006; Rousseau):** combining research, organisational data, professional expertise and stakeholder values.`,
    },
    {
      id: 'theories',
      title: 'Theories and models',
      md: `#### Models of organisational decision-making
- **Rational model:** a normative ideal; rarely followed.
- **Bounded rationality and satisficing (Simon; March and Simon, 1958).**
- **Incrementalism, "The Science of Muddling Through" (Lindblom, 1959):** policymakers move in small steps from the status quo; safe but slow.
- **Garbage-can model (Cohen, March and Olsen, 1972):** in "organised anarchies" (universities), problems, solutions, participants and choice opportunities flow independently and meet by chance.
- **Political model:** decisions reflect power and coalitions (Pfeffer, 1981).
- **Mintzberg (1975):** real managerial work is brief, fragmented and verbal; managers rely on soft information and intuition.

#### Heuristics and biases (Tversky and Kahneman, 1974)
- **Availability:** judging likelihood by how easily examples come to mind (fear of flying after a crash).
- **Representativeness:** judging by similarity to a stereotype, ignoring base rates.
- **Anchoring:** in their experiment, a wheel of fortune landing on 10 or 65 shifted estimates of the share of African countries in the UN to about 25% and 45%.

#### Prospect theory (Kahneman and Tversky, 1979)
- People judge gains and losses relative to a reference point; **losses hurt about twice as much** as equal gains; risk-averse for gains, risk-seeking for losses (gambling to avoid a sure loss explains escalation).
- **Framing effects (1981):** the "Asian disease" problem: people choose differently when the same outcome is described as lives saved or lives lost.

#### Other key biases for managers
- **Confirmation bias:** seeking supporting evidence.
- **Overconfidence and the planning fallacy:** underestimating costs and time.
- **Sunk cost and escalation (Staw, 1976):** the "Concorde fallacy".
- **Status quo bias** and **loss aversion:** resisting change.
- **Hindsight bias:** "I knew it all along".
- **Survivorship bias:** studying only successes (critique of *Good to Great*).
- **Fundamental attribution error:** blaming individuals rather than situations.
- **Groupthink (Janis, 1972):** see section 1.

#### Intuition: when to trust it
- **Klein's recognition-primed decision model:** experts (firefighters, nurses, pilots) recognise patterns and act.
- **Kahneman and Klein (2009):** intuition is trustworthy only in "high-validity" environments with regular patterns and **rapid, clear feedback**; not in long-range forecasting or strategy.
- **Gigerenzer (2007):** simple heuristics can beat complex models under uncertainty.
- **Tetlock (2005; 2015):** expert political forecasts barely beat chance; "superforecasters" who update often and think probabilistically do better.

#### Noise (Kahneman, Sibony and Sunstein, 2021)
- In an insurance company, two underwriters' quotes for the same case differed by a median of **55%**; executives had expected about **10%**.
- Remedies: "decision hygiene": structured judgements, independent assessments before discussion, averaging, simple rules and algorithms.`,
    },
    {
      id: 'debiasing',
      title: 'How organisations reduce bias',
      md: `| Tool | What it does | Evidence or example |
| --- | --- | --- |
| Pre-mortem (Klein, 2007) | Imagine the project has failed; list why | Prospective hindsight raises identification of reasons by about 30% (Mitchell, Russo and Pennington, 1989) |
| Reference-class forecasting (Flyvbjerg) | Use outcomes of similar past projects as the baseline (the "outside view") | Adopted for UK and Danish infrastructure appraisal |
| Devil's advocate and red teams | Assign people to attack the plan | Kennedy's redesign after the Bay of Pigs |
| Checklists | Standardise critical steps | The WHO surgical safety checklist cut deaths and complications sharply in its 2009 trial (Gawande) |
| Independent review | Outsiders assess assumptions | Board-commissioned valuations before acquisitions |
| Decision journals | Record predictions to learn calibration | Tetlock's forecasters |
| Structured interviews | Same questions, scoring rubrics | More predictive of job performance than unstructured interviews (Schmidt and Hunter, 1998) |
| Kahneman, Lovallo and Sibony's checklist (HBR, 2011) | Twelve questions such as "Is there groupthink?", "Is the base case overly optimistic?" | — |
| "One-way vs two-way doors" (Bezos) | Heavy process only for irreversible decisions | Amazon |
| Diverse teams | More perspectives, less shared blind spots | Phillips et al. (2009): more accurate, less confident |

- **Lovallo and Sibony (2010):** across **1,048** major decisions, a good process mattered about **six times** more than detailed analysis for outcomes.
- **Limits:** debiasing training for individuals has modest effects; process redesign works better. Too much process slows urgent decisions.`,
    },
    {
      id: 'cases',
      title: 'Case studies',
      md: `#### Escalation and the planning fallacy
- **Concorde:** Britain and France kept funding long after it was clear it would never pay back.
- **Berlin Brandenburg airport:** opened in **2020**, nine years late, at roughly three times the original budget.
- **Dublin's National Children's Hospital:** early estimates of about €650 million rose to well over **€2 billion**.
- **HSE PPARS payroll system:** abandoned in 2005 after costs ballooned to well over €100 million, a classic Irish IT escalation.
- **Flyvbjerg's "iron law of megaprojects":** over budget, over time, under benefits, over and over again.

#### Overconfidence and confirmation in strategy
- **AOL–Time Warner (2000):** a **$99 billion** write-down in 2002.
- **Quaker Oats and Snapple:** bought for **$1.7 billion** (1994), sold for about **$300 million** (1997).
- **Kodak:** invented the digital camera (1975) but trusted its film model; bankrupt 2012.
- **Blockbuster:** turned down buying Netflix for **$50 million** (2000).
- **New Coke (1985):** about **200,000** taste tests, still wrong: analysis missed emotional attachment.

#### Group decisions
- **Bay of Pigs (1961) vs Cuban Missile Crisis (1962):** the same advisers, a redesigned process.
- **Challenger (1986):** engineers warned about O-rings in the cold; managers were told to "take off your engineering hat and put on your management hat".
- **Boeing 737 MAX:** schedule and cost pressure shaped design and certification choices.

#### Algorithms and bias
- **Amazon's recruiting tool (2018):** penalised women.
- **Obermeyer et al. (*Science*, 2019):** a US health algorithm under-referred Black patients because it used past spending as a proxy for need.
- **Meehl (1954):** statistical prediction usually matched or beat clinical judgement.
- **Centaur chess:** human-plus-computer teams beat either alone (the augmentation argument).`,
    },
    {
      id: 'ai',
      title: 'Will AI improve decisions or automate bias?',
      md: `#### Improve
- **Removes noise:** consistent rules give the same answer to the same case.
- **Processes more information** than any manager; finds patterns.
- **Can be audited and corrected,** unlike a manager's gut.
- **Evidence:** statistical prediction beats experts in many domains (Meehl); AI assistance raises novice performance (+34% in call centres).

#### Automate bias
- **Garbage in, garbage out:** historical data encode historical discrimination (Amazon, Obermeyer).
- **Proxies:** postcode for ethnicity, career gaps for gender.
- **Opacity:** managers cannot see why; workers cannot contest.
- **Automation bias:** humans rubber-stamp; the BCG experiment showed consultants using AI on a task outside its capabilities were **19 percentage points** less likely to get it right.
- **Homogenisation:** everyone using the same model makes the same mistakes at scale.

#### Judgement
- AI helps most with **noise** and **routine prediction**; humans remain essential for **values, ambiguity and accountability**.
- Governance: bias audits, representative data, explanations, human oversight (EU AI Act high-risk rules from 2 December 2027).`,
    },
    {
      id: 'sustainability',
      title: 'The sustainability link',
      md: `- **Present bias and the "tragedy of the horizon" (Mark Carney, 2015):** climate impacts fall beyond business, political and electoral horizons, so they are under-weighted.
- **Discounting:** the choice of discount rate (Stern vs Nordhaus) is a decision about how much future harm counts.
- **Optimism bias:** national climate plans repeatedly assume faster delivery than happens; Ireland's EPA projects at most **25%** against a **51%** target.
- **Sunk cost and lock-in:** firms keep investing in fossil assets because of past investment; **stranded assets** risk.
- **Availability:** extreme weather raises concern briefly (Storm Éowyn), then attention fades.
- **Motivated reasoning (Kahan):** people process climate information to fit group identity.
- **Debiasing tools for sustainability:** internal carbon prices (Microsoft); scenario analysis (TCFD, IFRS S2); pre-mortems on net-zero plans; reference-class forecasting for green infrastructure; long-term executive incentives.`,
    },
    {
      id: 'links',
      title: 'Links to other topics and past questions',
      md: `| Link | How to use it |
| --- | --- |
| 2022 Q4 and 2023 Q1 | Full past answers on bias and intuition |
| Teams (section 1) | Groupthink; diversity |
| Leadership (section 4) | Overconfident and charismatic leaders |
| Technology (section 5) | Algorithmic decisions; automation bias |
| Systems (section 2) | Bounded rationality in complex systems; delays |
| Worldviews (section 3) | Discounting future generations |`,
    },
    {
      id: 'structures',
      title: 'Model answer structures',
      md: `#### "Will AI improve managerial decisions or automate bias?"
1. **Intro:** bounded rationality; bias vs noise; thesis: AI cuts noise but can scale bias; governance decides.
2. **Human limits:** Simon, Kahneman, *Noise* (55%).
3. **Where AI helps:** consistency, prediction (Meehl), augmentation.
4. **Where it harms:** biased data (Amazon, Obermeyer), automation bias (BCG −19 points), opacity.
5. **Design:** audits, human oversight, AI Act.
6. **Conclusion.**

#### "Why do organisations persist with failing projects?"
1. **Intro:** escalation of commitment (Staw); thesis: psychological, social and structural causes.
2. **Psychological:** sunk cost, loss aversion (prospect theory), overconfidence.
3. **Social and political:** face-saving, accountability, groupthink.
4. **Structural:** budgets, contracts, lack of stop rules (Concorde, Berlin, the Children's Hospital, PPARS).
5. **Remedies:** stage gates, outside view, independent review, pre-agreed exit criteria.
6. **Conclusion.**

#### "Why do we under-react to long-term risks like climate change?"
1. **Intro:** tragedy of the horizon; thesis.
2. **Cognitive:** present bias, availability, optimism.
3. **Social:** motivated reasoning, framing.
4. **Institutional:** short electoral and reporting cycles.
5. **Fixes:** carbon pricing, scenario analysis, future-generations institutions, long-term incentives.
6. **Conclusion.**`,
    },
    {
      id: 'memorise',
      title: 'Memorise',
      md: `1. Simon (1947, 1955): bounded rationality, satisficing; Nobel 1978.
2. Lindblom (1959): muddling through; Cohen, March and Olsen (1972): garbage can.
3. Tversky and Kahneman (1974): availability, representativeness, anchoring (10 vs 65 → 25% vs 45%).
4. Prospect theory (1979): losses ~2× gains; framing (1981).
5. Kahneman (2011): System 1 and 2; *Noise* (2021): 55% vs 10%.
6. Klein: recognition-primed; Kahneman and Klein (2009): when to trust intuition.
7. Staw (1976): escalation; Concorde.
8. Flyvbjerg: 8.5% on budget and time; 0.5% on benefits too.
9. Lovallo and Sibony: 1,048 decisions; process 6×.
10. Pre-mortem: ~30% better at identifying causes.
11. Bay of Pigs vs Cuban Missile Crisis.
12. AOL–Time Warner $99bn; Quaker–Snapple $1.7bn → $300m; Blockbuster–Netflix $50m.
13. Amazon recruiting (2018); Obermeyer (2019); Meehl (1954).
14. BCG: −19 points outside the frontier.
15. Carney (2015): tragedy of the horizon.`,
    },
  ],
};
