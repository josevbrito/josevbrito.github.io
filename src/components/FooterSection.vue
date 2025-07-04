<template>
  <footer class="footer">
    <div class="social-links">
      <a
        v-for="social in translations.footer.socialLinks"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener"
        class="social-link"
      >
        <i :class="social.icon"></i>
      </a>
    </div>
    <p style="color: var(--text-muted);">
      {{ translations.footer.copyright }}
    </p>
  </footer>
</template>

<script>
import { state } from '../translate/main'

export default {
  name: 'FooterSection',
  computed: {
    currentLanguage() {
      return state.currentLanguage
    },
    translations() {
      return state.translations[this.currentLanguage]
    }
  }
}
</script>