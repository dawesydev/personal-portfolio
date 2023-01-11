<script setup>

defineProps({
    heading: String,
})

</script>

<template>
  <h1 class="lg:col-start-1 lg:col-span-2 font-display uppercase text-6xl tracking-tight pb-4 md:text-8xl">
    {{ heading }}
  </h1>
</template>

<style scoped>

</style>
