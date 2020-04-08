const production = false // !process.env.ROLLUP_WATCH

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.svelte'],

  whitelistPatterns: [/svelte-/, /ripple/],

  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer'), ...(production ? [purgecss] : [])],
}
