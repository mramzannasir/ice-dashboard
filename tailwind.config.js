/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xxl': '1400px',
      '2xl': '1536px',
      '3xl': '1800px',
      '5xl': '2400px',

    },
    colors: {
      blue: '#2594F1',
      lightblue: "#3399cc26",
      light: "#F9F9F9",
      borderwhite: "#E7E7E7",
      slate: "#97AFC2",
      lightblack: "#939393",
      white: "#ffffff"
    },
  },
  plugins: [],
}