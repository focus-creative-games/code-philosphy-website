<script setup lang="ts">
import { useLocale } from "../i18n";
import LocaleLink from "../components/LocaleLink.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import RuntimeDiagram from "../components/RuntimeDiagram.vue";
import { products, githubUrl } from "../data/products";
const { t } = useLocale();

const route = useRoute();
const product = computed(() =>
  products.find((p) => p.id === route.meta.productId)!,
);
const related = computed(() =>
  products.filter((p) => p.id !== product.value.id).slice(0, 3),
);
const editions = [
  {
    name: "社区版",
    label: "OPEN SOURCE",
    text: "从原生 C# 热更新开始，评估并集成到你的 Unity 项目。",
    link: "https://github.com/focus-creative-games/hybridclr",
    action: "查看开源项目",
  },
  {
    name: "专业版",
    label: "PROFESSIONAL",
    text: "面向对解释性能、元数据优化与代码加固有进一步要求的项目。",
    link: "https://www.hybridclr.cn/docs/business",
    action: "了解专业能力",
  },
  {
    name: "旗舰版",
    label: "FLAGSHIP / DHE",
    text: "通过 DHE 差分混合执行技术，满足更高的运行性能需求。",
    link: "https://www.hybridclr.cn/docs/business/differentialhybridexecution",
    action: "了解 DHE 技术",
  },
  {
    name: "热重载版",
    label: "HOT RELOAD",
    text: "面向需要卸载与重新加载程序集的项目，扩展运行时管理能力。",
    link: "https://www.hybridclr.cn/docs/business/reload/hotreloadassembly",
    action: "了解热重载",
  },
];
</script>
<template>
  <div class="product-page" :style="{ '--product-color': product.color }">
    <section class="product-hero">
      <div class="container">
        <div class="breadcrumb">
          <LocaleLink to="/">{{ t("首页") }}</LocaleLink
          ><span>/</span
          ><LocaleLink :to="{ path: '/', hash: '#products' }">{{
            t("技术产品")
          }}</LocaleLink
          ><span>/</span><span>{{ product.name }}</span>
        </div>
        <div class="product-hero-grid">
          <div>
            <div class="product-kicker">
              <span class="product-mark">{{ product.mark }}</span
              ><span
                >{{ product.name
                }}<small>{{ t(product.category) }}</small></span
              ><span v-if="product.id === 'hybridclr'" class="flagship-badge">{{
                t("旗舰产品")
              }}</span>
            </div>
            <h1>{{ t(product.headline) }}</h1>
            <p class="product-description">{{ t(product.description) }}</p>
            <div class="tag-row">
              <span v-for="tag in product.tags" :key="t(tag)">{{
                t(tag)
              }}</span>
            </div>
            <div class="button-row">
              <a
                class="button button-primary"
                :href="product.docs"
                target="_blank"
                rel="noopener noreferrer"
                >{{ t("阅读官方文档") }}<span>↗</span></a
              ><a
                class="button button-outline"
                :href="githubUrl(product)"
                target="_blank"
                rel="noopener noreferrer"
                >{{ t("GitHub 源码") }}<span>↗</span></a
              >
            </div>
          </div>
          <RuntimeDiagram v-if="product.id === 'hybridclr'" />
          <div v-else class="product-code-visual">
            <div class="window-bar">
              <span><i></i><i></i><i></i></span
              ><span>{{ t(product.codeLabel) }}</span>
            </div>
            <pre><code>{{ t(product.code) }}</code></pre>
            <div class="code-window-footer">
              <span><i class="status-dot"></i> {{ product.name }}</span
              ><span>{{ t("概念示意 · 接入请查阅文档") }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="product-usecase">
      <div class="container">
        <span class="eyebrow">DESIGNED FOR</span>
        <p>{{ t(product.useCase) }}</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-heading-row">
          <div>
            <div class="eyebrow">01 / CORE CAPABILITIES</div>
            <h2>{{ t("围绕真实需求，") }}<br />{{ t("打磨每一处能力。") }}</h2>
          </div>
          <a
            class="text-link"
            :href="product.docs"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t("完整技术文档 ↗") }}</a
          >
        </div>
        <div class="capability-grid">
          <article
            v-for="(feature, index) in product.features"
            :key="t(feature.title)"
          >
            <span class="feature-number">0{{ index + 1 }}</span>
            <h3>{{ t(feature.title) }}</h3>
            <p>{{ t(feature.text) }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="workflow-section section-dark">
      <div class="container">
        <div class="eyebrow light">02 / HOW IT FITS</div>
        <h2>{{ t("融入你的研发工作流。") }}</h2>
        <p>{{ t("从输入到运行，一条清晰的技术路径。") }}</p>
        <ol class="workflow-steps">
          <li v-for="(step, index) in product.steps" :key="t(step)">
            <span>0{{ index + 1 }}</span
            ><strong>{{ t(step) }}</strong
            ><i v-if="index < product.steps.length - 1" aria-hidden="true">→</i>
          </li>
        </ol>
        <small>{{
          t("产品工作流概念示意；具体配置与集成方式请参阅官方文档。")
        }}</small>
      </div>
    </section>
    <section v-if="product.id === 'hybridclr'" class="section editions-section">
      <div class="container">
        <div class="section-heading-row">
          <div>
            <div class="eyebrow">03 / EDITIONS</div>
            <h2>{{ t("从开源探索，") }}<br />{{ t("到商业级支持。") }}</h2>
          </div>
          <p class="section-intro">
            {{ t("根据项目需求选择合适的版本。") }}<br />{{
              t("完整功能、兼容范围与试用政策以官方说明为准。")
            }}
          </p>
        </div>
        <div class="edition-grid">
          <article v-for="edition in editions" :key="t(edition.name)">
            <span class="eyebrow">{{ edition.label }}</span>
            <h3>{{ t(edition.name) }}</h3>
            <p>{{ t(edition.text) }}</p>
            <a
              class="text-link"
              :href="edition.link"
              target="_blank"
              rel="noopener noreferrer"
              >{{ t(edition.action) }} ↗</a
            >
          </article>
        </div>
        <div class="edition-note">
          <span>{{
            t("商业版本试用、授权与计时技术支持，请联系商务团队。")
          }}</span
          ><LocaleLink to="/business" class="text-link">{{
            t("咨询商业服务 ↗")
          }}</LocaleLink>
        </div>
      </div>
    </section>
    <section class="section getting-started">
      <div class="container getting-started-grid">
        <div>
          <div class="eyebrow">
            {{ product.id === "hybridclr" ? "04" : "03" }} / GET STARTED
          </div>
          <h2>{{ t("从这里，开始使用") }}<br />{{ product.name }}</h2>
          <p>{{ t("先了解，再验证，最后融入你的项目。") }}</p>
        </div>
        <div class="start-links">
          <a :href="product.docs" target="_blank" rel="noopener noreferrer"
            ><span>01</span>
            <div>
              <strong>{{ t("阅读文档") }}</strong
              ><small>{{ t("了解安装流程、核心概念与兼容范围") }}</small>
            </div>
            <span>↗</span></a
          ><a
            :href="githubUrl(product)"
            target="_blank"
            rel="noopener noreferrer"
            ><span>02</span>
            <div>
              <strong>{{ t("探索源码") }}</strong
              ><small>{{ t("查看项目说明、版本发布与社区讨论") }}</small>
            </div>
            <span>↗</span></a
          ><LocaleLink
            :to="{ path: '/business', query: { product: product.name } }"
            ><span>03</span>
            <div>
              <strong>{{ t("交流项目需求") }}</strong
              ><small>{{ t("咨询商业版本、集成问题与技术支持") }}</small>
            </div>
            <span>↗</span></LocaleLink
          >
        </div>
      </div>
    </section>
    <section class="related-section">
      <div class="container">
        <div class="section-heading-row compact">
          <h2>{{ t("更多技术产品") }}</h2>
          <LocaleLink
            class="text-link"
            :to="{ path: '/', hash: '#products' }"
            >{{ t("查看全部产品 →") }}</LocaleLink
          >
        </div>
        <div class="related-grid">
          <LocaleLink v-for="p in related" :key="p.id" :to="'/' + p.id"
            ><span
              class="product-mark small"
              :style="{ '--product-color': p.color }"
              >{{ p.mark }}</span
            >
            <div>
              <strong>{{ p.name }}</strong
              ><small>{{ t(p.category) }}</small>
            </div>
            <span>↗</span></LocaleLink
          >
        </div>
      </div>
    </section>
  </div>
</template>
