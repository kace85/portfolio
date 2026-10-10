<template>
  <section id="contact" class="contact-section">
    <div class="section-wrap contact-content">
      <p v-reveal class="section-label">{{ lang === 'en' ? 'Start a conversation' : 'Mulai percakapan' }}</p>
      <h2 v-reveal="90">{{ lang === 'en' ? 'Have a website in mind?' : 'Punya ide website?' }}<br>{{ lang === 'en' ? 'Let’s talk.' : 'Mari ngobrol.' }}</h2>
      <p v-reveal="180" class="contact-description">
        {{ lang === 'en'
          ? 'Have a business or project that needs a website? Let’s talk.'
          : 'Punya bisnis atau project yang membutuhkan website? Mari ngobrol.' }}
      </p>
      <a
        v-if="whatsappUrl"
        v-reveal="270"
        class="button button-primary contact-button"
        :href="whatsappUrl"
      >{{ lang === 'en' ? 'Chat on WhatsApp' : 'Chat via WhatsApp' }} <span aria-hidden="true">→</span></a>
      <button v-else v-reveal="270" class="button button-primary button-disabled contact-button" type="button" disabled>
        {{ lang === 'en' ? 'Chat on WhatsApp' : 'Chat via WhatsApp' }} <span aria-hidden="true">→</span>
      </button>
    </div>
  </section>
</template>

<script setup>
defineProps({
  lang: {
    type: String,
    default: 'en'
  },
  whatsappUrl: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.contact-section {
  padding: 7.5rem 0 8rem;
  background: #e9eee8;
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact-content h2 {
  margin: 0;
  font-size: clamp(2.8rem, 7vw, 5.6rem);
  font-weight: 650;
  letter-spacing: -0.08em;
  line-height: 1.02;
}

.contact-description {
  margin: 1.2rem 0 0;
  color: var(--color-muted);
  font-size: 1.05rem;
  line-height: 1.7;
}

.contact-button {
  min-height: 58px;
  margin-top: 2rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}

@media (max-width: 700px) {
  .contact-section {
    padding: 5rem 0;
  }

  .contact-content h2 {
    font-size: clamp(2.6rem, 13vw, 4rem);
  }

  .contact-button {
    width: 100%;
  }
}
</style>
