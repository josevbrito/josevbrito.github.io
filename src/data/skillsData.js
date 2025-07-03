import { ref } from 'vue'

export function useSkillsData() {
  const skills = ref([
    {
      name: 'Frontend',
      items: ['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML5 & CSS3', 'Flutter', 'Angular']
    },
    {
      name: 'Backend',
      items: ['PHP', 'Laravel', 'Spring Boot', 'Nest.js', 'Python', 'Node.js', 'RESTful APIs', 'Microsserviços']
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

  return {
    skills
  }
}