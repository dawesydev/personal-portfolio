// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Daniel Dawes | Frontend Developer",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: "description",
          content:
            "Daniel Dawes is a freelance web developer. Bringing ideas to life through code.",
        },
      ],
    },
  },
  modules: ["nuxt-icon", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
