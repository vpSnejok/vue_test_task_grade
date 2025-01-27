<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {locale} = useI18n();

const changeLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem("lang", lang);
};
</script>

<template>
  <header class="header">
    <div class="logo">My App</div>
    <nav class="nav">
      <button
          class="lang-btn"
          :class="{ active: locale === 'ua' }"
          @click="changeLanguage('ua')"
      >
        UA
      </button>
      <button
          class="lang-btn"
          :class="{ active: locale === 'en' }"
          @click="changeLanguage('en')"
      >
        ENG
      </button>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 10px;
}

.lang-btn {
  background: #61dafb;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.9rem;
  color: #282c34;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.lang-btn:hover {
  background-color: #21a1f1;
}

.lang-btn:focus {
  outline: none;
  box-shadow: 0 0 5px #61dafb;
}

.lang-btn.active {
  background-color: #21a1f1;
  color: white;
  font-weight: bold;
  border: 2px solid white;
}
</style>
