<template>
  <div class="hybridclr-page">
    <!-- Hero Banner -->
    <section class="hclr-hero">
      <div class="hero-glow hero-glow-1"></div>
      <div class="hero-glow hero-glow-2"></div>
      <div class="hclr-hero-content fade-in-up">
        <div class="hero-badge">核心产品</div>
        <h1 class="hclr-hero-title gradient-text">HybridCLR</h1>
        <p class="hclr-hero-subtitle">Unity 全平台原生 C# 热更方案</p>
        <p class="hclr-hero-desc">特性完整、零成本、高性能、低内存</p>

        <!-- Stats -->
        <div class="hclr-stats">
          <div class="stat-card glass-card">
            <p class="stat-title">头部公司正在使用</p>
            <p class="stat-detail">腾讯/网易/叠纸/莉莉丝/FunPlus</p>
          </div>
          <div class="stat-card glass-card">
            <p class="stat-title">千个商业项目接入</p>
            <p class="stat-detail">百款游戏双端上线</p>
          </div>
          <div class="stat-card glass-card">
            <p class="stat-title">2700+ 测试用例</p>
            <p class="stat-detail">全平台 2019-6000 测试通过</p>
          </div>
          <div class="stat-card glass-card">
            <p class="stat-title">开创 DHE 技术</p>
            <p class="stat-detail">热更运行达到原生 AOT 水平</p>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="hclr-cta">
          <a href="https://github.com/focus-creative-games/hybridclr" target="_blank" class="btn-glow btn-glow-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            免费使用社区版
          </a>
          <a href="https://www.hybridclr.cn/docs/business" target="_blank" class="btn-glow btn-glow-outline">商业版本特性</a>
          <a href="https://www.hybridclr.cn/docs/other/businesscase" target="_blank" class="btn-glow btn-glow-outline">上线项目案例</a>
        </div>
      </div>
    </section>

    <!-- Version Comparison -->
    <section class="version-section">
      <div class="version-inner fade-in-up">
        <h2 class="section-heading">商业版本对比</h2>
        <p class="section-desc">我们提供多种高端商业版本及可灵活定制的技术服务，满足游戏项目在各种应用场景下的需求。所有商业化版本都会长期支持 Unity 2019-2022 LTS 版本。</p>
        <a href="https://www.hybridclr.cn/docs/business" target="_blank" class="btn-glow btn-glow-primary" style="margin-bottom: 20px;">商业版本特性</a>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="pricing-section">
      <div class="pricing-grid fade-in-up">
        <!-- Community -->
        <div class="pricing-card glass-card">
          <div class="pricing-header">
            <div class="pricing-icon">🔓</div>
            <h3 class="pricing-title">社区版</h3>
          </div>
          <p class="pricing-desc">满足 95% 以上商业项目的要求</p>
          <p class="pricing-price">免费</p>
          <ul class="pricing-features">
            <li>解释执行</li>
            <li>MonoBehaviour</li>
            <li>补充元数据</li>
            <li>增量式 GC</li>
            <li>Unity 2019-2022 LTS</li>
            <li><a href="https://www.hybridclr.cn/docs/basic/dots" target="_blank">DOTS</a></li>
          </ul>
          <a href="https://github.com/focus-creative-games/hybridclr" target="_blank" class="btn-glow btn-glow-primary" style="width: 100%; justify-content: center;">免费使用社区版</a>
        </div>

        <!-- Professional -->
        <div class="pricing-card glass-card pricing-featured">
          <div class="pricing-recommend">推荐</div>
          <div class="pricing-header">
            <div class="pricing-icon">⚡</div>
            <h3 class="pricing-title">专业版</h3>
          </div>
          <p class="pricing-desc">对代码安全、内存及性能优化有较高需求的项目</p>
          <p class="pricing-price">邮件咨询价格</p>
          <ul class="pricing-features">
            <li>解释执行</li>
            <li>MonoBehaviour</li>
            <li>补充元数据</li>
            <li>增量式 GC</li>
            <li>Unity 2019-2022 LTS</li>
            <li><a href="https://www.hybridclr.cn/docs/basic/dots" target="_blank">DOTS</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/fullgenericsharing" target="_blank">完全泛型共享</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/metadataoptimization" target="_blank">元数据优化</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/basicoptimization" target="_blank">标准解释性能优化</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/advancedoptimization" target="_blank">离线指令优化</a></li>
            <li class="feature-highlight"><a href="https://www.hybridclr.cn/docs/business/basicencryption" target="_blank">代码加固</a></li>
            <li class="feature-highlight">两年技术支持</li>
            <li class="feature-highlight">提供全部源码</li>
          </ul>
        </div>

        <!-- Flagship -->
        <div class="pricing-card glass-card">
          <div class="pricing-header">
            <div class="pricing-icon">🚀</div>
            <h3 class="pricing-title">旗舰版</h3>
          </div>
          <p class="pricing-desc">性能与原生基本持平，适合有严苛性能要求的项目</p>
          <p class="pricing-price">邮件咨询价格</p>
          <ul class="pricing-features">
            <li>解释执行</li>
            <li>MonoBehaviour</li>
            <li>补充元数据</li>
            <li>增量式 GC</li>
            <li>Unity 2019-2022 LTS</li>
            <li><a href="https://www.hybridclr.cn/docs/basic/dots" target="_blank">DOTS</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/fullgenericsharing" target="_blank">完全泛型共享</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/metadataoptimization" target="_blank">元数据优化</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/basicoptimization" target="_blank">标准解释性能优化</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/advancedoptimization" target="_blank">离线指令优化</a></li>
            <li class="feature-highlight"><a href="https://www.hybridclr.cn/docs/business/basicencryption" target="_blank">代码加固</a></li>
            <li class="feature-highlight"><a href="https://www.hybridclr.cn/docs/business/differentialhybridexecution" target="_blank">DHE 技术</a></li>
            <li class="feature-highlight">两年技术支持</li>
            <li class="feature-highlight">提供全部源码</li>
          </ul>
        </div>

        <!-- Hot Reload -->
        <div class="pricing-card glass-card">
          <div class="pricing-header">
            <div class="pricing-icon">🔄</div>
            <h3 class="pricing-title">热重载版</h3>
          </div>
          <p class="pricing-desc">支持卸载或重新加载程序集，适用于小游戏合集类型的游戏</p>
          <p class="pricing-price">邮件咨询价格</p>
          <ul class="pricing-features">
            <li>解释执行</li>
            <li>MonoBehaviour</li>
            <li>补充元数据</li>
            <li>增量式 GC</li>
            <li>Unity 2019-2022 LTS</li>
            <li><a href="https://www.hybridclr.cn/docs/basic/dots" target="_blank">DOTS</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/fullgenericsharing" target="_blank">完全泛型共享</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/metadataoptimization" target="_blank">元数据优化</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/basicoptimization" target="_blank">标准解释性能优化</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/advancedoptimization" target="_blank">离线指令优化</a></li>
            <li class="feature-highlight"><a href="https://www.hybridclr.cn/docs/business/basicencryption" target="_blank">代码加固</a></li>
            <li class="feature-highlight"><a href="https://www.hybridclr.cn/docs/business/reload/hotreloadassembly" target="_blank">热重载</a></li>
            <li><a href="https://www.hybridclr.cn/docs/business/accesspolicy" target="_blank">访问控制机制</a></li>
            <li class="feature-highlight">两年技术支持</li>
            <li class="feature-highlight">提供全部源码</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Trial Rules -->
    <section class="trial-section">
      <div class="trial-inner fade-in-up">
        <h2 class="section-heading">商业版本试用规则</h2>
        <p class="section-desc">所有商业化版本都支持以下 <strong>2 种试用方式</strong></p>

        <div class="trial-table glass-card">
          <div class="trial-row trial-header">
            <div class="trial-cell">不提供源码</div>
            <div class="trial-cell">提供试用商业版本源码</div>
          </div>
          <div class="trial-row">
            <div class="trial-cell"><span class="free-tag">免费</span></div>
            <div class="trial-cell"><span class="paid-tag">收费</span> 正式版价格的 10%</div>
          </div>
          <div class="trial-row">
            <div class="trial-cell">仅支持 iOS 平台，仅支持 2021/2022 版</div>
            <div class="trial-cell">不限制平台，不限制版本</div>
          </div>
          <div class="trial-row">
            <div class="trial-cell">如需技术支持，按 400 元/小时付费</div>
            <div class="trial-cell">与正式付费用户同等的技术支持服务</div>
          </div>
          <div class="trial-row">
            <div class="trial-cell">
              基于预编译 libil2cpp.a 构建 iOS 目标、不提供 C++ 源码。<strong>没有试用期限限制</strong>，但运行时会在启动半小时或使用三个月后随机崩溃。
              <a href="https://www.hybridclr.cn/docs/business/pro/freetrial" target="_blank" class="trial-link">免费试用详细规则 →</a>
              <p class="note">* 邮件咨询商务获取</p>
            </div>
            <div class="trial-cell">
              提供试用版源码及工具，试用周期一个月。购买正式版本可<strong>全额抵扣</strong>试用费用。
              <p class="note">* 邮件咨询商务获取</p>
            </div>
          </div>
        </div>

        <p class="trial-contact">商务邮箱：<a href="mailto:business@code-philosophy.com">business@code-philosophy.com</a>，请使用贵司<strong>企业邮箱</strong>发送邮件</p>
      </div>
    </section>

    <!-- Timed Support -->
    <section class="support-section">
      <div class="support-inner fade-in-up">
        <h2 class="section-heading">计时技术支持</h2>
        <p class="section-desc">HybridCLR 使用简单、运行稳定，大多数公司并不需要长时间的技术支持，因此只提供计时技术支持服务。</p>

        <div class="support-grid">
          <div class="support-card glass-card">
            <h3>标准支持</h3>
            <p class="support-price">100 元/小时</p>
            <ul>
              <li>基础使用问题的技术答疑</li>
              <li>不含 bug 及未实现特性的解决</li>
            </ul>
          </div>
          <div class="support-card glass-card support-card-pro">
            <h3>专家支持</h3>
            <p class="support-price">1,500 元/小时</p>
            <ul>
              <li>Bug 标准响应及解决（2-7 天修复）</li>
              <li>一对一远程协助指导</li>
              <li>特殊平台兼容性问题解决</li>
              <li>当前未支持版本的支持</li>
              <li>优化指导及其他服务</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Contact -->
    <section class="biz-contact-section">
      <div class="biz-contact-inner fade-in-up">
        <h2 class="section-heading">商业合作</h2>
        <p class="section-desc">如需购买商业版本，请邮件咨询</p>
        <p class="biz-contact-detail">
          请使用贵公司的<strong>企业邮箱</strong>向邮箱
          <a href="mailto:business@code-philosophy.com" target="_blank">business@code-philosophy.com</a>
          发起咨询，以 QQ 或者 126 邮箱之类发起的邮件会被忽略，敬请谅解。
        </p>
        <a href="mailto:business@code-philosophy.com" class="btn-glow btn-glow-primary" style="margin-top: 24px;">联系商务</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero */
