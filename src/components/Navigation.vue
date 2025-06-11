<template>
  <nav class="nav-container" :class="{ 'nav-scrolled': scrolled }">
    <div class="nav-glass">
      <!-- Menu Desktop -->
      <ul class="nav-menu desktop-menu">
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

      <!-- Menu Mobile -->
      <div class="mobile-nav">
        <!-- Botão hambúrguer -->
        <button 
          class="mobile-toggle" 
          @click="toggleMobileMenu"
          :class="{ active: mobileMenuOpen }"
          aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Menu mobile (overlay) -->
        <div class="mobile-menu-overlay" :class="{ active: mobileMenuOpen }" @click="closeMobileMenu">
          <div class="mobile-menu" @click.stop>
            <ul class="mobile-menu-list">
              <li class="mobile-nav-item">
                <a href="#home" 
                   class="mobile-nav-link" 
                   :class="{ active: activeSection === 'home' }"
                   @click.prevent="scrollAndClose('home')">
                  <i class="fas fa-home"></i>
                  <span>Início</span>
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#about" 
                   class="mobile-nav-link" 
                   :class="{ active: activeSection === 'about' }"
                   @click.prevent="scrollAndClose('about')">
                  <i class="fas fa-user"></i>
                  <span>Sobre</span>
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#experience" 
                   class="mobile-nav-link" 
                   :class="{ active: activeSection === 'experience' }"
                   @click.prevent="scrollAndClose('experience')">
                  <i class="fas fa-briefcase"></i>
                  <span>Experiência</span>
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#projects" 
                   class="mobile-nav-link" 
                   :class="{ active: activeSection === 'projects' }"
                   @click.prevent="scrollAndClose('projects')">
                  <i class="fas fa-code"></i>
                  <span>Projetos</span>
                  <span class="project-counter">{{ projectsCount }}</span>
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#education" 
                   class="mobile-nav-link" 
                   :class="{ active: activeSection === 'education' }"
                   @click.prevent="scrollAndClose('education')">
                  <i class="fas fa-graduation-cap"></i>
                  <span>Formação</span>
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#contact" 
                   class="mobile-nav-link" 
                   :class="{ active: activeSection === 'contact' }"
                   @click.prevent="scrollAndClose('contact')">
                  <i class="fas fa-envelope"></i>
                  <span>Contato</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  emits: ['scroll-to'],
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.style.overflow = '';
    },
    scrollAndClose(section) {
      this.$emit('scroll-to', section);
      this.closeMobileMenu();
    }
  },
  beforeUnmount() {
    // Cleanup para garantir que o overflow seja restaurado
    document.body.style.overflow = '';
  }
}
</script>