<script setup>
import ButtonPill from "./ButtonPill"

</script>

<template>
  <div class="h-full flex flex-col justify-between border-0 rounded-xl bg-parchment">
    <Nav />
    <div>
      <div class="px-6 sm:px-12 w-3/4 lg:w-full">
        <HeroHeading heading="frontend developer." />
        <HeroIntro text="A creative web developer obsessed with design, interaction, and with mastering the latest frontend technologies" />
      </div>
      <div class="flex justify-between items-center px-6 sm:px-12 pb-6 sm:pb-12 w-full lg:mt-16">
        <div class="flex space-x-6 items-center">
          <ExternalLink text="GitHub" />
          <ExternalLink text="LinkedIn" />
          <ButtonPill text="about" />
        </div>
        <div class="invisible sm:visible">
          <Icon class="text-noir animate-bounce-slow" name="pixelarticons:arrow-down" size="2.6em"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
