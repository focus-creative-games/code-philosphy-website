<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const copied = ref(false);
const email = "business@code-philosophy.com";
const mailto = computed(
  () =>
    `mailto:${email}?subject=${encodeURIComponent("产品与技术服务咨询" + (route.query.product ? " - " + route.query.product : ""))}`,
);
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email);
    copied.value = true;
  } catch {
    copied.value = false;
  }
}
</script>
<template>
  <section class="business-hero">
    <div class="container">
      <div class="breadcrumb">
        <router-link to="/">首页</router-link><span>/</span
        ><span>商务咨询</span>
      </div>
      <div class="business-grid">
        <div>
          <div class="eyebrow">LET’S WORK TOGETHER</div>
          <h1>把技术问题，<br />交给懂技术的人。</h1>
          <p>
            从产品选型到商业版本，从项目集成到技术支持，<br />我们期待了解你的团队和正在构建的游戏。
          </p>
          <div class="business-services">
            <span>商业版本授权</span><span>技术支持</span><span>项目合作</span>
          </div>
        </div>
        <div class="contact-card">
          <span class="eyebrow">BUSINESS INQUIRIES</span>
          <h2>聊聊你的项目。</h2>
          <p>
            请使用贵公司的<strong>企业邮箱</strong>发起咨询。<br />QQ、126
            等个人邮箱发起的咨询不予处理。
          </p>
          <a class="business-email" :href="mailto"
            >business@<br />code-philosophy.com <span>↗</span></a
          >
          <div class="button-row">
            <a :href="mailto" class="button button-primary"
              >发送商务邮件 <span>↗</span></a
            ><button class="button button-outline" @click="copyEmail">
              {{ copied ? "已复制 ✓" : "复制邮箱" }}
            </button>
          </div>
          <span class="copy-feedback" role="status">{{
            copied
              ? "商务邮箱已复制到剪贴板。"
              : "欢迎在邮件中介绍你的团队与项目需求。"
          }}</span>
        </div>
      </div>
    </div>
  </section>
  <section class="section inquiry-section">
    <div class="container">
      <div class="eyebrow">A GOOD CONVERSATION STARTS HERE</div>
      <h2>让沟通，更进一步。</h2>
      <div class="capability-grid">
        <article>
          <span class="feature-number">01</span>
          <h3>介绍你的团队</h3>
          <p>公司名称、项目阶段和联系人，帮助我们了解你的业务背景。</p>
        </article>
        <article>
          <span class="feature-number">02</span>
          <h3>描述技术需求</h3>
          <p>感兴趣的产品、目标平台与引擎版本，以及你希望解决的问题。</p>
        </article>
        <article>
          <span class="feature-number">03</span>
          <h3>说明合作方向</h3>
          <p>商业授权、版本试用或技术支持，让我们更好地理解你的预期。</p>
        </article>
      </div>
    </div>
  </section>
</template>
