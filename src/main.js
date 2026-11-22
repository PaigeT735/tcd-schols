import { SUBJECTS, SITE } from './content/index.js';
import { md, plain, inline } from './lib/md.js';

/* ==========================================================================
   Helpers
   ========================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } },
};
const icons = {
  chev: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
  down: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  collapse: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/><path d="m15 10-2 2 2 2"/></svg>',
  menu: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  search: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  sun: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/></svg>',
  link: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
};

/* ==========================================================================
   Routing: #/<subject>/<paper>/<sitting>/<anchor>
   ========================================================================== */
function parseRoute() {
  const [s, p, t, a] = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
  const subject = SUBJECTS.find((x) => x.id === s) ?? SUBJECTS[0];
  const paper = subject.papers.find((x) => x.id === p) ?? subject.papers[0];
  const sitting = paper.sittings.find((x) => x.id === t) ?? paper.sittings[0] ?? null;
  return { subject, paper, sitting, anchor: a || null };
}
const href = (subject, paper, sitting, anchor) =>
  '#/' + [subject?.id, paper?.id, sitting?.id, anchor].filter(Boolean).map(encodeURIComponent).join('/');

/* ==========================================================================
   Shell
   ========================================================================== */
const shell = $('#shell');
const openSubjects = store.get('schols-open', { business: true, econ: true });

function renderSidebar(route) {
  $('#side-nav').innerHTML = `
    <p class="side__label">Subjects</p>
    ${SUBJECTS.map((s) => {
      const active = s === route.subject;
      const open = openSubjects[s.id] !== false;
      return `<div class="subject" data-accent="${s.accent}" data-active="${active}" data-open="${open}">
        <button class="subject__btn" type="button" data-subject="${s.id}" aria-expanded="${open}" title="${s.label}">
          <span class="subject__icon">${s.icon}</span><span>${s.label}</span><span class="subject__chev">${icons.chev}</span>
        </button>
        <div class="side__papers"><ul>
          ${s.papers.map((p) => {
            const n = p.sittings.filter((x) => x.kind === 'paper' || x.kind === 'mock').length;
            const notes = p.sittings.filter((x) => x.kind === 'notes').length;
            const count = n ? `${n} paper${n > 1 ? 's' : ''}` : notes ? `${notes} sections` : 'empty';
            return `<li><a class="side__paper" href="${href(s, p, p.sittings[0])}" ${active && p === route.paper ? 'aria-current="page"' : ''}>${p.label}<span class="side__paper-count">${count}</span></a></li>`;
          }).join('')}
        </ul></div>
      </div>`;
    }).join('')}`;
}

function renderTop(route) {
  const { subject, paper, sitting } = route;
  document.documentElement.dataset.accent = subject.accent;
  $('#crumb').innerHTML = `<span class="crumb__subject">${subject.label}</span><span class="crumb__sep"></span>`;
  $('#paper-tabs').innerHTML = subject.papers
    .map((p) => `<a class="tab" href="${href(subject, p, p.sittings[0])}" ${p === paper ? 'aria-current="page"' : ''}>${p.label}</a>`)
    .join('');
  const sub = $('#subtabs');
  sub.hidden = !paper.sittings.length;
  sub.innerHTML = paper.sittings
    .map((t) => `<a class="subtab" href="${href(subject, paper, t)}" ${t === sitting ? 'aria-current="page"' : ''}>${t.num ? `<span class="subtab__num">${t.num}</span>` : ''}${t.label}</a>`)
    .join('');
  $('[aria-current="page"]', sub)?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  document.documentElement.style.setProperty('--top-h', paper.sittings.length ? '104px' : '56px');
}

/* ==========================================================================
   Page renderers
   ========================================================================== */
function hero(route, extra = '') {
  const { subject, paper, sitting } = route;
  const crumbs = [subject.label, paper.label, sitting?.label].filter(Boolean).join(' · ');
  return `<header class="hero">
    <p class="eyebrow">${inline(crumbs)}</p>
    <h1>${inline(sitting?.title ?? paper.title)}</h1>
    ${sitting?.summary || (!sitting && paper.summary) ? `<div class="hero__summary md">${md(sitting?.summary ?? paper.summary)}</div>` : ''}
    ${sitting?.meta?.length ? `<p class="hero__meta">${sitting.meta.map(([k, v]) => `<span>${inline(k)}: <strong>${inline(v)}</strong></span>`).join('')}</p>` : ''}
    ${extra}
  </header>`;
}

const contents = (items, label = 'On this page') =>
  `<nav class="contents"><span class="contents__label">${label}:</span>${items
    .map(([href, text]) => `<a href="${href}" data-jump>${inline(text)}</a>`)
    .join('<span class="contents__sep">/</span>')}</nav>`;

