<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h2 class="hero-title animate-up">Focus Creative Games</h2>
        <h2 class="hero-subtitle animate-down">让开发者专注于创造更有乐趣的游戏</h2>
        <h2 class="hero-desc animate-down">我们致力于提供游戏行业的深度技术解决方案</h2>
      </div>
    </section>

    <!-- HybridCLR Section -->
    <section class="product-section hybridclr-section">
      <div class="product-inner">
        <div class="product-spacer"></div>
        <div class="product-content">
          <p class="product-name">HybridCLR</p>
          <p class="product-tagline">Unity全平台原生c#热更方案</p>
          <div class="product-desc">特性完整、零成本、高性能、低内存的近乎完美的Unity全平台原生c#热更方案</div>
          <p class="product-platforms">同时支持 iOS，Android，iPadOS，macOS，Windows，Linux 版本</p>
          <div class="product-buttons">
            <a href="https://www.hybridclr.cn/docs/other/businesscase" target="_blank" class="btn btn-primary">上线项目案例</a>
            <router-link to="/hybridclr" class="btn btn-primary">进入HybridCLR</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- LUBAN Section -->
    <section class="product-section luban-section">
      <div class="product-inner">
        <div class="product-spacer"></div>
        <div class="product-content">
          <p class="product-name">LUBAN</p>
          <p class="product-tagline">强大灵活的游戏配置解决方案</p>
          <div class="product-desc">增强的Excel格式，强大的数据校验能力，支持众多语言</div>
          <div class="product-buttons">
            <a href="https://www.datable.cn/" target="_blank" class="btn btn-primary">详细文档</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Spacer -->
    <section class="spacer-section"></section>

    <!-- Corporate Users Section -->
    <section class="users-section">
      <div class="users-header">
        <h2 class="section-title">合作用户</h2>
        <div class="section-subtitle-wrap">
          <span class="section-subtitle">corporate  user</span>
          <span class="divider-line"></span>
        </div>
      </div>
      <div class="logo-grid" v-for="(row, rowIdx) in logoRows" :key="rowIdx">
        <div class="logo-item" v-for="(logo, idx) in row" :key="idx">
          <img :src="logo.src" :alt="logo.alt" loading="lazy" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const logoRows = [
  // Row 1 - 6 logos
  [
    { src: '/images/logos/tencent.png', alt: '腾讯游戏' },
    { src: '/images/logos/netease.png', alt: '网易' },
    { src: '/images/logos/bytedance.png', alt: '字节跳动' },
    { src: '/images/logos/funplus.png', alt: 'FunPlus' },
    { src: '/images/logos/diezhi.jpg', alt: '叠纸' },
    { src: '/images/logos/lilith.png', alt: '莉莉丝' },
  ],
  // Row 2
  [
    { src: '/images/logos/row2-1.png', alt: '' },
    { src: '/images/logos/yidian.png', alt: '一点' },
    { src: '/images/logos/zhongshouyou.jpg', alt: '中手游' },
    { src: '/images/logos/zhimingxingtong.jpg', alt: '智明星通' },
    { src: '/images/logos/row2-5.png', alt: '' },
    { src: '/images/logos/row2-6.png', alt: '' },
  ],
  // Row 3
  [
    { src: '/images/logos/bilibili.jpg', alt: '哔哩哔哩' },
    { src: '/images/logos/igg.jpg', alt: 'IGG' },
    { src: '/images/logos/jjworld.png', alt: 'JJ World' },
    { src: '/images/logos/juren.jpg', alt: '巨人网络' },
    { src: '/images/logos/babybus.jpg', alt: 'BabyBus' },
    { src: '/images/logos/jibit.png', alt: '吉比特' },
  ],
  // Row 4
  [
    { src: '/images/logos/shengqu.png', alt: '盛趣' },
    { src: '/images/logos/row4-2.png', alt: '' },
    { src: '/images/logos/row4-3.jpg', alt: '' },
    { src: '/images/logos/jiamian.jpg', alt: '假面科技' },
    { src: '/images/logos/youzu.png', alt: '游族' },
    { src: '/images/logos/row4-6.png', alt: '' },
  ],
  // Row 5
  [
    { src: '/images/logos/baiduvr.png', alt: '百度VR' },
    { src: '/images/logos/damenglongtu.jpg', alt: '大梦龙途' },
    { src: '/images/logos/motong.png', alt: '魔瞳' },
    { src: '/images/logos/row5-4.png', alt: '' },
    { src: '/images/logos/changyou.jpg', alt: '畅游' },
  ],
  // Row 6
  [
    { src: '/images/logos/row6-1.jpg', alt: '' },
    { src: '/images/logos/row6-2.png', alt: '' },
    { src: '/images/logos/wanmei.jpg', alt: '完美世界' },
    { src: '/images/logos/row6-4.png', alt: '' },
    { src: '/images/logos/zilong.jpg', alt: '紫龙' },
  ],
  // Row 7
  [
    { src: '/images/logos/tap4fun.jpg', alt: 'Tap4Fun' },
    { src: '/images/logos/row7-2.png', alt: '' },
    { src: '/images/logos/row7-3.jpg', alt: '' },
    { src: '/images/logos/sanbao.png', alt: '散爆网络' },
    { src: '/images/logos/row7-5.png', alt: '' },
    { src: '/images/logos/row7-6.png', alt: '' },
  ],
  // Row 8
  [
    { src: '/images/logos/row8-1.jpg', alt: '' },
    { src: '/images/logos/mico.png', alt: 'Mico World' },
    { src: '/images/logos/row8-3.png', alt: '' },
    { src: '/images/logos/row8-4.jpg', alt: '' },
    { src: '/images/logos/row8-5.png', alt: '' },
    { src: '/images/logos/huran.png', alt: '忽然' },
  ],
  // Row 9
  [
    { src: '/images/logos/baiyi.jpg', alt: '百易科技' },
    { src: '/images/logos/row9-2.jpg', alt: '' },
    { src: '/images/logos/xinguangliumei.png', alt: '心光流美' },
    { src: '/images/logos/row9-4.jpg', alt: '' },
    { src: '/images/logos/libi.png', alt: '利比' },
    { src: '/images/logos/weileyou.jpg', alt: '唯乐游' },
    { src: '/images/logos/row9-7.jpg', alt: '' },
  ],
  // Row 10
  [
    { src: '/images/logos/row10-1.png', alt: '' },
    { src: '/images/logos/row10-2.webp', alt: '' },
    { src: '/images/logos/row10-3.png', alt: '' },
    { src: '/images/logos/row10-4.jpg', alt: '百果园' },
    { src: '/images/logos/row10-5.png', alt: '' },
    { src: '/images/logos/row10-6.png', alt: 'Playful Studios' },
  ],
  // Row 11
  [
    { src: '/images/logos/row11-1.jpg', alt: '' },
    { src: '/images/logos/row11-2.jpg', alt: '' },
    { src: '/images/logos/row11-3.png', alt: '' },
    { src: '/images/logos/row11-4.jpg', alt: '' },
  ],
]
</script>

