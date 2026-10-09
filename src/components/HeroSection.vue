<template>
  <section id="home" class="hero section-wrap">
    <div class="hero-copy">
      <p class="section-label">Web developer · Krisna Candra</p>
      <h1>{{ lang === 'en' ? 'I Build Clean, Modern Websites for Businesses.' : 'Saya Membuat Website yang Bersih dan Modern untuk Bisnis.' }}</h1>
      <p class="hero-description">
        {{ lang === 'en'
          ? 'Responsive, professional websites that help businesses present themselves online.'
          : 'Website yang responsif, profesional, dan siap digunakan untuk memperkenalkan bisnis secara online.' }}
      </p>
      <div class="hero-actions">
        <a class="button button-primary" href="#work">{{ lang === 'en' ? 'View My Work' : 'Lihat Karya' }} <span aria-hidden="true">↓</span></a>
        <a
          class="button button-outline"
          :href="whatsappUrl || '#contact'"
        >
          {{ lang === 'en' ? 'WhatsApp Me' : 'Hubungi via WhatsApp' }} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
    <a
      class="hero-proof"
      href="#featured"
      :aria-label="lang === 'en' ? 'See the live websites' : 'Lihat website yang sudah online'"
    >
      <span class="proof-dot" aria-hidden="true"></span>
      <span>{{ lang === 'en' ? 'Real business websites, live online' : 'Website bisnis nyata yang sudah online' }}</span>
      <span class="proof-arrow" aria-hidden="true">↘</span>
    </a>
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
.hero {
  position: relative;
  display: flex;
  min-height: min(620px, calc(100svh - 76px));
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 7rem;
}

.hero-copy {
  max-width: 790px;
}

h1 {
  max-width: 790px;
  margin: 0;
  font-size: clamp(3.4rem, 8vw, 6.6rem);
  font-weight: 650;
  letter-spacing: -0.085em;
  line-height: 0.99;
}

.hero-description {
  max-width: 570px;
  margin: 1.8rem 0 0;
  color: var(--color-muted);
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2rem;
}

.hero-proof {
  position: absolute;
  right: 0;
  bottom: 2.2rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--color-muted);
  font-size: 0.84rem;
  text-decoration: none;
}

.proof-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4e916a;
  box-shadow: 0 0 0 4px #e6f0e8;
}

.proof-arrow {
  color: var(--color-accent);
  font-size: 1rem;
}

@media (max-width: 700px) {
  .hero {
    min-height: 0;
    padding-top: 5.5rem;
    padding-bottom: 7rem;
  }

  h1 {
    font-size: clamp(3.05rem, 15vw, 5rem);
  }

  .hero-description {
    margin-top: 1.35rem;
    line-height: 1.7;
  }

  .hero-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .hero-actions .button {
    width: 100%;
  }

  .hero-proof {
    right: auto;
    bottom: 2.2rem;
    left: 0;
    font-size: 0.78rem;
  }
}
</style>
