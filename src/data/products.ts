export interface Product {
  id: string;
  name: string;
  category: string;
  mark: string;
  color: string;
  headline: string;
  description: string;
  tags: string[];
  repo: string;
  docs: string;
  useCase: string;
  steps: string[];
  features: { title: string; text: string }[];
  code: string;
  codeLabel: string;
}

export const products: Product[] = [
  {
    id: "hybridclr",
    name: "HybridCLR",
    category: "C# 热更新",
    mark: "H",
    color: "#2459df",
    headline: "原生 C#，\n自由热更新。",
    description:
      "为 Unity 带来原生 C# 热更新能力。扩展 IL2CPP 为 AOT 与解释执行协作的混合运行时，让熟悉的 C# 工作流延伸到运行时。",
    tags: ["Unity", "C#", "AOT + Interpreter"],
    repo: "hybridclr",
    docs: "https://www.hybridclr.cn/docs/intro",
    useCase: "希望保留 C# 开发体验，并为 Unity 项目接入代码热更新的团队。",
    steps: ["C# 业务代码", "编译程序集", "AOT + Interpreter", "Unity 游戏"],
    features: [
      {
        title: "沿用原生 C# 工作流",
        text: "使用熟悉的语言、工具链与 Unity 开发方式，减少跨语言开发和维护成本。",
      },
      {
        title: "AOT 与解释执行协作",
        text: "在 IL2CPP 基础上支持动态加载程序集，让预编译代码与热更新代码共同工作。",
      },
      {
        title: "从社区到商业项目",
        text: "从社区版开始评估，根据项目对性能、代码保护和技术支持的需求选择商业版本。",
      },
    ],
    codeLabel: "C# / 程序集加载示意",
    code: '// 加载热更新程序集\nvar assembly = Assembly.Load(dllBytes);\n\n// 获取业务入口\nvar entry = assembly.GetType("Game.Entry");\nvar start = entry.GetMethod("Start");\n\n// 开始运行\nstart.Invoke(null, null);',
  },
  {
    id: "luban",
    name: "Luban",
    category: "游戏配置",
    mark: "L",
    color: "#167a58",
    headline: "让游戏配置，\n井然有序。",
    description:
      "连接策划数据与游戏代码的配置解决方案。把数据定义、校验与生成融入同一条工作流，让团队更专注于游戏内容。",
    tags: ["数据校验", "代码生成", "多语言"],
    repo: "luban",
    docs: "https://www.datable.cn/",
    useCase:
      "需要统一配置规范、减少数据错误，并服务多语言客户端和服务端的游戏团队。",
    steps: ["Excel / 配置源", "类型定义", "数据校验与生成", "代码 + 数据"],
    features: [
      {
        title: "策划与程序，高效协作",
        text: "以配置数据为共同语言，把策划编辑与程序读取连接成清晰、可维护的流程。",
      },
      {
        title: "在生成阶段发现问题",
        text: "通过类型定义与数据校验，让配置错误更早暴露，减少运行时排查成本。",
      },
      {
        title: "多语言与多引擎",
        text: "面向 C#、C++、Java、Lua、TypeScript 等语言生成代码，适配不同项目的技术栈。",
      },
    ],
    codeLabel: "配置工作流 / 结构示意",
    code: "configs/\n├── defines/          # 类型与表结构\n├── datas/            # 策划配置数据\n└── gen.bat           # 生成入口\n\noutput/\n├── code/             # 强类型访问代码\n└── data/             # 游戏运行时数据",
  },
  {
    id: "leanclr",
    name: "LeanCLR",
    category: "跨平台运行时",
    mark: "C",
    color: "#8051ba",
    headline: "Write C#,\nRun Anywhere.",
    description:
      "面向生产发布的 CLR 实现。以高 ECMA-335 兼容度、低集成复杂度和跨平台能力为目标，为 C# 应用提供更多运行选择。",
    tags: ["CLR", "ECMA-335", "跨平台"],
    repo: "leanclr",
    docs: "https://doc.leanclr.com/",
    useCase: "希望在不同平台运行 C#，或为自己的应用集成 CLR 的开发团队。",
    steps: ["C# 应用", ".NET 程序集", "LeanCLR", "目标平台"],
    features: [
      {
        title: "标准驱动的运行时",
        text: "围绕 ECMA-335 兼容性建设，让已有的 C# 代码与 .NET 程序集获得更广泛的运行空间。",
      },
      {
        title: "降低集成复杂度",
        text: "为嵌入式集成提供清晰的运行时边界，帮助团队把 C# 能力带入自己的应用。",
      },
      {
        title: "面向跨平台发布",
        text: "将业务逻辑与目标平台解耦。具体平台支持、集成方式与版本状态请查阅官方文档。",
      },
    ],
    codeLabel: "运行时架构 / 概念示意",
    code: "Application\n    │\n    ▼\n.NET assemblies\n    │\n    ▼\nLeanCLR runtime\n    │\n    └── Platform abstraction → Target OS",
  },
  {
    id: "obfuz",
    name: "Obfuz",
    category: "代码保护",
    mark: "O",
    color: "#b36b35",
    headline: "为你的代码，\n多一层保护。",
    description:
      "深度集成 Unity 工作流的 C# 代码混淆工具。从日常构建到游戏发布，让代码保护成为工程流程的一部分。",
    tags: ["Unity", "C# 混淆", "HybridCLR"],
    repo: "obfuz",
    docs: "https://www.obfuz.com/",
    useCase:
      "需要在 Unity 发布流程中加入代码混淆，并兼顾热更新方案的开发团队。",
    steps: ["C# 程序集", "混淆规则", "Obfuz 处理", "发布构建"],
    features: [
      {
        title: "融入 Unity 构建流程",
        text: "将混淆处理纳入已有工程流程，保持从开发到发布的一致体验。",
      },
      {
        title: "多维度代码混淆",
        text: "结合符号、常量、控制流等混淆能力，根据项目需求配置保护策略。",
      },
      {
        title: "兼顾热更新场景",
        text: "支持与 HybridCLR 等方案配合使用，具体集成步骤与兼容边界请参阅文档。",
      },
    ],
    codeLabel: "代码混淆 / 仅展示符号变化",
    code: "// Before\npublic class PlayerRewards\n{\n    public int CalculateBonus(int level);\n}\n\n// After · 概念示意\npublic class a\n{\n    public int b(int c);\n}",
  },
  {
    id: "zlua",
    name: "zlua",
    category: "Lua 脚本",
    mark: "z",
    color: "#326eaa",
    headline: "Lua 的灵活，\nUnity 的可能。",
    description:
      "高效、稳定、优雅的现代 Unity Lua 脚本方案，针对 IL2CPP 与 .NET 优化，让 Lua 与 C# 自然协作。",
    tags: ["Lua", "Unity", "IL2CPP / .NET"],
    repo: "zlua",
    docs: "https://doc.zlua.cn/",
    useCase: "希望使用 Lua 编写 Unity 业务逻辑，并关注 C# 互操作体验的团队。",
    steps: ["Lua 脚本", "zlua 互操作", "C# / Unity API", "游戏逻辑"],
    features: [
      {
        title: "自然的跨语言协作",
        text: "连接 Lua 脚本与 C# 类型，让业务逻辑和 Unity 引擎能力协同工作。",
      },
      {
        title: "围绕运行时优化",
        text: "针对 IL2CPP 与 .NET 的运行环境设计，关注跨语言调用效率与内存分配。",
      },
      {
        title: "面向现代 Unity 工程",
        text: "通过官方文档与示例工程评估集成方式，逐步接入既有项目。",
      },
    ],
    codeLabel: "Lua / 语言与互操作概念示意",
    code: "-- 游戏逻辑保持简洁\nlocal function update_player(player, dt)\n    local position = player.position\n    position.x = position.x + dt\n    player.position = position\nend\n\n-- Unity 对象由宿主传入\nupdate_player(player, delta_time)",
  },
  {
    id: "zents",
    name: "ZenTS",
    category: "TypeScript 脚本",
    mark: "Z",
    color: "#347e82",
    headline: "用 TypeScript，\n构建游戏逻辑。",
    description:
      "针对 IL2CPP 优化的现代 Unity TypeScript 脚本方案，把熟悉的 TypeScript 开发体验带入游戏工程。",
    tags: ["TypeScript", "Unity", "IL2CPP"],
    repo: "zen-ts",
    docs: "https://zents.code-philosophy.com/",
    useCase: "希望在 Unity 中采用 TypeScript，并使用其类型系统与工具链的团队。",
    steps: ["TypeScript", "编译 JavaScript", "ZenTS 互操作", "Unity API"],
    features: [
      {
        title: "熟悉的 TypeScript 体验",
        text: "在脚本开发阶段使用类型检查与编辑器工具，为团队协作提供清晰的代码约定。",
      },
      {
        title: "连接 Unity 与脚本逻辑",
        text: "通过互操作层访问 C# 与 Unity 能力，把引擎功能带入 TypeScript 工作流。",
      },
      {
        title: "为 IL2CPP 场景设计",
        text: "围绕 Unity 发布环境优化运行时交互，接入方式与支持范围以官方文档为准。",
      },
    ],
    codeLabel: "TypeScript / 语言与互操作概念示意",
    code: "interface Player {\n  position: { x: number; y: number };\n}\n\nfunction update(player: Player, dt: number) {\n  player.position.x += dt;\n}\n\n// 类型清晰，逻辑专注。",
  },
];

export const githubUrl = (product: Product) =>
  `https://github.com/focus-creative-games/${product.repo}`;
