<script setup>
  defineProps({
    text: String,
  })
</script>

<template>
  <NuxtLink>
    <span class="cursor-pointer flex items-center text-noir font-body font-medium text-sm transform hover:-translate-y-1 duration-300 ease-in-out">
      <Icon class="mr-1" name="pixelarticons:external-link" size="1.4em"/>
      {{ text }}
    </span>
  </NuxtLink>
</template>

<style scoped>

</style>
