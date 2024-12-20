/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '50%': {
            transform: 'translate3d(0, -20px, 0)'
          },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
