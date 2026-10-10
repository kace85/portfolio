<template>
  <section id="work" class="work-section">
    <div class="section-wrap">
      <div class="work-heading">
        <div v-reveal>
          <p class="section-label">{{ lang === 'en' ? 'Selected project' : 'Project pilihan' }}</p>
          <h2 class="section-heading">{{ lang === 'en' ? 'Featured Work' : 'Karya Unggulan' }}</h2>
        </div>
        <p v-reveal class="work-intro">
          {{ lang === 'en'
            ? 'Live websites built to help real businesses show their services online.'
            : 'Website live yang membantu bisnis menampilkan layanan mereka secara online.' }}
        </p>
      </div>

      <div class="project-grid">
        <article
          v-for="(project, index) in portfolioConfig.liveProjects"
          :id="index === 0 ? 'featured' : undefined"
          :key="project.name"
          v-reveal="index * 90"
          class="featured-project"
        >
          <div class="project-preview featured-preview">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="lang === 'en' ? `Screenshot preview of the ${project.name} website` : `Pratinjau website ${project.name}`"
              loading="lazy"
            >
            <div v-else class="preview-placeholder">
              <span class="placeholder-label">{{ lang === 'en' ? 'Live website' : 'Website live' }}</span>
              <span class="placeholder-title">{{ project.name }}</span>
              <span class="placeholder-caption">{{ lang === 'en' ? 'Visit the website to see more' : 'Kunjungi website untuk melihat selengkapnya' }}</span>
            </div>
            <span class="project-status"><span aria-hidden="true"></span> {{ lang === 'en' ? 'LIVE WEBSITE' : 'WEBSITE ONLINE' }}</span>
          </div>

          <div class="featured-details">
            <div class="featured-copy">
              <p class="project-type">{{ lang === 'en' ? project.category : project.categoryId }}</p>
              <h3>{{ project.name }}</h3>
              <p class="project-description">{{ lang === 'en' ? project.description : project.descriptionId }}</p>
            </div>
            <div class="featured-actions">
              <a
                class="button button-primary"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
              >{{ lang === 'en' ? 'Visit Website' : 'Kunjungi Website' }} <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioConfig } from '../config'

defineProps({
  lang: {
    type: String,
    default: 'en'
  }
})
</script>

<style scoped>
.work-section {
  padding: 6.5rem 0 7rem;
  background: #f1f3ef;
}

.work-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.work-intro {
  max-width: 320px;
  margin: 0 0 0.3rem;
  color: var(--color-muted);
  line-height: 1.65;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;
  margin-top: 2.2rem;
}

.featured-project {
  overflow: hidden;
  border: 1px solid #e1e5de;
  border-radius: 8px;
  background: #fff;
  transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
}

.featured-project:hover,
.featured-project:focus-within {
  transform: translateY(-4px);
  border-color: #cbd5ca;
  box-shadow: 0 14px 32px rgb(32 35 31 / 9%);
}

.project-preview {
  position: relative;
  overflow: hidden;
  background: #e8ece6;
}

.project-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease;
}

.featured-project:hover .project-preview img,
.featured-project:focus-within .project-preview img {
  transform: scale(1.03);
}

.featured-preview {
  aspect-ratio: 2.6 / 1;
}

.preview-placeholder {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  padding: 2rem;
  background:
    linear-gradient(90deg, rgb(255 255 255 / 38%) 1px, transparent 1px),
    linear-gradient(rgb(255 255 255 / 38%) 1px, transparent 1px),
    #e8ece6;
  background-size: 40px 40px;
  color: var(--color-ink);
  text-align: center;
}

.placeholder-label,
.placeholder-caption {
  color: #68736a;
  font-size: 0.74rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.placeholder-title {
  font-size: clamp(1.7rem, 2.5vw, 2.5rem);
  font-weight: 650;
  letter-spacing: -0.08em;
  line-height: 0.93;
}

.placeholder-caption {
  letter-spacing: 0;
  text-transform: none;
}

.project-status {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.7rem;
  border: 1px solid rgb(255 255 255 / 70%);
  border-radius: 3px;
  background: rgb(251 251 248 / 94%);
  color: var(--color-ink);
  font-size: 0.68rem;
  font-weight: 750;
  letter-spacing: 0.1em;
}

.project-status span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #468b60;
}

.featured-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1.5rem;
}

.project-type {
  margin: 0 0 0.55rem;
  color: var(--color-muted);
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.featured-copy h3 {
  margin: 0;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  font-weight: 650;
  letter-spacing: -0.06em;
}

.project-description {
  max-width: 630px;
  margin: 0.75rem 0 0;
  color: var(--color-muted);
  line-height: 1.7;
}

.featured-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.featured-actions .button {
  white-space: nowrap;
}

@media (max-width: 700px) {
  .work-section {
    padding: 4.5rem 0;
  }

  .work-heading {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.8rem;
  }

  .work-intro {
    margin: 0;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .project-status {
    top: 0.8rem;
    left: 0.8rem;
  }

  .featured-details {
    gap: 1.4rem;
    padding: 1.4rem;
  }

  .featured-actions {
    min-width: 0;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }

  .featured-actions .button {
    width: 100%;
  }
}
</style>
