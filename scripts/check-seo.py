"""Run after npm run build. Validates the actual pre-rendered output."""
from html.parser import HTMLParser
from pathlib import Path
import json
import re
import subprocess
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'dist/sitt-transport/browser'
ORIGIN = 'https://terramove.hu'
VOID_TAGS = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}


def text(node):
    return ' '.join(''.join(child if isinstance(child, str) else text(child) for child in node['children']).split())


def descendants(node, tag):
    result = []
    for child in node['children']:
        if isinstance(child, dict):
            if child['tag'] == tag:
                result.append(child)
            result.extend(descendants(child, tag))
    return result


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.nodes = []
        self.stack = []
        self.feed(html)
        self.tags = [(node['tag'], node['attrs']) for node in self.nodes]
        self.schema = [json.loads(text(node)) for node in self.nodes
                       if node['tag'] == 'script' and node['attrs'].get('type') == 'application/ld+json']

    def handle_starttag(self, tag, attrs):
        node = {'tag': tag, 'attrs': dict(attrs), 'children': []}
        self.nodes.append(node)
        if self.stack:
            self.stack[-1]['children'].append(node)
        if tag not in VOID_TAGS:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index]['tag'] == tag:
                del self.stack[index:]
                break

    def handle_data(self, data):
        if self.stack:
            self.stack[-1]['children'].append(data)

    def values(self, tag, key, value):
        return [attrs for name, attrs in self.tags if name == tag and attrs.get(key) == value]


def has_type(node, name):
    types = node.get('@type', [])
    return name in ([types] if isinstance(types, str) else types)


def sitemap_urls(file):
    return [el.text for el in ET.parse(file).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]


