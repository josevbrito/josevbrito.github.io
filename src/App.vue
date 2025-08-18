<template>
  <div id="app">
    <div class="background"></div>
    
    <Navigation/>
    
    <div class="main-container">
      <router-view/>
    </div>

    <FooterSection/>
  </div>
</template>

<script>
import { computed } from 'vue'
import { state } from './translate/main'

import Navigation from './components/Navigation.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    FooterSection
  },
  setup() {

    const translations = computed(() => state.translations[state.currentLanguage])

    return {
      translations
    }
  }
}
</script>

<style>
@import url('./assets/styles/main.css');
</style>