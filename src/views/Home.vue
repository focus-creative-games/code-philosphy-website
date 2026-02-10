<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-glow hero-glow-1"></div>
      <div class="hero-glow hero-glow-2"></div>
      <canvas ref="canvasRef" class="hero-canvas"></canvas>
      <div class="hero-content fade-in-up">
        <h1 class="hero-title">
          <span class="gradient-text">Code Philosophy</span>
        </h1>
        <p class="hero-subtitle">让开发者专注于创造更有乐趣的游戏</p>
        <p class="hero-desc">我们致力于提供游戏行业的深度技术解决方案</p>
        <div class="hero-cta">
          <router-link to="/hybridclr" class="btn-glow btn-glow-primary">探索核心产品</router-link>
          <a href="https://github.com/focus-creative-games" target="_blank" class="btn-glow btn-glow-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
      <div class="hero-scroll-hint">
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <!-- Product Showcase (Tab Switch) -->
    <section class="showcase-section">
      <div class="showcase-glow" :class="'showcase-glow-' + activeProduct"></div>
      <div class="showcase-inner fade-in-up">
        <h2 class="showcase-heading">核心产品</h2>
        <!-- Tabs -->
        <div class="showcase-tabs">
          <button
            v-for="p in products"
            :key="p.id"
            class="showcase-tab"
            :class="{ active: activeProduct === p.id }"
            @click="switchProduct(p.id)"
          >
            <span class="tab-name">{{ p.name }}</span>
            <span class="tab-tagline">{{ p.tagline }}</span>
          </button>
        </div>

        <!-- Product Panel -->
        <div class="showcase-panel">
          <TransitionGroup name="panel">
            <div
              v-for="p in products"
              v-show="activeProduct === p.id"
              :key="p.id"
              class="panel-content"
            >
              <div class="panel-left">
                <div class="panel-badge" :class="p.badgeClass">{{ p.badge }}</div>
                <h3 class="panel-title gradient-text">{{ p.name }}</h3>
                <p class="panel-tagline">{{ p.tagline }}</p>
                <p class="panel-desc">{{ p.desc }}</p>
                <div class="panel-buttons">
                  <router-link :to="p.detailLink" class="btn-glow btn-glow-primary">了解更多</router-link>
                  <a :href="p.externalLink" target="_blank" class="btn-glow btn-glow-outline">{{ p.externalLabel }}</a>
                </div>
              </div>
              <div class="panel-right">
                <div class="stat-grid">
                  <div
                    v-for="(s, si) in p.stats"
                    :key="si"
                    class="stat-card glass-card"
                  >
                    <div class="stat-value">{{ s.value }}</div>
                    <div class="stat-label">{{ s.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </section>

    <!-- More Products -->
    <section class="more-products-section fade-in-up">
      <h2 class="more-title">更多产品</h2>
      <div class="more-grid">
        <a href="https://www.obfuz.com/" target="_blank" class="more-card glass-card">
          <h3>Obfuz</h3>
          <p>开源、强大、易用的 Unity 代码混淆与加固方案，深度集成 Unity 工作流，3 分钟快速接入。</p>
          <div class="more-card-links">
            <span class="more-link">文档站 &rarr;</span>
          </div>
        </a>
        <a href="https://github.com/focus-creative-games" target="_blank" class="more-card glass-card">
          <h3>探索全部项目</h3>
          <p>访问我们的 GitHub 主页，查看所有开源项目和技术方案。</p>
          <div class="more-card-links">
            <span class="more-link">GitHub &rarr;</span>
          </div>
        </a>
      </div>
    </section>

    <!-- Corporate Users Section -->
    <section class="users-section">
      <div class="users-curve"></div>
      <div class="users-content">
        <div class="users-header fade-in-up">
          <h2 class="section-title">合作用户</h2>
          <div class="section-subtitle-wrap">
            <span class="section-line"></span>
            <span class="section-subtitle">CORPORATE USERS</span>
            <span class="section-line"></span>
          </div>
        </div>
        <div class="logo-grid" v-for="(row, rowIdx) in logoRows" :key="rowIdx">
          <div class="logo-item" v-for="(logo, idx) in row" :key="idx">
            <img :src="logo.src" :alt="logo.alt" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useParticleCanvas } from '../composables/useParticleCanvas'

const canvasRef = ref<HTMLCanvasElement | null>(null)
useParticleCanvas(canvasRef)

// Product showcase data
const activeProduct = ref('hybridclr')
let autoTimer: ReturnType<typeof setInterval> | null = null

const products = [
  {
    id: 'hybridclr',
    name: 'HybridCLR',
    badge: '核心产品',
    badgeClass: 'badge-blue',
    tagline: 'Unity 全平台原生 C# 热更方案',
    desc: '特性完整、零成本、高性能、低内存。已有数千商业项目接入，百款游戏双端上线。开创性的 DHE 技术让热更运行达到原生 AOT 水平。',
    detailLink: '/hybridclr',
    externalLink: 'https://github.com/focus-creative-games/hybridclr',
    externalLabel: 'GitHub',
    stats: [
      { value: '7700+', label: 'GitHub Stars' },
      { value: '千款', label: '商业项目接入' },
      { value: 'MIT', label: '开源协议' },
      { value: '2700+', label: '测试用例通过' },
    ],
  },
  {
    id: 'leanclr',
    name: 'LeanCLR',
    badge: '全新产品',
    badgeClass: 'badge-purple',
    tagline: '轻量级跨平台 CLR 运行时',
    desc: '极致精简、轻松嵌入、低内存占用。单线程版 X64/WebAssembly 仅 600KB，可裁剪至 300KB。面向移动/H5/小游戏等资源受限平台。',
    detailLink: '/leanclr',
    externalLink: 'https://github.com/focus-creative-games/leanclr',
    externalLabel: 'GitHub',
    stats: [
      { value: '600KB', label: '极致精简体积' },
      { value: 'C++17', label: '纯净零依赖' },
      { value: 'AOT+Interpreter', label: '混合执行模式' },
      { value: '全平台', label: '移动/H5/小游戏' },
    ],
  },
  {
    id: 'luban',
    name: 'Luban',
    badge: '热门项目',
    badgeClass: 'badge-green',
    tagline: '强大灵活的游戏配置解决方案',
    desc: '增强的 Excel 格式，完整的类型系统，强大的数据校验，支持十余种编程语言代码生成。从小型到超大型项目的全覆盖配置工作流。',
    detailLink: '/luban',
    externalLink: 'https://www.datable.cn/',
    externalLabel: '文档站',
    stats: [
      { value: '4300+', label: 'GitHub Stars' },
      { value: '13+', label: '语言代码生成' },
      { value: 'MIT', label: '开源协议' },
      { value: '全引擎', label: 'Unity/UE/Godot' },
    ],
  },
]

function switchProduct(id: string) {
  activeProduct.value = id
  resetAutoSwitch()
}

function resetAutoSwitch() {
  if (autoTimer) clearInterval(autoTimer)
  autoTimer = setInterval(() => {
    const idx = products.findIndex((p) => p.id === activeProduct.value)
    activeProduct.value = products[(idx + 1) % products.length].id
  }, 6000)
}

resetAutoSwitch()

const logoRows = [
  [
    { src: '/images/logos/tencent.png', alt: '腾讯游戏' },
    { src: '/images/logos/netease.png', alt: '网易' },
    { src: '/images/logos/bytedance.png', alt: '字节跳动' },
    { src: '/images/logos/funplus.png', alt: 'FunPlus' },
    { src: '/images/logos/diezhi.jpg', alt: '叠纸' },
    { src: '/images/logos/lilith.png', alt: '莉莉丝' },
  ],
  [
    { src: '/images/logos/row2-1.png', alt: '' },
    { src: '/images/logos/yidian.png', alt: '一点' },
    { src: '/images/logos/zhongshouyou.jpg', alt: '中手游' },
    { src: '/images/logos/zhimingxingtong.jpg', alt: '智明星通' },
    { src: '/images/logos/row2-5.png', alt: '' },
    { src: '/images/logos/row2-6.png', alt: '' },
  ],
  [
    { src: '/images/logos/bilibili.jpg', alt: '哔哩哔哩' },
    { src: '/images/logos/igg.jpg', alt: 'IGG' },
    { src: '/images/logos/jjworld.png', alt: 'JJ World' },
    { src: '/images/logos/juren.jpg', alt: '巨人网络' },
    { src: '/images/logos/babybus.jpg', alt: 'BabyBus' },
    { src: '/images/logos/jibit.png', alt: '吉比特' },
  ],
  [
    { src: '/images/logos/shengqu.png', alt: '盛趣' },
    { src: '/images/logos/row4-2.png', alt: '' },
    { src: '/images/logos/row4-3.jpg', alt: '' },
    { src: '/images/logos/jiamian.jpg', alt: '假面科技' },
    { src: '/images/logos/youzu.png', alt: '游族' },
    { src: '/images/logos/row4-6.png', alt: '' },
  ],
  [
    { src: '/images/logos/baiduvr.png', alt: '百度VR' },
    { src: '/images/logos/damenglongtu.jpg', alt: '大梦龙途' },
    { src: '/images/logos/motong.png', alt: '魔瞳' },
    { src: '/images/logos/row5-4.png', alt: '' },
    { src: '/images/logos/changyou.jpg', alt: '畅游' },
  ],
  [
    { src: '/images/logos/row6-1.jpg', alt: '' },
    { src: '/images/logos/row6-2.png', alt: '' },
    { src: '/images/logos/wanmei.jpg', alt: '完美世界' },
    { src: '/images/logos/row6-4.png', alt: '' },
    { src: '/images/logos/zilong.jpg', alt: '紫龙' },
  ],
  [
    { src: '/images/logos/tap4fun.jpg', alt: 'Tap4Fun' },
    { src: '/images/logos/row7-2.png', alt: '' },
    { src: '/images/logos/row7-3.jpg', alt: '' },
    { src: '/images/logos/sanbao.png', alt: '散爆网络' },
    { src: '/images/logos/row7-5.png', alt: '' },
    { src: '/images/logos/row7-6.png', alt: '' },
  ],
  [
    { src: '/images/logos/row8-1.jpg', alt: '' },
    { src: '/images/logos/mico.png', alt: 'Mico World' },
    { src: '/images/logos/row8-3.png', alt: '' },
    { src: '/images/logos/row8-4.jpg', alt: '' },
    { src: '/images/logos/row8-5.png', alt: '' },
    { src: '/images/logos/huran.png', alt: '忽然' },
  ],
  [
    { src: '/images/logos/baiyi.jpg', alt: '百易科技' },
    { src: '/images/logos/row9-2.jpg', alt: '' },
    { src: '/images/logos/xinguangliumei.png', alt: '心光流美' },
    { src: '/images/logos/row9-4.jpg', alt: '' },
    { src: '/images/logos/libi.png', alt: '利比' },
    { src: '/images/logos/weileyou.jpg', alt: '唯乐游' },
    { src: '/images/logos/row9-7.jpg', alt: '' },
  ],
  [
    { src: '/images/logos/row10-1.png', alt: '' },
    { src: '/images/logos/row10-2.webp', alt: '' },
    { src: '/images/logos/row10-3.png', alt: '' },
    { src: '/images/logos/row10-4.jpg', alt: '百果园' },
    { src: '/images/logos/row10-5.png', alt: '' },
    { src: '/images/logos/row10-6.png', alt: 'Playful Studios' },
  ],
  [
    { src: '/images/logos/row11-1.jpg', alt: '' },
    { src: '/images/logos/row11-2.jpg', alt: '' },
    { src: '/images/logos/row11-3.png', alt: '' },
    { src: '/images/logos/row11-4.jpg', alt: '' },
  ],
]
</script>

<style scoped>
/* ═══ Hero Section ═══ */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-hero);
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.hero-glow-1 { width: 600px; height: 600px; top: -100px; right: -100px; background: rgba(59, 130, 246, 0.12); }
.hero-glow-2 { width: 500px; height: 500px; bottom: -50px; left: -100px; background: rgba(139, 92, 246, 0.1); }

