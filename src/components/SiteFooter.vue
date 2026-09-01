<template>
  <footer class="site-footer">
    <div class="footer-gradient"></div>
    <div class="footer-inner">
      <div class="footer-brand">
        <img
          src="/images/bg/footer-logo-dark.png"
          alt="代码哲学"
          class="footer-logo"
        />
        <p class="footer-tagline">游戏行业深度技术解决方案</p>
      </div>

      <div class="footer-nav">
        <div class="footer-col">
          <h4>产品</h4>
          <ul>
            <li><router-link to="/hybridclr">HybridCLR</router-link></li>
            <li><router-link to="/leanclr">LeanCLR</router-link></li>
            <li><a href="https://www.zlua.cn/" target="_blank" rel="noopener">ZLua</a></li>
            <li><a href="https://zen-ts.com/" target="_blank" rel="noopener">ZenTS</a></li>
            <li><a href="https://github.com/focus-creative-games/luatier" target="_blank" rel="noopener">LuaTier</a></li>
            <li><router-link to="/luban">Luban</router-link></li>
            <li><a href="https://www.obfuz.com/" target="_blank" rel="noopener">Obfuz</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>资源</h4>
          <ul>
            <li><a href="https://www.hybridclr.cn/" target="_blank" rel="noopener">HybridCLR 文档</a></li>
            <li><a href="https://doc.leanclr.com/" target="_blank" rel="noopener">LeanCLR 文档</a></li>
            <li><a href="https://doc.zlua.cn/" target="_blank" rel="noopener">ZLua 文档</a></li>
            <li><a href="https://zents.code-philosophy.com/" target="_blank" rel="noopener">ZenTS 文档</a></li>
            <li><a href="https://www.datable.cn/" target="_blank" rel="noopener">Luban 文档</a></li>
            <li><a href="https://www.obfuz.com/" target="_blank" rel="noopener">Obfuz 文档</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>联系</h4>
          <ul>
            <li><a href="mailto:business@code-philosophy.com">商务邮箱</a></li>
            <li><a href="https://github.com/focus-creative-games" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>GitHub
            </a></li>
            <li><router-link to="/bussiness">商业化服务</router-link></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <span class="copyright">© {{ currentYear }} Code Philosophy（代码哲学）</span>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener" class="icp">
          京ICP备2023010608号-2
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  position: relative;
  background: #0a0f1e;
  color: rgba(255, 255, 255, 0.6);
}

.footer-gradient {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3), transparent);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 60px;
  padding: 60px 40px 40px;
}

.footer-brand {
  flex-shrink: 0;
  max-width: 280px;
}

.footer-logo {
  max-width: 200px;
  height: auto;
  opacity: 0.85;
  margin-bottom: 12px;
}

.footer-tagline {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
}

.footer-nav {
  display: flex;
  gap: 60px;
  flex: 1;
}

.footer-col h4 {
  font-size: 14px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col li {
  margin-bottom: 10px;
}

.footer-col a {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-col a:hover {
  color: rgba(255, 255, 255, 0.85);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer-bottom-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.copyright {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
}

.icp {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}

.icp:hover {
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    padding: 40px 20px;
    gap: 30px;
  }

  .footer-brand {
    text-align: center;
    max-width: none;
  }

  .footer-nav {
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
  }

  .footer-col {
    min-width: 120px;
  }

  .footer-bottom-inner {
    padding: 16px 20px;
    justify-content: center;
    text-align: center;
  }
}
</style>
