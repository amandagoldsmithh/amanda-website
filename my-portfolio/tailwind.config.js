const colors = require('tailwindcss/colors')
module.exports = {
  
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      teal: colors.teal,
      blue:colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      emerald: colors.emerald,
      black: colors.black,
      yellow:colors.yellow,
      indigo:colors.indigo,
      violet: colors.violet,
      red:colors.rose,
      green:colors.green,
      gray:colors.trueGray,

    },
    },
    extend: {},
    
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}