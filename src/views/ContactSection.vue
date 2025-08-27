<template>
  <section id="contact" class="section">
    <h2 class="section-title">{{ translations.contact.sectionTitleContact }}</h2>
    <div class="contact-container">
      <div class="contact-info">
        <h3>{{ translations.contact.subtitle }}</h3>
        <p class="contact-message">
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
              <div class="contact-details">
                <strong>{{ contact.label }}</strong><br>
                <span>{{ contact.value }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="contact-form glass-card">
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
            :disabled="localSubmitting"
          >
            <i class="fas fa-paper-plane"></i>
            {{ localSubmitting ? translations.contact.form.sending : translations.contact.form.submit }}
          </button>
          <div 
            v-if="localFormMessage" 
            class="form-message"
            :class="{ 
              'success': localFormMessageType === 'success',
              'error': localFormMessageType === 'error'
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

.contact-info h3 {
    color: var(--accent-primary);
    margin-bottom: 20px;
    font-size: 1.5rem;
}

.contact-message {
  color: var(--text-secondary);
  margin-bottom: 30px;
  line-height: 1.7;
}

/* --- Lista de Contatos --- */
.contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.contact-item {
    margin-bottom: 20px;
}

.contact-link {
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    padding: 15px;
    background: var(--bg-glass);
    border-radius: 10px;
    border: 1px solid var(--border-glow);
    color: var(--text-primary);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.contact-link:hover {
    transform: translateY(-5px);
    background: var(--bg-card);
    border-color: var(--accent-primary);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.2);
}

.contact-icon {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--bg-primary);
    font-size: 1.2rem;
    transition: transform 0.3s ease;
}

.contact-link:hover .contact-icon {
    transform: scale(1.1) rotate(5deg);
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.contact-details strong {
    font-size: 1.1rem;
    font-weight: 600;
}

.contact-details span {
    color: var(--text-secondary);
    font-size: 0.95rem;
    transition: color 0.3s ease;
}

.contact-link:hover .contact-details span {
    color: var(--text-primary);
}


/* --- Formulário de Contato --- */
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
    border: 1px solid var(--border-glow);
    border-radius: 10px;
    color: var(--text-primary);
    font-family: inherit;
    transition: all 0.3s ease;
}

.form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.2);
}

/* --- Feedback do Formulário --- */
.form-message {
  margin-top: 15px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease-in-out;
}

.form-message.success {
  background: rgba(78, 205, 196, 0.2);
  color: var(--accent-tertiary);
  border: 1px solid var(--accent-tertiary);
}

.form-message.error {
  background: rgba(255, 107, 107, 0.2);
  color: rgba(255, 107, 107, 0.9);
  border: 1px solid rgba(255, 107, 107, 0.9);
}

/* --- Responsividade --- */
@media (max-width: 768px) {
    .contact-container {
        grid-template-columns: 1fr;
        flex-direction: column-reverse;
        gap: 40px;
    }
    .contact-info {
        text-align: left;
    }
    .contact-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    .contact-item {
        width: 100%;
        max-width: 350px;
        margin-bottom: 0;
    }
    .contact-link {
        justify-content: flex-start;
    }
    .contact-details {
        text-align: left;
    }
    .contact-form {
        padding: 30px;
    }
}

@media (max-width: 480px) {
    .contact-info h3 {
        font-size: 1.3rem;
    }
    .contact-message {
        font-size: 0.9rem;
    }
    .contact-form {
        padding: 25px;
    }
    .form-input, .form-textarea {
        padding: 12px;
    }
    .contact-link {
        padding: 10px;
        gap: 15px;
    }
    .contact-icon {
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
    .contact-details strong {
        font-size: 1rem;
    }
    .contact-details span {
        font-size: 0.9rem;
    }
}

.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
  text-align: center;
}
</style>