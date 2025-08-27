<template>
  <section id="about" class="section">
    <h2 class="section-title">{{ translations.sectionTitle }}</h2>
    <div class="about-container">
      <div class="paragraph-side">
        <div class="paragraph-card glass-card fade-in-up">
          <div class="paragraph-content">
            <p class="paragraph-text">{{ translations.about.paragraph }}</p>
          </div>
        </div>
      </div>
      <div class="photo-side">
        <div class="photo-container">
          <div class="photo-placeholder glow-border fade-in-up">
            <img 
              src="/josevbrito.jpg" 
              alt="José Victor Brito Costa"
              class="profile-photo"
            />
            <div class="name-tag">José Victor Brito Costa</div>
          </div>
        </div>
      </div>

      <div class="skills-side">
        <div class="skills-overview">
          <div
            v-for="(category, key) in skillCategories" 
            :key="key"
            class="skill-category-card fade-in-up"
            @click="openModal(key)"
          >
            <div class="category-header">
              <div class="category-icon-wrapper">
                <span class="category-icon" v-html="getCategoryIcon(key)"></span>
              </div>
              <h4 class="category-title">{{ category.name }}</h4>
            </div>
            <div class="click-hint">
              {{ translations.about.clickHint }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeModal !== null" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div class="modal-category-icon">
            <span v-html="getCategoryIcon(activeModal)"></span>
          </div>
          <h3 class="modal-title">{{ skillCategories[activeModal].name }}</h3>
          <button class="close-btn" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="tech-badges-grid">
            <div 
              v-for="tech in skillCategories[activeModal].items" 
              :key="tech"
              class="tech-badge-full"
              :style="getTechStyle(tech)"
            >
              <span class="badge-icon" v-html="getTechIcon(tech)"></span>
              <div class="badge-content">
                <span class="badge-name">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { state } from '../translate/main';

const activeModal = ref(null);

const currentLanguage = computed(() => state.currentLanguage);
const translations = computed(() => ({
  sectionTitle: state.translations[currentLanguage.value].about.sectionTitleAbout,
  about: state.translations[currentLanguage.value].about,
}));

const skillCategories = computed(() => state.translations[currentLanguage.value].about.skills);

const openModal = (key) => {
  activeModal.value = key;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  activeModal.value = null;
  document.body.style.overflow = '';
};

// Mapeamento de ícones centralizado para chaves de objeto
const getCategoryIcon = (key) => {
  const icons = {
    'Frontend': '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    'Backend': '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/></svg>',
    'BancoDeDados': '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zM4 16v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/></svg>',
    'Cloud': '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>',
    'DataScience': '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
    'SoftSkills': '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
  };
  return icons[key] || '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
};

const getTechIcon = (tech) => {
  const iconMap = {
    'Vue.js': 'vuejs', 'React': 'react', 'JavaScript': 'javascript', 'TypeScript': 'typescript', 'HTML5': 'html', 'CSS3': 'css', 'Flutter': 'flutter', 'Angular': 'angular', 'PHP': 'php', 'Laravel': 'laravel', 'Spring Boot': 'springboot', 'Nest.js': 'nestjs', 'Python': 'python', 'Pytorch': 'pytorch', 'Keras': 'keras', 'Node.js': 'nodejs', 'Redis': 'redis', 'RESTful APIs': 'restfulapi', 'Microsserviços': 'microservices', 'Microservices': 'microservices', 'PostgreSQL': 'postgresql', 'MySQL': 'mysql', 'Firebase': 'firebase', 'SQL': 'sql', 'NoSQL': 'nosql', 'GitHub': 'github', 'Git': 'git', 'GitLab': 'gitlab', 'Docker': 'docker', 'CI/CD': 'cicd', 'Linux': 'linux', 'Deploy': 'deploy', 'Apache': 'apache', 'Pandas': 'pandas', 'R': 'r', 'Scikit-learn': 'scikitlearn', 'Machine Learning': 'machinelearning', 'Power BI': 'powerbi', 'Análise de Dados': 'dataanalysis', 'Data Analysis': 'dataanalysis', 'Modelagem de Dados': 'datamodeling', 'Data Modeling': 'datamodeling', 'Metodologias Ágeis': 'agile', 'Agile Methodologies': 'agile',
  };
  const iconName = iconMap[tech] || 'default';
  return `<img src="../src/assets/icons/${iconName}.png" alt="${tech}" class="tech-logo" />`;
};

const getTechStyle = (tech) => {
  const colors = {
    'Vue.js': { bg: 'rgba(76, 175, 80, 0.1)', border: '#4CAF50', color: '#4CAF50', shadow: '0 4px 15px rgba(76, 175, 80, 0.3)' },
    'React': { bg: 'rgba(97, 218, 251, 0.1)', border: '#61DAFB', color: '#61DAFB', shadow: '0 4px 15px rgba(97, 218, 251, 0.3)' },
    'JavaScript': { bg: 'rgba(247, 223, 30, 0.1)', border: '#F7DF1E', color: '#F7DF1E', shadow: '0 4px 15px rgba(247, 223, 30, 0.3)' },
    'TypeScript': { bg: 'rgba(0, 122, 204, 0.1)', border: '#007ACC', color: '#007ACC', shadow: '0 4px 15px rgba(0, 122, 204, 0.3)' },
    'HTML5': { bg: 'rgba(227, 79, 38, 0.1)', border: '#E34F26', color: '#E34F26', shadow: '0 4px 15px rgba(227, 79, 38, 0.3)' },
    'CSS3': { bg: 'rgba(38, 77, 228, 0.1)', border: '#264DE4', color: '#264DE4', shadow: '0 4px 15px rgba(38, 77, 228, 0.3)' },
    'Flutter': { bg: 'rgba(2, 169, 244, 0.1)', border: '#02A9F4', color: '#02A9F4', shadow: '0 4px 15px rgba(2, 169, 244, 0.3)' },
    'Angular': { bg: 'rgba(221, 0, 49, 0.1)', border: '#DD0031', color: '#DD0031', shadow: '0 4px 15px rgba(221, 0, 49, 0.3)' },
    'PHP': { bg: 'rgba(119, 123, 180, 0.1)', border: '#777BB4', color: '#777BB4', shadow: '0 4px 15px rgba(119, 123, 180, 0.3)' },
    'Laravel': { bg: 'rgba(255, 45, 32, 0.1)', border: '#FF2D20', color: '#FF2D20', shadow: '0 4px 15px rgba(255, 45, 32, 0.3)' },
    'SQL': { bg: 'rgba(255, 45, 32, 0.1)', border: '#FF2D20', color: '#FF2D20', shadow: '0 4px 15px rgba(255, 45, 32, 0.3)' },
    'Spring Boot': { bg: 'rgba(106, 186, 62, 0.1)', border: '#6ABA3E', color: '#6ABA3E', shadow: '0 4px 15px rgba(106, 186, 62, 0.3)' },
    'Nest.js': { bg: 'rgba(234, 0, 105, 0.1)', border: '#EA0069', color: '#EA0069', shadow: '0 4px 15px rgba(234, 0, 105, 0.3)' },
    'Python': { bg: 'rgba(55, 118, 171, 0.1)', border: '#3776AB', color: '#3776AB', shadow: '0 4px 15px rgba(55, 118, 171, 0.3)' },
    'Pytorch': { bg: 'rgba(249, 74, 41, 0.1)', border: '#F94A29', color: '#F94A29', shadow: '0 4px 15px rgba(249, 74, 41, 0.3)' },
    'Keras': { bg: 'rgba(206, 18, 52, 0.1)', border: '#CE1234', color: '#CE1234', shadow: '0 4px 15px rgba(206, 18, 52, 0.3)' },
    'Node.js': { bg: 'rgba(104, 160, 99, 0.1)', border: '#68A063', color: '#68A063', shadow: '0 4px 15px rgba(104, 160, 99, 0.3)' },
    'Redis': { bg: 'rgba(228, 0, 0, 0.1)', border: '#D82C20', color: '#D82C20', shadow: '0 4px 15px rgba(228, 0, 0, 0.3)' },
    'RESTful APIs': { bg: 'rgba(0, 255, 157, 0.1)', border: '#00FF9D', color: '#00FF9D', shadow: '0 4px 15px rgba(0, 255, 157, 0.3)' },
    'Microsserviços': { bg: 'rgba(255, 193, 7, 0.1)', border: '#FFC107', color: '#FFC107', shadow: '0 4px 15px rgba(255, 193, 7, 0.3)' },
    'Microservices': { bg: 'rgba(255, 193, 7, 0.1)', border: '#FFC107', color: '#FFC107', shadow: '0 4px 15px rgba(255, 193, 7, 0.3)' },
    'PostgreSQL': { bg: 'rgba(51, 103, 145, 0.1)', border: '#336791', color: '#336791', shadow: '0 4px 15px rgba(51, 103, 145, 0.3)' },
    'MySQL': { bg: 'rgba(0, 117, 143, 0.1)', border: '#00758F', color: '#00758F', shadow: '0 4px 15px rgba(0, 117, 143, 0.3)' },
    'Firebase': { bg: 'rgba(255, 193, 7, 0.1)', border: '#FFCA28', color: '#FFCA28', shadow: '0 4px 15px rgba(255, 193, 7, 0.3)' },
    'NoSQL': { bg: 'rgba(74, 20, 140, 0.1)', border: '#4A148C', color: '#4A148C', shadow: '0 4px 15px rgba(74, 20, 140, 0.3)' },
    'GitHub': { bg: 'rgba(0, 0, 0, 0.1)', border: '#000000', color: '#000000', shadow: '0 4px 15px rgba(0, 0, 0, 0.3)' },
    'GitLab': { bg: 'rgba(226, 67, 41, 0.1)', border: '#E24329', color: '#E24329', shadow: '0 4px 15px rgba(226, 67, 41, 0.3)' },
    'Git': { bg: 'rgba(240, 80, 50, 0.1)', border: '#F05032', color: '#F05032', shadow: '0 4px 15px rgba(240, 80, 50, 0.3)' },
    'Docker': { bg: 'rgba(0, 184, 240, 0.1)', border: '#00B8F0', color: '#00B8F0', shadow: '0 4px 15px rgba(0, 184, 240, 0.3)' },
    'CI/CD': { bg: 'rgba(156, 39, 176, 0.1)', border: '#9C27B0', color: '#9C27B0', shadow: '0 4px 15px rgba(156, 39, 176, 0.3)' },
    'Linux': { bg: 'rgba(0, 0, 0, 0.1)', border: '#000000', color: '#000000', shadow: '0 4px 15px rgba(0, 0, 0, 0.3)' },
    'Deploy': { bg: 'rgba(76, 175, 80, 0.1)', border: '#4CAF50', color: '#4CAF50', shadow: '0 4px 15px rgba(76, 175, 80, 0.3)' },
    'Apache': { bg: 'rgba(211, 47, 47, 0.1)', border: '#D32F2F', color: '#D32F2F', shadow: '0 4px 15px rgba(211, 47, 47, 0.3)' },
    'Pandas': { bg: 'rgba(21, 101, 192, 0.1)', border: '#1565C0', color: '#1565C0', shadow: '0 4px 15px rgba(21, 101, 192, 0.3)' },
    'R': { bg: 'rgba(33, 150, 243, 0.1)', border: '#2196F3', color: '#2196F3', shadow: '0 4px 15px rgba(33, 150, 243, 0.3)' },
    'Scikit-learn': { bg: 'rgba(255, 152, 0, 0.1)', border: '#FF9800', color: '#FF9800', shadow: '0 4px 15px rgba(255, 152, 0, 0.3)' },
    'Machine Learning': { bg: 'rgba(156, 39, 176, 0.1)', border: '#9C27B0', color: '#9C27B0', shadow: '0 4px 15px rgba(156, 39, 176, 0.3)' },
    'Power BI': { bg: 'rgba(255, 193, 7, 0.1)', border: '#F2C811', color: '#F2C811', shadow: '0 4px 15px rgba(255, 193, 7, 0.3)' },
    'Análise de Dados': { bg: 'rgba(3, 169, 244, 0.1)', border: '#03A9F4', color: '#03A9F4', shadow: '0 4px 15px rgba(3, 169, 244, 0.3)' },
    'Data Analysis': { bg: 'rgba(3, 169, 244, 0.1)', border: '#03A9F4', color: '#03A9F4', shadow: '0 4px 15px rgba(3, 169, 244, 0.3)' },
    'Modelagem de Dados': { bg: 'rgba(121, 85, 72, 0.1)', border: '#795548', color: '#795548', shadow: '0 4px 15px rgba(121, 85, 72, 0.3)' },
    'Data Modeling': { bg: 'rgba(121, 85, 72, 0.1)', border: '#795548', color: '#795548', shadow: '0 4px 15px rgba(121, 85, 72, 0.3)' },
    'Metodologias Ágeis': { bg: 'rgba(76, 175, 80, 0.1)', border: '#4CAF50', color: '#4CAF50', shadow: '0 4px 15px rgba(76, 175, 80, 0.3)' },
    'Agile Methodologies': { bg: 'rgba(76, 175, 80, 0.1)', border: '#4CAF50', color: '#4CAF50', shadow: '0 4px 15px rgba(76, 175, 80, 0.3)' },
  };
  return colors[tech] || { bg: 'rgba(158, 158, 158, 0.1)', border: '#9E9E9E', color: '#9E9E9E', shadow: '0 4px 15px rgba(158, 158, 158, 0.3)' };
};
</script>


<style scoped>
.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 60px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: start;
}

