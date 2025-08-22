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
            <a 
              :href="contact.link" 
              target="_blank" 
              rel="noopener"
              class="contact-link"
            >
              <div class="contact-icon">
                <i :class="contact.icon"></i>
              </div>
              <div>
                <strong>{{ contact.label }}</strong><br>
                <span>{{ contact.value }}</span>
              </div>
            </a>
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
            class="btn-primary flex items-center justify-center gap-2" 
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

<style scoped>

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .contact-form {
    background: var(--bg-card);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }

  .form-group {
    margin-bottom: 25px;
  }

  .form-label {
    display: block;
    margin-bottom: 8px;
    color: var(--text-primary);
    font-weight: 500;
  }

  .form-input, .form-textarea {
    width: 100%;
    padding: 15px;
    background: var(--bg-glass);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: var(--text-primary);
    font-family: inherit;
    transition: all 0.3s ease;
  }

  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  .contact-info h3 {
    color: var(--accent-primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  .contact-list {
    list-style: none;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    padding: 15px;
    background: var(--bg-glass);
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  .contact-item:hover {
    background: var(--bg-card);
    transform: translateX(10px);
  }

  .contact-icon {
    width: 40px;
    height: 40px;
    background: var(--gradient-tertiary);
    border-radius: 50%;
    display: flex;
    margin-right: 20px;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);
  }

  .btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
  }


  .contact-link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .contact-link:hover {
    color: var(--primary-color);
  }


  @media (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
      flex-direction: column-reverse;
      gap: 40px;
    }

    .contact-info {
      text-align: center;
    }
    

    .contact-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .contact-item {
      padding: 0;
    }

    .contact-icon {
      margin-right: 0;
    }

    .contact-item:hover {
      transform: none;
    }

    .contact-item div:last-child {
      display: none;
    }
  }
</style>