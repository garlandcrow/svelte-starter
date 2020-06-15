<script>
  import Tailwind from './Tailwind.svelte'

  export let name
</script>

<Tailwind />

<main>
  <h1 class="global-h1">Hello {name}!</h1>
  <p on:click={() => (name = 'Tom')} class="paragraph bg-gray-300">
    Visit the Svelte tutorial to hear how to uil Svelte apps.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .paragraph {
    @apply p-2;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
