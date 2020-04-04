<script>
  export let name;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p on:click={() => (name = 'Tom')} class="bg-gray-300 ">
    Visit th
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to lear how to uil Svelte apps.
  </p>
</main>
