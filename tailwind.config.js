/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
 ],
 darkMode: "class",
 theme: {
  extend: {
    colors: {
        primary: {
          300: '#65e3d9',
          400: '#36cbc5',
          500: '#1dafab',
          600: '#148d8c',
          700: '#147170',
          800: '#15595a',
          900: '#164b4b',
        },
    },
  },
 },
 plugins: [],
}