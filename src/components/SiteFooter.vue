<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-left">
        <img
          src="/images/bg/footer-logo-dark.png"
          alt="代码哲学"
          class="footer-logo"
        />
      </div>
      <div class="footer-right">
        <p class="contact-title">联系我们</p>
        <p class="contact-info">
          商业合作：请使用贵公司的企业邮箱向邮箱
          <a href="mailto:business@code-philosophy.com">business@code-philosophy.com</a>
          发起咨询。以QQ或者126邮箱等发起的邮件会被忽略，敬请谅解。
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <span class="copyright">© COPYRIGHT 2023 代码哲学官网</span>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener" class="icp">
          京ICP备2023010608号-2
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #1a1a2e;
  color: #cccccc;
}

.footer-inner {
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 40px 60px;
}

.footer-logo {
  max-width: 300px;
  height: auto;
  opacity: 0.9;
}

.contact-title {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
}

.contact-info {
  font-size: 15px;
  line-height: 1.8;
  color: #aaaaaa;
}

.contact-info a {
  color: #6a9fd8;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  background: #111128;
}

.footer-bottom-inner {
  max-width: 1920px;
  margin: 0 auto;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.copyright {
  font-size: 14px;
  color: #888888;
}

.icp {
  font-size: 14px;
  color: #888888;
  text-decoration: none;
}

.icp:hover {
  color: #aaaaaa;
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    padding: 30px 20px;
    gap: 30px;
    text-align: center;
  }

  .footer-logo {
    max-width: 200px;
  }

  .footer-bottom-inner {
    padding: 15px 20px;
    justify-content: center;
    text-align: center;
  }
}
</style>
