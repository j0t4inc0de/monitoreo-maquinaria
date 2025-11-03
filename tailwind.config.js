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
        primary: "#15595A",
        "background-light": "#f6f8f8",
        "background-dark": "#131f1f"
    },
  },
 },
 plugins: [],
}