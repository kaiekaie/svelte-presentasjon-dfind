<script lang="ts">
  import { writable } from 'svelte/store';
  import CodeComponent from '../components/codeComponent.svelte';
  let codeData = [];
  let i = 0;
  const store = writable(0);
  store.subscribe((e) => (i = e));
</script>

<div class="output">
  <button on:click={() => store.update((e) => e + 1)}>oppdater knapp</button>
</div>
<div>{i}</div>
<CodeComponent {codeData} />
