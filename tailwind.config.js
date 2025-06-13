/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fefdf8',
          100: '#fdf9e7',
          200: '#fbf2c4',
          300: '#f7e896',
          400: '#f2d866',
          500: '#ecc344',
          600: '#d1a73b',
          700: '#ae8532',
          800: '#8d6a2e',
          900: '#745529',
        },
        cream: {
          50: '#fefdfb',
          100: '#fefcf6',
          200: '#fcf8e8',
          300: '#f9f2d4',
          400: '#f5eab8',
          500: '#f0e199',
          600: '#e8d474',
          700: '#dcc24f',
          800: '#c9a83b',
          900: '#a18529',
        },
        sage: {
          50: '#f6f8f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#9fb49f',
          400: '#7a947a',
          500: '#5e7a5e',
          600: '#4a614a',
          700: '#3d4f3d',
          800: '#344034',
          900: '#2d362d',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};