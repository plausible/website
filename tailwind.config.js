module.exports = {
  theme: {
    extend: {
      spacing: {
        120: '28rem',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    typography: {
      default: {
        css: {
          color: '#333',
          pre: {
            backgroundColor: null,
            color: null
          },
          a: {
            color: '#3182ce',
            '&:hover': {
              color: '#2c5282',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography')
  ],
}