function questionCard(route, q) {
  const { subject, paper, sitting } = route;
  const id = `${sitting.id}-${q.id}`;
  const views = [
    ['plan', 'Essay plan', q.plan],
    ['evidence', 'Evidence bank', q.evidence],
  ].filter(([, , body]) => body);
  return `<article class="qcard glass" id="${id}" data-open="false">
    <div class="qcard__head">
      <div class="qcard__meta">
        <span class="qcard__num">${q.label ?? `Question ${q.n}`}</span>
        ${q.paraphrased ? '<span class="note-inline">wording paraphrased</span>' : ''}
        <a class="qcard__link" href="${href(subject, paper, sitting, q.id)}" data-copy>${icons.link}Link</a>
      </div>
      <h2 class="qcard__title">${inline(q.title)}</h2>
      ${q.prompt ? `<div class="qcard__prompt md">${md(q.prompt)}</div>` : ''}
      ${q.tags?.length ? `<p class="qcard__tags">${q.tags.map((t) => inline(t)).join(', ')}</p>` : ''}
    </div>
    <button class="toggle" type="button" data-toggle aria-expanded="false" aria-controls="${id}-body">
      <span data-toggle-label>Show essay plan</span><span class="toggle__hint">${views.map((v) => v[1].toLowerCase()).join(' · ')}</span><span class="toggle__chev">${icons.down}</span>
    </button>
    <div class="qcard__body" id="${id}-body"><div class="qcard__inner"><div class="qcard__content">
      ${views.length > 1 ? `<div class="atabs" role="tablist">${views.map(([k, label], i) => `<button class="atab" type="button" role="tab" data-atab="${k}" aria-selected="${i === 0}">${label}</button>`).join('')}</div>` : ''}
      ${views.map(([k, , body], i) => `<div class="md apanel" data-apanel="${k}" ${i ? 'hidden' : ''}>${md(body)}</div>`).join('')}
    </div></div></div>
  </article>`;
}

function topicCard(route, group, t) {
  const { subject, paper, sitting } = route;
  const id = `${sitting.id}-${t.id}`;
  return `<article class="qcard glass" id="${id}" data-open="false">
    <div class="qcard__head">
      <div class="qcard__meta"><span class="qcard__num">${inline(group.short ?? group.title)}</span>${t.tag ? `<span>${inline(t.tag)}</span>` : ''}
        <a class="qcard__link" href="${href(subject, paper, sitting, t.id)}" data-copy>${icons.link}Link</a></div>
      <h2 class="qcard__title">${inline(t.title)}</h2>
      ${t.hook ? `<div class="qcard__prompt md">${md(t.hook)}</div>` : ''}
    </div>
    <button class="toggle" type="button" data-toggle aria-expanded="false"><span data-toggle-label>Show fact file</span><span class="toggle__hint">what happened · debate · exam hook</span><span class="toggle__chev">${icons.down}</span></button>
    <div class="qcard__body"><div class="qcard__inner"><div class="qcard__content"><div class="md">${md(t.md)}</div></div></div></div>
  </article>`;
}

function renderPage(route) {
  const page = $('#page');
  const { paper, sitting } = route;
  if (!sitting) {
    page.innerHTML = hero(route) + `<div class="empty glass"><h2>No papers here yet</h2>${md(paper.empty ?? 'Send the papers over and they will appear as tabs here, in the same format as Business Paper 1.')}</div>`;
    return;
  }
  if (sitting.kind === 'guide' || sitting.kind === 'notes') {
    const numbered = sitting.kind === 'notes';
    page.innerHTML =
      hero(route) +
      contents(sitting.sections.map((s, i) => [`#${sitting.id}-${s.id}`, (numbered ? `${i + 1}. ` : '') + s.title])) +
      sitting.sections
        .map((s, i) => `<section class="panel" id="${sitting.id}-${s.id}"><h2 class="panel__title">${numbered ? `<span class="panel__num">${i + 1}</span>` : ''}${inline(s.title)}</h2><div class="md">${md(s.md)}</div></section>`)
        .join('');
    return;
  }
  if (sitting.kind === 'topics') {
    page.innerHTML =
      hero(route) +
      contents(sitting.groups.map((g) => [`#${sitting.id}-${g.id}`, g.title])) +
      `<div class="toolbar"><span class="toolbar__title">${sitting.groups.reduce((n, g) => n + g.topics.length, 0)} fact files</span><button class="btn" data-expand="open">Open all</button><button class="btn" data-expand="close">Close all</button></div>` +
      sitting.groups
        .map(
          (g) => `<div class="section-head" id="${sitting.id}-${g.id}"><h2>${inline(g.title)}</h2></div>
          ${g.intro ? `<div class="section-intro md">${md(g.intro)}</div>` : ''}
          <div class="qlist">${g.topics.map((t) => topicCard(route, g, t)).join('')}</div>
          ${g.extra ? `<div class="md" style="margin-top:18px">${md(g.extra)}</div>` : ''}`
        )
        .join('');
    return;
  }
  // Questions may be grouped into sections (e.g. Section A / Section B)
  const groups = [];
  for (const q of sitting.questions) {
    const key = q.section ?? '';
    if (!groups.length || groups[groups.length - 1].key !== key) groups.push({ key, qs: [] });
    groups[groups.length - 1].qs.push(q);
  }
  const intros = sitting.sectionNotes ?? {};
  page.innerHTML =
    hero(route) +
    (sitting.notes ? `<div class="md" style="margin-bottom:28px">${md(sitting.notes)}</div>` : '') +
    `<div class="toolbar"><span class="toolbar__title">${sitting.questions.length} questions · ${sitting.answer ?? 'answer two'}</span><button class="btn" data-expand="open">Open all</button><button class="btn" data-expand="close">Close all</button></div>` +
    groups
      .map((g) =>
        (g.key ? `<div class="section-head"><h2>${inline(g.key)}</h2>${intros[g.key] ? `<p>${inline(intros[g.key])}</p>` : ''}</div>` : '') +
        `<div class="qlist">${g.qs.map((q) => questionCard(route, q)).join('')}</div>`)
      .join('');
}

