# Description

Starter template for Svelte w/ HMR, Smelte, Tailwindcss, and Postcss.

## Caveats

- HMR doesn't work with CSS so you need to run `yarn build` initially to generate the `global.css` file (tailwind styles) and `bundle.css` (svlete `:global` styles) and again if you change anything with the tailwind config or add/change a `:global` style.

- Because of the CSS issues, you have to store any global styles in a svelte file and import it. `Styles.svlete` is doing this and imported from `main.js`.
