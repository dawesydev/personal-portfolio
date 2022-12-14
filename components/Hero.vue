<script setup>

import ButtonPill from "./ButtonPill";

</script>

<template>
  <div class="h-full flex flex-col justify-between border-0 rounded-xl bg-parchment">
    <Nav />
    <div>
      <div class="px-12 w-3/4 lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:w-full">
        <HeroHeading heading="frontend developer." class="lg:row-start-3"/>
        <HeroIntro text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ducimus enim eum expedita facilis." />
      </div>
      <div class="flex justify-between items-center px-12 pb-12 w-full lg:mt-16">
        <div class="flex space-x-6 items-center">
          <ExternalLink text="GitHub" />
          <ExternalLink text="LinkedIn" />
          <ButtonPill text="about" />
        </div>
        <div>
          <Icon class="text-noir animate-bounce-slow" name="pixelarticons:arrow-down" size="2.6em"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
