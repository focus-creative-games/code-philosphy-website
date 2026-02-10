<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-glow hero-glow-1"></div>
      <div class="hero-glow hero-glow-2"></div>
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

    <!-- Product: HybridCLR -->
    <section class="product-section product-section-hybridclr">
      <div class="product-bg product-bg-gradient-blue"></div>
      <div class="product-glow product-glow-blue"></div>
      <div class="product-inner fade-in-up">
        <div class="product-glass glass-card">
          <div class="product-badge">核心产品</div>
          <h2 class="product-name gradient-text">HybridCLR</h2>
          <p class="product-tagline">Unity 全平台原生 C# 热更方案</p>
          <p class="product-desc">特性完整、零成本、高性能、低内存。已有数千商业项目接入，百款游戏双端上线。</p>
          <div class="product-tags">
            <span class="tag"><strong>7700+</strong> GitHub Stars</span>
            <span class="tag"><strong>千款</strong>商业项目</span>
            <span class="tag">MIT 开源</span>
          </div>
          <div class="product-buttons">
            <router-link to="/hybridclr" class="btn-glow btn-glow-primary">了解更多</router-link>
            <a href="https://github.com/focus-creative-games/hybridclr" target="_blank" class="btn-glow btn-glow-outline">GitHub</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Product: LeanCLR -->
    <section class="product-section product-section-alt">
      <div class="product-bg product-bg-gradient"></div>
      <div class="product-glow"></div>
      <div class="product-inner product-inner-reverse fade-in-up">
        <div class="product-glass glass-card">
          <div class="product-badge product-badge-new">全新产品</div>
          <h2 class="product-name gradient-text">LeanCLR</h2>
          <p class="product-tagline">轻量级跨平台 CLR 运行时</p>
          <p class="product-desc">极致精简、轻松嵌入、低内存占用。单线程版 X64/WebAssembly 仅 600KB，可裁剪至 300KB。面向移动/H5/小游戏等资源受限平台。</p>
          <div class="product-tags">
            <span class="tag"><strong>600KB</strong> 极致精简</span>
            <span class="tag">纯 <strong>C++17</strong></span>
            <span class="tag">全平台</span>
          </div>
          <div class="product-buttons">
            <router-link to="/leanclr" class="btn-glow btn-glow-primary">了解更多</router-link>
            <a href="https://github.com/focus-creative-games/leanclr" target="_blank" class="btn-glow btn-glow-outline">GitHub</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Product: Luban -->
    <section class="product-section product-section-luban">
      <div class="product-bg product-bg-gradient-green"></div>
      <div class="product-glow product-glow-green"></div>
      <div class="product-inner fade-in-up">
        <div class="product-glass glass-card">
          <h2 class="product-name gradient-text">Luban</h2>
          <p class="product-tagline">强大灵活的游戏配置解决方案</p>
          <p class="product-desc">增强的 Excel 格式，完整的类型系统，强大的数据校验，支持十余种编程语言代码生成。</p>
          <div class="product-tags">
            <span class="tag"><strong>4300+</strong> GitHub Stars</span>
            <span class="tag"><strong>13+</strong> 语言支持</span>
            <span class="tag">MIT 开源</span>
          </div>
          <div class="product-buttons">
            <router-link to="/luban" class="btn-glow btn-glow-primary">了解更多</router-link>
            <a href="https://www.datable.cn/" target="_blank" class="btn-glow btn-glow-outline">文档站</a>
          </div>
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
/* Hero Section */
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

.hero-glow-1 {
  width: 600px;
  height: 600px;
  top: -100px;
  right: -100px;
  background: rgba(59, 130, 246, 0.12);
}

.hero-glow-2 {
  width: 500px;
  height: 500px;
  bottom: -50px;
  left: -100px;
  background: rgba(139, 92, 246, 0.1);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 20px;
  max-width: 800px;
}

