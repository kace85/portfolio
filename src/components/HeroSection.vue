<template>
  <section id="home" class="hero section-wrap">
    <div class="hero-copy">
      <p class="section-label hero-eyebrow">Web developer · Krisna Candra</p>
      <h1 class="hero-title">{{ lang === 'en' ? 'I Build Clean, Modern Websites for Businesses.' : 'Saya Membuat Website yang Bersih dan Modern untuk Bisnis.' }}</h1>
      <p class="hero-description hero-enter hero-enter-description">
        {{ lang === 'en'
          ? 'Responsive, professional websites that help businesses present themselves online.'
          : 'Website yang responsif, profesional, dan siap digunakan untuk memperkenalkan bisnis secara online.' }}
      </p>
      <div class="hero-actions hero-enter hero-enter-actions">
        <a class="button button-primary" href="#work">{{ lang === 'en' ? 'View My Work' : 'Lihat Karya' }} <span aria-hidden="true">↓</span></a>
        <a
          class="button button-outline"
          :href="whatsappUrl || '#contact'"
        >
          {{ lang === 'en' ? 'WhatsApp Me' : 'Hubungi via WhatsApp' }} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
    <div class="hero-art" aria-hidden="true">
      <div class="hero-art-orbit hero-art-orbit-back"></div>
      <div class="hero-art-orbit hero-art-orbit-front"></div>
      <div class="hero-art-window hero-art-main">
        <div class="hero-art-toolbar">
          <span></span>
          <span></span>
          <span></span>
          <i><b></b></i>
        </div>
        <div class="hero-art-content">
          <div class="hero-art-brand">
            <span class="hero-art-mark">K</span>
            <span class="hero-art-brand-line"></span>
          </div>
          <div class="hero-art-copy">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="hero-art-button"></div>
          <div class="hero-art-landscape">
            <span class="hero-art-sun"></span>
            <span class="hero-art-hill hero-art-hill-back"></span>
            <span class="hero-art-hill hero-art-hill-front"></span>
          </div>
          <div class="hero-art-cards">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="hero-art-code">
        <span class="hero-art-code-symbol">&lt;/&gt;</span>
        <span class="hero-art-code-lines">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
      <div class="hero-art-note">
        <span aria-hidden="true">✳</span>
        {{ lang === 'en' ? 'Design with care' : 'Desain dengan cermat' }}
      </div>
      <span class="hero-art-spark hero-art-spark-one">✳</span>
      <span class="hero-art-spark hero-art-spark-two"></span>
      <span class="hero-art-spark hero-art-spark-three"></span>
    </div>
    <a
      class="hero-proof hero-enter hero-enter-proof"
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
@keyframes hero-enter {
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(250px, 0.8fr);
  column-gap: 1.5rem;
  min-height: min(620px, calc(100svh - 76px));
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 7rem;
}

.hero::before {
  position: absolute;
  z-index: 0;
  top: 2%;
  right: -14%;
  width: min(68vw, 760px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgb(49 92 72 / 10%) 0%, rgb(49 92 72 / 5%) 42%, transparent 72%);
  content: "";
  pointer-events: none;
}

.hero-copy {
  position: relative;
  z-index: 1;
  max-width: 720px;
}

.hero-art {
  position: relative;
  z-index: 0;
  justify-self: end;
  width: min(100%, 360px);
  aspect-ratio: 1;
  pointer-events: none;
}

.hero-art-orbit {
  position: absolute;
  border-radius: 50%;
}

.hero-art-orbit-back {
  inset: 3%;
  background:
    radial-gradient(circle at 30% 30%, rgb(236 196 121 / 32%), transparent 29%),
    radial-gradient(circle at 72% 67%, rgb(139 184 156 / 34%), transparent 42%);
  animation: hero-art-breathe 5s ease-in-out infinite;
}

.hero-art-orbit-front {
  inset: 7%;
  border: 1px solid rgb(49 92 72 / 13%);
  border-left-color: rgb(219 156 117 / 48%);
  transform: rotate(-24deg);
}

.hero-art-window {
  position: absolute;
  top: 49%;
  left: 48%;
  width: 73%;
  overflow: hidden;
  border: 1px solid rgb(49 92 72 / 15%);
  border-radius: 13px;
  background: rgb(255 255 255 / 94%);
  box-shadow: 0 28px 70px rgb(32 35 31 / 15%);
  transform: translate(-50%, -50%) rotate(-5deg);
}

.hero-art-main {
  animation: hero-art-drift 4.8s ease-in-out infinite;
}

