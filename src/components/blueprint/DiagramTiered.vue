<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <!-- Tiered execution: interpreter baseline, offline AOT above it,
       optional tracing JIT on top. Each tier strips independently. -->
  <svg
    viewBox="0 0 320 170"
    class="w-full"
    role="img"
    :aria-label="t('home.depth.tiered.title')"
  >
    <g
      fill="currentColor"
      font-size="9"
      font-family="var(--font-mono)"
    >
      <!-- Source -->
      <rect x="8" y="68" width="66" height="32" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="41" y="82" text-anchor="middle" class="fill-fg">Lua 5.3+</text>
      <text x="41" y="94" text-anchor="middle" class="fill-fg-muted">source</text>

      <!-- Frontend → LBC -->
      <rect x="100" y="68" width="60" height="32" class="fill-overlay stroke-accent" stroke-width="1" />
      <text x="130" y="82" text-anchor="middle" class="fill-accent">frontend</text>
      <text x="130" y="94" text-anchor="middle" class="fill-fg-muted">→ LBC</text>

      <!-- Tier 3: optional tracing JIT -->
      <rect x="192" y="8" width="118" height="30" class="fill-overlay stroke-line" stroke-dasharray="3 2" stroke-width="1" />
      <text x="206" y="21" class="fill-fg-muted">T3</text>
      <text x="251" y="21" text-anchor="middle" class="fill-fg">tracing JIT</text>
      <text x="251" y="32" text-anchor="middle" class="fill-fg-muted">optional</text>

      <!-- Tier 2: offline AOT -->
      <rect x="192" y="48" width="118" height="30" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="206" y="61" class="fill-fg-muted">T2</text>
      <text x="251" y="61" text-anchor="middle" class="fill-fg">offline AOT</text>
      <text x="251" y="72" text-anchor="middle" class="fill-fg-muted">hot functions</text>

      <!-- Tier 1: interpreter baseline -->
      <rect x="192" y="88" width="118" height="30" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="206" y="101" class="fill-fg-muted">T1</text>
      <text x="251" y="101" text-anchor="middle" class="fill-fg">interpreter</text>
      <text x="251" y="112" text-anchor="middle" class="fill-data-pos">baseline</text>

      <!-- Runtime floor -->
      <rect x="100" y="134" width="210" height="28" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="205" y="152" text-anchor="middle" class="fill-fg-muted">
        runtime · incremental mark-sweep GC
      </text>
    </g>

    <g
      class="stroke-line-strong"
      stroke-width="1"
      fill="none"
      stroke-linecap="square"
    >
      <path class="draw-line" style="--draw-len: 26" d="M74 84h26" />
      <path class="draw-line" style="--draw-len: 90" d="M160 84h16V23h16" />
      <path class="draw-line" style="--draw-len: 50" d="M160 84h16V63h16" />
      <path class="draw-line" style="--draw-len: 40" d="M160 84h16v19h16" />
      <path class="draw-line" style="--draw-len: 60" d="M130 100v34h-30" />
    </g>

    <g class="fill-accent">
      <rect x="173.5" y="81.5" width="5" height="5" />
      <rect x="127.5" y="131.5" width="5" height="5" />
    </g>
  </svg>
</template>
