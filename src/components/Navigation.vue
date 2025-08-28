<template>
  <nav class="nav-container" :class="{ 'nav-scrolled': scrolled }">
    <div class="nav-glass">
      <!-- Menu Desktop -->
      <ul class="nav-menu desktop-menu">
        <li class="nav-item" v-for="link in navigationLinks" :key="link.id">
          <a
            :href="link.href"
            class="nav-link"
            :class="{ active: activeSection === link.id }"
            @click.prevent="scrollToSection(link.id)"
          >
            <i :class="link.icon"></i>
            {{ link.text }}
            <span v-if="link.id === 'projects'" class="project-counter">{{ projectsCount }}</span>
          </a>
        </li>
        <li class="nav-item language-dropdown" @click.stop="toggleLanguageDropdown">
          <button class="language-toggle">
            <img :src="flagSrc" :alt="flagAltText" class="flag-icon">
          </button>
          <transition name="fade-slide-down">
            <div v-if="languageMenuOpen" class="language-options">
              <button 
                v-for="(lang, key) in translations"   
                :key="key"
                @click="changeLanguage(key)"
                :class="{ 'active-lang': key === currentLanguage }"
              >
                <img :src="getFlagSrc(key)" :alt="`Flag for ${key}`">
                <span>{{ lang.navigation.language_name }}</span>
              </button>
            </div>
          </transition>
        </li>
      </ul>

      <div class="mobile-nav">
        <!-- Mobile language selector (opposite side) -->
        <button @click="toggleLanguage" class="mobile-language-toggle">
          <img :src="flagSrc" :alt="flagAltText" class="flag-icon-mobile">
        </button>

        <button 
          class="mobile-toggle" 
          @click="toggleMobileMenu"
          :class="{ active: mobileMenuOpen }"
          aria-label="Abrir menu de navegação">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <!-- Mobile menu overlay -->
        <div class="mobile-menu-overlay" :class="{ active: mobileMenuOpen }" @click="closeMobileMenu">
          <div class="mobile-menu" @click.stop>
            <ul class="mobile-menu-list">
              <li class="mobile-nav-item" v-for="link in navigationLinks" :key="link.id">
                <a
                  :href="link.href"
                  class="mobile-nav-link"
                  :class="{ active: activeSection === link.id }"
                  @click.prevent="scrollAndClose(link.id)"
                >
                  <i :class="link.icon"></i>
                  <span>{{ link.text }}</span>
                  <span v-if="link.id === 'projects'" class="project-counter">{{ projectsCount }}</span>
                </a>
              </li>
              <li class="mobile-nav-item language-item">
                <button 
                  v-for="(lang, key) in translations"
                  :key="key"
                  @click="changeLanguageAndCloseMenu(key)"
                  :class="{ 'active-lang': key === currentLanguage }"
                  class="mobile-lang-btn"
                >
                  <img :src="getFlagSrc(key)" :alt="`Flag for ${key}`" class="flag-icon-mobile">
                  <span>{{ lang.navigation.language_name }}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { state, toggleLanguage, changeLanguage as globalChangeLanguage } from '../translate/main.js';

