import { computed } from "vue";
import { useRoute, type RouteLocationRaw } from "vue-router";
import { english } from "./en";

export type Locale = "zh" | "en";
export const isEnglishPath = (path: string) => /^\/en(?:\/|$)/.test(path);
export const basePath = (path: string) =>
  path.replace(/^\/en(?=\/|$)/, "") || "/";
export function localizedPath(path: string, locale: Locale) {
  const base = basePath(path).replace(/\/?$/, "/");
  return locale === "en" ? "/en" + (base === "/" ? "/" : base) : base;
}
export function translate(text: string, locale: Locale): string {
  if (locale === "zh") return text;
  return english[text] ?? text;
}
export function useLocale() {
  const route = useRoute();
  const locale = computed<Locale>(() =>
    isEnglishPath(route.path) ? "en" : "zh",
  );
  const t = (text: string) => translate(text, locale.value);
  const localizeTo = (to: RouteLocationRaw): RouteLocationRaw => {
    if (typeof to === "string") return localizedPath(to, locale.value);
    if ("path" in to && to.path)
      return { ...to, path: localizedPath(to.path, locale.value) };
    return to;
  };
  return { locale, t, localizeTo };
}
