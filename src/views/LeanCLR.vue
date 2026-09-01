<template>
  <div class="leanclr-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-glow glow-1"></div>
      <div class="page-hero-glow glow-2"></div>
      <div class="page-hero-content fade-in-up">
        <div class="hero-badge">Unity 发布期 CLR 运行时</div>
        <h1 class="hero-title gradient-text">LeanCLR</h1>
        <p class="hero-subtitle">Write C#, Run Anywhere</p>
        <p class="hero-desc">面向生产发布的轻量 CLR：替换 IL2CPP，显著缩小 wasm 与内存占用，支持选择性 AOT、延迟加载与热更新</p>

        <div class="hero-stats">
          <div class="stat-card glass-card">
            <div class="stat-number">70–90%</div>
            <div class="stat-label">AOT 代码可减少</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">20–35%</div>
            <div class="stat-label">虚拟机内存节省</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">AOT+</div>
            <div class="stat-label">解释器混合执行</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">WebGL</div>
            <div class="stat-label">小游戏 / 团结引擎</div>
          </div>
        </div>

        <div class="hero-cta">
          <a href="https://doc.leanclr.com/" target="_blank" rel="noopener" class="btn-glow btn-glow-primary">官方文档</a>
          <a href="https://github.com/focus-creative-games/leanclr-unity" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">Unity 插件</a>
          <a href="https://github.com/focus-creative-games/leanclr" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">GitHub</a>
        </div>
      </div>
    </section>

    <!-- vs IL2CPP -->
    <section class="advantage-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">相对 IL2CPP 的优势</h2>
        <p class="section-desc">在 Unity WebGL / 小游戏发布场景，配合 <code>aot.xml</code> / PGO 选择性 AOT，典型收益如下。</p>
        <div class="advantage-grid">
          <div class="advantage-card glass-card" v-for="item in il2cppAdvantages" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why LeanCLR -->
    <section class="why-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">为什么选择 LeanCLR？</h2>
        <p class="section-desc">在「将 C# 嵌入宿主并发布到多平台」场景下，现有方案各有局限，LeanCLR 专注<strong>发布期后端替换</strong>与包体优化。</p>

        <div class="compare-grid">
          <div class="compare-card glass-card">
            <h3>CoreCLR / Mono</h3>
            <ul class="issue-list">
              <li>体积与依赖大，嵌入与裁剪成本高</li>
              <li>不适合小游戏等严苛包体场景</li>
              <li>移植到新平台工程复杂</li>
            </ul>
          </div>
          <div class="compare-card glass-card">
            <h3>IL2CPP</h3>
            <ul class="issue-list">
              <li>闭源，与 Unity 工具链强绑定</li>
              <li>全量 AOT 导致 wasm 与内存偏大</li>
              <li>ECMA-335 覆盖与灵活性有限</li>
            </ul>
          </div>
          <div class="compare-card compare-card-highlight glass-card">
            <h3 class="gradient-text">LeanCLR</h3>
            <ul class="advantage-list">
              <li><span class="check-icon">&#10003;</span> 标准 C++11，零外部依赖，易嵌入</li>
              <li><span class="check-icon">&#10003;</span> AOT + 解释器，选择性编译热点</li>
              <li><span class="check-icon">&#10003;</span> 高 ECMA-335 兼容，Unity BCL 对齐</li>
              <li><span class="check-icon">&#10003;</span> 准确式 Mark-Sweep GC，更快回收</li>
              <li><span class="check-icon">&#10003;</span> 延迟加载与热更新程序集支持</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Versions -->
    <section class="versions-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">版本规划</h2>
        <div class="version-grid">
          <div class="version-card glass-card">
            <div class="version-status status-done">当前对外</div>
            <h3>Standard 版</h3>
            <p class="version-desc">当前发布版本（单线程）；完整 BCL icall 持续完善，未来将支持多线程</p>
            <ul class="version-features">
              <li>Unity WebGL / 小游戏生产可用</li>
              <li>准确式 Mark-Sweep 全量 GC</li>
              <li>LeanAOT、pgo2aot、延迟加载与热更新</li>
              <li>与 Unity IL2CPP BCL 高度兼容</li>
            </ul>
          </div>
          <div class="version-card glass-card">
            <div class="version-status status-planned">规划中</div>
            <h3>Core 版</h3>
            <p class="version-desc">从 Standard 裁剪：纯 C++11、单线程、无平台相关代码，极致体积</p>
            <ul class="version-features">
              <li>适用于嵌入式与任意 C++11 平台</li>
              <li>可作为轻量脚本引擎嵌入</li>
              <li>主动式精确全量 GC（更精简）</li>
              <li>尚未单独发布</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Support -->
    <section class="platform-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">引擎与平台</h2>
        <div class="platform-table glass-card">
          <div class="pt-row pt-header">
            <div class="pt-cell">平台 / 引擎</div>
            <div class="pt-cell">状态</div>
            <div class="pt-cell">说明</div>
          </div>
          <div class="pt-row" v-for="row in platformRows" :key="row.name">
            <div class="pt-cell"><strong>{{ row.name }}</strong></div>
            <div class="pt-cell"><span class="status-tag" :class="row.tagClass">{{ row.status }}</span></div>
            <div class="pt-cell">{{ row.note }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ecosystem -->
    <section class="ecosystem-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">相关仓库</h2>
        <div class="eco-grid">
          <a
            v-for="repo in repos"
            :key="repo.url"
            :href="repo.url"
            target="_blank"
            rel="noopener"
            class="eco-card glass-card"
          >
            <h3>{{ repo.name }}</h3>
            <p>{{ repo.desc }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="section-inner fade-in-up" style="text-align: center;">
        <h2 class="section-heading">开始使用 LeanCLR</h2>
        <p class="section-desc">阅读文档、安装 Unity 插件，或加入开发者社区。</p>
        <div class="cta-buttons">
          <a href="https://doc.leanclr.com/docs/ecosystem/unity/install" target="_blank" rel="noopener" class="btn-glow btn-glow-primary">Unity 安装指南</a>
          <a href="https://doc.leanclr.com/" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">完整文档</a>
          <a href="https://github.com/focus-creative-games/leanclr-unity-demo" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">示例工程</a>
          <a href="mailto:leanclr@code-philosophy.com" class="btn-glow btn-glow-outline">联系我们</a>
        </div>
        <p class="cta-contact">Discord · QQ 群 1047250380</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const il2cppAdvantages = [
  {
    title: 'AOT 代码体积',
    desc: '选择性 AOT 下，托管代码编译产生的原生 AOT 代码可减少约 70%–90%，包体优化极其显著，整体性能影响可控。',
  },
  {
    title: '运行时内存',
    desc: '虚拟机内存约减少 20%–35%，托管堆占用亦有少量下降，更适合内存受限的小游戏设备。',
  },
  {
    title: '大型项目',
    desc: '支持延迟加载与热更新程序集，在符合首包要求的前提下，可承载数十 MB 级托管逻辑。',
  },
  {
    title: '垃圾回收',
    desc: '准确式 Mark-Sweep GC，回收效率更高，GC 停顿更短、更快。',
  },
]

const platformRows = [
  {
    name: 'Unity / 团结 WebGL 及小游戏',
    status: '已完成',
    tagClass: 'tag-done',
    note: 'leanclr-unity 发布时自动替换 IL2CPP',
  },
  {
    name: 'Godot（全平台）',
    status: '开发中',
    tagClass: 'tag-dev',
    note: 'leanclr-godot 占位仓库',
  },
  {
    name: 'Unreal Engine（全平台）',
    status: '开发中',
    tagClass: 'tag-dev',
    note: 'leanclr-unreal 占位仓库',
  },
  {
    name: 'Cocos Engine',
    status: '开发中',
    tagClass: 'tag-dev',
    note: 'leanclr-cocos 占位仓库',
  },
]

const repos = [
  { name: 'leanclr', desc: '运行时与 LeanAOT 工具链源码', url: 'https://github.com/focus-creative-games/leanclr' },
  { name: 'leanclr-unity', desc: 'Unity 集成包 com.code-philosophy.leanclr', url: 'https://github.com/focus-creative-games/leanclr-unity' },
  { name: 'leanclr-doc', desc: '文档站 doc.leanclr.com', url: 'https://github.com/focus-creative-games/leanclr-doc' },
  { name: 'leanclr-demo', desc: 'Win64 / H5 独立嵌入示例', url: 'https://github.com/focus-creative-games/leanclr-demo' },
  { name: 'hybridclr', desc: 'Unity 全平台热更新（定位互补）', url: 'https://github.com/focus-creative-games/hybridclr' },
]
</script>

<style scoped>
/* Page Hero */
.page-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-hero);
  overflow: hidden;
  padding-top: 70px;
}

