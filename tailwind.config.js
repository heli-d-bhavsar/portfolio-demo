/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        navbar: 'var(--navbar)',
        background: 'var(--bgColor)',
        mainText: 'var(--main-text)',
        button: 'var(--button)',
        footer: 'var(--footer)',
        copyright: 'var(--copyright)',
        socialMedia: 'var(--social-media)',
        orange: 'var(--orange)',
        'c-orange': {
          50: '#ffefe6',
          100: '#ffcfb0',
          200: '#ffb78a',
          300: '#ff9654',
          400: '#ff8233',
          500: '#ff6300',
          600: '#e85a00',
          700: '#b54600',
          800: '#8c3600',
          900: '#6b2a00',
        },
        'c-black': {
          50: '#e6e6e6',
          100: '#b0b0b0',
          200: '#8a8a8a',
          300: '#545454',
          400: '#333333',
          500: '#000000',
        },
      },
    },
  },
  plugins: [],
};
