<template>
  <div>
    <slot />
    <Divider title="Recent projects"
    />
    <div class="xl:grid grid-cols-3 w-full">
      <Project class="col-start-1"
               title="Crypto Dashboard"
               :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facilis id modi officiis perferendis quidem quisquam sequi voluptates."
               github="https://github.com/dawesydev/crypto-dashboard"
               demo="https://chic-cat-1ea4ea.netlify.app/"
               background="bg-gradient-to-br from-sky-500 to-indigo-500"
      />
      <Project class="col-start-2"
               title="Colourful Cities"
               :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facilis id modi officiis perferendis quidem quisquam sequi voluptates."
               github="https://github.com/dawesydev/crypto-dashboard"
               demo="https://chic-cat-1ea4ea.netlify.app/"
               background="bg-amber-400"
      />
      <Project class="col-start-3"
               title="Pizza Pockets"
               :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facilis id modi officiis perferendis quidem quisquam sequi voluptates."
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
