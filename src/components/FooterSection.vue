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

<style scoped>

.footer {
    background: var(--bg-secondary);
    padding: 40px 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}

.social-link {
    width: 50px;
    height: 50px;
    background: var(--bg-glass);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
    background: var(--gradient-tertiary);
    color: var(--text-primary);
    transform: translateY(-5px);
}

</style>