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