<script setup>
import ButtonPill from "./ButtonPill"

</script>

<template>
  <div class="h-full flex flex-col justify-between border-0 rounded-xl bg-parchment">
    <Nav />
    <div>
      <div class="px-6 sm:px-12 w-3/4 lg:w-full">
        <p class="font-marker text-4xl lg:text-6xl lg:pb-2 text-emerald-400">Your next..</p>
        <HeroHeading heading="frontend developer." />
        <HeroIntro text="A creative coder with a keen-eye for design, finds joy in solving problems with the latest frontend technologies." />
      </div>
      <div class="flex justify-between items-center px-6 sm:px-12 pb-6 sm:pb-12 w-full lg:mt-16">
        <div class="flex space-x-6 items-center">
          <ExternalLink to="https://github.com/dawesydev" text="GitHub" />
          <ExternalLink to="https://www.linkedin.com/in/daniel-dawes/" text="LinkedIn" />
          <ButtonPill to="#about" text="about" />
        </div>
        <div class="invisible sm:visible">
          <NuxtLink to="#projects">
            <Icon class="text-noir animate-bounce-slow" name="pixelarticons:arrow-down" size="2.6em"/>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
