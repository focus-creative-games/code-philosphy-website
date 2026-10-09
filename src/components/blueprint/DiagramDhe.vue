<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <!-- Differential Hybrid Execution: unchanged methods reuse native AOT,
       only the differential part is interpreted. -->
  <svg
    viewBox="0 0 320 170"
    class="w-full"
    role="img"
    :aria-label="t('home.depth.dhe.title')"
  >
    <g
      class="data"
      fill="currentColor"
      font-size="9"
      font-family="var(--font-mono)"
    >
      <!-- Input: hot-update assembly -->
      <rect x="4" y="12" width="84" height="34" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="46" y="26" text-anchor="middle" class="fill-fg">Hot-update</text>
      <text x="46" y="38" text-anchor="middle" class="fill-fg-muted">assembly</text>

      <!-- Diff analysis -->
      <rect x="118" y="12" width="74" height="34" class="fill-overlay stroke-accent" stroke-width="1" />
      <text x="155" y="33" text-anchor="middle" class="fill-accent">diff</text>

      <!-- Unchanged path -> native AOT -->
      <rect x="222" y="2" width="94" height="30" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="269" y="14" text-anchor="middle" class="fill-fg">unchanged</text>
      <text x="269" y="25" text-anchor="middle" class="fill-data-pos">native AOT</text>

      <!-- Changed path -> interpreter -->
      <rect x="222" y="44" width="94" height="30" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="269" y="56" text-anchor="middle" class="fill-fg">changed</text>
      <text x="269" y="67" text-anchor="middle" class="fill-data-warn">interpreted</text>

      <!-- Merge -> execution -->
      <rect x="118" y="118" width="130" height="34" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="183" y="132" text-anchor="middle" class="fill-fg">merged execution</text>
      <text x="183" y="144" text-anchor="middle" class="fill-fg-muted">≈ native AOT speed</text>
    </g>

    <!-- Orthogonal connectors, drawn in on reveal -->
    <g
      class="stroke-line-strong"
      stroke-width="1"
      fill="none"
      stroke-linecap="square"
    >
      <!-- assembly → diff -->
      <path class="draw-line" style="--draw-len: 30" d="M88 29h30" />
      <!-- diff → unchanged (up) and → changed (down) -->
      <path class="draw-line" style="--draw-len: 45" d="M192 29V17h30" />
      <path class="draw-line" style="--draw-len: 45" d="M192 29v30h30" />
      <!-- both branches → merged execution, routed down the right edge -->
      <path class="draw-line" style="--draw-len: 180" d="M316 17h-4v118H248" />
      <path class="draw-line" style="--draw-len: 150" d="M316 59h-4v76H248" />
    </g>

    <!-- Node markers -->
    <g class="fill-accent">
      <rect x="189.5" y="26.5" width="5" height="5" />
      <rect x="245.5" y="132.5" width="5" height="5" />
    </g>
  </svg>
</template>
