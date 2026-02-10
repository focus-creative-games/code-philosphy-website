<template>
  <div class="luban-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-glow glow-1"></div>
      <div class="page-hero-glow glow-2"></div>
      <div class="page-hero-content fade-in-up">
        <h1 class="hero-title gradient-text">Luban</h1>
        <p class="hero-subtitle">强大、易用、优雅、稳定的游戏配置解决方案</p>
        <p class="hero-desc">从小型到超大型项目的全覆盖配置工作流</p>

        <div class="hero-stats">
          <div class="stat-card glass-card">
            <div class="stat-number">4300+</div>
            <div class="stat-label">GitHub Stars</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">13+</div>
            <div class="stat-label">语言支持</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">MIT</div>
            <div class="stat-label">开源协议</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">全引擎</div>
            <div class="stat-label">Unity/UE/Godot</div>
          </div>
        </div>

        <div class="hero-cta">
          <a href="https://www.datable.cn/docs/beginner/quickstart" target="_blank" class="btn-glow btn-glow-primary">快速开始</a>
          <a href="https://www.datable.cn/" target="_blank" class="btn-glow btn-glow-outline">完整文档</a>
          <a href="https://github.com/focus-creative-games/luban" target="_blank" class="btn-glow btn-glow-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Core Features -->
    <section class="features-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">核心特性</h2>
        <p class="section-desc">Luban 提供了游戏配置工作流中所需的一切能力</p>

        <div class="features-grid">
          <div class="feature-card glass-card" v-for="f in features" :key="f.title">
            <div class="feature-icon">{{ f.icon }}</div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Supported Languages -->
    <section class="langs-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">代码生成语言</h2>
        <p class="section-desc">内置支持 13+ 种编程语言的代码生成</p>
        <div class="lang-tags">
          <span class="lang-tag" v-for="lang in languages" :key="lang">{{ lang }}</span>
        </div>
      </div>
    </section>

    <!-- Supported Engines -->
    <section class="engines-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">支持引擎与平台</h2>
        <div class="engine-grid">
          <div class="engine-card glass-card" v-for="e in engines" :key="e.name">
            <div class="engine-name">{{ e.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Formats -->
    <section class="formats-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">数据格式支持</h2>
        <div class="format-grid">
          <div class="format-group">
            <h3>数据源格式</h3>
            <div class="format-tags">
              <span class="format-tag" v-for="f in sourceFormats" :key="f">{{ f }}</span>
            </div>
          </div>
          <div class="format-group">
            <h3>导出格式</h3>
            <div class="format-tags">
              <span class="format-tag" v-for="f in exportFormats" :key="f">{{ f }}</span>
            </div>
          </div>
          <div class="format-group">
            <h3>消息方案</h3>
            <div class="format-tags">
              <span class="format-tag" v-for="f in messageFormats" :key="f">{{ f }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="section-inner fade-in-up" style="text-align: center;">
        <h2 class="section-heading">开始使用 Luban</h2>
        <p class="section-desc">告别混乱的配置管理，拥抱优雅高效的工作流。</p>
        <div class="cta-buttons">
          <a href="https://www.datable.cn/docs/beginner/quickstart" target="_blank" class="btn-glow btn-glow-primary">快速开始</a>
          <a href="https://github.com/focus-creative-games/luban_examples" target="_blank" class="btn-glow btn-glow-outline">示例项目</a>
          <a href="https://github.com/focus-creative-games/luban" target="_blank" class="btn-glow btn-glow-outline">GitHub 仓库</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const features = [
  { icon: '📊', title: '丰富数据源', desc: '支持 Excel（csv/xls/xlsx）、JSON、XML、YAML、Lua 等多种数据源格式。' },
  { icon: '🧬', title: '完整类型系统', desc: '支持 OOP 类型继承，可优雅表达行为树、技能、剧情、副本等复杂 GamePlay 数据。' },
  { icon: '🔍', title: '强大数据校验', desc: '支持 Ref 引用检查、Path 资源路径检查、Range 范围检查等多种校验机制。' },
  { icon: '🌐', title: '多语言代码生成', desc: '内置 C#、Java、Go、C++、Lua、Python、TypeScript、Rust 等 13+ 语言支持。' },
  { icon: '🔄', title: '热更兼容', desc: '完美兼容 HybridCLR、ILRuntime、xLua、puerts 等主流热更方案。' },
  { icon: '🛡️', title: '混淆兼容', desc: '生成代码无反射，兼容 Obfuz、Obfuscator、.NET Reactor 等混淆工具。' },
]

const languages = ['C#', 'Java', 'Go', 'C++', 'Lua', 'Python', 'JavaScript', 'TypeScript', 'Rust', 'PHP', 'Erlang', 'GDScript', 'Protobuf']

const engines = [
  { name: 'Unity' },
  { name: 'Unreal Engine' },
  { name: 'Cocos2d-x' },
  { name: 'Godot' },
  { name: '微信小游戏' },
  { name: '其他引擎' },
]

const sourceFormats = ['Excel (csv/xls/xlsx)', 'JSON', 'XML', 'YAML', 'Lua']
const exportFormats = ['Binary', 'JSON', 'BSON', 'XML', 'Lua', 'YAML']
const messageFormats = ['Protobuf', 'FlatBuffers', 'MsgPack']
</script>

<style scoped>
/* Hero - reuse LeanCLR pattern */
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

.glow-1 { width: 500px; height: 500px; top: 5%; left: 10%; background: rgba(59, 130, 246, 0.1); }
.glow-2 { width: 400px; height: 400px; bottom: 15%; right: 10%; background: rgba(139, 92, 246, 0.08); }

.page-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 20px;
  max-width: 900px;
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

.stat-card { padding: 24px 16px; text-align: center; }
.stat-number { font-size: 28px; font-weight: 800; color: #fff; margin-bottom: 6px; font-family: var(--font-heading); }
.stat-label { font-size: 13px; color: rgba(255,255,255,0.5); }

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Sections */
.section-inner { max-width: 1000px; margin: 0 auto; padding: 0 40px; }
.section-heading { font-size: 32px; font-weight: 700; color: var(--color-heading); margin-bottom: 16px; text-align: center; }
.section-desc { font-size: 16px; color: var(--color-text-light); text-align: center; margin-bottom: 48px; line-height: 1.7; }

/* Features */
.features-section { padding: 100px 0; background: var(--color-bg-alt); }

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  padding: 32px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: rgba(59, 130, 246, 0.2);
  transform: translateY(-4px);
}

.feature-icon { font-size: 32px; margin-bottom: 16px; }

.feature-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 14px;
  color: var(--color-text);
  line-height: 1.7;
}

/* Languages */
.langs-section { padding: 80px 0; background: var(--color-bg); }

.lang-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.lang-tag {
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.3s;
}

.lang-tag:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
}

/* Engines */
.engines-section { padding: 80px 0; background: var(--color-bg-alt); }

.engine-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.engine-card {
  padding: 24px;
  text-align: center;
  transition: all 0.3s;
}

.engine-card:hover {
  border-color: rgba(59, 130, 246, 0.2);
  transform: translateY(-2px);
}

.engine-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-heading);
}

/* Formats */
.formats-section { padding: 100px 0; background: var(--color-bg); }

.format-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.format-group h3 {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 16px;
  text-align: center;
}

.format-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.format-tag {
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 13px;
  color: rgba(255,255,255,0.6);
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--color-border);
}

/* CTA */
.cta-section { padding: 100px 0; background: var(--color-bg-alt); }
.cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* Responsive */
@media (max-width: 768px) {
  .hero-stats { grid-template-columns: repeat(2, 1fr); }
  .features-grid { grid-template-columns: 1fr; }
  .engine-grid { grid-template-columns: repeat(2, 1fr); }
  .format-grid { grid-template-columns: 1fr; }
  .section-inner { padding: 0 20px; }
}
</style>
