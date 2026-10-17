<script setup>
import DeviceMockup from '@/components/graphics/DeviceMockup.vue'
import { DEVICES } from '@/content/devices.js'

const REVEAL_STAGGER_MS = 80
</script>

<template>
  <section class="devices-band">
    <div class="container devices-inner">
      <div class="devices-header">
        <h2 data-reveal="up" class="section-title devices-title">Una solución. Todas las pantallas.</h2>
        <p data-reveal="up" data-delay="100" class="devices-intro">
          Ordenador, web, móvil, tablet, reloj o máquina: una sola persona para todo el ecosistema.
        </p>
      </div>

      <div class="devices">
        <figure
          v-for="(device, index) in DEVICES"
          :key="device.kind"
          data-reveal="up"
          :data-delay="index * REVEAL_STAGGER_MS"
          class="device"
        >
          <DeviceMockup :kind="device.kind" />
          <figcaption class="device-caption">{{ device.label }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.devices-band {
  background: var(--color-surface);
  border-top: 2px solid var(--color-text);
  border-bottom: 2px solid var(--color-text);
}

.devices-inner { padding-block: var(--section-space); }

.devices-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px 64px;
}

.devices-title {
  font-size: clamp(34px, 4.6vw, 64px);
  margin: 0 0 0 -0.04em;
  max-width: 16ch;
}

.devices-intro {
  flex: 0 1 420px;
  font-size: 17px;
  line-height: 28px;
  margin: 0;
  opacity: 0.82;
}

.devices {
  margin-top: var(--block-space);
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 40px clamp(24px, 3.5vw, 56px);
}

.device {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.device-caption {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  border-top: 2px solid var(--color-text);
  padding-top: 10px;
}
</style>
