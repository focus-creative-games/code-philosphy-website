export default {
  seo: {
    title: 'Code Philosophy — Runtime infrastructure for game engineering',
    desc: 'Code Philosophy builds deep technology for the game industry: HybridCLR native C# hot update, LeanCLR lean cross-platform CLR, ZLua / ZenTS scripting, Luban config workflow, and Obfuz code hardening. Adopted by thousands of commercial projects.',
  },

  hero: {
    eyebrow: 'Runtime infrastructure',
    titleLine1: 'Runtime infrastructure',
    titleLine2: 'for game engineering',
    subtitle: 'So developers can focus on making games more fun',
    desc: 'We build the lowest layer the game industry runs on: C# runtimes, script virtual machines, config workflows and code hardening. Not demos — engineering that holds up in shipped commercial titles.',
    ctaPrimary: 'View product matrix',
    ctaSecondary: 'Choosing a solution',
    diagramCaption: 'Product map: host engine → runtime → scripting → tooling',
  },

  scale: {
    eyebrow: 'Scale',
    title: 'Engineering that has been proven',
    desc: 'Every figure below can be verified in the product repositories and documentation sites.',
    stars: { label: 'Total GitHub stars', note: 'Live' },
    projects: { value: '1000+', label: 'Commercial projects', note: '100+ titles shipped on iOS and Android' },
    tests: { value: '5700+', label: 'Automated test cases', note: 'HybridCLR 2700+ / Obfuz 3000+' },
    unity: { value: '2019–6000.x', label: 'Unity versions covered', note: 'Including all Tuanjie Engine releases' },
  },

  products: {
    eyebrow: 'Products',
    title: 'Seven products, four technology lines',
    desc: 'Covering C# runtimes, scripting, data tooling and code security.',
  },

  depth: {
    eyebrow: 'Technical depth',
    title: 'The difference is in the execution architecture',
    desc: 'Our products are not wrappers around existing solutions — we rebuilt the execution model. These three diagrams are where the real difference lies.',
    dhe: {
      title: 'DHE — Differential Hybrid Execution',
      product: 'HybridCLR Flagship',
      desc: 'Methods in a hot-update assembly that have not changed run as native AOT code; only the differential part is interpreted. Hot-update performance approaches native AOT instead of paying the usual interpreter multiple.',
    },
    hybrid: {
      title: 'AOT + interpreter hybrid',
      product: 'LeanCLR',
      desc: 'aot.xml and PGO data select only hot methods for AOT compilation; the rest are interpreted. On WebGL and mini-game targets this cuts native AOT code by 70%–90%.',
    },
    tiered: {
      title: 'Tiered hybrid execution',
      product: 'LuaTier',
      desc: 'A bytecode interpreter forms the baseline, hot functions can be AOT compiled offline, and an optional tracing JIT sits above. Each tier can be stripped independently to fit platform constraints.',
    },
  },

  perf: {
    eyebrow: 'Performance evidence',
    title: 'ZLua interop performance',
    desc: 'ZLua is the 1.00× baseline; lower is better. Reproducible from the zlua-benchmark repository.',
    environment: 'Unity 2022.3.62f3 · Il2Cpp Win64 Release · 2026-07-28',
    directionCs2Lua: 'C# → Lua',
    directionLua2Cs: 'Lua → C#',
    cases: '{n} cases',
    sourceLabel: 'zlua-benchmark',
  },

  customers: {
    eyebrow: 'Customers',
    title: 'Working with leading and mid-sized teams worldwide',
    desc: 'From titles with tens of millions of DAU to independent teams. A technical solution has to hold up under both scale and constraint.',
    cta: 'Customers and use cases',
  },

  closing: {
    title: 'Want to evaluate this in your project?',
    desc: 'Every product has an open-source community edition you can adopt directly. Commercial editions add trial terms, full source and technical support.',
    ctaPrimary: 'Services and support',
    ctaSecondary: 'Choosing a solution',
  },
}
