<script setup>
  defineProps({
    text: String,
  })
</script>

<template>
  <p class="text-2xl sm:text-4xl text-noir font-display uppercase tracking-tight">
    {{ text }}
  </p>
</template>