.hero-canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.45;
  pointer-events: auto;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 40px 20px;
  max-width: 800px;
}

.hero-title { font-size: clamp(42px, 6vw, 72px); font-weight: 800; margin-bottom: 24px; letter-spacing: -1px; }
.hero-subtitle { font-size: clamp(20px, 3vw, 28px); font-weight: 500; color: rgba(255,255,255,0.85); margin-bottom: 16px; letter-spacing: 2px; }
.hero-desc { font-size: clamp(16px, 2vw, 20px); color: rgba(255,255,255,0.5); margin-bottom: 40px; }
.hero-cta { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

.hero-scroll-hint { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 1; }
.scroll-arrow { width: 24px; height: 24px; border-right: 2px solid rgba(255,255,255,0.3); border-bottom: 2px solid rgba(255,255,255,0.3); transform: rotate(45deg); animation: scrollBounce 2s infinite; }
@keyframes scrollBounce { 0%,100% { transform: rotate(45deg) translateY(0); opacity: 0.3; } 50% { transform: rotate(45deg) translateY(8px); opacity: 0.8; } }

/* ═══ Product Showcase ═══ */
.showcase-section {
  position: relative;
  min-height: 80vh;
  background: var(--color-bg-alt);
  overflow: hidden;
  padding: 100px 0 80px;
}

.showcase-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: background 0.8s ease;
}

