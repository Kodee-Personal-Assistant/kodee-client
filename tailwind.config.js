import colors from "tailwindcss/colors";

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
};