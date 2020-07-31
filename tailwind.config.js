// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontSize: {
        '8xl': '9rem',
      },
      maxWidth: {
        'screen-2xl': '1400px',
      },
      colors: {
        primary: {
          default: '#11B3BA',
          dark: '#0B7277',
          darker: '#1B3536'
        }
      },
      opacity: { 
        '10': '.10'
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
