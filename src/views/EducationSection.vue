<template>
  <section id="education" class="section">
    <h2 class="section-title">Formação</h2>
    <div class="timeline">
      <div 
        v-for="(edu, index) in education" 
        :key="edu.id" 
        class="timeline-item"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>{{ edu.degree }}</h3>
          <h4 style="color: var(--accent-primary); margin-bottom: 10px;">
            {{ edu.institution }}
          </h4>
          <div style="background: var(--bg-glass); color: var(--accent-primary); padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 15px; font-size: 0.9rem;">
            {{ edu.period }}
          </div>
          <p style="color: var(--text-secondary);">{{ edu.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  props: {
    education: {
      type: Array,
      required: true
    }
  }
}
</script>