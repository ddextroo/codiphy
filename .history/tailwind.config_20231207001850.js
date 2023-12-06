const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],

      },
      colors: {
        'primaryDark': '#1F1C18',
        'colorAccent': '#8E0E00',
        'white': '#4AE290',
      },
    },
  },
  plugins: [],
});