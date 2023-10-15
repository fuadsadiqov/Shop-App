/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{html,ts}",
        "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        '--primary-green': '#1A5221',
        '--primary-yellow': '#FFBF00'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}