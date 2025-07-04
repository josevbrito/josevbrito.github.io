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