.page-hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.glow-1 { width: 500px; height: 500px; top: 10%; right: 10%; background: rgba(139, 92, 246, 0.12); }
.glow-2 { width: 400px; height: 400px; bottom: 10%; left: 15%; background: rgba(59, 130, 246, 0.1); }

.page-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 20px;
  max-width: 900px;
}

.hero-badge {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  background: rgba(139, 92, 246, 0.15);
  color: #a78bfa;
  border: 1px solid rgba(139, 92, 246, 0.2);
  margin-bottom: 24px;
}

.hero-title {
  font-size: clamp(48px, 7vw, 72px);
  font-weight: 800;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 24px;
  color: rgba(255,255,255,0.8);
  margin-bottom: 12px;
  font-weight: 500;
}

.hero-desc {
  font-size: 18px;
  color: rgba(255,255,255,0.5);
  margin-bottom: 48px;
  line-height: 1.6;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

.stat-card {
  padding: 24px 16px;
  text-align: center;
}

.stat-number {
  font-size: 28px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 6px;
  font-family: var(--font-heading);
}

.stat-label {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Sections common */
.section-inner {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
}

.section-heading {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 16px;
  text-align: center;
}

.section-desc {
  font-size: 16px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 48px;
  line-height: 1.7;
}

.section-desc code {
  font-size: 14px;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(255,255,255,0.06);
}

/* IL2CPP advantages */
.advantage-section {
  padding: 100px 0;
  background: var(--color-bg);
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.advantage-card {
  padding: 28px;
}

.advantage-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 10px;
}

.advantage-card p {
  font-size: 14px;
  color: var(--color-text-light);
  line-height: 1.7;
  margin: 0;
}

/* Why Section */
.why-section {
  padding: 100px 0;
  background: var(--color-bg-alt);
}

.compare-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.compare-card {
  padding: 28px;
}

.compare-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 16px;
}

.issue-list {
  list-style: none;
  padding: 0;
}

.issue-list li {
  padding: 6px 0;
  font-size: 14px;
  color: rgba(255,255,255,0.45);
  padding-left: 20px;
  position: relative;
}

.issue-list li::before {
  content: '✕';
  position: absolute;
  left: 0;
  color: #ef4444;
  font-size: 12px;
}

.compare-card-highlight {
  border-color: rgba(59, 130, 246, 0.2);
  background: rgba(59, 130, 246, 0.05);
}

.advantage-list {
  list-style: none;
  padding: 0;
}

.advantage-list li {
  padding: 8px 0;
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.check-icon {
  color: #22c55e;
  font-weight: 700;
  flex-shrink: 0;
}

/* Versions */
.versions-section {
  padding: 100px 0;
  background: var(--color-bg);
}

.version-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.version-card {
  padding: 36px;
}

.version-card h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 10px;
}

.version-desc {
  font-size: 15px;
  color: var(--color-text-light);
  margin-bottom: 20px;
}

.version-status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
}

