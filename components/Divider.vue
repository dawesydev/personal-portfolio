<script setup>
  defineProps({
    title: String,
  })
</script>

<template>
    <div class="py-12 border border-2 rounded-xl mx-4 sm:mx-8 flex flex-col items-center">
<!--      <div class="relative">-->
<!--        <h3 class="text-parchment text-4xl md:text-6xl font-display uppercase place-self-center">-->
<!--          {{ title }}-->
<!--        </h3>-->
<!--        <div class="absolute -top-7 -left-16 md:-left-28">-->
<!--          <p class="font-marker text-3xl md:text-4xl lg:pb-2 text-emerald-400 translate-x-1 -rotate-12">check out my</p>-->
<!--        </div>-->

        <p class="font-marker text-4xl lg:text-6xl lg:pb-2 text-emerald-400">check out my</p>
        <h3 class="text-parchment text-5xl md:text-7xl font-display uppercase place-self-center">
          {{ title }}
        </h3>

<!--      </div>-->

  </div>
</template>

<style scoped>

</style>