.hero-title {
  font-size: clamp(42px, 6vw, 72px);
  font-weight: 800;
  margin-bottom: 24px;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.hero-desc {
  font-size: clamp(16px, 2vw, 20px);
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 40px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-scroll-hint {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.scroll-arrow {
  width: 24px;
  height: 24px;
  border-right: 2px solid rgba(255, 255, 255, 0.3);
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  transform: rotate(45deg);
  animation: scrollBounce 2s infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: rotate(45deg) translateY(0); opacity: 0.3; }
  50% { transform: rotate(45deg) translateY(8px); opacity: 0.8; }
}

/* Product Sections */
.product-section {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.product-bg {
  position: absolute;
  inset: 0;
}

/* HybridCLR: blue accent */
.product-bg-gradient-blue {
  background: linear-gradient(135deg, #0a0f1e 0%, #0c1a3a 50%, #0a0f1e 100%);
}

.product-glow-blue {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translate(0, -50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 60%);
  pointer-events: none;
}

/* LeanCLR: purple accent */
.product-bg-gradient {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
}

.product-glow {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.12), transparent 60%);
  pointer-events: none;
}

/* Luban: teal/emerald accent */
.product-bg-gradient-green {
  background: linear-gradient(135deg, #0a0f1e 0%, #0a2520 50%, #0a0f1e 100%);
}

.product-glow-green {
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(0, -50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent 60%);
  pointer-events: none;
}

.product-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 40px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.product-inner-reverse {
  justify-content: flex-start;
}

.product-glass {
  max-width: 560px;
  padding: 48px;
}

.product-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.2);
  margin-bottom: 20px;
}

.product-badge-new {
  background: rgba(139, 92, 246, 0.15);
  color: #a78bfa;
  border-color: rgba(139, 92, 246, 0.2);
}

.product-name {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 12px;
}

.product-tagline {
  font-size: 22px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
  font-weight: 500;
}

.product-desc {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.8;
  margin-bottom: 24px;
}

.product-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.tag {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.tag strong {
  color: #ffffff;
}

.product-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* More Products */
.more-products-section {
  padding: 80px 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.more-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 32px;
  text-align: center;
}

.more-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.more-card {
  padding: 32px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.more-card:hover {
  border-color: rgba(59, 130, 246, 0.2);
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.1);
}

.more-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 10px;
}

.more-card p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.7;
  margin-bottom: 16px;
}

.more-card-links {
  display: flex;
  gap: 16px;
}

.more-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary);
}

/* Users Section */
.users-section {
  position: relative;
  background: #f8fafc;
  padding: 0 0 80px;
}

.users-curve {
  height: 80px;
  background: var(--color-bg);
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
}

.users-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 40px 0;
}

.users-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
}

.section-subtitle-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.section-subtitle {
  font-size: 13px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
}

.section-line {
  display: block;
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #cbd5e1, transparent);
}

.logo-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 72px;
  padding: 12px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.logo-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  border-color: #cbd5e1;
}

.logo-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(30%);
  opacity: 0.75;
  transition: all 0.3s ease;
}

.logo-item:hover img {
  filter: grayscale(0%);
  opacity: 1;
}

/* Responsive */
@media (max-width: 921px) {
  .product-inner,
  .product-inner-reverse {
    justify-content: center;
    padding: 60px 20px;
  }

  .product-glass {
    max-width: 100%;
    padding: 32px;
  }

  .product-name {
    font-size: 36px;
  }

  .product-tagline {
    font-size: 18px;
  }

  .more-grid {
    grid-template-columns: 1fr;
  }

  .logo-item {
    width: 100px;
    height: 56px;
    padding: 8px;
  }
}

@media (max-width: 544px) {
  .hero-section {
    min-height: 90vh;
  }

  .product-section {
    min-height: auto;
  }

  .product-glass {
    padding: 24px;
  }

  .product-name {
    font-size: 30px;
  }

  .more-products-section {
    padding: 60px 20px;
  }

  .logo-item {
    width: 80px;
    height: 48px;
  }

  .users-content {
    padding: 30px 16px 0;
  }

  .section-title {
    font-size: 28px;
  }
}
</style>
