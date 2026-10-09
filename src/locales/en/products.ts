export default {
  // ═══════════════════════════════════════════════════
  hybridclr: {
    badge: 'Flagship',
    tagline: 'Native C# hot update for Unity on every platform',
    short: 'Feature-complete, zero-cost, high-performance, low-memory',
    card: 'Extends il2cpp into an AOT + interpreter hybrid runtime with native support for dynamically loaded assemblies. Thousands of commercial projects; DHE brings hot-update execution to native AOT levels.',
    metric: 'Thousands of commercial projects',
    seo: {
      title: 'HybridCLR — Native C# hot update for Unity on all platforms',
      desc: 'HybridCLR extends il2cpp into an AOT + interpreter hybrid runtime with native support for dynamically loaded assemblies — a feature-complete, zero-cost, high-performance and low-memory C# hot update solution for Unity.',
    },
    hero: {
      desc: 'Extends the il2cpp runtime into AOT + interpreter hybrid execution so Unity natively supports dynamically loaded assemblies. No change to how your team works, and no second scripting language.',
    },
    stats: {
      companies: { value: 'Industry leaders', label: 'Tencent / NetEase / Papergames / Lilith / FunPlus' },
      projects: { value: '1000+', label: 'Commercial projects, 100+ titles shipped' },
      tests: { value: '2700+', label: 'Test cases passing on Unity 2019–6000, all platforms' },
      dhe: { value: 'DHE', label: 'Hot-update execution at native AOT levels' },
    },
    arch: {
      title: 'Execution architecture',
      desc: 'AOT assemblies are compiled to native code by il2cpp as usual; hot-update assemblies are loaded at runtime and interpreted. In the Flagship edition, DHE lets unchanged methods in a hot-update assembly reuse the native AOT code.',
    },
    features: {
      title: 'Why HybridCLR',
      desc: 'It is not a scripting layer — it completes il2cpp into a full CLR implementation.',
      items: {
        complete: { title: 'Feature-complete', desc: 'Generics, reflection, delegates, async, MonoBehaviour and DOTS are all supported. Hot-update code and AOT code call each other freely.' },
        zeroCost: { title: 'Zero learning cost', desc: 'You still write C# and still debug in the Unity Editor. No second language, no binding layer to maintain.' },
        performance: { title: 'High performance', desc: 'Standard interpretation already satisfies the vast majority of projects; the Flagship edition’s DHE brings hot-update performance close to native AOT.' },
        memory: { title: 'Low memory', desc: 'Metadata optimisation substantially lowers runtime memory, which matters on memory-constrained mobile devices and mini-game platforms.' },
        platform: { title: 'Every platform', desc: 'iOS, Android, Windows, macOS, WebGL, mini-games and HarmonyOS. Unity 2019–6000.x plus all Tuanjie Engine releases.' },
        proven: { title: 'Proven in production', desc: 'Thousands of commercial projects and 100+ titles shipped on both stores. 2700+ automated tests cover platform and version combinations.' },
      },
    },
    editions: {
      title: 'Editions',
      desc: 'The community edition covers more than 95% of commercial projects. Commercial editions target projects with stricter performance, security or hot-reload requirements, and all include full source and two years of support.',
      names: {
        community: 'Community',
        professional: 'Professional',
        flagship: 'Flagship',
        hotreload: 'Hot Reload',
      },
      descs: {
        community: 'Covers more than 95% of commercial projects',
        professional: 'For projects with higher code-security, memory and performance demands',
        flagship: 'Performance on par with native; the choice for demanding performance and security requirements',
        hotreload: 'Unload and reload assemblies — suited to mini-game collections',
      },
      prices: { community: 'Free', commercial: 'Contact us' },
      rows: {
        interp: 'Interpreted execution',
        monobehaviour: 'MonoBehaviour',
        metadata: 'Supplementary metadata',
        gc: 'Incremental GC',
        unityLts: 'Unity 2019–2022 LTS',
        dots: 'DOTS',
        genericSharing: 'Full generic sharing',
        metadataOpt: 'Metadata optimisation',
        basicOpt: 'Standard interpreter optimisation',
        advancedOpt: 'Offline instruction optimisation',
        encryption: 'Code hardening',
        dhe: 'DHE — Differential Hybrid Execution',
        hotReload: 'Hot reload',
        accessPolicy: 'Access control policy',
        support: 'Two years of technical support',
        sourceCode: 'Full source code',
      },
      dheNote: 'The Flagship edition builds on DHE (Differential Hybrid Execution), unique to HybridCLR, and is the choice for projects pursuing maximum performance and security.',
      viewFeatures: 'Full commercial feature list',
      viewCases: 'Shipped project case studies',
      useCommunity: 'Use the community edition',
    },
    resources: { title: 'Resources' },
  },

  // ═══════════════════════════════════════════════════
  leanclr: {
    badge: 'New',
    tagline: 'A lean cross-platform CLR built for production',
    short: 'Write C#, run anywhere',
    card: 'High ECMA-335 conformance, easy to embed, strongly cross-platform. Replaces IL2CPP as the shipping runtime for Unity WebGL and mini-games, cutting native code by 70%–90% with selective AOT.',
    metric: '70%–90% less AOT code',
    seo: {
      title: 'LeanCLR — A lean cross-platform CLR runtime for production',
      desc: 'LeanCLR is a lean CLR written in standard C++11 that replaces IL2CPP as the shipping runtime for Unity WebGL and mini-games. Selective AOT cuts native code by 70%–90% and saves 20%–35% of VM memory.',
    },
    hero: {
      desc: 'A lean CLR for shipping: replace IL2CPP, shrink wasm size and memory substantially, with selective AOT, lazy loading and hot-updatable assemblies.',
    },
    stats: {
      aot: { value: '70–90%', label: 'Less AOT code' },
      memory: { value: '20–35%', label: 'VM memory saved' },
      hybrid: { value: 'AOT+', label: 'Interpreter hybrid execution' },
      target: { value: 'WebGL', label: 'Mini-games / Tuanjie Engine' },
    },
    arch: {
      title: 'Selective AOT architecture',
      desc: 'aot.xml and PGO data decide which methods are AOT compiled; everything else is interpreted at runtime. This is where the size reduction comes from.',
    },
    advantages: {
      title: 'Advantages over IL2CPP',
      desc: 'Typical gains when shipping Unity WebGL and mini-games with selective AOT driven by aot.xml and PGO.',
      items: {
        size: { title: 'AOT code size', desc: 'With selective AOT, native code generated from managed assemblies drops by roughly 70%–90%. The build-size win is dramatic and the performance impact is manageable.' },
        memory: { title: 'Runtime memory', desc: 'VM memory falls by about 20%–35%, with a smaller reduction in managed heap usage — a better fit for memory-constrained mini-game devices.' },
        large: { title: 'Large projects', desc: 'Lazy loading and hot-updatable assemblies let you carry tens of megabytes of managed logic while still meeting first-package size limits.' },
        gc: { title: 'Garbage collection', desc: 'A precise mark-sweep GC collects more efficiently, with shorter and faster pauses.' },
      },
    },
    why: {
      title: 'Why LeanCLR',
      desc: 'For embedding C# in a host and shipping to many platforms, existing options each have limits. LeanCLR focuses on replacing the shipping backend and optimising build size.',
      coreclr: {
        title: 'CoreCLR / Mono',
        items: ['Large footprint and dependencies; costly to embed and trim', 'Not viable where build size is tightly constrained', 'Porting to a new platform is a significant project'],
      },
      il2cpp: {
        title: 'IL2CPP',
        items: ['Closed source and tightly coupled to Unity’s toolchain', 'Whole-program AOT inflates wasm size and memory', 'Limited ECMA-335 coverage and flexibility'],
      },
      leanclr: {
        title: 'LeanCLR',
        items: [
          'Standard C++11, no external dependencies, easy to embed',
          'AOT plus interpreter — compile only the hot paths',
          'High ECMA-335 conformance, aligned with Unity’s BCL',
          'Precise mark-sweep GC for faster collection',
          'Lazy loading and hot-updatable assemblies',
        ],
      },
    },
    versions: {
      title: 'Edition roadmap',
      standard: {
        title: 'Standard',
        status: 'Available now',
        desc: 'The current release (single-threaded). BCL icall coverage continues to expand, with multithreading planned.',
        items: ['Production-ready for Unity WebGL and mini-games', 'Precise full mark-sweep GC', 'LeanAOT, pgo2aot, lazy loading and hot update', 'Closely compatible with Unity’s IL2CPP BCL'],
      },
      core: {
        title: 'Core',
        status: 'Planned',
        desc: 'Trimmed down from Standard: pure C++11, single-threaded, no platform-specific code, down to roughly 300 KB.',
        items: ['For embedded targets and any C++11 platform', 'Embeddable as a lightweight scripting engine', 'Proactive precise full GC (further simplified)', 'Not yet released separately'],
      },
    },
    platforms: {
      title: 'Engines and platforms',
      rows: {
        unity: { name: 'Unity / Tuanjie WebGL and mini-games', status: 'Shipped', note: 'leanclr-unity replaces IL2CPP automatically at build time' },
        godot: { name: 'Godot (all platforms)', status: 'In development', note: 'leanclr-godot placeholder repository' },
        unreal: { name: 'Unreal Engine (all platforms)', status: 'In development', note: 'leanclr-unreal placeholder repository' },
        cocos: { name: 'Cocos Engine', status: 'In development', note: 'leanclr-cocos placeholder repository' },
      },
    },
    repos: {
      title: 'Related repositories',
      leanclr: 'Runtime and LeanAOT toolchain source',
      unity: 'Unity package com.code-philosophy.leanclr',
      doc: 'Documentation site doc.leanclr.com',
      demo: 'Standalone Win64 / H5 embedding examples',
      hybridclr: 'Unity cross-platform hot update (complementary)',
    },
    resources: { title: 'Resources' },
  },

  // ═══════════════════════════════════════════════════
  zlua: {
    badge: 'Unity Lua',
    tagline: 'A modern Unity Lua solution tuned hard for IL2CPP',
    short: 'Zero configuration, complete interop, far less GC',
    card: 'Works out of the box with no per-type wrap allowlist. C# and Lua call each other freely, with zero GC for reference types and structs by default. Measurably faster than xLua, toLua and SLua under Il2Cpp.',
    metric: '2.57× faster than xLua (Lua→C#)',
    seo: {
      title: 'ZLua — A Unity Lua solution tuned for IL2CPP',
      desc: 'ZLua is a modern Unity Lua solution: zero configuration, no wrap allowlist, and zero GC for reference types and structs by default. Measured interop performance beats xLua, toLua and SLua under Il2Cpp. Supports Lua 5.1–5.5 and LuaJIT.',
    },
    hero: {
      desc: 'Zero configuration, complete interop and far less GC. Measurably faster interop than xLua, toLua and SLua under Il2Cpp.',
    },
    stats: {
      config: { value: 'Zero config', label: 'No wrap allowlist' },
      gc: { value: '0 GC', label: 'Reference types and structs by default' },
      perf: { value: '2.57×', label: 'Ahead of xLua, Lua→C#' },
      license: { value: 'MIT', label: 'Licence' },
    },
    features: {
      title: 'Why ZLua',
      desc: 'Compared with xLua, toLua and SLua, ZLua targets usability, completeness and the Il2Cpp hot path specifically.',
      items: {
        usable: { title: 'Easier to use', desc: 'A more modern design that works out of the box. C# and Lua call each other freely by default, with no per-type wrap allowlist and no complex export configuration.' },
        complete: { title: 'More complete', desc: 'Standard, comprehensive C#↔Lua interop. From Lua you can reach almost every common feature as you would in C#: overloads, generics, delegates, structs and more.' },
        fast: { title: 'Faster', desc: 'The Il2Cpp hot path is a C++ bridge with merged signatures. For Lua→C#, xLua takes about 2.57×, toLua 3.52× and SLua 7.68× as long.' },
        gc: { title: 'Less GC', desc: 'Zero GC by default for reference types and structs — including structs containing reference fields — plus strategies such as OpaqueValue for argument passing.' },
        small: { title: 'Minimal bridge code', desc: 'Identical signatures are merged and emitted directly as C++. Even a full bridge stays an order of magnitude smaller than other solutions’ wrappers, and zero bridge functions is supported.' },
        versions: { title: 'Broader version support', desc: 'Lua 5.1–5.5 and LuaJIT 2.x; Unity 2021.3 / 2022.3 / 6000.x; all Tuanjie Engine releases.' },
      },
    },
    benchmark: {
      title: 'Benchmarks',
      desc: 'ZLua is the 1.00× baseline; lower is better.',
      environment: 'Unity 2022.3.62f3 · Il2Cpp Win64 Release · data from 2026-07-28',
    },
    platforms: {
      title: 'Platforms and versions',
      desc: 'Editor Mono during development, Player Il2Cpp when shipping.',
      items: ['Lua 5.1–5.5', 'LuaJIT 2.x', 'Unity 2021.3 / 2022.3 / 6000.x', 'Tuanjie Engine', 'All Il2Cpp platforms (incl. WebGL, mini-games, HarmonyOS)'],
    },
    resources: { title: 'Resources' },
  },

  // ═══════════════════════════════════════════════════
  zents: {
    badge: 'Unity TypeScript',
    tagline: 'A modern Unity TypeScript solution tuned hard for IL2CPP',
    short: 'QuickJS-powered, sharing ZLua’s semantic contract',
    card: 'Powered by QuickJS and designed in step with ZLua. No wrap allowlist, complete C#↔JS interop and a first-class TypeScript workflow. If you know ZLua, ZenTS will feel familiar.',
    metric: 'Semantics aligned with ZLua',
    seo: {
      title: 'ZenTS — A Unity TypeScript solution tuned for IL2CPP',
      desc: 'ZenTS is a QuickJS-powered TypeScript and JavaScript solution for Unity, with no wrap allowlist, complete C#↔JS interop and a first-class TypeScript workflow, designed in step with ZLua.',
    },
    hero: {
      desc: 'Powered by QuickJS and designed in step with ZLua. No wrap allowlist, a first-class TypeScript workflow, and only emitted JavaScript at runtime.',
    },
    stats: {
      vm: { value: 'QuickJS', label: 'Script VM' },
      config: { value: 'Zero config', label: 'Lazily bound C# types' },
      ts: { value: 'TS first', label: 'Official workflow' },
      license: { value: 'MIT', label: 'Licence' },
    },
    features: {
      title: 'Core capabilities',
      desc: 'Where Puerts or hand-written QuickJS bindings leave gaps, ZenTS brings interop, workflow and the Il2Cpp hot path into one product.',
      items: {
        usable: { title: 'Easier to use', desc: 'A design that stays close to C#, no per-type wrap allowlist, and lazy binding through CSharp[assembly][type].' },
        complete: { title: 'More complete', desc: 'Covers method overloads, ref/out, struct ByVal/ByObj, Nullable, delegates, arrays, pointers and [JsMarshalAs].' },
        unified: { title: 'More consistent', desc: 'The same semantic contract as ZLua — facade, marshalling, type system and lifetime — so Lua and TS/JS share one mental model.' },
        fast: { title: 'Faster', desc: 'The Player Il2Cpp hot path is a C++ bridge reusing stubs per signature; main paths work even with very few or zero generated bridge functions.' },
        gc: { title: 'Less GC', desc: 'Reference types and structs — including those containing reference fields — go through Registry or ByVal exotic paths by default.' },
        ts: { title: 'TypeScript as a first-class citizen', desc: 'An official TypeScript workflow: generated csharp: declarations and a type-check gate on entering Play, while the runtime still executes only emitted JavaScript.' },
      },
    },
    comparison: {
      title: 'Aligned with ZLua',
      desc: 'The API shape is deliberately consistent: if you know ZLua, ZenTS will come quickly.',
      capability: 'Capability',
      rows: {
        script: { cap: 'Script side', zlua: 'Lua (PUC-Rio / LuaJIT)', zents: 'JavaScript (QuickJS); TypeScript optional' },
        facade: { cap: 'Host facade', zlua: 'LuaAppDomain', zents: 'JsAppDomain' },
        entry: { cap: 'Type entry point', zlua: 'CSharp[...]', zents: 'Same, plus import from "csharp:…"' },
        stdlib: { cap: 'Standard library', zlua: 'zlua.*', zents: 'zents.*' },
        attrs: { cap: 'Attributes', zlua: '[LuaMarshalAs] and others', zents: '[JsMarshalAs] / [JsAlias] / [JsExtension]' },
      },
    },
    platforms: {
      title: 'Platforms and versions',
      desc: 'Editor Mono plus Player Il2Cpp; the runtime loads ES modules only.',
      items: ['Unity 2021.3 / 2022.3 / 6000.x', 'Tuanjie Engine 1.x', 'QuickJS', 'Win64 / macOS Editor', 'All Il2Cpp platforms (incl. WebGL, mini-games, HarmonyOS)'],
    },
    resources: { title: 'Resources' },
  },

  // ═══════════════════════════════════════════════════
  luatier: {
    badge: 'In development',
    tagline: 'A modern Lua runtime with tiered hybrid execution',
    short: 'Rewritten from scratch in C++17, not a LuaJIT derivative',
    card: 'Rewritten from scratch in C++17 with support for Lua 5.3+. Provides a bytecode interpreter, offline AOT compilation and an optional tracing JIT. Not derived from the historical LuaJIT.',
    metric: 'Three tiers: interpret / AOT / JIT',
    seo: {
      title: 'LuaTier — A modern Lua runtime with tiered hybrid execution',
      desc: 'LuaTier is a modern Lua runtime implemented from scratch in C++17 with support for Lua 5.3+, providing a bytecode interpreter, offline AOT compilation and an optional tracing JIT. It is not derived from the historical LuaJIT.',
    },
    hero: {
      desc: 'Rewritten from scratch in C++17 with support for Lua 5.3+. A bytecode interpreter, offline AOT compilation and an optional tracing JIT — not derived from the historical LuaJIT.',
    },
    stats: {
      lang: { value: 'Lua 5.3+', label: 'Language version' },
      impl: { value: 'C++17', label: 'Built from scratch' },
      tiers: { value: 'Three tiers', label: 'Interpret / AOT / JIT' },
      license: { value: 'MIT', label: 'Licence' },
    },
    arch: {
      title: 'Execution architecture',
      desc: 'Tiered hybrid execution: interpret by default, AOT compile hot code offline, with room for a tracing JIT. Each tier can be stripped independently.',
    },
    features: {
      title: 'Core capabilities',
      desc: 'The frontend, virtual machine, runtime and GC are all our own, with the architectural contract frozen in docs/spec.',
      items: {
        interp: { title: 'Bytecode interpreter', desc: 'The frontend handles lexing, parsing, semantic analysis and lowering to LBC; the VM executes custom bytecode and exposes a Lua-compatible C API.' },
        aot: { title: 'Offline AOT', desc: 'Hot functions can be compiled offline to cut interpretation overhead — useful for locking in performance before shipping.' },
        jit: { title: 'Tracing JIT', desc: 'Hotness tracking, inline caches and baseline / opt / deopt scaffolding are in place; the JIT itself is optional.' },
        diff: { title: 'Differential testing', desc: 'Beyond unit tests, an oracle compares behaviour against Lua 5.3.6, with GC, deopt and IC stress switches available.' },
        runtime: { title: 'Runtime and GC', desc: 'Our own TValue, string, table, closure and upvalue implementations, plus an incremental mark-sweep GC.' },
        origin: { title: 'Not a LuaJIT fork', desc: 'The code is not derived from the historical LuaJIT; it is a fresh implementation in modern C++17 against a frozen architectural contract.' },
      },
    },
    layout: {
      title: 'Repository layout',
      desc: 'The architectural contract is frozen in docs/spec and the implementation is split by module.',
      path: 'Path',
      module: 'Module',
      rows: {
        frontend: { mod: 'Frontend', note: 'lexer, parser, AST, sema, LBC lowering' },
        vm: { mod: 'Virtual machine', note: 'bytecode, interpreter, state, builtins' },
        runtime: { mod: 'Runtime', note: 'TValue, string, table, closure, upvalue' },
        gc: { mod: 'GC', note: 'incremental mark-sweep' },
        jit: { mod: 'JIT', note: 'hotness, inline caches, baseline / opt / deopt' },
        api: { mod: 'API', note: 'Lua-compatible C API' },
      },
    },
    status: {
      title: 'Current status',
      desc: 'Under active development. The CLI builds and runs locally, with differential tests and benchmarks against Lua 5.3.6.',
      items: ['CMake + CTest', 'Benchmarked vs Lua 5.3.6', 'docs/spec architectural contract', 'MIT'],
    },
    resources: { title: 'Resources' },
  },

  // ═══════════════════════════════════════════════════
  luban: {
    badge: 'Popular',
    tagline: 'A powerful, elegant and stable game config solution',
    short: 'A complete config workflow from small to very large projects',
    card: 'An enhanced Excel format, a complete type system with OOP inheritance, strong data validation, and built-in code generation for more than a dozen languages. Supports Unity, UE, Godot and other major engines.',
    metric: 'Code generation for 13+ languages',
    seo: {
      title: 'Luban — A powerful, easy-to-use game config solution',
      desc: 'Luban provides an enhanced Excel config format, a complete type system with OOP inheritance, strong data validation and built-in code generation for 13+ languages including C#, Java, Go, C++, Lua and TypeScript. Supports Unity, UE and Godot.',
    },
    hero: {
      desc: 'An enhanced Excel format, a complete type system with data validation, and built-in code generation for more than a dozen languages. A full config workflow from small projects to very large ones.',
    },
    stats: {
      stars: { label: 'GitHub stars' },
      langs: { value: '13+', label: 'Languages generated' },
      license: { value: 'MIT', label: 'Licence' },
      engines: { value: 'All engines', label: 'Unity / UE / Godot' },
    },
    features: {
      title: 'Core capabilities',
      desc: 'Luban provides everything a game config workflow needs.',
      items: {
        sources: { title: 'Rich data sources', desc: 'Supports Excel (csv/xls/xlsx), JSON, XML, YAML, Lua and more as data sources.' },
        types: { title: 'Complete type system', desc: 'OOP type inheritance lets you express complex gameplay data cleanly — behaviour trees, skills, narrative, dungeons.' },
        validation: { title: 'Strong data validation', desc: 'Ref integrity checks, Path asset checks, Range bounds checks and other validation mechanisms.' },
        codegen: { title: 'Multi-language code generation', desc: 'Built-in support for C#, Java, Go, C++, Lua, Python, TypeScript, Rust and more — 13+ languages.' },
        hotfix: { title: 'Hot-update compatible', desc: 'Works with HybridCLR, ILRuntime, xLua, puerts and other mainstream hot-update solutions.' },
        obfuscation: { title: 'Obfuscation compatible', desc: 'Generated code uses no reflection, so it works with Obfuz, Obfuscator, .NET Reactor and similar tools.' },
      },
    },
    languages: { title: 'Generated languages', desc: 'Built-in code generation for more than 13 programming languages.' },
    engines: { title: 'Engines and platforms', items: ['Unity', 'Unreal Engine', 'Cocos2d-x', 'Godot', 'WeChat mini-games', 'Other engines'] },
    formats: {
      title: 'Data formats',
      source: { title: 'Source formats', items: ['Excel (csv/xls/xlsx)', 'JSON', 'XML', 'YAML', 'Lua'] },
      export: { title: 'Export formats', items: ['Binary', 'JSON', 'BSON', 'XML', 'Lua', 'YAML'] },
      message: { title: 'Message schemes', items: ['Protobuf', 'FlatBuffers', 'MsgPack'] },
    },
    resources: { title: 'Resources' },
  },

  // ═══════════════════════════════════════════════════
  obfuz: {
    badge: 'Code security',
    tagline: 'Open-source Unity code obfuscation and hardening',
    short: 'Deeply integrated with Unity, set up in three minutes',
    card: 'Deeply integrated with the Unity workflow and effective with no configuration by default. Symbol, constant and control-flow obfuscation plus a randomised encryption VM, fully compatible with HybridCLR, xLua and other hot-update solutions.',
    metric: '3000+ test cases',
    seo: {
      title: 'Obfuz — Open-source Unity code obfuscation and hardening',
      desc: 'Obfuz is an open-source code obfuscation and hardening solution deeply integrated with the Unity workflow, with symbol, constant and control-flow obfuscation plus a randomised encryption VM. Fully compatible with HybridCLR and xLua, and set up in three minutes.',
    },
    hero: {
      desc: 'Deeply integrated with the Unity workflow and effective without writing obfuscation rules. Set up in three minutes, fully compatible with HybridCLR, xLua and other hot-update solutions.',
    },
    stats: {
      setup: { value: '3 minutes', label: 'To integrate' },
      tests: { value: '3000+', label: 'Automated test cases' },
      unity: { value: '2019+', label: 'Unity / Tuanjie Engine' },
      license: { value: 'MIT', label: 'Licence' },
    },
    features: {
      title: 'Why Obfuz',
      desc: 'Capabilities on par with commercial tools, with Unity-specific cases handled automatically — MonoBehaviour names are left alone by default.',
      items: {
        powerful: { title: 'Powerful', desc: 'Obfuscation and hardening comparable to commercial tools, including polymorphic DLLs, control-flow flattening and a randomised encryption VM.' },
        unity: { title: 'Deep Unity integration', desc: 'Handles nearly every special case except reflection automatically — such as MonoBehaviour names that must not be renamed — so it works with no rules written.' },
        quick: { title: 'Quick to integrate', desc: 'Specify which assemblies to obfuscate and you are done in three minutes.' },
        stable: { title: 'Stable and reliable', desc: 'Comprehensive automated testing with more than 3000 passing cases covering common code shapes.' },
        hotfix: { title: 'Hot-update ready', desc: 'Compatible with HybridCLR, xLua and other mainstream hot-update solutions.' },
        free: { title: 'Open source', desc: 'MIT licensed — free to use, modify and distribute.' },
      },
    },
    capabilities: {
      title: 'Capabilities',
      desc: 'From symbols to control flow to a randomised encryption VM, covering the hardening needs of commercial projects.',
      items: {
        polymorphicDll: { title: 'Polymorphic DLL', desc: 'A custom DLL format with randomised structure, different on every build, to resist cracking and tampering.' },
        symbols: { title: 'Symbol and constant obfuscation', desc: 'Extensive configuration and incremental obfuscation; obfuscates int, long, float, double, string and array constants.' },
        memory: { title: 'Memory and stack obfuscation', desc: 'Encrypts variables in memory and obfuscates variables on the execution stack, raising the cost of runtime reverse engineering.' },
        expressions: { title: 'Expressions and calls', desc: 'Obfuscates common arithmetic and scrambles call structure.' },
        controlFlow: { title: 'Control-flow flattening', desc: 'Scrambles execution flow, substantially increasing reverse-engineering cost.' },
        vm: { title: 'Randomised encryption VM', desc: 'Generates a randomised virtual machine to resist decompilers, combining static and dynamic decryption.' },
        garbage: { title: 'Junk code and watermarking', desc: 'Several junk-code generators to improve store review pass rates, plus embeddable traceable watermarks.' },
        dots: { title: 'DOTS compatible', desc: 'Works with all DOTS versions without extra configuration.' },
        polymorphic: { title: 'Polymorphic output', desc: 'Different generation keys and random seeds produce different obfuscated output.' },
      },
    },
    platforms: {
      title: 'Support',
      items: ['Unity 2019+', 'Tuanjie Engine', 'Il2Cpp / Mono', 'All platforms', 'HybridCLR / xLua'],
    },
    resources: { title: 'Resources' },
  },
}
