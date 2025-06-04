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
        <form @submit.prevent="$emit('submit-form')">
          <div class="form-group">
            <label class="form-label">Nome</label>
            <input 
              v-model="form.name" 
              type="text" 
              class="form-input" 
              required
            >
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input 
              v-model="form.email" 
              type="email" 
              class="form-input" 
              required
            >
          </div>
          <div class="form-group">
            <label class="form-label">Mensagem</label>
            <textarea 
              v-model="form.message" 
              class="form-textarea" 
              rows="5" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="btn-primary" 
            style="width: 100%;" 
            :disabled="submitting"
          >
            <i class="fas fa-paper-plane"></i>
            {{ submitting ? 'Enviando...' : 'Enviar Mensagem' }}
          </button>
          <div 
            v-if="formMessage" 
            style="margin-top: 15px; padding: 15px; border-radius: 10px; text-align: center;" 
            :style="{ 
              background: formMessageType === 'success' ? 'rgba(78, 205, 196, 0.2)' : 'rgba(255, 107, 107, 0.2)', 
              color: formMessageType === 'success' ? 'var(--accent-tertiary)' : 'var(--accent-secondary)' 
            }"
          >
            {{ formMessage }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    contactInfo: {
      type: Array,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    submitting: {
      type: Boolean,
      required: true
    },
    formMessage: {
      type: String,
      required: true
    },
    formMessageType: {
      type: String,
      required: true
    }
  },
  emits: ['submit-form']
}
</script>