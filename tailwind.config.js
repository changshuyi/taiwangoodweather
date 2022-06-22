const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        darkblue: '#1E213A',
        gray: {
          150: '#E7E7EB',
          250: '#A09FB1',
          350: '#88869D',
        },
      },
    },
  },
  plugins: [],
});
