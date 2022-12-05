<template>
  <div>
    <slot />
    <footer class="h-11/12 p-8 overflow-y-hidden">
      <div class="grid grid-rows-6 gap-4 w-full lg:grid-cols-4 lg:grid-rows-3">
        <div class="flex row-span-2 bg-berlin rounded-xl p-4 lg:col-start-1 lg:col-span-3 lg:row-span-2">
          <div class="w-1/2 text-noir font-display text-2xl font-black uppercase tracking-wide">I'm Dan, a <span class="text-parchment">frontend developer</span> based remotely within <span class="text-4xl">Europe.</span></div>
          <div class="w-1/2 font-body font-medium text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cum facilis ipsum saepe tempore veniam. Ad alias amet qui tempore unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, autem est eum incidunt itaque laborum officia provident qui rerum similique. Aliquam dolor itaque omni.</div>
        </div>
        <div class="bg-emerald-200 row-span-2 rounded-xl p-4 flex flex-col justify-between lg:col-start-4 lg:row-span-3">
          <Icon name="pixelarticons:coffee-alt" size="2.4em"/>
          <div class="font-display uppercase text-3xl">tech locker</div>
          <p class="font-body font-medium text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque eos esse itaque odio officia sequi! Ab ad amet aspernatur consequuntur enim est illo molestiae? Culpa ea repellendus reprehenderit sit!</p>
          <div class="flex w-2/3 justify-between text-sm font-body font-medium">
            <ul class="list-disc list-inside">
              <li>JavaScript (ES6+)</li>
              <li>Vue</li>
              <li>Nuxt 2 & 3</li>
            </ul>
            <ul class="list-disc list-inside">
              <li>Node.js</li>
              <li>Express</li>
              <li>TailwindCSS</li>
            </ul>
          </div>

        </div>
        <div class="bg-amber-200 row-span-1 rounded-xl p-4 space-y-4">
          <Icon name="pixelarticons:message-text" size="2.2em"/>
          <div class="font-display uppercase text-2xl">Get in touch</div>
          <p class="font-medium fon">hello@danieldawes.com</p>
        </div>
        <a href="#top" class="bg-indigo-200 row-span-1 rounded-xl p-4 space-y-4 flex justify-between items-end">
            <div class="font-display uppercase text-2xl">It's nice up north</div>
            <Icon name="pixelarticons:arrow-up" size="2.6em" />
        </a>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>