.hclr-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-hero);
  overflow: hidden;
  padding-top: 70px;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.hero-glow-1 { width: 600px; height: 600px; top: -50px; right: 0; background: rgba(59, 130, 246, 0.1); }
.hero-glow-2 { width: 500px; height: 500px; bottom: 0; left: -50px; background: rgba(139, 92, 246, 0.08); }

.hclr-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 20px;
  max-width: 1000px;
}

.hero-badge {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.2);
  margin-bottom: 24px;
}

.hclr-hero-title {
  font-size: clamp(48px, 7vw, 72px);
  font-weight: 800;
  margin-bottom: 16px;
}

.hclr-hero-subtitle {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 12px;
  font-weight: 500;
}

.hclr-hero-desc {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 48px;
}

.hclr-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

.stat-card {
  padding: 24px 16px;
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: rgba(59, 130, 246, 0.2);
  transform: translateY(-2px);
}

.stat-title {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.stat-detail {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5;
}

.hclr-cta {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* Version Section */
.version-section {
  padding: 80px 40px;
  text-align: center;
  background: var(--color-bg-alt);
}

.version-inner {
  max-width: 800px;
  margin: 0 auto;
}

.section-heading {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 16px;
}

.section-desc {
  font-size: 16px;
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 24px;
}

/* Pricing */
.pricing-section {
  padding: 0 20px 80px;
  background: var(--color-bg-alt);
}

.pricing-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.pricing-card {
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.2);
}

.pricing-featured {
  border-color: rgba(59, 130, 246, 0.3) !important;
  background: rgba(59, 130, 246, 0.05) !important;
}

.pricing-featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 16px 16px 0 0;
}

