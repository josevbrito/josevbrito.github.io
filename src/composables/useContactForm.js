import { reactive, ref, computed } from 'vue'

export function useContactForm() {
  const submitting = ref(false)
  const formMessage = ref('')
  const formMessageType = ref('')

  const form = reactive({
    name: '',
    email: '',
    message: ''
  })

  const isFormValid = computed(() => {
    return form.name.length > 2 && 
      form.email.includes('@') && 
      form.message.length > 10
  })

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

  const handleFormSubmit = async () => {
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

  return {
    form,
    submitting,
    formMessage,
    formMessageType,
    isFormValid,
    handleFormSubmit,
    showFormMessage,
    resetForm
  }
}