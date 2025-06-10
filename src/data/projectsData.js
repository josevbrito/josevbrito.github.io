import { ref, computed } from 'vue'

export function useProjectsData() {
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

  const featuredProjects = computed(() => projects.value.slice(0, 3))

  return {
    projects,
    featuredProjects
  }
}