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
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
