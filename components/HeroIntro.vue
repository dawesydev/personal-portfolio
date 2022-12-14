<script setup>

defineProps({
  text: String,
})

</script>

<template>
  <p class="lg:row-start-3 lg:col-start-3 font-body font-medium text-sm pb-6 lg:text-2xl">
    {{ text }}
  </p>
</template>

<style scoped>

</style>
