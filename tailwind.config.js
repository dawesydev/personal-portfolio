/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Anton', 'ui-sans-serif', 'system-ui'],
        'body': ['General Sans', 'ui-monospace', 'system-ui'],
      },
      colors: {
        'parchment': '#ffffe3',
        'noir': '#10100e',
        'berlin': '#307be2',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'bounce-once': 'bounce 1s',
      }
    },
  },
  plugins: [],
}
