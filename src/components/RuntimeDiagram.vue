<template>
  <div
    class="runtime-diagram"
    role="img"
    aria-label="HybridCLR 概念架构：C# 代码编译为程序集，由 AOT 与解释执行共同运行于 Unity。"
  >
    <div class="diagram-top">
      <span><i class="status-dot"></i> HYBRID RUNTIME</span
      ><span>01 / ARCHITECTURE</span>
    </div>
    <div class="source-node">
      <span class="node-icon">C#</span>
      <div>
        <strong>Your game. Your C#.</strong><small>业务逻辑 · 原生工作流</small>
      </div>
      <span class="node-file">.cs</span>
    </div>
    <div class="diagram-connector"><span>COMPILE</span></div>
    <div class="assembly-node">
      <span>IL ASSEMBLIES</span><span>▤ &nbsp; Game.dll</span>
    </div>
    <div class="diagram-split"><i></i><i></i></div>
    <div class="runtime-pair">
      <div class="engine-node">
        <span class="engine-label">01 / NATIVE</span><strong>AOT</strong
        ><small>预编译执行</small>
        <div class="mini-bars"><i></i><i></i><i></i><i></i><i></i><i></i></div>
      </div>
      <span class="engine-bridge">⇄</span>
      <div class="engine-node interpreter">
        <span class="engine-label">02 / DYNAMIC</span
        ><strong>Interpreter</strong><small>解释执行 · 动态加载</small>
        <div class="mini-blocks"><i></i><i></i><i></i><i></i></div>
      </div>
    </div>
    <div class="runtime-base">
      <span class="base-mark">H</span><strong>HybridCLR</strong
      ><span>Unity / IL2CPP</span>
    </div>
    <div class="diagram-bottom">
      <span>ONE LANGUAGE. MORE POSSIBILITIES.</span><span>● ● ●</span>
    </div>
  </div>
</template>
