export default {
  id: 'mock-2027',
  label: 'Mock 2027',
  kind: 'mock',
  title: 'Predicted mock paper, January 2027',
  summary: `Six questions written in the 2023 house style (short factual context, an instruction to generalise, two or three normative sub-questions), built on the six strongest 2026 themes. Practise them **cold and timed**: 2 hours 15 minutes, any two questions, about 65 minutes each including planning.

These are predictions, not leaks. The facts come from the **2026 topic bank** tab, so revise both together.`,
  meta: [['Paper', 'XSCH3459 · Business Paper 1 (predicted)'], ['Answer', 'Two of six'], ['Materials', 'None']],
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      id: 'q1',
      n: 1,
      title: 'If AI can do graduate work, must firms keep hiring and training juniors?',
      tags: ['AI', 'Work', 'Human capital', 'Who bears the cost'],
      prompt: `Recent research suggests that employment of young graduates has fallen in the occupations most exposed to artificial intelligence, while rising elsewhere. Some economists dispute that AI is the cause. Setting aside the precise causes, suppose that AI can now perform much of the work traditionally given to entry-level employees. Do firms have any obligation to continue hiring and training junior staff? If the cost of developing the next generation of professionals is not borne by firms, who should bear it?`,
      plan: `## Introduction
- **Hook:** Stanford's Digital Economy Lab (Brynjolfsson, Chandar and Chen) used ADP payroll data on millions of workers: employment of **22–25-year-olds** in the most AI-exposed jobs fell about **11%**, while it rose about **10%** in less-exposed jobs, leaving them about **19%** below trend. The first version (August 2025) put the relative fall at **13%**.
- **The dispute:** Vanguard (November 2026) argued AI is **not** the main cause of graduates' struggles, and that firms positioned to benefit from AI actually hired more young workers.
- **The question sets causes aside:** suppose AI can do junior work. The issue is then the **career ladder**: junior tasks are how professionals are made.
- **Define obligation:** a duty that holds even when breaking it would be profitable. Distinguish **moral** obligation, **enlightened self-interest** and **legal** duty.
- **Thesis:** firms have no absolute duty to hire people they could automate, but they do have a **collective obligation** to sustain the training pipeline they depend on. Because training is partly a **public good**, its cost should be **shared** between firms (through levies), the State and, fairly, graduates themselves.
- **Roadmap:** why junior roles matter beyond the tasks; the limits of a firm's duty; who should pay.

## Main point 1 — Junior roles are an investment, not just a cost
- **Claim:** the entry-level job is where tacit knowledge is passed on; automating it hollows out the future senior workforce.
  - **Mechanism:** the change is driven by **reduced hiring**, not layoffs (Stanford), so it is less visible but cumulative: no juniors today means no seniors in 2040.
  - **Professions:** trainee accountants learn judgement through audits and reconciliations; junior lawyers through document review; analysts through building models, which are exactly the tasks AI now does.
  - **Polanyi's paradox:** "we know more than we can tell", so judgement is learned by doing, under supervision.
  - **Self-interest:** firms that stop training will later compete for a shrinking pool of experienced staff, bidding up their wages.
- **Theory:** Becker's human capital theory; the *missing rung* problem.
- **Link:** so there is a business case, but individual firms may still free-ride.

## Main point 2 — Why a single firm's duty is limited: the free-rider problem
- **Claim:** Becker (1964) shows firms underinvest in **general** training because workers can take the skills to rivals. That makes training a **positive externality**, a classic market failure.
  - **Competition:** a firm that keeps manual junior work while rivals automate faces higher costs and lower prices for clients.
  - **Creative destruction (Schumpeter):** forcing firms to preserve tasks that machines do better would freeze productivity.
  - **Counter-evidence:** AI often **augments** novices most (+**34%** productivity for new call-centre agents; Brynjolfsson, Li and Raymond), so the right response is to redesign junior roles, not abolish them.
  - **Redesign:** juniors supervise and verify AI output, check assumptions, and handle clients sooner.
- **Counter-argument:** the "business of business is business" (Friedman), so firms owe nothing beyond the law.
- **Rebuttal:** firms depend on an educated workforce they did not pay to create; reciprocity implies some duty to replenish it.

## Main point 3 — Who should bear the cost: a shared model
- **Claim:** because training creates benefits beyond the firm, cost-sharing is both fairer and more efficient.
  - **Firms collectively:** industry levies, so all who benefit pay. The UK's Apprenticeship Levy charges **0.5%** of payroll for employers with pay bills over £3m; Ireland's **National Training Fund** is already financed by an employer levy.
  - **The State:** subsidised apprenticeships, tax credits for training, and universities redesigning degrees around work-based learning. Germany's dual system trains about half of each cohort through apprenticeships.
  - **Graduates:** some cost (lower starting pay during structured training) is fair, but not unpaid internships, which exclude poorer students and harm social mobility.
  - **AI firms:** a share of productivity gains could fund retraining, since the gains come partly from automating junior work.
- **Theory:** public goods; Pigou (subsidise positive externalities); Rawls (protect the least advantaged entrants).
- **Counter-argument:** levies are taxes on hiring and may reduce jobs.
- **Rebuttal:** design matters: rebate the levy to firms that train, so it rewards hiring.

## Conclusion
- **Answer:** no firm must hire people it could automate, but the business community as a whole is obliged to keep the career ladder intact, because it depends on it.
- **Cost:** shared through levies, public subsidy and fair (paid) training, not offloaded onto graduates.
- **Generalise:** whenever private gains rely on a shared resource (skills, trust, the environment), each user owes something to its upkeep.
- **Final line:** if AI removes the first rung, firms will discover that the ladder was part of their business model.`,
      evidence: `!stat −11% / +10% | Employment of 22–25s in most / least AI-exposed jobs (Stanford, updated series)
!stat 19% | How far below trend young workers in exposed jobs had fallen
!stat 13% | Relative fall in the first version of the study (August 2025)
!stat +34% | Productivity gain for novice agents using AI (Brynjolfsson et al.)
!stat 0.5% | UK Apprenticeship Levy on payrolls over £3m

#### Theories and thinkers
- **Becker (1964):** general vs firm-specific training; free-riding.
- **Polanyi's paradox;** **Schumpeter's creative destruction.**
- **Public goods and positive externalities (Pigou).**
- **Friedman vs Freeman** on what firms owe.

#### Use these fact files
- **2026 topic bank → AI → AI and the first rung of the career ladder.**
- **2026 topic bank → AI → AI investment boom or bubble** (who captures the gains).

#### Pitfalls
- The question sets causes aside, so don't spend half the essay on whether AI caused the fall; mention the dispute in one or two bullets.
- Answer both parts: the obligation **and** who pays.`,
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      id: 'q2',
      n: 2,
      title: 'May a private firm restrict how its own democratic government uses its products?',
      tags: ['Corporate conscience', 'Democratic legitimacy', 'AI', 'National security'],
      prompt: `During 2026, a technology company declined to remove restrictions on how its government's military could use its products. The government responded by designating the company a risk to national security, while a competitor agreed to the government's terms. Abstracting away from the particular firms and country involved, should a private company be able to restrict how a democratically elected government lawfully uses its products? What would make such restrictions legitimate or illegitimate?`,
      plan: `> **Disclosure:** this site was built with Claude, which is made by Anthropic, the company at the centre of this case. The plan below is written to be balanced; weigh the arguments and sources yourself, and in the exam treat both companies even-handedly.

## Introduction
- **The case:** on **4 March 2026** the US Department of Defense (styled the Department of War) designated Anthropic a **"supply chain risk"**, a label normally used for foreign adversaries, after it refused to drop usage limits on **mass domestic surveillance** and **fully autonomous weapons**. OpenAI signed a Pentagon agreement the same week, saying it included safeguards. Anthropic said it would challenge the designation in court.
- **Abstract the question:** when may a firm impose ethical conditions on a democratically elected government's lawful use of its product?
- **Define:** *lawful* (permitted by law) is not the same as *legitimate* (justified by public reasons and accountable process).
- **Thesis:** yes, a firm may restrict use, because **freedom of contract and conscience** run both ways. Restrictions are **legitimate** when they are narrow, principled, transparent, consistently applied and tied to grave harms; **illegitimate** when they amount to a private veto over democratic policy or are commercially or politically opportunistic. The State may then buy elsewhere, but should not **punish** principled refusal.
- **Roadmap:** the case for corporate restrictions; the case for democratic authority; criteria for legitimacy.

## Main point 1 — Why firms may restrict use: conscience and responsibility for products
- **Claim:** firms are moral agents responsible for foreseeable uses of what they build.
  - **Precedents:** Pfizer restricted distribution of its drugs to prevent their use in US executions (2016); Apple refused to build a backdoor into an iPhone for the FBI (2016); Google declined to renew Project Maven (2018) after about **4,000** employees protested.
  - **Abroad:** Microsoft disabled services to an Israeli military unit (September 2025) after finding misuse of its cloud.
  - **Why AI is special:** dual use at enormous scale; the same model can aid medical research or analyse a population's communications.
  - **UN Guiding Principles:** firms must avoid contributing to human-rights harms, including through government customers.
- **Theory:** corporate moral responsibility (Silver); conscientious objection; stakeholder theory.
- **Link:** but a democracy's armed forces are not an ordinary customer.

## Main point 2 — Why democratic authority constrains corporate conscience
- **Claim:** in a democracy, decisions about national security belong to accountable institutions, not unelected executives.
  - **Legitimacy:** elected governments act under law, courts and parliamentary oversight; firms answer to shareholders.
  - **Private veto risk:** if critical suppliers can set conditions, national security depends on corporate preferences, and those preferences may shift with owners, markets or politics.
  - **Selectivity:** a firm might restrict one government and not another, or relax limits when profitable.
  - **Practical limits:** refusal may simply move the contract to a less careful competitor, as the 2026 case illustrates.
  - **But the State has tools:** procurement choice, regulation and law. It can buy elsewhere. Labelling a domestic supplier a security "risk" for its conditions looks **punitive** and chills corporate ethics generally.
- **Theory:** Weber's state monopoly on legitimate force; Friedman (firms should not make public policy); democratic theory.

## Main point 3 — What makes restrictions legitimate or illegitimate
- **Legitimate when they are:**
  - **Narrow and tied to grave harms:** e.g. mass surveillance of citizens, lethal force without meaningful human control. These are areas where international law and ethics already raise concern.
  - **Stated in advance and transparent:** in terms of service and contracts, so the government chooses knowingly.
  - **Consistent:** applied to all governments and customers alike.
  - **Principled, not opportunistic:** not designed to win market share or punish political opponents.
  - **Open to review:** with independent audit or oversight and a route for appeal.
- **Illegitimate when they:**
  - Veto lawful policy choices on contested political questions (e.g. immigration or tax policy) rather than grave harms.
  - Discriminate between governments for commercial or partisan reasons.
  - Are hidden, vague or applied after contracting.
- **The State's side:** legitimate responses are to buy elsewhere, regulate, or legislate; illegitimate ones are retaliation designed to coerce compliance.

## Conclusion
- **Answer:** yes, a private firm may restrict how even a democratic government uses its products, but only within strict conditions of narrowness, transparency and consistency.
- **Balance:** the government may decline to buy; it should not punish principled restriction, and firms should not claim a veto over democratic policy.
- **Generalise:** as private firms build public-critical infrastructure (AI, satellites, cloud), society needs clear rules for this collision, ideally set by legislatures, not resolved by contract disputes.
- **Final line:** corporate conscience is legitimate when it refuses to do grave harm, and illegitimate when it claims the power to govern.`,
      evidence: `!stat 4 Mar 2026 | Anthropic designated a "supply chain risk" by the US defence department
!stat 2 | Usage limits at the centre of the dispute: mass domestic surveillance and fully autonomous weapons
!stat 2016 | Apple refused the FBI's backdoor request; Pfizer restricted execution drugs
!stat ~4,000 | Google employees who protested Project Maven (2018)

#### Theories and thinkers
- **Corporate moral responsibility (Silver);** **conscientious objection.**
- **Weber:** legitimate authority; **democratic accountability.**
- **UN Guiding Principles;** **lawful vs legitimate.**

#### Use these fact files
- **2026 topic bank → AI → AI firms versus their own government** (includes the disclosure note).

#### Pitfalls
- Abstract away: use the 2026 case as evidence, then generalise with other examples.
- Treat both companies fairly; the examiners reward balance on live disputes.`,
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      id: 'q3',
      n: 3,
      title: 'Should Ireland keep welcoming data centres? Who gets scarce electricity?',
      tags: ['Ireland', 'Energy', 'FDI', 'Allocation'],
      prompt: `Data centres now consume roughly a fifth of Ireland's electricity, and the State has recently created a pathway for new connections on condition that operators match much of their demand with new renewable generation. Supporters see data centres as essential to Ireland's digital economy; critics argue they crowd out households and climate goals. Should Ireland continue to welcome new data centres? In your answer, consider who should have priority when a scarce national resource is in demand.`,
      plan: `## Introduction
- **Hook:** the CSO reported (7 July 2026) that data centres used **7,663 GWh** in 2025, **23%** of Ireland's metered electricity, up from **5%** in 2015 and more than all rural households combined (about **9%**). Their use grew **10%** in 2025, against **2%** for everyone else.
- **Policy:** on **12 December 2025** the CRU set a new connection policy: new data centres must match at least **80%** of annual demand with **additional** Irish renewables, with a **six-year** glide path.
- **Define scarcity:** grid capacity and clean electricity, both limited in the short run.
- **Thesis:** Ireland should continue to welcome data centres, but **conditionally**: they must pay their full system costs, bring new renewables and flexibility, and locate where the grid can take them. Priority for scarce power should go first to **essential and hard-to-substitute uses**, then to uses with the highest public value per megawatt-hour.
- **Roadmap:** the economic case; the costs and trade-offs; allocation principles and conditions.

## Main point 1 — The economic case: Ireland's digital economy depends on them
- **Claim:** data centres are infrastructure for the FDI model and for AI.
  - **Ecosystem:** Google, Microsoft, Amazon and Meta run European operations from Ireland; cloud infrastructure anchors that presence.
  - **AI demand:** the IEA projects global data-centre electricity could reach about **945 TWh** by 2030, more than double 2024, so Ireland's share of the AI economy depends on capacity.
  - **Investment:** construction, grid connections and corporate power-purchase agreements that can finance new wind and solar.
  - **Agglomeration:** firms cluster near infrastructure, skills and suppliers.
- **Theory:** agglomeration economies; FDI-led development.
- **Counter-argument:** jobs per megawatt are very low once a site is built (typically a few hundred operational staff per large site).
- **Rebuttal:** value comes through the tech firms they support, but this is exactly why each project should demonstrate its value.

## Main point 2 — The costs: climate targets, prices and crowding out
- **Claim:** one sector taking almost a quarter of a small grid creates real trade-offs.
  - **Climate law:** the Climate Action and Low Carbon Development (Amendment) Act 2021 requires a **51%** emissions cut by 2030 (from 2018); the target is **80%** renewable electricity by 2030. Fast-growing demand makes both harder.
  - **Grid stress:** EirGrid effectively paused new Dublin connections from 2022 because of capacity concerns.
  - **Household bills:** Irish household electricity prices are among the highest in the EU; network upgrades are paid partly by all users.
  - **Matching problem:** an 80% annual match doesn't mean the wind blows when the servers run, so gas backup is still needed hour by hour.
- **Theory:** opportunity cost; negative externalities; the *polluter-pays* principle.
- **Link:** the question is not yes/no but on what terms.

## Main point 3 — Who should have priority, and on what conditions?
- **Allocation principles (rank them):**
  - **Essential needs first:** households, hospitals, water, transport. Electricity for heat and light is a basic need.
  - **Public value per unit:** compare jobs, tax, innovation and emissions per MWh across industrial users, as well as headline investment.
  - **Willingness to pay the full cost:** connection, grid reinforcement and carbon costs, so others aren't subsidising data centres.
  - **Flexibility:** users who can shift load (data centres can move some computing in time, or across Europe) should get capacity in exchange for curtailment at peaks.
- **Conditions for new data centres:**
  - **Additional** renewables (the CRU's 80%), plus storage and on-site backup that can support the grid.
  - **Location** where the grid has spare capacity (outside Dublin, near renewables).
  - **Transparency:** public reporting of energy, water use and emissions.
  - **Waste heat reuse:** e.g. the Tallaght district heating scheme uses data-centre heat.
- **Counter-argument:** prioritising households is economically inefficient; prices should decide.
- **Rebuttal:** markets allocate efficiently only when prices include externalities, and pure price allocation of essentials is unacceptable.

## Conclusion
- **Answer:** yes, Ireland should keep welcoming data centres, but no longer **unconditionally**; FDI is not a free good.
- **Priority:** essential uses first, then the highest value per scarce megawatt, with data centres paying their full costs and providing flexibility.
- **Generalise:** a small open economy must decide what it is selling: low taxes and cheap power, or a high-value location with demanding conditions.
- **Final line:** the right question is not whether data centres are good for Ireland, but whether each one is worth the power it takes.`,
      evidence: `!stat 23% | Share of Irish metered electricity used by data centres (2025)
!stat 7,663 GWh | Data-centre electricity use in 2025 (CSO)
!stat 5% → 23% | Share of electricity, 2015 → 2025
!stat 80% | Share of demand new data centres must match with additional Irish renewables (CRU, December 2025)
!stat 51% | Ireland's legally binding emissions cut by 2030 (vs 2018)
!stat 945 TWh | Projected global data-centre electricity by 2030 (IEA)

#### Theories and thinkers
- **Opportunity cost;** **polluter pays;** **externalities (Pigou).**
- **Agglomeration economies (Marshall, Krugman).**
- **Allocation principles:** need, desert, efficiency, equality.

#### Use these fact files
- **2026 topic bank → AI → Data centres in Ireland.**
- **2026 topic bank → Ireland → Budget 2027** (FDI dependence).

#### Pitfalls
- The question explicitly asks about **priority**: give a clear ranking.
- Don't say "ban them" or "let them all in"; set conditions.`,
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      id: 'q4',
      n: 4,
      title: 'Banning children from social media: justified? Should platforms support it?',
      tags: ['Platforms', 'Children', 'Privacy', 'Twist stakeholder'],
      prompt: `Australia, France and several other countries have moved to prohibit children below a certain age from holding social media accounts, and the question is under active consideration in Ireland and across the EU. What are the strongest justifications for, and objections to, such a policy? Should social media companies be **encouraging, discouraging, or neutral** about this legislation?`,
      plan: `## Introduction
- **Hook:** Australia's *Social Media Minimum Age* law (passed **29 November 2024**, in force **10 December 2025**) made **16** the minimum age for accounts on platforms such as Instagram, TikTok, Snapchat, X and YouTube. By mid-December 2025 platforms had removed or restricted about **4.7m** under-16 accounts.
- **Contrast:** France passed an **under-15** ban on **21 July 2026**, but its Constitutional Council struck down the core of it on **14 August 2026** as a disproportionate restriction on expression lacking privacy safeguards.
- **Ireland:** age verification and a common EU approach were priorities of Ireland's EU Council Presidency (July–December 2026), with an age-verification tool planned in the Government Digital Wallet.
- **Thesis:** the strongest case for an age limit is protecting children from **engagement-maximising design** they cannot resist; the strongest objection is that **age verification threatens everyone's privacy** and pushes children to worse spaces. Platforms should **encourage** well-designed, privacy-preserving age rules, because their business model is the problem and regulatory clarity is in their interest.
- **Roadmap:** the justifications; the objections; the platform's stance.

## Main point 1 — The strongest justifications
- **Claim:** children are uniquely vulnerable to products designed to capture attention.
  - **Design:** infinite scroll, autoplay, streaks and algorithmic feeds maximise time spent, and therefore ad revenue and data.
  - **Evidence of harm:** Meta's own research (2021) found **32%** of teen girls said Instagram made body image worse when they already felt bad; the US Surgeon General's advisory (May 2023) warned of mental-health risks; Haidt's *The Anxious Generation* (2024) links the rise in teen anxiety to smartphones.
  - **Litigation:** in October 2023 about **40** US states sued Meta over youth-harming design.
  - **Collective-action problem:** one parent saying no isolates their child; a law resets the norm for everyone.
- **Theory:** paternalism justified for minors (Mill excluded children from the harm principle); stakeholder theory; behavioural economics (present bias).

## Main point 2 — The strongest objections
- **Claim:** a ban is blunt, hard to enforce and creates new harms.
  - **Weak evidence of causation:** Orben and Przybylski (2019) found the average link between screen use and adolescent wellbeing very small, similar to that of eating potatoes; critics of Haidt argue correlation is not causation.
  - **Privacy:** enforcing an age limit means checking everyone's age (ID, face scans), creating data that can be breached or misused.
  - **Displacement:** children may use VPNs, false birthdays or less-moderated platforms.
  - **Rights and benefits:** online communities support isolated young people (e.g. LGBTQ+ or rural teens); the French court's ruling shows the rights problem is real.
  - **Who decides:** shifts responsibility from parents to the State.
- **Counter-argument to the objections:** privacy-preserving verification exists. The EU's age-verification app (April 2026) lets users prove they are over an age without revealing identity.
- **Link:** so the best policy pairs an age threshold with **safety-by-design duties** for all young users.

## Main point 3 — The twist: should platforms encourage, discourage or stay neutral?
- **Claim:** platforms should **encourage** age rules, provided they are privacy-preserving and apply equally to all, and should fix design rather than just exclude.
  - **Self-interest:** regulatory certainty beats a patchwork of national laws and lawsuits; trust with parents and advertisers is valuable.
  - **Responsibility:** as the designers of engagement features, platforms cause much of the risk, so neutrality is not credible.
  - **Actual behaviour:** Meta launched "Teen Accounts" (September 2024) with stricter defaults, while lobbying for age checks to be done by **app stores** (Apple and Google) rather than by itself, which shifts cost and liability.
  - **Commercial cost:** under-16s are tomorrow's users, which explains resistance in practice.
  - **What platforms should support:** EU-wide standards; privacy-preserving verification; safer defaults; no profiling-based ads to minors (already banned under the DSA); independent audits.
- **Counter-argument:** platforms should stay neutral, since it's for democracies to decide.
- **Rebuttal:** firms that profit from children's attention can't credibly be neutral about rules protecting them; but they should support **good** rules rather than lobby to shift the burden.

## Conclusion
- **Answer:** an age limit is justified as part of a wider package, but a bare ban is a blunt instrument with real privacy and displacement costs.
- **Best design:** privacy-preserving age assurance, safety-by-design duties and digital literacy, ideally coordinated EU-wide.
- **Platforms:** should **encourage** well-designed legislation, because their design choices created the problem.
- **Final line:** the question is not whether children can be kept off social media, but whether social media can be made fit for children.`,
      evidence: `!stat 16 | Australia's minimum age for social media accounts (from 10 December 2025)
!stat 4.7m | Under-16 accounts removed or restricted in Australia by mid-December 2025
!stat 14 Aug 2026 | France's Constitutional Council struck down the core of its under-15 ban
!stat 32% | Teen girls who said Instagram worsened body image (Meta research, 2021)
!stat ~40 | US states that sued Meta over youth harms (October 2023)

#### Theories and thinkers
- **Mill:** the harm principle and its exclusion of children; **paternalism.**
- **Haidt (2024) vs Orben and Przybylski (2019):** the causation debate.
- **Stakeholder theory;** **privacy by design.**

#### Use these fact files
- **2026 topic bank → Ireland → Children and social media.**

#### Pitfalls
- The twist stakeholder (platforms) is where the marks are; give it a full main point.
- Distinguish a ban (access) from regulation of design.`,
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      id: 'q5',
      n: 5,
      title: 'Unlawful tariffs refunded: who is morally entitled, and who "really" pays a tax?',
      tags: ['Tax incidence', 'Ethics', 'Trade', 'Unjust enrichment'],
      prompt: `In 2026 the US Supreme Court ruled that a large set of tariffs had been imposed without legal authority, opening the possibility of refunds worth well over $100 billion to the importers who paid them. Many of those importers had already passed some or all of the cost on to their customers through higher prices. Who, if anyone, is morally entitled to these refunds? What does your answer imply about who "really" pays a tax?`,
      plan: `## Introduction
- **Hook:** on **20 February 2026**, in *Learning Resources, Inc. v. Trump*, the Supreme Court ruled **6–3** that the International Emergency Economic Powers Act (1977) does not authorise tariffs. More than **$133bn** had been collected, and potential refunds rose to about **$170bn**. The administration replaced them with a **10%** tariff under Section 122 of the Trade Act 1974 (limited to **150 days** without Congress).
- **The puzzle:** the importer paid the government, but its customers may have paid the importer.
- **Define:** **legal incidence** (who hands the money to the State) vs **economic incidence** (whose real income falls).
- **Thesis:** morally, the refund belongs to **whoever bore the cost**, in proportion to the share they bore. Because tracing is often impossible, importers should receive the refunds but should not keep the passed-on share as a **windfall**. A tax is "really" paid by whoever's real income falls, determined by elasticities, not by statute.
- **Roadmap:** the case for importers; the passing-on problem; practical resolution and what it implies.

## Main point 1 — The case for refunding importers
- **Claim:** the State took money without legal authority, and the rule of law requires restitution to the payer.
  - **Rule of law:** if governments keep unlawfully collected taxes, legal limits on executive power are hollow.
  - **Importers bore real costs:** some absorbed the tariff in lower margins to keep prices competitive; many also paid compliance costs and suffered uncertainty.
  - **Administrative clarity:** the importer is the identifiable legal payer, with customs records.
- **Theory:** restitution; the rule of law (Dicey; Hayek); Congress's power to tax (Article I).
- **Counter-argument:** refunding importers who fully passed on the cost gives them a windfall.

## Main point 2 — The passing-on problem: who bore the burden?
- **Claim:** economic evidence shows tariffs are largely paid by domestic buyers, so refunds to importers can enrich those who didn't bear the cost.
  - **Evidence:** studies of the 2018–19 US tariffs (Amiti, Redding and Weinstein, 2019; Fajgelbaum et al., 2020) found close to **complete pass-through** into US import prices; US buyers, not foreign exporters, paid.
  - **Example:** an importer pays a $10 tariff on a $100 good and sells it for $110. If refunded $10, it gains twice: once from the higher price, once from the refund.
  - **Unjust enrichment:** a person should not profit at another's expense without justification.
  - **EU precedent:** EU law allows a **"passing-on" defence**: a state may refuse to refund an unlawful charge only if it was fully passed on and the refund would unjustly enrich the trader (CJEU, *San Giorgio*, 1983).
  - **Reality:** incidence varies by product and firm: some absorbed it, some partly or fully passed it on, and prices also changed for other reasons.
- **Theory:** tax incidence (Harberger): the side of the market with **less elastic** demand or supply bears more of the tax, whoever is legally liable.

## Main point 3 — A fair, workable resolution, and what it implies
- **Claim:** refund importers, with obligations to pass on refunds where evidence shows they passed on costs.
  - **Mechanisms:** importers certify the extent of pass-through; contractual customers (B2B buyers with tariff surcharge clauses) can claim refunds via contract; consumer class actions where pricing was explicit ("tariff surcharge" lines on invoices).
  - **Where tracing is impossible:** the residual could fund a general benefit (e.g. lower taxes), since the State cannot identify millions of individual consumers.
  - **Business ethics:** firms that added explicit tariff surcharges have the strongest moral duty to return the money to those customers.
  - **Implication for "who pays a tax":** statutory incidence is a legal fiction; economic incidence follows market power and elasticities. That applies equally to windfall taxes, VAT, carbon taxes and minimum unit pricing.
- **Counter-argument:** a pass-on test is administratively costly and invites endless litigation.
- **Rebuttal:** use it only where evidence is clear (surcharges, contracts), and default to importers otherwise.

## Conclusion
- **Answer:** morally, the refund belongs to those who bore the economic burden, in proportion to their share; legally and practically it goes to importers, who should pass on what they passed on.
- **Implication:** whoever writes the cheque rarely pays the whole tax; incidence is decided by markets, not statutes.
- **Generalise:** the windfall-tax debate (2023) asked who deserves unearned gains; tariff refunds ask the same question in reverse.
- **Final line:** a refund that goes to someone who never bore the cost doesn't right a wrong; it creates a new one.`,
      evidence: `!stat 6–3 | Supreme Court vote that IEEPA does not authorise tariffs (20 February 2026)
!stat $133bn+ | IEEPA tariff revenue collected before the ruling
!stat ~$170bn | Estimated potential refunds
!stat 10% / 150 days | Replacement Section 122 tariff and its time limit without Congress
!stat ~100% | Pass-through of 2018–19 US tariffs to US import prices (Amiti, Redding and Weinstein)

#### Theories and thinkers
- **Tax incidence (Harberger);** **legal vs economic incidence;** **elasticities.**
- **Unjust enrichment and restitution;** **the passing-on defence (CJEU *San Giorgio*, 1983).**
- **Rule of law (Dicey, Hayek).**

#### Use these fact files
- **2026 topic bank → Geopolitics → US tariffs struck down, then rebuilt.**

#### Pitfalls
- Answer both questions: entitlement **and** what it implies about tax.
- Use a simple numerical example; examiners like the economics made concrete.`,
    },
    /* ------------------------------------------------------------------ Q6 */
    {
      id: 'q6',
      n: 6,
      title: 'Founders who can never be removed: should exchanges allow it?',
      tags: ['Corporate governance', 'Finance', 'Principal–agent', 'Power'],
      prompt: `A number of very large companies have recently listed on stock exchanges with share structures that leave their founders in near-permanent control, so that public shareholders cannot remove the chief executive. Investors have nevertheless bought the shares in large numbers. Is there anything wrong with this arrangement? Should stock exchanges or regulators permit it?`,
      plan: `## Introduction
- **Hook:** SpaceX priced the largest IPO in history on **11 June 2026** at **$135** a share: a headline **$75bn** raised (SEC filings show **$86.25bn** gross). It closed its first day at about **$160.95**, valuing the company at about **$2.1–2.2 trillion** and making Elon Musk the first trillionaire (Forbes). Class B shares carry **10 votes** and elect **51%** of the board; Musk was expected to hold about **82.4%** of voting power.
- **Investors objected but bought:** the New York State and City pension funds and CalPERS criticised super-voting shares, limits on removing Musk and mandatory arbitration of shareholder disputes, yet demand was enormous.
- **Define:** a **dual-class structure** separates economic ownership from voting control.
- **Thesis:** there is something wrong, not because founder control is bad in itself, but because **permanent, unaccountable control** over public capital creates agency risks that fall on people who did not really choose them (index funds, pensions). Exchanges should **permit dual-class listings only with safeguards**, chiefly **time-based sunset clauses** and independent oversight.
- **Roadmap:** the case for founder control; what's wrong with permanent control; what exchanges should require.

## Main point 1 — The case for founder control
- **Claim:** dual-class shares can protect long-term innovation from short-term pressure.
  - **Track record:** Google (IPO 2004) and Meta used dual-class shares and created enormous value; Zuckerberg controls about **61%** of votes with roughly **13%** of the equity.
  - **SpaceX's case:** reusable rockets and Starlink needed years of losses and repeated failures; SpaceX reported about **$18.7bn** revenue and a **$4.9bn** net loss in 2025, and investors bought the long-term vision.
  - **Consent:** the structure was disclosed in the prospectus; investors could refuse to buy.
  - **Competition for listings:** the UK's July 2024 listing reforms widened dual-class rules to attract tech firms; exchanges compete for IPOs.
- **Theory:** *short-termism*; the founder's "idiosyncratic vision" argument (Goshen and Hamdani).
- **Link:** the strongest argument is consent, but consent is weaker than it looks.

## Main point 2 — What's wrong: permanent, unaccountable power over public money
- **Claim:** the problem grows over time and falls on investors who cannot really say no.
  - **Agency problem:** Berle and Means (1932) on the separation of ownership and control; Jensen and Meckling (1976) on agency costs. Without votes, shareholders cannot discipline management.
  - **The value premium fades:** studies (e.g. Cremers, Lauterbach and Pajuste) find the valuation benefit of dual-class firms declines as they age, and the founder's advantage fades.
  - **Forced holders:** index funds must hold large companies regardless of governance. The S&P 500 barred new multi-class firms in 2017 but **reversed** that in April 2023, so millions of pension savers now own firms they cannot influence.
  - **Conflicts:** one person running several interlinked companies (SpaceX, Tesla, xAI and X, now inside SpaceX) creates related-party conflicts.
  - **Pay and power:** Tesla shareholders approved a package potentially worth about **$1 trillion** in November 2025; with founder control, boards struggle to say no.
  - **Public consequences:** SpaceX's Starlink and launch services are strategically vital to governments, so governance affects more than shareholders.
- **Theory:** principal–agent; Hirschman's exit and voice (shareholders can only exit); stakeholder theory.

## Main point 3 — What exchanges and regulators should require
- **Claim:** permit, but with safeguards that make control earned and time-limited.
  - **Sunset clauses:** super-voting shares convert to ordinary shares after a set period (e.g. 7–10 years) unless independent shareholders vote to extend.
  - **Ownership floors:** extra votes lapse if the founder's economic stake falls below a threshold or the founder leaves.
  - **Independent directors** and committees for related-party transactions and pay.
  - **No mandatory arbitration** that strips shareholders of court access.
  - **Index inclusion:** index providers can require minimum public voting rights (FTSE Russell requires **more than 5%** of voting rights in public hands).
- **Counter-argument:** sunset rules will push listings to more permissive exchanges.
- **Rebuttal:** coordinated minimum standards (as with global accounting rules) limit regulatory arbitrage, and investors increasingly price governance.

## Conclusion
- **Answer:** yes, there is something wrong with **permanent** founder control of a public company: it separates risk from power and leaves index investors without a voice.
- **Regulation:** exchanges should permit dual-class listings but require sunset clauses, independent oversight and court access.
- **Generalise:** the larger and more strategically important a private firm becomes, the stronger the case for accountability that doesn't depend on one person's goodwill.
- **Final line:** founders deserve the freedom to build; no one deserves permanent, unaccountable control over other people's money.`,
      evidence: `!stat $75bn / $86.25bn | SpaceX IPO: headline raised / SEC-reported gross proceeds (June 2026)
!stat ~$2.1–2.2tn | SpaceX market value after its first trading day
!stat 82.4% | Musk's expected voting power after the IPO
!stat 10:1 | Class B vs Class A votes per share
!stat ~61% / ~13% | Zuckerberg's voting control vs economic stake in Meta
!stat April 2023 | S&P 500 reverses its 2017 ban on new multi-class listings

#### Theories and thinkers
- **Berle and Means (1932);** **Jensen and Meckling (1976):** agency costs.
- **Short-termism** vs **entrenchment.**
- **Hirschman:** exit vs voice.
- **Shareholder primacy vs stakeholder theory.**

#### Use these fact files
- **2026 topic bank → Markets → SpaceX IPO and founder control.**

#### Pitfalls
- Answer both parts: "anything wrong?" **and** "should exchanges permit it?"
- Separate the founder's merit from the governance structure.`,
    },
  ],
};
