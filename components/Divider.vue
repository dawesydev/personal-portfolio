<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div
    class="border rounded-xl p-4 sm:p-8 mx-4 sm:mx-8 grid place-items-center text-center"
  >
    <div class="text-parchment font-display uppercase">
      <span class="font-marker text-[#e3c902] text-2xl md:text-4xl"
        >check out my</span
      >
      <br />
      <span class="text-4xl md:text-6xl">
        {{ title }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