# Read the content model with the project's existing TypeScript compiler. Only
# structural counts are used: the check does not freeze article copy or CSS.
posts = json.loads(subprocess.check_output(['node', '--input-type=module', '-e', """
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
const source = readFileSync('src/app/blog/blog-posts.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
const module = { exports: {} };
runInNewContext(compiled.outputText, { module, exports: module.exports });
process.stdout.write(JSON.stringify(module.exports.BLOG_POSTS.map(post => ({
  slug: post.slug,
  sections: post.sections.map(section => ({ paragraphs: section.paragraphs.length, items: section.items?.length ?? 0 }))
}))));
"""], cwd=ROOT, text=True))
assert len(posts) == 4 and len({post['slug'] for post in posts}) == 4, 'Expected four distinct blog articles'
assert all(re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', post['slug']) for post in posts), 'Invalid blog slug'
posts_by_url = {ORIGIN + '/blog/' + post['slug']: post for post in posts}
expected_urls = {ORIGIN + path for path in [
    '/', '/szolgaltatasok', '/szolgaltatasok/sittszallitas',
    '/szolgaltatasok/aruszallitas', '/szolgaltatasok/foldmunka', '/araink', '/galeria', '/blog'
]} | set(posts_by_url)
urls = sitemap_urls(ROOT / 'public/sitemap.xml')
assert len(urls) == 12 and set(urls) == expected_urls, 'Sitemap must contain the original pages, blog index and four model articles exactly once'
built_urls = sitemap_urls(OUT / 'sitemap.xml')
assert len(built_urls) == len(urls) and set(built_urls) == set(urls), 'Built sitemap differs from source'
titles = set()
descriptions = set()
headings = set()
for url in urls:
    route = url.removeprefix(ORIGIN + '/')
    file = OUT / route / 'index.html'
    assert file.exists(), f'Missing prerender: {route}'
    html = file.read_text()
    page = Page(html)
    h1 = [node for node in page.nodes if node['tag'] == 'h1' or
          (node['attrs'].get('role') == 'heading' and node['attrs'].get('aria-level') == '1')]
    assert len(h1) == 1 and text(h1[0]), f'H1: {route}'
    heading = text(h1[0])
    if url == ORIGIN + '/blog' or url in posts_by_url:
        assert heading not in headings, f'Duplicate blog H1: {route}'
        headings.add(heading)
    canonical = page.values('link', 'rel', 'canonical')
    assert len(canonical) == 1 and canonical[0].get('href') == url, f'Canonical: {route}'
    description = page.values('meta', 'name', 'description')
    assert len(description) == 1 and description[0].get('content', '').strip(), f'Missing description: {route}'
    assert description[0]['content'] not in descriptions, f'Duplicate description: {route}'
    descriptions.add(description[0]['content'])
    title_nodes = [node for node in page.nodes if node['tag'] == 'title']
    assert len(title_nodes) == 1 and text(title_nodes[0]), f'Title: {route}'
    title = text(title_nodes[0])
    assert title not in titles, f'Duplicate title: {route}'
    titles.add(title)
    assert page.values('meta', 'property', 'og:url')[0]['content'] == url
    assert page.values('meta', 'name', 'twitter:card')[0]['content'] == 'summary_large_image'
    robots = page.values('meta', 'name', 'robots')
    assert len(robots) == 1 and 'noindex' not in robots[0].get('content', '').lower(), f'Not indexable: {route}'
    assert len(page.schema) == 1 and page.schema[0]['@graph'], f'JSON-LD graph: {route}'
    graph = page.schema[0]['@graph']
    nodes_by_id = {node['@id']: node for node in graph if '@id' in node}
    image = page.values('meta', 'property', 'og:image')[0]['content'].removeprefix(ORIGIN + '/')
    assert (OUT / image).exists(), f'Missing social image: {image}'
    for tag, attrs in page.tags:
        href = attrs.get('href', '').split('#')[0].split('?')[0]
        if tag == 'a' and href.startswith('/') and not href.startswith('//'):
            assert ORIGIN + href in urls, f'Broken internal link: {href}'

    if url in posts_by_url:
        articles = [node for node in page.nodes if node['tag'] == 'article']
        assert len(articles) == 1, f'Missing rendered article: {route}'
        sections = [section for section in descendants(articles[0], 'section')
                    if descendants(section, 'h2') and descendants(section, 'p')]
        expected_sections = posts_by_url[url]['sections']
        assert expected_sections and len(sections) == len(expected_sections), f'Incomplete article sections: {route}'
        for section, expected in zip(sections, expected_sections):
            assert all(text(node) for node in descendants(section, 'h2')), f'Empty section heading: {route}'
            paragraphs = descendants(section, 'p')
            items = descendants(section, 'li')
            assert len(paragraphs) == expected['paragraphs'] and all(text(node) for node in paragraphs), f'Incomplete paragraphs: {route}'
            assert len(items) == expected['items'] and all(text(node) for node in items), f'Incomplete list items: {route}'
        postings = [node for node in graph if has_type(node, 'BlogPosting')]
        assert len(postings) == 1, f'BlogPosting: {route}'
        posting = postings[0]
        assert posting.get('headline') == heading, f'BlogPosting headline must match H1: {route}'
        organizations = [node for node in graph if has_type(node, 'Organization') and
                         node.get('name') == 'TerraMove' and node.get('url') == ORIGIN + '/']
        assert len(organizations) == 1, f'Main TerraMove organization: {route}'
        assert organizations[0].get('@id'), f'Main organization identifier: {route}'
        author = posting.get('author', {})
        assert isinstance(author, dict) and author.get('@id') == organizations[0].get('@id'), f'BlogPosting author: {route}'
        resolved_author = {**nodes_by_id.get(author.get('@id'), {}), **author}
        assert has_type(resolved_author, 'Organization') and resolved_author.get('name') == 'TerraMove', f'BlogPosting organization author: {route}'
        entity = posting.get('mainEntityOfPage', {})
        if isinstance(entity, dict):
            entity = {**nodes_by_id.get(entity.get('@id'), {}), **entity}
            entity_url = entity.get('url', entity.get('@id', ''))
        else:
            entity_url = entity
        assert isinstance(entity_url, str) and entity_url.split('#')[0] == url, f'BlogPosting mainEntityOfPage: {route}'

    if url == ORIGIN + '/blog':
        lists = [node for node in graph if has_type(node, 'ItemList')]
        assert len(lists) == 1, 'Blog index ItemList'
        entries = lists[0].get('itemListElement', [])
        assert len(entries) == len(posts) and {entry.get('position') for entry in entries} == set(range(1, len(posts) + 1)), 'Blog index list positions'
        entry_urls = []
        for entry in entries:
            assert has_type(entry, 'ListItem') and entry.get('name', '').strip(), 'Blog index ListItem'
            item = entry.get('url', entry.get('item', ''))
            entry_urls.append(item.get('url', item.get('@id')) if isinstance(item, dict) else item)
        assert set(entry_urls) == set(posts_by_url), 'Blog index must list all article URLs'
    print('PASS', url)
print(f'OK: {len(urls)} pages; unique titles/descriptions, one H1 per page, unique blog H1, indexable canonicals, metadata, schema, social assets and internal links.')
print('OK: four complete prerendered articles, BlogPosting author/headline/page references and blog index ItemList.')

# Retired pages must not ship as pre-rendered HTML, JS chunks, or public links.
assert not (OUT / 'kalkulator').exists()
assert not (OUT / 'tudastar').exists()
assert not list(OUT.glob('*calculator*')) and not list(OUT.glob('*guides*'))
for file in OUT.rglob('*.html'):
    assert not re.search(r'href=["\']/((kalkulator|tudastar))', file.read_text()), str(file)
for file in OUT.glob('*.js'):
    assert 'app-calculator' not in file.read_text(), str(file)
print('OK: no public calculator/knowledge-base pages, links or calculator component bundle.')
