<template>
  <section id="education" class="section">
    <!-- Título da seção traduzido do arquivo education.js -->
    <h2 class="section-title">{{ educationTitle }}</h2>

    <div class="timeline">
      <div 
        v-for="(edu, index) in educationList" 
        :key="index" 
        class="timeline-item"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>{{ edu.degree }}</h3>
          <h4 style="color: var(--accent-primary); margin-bottom: 10px;">
            {{ edu.institution }}
          </h4>
          <div
            style="background: var(--bg-glass); color: var(--accent-primary); padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 15px; font-size: 0.9rem;"
          >
            {{ edu.period }}
          </div>
          <p style="color: var(--text-secondary); white-space: pre-line;">{{ edu.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { state } from '../translate/main.js'

export default {
  name: 'EducationSection',
  computed: {
    currentLanguage() {
      return state.currentLanguage
    },
    translations() {
      return state.translations[this.currentLanguage];
    },
    educationList() {
      return this.translations.education.list
    },
    educationTitle() {
      return this.translations.education.sectionTitleEducation
    }
  }
}
</script>


<style scoped>


.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 4px;
  background: var(--accent-primary);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
}

.timeline-item {
  padding: 10px 0;
  position: relative;
  width: 50%;
  left: 0;
  text-align: left;
}

.timeline-item:nth-child(even) {
  left: 50%;
  text-align: left;
}

.timeline-dot {
  position: absolute;
  width: 16px;
  height: 16px;
  background: var(--accent-primary);
  border-radius: 50%;
  top: 20px;
  z-index: 1;
}

.timeline-item:nth-child(odd) .timeline-dot {
  right: -8px;
}

.timeline-item:nth-child(even) .timeline-dot {
  left: -8px;
}

.timeline-content {
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-glow);
  border-radius: 15px;
  padding: 25px;
  box-shadow: var(--shadow-primary);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: 30px;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 30px;
}


@media (max-width: 768px) {
  .timeline::before {
    left: 15px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 40px;
    padding-right: 10px;
    text-align: left;
    left: 0 !important; 
  }

  .timeline-dot {
    left: 8px !important;
  }

  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 0;
    margin-right: 0;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }

  .timeline-content {
    padding: 20px;
  }
}
</style>
