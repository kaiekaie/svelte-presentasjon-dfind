<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { fly, slide } from 'svelte/transition';
  import InputExampleWithStore from '../components/inputExampleStore.svelte';
  import { multipleArray } from '../store';
  import { testobject } from '../data';
  import CodeComponent from '../components/codeComponent.svelte';
  let codeData = [];
  const addMore = () => {
    multipleArray.update((e) => (e = [...e, Object.create(testobject)]));
  };
</script>

<div class="output">
  <button on:click={addMore}>legg til</button>
  <InputExampleWithStore />
</div>
<CodeComponent {codeData} />
