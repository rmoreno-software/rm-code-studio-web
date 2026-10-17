<script setup>
// Lista con viñetas cuadradas. El espaciado lo decide quien la usa (estilos en site.css → .bullet-list).
defineProps({
  items: { type: Array, required: true }
})
</script>

<template>
  <ul class="bullet-list">
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
</template>
