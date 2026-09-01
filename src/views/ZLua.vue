<template>
  <div class="zlua-page">
    <section class="page-hero">
      <div class="page-hero-glow glow-1"></div>
      <div class="page-hero-glow glow-2"></div>
      <div class="page-hero-content fade-in-up">
        <div class="hero-badge hero-badge-cyan">Unity Lua 脚本方案</div>
        <h1 class="hero-title gradient-text">ZLua</h1>
        <p class="hero-subtitle">为 IL2CPP 极致优化的现代 Unity Lua 方案</p>
        <p class="hero-desc">零配置、完备互操作、更少 GC。相对 xLua / toLua / SLua，Il2Cpp 实测交互显著更快。</p>

        <div class="hero-stats">
          <div class="stat-card glass-card">
            <div class="stat-number">零配置</div>
            <div class="stat-label">无需 Wrap 白名单</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">0 GC</div>
            <div class="stat-label">引用与 struct 默认</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">98.6%</div>
            <div class="stat-label">用例领先 xLua</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">MIT</div>
            <div class="stat-label">开源协议</div>
          </div>
        </div>

        <div class="hero-cta">
          <a href="https://doc.zlua.cn" target="_blank" rel="noopener" class="btn-glow btn-glow-primary">官方文档</a>
          <a href="https://github.com/focus-creative-games/zlua-demo" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">示例工程</a>
          <a href="https://github.com/focus-creative-games/zlua" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">GitHub</a>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">为什么选择 ZLua</h2>
        <p class="section-desc">相对 xLua / toLua / SLua，ZLua 在易用性、完备性和 Il2Cpp 热路径上都做了针对性优化。</p>
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
        <h2 class="section-heading">性能摘要</h2>
        <p class="section-desc">Unity 2022.3.62f3，Il2Cpp Win64 Release；ratio = 其他框架 / ZLua（大于 1 表示更慢）。数据来自 zlua-benchmark（2026-07-28）。</p>
        <div class="data-table glass-card">
          <div class="dt-row dt-header cols-5">
            <div class="dt-cell">方向</div>
            <div class="dt-cell">用例</div>
            <div class="dt-cell">xLua</div>
            <div class="dt-cell">toLua</div>
            <div class="dt-cell">SLua</div>
          </div>
          <div class="dt-row cols-5" v-for="row in perfRows" :key="row.dir">
            <div class="dt-cell">{{ row.dir }}</div>
            <div class="dt-cell">{{ row.cases }}</div>
            <div class="dt-cell">{{ row.xlua }}</div>
            <div class="dt-cell">{{ row.tolua }}</div>
            <div class="dt-cell">{{ row.slua }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="tags-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">平台与版本</h2>
        <p class="section-desc">开发期 Editor Mono，发布期 Player Il2Cpp。</p>
        <div class="tag-list">
          <span class="tag-item" v-for="t in platforms" :key="t">{{ t }}</span>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="section-inner fade-in-up" style="text-align: center;">
        <h2 class="section-heading">开始使用 ZLua</h2>
        <p class="section-desc">只需提供 Loader，即可在 C# 与 Lua 之间任意互调。</p>
        <div class="cta-buttons">
          <a href="https://doc.zlua.cn" target="_blank" rel="noopener" class="btn-glow btn-glow-primary">阅读文档</a>
          <a href="https://github.com/focus-creative-games/zlua-demo" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">zlua-demo</a>
          <a href="https://github.com/focus-creative-games/zlua-benchmark" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">性能基准</a>
        </div>
        <p class="cta-contact">QQ 群 824793773 · Discord · zlua@code-philosophy.com</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const features = [
  { icon: '⚡', title: '更易用', desc: '设计更现代，开箱即用。默认 C# 与 Lua 可任意互调，无需 per-type Wrap 白名单，也没有复杂导出配置。' },
  { icon: '🔗', title: '更完备', desc: '标准和完备的 C#↔Lua 交互，Lua 中能像 C# 那样访问几乎所有常用特性：重载、泛型、委托、struct 等。' },
  { icon: '🚀', title: '更高效', desc: 'Il2Cpp 热路径为合并签名的 C++ 桥接。Lua→C# 上 xLua 约 2.57×、toLua 约 3.52×、SLua 约 7.68×。' },
  { icon: '♻️', title: '更少 GC', desc: '引用类型与 struct（含含引用字段的 struct）默认 0 GC，并提供 OpaqueValue 等传参策略。' },
  { icon: '📦', title: '极小桥接', desc: '合并相同签名并直接生成 C++。全量桥接仍可比其他方案 wrapper 小一个数量级；支持 0 桥接函数。' },
  { icon: '🛠️', title: '版本更广', desc: 'Lua 5.1–5.5 与 LuaJIT 2.x；Unity 2021.3 / 2022.3 / 6000.x；团结引擎全系列。' },
]

const perfRows = [
  { dir: 'C# → Lua', cases: '54', xlua: '1.59×', tolua: '3.27×', slua: '14.9×' },
  { dir: 'Lua → C#', cases: '231', xlua: '2.57×', tolua: '3.52×', slua: '7.68×' },
]

const platforms = [
  'Lua 5.1–5.5',
  'LuaJIT 2.x',
  'Unity 2021.3 / 2022.3 / 6000.x',
  '团结引擎',
  'Il2Cpp 全平台（含 WebGL / 小游戏 / 鸿蒙）',
]
</script>

<style scoped src="../styles/product-page.css"></style>
