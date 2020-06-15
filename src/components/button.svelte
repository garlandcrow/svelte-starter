<script>
  import { createEventDispatcher } from 'svelte'

  export let text = ''

  const dispatch = createEventDispatcher()

  function onClick(event) {
    dispatch('click', event)
  }
</script>

<button class="button border border-gray-500" on:click={onClick}>{text}</button>

<style>
  .button {
    @apply text-blue-300 rounded px-2 py-1;
  }
</style>
