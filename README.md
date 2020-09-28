# shleewhite.com

This site extends the LitElement JS starter.

## Dev Server

Uses open-wc's [es-dev-server](https://github.com/open-wc/open-wc/tree/master/packages/es-dev-server) for previewing the project without additional build steps.

```bash
npm run serve
```

See dev page at http://localhost:8000/dev/index.html.

## Static Site

Uses the [eleventy](11ty.dev) static site generator and the templates and pages in `/docs-src` to generate the actual website. The site is generated to `/docs` and intended to be checked in so that GitHub pages can serve the site.

To build the site, run:

```bash
npm run docs
```

To serve the site locally, run:

```bash
npm run docs:serve
```

To watch the site files, and re-build automatically, run:

```bash
npm run docs:watch
```