/* Paragraph Side */
.paragraph-side {
  top: 100px;
  height: fit-content;
}

.paragraph-card {
  background: var(--bg-glass);
  backdrop-filter: blur(15px);
  border: 1px solid var(--border-glow);
  border-radius: 24px;
  padding: 28px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  height: 100%;
}

.paragraph-card::before {
  content: '';
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  border-radius: 24px 24px 0 0;
}

.paragraph-card:hover {
  background: var(--bg-card);
  border-color: var(--accent-primary);
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 255, 157, 0.15);
}

.paragraph-content {
  height: 100%;
  display: flex;
  align-items: center;
}

.paragraph-text {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
  text-align: justify;
  position: relative;
}

.paragraph-text::first-letter {
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-primary);
  float: left;
  line-height: 1;
  margin: 0.1rem 0.4rem 0 0;
  text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
}

/* Photo Side */
.photo-side {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.photo-container {
  position: relative;
  width: 100%;
  max-width: 300px;
}

.photo-placeholder {
  width: 100%;
  max-width: 350px;
  aspect-ratio: 3/4;
  background: var(--gradient-primary);
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 255, 157, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid var(--border-glow);
}

.photo-placeholder:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 255, 157, 0.25);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.name-tag {
  position: absolute;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 15, 0.95);
  color: var(--text-primary);
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  backdrop-filter: blur(15px);
  border-top: 1px solid var(--border-glow);
}

