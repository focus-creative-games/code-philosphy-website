import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");
const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
});
const origin = "https://code-philosophy.com";
const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const canonicalPath = (route) =>
  route === "/" ? "/" : (route === "/bussiness" ? "/business" : route) + "/";
const manifest = JSON.parse(
  await readFile(path.join(dist, ".vite", "manifest.json"), "utf8"),
);

try {
  const { default: App } = await server.ssrLoadModule("/src/App.vue");
  const { default: router } = await server.ssrLoadModule(
    "/src/router/index.ts",
  );
  const { products } = await server.ssrLoadModule("/src/data/products.ts");
  const routes = [
    "/",
    ...products.map((product) => "/" + product.id),
    "/business",
    "/bussiness",
    "/luatier",
  ];

  for (const route of routes) {
    await router.push(route);
    await router.isReady();
    const app = createSSRApp(App);
    app.use(router);
    const body = await renderToString(app);
    const product = products.find((product) => "/" + product.id === route);
    const title = product
      ? `${product.name} · ${product.category} | Code Philosophy`
      : route.includes("business") || route === "/bussiness"
        ? "商务咨询 | Code Philosophy 代码哲学"
        : route === "/luatier"
          ? "LuaTier | Code Philosophy 代码哲学"
          : "Code Philosophy 代码哲学 — 为游戏研发，构建可靠的技术底座";
    const description =
      product?.description ||
      "Code Philosophy（代码哲学）专注游戏行业的深度技术解决方案。探索 HybridCLR、Luban、LeanCLR、Obfuz、zlua 与 ZenTS。";
    const url = origin + canonicalPath(route);
    // Lazy-route CSS is normally injected by the client. Include it in the
    // static document too so the retained LuaTier page renders without JS.
    const routeEntry =
      manifest[
        route === "/luatier"
          ? "src/views/LuaTier.vue"
          : route.includes("business") || route === "/bussiness"
            ? "src/views/Business.vue"
            : "src/views/Product.vue"
      ];
    const styles = (routeEntry?.css || [])
      .map((href) => `<link rel="stylesheet" href="/${href}">`)
      .join("\n");
    const html = template
      .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
      .replace(
        /(<meta name="description" content=")[^"]*/,
        "$1" + escapeHtml(description),
      )
      .replace(
        /(<meta property="og:title" content=")[^"]*/,
        "$1" + escapeHtml(title),
      )
      .replace(
        /(<meta property="og:description" content=")[^"]*/,
        "$1" + escapeHtml(description),
      )
      .replace(/(<meta property="og:url" content=")[^"]*/, "$1" + url)
      .replace(/(<link rel="canonical" href=")[^"]*/, "$1" + url)
      .replace("</head>", styles + "\n</head>")
      .replace('<div id="app"></div>', `<div id="app">${body}</div>`);
    const directory = path.join(dist, route.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), html);
    console.log(`Prerendered ${route}`);
  }

  const publicRoutes = routes.filter((route) => route !== "/bussiness");
  await writeFile(
    path.join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${publicRoutes.map((route) => `<url><loc>${origin}${canonicalPath(route)}</loc></url>`).join("")}</urlset>\n`,
  );
  await writeFile(
    path.join(dist, "robots.txt"),
    `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
  );
} finally {
  await server.close();
}
