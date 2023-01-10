<template>
  <NuxtLink class="cursor-pointer flex items-center justify-center h-20 w-20 md:h-24 md:w-24 rounded-full bg-emerald-200 transition duration-150 ease-out hover:ease-in hover:scale-110 text-sm sm:text-lg text-center text-noir">
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
