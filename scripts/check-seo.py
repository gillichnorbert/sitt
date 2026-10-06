"""Run after npm run build. Validates the actual pre-rendered output."""
from html.parser import HTMLParser
from pathlib import Path
import json, xml.etree.ElementTree as ET
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'dist/sitt-transport/browser'
class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(); self.tags=[]; self.schema=[]; self.capture=False; self.feed(html)
    def handle_starttag(self, tag, attrs):
        attrs=dict(attrs); self.tags.append((tag,attrs))
        if tag=='script' and attrs.get('type')=='application/ld+json': self.capture=True
    def handle_endtag(self, tag):
        if tag=='script': self.capture=False
    def handle_data(self, data):
        if self.capture: self.schema.append(json.loads(data))
    def values(self, tag, key, value):
        return [attrs for name,attrs in self.tags if name==tag and attrs.get(key)==value]
urls=[el.text for el in ET.parse(ROOT/'public/sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
titles=set(); descriptions=set()
for url in urls:
    route=url.removeprefix('https://terramove.hu/'); file=OUT/route/'index.html'
    assert file.exists(), f'Missing prerender: {route}'
    html=file.read_text(); page=Page(html)
    assert len([t for t,a in page.tags if t=='h1' or (a.get('role')=='heading' and a.get('aria-level')=='1')])==1, f'H1: {route}'
    canonical=page.values('link','rel','canonical'); assert len(canonical)==1 and canonical[0]['href']==url, f'Canonical: {route}'
    description=page.values('meta','name','description'); assert len(description)==1 and description[0]['content'] not in descriptions, f'Description: {route}'
    descriptions.add(description[0]['content'])
    import re
    title=re.search(r'<title>(.*?)</title>',html).group(1); assert title not in titles; titles.add(title)
    assert page.values('meta','property','og:url')[0]['content']==url
    assert page.values('meta','name','twitter:card')[0]['content']=='summary_large_image'
    assert 'noindex' not in page.values('meta','name','robots')[0]['content']
    assert len(page.schema)==1 and page.schema[0]['@graph']
    image=page.values('meta','property','og:image')[0]['content'].removeprefix('https://terramove.hu/')
    assert (OUT/image).exists(), f'Missing social image: {image}'
    for tag,attrs in page.tags:
        href=attrs.get('href','').split('#')[0].split('?')[0]
        if tag=='a' and href.startswith('/') and not href.startswith('//'):
            assert 'https://terramove.hu'+href in urls, f'Broken internal link: {href}'
    print('PASS',url)
print(f'OK: {len(urls)} pages; unique titles/descriptions, canonical, H1, metadata, schema, social assets and internal links.')

# Retired pages must not ship as pre-rendered HTML, JS chunks, or public links.
assert not (OUT/'kalkulator').exists()
assert not (OUT/'tudastar').exists()
assert not list(OUT.glob('*calculator*')) and not list(OUT.glob('*guides*'))
for file in OUT.rglob('*.html'):
    content=file.read_text()
    assert not re.search(r'href=["\']/((kalkulator|tudastar))',content), str(file)
for file in OUT.glob('*.js'):
    assert 'app-calculator' not in file.read_text(), str(file)
print('OK: no public calculator/knowledge-base pages, links or calculator component bundle.')
