<script setup>
defineProps({
  skill: String,
})
</script>

<template>
  <div class="border border-parchment px-4 py-1 rounded-full flex justify-center text-md font-normal">
    {{ skill }}
  </div>
</template>

<style scoped>

</style>
