<template>
  <div id="app">
    <div class="background"></div>
    
    <Navigation 
      :scrolled="scrolled"
      :active-section="activeSection"
      :projects-count="projects.length"
      @scroll-to="scrollToSection"
    />

    <div class="main-container">
      <HeroSection 
        :greeting="personalInfo.greeting"
        :name="personalInfo.name"
        :title="personalInfo.title"
        :description="personalInfo.description"
        @scroll-to="scrollToSection"
      />

      <AboutSection 
        :about-text="aboutText"
        :skills="skills"
      />

      <ExperienceSection
        :experience="experience"
        :years="experienceYears"
      />

      <ProjectsSection
        :projects="projects"
      />

      <EducationSection
        :education="education"
      />

      <ContactSection 
        :contact-info="contactInfo"
        :form="form"
        :submitting="submitting"
        :form-message="formMessage"
        :form-message-type="formMessageType"
        @submit-form="handleFormSubmit"
      />
    </div>

    <FooterSection :social-links="socialLinks" />
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

// Composables
import { useScrollNavigation } from './composables/useScrollNavigation'
import { useContactForm } from './composables/useContactForm'

// Data
import { usePersonalData } from './data/personalData'
import { useSkillsData } from './data/skillsData'
import { useExperienceData } from './data/experienceData'
import { useProjectsData } from './data/projectsData'
import { useEducationData } from './data/educationData'
import { useContactData } from './data/contactData'

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

    // Data
    const { personalInfo, aboutText } = usePersonalData()
    const { skills } = useSkillsData()
    const { experience, experienceYears } = useExperienceData()
    const { projects } = useProjectsData()
    const { education } = useEducationData()
    const { contactInfo, socialLinks } = useContactData()

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
      
      // Form
      form,
      submitting,
      formMessage,
      formMessageType,
      handleFormSubmit,
      
      // Data
      personalInfo,
      aboutText,
      skills,
      experience,
      experienceYears,
      projects,
      education,
      contactInfo,
      socialLinks
    }
  }
}
</script>

<style>
@import url('./assets/styles/main.css');
</style>