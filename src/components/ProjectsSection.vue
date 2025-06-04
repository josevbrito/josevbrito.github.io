<template>
  <section id="projects" class="section">
    <h2 class="section-title">Projetos</h2>
    <div class="projects-grid">
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="project-card"
      >
        <div 
          class="project-image" 
          :style="{ background: project.gradient }"
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
        Ver mais no GitHub
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>