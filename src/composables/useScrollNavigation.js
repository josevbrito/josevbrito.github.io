import { ref, watch } from 'vue'

export function useScrollNavigation() {
  const scrolled = ref(false)
  const activeSection = ref('home')

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    scrolled.value = scrollTop > 50
    updateActiveSection()
  }

  const updateActiveSection = () => {
    const sections = ['home', 'about', 'experience', 'projects', 'education', 'contact']
    const scrollPosition = window.scrollY + 100

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i])
      if (section && scrollPosition >= section.offsetTop) {
        activeSection.value = sections[i]
        break
      }
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }
  
  watch(activeSection, (newSection) => {
    if (history.pushState) {
      history.pushState(null, null, `#${newSection}`)
    }
  })

  return {
    scrolled,
    activeSection,
    handleScroll,
    updateActiveSection,
    scrollToSection
  }
}