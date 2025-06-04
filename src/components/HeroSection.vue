<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="hero-greeting">{{ greeting }}</div>
      <h1 class="hero-name">{{ name }}</h1>
      <h2 class="hero-title">{{ title }}</h2>
      <p class="hero-description">{{ description }}</p>
      <div class="hero-cta">
        <a href="#projects" class="btn-primary" @click="$emit('scroll-to', 'projects')">
          <i class="fas fa-rocket"></i>
          Ver Projetos
        </a>
        <a href="#contact" class="btn-secondary" @click="$emit('scroll-to', 'contact')">
          <i class="fas fa-envelope"></i>
          Entre em Contato
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    greeting: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  emits: ['scroll-to']
}
</script>