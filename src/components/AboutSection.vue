<template>
  <section id="about" class="about-section">
    <div class="section-wrap about-content">
      <div v-reveal>
        <p class="section-label">{{ lang === 'en' ? 'A little about me' : 'Tentang saya' }}</p>
        <h2 class="section-heading">{{ lang === 'en' ? 'About Me' : 'Tentang Saya' }}</h2>
      </div>
      <img v-reveal class="about-photo" :src="profileImage" :alt="lang === 'en' ? 'Formal portrait of Krisna' : 'Foto formal Krisna'" loading="lazy">
      <div v-reveal class="about-copy">
        <h3>{{ lang === 'en'
          ? 'I’m Krisna, a web developer focused on creating clean, responsive, modern, and easy-to-use websites.'
          : 'Saya Krisna, web developer yang berfokus membuat website yang bersih, responsif, modern, dan mudah digunakan.' }}</h3>
        <p>{{ lang === 'en'
          ? 'I work with businesses to bring their ideas online through thoughtful design and dependable frontend development.'
          : 'Saya membantu bisnis membawa ide mereka ke dunia online melalui desain yang matang dan pengembangan frontend yang andal.' }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import profileImage from '../assets/images/profile.jpg'

defineProps({
  lang: {
    type: String,
    default: 'en'
  }
})
</script>

<style scoped>
.about-section {
  padding: 7rem 0;
}

.about-content {
  display: grid;
  grid-template-columns: 0.65fr 0.65fr 1.2fr;
  align-items: center;
  gap: 3rem;
}

.about-photo {
  width: 100%;
  max-width: 230px;
  aspect-ratio: 3 / 4;
  justify-self: center;
  border-radius: 5px;
  background: #e8ece6;
  object-fit: cover;
  object-position: center top;
}

.about-copy h3 {
  max-width: 720px;
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 2.3rem);
  font-weight: 550;
  letter-spacing: -0.05em;
  line-height: 1.4;
}

.about-copy p {
  max-width: 570px;
  margin: 1.3rem 0 0;
  color: var(--color-muted);
  line-height: 1.8;
}

@media (max-width: 700px) {
  .about-section {
    padding: 4.5rem 0;
  }

  .about-content {
    grid-template-columns: 1fr;
    justify-items: start;
    gap: 1.5rem;
  }

  .about-photo {
    width: min(58vw, 230px);
    justify-self: start;
  }
}
</style>