.status-done {
  background: rgba(34, 197, 94, 0.12);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.status-planned {
  background: rgba(59, 130, 246, 0.12);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.version-features {
  list-style: none;
  padding: 0;
}

.version-features li {
  padding: 6px 0;
  font-size: 14px;
  color: var(--color-text);
  padding-left: 18px;
  position: relative;
}

.version-features li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

/* Platform Table */
.platform-section {
  padding: 100px 0;
  background: var(--color-bg-alt);
}

.platform-table {
  overflow: hidden;
}

.pt-row {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  border-bottom: 1px solid var(--color-border);
  transition: background 0.2s;
}

.pt-row:last-child { border-bottom: none; }

.pt-row:not(.pt-header):hover {
  background: rgba(255,255,255,0.02);
}

.pt-header {
  background: rgba(59, 130, 246, 0.06);
}

.pt-header .pt-cell {
  font-weight: 600;
  color: var(--color-heading);
  font-size: 14px;
}

.pt-cell {
  padding: 16px 20px;
  font-size: 14px;
  color: var(--color-text);
}

.status-tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.tag-done {
  background: rgba(34, 197, 94, 0.12);
  color: #4ade80;
}

.tag-dev {
  background: rgba(59, 130, 246, 0.12);
  color: #60a5fa;
}

/* Ecosystem */
.ecosystem-section {
  padding: 100px 0;
  background: var(--color-bg);
}

.eco-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.eco-card {
  padding: 24px;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
}

.eco-card:hover {
  border-color: rgba(139, 92, 246, 0.35);
  transform: translateY(-2px);
}

.eco-card h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 8px;
}

.eco-card p {
  font-size: 13px;
  color: var(--color-text-light);
  margin: 0;
  line-height: 1.5;
}

/* CTA */
.cta-section {
  padding: 100px 0;
  background: var(--color-bg-alt);
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-contact {
  margin-top: 24px;
  font-size: 14px;
  color: var(--color-text-light);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .advantage-grid {
    grid-template-columns: 1fr;
  }

  .compare-grid {
    grid-template-columns: 1fr;
  }

  .version-grid {
    grid-template-columns: 1fr;
  }

  .pt-row {
    grid-template-columns: 1fr;
  }

  .pt-header { display: none; }

  .pt-cell { padding: 8px 20px; }
  .pt-cell:first-child { padding-top: 16px; font-weight: 600; }
  .pt-cell:last-child { padding-bottom: 16px; }

  .section-inner {
    padding: 0 20px;
  }
}
</style>
