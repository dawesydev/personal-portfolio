<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <p class="font-body font-medium text-lg pb-6 w-3/4">
    {{ text }}
  </p>
</template>

<style scoped></style>
