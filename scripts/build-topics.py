"""Convert the 2026 topic briefs (markdown) into src/content/business-p1/topics-data.js.
Run: python3 scripts/build-topics.py   (reads raw/*.txt)"""
import re, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
FILES = [
    ('ai', 'd4505a8d-attachment.txt', 'Artificial intelligence', 'AI'),
    ('geo', '6c1b0c0b-attachment.txt', 'Geopolitics, trade and energy', 'Geopolitics'),
    ('ireland', 'b1aa0fd7-attachment.txt', 'Ireland', 'Ireland'),
    ('markets', '8b5688f2-attachment.txt', 'Markets, money and corporate power', 'Markets'),
]
TERMINAL = tuple('.:?!)"\'”’%*')

def source_tail(text):
    """Turn a trailing citation ('... grid. Central Statistics Office+1') into a source tag."""
    t = text.rstrip()
    m = re.search(r'^(.*?[.)%”"])\s+((?:[\w-]+\.)+(?:ie|org|gov|com|xml|info|net)(?:\+\d+)?)$', t)
    if m:
        return f"{m.group(1)} _(Source: {re.sub(r'[+]\d+$', '', m.group(2))})_"
    if t.endswith(TERMINAL):
        return t
    m = re.search(r'^(.*[.)%])\s+([^.]{2,80})$', t)
    if m:
        src = re.sub(r'\+\d+$', '', m.group(2)).strip()
        return f"{m.group(1)} _(Source: {src})_"
    return t

def clean(lines):
    out = []
    i = 0
    while i < len(lines):
        raw = lines[i].rstrip('\n')
        s = raw.strip()
        # stat tiles: "# **X**" then blank then label
        m = re.match(r'^#\s+\*\*(.+?)\*\*\s*$', s)
        if m:
            j = i + 1
            while j < len(lines) and not lines[j].strip():
                j += 1
            label = lines[j].strip() if j < len(lines) else ''
            out.append(f"!stat {m.group(1)} | {label}")
            i = j + 1
            continue
        if not s:
            out.append('')
        elif s.startswith('### '):
            out.append('## ' + s[4:].replace('**', ''))
        elif re.match(r'^\*\*[^*]+\*\*$', s):
            out.append('### ' + s.strip('*'))
        elif re.match(r'^\s*([-*]|\d+\.)\s', raw):
            indent = len(raw) - len(raw.lstrip(' '))
            body = re.sub(r'^\s*([-*]|\d+\.)\s+', '', raw)
            marker = re.match(r'^\s*([-*]|\d+\.)', raw).group(1)
            out.append(' ' * indent + marker + ' ' + source_tail(body))
        elif s.startswith('|'):
            out.append(s)
        elif s.endswith(TERMINAL) or s.startswith('**'):
            out.append(source_tail(s))
        elif re.search(r'\.\s+[^.]{2,80}$', s):
            out.append(source_tail(s))
        else:
            pass  # image captions, chart axes, stray numbers
        i += 1
    # collapse blank runs
    res, blank = [], False
    for l in out:
        if not l.strip():
            if not blank:
                res.append('')
            blank = True
        else:
            res.append(l)
            blank = False
    return '\n'.join(res).strip()

FIXES = [
    ('U.S. _(Source: Department of Treasury Building - Clio)_\n\n', ''),
    ('commercial partners. Football Unites the World”', 'commercial partners. _(Source: FIFA, “Football Unites the World”)_'),
    ('_(Source: Shaping Europe’s digital future)_', '_(Source: European Commission, Shaping Europe’s Digital Future)_'),
    ('_(Source: Every CRS Report)_', '_(Source: Congressional Research Service)_'),
    ('_(Source: CloudFront)_', '_(Source: SpaceX IPO prospectus)_'),
    ('_(Source: 15 and 16 October 2026)_', '_(Source: European Council conclusions, 15–16 October 2026)_'),
    ('_(Source: FT)_', '_(Source: Financial Times)_'),
    ('_(Source: spcx-20260630_htm.xml)_', '_(Source: SpaceX SEC filing)_'),
    ('!stat 15% | Minimum reserve-backed issuance requirement is 100%; 15% is not a stablecoin backing ratio', '!stat 1:1 | Reserve backing required under the GENIUS Act (at least $1 of permitted reserves per $1 of stablecoins)'),
    ("!stat € | Ireland's Digital Wallet age-verification initiative", "!stat Wallet | Ireland's Government Digital Wallet is being developed as an age-verification tool"),
    ('6 December 2025: FIFA awarded Trump its inaugural Peace Prize.', '5 December 2025: FIFA awarded Trump its inaugural Peace Prize.'),
    ('Selected months, USD billions. Pew Research Center analysis of The Block data.',
     '| Month | Combined monthly volume |\n| --- | --- |\n| Jul 2024 | $0.81bn |\n| Oct 2024 | $4.55bn |\n| Jan 2026 | $17.5bn |\n| Mar 2026 | $24.3bn |\n| May 2026 | $25.7bn |\n| Jun 2026 | $47.7bn |\n| Jul 2026 | $53.0bn |\n\nPew Research Center analysis of The Block data (selected months).'),
]

