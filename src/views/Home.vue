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

    <!-- Product Catalog -->
    <section class="products-section">
      <div class="products-glow"></div>
      <div class="products-inner fade-in-up">
        <h2 class="products-heading">核心产品</h2>
        <p class="products-intro">覆盖 C# 运行时、脚本方案、游戏配置与代码安全</p>

        <div class="product-groups">
          <div
            v-for="group in productGroups"
            :key="group.id"
            class="product-group"
            :class="'group-' + group.id"
          >
            <div class="group-header">
              <span class="group-label">{{ group.title }}</span>
              <span class="group-subtitle">{{ group.subtitle }}</span>
            </div>
            <div class="product-grid" :class="'cols-' + group.cols">
              <article
                v-for="p in group.products"
                :key="p.id"
                class="product-card glass-card"
                :class="{ featured: p.featured }"
              >
                <div class="product-card-top">
                  <span class="product-badge" :class="p.badgeClass">{{ p.badge }}</span>
                  <a
                    v-if="liveStars[p.id]"
                    class="product-stars"
                    :href="p.github || p.externalLink"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
                    {{ liveStars[p.id] }}
                  </a>
                </div>
                <h3 class="product-name">{{ p.name }}</h3>
                <p class="product-tagline">{{ p.tagline }}</p>
                <p class="product-desc">{{ p.desc }}</p>
                <div class="product-actions">
                  <router-link
                    v-if="p.detailLink"
                    :to="p.detailLink"
                    class="btn-glow btn-glow-primary"
                  >了解更多</router-link>
                  <a
                    :href="p.externalLink"
                    target="_blank"
                    rel="noopener"
                    class="btn-glow"
                    :class="p.detailLink ? 'btn-glow-outline' : 'btn-glow-primary'"
                  >{{ p.externalLabel }}</a>
                  <a
                    v-if="p.github && !p.detailLink"
                    :href="p.github"
                    target="_blank"
                    rel="noopener"
                    class="btn-glow btn-glow-outline"
                  >GitHub</a>
                </div>
              </article>
            </div>
          </div>
        </div>

        <a href="https://github.com/focus-creative-games" target="_blank" rel="noopener" class="all-projects-link">
          在 GitHub 上查看全部开源项目
          <span aria-hidden="true">&rarr;</span>
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
import { useGithubStars } from '../composables/useGithubStars'

const canvasRef = ref<HTMLCanvasElement | null>(null)
useParticleCanvas(canvasRef)

interface ProductItem {
  id: string
  name: string
  badge: string
  badgeClass: string
  featured?: boolean
  tagline: string
  desc: string
  stars: string
  repo: string
  detailLink?: string
  externalLink: string
  externalLabel: string
  github?: string
}

interface ProductGroup {
  id: string
  title: string
  subtitle: string
  cols: 1 | 2 | 3
  products: ProductItem[]
}

