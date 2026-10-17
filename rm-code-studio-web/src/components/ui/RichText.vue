<script setup>
// Texto con enlaces intercalados: un texto, o una lista de trozos de texto y enlaces ({ label, href })
const props = defineProps({
  content: { type: [String, Array], required: true }
})

const segments = typeof props.content === 'string' ? [props.content] : props.content
</script>

<template>
  <template v-for="(segment, index) in segments" :key="index">
    <a v-if="typeof segment === 'object'" :href="segment.href">{{ segment.label }}</a>
    <template v-else>{{ segment }}</template>
  </template>
</template>
