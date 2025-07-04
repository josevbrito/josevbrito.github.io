<template>
  <section id="contact" class="section">
    <h2 class="section-title">{{ translations.contact.sectionTitleContact }}</h2>
    <div class="contact-container">
      <div class="contact-info">
        <h3>{{ translations.contact.subtitle }}</h3>
        <p style="color: var(--text-secondary); margin-bottom: 30px;">
          {{ translations.contact.message }}
        </p>
        <ul class="contact-list">
          <li 
            v-for="contact in translations.contact.contactList" 
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
                target="_blank" 
                rel="noopener"
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
            <label class="form-label">{{ translations.contact.form.name }}</label>
            <input 
              v-model="localForm.name" 
              type="text" 
              class="form-input" 
              required
            >
          </div>
          <div class="form-group">
            <label class="form-label">{{ translations.contact.form.email }}</label>
            <input 
              v-model="localForm.email" 
              type="email" 
              class="form-input" 
              required
            >
          </div>
          <div class="form-group">
            <label class="form-label">{{ translations.contact.form.message }}</label>
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
            {{ localSubmitting ? translations.contact.form.sending : translations.contact.form.submit }}
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
import { state } from '../translate/main'

export default {
  name: 'ContactSection',
  computed: {
    currentLanguage() {
      return state.currentLanguage
    },
    translations() {
      return state.translations[this.currentLanguage]
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
        
        this.localFormMessage = this.translations.contact.form.success
        this.localFormMessageType = 'success'
        this.resetForm()
      } catch (error) {
        console.error('Erro ao enviar email:', error)
        this.localFormMessage = this.translations.contact.form.error
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