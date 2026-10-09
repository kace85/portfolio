<template>
  <section class="skills-section">
    <div class="section-wrap skills-content">
      <div>
        <p class="section-label">{{ lang === 'en' ? 'How I build' : 'Teknologi yang digunakan' }}</p>
        <h2 class="section-heading">{{ lang === 'en' ? 'Tools & Skills' : 'Teknologi & Keahlian' }}</h2>
      </div>
      <ul class="skill-list" :aria-label="lang === 'en' ? 'Technologies' : 'Teknologi'">
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
defineProps({
  lang: {
    type: String,
    default: 'en'
  }
})

const skills = ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Vite', 'CodeIgniter', 'Git']
</script>

<style scoped>
.skills-section {
  padding: 4.5rem 0;
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);
  background: #f4f5f1;
}

.skills-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-list li {
  padding: 0.75rem 1rem;
  border: 1px solid #d9ded7;
  border-radius: 999px;
  color: #424940;
  font-size: 0.88rem;
  font-weight: 550;
}

@media (max-width: 700px) {
  .skills-section {
    padding: 3.5rem 0;
  }

  .skills-content {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;
  }

  .skill-list {
    gap: 0.5rem;
  }

  .skill-list li {
    padding: 0.65rem 0.85rem;
  }
}
</style>
