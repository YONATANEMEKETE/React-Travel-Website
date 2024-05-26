/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        n: {
          1: '#000000',
          2: '#ffffff',
          3: '#757185',
          4: '#454346',
        },
      },

      fontFamily: {
        first: 'var(--font-first)',
        second: 'var(--second-font)',
      },
    },
  },
  plugins: [],
};
