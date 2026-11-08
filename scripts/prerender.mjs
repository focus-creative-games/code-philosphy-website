import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");
const manifest = JSON.parse(
  await readFile(path.join(dist, ".vite/manifest.json"), "utf8"),
);
const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const { default: App } = await server.ssrLoadModule("/src/App.vue");
  const { default: router } = await server.ssrLoadModule(
    "/src/router/index.ts",
  );
  const { products } = await server.ssrLoadModule("/src/data/products.ts");
  const { pageMetadata } = await server.ssrLoadModule("/src/i18n/metadata.ts");
  const { basePath } = await server.ssrLoadModule("/src/i18n/index.ts");
  const pages = [
    "/",
    ...products.map((product) => "/" + product.id),
    "/business",
    "/bussiness",
    "/luatier",
  ];
  const routes = pages.flatMap((page) => [
    page,
    "/en" + (page === "/" ? "/" : page),
  ]);

  for (const route of routes) {
    await router.push(route);
    await router.isReady();
    const app = createSSRApp(App);
    app.use(router);
    const body = await renderToString(app);
    const meta = pageMetadata(route);
    const base = basePath(route);
    const entry =
      manifest[
        base === "/luatier"
          ? "src/views/LuaTier.vue"
          : base === "/business" || base === "/bussiness"
            ? "src/views/Business.vue"
            : "src/views/Product.vue"
      ];
    const styles = (entry?.css || [])
      .map((href) => `<link rel="stylesheet" href="/${href}">`)
      .join("\n");
    // Match whitespace as well: source HTML may be formatted across lines.
    const setMeta = (html, attribute, key, value) =>
      html.replace(
        new RegExp(`(<meta\\s+${attribute}="${key}"\\s+content=")[^"]*`),
        "$1" + escapeHtml(value),
      );
    let html = template
      .replace(/<html lang="[^"]*"/, `<html lang="${meta.lang}"`)
      .replace(
        /<title>[^<]*<\/title>/,
        `<title>${escapeHtml(meta.title)}</title>`,
      )
      .replace(/(<link rel="canonical" href=")[^"]*/, "$1" + meta.url);
    for (const [attribute, key, value] of [
      ["name", "description", meta.description],
      ["property", "og:title", meta.title],
      ["property", "og:description", meta.description],
      ["property", "og:url", meta.url],
      ["property", "og:locale", meta.ogLocale],
    ])
      html = setMeta(html, attribute, key, value);
    for (const [language, url] of [
      ["zh-Hans", meta.zhUrl],
      ["en", meta.enUrl],
      ["x-default", meta.zhUrl],
    ]) {
      html = html.replace(
        new RegExp(
          `(<link\\s+rel="alternate"\\s+hreflang="${language}"\\s+href=")[^"]*`,
        ),
        "$1" + url,
      );
    }
    html = html
      .replace("</head>", styles + "\n</head>")
      .replace(
        '<div id="app"></div>',
        `<div id="app" data-page-path="${route}">${body}</div>`,
      );
    const directory = path.join(dist, route.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), html);
    console.log(`Prerendered ${route}`);
  }
  const urls = routes
    .filter((route) => !route.endsWith("/bussiness"))
    .map((route) => {
      const meta = pageMetadata(route);
      return `<url><loc>${meta.url}</loc><xhtml:link rel="alternate" hreflang="zh-Hans" href="${meta.zhUrl}"/><xhtml:link rel="alternate" hreflang="en" href="${meta.enUrl}"/></url>`;
    });
  await writeFile(
    path.join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join("")}</urlset>\n`,
  );
  await writeFile(
    path.join(dist, "robots.txt"),
    "User-agent: *\nAllow: /\nSitemap: https://code-philosophy.com/sitemap.xml\n",
  );
} finally {
  await server.close();
}