.hero-art-toolbar {
  display: flex;
  height: 31px;
  align-items: center;
  gap: 5px;
  padding: 0 11px;
  border-bottom: 1px solid #edf0eb;
  background: #fbfcfa;
}

.hero-art-toolbar > span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #e9c47c;
}

.hero-art-toolbar > span:nth-child(2) {
  background: #df9c75;
}

.hero-art-toolbar > span:nth-child(3) {
  background: #8bb89c;
}

.hero-art-toolbar i {
  display: flex;
  width: 43%;
  height: 7px;
  align-items: center;
  margin-left: 10px;
  padding-left: 5px;
  border-radius: 999px;
  background: #eef1ed;
}

.hero-art-toolbar i b {
  width: 55%;
  height: 2px;
  border-radius: 999px;
  background: #d8ded7;
}

.hero-art-content {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: 9px 12px;
  padding: 16px;
}

.hero-art-brand {
  display: flex;
  grid-column: 1 / -1;
  align-items: center;
  gap: 7px;
}

.hero-art-mark {
  display: grid;
  width: 21px;
  height: 21px;
  place-items: center;
  border-radius: 7px;
  background: #315c48;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 750;
}

.hero-art-brand-line {
  width: 46px;
  height: 4px;
  border-radius: 999px;
  background: #d7dfd5;
}

.hero-art-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

.hero-art-copy span,
.hero-art-cards span {
  display: block;
  border-radius: 999px;
  background: #e1e6df;
}

.hero-art-copy span {
  width: 100%;
  height: 5px;
}

.hero-art-copy span:first-child {
  width: 82%;
  height: 7px;
  background: #8da997;
}

.hero-art-copy span:last-child {
  width: 67%;
  background: #cbd7cc;
}

.hero-art-button {
  width: 42px;
  height: 13px;
  border-radius: 999px;
  background: #315c48;
}

