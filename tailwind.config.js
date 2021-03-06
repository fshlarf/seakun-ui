const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tn: '0px',
      ...defaultTheme.screens,
    },
    
    extend: {
      colors : {
        'green-seakun' : '#8DCABE',
        'green-seakun-secondary' : '#F4F9F8',
        'green-seakun-dark' : '#52AF9C'

      }
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen tn': {
            maxWidth: '400px',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
          },
          '@screen sm': {
            maxWidth: '640px',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
          '@screen md': {
            maxWidth: '768px',
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen lg': {
            maxWidth: '1024px',
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen xl': {
            maxWidth: '1440px',
            paddingLeft: '10rem',
            paddingRight: '10rem',
          },
        },
        '.bg-primary': {
          backgroundColor: '#86d0c1',
        },
      });
    },
  ],
};
