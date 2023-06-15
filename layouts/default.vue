<script setup></script>

<template>
  <div>
    <slot />

    <div class="h-[95vh]">
      <Divider id="projects" title="Recent projects" class="h-1/6" />

      <!--    for small screens-->

      <div class="flex flex-col px-4 md:px-8 xl:hidden">
        <Project
          class="mt-4 md:mt-8 h-1/3"
          title="Crypto52"
          :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
          description="An app built for crypto enthusiasts to visualize real-time stocks and track coin data."
          github="https://github.com/dawesydev/crypto-dashboard"
          demo="https://chic-cat-1ea4ea.netlify.app/"
          background="bg-gradient-to-br from-sky-500 to-indigo-500"
        />
        <Project
          class="mt-4 md:mt-8 h-1/3"
          title="Colourful Cities"
          :tags="['React', 'TailwindCSS']"
          description="A creative app which promotes the ‘LOST iN’ city guide book series."
          github="https://github.com/dawesydev/colourful-cities"
          demo="https://clever-llama-27c474.netlify.app/"
          background="bg-amber-400"
        />
        <Project
          class="mt-4 md:mt-8 h-1/3"
          title="Pouch Pizza"
          :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
          description="A fun pizzeria app, full of cool features including an interactive menu, order system and checkout."
          github="https://github.com/dawesydev/pouch-pizza"
          demo="https://pouch-pizza.vercel.app/"
          background="bg-red-400"
        />
      </div>

      <!--    for large screens-->

      <div class="hidden xl:visible xl:grid xl:grid-cols-3 h-5/6">
        <Project
          class="col-start-1 pl-4 md:pl-8 pt-4 md:pt-8 pr-2 md:pr-4"
          title="Pouch Pizza"
          :tags="['Vue', 'Nuxt 3', 'TailwindCSS']"
          description="A fun pizzeria app, full of cool features including an interactive menu, order system and checkout."
          github="https://github.com/dawesydev/pouch-pizza"
          demo="https://pouch-pizza.vercel.app/"
          background="bg-[#fefce8]"
        >
          <img
            src="../assets/images/PIZZA.svg"
            width="400"
            height="400"
            class="absolute top-48 left-16 z-50"
          />
        </Project>
        <Project
          class="col-start-2 pt-4 md:pt-8 px-2 md:px-4"
          title="Hooge Boards"
          :tags="['React', 'TailwindCSS']"
          description="An eCommerce app promoting HOOGE, the next best Skateboard & Snowboard brand."
          github="https://github.com/dawesydev/hooge"
          demo="https://hooge.vercel.app/"
          background="bg-[#f4f4f4]"
        >
          <img
            src="../assets/images/HOOGE.png"
            width="400"
            height="400"
            class="absolute top-20 left-20 z-50"
          />
        </Project>
        <Project
          class="col-start-3 pr-4 md:pr-8 pt-4 md:pt-8 pl-2 md:pl-4"
          title="Colourful cities"
          :tags="['React', 'TailwindCSS']"
          description="Creative web app built using React which promotes the ‘LOST iN’ city guide book series."
          github="https://github.com/dawesydev/colourful-cities"
          demo="https://clever-llama-27c474.netlify.app/"
          background="bg-[#ff7f76]"
        >
          <img
            src="../assets/images/COLCIT.png"
            width="400"
            height="400"
            class="absolute top-10 left-16 z-50"
          />
        </Project>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
