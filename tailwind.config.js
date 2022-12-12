/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["'Pacifico', cursive"],
      },
      animation: {
        'bounce-fast': 'bounce .5s linear infinite',
      },
      boxShadow: {
        focus: '0 0 0 .2rem rgba(255, 255, 255, .2)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
