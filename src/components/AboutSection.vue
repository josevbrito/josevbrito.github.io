<template>
  <section id="about" class="section">
    <h2 class="section-title">Sobre Mim</h2>
    <div class="about-content">
      <div class="about-text">
        <p>{{ aboutText.paragraph1 }}</p>
        <p>{{ aboutText.paragraph2 }}</p>
        <p>{{ aboutText.paragraph3 }}</p>
      </div>
      <div class="skills-container">
        <div 
          v-for="skillCategory in skills" 
          :key="skillCategory.name" 
          class="skill-category"
        >
          <h4>{{ skillCategory.name }}</h4>
          <ul class="skill-list">
            <li 
              v-for="skill in skillCategory.items" 
              :key="skill" 
              class="skill-item"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    aboutText: {
      type: Object,
      required: true
    },
    skills: {
      type: Array,
      required: true
    }
  }
}
</script>