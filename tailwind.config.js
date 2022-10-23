/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      // ...
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "sans" : ["Montserrat","sans-serif"],
      },
      dropShadow: {
        '3xl': '30px 0px 35px rgba(0, 0, 0, 0.25)',

      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
