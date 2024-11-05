/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        md: '12px', // Adjust this value for the desired blur effect
      },
      colors: {
        bgcolor: '#dee2e6',
        textcolor: '#3a0ca3',
        accent: '#343a40',
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}
