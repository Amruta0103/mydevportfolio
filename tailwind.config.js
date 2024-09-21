/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,webp,png,jpg,jpeg,svg}"],
  theme: {
    extend:{
      cursor:{
        'ship': "url('./src/assets/logo512.png')"
      },
    },
  },
  plugins: [],
}

