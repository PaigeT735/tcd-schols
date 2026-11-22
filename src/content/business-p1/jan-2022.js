export default {
  id: 'jan-2022',
  label: 'Jan 2022',
  kind: 'paper',
  title: 'January 2022 paper',
  summary: `The paper where the examiners' taste for **opportunity vs problem** framing and **Irish self-scrutiny** first shows clearly: crypto ("problems and opportunities"), AI ("greatest opportunities", set ten months before ChatGPT), and a Chomsky quote asking an Irish student to judge Ireland's tax model. Q1 explicitly asks you to **present your point of view**, so take a position.`,
  meta: [['Format', 'Six questions, answer two'], ['Time', '2 h 15 min'], ['Set', 'Weeks before Russia invaded Ukraine']],
  questions: [
    /* ------------------------------------------------------------------ Q1 */
    {
      id: 'q1',
      n: 1,
      title: 'What obligations do social media companies have for platform content?',
      paraphrased: true,
      tags: ['Platforms', 'Ethics', 'Law', 'Free speech'],
      prompt: `Social media companies host content they did not create, yet their platforms shape what billions of people see. What obligations, if any, do social media companies have regarding the content on their platforms? **Present your point of view.**`,
      plan: `## Introduction
- **Hook:** Meta's apps reach about **3.35bn people every day** (December 2024). In 2018 a UN fact-finding mission said Facebook had played a **"determining role"** in spreading hate against Myanmar's Rohingya.
- **The dilemma:** platforms say they are neutral conduits, like the phone network; critics say they are publishers, because their algorithms choose what to amplify.
- **Define obligations:** duties owed to users and third parties, which may be legal (what the law requires) or moral (what a responsible firm should do beyond the law).
- **Point of view (thesis):** platforms are **not** responsible for every post, but they **are** responsible for the **systems they design**: recommendation, amplification, defaults and enforcement. The duty is one of **systemic care**, not perfect policing.
- **Roadmap:** why they have obligations; the limits of those obligations; how they should be discharged.

## Main point 1 — Why platforms have obligations: they amplify, not just host
- **Claim:** once a firm ranks and recommends content to maximise engagement, it is an active participant in what spreads.
  - **Amplification:** an MIT study (*Science*, 2018) found false news **70% more likely** to be retweeted than true news.
  - **Internal knowledge:** the 2021 Facebook Files showed Instagram's own research found **32% of teen girls** said that when they felt bad about their bodies, Instagram made them feel worse.
  - **Real-world harm:** the 2019 Christchurch attack was livestreamed; Facebook removed **1.5m copies** in 24 hours. A UK coroner found in 2022 that social media contributed "in a more than minimal way" to the death of 14-year-old Molly Russell.
  - **Profit from harm:** engagement drives ad revenue, so harmful content can be commercially rewarded.
- **Theory:** stakeholder theory (users and the public are stakeholders); *duty of care* (Carnegie UK Trust proposal behind the UK Online Safety Act); Zuboff's *surveillance capitalism*.
- **Link:** if platforms shape outcomes, they owe a duty proportionate to that power.

## Main point 2 — The limits: free expression, scale and private censorship
- **Claim:** obligations must be bounded, or platforms become unaccountable censors.
  - **Scale:** billions of posts a day make perfect moderation impossible; even Meta's tens of thousands of moderators miss content and make errors.
  - **Over-removal:** Germany's **NetzDG (2017)** forced removal of "manifestly illegal" content within 24 hours, with fines up to **€50m**, raising fears of over-blocking lawful speech.
  - **Who decides:** when Twitter permanently banned Donald Trump (January 2021), a private firm effectively set the limits of a sitting president's speech.
  - **Viewpoint risk:** moderation can reflect owners' politics (X after 2022) or advertisers' preferences.
  - **Policy swings:** in January 2025 Meta ended US third-party fact-checking and moved to "Community Notes", showing how voluntary standards change with politics.
- **Theory:** Mill's harm principle (restrict only to prevent harm to others); Klonick, "The New Governors" (2018) on private speech governance.
- **Counter-argument:** if limits are needed, leave it entirely to law and treat platforms as neutral pipes (US Section 230, 1996).
- **Rebuttal:** pipes don't rank content. Immunity made sense for 1996 bulletin boards, not for algorithmic feeds.

## Main point 3 — How obligations should be discharged: systems, transparency, redress
- **Claim:** regulate the system, not individual posts.
  - **EU Digital Services Act:** very large platforms must assess and mitigate systemic risks, explain recommender systems, offer a non-profiled feed, open data to researchers and face fines up to **6% of global turnover**.
  - **UK Online Safety Act 2023:** a statutory duty of care, with fines up to **£18m or 10% of global revenue**.
  - **Ireland:** the Online Safety and Media Regulation Act 2022 created **Coimisiún na Meán**, whose Online Safety Code binds video-sharing platforms based here. Because many platforms' EU headquarters are in Dublin, Ireland is a frontline regulator.
  - **Best practice:** clear rules, notice and appeal, independent audits, special protection for children (safer defaults, no profiling-based ads to minors), friction for virality (e.g. limits on forwarding).
- **Counter-argument:** compliance costs entrench big incumbents, which can afford the regulation start-ups can't.
- **Rebuttal:** hence tiered duties (the DSA applies its heaviest rules only to platforms with **45m+** EU users).

## Conclusion
- **My view:** social media companies have a clear obligation to take reasonable, systemic care over content, because they profit from amplifying it and design the systems that do so.
- **Bounded:** they should not be made liable for every post, nor be private censors of lawful speech.
- **Mechanism:** transparency, due process and independent oversight under democratic law (DSA, Coimisiún na Meán).
- **Final line:** a platform that chooses what billions see cannot claim to be a neutral pipe.`,
      evidence: `!stat 3.35bn | Daily active people across Meta's apps (December 2024)
!stat 70% | How much more likely false news was to be retweeted (MIT, 2018)
!stat 32% | Teen girls who said Instagram made body image worse when they felt bad (internal research, 2021)
!stat 1.5m | Copies of the Christchurch video Facebook removed in 24 hours
!stat 6% | Maximum DSA fine as a share of global turnover
!stat €50m | Maximum NetzDG fine (Germany, 2017)

#### Theories and thinkers
- **Publisher vs platform:** Section 230 (US, 1996) vs the EU's "notice and action" model.
- **Mill's harm principle;** **Klonick's "New Governors";** **Zuboff's surveillance capitalism.**
- **Duty of care:** the Carnegie UK Trust model behind the UK Online Safety Act.
- **Stakeholder theory (Freeman)** vs **shareholder primacy (Friedman).**

#### Extra examples
- **Molly Russell inquest (UK, 2022):** social media contributed to a child's death.
- **Frances Haugen's testimony (October 2021):** Facebook "chooses profit over safety".
- **Australia's under-16 ban (in force 10 December 2025):** 4.7m accounts removed, the 2026 sequel to this question.

#### Pitfalls
- The question demands a **point of view**: state it in the first paragraph and repeat it in the conclusion.
- Separate legal from moral obligations.`,
    },
    /* ------------------------------------------------------------------ Q2 */
    {
      id: 'q2',
      n: 2,
      title: 'Cryptocurrencies (even Dogecoin): problems and opportunities',
      paraphrased: true,
      tags: ['Finance', 'Technology', 'Regulation', 'Bubbles'],
      prompt: `Cryptocurrencies such as Bitcoin, Ethereum and (even) Dogecoin have attracted enormous attention from investors, firms and regulators. What **problems and opportunities** do cryptocurrencies present?`,
      plan: `## Introduction
- **Hook:** in November 2021 Bitcoin hit about **$69,000** and the total crypto market about **$3 trillion**. Dogecoin, launched in 2013 as a joke, reached about **$0.73** in May 2021 on the back of Elon Musk's endorsements.
- **Define:** cryptocurrencies are digital tokens recorded on a *blockchain* (a shared, tamper-resistant ledger), transferable without a bank. Distinguish the **assets** (Bitcoin, Dogecoin) from the **technology** (blockchains, smart contracts, stablecoins).
- **Thesis:** as **money**, most cryptocurrencies have failed; as **speculative assets**, they carry serious problems; but parts of the **technology** (stablecoins, tokenised settlement) offer real opportunities once regulated.
- **Roadmap:** opportunities; problems; regulation decides which wins.

## Main point 1 — Opportunities: payments, inclusion and programmable finance
- **Claim:** the underlying technology solves real frictions.
  - **Remittances:** sending $200 abroad costs on average about **6%** (World Bank), a heavy tax on migrant workers; blockchain transfers can be faster and cheaper.
  - **Inclusion:** about **1.4bn adults** were unbanked (World Bank Findex, 2021); a phone wallet needs no branch.
  - **Smart contracts:** Ethereum enables self-executing agreements and decentralised finance (DeFi), and its 2022 "Merge" cut its energy use by about **99.9%**.
  - **Stablecoins:** dollar-pegged tokens (Tether, USDC) are now about **$300bn** of money-like assets, regulated in the US by the **GENIUS Act** (July 2025) and in the EU by **MiCA**.
  - **Institutional adoption:** US spot Bitcoin ETFs were approved in **January 2024**, and Bitcoin later rose above **$100,000** (December 2024).
- **Theory:** Schumpeter's creative destruction; Hayek's *Denationalisation of Money* (1976) on competing private currencies; network effects.
- **Link:** but the same features (no intermediary, pseudonymity) create the problems.

## Main point 2 — Problems: speculation, fraud, crime and energy
- **Claim:** most crypto activity has been speculative, and the costs have fallen on retail investors.
  - **Volatility:** Bitcoin lost about **75%** from its 2021 peak to late 2022; Dogecoin's value rests almost entirely on sentiment, a textbook *greater fool* asset.
  - **Collapses:** TerraUSD/Luna wiped out about **$40bn** in May 2022; **FTX** collapsed in November 2022 with about **$8bn** of customer money missing, and Sam Bankman-Fried was sentenced to **25 years** in 2024.
  - **Crime:** ransomware gangs demand crypto payment; North Korean hackers stole over **$1bn** in 2024 alone (Chainalysis estimates).
  - **Energy:** Bitcoin mining uses roughly as much electricity as a mid-sized country (around **0.5%** of global electricity, Cambridge estimates).
  - **Failed as money:** El Salvador made Bitcoin legal tender in 2021 but made it optional in 2025 as part of a **$1.4bn** IMF deal, because few people used it.
- **Theory:** Minsky and Kindleberger on bubbles and manias; Shiller's *narrative economics*; Akerlof's market for lemons (fraud drives out good actors).
- **Counter-argument:** every new technology has a speculative phase (railway mania of the 1840s, the dot-com bubble).
- **Rebuttal:** true, and it supports separating the useful infrastructure from the speculative tokens rather than endorsing both.

## Main point 3 — Regulation decides whether opportunities outweigh problems
- **Claim:** crypto's future depends on rules that keep the innovation and cut the abuse.
  - **EU MiCA:** stablecoin rules from **30 June 2024**, full regime from **30 December 2024**: licensing, reserve, redemption and disclosure requirements.
  - **US GENIUS Act (18 July 2025):** one dollar of high-quality reserves per stablecoin dollar, and no interest paid to holders.
  - **Central bank digital currencies:** the ECB's digital euro project is a public alternative to private stablecoins.
  - **Consumer protection:** advertising rules, custody segregation (FTX mixed customer and own funds), anti-money-laundering checks.
- **Counter-argument:** regulation kills decentralisation, the whole point of crypto.
- **Rebuttal:** what users actually want is cheap, safe, fast payments; decentralisation is a means, not an end.

## Conclusion
- **Answer:** the opportunities are in the **technology** (payments, settlement, programmable money); the problems are in the **speculative assets and weak governance**.
- **Dogecoin** is the reductio: a joke coin worth billions shows how much of the market runs on narrative, not value.
- **Judgement:** regulated stablecoins and tokenisation may last; most coins are speculative bets.
- **Final line:** crypto's best future looks less like a revolution against finance and more like a new plumbing system inside it.`,
      evidence: `!stat ~$69,000 | Bitcoin's November 2021 peak
!stat ~$3tn | Total crypto market value at the 2021 peak
!stat ~$8bn | Missing FTX customer funds (November 2022)
!stat ~$40bn | Value wiped out in the TerraUSD/Luna collapse (May 2022)
!stat ~6% | Average cost of sending a $200 remittance (World Bank)
!stat 99.9% | Cut in Ethereum's energy use after the 2022 Merge
!stat ~$300bn | Stablecoin market in 2026, overwhelmingly dollar-denominated

#### Theories and thinkers
- **Minsky / Kindleberger:** manias, panics and crashes.
- **Hayek (1976):** competing private currencies.
- **Shiller:** *Irrational Exuberance* and *Narrative Economics*.
- **Greater-fool theory;** **network effects;** **Gresham's law.**

#### Extra examples
- **Tulip mania (1637)** and the **South Sea Bubble (1720)** as historical parallels.
- **Celsius and Three Arrows Capital** collapses (2022).
- **Ireland:** the Central Bank warns consumers that crypto is unregulated and high-risk; MiCA licences now apply.

#### Pitfalls
- Give both halves (problems **and** opportunities); one-sided answers miss half the marks.
- Note the wry "(even) Dogecoin": treat it as evidence of speculative excess.`,
    },
    /* ------------------------------------------------------------------ Q3 */
    {
      id: 'q3',
      n: 3,
      title: "Ireland's 12.5% rate, the OECD 15% minimum and Chomsky's charge",
      paraphrased: true,
      tags: ['Public finance', 'Irish economy', 'Ethics', 'Tax competition'],
      prompt: `In October 2021 Ireland joined the OECD agreement on a global minimum corporate tax rate of 15%. The paper quoted **Noam Chomsky** accusing Ireland's low-tax model of depriving other countries of tax revenue on a vast scale. Was Ireland's low corporate tax rate a legitimate development strategy, and is Chomsky's criticism fair?`,
      plan: `## Introduction
- **Hook:** Ireland's corporation-tax receipts rose from **€15.3bn** (2021) to about **€28bn** (2024, excluding the Apple money), and are forecast at **€34.1bn** for 2026; about **60%** comes from just ten firms.
- **Context:** Ireland used a **10%** manufacturing rate from 1981, then a **12.5%** rate on all trading income from 2003. On **7 October 2021** it signed the OECD/G20 deal for a **15%** minimum effective rate on groups with revenue over **€750m**.
- **Define:** *tax competition* (states cutting rates to attract mobile capital) versus *profit shifting* (booking profits where little real activity happens).
- **Thesis:** a low **statutory rate** for real investment was a **legitimate** development strategy; the **avoidance structures** that let multinationals book global profits in Ireland were not. Chomsky's moral point is partly right, but his scale and blame are overstated.
- **Roadmap:** the development case; the harm to others; a verdict on Chomsky and the 15% deal.

## Main point 1 — A legitimate development strategy for a small, peripheral economy
- **Claim:** for a small, poor, peripheral country in the 1980s, low tax was one of the few levers available.
  - **Real jobs:** IDA-supported multinationals employ about **300,000** people directly, plus many indirect jobs; Apple has been in Cork since **1980**.
  - **Clusters:** pharma (Pfizer, Eli Lilly, MSD), tech (Google, Meta, Microsoft) and medical devices built deep skills and supplier networks.
  - **Sovereignty:** tax rates are a national competence under EU treaties; larger states use other advantages (market size, subsidies, infrastructure).
  - **Others do the same:** the US cut its federal rate from **35% to 21%** in 2017; the Netherlands, Luxembourg and Singapore offer comparable regimes.
- **Theory:** Tiebout (1956) on competition between jurisdictions; comparative advantage; small-state economics (Katzenstein).
- **Counter-argument:** the jobs are real but the profits booked are not, so GDP is inflated.
- **Rebuttal:** partly fair, which is why Ireland now uses **modified GNI\*** to measure the domestic economy.

## Main point 2 — The harm: profit shifting and the costs to other countries
- **Claim:** beyond the statutory rate, Irish structures enabled profit shifting on a vast scale.
  - **Double Irish:** let firms route royalties through Irish-incorporated companies resident in tax havens; closed to new entrants in **2015** and phased out by **2020**.
  - **Apple:** the European Commission found Apple paid an effective rate as low as **0.005%** in 2014; the CJEU confirmed on **10 September 2024** that Ireland must recover **€14.1bn** of illegal State aid.
  - **Scale:** Tørsløv, Wier and Zucman estimate about **36–40%** of multinational profits are shifted to tax havens, with **Ireland the largest single destination** (about **$106bn** in 2015).
  - **Victims:** IMF researchers (Crivelli et al., 2016) estimate long-run losses of about **$400bn** a year for OECD countries and **$200bn** for developing countries, where corporate tax is a bigger share of revenue.
  - **"Leprechaun economics":** Irish GDP grew **26%** in 2015 when firms moved intellectual property onshore.
- **Theory:** race to the bottom; beggar-thy-neighbour policy; *fiscal externality* (one state's cut drains another's base).
- **Link:** so the problem was not the rate itself but its use as a conduit for profits earned elsewhere.

## Main point 3 — Is Chomsky right, and does the 15% deal settle it?
- **Claim:** Chomsky is right that tax competition shifts burdens to poorer countries, but wrong to make Ireland the main villain.
  - **Overstatement:** blaming one small state for losses on a world scale ignores the design of US tax law (deferral rules let US firms keep profits offshore) and other havens.
  - **Shared responsibility:** multinationals chose the structures; larger states tolerated them for decades.
  - **Pillar Two:** agreed by about **136** countries in October 2021; Ireland applies 15% to large groups from **2024** and keeps **12.5%** for smaller firms. A *qualified domestic minimum top-up tax* means Ireland collects the top-up rather than ceding it.
  - **New risk:** with **three firms paying about half** of Irish corporation tax (IFAC), Ireland's own budget is now exposed; the moral question is turning into a prudential one.
- **Counter-argument:** if Ireland benefited, it must have taken revenue from others, so it should return it.
- **Rebuttal:** Ireland has since shifted from avoidance-friendly structures to a minimum-tax regime, and the Apple money was recovered, which shows reform is possible without abandoning FDI.

## Conclusion
- **Answer:** Ireland's low statutory rate was a legitimate and successful development strategy; the avoidance structures layered on top were not, and others paid for them.
- **Chomsky:** right in principle, overstated in scale and in singling out Ireland.
- **Generalise:** competitive advantage is legitimate when it attracts real activity, illegitimate when it sells a postbox.
- **Final line:** Ireland's next test is not whether its model was fair to others, but whether it is safe for itself.`,
      evidence: `!stat 12.5% | Irish trading rate since 2003 (10% for manufacturing from 1981)
!stat 15% | OECD Pillar Two minimum for groups over €750m (Ireland signed 7 October 2021)
!stat €14.1bn | Apple State-aid recovery confirmed by the CJEU (10 September 2024)
!stat 0.005% | Apple's effective tax rate in 2014, per the European Commission
!stat ~$106bn | Profits shifted to Ireland in 2015 (Tørsløv, Wier and Zucman)
!stat ~60% | Share of Irish corporation tax from the ten largest groups (2024, IFAC)
!stat 26% | Irish GDP growth in 2015 ("leprechaun economics")

#### Theories and thinkers
- **Tiebout (1956):** jurisdictions competing for residents and capital.
- **Race to the bottom / fiscal externalities;** **beggar-thy-neighbour.**
- **Zucman, *The Hidden Wealth of Nations* (2015)** and the *missing profits* research.
- **Global justice:** Rawls (*Law of Peoples*) vs Pogge on institutional harm.

#### Extra examples
- **Budget 2027 (6 October 2026):** IFAC warned the Government was spending six of every seven euros of corporation tax.
- **Pharma tariffs (April 2026):** the US 100% Section 232 tariff (15% for the EU) shows Ireland's model is now exposed to US policy.
- **Future Ireland Fund (2024):** saving windfall tax for the future.

#### Pitfalls
- Test the quote rather than accept it, as the examiners expect.
- Distinguish the statutory rate, the effective rate and avoidance structures.`,
    },
    /* ------------------------------------------------------------------ Q4 */
    {
      id: 'q4',
      n: 4,
      title: 'Where are the greatest market and social opportunities for AI?',
      paraphrased: true,
      tags: ['Technology', 'Innovation', 'Strategy', 'Opportunity framing'],
      prompt: `Artificial intelligence is expected to transform many industries. In your view, where do the **greatest market and social opportunities** for AI lie?`,
      plan: `## Introduction
- **Hook:** this question was set about ten months before ChatGPT launched (**30 November 2022**), which reached about **100m users in two months**.
- **Define AI:** systems that perform tasks associated with human intelligence (prediction, classification, language, generation). It is a *general-purpose technology*, like electricity.
- **Scale:** McKinsey (2023) estimates generative AI could add **$2.6–4.4 trillion** a year; PwC (2017) put AI's potential contribution at **$15.7 trillion** of global GDP by 2030.
- **Thesis:** the greatest opportunities are where AI **augments scarce expertise**: science and health (social value), and knowledge work productivity (market value). Value is maximised where gains are widely shared rather than concentrated.
- **Roadmap:** science and health; productivity in knowledge work; the conditions for broad benefit.

## Main point 1 — Science and health: AI's largest social opportunity
- **Claim:** AI can compress the time and cost of discovery.
  - **AlphaFold (DeepMind):** predicted the structure of about **200m proteins**; Hassabis and Jumper shared the **2024 Nobel Prize in Chemistry**.
  - **Diagnostics:** the US FDA had authorised about **950** AI-enabled medical devices by 2024, mostly in radiology.
  - **Drug discovery:** Insilico Medicine's AI-discovered drug for lung fibrosis reached Phase II trials in 2023.
  - **Climate and energy:** DeepMind cut Google data-centre cooling energy by about **40%** (2016); AI weather models (GraphCast) forecast faster and often more accurately than traditional models.
- **Theory:** general-purpose technologies (Bresnahan and Trajtenberg, 1995); *ideas getting harder to find* (Bloom et al., 2020), which AI may reverse.
- **Counter-argument:** health AI can embed bias (e.g. tools trained mostly on lighter skin tones in dermatology).
- **Rebuttal:** a reason for validation and diverse data, not for forgoing the gains.

## Main point 2 — Market opportunities: productivity in knowledge work
- **Claim:** the biggest commercial gains come from augmenting workers, especially less experienced ones.
  - **Customer support:** Brynjolfsson, Li and Raymond found an AI assistant raised productivity by **14%** on average and **34%** for novices.
  - **Writing:** Noy and Zhang (*Science*, 2023) found ChatGPT cut task time by about **40%** and raised quality by about **18%**.
  - **Consulting:** the Harvard–BCG study (2023) found consultants using GPT-4 finished **12% more tasks**, **25% faster**, at **40% higher quality**, but did worse on tasks outside the AI's competence (the "jagged frontier").
  - **Industry:** predictive maintenance, fraud detection in finance and personalised marketing.
- **Theory:** complementarity vs substitution (Acemoglu and Restrepo); the *Solow paradox* ("computers everywhere except in the productivity statistics").
- **Counter-argument:** Acemoglu (2024) estimates AI may raise total factor productivity by only about **0.7%** over ten years; the hype outruns the evidence.
- **Rebuttal:** early estimates of electricity and IT were also modest; gains arrive when firms reorganise around the technology, which takes time.

## Main point 3 — The conditions for AI's value to be broadly shared
- **Claim:** the opportunity is real only if gains are not captured by a few firms or paid for by the vulnerable.
  - **Concentration:** Nvidia supplies the large majority of AI chips; hyperscaler capital spending was about **$400bn** in 2025, a scale few firms can match.
  - **Jobs:** the IMF (2024) estimates about **40%** of global jobs (60% in advanced economies) are exposed to AI; early-career workers in exposed jobs saw employment fall (Stanford, 2025).
  - **Bias:** Amazon scrapped an AI recruiting tool in 2018 after it learned to downgrade CVs mentioning "women's".
  - **Energy:** the IEA projects data-centre electricity could reach about **945 TWh** by 2030; in Ireland data centres already use **23%** of metered electricity (2025).
  - **Governance:** the **EU AI Act** (in force August 2024) bans certain uses and imposes duties on high-risk systems.
- **Counter-argument:** regulation slows innovation and hands the lead to the US and China.
- **Rebuttal:** trust is a precondition for adoption in health, finance and the public sector, the areas of greatest value.

## Conclusion
- **Answer:** AI's greatest opportunities lie in **science and health** (social value) and **augmenting knowledge work** (market value).
- **Condition:** the opportunity is fully realised only if gains are shared, by workers, consumers and smaller firms as well as the platforms.
- **Hindsight:** the 2022 framing of pure opportunity has given way in 2026 to questions of cost, risk and who captures the gains, which is likely next year's angle.
- **Final line:** AI's greatest opportunity is not to replace human intelligence but to make expertise abundant.`,
      evidence: `!stat 100m | ChatGPT users within two months of launch
!stat $2.6–4.4tn | Annual value generative AI could add (McKinsey, 2023)
!stat 200m | Protein structures predicted by AlphaFold
!stat +14% / +34% | Productivity gain from an AI assistant for all agents / novices
!stat 40% | Share of global jobs exposed to AI (IMF, 2024)
!stat ~0.7% | Acemoglu's estimate of AI's 10-year TFP boost (the sceptic's number)
!stat 945 TWh | Projected global data-centre electricity use by 2030 (IEA)

#### Theories and thinkers
- **General-purpose technologies (Bresnahan and Trajtenberg).**
- **Acemoglu and Restrepo:** automation vs augmentation; "so-so automation".
- **Solow paradox;** **Jevons paradox** (efficiency can raise total use).
- **Schumpeter:** creative destruction.

#### Extra examples
- **2024 Nobel Prizes:** Chemistry (AlphaFold) and Physics (Hopfield and Hinton, neural networks).
- **Alphabet's ~$500bn one-day loss (29 October 2026):** investors questioning AI returns.
- **EU AI Act:** prohibited practices from February 2025; general-purpose model rules from August 2025.

#### Pitfalls
- "In your view": rank the opportunities and defend the ranking.
- Don't drift into a list of risks; the question is about opportunities, so use risks only as conditions.`,
    },
    /* ------------------------------------------------------------------ Q5 */
    {
      id: 'q5',
      n: 5,
      title: 'Is work a "central life interest"? Will you seek meaning in it?',
      paraphrased: true,
      tags: ['OB', 'Sociology', 'Philosophy', 'Personal voice'],
      prompt: `The sociologist Robert Dubin asked whether work is a **"central life interest"** for most people. Is it? And will you try to find meaning in your own work?`,
      plan: `## Introduction
- **Hook:** Dubin's classic study (1956) found that only about **24%** of industrial workers named work as their central life interest; most found it in family and community.
- **Today:** Gallup finds only **21–23%** of employees worldwide are engaged at work (about **13%** in Europe), yet **80%** of people in a famous survey said they would keep working even if they no longer needed the money (Morse and Weiss, 1955).
- **Define:** a *central life interest* is the domain where a person invests identity and emotional energy. *Meaning* is the sense that an activity matters, coheres and expresses who you are.
- **Thesis:** work **can** be a central life interest and is a rich source of meaning, but for most people it is not, and it should not be the **only** source. Personally, I will seek meaning in work, but not identity alone.
- **Roadmap:** why work can be central; why it often isn't, and shouldn't be; what makes work meaningful, and my own position.

## Main point 1 — Why work can be central: identity, mastery and contribution
- **Claim:** work answers basic psychological needs.
  - **Self-determination theory (Deci and Ryan):** autonomy, competence and relatedness, all available through good work.
  - **Weber's Protestant ethic (1905):** work as a calling, which still shapes Western culture.
  - **Frankl, *Man's Search for Meaning* (1946):** meaning comes from what we create or give to the world.
  - **Callings:** Wrzesniewski (1997) found people split roughly evenly between seeing their work as a *job*, a *career* or a *calling*, even within the same occupation.
  - **Unemployment hurts beyond income:** loss of structure, status and social contact (Jahoda's Marienthal study, 1933).
- **Link:** so work matters, but that doesn't make it central for most.

## Main point 2 — Why work often isn't central, and why that may be healthy
- **Claim:** for many, work is instrumental, and over-centrality has costs.
  - **Bad jobs:** Graeber's *Bullshit Jobs* (2018) cites a YouGov poll in which **37%** of British workers said their job made no meaningful contribution.
  - **Alienation (Marx, 1844):** workers separated from the product and purpose of their labour.
  - **Burnout:** the WHO and ILO estimated long working hours (55+ a week) caused about **745,000** deaths in 2016; Japan has a word for death from overwork (*karoshi*).
  - **Disengagement:** the US "Great Resignation" saw about **47.8m** people quit in 2021, followed by "quiet quitting" (2022).
  - **Aristotle's *eudaimonia*:** a good life draws on many activities: friendship, citizenship, contemplation.
  - **Keynes (1930):** predicted a **15-hour week** by 2030 as productivity rose; we chose more consumption instead.
- **Counter-argument:** saying work shouldn't be central lets employers off the hook for making it meaningless.
- **Rebuttal:** both can be true: work should be decent and meaningful, and life should not depend on it alone.

## Main point 3 — What makes work meaningful, and my own answer
- **Claim:** meaning comes from job design and personal orientation, not job title or salary.
  - **Job characteristics (Hackman and Oldham, 1976):** skill variety, task identity, significance, autonomy and feedback.
  - **Herzberg (1959):** pay and conditions prevent dissatisfaction, but motivation comes from achievement and responsibility.
  - **Job crafting (Wrzesniewski and Dutton, 2001):** hospital cleaners who saw their work as part of patient care found it more meaningful.
  - **New models:** in the 2022 UK four-day-week pilot, **56 of 61** firms continued, with fewer resignations and sick days.
  - **AI twist:** if AI takes routine tasks, work could become more meaningful, or junior roles could disappear entirely.
- **My position (personal voice):** I will seek work that develops mastery and contributes to something beyond profit, but I will treat it as **one** central interest among several (relationships, community, curiosity), to stay resilient when jobs change.
- **Theory:** portfolio identity; *the protean career* (Hall).

## Conclusion
- **Answer:** for most people work is not their central life interest, and Dubin's finding largely still holds, but work remains a major source of meaning when well designed.
- **Normative point:** employers should design work that makes meaning possible; individuals should not stake their whole identity on it.
- **Personal answer:** yes, I will seek meaning in my work, but not only there.
- **Final line:** a good life needs good work, but a good life is more than work.`,
      evidence: `!stat 24% | Industrial workers whose central life interest was work (Dubin, 1956)
!stat 21–23% | Employees engaged at work worldwide (Gallup, 2024–25)
!stat 80% | Would keep working without needing the money (Morse and Weiss, 1955)
!stat 37% | British workers who said their job made no meaningful contribution (YouGov, 2015)
!stat 745,000 | Deaths from long working hours in 2016 (WHO/ILO)
!stat 56 of 61 | UK firms that continued the four-day week after the 2022 pilot

#### Theories and thinkers
- **Dubin (1956):** central life interest.
- **Self-determination theory (Deci and Ryan);** **Hackman and Oldham;** **Herzberg.**
- **Weber, Marx, Frankl, Aristotle:** the humanistic sources.
- **Wrzesniewski:** job, career, calling; job crafting.
- **Keynes (1930):** *Economic Possibilities for our Grandchildren.*

#### Extra examples
- **Ireland:** strong employment (unemployment around 4–5%) but housing costs push long commutes and hours.
- **AI and graduate jobs (2025–26):** employment of 22–25-year-olds in AI-exposed jobs fell relative to others.

#### Pitfalls
- The question invites a **personal** answer: use "I" in the introduction and conclusion.
- Use Dubin's term correctly; examiners chose a term of art deliberately.`,
    },
    /* ------------------------------------------------------------------ Q6 */
    {
      id: 'q6',
      n: 6,
      title: 'When global business and international relations clash',
      paraphrased: true,
      tags: ['Geopolitics', 'International relations', 'Ethics', 'Strategy'],
      prompt: `Using **any example**, discuss how firms should act when their commercial interests come into tension with international relations between states.`,
      plan: `## Introduction
- **Hook:** in 2021 Germany relied on Russia for about **55%** of its gas imports; within weeks of the invasion in February 2022, Nord Stream 2 was halted and Western firms faced a choice between profits and politics.
- **Context:** this question was set weeks before the invasion; since then, US–China tech restrictions, sanctions on Russia and tariffs have made it a defining business issue.
- **Define:** *economic interdependence* (mutual reliance through trade and investment) and *weaponised interdependence* (Farrell and Newman, 2019): states using chokepoints in networks (finance, chips, energy) as leverage.
- **Thesis:** firms should not try to run foreign policy, but they cannot be neutral either. They should **comply with law, avoid contributing to serious harm, and build resilience** against geopolitical risk.
- **Roadmap:** how the tensions arise; what firms owe; how they should manage the risk.

## Main point 1 — How commercial and geopolitical interests collide
- **Claim:** globalisation created dependencies that states now treat as security risks.
  - **Energy:** "change through trade" (*Wandel durch Handel*) assumed commerce would moderate Russia; it instead gave Russia leverage, and Germany nationalised the gas importer Uniper in 2022 at huge cost.
  - **Chips:** on **7 October 2022** the US restricted exports of advanced chips and chip-making tools to China; Nvidia redesigned products to comply, and the Netherlands restricted ASML's exports.
  - **Platforms:** a US law of April 2024 required TikTok's Chinese owner to sell its US business or face a ban; the Supreme Court upheld it in **January 2025**.
  - **Consumer backlash:** H&M was boycotted in China in 2021 after expressing concern about forced labour in Xinjiang cotton; the NBA lost Chinese broadcasts after a 2019 tweet supporting Hong Kong protesters.
- **Theory:** Hirschman, *National Power and the Structure of Foreign Trade* (1945): asymmetric trade creates power; liberal peace theory (trade promotes peace) versus realism.

## Main point 2 — What firms owe: legality, harm-avoidance and consistency
- **Claim:** firms have duties beyond profit, but not the duty to make foreign policy.
  - **Law:** comply with sanctions and export controls (the EU had adopted 21 sanctions packages against Russia by October 2026).
  - **Harm:** UN Guiding Principles: avoid contributing to human-rights abuses through supply chains or customers (e.g. Xinjiang forced-labour rules: the US Uyghur Forced Labor Prevention Act, 2021).
  - **Consistency:** firms that speak out on one regime but stay silent on another invite charges of hypocrisy.
  - **Examples:** Shell and BP exited Russian ventures in 2022 at a cost of tens of billions of dollars; McDonald's sold its 850 restaurants; others stayed for essential goods.
- **Theory:** Friedman (profit within the rules) vs stakeholder theory; corporate moral responsibility (Silver).
- **Counter-argument:** firms are not diplomats; politicising business damages trade and harms ordinary citizens.
- **Rebuttal:** true for ordinary political disputes, but not when the firm's own activity contributes to war or abuse.

## Main point 3 — Managing geopolitical risk: de-risking, not decoupling
- **Claim:** prudent firms reduce dependence before crises force them to.
  - **Diversification:** Apple has shifted a growing share of iPhone assembly from China to India; "China plus one" sourcing.
  - **EU strategy:** "de-risking, not decoupling" (von der Leyen, March 2023); the Chips Act (2023) and the 2026 tech-sovereignty package.
  - **Scenario planning:** stress-test supply chains for chokepoints (Taiwan for advanced chips, the Strait of Hormuz for oil, as the 2026 shock showed).
  - **Ireland's exposure:** about **32%** of Irish goods exports go to the US; a 2026 US pharma tariff (15% for the EU) shows how one partner's policy can hit a small open economy.
- **Theory:** efficiency vs resilience; real options thinking.
- **Counter-argument:** de-risking raises costs and prices.
- **Rebuttal:** resilience is insurance; the costs of disruption (Germany's energy shock) are larger.

## Conclusion
- **Answer:** when commerce and geopolitics clash, firms should follow the law, refuse to contribute to serious harm and manage risk through diversification.
- **They should not:** act as foreign-policy makers, or hide behind neutrality when their products feed a conflict.
- **Generalise:** the 2022–26 period ended the assumption that markets and politics can be kept apart.
- **Final line:** the age of frictionless globalisation is over; the firms that thrive will price geopolitics in, not wish it away.`,
      evidence: `!stat ~55% | German gas imports from Russia in 2021
!stat 7 Oct 2022 | US export controls on advanced chips to China
!stat Jan 2025 | US Supreme Court upholds the TikTok divest-or-ban law
!stat 21 | EU sanctions packages against Russia by October 2026
!stat ~32% | Share of Irish goods exports going to the US (2024)

#### Theories and thinkers
- **Hirschman (1945):** trade as a source of power.
- **Farrell and Newman (2019):** weaponised interdependence.
- **Liberal peace / capitalist peace vs realism.**
- **De-risking vs decoupling (EU, 2023).**

#### Extra examples
- **US–China rare earths:** China's 2025 export restrictions on rare earths and magnets.
- **Hormuz (2026):** shipping through the strait collapsed from about 85 to about 5 ships a day.
- **Ireland's Occupied Territories Act (2026):** US firms caught between Irish law and US anti-boycott rules.

#### Pitfalls
- "Using any example": pick one or two and go deep rather than listing many.
- Don't argue firms must always exit; show the conditions.`,
    },
  ],
};
