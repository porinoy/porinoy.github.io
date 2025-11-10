import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    language: 'en' as 'en' | 'bn',
    theme: 'light' as 'light' | 'dark'
  }),
  actions: {
    setLanguage(lang: 'en' | 'bn') {
      this.language = lang
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
})