const productGroups: ProductGroup[] = [
  {
    id: 'runtime',
    title: 'C# 运行时',
    subtitle: '原生 C# 热更新与轻量 CLR',
    cols: 2,
    products: [
      {
        id: 'hybridclr',
        name: 'HybridCLR',
        badge: '核心产品',
        badgeClass: 'badge-blue',
        featured: true,
        tagline: 'Unity 全平台原生 C# 热更方案',
        desc: '特性完整、零成本、高性能、低内存。扩充 il2cpp 为 AOT + Interpreter 混合运行时，原生支持动态加载程序集。已有数千商业项目接入，开创性的 DHE 技术让热更运行达到原生 AOT 水平。',
        stars: '8.0k',
        repo: 'focus-creative-games/hybridclr',
        detailLink: '/hybridclr',
        externalLink: 'https://github.com/focus-creative-games/hybridclr',
        externalLabel: 'GitHub',
      },
      {
        id: 'leanclr',
        name: 'LeanCLR',
        badge: '全新产品',
        badgeClass: 'badge-purple',
        tagline: '面向生产的轻量跨平台 CLR',
        desc: '高 ECMA-335 兼容、易嵌入、强跨平台。可替换 IL2CPP 作为 Unity WebGL / 小游戏发布运行时，选择性 AOT 下代码可减少 70%–90%。标准 C++11 实现，Core 单线程版可裁剪至约 300KB。',
        stars: '663',
        repo: 'focus-creative-games/leanclr',
        detailLink: '/leanclr',
        externalLink: 'https://doc.leanclr.com/',
        externalLabel: '官方文档',
        github: 'https://github.com/focus-creative-games/leanclr',
      },
    ],
  },
  {
    id: 'scripting',
    title: '脚本方案',
    subtitle: '面向 Unity 的现代 Lua / TypeScript，以及下一代 Lua 运行时',
    cols: 3,
    products: [
      {
        id: 'zlua',
        name: 'ZLua',
        badge: 'Lua',
        badgeClass: 'badge-cyan',
        tagline: '为 IL2CPP 极致优化的 Unity Lua 方案',
        desc: '零配置开箱即用，无需 per-type Wrap 白名单。C# 与 Lua 可任意互调，引用类型与 struct 默认 0 GC。Il2Cpp 实测显著优于 xLua / toLua / SLua，支持 Lua 5.1–5.5 与 LuaJIT。',
        stars: '226',
        repo: 'focus-creative-games/zlua',
        detailLink: '/zlua',
        externalLink: 'https://doc.zlua.cn',
        externalLabel: '官方文档',
        github: 'https://github.com/focus-creative-games/zlua',
      },
      {
        id: 'zents',
        name: 'ZenTS',
        badge: 'TypeScript',
        badgeClass: 'badge-cyan',
        tagline: '为 IL2CPP 极致优化的 Unity TypeScript 方案',
        desc: '由 QuickJS 驱动，设计与 ZLua 对齐。零 Wrap 白名单，完备的 C#↔JS 交互，官方 TypeScript 工作流。会用 ZLua，即可很快上手 ZenTS。',
        stars: '4',
        repo: 'focus-creative-games/zen-ts',
        detailLink: '/zents',
        externalLink: 'https://zents.code-philosophy.com/',
        externalLabel: '官方文档',
        github: 'https://github.com/focus-creative-games/zen-ts',
      },
      {
        id: 'luatier',
        name: 'LuaTier',
        badge: '研发中',
        badgeClass: 'badge-orange',
        tagline: '分层混合执行的现代 Lua 运行时',
        desc: '从零用 C++17 重写，支持 Lua 5.3+。提供字节码解释器、离线 AOT 编译与可选 tracing JIT，并非历史 LuaJIT 的衍生。',
        stars: '12',
        repo: 'focus-creative-games/luatier',
        detailLink: '/luatier',
        externalLink: 'https://github.com/focus-creative-games/luatier',
        externalLabel: 'GitHub',
      },
    ],
  },
  {
    id: 'config',
    title: '游戏配置',
    subtitle: '从小型到超大型项目的配置工作流',
    cols: 1,
    products: [
      {
        id: 'luban',
        name: 'Luban',
        badge: '热门项目',
        badgeClass: 'badge-green',
        tagline: '强大、易用、优雅、稳定的游戏配置方案',
        desc: '增强的 Excel 格式，完备类型系统（含 OOP 继承），强大的数据校验，内置生成 C#、Java、Go、C++、Lua、TypeScript 等十余种语言代码。支持 Unity、UE、Godot 等主流引擎。',
        stars: '4.5k',
        repo: 'focus-creative-games/luban',
        detailLink: '/luban',
        externalLink: 'https://www.datable.cn/',
        externalLabel: '文档站',
        github: 'https://github.com/focus-creative-games/luban',
      },
    ],
  },
  {
    id: 'security',
    title: '代码安全',
    subtitle: 'Unity 代码混淆与加固',
    cols: 1,
    products: [
      {
        id: 'obfuz',
        name: 'Obfuz',
        badge: '安全加固',
        badgeClass: 'badge-rose',
        tagline: '开源 Unity 代码混淆与加固方案',
        desc: '深度集成 Unity 工作流，默认无需配置即可良好工作。支持符号/常量/控制流混淆与随机加密虚拟机，全面兼容 HybridCLR、xLua 等热更新方案，三分钟即可接入。',
        stars: '800',
        repo: 'focus-creative-games/obfuz',
        detailLink: '/obfuz',
        externalLink: 'https://www.obfuz.com/',
        externalLabel: '文档站',
        github: 'https://github.com/focus-creative-games/obfuz',
      },
    ],
  },
]

