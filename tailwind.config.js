module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},

    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
