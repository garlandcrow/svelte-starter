<script>
  import { createEventDispatcher } from 'svelte'

  export let text = ''

  const dispatch = createEventDispatcher()

  function onClick(event) {
    dispatch('click', event)
  }
</script>

<button class="button bg-blue-700" on:click={onClick}>{text}</button>

<style>
  .button {
    @apply text-white rounded px-2 py-1;
  }
</style>
