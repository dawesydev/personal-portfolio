<template>
<a id="top"></a>
<div class="h-screen p-8 overflow-y-hidden">
  <div class="h-full flex flex-col justify-between border-0 rounded-xl bg-parchment">
    <nav class="flex pt-12 px-12 justify-between items-center">
      <p class="text-2xl sm:text-4xl text-noir font-display uppercase tracking-tight">
        Daniel dawes.
      </p>
      <NuxtLink class="cursor-pointer flex items-center justify-center h-16 w-16 md:h-24 md:w-24 rounded-full bg-noir hover:bg-parchment hover:border hover:border-noir hover:text-noir text-xs sm:text-lg text-center text-parchment">
        Contact
      </NuxtLink>
    </nav>
    <div>
      <div class="px-12 w-3/4 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:w-full">
        <h1 class="lg:row-start-2 lg:col-start-1 lg:col-span-2 font-display uppercase text-4xl tracking-tight pb-2 md:text-8xl">
          frontend developer.
        </h1>
        <p class="lg:row-start-2 lg:col-start-3 font-body font-medium text-sm pb-6 lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ducimus enim eum expedita facilis.</p>
      </div>
      <div class="flex justify-between items-center px-12 pb-12 w-full lg:mt-16">
        <div class="flex space-x-6 items-center">
          <NuxtLink class="text-noir font-body font-medium text-xs uppercase flex items-center lg:text-md"><Icon class="mr-1" name="pixelarticons:external-link" size="1.4em"/> GitHub</NuxtLink>
          <NuxtLink class="text-noir font-body font-medium text-xs uppercase flex items-center lg:text-md"><Icon class="mr-1" name="pixelarticons:external-link" size="1.4em"/> LinkedIn</NuxtLink>
          <NuxtLink class="bg-noir text-parchment font-body font-medium text-xs px-4 py-2 rounded-full uppercase lg:text-md">About</NuxtLink>
        </div>
        <div>
          <Icon class="text-noir animate-bounce-slow" name="pixelarticons:arrow-down" size="2.6em"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style scoped>

</style>