/* Skills Side */
.skills-side {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skills-overview {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* duas colunas */
  gap: 16px;
}


.skill-category-card {
  background: var(--bg-glass);
  backdrop-filter: blur(15px);
  border: 1px solid var(--border-glow);
  border-radius: 18px;
  padding: 20px;

  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.skill-category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  transform-origin: left;
}

.skill-category-card:hover::before {
  transform: scaleX(1);
}

.skill-category-card:hover {
  background: var(--bg-card);
  border-color: var(--accent-primary);
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 255, 157, 0.2);
}

.category-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
  text-align: center;
}

.category-icon-wrapper {
  width: 40px;
  height: 40px;
  background: var(--gradient-primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto;
}

.category-icon { 
  width: 22px;
  height: 26px;
}


.category-title {
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

.click-hint {
  color: var(--text-muted);
  font-size: 0.8rem;
  text-align: center;
  opacity: 0.7;
  margin-top: 8px;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 1;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: var(--bg-card);
  border: 1px solid var(--border-glow);
  border-radius: 24px;
  max-width: 90vw;
  max-height: 90vh;
  width: 800px;
  overflow: hidden;
  animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.modal-header {
  background: var(--bg-glass);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid var(--border-glow);
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.modal-category-icon {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.modal-title {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

.modal-body {
  padding: 24px;
  max-height: 60vh;
  overflow-y: auto;
}

.tech-badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.tech-badge-full {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 16px;
  border: 2px solid;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.tech-badge-full:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: var(--shadow);
}

.badge-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
}

.tech-logo {
  width: 15px;
  height: 15px;
  object-fit: contain;
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5));
}

.badge-content {
  flex: 1;
  position: relative;
}

.badge-name {
  font-weight: 600;
  font-size: 1rem;
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Responsive Design */
@media (max-width: 1200px) {
  .about-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 30px;
  }
  
  .paragraph-side {
    grid-column: 1 / -1;
    position: relative;
    top: 0;
  }
  
  .paragraph-card {
    padding: 24px;
  }
  
  .paragraph-content {
    align-items: flex-start;
  }
  
  .photo-side {
    grid-column: 1;
  }
  
  .skills-side {
    grid-column: 2;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
  
  .about-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .paragraph-side,
  .photo-side,
  .skills-side {
    grid-column: 1;
  }
  
  .paragraph-card {
    padding: 20px;
  }
  
  .paragraph-text {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .paragraph-text::first-letter {
    font-size: 2.5rem;
    margin: 0.05rem 0.3rem 0 0;
  }
  
  .photo-container {
    max-width: 250px;
    margin: 0 auto;
  }
  
  .skills-overview {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .skill-category-card {
    padding: 18px;
  }
  
  .category-header {
    gap: 10px;
  }
  
  .category-title {
    font-size: 0.95rem;
  }
  
  .click-hint {
    font-size: 0.75rem;
  }
  
  .modal-content {
    width: 95vw;
    max-height: 85vh;
  }
  
  .tech-badges-grid {
    grid-template-columns: 1fr;
  }
}


@media (max-width: 600px) {
  .skills-overview {
    grid-template-columns: repeat(2, 1fr);
  }
  
}

@media (max-width: 480px) {
  .about-container {
    padding: 0 15px;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .paragraph-card {
    padding: 18px;
  }
  
  .paragraph-text::first-letter {
    font-size: 2rem;
    margin: 0.05rem 0.3rem 0 0;
  }
  
  .photo-container {
    max-width: 200px;
  }
  
  .name-tag {
    padding: 10px;
    font-size: 0.9rem;
  }
  
  .skill-category-card {
    padding: 16px;
  }
  
  .category-icon-wrapper {
    width: 36px;
    height: 36px;
  }
  
  .category-title {
    font-size: 0.9rem;
  }
  
  .click-hint {
    font-size: 0.75rem;
  }
  
  .modal-header {
    padding: 18px;
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
  }
  
  .modal-body {
    padding: 18px;
  }
}

/* Scrollbar Modal */
.modal-body::-webkit-scrollbar {
  width: 6px;
}

.modal-body::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.modal-body::-webkit-scrollbar-thumb {
  background: var(--accent-primary);
  border-radius: 3px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: var(--accent-secondary);
}
</style>