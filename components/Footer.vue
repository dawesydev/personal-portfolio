<script setup>

</script>

<template>
  <footer id="about" class="p-4 md:p-8 max-w-full">
    <div class="h-11/12 flex flex-col xl:grid xl:grid-cols-4 xl:grid-rows-3 xl:gap-8">

      <!--      about-->
      <div class="flex flex-col sm:flex-row bg-parchment rounded-xl p-4 lg:col-start-1 lg:col-span-3 lg:row-span-2 justify-between">
        <div class="sm:w-1/2 w-1/3 text-noir font-display text-5xl font-black uppercase tracking-wide leading-none md:text-7xl lg:w-1/3">
          <span class="text-emerald-400 font-marker">frontend developer</span>
          based remotely within Europe.
        </div>
        <div class="sm:w-1/3 w-4/5 sm:mt-0 mt-4 flex flex-col md:text-end font-body font-medium text-md text-noir sm:text-xl space-y-4">
          <div>I'm a self-taught frontend developer living in the UK with my partner and miniature dachshund.</div>
          <div>Outside of software development, I'm a skier and chef. One of my top near-term goals is to teach myself animation and build more interactive websites using GSAP.</div>
        </div>
      </div>

      <!--      tech locker-->
      <div class="xl:mt-0 mt-4 md:mt-8 border border-parchment text-parchment row-span-2 rounded-xl p-4 flex flex-col justify-between lg:col-start-4 lg:row-span-3 lg:text-xl space-y-6">
        <Icon name="pixelarticons:lock-open" size="2.4em"/>
        <div class="font-display uppercase text-3xl md:text-5xl"><span class="font-marker text-emerald-400">My</span> <br /> tech locker</div>
          <p class="font-body font-medium text-lg">Here are a few technologies I’ve been working with recently:</p>
        <div class="flex w-full justify-around text-sm font-body font-medium lg:w-full">
          <div class="list-inside lg:text-sm space-y-2">
            <Tag skill="Javascript (ES6+)" />
            <Tag skill="Vue & Nuxt" />
            <Tag skill="React" />
            <Tag skill="TailwindCSS" />
          </div>
          <div class="list-inside lg:text-sm space-y-2">
            <Tag skill="Astro" />
            <Tag skill="TypeScript" />
            <Tag skill="Node.js" />
            <Tag skill="Express" />
          </div>
        </div>

      </div>

      <!--      socials-->
      <div class="xl:mt-0 mt-4 md:mt-8 border border-parchment text-parchment row-span-1 rounded-xl p-4 space-y-4 flex flex-col justify-between">
        <Icon name="pixelarticons:at" size="2.2em"/>
        <div class="font-display uppercase text-2xl">let's connect</div>
        <div class="flex space-x-2">
          <NuxtLink to="https://github.com/dawesydev" target="_blank" class="font-medium font-body flex items-center transition-transform hover:-translate-y-1"><Icon class="mr-1" name="pixelarticons:external-link" size="1.2em"/> GitHub</NuxtLink>
          <NuxtLink to="https://codepen.io/dawesydev" target="_blank" class="font-medium font-body flex items-center transition-transform hover:-translate-y-1"><Icon class="mr-1" name="pixelarticons:external-link" size="1.2em"/> CodePen</NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/daniel-dawes/" target="_blank" class="font-medium font-body flex items-center transition-transform hover:-translate-y-1"><Icon class="mr-1" name="pixelarticons:external-link" size="1.2em"/> LinkedIn</NuxtLink>
        </div>
      </div>

      <!--      contact-->
        <div class="xl:mt-0 mt-4 md:mt-8 border border-parchment text-parchment row-span-1 rounded-xl p-4 space-y-4 flex flex-col justify-between">
          <Icon name="pixelarticons:message-text" size="2.2em"/>
          <div class="font-display uppercase text-2xl">Get in touch</div>
          <NuxtLink to="mailto:danieldawes@protonmail.com" class="font-medium font-body flex items-center transition-transform hover:-translate-y-1"><Icon class="mr-1" name="pixelarticons:mail" size="1.2em"/>danieldawes@protonmail.com</NuxtLink>
        </div>

      <!--      return to top button-->
      <NuxtLink to="#top" class="xl:mt-0 mt-4 md:mt-8 border border-parchment text-parchment row-span-1 rounded-xl p-4 space-y-4 flex justify-between items-end">
        <div class="font-display uppercase text-2xl">It's nice <br/> <span class="font-marker text-emerald-400 text-4xl">up north</span></div>
        <Icon class="animate-bounce-slow" name="pixelarticons:arrow-up" size="2.6em" />
      </NuxtLink>

    </div>
  </footer>

</template>

