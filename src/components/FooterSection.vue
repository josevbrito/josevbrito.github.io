<template>
  <footer class="footer">
    <div class="social-links">
      <a 
        v-for="social in socialLinks" 
        :key="social.name" 
        :href="social.url" 
        target="_blank" 
        class="social-link"
      >
        <i :class="social.icon"></i>
      </a>
    </div>
    <p style="color: var(--text-muted);">
      &copy; 2025 José Brito. Todos os direitos reservados.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  props: {
    socialLinks: {
      type: Array,
      required: true
    }
  }
}
</script>