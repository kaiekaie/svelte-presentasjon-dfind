<script lang="ts">
  import Prism from 'prismjs';
  import 'prism-svelte';

  export let codeData = [];

  let highlight = [];
  if (codeData.length > 0) {
    highlight = codeData.map((e) => Prism.highlight(e, Prism.languages.svelte, 'svelte'));
  }
</script>

<style lang="scss">
  pre {
    padding: 10px;
    font-size: 17px;
  }
  :global(.token.operator) {
    background: transparent;
  }
  :global(.token.each) {
    :global(.token.keyword) {
      color: palevioletred;
    }
  }
</style>

{#each highlight as code}
  <pre>
    {@html code}
  </pre>
{:else}nocode{/each}
