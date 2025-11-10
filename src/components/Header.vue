<template>
  <header
    class="header"
  >
    <nav>
      <router-link to="/">{{ t('Home') }}</router-link>
      |
      <router-link to="/about">{{ t('About Us') }}</router-link>
      |
      <div class="dropdown dropdown-toggle">
          {{ t('Browse Collection') }}
        <div class="dropdown-menu">
          <router-link to="/wedding-invitations">
            {{ t('Wedding Invitations') }}
          </router-link>
          <router-link to="/newspaper-advertisements">
            {{ t('Newspaper Advertisements') }}
          </router-link>
        </div>
      </div>
      |
      <router-link to="/credits">{{ t('Credits') }}</router-link>
      |
      <router-link to="/contact">{{ t('Contact Us') }}</router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.header {
  background-color: var(--header-bg);
  color: var(--header-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav a {
  color: var(--header-text);
  text-decoration: none;
}

.nav a:hover {
  text-decoration: underline;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background: #eee;
  border: 1px solid #ccc;
  min-width: 218px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  flex-direction: column;
}

.dropdown:hover .dropdown-menu {
  display: flex;
}

.dropdown-menu a {
  padding: 0.5rem;
  text-decoration: none;
  color: black;
}

.dropdown-menu a:hover {
  background: #f0f0f0;
}
</style>