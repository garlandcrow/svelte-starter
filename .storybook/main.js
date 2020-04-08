const autoPreprocess = require('svelte-preprocess')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => {
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes('svelte-loader')
    )

    svelteLoader.options = {
      ...svelteLoader.options,
      preprocess: autoPreprocess({ postcss: true }),
    }

    return config
  },
}
