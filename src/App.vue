<template>
  <div id="app">
    <div class="particles-bg"></div>
    <nav class="nav-container" :class="{ 'nav-scrolled': scrolled }">
      <div class="nav-glass">
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#home" 
               class="nav-link" 
               :class="{ active: activeSection === 'home' }"
               @click="scrollToSection('home')">
              <i class="fas fa-home"></i>
              Início
            </a>
          </li>
          <li class="nav-item">
            <a href="#about" 
               class="nav-link" 
               :class="{ active: activeSection === 'about' }"
               @click="scrollToSection('about')">
              <i class="fas fa-user"></i>
              Sobre
            </a>
          </li>
          <li class="nav-item">
            <a href="#projects" 
               class="nav-link" 
               :class="{ active: activeSection === 'projects' }"
               @click="scrollToSection('projects')">
              <i class="fas fa-code"></i>
              Projetos
              <span class="project-counter">{{ projects.length }}</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#education" 
               class="nav-link" 
               :class="{ active: activeSection === 'education' }"
               @click="scrollToSection('education')">
              <i class="fas fa-graduation-cap"></i>
              Formação
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" 
               class="nav-link" 
               :class="{ active: activeSection === 'contact' }"
               @click="scrollToSection('contact')">
              <i class="fas fa-envelope"></i>
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="main-container">
      <HeroSection 
        :greeting="greeting"
        :name="name"
        :title="title"
        :description="description"
        @scroll-to="scrollToSection"
      />

      <AboutSection 
        :about-text="aboutText"
        :skills="skills"
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
        @submit-form="submitForm"
      />
    </div>

    <!-- Footer -->
    <FooterSection :social-links="socialLinks" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted, computed, watch } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    AboutSection,
    ProjectsSection,
    EducationSection,
    ContactSection,
    FooterSection
  },
  setup() {
    const scrolled = ref(false)
    const activeSection = ref('home')
    const submitting = ref(false)
    const formMessage = ref('')
    const formMessageType = ref('')

    const greeting = ref('Olá, eu sou')
    const name = ref('José Brito')
    const title = ref('Desenvolvedor Full Stack & Cientista de Dados')
    const description = ref('Criando experiências digitais excepcionais com foco em inovação e qualidade. Especializado em desenvolvimento web moderno e análise de dados.')

    const aboutText = reactive({
      paragraph1: 'Sou desenvolvedor de software, apaixonado por tecnologia e inovação, com sólida experiência no desenvolvimento de soluções web e mobile. Atuo na criação de sistemas para a área da saúde, aplicando boas práticas de desenvolvimento, organização de equipes e metodologias ágeis. Minha trajetória começou com análise de dados e evoluiu naturalmente para o desenvolvimento full stack.',
      paragraph2: 'Atualmente, trabalho com tecnologias como Laravel (PHP), Vue.js, Flutter e Python, além de modelagem de bancos de dados relacionais (PostgreSQL, MySQL) e NoSQL (Firebase). Possuo experiência em controle de versão com Git, deploy de aplicações em servidores Apache e práticas de desenvolvimento orientado a microsserviços. Participo ativamente de todo o ciclo de desenvolvimento, desde a análise de requisitos até a entrega e manutenção.',
      paragraph3: 'Além do desenvolvimento de software, também tenho experiência em análise de dados, criação de dashboards em Power BI e aplicação de machine learning para geração de insights. Acredito que unir desenvolvimento, dados e tecnologia é fundamental para criar soluções inteligentes, escaláveis e que realmente impactem a sociedade, especialmente na área da saúde, onde atuo atualmente.'
    })

    const skills = ref([
      {
        name: 'Frontend',
        items: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML5 & CSS3', 'Flutter']
      },
      {
        name: 'Backend',
        items: ['PHP', 'Laravel', 'Nest.js', 'Python', 'Node.js', 'RESTful APIs', 'OOP', 'Microsserviços']
      },
      {
        name: 'Banco de Dados',
        items: ['PostgreSQL', 'MySQL', 'Firebase', 'NoSQL']
      },
      {
        name: 'Cloud & DevOps',
        items: ['Git/GitHub', 'Docker', 'CI/CD', 'Linux', 'Deploy', 'Apache']
      },
      {
        name: 'Data Science & Analytics',
        items: ['Python', 'Pandas', 'R', 'Scikit-learn', 'Machine Learning', 'Power BI', 'Análise de Dados']
      },
      {
        name: 'Metodologias e Soft Skills',
        items: ['Modelagem de Dados', 'Metodologias Ágeis', 'Full-Stack', 'Backend', 'Frontend', 'Inglês (Avançado)', 'Português (Nativo)']
      }
    ])

    const projects = ref([
      {
        id: 1,
        title: 'Monitora Saúde',
        description: 'Plataforma de indicadores de saúde para apoio à tomada de decisão, gestão pública e análise epidemiológica.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        gradient: 'linear-gradient(135deg, #00ff9d 0%, #00cc7d 100%)'
      },
      {
        id: 2,
        title: 'RENAVEH',
        description: 'Sistema web para cadastro e acompanhamento de notificações hospitalares, facilitando a gestão de dados de saúde.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
        gradient: 'linear-gradient(135deg, #00cc7d 0%, #007f66 100%)'
      },
      {
        id: 3,
        title: 'CADSERV',
        description: 'Sistema para gerenciamento de informações dos servidores vinculados à SAPAPVS, com relatórios e controle administrativo.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
        gradient: 'linear-gradient(135deg, #00e6a8 0%, #00b374 100%)'
      },
      {
        id: 4,
        title: 'HANS+',
        description: 'Aplicativo mobile para auxiliar pacientes e profissionais no acompanhamento do tratamento da hanseníase, com registro de medicamentos e sintomas.',
        technologies: ['Flutter', 'Firebase', 'Dart', 'Cloud Firestore'],
        gradient: 'linear-gradient(135deg, #00ff9d 0%, #66ffcc 100%)'
      },
      {
        id: 5,
        title: 'Maranhão Livre da Fome',
        description: 'Sistema web para acompanhamento de famílias em situação de vulnerabilidade, com foco em saúde e segurança alimentar.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
        gradient: 'linear-gradient(135deg, #00cc7d 0%, #00b374 100%)'
      }
    ])

    const education = ref([
      {
        id: 1,
        degree: 'Mestrado em Ciência da Computação',
        institution: 'Universidade Federal do Maranhão (UFMA)',
        period: '2025 - 2027 (Previsão)',
        description: 'Programa de pós-graduação focado em áreas como Inteligência Artificial, Aprendizado de Máquina, Desenvolvimento de Software e Pesquisa Aplicada.'
      },
      {
        id: 2,
        degree: 'Bacharelado em Engenharia da Computação',
        institution: 'Universidade Federal do Maranhão (UFMA)',
        period: '2021 - 2026 (Previsão de Conclusão)',
        description: 'Curso que proporciona competências sólidas em Programação, Arquitetura de Computadores, Redes, Sistemas Operacionais, Banco de Dados e Automação.'
      },
      {
        id: 3,
        degree: 'Bacharelado em Ciência e Tecnologia (Interdisciplinar)',
        institution: 'Universidade Federal do Maranhão (UFMA)',
        period: '2021 - 2024 (Concluído)',
        description: 'Fundamentação robusta e multidisciplinar que integra conceitos de matemática, física, computação, estatística e fundamentos de engenharia. Esta formação estabelece uma base ampla e a capacidade de adaptação a novas tecnologias.'
      }
    ])

    const contactInfo = ref([
      {
        type: 'email',
        label: 'Email',
        value: 'josevictorbritoc@gmail.com',
        link: 'mailto:josevictorbritoc@gmail.com',
        icon: 'fas fa-envelope'
      },
      {
        type: 'phone',
        label: 'Telefone',
        value: '+55 (98) 9898500-7941',
        link: 'tel:+559898985007941',
        icon: 'fas fa-phone'
      },
      {
        type: 'linkedin',
        label: 'LinkedIn',
        value: '/in/josevbrito',
        link: 'https://linkedin.com/in/josevbrito',
        icon: 'fab fa-linkedin'
      }
    ])

    const socialLinks = ref([
      {
        name: 'GitHub',
        url: 'https://github.com/josevbrito',
        icon: 'fab fa-github'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/josevbrito',
        icon: 'fab fa-linkedin'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/josevbrito_',
        icon: 'fab fa-instagram'
      }
    ])

    const form = reactive({
      name: '',
      email: '',
      message: ''
    })

    // Computed
    const featuredProjects = computed(() => projects.value.slice(0, 3))
    const experienceYears = computed(() => {
      const startYear = 2019
      const currentYear = new Date().getFullYear()
      return currentYear - startYear
    })
    const isFormValid = computed(() => {
      return form.name.length > 2 && 
        form.email.includes('@') && 
        form.message.length > 10
    })

    // Methods
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      scrolled.value = scrollTop > 50
      updateActiveSection()
    }

    const updateActiveSection = () => {
      const sections = ['home', 'about', 'projects', 'education', 'contact']
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

    const submitForm = async () => {
      if (!form.name || !form.email || !form.message) {
        showFormMessage('Por favor, preencha todos os campos.', 'error')
        return
      }

      submitting.value = true
      
      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        console.log('Formulário enviado:', form)
        
        showFormMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success')
        resetForm()
      } catch (error) {
        showFormMessage('Erro ao enviar mensagem. Tente novamente.', 'error')
      } finally {
        submitting.value = false
      }
    }

    const showFormMessage = (message, type) => {
      formMessage.value = message
      formMessageType.value = type
      
      setTimeout(() => {
        formMessage.value = ''
        formMessageType.value = ''
      }, 5000)
    }

    const resetForm = () => {
      Object.assign(form, {
        name: '',
        email: '',
        message: ''
      })
    }

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

    // Watch
    watch(activeSection, (newSection) => {
      if (history.pushState) {
        history.pushState(null, null, `#${newSection}`)
      }
    })

    return {
      scrolled,
      activeSection,
      submitting,
      formMessage,
      formMessageType,
      greeting,
      name,
      title,
      description,
      aboutText,
      skills,
      projects,
      education,
      contactInfo,
      socialLinks,
      form,
      featuredProjects,
      experienceYears,
      isFormValid,
      scrollToSection,
      submitForm
    }
  }
}
</script>

<style>
@import url('./assets/styles/main.css');
</style>