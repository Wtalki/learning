/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Overwrite default colors
        btnColor: '#a8ff53',
        backgroundColor: '#121317',
        textColor: '#d7d9dd',
        textMuteColor:'#878c99',
      },
    },
  },
  plugins: [],
};