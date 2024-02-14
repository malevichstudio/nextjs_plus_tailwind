/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1960px',
    },
    container: {
      padding: {
        DEFAULT: '1rem', // 16px
        md: '1.5rem', // 24px
        xl: '2rem',
      },
    },
    extend: {
      colors: {
        primary: colors.cyan[500],
        primaryHover: colors.cyan[600],
        link: colors.blue[500],
        linkHover: colors.blue[700],
        error: colors.red[500],
      },
    },
  },
  plugins: [],
};
