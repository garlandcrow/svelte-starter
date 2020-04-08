<script>
  export let name
</script>

<main>
  <h1 class="global-h1">Hello {name}!</h1>
  <p on:click={() => (name = 'Tom')} class="paragraph bg-gray-300">
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to lear how to uil Svelte apps.
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
