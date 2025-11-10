<template>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <div class="title"><h2>{{ t('Welcome to') }} {{ t('The Porinoy Collection') }}</h2></div>
      <div>
        <button
        @click="setLang('en')"
        :style="{
          fontWeight: language === 'en' ? 'bold' : 'normal',
          textDecoration: language === 'en' ? 'underline' : 'none',
          marginRight: '0.5rem'
        }"
      >
        EN
      </button>

      <button
        @click="setLang('bn')"
        :style="{
          fontWeight: language === 'bn' ? 'bold' : 'normal',
          textDecoration: language === 'bn' ? 'underline' : 'none',
          marginRight: '0.5rem'
        }"
      >
        BN
      </button>
      <button @click="toggleTheme">
          {{ settings.theme === 'light' ? '🌙' : '☀️' }}
        </button>
      </div>
    </div>
    <Header />
    <section class="main-section">
    <div class="main-content">
    <div class="content1">
      <div></div>
      <div></div>
    </div>
    <div class="content2">

    </div>
  </div>
  </section>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import { computed } from 'vue'
// import { useStore } from '../stores/store.ts'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '../stores/settings'

const { locale } = useI18n()
const settings = useSettingsStore()

const language = computed({
  get: () => settings.language,
  set: (val: 'en' | 'bn') => settings.setLanguage(val)
})

// const store = useStore()
const { t } = useI18n()

function setLang(lang: 'en' | 'bn') {
  language.value = lang
  locale.value = lang
}

function toggleTheme() {
  settings.toggleTheme()
}
</script>

<style scoped>
.title {
  margin-left: 5rem;
}
.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(3px);
  border-radius: 12px;
  margin: 2rem;
  /* width: 1000px; */
  height: 1000px;
  max-width: 900px;
}

.content1, .content2 {
  width: 45%;
  height: 300px;
  background: var(--header-bg);
  color: var(--header-text);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 1.2rem;
}

.main-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


</style>