<style scoped>
/* Page background - same texture throughout hero and gaps */
.home-page {
  background: url('/images/bg/hero-bg.jpg') center top / contain repeat;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 60px; /* account for fixed header */
  margin-bottom: 70px;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 20px;
  max-width: 900px;
}

.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 56px;
  color: #ffffff;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: #e0e0e0;
  margin-bottom: 16px;
}

.hero-desc {
  font-size: 22px;
  color: #cccccc;
  font-weight: 400;
}

.animate-up {
  animation: fadeInUp 1s ease forwards;
}

.animate-down {
  animation: fadeInDown 1s ease 0.3s forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Product Sections */
.product-section {
  padding: 120px 0;
  min-height: 500px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hybridclr-section {
  background: url('/images/bg/hybridclr-section-bg.jpg') bottom right / cover no-repeat;
  margin-top: 250px;
}

.luban-section {
  background: url('/images/bg/luban-section-bg.jpg') bottom left / cover no-repeat;
}

.product-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  padding: 0 40px;
}

.product-spacer {
  flex: 1;
}

.product-content {
  flex: 1;
  color: #ffffff;
}

.product-name {
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  font-family: 'Montserrat', sans-serif;
}

.product-tagline {
  font-size: 20px;
  color: #b0b0d0;
  margin-bottom: 20px;
}

.product-desc {
  font-size: 16px;
  color: #9999bb;
  margin-bottom: 16px;
  line-height: 1.6;
  min-height: 60px;
}

.product-platforms {
  font-size: 15px;
  color: #8888aa;
  margin-bottom: 30px;
}

.product-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: #046bd2;
  color: #ffffff;
}

.btn-primary:hover {
  background: #045cb4;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(4, 107, 210, 0.4);
}

/* Spacer */
.spacer-section {
  height: 60px;
  background: linear-gradient(135deg, #f0f0f5, #e8e8f0);
}

/* Users Section */
.users-section {
  background: #ffffff;
  padding: 60px 40px 80px;
  max-width: 1920px;
  margin: 0 auto;
}

.users-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 36px;
  color: #1e293b;
  margin-bottom: 8px;
}

.section-subtitle-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.section-subtitle {
  font-size: 16px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.divider-line {
  display: block;
  width: 80px;
  height: 2px;
  background: #e2e8f0;
}

.logo-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 24px;
  padding: 0 20px;
}

.logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 80px;
  padding: 8px;
}

.logo-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(20%);
  opacity: 0.85;
  transition: all 0.3s ease;
}

.logo-item img:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}

@media (max-width: 921px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 24px;
  }

  .hero-desc {
    font-size: 18px;
  }

  .hero-section {
    min-height: 300px;
  }

  .hybridclr-section {
    margin-top: 120px;
  }

  .product-inner {
    flex-direction: column;
    padding: 0 20px;
  }

  .product-spacer {
    display: none;
  }

  .product-section {
    padding: 80px 0;
    min-height: 400px;
  }

  .product-name {
    font-size: 28px;
  }

  .users-section {
    padding: 40px 20px 60px;
  }

  .logo-item {
    width: 100px;
    height: 60px;
  }
}

@media (max-width: 544px) {
  .hero-title {
    font-size: 28px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-desc {
    font-size: 15px;
  }

  .hero-section {
    min-height: 250px;
  }

  .hybridclr-section {
    margin-top: 60px;
  }

  .logo-item {
    width: 80px;
    height: 50px;
  }

  .section-title {
    font-size: 28px;
  }
}
</style>
