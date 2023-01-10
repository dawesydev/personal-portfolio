<script setup>
defineProps({
  text: String
})
</script>

<template>
  <NuxtLink class="cursor-pointer bg-noir text-parchment font-body font-medium text-xs px-4 py-2 rounded-full uppercase lg:text-md transition duration-150 ease-out hover:ease-in hover:scale-105 w-fit">
    {{ text }}
  </NuxtLink>
</template>

<style scoped>

</style>
