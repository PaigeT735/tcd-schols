export default {
  id: 'position-statements',
  num: 9,
  label: 'Position statements',
  kind: 'notes',
  title: 'Position statements, memos and other role-play answers',
  summary: `The examiners like **genre switches**: a memo to yourself as an HR manager (2023), a personal reflection (2023, 2025) and a Minister for Agriculture's position statement (2026). Expect another: a CEO, minister or head of a national company writing to staff, a board or the public about a sector's transition. This section gives a reusable template and fact packs for the most likely sectors.`,
  meta: [['Section', 'A (and B for memos)'], ['Confidence', '40%'], ['Past papers', '2023 Q2 memo · 2023 Q4 and 2025 Q3 reflections · 2026 A2 minister']],
  sections: [
    {
      id: 'glance',
      title: 'At a glance',
      md: `!stat 4 | Role-play or reflection questions across three papers
!stat 3 parts | What 2026 A2 asked for: current state, vision, how stakeholders achieve it
!stat ~33 min | Time per answer, so the statement must be tight

#### Likely wordings
- "As CEO of a national electricity company, write a statement to your board on balancing energy security, affordability and decarbonisation." (Mock 2027 A4)
- "As Minister for Transport, set out how your country will cut transport emissions while keeping people connected."
- "As CEO of a fashion retailer, write to your staff about the company's path to sustainability."
- "As head of a national airline, write a position statement on aviation's future in a net-zero world."
- "As CEO of a technology company, explain to the public how your data centres will grow within climate limits."

#### What examiners reward
- **Voice:** first person, decisive, as the role would speak.
- **Structure that follows the question's parts**, signposted.
- **Specific numbers** for the current state and targets.
- **Named stakeholders** with concrete responsibilities.
- **Honesty about trade-offs** and who bears costs (just transition).
- **Theory used lightly:** stakeholder theory, systems thinking, just transition, mitigation and adaptation, without footnoting like an essay.`,
    },
    {
      id: 'template',
      title: 'Universal template',
      md: `1. **Heading:** "Position statement of the [role] on [topic], [month year]" or a memo header (To / From / Subject / Date).
2. **Opening (3–4 sentences):** why this matters now; acknowledge both the sector's value and its impact. One current fact as a hook.
3. **Where we are (current state):** 4–6 numbers: economic weight, emissions share, trend, gap to target, one social fact.
4. **Our vision (with a date):** a sentence a newspaper could quote, plus 3–4 measurable targets.
5. **How we will get there:** 4–6 actions grouped (technology, regulation and pricing, investment, behaviour).
6. **Stakeholders and responsibilities:** government, the organisation, suppliers, workers, customers, communities.
7. **Trade-offs and fairness:** name the losers and how they are supported; say what you will not do.
8. **Accountability:** KPIs, independent verification, annual report.
9. **Closing (2 sentences):** values and a commitment.

#### Phrases that sound like a real statement
- "Let me be clear about where we stand."
- "This is not a choice between [x] and [y]; it is a choice about how quickly and fairly we change."
- "We will publish our progress every year, and we expect to be held to it."
- "Those who have built this sector must not be the ones who pay for changing it."

#### Avoid
- Vague claims ("green", "eco-friendly"): the EU bans unsubstantiated generic claims from **27 September 2026**; your statement should model specific, measurable claims.
- Promising everything to everyone; a credible statement names trade-offs.
- Writing a normal essay with "In this essay I will…".`,
    },
    {
      id: 'energy',
      title: 'Fact pack: energy and electricity (Ireland)',
      md: `- **Hormuz shock:** from **28 February 2026** the Iran war caused what the IEA called the largest oil-supply disruption in history; Brent peaked more than **60%** above pre-war levels in April.
- **Coal:** Moneypoint stopped burning coal in **June 2025**.
- **Wind:** roughly a third of Irish electricity in recent years; solar growing quickly.
- **Interconnection:** Greenlink to Wales operating from 2025; Celtic Interconnector to France due later this decade.
- **Data centres:** **23%** of metered electricity in 2025 (5% in 2015); up to **30%** by 2030 (EirGrid).
- **Targets:** **80%** renewable electricity by 2030; national **51%** emissions cut by 2030 vs 2018 (EPA projects at most 25%).
- **Storm Éowyn (January 2025):** about **768,000** customers lost power, so resilience is part of the brief.
- **Key tensions:** security (gas backup), affordability (bills, energy poverty), decarbonisation (no lock-in), local consent (pylons, wind farms), large energy users.
- **See Mock 2027 A4 for a full plan.**`,
    },
    {
      id: 'transport',
      title: 'Fact pack: Minister for Transport (Ireland)',
      md: `- **Weight:** transport is one of Ireland's largest emitting sectors (roughly a fifth of emissions), dominated by private cars and freight.
- **Trend:** emissions only modestly below 2018 despite EV grants; the EPA expects freight to become the largest road-transport source.
- **Target:** the sectoral emissions ceiling requires about a **50%** cut by 2030 vs 2018.
- **Systems problem:** dispersed housing, car dependence, induced demand (section 2).
- **Vision lines:** "By 2040, every town of more than 10,000 people will have a bus every 15 minutes, and most children will walk or cycle to school safely."
- **Actions:**
  - **Avoid:** compact development near rail; remote and hybrid work; 15-minute neighbourhoods.
  - **Shift:** BusConnects corridors, DART+ electrification, MetroLink, rural Local Link buses, safe cycle networks.
  - **Improve:** EV charging, electric buses, freight to rail, efficient logistics.
  - **Pricing:** fare reductions (Ireland cut public-transport fares by 20% in 2022), parking levies, congestion charging.
- **Stakeholders:** local authorities, NTA, Irish Rail, Bus Éireann, rural communities, hauliers, employers, parents and schools.
- **Trade-offs:** rural households with no alternative; road-space reallocation angers drivers and retailers; capital costs. Fairness tools: rural services first, targeted EV and e-bike grants, phased charges.
- **Evidence from abroad:** Germany's **€9** ticket (summer 2022) and the **Deutschlandticket**; Paris's cycling expansion; Norway's EV share above **80%**.`,
    },
    {
      id: 'fashion',
      title: 'Fact pack: CEO of a fashion retailer',
      md: `- **Industry impact:** an estimated **2–8%** of global emissions (UNEP); large water use and dyeing pollution; production roughly doubled 2000–2014 while each garment is worn fewer times; less than **1%** of clothing recycled into new clothing (Ellen MacArthur Foundation).
- **Waste:** Ghana's Kantamanto market receives about **15 million** used garments a week, many unsellable.
- **Social:** Rana Plaza (2013): **1,134** deaths; the binding Bangladesh Accord followed.
- **Regulation:** EU extended producer responsibility for textiles agreed in 2025 (brands pay for collection and treatment); EU ecodesign rules and digital product passports; EU ban on destroying unsold clothing and footwear for large firms from **July 2026**; Empowering Consumers Directive from 27 September 2026; CSDDD narrowed to the largest firms.
- **Vision lines:** "We will sell fewer, better clothes, and earn more from keeping them in use."
- **Actions:** durability standards; repair and resale (Patagonia Worn Wear; resale platforms); fewer collections; traceability to tier 3; renewable energy in supplier factories; fair purchasing (no last-minute price cuts); take-back with honest claims.
- **Stakeholders:** suppliers and garment workers, customers, investors, regulators, NGOs.
- **Trade-offs:** lower volumes vs revenue; higher prices vs accessibility; supplier jobs in producing countries. Fairness: long-term contracts, co-investment in cleaner factories.`,
    },
    {
      id: 'aviation',
      title: 'Fact pack: head of a national airline',
      md: `- **Impact:** aviation is about **2.5%** of global CO2, and about **3.5%** of human-caused warming once non-CO2 effects such as contrails are included (Lee et al., 2021).
- **Hard to abate:** long-haul flight needs dense fuels; electric and hydrogen aircraft are far off for most routes.
- **EU rules:** intra-EU flights in the EU Emissions Trading System; free allowances phased out by 2026; **ReFuelEU**: sustainable aviation fuel at least **2%** of EU jet fuel in 2025, **6%** in 2030, **70%** in 2050.
- **Ireland:** Dublin Airport's 32-million-passenger planning cap has been disputed by airlines; Ryanair is one of the largest emitters in the EU ETS.
- **Greenwashing risk:** KLM's "Fly Responsibly" ads found misleading (2024); Ryanair's "greenest airline" claim banned (2020).
- **Vision lines:** "We will connect an island nation to the world while cutting the climate cost of every journey, and being honest that we cannot yet eliminate it."
- **Actions:** fleet renewal (newer aircraft burn about 15–20% less fuel); SAF offtake contracts; operational efficiency; contrail avoidance research; shift short routes to rail where possible; no offset-based "carbon neutral" marketing.
- **Trade-offs:** connectivity for an island economy and diaspora; tourism; price-sensitive customers; workers.`,
    },
    {
      id: 'tech',
      title: 'Fact pack: CEO of a technology or data-centre company',
      md: `- **Footprint:** Irish data centres **23%** of metered electricity (2025); global data-centre demand projected to roughly double to about **945 TWh** by 2030 (IEA).
- **Efficiency vs rebound:** Google's emissions **48%** above 2019 (2024 report); Microsoft about **23%** above 2020 (2025 report).
- **Ireland's response:** EirGrid restricted new data-centre connections in the Dublin area; the energy regulator has moved to require new data centres to bring their own dispatchable generation or storage.
- **Vision lines:** "Every new megawatt we use will be matched by new clean power on the same grid, in the same hour."
- **Actions:** 24/7 carbon-free energy matching (not annual certificates); on-site batteries and flexible demand; heat reuse (district heating, as at Tallaght); water-efficient cooling; transparent reporting of energy, water and emissions per service; efficient AI models.
- **Stakeholders:** grid operator, regulator, government, local communities, customers, employees.
- **Trade-offs:** jobs and investment vs grid capacity and climate targets; households' fear of higher bills or shortages.`,
    },
    {
      id: 'memo',
      title: 'Memos and reflections',
      md: `#### Memo genre (2023 Q2)
- **Header:** CONFIDENTIAL; To; From; Subject; Date.
- **Sections:** Situation; Diagnosis (use theory explicitly but naturally); Consequences if nothing changes; Proposed response (individual, team, organisational); Next steps with dates.
- **Tone:** private, analytical, candid, including about your own role and the organisation's incentives.

#### Reflection genre (2023 Q4, 2025 Q3)
- **First person;** one real experience in enough detail.
- **Structure:** context; what happened (two or three moments); explanation using two or three theories; what worked and what did not; your own contribution; what you would change.
- **Critical:** show where theory fitted and where it did not (Tuckman's stages vs a relapse).
- **Avoid:** complaining about others; listing ten theories.

#### Letter to stakeholders or open letter
- **Opening:** acknowledge the concern directly.
- **Facts and commitments,** not reassurance.
- **Invite participation** (consultation, community benefit, worker voice).`,
    },
    {
      id: 'sample',
      title: 'Sample opening and closing paragraphs',
      md: `> **Opening (Minister for Transport):** Every morning, more than a million of us get into a car because, for most, there is no realistic alternative. That is not a failure of individual will; it is the result of how we have built our towns and roads for fifty years. Transport is one of our largest sources of emissions, and we are nowhere near halving them by 2030. Today I want to set out where we stand, where we are going, and what each of us will need to do.

> **Closing (fashion CEO):** We built this business on selling more. We will build its future on making what we sell last longer, on paying the people who make it fairly, and on telling you the truth about our progress, including when we fall short. We will publish our numbers every year, checked by people who do not work for us.

> **Trade-off paragraph (airline):** I will not pretend that flying can be made harmless soon. Sustainable fuels are scarce and expensive, and some of aviation's warming comes from contrails that we are only beginning to understand. What I can promise is that we will cut emissions per passenger every year, invest in the fuels and aircraft that can take us further, and stop telling customers that an offset makes their flight "carbon neutral".`,
    },
    {
      id: 'memorise',
      title: 'Memorise',
      md: `1. Template: opening, current state, vision, actions, stakeholders, trade-offs, accountability, closing.
2. Energy: Moneypoint coal ended June 2025; data centres 23%; 80% renewables target; Hormuz 2026.
3. Transport: ~50% sectoral cut needed by 2030; fares cut 20% (2022); avoid–shift–improve.
4. Fashion: 2–8% of emissions; <1% recycled into clothing; Rana Plaza 1,134; EU textile EPR; unsold-goods destruction ban from July 2026.
5. Aviation: ~2.5% of CO2, ~3.5% of warming; ReFuelEU 2% → 6% → 70%.
6. Tech: Google +48%; Microsoft ~+23%; IEA ~945 TWh by 2030.
7. Agriculture: see 2026 A2: ~38% of emissions; 25% sector cut; ~€17bn exports.
8. Memo and reflection formats from 2023 and 2025.`,
    },
  ],
};
