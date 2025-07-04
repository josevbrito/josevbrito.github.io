<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="hero-greeting">{{ translations[currentLanguage].hero.greeting }}</div>
      <h1 class="hero-name">José Victor Brito Costa</h1>
      <h2 class="hero-title">{{ translations[currentLanguage].hero.title }}</h2>
      <p class="hero-description">{{ translations[currentLanguage].hero.description }}</p>

      <div class="hero-cta">
        <a href="#projects" class="btn-primary" @click="$emit('scroll-to', 'projects')">
          <i class="fas fa-rocket"></i>
          {{ translations[currentLanguage].hero.projects }}
        </a>
        <a href="#contact" class="btn-secondary" @click="$emit('scroll-to', 'contact')">
          <i class="fas fa-envelope"></i>
          {{ translations[currentLanguage].hero.contact }}
        </a>
        <a :href="resumeFileName" class="btn-secondary" download>
          <i class="fas fa-download"></i>
          {{ translations[currentLanguage].hero.curriculum }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
// Importa o estado reativo do translation.js
import { state } from '../translate/main.js';

export default {
  name: 'HeroSection',
  emits: ['scroll-to'],
  computed: {
    currentLanguage() {
      return state.currentLanguage;
    },
    translations() {
      return state.translations;
    },
    resumeFileName() {
      const languageMap = {
        'pt': '/curriculum/jose_victor_brito_costa_pt.pdf',
        'en': '/curriculum/jose_victor_brito_costa_en.pdf',
        'es': '/curriculum/jose_victor_brito_costa_es.pdf',
        'zh': '/curriculum/jose_victor_brito_costa_zh.pdf'
      };
      return languageMap[this.currentLanguage] || '/curriculum/jose_victor_brito_costa_en.pdf';
    }
  }
}
</script>


<style scoped>

.hero-greeting {
  font-size: 1.5rem;
  color: var(--accent-primary);
  margin-bottom: 10px;
  font-weight: 500;
}

.hero-name {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 15px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.hero-title {
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 25px;
}

.hero-description {
  font-size: 1.2rem;
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

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-secondary);
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--bg-primary);
  border: none;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
  opacity: 0.9;
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--accent-primary);
  border: 1px solid var(--border-glow);
}

.btn-secondary:hover {
  background: var(--accent-primary);
  color: var(--bg-primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-name {
    font-size: 3rem;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 80%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 20px;
  }

  .hero-name {
    font-size: 2.5rem;
  }

  .hero-title {
    font-size: 1.5rem;
  }
}
</style>
