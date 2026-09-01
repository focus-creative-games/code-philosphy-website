<template>
  <div class="zents-page">
    <section class="page-hero">
      <div class="page-hero-glow glow-1"></div>
      <div class="page-hero-glow glow-2"></div>
      <div class="page-hero-content fade-in-up">
        <div class="hero-badge hero-badge-cyan">Unity TypeScript 方案</div>
        <h1 class="hero-title gradient-text">ZenTS</h1>
        <p class="hero-subtitle">为 IL2CPP 极致优化的现代 Unity TypeScript / JavaScript 方案</p>
        <p class="hero-desc">由 QuickJS 驱动，设计与 ZLua 对齐。零 Wrap 白名单，官方 TypeScript 工作流，运行时只执行 emit 后的 JS。</p>

        <div class="hero-stats">
          <div class="stat-card glass-card">
            <div class="stat-number">QuickJS</div>
            <div class="stat-label">脚本虚拟机</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">零配置</div>
            <div class="stat-label">懒绑定 C# 类型</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">TS 一等</div>
            <div class="stat-label">官方工作流</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">MIT</div>
            <div class="stat-label">开源协议</div>
          </div>
        </div>

        <div class="hero-cta">
          <a href="https://zents.code-philosophy.com/" target="_blank" rel="noopener" class="btn-glow btn-glow-primary">官方文档</a>
          <a href="https://github.com/focus-creative-games/zen-ts" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">GitHub</a>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">核心特性</h2>
        <p class="section-desc">相对 Puerts / 手写 QuickJS 绑定，ZenTS 把互操作、工作流和 Il2Cpp 热路径收成同一套产品。</p>
        <div class="features-grid">
          <div class="feature-card glass-card" v-for="f in features" :key="f.title">
            <div class="feature-icon">{{ f.icon }}</div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="table-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">与 ZLua 对齐</h2>
        <p class="section-desc">业务侧 API 形态刻意一致：会用 ZLua，即可很快上手 ZenTS。</p>
        <div class="data-table glass-card">
          <div class="dt-row dt-header cols-3">
            <div class="dt-cell">能力</div>
            <div class="dt-cell">ZLua</div>
            <div class="dt-cell">ZenTS</div>
          </div>
          <div class="dt-row cols-3" v-for="row in vsZlua" :key="row.cap">
            <div class="dt-cell">{{ row.cap }}</div>
            <div class="dt-cell">{{ row.zlua }}</div>
            <div class="dt-cell">{{ row.zents }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="tags-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">平台与版本</h2>
        <p class="section-desc">Editor Mono + Player Il2Cpp；运行时只加载 ES module。</p>
        <div class="tag-list">
          <span class="tag-item" v-for="t in platforms" :key="t">{{ t }}</span>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="section-inner fade-in-up" style="text-align: center;">
        <h2 class="section-heading">开始使用 ZenTS</h2>
        <p class="section-desc">可用纯 JavaScript，或走官方 TypeScript 工程（TsProject）。</p>
        <div class="cta-buttons">
          <a href="https://zents.code-philosophy.com/" target="_blank" rel="noopener" class="btn-glow btn-glow-primary">阅读文档</a>
          <a href="https://github.com/focus-creative-games/zen-ts" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">GitHub 仓库</a>
          <router-link to="/zlua" class="btn-glow btn-glow-outline">了解 ZLua</router-link>
        </div>
        <p class="cta-contact">QQ 群 1095435513 · Discord · zen-ts@code-philosophy.com</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const features = [
  { icon: '🧩', title: '更易用', desc: '设计贴近 C#；零 per-type Wrap 白名单；CSharp[assembly][type] 懒绑定。' },
  { icon: '🔗', title: '更完备', desc: '覆盖方法重载、ref/out、struct ByVal/ByObj、Nullable、委托、数组、指针与 [JsMarshalAs]。' },
  { icon: '🪞', title: '更统一', desc: '与 ZLua 同一套语义契约（门面 / Marshal / 类型系统 / 生命周期），Lua 与 TS/JS 可共用产品心智。' },
  { icon: '🚀', title: '更高效', desc: 'Player Il2Cpp 热路径为 C++ 桥接，签名复用 stub；支持少生成甚至 0 桥接函数仍可跑通主路径。' },
  { icon: '♻️', title: '更少 GC', desc: '引用类型与 struct（含含引用字段的 struct）默认走 Registry / ByVal exotic。' },
  { icon: '📘', title: 'TS 一等公民', desc: '官方 TypeScript 工作流：生成 csharp: 声明、进 Play 闸门类型检查；运行时仍只跑 emit 后的 JS。' },
]

const vsZlua = [
  { cap: '脚本侧', zlua: 'Lua（PUC-Rio / LuaJIT）', zents: 'JavaScript（QuickJS）；可选 TypeScript' },
  { cap: '宿主门面', zlua: 'LuaAppDomain', zents: 'JsAppDomain' },
  { cap: '类型入口', zlua: 'CSharp[...]', zents: '同左；另支持 import from "csharp:…"' },
  { cap: '标准库', zlua: 'zlua.*', zents: 'zents.*' },
  { cap: '特性属性', zlua: '[LuaMarshalAs] 等', zents: '[JsMarshalAs] / [JsAlias] / [JsExtension]' },
]

const platforms = [
  'Unity 2021.3 / 2022.3 / 6000.x',
  '团结引擎 1.x',
  'QuickJS',
  'Win64 / macOS Editor',
  'Il2Cpp 全平台（含 WebGL / 小游戏 / 鸿蒙）',
]
</script>

<style scoped src="../styles/product-page.css"></style>
