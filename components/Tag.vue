<script setup>
defineProps({
  skill: String,
})
</script>

<template>
  <div class="border border-parchment px-4 py-1 rounded-full flex justify-center text-lg">
    {{ skill }}
  </div>
</template>

<style scoped>

</style>
