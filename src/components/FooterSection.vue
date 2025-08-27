<template>
  <footer class="footer">
    <div class="social-links">
      <a
        v-for="social in translations.footer.socialLinks"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener"
        class="social-link"
      >
        <i :class="social.icon"></i>
      </a>
    </div>
    <p class="footer-copyright">
      {{ translations.footer.copyright }}
    </p>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { state } from '../translate/main';

const currentLanguage = computed(() => state.currentLanguage);
const translations = computed(() => state.translations[currentLanguage.value]);
</script>

<style scoped>
.footer {
    background: var(--bg-primary);
    padding: 30px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

/* Efeito de brilho sutil no fundo */
.footer::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 100px;
    background: rgba(0, 255, 157, 0.1);
    filter: blur(50px);
    z-index: 0;
}

/* Borda superior com gradiente animado */
.footer::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
    animation: border-sparkle 4s linear infinite;
    z-index: 1;
}

@keyframes border-sparkle {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 25px; /* Ajustado para um espaçamento melhor com 4 ícones */
    margin-bottom: 25px; /* Ajustado para um espaçamento melhor */
    position: relative;
    z-index: 2;
}

.social-link {
    width: 60px;
    height: 60px;
    background: var(--bg-card);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.social-link:hover {
    transform: translateY(-8px) scale(1.1);
    border-color: var(--accent-primary);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}

.social-link i {
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

/* Efeito de glitch e brilho ao passar o mouse */
.social-link:hover i {
    color: var(--accent-primary);
    text-shadow: 0 0 5px var(--accent-primary), 0 0 15px var(--accent-primary);
    animation: glitch 0.3s infinite, sparkle 0.5s linear infinite;
}

@keyframes glitch {
    0% { transform: translate(1px, 1px); }
    25% { transform: translate(-1px, -1px); }
    50% { transform: translate(1px, -1px); }
    75% { transform: translate(-1px, 1px); }
    100% { transform: translate(1px, 1px); }
}

@keyframes sparkle {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
}

.footer-copyright {
    color: var(--text-muted);
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    margin-top: 10px;
    position: relative;
    z-index: 2;
}
</style>