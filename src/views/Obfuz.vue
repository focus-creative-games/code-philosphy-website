<template>
  <div class="obfuz-page">
    <section class="page-hero">
      <div class="page-hero-glow glow-1"></div>
      <div class="page-hero-glow glow-2"></div>
      <div class="page-hero-content fade-in-up">
        <div class="hero-badge hero-badge-rose">代码安全</div>
        <h1 class="hero-title gradient-text">Obfuz</h1>
        <p class="hero-subtitle">开源、强大、易用的 Unity 代码混淆与加固方案</p>
        <p class="hero-desc">深度集成 Unity 工作流，默认无需配置混淆规则即可良好工作。三分钟接入，全面兼容 HybridCLR、xLua 等热更新方案。</p>

        <div class="hero-stats">
          <div class="stat-card glass-card">
            <div class="stat-number">3 分钟</div>
            <div class="stat-label">快速接入</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">3000+</div>
            <div class="stat-label">自动化测试用例</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">2019+</div>
            <div class="stat-label">Unity / 团结引擎</div>
          </div>
          <div class="stat-card glass-card">
            <div class="stat-number">MIT</div>
            <div class="stat-label">开源协议</div>
          </div>
        </div>

        <div class="hero-cta">
          <a href="https://www.obfuz.com/" target="_blank" rel="noopener" class="btn-glow btn-glow-primary">文档站</a>
          <a href="https://github.com/focus-creative-games/obfuz" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">GitHub</a>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">为什么选择 Obfuz</h2>
        <p class="section-desc">功能对标商业工具，同时为 Unity 工作流做了自动化处理（如 MonoBehaviour 名默认不混淆）。</p>
        <div class="features-grid">
          <div class="feature-card glass-card" v-for="f in reasons" :key="f.title">
            <div class="feature-icon">{{ f.icon }}</div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="compare-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">功能特性</h2>
        <p class="section-desc">从符号到控制流，再到随机加密虚拟机，覆盖商业项目常见加固需求。</p>
        <div class="features-grid">
          <div class="feature-card glass-card" v-for="f in capabilities" :key="f.title">
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="tags-section">
      <div class="section-inner fade-in-up">
        <h2 class="section-heading">支持范围</h2>
        <div class="tag-list">
          <span class="tag-item" v-for="t in platforms" :key="t">{{ t }}</span>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="section-inner fade-in-up" style="text-align: center;">
        <h2 class="section-heading">开始使用 Obfuz</h2>
        <p class="section-desc">配置需要混淆的程序集即可。后续将加入反调试、代码虚拟化等能力。</p>
        <div class="cta-buttons">
          <a href="https://www.obfuz.com/" target="_blank" rel="noopener" class="btn-glow btn-glow-primary">快速上手</a>
          <a href="https://github.com/focus-creative-games/obfuz" target="_blank" rel="noopener" class="btn-glow btn-glow-outline">GitHub 仓库</a>
          <router-link to="/hybridclr" class="btn-glow btn-glow-outline">了解 HybridCLR</router-link>
        </div>
        <p class="cta-contact">QQ 群 1048396510 · Discord · obfuz@code-philosophy.com</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const reasons = [
  { icon: '🛡️', title: '功能强大', desc: '提供媲美商业工具的混淆与代码加固能力，含多态 DLL、控制流平坦化与随机加密虚拟机。' },
  { icon: '🎮', title: '深度集成 Unity', desc: '自动处理除反射外几乎所有特殊情况（如 MonoBehaviour 名不能混淆），默认无需写规则即可工作。' },
  { icon: '⏱️', title: '快速集成', desc: '只需配置哪些程序集需要被混淆，三分钟即可接入。' },
  { icon: '✅', title: '稳定可靠', desc: '全面自动化测试，成功通过 3000 多个用例，覆盖常见代码形态。' },
  { icon: '🔥', title: '支持热更新', desc: '兼容 HybridCLR、xLua 等主流代码热更新方案。' },
  { icon: '🆓', title: '开源免费', desc: 'MIT 协议，可自由使用、修改和分发。' },
]

const capabilities = [
  { title: '多态 DLL', desc: '自定义结构随机化的 DLL 格式，每次发布结构都不同，对抗破解与篡改。' },
  { title: '符号 / 常量混淆', desc: '丰富配置与增量混淆；混淆 int、long、float、double、string、数组等常量。' },
  { title: '内存与栈混淆', desc: '加密内存中的变量，混淆执行栈中的变量，提高运行时逆向难度。' },
  { title: '表达式与调用', desc: '混淆常见运算，打乱函数调用结构。' },
  { title: '控制流平坦化', desc: '打乱代码执行流程，显著增加逆向成本。' },
  { title: '随机加密虚拟机', desc: '生成随机化虚拟机，抵御反编译工具；结合静态与动态解密。' },
  { title: '垃圾代码与水印', desc: '多种垃圾代码生成，提高商店审核通过率；可嵌入可追踪水印。' },
  { title: '兼容 DOTS', desc: '兼容 DOTS 各版本，无需额外配置。' },
  { title: '混淆多态化', desc: '通过不同生成密钥和随机种子，产出不同的混淆代码。' },
]

const platforms = [
  'Unity 2019+',
  '团结引擎',
  'Il2Cpp / Mono',
  '全平台',
  'HybridCLR / xLua',
]
</script>

<style scoped src="../styles/product-page.css"></style>