/* ==========================================================================
   Interactions
   ========================================================================== */
function setOpen(card, open) {
  card.dataset.open = String(open);
  const btn = $('[data-toggle]', card);
  btn.setAttribute('aria-expanded', String(open));
  const label = $('[data-toggle-label]', card);
  label.textContent = open ? label.textContent.replace(/^Show/, 'Hide') : label.textContent.replace(/^Hide/, 'Show');
}

function focusAnchor(route, smooth) {
  if (!route.anchor || !route.sitting) { if (!smooth) window.scrollTo(0, 0); return; }
  const el = document.getElementById(`${route.sitting.id}-${route.anchor}`);
  if (!el) return;
  if (el.classList.contains('qcard')) setOpen(el, true);
  const go = () => el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
  go();
  if (!smooth) { setTimeout(go, 350); document.fonts?.ready.then(go); }
}

document.addEventListener('click', (e) => {
  const t = e.target;
  const toggle = t.closest('[data-toggle]');
  if (toggle) { const card = toggle.closest('.qcard'); setOpen(card, card.dataset.open !== 'true'); return; }
  const atab = t.closest('[data-atab]');
  if (atab) {
    const card = atab.closest('.qcard');
    $$('[data-atab]', card).forEach((b) => b.setAttribute('aria-selected', String(b === atab)));
    $$('[data-apanel]', card).forEach((p) => (p.hidden = p.dataset.apanel !== atab.dataset.atab));
    return;
  }
  const exp = t.closest('[data-expand]');
  if (exp) { $$('.qcard').forEach((c) => setOpen(c, exp.dataset.expand === 'open')); return; }
  const jump = t.closest('[data-jump]');
  if (jump) { e.preventDefault(); document.querySelector(jump.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
  const subj = t.closest('[data-subject]');
  if (subj) {
    if (shell.dataset.collapsed === 'true' && innerWidth > 900) {
      const s = SUBJECTS.find((x) => x.id === subj.dataset.subject);
      location.hash = href(s, s.papers[0], s.papers[0].sittings[0]);
      return;
    }
    const wrap = subj.closest('.subject');
    const open = wrap.dataset.open !== 'true';
    wrap.dataset.open = String(open);
    subj.setAttribute('aria-expanded', String(open));
    openSubjects[subj.dataset.subject] = open;
    store.set('schols-open', openSubjects);
    return;
  }
  const copy = t.closest('[data-copy]');
  if (copy && navigator.clipboard) {
    navigator.clipboard.writeText(location.href.split('#')[0] + copy.getAttribute('href')).catch(() => {});
  }
  if (t.closest('.side__paper')) shell.dataset.drawer = 'false';
});

$('#collapse').addEventListener('click', () => {
  const v = shell.dataset.collapsed !== 'true';
  shell.dataset.collapsed = String(v);
  store.set('schols-collapsed', v);
});
$('#menu').addEventListener('click', () => (shell.dataset.drawer = shell.dataset.drawer === 'true' ? 'false' : 'true'));
$('#scrim').addEventListener('click', () => (shell.dataset.drawer = 'false'));
shell.dataset.collapsed = String(store.get('schols-collapsed', false));

/* Theme */
function paintTheme() {
  const dark = document.documentElement.dataset.theme === 'dark';
  $('#theme').innerHTML = dark ? icons.sun : icons.moon;
  $('#theme').setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0c0c0d' : '#e8e7e4');
}
$('#theme').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  store.set('schols-theme', next);
  paintTheme();
});

