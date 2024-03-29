const plugin = require('tailwindcss/plugin');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,mdx}'],
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
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      },
      screens: {
        '3xl': '1920px',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        shimmer: 'shimmer 5.0s linear infinite',
        shimmerSlow: 'shimmer 10.0s linear infinite',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        scroll: 'scroll 35s linear infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        spinSlow: 'spin 3s linear infinite',
        // https://github.com/WilderDev/learnly-app/blob/main/tailwind.config.js
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-468px 0',
          },
          '100%': {
            backgroundPosition: '468px 0',
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        scroll: {
          from: {
            transform: 'translateX(0%)',
          },
          to: {
            transform: 'translateX(calc(-100% - 64px))',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
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
    plugin(({ addVariant, e }) => {
      addVariant('peer', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`peer${separator}${className}`)}:hover, .${e(
            `peer${separator}${className}`,
          )}:focus, .${e(`peer${separator}${className}`)}:active, .${e(
            `peer${separator}${className}`,
          )}:visited`;
        });
      });
    }),
  ],
};
