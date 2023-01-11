<script setup>

</script>

<template>
  <footer class="h-11/12 p-4 sm:p-8 overflow-y-hidden">
    <div class="grid grid-rows-6 gap-4 w-full lg:grid-cols-4 lg:grid-rows-3 lg:gap-8">
      <div class="flex row-span-2 bg-parchment rounded-xl p-4 lg:col-start-1 lg:col-span-3 lg:row-span-2 lg:justify-between">
        <div class="w-1/2 text-noir font-display text-5xl font-black uppercase tracking-wide leading-none md:text-6xl lg:w-1/3">
          I'm Dan, <br />
          <span class="text-emerald-400 font-marker">frontend developer</span>
          based remotely within
          Europe.
          <Icon name="ph:globe" />
        </div>
        <div class="invisible sm:visible w-1/2 font-body font-medium text-md sm:text-xl">A creative developer seeking a role within an exciting company to grow and continue learning with an experienced and passionate team.</div>
      </div>
      <div class="bg-emerald-200 row-span-2 rounded-xl p-4 flex flex-col justify-between lg:col-start-4 lg:row-span-3 lg:text-xl space-y-6">
        <Icon name="pixelarticons:lock-open" size="2.4em"/>
        <div class="font-display uppercase text-3xl md:text-5xl">discover <br/> what's in my <br/> tech locker</div>
          <p class="font-body font-medium text-md">Here are a few technologies that I have worked with recently on projects</p>
        <div class="flex w-full justify-around text-sm font-body font-medium lg:w-full">
          <div class="list-inside lg:text-sm space-y-2">
            <Tag skill="Javascript (ES6+)" />
          </div>
          <ul class="list-inside lg:text-lg space-y-2">
            <li class="border border-noir px-4 py-1 rounded-full w-fit flex justify-center uppercase">Node.js</li>
            <li class="border border-noir px-4 py-1 rounded-full w-fit flex justify-center uppercase">Express</li>
            <li class="border border-noir px-4 py-1 rounded-full w-fit flex justify-center uppercase">TailwindCSS</li>
          </ul>
        </div>

      </div>
      <div class="bg-rose-200 row-span-1 rounded-xl p-4 space-y-4 flex flex-col justify-between">
        <Icon name="pixelarticons:at" size="2.2em"/>
        <div class="font-display uppercase text-2xl">let's connect</div>
        <div class="flex space-x-2">
          <NuxtLink to="https://github.com/dawesydev" target="_blank" class="font-medium font-body flex items-center transition-transform hover:-translate-y-1"><Icon class="mr-1" name="pixelarticons:external-link" size="1.2em"/> GitHub</NuxtLink>
<!--          <NuxtLink to="https://codepen.io/dawesydev" target="_blank" class="font-medium font-body flex items-center transition-transform hover:-translate-y-1"><Icon class="mr-1" name="pixelarticons:external-link" size="1.2em"/> CodePen</NuxtLink>-->
          <NuxtLink to="https://www.linkedin.com/in/daniel-dawes/" target="_blank" class="font-medium font-body flex items-center transition-transform hover:-translate-y-1"><Icon class="mr-1" name="pixelarticons:external-link" size="1.2em"/> LinkedIn</NuxtLink>
        </div>

      </div>

        <div class="bg-amber-200 row-span-1 rounded-xl p-4 space-y-4 flex flex-col justify-between">
          <Icon name="pixelarticons:message-text" size="2.2em"/>
          <div class="font-display uppercase text-2xl">Get in touch</div>
          <NuxtLink to="mailto:danieldawes@protonmail.com" class="font-medium font-body flex items-center transition-transform hover:-translate-y-1"><Icon class="mr-1" name="pixelarticons:mail" size="1.2em"/> Email</NuxtLink>
        </div>
      <a href="#top" class="bg-indigo-200 row-span-1 rounded-xl p-4 space-y-4 flex justify-between items-end">
        <div class="font-display uppercase text-2xl">It's nice up north</div>
        <Icon class="animate-bounce-slow" name="pixelarticons:arrow-up" size="2.6em" />
      </a>
    </div>
  </footer>

</template>