const props = defineProps({
  scrolled: Boolean,
  activeSection: String,
  projectsCount: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['scroll-to']);

const mobileMenuOpen = ref(false);
const languageMenuOpen = ref(false);

const currentLanguage = computed(() => state.currentLanguage);
const translations = computed(() => state.translations);

const navigationLinks = computed(() => [
  { id: 'home', href: '#home', icon: 'fas fa-home', text: translations.value[currentLanguage.value].navigation.home_nav },
  { id: 'about', href: '#about', icon: 'fas fa-user', text: translations.value[currentLanguage.value].navigation.about_nav },
  { id: 'experience', href: '#experience', icon: 'fas fa-briefcase', text: translations.value[currentLanguage.value].navigation.experience_nav },
  { id: 'projects', href: '#projects', icon: 'fas fa-code', text: translations.value[currentLanguage.value].navigation.projects_nav },
  { id: 'education', href: '#education', icon: 'fas fa-graduation-cap', text: translations.value[currentLanguage.value].navigation.education_nav },
  { id: 'contact', href: '#contact', icon: 'fas fa-envelope', text: translations.value[currentLanguage.value].navigation.contact_nav }
]);

const flagSrc = computed(() => getFlagSrc(currentLanguage.value));
const flagAltText = computed(() => `Mudar para ${translations.value[currentLanguage.value].navigation.language_name}`);

const getFlagSrc = (lang) => {
  const flags = {
    'en': '/flags/uk.png',
    'pt': '/flags/brazil.jpg',
    'es': '/flags/spain.png',
    'zh': '/flags/china.png'
  };
  return flags[lang] || '/flags/uk.png';
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : '';
  languageMenuOpen.value = false;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

const scrollAndClose = (section) => {
  emit('scroll-to', section);
  closeMobileMenu();
};

const scrollToSection = (section) => {
  emit('scroll-to', section);
};

const toggleLanguageDropdown = () => {
  languageMenuOpen.value = !languageMenuOpen.value;
};

const changeLanguage = (lang) => {
  globalChangeLanguage(lang);
  languageMenuOpen.value = false;
};

const changeLanguageAndCloseMenu = (lang) => {
  globalChangeLanguage(lang);
  closeMobileMenu();
};

const closeDropdownOnClickOutside = (event) => {
  if (!event.target.closest('.language-dropdown')) {
    languageMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeDropdownOnClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdownOnClickOutside);
});
</script>

<style scoped>
/* --- ESTILOS GLOBAIS DA NAVEGAÇÃO --- */
.nav-container {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: auto;
  transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-glass {
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 12px 30px;
  box-shadow: var(--shadow-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estado de rolagem */
.nav-scrolled {
  top: 10px;
}

/* --- MENU DESKTOP --- */
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
  position: relative;
  overflow: hidden;
}

.nav-link:hover {
  color: var(--text-primary);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 80%;
}

.nav-link.active {
  color: var(--text-primary);
  background: var(--gradient-primary);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
  /* animation: glow 1.5s infinite alternate; /* Animação de brilho */
}

@keyframes glow {
  from {
    box-shadow: 0 0 5px var(--accent-primary), 0 0 10px var(--accent-primary);
  }
  to {
    box-shadow: 0 0 15px var(--accent-primary), 0 0 20px var(--accent-primary), 0 0 25px var(--accent-primary);
  } 
}

.project-counter {
  background: var(--accent-primary);
  color: var(--bg-primary);
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: bold;
}

/* --- SELETOR DE IDIOMA DESKTOP --- */
.language-dropdown {
  position: relative;
  margin-left: 15px;
}

.language-toggle {
  background: transparent;
  border: 1px solid var(--border-glow);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-toggle:hover {
  transform: scale(1.1);
  border-color: var(--accent-primary);
}

.flag-icon {
  width: 20px;
  height: 20px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.language-options {
  position: absolute;
  top: 55px;
  right: -70px;
  background: var(--bg-card);
  backdrop-filter: blur(15px);
  border: 1px solid var(--border-glow);
  border-radius: 15px;
  box-shadow: var(--shadow-primary);
  padding: 10px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1001;
}

.language-options button {
  background: none;
  border: none;
  color: var(--text-secondary);
  padding: 8px 12px;
  border-radius: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-options button:hover {
  background: var(--bg-glass);
  color: var(--text-primary);
}

.language-options button.active-lang {
  background: var(--accent-primary);
  color: var(--bg-primary);
  font-weight: 600;
}

.language-options img {
  width: 24px;
  height: 18px;
  border-radius: 3px;
}

/* --- MENU MOBILE --- */
.mobile-nav {
  display: none;
}

/* Botão de idioma móvel */
.mobile-language-toggle {
  display: none;
}

.mobile-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  width: 32px;
  height: 32px;
  z-index: 1002;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.mobile-toggle span {
  display: block;
  width: 24px;
  height: 3px;
  background: var(--text-primary);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}
.mobile-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
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
  background: var(--bg-card);
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
  background: var(--gradient-primary);
  box-shadow: 0 2px 10px rgba(0, 212, 255, 0.3);
}

.mobile-nav-link i {
  width: 20px;
  text-align: center;
}

.mobile-nav-link .project-counter {
  margin-left: auto;
}

.language-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.mobile-lang-btn {
  background: none;
  border: 1px solid var(--border-glow);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  color: var(--text-secondary);
}

.mobile-lang-btn:hover {
  background: var(--bg-glass);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.mobile-lang-btn.active-lang {
  background: var(--accent-primary);
  color: var(--bg-primary);
  font-weight: 600;
  border-color: var(--accent-primary);
}

.flag-icon-mobile {
  width: 24px;
  height: 18px;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* --- RESPONSIVIDADE --- */

@media (max-width: 1210px) {
  .language-options {
    right: -32px;
  }
}

@media (max-width: 1135px) {
  .desktop-menu {
    display: none;
  }
  .mobile-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  .mobile-language-toggle {
    display: flex;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    transition: transform 0.3s ease;
  }
  .mobile-language-toggle:hover {
    transform: scale(1.1);
  }
  .flag-icon-mobile {
    width: 24px;
    height: 18px;
    object-fit: cover;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  .nav-container {
    top: 15px;
    left: 20px;
    right: 20px;
    transform: none;
    width: auto;
  }
  .nav-glass {
    padding: 8px 12px;
    border-radius: 15px;
  }
  .nav-scrolled {
    top: 5px;
  }
}

/* --- ACESSIBILIDADE --- */
.fade-slide-down-enter-active, .fade-slide-down-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-down-enter-from, .fade-slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .nav-container,
  .nav-link,
  .mobile-toggle span,
  .mobile-menu-overlay,
  .mobile-menu,
  .mobile-nav-link,
  .language-toggle,
  .language-options {
    transition: none !important;
    animation: none !important;
  }
}
</style>