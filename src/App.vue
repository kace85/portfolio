<template>
  <div class="site-shell">
    <header class="site-header">
      <nav class="navigation" :aria-label="lang === 'en' ? 'Main navigation' : 'Navigasi utama'">
        <a class="wordmark" href="#home" aria-label="Krisna Candra home">Krisna Candra<span>.</span></a>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="primary-navigation"
          :aria-label="isMenuOpen
            ? (lang === 'en' ? 'Close navigation menu' : 'Tutup menu navigasi')
            : (lang === 'en' ? 'Open navigation menu' : 'Buka menu navigasi')"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span></span>
          <span></span>
        </button>

        <div id="primary-navigation" class="navigation-links" :class="{ 'is-open': isMenuOpen }">
          <a href="#work" @click="closeMenu">{{ lang === 'en' ? 'Work' : 'Karya' }}</a>
          <a href="#about" @click="closeMenu">{{ lang === 'en' ? 'About' : 'Tentang' }}</a>
          <a href="#contact" @click="closeMenu">{{ lang === 'en' ? 'Contact' : 'Kontak' }}</a>
          <div class="language-switch" role="group" :aria-label="lang === 'en' ? 'Choose language' : 'Pilih bahasa'">
            <button type="button" :aria-pressed="lang === 'en'" @click="setLanguage('en')">EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" :aria-pressed="lang === 'id'" @click="setLanguage('id')">ID</button>
          </div>
          <a
            class="navigation-cta"
            :href="whatsappUrl || '#contact'"
            @click="closeMenu"
          >WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>

    <main>
      <HeroSection :whatsapp-url="whatsappUrl" :lang="lang" />
      <ProjectsSection :lang="lang" />
      <AboutSection :lang="lang" />
      <SkillsSection :lang="lang" />
      <ContactSection :whatsapp-url="whatsappUrl" :lang="lang" />
    </main>

    <Footer :lang="lang" />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { portfolioConfig } from './config'
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

const isMenuOpen = ref(false)
const lang = ref('en')
const whatsappUrl = computed(() => {
  const number = portfolioConfig.whatsappNumber.replace(/\D/g, '')
  return number ? `https://wa.me/${number}` : ''
})

watch(lang, (language) => {
  const isEnglish = language === 'en'
  const description = isEnglish
    ? 'Web developer building modern, responsive websites for businesses.'
    : 'Web developer yang membuat website modern, responsif, dan siap digunakan untuk bisnis.'

  document.documentElement.lang = language
  document.title = isEnglish ? 'Krisna Candra — Web Developer' : 'Krisna Candra — Pengembang Web'
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
}, { immediate: true })

