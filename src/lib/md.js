/**
 * Small markdown renderer for essay plans and fact files.
 *
 * Supports: ## / ### / #### headings, paragraphs, nested bullet and numbered
 * lists (indent with 2 or 4 spaces), pipe tables, > callouts, --- rules,
 * **bold**, *italic*, [links](url), _(Source: X)_ tags, and stat tiles:
 *   !stat 23% | Share of Irish electricity used by data centres (2025)
 */

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function inline(text) {
  let s = esc(text);
  s = s.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  s = s.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/_\((Source[^)]*)\)_/g, '<span class="src">($1)</span>');
  s = s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<em>$2</em>');
  s = s.replace(/(^|[\s(])_([^_\s][^_]*?)_(?=[\s.,;:)!?]|$)/g, '$1<em>$2</em>');
  return s;
}

const LIST_RE = /^(\s*)([-*•]|\d+[.)])\s+(.*)$/;
const indentOf = (line) => line.replace(/\t/g, '    ').match(/^ */)[0].length;

function renderList(lines) {
  const items = [];
  for (const raw of lines) {
    const line = raw.replace(/\t/g, '    ');
    const m = line.match(LIST_RE);
    if (m) items.push({ indent: m[1].length, ordered: /\d/.test(m[2]), text: m[3], children: [] });
    else if (items.length) items[items.length - 1].text += ' ' + line.trim();
  }
  const root = { indent: -1, children: [] };
  const stack = [root];
  for (const it of items) {
    while (stack.length > 1 && it.indent <= stack[stack.length - 1].indent) stack.pop();
    stack[stack.length - 1].children.push(it);
    stack.push(it);
  }
  const out = (nodes) => {
    let html = '';
    let i = 0;
    while (i < nodes.length) {
      const ordered = nodes[i].ordered;
      const tag = ordered ? 'ol' : 'ul';
      html += `<${tag}>`;
      while (i < nodes.length && nodes[i].ordered === ordered) {
        const n = nodes[i];
        html += `<li>${inline(n.text)}${n.children.length ? out(n.children) : ''}</li>`;
        i++;
      }
      html += `</${tag}>`;
    }
    return html;
  };
  return out(root.children);
}

function renderTable(lines) {
  const rows = lines
    .filter((l, i) => !(i === 1 && /^\|?\s*:?-{2,}/.test(l.trim())))
    .map((l) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim()));
  const [head, ...body] = rows;
  return `<div class="table-wrap"><table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${body
    .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`)
    .join('')}</tbody></table></div>`;
}

function renderStats(lines) {
  return `<div class="stats">${lines
    .map((l) => {
      const [value, ...rest] = l.replace(/^!stat\s+/, '').split('|');
      return `<div class="stat"><div class="stat__value">${inline(value.trim())}</div><div class="stat__label">${inline(rest.join('|').trim())}</div></div>`;
    })
    .join('')}</div>`;
}

export function md(src = '') {
  const lines = String(src).replace(/\r/g, '').split('\n');
  let html = '';
  let i = 0;
  const isBlockStart = (l) => /^#{2,5}\s/.test(l) || LIST_RE.test(l) || /^\s*\|/.test(l) || /^>/.test(l) || /^!stat\s/.test(l) || /^---\s*$/.test(l);
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    let m;
    if ((m = line.match(/^(#{2,5})\s+(.*)$/))) {
      const level = Math.min(m[1].length + 1, 5);
      html += `<h${level}>${inline(m[2])}</h${level}>`;
      i++;
    } else if (/^---\s*$/.test(line)) {
      html += '<hr>';
      i++;
    } else if (/^!stat\s/.test(line)) {
      const block = [];
      while (i < lines.length && /^!stat\s/.test(lines[i])) block.push(lines[i++]);
      html += renderStats(block);
    } else if (/^\s*\|/.test(line)) {
      const block = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) block.push(lines[i++]);
      html += renderTable(block);
    } else if (/^>/.test(line)) {
      const block = [];
      while (i < lines.length && /^>/.test(lines[i])) block.push(lines[i++].replace(/^>\s?/, ''));
      html += `<blockquote>${md(block.join('\n'))}</blockquote>`;
    } else if (LIST_RE.test(line)) {
      const block = [];
      while (i < lines.length) {
        const l = lines[i];
        if (!l.trim()) {
          // a blank line ends the list unless the next line continues it
          const next = lines[i + 1];
          if (next && (LIST_RE.test(next) || (indentOf(next) >= 2 && next.trim()))) { i++; continue; }
          break;
        }
        if (LIST_RE.test(l) || (indentOf(l) >= 2 && !isBlockStart(l.trim()))) { block.push(l); i++; }
        else break;
      }
      html += renderList(block);
    } else {
      const block = [];
      while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) block.push(lines[i++].trim());
      html += `<p>${inline(block.join(' '))}</p>`;
    }
  }
  return html;
}

/** Plain text for search indexing. */
export function plain(src = '') {
  return String(src)
    .replace(/^!stat\s+/gm, '')
    .replace(/[#*_>|]/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}
