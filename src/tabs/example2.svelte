<script lang="ts">
  import CodeComponent from '../components/codeComponent.svelte';
  let selected;
  let codeData = [];
  let multiple = {
    string1: '',
    string2: '',
    boolean: false,
    date: new Date().toISOString().split('T')[0],
    selection: ['volvo', 'saab', 'mercedes', 'audi'],
    selected: 'volvo',
  };
</script>

<div class="output">
  <input bind:value={multiple.string1} />
  <input bind:value={multiple.string2} />
  <input type="checkbox" bind:checked={multiple.boolean} />
  <input type="date" bind:value={multiple.date} />
  <select bind:value={selected} on:blur={() => (multiple.selected = selected)}>
    {#each multiple.selection as selectionItem}
      <option value={selectionItem}>{selectionItem}</option>
    {/each}
  </select>
</div>
<pre>
  <code>{JSON.stringify(multiple, null, 4)}</code>
</pre>

<CodeComponent {codeData} />
