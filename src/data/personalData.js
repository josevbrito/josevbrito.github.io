import { ref, reactive } from 'vue'

export function usePersonalData() {
  const personalInfo = reactive({
    greeting: 'Olá, eu sou',
    name: 'José Brito',
    title: 'Desenvolvedor Full Stack & Cientista de Dados',
    description: 'Criando experiências digitais excepcionais com foco em inovação e qualidade. Especializado em desenvolvimento web moderno e análise de dados.'
  })

  const aboutText = reactive({
    paragraph1: 'Sou desenvolvedor de software, apaixonado por tecnologia e inovação, com sólida experiência no desenvolvimento de soluções web e mobile. Atuo na criação de sistemas para a área da saúde, aplicando boas práticas de desenvolvimento, organização de equipes e metodologias ágeis. Minha trajetória começou com análise de dados e evoluiu naturalmente para o desenvolvimento full stack.',
    paragraph2: 'Atualmente, trabalho com tecnologias como Laravel (PHP), Vue.js, Flutter e Python, além de modelagem de bancos de dados relacionais (PostgreSQL, MySQL) e NoSQL (Firebase). Possuo experiência em controle de versão com Git, deploy de aplicações em servidores Apache e práticas de desenvolvimento orientado a microsserviços. Participo ativamente de todo o ciclo de desenvolvimento, desde a análise de requisitos até a entrega e manutenção.',
    paragraph3: 'Além do desenvolvimento de software, também tenho experiência em análise de dados, criação de dashboards em Power BI e aplicação de machine learning para geração de insights. Acredito que unir desenvolvimento, dados e tecnologia é fundamental para criar soluções inteligentes, escaláveis e que realmente impactem a sociedade, especialmente na área da saúde, onde atuo atualmente.'
  })

  return {
    personalInfo,
    aboutText
  }
}