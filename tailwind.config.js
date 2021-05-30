module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontWeight: ['hover', 'focus']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
