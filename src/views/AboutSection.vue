<template>
  <section id="about" class="about-section">
    <h2 class="section-title">{{ translations.sectionTitle }}</h2>
  <div class="about-container">

    <div class="description-side">
      <div class="description-container">
        <p class="description-text">
          {{ translations.about.paragraph }}
        </p>
      </div>
    </div>

    <div class="photo-side">
      <div class="photo-container">
        <div class="photo-placeholder">
          <img 
            src="/josevbrito.jpg" 
            alt="José Victor Brito Costa"
            class="profile-photo"
          />
          <div class="name-tag">José Victor Brito Costa</div>
        </div>
      </div>
    </div>

    <div class="tech-side">
      <!--<h3 class="tech-title">{{ translations.skillsTitle }}</h3>--> 
      <div class="tech-categories">
        <div 
          v-for="(category, index) in skillCategories" 
          :key="category.name"
          class="tech-category"
          :class="{ active: selectedCategory === index }"
          @click="selectCategory(index)"
        >
          <div class="category-header">
            <span class="category-icon" v-html="getCategoryIcon(category.name)"></span>
            <span class="category-name">{{ category.name }}</span>
            <span class="category-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
          <transition name="expand">
            <div v-if="selectedCategory === index" class="tech-list">
              <span 
                v-for="tech in category.items" 
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
import { state } from '../translate/main'

export default {
  name: 'AboutSection',
  data() {
    return {
      selectedCategory: -1
    }
  },
  computed: {
    currentLanguage() {
      return state.currentLanguage
    },
    translations() {
      return {
        sectionTitle: {
          pt: 'Sobre Mim',
          en: 'About Me',
          es: 'Sobre Mí',
          zh: '关于我'
        }[this.currentLanguage],
        skillsTitle: {
          pt: 'Tecnologias & Habilidades',
          en: 'Technologies & Skills',
          es: 'Tecnologías y Habilidades',
          zh: '技术与技能'
        }[this.currentLanguage],
        about: state.translations[this.currentLanguage].about
      }
    },
    skillCategories() {
      return Object.values(this.translations.about.skills)
    }
  },
  methods: {
    selectCategory(index) {
      this.selectedCategory = this.selectedCategory === index ? -1 : index
    },
    getCategoryIcon(name) {
      const icons = {
        'Frontend': '🌐',
        'Backend': '🖥️',
        'Banco de Dados': '🗄️',
        'Databases': '🗄️',
        'Bases de Datos': '🗄️',
        '数据库': '🗄️',

        'Cloud & DevOps': '☁️',
        'Cloud y DevOps': '☁️',
        '云计算与 DevOps': '☁️',

        'Ciência de Dados e Análise': '📊',
        'Data Science & Analytics': '📊',
        'Ciencia de Datos y Análisis': '📊',
        '数据科学与分析': '📊',

        'Metodologias e Soft Skills': '🧠',
        'Methodologies & Soft Skills': '🧠',
        'Metodologías y Habilidades Blandas': '🧠',
        '方法与软技能': '🧠'
      }
      return icons[name] || '💻'
    }
  }
}
</script>


<style scoped>

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
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: start;
}

.description-side,
.photo-side,
.tech-side {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

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

  .description-side {
    order: 2;
  }

  .photo-side {
    order: 1;
    align-items: center;
  }

  .tech-side {
    order: 3;
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