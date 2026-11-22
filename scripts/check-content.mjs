// Checks every essay plan has Introduction, Main points 1–3 and Conclusion, and renders all markdown.
// Run from the repo root: node scripts/check-content.mjs
const { SUBJECTS } = await import('../src/content/index.js');
const { md } = await import('../src/lib/md.js');
let n=0, words=0;
for (const s of SUBJECTS) for (const p of s.papers) for (const t of p.sittings) {
  for (const q of t.questions ?? []) { for (const k of ['prompt','plan','evidence']) { if (q[k]) { md(q[k]); words += q[k].split(/\s+/).length; } } n++;
    for (const sec of ['## Introduction','## Main point 1','## Main point 2','## Main point 3','## Conclusion']) if (!q.plan.includes(sec)) console.log('MISSING', t.id, q.id, sec);
    if (/\$\{/.test(q.plan)) console.log('interp', t.id, q.id);
  }
  for (const x of t.sections ?? []) { md(x.md); words += x.md.split(/\s+/).length; }
  for (const g of t.groups ?? []) for (const x of g.topics) { md(x.md); words += x.md.split(/\s+/).length; }
}
console.log('questions', n, 'words', words);
