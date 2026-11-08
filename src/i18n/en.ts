export const english: Record<string, string> = {
  "C# 热更新": "C# hot updates",
  "原生 C#，\n自由热更新。": "Native C#.\nDynamic possibilities.",
  "为 Unity 带来原生 C# 热更新能力。扩展 IL2CPP 为 AOT 与解释执行协作的混合运行时，让熟悉的 C# 工作流延伸到运行时。":
    "Native C# hot updates for Unity. HybridCLR extends IL2CPP with a runtime that combines AOT and interpreted execution, taking your familiar C# workflow into runtime.",
  "希望保留 C# 开发体验，并为 Unity 项目接入代码热更新的团队。":
    "Unity teams who want code hot updates while keeping their native C# development experience.",
  "C# 业务代码": "C# game code",
  编译程序集: "Compile assemblies",
  "Unity 游戏": "Unity game",
  "沿用原生 C# 工作流": "Keep your native C# workflow",
  "使用熟悉的语言、工具链与 Unity 开发方式，减少跨语言开发和维护成本。":
    "Use familiar languages, tools and Unity workflows to reduce the cost of cross-language development and maintenance.",
  "AOT 与解释执行协作": "AOT meets interpretation",
  "在 IL2CPP 基础上支持动态加载程序集，让预编译代码与热更新代码共同工作。":
    "Load assemblies dynamically on top of IL2CPP, allowing precompiled code and hot-update code to work together.",
  从社区到商业项目: "From community to production",
  "从社区版开始评估，根据项目对性能、代码保护和技术支持的需求选择商业版本。":
    "Start with the Community Edition, then choose a commercial edition for your performance, code protection and support needs.",
  "C# / 程序集加载示意": "C# / Assembly loading example",
  '// 加载热更新程序集\nvar assembly = Assembly.Load(dllBytes);\n\n// 获取业务入口\nvar entry = assembly.GetType("Game.Entry");\nvar start = entry.GetMethod("Start");\n\n// 开始运行\nstart.Invoke(null, null);':
    '// Load the hot-update assembly\nvar assembly = Assembly.Load(dllBytes);\n\n// Find the game entry point\nvar entry = assembly.GetType("Game.Entry");\nvar start = entry.GetMethod("Start");\n\n// Start the game logic\nstart.Invoke(null, null);',
  游戏配置: "Game configuration",
  "让游戏配置，\n井然有序。": "Game configuration.\nBeautifully organized.",
  "连接策划数据与游戏代码的配置解决方案。把数据定义、校验与生成融入同一条工作流，让团队更专注于游戏内容。":
    "Connect game design data with game code. Bring schemas, validation and generation into one workflow, so your team can focus on the content that matters.",
  数据校验: "Data validation",
  代码生成: "Code generation",
  多语言: "Multiple languages",
  "需要统一配置规范、减少数据错误，并服务多语言客户端和服务端的游戏团队。":
    "Game teams who need consistent configuration, fewer data errors, and support for clients and servers written in different languages.",
  "Excel / 配置源": "Excel / Data sources",
  类型定义: "Type definitions",
  数据校验与生成: "Validate & generate",
  "代码 + 数据": "Code + Data",
  "策划与程序，高效协作": "Designers and developers, connected",
  "以配置数据为共同语言，把策划编辑与程序读取连接成清晰、可维护的流程。":
    "Use configuration as a shared language, connecting data editing and code access in a clear, maintainable workflow.",
  在生成阶段发现问题: "Catch errors during generation",
  "通过类型定义与数据校验，让配置错误更早暴露，减少运行时排查成本。":
    "Type definitions and data validation surface errors earlier, reducing time spent debugging at runtime.",
  多语言与多引擎: "Multiple languages and engines",
  "面向 C#、C++、Java、Lua、TypeScript 等语言生成代码，适配不同项目的技术栈。":
    "Generate code for C#, C++, Java, Lua, TypeScript and more to fit your project’s technology stack.",
  "配置工作流 / 结构示意": "Configuration workflow / Structure example",
  "configs/\n├── defines/          # 类型与表结构\n├── datas/            # 策划配置数据\n└── gen.bat           # 生成入口\n\noutput/\n├── code/             # 强类型访问代码\n└── data/             # 游戏运行时数据":
    "configs/\n├── defines/          # Types and schemas\n├── datas/            # Game design data\n└── gen.bat           # Generation entry\n\noutput/\n├── code/             # Typed access code\n└── data/             # Runtime game data",
  跨平台运行时: "Cross-platform runtime",
  "面向生产发布的 CLR 实现。以高 ECMA-335 兼容度、低集成复杂度和跨平台能力为目标，为 C# 应用提供更多运行选择。":
    "A CLR implementation built for production. Designed for high ECMA-335 compatibility, simple integration and cross-platform reach, giving C# applications more places to run.",
  跨平台: "Cross-platform",
  "希望在不同平台运行 C#，或为自己的应用集成 CLR 的开发团队。":
    "Teams looking to run C# across platforms or embed a CLR in their own applications.",
  "C# 应用": "C# application",
  ".NET 程序集": ".NET assemblies",
  目标平台: "Target platform",
  标准驱动的运行时: "A standards-driven runtime",
  "围绕 ECMA-335 兼容性建设，让已有的 C# 代码与 .NET 程序集获得更广泛的运行空间。":
    "Built around ECMA-335 compatibility to bring existing C# code and .NET assemblies to more environments.",
  降低集成复杂度: "Simpler integration",
  "为嵌入式集成提供清晰的运行时边界，帮助团队把 C# 能力带入自己的应用。":
    "Clear runtime boundaries for embedding C# capabilities into your own applications.",
  面向跨平台发布: "Built for cross-platform delivery",
  "将业务逻辑与目标平台解耦。具体平台支持、集成方式与版本状态请查阅官方文档。":
    "Separate business logic from the target platform. See the official documentation for supported platforms, integration options and release status.",
  "运行时架构 / 概念示意": "Runtime architecture / Conceptual overview",
  代码保护: "Code protection",
  "为你的代码，\n多一层保护。": "Your code.\nAn extra layer of protection.",
  "深度集成 Unity 工作流的 C# 代码混淆工具。从日常构建到游戏发布，让代码保护成为工程流程的一部分。":
    "C# code obfuscation integrated into Unity workflows. Make code protection part of your engineering process, from everyday builds to release.",
  "C# 混淆": "C# obfuscation",
  "需要在 Unity 发布流程中加入代码混淆，并兼顾热更新方案的开发团队。":
    "Unity teams who want code obfuscation in their release pipeline alongside their hot-update solution.",
  "C# 程序集": "C# assemblies",
  混淆规则: "Obfuscation rules",
  "Obfuz 处理": "Obfuz processing",
  发布构建: "Release build",
  "融入 Unity 构建流程": "Part of your Unity build",
  "将混淆处理纳入已有工程流程，保持从开发到发布的一致体验。":
    "Integrate obfuscation into your existing engineering process for a consistent path from development to release.",
  多维度代码混淆: "Multiple layers of obfuscation",
  "结合符号、常量、控制流等混淆能力，根据项目需求配置保护策略。":
    "Combine symbol, constant and control-flow obfuscation to configure protection for your project.",
  兼顾热更新场景: "Works with hot-update workflows",
  "支持与 HybridCLR 等方案配合使用，具体集成步骤与兼容边界请参阅文档。":
    "Use alongside solutions such as HybridCLR. See the documentation for integration steps and compatibility details.",
  "代码混淆 / 仅展示符号变化": "Code obfuscation / Symbol changes only",
  "// Before\npublic class PlayerRewards\n{\n    public int CalculateBonus(int level);\n}\n\n// After · 概念示意\npublic class a\n{\n    public int b(int c);\n}":
    "// Before\npublic class PlayerRewards\n{\n    public int CalculateBonus(int level);\n}\n\n// After · Conceptual example\npublic class a\n{\n    public int b(int c);\n}",
  "Lua 脚本": "Lua scripting",
  "Lua 的灵活，\nUnity 的可能。": "Lua flexibility.\nUnity possibilities.",
  "高效、稳定、优雅的现代 Unity Lua 脚本方案，针对 IL2CPP 与 .NET 优化，让 Lua 与 C# 自然协作。":
    "An efficient, stable and elegant modern Lua scripting solution for Unity, optimized for IL2CPP and .NET to bring Lua and C# together.",
  "希望使用 Lua 编写 Unity 业务逻辑，并关注 C# 互操作体验的团队。":
    "Teams who want Lua for Unity game logic and care about a natural C# interoperability experience.",
  "zlua 互操作": "zlua interop",
  游戏逻辑: "Game logic",
  自然的跨语言协作: "Natural language interoperability",
  "连接 Lua 脚本与 C# 类型，让业务逻辑和 Unity 引擎能力协同工作。":
    "Connect Lua scripts with C# types so your game logic and Unity engine capabilities work together.",
  围绕运行时优化: "Optimized for the runtime",
  "针对 IL2CPP 与 .NET 的运行环境设计，关注跨语言调用效率与内存分配。":
    "Designed for IL2CPP and .NET, with attention to cross-language call efficiency and memory allocation.",
  "面向现代 Unity 工程": "For modern Unity projects",
  "通过官方文档与示例工程评估集成方式，逐步接入既有项目。":
    "Evaluate integration through the official documentation and sample projects, then introduce it into your existing workflow.",
  "Lua / 语言与互操作概念示意": "Lua / Conceptual interop example",
  "-- 游戏逻辑保持简洁\nlocal function update_player(player, dt)\n    local position = player.position\n    position.x = position.x + dt\n    player.position = position\nend\n\n-- Unity 对象由宿主传入\nupdate_player(player, delta_time)":
    "-- Keep game logic simple\nlocal function update_player(player, dt)\n    local position = player.position\n    position.x = position.x + dt\n    player.position = position\nend\n\n-- The host provides the Unity object\nupdate_player(player, delta_time)",
  "TypeScript 脚本": "TypeScript scripting",
  "用 TypeScript，\n构建游戏逻辑。": "Build game logic.\nWith TypeScript.",
  "针对 IL2CPP 优化的现代 Unity TypeScript 脚本方案，把熟悉的 TypeScript 开发体验带入游戏工程。":
    "A modern Unity TypeScript scripting solution optimized for IL2CPP, bringing familiar TypeScript development to game projects.",
  "希望在 Unity 中采用 TypeScript，并使用其类型系统与工具链的团队。":
    "Unity teams who want TypeScript, its type system and its developer tooling in their workflow.",
  "编译 JavaScript": "Compile JavaScript",
  "ZenTS 互操作": "ZenTS interop",
  "熟悉的 TypeScript 体验": "Familiar TypeScript development",
  "在脚本开发阶段使用类型检查与编辑器工具，为团队协作提供清晰的代码约定。":
    "Use type checking and editor tooling while developing scripts, with clear code contracts for team collaboration.",
  "连接 Unity 与脚本逻辑": "Connect scripts to Unity",
  "通过互操作层访问 C# 与 Unity 能力，把引擎功能带入 TypeScript 工作流。":
    "Access C# and Unity capabilities through an interoperability layer in your TypeScript workflow.",
  "为 IL2CPP 场景设计": "Designed for IL2CPP",
  "围绕 Unity 发布环境优化运行时交互，接入方式与支持范围以官方文档为准。":
    "Runtime interactions optimized around Unity release environments. See the official documentation for integration and support details.",
  "TypeScript / 语言与互操作概念示意":
    "TypeScript / Conceptual interop example",
  "interface Player {\n  position: { x: number; y: number };\n}\n\nfunction update(player: Player, dt: number) {\n  player.position.x += dt;\n}\n\n// 类型清晰，逻辑专注。":
    "interface Player {\n  position: { x: number; y: number };\n}\n\nfunction update(player: Player, dt: number) {\n  player.position.x += dt;\n}\n\n// Clear types. Focused logic.",
  产品与技术服务咨询: "Product and technical service inquiry",
  首页: "Home",
  商务咨询: "Contact sales",
  "把技术问题，": "Technical challenges.",
  "交给懂技术的人。": "Meet technical expertise.",
  "从产品选型到商业版本，从项目集成到技术支持，":
    "From product selection to commercial editions and integration support,",
  "我们期待了解你的团队和正在构建的游戏。":
    "tell us about your team and the game you are building.",
  商业版本授权: "Commercial licensing",
  技术支持: "Technical support",
  项目合作: "Project collaboration",
  "聊聊你的项目。": "Let’s talk about your project.",
  请使用贵公司的: "Please contact us using your ",
  企业邮箱: "company email",
  "发起咨询。": ".",
  "QQ、126 等个人邮箱发起的咨询不予处理。":
    "Inquiries from personal email accounts such as QQ and 126 are not processed.",
  发送商务邮件: "Send an email",
  "已复制 ✓": "Copied ✓",
  复制邮箱: "Copy email",
  "商务邮箱已复制到剪贴板。": "Business email copied to clipboard.",
  "欢迎在邮件中介绍你的团队与项目需求。":
    "Tell us about your team and project needs in your email.",
  "让沟通，更进一步。": "Make every conversation count.",
  介绍你的团队: "Introduce your team",
  "公司名称、项目阶段和联系人，帮助我们了解你的业务背景。":
    "Share your company name, project stage and contact person to help us understand your business.",
  描述技术需求: "Describe your technical needs",
  "感兴趣的产品、目标平台与引擎版本，以及你希望解决的问题。":
    "Include the products you are interested in, target platforms, engine versions and the problems you want to solve.",
  说明合作方向: "Tell us how we can help",
  "商业授权、版本试用或技术支持，让我们更好地理解你的预期。":
    "Commercial licensing, an edition trial or technical support—let us know what you have in mind.",
  全部产品: "All products",
  运行时与热更新: "Runtimes & hot updates",
  脚本方案: "Scripting",
  腾讯游戏: "Tencent Games",
  网易: "NetEase",
  莉莉丝游戏: "Lilith Games",
  完美世界: "Perfect World",
  游族网络: "YOOZOO Games",
  巨人网络: "Giant Network",
  "保留 C# 体验，灵活更新游戏": "Keep C#. Update with confidence.",
  "在熟悉的 Unity 开发流程中，为持续迭代的游戏接入原生 C# 热更新。":
    "Add native C# hot updates to a game that evolves, using your familiar Unity development workflow.",
  让配置成为可靠的生产流程: "Make configuration a reliable pipeline",
  "连接策划与程序，让配置定义、数据校验和代码生成形成完整闭环。":
    "Connect designers and developers through a complete cycle of schema definitions, data validation and code generation.",
  "为 C# 探索更广的运行边界": "Take C# to more environments",
  "面向跨平台发布与运行时集成，为 C# 应用选择合适的技术底座。":
    "Choose a runtime foundation for cross-platform delivery and application integration.",
  选择适合团队的脚本语言: "Choose your team’s scripting language",
  "通过 Lua 或 TypeScript 编写游戏逻辑，连接 Unity 与团队熟悉的工具链。":
    "Write game logic in Lua or TypeScript, connecting Unity to the tools your team knows.",
  把代码保护纳入发布流程: "Build code protection into release",
  "在构建阶段加入代码混淆，让代码保护与游戏开发、热更新流程协同工作。":
    "Add obfuscation during builds, alongside your development and hot-update workflows.",
  "为游戏研发，": "For game creators.",
  构建可靠的: "A foundation",
  "技术底座。": "you can build on.",
  "从原生 C# 热更新到跨平台运行时，":
    "From native C# hot updates to cross-platform runtimes,",
  "以深度技术，让每一份创造力自由生长。":
    "deep engineering gives your creativity room to grow.",
  探索技术产品: "Explore products",
  "了解 HybridCLR": "Discover HybridCLR",
  专注游戏行业的深度技术解决方案:
    "Deep technology solutions for game development",
  "从代码，到无限可能。": "From code to possibility.",
  "01 — 技术驱动创造": "01 — ENGINEERING FOR CREATIVITY",
  "与众多游戏研发团队，一同构建更多可能":
    "Building more possibilities with game development teams",
  精选产品使用方: "Selected product users",
  "FLAGSHIP PRODUCT / 旗舰产品": "FLAGSHIP PRODUCT",
  "熟悉的 C#。": "Familiar C#.",
  "全新的可能。": "New possibilities.",
  "让 Unity 原生 C# 热更新成为日常。":
    "Make native C# hot updates part of everyday Unity development.",
  "沿用已有代码与开发习惯，把精力留给游戏本身。":
    "Keep your code and your workflow. Save your energy for the game.",
  "原生 C#": "Native C#",
  混合运行时: "Hybrid runtime",
  "深入了解 HybridCLR": "Explore HybridCLR",
  "阅读技术文档 ↗": "Technical documentation ↗",
  "// 一种语言，连接开发与运行。":
    "// One language, from development to runtime.",
  "// 动态加载热更新程序集": "// Load the hot-update assembly",
  "// 让新的游戏逻辑，即刻就位。": "// Put new game logic into action.",
  "原生 C# 开发体验": "Native C# development",
  示意代码: "Illustrative code",
  保留原生工作流: "Keep your workflow",
  熟悉的工具与语言: "Familiar tools and language",
  动态加载程序集: "Load assemblies dynamically",
  面向项目持续迭代: "Keep your project evolving",
  社区与商业版本选择: "Community & commercial editions",
  "每一个难题，": "Real challenges.",
  "都有扎实的技术回应。": "Solid engineering answers.",
  "覆盖运行时、游戏配置、代码保护与脚本开发，":
    "Runtimes, game configuration, code protection and scripting.",
  "为游戏研发的关键环节提供可靠工具。":
    "Reliable tools for the critical parts of game development.",
  筛选技术产品: "Filter technology products",
  旗舰: "Flagship",
  产品详情: "Product details",
  " GitHub 仓库": " GitHub repository",
  "开放的代码，持续生长的技术。": "Open code. Evolving technology.",
  "查看全部开源项目 ↗": "Explore all open-source projects ↗",
  "从一张配置表，": "From a configuration table",
  "到有序的游戏世界。": "to a world in order.",
  "让策划专注内容，让程序专注逻辑。":
    "Designers focus on content. Developers focus on logic.",
  "Luban 把配置生产中的复杂性，收进一条清晰的工作流。":
    "Luban brings complex configuration tasks into one clear workflow.",
  "探索 Luban 配置方案": "Explore Luban",
  "Luban 配置工作流：编辑数据源、定义类型、校验生成、输出代码与数据":
    "Luban configuration workflow: edit data sources, define types, validate and generate code and data",
  定义类型: "Define types",
  "校验 & 生成": "Validate & generate",
  "一套配置 · 多端协作": "One configuration · Multiple targets",
  "从你的问题出发，": "Start with your challenge.",
  "找到合适的产品。": "Find the right product.",
  "技术选型，始于真实需求。": "Good technology choices start with real needs.",
  "无论你正在搭建新项目，还是优化已有工作流。":
    "For new projects and workflows ready to evolve.",
  "和我们聊聊你的项目 ↗": "Talk to us about your project ↗",
  "从理解原理，": "Understand the foundations.",
  "到写下第一行代码。": "Write your first line.",
  "源码、文档与示例，始终触手可及。":
    "Source code, documentation and examples, always within reach.",
  "选择一个产品，开始你的技术探索。": "Pick a product and start exploring.",
  阅读官方文档: "Read the documentation",
  "深耕底层技术，": "Deep engineering.",
  "释放创造潜能。": "Room to create.",
  "我们相信，好的技术应该让复杂问题变得清晰，让开发者把时间留给真正的创造。":
    "We believe good technology makes complex problems clear, giving developers more time for meaningful creation.",
  "Code Philosophy（代码哲学）专注游戏行业的深度技术解决方案。从运行时到研发工具，我们持续打磨产品，帮助游戏团队构建可靠、高效、可持续演进的技术体系。":
    "Code Philosophy builds deep technology solutions for the games industry. From runtimes to development tools, we help game teams build reliable, efficient technology that can evolve with their ambitions.",
  工程深度: "Engineering depth",
  开发者体验: "Developer experience",
  长期价值: "Lasting value",
  "下一个技术难题，": "Your next challenge.",
  "一起解决。": "Let’s solve it together.",
  "商业版本、技术支持与项目合作，欢迎与我们交流。":
    "Talk to us about commercial editions, technical support and project collaboration.",
  "联系 Code Philosophy": "Contact Code Philosophy",
  字节码解释器: "Bytecode interpreter",
  "前端完成词法、语法、语义与 LBC 下降；VM 执行自定义字节码，并提供 Lua 兼容 C API。":
    "The frontend handles lexing, parsing, semantic analysis and LBC lowering. The VM executes custom bytecode and exposes a Lua-compatible C API.",
  "离线 AOT": "Offline AOT",
  "可将热点函数离线编译，降低解释开销，适合发布期固化性能路径。":
    "Compile hot functions ahead of time to reduce interpretation overhead and optimize performance paths before release.",
  "热度、内联缓存、baseline / opt / deopt 脚手架已就位，JIT 为可选能力。":
    "Hotness tracking, inline caches and baseline / opt / deopt scaffolding are in place. JIT is optional.",
  差分测试: "Differential testing",
  "单元测试之外，用 oracle 与 Lua 5.3.6 对照，并提供 GC / deopt / IC 压力开关。":
    "Alongside unit tests, compare against Lua 5.3.6 with an oracle and stress switches for GC, deoptimization and inline caches.",
  "运行时与 GC": "Runtime & GC",
  "自研 TValue、string、table、closure、upvalue，以及增量 mark-sweep GC。":
    "Custom TValue, string, table, closure and upvalue implementations, with incremental mark-sweep GC.",
  "非 LuaJIT 分支": "An independent implementation",
  "代码与历史 LuaJIT 无派生关系，按现代 C++17 与冻结架构契约重新实现。":
    "Built independently of the historical LuaJIT codebase with modern C++17 and frozen architecture contracts.",
  前端: "Frontend",
  虚拟机: "Virtual machine",
  "字节码、解释器、状态、内建": "Bytecode, interpreter, state, built-ins",
  运行时: "Runtime",
  "增量 mark-sweep": "Incremental mark-sweep",
  "热度、IC、baseline / opt / deopt": "Hotness, IC, baseline / opt / deopt",
  "Lua 兼容 C API": "Lua-compatible C API",
  "vs Lua 5.3.6 基准": "Benchmarks vs Lua 5.3.6",
  "docs/spec 架构契约": "docs/spec architecture contracts",
  研发中: "In development",
  "分层混合执行的现代 Lua 运行时": "A modern Lua runtime with tiered execution",
  "从零用 C++17 重写，支持 Lua 5.3+。提供字节码解释器、离线 AOT 编译与可选 tracing JIT——不是历史 LuaJIT 的衍生。":
    "Built from scratch in C++17 with Lua 5.3+ support. Bytecode interpretation, offline AOT and optional tracing JIT, independently developed from LuaJIT.",
  语言版本: "Language version",
  从零实现: "Built from scratch",
  三级: "Three tiers",
  "解释 / AOT / JIT": "Interpreter / AOT / JIT",
  开源协议: "Open-source license",
  项目主页: "Project website",
  执行架构: "Execution architecture",
  "分层混合执行：默认解释，热点可离线 AOT，并预留 tracing JIT。":
    "Tiered execution: interpretation by default, offline AOT for hot paths, and provision for tracing JIT.",
  仓库结构: "Repository structure",
  "架构契约冻结在 docs/spec，实现按模块拆分。":
    "Architecture contracts are frozen in docs/spec, with implementation organized by module.",
  路径: "Path",
  模块: "Module",
  说明: "Description",
  当前定位: "Project status",
  "项目仍在积极开发。可本地构建运行 CLI，并与 Lua 5.3.6 做差异测试与基准。":
    "In active development. Build and run the CLI locally, with differential tests and benchmarks against Lua 5.3.6.",
  "关注 LuaTier": "Follow LuaTier",
  "从源码构建，或在 GitHub 上跟踪路线图与基准报告。":
    "Build from source, or follow the roadmap and benchmark reports on GitHub.",
  查看仓库: "View repository",
  "了解 ZLua": "Discover zlua",
  社区版: "Community",
  "从原生 C# 热更新开始，评估并集成到你的 Unity 项目。":
    "Start with native C# hot updates, evaluate the solution, and integrate it into your Unity project.",
  查看开源项目: "Explore the source",
  专业版: "Professional",
  "面向对解释性能、元数据优化与代码加固有进一步要求的项目。":
    "For projects with additional needs for interpreter performance, metadata optimization and code protection.",
  了解专业能力: "Explore professional features",
  旗舰版: "Flagship",
  "通过 DHE 差分混合执行技术，满足更高的运行性能需求。":
    "DHE differential hybrid execution technology for projects with higher runtime performance requirements.",
  "了解 DHE 技术": "Discover DHE",
  热重载版: "Hot Reload",
  "面向需要卸载与重新加载程序集的项目，扩展运行时管理能力。":
    "For projects that need to unload and reload assemblies, with extended runtime management capabilities.",
  了解热重载: "Explore hot reload",
  技术产品: "Products",
  旗舰产品: "Flagship product",
  "GitHub 源码": "Source on GitHub",
  "概念示意 · 接入请查阅文档": "Conceptual example · See integration docs",
  "围绕真实需求，": "Real-world needs.",
  "打磨每一处能力。": "Carefully engineered capabilities.",
  "完整技术文档 ↗": "Full technical documentation ↗",
  "融入你的研发工作流。": "Fits your development workflow.",
  "从输入到运行，一条清晰的技术路径。":
    "A clear technical path, from input to execution.",
  "产品工作流概念示意；具体配置与集成方式请参阅官方文档。":
    "Conceptual product workflow. See the documentation for configuration and integration details.",
  "从开源探索，": "From open-source exploration",
  "到商业级支持。": "to commercial support.",
  "根据项目需求选择合适的版本。": "Choose the edition that fits your project.",
  "完整功能、兼容范围与试用政策以官方说明为准。":
    "See the official documentation for full features, compatibility and trial policies.",
  "商业版本试用、授权与计时技术支持，请联系商务团队。":
    "Contact our team about trials, licensing and hourly technical support.",
  "咨询商业服务 ↗": "Discuss commercial services ↗",
  "从这里，开始使用": "Get started with",
  "先了解，再验证，最后融入你的项目。":
    "Understand it. Validate it. Build it into your project.",
  阅读文档: "Read the docs",
  "了解安装流程、核心概念与兼容范围":
    "Installation, core concepts and compatibility",
  探索源码: "Explore the source",
  "查看项目说明、版本发布与社区讨论":
    "Project information, releases and community discussions",
  交流项目需求: "Discuss your project",
  "咨询商业版本、集成问题与技术支持":
    "Commercial editions, integration and technical support",
  更多技术产品: "More technology products",
  "查看全部产品 →": "View all products →",
  "HybridCLR 概念架构：C# 代码编译为程序集，由 AOT 与解释执行共同运行于 Unity。":
    "HybridCLR conceptual architecture: C# compiles to assemblies and runs in Unity through AOT and interpreted execution.",
  "业务逻辑 · 原生工作流": "Game logic · Native workflow",
  预编译执行: "Ahead-of-time execution",
  "解释执行 · 动态加载": "Interpretation · Dynamic loading",
  回到顶部: "Back to top",
  代码哲学: "ENGINEERED FOR GAMES",
  "深耕底层技术，释放创造潜能。": "Deep engineering. Room to create.",
  "让开发者专注于创造更有乐趣的游戏。":
    "Helping developers focus on creating games people love.",
  开发者资源: "Developer resources",
  "文档 ↗": " Docs ↗",
  与我们联系: "Get in touch",
  商业版本与技术支持: "Commercial editions & support",
  "商务邮箱 ↗": "Business email ↗",
  "更多项目：LuaTier ↗": "More projects: LuaTier ↗",
  为游戏研发提供: "Built for game development.",
  "长期可靠的技术支持。": "Technical support for the long run.",
  "Code Philosophy. 代码哲学": "Code Philosophy. All rights reserved.",
  "京ICP备2023010608号-2": "Beijing ICP No. 2023010608-2",
  跳转到主要内容: "Skip to main content",
  "Code Philosophy 首页": "Code Philosophy home",
  "关闭 ×": "Close ×",
  "菜单 ☰": "Menu ☰",
  主导航: "Main navigation",
  应用场景: "Use cases",
  关于我们: "About us",
};
