const plugin = require('tailwindcss/plugin');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/features/**/*.{ts,tsx}',
    './src/lib/utils/enumColors.ts',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E7E9EF',
          100: '#E5E7EB',
          200: '#A3ADC2',
          300: '#697A9B',
          400: '#3D4E75',
          500: '#384766',
          600: '#313E59',
          700: '#26334D',
          800: '#202B40',
          900: '#192132',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-baskervville)', ...fontFamily.serif],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(({ addVariant }) => addVariant('hocus', ['&:hover', '&:focus'])),
    plugin(({ addVariant }) => addVariant('around', ['&:before', '&:after'])),
    plugin(({ addVariant }) => addVariant('peer', ['&:hover', '&:focus'])),
  ],
};