const allProducts = productGroups.flatMap((g) => g.products)
const { stars: liveStars } = useGithubStars(
  Object.fromEntries(allProducts.map((p) => [p.id, p.repo])),
  Object.fromEntries(allProducts.map((p) => [p.id, p.stars])),
)

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

/* ═══ Product Catalog ═══ */
.products-section {
  position: relative;
  background: var(--color-bg-alt);
  overflow: hidden;
  padding: 100px 0 80px;
}

.products-glow {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(59, 130, 246, 0.07);
}

.products-inner {
  position: relative;
  z-index: 1;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 40px;
}

.products-heading {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-text-light);
  text-align: center;
  margin-bottom: 12px;
}

.products-intro {
  text-align: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 56px;
}

.product-groups {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px 24px;
}

.group-runtime,
.group-scripting {
  grid-column: 1 / -1;
}

.group-header {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.group-label {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #f1f5f9;
  font-family: var(--font-heading);
}

.group-subtitle {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
}

.product-grid {
  display: grid;
  gap: 20px;
}

.product-grid.cols-2,
.product-grid.cols-1 {
  grid-template-columns: repeat(2, 1fr);
}

.product-grid.cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.group-config .product-grid,
.group-security .product-grid {
  grid-template-columns: 1fr;
}

.product-card {
  display: flex;
  flex-direction: column;
  padding: 28px 26px 24px;
  transition: all 0.3s ease;
  min-height: 100%;
}

.product-card:hover {
  border-color: rgba(59, 130, 246, 0.25);
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.1);
}

.product-card.featured {
  border-color: rgba(59, 130, 246, 0.28);
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.08), 0 8px 32px rgba(59, 130, 246, 0.08);
}

.product-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.product-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.badge-blue { background: rgba(59, 130, 246, 0.12); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.2); }
.badge-purple { background: rgba(139, 92, 246, 0.12); color: #a78bfa; border: 1px solid rgba(139, 92, 246, 0.2); }
.badge-green { background: rgba(16, 185, 129, 0.12); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.2); }
.badge-cyan { background: rgba(6, 182, 212, 0.12); color: #22d3ee; border: 1px solid rgba(6, 182, 212, 0.2); }
.badge-orange { background: rgba(249, 115, 22, 0.12); color: #fb923c; border: 1px solid rgba(249, 115, 22, 0.2); }
.badge-rose { background: rgba(244, 63, 94, 0.12); color: #fb7185; border: 1px solid rgba(244, 63, 94, 0.2); }

.product-stars {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-family: var(--font-heading);
}

.product-stars:hover {
  color: #fbbf24;
}

.product-name {
  font-size: 26px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 8px;
}

.product-tagline {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  margin-bottom: 12px;
}

.product-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.75;
  margin-bottom: 24px;
  flex: 1;
}

.product-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.product-actions .btn-glow {
  padding: 10px 20px;
  font-size: 14px;
}

.all-projects-link {
  display: block;
  text-align: center;
  margin-top: 48px;
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  transition: color 0.2s;
}

.all-projects-link:hover {
  color: #93c5fd;
}

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
  .products-section { padding: 80px 0 60px; }
  .products-inner { padding: 0 24px; }
  .product-groups { grid-template-columns: 1fr; gap: 40px; }
  .product-grid.cols-2,
  .product-grid.cols-3 { grid-template-columns: 1fr; }
  .logo-item { width: 100px; height: 56px; padding: 8px; }
}

@media (max-width: 544px) {
  .hero-section { min-height: 90vh; }
  .products-inner { padding: 0 20px; }
  .product-name { font-size: 22px; }
  .product-card { padding: 22px 20px 20px; }
  .logo-item { width: 80px; height: 48px; }
  .users-content { padding: 30px 16px 0; }
  .section-title { font-size: 28px; }
}
</style>
