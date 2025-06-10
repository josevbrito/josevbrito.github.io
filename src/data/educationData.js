import { ref } from 'vue'

export function useEducationData() {
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

  return {
    education
  }
}