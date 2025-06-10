import { ref } from 'vue'

export function useContactData() {
  const contactInfo = ref([
    {
      type: 'email',
      label: 'Email',
      value: 'josevbrito.tech@gmail.com',
      link: 'mailto:josevbrito.tech@gmail.com',
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

  return {
    contactInfo,
    socialLinks
  }
}