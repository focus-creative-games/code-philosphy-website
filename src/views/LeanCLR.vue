<template>
  <div class="leanclr-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-glow glow-1"></div>
      <div class="page-hero-glow glow-2"></div>
      <div class="page-hero-content fade-in-up">
        <div class="hero-badge">下一代 CLR 运行时</div>
        <h1 class="hero-title gradient-text">LeanCLR</h1>
        <p class="hero-subtitle">轻量级跨平台 CLR 运行时</p>
        <p class="hero-desc">极致精简、轻松嵌入、低内存占用的全平台 .NET 运行时</p>

        <div class="hero-stats">
          <div class="stat-card glass-card">
            <div class="stat-number">600KB</div>
            <div class="stat-label">超精简体积</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">C++17</div>
            <div class="stat-label">纯净零依赖</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">AOT+</div>
            <div class="stat-label">混合执行模式</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">全平台</div>
            <div class="stat-label">移动/H5/小游戏</div>
          </div>
        </div>

        <div class="hero-cta">
          <a href="https://github.com/focus-creative-games/leanclr" target="_blank" class="btn-glow btn-glow-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://github.com/focus-creative-games/leanclr-demo" target="_blank" class="btn-glow btn-glow-outline">查看 Demo</a>
        </div>
      </div>
    </section>

    <!-- Why LeanCLR -->
    <section class="why-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">为什么选择 LeanCLR？</h2>
        <p class="section-desc">现有 CLR 实现在资源受限平台上存在各种不足，LeanCLR 应运而生。</p>

        <div class="compare-grid">
          <div class="compare-card glass-card">
            <h3>CoreCLR / Mono</h3>
            <ul class="issue-list">
              <li>产物体积过大（数 MB 至数十 MB）</li>
              <li>不适合资源受限的小游戏平台</li>
              <li>代码庞大，难以修改和移植</li>
            </ul>
          </div>
          <div class="compare-card glass-card">
            <h3>IL2CPP</h3>
            <ul class="issue-list">
              <li>闭源，仅支持 AOT 模式</li>
              <li>ECMA-335 规范兼容性有限</li>
              <li>不支持运行时动态加载程序集</li>
            </ul>
          </div>
          <div class="compare-card compare-card-highlight glass-card">
            <h3 class="gradient-text">LeanCLR</h3>
            <ul class="advantage-list">
              <li><span class="check-icon">&#10003;</span> 极致精简 — 600KB，可裁剪至 300KB</li>
              <li><span class="check-icon">&#10003;</span> 纯 C++17，零平台依赖</li>
              <li><span class="check-icon">&#10003;</span> AOT + 解释器混合执行</li>
              <li><span class="check-icon">&#10003;</span> 高 ECMA-335 兼容性</li>
              <li><span class="check-icon">&#10003;</span> 简洁 CMake 构建，清晰 CLR API</li>
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
            <div class="version-status status-done">已完成</div>
            <h3>Core 版</h3>
            <p class="version-desc">单线程、极致体积、零平台依赖、协作式精确 GC</p>
            <ul class="version-features">
              <li>适用于移动端、WebAssembly、嵌入式/IoT</li>
              <li>单指针大小的紧凑对象头</li>
              <li>函数级 AOT 粒度</li>
              <li>双解释器架构（IL 冷路径 + IR 热函数）</li>
            </ul>
          </div>
          <div class="version-card glass-card">
            <div class="version-status status-planned">计划中</div>
            <h3>Standard 版</h3>
            <p class="version-desc">多线程、保守式 GC、完整平台 icall 支持</p>
            <ul class="version-features">
              <li>适用于桌面应用和重度移动游戏</li>
              <li>完整 System.IO、System.Net 等</li>
              <li>多线程及并发支持</li>
              <li>更高的框架兼容性</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Support -->
    <section class="platform-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">平台支持</h2>
        <div class="platform-table glass-card">
          <div class="pt-row pt-header">
            <div class="pt-cell">平台</div>
            <div class="pt-cell">状态</div>
            <div class="pt-cell">说明</div>
          </div>
          <div class="pt-row">
            <div class="pt-cell"><strong>微信小游戏/小程序</strong></div>
            <div class="pt-cell"><span class="status-tag tag-partial">部分支持</span></div>
            <div class="pt-cell">SDK 已发布</div>
          </div>
          <div class="pt-row">
            <div class="pt-cell"><strong>Unity/团结 WebGL 及小游戏</strong></div>
            <div class="pt-cell"><span class="status-tag tag-dev">开发中</span></div>
            <div class="pt-cell">预计 2026 年 3 月上线</div>
          </div>
          <div class="pt-row">
            <div class="pt-cell"><strong>Unreal Engine (全平台)</strong></div>
            <div class="pt-cell"><span class="status-tag tag-dev">开发中</span></div>
            <div class="pt-cell">时间待定</div>
          </div>
          <div class="pt-row">
            <div class="pt-cell"><strong>Godot (全平台)</strong></div>
            <div class="pt-cell"><span class="status-tag tag-dev">开发中</span></div>
            <div class="pt-cell">时间待定</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dev Progress -->
    <section class="progress-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">开发进度</h2>
        <div class="progress-grid">
          <div class="progress-item" v-for="item in progressItems" :key="item.name">
            <div class="progress-name">{{ item.name }}</div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: item.percent + '%' }" :class="item.status"></div>
            </div>
            <div class="progress-label" :class="item.status">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="section-inner fade-in-up" style="text-align: center;">
        <h2 class="section-heading">开始使用 LeanCLR</h2>
        <p class="section-desc">探索 LeanCLR 的更多能力，加入我们的开发者社区。</p>
        <div class="cta-buttons">
          <a href="https://github.com/focus-creative-games/leanclr" target="_blank" class="btn-glow btn-glow-primary">GitHub 仓库</a>
          <a href="https://github.com/focus-creative-games/leanclr-demo" target="_blank" class="btn-glow btn-glow-outline">查看 Demo</a>
          <a href="mailto:leanclr@code-philosophy.com" class="btn-glow btn-glow-outline">联系我们</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const progressItems = [
  { name: '元数据解析', percent: 100, label: '已完成', status: 'done' },
  { name: '类型系统', percent: 100, label: '已完成', status: 'done' },
  { name: 'IR 解释器', percent: 100, label: '已完成', status: 'done' },
  { name: '异常处理', percent: 100, label: '已完成', status: 'done' },
  { name: '反射', percent: 100, label: '已完成', status: 'done' },
  { name: '委托', percent: 100, label: '已完成', status: 'done' },
  { name: 'Internal Calls (Core)', percent: 100, label: '已完成', status: 'done' },
  { name: 'P/Invoke', percent: 100, label: '已完成', status: 'done' },
  { name: 'GC', percent: 60, label: '开发中', status: 'dev' },
  { name: 'AOT 编译器', percent: 40, label: '开发中', status: 'dev' },
  { name: '多线程', percent: 10, label: '计划中', status: 'planned' },
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

.tag-partial {
  background: rgba(234, 179, 8, 0.12);
  color: #facc15;
}

.tag-dev {
  background: rgba(59, 130, 246, 0.12);
  color: #60a5fa;
}

/* Progress */
.progress-section {
  padding: 100px 0;
  background: var(--color-bg);
}

.progress-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.progress-item {
  display: grid;
  grid-template-columns: 180px 1fr 80px;
  align-items: center;
  gap: 16px;
}

.progress-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  text-align: right;
}

.progress-bar {
  height: 8px;
  background: rgba(255,255,255,0.06);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease;
}

.progress-fill.done { background: linear-gradient(90deg, #22c55e, #4ade80); }
.progress-fill.dev { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
.progress-fill.planned { background: linear-gradient(90deg, #6b7280, #9ca3af); }

.progress-label {
  font-size: 12px;
  font-weight: 600;
}

.progress-label.done { color: #4ade80; }
.progress-label.dev { color: #60a5fa; }
.progress-label.planned { color: #9ca3af; }

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

/* Responsive */
@media (max-width: 768px) {
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
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

  .progress-item {
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .progress-name { text-align: left; grid-column: 1 / -1; }

  .section-inner {
    padding: 0 20px;
  }
}
</style>
