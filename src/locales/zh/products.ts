export default {
  // ═══════════════════════════════════════════════════
  hybridclr: {
    badge: '核心产品',
    tagline: 'Unity 全平台原生 C# 热更方案',
    short: '特性完整、零成本、高性能、低内存',
    card: '扩充 il2cpp 为 AOT + Interpreter 混合运行时，原生支持动态加载程序集。数千商业项目接入，DHE 技术让热更运行达到原生 AOT 水平。',
    metric: '数千商业项目接入',
    seo: {
      title: 'HybridCLR — Unity 全平台原生 C# 热更新方案',
      desc: 'HybridCLR 扩充 il2cpp 为 AOT + Interpreter 混合运行时，原生支持动态加载程序集，是特性完整、零成本、高性能、低内存的 Unity 全平台 C# 热更新方案。',
    },
    hero: {
      desc: '扩充 il2cpp 运行时为 AOT + Interpreter 混合执行，让 Unity 原生支持动态加载程序集。不需要改变开发习惯，不需要额外的脚本语言。',
    },
    stats: {
      companies: { value: '头部公司', label: '腾讯 / 网易 / 叠纸 / 莉莉丝 / FunPlus' },
      projects: { value: '1000+', label: '商业项目接入，百款双端上线' },
      tests: { value: '2700+', label: '测试用例，Unity 2019–6000 全平台通过' },
      dhe: { value: 'DHE', label: '热更运行达到原生 AOT 水平' },
    },
    arch: {
      title: '执行架构',
      desc: 'AOT 程序集由 il2cpp 正常编译为原生代码；热更程序集在运行时加载，由解释器执行。旗舰版的 DHE 让热更程序集中未改动的方法复用原生 AOT 代码。',
    },
    features: {
      title: '为什么选择 HybridCLR',
      desc: '它不是一个脚本方案，而是把 il2cpp 补全为一个完整的 CLR 实现。',
      items: {
        complete: { title: '特性完整', desc: '支持泛型、反射、委托、异步、MonoBehaviour、DOTS 等几乎所有 C# 特性。热更代码与 AOT 代码可自由互调。' },
        zeroCost: { title: '零学习成本', desc: '仍然写 C#，仍然用 Unity Editor 调试。不引入第二种语言，不需要维护绑定层。' },
        performance: { title: '高性能', desc: '标准解释执行已可满足绝大多数项目；旗舰版 DHE 让热更性能逼近原生 AOT。' },
        memory: { title: '低内存', desc: '元数据优化显著降低运行时内存占用，适合内存受限的移动设备与小游戏。' },
        platform: { title: '全平台', desc: 'iOS / Android / Windows / macOS / WebGL / 小游戏 / 鸿蒙。Unity 2019–6000.x 与团结引擎全系列。' },
        proven: { title: '生产验证', desc: '数千商业项目接入，百款游戏双端上线。2700+ 自动化测试用例覆盖各平台与版本组合。' },
      },
    },
    editions: {
      title: '版本对比',
      desc: '社区版满足 95% 以上商业项目的需求。商业版面向对性能、安全或热重载有更高要求的项目，均提供全部源码与两年技术支持。',
      names: {
        community: '社区版',
        professional: '专业版',
        flagship: '旗舰版',
        hotreload: '热重载版',
      },
      descs: {
        community: '满足 95% 以上商业项目的要求',
        professional: '对代码安全、内存及性能优化有较高需求的项目',
        flagship: '性能与原生基本持平，面向严苛性能与安全需求的首选',
        hotreload: '支持卸载与重新加载程序集，适用于小游戏合集类型',
      },
      prices: { community: '免费', commercial: '邮件咨询' },
      rows: {
        interp: '解释执行',
        monobehaviour: 'MonoBehaviour',
        metadata: '补充元数据',
        gc: '增量式 GC',
        unityLts: 'Unity 2019–2022 LTS',
        dots: 'DOTS',
        genericSharing: '完全泛型共享',
        metadataOpt: '元数据优化',
        basicOpt: '标准解释性能优化',
        advancedOpt: '离线指令优化',
        encryption: '代码加固',
        dhe: 'DHE 差分混合执行',
        hotReload: '热重载',
        accessPolicy: '访问控制机制',
        support: '两年技术支持',
        sourceCode: '提供全部源码',
      },
      dheNote: '旗舰版基于 HybridCLR 独有的 DHE（Differential Hybrid Execution）技术，是追求极致性能与安全项目的首选方案。',
      viewFeatures: '商业版本完整特性',
      viewCases: '上线项目案例',
      useCommunity: '免费使用社区版',
    },
    resources: { title: '资源' },
  },

  // ═══════════════════════════════════════════════════
  leanclr: {
    badge: '全新产品',
    tagline: '面向生产的轻量跨平台 CLR',
    short: 'Write C#, Run Anywhere',
    card: '高 ECMA-335 兼容、易嵌入、强跨平台。可替换 IL2CPP 作为 Unity WebGL / 小游戏发布运行时，选择性 AOT 下代码可减少 70%–90%。',
    metric: 'AOT 代码减少 70%–90%',
    seo: {
      title: 'LeanCLR — 面向生产的轻量跨平台 CLR 运行时',
      desc: 'LeanCLR 是标准 C++11 实现的轻量 CLR，可替换 IL2CPP 作为 Unity WebGL 与小游戏的发布运行时。选择性 AOT 下原生代码可减少 70%–90%，虚拟机内存节省 20%–35%。',
    },
    hero: {
      desc: '面向生产发布的轻量 CLR：替换 IL2CPP，显著缩小 wasm 与内存占用，支持选择性 AOT、延迟加载与热更新程序集。',
    },
    stats: {
      aot: { value: '70–90%', label: 'AOT 代码可减少' },
      memory: { value: '20–35%', label: '虚拟机内存节省' },
      hybrid: { value: 'AOT+', label: '解释器混合执行' },
      target: { value: 'WebGL', label: '小游戏 / 团结引擎' },
    },
    arch: {
      title: '选择性 AOT 架构',
      desc: 'aot.xml 与 PGO 数据决定哪些方法进入 AOT 编译，其余方法在运行时由解释器执行。这是包体大幅缩减的来源。',
    },
    advantages: {
      title: '相对 IL2CPP 的优势',
      desc: '在 Unity WebGL / 小游戏发布场景，配合 aot.xml / PGO 选择性 AOT，典型收益如下。',
      items: {
        size: { title: 'AOT 代码体积', desc: '选择性 AOT 下，托管代码编译产生的原生 AOT 代码可减少约 70%–90%，包体优化极其显著，整体性能影响可控。' },
        memory: { title: '运行时内存', desc: '虚拟机内存约减少 20%–35%，托管堆占用亦有少量下降，更适合内存受限的小游戏设备。' },
        large: { title: '大型项目', desc: '支持延迟加载与热更新程序集，在符合首包要求的前提下，可承载数十 MB 级托管逻辑。' },
        gc: { title: '垃圾回收', desc: '准确式 Mark-Sweep GC，回收效率更高，GC 停顿更短、更快。' },
      },
    },
    why: {
      title: '为什么选择 LeanCLR',
      desc: '在「将 C# 嵌入宿主并发布到多平台」场景下，现有方案各有局限。LeanCLR 专注发布期后端替换与包体优化。',
      coreclr: {
        title: 'CoreCLR / Mono',
        items: ['体积与依赖大，嵌入与裁剪成本高', '不适合小游戏等严苛包体场景', '移植到新平台工程复杂'],
      },
      il2cpp: {
        title: 'IL2CPP',
        items: ['闭源，与 Unity 工具链强绑定', '全量 AOT 导致 wasm 与内存偏大', 'ECMA-335 覆盖与灵活性有限'],
      },
      leanclr: {
        title: 'LeanCLR',
        items: [
          '标准 C++11，零外部依赖，易嵌入',
          'AOT + 解释器，选择性编译热点',
          '高 ECMA-335 兼容，Unity BCL 对齐',
          '准确式 Mark-Sweep GC，更快回收',
          '延迟加载与热更新程序集支持',
        ],
      },
    },
    versions: {
      title: '版本规划',
      standard: {
        title: 'Standard 版',
        status: '当前对外',
        desc: '当前发布版本（单线程）；完整 BCL icall 持续完善，未来将支持多线程。',
        items: ['Unity WebGL / 小游戏生产可用', '准确式 Mark-Sweep 全量 GC', 'LeanAOT、pgo2aot、延迟加载与热更新', '与 Unity IL2CPP BCL 高度兼容'],
      },
      core: {
        title: 'Core 版',
        status: '规划中',
        desc: '从 Standard 裁剪：纯 C++11、单线程、无平台相关代码，极致体积，可裁剪至约 300KB。',
        items: ['适用于嵌入式与任意 C++11 平台', '可作为轻量脚本引擎嵌入', '主动式精确全量 GC（更精简）', '尚未单独发布'],
      },
    },
    platforms: {
      title: '引擎与平台',
      rows: {
        unity: { name: 'Unity / 团结 WebGL 及小游戏', status: '已完成', note: 'leanclr-unity 发布时自动替换 IL2CPP' },
        godot: { name: 'Godot（全平台）', status: '开发中', note: 'leanclr-godot 占位仓库' },
        unreal: { name: 'Unreal Engine（全平台）', status: '开发中', note: 'leanclr-unreal 占位仓库' },
        cocos: { name: 'Cocos Engine', status: '开发中', note: 'leanclr-cocos 占位仓库' },
      },
    },
    repos: {
      title: '相关仓库',
      leanclr: '运行时与 LeanAOT 工具链源码',
      unity: 'Unity 集成包 com.code-philosophy.leanclr',
      doc: '文档站 doc.leanclr.com',
      demo: 'Win64 / H5 独立嵌入示例',
      hybridclr: 'Unity 全平台热更新（定位互补）',
    },
    resources: { title: '资源' },
  },

  // ═══════════════════════════════════════════════════
  zlua: {
    badge: 'Unity Lua 方案',
    tagline: '为 IL2CPP 极致优化的现代 Unity Lua 方案',
    short: '零配置、完备互操作、更少 GC',
    card: '零配置开箱即用，无需 per-type Wrap 白名单。C# 与 Lua 可任意互调，引用类型与 struct 默认 0 GC。Il2Cpp 实测显著优于 xLua / toLua / SLua。',
    metric: 'Lua→C# 比 xLua 快 2.57×',
    seo: {
      title: 'ZLua — 为 IL2CPP 极致优化的 Unity Lua 方案',
      desc: 'ZLua 是现代 Unity Lua 方案：零配置、无需 Wrap 白名单、引用类型与 struct 默认 0 GC。Il2Cpp 实测互操作性能显著优于 xLua、toLua 与 SLua，支持 Lua 5.1–5.5 与 LuaJIT。',
    },
    hero: {
      desc: '零配置、完备互操作、更少 GC。相对 xLua / toLua / SLua，Il2Cpp 实测交互显著更快。',
    },
    stats: {
      config: { value: '零配置', label: '无需 Wrap 白名单' },
      gc: { value: '0 GC', label: '引用类型与 struct 默认' },
      perf: { value: '2.57×', label: 'Lua→C# 领先 xLua' },
      license: { value: 'MIT', label: '开源协议' },
    },
    features: {
      title: '为什么选择 ZLua',
      desc: '相对 xLua / toLua / SLua，ZLua 在易用性、完备性和 Il2Cpp 热路径上都做了针对性优化。',
      items: {
        usable: { title: '更易用', desc: '设计更现代，开箱即用。默认 C# 与 Lua 可任意互调，无需 per-type Wrap 白名单，也没有复杂导出配置。' },
        complete: { title: '更完备', desc: '标准和完备的 C#↔Lua 交互，Lua 中能像 C# 那样访问几乎所有常用特性：重载、泛型、委托、struct 等。' },
        fast: { title: '更高效', desc: 'Il2Cpp 热路径为合并签名的 C++ 桥接。Lua→C# 上 xLua 约 2.57×、toLua 约 3.52×、SLua 约 7.68×。' },
        gc: { title: '更少 GC', desc: '引用类型与 struct（含含引用字段的 struct）默认 0 GC，并提供 OpaqueValue 等传参策略。' },
        small: { title: '极小桥接', desc: '合并相同签名并直接生成 C++。全量桥接仍可比其他方案 wrapper 小一个数量级；支持 0 桥接函数。' },
        versions: { title: '版本更广', desc: 'Lua 5.1–5.5 与 LuaJIT 2.x；Unity 2021.3 / 2022.3 / 6000.x；团结引擎全系列。' },
      },
    },
    benchmark: {
      title: '性能基准',
      desc: '以 ZLua 为基线 1.00×，数值越低越好。',
      environment: 'Unity 2022.3.62f3 · Il2Cpp Win64 Release · 数据日期 2026-07-28',
    },
    platforms: {
      title: '平台与版本',
      desc: '开发期 Editor Mono，发布期 Player Il2Cpp。',
      items: ['Lua 5.1–5.5', 'LuaJIT 2.x', 'Unity 2021.3 / 2022.3 / 6000.x', '团结引擎', 'Il2Cpp 全平台（含 WebGL / 小游戏 / 鸿蒙）'],
    },
    resources: { title: '资源' },
  },

  // ═══════════════════════════════════════════════════
  zents: {
    badge: 'Unity TypeScript 方案',
    tagline: '为 IL2CPP 极致优化的现代 Unity TypeScript 方案',
    short: 'QuickJS 驱动，与 ZLua 同一套语义契约',
    card: '由 QuickJS 驱动，设计与 ZLua 对齐。零 Wrap 白名单，完备的 C#↔JS 交互，官方 TypeScript 工作流。会用 ZLua，即可很快上手 ZenTS。',
    metric: '与 ZLua 语义对齐',
    seo: {
      title: 'ZenTS — 为 IL2CPP 极致优化的 Unity TypeScript 方案',
      desc: 'ZenTS 是 QuickJS 驱动的 Unity TypeScript / JavaScript 方案，零 Wrap 白名单、完备的 C#↔JS 互操作、官方 TypeScript 工作流，设计与 ZLua 对齐。',
    },
    hero: {
      desc: '由 QuickJS 驱动，设计与 ZLua 对齐。零 Wrap 白名单，官方 TypeScript 工作流，运行时只执行 emit 后的 JS。',
    },
    stats: {
      vm: { value: 'QuickJS', label: '脚本虚拟机' },
      config: { value: '零配置', label: '懒绑定 C# 类型' },
      ts: { value: 'TS 一等', label: '官方工作流' },
      license: { value: 'MIT', label: '开源协议' },
    },
    features: {
      title: '核心特性',
      desc: '相对 Puerts / 手写 QuickJS 绑定，ZenTS 把互操作、工作流和 Il2Cpp 热路径收成同一套产品。',
      items: {
        usable: { title: '更易用', desc: '设计贴近 C#；零 per-type Wrap 白名单；CSharp[assembly][type] 懒绑定。' },
        complete: { title: '更完备', desc: '覆盖方法重载、ref/out、struct ByVal/ByObj、Nullable、委托、数组、指针与 [JsMarshalAs]。' },
        unified: { title: '更统一', desc: '与 ZLua 同一套语义契约（门面 / Marshal / 类型系统 / 生命周期），Lua 与 TS/JS 可共用产品心智。' },
        fast: { title: '更高效', desc: 'Player Il2Cpp 热路径为 C++ 桥接，签名复用 stub；支持少生成甚至 0 桥接函数仍可跑通主路径。' },
        gc: { title: '更少 GC', desc: '引用类型与 struct（含含引用字段的 struct）默认走 Registry / ByVal exotic。' },
        ts: { title: 'TS 一等公民', desc: '官方 TypeScript 工作流：生成 csharp: 声明、进 Play 闸门类型检查；运行时仍只跑 emit 后的 JS。' },
      },
    },
    comparison: {
      title: '与 ZLua 对齐',
      desc: '业务侧 API 形态刻意一致：会用 ZLua，即可很快上手 ZenTS。',
      capability: '能力',
      rows: {
        script: { cap: '脚本侧', zlua: 'Lua（PUC-Rio / LuaJIT）', zents: 'JavaScript（QuickJS）；可选 TypeScript' },
        facade: { cap: '宿主门面', zlua: 'LuaAppDomain', zents: 'JsAppDomain' },
        entry: { cap: '类型入口', zlua: 'CSharp[...]', zents: '同左；另支持 import from "csharp:…"' },
        stdlib: { cap: '标准库', zlua: 'zlua.*', zents: 'zents.*' },
        attrs: { cap: '特性属性', zlua: '[LuaMarshalAs] 等', zents: '[JsMarshalAs] / [JsAlias] / [JsExtension]' },
      },
    },
    platforms: {
      title: '平台与版本',
      desc: 'Editor Mono + Player Il2Cpp；运行时只加载 ES module。',
      items: ['Unity 2021.3 / 2022.3 / 6000.x', '团结引擎 1.x', 'QuickJS', 'Win64 / macOS Editor', 'Il2Cpp 全平台（含 WebGL / 小游戏 / 鸿蒙）'],
    },
    resources: { title: '资源' },
  },

  // ═══════════════════════════════════════════════════
  luatier: {
    badge: '研发中',
    tagline: '分层混合执行的现代 Lua 运行时',
    short: '从零用 C++17 重写，非 LuaJIT 衍生',
    card: '从零用 C++17 重写，支持 Lua 5.3+。提供字节码解释器、离线 AOT 编译与可选 tracing JIT，并非历史 LuaJIT 的衍生。',
    metric: '解释 / AOT / JIT 三级',
    seo: {
      title: 'LuaTier — 分层混合执行的现代 Lua 运行时',
      desc: 'LuaTier 是从零用 C++17 实现的现代 Lua 运行时，支持 Lua 5.3+，提供字节码解释器、离线 AOT 编译与可选 tracing JIT，与历史 LuaJIT 无派生关系。',
    },
    hero: {
      desc: '从零用 C++17 重写，支持 Lua 5.3+。提供字节码解释器、离线 AOT 编译与可选 tracing JIT —— 不是历史 LuaJIT 的衍生。',
    },
    stats: {
      lang: { value: 'Lua 5.3+', label: '语言版本' },
      impl: { value: 'C++17', label: '从零实现' },
      tiers: { value: '三级', label: '解释 / AOT / JIT' },
      license: { value: 'MIT', label: '开源协议' },
    },
    arch: {
      title: '执行架构',
      desc: '分层混合执行：默认解释，热点可离线 AOT，并预留 tracing JIT。三级可独立裁剪。',
    },
    features: {
      title: '核心能力',
      desc: '前端、虚拟机、运行时与 GC 全部自研，架构契约冻结在 docs/spec。',
      items: {
        interp: { title: '字节码解释器', desc: '前端完成词法、语法、语义与 LBC 下降；VM 执行自定义字节码，并提供 Lua 兼容 C API。' },
        aot: { title: '离线 AOT', desc: '可将热点函数离线编译，降低解释开销，适合发布期固化性能路径。' },
        jit: { title: 'Tracing JIT', desc: '热度、内联缓存、baseline / opt / deopt 脚手架已就位，JIT 为可选能力。' },
        diff: { title: '差分测试', desc: '单元测试之外，用 oracle 与 Lua 5.3.6 对照，并提供 GC / deopt / IC 压力开关。' },
        runtime: { title: '运行时与 GC', desc: '自研 TValue、string、table、closure、upvalue，以及增量 mark-sweep GC。' },
        origin: { title: '非 LuaJIT 分支', desc: '代码与历史 LuaJIT 无派生关系，按现代 C++17 与冻结架构契约重新实现。' },
      },
    },
    layout: {
      title: '仓库结构',
      desc: '架构契约冻结在 docs/spec，实现按模块拆分。',
      path: '路径',
      module: '模块',
      rows: {
        frontend: { mod: '前端', note: 'lexer、parser、AST、sema、LBC lowering' },
        vm: { mod: '虚拟机', note: '字节码、解释器、状态、内建' },
        runtime: { mod: '运行时', note: 'TValue、string、table、closure、upvalue' },
        gc: { mod: 'GC', note: '增量 mark-sweep' },
        jit: { mod: 'JIT', note: '热度、IC、baseline / opt / deopt' },
        api: { mod: 'API', note: 'Lua 兼容 C API' },
      },
    },
    status: {
      title: '当前定位',
      desc: '项目仍在积极开发。可本地构建运行 CLI，并与 Lua 5.3.6 做差异测试与基准。',
      items: ['CMake + CTest', 'vs Lua 5.3.6 基准', 'docs/spec 架构契约', 'MIT'],
    },
    resources: { title: '资源' },
  },

  // ═══════════════════════════════════════════════════
  luban: {
    badge: '热门项目',
    tagline: '强大、易用、优雅、稳定的游戏配置方案',
    short: '从小型到超大型项目的全覆盖配置工作流',
    card: '增强的 Excel 格式，完备类型系统（含 OOP 继承），强大的数据校验，内置生成十余种语言代码。支持 Unity、UE、Godot 等主流引擎。',
    metric: '13+ 语言代码生成',
    seo: {
      title: 'Luban — 强大易用的游戏配置解决方案',
      desc: 'Luban 提供增强的 Excel 配置格式、完备类型系统（含 OOP 继承）、强大数据校验，内置 C#、Java、Go、C++、Lua、TypeScript 等 13+ 语言代码生成，支持 Unity、UE、Godot。',
    },
    hero: {
      desc: '增强的 Excel 格式，完备的类型系统与数据校验，内置十余种语言的代码生成。从小型项目到超大型项目的完整配置工作流。',
    },
    stats: {
      stars: { label: 'GitHub Stars' },
      langs: { value: '13+', label: '语言代码生成' },
      license: { value: 'MIT', label: '开源协议' },
      engines: { value: '全引擎', label: 'Unity / UE / Godot' },
    },
    features: {
      title: '核心特性',
      desc: 'Luban 提供了游戏配置工作流中所需的一切能力。',
      items: {
        sources: { title: '丰富数据源', desc: '支持 Excel（csv/xls/xlsx）、JSON、XML、YAML、Lua 等多种数据源格式。' },
        types: { title: '完整类型系统', desc: '支持 OOP 类型继承，可优雅表达行为树、技能、剧情、副本等复杂 GamePlay 数据。' },
        validation: { title: '强大数据校验', desc: '支持 Ref 引用检查、Path 资源路径检查、Range 范围检查等多种校验机制。' },
        codegen: { title: '多语言代码生成', desc: '内置 C#、Java、Go、C++、Lua、Python、TypeScript、Rust 等 13+ 语言支持。' },
        hotfix: { title: '热更兼容', desc: '完美兼容 HybridCLR、ILRuntime、xLua、puerts 等主流热更方案。' },
        obfuscation: { title: '混淆兼容', desc: '生成代码无反射，兼容 Obfuz、Obfuscator、.NET Reactor 等混淆工具。' },
      },
    },
    languages: { title: '代码生成语言', desc: '内置支持 13+ 种编程语言的代码生成。' },
    engines: { title: '支持引擎与平台', items: ['Unity', 'Unreal Engine', 'Cocos2d-x', 'Godot', '微信小游戏', '其他引擎'] },
    formats: {
      title: '数据格式支持',
      source: { title: '数据源格式', items: ['Excel (csv/xls/xlsx)', 'JSON', 'XML', 'YAML', 'Lua'] },
      export: { title: '导出格式', items: ['Binary', 'JSON', 'BSON', 'XML', 'Lua', 'YAML'] },
      message: { title: '消息方案', items: ['Protobuf', 'FlatBuffers', 'MsgPack'] },
    },
    resources: { title: '资源' },
  },

  // ═══════════════════════════════════════════════════
  obfuz: {
    badge: '代码安全',
    tagline: '开源 Unity 代码混淆与加固方案',
    short: '深度集成 Unity 工作流，三分钟接入',
    card: '深度集成 Unity 工作流，默认无需配置即可良好工作。支持符号/常量/控制流混淆与随机加密虚拟机，全面兼容 HybridCLR、xLua 等热更新方案。',
    metric: '3000+ 测试用例',
    seo: {
      title: 'Obfuz — 开源 Unity 代码混淆与加固方案',
      desc: 'Obfuz 是深度集成 Unity 工作流的开源代码混淆与加固方案，支持符号、常量、控制流混淆与随机加密虚拟机，全面兼容 HybridCLR、xLua 等热更新方案，三分钟即可接入。',
    },
    hero: {
      desc: '深度集成 Unity 工作流，默认无需配置混淆规则即可良好工作。三分钟接入，全面兼容 HybridCLR、xLua 等热更新方案。',
    },
    stats: {
      setup: { value: '3 分钟', label: '快速接入' },
      tests: { value: '3000+', label: '自动化测试用例' },
      unity: { value: '2019+', label: 'Unity / 团结引擎' },
      license: { value: 'MIT', label: '开源协议' },
    },
    features: {
      title: '为什么选择 Obfuz',
      desc: '功能对标商业工具，同时为 Unity 工作流做了自动化处理（如 MonoBehaviour 名默认不混淆）。',
      items: {
        powerful: { title: '功能强大', desc: '提供媲美商业工具的混淆与代码加固能力，含多态 DLL、控制流平坦化与随机加密虚拟机。' },
        unity: { title: '深度集成 Unity', desc: '自动处理除反射外几乎所有特殊情况（如 MonoBehaviour 名不能混淆），默认无需写规则即可工作。' },
        quick: { title: '快速集成', desc: '只需配置哪些程序集需要被混淆，三分钟即可接入。' },
        stable: { title: '稳定可靠', desc: '全面自动化测试，成功通过 3000 多个用例，覆盖常见代码形态。' },
        hotfix: { title: '支持热更新', desc: '兼容 HybridCLR、xLua 等主流代码热更新方案。' },
        free: { title: '开源免费', desc: 'MIT 协议，可自由使用、修改和分发。' },
      },
    },
    capabilities: {
      title: '功能特性',
      desc: '从符号到控制流，再到随机加密虚拟机，覆盖商业项目常见加固需求。',
      items: {
        polymorphicDll: { title: '多态 DLL', desc: '自定义结构随机化的 DLL 格式，每次发布结构都不同，对抗破解与篡改。' },
        symbols: { title: '符号 / 常量混淆', desc: '丰富配置与增量混淆；混淆 int、long、float、double、string、数组等常量。' },
        memory: { title: '内存与栈混淆', desc: '加密内存中的变量，混淆执行栈中的变量，提高运行时逆向难度。' },
        expressions: { title: '表达式与调用', desc: '混淆常见运算，打乱函数调用结构。' },
        controlFlow: { title: '控制流平坦化', desc: '打乱代码执行流程，显著增加逆向成本。' },
        vm: { title: '随机加密虚拟机', desc: '生成随机化虚拟机，抵御反编译工具；结合静态与动态解密。' },
        garbage: { title: '垃圾代码与水印', desc: '多种垃圾代码生成，提高商店审核通过率；可嵌入可追踪水印。' },
        dots: { title: '兼容 DOTS', desc: '兼容 DOTS 各版本，无需额外配置。' },
        polymorphic: { title: '混淆多态化', desc: '通过不同生成密钥和随机种子，产出不同的混淆代码。' },
      },
    },
    platforms: {
      title: '支持范围',
      items: ['Unity 2019+', '团结引擎', 'Il2Cpp / Mono', '全平台', 'HybridCLR / xLua'],
    },
    resources: { title: '资源' },
  },
}