.pricing-recommend {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  background: var(--gradient-primary);
  color: #ffffff;
}

.pricing-header {
  text-align: center;
  margin-bottom: 16px;
}

.pricing-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.pricing-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-heading);
}

.pricing-desc {
  font-size: 14px;
  color: var(--color-text-light);
  margin-bottom: 16px;
  line-height: 1.6;
  text-align: center;
  min-height: 44px;
}

.pricing-price {
  font-size: 22px;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  text-align: center;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  text-align: left;
  flex: 1;
}

.pricing-features li {
  padding: 7px 0;
  font-size: 13px;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
  padding-left: 20px;
  position: relative;
}

.pricing-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4ade80;
  font-size: 12px;
}

.pricing-features li:last-child { border-bottom: none; }

.pricing-features a {
  color: var(--color-primary);
  text-decoration: none;
}

.pricing-features a:hover { text-decoration: underline; }

.feature-highlight {
  color: var(--color-heading) !important;
  font-weight: 600;
}

/* Trial Section */
.trial-section {
  padding: 80px 40px;
  background: var(--color-bg);
}

.trial-inner,
.support-inner {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.trial-table {
  margin-top: 30px;
  overflow: hidden;
}

.trial-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid var(--color-border);
}

.trial-row:last-child { border-bottom: none; }

