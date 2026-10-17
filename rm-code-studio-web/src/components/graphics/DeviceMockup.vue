<script setup>
// Maquetas esquemáticas de dispositivos. Las barras con `data-bar` se animan desde useRevealAnimations.
defineProps({
  kind: {
    type: String,
    required: true,
    validator: kind => ['desktop', 'browser', 'tablet', 'phone', 'watch', 'machine'].includes(kind)
  }
})

const MACHINE_KEY_COUNT = 8
</script>

<template>
  <div v-if="kind === 'desktop'" class="desktop">
    <div class="screen desktop-screen">
      <span data-bar class="bar"></span>
      <span class="line w-70"></span>
      <span class="line w-50"></span>
      <span class="tiles desktop-tiles">
        <span class="tile"></span><span class="tile"></span><span class="tile is-dark"></span>
      </span>
    </div>
    <div class="desktop-neck"></div>
    <div class="desktop-foot"></div>
  </div>

  <div v-else-if="kind === 'browser'" class="screen browser">
    <div class="browser-toolbar">
      <span class="browser-dot is-accent"></span><span class="browser-dot"></span><span class="browser-dot"></span>
    </div>
    <div class="browser-body">
      <span data-bar class="bar"></span>
      <span class="line w-80"></span>
      <span class="line w-60"></span>
      <span class="line w-70"></span>
    </div>
  </div>

  <div v-else-if="kind === 'tablet'" class="screen tablet">
    <span data-bar class="bar"></span>
    <span class="line w-80"></span>
    <span class="line w-55"></span>
    <span class="tiles tablet-tiles">
      <span class="tile"></span><span class="tile"></span>
    </span>
  </div>

  <div v-else-if="kind === 'phone'" class="screen phone">
    <span class="phone-notch"></span>
    <span data-bar class="bar bar-sm"></span>
    <span class="line line-thin w-80"></span>
    <span class="line line-thin w-60"></span>
    <span class="phone-button"></span>
  </div>

  <div v-else-if="kind === 'watch'" class="watch">
    <div class="watch-strap"></div>
    <div class="screen watch-face">
      <span data-bar class="bar bar-xs"></span>
      <span class="line line-thin w-70"></span>
      <span class="watch-time">09:41</span>
    </div>
    <div class="watch-strap"></div>
  </div>

  <div v-else-if="kind === 'machine'" class="machine">
    <div class="machine-display">
      <span data-bar class="bar bar-sm"></span>
      <span class="line line-thin w-60"></span>
    </div>
    <div class="machine-keypad">
      <span v-for="key in MACHINE_KEY_COUNT" :key="key" class="machine-key"></span>
      <span class="machine-key is-accent"></span>
    </div>
  </div>
</template>

<style scoped>
/* — piezas comunes — */
.screen {
  border: 2px solid var(--color-text);
  background: var(--color-bg);
}

.bar {
  display: block;
  height: 12px;
  background: var(--color-accent);
  transform-origin: left center;
}
.bar-sm { height: 10px; }
.bar-xs { height: 9px; }

.line {
  display: block;
  height: 6px;
  background: var(--color-neutral-300);
}
.line-thin { height: 5px; }
.w-50 { width: 50%; }
.w-55 { width: 55%; }
.w-60 { width: 60%; }
.w-70 { width: 70%; }
.w-80 { width: 80%; }

.tiles {
  display: grid;
  gap: 6px;
  margin-top: auto;
}
.tile { background: var(--color-neutral-300); }
.tile.is-dark { background: var(--color-text); }

/* — ordenador — */
.desktop {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.desktop-screen {
  width: 200px;
  height: 128px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.desktop-tiles { grid-template-columns: repeat(3, 1fr); }
.desktop-tiles .tile { height: 22px; }
.desktop-neck {
  width: 24px;
  height: 18px;
  background: var(--color-text);
}
.desktop-foot {
  width: 96px;
  height: 4px;
  background: var(--color-text);
}

/* — navegador web — */
.browser {
  width: 188px;
  height: 140px;
  display: flex;
  flex-direction: column;
}
.browser-toolbar {
  display: flex;
  gap: 5px;
  padding: 7px 8px;
  border-bottom: 2px solid var(--color-text);
}
.browser-dot {
  width: 7px;
  height: 7px;
  background: var(--color-text);
}
.browser-dot.is-accent { background: var(--color-accent); }
.browser-body {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* — tablet — */
.tablet {
  width: 112px;
  height: 150px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.tablet-tiles { grid-template-columns: 1fr 1fr; }
.tablet-tiles .tile { height: 28px; }

/* — móvil — */
.phone {
  width: 68px;
  height: 126px;
  padding: 14px 8px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
}
.phone-notch {
  position: absolute;
  top: 4px;
  left: 50%;
  width: 16px;
  height: 4px;
  margin-left: -8px;
  background: var(--color-text);
}
.phone-button {
  display: block;
  height: 20px;
  margin-top: auto;
  background: var(--color-text);
}

/* — reloj — */
.watch {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.watch-strap {
  width: 30px;
  height: 16px;
  background: var(--color-text);
}
.watch-face {
  width: 58px;
  height: 64px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.watch-time {
  display: block;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 13px;
  line-height: 1;
  margin-top: auto;
}

/* — maquinaria — */
.machine {
  width: 128px;
  height: 176px;
  border: 2px solid var(--color-text);
  background: var(--color-text);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.machine-display {
  height: 58px;
  background: var(--color-bg);
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.machine-keypad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  flex: 1;
}
.machine-key { background: var(--color-neutral-600); }
.machine-key.is-accent { background: var(--color-accent); }
</style>
