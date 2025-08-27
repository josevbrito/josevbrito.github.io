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
            {{ translations[currentLanguage].navigation.home_nav }}
          </a>
        </li>
        <li class="nav-item">
          <a href="#about" 
            class="nav-link" 
            :class="{ active: activeSection === 'about' }"
            @click.prevent="$emit('scroll-to', 'about')">
            <i class="fas fa-user"></i>
            {{ translations[currentLanguage].navigation.about_nav }}
          </a>
        </li>
        <li class="nav-item">
          <a href="#experience" 
            class="nav-link" 
            :class="{ active: activeSection === 'experience' }"
            @click.prevent="$emit('scroll-to', 'experience')">
            <i class="fas fa-briefcase"></i>
            {{ translations[currentLanguage].navigation.experience_nav }}
          </a>
        </li>
        <li class="nav-item">
          <a href="#projects" 
            class="nav-link" 
            :class="{ active: activeSection === 'projects' }"
            @click.prevent="$emit('scroll-to', 'projects')">
            <i class="fas fa-code"></i>
            {{ translations[currentLanguage].navigation.projects_nav }}
            <span class="project-counter">{{ projectsCount }}</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#education" 
            class="nav-link" 
            :class="{ active: activeSection === 'education' }"
            @click.prevent="$emit('scroll-to', 'education')">
            <i class="fas fa-graduation-cap"></i>
            {{ translations[currentLanguage].navigation.education_nav }}
          </a>
        </li>
        <li class="nav-item">
          <a href="#contact" 
            class="nav-link" 
            :class="{ active: activeSection === 'contact' }"
            @click.prevent="$emit('scroll-to', 'contact')">
            <i class="fas fa-envelope"></i>
            {{ translations[currentLanguage].navigation.contact_nav }}
          </a>
        </li>
        <li class="nav-item language-switcher">
          <button @click="toggleLanguage" class="language-toggle">
            <img :src="flagSrc" :alt="flagAltText" class="flag-icon">
          </button>
        </li>
      </ul>

      <!-- Mobile menu -->
      <div class="mobile-nav">
        <!-- Mobile language selector (opposite side) -->
        <button @click="toggleLanguage" class="mobile-language-toggle">
          <img :src="flagSrc" :alt="flagAltText" class="flag-icon-mobile">
        </button>

        <!-- Hamburger Button -->
        <button 
          class="mobile-toggle" 
          @click="toggleMobileMenu"
          :class="{ active: mobileMenuOpen }"
          aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Mobile menu overlay -->
      <div class="mobile-menu-overlay" :class="{ active: mobileMenuOpen }" @click="closeMobileMenu">
        <div class="mobile-menu" @click.stop>
          <ul class="mobile-menu-list">
              <li class="mobile-nav-item">
                <a href="#home" 
                  class="mobile-nav-link" 
                  :class="{ active: activeSection === 'home' }"
                  @click.prevent="scrollAndClose('home')">
                  <i class="fas fa-home"></i>
                  <span>{{ translations[currentLanguage].navigation.home_nav }}</span>
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#about" 
                  class="mobile-nav-link" 
                  :class="{ active: activeSection === 'about' }"
                  @click.prevent="scrollAndClose('about')">
                  <i class="fas fa-user"></i>
                  <span>{{ translations[currentLanguage].navigation.about_nav }}</span>
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#experience" 
                  class="mobile-nav-link" 
                  :class="{ active: activeSection === 'experience' }"
                  @click.prevent="scrollAndClose('experience')">
                  <i class="fas fa-briefcase"></i>
                  <span>{{ translations[currentLanguage].navigation.experience_nav }}</span>
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#projects" 
                  class="mobile-nav-link" 
                  :class="{ active: activeSection === 'projects' }"
                  @click.prevent="scrollAndClose('projects')">
                  <i class="fas fa-code"></i>
                  <span>{{ translations[currentLanguage].navigation.projects_nav }}</span>
                  <span class="project-counter">{{ projectsCount }}</span>
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#education" 
                  class="mobile-nav-link" 
                  :class="{ active: activeSection === 'education' }"
                  @click.prevent="scrollAndClose('education')">
                  <i class="fas fa-graduation-cap"></i>
                  <span>{{ translations[currentLanguage].navigation.education_nav }}</span>
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#contact" 
                  class="mobile-nav-link" 
                  :class="{ active: activeSection === 'contact' }"
                  @click.prevent="scrollAndClose('contact')">
                  <i class="fas fa-envelope"></i>
                  <span>{{ translations[currentLanguage].navigation.contact_nav }}</span>
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
import { state, toggleLanguage as globalToggleLanguage } from '../translate/main.js';

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
  computed: {
    currentLanguage() {
      return state.currentLanguage;
    },
    translations() {
      return state.translations;
    },
    flagSrc() {
      switch (this.currentLanguage) {
        case 'en': return '/flags/uk.png'; 
        case 'pt': return '/flags/brazil.jpg';  
        case 'es': return '/flags/spain.png'; 
        case 'zh': return '/flags/china.png';
        default: return '/flags/uk.png';
      }
    },

    flagAltText() {
      switch (this.currentLanguage) {
        case 'en': return 'Mudar para Português';
        case 'pt': return 'Cambiar a Español';
        case 'es': return '切换到中文';
        case 'zh': return 'Switch to English';
        default: return 'Language Flag';
      }
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
    },
    toggleLanguage() {
      globalToggleLanguage();
    },
    toggleLanguageAndCloseMenu() {
      this.toggleLanguage();
      this.closeMobileMenu();
    }
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  }
}
</script>

<style scoped>


.nav-container {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}


