<script setup>
  defineProps({
    title: String,
  })
</script>

<template>
  <div class="py-12 border border-2 rounded-xl mx-4 sm:mx-8">
    <h3 class="text-parchment text-4xl text-center font-display uppercase">
      {{ title }}
    </h3>
  </div>
</template>

<style scoped>

</style>
