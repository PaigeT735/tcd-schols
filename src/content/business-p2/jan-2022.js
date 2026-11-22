export default {
  id: 'jan-2022',
  label: 'Jan 2022',
  kind: 'paper',
  title: 'January 2022 paper',
  summary: `The first paper in the set, and the most conceptual. Every question asks you to **question something that sounds straightforward**: whether toxicity is about individuals, whether sustainability really pays, what management actually is, whether bias can be beaten, and whether a famous framework deserves its fame.

The best answers define the concept, set out competing theories, apply them to real organisations and then **challenge the premise** of the question.`,
  meta: [['Setter', 'Norah Campbell'], ['Format', 'Five questions, answer three'], ['Time', '2 h 15 min, ~45 min each']],
  answer: 'answer three',
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      id: 'q1',
      n: 1,
      title: 'Why do some work teams turn toxic, and how should a manager respond?',
      tags: ['Teams', 'Culture', 'Leadership', 'HR'],
      prompt: `Why do some work teams turn 'toxic'? How should a manager approach toxicity in a workplace team?`,
      plan: `## Introduction
- **Hook:** in 2017 Susan Fowler's blog post about harassment at **Uber** led to the Holder report, more than **20 dismissals** and the resignation of founder Travis Kalanick. The problem was tolerated for years because the people involved were high performers.
- **Define toxicity:** persistent patterns of behaviour that damage trust, psychological safety, wellbeing or performance: bullying, humiliation, exclusion, scapegoating, intimidation, destructive competition.
- **Key distinction:** disagreement is not toxicity. **Task conflict** about ideas can improve decisions; **relationship conflict** and fear undermine them.
- **Thesis:** toxicity rarely comes from one "bad apple". It develops when individual behaviour meets poor leadership, perverse incentives, weak accountability and a culture that tolerates it. Managers must deal with **both the behaviour and the conditions** that sustain it.
- **Roadmap:** the causes (individual and structural); how to intervene; the high-performer trade-off.

## Main point 1 — Why teams turn toxic: individuals inside systems
- **Claim:** bad behaviour matters, but systems decide whether it spreads.
  - **Bad apples are real:** Felps, Mitchell and Byington (2006) found one negative member (a "jerk", "slacker" or "depressive pessimist") can lower team performance by **30–40%**.
  - **But incentives create toxicity:** if a sales team is paid only on individual commission, colleagues hoard leads, undermine each other and take credit.
  - **Social learning (Bandura, 1977):** people copy what leaders reward. If a star humiliates juniors without consequence, that becomes the norm.
  - **Low psychological safety (Edmondson, 1999):** people stop admitting mistakes; a team can look harmonious while being dysfunctional.
  - **Hackman (2002):** team performance depends on design conditions (a real team, compelling direction, enabling structure, supportive context, expert coaching), not just personalities.
  - **Lencioni (2002):** absence of trust leads to fear of conflict, lack of commitment, avoided accountability and inattention to results.
- **Counter-argument:** structural explanations can excuse individuals.
- **Judgement:** both are needed: individual accountability and system redesign.

## Main point 2 — How a manager should intervene
- **Claim:** effective intervention works at three levels: individual, team and organisation.
  - **Individual:** early, private conversations; documented expectations; consistent consequences. Separate acceptable disagreement from intimidation.
  - **Team:** facilitated discussion, clarified roles, agreed working norms (a team charter), conflict resolution focused on tasks not people.
  - **Organisation:** change incentives (add team-based goals); protect people who speak up from retaliation; follow Ireland's Code of Practice on preventing and resolving bullying at work (2021).
  - **Leader behaviour:** admit your own mistakes, invite challenge, run meetings so juniors speak first. Telling people to "speak up" is useless if seniors punish dissent.
  - **Evidence:** Google's **Project Aristotle** (180 teams) found psychological safety was the strongest of five factors behind effective teams.
- **Counter-argument:** facilitated sessions can become cosmetic, and some situations need removal.
- **Judgement:** escalate: coach, then formal process, then exit if behaviour persists.

## Main point 3 — Can a manager afford to confront a toxic high performer?
- **Claim:** the hardest case is the star who brings in revenue; the evidence says tolerating them costs more.
  - **Housman and Minor (Harvard Business School, 2015):** avoiding one toxic worker saved about **$12,500** in turnover costs, more than double the **$5,300** gained by hiring a top-1% "superstar".
  - **Sull et al. (MIT Sloan, 2022):** during the "Great Resignation", a toxic culture was about **10 times** more predictive of attrition than pay.
  - **Incivility (Porath and Pearson, 2013):** of employees treated rudely, **48%** deliberately reduced effort and **78%** said their commitment declined.
  - **Hidden costs:** absenteeism, errors, lost knowledge, legal and reputational damage.
- **Counter-argument:** high standards and blunt feedback are not toxic when applied fairly; some elite teams are demanding by design.
- **Judgement:** measure performance by **results and how they are achieved**.

## Conclusion
- **Answer:** teams turn toxic when individual behaviour meets a system that rewards or tolerates it.
- **Response:** act early on the person, redesign the team and change the incentives; protect those who speak up.
- **Trade-off:** no high performer is worth the damage to everyone else; the evidence shows they rarely are.
- **Final line:** toxicity is not solved by a motivational speech or by removing one person; it is solved by building a culture where high performance and respect are both expected.`,
      evidence: `!stat 30–40% | Drop in team performance from one negative member (Felps et al., 2006)
!stat $12,500 vs $5,300 | Saving from avoiding a toxic worker vs gain from a superstar (Housman and Minor, 2015)
!stat ~10× | Toxic culture vs pay as a predictor of attrition (Sull et al., MIT Sloan, 2022)
!stat 48% | Of uncivilly treated staff who cut their effort (Porath and Pearson, 2013)
!stat 180 teams | Studied in Google's Project Aristotle; psychological safety ranked first

#### Theories
- **Edmondson (1999):** psychological safety.
- **Lencioni (2002):** five dysfunctions (a practitioner model, not a validated law).
- **Bandura (1977):** social learning.
- **Hackman (2002):** conditions for team effectiveness.
- **Tuckman (1965):** toxic teams can get stuck in "storming".
- **Tajfel and Turner (1979):** in-groups and out-groups inside teams.

#### Examples
- **Uber (2017):** Fowler blog, Holder report, Kalanick resigned.
- **A sales team on pure individual commission:** structural toxicity.
- **Wells Fargo (2016):** aggressive cross-selling targets led staff to open about **3.5 million** unauthorised accounts; a culture problem created by incentives.

#### If the wording changes
- "Is toxicity caused by individuals or organisations?" Use Main point 1 as the spine.
- "Write as an HR manager" (2023 Q2): use the same theories in a memo voice.`,
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      id: 'q2',
      n: 2,
      title: 'Evaluate the logic of "win-win" responses to the ecological crisis',
      tags: ['Sustainability', 'Business case', 'Externalities', 'Greenwashing'],
      prompt: `The ecological crisis which engulfs the planet has been theorised by many management experts as a 'win-win'. Evaluate the logics of win-win.`,
      plan: `## Introduction
- **Hook:** **3M's** Pollution Prevention Pays programme, running since 1975, claims to have prevented over a million tonnes of pollutants and saved the company more than **$2 billion**. Yet total global emissions kept rising for the whole period.
- **Define win-win:** the claim that firms can improve environmental outcomes and financial performance at the same time.
- **Related concepts:** eco-efficiency (more value from fewer resources); the Porter Hypothesis; shared value; externality (a cost borne by third parties, not reflected in price).
- **Thesis:** win-win is a useful **starting point**, because many environmental improvements do pay. It becomes misleading when it suggests every ecological problem has a profitable solution. The hardest cuts involve real costs, regulation and limits on consumption.
- **Roadmap:** the strongest case; the limits (externalities and trade-offs); win-win as a tool for greenwashing and for avoiding absolute reductions.

## Main point 1 — The strongest case: sustainability can pay
- **Claim:** where waste and inefficiency are high, environmental and commercial goals align.
  - **Porter and van der Linde (1995):** well-designed regulation can trigger innovation that partly or fully offsets compliance costs (the **Porter Hypothesis**).
  - **Elkington (1994, 1997):** the triple bottom line of people, planet and profit.
  - **Porter and Kramer (2011):** creating shared value: profit from solving social problems.
  - **Examples:** energy efficiency cuts both emissions and bills; less packaging cuts material and transport costs; **Interface** carpets (Mission Zero, 1994) cut emissions while staying profitable; renewables reduce exposure to fossil price shocks, as the **2026 Hormuz** oil shock showed.
- **Counter-argument:** up-front costs are high and payback can take years; small firms may lack capital.
- **Judgement:** win-wins exist, but they are not automatic and are usually the "low-hanging fruit".

## Main point 2 — The limit: externalities mean some necessary action is unprofitable
- **Claim:** pollution is often profitable for the polluter because society pays.
  - **Externality:** the private cost of production is lower than the social cost.
  - **Carbon majors:** CDP (2017) found **100 fossil-fuel producers** linked to **71%** of industrial greenhouse-gas emissions since 1988. Their business model is the problem; no efficiency gain makes selling less oil profitable for them.
  - **Hahn et al. (2010):** corporate sustainability involves real **trade-offs**; the win-win frame hides them.
  - **Stern Review (2006):** acting costs about **1%** of GDP a year; not acting could cost **5–20%**, but those costs fall on society, not the firm.
  - **So regulation is needed:** carbon prices, standards, bans.
- **Counter-argument:** the Porter Hypothesis says regulation itself can create innovation and new markets.
- **Judgement:** win-win cannot replace government intervention where private incentives conflict with public welfare.

## Main point 3 — Win-win can become greenwashing and relative improvement
- **Claim:** the logic lets firms claim progress without changing the business model.
  - **Relative vs absolute:** emissions per unit can fall while total emissions rise if sales grow (the **Jevons paradox**, 1865).
  - **Greenwashing:** presenting environmental performance as better than it is. **Volkswagen**'s "clean diesel" (2015) involved cheating software in about **11 million** cars.
  - **Elkington's own "recall" (Harvard Business Review, 2018):** he said the triple bottom line had become an accounting tool for trade-offs rather than a push for system change.
  - **Critical scholars:** Wright and Nyberg (2015) argue firms absorb climate concern into business-as-usual ("creative self-destruction").
- **Counter-argument:** profit incentives scale green technology faster than charity or the state alone (solar costs fell about **90%** in a decade).
- **Judgement:** environmental claims need measurable absolute targets, transparent reporting and independent verification.

## Conclusion
- **Answer:** win-win is real but partial. It describes the first, easiest stage of change.
- **Its danger:** it implies the market will solve a problem the market caused, and lets firms ignore trade-offs.
- **What follows:** pursue win-wins where they exist, and use regulation, pricing and limits where they do not.
- **Final line:** genuine sustainability sometimes means accepting costs that markets will not impose voluntarily.`,
      evidence: `!stat $2bn+ | 3M's claimed savings from Pollution Prevention Pays (since 1975)
!stat 71% | Industrial emissions since 1988 linked to 100 fossil-fuel producers (CDP, 2017)
!stat 1% vs 5–20% | GDP cost of acting vs not acting on climate (Stern Review, 2006)
!stat ~11 million | Cars fitted with defeat devices in the Volkswagen scandal (2015)
!stat ~90% | Fall in the cost of solar power over the 2010s

#### Theories
- **Porter and van der Linde (1995):** the Porter Hypothesis.
- **Elkington (1994, 1997, 2018):** triple bottom line, and its recall.
- **Porter and Kramer (2011):** shared value; criticised by Crane et al. (2014) as ignoring real tensions.
- **Hart (1995):** natural-resource-based view.
- **Hahn et al. (2010):** trade-offs in corporate sustainability.
- **Jevons (1865):** efficiency can raise total use.
- **Externalities (Pigou):** the case for carbon taxes.

#### Examples
- **Interface:** Mission Zero (1994).
- **Unilever:** claimed its "sustainable living" brands grew faster than the rest; investor Terry Smith said in 2022 it had "lost the plot" chasing purpose.
- **Fossil-fuel majors:** BP's 2025 strategy reset cut renewables spending and raised oil and gas investment.

#### Pitfalls
- "Evaluate" means weigh both sides, then judge. Do not write a list of green initiatives.`,
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      id: 'q3',
      n: 3,
      title: 'What is "management"?',
      tags: ['History', 'Power', 'Stakeholders', 'Leadership'],
      prompt: `What is 'management'?`,
      plan: `## Introduction
- **Hook:** Bloom and Van Reenen's World Management Survey (more than **10,000** firms) found that differences in basic management practices explain a large share of productivity gaps between firms and countries. Management clearly matters, yet scholars still disagree on what it is.
- **Standard definition:** the process of planning, organising, leading and controlling resources to achieve organisational objectives. Distinguish **efficiency** (doing things right) from **effectiveness** (doing the right things).
- **Thesis:** management is not just telling people what to do or maximising profit. It is coordinating people, resources and decisions, but it is also an exercise of **power**: managers decide what counts, whose interests matter and how work is organised.
- **Roadmap:** management as efficiency and control; management as people and relationships; management as power and value choices.

## Main point 1 — Management as planning, efficiency and control
- **Claim:** the classical answer treats management as a rational, technical activity.
  - **Taylor (1911):** scientific management: study tasks, standardise, measure, separate planning (managers) from doing (workers).
  - **Fayol (1916):** five functions: plan, organise, command, coordinate, control; fourteen principles including unity of command.
  - **Weber (1922):** bureaucracy: rules, hierarchy, written records, impersonal authority.
  - **Example:** an assembly line or an Amazon fulfilment centre: standard tasks, targets and quality checks.
- **Counter-argument:** Mintzberg (1973, 1975) observed real managers and found their work brief, varied, fragmented and verbal, not orderly planning. He described **ten roles** in three groups: interpersonal, informational and decisional.
- **Judgement:** efficiency is a core responsibility but not the whole definition.

## Main point 2 — Management as people, relationships and leadership
- **Claim:** organisations are social systems, so management means working with people.
  - **Mayo and the Hawthorne studies (1924–1932):** attention, belonging and group norms affect output (later criticised; do not present them as proof of a simple "Hawthorne effect").
  - **Follett (1920s):** "power with" rather than "power over"; conflict can be integrated rather than suppressed.
  - **Barnard (1938):** the executive's job is to secure cooperation.
  - **Kotter (1990):** management copes with complexity; leadership copes with change.
  - **Example:** a project manager cannot simply impose a deadline; they coordinate skills, resolve disagreement and sustain motivation.
- **Counter-argument:** participation slows decisions, especially in emergencies or regulated settings.
- **Judgement:** good managers adapt style to task, people and situation (contingency theory).

## Main point 3 — Management as power and value choices
- **Claim:** management decisions distribute rewards, risks and control, so they are never purely technical.
  - **Braverman (1974):** Taylorism deskilled workers and moved knowledge and control to managers.
  - **Metrics are choices:** measuring call-centre staff only on calls per hour rewards speed over service.
  - **Friedman (1970):** the social responsibility of business is to increase its profits within the rules.
  - **Freeman (1984):** stakeholder theory: employees, customers, suppliers, communities and the environment all have legitimate claims.
  - **Ghoshal (2005):** bad management theories, taught as neutral science, encourage bad practice (for example, assuming managers are purely self-interested).
  - **Today:** algorithmic management makes these choices invisible by putting them into software.
- **Counter-argument:** managers work within legal, financial and competitive constraints; they cannot satisfy everyone.
- **Judgement:** management always involves choices about power and competing interests, even when presented as neutral.

## Conclusion
- **Answer:** management is the coordination of people and resources towards goals, but deciding the goals and how to pursue them is a moral and political act.
- **Synthesis:** it is a technical discipline (Fayol, Taylor), a social practice (Follett, Mintzberg) and a system of power (Braverman, Freeman).
- **Final line:** a manager's job is not only to maximise productivity, but to decide what productivity is for.`,
      evidence: `!stat 10,000+ | Firms in the World Management Survey (Bloom and Van Reenen)
!stat 10 roles | Mintzberg's managerial roles (1973)
!stat 5 functions | Fayol: plan, organise, command, coordinate, control (1916)
!stat 1911 | Taylor, *The Principles of Scientific Management*

#### Theories
- **Classical:** Taylor, Fayol, Weber.
- **Human relations:** Mayo, Follett, Barnard.
- **Behavioural:** Simon's bounded rationality (1947).
- **Contemporary:** Drucker (management by objectives), Mintzberg, Kotter.
- **Critical:** Braverman, Ghoshal, Critical Management Studies (Alvesson and Willmott, 1992).
- **Purpose:** Friedman vs Freeman.

#### Examples
- **Amazon warehouses:** Taylorism through algorithms; France's data regulator fined Amazon France Logistique **€32 million** in 2024 for excessively intrusive monitoring.
- **Toyota:** standardisation combined with worker-led continuous improvement (kaizen).

#### Pitfalls
- A one-line definition is not an answer. Show that the definition is contested and take a position.`,
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      id: 'q4',
      n: 4,
      title: 'Can managers ever escape their cognitive errors?',
      tags: ['Decision-making', 'Bias', 'AI', 'Debiasing'],
      prompt: `Considering the pervasive and seemingly hard-wired nature of our cognitive errors, can managers ever hope to escape their failings?`,
      plan: `## Introduction
- **Hook:** between **70% and 90%** of acquisitions fail to create the value expected (Christensen et al., HBR, 2011). AOL–Time Warner (2000) led to a **$99 billion** write-down two years later. Overconfidence and confirmation bias are the usual suspects.
- **Define:** a **cognitive bias** is a systematic deviation from rational judgement; a **heuristic** is a mental shortcut that is usually useful but predictably wrong in some cases; **bounded rationality** (Simon) means decision-makers have limited time, information and processing power, so they **satisfice**.
- **Distinction:** not every bad outcome is a bias; some decisions are reasonable bets that lose.
- **Thesis:** managers cannot escape bias as individuals, because it is built into how people think. But organisations can design processes that **reduce its influence**. The aim is not perfect rationality but more reliable judgement.
- **Roadmap:** why managers are vulnerable; how processes help; whether data and AI solve the problem.

## Main point 1 — Why managers are especially vulnerable
- **Claim:** managerial conditions (time pressure, uncertainty, ambiguity, ego) maximise bias.
  - **Kahneman and Tversky (1974):** anchoring, availability, representativeness.
  - **Kahneman (2011):** System 1 (fast, intuitive) and System 2 (slow, deliberate); these are modes of thought, not brain regions.
  - **Confirmation bias:** a manager who believes in a product hears the good feedback and dismisses the research.
  - **Anchoring:** acquisition talks fixate on the seller's opening price.
  - **Availability:** after a high-profile cyberattack, managers over-invest against that threat.
  - **Overconfidence and planning fallacy:** Flyvbjerg's study of over **16,000** projects found only **8.5%** met budget and schedule, and **0.5%** met budget, schedule and benefits. Dublin's National Children's Hospital rose from about €650 million to well over **€2 billion**.
  - **Escalation of commitment and sunk cost:** Concorde.
- **Judgement:** experience does not cure bias and can make people more confident in flawed assumptions.

## Main point 2 — Processes can reduce what individuals cannot remove
- **Claim:** the unit of debiasing is the decision process, not the individual mind.
  - **Lovallo and Sibony (McKinsey, 2010):** in a study of **1,048** decisions, the quality of the process mattered about **six times** more than the quality of the analysis.
  - **Tools:** devil's advocacy; independent review; Klein's **pre-mortem** (imagine the project has failed, explain why; "prospective hindsight" raises identification of reasons by about **30%**); decision journals; reference-class forecasting (Flyvbjerg); Kahneman, Lovallo and Sibony's 12-question checklist (HBR, 2011).
  - **Diverse teams** expose blind spots; groupthink (Janis, 1972) is the opposite.
  - **Example:** before a major deal, a board requires an independent valuation, downside scenarios and a written case for proceeding.
- **Counter-argument:** these processes cost time and can create bureaucracy and indecision.
- **Judgement:** apply heavy scrutiny to costly, irreversible decisions; let small reversible ones go fast.

## Main point 3 — Data and AI: cure or new source of error?
- **Claim:** algorithms can be more consistent than people, but they inherit and add biases.
  - **For:** Meehl (1954) and later meta-analyses: simple statistical rules usually match or beat expert judgement in prediction.
  - **Against:** **Amazon** scrapped an AI recruiting tool in 2018 because it downgraded CVs containing "women's"; Obermeyer et al. (2019) found a US health algorithm under-referred Black patients because it used past spending as a proxy for need.
  - **Automation bias:** people over-trust machine outputs. **Algorithm aversion** (Dietvorst et al., 2015): people abandon an algorithm after seeing it err once, even when it beats them.
  - **Regulation:** the EU AI Act treats AI used in hiring and worker management as **high-risk**; those rules now apply from **2 December 2027** after the 2026 Digital Omnibus deal.
- **Judgement:** technology helps only if managers question its data and assumptions; responsibility stays with them.

## Conclusion
- **Answer:** no, managers cannot fully escape their failings, but they can stop those failings deciding outcomes.
- **How:** design decisions around challenge, outside views and evidence; treat algorithms as advisers, not authorities.
- **Final line:** good management is not the absence of bias; it is the recognition and management of it.`,
      evidence: `!stat 70–90% | Acquisitions that fail to meet expectations (Christensen et al., 2011)
!stat $99bn | AOL–Time Warner write-down (2002)
!stat 8.5% | Of 16,000+ projects on budget and on time (Flyvbjerg)
!stat 6× | Process vs analysis in decision quality (Lovallo and Sibony, 1,048 decisions)
!stat ~30% | Improvement in identifying failure reasons with prospective hindsight (pre-mortem)

#### Theories
- **Simon (1947, 1955):** bounded rationality, satisficing.
- **Kahneman and Tversky (1974); Kahneman (2011).**
- **Janis (1972):** groupthink.
- **Klein:** pre-mortem (2007) and recognition-primed decisions.
- **Thaler and Sunstein (2008):** choice architecture applied to firms.
- **Meehl (1954):** clinical vs statistical prediction.

#### Examples
- **Quaker Oats bought Snapple** for **$1.7bn** (1994) and sold it for about **$300m** three years later.
- **Blockbuster** declined to buy Netflix for **$50m** in 2000.
- **Challenger (1986):** engineers' warnings about cold O-rings were overridden.

#### Pitfalls
- Do not just list biases. Explain the mechanism, give an example, then say what reduces it.`,
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      id: 'q5',
      n: 5,
      title: "Does Porter's \"How Competitive Forces Shape Strategy\" deserve its citations?",
      tags: ['Strategy', 'Porter', 'RBV', 'Critique'],
      prompt: `Does Michael Porter's essay 'How Competitive Forces Shape Strategy' deserve to be one of the most cited works of management theory? Defend and discuss your answer.`,
      plan: `## Introduction
- **Hook:** Porter's 1979 *Harvard Business Review* article and its book-length version, *Competitive Strategy* (1980), are among the most cited works in management, and Five Forces is still taught in virtually every business school.
- **Define:** strategy is the long-term choice of how to create and capture value; competitive advantage is the ability to outperform rivals; industry structure is the set of forces that determine how much profit an industry can earn.
- **The framework:** rivalry; threat of new entrants; threat of substitutes; buyer power; supplier power.
- **Thesis:** yes. It deserves its influence because it changed the question from "who are our competitors?" to "what determines profitability in this industry?". But it is a starting point, not a complete theory: it is weaker on innovation, cooperation, ecosystems and internal capabilities.
- **Roadmap:** why it deserves its reputation; where it struggles; how later theories complement it.

## Main point 1 — Why it deserves its reputation
- **Claim:** it gave managers a systematic, testable way to read an industry.
  - **Wider lens:** profits can be squeezed by suppliers, buyers and substitutes even with few rivals.
  - **Airlines:** fierce rivalry, price-comparison buyers, powerful suppliers (Boeing and Airbus, fuel, airports), and substitutes (rail, video calls). Result: huge revenues but thin margins, around **3–4%** net (IATA).
  - **Pharmaceuticals:** patents and regulation create entry barriers, so margins are high.
  - **Practical value:** it guides entry, exit, pricing and positioning; it underpins Porter's generic strategies (cost leadership, differentiation, focus) and value chain (1985).
  - **Evidence for industry effects:** McGahan and Porter (1997) found industry explained about **19%** of differences in business-unit profitability.
- **Link:** that is real explanatory power, but it also shows the limits.

## Main point 2 — Where the framework struggles
- **Claim:** it is static, industry-bounded and focused on competition rather than collaboration.
  - **Static:** Netflix moved from DVDs to streaming to producing content; a snapshot analysis dated fast.
  - **Blurred boundaries and platforms:** Apple and Uber rely on network effects and ecosystems of developers and drivers.
  - **Complementors:** Brandenburger and Nalebuff's *Co-opetition* (1996) added a "sixth force" of firms whose products make yours more valuable.
  - **Hypercompetition (D'Aveni, 1994):** advantages are temporary in fast-moving markets.
  - **Sustainability blind spot:** externalities and ecological limits sit outside the model (2026 B2).
- **Counter-argument:** Porter's 2008 HBR update addressed complements and argued the forces still apply to new industries; network effects can be read as entry barriers.
- **Judgement:** useful, but managers must not force new business models into rigid categories.

## Main point 3 — Internal capabilities explain why firms in the same industry differ
- **Claim:** the biggest critique is that firm-level differences outweigh industry ones.
  - **Rumelt (1991):** industry effects explained about **8%** of profit variance, business-unit effects about **46%**.
  - **Barney (1991):** the resource-based view: resources that are valuable, rare, inimitable and non-substitutable (later VRIO, adding Organisation).
  - **Prahalad and Hamel (1990):** core competences.
  - **Teece, Pisano and Shuen (1997):** dynamic capabilities: the ability to reconfigure resources as markets change.
  - **Example:** Amazon and Ryanair operate in low-margin industries but earn strong returns through logistics, data and cost discipline.
- **Counter-argument:** Porter was answering a different question (industry profitability), not claiming to explain every firm.
- **Judgement:** Porter supplies the outside-in view; the resource-based view supplies the inside-out view. Both are needed.

## Conclusion
- **Answer:** yes, it deserves its citations, because it made industry structure analysable and remains useful decades later.
- **But:** its fame should not be confused with completeness. It explains the environment, not the whole of advantage.
- **Final line:** the best use of Porter today is as one lens among several: outside-in with Five Forces, inside-out with the resource-based view, and forward-looking with dynamic capabilities.`,
      evidence: `!stat 1979 | "How Competitive Forces Shape Strategy", *Harvard Business Review*
!stat ~19% vs ~32% | Industry vs business-segment effects on profitability (McGahan and Porter, 1997)
!stat ~8% vs ~46% | Industry vs business-unit effects (Rumelt, 1991)
!stat ~3–4% | Typical airline net margin (IATA)

#### Theories
- **Porter:** Five Forces (1979), generic strategies (1980), value chain (1985), 2008 update.
- **Barney (1991):** RBV and VRIN/VRIO.
- **Teece et al. (1997):** dynamic capabilities.
- **Brandenburger and Nalebuff (1996):** co-opetition.
- **Kim and Mauborgne (2005):** Blue Ocean Strategy; make the competition irrelevant.
- **Mintzberg (1987):** strategy as emergent, not just planned.

#### Examples
- **Airlines:** unattractive industry structure; Ryanair succeeds anyway through cost leadership.
- **Apple App Store:** ecosystem value.
- **Netflix:** shifting boundaries.

#### Pitfalls
- "Defend and discuss" requires a clear verdict. Say yes or no in the introduction and hold it.`,
    },
  ],
};