def build(key, fname, title, short):
    lines = (ROOT / 'raw' / fname).read_text().split('\n')
    if key == 'ai':
        start = next(i for i, l in enumerate(lines) if l.startswith('# **Artificial Intelligence'))
        lines = lines[start:]
    lines = [l for l in lines if not l.startswith('# **') or re.match(r'^#\s+\*\*[^*]{1,24}\*\*\s*$', l)]
    # split on '## **N. Title**'
    sections, cur = [], {'title': None, 'lines': []}
    for l in lines:
        m = re.match(r'^##\s+\*\*(\d+)\.\s+(.+?)\*\*\s*$', l.strip())
        if m:
            sections.append(cur)
            cur = {'title': m.group(2).strip(), 'num': int(m.group(1)), 'lines': []}
        else:
            cur['lines'].append(l)
    sections.append(cur)
    intro_lines = [l for l in sections[0]['lines'] if not re.match(r"^(I'll|For each theme|I would avoid)", l.strip())]
    intro = clean(intro_lines)
    topics, extras = [], []
    for sec in sections[1:]:
        body = sec['lines']
        # subtitle line (e.g. "Finance / investment / market risk")
        tag = None
        for k, l in enumerate(body):
            if l.strip():
                if not l.strip().startswith(('#', '-', '*', '|')) and len(l.strip()) < 70 and not l.strip().endswith('.'):
                    tag = l.strip()
                    body = body[k + 1:]
                break
        text = clean(body)
        for a, b in FIXES:
            text = text.replace(a, b)
        is_topic = not re.match(r'^(How|The|Additional|Five|Specific|Key|Connecting|Particularly)', sec['title'])
        if is_topic:
            hook = None
            m = re.search(r'\*\*The central question:\*\*\s*(.+)', text)
            if m:
                hook = '**Central question:** ' + m.group(1).strip()
            words = [w for w in re.sub(r"[^a-z0-9 ]+", ' ', sec['title'].lower().replace("'s", '')).split() if w not in {'the','and','a','an','of','or','to','its','their','own','should','be','is','ireland','versus','vs'}]
            tid = '-'.join(words[:3])
            topics.append({'id': f'{key}-{tid}', 'title': sec['title'], 'tag': tag, 'hook': hook, 'md': text})
        else:
            extras.append(f"## {sec['title']}\n\n{text}")
    return {'id': key, 'title': title, 'short': short, 'intro': intro, 'topics': topics, 'extra': '\n\n'.join(extras)}

groups = [build(*f) for f in FILES]
# Disclosure on the Anthropic case, as in the original brief
for g in groups:
    for t in g['topics']:
        if 'government' in t['title'].lower() and g['id'] == 'ai':
            t['md'] = ('> **Disclosure:** this site was built with Claude, which is made by Anthropic, one of the parties in this dispute. '
                       'The facts below come from your notes; weigh the sources yourself and present both companies fairly in an essay.\n\n' + t['md'])
        if 'career ladder' in t['title'].lower():
            t['md'] = t['md'].replace('## What happened — the Stanford/ADP employment findings',
                '## What happened — the Stanford/ADP employment findings\n\n> The first version of this research (August 2025, *Canaries in the Coal Mine?*) reported a **13% relative decline** in employment for 22–25-year-olds in the most AI-exposed jobs. The figures below are the updated series in your notes.')
out = 'export default ' + json.dumps(groups, ensure_ascii=False, indent=1) + ';\n'
(ROOT / 'src/content/business-p1/topics-data.js').write_text('// Generated by scripts/build-topics.py from the 2026 topic briefs. Edit the briefs, then re-run.\n' + out)
for g in groups:
    print(g['id'], len(g['topics']), [t['title'][:40] for t in g['topics']], 'extra:', len(g['extra']))
