/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min':'340px','max':'639px'},
      },
      fontFamily: {
        sans: ['Afacad Flux', 'sans-serif'],
      },
    },
  },
  plugins: [],
}