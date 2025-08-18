<template>
  <section id="projects" class="section">
    <h2 class="section-title">{{ sectionTitle }}</h2>
    <div class="projects-grid">
      <div 
        v-for="project in projectsList" 
        :key="project.id" 
        class="project-card"
      >
        <div 
          class="project-image" 
          :style="{ background: project.gradient || 'linear-gradient(to right, #00ffc3, #00cfff)' }"
        ></div>
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="tech-stack">
            <span 
              v-for="tech in project.technologies" 
              :key="tech" 
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">
      <a href="https://github.com/josevbrito" target="_blank" class="btn-primary">
        <i class="fab fa-github"></i>
        {{ viewMoreGithub }}
      </a>
    </div>
  </section>
</template>

<script>
import { state } from '../translate/main.js';

export default {
  name: 'ProjectsSection',
  computed: {
    currentLanguage() {
      return state.currentLanguage;
    },
    translations() {
      return state.translations[this.currentLanguage];
    },
    sectionTitle() {
      return this.translations.projects.projects_section || 'Projects';
    },
    viewMoreGithub() {
      return this.translations.projects.viewMoreGithub || 'View more on GitHub';
    },
    projectsList() {
      return this.translations.projects.projectsList || [];
    }
  }
}
</script>

<style scoped>

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.project-card {
    background: var(--bg-card);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    backdrop-filter: blur(10px);
}

.project-card:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: var(--border-glow);
    box-shadow: var(--shadow-primary);
}

.project-image {
    height: 200px;
    background: var(--gradient-secondary);
    position: relative;
    overflow: hidden;
}

.project-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.project-content {
    padding: 25px;
}

.project-title {
    font-size: 1.5rem;
    color: var(--text-primary);
    margin-bottom: 15px;
}

.project-description {
    color: var(--text-secondary);
    margin-bottom: 20px;
    line-height: 1.6;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.tech-tag {
    background: var(--bg-glass);
    color: var(--accent-primary);
    padding: 5px 12px;
    border-radius: 15px;
    font-size: 0.9rem;
    border: 1px solid rgba(0, 212, 255, 0.3);
}

</style>