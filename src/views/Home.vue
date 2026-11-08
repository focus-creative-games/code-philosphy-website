<script setup lang="ts">
import { ref, computed } from "vue";
import RuntimeDiagram from "../components/RuntimeDiagram.vue";
import { products, githubUrl } from "../data/products";
const categories = [
  "全部产品",
  "运行时与热更新",
  "游戏配置",
  "代码保护",
  "脚本方案",
];
const selected = ref("全部产品");
const visibleProducts = computed(() =>
  products.filter(
    (p) =>
      selected.value === "全部产品" ||
      (selected.value === "运行时与热更新" &&
        ["hybridclr", "leanclr"].includes(p.id)) ||
      (selected.value === "游戏配置" && p.id === "luban") ||
      (selected.value === "代码保护" && p.id === "obfuz") ||
      (selected.value === "脚本方案" && ["zlua", "zents"].includes(p.id)),
  ),
);
const users = [
  { file: "tencent.png", name: "腾讯游戏" },
  { file: "netease.png", name: "网易" },
  { file: "lilith.png", name: "莉莉丝游戏" },
  { file: "wanmei.jpg", name: "完美世界" },
  { file: "youzu.png", name: "游族网络" },
  { file: "juren.jpg", name: "巨人网络" },
];
const scenarios = [
  {
    num: "01",
    title: "保留 C# 体验，灵活更新游戏",
    text: "在熟悉的 Unity 开发流程中，为持续迭代的游戏接入原生 C# 热更新。",
    ids: ["hybridclr"],
  },
  {
    num: "02",
    title: "让配置成为可靠的生产流程",
    text: "连接策划与程序，让配置定义、数据校验和代码生成形成完整闭环。",
    ids: ["luban"],
  },
  {
    num: "03",
    title: "为 C# 探索更广的运行边界",
    text: "面向跨平台发布与运行时集成，为 C# 应用选择合适的技术底座。",
    ids: ["leanclr"],
  },
  {
    num: "04",
    title: "选择适合团队的脚本语言",
    text: "通过 Lua 或 TypeScript 编写游戏逻辑，连接 Unity 与团队熟悉的工具链。",
    ids: ["zlua", "zents"],
  },
  {
    num: "05",
    title: "把代码保护纳入发布流程",
    text: "在构建阶段加入代码混淆，让代码保护与游戏开发、热更新流程协同工作。",
    ids: ["obfuz"],
  },
];
</script>
<template>
  <section class="home-hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <div class="eyebrow">
          <span class="eyebrow-line"></span> ENGINEERING THE FOUNDATIONS OF PLAY
        </div>
        <h1>为游戏研发，<br />构建可靠的<br /><span>技术底座。</span></h1>
        <p class="hero-description">
          从原生 C# 热更新到跨平台运行时，<br
            class="desktop-break"
          />以深度技术，让每一份创造力自由生长。
        </p>
        <div class="button-row">
          <router-link
            class="button button-primary"
            :to="{ path: '/', hash: '#products' }"
            >探索技术产品 <span>↓</span></router-link
          ><router-link class="button button-quiet" to="/hybridclr"
            >了解 HybridCLR <span>↗</span></router-link
          >
        </div>
        <div class="hero-footnote">
          <span class="status-dot"></span> 专注游戏行业的深度技术解决方案
        </div>
      </div>
      <div class="hero-art">
        <div class="art-coordinates">
          CP / ENGINEERING SYSTEMS <span>BUILT FOR DEVELOPERS</span>
        </div>
        <RuntimeDiagram />
        <div class="art-caption">
          <span>从代码，到无限可能。</span><span>CODE → PLAY</span>
        </div>
      </div>
    </div>
    <div class="container hero-index">
      <span>01 — 技术驱动创造</span
      ><span
        >C# RUNTIME &nbsp; / &nbsp; GAME CONFIG &nbsp; / &nbsp; SCRIPTING</span
      ><span>SCROLL TO EXPLORE ↓</span>
    </div>
  </section>
  <section class="trusted-section" aria-labelledby="trusted-title">
    <div class="container">
      <div class="trusted-heading">
        <p id="trusted-title">与众多游戏研发团队，一同构建更多可能</p>
        <span>精选产品使用方</span>
      </div>
      <div class="customer-logos">
        <div v-for="user in users" :key="user.file">
          <img
            :src="'/images/logos/' + user.file"
            :alt="user.name"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="flagship-section section-dark">
    <div class="container flagship-grid">
      <div class="flagship-copy">
        <div class="eyebrow light">
          <span class="status-dot"></span> FLAGSHIP PRODUCT / 旗舰产品
        </div>
        <h2>
          HybridCLR<span>熟悉的 C#。<br />全新的可能。</span>
        </h2>
        <p>
          让 Unity 原生 C# 热更新成为日常。<br />沿用已有代码与开发习惯，把精力留给游戏本身。
        </p>
        <div class="flagship-tags">
          <span>原生 C#</span><span>Unity / IL2CPP</span><span>混合运行时</span>
        </div>
        <router-link to="/hybridclr" class="button button-white"
          >深入了解 HybridCLR <span>↗</span></router-link
        ><a
          class="dark-text-link"
          href="https://www.hybridclr.cn/docs/intro"
          target="_blank"
          rel="noopener noreferrer"
          >阅读技术文档 ↗</a
        >
      </div>
      <div class="flagship-visual">
        <div class="code-window">
          <div class="window-bar">
            <span><i></i><i></i><i></i></span><span>Game.Entry.cs</span
            ><span>C#</span>
          </div>
          <pre><span class="code-comment">// 一种语言，连接开发与运行。</span>
