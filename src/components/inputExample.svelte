<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fly, slide } from 'svelte/transition';

  import FormExample from '../components/formExample.svelte';

  export let multipleArray: FormData[] = [];

  let selectedOption = [];
  let showCode = false;
  export let removeItem;
</script>

{#each multipleArray as multipleItem, i}
  <div in:fly={{ x: -10, duration: 1000 }} out:fly={{ x: 100, duration: 1000 }}>
    <button on:click={() => removeItem(i)}>fjern</button>
    <input bind:value={multipleItem.string1} />
    <input bind:value={multipleItem.string2} />
    <input type="checkbox" bind:checked={multipleItem.boolean} />
    <input type="date" bind:value={multipleItem.date} />
    <select
      bind:value={selectedOption[i]}
      name={i.toString()}
      on:blur={() => (multipleItem.selected = selectedOption[i])}
    >
      {#each multipleItem.selection as selected}
        <option value={selected}>{selected}</option>
      {:else}empty{/each}
    </select>
  </div>
{:else}
  <div>tom</div>
{/each}

<button on:click={() => (showCode = !showCode)}>vis json</button>

{#if showCode}
  <pre class={'code'} transition:slide={{ delay: 100, duration: 100 }}>
    <code
    >{JSON.stringify(multipleArray, null, 4)}</code>
  </pre>
{/if}
