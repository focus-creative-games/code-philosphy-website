# Code Philosophy 官网

基于 Vue 3、TypeScript 与 Vite 的静态官网，托管于 GitHub Pages，自定义域名为 `code-philosophy.com`。

## 本地开发

```sh
npm ci
npm run dev
```

## 构建与预览

```sh
npx tsc --noEmit
npm run build
npm run preview
```

构建先生成客户端资源，再由 `scripts/prerender.mjs` 使用 Vue 服务端渲染生成首页、六款产品页、商务页及保留的 LuaTier 页。发布目录为 `dist/`，不需要常驻服务端。

每个页面都有独立的 HTML、标题、描述与 canonical；构建同时输出 `sitemap.xml` 和 `robots.txt`。GitHub Pages 可以直接打开、刷新 `/hybridclr/` 等页面。旧 `/#/hybridclr` 链接会在客户端转换为新地址；拼写历史地址 `/bussiness` 仍可访问。

## 内容维护

- `src/data/products.ts`：六款产品的定位、文案、能力、流程和文档链接。
- `src/views/Home.vue`：首页的旗舰展示、产品筛选、Luban 工作流、场景、资源及公司介绍。
- `src/views/Product.vue`：统一产品详情页与 HybridCLR 商业版本入口。
- `src/views/Business.vue`：商务邮箱、复制与邮件咨询入口。
- `src/components/RuntimeDiagram.vue`：原生 HTML/CSS 架构图，无需图片或动画库。
- `src/style.css`：视觉样式、响应式布局与减少动态效果支持。
- `public/images/logos/`：原有客户标识素材；展示前应核对产品使用关系及品牌使用授权。
- `public/images/social-card.svg`：分享图的可编辑源文件，对外使用相邻的 PNG 文件。

代码示例中标注为“概念示意”的内容只用于解释产品，实际接入以相应官方文档为准。性能数据、具体版本支持、商业授权与服务政策以产品官方说明为准。

## 发布

沿用 `.github/workflows/deploy.yml` 的 GitHub Pages 流程。向 `main` 推送后，Actions 执行 `npm ci` 和 `npm run build`，并发布 `dist/`。`public/CNAME` 保留域名配置。
