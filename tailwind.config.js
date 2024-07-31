/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      "color-primary": "#EDD5F5",
      "color-text": "#fff",
      "bg-color": "#653275",
      "aux-color": "#3D144B",
    },

    extend: {
      fontFamily: {
        "julius-one": ["Julius Sans One", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
