<script setup>

defineProps({
  title: String,
  tags: Array,
  description: String,
  github: String,
  demo: String,
  background: String

})

</script>

<template>
  <section class="h-screen p-8">
    <div :class="background"
         class="h-full rounded-xl flex justify-start items-end w-full p-12">
      <div class="space-y-6">
          <h2 class="font-display uppercase text-7xl">{{ title }}</h2>
        <div v-for="tag in tags"
             class="inline-flex mr-2 text-noir font-body text-sm uppercase border border-noir w-fit px-2 py-1 rounded-full font-medium">
          {{ tag }}
        </div>
        <p class="w-2/3 font-medium font-body">{{ description }}</p>
        <div class="flex w-1/2 justify-between">
          <NuxtLink :to="github"
                    target="_blank"
                    class="flex items-center font-body font-medium"><Icon class="mr-1" name="pixelarticons:code" size="1.2em"/> Code</NuxtLink>
          <NuxtLink :to="demo"
                    target="_blank"
                    class="flex items-center font-body font-medium"><Icon class="mr-1" name="pixelarticons:external-link" size="1.2em"/> Demo</NuxtLink>
        </div>

      </div>
    </div>

  </section>
</template>
