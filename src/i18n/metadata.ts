import { products } from "../data/products";
import { basePath, isEnglishPath, localizedPath, translate } from "./index";

export function pageMetadata(path: string) {
  const locale = isEnglishPath(path) ? "en" : "zh";
  let base = basePath(path).replace(/\/$/, "") || "/";
  if (base === "/bussiness") base = "/business";
  const product = products.find((p) => "/" + p.id === base);
  const description = product
    ? translate(product.description, locale)
    : locale === "en"
      ? "Code Philosophy builds deep technology solutions for game development. Explore HybridCLR, Luban, LeanCLR, Obfuz, zlua and ZenTS."
      : "Code Philosophy（代码哲学）专注游戏行业的深度技术解决方案。探索 HybridCLR、Luban、LeanCLR、Obfuz、zlua 与 ZenTS。";
  const title = product
    ? `${product.name} · ${translate(product.category, locale)} | Code Philosophy`
    : base === "/business"
      ? locale === "en"
        ? "Contact sales | Code Philosophy"
        : "商务咨询 | Code Philosophy 代码哲学"
      : base === "/luatier"
        ? "LuaTier | Code Philosophy"
        : locale === "en"
          ? "Code Philosophy — Engineering the foundations of play"
          : "Code Philosophy 代码哲学 — 为游戏研发，构建可靠的技术底座";
  const origin = "https://code-philosophy.com";
  const urlFor = (lang: "zh" | "en") =>
    origin + localizedPath(base, lang).replace(/\/?$/, "/");
  return {
    locale,
    title,
    description,
    lang: locale === "en" ? "en" : "zh-Hans",
    ogLocale: locale === "en" ? "en_US" : "zh_CN",
    url: urlFor(locale),
    zhUrl: urlFor("zh"),
    enUrl: urlFor("en"),
  };
}