/* ==========================================================================
   Search
   ========================================================================== */
const INDEX = [];
for (const s of SUBJECTS)
  for (const p of s.papers)
    for (const t of p.sittings) {
      const where = `${s.label} ${p.label} · ${t.label}`;
      (t.questions ?? []).forEach((q) => INDEX.push({ where, title: q.title, url: href(s, p, t, q.id), text: plain([q.title, q.prompt, (q.tags ?? []).join(' '), q.plan, q.evidence].join(' ')) }));
      (t.sections ?? []).forEach((x) => INDEX.push({ where, title: x.title, url: href(s, p, t) + '', jump: `${t.id}-${x.id}`, text: plain(x.title + ' ' + x.md) }));
      (t.groups ?? []).forEach((g) => g.topics.forEach((x) => INDEX.push({ where: `${where} · ${g.short ?? g.title}`, title: x.title, url: href(s, p, t, x.id), text: plain([x.title, x.hook, x.md].join(' ')) })));
    }

const box = $('#search');
const results = $('#results');
let active = 0;
function search(q) {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) { results.hidden = true; return; }
  const hits = INDEX.map((r) => {
    const title = r.title.toLowerCase(), text = r.text.toLowerCase();
    let score = 0;
    for (const term of terms) {
      if (!text.includes(term) && !title.includes(term)) return null;
      score += (title.includes(term) ? 6 : 0) + Math.min(5, text.split(term).length - 1);
    }
    return { r, score };
  }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 14);
  active = 0;
  const mark = (s) => terms.reduce((acc, t) => acc.replace(new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>'), s);
  results.innerHTML = hits.length
    ? hits.map(({ r }, i) => {
        const pos = r.text.toLowerCase().indexOf(terms[0]);
        const snip = r.text.slice(Math.max(0, pos - 60), pos + 140).replace(/</g, '&lt;');
        return `<a class="result" href="${r.url}" ${r.jump ? `data-jumpto="${r.jump}"` : ''} data-active="${i === 0}"><div class="result__where">${r.where}</div><div class="result__title">${mark(r.title.replace(/[*_]/g, ''))}</div><div class="result__snip">${mark(snip)}</div></a>`;
      }).join('')
    : `<div class="results__empty">Nothing found for “${q.replace(/</g, '&lt;')}”.</div>`;
  results.hidden = false;
}
box.addEventListener('input', () => search(box.value));
box.addEventListener('focus', () => box.value && search(box.value));
box.addEventListener('keydown', (e) => {
  const items = $$('.result', results);
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    active = (active + (e.key === 'ArrowDown' ? 1 : items.length - 1)) % Math.max(items.length, 1);
    items.forEach((el, i) => (el.dataset.active = String(i === active)));
    items[active]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter') { items[active]?.click(); }
  else if (e.key === 'Escape') { results.hidden = true; box.blur(); }
});
results.addEventListener('click', (e) => {
  const a = e.target.closest('.result');
  if (!a) return;
  results.hidden = true;
  box.value = '';
  $('.searchbox').classList.remove('is-open');
  if (a.dataset.jumpto) {
    e.preventDefault();
    location.hash = a.getAttribute('href');
    setTimeout(() => document.getElementById(a.dataset.jumpto)?.scrollIntoView({ behavior: 'smooth' }), 60);
  }
});
document.addEventListener('click', (e) => { if (!e.target.closest('.searchbox')) results.hidden = true; });
document.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== box && !e.target.closest('input')) { e.preventDefault(); $('.searchbox').classList.add('is-open'); box.focus(); }
});
$('#search-open').addEventListener('click', () => { $('.searchbox').classList.toggle('is-open'); box.focus(); });

/* ==========================================================================
   Boot
   ========================================================================== */
let last = null;
function route() {
  const r = parseRoute();
  const key = `${r.subject.id}/${r.paper.id}/${r.sitting?.id}`;
  renderSidebar(r);
  renderTop(r);
  if (key !== last) {
    renderPage(r);
    document.title = `${r.sitting ? r.sitting.label + ' · ' : ''}${r.subject.label} ${r.paper.label} · ${SITE.title}`;
    focusAnchor(r, false);
    last = key;
  } else {
    focusAnchor(r, true);
  }
  shell.dataset.drawer = 'false';
}
addEventListener('hashchange', route);
paintTheme();
route();
