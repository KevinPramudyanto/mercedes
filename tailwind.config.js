/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        lightyellow: "#E1A520",
        darkyellow: "#C18500",
        darkbrown: "#5F4112",
        lightbrown: "#695E3E",
        lightgray: "#656F80",
        darkgray: "#262A31",
      },
    },
  },
  plugins: [],
};
