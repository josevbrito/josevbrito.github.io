import { createRouter, createWebHistory } from 'vue-router'

import HeroSection from '../views/HeroSection.vue'
import AboutSection from '../views/AboutSection.vue'
import ExperienceSection from '../views/ExperienceSection.vue'
import ProjectsSection from '../views/ProjectsSection.vue'
import EducationSection from '../views/EducationSection.vue'
import ContactSection from '../views/ContactSection.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HeroSection
  },
  {
    path: '/about',
    name: 'About',
    component: AboutSection
  },
  {
    path: '/experience',
    name: 'Experience',
    component: ExperienceSection
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsSection
  },
  {
    path: '/education',
    name: 'Education',
    component: EducationSection
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactSection
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router