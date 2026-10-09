/**
 * Line icon geometry on a 24×24 grid, 1.5px stroke, no fill.
 * Named by concept, not by appearance, so copy data can reference
 * `icon: 'runtime'` and stay meaningful.
 */
export const ICON_PATHS = {
  // ─── Runtimes & execution ───
  runtime: 'M4 7h16M4 12h16M4 17h10M17 15l3 2-3 2',
  interpreter: 'M8 5 4 12l4 7M16 5l4 7-4 7M13 7l-2 10',
  aot: 'M12 3v8m0 0 3-3m-3 3L9 8M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5',
  jit: 'M13 2 5 13h5l-1 9 8-11h-5l1-9Z',
  tiered: 'M4 18h16M6 13h12M8 8h8M10 3h4',
  hybrid: 'M4 6h6a4 4 0 0 1 4 4v4a4 4 0 0 0 4 4h2M4 18h6a4 4 0 0 0 4-4v-4a4 4 0 0 1 4-4h2',
  gc: 'M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M7 7l1 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-12M10 11v6M14 11v6',
  memory: 'M6 8h12v8H6zM9 4v4M15 4v4M9 16v4M15 16v4M3 11h3M3 14h3M18 11h3M18 14h3',
  hotReload: 'M20 11a8 8 0 0 0-13.6-4.6L4 9m0-5v5h5M4 13a8 8 0 0 0 13.6 4.6L20 15m0 5v-5h-5',

  // ─── Language & types ───
  csharp: 'M16 8H9a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h7M19 10v4M17 11h4M17 13h4',
  types: 'M4 5h16M12 5v14M8 19h8',
  codegen: 'M9 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-5-5H9ZM14 3v5h5M8 13h8M8 17h5',
  schema: 'M4 4h7v6H4zM13 4h7v6h-7zM4 14h7v6H4zM13 14h7v6h-7z',
  validation: 'M12 3 4 6v6c0 4.5 3.3 8.3 8 9 4.7-.7 8-4.5 8-9V6l-8-3ZM9 12l2 2 4-4',
  script: 'M7 3h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM9 8h6M9 12h6M9 16h3',
  module: 'M12 3 4 7v10l8 4 8-4V7l-8-4ZM4 7l8 4 8-4M12 11v10',

  // ─── Security ───
  obfuscation: 'M5 4h5v5H5zM14 4h5v5h-5zM5 15h5v5H5zM14 15h5v5h-5zM10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4',
  shield: 'M12 3 4 6v6c0 4.5 3.3 8.3 8 9 4.7-.7 8-4.5 8-9V6l-8-3Z',
  encryption: 'M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1ZM8 11V7a4 4 0 0 1 8 0v4M12 15v3',
  controlFlow: 'M12 3v4M12 3 9 6M12 3l3 3M6 9h12v4H6zM12 13v4m-6 0h5v4H6zM13 17h5v4h-5z',
  watermark: 'M4 4h16v16H4zM8 8l8 8M16 8l-8 8',

  // ─── Platform & delivery ───
  platform: 'M7 4h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1ZM11 17h2',
  web: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c2.5 2.3 4 5.6 4 9s-1.5 6.7-4 9c-2.5-2.3-4-5.6-4-9s1.5-6.7 4-9Z',
  engine: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v3M12 19v3M4.2 6.2l2.1 2.1M17.7 15.7l2.1 2.1M2 12h3M19 12h3M4.2 17.8l2.1-2.1M17.7 8.3l2.1-2.1',
  package: 'M12 3 4 7v10l8 4 8-4V7l-8-4ZM4 7l8 4 8-4M12 11v10M8 5l8 4',
  size: 'M4 20V4h16M8 20v-6M12 20v-9M16 20v-4M4 20h16',

  // ─── Process & evidence ───
  benchmark: 'M4 19h16M7 19v-7M12 19V7M17 19v-4',
  test: 'M9 3h6M10 3v6l-4 8a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-8V3M7 14h10',
  docs: 'M5 4h9l5 5v11H5zM14 4v5h5M8 13h8M8 17h5',
  usability: 'M9 11V6a2 2 0 0 1 4 0v5m0 0V9a2 2 0 0 1 4 0v2m0 0a2 2 0 0 1 3 2v3a5 5 0 0 1-5 5h-3a5 5 0 0 1-5-5v-5a2 2 0 0 1 3-2v2',
  speed: 'M12 20a8 8 0 1 1 8-8M12 12l5-4M4 12h2M18 12h2',
  check: 'M4 12l5 5L20 6',
  cross: 'M6 6l12 12M18 6 6 18',
  arrowRight: 'M4 12h15m0 0-5-5m5 5-5 5',
  external: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  copy: 'M9 9h10v12H9zM5 15V3h10v2',
  terminal: 'M3 5h18v14H3zM7 10l2 2-2 2M12 14h5',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  layers: 'M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 17l9 5 9-5',
  users: 'M16 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM21 20v-2a4 4 0 0 0-3-3.9M16.5 3.1a4 4 0 0 1 0 7.8',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 7v5l4 2',
  support: 'M12 3a9 9 0 0 0-9 9v4a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3M21 16h-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-5a9 9 0 0 0-9-9',
  open: 'M8 11V7a4 4 0 0 1 7.9-.9M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z',
  chevronDown: 'M6 9l6 6 6-6',
  chevronUp: 'M6 15l6-6 6 6',
  minus: 'M5 12h14',
  plus: 'M12 5v14M5 12h14',
  star: 'M12 3l2.9 5.9 6.1.9-4.5 4.3 1.1 6.1L12 17.3 6.4 20.2l1.1-6.1L3 9.8l6.1-.9L12 3Z',
} as const

export type IconName = keyof typeof ICON_PATHS