const setLanguage = (language) => {
  lang.value = language
  closeMenu()
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style>
:root {
  font-family: Inter, "Segoe UI", Arial, sans-serif;
  color: #20231f;
  background: #fbfbf8;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-optical-sizing: auto;
  --color-ink: #20231f;
  --color-muted: #686d66;
  --color-accent: #315c48;
  --color-accent-dark: #244735;
  --color-paper: #fbfbf8;
  --color-line: #e3e5df;
  --content-width: 1120px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 6rem;
}

body {
  margin: 0;
}

body,
button,
a {
  font-family: Inter, "Segoe UI", Arial, sans-serif;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

a {
  color: inherit;
}

button:focus-visible,
a:focus-visible {
  outline: 3px solid #8bb89c;
  outline-offset: 4px;
}

img {
  display: block;
  max-width: 100%;
}

.site-shell {
  min-height: 100vh;
  overflow: clip;
  background: var(--color-paper);
}

.site-header {
  position: sticky;
  z-index: 10;
  top: 0;
  border-bottom: 1px solid rgb(227 229 223 / 85%);
  background: rgb(251 251 248 / 94%);
  backdrop-filter: blur(12px);
}

.navigation {
  width: min(var(--content-width), calc(100% - 64px));
  min-height: 76px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wordmark {
  text-decoration: none;
  font-size: 1.35rem;
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

.navigation-links {
  display: flex;
  align-items: center;
  gap: 2.1rem;
}

.navigation-links a {
  text-decoration: none;
  color: #50554f;
  font-size: 0.9rem;
  font-weight: 550;
  transition: color 180ms ease, background-color 180ms ease, transform 180ms ease;
}

.navigation-links a:hover {
  color: var(--color-accent);
}

.navigation-links .navigation-cta {
  padding: 0.7rem 1rem;
  border-radius: 999px;
  background: var(--color-accent);
  color: #fff;
  transition: background-color 180ms ease, color 180ms ease, transform 180ms ease;
}

.navigation-links .navigation-cta:hover {
  background: var(--color-accent-dark);
  color: #fff;
  transform: translateY(-1px);
}

.language-switch {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: #9a9f97;
  font-size: 0.78rem;
}

.language-switch button {
  padding: 0.45rem 0.2rem;
  border: 0;
  background: transparent;
  color: var(--color-muted);
  font-size: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: color 180ms ease, transform 180ms ease;
}

.language-switch button:hover {
  transform: translateY(-1px);
}

.language-switch button[aria-pressed="true"] {
  color: var(--color-accent);
  font-weight: 750;
}

.menu-toggle {
  display: none;
  transition: border-color 180ms ease, background-color 180ms ease;
}

.menu-toggle:hover {
  border-color: #bdc9bc;
  background: #f1f3ef;
}

.section-wrap {
  width: min(var(--content-width), calc(100% - 64px));
  margin: 0 auto;
}

.section-label {
  margin: 0 0 0.8rem;
  color: var(--color-accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.section-heading {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 650;
  letter-spacing: -0.065em;
  line-height: 1.08;
}

.button {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 0.85rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 650;
  text-decoration: none;
  transition: background-color 160ms ease, color 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.navigation-links a:active,
.language-switch button:active,
.menu-toggle:active,
.button:active {
  transform: translateY(0);
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  background: var(--color-accent);
  color: #fff;
}

.button-primary:hover {
  background: var(--color-accent-dark);
}

.button-outline {
  border-color: #cdd2c9;
  background: transparent;
  color: var(--color-ink);
}

.button-outline:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.button-disabled {
  background: #a7b3aa;
  cursor: not-allowed;
}

.button-disabled:hover {
  transform: none;
}

.reveal-element {
  transition:
    opacity 760ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 760ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--reveal-delay, 0ms);
}

.reveal-pending {
  opacity: 0;
  transform: translateY(28px) scale(0.98);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@media (max-width: 700px) {
  .navigation,
  .section-wrap {
    width: min(100% - 40px, var(--content-width));
  }

  .navigation {
    min-height: 68px;
  }

  .menu-toggle {
    display: grid;
    width: 44px;
    height: 44px;
    align-content: center;
    justify-items: center;
    gap: 6px;
    padding: 0;
    border: 1px solid var(--color-line);
    border-radius: 5px;
    background: transparent;
  }

  .menu-toggle span {
    width: 18px;
    height: 1.5px;
    background: var(--color-ink);
  }

  .navigation-links {
    position: absolute;
    top: calc(100% + 1px);
    right: 0;
    left: 0;
    display: none;
    align-items: stretch;
    gap: 0;
    padding: 0.4rem 20px 1rem;
    border-bottom: 1px solid var(--color-line);
    background: var(--color-paper);
  }

  .navigation-links.is-open {
    display: flex;
    flex-direction: column;
  }

  .navigation-links a {
    padding: 0.95rem 0;
    border-bottom: 1px solid var(--color-line);
  }

  .navigation-links .navigation-cta {
    align-self: flex-start;
    margin-top: 0.9rem;
    padding: 0.75rem 1rem;
    border-bottom: 0;
  }

  .navigation-links .language-switch {
    padding: 0.55rem 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }

  .reveal-pending,
  .reveal-visible {
    opacity: 1 !important;
    transform: none !important;
  }

  .navigation-links a:hover,
  .language-switch button:hover,
  .button:hover,
  .featured-project:hover,
  .featured-project:focus-within,
  .featured-project:hover .project-preview img,
  .featured-project:focus-within .project-preview img,
  .skill-list li:hover,
  .footer-content > a:last-child:hover {
    transform: none !important;
  }
}
</style>
