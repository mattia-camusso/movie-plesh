/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'
export default {
  content: [
    './index.html',
    './src/**/*.vue',
    './src/*.vue',
    './views/**/*.vue',
    './components/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        c: {
          1: '#f1faee',
          2: '#0d1b2a',
          3: '#14213d',
          4: '#d90429'
        }
      },
      screens: {
        tall: { raw: '(min-height: 740px)' },
        '3xl': '2000px'
        // => @media (min-height: 800px) { ... }
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: 'var(--font-serif)'
      },
      letterSpacing: {
        tagline: '.15em'
      },
      spacing: {
        0.25: '0.0625rem',
        7.5: '1.875rem',
        15: '3.75rem'
      },
      opacity: {
        15: '.15'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'linear'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5'
      },
      borderWidth: {
        DEFAULT: '0.0625rem'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'conic-gradient': 'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)'
      }
    }
  },
  plugins: []
}
