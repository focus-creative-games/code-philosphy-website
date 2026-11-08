<script setup lang="ts">
import { useLocale } from "../i18n";
import LocaleLink from "../components/LocaleLink.vue";
import { products } from "../data/products";
const { t } = useLocale();

const year = new Date().getFullYear();
</script>
<template>
  <footer class="site-footer">
    <div class="container footer-main">
      <div class="footer-intro">
        <LocaleLink to="/" class="brand"
          ><span class="brand-symbol" aria-hidden="true"
            >c<span>p</span><i></i></span
          ><span class="brand-name"
            >Code Philosophy<span>{{ t("代码哲学") }}</span></span
          ></LocaleLink
        >
        <p>
          {{ t("深耕底层技术，释放创造潜能。") }}<br />{{
            t("让开发者专注于创造更有乐趣的游戏。")
          }}
        </p>
        <a
          class="text-link"
          href="https://github.com/focus-creative-games"
          target="_blank"
          rel="noopener noreferrer"
          >Find us on GitHub <span>↗</span></a
        >
      </div>
      <div class="footer-col">
        <h3>{{ t("技术产品") }}</h3>
        <LocaleLink v-for="p in products" :key="p.id" :to="'/' + p.id">{{
          p.name
        }}</LocaleLink>
      </div>
      <div class="footer-col">
        <h3>{{ t("开发者资源") }}</h3>
        <a
          v-for="p in products"
          :key="p.id"
          :href="p.docs"
          target="_blank"
          rel="noopener noreferrer"
          >{{ p.name }}{{ t("文档 ↗") }}</a
        >
      </div>
      <div class="footer-col">
        <h3>{{ t("与我们联系") }}</h3>
        <LocaleLink to="/business">{{ t("商业版本与技术支持") }}</LocaleLink
        ><a href="mailto:business@code-philosophy.com">{{ t("商务邮箱 ↗") }}</a
        ><LocaleLink to="/luatier">{{ t("更多项目：LuaTier ↗") }}</LocaleLink
        ><span class="footer-note"
          >{{ t("为游戏研发提供") }}<br />{{ t("长期可靠的技术支持。") }}</span
        >
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© {{ year }}&nbsp;{{ t("Code Philosophy. 代码哲学") }}</span
      ><span>Built for developers. Designed for games.</span
      ><a
        href="https://beian.miit.gov.cn/#/Integrated/index"
        target="_blank"
        rel="noopener noreferrer"
        >{{ t("京ICP备2023010608号-2") }}</a
      >
    </div>
  </footer>
</template>