.showcase-glow-hybridclr { background: rgba(59, 130, 246, 0.08); }
.showcase-glow-leanclr { background: rgba(139, 92, 246, 0.08); }
.showcase-glow-luban { background: rgba(16, 185, 129, 0.08); }

.showcase-inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
}

.showcase-heading {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 40px;
}

/* Tabs */
.showcase-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 56px;
}

.showcase-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px 32px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: transparent;
  color: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  transition: all 0.35s ease;
  min-width: 180px;
}

.showcase-tab:hover {
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.7);
  border-color: rgba(255, 255, 255, 0.1);
}

.showcase-tab.active {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.25);
  color: #ffffff;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.08);
}

.tab-name {
  font-size: 18px;
  font-weight: 700;
  font-family: var(--font-heading);
}

.tab-tagline {
  font-size: 12px;
  font-weight: 400;
  opacity: 0.6;
}

/* Panel */
.showcase-panel {
  position: relative;
  min-height: 340px;
}

.panel-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.panel-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.badge-blue { background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.2); }
.badge-purple { background: rgba(139, 92, 246, 0.12); color: #a78bfa; border: 1px solid rgba(139, 92, 246, 0.2); }
.badge-green { background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.2); }

.panel-title { font-size: 44px; font-weight: 800; margin-bottom: 12px; }
.panel-tagline { font-size: 20px; color: rgba(255,255,255,0.65); margin-bottom: 16px; font-weight: 500; }
.panel-desc { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 32px; }
.panel-buttons { display: flex; gap: 12px; flex-wrap: wrap; }

