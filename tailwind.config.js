module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      colors: {
        'prussian-blue': {
          DEFAULT: '#0D2538',
        },
        'rich-black': {
          DEFAULT: '#091a28',
        },
      },
    },
    minHeight: {
      12: '3rem',
      16: '4rem',
    },
    minWidth: {
      12: '3rem',
      16: '4rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