.hero-art-landscape {
  position: relative;
  grid-column: 1 / -1;
  height: 94px;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(160deg, #f1c98e 0%, #f3d9b4 43%, #b7d0c1 44%, #7da58e 100%);
}

.hero-art-sun {
  position: absolute;
  top: 14px;
  right: 24px;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: #fff1c9;
  box-shadow: 0 0 22px rgb(255 241 201 / 70%);
  animation: hero-art-sunlight 4s ease-in-out infinite;
}

.hero-art-hill {
  position: absolute;
  right: -8%;
  bottom: -40%;
  left: -8%;
  height: 95%;
  border-radius: 50% 50% 0 0;
}

.hero-art-hill-back {
  bottom: -48%;
  left: 28%;
  background: #668f7b;
}

.hero-art-hill-front {
  right: 24%;
  bottom: -58%;
  background: #47765f;
}

.hero-art-cards {
  display: flex;
  grid-column: 1 / -1;
  gap: 7px;
}

.hero-art-cards span {
  width: 33.33%;
  height: 25px;
  border: 1px solid #e9ece7;
  border-radius: 6px;
  background: linear-gradient(145deg, #fff, #f5f7f3);
}

.hero-art-spark {
  position: absolute;
  z-index: 2;
  display: grid;
  place-items: center;
  border-radius: 50%;
}

.hero-art-spark-one {
  top: 18%;
  left: 12%;
  width: 34px;
  height: 34px;
  background: #f1d79e;
  color: #866b38;
  font-size: 0.85rem;
}

.hero-art-spark-two {
  right: 9%;
  bottom: 20%;
  width: 13px;
  height: 13px;
  background: #d99f7b;
  box-shadow: 0 0 0 5px rgb(217 159 123 / 16%);
}

.hero-art-spark-three {
  bottom: 15%;
  left: 16%;
  width: 8px;
  height: 8px;
  background: #8bb89c;
}

.hero-art-code {
  position: absolute;
  z-index: 1;
  top: 16%;
  right: 1%;
  display: flex;
  width: 103px;
  height: 69px;
  align-items: center;
  gap: 9px;
  padding: 12px;
  border: 1px solid rgb(255 255 255 / 70%);
  border-radius: 11px;
  background: #263f34;
  box-shadow: 0 16px 35px rgb(32 35 31 / 16%);
  animation: hero-art-drift 6s ease-in-out infinite reverse;
}

.hero-art-code-symbol {
  color: #edc77e;
  font-size: 0.82rem;
  font-weight: 700;
}

.hero-art-code-lines {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 5px;
}

.hero-art-code-lines i {
  width: 100%;
  height: 3px;
  border-radius: 999px;
  background: #86a991;
}

.hero-art-code-lines i:nth-child(2) {
  width: 72%;
  background: #d99f7b;
}

.hero-art-code-lines i:nth-child(3) {
  width: 86%;
  background: #a5b4d1;
}

.hero-art-note {
  position: absolute;
  z-index: 2;
  right: 1%;
  bottom: 13%;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgb(255 255 255 / 80%);
  border-radius: 999px;
  background: rgb(255 255 255 / 94%);
  box-shadow: 0 12px 30px rgb(32 35 31 / 10%);
  color: #46584a;
  font-size: 0.75rem;
  font-weight: 650;
  animation: hero-art-drift 5.5s ease-in-out infinite;
  animation-delay: -1.2s;
}

.hero-art-note span {
  color: #c58b57;
}

@keyframes hero-art-drift {
  0%,
  100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -12px;
  }
}

@keyframes hero-art-breathe {
  0%,
  100% {
    opacity: 0.72;
    scale: 0.96;
  }

  50% {
    opacity: 1;
    scale: 1.04;
  }
}

@keyframes hero-art-sunlight {
  0%,
  100% {
    scale: 0.94;
    box-shadow: 0 0 15px rgb(255 241 201 / 55%);
  }

  50% {
    scale: 1.08;
    box-shadow: 0 0 30px rgb(255 241 201 / 90%);
  }
}

@keyframes proof-pulse {
  0% {
    box-shadow: 0 0 0 3px #e6f0e8, 0 0 0 3px rgb(78 145 106 / 30%);
  }

  70% {
    box-shadow: 0 0 0 4px #e6f0e8, 0 0 0 10px rgb(78 145 106 / 0%);
  }

  100% {
    box-shadow: 0 0 0 4px #e6f0e8, 0 0 0 10px rgb(78 145 106 / 0%);
  }
}

@keyframes hero-art-orbit {
  to {
    transform: rotate(360deg);
  }
}

@keyframes hero-art-sparkle {
  0%,
  100% {
    opacity: 0.75;
    scale: 0.9;
  }

  50% {
    opacity: 1;
    scale: 1.12;
  }
}

.hero-art-orbit-front {
  animation: hero-art-orbit 36s linear infinite;
}

.hero-art-spark-one {
  animation: hero-art-sparkle 3.4s ease-in-out infinite;
}

.hero-art-spark-two {
  animation: hero-art-sparkle 2.8s ease-in-out infinite reverse;
}

.hero-art-code {
  animation-duration: 4.2s;
}

.hero-art-note {
  animation-duration: 3.8s;
}

.hero-eyebrow,
.hero-title,
.hero-enter {
  animation: hero-enter 650ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.hero-title {
  animation-delay: 80ms;
}

.hero-enter-description {
  animation-delay: 190ms;
}

.hero-enter-actions {
  animation-delay: 300ms;
}

.hero-enter-proof {
  animation-delay: 380ms;
}

h1 {
  max-width: 720px;
  margin: 0;
  font-size: clamp(3rem, 6.6vw, 5.5rem);
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
  z-index: 1;
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
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4e916a;
  box-shadow: 0 0 0 4px #e6f0e8;
  animation: proof-pulse 2s ease-out infinite;
}

.proof-arrow {
  color: var(--color-accent);
  font-size: 1rem;
}

@media (max-width: 1100px) {
  .hero {
    grid-template-columns: minmax(0, 1.15fr) minmax(230px, 0.85fr);
    column-gap: 1rem;
  }

  h1 {
    font-size: clamp(2.9rem, 6vw, 4.5rem);
  }
}

@media (max-width: 700px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: 0;
    padding-top: 5.5rem;
    padding-bottom: 7rem;
  }

  .hero::before {
    top: 0;
    right: -48%;
    width: 125vw;
  }

  .hero-copy {
    max-width: none;
  }

  .hero-art {
    width: min(78vw, 300px);
    justify-self: center;
    margin-top: 1.5rem;
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

@media (prefers-reduced-motion: reduce) {
  .hero-eyebrow,
  .hero-title,
  .hero-enter {
    animation: none;
  }

  .hero-art-main,
  .hero-art-code,
  .hero-art-note,
  .hero-art-orbit-back,
  .hero-art-orbit-front,
  .hero-art-spark-one,
  .hero-art-spark-two,
  .hero-art-sun,
  .proof-dot {
    animation: none;
  }
}
</style>
