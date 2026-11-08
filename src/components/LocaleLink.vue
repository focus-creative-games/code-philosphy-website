<script setup lang="ts">
import { type RouteLocationRaw } from "vue-router";
import { useLocale } from "../i18n";
defineProps<{ to: RouteLocationRaw }>();
const { localizeTo } = useLocale();
</script>
<template>
  <router-link :to="localizeTo(to)"><slot /></router-link>
</template>