/* Stats grid */
.stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.stat-card {
  padding: 28px 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: rgba(59, 130, 246, 0.2);
  transform: translateY(-2px);
}

.stat-value { font-size: 28px; font-weight: 800; color: #ffffff; margin-bottom: 6px; font-family: var(--font-heading); }
.stat-label { font-size: 13px; color: rgba(255,255,255,0.45); }

/* Panel transition */
.panel-enter-active,
.panel-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.panel-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.panel-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.panel-leave-active {
  position: absolute;
  width: 100%;
}

/* ═══ More Products ═══ */
.more-products-section { padding: 80px 40px; max-width: 1200px; margin: 0 auto; }
.more-title { font-size: 28px; font-weight: 700; color: var(--color-heading); margin-bottom: 32px; text-align: center; }
.more-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.more-card { padding: 32px; text-decoration: none; transition: all 0.3s ease; cursor: pointer; }
.more-card:hover { border-color: rgba(59,130,246,0.2); transform: translateY(-4px); box-shadow: 0 8px 30px rgba(59,130,246,0.1); }
.more-card h3 { font-size: 22px; font-weight: 700; color: #f1f5f9; margin-bottom: 10px; }
.more-card p { font-size: 15px; color: rgba(255,255,255,0.5); line-height: 1.7; margin-bottom: 16px; }
.more-card-links { display: flex; gap: 16px; }
.more-link { font-size: 14px; font-weight: 600; color: var(--color-primary); }

/* ═══ Users Section ═══ */
.users-section { position: relative; background: #f8fafc; padding: 0 0 80px; }
.users-curve { height: 80px; background: var(--color-bg-alt); border-radius: 0 0 50% 50% / 0 0 100% 100%; }
.users-content { max-width: 1200px; margin: 0 auto; padding: 40px 40px 0; }
.users-header { text-align: center; margin-bottom: 50px; }
.section-title { font-size: 36px; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
.section-subtitle-wrap { display: flex; align-items: center; justify-content: center; gap: 16px; }
.section-subtitle { font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 3px; font-weight: 600; }
.section-line { display: block; width: 40px; height: 1px; background: linear-gradient(90deg, transparent, #cbd5e1, transparent); }

.logo-grid { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 16px; margin-bottom: 16px; }
.logo-item { display: flex; align-items: center; justify-content: center; width: 130px; height: 72px; padding: 12px; background: #ffffff; border-radius: 10px; border: 1px solid #e2e8f0; transition: all 0.3s ease; }
.logo-item:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); border-color: #cbd5e1; }
.logo-item img { max-width: 100%; max-height: 100%; object-fit: contain; filter: grayscale(30%); opacity: 0.75; transition: all 0.3s ease; }
.logo-item:hover img { filter: grayscale(0%); opacity: 1; }

/* ═══ Responsive ═══ */
@media (max-width: 921px) {
  .showcase-section { padding: 80px 0 60px; }

  .showcase-tabs { flex-direction: column; align-items: center; }
  .showcase-tab { min-width: 260px; }

  .panel-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .panel-title { font-size: 36px; }

  .more-grid { grid-template-columns: 1fr; }
  .logo-item { width: 100px; height: 56px; padding: 8px; }
}

@media (max-width: 544px) {
  .hero-section { min-height: 90vh; }

  .showcase-inner { padding: 0 20px; }
  .showcase-tab { min-width: auto; width: 100%; padding: 12px 20px; }
  .tab-name { font-size: 16px; }
  .panel-title { font-size: 30px; }
  .stat-grid { gap: 10px; }
  .stat-card { padding: 20px 12px; }
  .stat-value { font-size: 22px; }

  .more-products-section { padding: 60px 20px; }
  .logo-item { width: 80px; height: 48px; }
  .users-content { padding: 30px 16px 0; }
  .section-title { font-size: 28px; }
}
</style>
