<script setup></script>

<template>
  <footer id="about" class="p-4 md:p-8 max-w-full">
    <div
      class="h-[95vh] flex flex-col xl:grid xl:grid-cols-3 xl:grid-rows-5 xl:gap-8"
    >
      <!--      about-->
      <div
        class="flex flex-col border border-parchment bg-parchment rounded-xl p-8 lg:col-start-1 lg:col-span-2 lg:row-span-3 justify-center space-y-12 relative"
      >
        <a
          href="#"
          class="absolute top-6 right-6 bg-[#e3c902] p-4 rounded-full hover:bg-noir hover:text-[#e3c902]"
          ><Icon name="mingcute:arrow-up-fill" size="2.2rem"
        /></a>
        <div>
          <h2 class="text-[#e3c902] font-marker text-6xl">
            front-end engineer
          </h2>

          <h3 class="text-7xl -skew-y-1 font-display uppercase mt-2">
            based in London, UK.
          </h3>
        </div>

        <div
          class="font-body font-normal text-xl text-noir w-2/3 mt-8 flex flex-col"
        >
          <span
            >A software developer, who loves to build engaging UIs using the
            latest frontend technologies. I collaborate with UX/UI designers to
            bring their visions to life and ensure that every pixel is
            on-point.</span
          >
        </div>
      </div>

      <!--      tech locker-->
      <div
        class="xl:mt-0 mt-4 md:mt-8 border border-parchment text-parchment row-span-2 rounded-xl p-8 flex flex-col justify-between text-center lg:col-start-3 lg:row-span-5 lg:text-xl space-y-12"
      >
        <div class="mt-20">
          <div
            class="font-display uppercase text-3xl md:text-5xl flex flex-col space-y-2"
          >
            <span class="font-marker text-[#e3c902]">What's in my</span> <br />
            <span class="-skew-y-1 text-6xl">tech locker?</span>
          </div>
          <p class="font-body font-normal text-2xl mt-12">
            Here are a few technologies I’ve been working with recently:
          </p>
        </div>
        <div
          class="flex gap-4 w-full justify-around text-sm font-body font-medium"
        >
          <div class="list-inside lg:text-xl space-y-6 w-1/2">
            <Tag skill="Javascript (ES6+)" />
            <Tag skill="TypeScript" />
            <Tag skill="React" />
            <Tag skill="Next.js" />
            <Tag skill="TailwindCSS" />
          </div>
          <div class="list-inside lg:text-xl space-y-6 w-1/2">
            <Tag skill="Vue" />
            <Tag skill="Git" />
            <Tag skill="HTML" />
            <Tag skill="CSS & Sass" />
            <Tag skill="Vite" />
          </div>
        </div>
      </div>

      <!--      socials-->
      <div
        class="xl:mt-0 mt-4 md:mt-8 border border-parchment text-parchment row-span-1 rounded-xl p-8 space-y-4 flex flex-col justify-between lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-4 relative"
      >
        <Icon name="tabler:at" size="3em" class="absolute top-6 right-6" />
        <div class="invisible">empty</div>
        <div class="invisible">empty</div>
        <div class="font-display uppercase text-5xl tracking-wide">
          let's connect
        </div>

        <div class="flex flex-col space-y-3">
          <NuxtLink
            to="https://github.com/dawesydev"
            class="font-medium text-lg font-body flex items-center transition-transform hover:text-[#e3c902] w-fit"
            ><Icon
              class="mr-2"
              name="mingcute:github-line"
              size="1.2em"
            />GitHub</NuxtLink
          >
          <NuxtLink
            to="mailto:danieldawes@protonmail.com"
            class="font-medium text-lg font-body flex items-center transition-transform hover:text-[#e3c902] w-fit"
            ><Icon
              class="mr-2"
              name="ion:logo-linkedin"
              size="1.2em"
            />LinkedIn</NuxtLink
          >
        </div>
      </div>

      <!--      contact-->
      <div
        class="xl:mt-0 mt-4 md:mt-8 border border-parchment text-parchment row-span-1 rounded-xl p-8 space-y-4 flex flex-col justify-between lg:row-span-2 lg:row-start-4 lg:col-span-1 lg:col-start-2 relative"
      >
        <Icon
          name="mingcute:message-4-line"
          size="3em"
          class="absolute top-6 right-6"
        />
        <div class="invisible">empty</div>
        <div class="invisible">empty</div>
        <div class="font-display uppercase text-5xl tracking-wide">
          Get in touch
        </div>
        <div class="flex flex-col space-y-3">
          <NuxtLink
            to="tel:+447823543120"
            class="font-medium text-lg font-body flex items-center transition-transform hover:text-[#e3c902] w-fit"
            ><Icon class="mr-2" name="mingcute:phone-fill" size="1.2em" />+44
            (0) 7823 543120</NuxtLink
          >
          <NuxtLink
            to="mailto:danieldawes@protonmail.com"
            class="font-medium text-lg font-body flex items-center transition-transform hover:text-[#e3c902] w-fit"
            ><Icon
              class="mr-2"
              name="mingcute:mail-fill"
              size="1.2em"
            />danieldawes@protonmail.com</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>
