<template>
  <div class="luatier-page">
    <section class="page-hero">
      <div class="page-hero-glow glow-1"></div>
      <div class="page-hero-glow glow-2"></div>
      <div class="page-hero-content fade-in-up">
        <div class="hero-badge hero-badge-orange">研发中</div>
        <h1 class="hero-title gradient-text">LuaTier</h1>
        <p class="hero-subtitle">分层混合执行的现代 Lua 运行时</p>
        <p class="hero-desc">从零用 C++17 重写，支持 Lua 5.3+。提供字节码解释器、离线 AOT 编译与可选 tracing JIT——不是历史 LuaJIT 的衍生。</p>

        <div class="hero-stats">
          <div class="stat-card glass-card">
            <div class="stat-number">Lua 5.3+</div>
            <div class="stat-label">语言版本</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">C++17</div>
            <div class="stat-label">从零实现</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">三级</div>
            <div class="stat-label">解释 / AOT / JIT</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">MIT</div>
            <div class="stat-label">开源协议</div>
          </div>
        </div>

        <div class="hero-cta">
          <a href="https://github.com/focus-creative-games/luatier" target="_blank" rel="noopener" class="btn-glow btn-glow-primary">GitHub</a>
          <a href="https://luatier.com" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">项目主页</a>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">执行架构</h2>
        <p class="section-desc">分层混合执行：默认解释，热点可离线 AOT，并预留 tracing JIT。</p>
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
        <h2 class="section-heading">仓库结构</h2>
        <p class="section-desc">架构契约冻结在 docs/spec，实现按模块拆分。</p>
        <div class="data-table glass-card">
          <div class="dt-row dt-header cols-3">
            <div class="dt-cell">路径</div>
            <div class="dt-cell">模块</div>
            <div class="dt-cell">说明</div>
          </div>
          <div class="dt-row cols-3" v-for="row in layout" :key="row.path">
            <div class="dt-cell"><strong>{{ row.path }}</strong></div>
            <div class="dt-cell">{{ row.mod }}</div>
            <div class="dt-cell">{{ row.note }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="tags-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">当前定位</h2>
        <p class="section-desc">项目仍在积极开发。可本地构建运行 CLI，并与 Lua 5.3.6 做差异测试与基准。</p>
        <div class="tag-list">
          <span class="tag-item" v-for="t in statusTags" :key="t">{{ t }}</span>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="section-inner fade-in-up" style="text-align: center;">
        <h2 class="section-heading">关注 LuaTier</h2>
        <p class="section-desc">从源码构建，或在 GitHub 上跟踪路线图与基准报告。</p>
        <div class="cta-buttons">
          <a href="https://github.com/focus-creative-games/luatier" target="_blank" rel="noopener" class="btn-glow btn-glow-primary">查看仓库</a>
          <router-link to="/zlua" class="btn-glow btn-glow-outline">了解 ZLua</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const features = [
  { icon: '📜', title: '字节码解释器', desc: '前端完成词法、语法、语义与 LBC 下降；VM 执行自定义字节码，并提供 Lua 兼容 C API。' },
  { icon: '🛠️', title: '离线 AOT', desc: '可将热点函数离线编译，降低解释开销，适合发布期固化性能路径。' },
  { icon: '🔥', title: 'Tracing JIT', desc: '热度、内联缓存、baseline / opt / deopt 脚手架已就位，JIT 为可选能力。' },
  { icon: '🧪', title: '差分测试', desc: '单元测试之外，用 oracle 与 Lua 5.3.6 对照，并提供 GC / deopt / IC 压力开关。' },
  { icon: '🧱', title: '运行时与 GC', desc: '自研 TValue、string、table、closure、upvalue，以及增量 mark-sweep GC。' },
  { icon: '🌱', title: '非 LuaJIT 分支', desc: '代码与历史 LuaJIT 无派生关系，按现代 C++17 与冻结架构契约重新实现。' },
]

const layout = [
  { path: 'src/frontend/', mod: '前端', note: 'lexer、parser、AST、sema、LBC lowering' },
  { path: 'src/vm/', mod: '虚拟机', note: '字节码、解释器、状态、内建' },
  { path: 'src/runtime/', mod: '运行时', note: 'TValue、string、table、closure、upvalue' },
  { path: 'src/gc/', mod: 'GC', note: '增量 mark-sweep' },
  { path: 'src/jit/', mod: 'JIT', note: '热度、IC、baseline / opt / deopt' },
  { path: 'src/api/', mod: 'API', note: 'Lua 兼容 C API' },
]

const statusTags = ['CMake + CTest', 'vs Lua 5.3.6 基准', 'docs/spec 架构契约', 'MIT']
</script>

<style scoped src="../styles/product-page.css"></style>
