<template>
  <footer class="site-footer">
    <div v-reveal class="section-wrap footer-content">
      <a class="wordmark" href="#home">Krisna Candra<span>.</span></a>
      <p>© {{ year }} Krisna Candra. {{ lang === 'en' ? 'Built with care.' : 'Dibuat dengan sepenuh hati.' }}</p>
      <a href="#home">{{ lang === 'en' ? 'Back to top' : 'Kembali ke atas' }} ↑</a>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  lang: {
    type: String,
    default: 'en'
  }
})

const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  padding: 1.5rem 0;
  border-top: 1px solid var(--color-line);
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.wordmark {
  text-decoration: none;
  font-size: 1.15rem;
  font-weight: 750;
  letter-spacing: -0.07em;
  transition: color 180ms ease;
}

.wordmark:hover {
  color: var(--color-accent);
}

.wordmark span {
  color: var(--color-accent);
}

.footer-content p,
.footer-content > a:last-child {
  margin: 0;
  color: var(--color-muted);
  font-size: 0.8rem;
  text-decoration: none;
}

.footer-content > a:last-child:hover {
  color: var(--color-accent);
  transform: translateY(-2px);
}

.footer-content > a:last-child {
  transition: color 180ms ease, transform 180ms ease;
}

@media (max-width: 520px) {
  .footer-content {
    flex-wrap: wrap;
  }

  .footer-content p {
    order: 1;
    width: 100%;
  }
}
</style>
