/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:['Lato', 'sans'],
        ondo:['Ondo', 'sans']
      }
    },
  },
  plugins: [],
}