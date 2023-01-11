<template>
  <div>
    <slot />
    <Divider title="Recent projects" />

    <div class="flex flex-col px-4 md:px-8 xl:hidden">
      <Project class="mt-4 md:mt-8"
               title="Crypto Dashboard"
               :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
               description="Web app built using Vue and Nuxt which can be used to visualize real-time crypto stocks and individual coin profiles."
               github="https://github.com/dawesydev/crypto-dashboard"
               demo="https://chic-cat-1ea4ea.netlify.app/"
               background="bg-gradient-to-br from-sky-500 to-indigo-500"
      />
      <Project class="mt-4 md:mt-8"
               title="Colourful Cities"
               :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
               description="Creative web app built using React which promotes the ‘LOST iN’ city guide book series."
               github="https://github.com/dawesydev/crypto-dashboard"
               demo="https://chic-cat-1ea4ea.netlify.app/"
               background="bg-amber-400"
      />
      <Project class="mt-4 md:mt-8"
               title="Pizza Pockets"
               :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
               description="Feature rich web app built using Vue & Nuxt with online menu complete with order system and checkout."
               github="https://github.com/dawesydev/crypto-dashboard"
               demo="https://chic-cat-1ea4ea.netlify.app/"
               background="bg-red-400"
      />
    </div>

    <div class="hidden xl:visible xl:grid grid-cols-3 w-full">
      <Project class="col-start-1 pl-4 md:pl-8 pt-4 md:pt-8 pr-2 md:pr-4"
               title="Crypto Dashboard"
               :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
               description="Web app built using Vue and Nuxt which can be used to visualize real-time crypto stocks and individual coin profiles."
               github="https://github.com/dawesydev/crypto-dashboard"
               demo="https://chic-cat-1ea4ea.netlify.app/"
               background="bg-gradient-to-br from-sky-500 to-indigo-500"
      />
      <Project class="col-start-2 pt-4 md:pt-8 px-2 md:px-4"
               title="Colourful Cities"
               :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
               description="Creative web app built using React which promotes the ‘LOST iN’ city guide book series."
               github="https://github.com/dawesydev/crypto-dashboard"
               demo="https://chic-cat-1ea4ea.netlify.app/"
               background="bg-amber-400"
      />
      <Project class="col-start-3 pr-4 md:pr-8 pt-4 md:pt-8 pl-2 md:pl-4"
               title="Pizza Pockets"
               :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
               description="Feature rich web app built using Vue & Nuxt with online menu complete with order system and checkout."
               github="https://github.com/dawesydev/crypto-dashboard"
               demo="https://chic-cat-1ea4ea.netlify.app/"
               background="bg-red-400"
      />
    </div>
    <Footer />
  </div>
</template>

<script>


</script>

<style scoped>

</style>
