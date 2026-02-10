<template>
  <div class="business-page">
    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-glow glow-1"></div>
      <div class="contact-glow glow-2"></div>
      <div class="contact-decor decor-1"></div>
      <div class="contact-decor decor-2"></div>
      <div class="contact-inner fade-in-up">
        <div class="contact-badge">Business</div>
        <h1 class="contact-heading">商务联系</h1>
        <h2 class="contact-subheading">如需购买商业版本，请邮件咨询</h2>
        <div class="contact-detail">
          <p>
            请使用贵公司的<strong>企业邮箱</strong>向邮箱发起咨询，以 QQ 或者 126 邮箱之类发起的邮件会被忽略，敬请谅解。
          </p>
        </div>
        <a href="mailto:business@code-philosophy.com" class="btn-glow btn-glow-primary cta-email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          business@code-philosophy.com
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.business-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.contact-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--gradient-hero);
  padding: 140px 40px 100px;
  overflow: hidden;
}

.contact-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.glow-1 { width: 500px; height: 500px; top: 10%; left: 10%; background: rgba(59, 130, 246, 0.08); }
.glow-2 { width: 400px; height: 400px; bottom: 10%; right: 15%; background: rgba(139, 92, 246, 0.06); }

.contact-decor {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.04);
  pointer-events: none;
}

.decor-1 { width: 300px; height: 300px; top: -50px; right: -50px; }
.decor-2 { width: 200px; height: 200px; bottom: 60px; left: 40px; }

.contact-inner {
  position: relative;
  z-index: 1;
  max-width: 700px;
  text-align: center;
}

.contact-badge {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: rgba(59, 130, 246, 0.12);
  color: #60a5fa;
  border: 1px solid rgba(59, 130, 246, 0.2);
  margin-bottom: 24px;
}

.contact-heading {
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
}

.contact-subheading {
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 32px;
}

.contact-detail {
  font-size: 17px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 40px;
}

.contact-detail strong {
  color: #ffffff;
  font-weight: 600;
}

.cta-email {
  font-size: 16px;
  padding: 16px 32px;
}

@media (max-width: 768px) {
  .contact-section {
    padding: 120px 20px 80px;
  }

  .cta-email {
    font-size: 14px;
    padding: 14px 24px;
  }
}
</style>
