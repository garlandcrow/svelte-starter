module.exports = {
  purge: ['./src/**/*.svelte'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffaf0',
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#fb8100',
          600: '#dd6b20',
          700: '#ed5d27',
          800: '#9c4221',
          900: '#7b341e',
        },
        red: {
          100: '#fff5f5',
          200: '#fed7d7',
          300: '#feb2b2',
          400: '#fc8181',
          500: '#f56565',
          600: '#e53e3e',
          700: '#c53030',
          800: '#9b2c2c',
          900: '#742a2a',
        },
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        108: '24rem',
        120: '28rem',
        192: '48rem',
        '1/2': '50%',
      },
    },
  },
  variants: {
    textColor: ['hover'],
  },
  plugins: [require('@tailwindcss/ui')],
}
