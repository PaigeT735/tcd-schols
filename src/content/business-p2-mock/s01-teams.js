export default {
  id: 'teams',
  num: 1,
  label: 'Teams',
  kind: 'notes',
  title: 'Teams and team dynamics',
  summary: `The most reliable topic on Paper 2: a teams question has appeared in **every paper** (2022 toxic teams, 2023 HR memo, 2025 personal reflection, 2026 motivation and teams), and the likely Section B setter researches teamwork. Expect a **new angle**: diversity, hybrid work, AI, or why some teams beat the sum of their members.`,
  meta: [['Section', 'B'], ['Confidence', '75%'], ['Past papers', '2022 Q1 · 2023 Q2 · 2025 Q3 · 2026 B1']],
  sections: [
    {
      id: 'glance',
      title: 'At a glance',
      md: `!stat 4 of 4 | Papers with a teams question
!stat 180 teams | Google's Project Aristotle; psychological safety ranked first
!stat 30–40% | Performance drop from one negative member (Felps et al., 2006)
!stat 20% | Global employee engagement in 2025 (Gallup, 2026)

#### Likely wordings
- "Why do some teams perform better than the sum of their members while others perform worse?"
- "Using one model of team development and one theory of diversity, explain team performance. How do hybrid work or AI change these dynamics?"
- "Is conflict good for teams?"
- "Can a team be too cohesive?"
- "How should a leader build psychological safety, and why does it matter for sustainability?"
- "Reflect on a team you belonged to" (the 2025 genre) or "write a memo diagnosing a team" (the 2023 genre).

#### The core argument to carry into any teams question
- A team is not the sum of its members: **actual performance = potential minus process losses plus process gains** (Steiner, 1972).
- Process losses come from coordination problems, lost effort, conformity and conflict; gains come from shared knowledge, challenge and commitment.
- Which dominates depends on **design** (task, size, roles, goals), **climate** (psychological safety, trust, norms) and **leadership**, more than on individual talent.`,
    },
    {
      id: 'definitions',
      title: 'Key definitions',
      md: `- **Team:** "a small number of people with complementary skills who are committed to a common purpose, performance goals and approach for which they hold themselves mutually accountable" (Katzenbach and Smith, 1993). A **working group** shares information but members are individually accountable.
- **Interdependence (Thompson, 1967):** pooled (separate contributions added up), sequential (one feeds the next), reciprocal (constant back-and-forth). More interdependence needs more coordination.
- **Synergy:** the team outperforms what members would achieve separately.
- **Process loss (Steiner, 1972):** the gap between potential and actual performance caused by coordination and motivation losses.
- **Cohesion:** the forces holding members to the group (liking, commitment to task, pride).
- **Norms:** informal rules about acceptable behaviour.
- **Roles:** expected behaviours attached to positions, formal or informal.
- **Psychological safety:** "a shared belief that the team is safe for interpersonal risk-taking" (Edmondson, 1999).
- **Social loafing:** reduced individual effort when working collectively.
- **Groupthink:** a mode of thinking in cohesive groups where the striving for unanimity overrides realistic appraisal of alternatives (Janis, 1972).
- **Task, relationship and process conflict (Jehn, 1995, 1997):** about the work, about personalities, about who does what and how.
- **Faultlines:** hypothetical dividing lines that split a group into sub-groups when several attributes align (Lau and Murnighan, 1998).
- **Transactive memory (Wegner, 1987):** a shared awareness of who knows what.
- **Collective intelligence:** a group's general ability to perform a wide range of tasks (Woolley et al., 2010).`,
    },
    {
      id: 'theories',
      title: 'Theories and models',
      md: `#### Team development
- **Tuckman (1965); Tuckman and Jensen (1977):** forming (polite, uncertain), storming (conflict over roles and approach), norming (shared rules), performing (focus on the task), adjourning (closure).
  - **Use:** diagnosing where a team is stuck; toxic teams stall in storming or "pseudo-norm" by burying conflict.
  - **Critique:** based on a review of mostly therapy and lab groups; not linear; teams relapse when membership or deadlines change.
- **Gersick (1988), punctuated equilibrium:** project teams keep their initial approach until about the **midpoint** of their time, then change sharply. Useful counter-model to Tuckman.

#### Team composition
- **Belbin (1981):** nine roles: Plant, Resource Investigator, Co-ordinator, Shaper, Monitor Evaluator, Teamworker, Implementer, Completer Finisher, Specialist. Balanced teams beat teams of clever individuals (his "Apollo" teams of high-IQ members did badly).
  - **Critique:** weak psychometric validity (Furnham et al., 1993); useful as a reflection tool.
- **Diversity: two perspectives.**
  - **Information/decision-making:** diverse knowledge improves problem-solving on complex tasks (Page, 2007).
  - **Social categorisation (Tajfel and Turner, 1979):** "us and them" lowers trust.
  - **Categorisation–elaboration model (van Knippenberg et al., 2004):** diversity helps when the team actually elaborates (discusses and integrates) different information, which needs safety and a shared goal.
  - **Faultlines (Lau and Murnighan, 1998):** diversity is most harmful when attributes stack (age, nationality and function all aligned).
  - **Evidence:** reviews find mixed average effects (van Knippenberg and Schippers, 2007); Phillips et al. (2009) found diverse groups were more accurate but **felt** less confident.

#### Team effectiveness
- **Hackman (2002):** five conditions: a real team (clear membership, stable), compelling direction, enabling structure (task, size, norms), supportive organisational context (rewards, information, training), expert coaching. Hackman and Wageman's rule of thumb: about **60%** of team effectiveness is set by design before the team starts, **30%** by the launch, **10%** by coaching.
- **Input–process–output models:** inputs (composition, task, context), processes (communication, conflict, coordination), outputs (performance, satisfaction, viability).
- **Lencioni (2002):** absence of trust, fear of conflict, lack of commitment, avoidance of accountability, inattention to results. A practitioner model.

#### Effort and conformity
- **Ringelmann (1913):** per-person rope-pulling force fell as group size rose.
- **Latané, Williams and Harkins (1979):** clapping and shouting: social loafing, not just coordination loss.
- **Karau and Williams (1993):** meta-analysis of **78** studies: loafing is reliable; weaker when contributions are identifiable, the task is meaningful and the group valued (the collective effort model).
- **Janis (1972):** groupthink. Antecedents: high cohesion, insulation, directive leadership, stress. Eight symptoms: illusion of invulnerability; collective rationalisation; belief in the group's morality; stereotyping outsiders; pressure on dissenters; self-censorship; illusion of unanimity; self-appointed "mindguards". Remedies: leader withholds view, devil's advocate, outside experts, sub-groups, second-chance meeting.
- **Asch (1951):** conformity: participants agreed with an obviously wrong majority in about a third of trials.

#### Climate and conflict
- **Edmondson (1999):** psychological safety predicts team learning and performance. Her earlier hospital study (1996) found better-led nursing teams **reported more** errors, because it was safe to report them, not because they made more.
- **Jehn (1995):** task conflict can help non-routine work; relationship conflict harms.
- **De Dreu and Weingart (2003):** meta-analysis: both task and relationship conflict were on average negatively related to performance.
- **De Wit, Greer and Jehn (2012):** updated meta-analysis: task conflict is not consistently negative, and can help when relationship conflict is low and in top management teams.

#### Communication and intelligence
- **Woolley et al. (*Science*, 2010):** a "c factor" of collective intelligence predicted group performance across tasks; it correlated with members' social sensitivity, **equality of turn-taking** and the proportion of women, not with average or maximum IQ.
- **Pentland (HBR, 2012):** using sensor badges, patterns of communication (energy, engagement, exploration) were as important for team success as all other factors combined.`,
    },
    {
      id: 'evidence',
      title: 'Evidence and statistics',
      md: `!stat 180 | Google teams studied in Project Aristotle (2012–2016)
!stat 5 | Aristotle's dynamics: psychological safety, dependability, structure and clarity, meaning, impact
!stat 30–40% | Team performance drop from a single "bad apple" (Felps et al., 2006)
!stat $12,500 vs $5,300 | Avoiding a toxic hire vs gaining a superstar (Housman and Minor, 2015)
!stat ~10× | Toxic culture vs pay as a predictor of quitting (Sull et al., 2022)
!stat 60/30/10 | Design, launch, coaching shares of team effectiveness (Hackman and Wageman)
!stat 30% vs 17% | Engagement of fully remote vs on-site non-remote-capable staff (Gallup, 2025 data)
!stat 61,000 | Microsoft employees: remote work made collaboration more siloed (Yang et al., 2021)
!stat ~⅓ | Fall in quits under hybrid at Trip.com, no performance loss (Bloom et al., *Nature*, 2024)
!stat +12% / +25% / +40% | Tasks, speed, quality for consultants using GPT-4 inside its frontier (Dell'Acqua et al., 2023)
!stat 13–16% | Relative fall in employment of 22–25-year-olds in AI-exposed jobs (Stanford)`,
    },
    {
      id: 'cases',
      title: 'Case studies to use',
      md: `#### Teams that beat the sum of their members
- **Leicester City, 2015–16:** 5,000-to-1 outsiders won the Premier League with a squad worth a fraction of rivals'; clear roles, shared purpose, stable line-up.
- **Pixar's Braintrust:** a group of directors gives candid feedback on films in progress; the director keeps authority, so feedback is safe and honest (Catmull, *Creativity, Inc.*, 2014).
- **Toyota's andon cord:** any worker can stop the line; psychological safety built into the production system.
- **Apollo 13 (1970):** mission-control teams improvised a CO2 scrubber from on-board materials; tight roles plus open problem-solving.

#### Teams that fell short of their members
- **USA men's basketball, 2004 Olympics:** a team of NBA stars won only bronze, losing three games; talent without team design.
- **Bay of Pigs (1961):** Kennedy's advisers suppressed doubts; Janis's founding case of groupthink. Kennedy later redesigned the process for the Cuban Missile Crisis (1962): he left the room, used devil's advocates and sub-groups.
- **Challenger (1986) and Columbia (2003):** engineers' concerns were overridden or not escalated; the Columbia investigation blamed NASA's culture as much as the foam strike.
- **Mid Staffordshire NHS Trust (2005–09):** a culture that ignored complaints and targeted finances; the Francis report (2013) found appalling care and a failure to listen.
- **Boeing 737 MAX:** internal messages ("designed by clowns, who in turn are supervised by monkeys") revealed staff who saw problems but did not feel able to stop them; 346 people died in two crashes (2018–19).
- **Uber (2017):** tolerated toxic high performers; the Holder report led to 20+ dismissals and the founder's resignation.

#### Team design at scale
- **Amazon's two-pizza teams:** small, autonomous teams that own a service end-to-end.
- **Spotify's squads, tribes, chapters and guilds:** autonomy plus cross-team learning.
- **Google's Project Oxygen (2008):** found managers matter; good managers coach, empower, and care about wellbeing.`,
    },
    {
      id: 'news',
      title: 'Current developments, 2025–26',
      md: `- **Engagement slump:** Gallup's 2026 report: global engagement **20%** in 2025, the lowest since 2020; manager engagement fell from **31%** (2022) to **22%**. Engagement happens at team level, so this is a team-leadership problem.
- **Where people work:** fully remote employees were the most engaged (**30%**), hybrid **25%**, on-site staff who could work remotely **24%**, and on-site frontline workers least (**17%**).
- **Return-to-office mandates:** many large firms (Amazon from January 2025, five days a week) ordered staff back, arguing for collaboration and culture; critics cite the Trip.com evidence that hybrid cut quits without hurting performance.
- **AI as teammate:** a 2025 Procter & Gamble field experiment (Dell'Acqua et al.) found individuals using AI performed as well as two-person teams without it, and AI reduced the gap between technical and commercial specialists. AI changes team size and composition.
- **Junior roles:** Stanford found a **13–16%** relative fall in employment for 22–25-year-olds in the most AI-exposed jobs; fewer juniors means fewer people learning team skills by doing.
- **Organisational flattening:** Gallup links falling manager engagement partly to cuts in middle-management layers; wider spans of control mean less coaching per team.`,
    },
    {
      id: 'debates',
      title: 'Debates: arguments and counter-arguments',
      md: `#### 1. Are teams better than individuals?
- **For:** complementary skills, error-checking, commitment, learning (Katzenbach and Smith).
- **Against:** process losses, loafing, conformity; Hackman argued many organisational "teams" perform worse than their best member would alone.
- **Judgement:** teams win on complex, interdependent tasks if designed well; for simple additive tasks individuals may be better.

#### 2. Is conflict good?
- **For:** task conflict surfaces ideas and errors; "devil's advocate" improves decisions (Schwenk, 1990).
- **Against:** meta-analyses show conflict often hurts (De Dreu and Weingart, 2003); task conflict easily becomes personal.
- **Judgement:** debate about ideas helps only where trust and safety are high (De Wit et al., 2012).

#### 3. Is cohesion good?
- **For:** commitment, cooperation, lower turnover.
- **Against:** groupthink, exclusion of outsiders, hiding problems from management.
- **Judgement:** cohesion around a task and norms of challenge, not cohesion around loyalty.

#### 4. Does diversity improve performance?
- **For:** information and perspectives; better accuracy (Phillips et al., 2009).
- **Against:** categorisation and faultlines reduce trust; average effects are small; McKinsey's link between diversity and profit did not replicate (Green and Hand, 2024).
- **Judgement:** diversity is a potential that inclusion and leadership must unlock.

#### 5. Bad apples or bad barrels?
- **Individuals matter** (Felps et al.), but systems decide whether bad behaviour spreads (incentives, leaders' modelling, Bandura).

#### 6. Are Tuckman and Belbin still useful?
- **For:** simple, memorable, good for reflection.
- **Against:** weak evidence and linear assumptions; prefer Gersick for project teams, Edmondson and Hackman for effectiveness.

#### 7. Do we still need teams in an AI world?
- **For AI:** individuals with AI can match small teams (P&G, 2025).
- **For teams:** judgement, accountability, tacit learning and trust are social; AI-only work risks homogenised ideas and fewer juniors learning.`,
    },
    {
      id: 'sustainability',
      title: 'The sustainability link',
      md: `- **Speaking up about harm:** psychological safety lets employees raise safety, ethical and environmental concerns early. At Volkswagen, engineers developed defeat devices under intense pressure to meet targets in a culture where bad news did not travel up.
- **Green teams:** voluntary teams work best with a measurable target they own (energy, waste, travel), authority to act and visible results; otherwise they become symbolic.
- **Wicked problems need diverse teams:** sustainability spans engineering, finance, procurement and communities; cross-functional teams integrate what silos separate.
- **Shared purpose and identity:** social identity theory explains why "this is what we do here" changes behaviour more than rules; but beware moral licensing and groupthink about "being green".
- **Social norms:** social comparison feedback cut household energy use about **2%** (Opower; Allcott, 2011); team dashboards apply the same logic at work.
- **Hybrid work:** fewer commutes cut emissions, but home energy use rises; the net effect depends on commute length and housing.`,
    },
    {
      id: 'links',
      title: 'Links to other topics and past questions',
      md: `| Link | How to use it |
| --- | --- |
| Leadership (section 4) | Leaders set safety and norms; Edmondson, Hackman's coaching |
| Technology and AI (section 5) | AI teammates, algorithmic monitoring of teams |
| Decision-making (section 10) | Groupthink, devil's advocacy, pre-mortems |
| Culture and structure (section 12) | Norms are culture at team level; two-pizza teams as structure |
| 2022 Q1 toxic teams | Bad apples vs systems; intervention levels |
| 2023 Q2 HR memo | Same theories in a first-person voice |
| 2025 Q3 reflection | Tuckman, safety, loafing applied to yourself |
| 2026 B1 motivation | Social identity theory links teams and motivation |`,
    },
    {
      id: 'structures',
      title: 'Model answer structures',
      md: `#### "Why do some teams outperform the sum of their members while others underperform?"
1. **Intro:** Steiner's equation; Woolley's collective intelligence; thesis: design and climate matter more than talent.
2. **Development (Tuckman, Gersick):** teams that resolve storming into norms perform; those stuck or pseudo-norming do not.
3. **Diversity and faultlines:** information vs categorisation; inclusion unlocks the first.
4. **Process losses and gains:** loafing, groupthink vs psychological safety, transactive memory.
5. **Twist:** hybrid and AI (Microsoft, Trip.com, BCG).
6. **Conclusion:** synergy is designed, not assumed.

#### "Is conflict good for teams?"
1. **Intro:** Jehn's three types; thesis: task conflict helps only under safety.
2. **For:** decisions, innovation, Bay of Pigs vs Cuban Missile Crisis.
3. **Against:** meta-analyses; escalation into relationship conflict.
4. **Conditions:** trust, norms for disagreement, leader behaviour.
5. **Conclusion.**

#### "How should leaders build psychological safety?"
1. **Intro:** Edmondson's definition; Project Aristotle.
2. **Frame the work as learning;** acknowledge fallibility; invite input; respond productively to bad news.
3. **Structures:** after-action reviews, blameless post-mortems, andon cords.
4. **Limits:** safety is not comfort; accountability still matters.
5. **Sustainability link:** speaking up about harm.`,
    },
    {
      id: 'memorise',
      title: 'Memorise',
      md: `1. Tuckman (1965), adjourning added 1977; Gersick (1988) midpoint transition.
2. Belbin (1981): nine roles; weak validity.
3. Edmondson (1999): psychological safety; nursing teams reported more errors (1996).
4. Janis (1972): groupthink, eight symptoms; Bay of Pigs vs Cuban Missile Crisis.
5. Ringelmann (1913); Latané et al. (1979); Karau and Williams (1993), 78 studies.
6. Steiner (1972): actual = potential − process losses.
7. Hackman (2002): five conditions; 60/30/10.
8. Woolley et al. (2010): equal turn-taking and social sensitivity, not IQ.
9. Lau and Murnighan (1998): faultlines.
10. Project Aristotle: 180 teams; psychological safety first.
11. Felps et al. (2006): one bad apple, 30–40% drop.
12. Gallup 2026: engagement 20%; managers 22%.
13. Microsoft 61,000 study; Trip.com hybrid cut quits by a third.
14. BCG jagged frontier: +12% tasks, +25% speed, +40% quality inside the frontier.
15. USA 2004 basketball bronze vs Leicester 2016 title: talent is not a team.`,
    },
  ],
};
