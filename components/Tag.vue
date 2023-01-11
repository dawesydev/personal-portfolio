<script setup>
defineProps({
  skill: String,
})
</script>

<template>
  <div class="border border-noir px-4 py-1 rounded-full w-fit flex justify-center uppercase">
    {{ skill }}
  </div>
</template>

<style scoped>

</style>