/* Estilos base */
.nav-container {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-glass {
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    padding: 12px 30px;
    box-shadow: var(--shadow-primary);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 30px;
    align-items: center;
}

.nav-item {
    position: relative;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    padding: 8px 20px;
    border-radius: 25px;
    transition: all 0.3s ease;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav-link:hover, .nav-link.active {
    color: var(--text-primary);
    background: var(--gradient-tertiary);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
}

.project-counter {
    background: var(--accent-primary);
    color: var(--bg-primary);
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 10px;
    font-weight: bold;
}

/* Mobile Navigation */
.mobile-nav {
    display: none;
}

.mobile-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    position: relative;
    width: 24px;
    height: 24px;
    z-index: 1002;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.mobile-toggle span {
    display: block;
    width: 16px;
    height: 2px;
    background: var(--text-primary);
    margin: 1.5px 0;
    transition: all 0.3s ease;
    border-radius: 2px;
}

.mobile-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(3px, 3px);
}

.mobile-toggle.active span:nth-child(2) {
    opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(4px, -4px);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1001;
}

.mobile-menu-overlay.active {
    opacity: 1;
    visibility: visible;
}

.mobile-menu {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 30px;
    min-width: 280px;
    max-width: 90vw;
    box-shadow: var(--shadow-primary);
    transition: all 0.3s ease;
}

.mobile-menu-overlay.active .mobile-menu {
    transform: translate(-50%, -50%) scale(1);
}


.mobile-menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.mobile-nav-item {
    margin-bottom: 8px;
}

.mobile-nav-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    color: var(--text-secondary);
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.3s ease;
    font-weight: 500;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
    color: var(--text-primary);
    background: var(--gradient-tertiary);
    box-shadow: 0 2px 10px rgba(0, 212, 255, 0.3);
}

.mobile-nav-link i {
    width: 20px;
    text-align: center;
}

.mobile-nav-link .project-counter {
    margin-left: auto;
}

/* Media Queries - Responsividade */


@media (max-width: 1024px) {
    .nav-menu {
        gap: 20px;
    }
    
    .nav-link {
        padding: 6px 16px;
        font-size: 14px;
    }
    
    .nav-glass {
        padding: 10px 25px;
    }
}

@media (max-width: 920px) {
    .nav-container {
        top: 15px;
        left: 20px;
        right: 20px;
        transform: none;
        width: calc(100% - 40px);
    }
    
    .nav-glass {
        border-radius: 20px;
        padding: 12px 20px;
        display: flex;
        justify-content: flex-end;
    }
    
    .nav-menu {
        gap: 15px;
    }
    
    .nav-link {
        padding: 6px 12px;
        font-size: 13px;
    }
    
    .nav-link span {
        display: none;
    }
    
    .project-counter {
        font-size: 10px;
        padding: 1px 6px;
    }
}

@media (max-width: 900px) {
    .desktop-menu {
        display: none;
    }
    
    .mobile-nav {
        display: block;
    }
    
    .nav-container {
        top: 10px;
        left: 10px;
        right: 10px;
        width: calc(100% - 20px);
    }
    
    .nav-glass {
        padding: 8px 12px;
        border-radius: 15px;
        display: flex;
        justify-content: flex-end;
        width: auto;
        min-width: auto;
    }
}

/* Smartphones pequenos */
@media (max-width: 480px) {
    .nav-container {
        top: 5px;
        left: 5px;
        right: 5px;
        width: calc(100% - 10px);
    }
    
    .nav-glass {
        padding: 6px 10px;
        display: flex;
        justify-content: flex-end;
        width: auto;
        min-width: auto;
    }
    
    .mobile-menu {
        padding: 20px;
        min-width: 260px;
        border-radius: 15px;
    }
    
    .mobile-nav-link {
        padding: 10px 12px;
        font-size: 14px;
    }
}

/* Ajustes para orientação landscape em celulares */
@media (max-height: 600px) and (orientation: landscape) {
    .mobile-menu {
        max-height: 90vh;
        overflow-y: auto;
        padding: 15px;
    }
    
    .mobile-menu-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
    }
    
    .mobile-nav-item {
        margin-bottom: 0;
    }
}

/* Estados especiais */
.nav-scrolled {
    top: 10px;
}

@media (max-width: 640px) {
    .nav-scrolled {
        top: 5px;
    }
}

/* Melhorias de acessibilidade */
@media (prefers-reduced-motion: reduce) {
    .nav-container,
    .nav-link,
    .mobile-toggle span,
    .mobile-menu-overlay,
    .mobile-menu,
    .mobile-nav-link {
        transition: none;
    }
}


@media (max-width: 768px) {
    .nav-menu {
        gap: 15px;
        flex-wrap: wrap;
    }
}

.language-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
}

.language-toggle {
  background: var(--nav-bg);
  border: 1px solid var(--border-glow, #ccc);
  border-radius: 8px;
  color: var(--text-primary, #333);
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 500;
}

.language-toggle:hover {
  background: rgba(0, 255, 157, 0.1);
  border-color: var(--accent-primary, #007bff);
  transform: translateY(-2px);
}

.flag-icon {
  width: 20px;
  height: 15px;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.mobile-language-toggle {
  position: absolute;
  top: 6px;
  left: 15px;
  background: var(--nav-bg);
  border: 1px solid var(--border-glow, #ccc);
  border-radius: 6px;
  color: var(--text-primary, #333);
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  z-index: 1001;
}


.mobile-language-toggle:hover {
  background: rgba(0, 255, 157, 0.1);
  border-color: var(--accent-primary, #007bff);
}

.flag-icon-mobile {
  width: 16px;
  height: 12px;
  object-fit: cover;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

</style>