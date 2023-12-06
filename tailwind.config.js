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
        'primaryDark': '#3A3A3A',
        'primaryLight': '#FEFEFE',
        'colorAccent': '#8E0E00',
        'gray': '#9E9E9E',
      },
    },
  },
  plugins: [],
});