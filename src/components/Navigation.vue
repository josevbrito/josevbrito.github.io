<template>
    <nav class="nav-container" :class="{ 'nav-scrolled': scrolled }">
      <div class="nav-glass">
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#home" 
               class="nav-link" 
               :class="{ active: activeSection === 'home' }"
               @click.prevent="$emit('scroll-to', 'home')">
              <i class="fas fa-home"></i>
              Início
            </a>
          </li>
          <li class="nav-item">
            <a href="#about" 
               class="nav-link" 
               :class="{ active: activeSection === 'about' }"
               @click.prevent="$emit('scroll-to', 'about')">
              <i class="fas fa-user"></i>
              Sobre
            </a>
          </li>
          <li class="nav-item">
            <a href="#experience" 
               class="nav-link" 
               :class="{ active: activeSection === 'experience' }"
               @click.prevent="$emit('scroll-to', 'experience')">
              <i class="fas fa-briefcase"></i>
              Experiência
            </a>
          </li>
          <li class="nav-item">
            <a href="#projects" 
               class="nav-link" 
               :class="{ active: activeSection === 'projects' }"
               @click.prevent="$emit('scroll-to', 'projects')">
              <i class="fas fa-code"></i>
              Projetos
              <span class="project-counter">{{ projectsCount }}</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#education" 
               class="nav-link" 
               :class="{ active: activeSection === 'education' }"
               @click.prevent="$emit('scroll-to', 'education')">
              <i class="fas fa-graduation-cap"></i>
              Formação
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" 
               class="nav-link" 
               :class="{ active: activeSection === 'contact' }"
               @click.prevent="$emit('scroll-to', 'contact')">
              <i class="fas fa-envelope"></i>
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navigation',
    props: {
      scrolled: {
        type: Boolean,
        default: false
      },
      activeSection: {
        type: String,
        default: 'home'
      },
      projectsCount: {
        type: Number,
        default: 0
      }
    },
    emits: ['scroll-to']
  }
  </script>