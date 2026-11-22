export default {
  id: 'jan-2023',
  label: 'Jan 2023',
  kind: 'paper',
  title: 'January 2023 paper',
  summary: `The most "modern" of the older papers: every question asks what someone **should** do or what is **justified**, and four of the six are pegged to the previous year's headlines (Qatar, Musk's Twitter, Russia, inflation). Twice the paper tells you to **abstract away** from the case, so use the case as evidence for a principle rather than as the subject of the essay.`,
  meta: [['Format', 'Six questions, answer two'], ['Time', '2 h 15 min'], ['Mode', 'All six normative']],
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      id: 'q1',
      n: 1,
      title: 'Qatar 2022: can ethical trade-offs in hosting major events be worth it?',
      paraphrased: true,
      tags: ['Ethics', 'Sport business', 'Human rights', 'Trade-offs'],
      prompt: `The 2022 FIFA World Cup in Qatar was criticised over the treatment of migrant workers, LGBTQ+ rights and its environmental footprint, while its defenders pointed to economic, cultural and diplomatic benefits. **Abstracting away from this case**, how should we feel about the trade-offs involved in hosting major international events? Can they be worth it, and how should they be managed?`,
      plan: `## Introduction
- **Hook:** Qatar won the hosting vote on 2 December 2010 and then spent an estimated **$200–220bn** on stadiums, a metro, roads and hotels, with roughly **2 million migrant workers** (about 90% of its workforce) building it.
- **The tension:** mega-events promise collective benefits (growth, prestige, cultural exchange) but can impose concentrated costs on people with little voice (workers, displaced residents, minorities).
- **Define a trade-off:** giving up some of one good to get more of another. The ethical question is *which* goods may be traded at all.
- **Thesis:** trade-offs **can** be worth it, but only where (1) the benefits are real rather than promised, (2) the costs do not fall on people's basic rights, and (3) those who profit carry the cost of safeguards. Rights are a **side-constraint**, not a price.
- **Roadmap:** the case for the benefits; why rights cannot be bought off; how trade-offs should be governed.

## Main point 1 — The benefits are real but systematically overstated
- **Claim:** events can create lasting value, but the economics usually disappoint, so "it was worth it" must be proven, not asserted.
  - **Barcelona 1992:** the Olympics were used to rebuild the waterfront and open up the city to the sea; Barcelona moved from a peripheral destination to one of Europe's top city-break destinations.
  - **Counter-examples:** Montreal's 1976 Olympic debt took about **30 years** to repay; many Athens 2004 venues fell derelict; Brazil's 2014 stadium in Manaus cost about $300m for a city with no top-flight club.
  - **Cost overruns:** Flyvbjerg's Oxford research finds **every Olympics since 1960** overran its budget, with an average real overrun of about **172%**.
  - **FIFA's take:** FIFA reported about **$7.5bn** revenue for the 2019–22 cycle, while hosts carry the infrastructure bill.
- **Theory:** *optimism bias* and the *winner's curse* in bidding; *opportunity cost* (what else $200bn could build).
- **Counter-argument:** intangible gains (soft power, national pride, tourism image) are real even if hard to measure.
- **Rebuttal:** intangible gains accrue mainly to the state and FIFA; the workers who bear the costs see few of them. Unmeasurable benefits cannot justify measurable harm.
- **Link:** so the first test is evidence of genuine, widely shared benefit.

## Main point 2 — Some costs cannot be traded: rights as side-constraints
- **Claim:** utilitarian arithmetic (total benefit > total cost) fails when costs fall on people's basic rights.
  - **Deaths:** The Guardian (Feb 2021) reported **6,500+** deaths of South Asian migrant workers in Qatar since 2010, from all causes and all jobs. Qatar's figures recorded **3 work-related deaths** on stadium sites. The gap shows how measurement itself is contested.
  - **Kafala system:** workers' legal status was tied to their employer; Qatar abolished exit permits (2020), removed the No Objection Certificate and introduced a **QAR 1,000** minimum wage plus food and housing allowances (in force March 2021).
  - **Remedy:** Amnesty and others called for a **$440m** compensation fund, equal to the tournament prize money; FIFA did not create one.
  - **Expression:** FIFA threatened sporting sanctions, so seven European captains abandoned the "OneLove" armband.
- **Theory:** Kant (people as ends, not means); Nozick's *side-constraints*; the **UN Guiding Principles** (2011): companies must respect human rights wherever they operate.
- **Counter-argument:** the spotlight produced reforms that a boycott never would have (*constructive engagement*).
- **Rebuttal:** partly true, but reforms were slow and enforcement weak (wage theft persisted), and engagement only works if it is conditional.
- **Link:** the question then becomes how to manage the trade-off so rights are protected rather than priced.

## Main point 3 — How trade-offs should be managed: conditional participation
- **Claim:** the right response is neither blanket boycott nor uncritical participation, but conditions set **before** hosting rights are awarded.
  - **At the bid stage:** award hosting only with independently verified labour, housing and expression standards (FIFA added human-rights criteria to bidding in 2017, yet Saudi Arabia was confirmed as the only bidder for 2034 in December 2024).
  - **Sponsors' leverage:** Coca-Cola, Adidas, Visa and AB InBev (whose roughly **$75m** Budweiser deal was undercut by the stadium beer ban two days before kick-off) can make money conditional on audited standards.
  - **Remedy and transparency:** escrow funds for wage theft, public lists of contractors, independent monitors with powers to investigate.
  - **Consistency test:** apply the same principles to democracies. The 2026 World Cup in the US raised its own questions (ICE's security role, FIFA's "Peace Prize" to Donald Trump), so "sportswashing" is not only an autocracy problem.
- **Theory:** stakeholder theory (Freeman); due diligence under the UNGPs; *Hirschman's exit and voice* (sponsors using voice before exit).
- **Counter-argument:** conditions will simply push events to the least scrupulous bidders.
- **Rebuttal:** that is an argument for collective standards (all sponsors, all federations), not for no standards.

## Conclusion
- **Answer:** we should feel **uneasy but not absolutist**. Trade-offs between money, prestige and convenience are acceptable; trade-offs that spend workers' lives and basic freedoms are not.
- **Conditions:** benefits proven, rights protected ex ante, remedy funded by those who profit, and the same rules for every host.
- **Generalise:** the same logic applies to any firm weighing a lucrative contract against harm to third parties (supply chains, Russia, AI).
- **Final line:** a mega-event is worth hosting only if it would still be worth hosting once its true costs are paid by those who gain from it.`,
      evidence: `!stat $200–220bn | Estimated Qatari infrastructure spend linked to the World Cup
!stat ~2m | Migrant workers in Qatar (about 90% of the workforce)
!stat 6,500+ | South Asian migrant worker deaths in Qatar since 2010, all causes (The Guardian, 2021)
!stat $440m | Remedy fund demanded by Amnesty, equal to the prize money
!stat 172% | Average real cost overrun of Olympic Games since 1960 (Flyvbjerg)
!stat $7.5bn | FIFA revenue in the 2019–22 cycle
!stat QAR 1,000 | Qatar's new monthly minimum wage (2021), plus food and housing allowances
!stat 30 years | Time Montreal took to pay off the 1976 Olympic debt

### Theories and thinkers
- **Utilitarianism vs rights:** Bentham and Mill (aggregate welfare) versus Kant and Nozick (side-constraints that cannot be traded).
- **UN Guiding Principles on Business and Human Rights (Ruggie, 2011):** protect, respect, remedy.
- **Stakeholder theory (Freeman, 1984)** versus **shareholder primacy (Friedman, 1970)**.
- **Sportswashing:** using sport to launder reputation (Qatar, Saudi Arabia's LIV Golf and Newcastle United, but also democracies).
- **Optimism bias / winner's curse** in bidding (Flyvbjerg; Zimbalist, *Circus Maximus*, 2015).

### Extra examples
- **Saudi Arabia 2034:** confirmed in December 2024 as the only bidder, so the 2023 debate is live again.
- **Beijing 2022 Winter Olympics:** diplomatic boycott by the US, UK and others over Xinjiang.
- **Paris 2024:** about 95% of venues were existing or temporary, a model for reducing the cost side.
- **2026 World Cup (US, Canada, Mexico):** first 48-team, 104-match tournament; ICE security role and FIFA's Peace Prize to Trump (5 December 2025).

### Pitfalls
- Don't write a Qatar news report: the question says abstract away. Use Qatar, Barcelona and 2026 as evidence for a general rule.
- Don't only list harms: the paper likes "can they be worth it?", so give the benefits a fair hearing first.
- Treat death figures carefully: say what they measure (all causes vs work-related).`,
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      id: 'q2',
      n: 2,
      title: 'Twitter as a public square: do we need one, and should for-profit firms run it?',
      paraphrased: true,
      tags: ['Platforms', 'Political philosophy', 'Free speech', 'Regulation'],
      prompt: `Elon Musk bought Twitter in 2022, describing it as the "de facto public town square". **Setting aside the specific company**, do we need a public square, and what role should for-profit firms play in facilitating it?`,
      plan: `## Introduction
- **Hook:** Musk completed his **$44bn** takeover of Twitter on 27 October 2022, calling it the "de facto public town square". Within months about **80%** of staff were gone and advertising revenue had fallen by roughly half.
- **Define the public square:** a shared space where citizens can speak, hear others, scrutinise power and form public opinion. Habermas's *public sphere* (1962); the US Supreme Court called social media "the modern public square" in *Packingham v North Carolina* (2017).
- **The puzzle:** the square is a public good, but today it is owned by advertising-funded firms whose incentive is engagement, not deliberation.
- **Thesis:** yes, democracies need a public square; private firms can host it, but no single owner, commercial or governmental, should control it. The answer is **plural ownership plus public rules**.
- **Roadmap:** why we need it; why profit-driven ownership distorts it; what role firms should have.

## Main point 1 — Why a democracy needs a public square
- **Claim:** self-government depends on citizens being able to speak, hear opposing views and hold power to account.
  - **Mill (On Liberty, 1859):** truth emerges from the collision of opinions; silencing a view robs the listener as well as the speaker.
  - **Accountability:** #MeToo (2017) and footage of George Floyd's murder (2020) reached the public through platforms, not editors.
  - **Arab Spring (2010–11):** activists used Facebook and Twitter to organise and document.
  - **Access:** anyone with a phone can join, unlike the old gatekeeping of newspapers and broadcasters.
- **Counter-argument:** today's online "square" is fragmented into echo chambers, so it may not be a shared space at all.
- **Rebuttal:** that is an argument for designing it better, not for doing without one.
- **Link:** the problem is not whether we need the square, but who runs it and on what incentives.

## Main point 2 — Why ad-funded, privately owned squares distort debate
- **Claim:** the business model monetises attention, and outrage holds attention.
  - **MIT study (Vosoughi, Roy and Aral, *Science*, 2018):** false news was **70% more likely** to be retweeted than true news and reached 1,500 people about six times faster.
  - **Facebook Files (2021):** internal documents showed the "angry" reaction was weighted **five times** a "like" in ranking from 2017.
  - **Private power over speech:** Twitter permanently suspended Donald Trump on 8 January 2021; Facebook's Oversight Board upheld his suspension in May 2021. Unelected firms decided the reach of a sitting president.
  - **Owner risk:** one person's preferences can reshape the square overnight (verification changes, reinstated accounts, algorithm changes after 2022).
  - **Data:** participation is paid for with personal data; Meta was fined a record **€1.2bn** by Ireland's Data Protection Commission in May 2023 over EU–US data transfers.
- **Theory:** *public goods* and *network effects* (users can't easily leave, so platforms behave like natural monopolies); Hirschman's *exit and voice*.
- **Counter-argument:** private ownership funds infrastructure, moderation and innovation that states could not provide, and state-run squares risk censorship.
- **Rebuttal:** agreed, which is why the answer is regulation of private hosts, not nationalisation.

## Main point 3 — The right role for firms: hosts under public rules
- **Claim:** firms should operate the infrastructure, but under transparent, democratically set rules and with real competition.
  - **EU Digital Services Act:** very large platforms (45m+ EU users) must assess systemic risks, open data to researchers and explain recommender systems, with fines up to **6% of global turnover**; obligations applied from August 2023. The Commission issued its first DSA fine, **€120m against X**, in December 2025.
  - **Ireland:** the Online Safety and Media Regulation Act 2022 created **Coimisiún na Meán** (March 2023), which enforces the DSA for the many platforms headquartered in Dublin.
  - **Competition and portability:** decentralised alternatives (Mastodon, Bluesky) show users can move if networks are interoperable.
  - **Due process:** clear rules, notice, appeal and independent oversight for moderation decisions.
  - **Contrast:** the US relies on Section 230 (1996), which shields platforms from liability for user content; Brazil's Supreme Court suspended X for about 40 days in 2024 for defying court orders.
- **Counter-argument:** regulation lets governments lean on platforms to remove lawful speech.
- **Rebuttal:** hence the DSA's focus on *processes* and *systemic risk* rather than specific viewpoints, with judicial oversight.

## Conclusion
- **Answer:** we need a public square more than ever, and for-profit firms can facilitate it, but they should be **hosts, not owners**, of public discourse.
- **Conditions:** transparency of algorithms, due process in moderation, interoperability so users can leave, and accountability to democratic rules rather than to one owner.
- **Generalise:** a private firm running a public function inherits public-style duties (the same logic as utilities, banks and AI).
- **Final line:** the problem with Twitter was never that a company ran the square; it was that the square had no rules except its owner's.`,
      evidence: `!stat $44bn | Price Musk paid for Twitter (completed 27 October 2022)
!stat ~80% | Share of Twitter staff cut after the takeover
!stat ~50% | Fall in advertising revenue Musk acknowledged in 2023
!stat 70% | How much more likely false news was to be retweeted (MIT, 2018)
!stat 6% | Maximum DSA fine as a share of global turnover
!stat €120m | First DSA fine, against X (December 2025)
!stat €1.2bn | Record GDPR fine on Meta by Ireland's DPC (May 2023)
!stat 5× | Weight Facebook gave the "angry" reaction versus a like (2017)

### Theories and thinkers
- **Habermas:** the public sphere (1962) as the space where private people come together as a public.
- **Mill:** the harm principle and the "marketplace of ideas" (also Holmes, *Abrams v US*, 1919).
- **Packingham v North Carolina (2017):** social media as "the modern public square".
- **Public goods and network effects:** why platforms tend towards monopoly.
- **Zuboff:** *surveillance capitalism* (2019): users' behaviour is the raw material.

### Extra examples
- **Trump's deplatforming (January 2021)** and reinstatement on X (November 2022).
- **Facebook in Myanmar:** a 2018 UN fact-finding mission said Facebook played a "determining role" in spreading hate against the Rohingya.
- **X folded into SpaceX via xAI (2025–26):** the square now sits inside a space-and-AI conglomerate.

### Pitfalls
- Answer both parts: "do we need one?" and "what role for for-profit firms?"
- Define "public square" precisely at the start: most marks depend on it.`,
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      id: 'q3',
      n: 3,
      title: 'Minimum unit pricing for alcohol: justified, and should sellers welcome it?',
      paraphrased: true,
      tags: ['Microeconomics', 'Public health', 'Regulation', 'Twist stakeholder'],
      prompt: `Ireland introduced minimum unit pricing (MUP) for alcohol in January 2022. What justifications exist for a legal minimum price, and should alcohol sellers **encourage, discourage or remain neutral** towards such legislation?`,
      plan: `## Introduction
- **Context:** under section 11 of the Public Health (Alcohol) Act 2018, Ireland set a floor price of **10c per gram of alcohol** from **4 January 2022**.
  - A standard drink (10g) cannot sell below **€1**; a 700ml bottle of 40% vodka (about 221g) cannot sell below about **€22**; a 750ml bottle of 12.5% wine (about 74g) below about **€7.40**.
- **Define:** MUP is a *price floor* targeted at cheap, strong alcohol bought for home drinking. Unlike excise duty, the extra money **stays with the seller**, not the State.
- **Thesis:** MUP is justified by negative externalities and "internalities", especially among the heaviest drinkers. Sellers should **support** it (several gain from it) while pressing for evidence-based design.
- **Roadmap:** the economic and health case; the limits and objections; the seller's twist.

## Main point 1 — The justification: externalities, internalities and targeting
- **Claim:** the market price of cheap alcohol ignores costs borne by others and by drinkers' future selves.
  - **Externalities:** hospital admissions, road deaths, violence, lost productivity and family harm. Irish adults drink roughly **10 litres of pure alcohol per head** a year, well above the national target.
  - **Internalities:** present bias and addiction mean heavy drinkers underweight their own future harm (behavioural economics).
  - **Targeting:** a floor bites mostly on the cheapest, strongest products favoured by the heaviest drinkers, while a pint in a pub (already above the floor) is unaffected.
  - **Scotland evidence:** MUP at 50p a unit from May 2018 was linked by Public Health Scotland (2023) to a **13.4% fall** in deaths wholly attributable to alcohol (about **156 deaths a year**), a **4.1% fall** in hospital admissions and about **3%** lower sales. Scotland raised the floor to **65p** in September 2024; Wales adopted 50p in 2020.
- **Theory:** Pigou (negative externalities); the *price elasticity* of demand for heavy drinkers; the *alcohol harm paradox* (low-income drinkers suffer more harm for the same consumption).
- **Link:** so the public-health case is strong, but the instrument has costs.

## Main point 2 — The objections: regressivity, freedom and leakage
- **Claim:** MUP is a blunt tool with real trade-offs.
  - **Regressive:** it costs low-income households more as a share of income. The reply is that they also receive most of the health benefit.
  - **Dependent drinkers:** the most addicted may cut food or heating spend rather than alcohol, so MUP needs treatment services alongside it.
  - **Cross-border leakage:** Northern Ireland has no MUP, so shoppers can cross the border; Ireland went ahead in 2022 rather than wait for Northern Ireland.
  - **Liberty:** adults should be free to choose (Mill), and MUP penalises moderate drinkers of cheap products.
  - **Windfall to retailers:** because it is a floor, not a tax, the extra margin goes to supermarkets rather than funding health services. Many economists argue a higher excise duty would capture that revenue for the State.
- **Counter-argument:** these weaknesses mean MUP should be dropped.
- **Rebuttal:** they mean it should be combined with other measures (treatment, marketing limits, labelling) and reviewed, not abandoned. Ireland's planned cancer warning labels were postponed in 2025 to 2028, which shows how contested the wider package remains.

## Main point 3 — The twist: should sellers welcome it?
- **Claim:** surprisingly, many sellers gain, so their stance reveals whether they see themselves as public-health stakeholders.
  - **Pubs and the on-trade:** MUP narrows the price gap between supermarket and pub, which is why publicans' groups supported it.
  - **Supermarkets:** they lose some volume but gain **margin** on every floor-priced unit, and the 2018 Act also ended deep-discount "loss leader" competition on alcohol.
  - **Craft producers:** premium products are unaffected and gain relative to cheap, strong competitors.
  - **Losers:** discounters and makers of cheap, strong products. The Scotch Whisky Association fought Scotland's MUP to the UK Supreme Court and lost in **November 2017**.
  - **Recommended stance:** support the objective, and argue for evaluation, cross-border coordination and earmarking (e.g. a voluntary levy on the windfall to fund addiction services).
- **Theory:** stakeholder theory; *licence to operate*; *corporate political activity* (lobbying with versus against public health); shared value (Porter and Kramer, 2011).
- **Counter-argument:** sellers' job is to sell legally, not to do public health, so neutrality is enough.
- **Rebuttal:** neutrality is not available to a firm whose product causes the harm. Silence still lets lobbying shape the law, and firms that fight sensible regulation invite harsher rules later (as tobacco did).

## Conclusion
- **Answer:** MUP is justified as a targeted response to externalities and internalities, with credible Scottish evidence that it saves lives.
- **Sellers:** should **encourage** it, because it reduces harm from their own product, levels the playing field with pubs and protects margins. Their role is to improve the design, not to block it.
- **Generalise:** a price floor can sometimes suit incumbents (a legally enforced cartel price), which is why the State should ask who keeps the extra money.
- **Final line:** the best test of a seller's responsibility is whether it lobbies for the policy that would reduce harm from its own product.`,
      evidence: `!stat 10c/gram | Ireland's minimum unit price (from 4 January 2022)
!stat €1 | Minimum price of a standard drink (10g) in Ireland
!stat ~€22 | Floor price of a 700ml bottle of 40% vodka
!stat 13.4% | Fall in alcohol-specific deaths linked to Scotland's MUP (Public Health Scotland, 2023)
!stat ~156 | Deaths a year averted in Scotland
!stat 65p | Scotland's new floor per unit (from September 2024, up from 50p)
!stat ~10 litres | Pure alcohol per Irish adult per year (approximate)

### Theories and thinkers
- **Pigou:** taxes or floors to internalise external costs.
- **Behavioural economics:** present bias and internalities (Thaler, Laibson).
- **Price floors:** above-equilibrium price → lower quantity, producer surplus transferred to sellers.
- **Mill's harm principle** as the liberty objection; **paternalism** (soft vs hard; Thaler and Sunstein's *nudge*).
- **Shared value (Porter and Kramer, 2011)** for the seller's stance.

### Extra examples
- **Public Health (Alcohol) Act 2018:** also restricts advertising near schools and at children's events, and structurally separates alcohol in shops (from November 2020).
- **Sugar levy:** Ireland's 2018 sugar-sweetened drinks tax (and the UK's) led firms to reformulate, a sign producers can adapt.
- **Tobacco:** the cautionary tale of an industry that fought regulation and lost its legitimacy.

### Pitfalls
- Don't forget the second question, "should sellers welcome it?", which is where the marks are.
- Distinguish MUP (money to the seller) from excise duty (money to the State).`,
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      id: 'q4',
      n: 4,
      title: 'Working from home: what should employers do, and who has which rights?',
      paraphrased: true,
      tags: ['OB / HR', 'Rights', 'Monitoring', 'Law'],
      prompt: `What should employers do regarding working-from-home policies? Do employees have a **right to work from home** where possible? Do employers have a **right to monitor** their workforce?`,
      plan: `## Introduction
- **Hook:** the pandemic ran the largest workplace experiment in history. By 2023 about **28%** of paid US workdays were still done from home (Barrero, Bloom and Davis), against about 5% before 2020.
- **Three linked questions:** what employers should do; whether employees have a *right* to WFH; whether employers have a *right* to monitor.
- **Define "right":** a claim others have a duty to respect. Distinguish a **right to request** (a procedural right) from a **right to work remotely** (a substantive right).
- **Thesis:** employers should default to **hybrid where the job allows**. Employees have a strong procedural right but not an unconditional substantive one, and employers may monitor **outcomes, proportionately and transparently**, but not workers' homes and lives.
- **Roadmap:** what the evidence says about WFH; employee rights; monitoring.

## Main point 1 — What employers should do: hybrid by design, not by default
- **Claim:** the evidence favours structured hybrid work over both full return and full remote.
  - **Trip.com experiment (Bloom et al., *Nature*, 2024):** 1,600 staff randomly given two WFH days a week saw **one-third fewer resignations**, with no effect on performance or promotion.
  - **Collaboration costs:** Microsoft's study of 61,000 employees (*Nature Human Behaviour*, 2022) found remote work made networks more siloed and communication more asynchronous.
  - **Juniors lose most:** Emanuel, Harrington and Pallais (2023) found software engineers sitting near teammates received about **22% more feedback**; mentoring and tacit learning are harder online.
  - **Return-to-office mandates:** Amazon required five days a week from January 2025, JPMorgan from March 2025, framing presence as culture and speed.
  - **Design:** anchor days for collaboration and training; WFH for focused work; measure output, not presence.
- **Theory:** *psychological contract* (Rousseau); *self-determination theory* (autonomy, competence, relatedness); *agglomeration* and knowledge spillovers (Marshall, Glaeser).
- **Counter-argument:** each firm is different, so blanket hybrid is wrong.
- **Rebuttal:** agreed; the principle is to fit policy to tasks (focus vs collaboration vs equipment), not to one rule.

## Main point 2 — Do employees have a right to work from home?
- **Claim:** there is a strong right to *request and be fairly considered*, not an absolute right to be granted.
  - **Ireland:** the Work Life Balance and Miscellaneous Provisions Act 2023 created a **right to request remote work**, with a Workplace Relations Commission Code of Practice from **7 March 2024**. The employee needs **6 months' service**, and the employer must reply within **4 weeks** (extendable to 8) and give reasons for refusal.
  - **Netherlands:** a 2022 bill for a stronger right was blocked in the Senate in 2023, showing even liberal states stop short of a full right.
  - **Equality case:** WFH helps disabled workers, carers (mostly women) and people priced out of cities by housing costs.
  - **Limits:** nurses, lab technicians, retail and hospitality staff cannot work remotely, so a universal "right" would create a two-tier workforce.
- **Theory:** Hohfeld (a *claim-right* vs a *privilege*); procedural justice (fair process makes outcomes acceptable).
- **Counter-argument:** if the work can be done at home, refusing is arbitrary control.
- **Rebuttal:** then the refusal should fail on reasonableness, which is exactly what a right to request with reasons achieves.

## Main point 3 — Do employers have a right to monitor?
- **Claim:** employers may monitor what they pay for (work outputs, security of data), but not more than necessary.
  - **GDPR:** monitoring needs a lawful basis, must be necessary, proportionate and transparent (Articles 5 and 6), and high-risk monitoring requires a data protection impact assessment (Article 35).
  - **France:** the data regulator CNIL fined **Amazon France Logistique €32m** in January 2024 for excessively intrusive warehouse monitoring (tracking scanner idle time to the second).
  - **EU AI Act:** **emotion recognition in the workplace is banned** from February 2025.
  - **Bossware:** keystroke logging, webcam checks and screenshot tools measure activity, not value, and invite gaming (Goodhart's law).
  - **Trust effects:** surveillance signals distrust, which reduces discretionary effort (McGregor's Theory X vs Theory Y).
- **Theory:** agency theory (monitoring costs vs incentive alignment); Foucault's panopticon; proportionality.
- **Counter-argument:** without monitoring, firms cannot protect confidential data or spot shirking.
- **Rebuttal:** security monitoring of company systems is legitimate; continuous surveillance of a person's home is not. Manage by outcomes.

## Conclusion
- **Answer:** employers should design hybrid work around tasks, with protected in-person time for juniors.
- **Rights:** employees have a strong procedural right to request remote work and get reasons; employers have a limited, proportionate right to monitor outputs and security.
- **Generalise:** the same balance (autonomy versus legitimate control, with proportionality as the test) applies to AI management tools and algorithmic scheduling.
- **Final line:** trust and good measurement of results do more for productivity than either presence mandates or webcams.`,
      evidence: `!stat ~28% | Share of paid US workdays done from home in 2023 (about 5% pre-2020)
!stat −33% | Fall in resignations from hybrid working in the Trip.com trial (Nature, 2024)
!stat 22% | Extra feedback engineers got from sitting near teammates (Emanuel, Harrington and Pallais)
!stat 6 months / 4 weeks | Irish service needed to request remote work / employer's time to reply
!stat €32m | CNIL fine on Amazon France Logistique for excessive monitoring (2024)
!stat Feb 2025 | EU AI Act ban on emotion recognition at work takes effect

### Theories and thinkers
- **Psychological contract (Rousseau, 1989)** and **self-determination theory (Deci and Ryan)**.
- **McGregor's Theory X / Theory Y (1960):** surveillance vs trust.
- **Agency theory (Jensen and Meckling, 1976):** monitoring costs.
- **Hohfeld's rights:** claim-rights vs privileges; right to request vs right to WFH.
- **Goodhart's law:** "when a measure becomes a target, it ceases to be a good measure".

### Extra examples
- **Return-to-office mandates:** Amazon (5 days, January 2025), JPMorgan (March 2025), Dell.
- **Ireland's 2021 "Making Remote Work" strategy** and connected hubs.
- **Four-day week:** the 2022 UK pilot (61 firms, 56 continued) as an alternative flexibility model.

### Pitfalls
- Answer all three sub-questions with a signpost for each.
- Use rights language precisely: right to request ≠ right to work remotely.`,
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      id: 'q5',
      n: 5,
      title: 'Firms in Russia: what responsibilities, and what makes them greater or lesser?',
      paraphrased: true,
      tags: ['Business ethics', 'Complicity', 'Geopolitics', 'Sanctions'],
      prompt: `Following Russia's full-scale invasion of Ukraine, many international companies faced pressure to leave Russia. What responsibilities do businesses have when operating in a country whose government commits serious wrongdoing, and **what factors make those responsibilities greater or lesser**?`,
      plan: `## Introduction
- **Hook:** after the invasion on **24 February 2022**, Yale's Chief Executive Leadership Institute counted over **1,000** companies publicly curtailing their Russian operations. Yet a December 2022 study (Evenett and Pisani) found fewer than **9%** of EU and G7 firms' Russian subsidiaries had actually been divested.
- **The question:** not "stay or go?", but what determines **how much** responsibility a firm carries for a state's wrongdoing.
- **Define complicity:** contributing to, enabling or benefiting from another's wrong, without being the principal wrongdoer.
- **Thesis:** firms have responsibilities beyond legal compliance, and they scale with **contribution, knowledge, benefit, leverage and the essentialness of the product**, offset by **coercion and the costs to innocents**.
- **Roadmap:** why firms have responsibility at all; the factors that scale it; what responsible action looks like.

## Main point 1 — Why firms are responsible at all
- **Claim:** firms that pay taxes, supply inputs or lend legitimacy contribute to a state's capacity to wage war.
  - **Taxes and revenue:** the profits and payroll taxes of foreign firms that remained flowed to a budget financing the war.
  - **Strategic inputs:** energy, finance, logistics and technology matter more than consumer goods; BP's **19.75%** stake in Rosneft tied it directly to the state energy giant (exit cost about **$24bn** in write-downs).
  - **Legitimacy:** a Western brand's presence signals business as usual.
  - **UN Guiding Principles (2011):** firms must avoid *causing*, *contributing to* or being *directly linked to* human-rights harms, and use their leverage.
- **Counter-argument (Friedman, 1970):** a firm's responsibility is to obey the law and make profits; foreign policy belongs to governments, which set sanctions.
- **Rebuttal:** law is a floor, not a ceiling; sanctions lag events, and the UNGPs apply where states fail to act.
- **Link:** if responsibility exists, it must vary between a weapons-parts supplier and a baby-food maker.

## Main point 2 — The factors that make responsibility greater or lesser
- **Greater when:**
  - **Causal contribution is large:** energy, banking and dual-use technology directly finance or equip the state (export-controlled chips found in Russian drones).
  - **Knowledge is clear:** after 24 February no firm could claim ignorance.
  - **The firm benefits:** firms that profited from Western rivals' exit (e.g. by buying assets at a discount) gain from the wrong.
  - **Leverage is high:** a firm that could change behaviour, or whose exit would hurt, has a stronger duty to use that leverage.
  - **Substitutability is low:** if no one else can supply the input, staying matters more.
- **Lesser when:**
  - **The product is essential and humanitarian:** food, medicine and baby formula (Nestlé's case for staying, though Ukraine's prime minister attacked it).
  - **Exit is coerced or costly to innocents:** Russian staff faced conscription threats, and Russia required exits at a **50%+ discount** plus a "voluntary contribution" to the budget.
  - **The state seizes assets anyway:** under Decree 302 (April 2023), Russia placed **Danone's** Russian unit and **Carlsberg's** Baltika under "temporary management" in July 2023.
- **Theory:** Lepora and Goodin, *On Complicity and Compromise* (2013), on degrees of contribution; Kenneth Silver on corporate moral responsibility; consequentialism (does exit actually help?).

## Main point 3 — What responsible action looks like
- **Claim:** the responsible response depends on the factors, so exit is often right but not always.
  - **Clean exits:** McDonald's sold its **~850** restaurants (about **62,000** staff) to a local licensee and took a charge of about **$1.2–1.4bn**; Renault sold its **68%** stake in AvtoVAZ for **one rouble** with a six-year buy-back option, writing off about **€2.2bn**.
  - **Partial approaches:** suspend new investment, stop advertising, restrict to essential goods, ring-fence profits (some firms donated Russian profits to Ukrainian relief).
  - **Dirty exits to avoid:** selling to sanctioned oligarchs, or retaining buy-back options that look like a pause, not a principled exit.
  - **Process:** heightened due diligence, transparent public reporting, consultation with employees on safety.
  - **Long-term:** if sanctions lift, return should be conditional on a credible peace, not automatic (US–Russia business talks were reported in October 2026).
- **Theory:** Hirschman's exit, voice and loyalty; *dirty hands*; proportionality.
- **Counter-argument:** exits handed assets to Kremlin-friendly buyers at a discount, so they helped Russia.
- **Rebuttal:** that is an argument for well-designed exits and stronger sanctions, not for staying.

## Conclusion
- **Answer:** firms are responsible not for the war, but for their **own contribution** to the state's capacity and legitimacy.
- **Scale:** that responsibility rises with contribution, knowledge, benefit and leverage, and falls with essentialness, coercion and harm to innocents.
- **Generalise:** the same test applies to tech firms supplying governments in Gaza (Albanese report, 2025), Xinjiang supply chains and AI contracts with militaries.
- **Final line:** "we only sell to customers" is never a complete answer when the customer is waging a war.`,
      evidence: `!stat 1,000+ | Companies publicly curtailing Russian operations (Yale CELI)
!stat <9% | EU and G7 subsidiaries actually divested by late 2022 (Evenett and Pisani)
!stat ~850 / 62,000 | McDonald's restaurants and staff sold in Russia
!stat $1.2–1.4bn | McDonald's charge on exiting Russia
!stat 1 rouble | Renault's sale price for its 68% AvtoVAZ stake
!stat 50%+ | Minimum discount Russia required on foreign exits
!stat ~€300bn | Russian central bank reserves frozen by the West

### Theories and thinkers
- **UN Guiding Principles (2011):** cause, contribute, directly linked; leverage.
- **Lepora and Goodin (2013):** degrees of complicity.
- **Kenneth Silver:** corporate moral responsibility (on the recent examining panel).
- **Hirschman (1970):** exit, voice and loyalty.
- **Friedman (1970) vs Freeman (1984):** profit within the law vs stakeholder duties.

### Extra examples
- **Danone and Carlsberg:** assets seized under Decree 302 (July 2023).
- **Raiffeisen Bank International:** stayed and became the largest Western bank in Russia, earning a large share of group profits, under pressure from the ECB and US Treasury.
- **Apartheid South Africa:** the Sullivan Principles (1977) and later divestment, the classic precedent.

### Pitfalls
- The question asks for **factors**, not just a verdict: list them clearly.
- Avoid treating all firms alike; contrast energy and banks with food and medicine.`,
    },
    /* ------------------------------------------------------------------ Q6 */
    {
      id: 'q6',
      n: 6,
      title: 'Should firms that profited from inflation face a windfall tax?',
      paraphrased: true,
      tags: ['Macroeconomics', 'Public finance', 'Ethics', 'Desert'],
      prompt: `The causes of the recent surge in inflation are contested, but some firms earned exceptional profits during it. Should firms that profited from inflation be subject to a **windfall tax**?`,
      plan: `## Introduction
- **Hook:** inflation peaked at **10.6%** in the euro area (October 2022), **11.1%** in the UK and **9.1%** in the US. Meanwhile **ExxonMobil** earned a record **$55.7bn** and **Shell** a record **$39.9bn** in 2022.
- **Define a windfall:** a gain from luck or circumstances, not effort, risk or investment. A windfall tax is a one-off or temporary levy on such gains.
- **Concede the macro dispute:** whether profits *caused* inflation ("greedflation", or *sellers' inflation*) or merely accompanied supply shocks is contested, which is why the paper asks the normative question.
- **Thesis:** yes, a well-designed, temporary tax on genuinely unearned profits is justified, mainly on **fairness and efficiency** grounds, but a badly designed one damages investment.
- **Roadmap:** the case for; the case against; how to design one.

## Main point 1 — The case for: unearned gains and shared sacrifice
- **Claim:** profits caused by an external shock are economic *rent*, and taxing rent is both fair and efficient.
  - **Energy:** Russia's invasion pushed European gas prices to over ten times pre-crisis levels in 2022, so producers' costs did not rise in step with their revenue.
  - **Profits' role:** IMF economists (June 2023) estimated rising corporate profits accounted for almost **45%** of euro-area inflation since the start of 2022.
  - **Banks:** the ECB's deposit rate rose from **−0.5%** (July 2022) to **4%** (September 2023); banks earned large windfalls on deposits paying little interest.
  - **Fairness:** households faced real-wage cuts while shareholders gained, and the tax funds cost-of-living support.
- **Theory:** taxing pure rent does not change behaviour, because the profit was not caused by any decision (Ricardo, Henry George); *desert* (people should keep what they earn, not what they luck into).
- **Counter-argument:** high prices are a signal to invest in supply, so taxing them blunts the signal.
- **Rebuttal:** true if the tax hits future investment, which is why design matters (see point 3).

## Main point 2 — The case against: risk, credibility and definition
- **Claim:** windfall taxes can be arbitrary, retrospective and bad for investment.
  - **Risk and reward:** firms lose money in bad years (oil majors took huge losses in 2020), so taxing only the good years makes investment a one-way bet against them.
  - **Credibility:** a government that changes the rules ex post raises the *risk premium* on all future investment (the time-inconsistency problem; Kydland and Prescott).
  - **Defining "excess":** where does a windfall start? Above 2018–21 averages? Above a "normal" return? Every line is contestable.
  - **Incidence:** the tax may be passed on or fall on pension funds that own the shares.
  - **Evidence of harm:** UK North Sea producers cut investment plans after the levy was raised and extended, though the counterfactual is disputed.
- **Counter-argument:** that means no windfall tax ever.
- **Rebuttal:** it means a predictable framework (a standing rent-based tax) beats ad hoc raids.

## Main point 3 — Design: how to tax windfalls well
- **Claim:** the design decides whether the tax is fair and efficient.
  - **UK Energy Profits Levy:** **25%** from May 2022, **35%** from January 2023 (a **75%** headline rate), extended to March 2030 at **38%** (78%) from November 2024, with investment allowances that have since been cut.
  - **EU "solidarity contribution" (October 2022):** at least **33%** on fossil-fuel profits more than **20%** above the 2018–21 average, plus a **€180/MWh** cap on revenues for cheap generators. **Ireland applied a 75% rate.**
  - **Banks:** Spain levied 4.8% on banks' net interest income and fees (2023–24); Italy's 40% bank windfall tax (August 2023) was watered down after a market sell-off.
  - **Good design principles:** temporary with a sunset; based on profits above a clear benchmark; deductions for investment (especially in renewables); revenue earmarked for targeted support; announced as a rule-based mechanism for future shocks.
- **Theory:** Ramsey and Mirrlees on efficient taxation; cash-flow (rent) taxes, as in Norway's petroleum tax regime.

## Conclusion
- **Answer:** yes, when profits are clearly unearned windfalls from an external shock, a temporary, well-designed levy is fair and need not harm investment.
- **Conditions:** a clear benchmark, temporary, investment allowances, a predictable rule rather than political improvisation, and revenue used to cushion those who bore the shock.
- **Generalise:** the same desert question arises with the 2026 Hormuz oil shock and with refunds of unlawfully collected US tariffs (who "deserves" money they did not earn?).
- **Final line:** a windfall tax done well is not a punishment for success; it is a refusal to treat luck as merit.`,
      evidence: `!stat 10.6% | Euro-area inflation peak (October 2022)
!stat $55.7bn | ExxonMobil's record 2022 profit
!stat $39.9bn | Shell's record 2022 profit
!stat ~45% | Share of euro-area inflation since 2022 explained by profits (IMF economists, 2023)
!stat 75% → 78% | UK Energy Profits Levy headline rate (2023 → November 2024)
!stat 33% | Minimum EU solidarity contribution on excess fossil profits (Ireland chose 75%)
!stat −0.5% → 4% | ECB deposit rate, July 2022 to September 2023

### Theories and thinkers
- **Economic rent:** Ricardo; Henry George's land-value tax; neutrality of rent taxes.
- **Time inconsistency (Kydland and Prescott, 1977):** retrospective taxes damage credibility.
- **Sellers' inflation (Weber and Wasner, 2023):** firms with market power raise margins during shocks.
- **Desert:** what people earn versus what they luck into (Rawls on morally arbitrary luck).
- **Tax incidence:** legal vs economic incidence.

### Extra examples
- **UK 1981 bank windfall tax** (Thatcher, Howe) and the **1997 utilities windfall tax** (Labour) as precedents.
- **Norway:** a 78% marginal tax on petroleum profits with full investment deductions, the model of a predictable rent tax.
- **2026:** Brent more than 60% above pre-war levels after the Hormuz shock, which revives the debate.

### Pitfalls
- Acknowledge that the causes are contested, as the question does, then answer the *normative* question.
- Don't treat all profit growth as a windfall; separate rent from returns to investment and risk.`,
    },
  ],
};