<span class="code-purple">using</span> System.Reflection;

<span class="code-comment">// 动态加载热更新程序集</span>
<span class="code-purple">var</span> assembly = Assembly.<span class="code-blue">Load</span>(dllBytes);
<span class="code-purple">var</span> entry = assembly.<span class="code-blue">GetType</span>(<span class="code-green">"Game.Entry"</span>);

<span class="code-comment">// 让新的游戏逻辑，即刻就位。</span>
entry.<span class="code-blue">GetMethod</span>(<span class="code-green">"Start"</span>)
     .<span class="code-blue">Invoke</span>(<span class="code-purple">null</span>, <span class="code-purple">null</span>);</pre>
          <div class="code-window-footer">
            <span><i class="status-dot"></i> 原生 C# 开发体验</span
            ><span>示意代码</span>
          </div>
        </div>
        <div class="flagship-bottom">
          <div>
            <span>01</span><strong>保留原生工作流</strong
            ><small>熟悉的工具与语言</small>
          </div>
          <div>
            <span>02</span><strong>动态加载程序集</strong
            ><small>AOT 与解释执行协作</small>
          </div>
          <div>
            <span>03</span><strong>面向项目持续迭代</strong
            ><small>社区与商业版本选择</small>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="products" class="section products-section">
    <div class="container">
      <div class="section-heading-row">
        <div>
          <div class="eyebrow">02 / OUR PRODUCTS</div>
          <h2>每一个难题，<br />都有扎实的技术回应。</h2>
        </div>
        <p class="section-intro">
          覆盖运行时、游戏配置、代码保护与脚本开发，<br />为游戏研发的关键环节提供可靠工具。
        </p>
      </div>
      <div class="product-filters" role="group" aria-label="筛选技术产品">
        <button
          v-for="category in categories"
          :key="category"
          :class="{ selected: selected === category }"
          :aria-pressed="selected === category"
          @click="selected = category"
        >
          {{ category }}</button
        ><span
          >{{ String(visibleProducts.length).padStart(2, "0") }} PRODUCTS</span
        >
      </div>
      <div class="product-catalog" aria-live="polite">
        <article
          v-for="p in visibleProducts"
          :key="p.id"
          class="catalog-card"
          :style="{ '--product-color': p.color }"
        >
          <div class="card-top">
            <span class="product-mark">{{ p.mark }}</span
            ><span class="card-category">{{ p.category }}</span
            ><span v-if="p.id === 'hybridclr'" class="flagship-badge"
              >旗舰</span
            >
          </div>
          <router-link :to="'/' + p.id" class="card-title-link"
            ><h3>{{ p.name }}</h3>
            <span>↗</span></router-link
          >
          <h4>{{ p.headline.replace("\n", " ") }}</h4>
          <p>{{ p.description }}</p>
          <div class="tag-row">
            <span v-for="tag in p.tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="card-actions">
            <router-link :to="'/' + p.id">产品详情 <span>→</span></router-link
            ><a
              :href="githubUrl(p)"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="p.name + ' GitHub 仓库'"
              >GitHub ↗</a
            >
          </div>
        </article>
      </div>
      <div class="catalog-footnote">
        <span>开放的代码，持续生长的技术。</span
        ><a
          class="text-link"
          href="https://github.com/focus-creative-games"
          target="_blank"
          rel="noopener noreferrer"
          >查看全部开源项目 ↗</a
        >
      </div>
    </div>
  </section>
  <section class="luban-section">
    <div class="container luban-grid">
      <div>
        <div class="eyebrow">SPOTLIGHT / LUBAN</div>
        <h2>从一张配置表，<br />到有序的游戏世界。</h2>
        <p>
          让策划专注内容，让程序专注逻辑。<br />Luban
          把配置生产中的复杂性，收进一条清晰的工作流。
        </p>
        <router-link to="/luban" class="text-link"
          >探索 Luban 配置方案 <span>↗</span></router-link
        >
      </div>
      <div
        class="pipeline-art"
        role="img"
        aria-label="Luban 配置工作流：编辑数据源、定义类型、校验生成、输出代码与数据"
      >
        <div class="pipeline-header">
          <span class="status-dot"></span> THE CONFIGURATION PIPELINE
          <span>LUBAN</span>
        </div>
        <div class="spreadsheet">
          <div class="sheet-row">
            <span></span><span>A</span><span>B</span><span>C</span>
          </div>
          <div class="sheet-row">
            <span>1</span><strong>id</strong><strong>name</strong
            ><strong>level</strong>
          </div>
          <div class="sheet-row">
            <span>2</span><span>1001</span><span>Warrior</span><span>10</span>
          </div>
          <div class="sheet-row">
            <span>3</span><span>1002</span><span>Mage</span><span>12</span>
          </div>
        </div>
        <div class="pipeline-flow">
          <span>定义类型</span><i>→</i><strong>校验 & 生成</strong><i>→</i
          ><span>代码 + 数据</span>
        </div>
        <div class="pipeline-output">
          <code>C# &nbsp; C++ &nbsp; Java &nbsp; Lua &nbsp; TypeScript</code
          ><span>一套配置 · 多端协作</span>
        </div>
      </div>
    </div>
  </section>
  <section id="solutions" class="section solutions-section">
    <div class="container solution-grid">
      <div class="solution-intro">
        <div class="eyebrow">03 / BUILT FOR YOUR WORKFLOW</div>
        <h2>从你的问题出发，<br />找到合适的产品。</h2>
        <p>
          技术选型，始于真实需求。<br />无论你正在搭建新项目，还是优化已有工作流。
        </p>
        <router-link to="/business" class="text-link"
          >和我们聊聊你的项目 ↗</router-link
        >
      </div>
      <div class="scenario-list">
        <article v-for="s in scenarios" :key="s.num" class="scenario">
          <span class="scenario-number">{{ s.num }}</span>
          <div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
            <div class="scenario-links">
              <router-link v-for="id in s.ids" :key="id" :to="'/' + id"
                >{{ products.find((p) => p.id === id)?.name }}
                <span>↗</span></router-link
              >
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
  <section id="developers" class="developer-section section-dark">
    <div class="container">
      <div class="section-heading-row">
        <div>
          <div class="eyebrow light">04 / DEVELOPER FIRST</div>
          <h2>从理解原理，<br />到写下第一行代码。</h2>
        </div>
        <p class="section-intro">
          源码、文档与示例，始终触手可及。<br />选择一个产品，开始你的技术探索。
        </p>
      </div>
      <div class="docs-grid">
        <a
          v-for="p in products"
          :key="p.id"
          :href="p.docs"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="doc-index">{{ p.category }}</span
          ><strong>{{ p.name }} <span>↗</span></strong
          ><span class="doc-bottom">阅读官方文档 <span>→</span></span></a
        >
      </div>
    </div>
  </section>
  <section id="about" class="section about-section">
    <div class="container about-grid">
      <div>
        <div class="eyebrow">05 / CODE PHILOSOPHY</div>
        <h2>深耕底层技术，<br />释放创造潜能。</h2>
      </div>
      <div>
        <p class="about-lead">
          我们相信，好的技术应该让复杂问题变得清晰，让开发者把时间留给真正的创造。
        </p>
        <p>
          Code
          Philosophy（代码哲学）专注游戏行业的深度技术解决方案。从运行时到研发工具，我们持续打磨产品，帮助游戏团队构建可靠、高效、可持续演进的技术体系。
        </p>
        <div class="about-values">
          <span>工程深度</span><span>开发者体验</span><span>长期价值</span>
        </div>
      </div>
    </div>
  </section>
  <section class="contact-banner">
    <div class="container contact-banner-inner">
      <div>
        <div class="eyebrow">LET’S BUILD SOMETHING GREAT</div>
        <h2>下一个技术难题，<br />一起解决。</h2>
        <p>商业版本、技术支持与项目合作，欢迎与我们交流。</p>
      </div>
      <router-link to="/business" class="button button-primary"
        >联系 Code Philosophy <span>↗</span></router-link
      >
    </div>
  </section>
</template>
