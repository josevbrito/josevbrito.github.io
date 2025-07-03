<template>
  <section id="about" class="about-section">
    <h2 class="section-title">Sobre Mim</h2>
    <div class="about-container">
      <!-- Lado Esquerdo - Foto e Descrição -->
      <div class="profile-side">
        <div class="photo-container">
          <div class="photo-placeholder">
            <img 
              src="/josevbrito.jpg" 
              alt="José Victor Brito Costa"
              class="profile-photo"
            />
            <div class="name-tag">
              José Victor Brito Costa
            </div>
          </div>
        </div>
        <div class="description-container">
          <p class="description-text">
            {{ aboutText.paragraph1 }}
          </p>
        </div>
      </div>

      <!-- Lado Direito - Tecnologias -->
      <div class="tech-side">
        <h3 class="tech-title">Tecnologias & Habilidades</h3>
        <div class="tech-categories">
          <div 
            v-for="(skillCategory, index) in skills" 
            :key="skillCategory.name"
            class="tech-category"
            :class="{ active: selectedCategory === index }"
            @click="selectCategory(index)"
          >
            <div class="category-header">
              <span class="category-icon" v-html="getCategoryIcon(skillCategory.name)"></span>
              <span class="category-name">{{ skillCategory.name }}</span>
              <span class="category-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
            <transition name="expand">
              <div v-if="selectedCategory === index" class="tech-list">
                <span 
                  v-for="tech in skillCategory.items" 
                  :key="tech"
                  class="tech-item"
                >
                  {{ tech }}
                </span>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    aboutText: {
      type: Object,
      required: true
    },
    skills: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedCategory: 0
    }
  },
  methods: {
    selectCategory(index) {
      this.selectedCategory = this.selectedCategory === index ? -1 : index
    },
    getCategoryIcon(categoryName) {
      const icons = {
        'Frontend': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'Backend': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        'Banco de Dados': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" stroke-width="2"/>
          <path d="M21 12C21 13.66 16.97 15 12 15S3 13.66 3 12" stroke="currentColor" stroke-width="2"/>
          <path d="M3 5V19C3 20.66 7.03 22 12 22S21 20.66 21 19V5" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        'Cloud & DevOps': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M18 10H16.74C16.24 6.67 13.38 4 10 4C6.27 4 3.22 6.64 3.22 10C1.31 10.42 0 12.06 0 14C0 16.21 1.79 18 4 18H18C20.21 18 22 16.21 22 14S20.21 10 18 10Z" fill="currentColor"/>
        </svg>`,
        'Data Science & Analytics': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" stroke-width="2"/>
          <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" stroke-width="2"/>
          <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" stroke-width="2"/>
        </svg>`,
        'Metodologias e Soft Skills': `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 11H15L13 13.5L11 13.5L9 11Z" fill="currentColor"/>
          <path d="M20 4L12 12L20 20L12 12L4 20L12 12L4 4L12 12L20 4Z" stroke="currentColor" stroke-width="1.5"/>
        </svg>`
      }
      return icons[categoryName] || `<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="2"/>
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="2"/>
      </svg>`
    }
  }
}
</script>

<style scoped>
/*
.about-section {
  padding: 80px 0;
  background: var(--bg-primary);
  min-height: 100vh;
}
*/
.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 60px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Lado Esquerdo - Perfil */
.profile-side {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.photo-container {
  position: relative;
}

.photo-placeholder {
  width: 100%;
  max-width: 350px;
  aspect-ratio: 3/4;
  background: var(--gradient-primary);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-primary);
  transition: transform 0.3s ease;
  border: 2px solid var(--border-glow);
}

.photo-placeholder:hover {
  transform: translateY(-5px);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.name-tag {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 15, 0.9);
  color: var(--text-primary);
  padding: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--border-glow);
}

.description-container {
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-glow);
  border-radius: 15px;
  padding: 30px;
}

.description-text {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
}

/* Lado Direito - Tecnologias */
.tech-side {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.tech-title {
  color: var(--text-primary);
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

.tech-categories {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.tech-category {
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-glow);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tech-category:hover {
  background: var(--bg-card);
  border-color: var(--accent-primary);
  transform: translateX(5px);
  box-shadow: var(--shadow-primary);
}

.tech-category.active {
  background: var(--bg-card);
  border-color: var(--accent-primary);
  box-shadow: var(--shadow-primary);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  color: var(--text-primary);
}

.category-icon {
  color: var(--accent-primary);
  display: flex;
  align-items: center;
}

.category-name {
  flex: 1;
  font-size: 1.1rem;
  font-weight: 500;
}

.category-arrow {
  transition: transform 0.3s ease;
  color: var(--text-muted);
}

.tech-category.active .category-arrow {
  transform: rotate(180deg);
}

.tech-list {
  padding: 0 20px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-item {
  background: rgba(0, 255, 157, 0.1);
  color: var(--text-secondary);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-glow);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: rgba(0, 255, 157, 0.2);
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 255, 157, 0.2);
}

/* Animações */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 200px;
}

/* Responsividade */
@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .photo-placeholder {
    max-width: 280px;
    margin: 0 auto;
  }
  
  .tech-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 60px 0;
  }
  
  .about-container {
    padding: 0 15px;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  .description-container,
  .category-header {
    padding: 20px;
  }
  
  .tech-list {
    padding: 0 15px 15px;
  }
}
</style>