import { ref, computed } from 'vue'

export function useExperienceData() {
  const experience = ref([
    {
      id: 1,
      position: 'Desenvolvedor de Software Júnior - Estágio',
      company: 'Secretaria de Estado da Saúde do Maranhão',
      period: '09/2023 - 06/2025',
      description: `Tecnologias: PHP, Laravel, Vue.js, Nest.js, TypeScript, JavaScript, PostgreSQL, MySQL, SQL, Blade, Python, HTML, CSS, Git, GitHub, Linux, Apache
• Desenvolvi aplicações web para a área da saúde utilizando Laravel (PHP) no back-end e Blade e Vue.js no front-end.
• Modelei bancos de dados relacionais, utilizando PostgreSQL e MySQL, e participei da definição da arquitetura das aplicações.
• Atuei no levantamento e análise de requisitos junto aos stakeholders para garantir que as soluções atendam às necessidades.
• Organizei, distribuí e acompanhei as tarefas da equipe utilizando metodologias ágeis: Kanban e Scrum.
• Realizei versionamento de código com Git e GitHub, mantendo controle, rastreabilidade e colaboração no desenvolvimento.
• Fiz o deploy e atualizações das aplicações em servidores Apache, garantindo a disponibilidade dos sistemas.
• Participei de mentoria sobre transformação digital e soluções tecnológicas aplicadas à saúde para diferentes equipes, setores e alunos.`
    },
    {
      id: 2,
      position: 'Monitor de Projeto e Desenvolvimento de Software',
      company: 'Universidade Federal do Maranhão',
      period: '03/2024 - 07/2024',
      description: `Tecnologias: Python, Git, GitHub, React, React Native, Java, Typescript, Flutter, PHP
• Apoiei alunos na compreensão de conceitos de engenharia de software, arquitetura, desenvolvimento ágil e versionamento.
• Auxiliei na resolução de dúvidas sobre modelagem, implementação, testes de sistemas e boas práticas de programação.
• Dei suporte em projetos e contribuí para o aprofundamento dos conhecimentos técnicos na área de desenvolvimento de software.`
    },
    {
      id: 3,
      position: 'Analista Comercial / Suporte de Operações',
      company: 'Humana Saúde',
      period: '05/2023 - 09/2023',
      description: `Tecnologias: Power BI, Excel, Word
• Desenvolvi e mantive dashboards interativos utilizando Power BI, otimizando a visualização de indicadores de desempenho e vendas.
• Fiz o ranking de vendedores, integrando dados de múltiplas fontes para fornecer insights estratégicos e para premiação.
• Apoiei a área de vendas com análise de dados para tomada de decisão, elaboração de KPIs e acompanhamento de campanhas.
• Realizei a gestão operacional de contratos de planos de saúde empresariais, desde a formalização até o acompanhamento pós-venda.
• Atuei no suporte consultivo ao time de vendas, esclarecendo dúvidas operacionais e comerciais sobre produtos e processos.
• Gravei vídeos para campanhas publicitárias, com foco em aumentar as vendas e fortalecer a presença da marca.`
    }
  ])

  const experienceYears = computed(() => {
    const startYear = 2019
    const currentYear = new Date().getFullYear()
    return currentYear - startYear
  })

  return {
    experience,
    experienceYears
  }
}