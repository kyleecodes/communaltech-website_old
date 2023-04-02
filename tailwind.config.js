const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lexend Tera', ...defaultTheme.fontFamily.sans],
        'robotoMono': ['Roboto\\ Mono']
      },
      screens: {
        '3xl': '2190',
        '4xl': "2625px",
      },
    },
  },
  plugins: [],
}

