export default {
  seo: {
    title: '代码哲学 — 为游戏工程提供运行时基础设施',
    desc: '代码哲学（Code Philosophy）为游戏行业提供深度技术解决方案：HybridCLR 原生 C# 热更新、LeanCLR 轻量跨平台 CLR、ZLua / ZenTS 脚本方案、Luban 配置工作流、Obfuz 代码加固。已有数千商业项目接入。',
  },

  // 01 定位
  hero: {
    eyebrow: '运行时基础设施',
    // The h1 must be in the page's own language, or the zh page competes for
    // English queries and ranks for nothing in Chinese.
    titleLine1: '为游戏工程',
    titleLine2: '提供运行时基础设施',
    subtitle: '让开发者专注于创造更有乐趣的游戏',
    desc: '我们构建游戏行业最底层的那一层：C# 运行时、脚本虚拟机、配置工作流与代码加固。不做演示品，只做能扛住商业项目上线的工程。',
    ctaPrimary: '查看产品矩阵',
    ctaSecondary: '技术选型指南',
    diagramCaption: '产品全景：宿主引擎 → 运行时 → 脚本层 → 工具链',
  },

  // 02 规模凭证
  scale: {
    eyebrow: '规模',
    title: '被验证过的工程',
    desc: '下列数字可在各产品仓库与文档站核对。',
    stars: { label: 'GitHub Stars 合计', note: '实时读取' },
    projects: { value: '1000+', label: '商业项目接入', note: '百款游戏双端上线' },
    tests: { value: '5700+', label: '自动化测试用例', note: 'HybridCLR 2700+ / Obfuz 3000+' },
    unity: { value: '2019–6000.x', label: 'Unity 版本覆盖', note: '含团结引擎全系列' },
  },

  // 03 产品矩阵
  products: {
    eyebrow: '产品',
    title: '七个产品，四条技术线',
    desc: '覆盖 C# 运行时、脚本方案、数据工具链与代码安全。',
  },

  // 04 技术纵深
  depth: {
    eyebrow: '技术纵深',
    title: '差异化来自执行架构',
    desc: '我们的产品不是把现有方案包装一层，而是重做了执行模型。以下三张图是核心差异所在。',
    dhe: {
      title: 'DHE 差分混合执行',
      product: 'HybridCLR 旗舰版',
      desc: '把热更程序集中未改动的方法直接走原生 AOT，仅对差分部分解释执行。热更性能因此逼近原生 AOT 水平，而非传统解释器的数倍开销。',
    },
    hybrid: {
      title: 'AOT + 解释器混合',
      product: 'LeanCLR',
      desc: '通过 aot.xml 与 PGO 只对热点方法做 AOT，其余交给解释器。在 WebGL 与小游戏场景下，原生 AOT 代码可减少 70%–90%。',
    },
    tiered: {
      title: '分层混合执行',
      product: 'LuaTier',
      desc: '字节码解释器作为基线，热点函数可离线 AOT 编译，并预留可选 tracing JIT。三级可独立裁剪，按平台约束取舍。',
    },
  },

  // 05 性能证据
  perf: {
    eyebrow: '性能证据',
    title: 'ZLua 互操作性能对比',
    desc: '以 ZLua 为基线 1.00×，数值越低越好。可在 zlua-benchmark 仓库复现。',
    environment: 'Unity 2022.3.62f3 · Il2Cpp Win64 Release · 2026-07-28',
    directionCs2Lua: 'C# → Lua',
    directionLua2Cs: 'Lua → C#',
    cases: '{n} 个用例',
    sourceLabel: 'zlua-benchmark',
  },

  // 06 客户
  customers: {
    eyebrow: '客户',
    title: '与国内外头部及中小型团队合作',
    desc: '从千万 DAU 的头部产品到独立团队，技术方案需要同时扛住规模与约束。',
    cta: '查看客户与案例',
  },

  closing: {
    title: '需要在你的项目里评估？',
    desc: '所有产品均有开源社区版可直接试用。商业版本提供试用规则、源码与技术支持。',
    ctaPrimary: '商业服务与支持',
    ctaSecondary: '技术选型指南',
  },
}
