<script setup>
import BulletList from '@/components/ui/BulletList.vue'
import SectionEyebrow from '@/components/ui/SectionEyebrow.vue'
import { ABOUT_FACTS } from '@/content/about.js'
import { SECTION_IDS } from '@/content/navigation.js'

const REVEAL_STAGGER_MS = 100

// Si la foto no existe, se deja el hueco vacío en lugar del icono de imagen rota
function hideBrokenImage(event) {
  event.target.style.visibility = 'hidden'
}
</script>

<template>
  <div class="container">
    <section :id="SECTION_IDS.about" class="section-anchor about">
      <div class="about-visual">
        <figure data-reveal="left" class="portrait">
          <img src="/retrato-roger.jpg" alt="Retrato de Roger Moreno" class="grayscale portrait-image" @error="hideBrokenImage">
          <span class="portrait-accent" aria-hidden="true"></span>
        </figure>

        <div class="profile-blocks">
          <div data-reveal="left" data-delay="200" class="profile-block profile-business">Negocio<br>MBA</div>
          <div data-reveal="right" data-delay="200" class="profile-block profile-software">Software<br>Ingeniería</div>
          <div data-reveal="scale" data-delay="700" class="profile-overlap">Doble mirada</div>
        </div>
      </div>

      <div class="about-copy">
        <SectionEyebrow data-reveal="up">02 — Sobre mí</SectionEyebrow>
        <h2 data-reveal="up" data-delay="80" class="section-title about-title">Hola, soy Roger.</h2>
        <p data-reveal="up" data-delay="160" class="about-lead">
          Soy ingeniero informático, especializado en ingeniería del software, y tengo un MBA. He pasado buena
          parte de mi carrera como responsable de sistemas en organizaciones con exigencias altas de seguridad,
          disponibilidad e integración con administraciones públicas.
        </p>
        <p data-reveal="up" data-delay="200" class="about-text">
          En ese tiempo he coordinado proveedores, he diseñado sistemas y también he programado muchas de las
          soluciones que necesitábamos. De ahí aprendí a escuchar primero y proponer después, y es lo que
          intento aportar en cada proyecto.
        </p>

        <div class="about-facts">
          <div
            v-for="(fact, index) in ABOUT_FACTS"
            :key="fact.title"
            data-reveal="up"
            :data-delay="index * REVEAL_STAGGER_MS"
            class="about-fact"
          >
            <h3 class="about-fact-title">{{ fact.title }}</h3>
            <BulletList :items="fact.items" class="about-fact-list" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  padding: var(--section-space-lg) 0 var(--section-space);
  display: flex;
  flex-wrap: wrap;
  gap: 56px clamp(32px, 6vw, 96px);
}

/* — columna de imagen — */
.about-visual {
  flex: 1 1 320px;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.portrait {
  margin: 0;
  position: relative;
}

.portrait-image {
  width: 100%;
  aspect-ratio: 4 / 5;
  height: auto;
  display: block;
  object-fit: cover;
  background: var(--color-neutral-200);
}

.portrait-accent {
  position: absolute;
  right: -14px;
  bottom: -14px;
  width: 56px;
  height: 56px;
  background: var(--color-accent);
  pointer-events: none;
}

/* Dos cuadros solapados (negocio + software) con la intersección resaltada */
.profile-blocks {
  width: min(100%, 360px);
  aspect-ratio: 8 / 5;
  position: relative;
  margin-top: 16px;
}

.profile-block {
  position: absolute;
  top: 0;
  width: 62.5%;
  height: 100%;
  border: 2px solid var(--color-text);
  font-size: clamp(10px, 2.9vw, 12px);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.profile-business {
  left: 0;
  padding: 12px;
}

/* El texto empieza justo tras la franja solapada, que ocupa el 25% del contenedor
   (en padding, los % se calculan sobre el ancho del contenedor, no del cuadro) */
.profile-software {
  left: 37.5%;
  padding: 12px 12px 12px calc(25% + 12px);
}

.profile-overlap {
  position: absolute;
  left: 37.5%;
  top: 0;
  width: 25%;
  height: 100%;
  background: var(--color-accent);
  display: flex;
  align-items: flex-end;
  padding: 10px;
  color: var(--color-bg);
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 15px;
  line-height: 1.1;
}

/* — columna de texto — */
.about-copy {
  flex: 1 1 460px;
  min-width: 0;
}

.about-title {
  font-size: clamp(36px, 4.8vw, 68px);
  max-width: 15ch;
}

.about-lead {
  font-size: 19px;
  line-height: 30px;
  max-width: 58ch;
  margin: 32px 0 0;
}

.about-text {
  font-size: 17px;
  line-height: 28px;
  max-width: 60ch;
  margin: 18px 0 0;
  opacity: 0.82;
}

.about-facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 32px 40px;
  margin-top: 48px;
}

.about-fact {
  border-top: 2px solid var(--color-text);
  padding-top: 20px;
}

.about-fact-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 18px;
  margin: 0;
}

.about-fact-list {
  --bullet-offset: 7px;
  padding: 0;
  margin: 16px 0 0;
  gap: 12px;
  font-size: 15.5px;
  line-height: 22px;
}
</style>
