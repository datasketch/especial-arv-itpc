module.exports = {
  purge: ['./layouts/*.html', './layouts/**/*.html'],
  theme: {
    extend: {
      colors: {
        'baby-powder': '#FEFCF8',
        'bottle-green': '#1E6356',
        'charleston-green': '#222526',
        'cosmic-latte': '#FDF6E7',
        'orange-soda': '#E85736',
        'orange-yellow': '#FCC22D',
        alabaster: '#F4EDE4',
        fulvous: '#E28A00',
      },
      fontFamily: {
        'source-serif': ['"Source Serif Pro"', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [],
}
