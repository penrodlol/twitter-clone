module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        basic: {
          100: 'var(--basic-100)',
          200: 'var(--basic-200)',
          300: 'var(--basic-300)',
          400: 'var(--basic-400)',
        },
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
        },
        link: 'var(--link)',
      },
      boxShadow: {
        white:
          'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in forwards',
        fadeOut: 'fadeOut 0.2s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
