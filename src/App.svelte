<script lang="ts">
  import Tabs from './components/tabs.svelte';
</script>

<style lang="scss">
  :global(body) {
    background-color: rgb(43, 41, 41);
    color: #fff;
  }
  :global(button) {
    cursor: pointer;
  }
  :global(.output) {
    background-color: rgb(57, 55, 55);
    padding: 10px;
  }
  :global(div) {
    padding: 10px 0px;
  }

  main {
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
  <Tabs />
</main>
