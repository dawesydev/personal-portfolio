/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Anton', 'ui-sans-serif', 'system-ui'],
                body: ['General Sans', 'ui-monospace', 'system-ui'],
                marker: ['Permanent Marker', 'ui-sans-serif', 'system-ui'],
                sans: ['"Stara"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                parchment: 'hsl(0deg 0% 92%)',
                noir: '#10100e',
                berlin: '#307be2',
                tangerine: 'rgb(252, 52, 0)',
            },
            keyframes: {
                spinSlow: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                'spin-slow': 'spin 4s linear infinite',
            },
        },
    },
    plugins: [],
}
