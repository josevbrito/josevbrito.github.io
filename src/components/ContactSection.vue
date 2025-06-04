<template>
  <section id="contact" class="section">
    <h2 class="section-title">Contato</h2>
    <div class="contact-container">
      <div class="contact-info">
        <h3>Vamos conversar?</h3>
        <p style="color: var(--text-secondary); margin-bottom: 30px;">
          Interessado em colaborar ou tem alguma pergunta? Ficarei feliz em conversar!
        </p>
        <ul class="contact-list">
          <li 
            v-for="contact in contactInfo" 
            :key="contact.type" 
            class="contact-item"
          >
            <div class="contact-icon">
              <i :class="contact.icon"></i>
            </div>
            <div>
              <strong>{{ contact.label }}</strong><br>
              <a 
                :href="contact.link" 
                style="color: var(--text-secondary);"
              >
                {{ contact.value }}
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label class="form-label">Nome</label>
            <input 
              v-model="localForm.name" 
              type="text" 
              class="form-input" 
              required
            >
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input 
              v-model="localForm.email" 
              type="email" 
              class="form-input" 
              required
            >
          </div>
          <div class="form-group">
            <label class="form-label">Mensagem</label>
            <textarea 
              v-model="localForm.message" 
              class="form-textarea" 
              rows="5" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="btn-primary" 
            style="width: 100%;" 
            :disabled="localSubmitting"
          >
            <i class="fas fa-paper-plane"></i>
            {{ localSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
          </button>
          <div 
            v-if="localFormMessage" 
            style="margin-top: 15px; padding: 15px; border-radius: 10px; text-align: center;" 
            :style="{ 
              background: localFormMessageType === 'success' ? 'rgba(78, 205, 196, 0.2)' : 'rgba(255, 107, 107, 0.2)', 
              color: localFormMessageType === 'success' ? 'var(--accent-tertiary)' : 'var(--accent-secondary)' 
            }"
          >
            {{ localFormMessage }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'ContactSection',
  props: {
    contactInfo: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localForm: {
        name: '',
        email: '',
        message: ''
      },
      localSubmitting: false,
      localFormMessage: '',
      localFormMessageType: '',
      emailjsConfig: {
        serviceId: 'service_josevbrito',
        templateId: 'contact_josevbrito', 
        userId: 'xE-nOTgFgEG40ktOX'
      }
    }
  },
  methods: {
    async submitForm() {
      this.localSubmitting = true
      this.localFormMessage = ''
      
      try {
        const templateParams = {
          from_name: this.localForm.name,
          from_email: this.localForm.email,
          message: this.localForm.message,
          to_name: 'José Brito',
          current_date: new Date().toLocaleDateString('pt-BR')
        }

        const response = await emailjs.send(
          this.emailjsConfig.serviceId,
          this.emailjsConfig.templateId,
          templateParams,
          this.emailjsConfig.userId
        )

        console.log('Email enviado com sucesso:', response)
        
        this.localFormMessage = 'Mensagem enviada com sucesso! Retornarei em breve.'
        this.localFormMessageType = 'success'
        
        this.resetForm()
        
      } catch (error) {
        console.error('Erro ao enviar email:', error)
        
        this.localFormMessage = 'Erro ao enviar mensagem. Tente novamente.'
        this.localFormMessageType = 'error'
      } finally {
        this.localSubmitting = false
        
        setTimeout(() => {
          this.localFormMessage = ''
        }, 5000)
      }
    },
    
    resetForm() {
      this.localForm = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>