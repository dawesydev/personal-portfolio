<script setup>
  defineProps({
    text: String,
  })
</script>

<template>
  <NuxtLink class="cursor-pointer flex items-center text-noir font-body font-medium text-sm transition-transform hover:-translate-y-1">
    <Icon class="mr-1" name="pixelarticons:external-link" size="1.4em"/>
    {{ text }}
  </NuxtLink>
</template>

<style scoped>

</style>
