/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          '0%': {width: '0', height: '0'},
          '50%': {height: '15rem'},
          '100%': {width: '8rem'}
        }
      },
      animation: {
        dropdown: 'dropdown 0.2s ease-in-out'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
