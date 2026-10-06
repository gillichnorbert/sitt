import { SEO_PAGES } from './src/app/seo/pages';
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  server.use((req, res, next) => {
    if (req.path === '/kezdolap' || req.path === '/kezdolap/') { res.redirect(301, '/' + (req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '')); return; }
    if (req.path !== '/' && req.path.endsWith('/')) {
      res.redirect(301, req.path.replace(/\/+$/, '').replace(/^\/+/, '/') + (req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '')); return;
    }
    next();
  });

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
    setHeaders: (res, file) => { if (!/[-.][A-Z0-9]{8,}\.(js|css)$/i.test(file)) res.setHeader('Cache-Control', 'public, max-age=3600'); },
  }));

  // All regular routes use the Angular engine
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => {
        const exists = Object.prototype.hasOwnProperty.call(SEO_PAGES, req.path.replace(/^\/+|\/+$/g, ''));
        res.status(exists ? 200 : 404).set('Cache-Control', 'no-cache').send(html);
      })
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
