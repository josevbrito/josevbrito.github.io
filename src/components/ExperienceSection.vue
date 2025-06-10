<template>
    <section id="experience" class="section">
      <h2 class="section-title">Experiência</h2>
      <div class="timeline">
        <div 
          v-for="(exp, index) in experience" 
          :key="exp.id" 
          class="timeline-item"
        >
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>{{ exp.position }}</h3>
            <h4 style="color: var(--accent-primary); margin-bottom: 10px;">
              {{ exp.company }}
            </h4>
            <div style="background: var(--bg-glass); color: var(--accent-primary); padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 15px; font-size: 0.9rem;">
              {{ exp.period }}
            </div>
            <!-- <p style="color: var(--text-secondary); white-space: pre-line;">{{ exp.description }}</p> -->
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ExperienceSection',
    props: {
      experience: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  