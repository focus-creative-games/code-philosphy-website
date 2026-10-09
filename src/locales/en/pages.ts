export default {
  // ═══════════════════════════════════════════════════
  solutions: {
    seo: {
      title: 'Choosing a solution — Code Philosophy',
      desc: 'Pick a solution by scenario: HybridCLR or LeanCLR for C# runtimes, ZLua or ZenTS for scripting, and how config workflow and code hardening fit together.',
    },
    hero: {
      eyebrow: 'Solution guide',
      title: 'Choose by scenario',
      desc: 'Seven products across four technology lines. They complement each other rather than compete. Below are the decision paths based on the problem you are actually solving.',
    },

    decisions: {
      title: 'Two key decisions',
      desc: 'For most projects the choice comes down to these two forks.',
      runtime: {
        title: 'C# runtime: HybridCLR or LeanCLR?',
        desc: 'They solve different problems. Neither replaces the other, and both can be used across different projects at the same company.',
        hybridclr: {
          title: 'Choose HybridCLR',
          when: 'when you need hot update',
          items: [
            'Your main goal is updating game logic after release',
            'You target iOS and need to work around native code update restrictions',
            'Your project already uses il2cpp and you do not want to change shipping backend',
            'You need the full C# feature set: reflection, generics, async, DOTS',
            'You want maximum hot-update performance → Flagship with DHE',
          ],
        },
        leanclr: {
          title: 'Choose LeanCLR',
          when: 'when build size and memory are the problem',
          items: [
            'Your main goal is shrinking WebGL or mini-game builds',
            'You are bound by hard first-package size or memory limits',
            'You are willing to swap IL2CPP for a different shipping backend',
            'You need C# embedded in a non-Unity host (UE, Godot, in-house)',
            'You need to lazily load tens of megabytes of managed logic',
          ],
        },
        both: 'Need both? HybridCLR provides hot-update capability while LeanCLR serves as the shipping runtime. They can be combined in one project — contact us to discuss specifics.',
      },
      scripting: {
        title: 'Scripting: ZLua or ZenTS?',
        desc: 'Both share one semantic contract — facade, marshalling, type system and lifetime — so the choice mostly comes down to what your team already knows.',
        zlua: {
          title: 'Choose ZLua',
          when: 'when your team has Lua experience',
          items: ['You have an existing Lua codebase or are migrating from xLua / toLua / SLua', 'Your designers or scripters know Lua', 'You need LuaJIT', 'You need broad coverage across Lua 5.1–5.5'],
        },
        zents: {
          title: 'Choose ZenTS',
          when: 'when your team prefers TypeScript',
          items: ['Your team has a strong frontend background in TS/JS', 'You want static type checking and IDE completion', 'You want to reuse parts of the npm ecosystem', 'You are migrating from Puerts'],
        },
        luatier: {
          title: 'Watch LuaTier',
          when: 'when you are evaluating what comes next',
          items: ['You have very high demands on Lua runtime performance itself', 'You need offline AOT or a tracing JIT', 'You can work with the pace of a project under development', 'For now, start with ZLua and follow LuaTier'],
        },
      },
    },

    scenarios: {
      title: 'Combinations by scenario',
      desc: 'Most commercial projects use two to four of our products together. These are the common combinations.',
      items: {
        mobile: {
          title: 'Long-running mobile title',
          stack: 'HybridCLR + Luban + Obfuz',
          desc: 'Hot update keeps post-launch fixes and iteration fast, Luban carries complex config for skills, dungeons and narrative, and Obfuz hardens the build before release. All three are compatible: Luban generates reflection-free code, so it can be safely obfuscated.',
        },
        mini: {
          title: 'Mini-games and WebGL',
          stack: 'LeanCLR + Luban',
          desc: 'First-package size is a hard constraint, and selective AOT cutting native code by 70%–90% is the most direct lever. Combined with lazy loading, you can carry tens of megabytes of managed logic within the limit.',
        },
        script: {
          title: 'Heavily script-driven gameplay',
          stack: 'ZLua or ZenTS + Luban',
          desc: 'Move frequently changing gameplay logic into the scripting layer so designers can iterate independently. Zero-configuration interop in ZLua and ZenTS removes the binding-layer maintenance cost of traditional solutions.',
        },
        security: {
          title: 'Projects facing active cracking',
          stack: 'HybridCLR Flagship + Obfuz',
          desc: 'The Flagship edition’s code hardening and DHE combined with Obfuz’s polymorphic DLLs, control-flow flattening and randomised encryption VM raise reverse-engineering cost substantially without a meaningful performance loss.',
        },
        embed: {
          title: 'Embedding C# in a non-Unity host',
          stack: 'LeanCLR',
          desc: 'Standard C++11 with no external dependencies, embeddable as a lightweight scripting engine in an in-house engine or toolchain. The Core edition trims down to roughly 300 KB.',
        },
        config: {
          title: 'Config workflow only',
          stack: 'Luban',
          desc: 'Usable entirely on its own, compatible with HybridCLR, ILRuntime, xLua, puerts and other hot-update solutions, and with Unity, UE, Godot and Cocos.',
        },
      },
    },

    compat: {
      title: 'Compatibility',
      desc: 'How our products work with each other and with mainstream third-party solutions.',
      note: 'Luban-generated code uses no reflection, so it can be processed safely by any obfuscator. Obfuz leaves MonoBehaviour names unobfuscated by default, keeping Unity serialisation intact.',
    },

    cta: {
      title: 'Not sure which to choose?',
      desc: 'Send us your engine version, target platforms, size constraints and main requirement, and we will give you a concrete recommendation.',
    },
  },

  // ═══════════════════════════════════════════════════
  about: {
    seo: {
      title: 'About Code Philosophy — Deep technology for the game industry',
      desc: 'Code Philosophy builds B2B technology for the game industry: C# runtimes, script virtual machines, config workflows and code hardening, working with leading and mid-sized game companies worldwide.',
    },
    hero: {
      eyebrow: 'Company',
      title: 'We build infrastructure',
      desc: 'Code Philosophy focuses on B2B technology for the game industry. We work at the runtime, virtual machine, compiler toolchain and hardening layer — the layer game projects depend on but few teams have the capacity to build themselves.',
    },

    stance: {
      title: 'How we engineer',
      items: {
        depth: {
          title: 'Depth over breadth',
          desc: 'Seven products concentrated on four technology lines, reusing the same underlying capabilities. We do not build products unrelated to that core — we would rather make our CLR and script VMs good enough to stand against closed commercial alternatives.',
        },
        rewrite: {
          title: 'Rewrite from scratch when necessary',
          desc: 'LeanCLR is a from-scratch implementation in standard C++11, and LuaTier is not derived from the historical LuaJIT. When an existing architecture is what caps performance, wrapping another layer around it does not help.',
        },
        open: {
          title: 'Open source by default',
          desc: 'Every core product has an MIT community edition you can read, modify and use commercially. The community edition covers the overwhelming majority of projects; commercial editions exist for stricter performance, security and customisation needs.',
        },
        evidence: {
          title: 'Reproducible data over claims',
          desc: 'Our benchmarks publish the test environment, the data date and the repository. A performance claim should be reproducible by a third party, not just a percentage.',
        },
        production: {
          title: 'Shipping is the acceptance criterion',
          desc: 'Automated tests cover combinations of platform and engine version — 2700+ cases for HybridCLR, 3000+ for Obfuz. The real acceptance test is thousands of adopting commercial projects and 100+ shipped titles.',
        },
        longTerm: {
          title: 'Long-term support commitment',
          desc: 'Commercial editions support Unity 2019–2022 LTS for the long term. Game projects have long lifecycles and engine versions rarely move, so a technical solution has to keep up with that reality.',
        },
      },
    },

    capability: {
      title: 'Technical capabilities',
      desc: 'The foundations behind all seven products.',
      items: {
        runtime: { title: 'CLR and runtimes', desc: 'ECMA-335 implementation, metadata handling, generic instantiation and sharing, precise GC, AOT and interpreter hybrid execution' },
        compiler: { title: 'Compilers and code generation', desc: 'Lexing, parsing and semantic analysis, IR design and lowering, offline AOT compilation, tracing JIT, multi-language code generation' },
        vm: { title: 'Script virtual machines', desc: 'Lua and JavaScript VMs, bytecode design, incremental GC, cross-language interop and marshalling' },
        il2cpp: { title: 'il2cpp and deep Unity integration', desc: 'il2cpp runtime extension, hooking into the Unity build pipeline, BCL alignment, DOTS compatibility, Tuanjie Engine support' },
        security: { title: 'Code protection', desc: 'Symbol and constant obfuscation, control-flow flattening, polymorphic DLL formats, randomised encryption VMs, static and dynamic decryption' },
        platform: { title: 'Cross-platform engineering', desc: 'iOS, Android, WebGL, mini-games, HarmonyOS and desktop, plus Unity, UE, Godot and Cocos engine support' },
      },
    },

    timeline: {
      title: 'How the product line grew',
      items: {
        hybridclr: { title: 'HybridCLR', desc: 'Completed il2cpp into an AOT + interpreter hybrid runtime, solving cross-platform C# hot update for Unity. DHE followed later.' },
        luban: { title: 'Luban', desc: 'Started from the config workflow, addressing data organisation, type systems and multi-language code generation for mid-to-large projects.' },
        obfuz: { title: 'Obfuz', desc: 'Filled in the code security layer, working alongside hot-update solutions.' },
        scripting: { title: 'ZLua / ZenTS', desc: 'Rebuilt Unity scripting interop, tuned for the IL2CPP hot path, replacing traditional binding approaches with zero configuration.' },
        leanclr: { title: 'LeanCLR', desc: 'A lean CLR built from scratch for size- and memory-constrained shipping targets, also embeddable in non-Unity hosts.' },
        luatier: { title: 'LuaTier', desc: 'Rebuilding the Lua runtime itself with tiered hybrid execution. In development.' },
      },
    },

    cta: {
      title: 'Technical partnership',
      desc: 'For commercial editions, custom development or technical support, please contact us from a company email address.',
    },
  },

  // ═══════════════════════════════════════════════════
  customers: {
    seo: {
      title: 'Customers and use cases — Code Philosophy',
      desc: 'Code Philosophy works with Tencent, NetEase, ByteDance, Papergames, Lilith, FunPlus, Bilibili, Perfect World, Zilong and many other leading and mid-sized game companies worldwide.',
    },
    hero: {
      eyebrow: 'Customers',
      title: 'Who uses this',
      desc: 'From titles with tens of millions of DAU to independent teams. A technical solution has to hold up under both scale and constraint — feedback from both shaped these products.',
    },
    stats: {
      projects: { value: '1000+', label: 'Commercial projects' },
      shipped: { value: '100+', label: 'Titles shipped on both stores' },
      stars: { label: 'Total GitHub stars' },
    },
    groups: {
      top: { title: 'Leading publishers and studios', desc: 'Titles at tens of millions of DAU, with the strictest performance, security and long-term support requirements' },
      studio: { title: 'Studios and development teams', desc: 'Mid-to-large teams making their own technical choices, focused on engineering efficiency and control' },
      platform: { title: 'Platforms and global publishing', desc: 'Multi-region releases facing store review, build size and compliance constraints' },
    },
    wall: { title: 'Customers', note: 'Arranged by category. Some customers are not shown publicly under commercial agreements.' },
    cases: {
      title: 'Use cases',
      desc: 'Scenarios we can discuss publicly. For more, see the shipped project list on the HybridCLR documentation site.',
      viewMore: 'HybridCLR shipped project case studies',
    },
    cta: {
      title: 'Become a customer',
      desc: 'Every product has an open-source community edition you can evaluate first. Contact us when you need a commercial edition or support.',
    },
  },

  // ═══════════════════════════════════════════════════
  services: {
    seo: {
      title: 'Commercial services and support — Code Philosophy',
      // `@` is vue-i18n's linked-message operator, so a literal address must be
      // escaped as {'@'} or the whole message fails to parse at runtime.
      desc: "Code Philosophy offers commercial licences, hourly technical support, custom development and porting, plus performance and build-size consulting. Contact business{'@'}code-philosophy.com from a company email address.",
    },
    hero: {
      eyebrow: 'Services',
      title: 'Commercial editions and support',
      desc: 'All core products ship with an MIT community edition you can use commercially. When a project needs more on performance, security, hot reload or platform support, we provide commercial editions, technical support and custom development.',
      cta: 'Contact sales',
    },

    matrix: {
      title: 'What we offer',
      items: {
        license: {
          title: 'Commercial licences',
          desc: 'HybridCLR is available in Professional, Flagship and Hot Reload editions, all including full source and two years of support. Contact us about LeanCLR commercial licensing.',
          points: ['Full source code', 'Two years of technical support', 'Long-term support for Unity 2019–2022 LTS', 'Trial fees credited in full against purchase'],
        },
        support: {
          title: 'Hourly technical support',
          desc: 'The products are straightforward to use and stable in production, so most teams do not need ongoing retained support. We bill by the hour instead.',
          points: ['Standard: usage questions and guidance', 'Expert: bug fixes and remote assistance', 'Billed on actual time spent', 'No long-term contract required'],
        },
        custom: {
          title: 'Custom development and porting',
          desc: 'Custom work for specific platforms, specific engine versions or project-specific requirements, as well as porting to new platforms.',
          points: ['Platform-specific compatibility work', 'Engine versions not currently supported', 'Project-specific feature development', 'Integration with non-Unity hosts'],
        },
        consulting: {
          title: 'Performance and build-size consulting',
          desc: 'Optimisation plans and implementation guidance for performance bottlenecks, memory usage and build size in projects that have already adopted our products.',
          points: ['Hot-update performance tuning', 'AOT strategy and PGO tuning', 'Memory usage analysis', 'Build size reduction'],
        },
      },
    },

    support: {
      title: 'Hourly technical support',
      desc: 'The rates below apply to HybridCLR. Contact us about other products.',
      standard: {
        title: 'Standard support',
        price: 'CNY 100 / hour',
        items: ['Technical answers on basic usage questions', 'Excludes bug fixes and unimplemented features'],
      },
      expert: {
        title: 'Expert support',
        price: 'CNY 1,500 / hour',
        items: ['Standard bug response and resolution (2–7 day fix)', 'One-to-one remote assistance', 'Platform-specific compatibility fixes', 'Support for versions not currently covered', 'Optimisation guidance and other services'],
      },
    },

    trial: {
      title: 'Commercial trial terms',
      desc: 'All HybridCLR commercial editions support the two trial options below.',
      free: {
        title: 'Without source code',
        tag: 'Free',
        items: [
          'iOS only, Unity 2021 / 2022 only',
          'Technical support billed at CNY 400 per hour if needed',
          'Builds iOS targets from a prebuilt libil2cpp.a; no C++ source provided',
          'No time limit, but the runtime crashes at random after about 30 minutes of uptime or three months of use',
        ],
        link: 'Full free trial terms',
      },
      paid: {
        title: 'With commercial source code',
        tag: '10% of the licence price',
        items: [
          'No platform or version restrictions',
          'The same level of technical support as paying customers',
          'Trial source and tooling provided for one month',
          'Trial fee credited in full against a full licence purchase',
        ],
      },
      note: 'Both options are arranged by email with our sales team.',
    },

    process: {
      title: 'How we work together',
      steps: {
        evaluate: { title: 'Evaluate', desc: 'Start with the open-source community edition in your actual project. It covers more than 95% of commercial projects.' },
        contact: { title: 'Enquire', desc: 'Email us from a company address with your engine version, target platforms, main requirement and timeline.' },
        trial: { title: 'Trial', desc: 'Obtain a commercial edition under the trial terms. Paid trial fees are credited in full when you buy a full licence.' },
        deploy: { title: 'Adopt', desc: 'Receive the full licence and complete source, with responses and fixes throughout the two-year support period.' },
      },
    },

    contact: {
      title: 'Contact',
      desc: 'Please enquire from your company email address. Emails from personal accounts such as QQ or 126 will not be answered.',
      business: { label: 'Sales enquiries', note: 'Commercial editions, custom development, technical support' },
      product: { label: 'Product and technical questions', note: 'Reach each product directly by email or community channel' },
      emailRequirement: 'Company email required',
    },
  },

  // ═══════════════════════════════════════════════════
  notFound: {
    seo: { title: 'Page not found — Code Philosophy' },
    code: '404',
    title: 'Page not found',
    desc: 'There is no page at this address. The link may have changed, or the address may contain a typo.',
    home: 'Back to home',
    products: 'View products',
  },
}
