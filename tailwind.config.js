/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html,ts,jsx,tsx}"],
  variants: {},
  extend: {},
  plugins: [
      require('postcss-import'),
      require('@tailwindcss/nesting'),
      require('tailwindcss'),
      require('autoprefixer'),
  ]
}