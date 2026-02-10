<template>
  <div class="business-page">
    <!-- Contact Section -->
    <section class="contact-section">
      <div class="contact-inner">
        <h2 class="contact-heading">商务联系</h2>
        <h2 class="contact-subheading">如需购买商业版本，请邮件咨询</h2>
        <div class="contact-detail">
          <p>
            请使用贵公司的<strong>企业邮箱</strong>向邮箱
            <a href="mailto:business@code-philosophy.com" target="_blank" rel="noopener noreferrer">
              business@code-philosophy.com
            </a>
            发起咨询，以QQ或者126邮箱之类发起的邮件会被忽略，敬请谅解。
          </p>
        </div>
      </div>
    </section>

    <!-- Business Footer -->
    <section class="business-footer">
      <div class="business-footer-inner">
        <div class="bf-logo">
          <img
            src="https://code-philosophy.com/wp-content/uploads/2023/06/cropped-cropped-c-logo-2-暗标题-拷贝-1.png"
            alt="代码哲学"
          />
        </div>
        <div class="bf-copyright">
          <p>© COPYRIGHT 2023 代码哲学官网</p>
        </div>
        <div class="bf-icp">
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener">
            京ICP备2023010608号-2
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.business-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}

.contact-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0f2e 0%, #1a1a4a 50%, #0d0d2b 100%);
  padding: 120px 40px 80px;
}

.contact-inner {
  max-width: 800px;
  text-align: center;
}

.contact-heading {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 42px;
  color: #ffffff;
  margin-bottom: 20px;
}

.contact-subheading {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: #b0b0d0;
  margin-bottom: 30px;
}

.contact-detail {
  font-size: 17px;
  line-height: 1.8;
  color: #ccccdd;
}

.contact-detail strong {
  color: #ffffff;
  font-weight: 700;
}

.contact-detail a {
  color: #6a9fd8;
  text-decoration: none;
  background: rgba(106, 159, 216, 0.1);
  padding: 2px 6px;
  border-radius: 3px;
  transition: all 0.3s;
}

.contact-detail a:hover {
  background: rgba(106, 159, 216, 0.2);
  color: #8ab8e8;
}

.business-footer {
  background: #0a0a1e;
  padding: 30px 40px;
}

.business-footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.bf-logo img {
  max-width: 200px;
  height: auto;
  opacity: 0.8;
}

.bf-copyright p {
  color: #888888;
  font-size: 14px;
}

.bf-icp a {
  color: #888888;
  font-size: 14px;
  text-decoration: none;
}

.bf-icp a:hover {
  color: #aaaaaa;
}

@media (max-width: 768px) {
  .contact-heading {
    font-size: 30px;
  }

  .contact-subheading {
    font-size: 18px;
  }

  .contact-section {
    padding: 100px 20px 60px;
  }

  .business-footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
