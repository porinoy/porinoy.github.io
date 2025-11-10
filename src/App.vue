<template>
  <div :class="theme">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useSettingsStore } from './stores/settings'
import { computed, watch } from 'vue'

import bgTexture from './assets/bg.webp'

const settings = useSettingsStore()
const theme = computed(() => settings.theme)

watch(
  () => settings.theme,
  (val) => {
    document.documentElement.setAttribute('data-theme', val)
  },
  { immediate: true }
)

document.documentElement.style.setProperty('--overlay-pattern', `url(${bgTexture})`)
</script>

<style>
[data-theme='light'] {
  --bg-color: #f9f4e7;
  --text-color: #222;
  --header-bg: rgba(128, 0, 0, 0.85);
  --header-text: #fff;
}

[data-theme='dark'] {
  --bg-color: #1a1a1a;
  --text-color: #f0f0f0;
  --header-bg: rgba(40, 40, 40, 0.9);
  --header-text: #f9f4e7;
  --overlay-pattern: none;
}

body,
[data-theme] {
  background-color: var(--bg-color);
  background-image: var(--overlay-pattern);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-blend-mode: multiply;
  color: var(--text-color);
  transition: background-color 0.4s ease, color 0.4s ease;
  font-family: 'Noto Serif Bengali', 'Georgia', serif;
}
</style>

