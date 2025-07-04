<template>
  <div id="app">
    <div class="background"></div>
    
    <Navigation 
      :scrolled="scrolled"
      :active-section="activeSection"
      :projects-count="translations.projects.projectsList.length"
      @scroll-to="scrollToSection"
    />

    <div class="main-container">
      <HeroSection 
        @scroll-to="scrollToSection"
      />

      <AboutSection/>

      <ExperienceSection/>

      <ProjectsSection/>

      <EducationSection/>

      <ContactSection 
        :form="form"
        :submitting="submitting"
        :form-message="formMessage"
        :form-message-type="formMessageType"
        @submit-form="handleFormSubmit"
      />
    </div>

    <FooterSection :social-links="translations.footer.socialLinks" />
  </div>
</template>

<script>
import { onMounted, onUnmounted, computed } from 'vue'
import { state } from './translate/main'

// Composables
import { useScrollNavigation } from './composables/useScrollNavigation'
import { useContactForm } from './composables/useContactForm'

// Components
import Navigation from './components/Navigation.vue'
import HeroSection from './views/HeroSection.vue'
import AboutSection from './views/AboutSection.vue'
import ExperienceSection from './views/ExperienceSection.vue'
import ProjectsSection from './views/ProjectsSection.vue'
import EducationSection from './views/EducationSection.vue'
import ContactSection from './views/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    HeroSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    EducationSection,
    ContactSection,
    FooterSection
  },
  setup() {
    // Scroll and Navigation
    const { 
      scrolled, 
      activeSection, 
      scrollToSection, 
      handleScroll, 
      updateActiveSection 
    } = useScrollNavigation()

    // Contact Form
    const {
      form,
      submitting,
      formMessage,
      formMessageType,
      handleFormSubmit
    } = useContactForm()

    const translations = computed(() => state.translations[state.currentLanguage])

    // Lifecycle
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      updateActiveSection()
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
          }
        })
      }, { threshold: 0.1 })

      setTimeout(() => {
        document.querySelectorAll('.project-card, .skill-category, .timeline-item').forEach(el => {
          observer.observe(el)
        })
      }, 100)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      // Navigation
      scrolled,
      activeSection,
      scrollToSection,
      form,
      submitting,
      formMessage,
      formMessageType,
      handleFormSubmit,
      translations
    }
  }
}
</script>

<style>
@import url('./assets/styles/main.css');
</style>