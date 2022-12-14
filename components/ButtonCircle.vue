<template>
  <NuxtLink class="cursor-pointer flex items-center justify-center h-16 w-16 md:h-24 md:w-24 rounded-full bg-noir transition duration-150 ease-out hover:ease-in hover:scale-110 text-xs sm:text-lg text-center text-parchment">
    {{ text }}
  </NuxtLink>
</template>

<script setup>
  defineProps({
    text: String,
  })
</script>

<style scoped>

</style>
