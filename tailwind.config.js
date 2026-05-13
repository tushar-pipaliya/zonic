/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ખાતરી કરો કે આ લાઈન લખેલી છે
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#b18b5e',
      },
    },
  },
  plugins: [],
}