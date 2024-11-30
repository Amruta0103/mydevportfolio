/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,,png,jpg,jpeg,mp4,svg}"],
  theme: {
    screens:{
      'xs': '425px',
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1441px',
    },
    fontFamily:{
      fontlaila: ["Laila", 'serif'],
      fontRale: ["Raleway", 'sans-serif'],
      fontJose: ["Josefin", 'sans-serif'],
      fontJetMono: ["JetBrains Mono", 'monospace'],
      // 
      fontCherry: ["Cherry Swash", 'system-ui'],
      fontMeta: ["Metamorphous", 'serif'],
      fontLemon: ["Lemon",'serif'],
      fontAmita: ["Amita", 'serif'],
      fontSpicyRice: ["Spice Rice", 'serif'],
      fontLumino: ["Lumanosimo", 'cursive'],
      fontMerri: ["Merriweather", 'serif'],
    },
    backgroundSize:{
      '50%': '50%',
    },
    extend:{
      backgroundImage:{
        "base-gradient": 'linear-gradient(90deg, rgba(153, 255, 193, 0.7) 0%, rgba(255, 245, 153, 0.7) 50%, rgba(255, 153, 160, 0.7) 100%)',
        'screens': "url('/src/assets/screens.mp4')",
      },
      borderColor:{
        "border-gradient": 'backgroundImage:linear-gradient(90deg, rgba(153, 255, 193, 0.7) 0%, rgba(255, 245, 153, 0.7) 50%, rgba(255, 153, 160, 0.7) 100%)',
        "bord":'green',
        "main-grad": 'var(--main-gradient)',
      },
      colors:{
        "greyBlack" : "#000000b2"
      },
    }
  },
  plugins: [],
}
