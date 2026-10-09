export default {
  // ═══════════════════════════════════════════════════
  solutions: {
    seo: {
      title: '技术选型指南 — 代码哲学',
      desc: '按场景选择技术方案：C# 热更新选 HybridCLR 还是 LeanCLR，脚本层选 ZLua 还是 ZenTS，以及配置工作流与代码加固如何组合。',
    },
    hero: {
      eyebrow: '选型指南',
      title: '按场景选择方案',
      desc: '七个产品分属四条技术线，彼此定位互补而非竞争。下面按你实际要解决的问题给出选型路径。',
    },

    decisions: {
      title: '两个关键决策',
      desc: '多数项目的选型可以归结为这两个分叉。',
      runtime: {
        title: 'C# 运行时：HybridCLR 还是 LeanCLR？',
        desc: '两者解决不同问题，并非替代关系，也可以在同一公司的不同项目中并用。',
        hybridclr: {
          title: '选 HybridCLR',
          when: '你需要的是热更新',
          items: [
            '主要诉求是上线后更新游戏逻辑',
            '目标平台含 iOS，需要绕过原生代码更新限制',
            '项目已基于 il2cpp，不希望更换发布后端',
            '需要完整 C# 特性：反射、泛型、async、DOTS',
            '追求极致热更性能 → 旗舰版 DHE',
          ],
        },
        leanclr: {
          title: '选 LeanCLR',
          when: '你需要的是包体与内存',
          items: [
            '主要诉求是缩小 WebGL / 小游戏包体',
            '受首包体积或内存上限硬性约束',
            '愿意把 IL2CPP 换成另一个发布期后端',
            '需要把 C# 嵌入非 Unity 宿主（UE / Godot / 自研）',
            '需要延迟加载数十 MB 级托管逻辑',
          ],
        },
        both: '两者都要？HybridCLR 负责热更新能力，LeanCLR 负责发布期运行时。可在同一项目中组合，具体请邮件咨询。',
      },
      scripting: {
        title: '脚本层：ZLua 还是 ZenTS？',
        desc: '两者共用同一套语义契约（门面 / Marshal / 类型系统 / 生命周期），因此选择主要取决于团队习惯。',
        zlua: {
          title: '选 ZLua',
          when: '团队有 Lua 积累',
          items: ['已有 Lua 代码库或从 xLua / toLua / SLua 迁移', '策划或脚本同学熟悉 Lua', '需要 LuaJIT', '需要 Lua 5.1–5.5 的广泛版本覆盖'],
        },
        zents: {
          title: '选 ZenTS',
          when: '团队偏好 TypeScript',
          items: ['团队前端背景较强，熟悉 TS / JS', '希望有静态类型检查与 IDE 补全', '需要复用 npm 生态的部分能力', '从 Puerts 迁移'],
        },
        luatier: {
          title: '关注 LuaTier',
          when: '你在评估未来',
          items: ['对 Lua 运行时本身的性能有极高要求', '需要离线 AOT 或 tracing JIT', '可接受研发中项目的演进节奏', '当前建议先用 ZLua，持续关注 LuaTier'],
        },
      },
    },

    scenarios: {
      title: '按场景组合',
      desc: '多数商业项目同时用到两到四个产品。以下是常见组合。',
      items: {
        mobile: {
          title: '移动端长线运营项目',
          stack: 'HybridCLR + Luban + Obfuz',
          desc: '热更新保证上线后可快速修复与迭代，Luban 承载技能、副本、剧情等复杂配置，Obfuz 在发布前完成混淆加固。三者彼此兼容，Luban 生成代码无反射因此可被安全混淆。',
        },
        mini: {
          title: '小游戏 / WebGL',
          stack: 'LeanCLR + Luban',
          desc: '首包体积是硬约束，选择性 AOT 把原生代码压掉 70%–90% 是最直接的手段。配合延迟加载，可在合规首包内承载数十 MB 托管逻辑。',
        },
        script: {
          title: '重脚本驱动的 GamePlay',
          stack: 'ZLua 或 ZenTS + Luban',
          desc: '把频繁变更的 GamePlay 逻辑放到脚本层，策划可独立迭代。ZLua / ZenTS 的零配置互操作避免了传统方案的绑定层维护成本。',
        },
        security: {
          title: '强对抗需求项目',
          stack: 'HybridCLR 旗舰版 + Obfuz',
          desc: '旗舰版的代码加固与 DHE 结合 Obfuz 的多态 DLL、控制流平坦化与随机加密虚拟机，在性能不显著损失的前提下大幅提高逆向成本。',
        },
        embed: {
          title: 'C# 嵌入非 Unity 宿主',
          stack: 'LeanCLR',
          desc: '标准 C++11 实现、零外部依赖，可作为轻量脚本引擎嵌入自研引擎或工具链。Core 版可裁剪至约 300KB。',
        },
        config: {
          title: '只需要配置工作流',
          stack: 'Luban',
          desc: '不依赖任何其他产品即可独立使用，兼容 HybridCLR、ILRuntime、xLua、puerts 等各类热更方案与 Unity / UE / Godot / Cocos。',
        },
      },
    },

    compat: {
      title: '兼容性',
      desc: '我们的产品之间以及与主流第三方方案的兼容情况。',
      note: 'Luban 生成的代码不使用反射，因此可被任意混淆工具安全处理；Obfuz 默认不混淆 MonoBehaviour 名，与 Unity 序列化兼容。',
    },

    cta: {
      title: '不确定怎么选？',
      desc: '把项目的引擎版本、目标平台、包体约束与主要诉求发给我们，我们给出具体建议。',
    },
  },

  // ═══════════════════════════════════════════════════
  about: {
    seo: {
      title: '关于代码哲学 — 游戏行业深度技术解决方案',
      desc: '代码哲学（Code Philosophy）专注游戏行业 to B 技术解决方案，自研 C# 运行时、脚本虚拟机、配置工作流与代码加固，与国内外头部及大量中小型游戏公司合作。',
    },
    hero: {
      eyebrow: '公司',
      title: '我们做基础设施',
      desc: '代码哲学专注游戏行业的 to B 技术解决方案。我们做的是运行时、虚拟机、编译工具链和加固这一层 —— 游戏项目依赖它，但很少有团队有余力自己造。',
    },

    stance: {
      title: '我们的工程立场',
      items: {
        depth: {
          title: '做深而非做宽',
          desc: '七个产品集中在四条技术线上，彼此复用底层能力。我们不做与核心能力无关的产品，宁可把 CLR 和脚本虚拟机做到可以对标商业闭源方案。',
        },
        rewrite: {
          title: '必要时从零重写',
          desc: 'LeanCLR 是标准 C++11 从零实现，LuaTier 与历史 LuaJIT 无派生关系。当现有方案的架构决定了它的天花板时，包装一层解决不了问题。',
        },
        open: {
          title: '开源作为默认',
          desc: '核心产品均有 MIT 社区版，可直接读源码、改源码、商用。社区版满足绝大多数项目需求，商业版解决的是更严苛的性能、安全与定制诉求。',
        },
        evidence: {
          title: '用可复现的数据说话',
          desc: 'benchmark 公开测试环境、数据日期与仓库地址。性能主张应当可被第三方复现，而不是只给一个百分比。',
        },
        production: {
          title: '以上线为验收标准',
          desc: '自动化测试覆盖各平台与引擎版本组合（HybridCLR 2700+、Obfuz 3000+ 用例）。真正的验收来自数千个接入的商业项目和百款双端上线的游戏。',
        },
        longTerm: {
          title: '长期支持承诺',
          desc: '商业版本长期支持 Unity 2019–2022 LTS。游戏项目生命周期长，引擎版本常年不动，技术方案必须跟得住这个节奏。',
        },
      },
    },

    capability: {
      title: '技术能力',
      desc: '支撑七个产品的底层能力。',
      items: {
        runtime: { title: 'CLR 与运行时', desc: 'ECMA-335 实现、元数据处理、泛型实例化与共享、准确式 GC、AOT 与解释器混合执行' },
        compiler: { title: '编译与代码生成', desc: '词法 / 语法 / 语义分析、IR 设计与下降、离线 AOT 编译、tracing JIT、多语言代码生成' },
        vm: { title: '脚本虚拟机', desc: 'Lua 与 JavaScript 虚拟机、字节码设计、增量 GC、跨语言互操作与 marshalling' },
        il2cpp: { title: 'il2cpp 与 Unity 深度集成', desc: 'il2cpp 运行时扩展、Unity 构建管线介入、BCL 对齐、DOTS 兼容、团结引擎适配' },
        security: { title: '代码保护', desc: '符号与常量混淆、控制流平坦化、多态 DLL 格式、随机加密虚拟机、静态与动态解密' },
        platform: { title: '跨平台工程', desc: 'iOS / Android / WebGL / 小游戏 / 鸿蒙 / 桌面，以及 Unity / UE / Godot / Cocos 多引擎适配' },
      },
    },

    timeline: {
      title: '产品线演进',
      items: {
        hybridclr: { title: 'HybridCLR', desc: '把 il2cpp 补全为 AOT + Interpreter 混合运行时，解决 Unity 全平台 C# 热更新。后续开创 DHE 技术。' },
        luban: { title: 'Luban', desc: '从配置工作流切入，解决中大型项目的数据组织、类型系统与多语言代码生成。' },
        obfuz: { title: 'Obfuz', desc: '补齐代码安全环节，与热更新方案协同工作。' },
        scripting: { title: 'ZLua / ZenTS', desc: '重做 Unity 脚本层互操作，面向 IL2CPP 热路径优化，零配置替代传统绑定方案。' },
        leanclr: { title: 'LeanCLR', desc: '从零实现轻量 CLR，面向包体与内存受限的发布场景，并支持嵌入非 Unity 宿主。' },
        luatier: { title: 'LuaTier', desc: '重做 Lua 运行时本身，提供分层混合执行。研发中。' },
      },
    },

    cta: {
      title: '技术合作',
      desc: '如需商业版本、定制开发或技术支持，请使用企业邮箱联系我们。',
    },
  },

  // ═══════════════════════════════════════════════════
  customers: {
    seo: {
      title: '客户与案例 — 代码哲学',
      desc: '代码哲学与腾讯、网易、字节跳动、叠纸、莉莉丝、FunPlus、哔哩哔哩、完美世界、紫龙等国内外头部及大量中小型游戏公司合作。',
    },
    hero: {
      eyebrow: '客户',
      title: '谁在使用',
      desc: '从千万 DAU 的头部产品到独立团队。技术方案需要同时扛住规模与约束 —— 这两类项目的反馈共同塑造了我们的产品。',
    },
    stats: {
      projects: { value: '1000+', label: '商业项目接入' },
      shipped: { value: '100+', label: '游戏双端上线' },
      stars: { label: 'GitHub Stars 合计' },
    },
    groups: {
      top: { title: '头部发行与研发', desc: '千万级 DAU 产品，对性能、安全与长期支持要求最严苛' },
      studio: { title: '研发商与工作室', desc: '中大型团队，技术选型自主，关注工程效率与可控性' },
      platform: { title: '平台与出海', desc: '多地区发行，面临平台审核、包体与合规约束' },
    },
    wall: { title: '合作用户', note: '按首字母与类别排列，部分客户因商务约定不公开展示。' },
    cases: {
      title: '使用场景',
      desc: '以下为可公开讨论的典型场景。更多案例请参考 HybridCLR 文档站的上线项目列表。',
      viewMore: '查看 HybridCLR 上线项目案例',
    },
    cta: {
      title: '成为我们的客户',
      desc: '所有产品均有开源社区版可先行评估。需要商业版本或技术支持时再联系我们。',
    },
  },

  // ═══════════════════════════════════════════════════
  services: {
    seo: {
      title: '商业服务与技术支持 — 代码哲学',
      // `@` is vue-i18n's linked-message operator, so a literal address must be
      // escaped as {'@'} or the whole message fails to parse at runtime.
      desc: "代码哲学提供商业版本授权、计时技术支持、定制开发与移植、性能与包体咨询。商务咨询请使用企业邮箱联系 business{'@'}code-philosophy.com。",
    },
    hero: {
      eyebrow: '商业服务',
      title: '商业版本与技术支持',
      desc: '核心产品均有 MIT 社区版，可直接商用。当项目对性能、安全、热重载或平台支持有更高要求时，我们提供商业版本、技术支持与定制开发。',
      cta: '联系商务',
    },

    matrix: {
      title: '服务内容',
      items: {
        license: {
          title: '商业版本授权',
          desc: 'HybridCLR 提供专业版、旗舰版与热重载版，均含全部源码与两年技术支持。LeanCLR 商业授权请邮件咨询。',
          points: ['提供全部源码', '两年技术支持', '长期支持 Unity 2019–2022 LTS', '支持试用后全额抵扣'],
        },
        support: {
          title: '计时技术支持',
          desc: '产品使用简单、运行稳定，大多数团队不需要长期驻场支持，因此按小时计费。',
          points: ['标准支持：基础使用答疑', '专家支持：Bug 修复与远程协助', '按实际耗时结算', '不绑定长期合同'],
        },
        custom: {
          title: '定制开发与移植',
          desc: '针对特殊平台、特殊引擎版本或项目独有需求的定制开发，以及向新平台的移植工作。',
          points: ['特殊平台兼容性适配', '当前未支持的引擎版本', '项目独有特性开发', '非 Unity 宿主集成'],
        },
        consulting: {
          title: '性能与包体咨询',
          desc: '针对已接入项目的性能瓶颈、内存占用与包体体积提供优化方案与实施指导。',
          points: ['热更新性能优化', 'AOT 策略与 PGO 调优', '内存占用分析', '包体体积压缩方案'],
        },
      },
    },

    support: {
      title: '计时技术支持',
      desc: '以下为 HybridCLR 的计时支持标准，其他产品请邮件咨询。',
      standard: {
        title: '标准支持',
        price: '100 元 / 小时',
        items: ['基础使用问题的技术答疑', '不含 bug 及未实现特性的解决'],
      },
      expert: {
        title: '专家支持',
        price: '1,500 元 / 小时',
        items: ['Bug 标准响应及解决（2–7 天修复）', '一对一远程协助指导', '特殊平台兼容性问题解决', '当前未支持版本的支持', '优化指导及其他服务'],
      },
    },

    trial: {
      title: '商业版本试用规则',
      desc: 'HybridCLR 所有商业版本均支持以下两种试用方式。',
      free: {
        title: '不提供源码',
        tag: '免费',
        items: [
          '仅支持 iOS 平台，仅支持 2021 / 2022 版',
          '如需技术支持，按 400 元/小时付费',
          '基于预编译 libil2cpp.a 构建 iOS 目标，不提供 C++ 源码',
          '没有试用期限限制，但运行时会在启动半小时或使用三个月后随机崩溃',
        ],
        link: '免费试用详细规则',
      },
      paid: {
        title: '提供试用商业版本源码',
        tag: '正式版价格的 10%',
        items: [
          '不限制平台，不限制版本',
          '与正式付费用户同等的技术支持服务',
          '提供试用版源码及工具，试用周期一个月',
          '购买正式版本可全额抵扣试用费用',
        ],
      },
      note: '两种方式均需邮件咨询商务获取。',
    },

    process: {
      title: '合作流程',
      steps: {
        evaluate: { title: '评估', desc: '先用开源社区版在项目中实际评估。社区版满足 95% 以上商业项目的需求。' },
        contact: { title: '咨询', desc: '使用企业邮箱发送需求：引擎版本、目标平台、主要诉求与时间预期。' },
        trial: { title: '试用', desc: '按试用规则获取商业版本。付费试用费用可在购买正式版时全额抵扣。' },
        deploy: { title: '接入', desc: '获取正式授权与全部源码，两年技术支持期内提供响应与修复。' },
      },
    },

    contact: {
      title: '联系方式',
      desc: '请使用贵公司的企业邮箱发起咨询。以 QQ、126 等个人邮箱发起的邮件会被忽略，敬请谅解。',
      business: { label: '商务咨询', note: '商业版本、定制开发、技术支持' },
      product: { label: '产品技术咨询', note: '各产品的技术问题可直接联系对应邮箱或社群' },
      emailRequirement: '请使用企业邮箱',
    },
  },

  // ═══════════════════════════════════════════════════
  notFound: {
    seo: { title: '页面不存在 — 代码哲学' },
    code: '404',
    title: '页面不存在',
    desc: '这个地址没有对应的页面。可能链接已经变更，或者地址输入有误。',
    home: '返回首页',
    products: '查看产品',
  },
}