.trial-header .trial-cell {
  font-weight: 700;
  color: var(--color-heading);
  font-size: 15px;
  background: rgba(59, 130, 246, 0.06);
}

.trial-cell {
  padding: 16px 20px;
  font-size: 14px;
  color: var(--color-text);
  line-height: 1.7;
  text-align: left;
  border-right: 1px solid var(--color-border);
}

.trial-cell:last-child { border-right: none; }

.trial-cell a { color: var(--color-primary); }
.trial-cell strong { color: var(--color-heading); }

.free-tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  background: rgba(34, 197, 94, 0.12);
  color: #4ade80;
}

.paid-tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  background: rgba(234, 179, 8, 0.12);
  color: #facc15;
}

.trial-link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 600;
}

.note {
  margin-top: 10px;
  font-size: 12px;
  color: var(--color-text-light);
}

.trial-contact {
  margin-top: 24px;
  font-size: 14px;
  color: var(--color-text-light);
}

.trial-contact a { color: var(--color-primary); }
.trial-contact strong { color: var(--color-heading); }

/* Support Section */
.support-section {
  padding: 80px 40px;
  background: var(--color-bg-alt);
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  text-align: left;
  margin-top: 32px;
}

.support-card {
  padding: 32px;
}

.support-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 12px;
}

.support-price {
  font-size: 24px;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.support-card ul {
  list-style: none;
  padding: 0;
}

.support-card li {
  padding: 6px 0;
  font-size: 14px;
  color: var(--color-text);
  padding-left: 20px;
  position: relative;
}

.support-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4ade80;
}

.support-card-pro {
  border-color: rgba(59, 130, 246, 0.2);
}

/* Biz Contact */
.biz-contact-section {
  padding: 80px 40px;
  text-align: center;
  background: var(--color-bg);
}

.biz-contact-inner {
  max-width: 800px;
  margin: 0 auto;
}

.biz-contact-detail {
  font-size: 16px;
  color: var(--color-text);
  line-height: 1.8;
}

.biz-contact-detail strong { color: var(--color-heading); }

.biz-contact-detail a {
  color: var(--color-primary);
  background: rgba(59, 130, 246, 0.08);
  padding: 2px 6px;
  border-radius: 4px;
}

/* Responsive */
@media (max-width: 921px) {
  .hclr-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .support-grid {
    grid-template-columns: 1fr;
  }

  .trial-row {
    grid-template-columns: 1fr;
  }

  .trial-cell { border-right: none; }
}

@media (max-width: 544px) {
  .hclr-hero { min-height: auto; padding: 100px 20px 60px; }
  .pricing-grid { grid-template-columns: 1fr; }
  .hclr-stats { grid-template-columns: 1fr 1fr; }

  .section-heading { font-size: 24px; }

  .trial-section,
  .support-section,
  .biz-contact-section { padding: 60px 16px; }
}
</style>
