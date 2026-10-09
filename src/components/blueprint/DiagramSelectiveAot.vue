<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <!-- Selective AOT: aot.xml + PGO pick hot methods for AOT; the rest
       are interpreted. This is where the 70–90% size cut comes from. -->
  <svg
    viewBox="0 0 320 170"
    class="w-full"
    role="img"
    :aria-label="t('home.depth.hybrid.title')"
  >
    <g
      fill="currentColor"
      font-size="9"
      font-family="var(--font-mono)"
    >
      <!-- Managed assemblies -->
      <rect x="4" y="26" width="80" height="34" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="44" y="40" text-anchor="middle" class="fill-fg">managed</text>
      <text x="44" y="52" text-anchor="middle" class="fill-fg-muted">assemblies</text>

      <!-- Selector -->
      <rect x="112" y="18" width="86" height="50" class="fill-overlay stroke-accent" stroke-width="1" />
      <text x="155" y="34" text-anchor="middle" class="fill-accent">aot.xml</text>
      <text x="155" y="46" text-anchor="middle" class="fill-fg-muted">+ PGO</text>
      <text x="155" y="59" text-anchor="middle" class="fill-fg-muted">selector</text>

      <!-- Hot → AOT -->
      <rect x="226" y="8" width="90" height="30" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="271" y="20" text-anchor="middle" class="fill-fg">hot methods</text>
      <text x="271" y="31" text-anchor="middle" class="fill-data-pos">AOT compiled</text>

      <!-- Cold → interpreted -->
      <rect x="226" y="48" width="90" height="30" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="271" y="60" text-anchor="middle" class="fill-fg">the rest</text>
      <text x="271" y="71" text-anchor="middle" class="fill-data-warn">interpreted</text>

      <!-- Result -->
      <rect x="60" y="120" width="200" height="38" class="fill-overlay stroke-line" stroke-width="1" />
      <text x="160" y="134" text-anchor="middle" class="fill-fg">shipped build</text>
      <text x="160" y="148" text-anchor="middle" class="fill-data-pos">70–90% less native code</text>
    </g>

    <g
      class="stroke-line-strong"
      stroke-width="1"
      fill="none"
      stroke-linecap="square"
    >
      <path class="draw-line" style="--draw-len: 30" d="M84 43h28" />
      <path class="draw-line" style="--draw-len: 50" d="M198 43V23h28" />
      <path class="draw-line" style="--draw-len: 50" d="M198 43v20h28" />
      <path class="draw-line" style="--draw-len: 150" d="M271 38v16" />
      <path class="draw-line" style="--draw-len: 120" d="M271 78v24H160v18" />
    </g>

    <g class="fill-accent">
      <rect x="195.5" y="40.5" width="5" height="5" />
      <rect x="157.5" y="117.5" width="5" height="5" />
    </g>
  </svg>
</template>
