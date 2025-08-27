<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="hero-greeting animate-greeting">{{ translations[currentLanguage].hero.greeting }}</div>
      <h1 class="hero-name animate-name">José Victor Brito Costa</h1>
      <h2 class="hero-title animate-title">{{ translations[currentLanguage].hero.title }}</h2>
      <p class="hero-description animate-description">{{ translations[currentLanguage].hero.description }}</p>

      <div class="hero-cta">
        <a href="#projects" class="btn-primary animate-btn" @click="$emit('scroll-to', 'projects')">
          <i class="fas fa-rocket"></i>
          {{ translations[currentLanguage].hero.projects }}
        </a>
        <a href="#contact" class="btn-secondary animate-btn" @click="$emit('scroll-to', 'contact')">
          <i class="fas fa-envelope"></i>
          {{ translations[currentLanguage].hero.contact }}
        </a>
        <a :href="resumeFileName" class="btn-secondary animate-btn" download>
          <i class="fas fa-download"></i>
          {{ translations[currentLanguage].hero.curriculum }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { state } from '../translate/main.js';

const currentLanguage = computed(() => state.currentLanguage);
const translations = computed(() => state.translations);

const resumeFileName = computed(() => {
  const languageMap = {
    'pt': '/curriculum/jose_victor_brito_costa_pt.pdf',
    'en': '/curriculum/jose_victor_brito_costa_en.pdf',
    'es': '/curriculum/jose_victor_brito_costa_es.pdf',
    'zh': '/curriculum/jose_victor_brito_costa_zh.pdf'
  };
  return languageMap[currentLanguage.value] || '/curriculum/jose_victor_brito_costa_en.pdf';
});
</script>


<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: 100px 20px;
}

.hero-content {
  max-width: 900px;
  z-index: 2;
  will-change: transform, opacity;
}

.hero-greeting,
.hero-name,
.hero-title,
.hero-description {
  opacity: 0;
  transform: translateY(20px);
}

/* Animações de entrada */
.animate-greeting {
  animation: slideInUp 0.8s ease-out 0.2s forwards;
}

.animate-name {
  animation: slideInUp 0.8s ease-out 0.4s forwards;
}

.animate-title {
  animation: slideInUp 0.8s ease-out 0.6s forwards;
}

.animate-description {
  animation: slideInUp 0.8s ease-out 0.8s forwards;
}

.animate-btn {
  animation: slideInUp 0.8s ease-out 1s forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-greeting {
  font-size: 1.5rem;
  color: var(--accent-primary);
  margin-bottom: 10px;
  font-weight: 500;
  letter-spacing: 2px;
}

.hero-name {
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 800; /* Mais impacto */
  margin-bottom: 15px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  letter-spacing: -2px; /* Mais compacto */
}

.hero-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 25px;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 700px;
  margin: 0 auto 40px;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

/* --- RESPONSIVIDADE (REVISADA) --- */
@media (max-width: 768px) {
  .hero-section {
    padding-top: 150px;
    padding-bottom: 50px;
  }
  .hero-name {
    font-size: 2.5rem;
  }
  .hero-title {
    font-size: 1.5rem;
  }
  .hero-cta {
    flex-direction: column;
    align-items: center;
  }
  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
  }
}
@media (max-width: 480px) {
  .hero-name {
    font-size: 2rem;
  }
  .hero-title {
    font-size: 1.2rem;
  }
  .hero-greeting {
    font-size: 1.2rem;
  }
  .hero-description {
    font-size: 0.9rem;
  }
}
</style>