<script setup lang="ts">
import { products } from "../data/products";
const year = new Date().getFullYear();
</script>
<template>
  <footer class="site-footer">
    <div class="container footer-main">
      <div class="footer-intro">
        <router-link to="/" class="brand"
          ><span class="brand-symbol" aria-hidden="true"
            >c<span>p</span><i></i></span
          ><span class="brand-name"
            >Code Philosophy<span>代码哲学</span></span
          ></router-link
        >
        <p>
          深耕底层技术，释放创造潜能。<br />让开发者专注于创造更有乐趣的游戏。
        </p>
        <a
          class="text-link"
          href="https://github.com/focus-creative-games"
          target="_blank"
          rel="noopener noreferrer"
          >Find us on GitHub <span>↗</span></a
        >
      </div>
      <div class="footer-col">
        <h3>技术产品</h3>
        <router-link v-for="p in products" :key="p.id" :to="'/' + p.id">{{
          p.name
        }}</router-link>
      </div>
      <div class="footer-col">
        <h3>开发者资源</h3>
        <a
          v-for="p in products"
          :key="p.id"
          :href="p.docs"
          target="_blank"
          rel="noopener noreferrer"
          >{{ p.name }} 文档 ↗</a
        >
      </div>
      <div class="footer-col">
        <h3>与我们联系</h3>
        <router-link to="/business">商业版本与技术支持</router-link
        ><a href="mailto:business@code-philosophy.com">商务邮箱 ↗</a
        ><router-link to="/luatier">更多项目：LuaTier ↗</router-link
        ><span class="footer-note"
          >为游戏研发提供<br />长期可靠的技术支持。</span
        >
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© {{ year }} Code Philosophy. 代码哲学</span
      ><span>Built for developers. Designed for games.</span
      ><a
        href="https://beian.miit.gov.cn/#/Integrated/index"
        target="_blank"
        rel="noopener noreferrer"
        >京ICP备2023010608号-2</a
      >
    </div>
  </footer>
</template>
