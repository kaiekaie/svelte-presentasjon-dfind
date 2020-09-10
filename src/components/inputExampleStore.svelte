<script lang="ts">
  import { fly, slide } from 'svelte/transition';
  import FormExample from '../components/formExample.svelte';
  import { multipleArray } from '../store';
  let localMultipleArray: FormData[] = [];
  let selectedOption = [];

  let showCode = false;
  multipleArray.subscribe((e) => (localMultipleArray = e));
  const removeItem = (event: CustomEvent) => {
    multipleArray.update((e) => (e = e.filter((e, i) => i !== event.detail)));
  };
</script>

<FormExample multipleArray={localMultipleArray} on:removeitem={removeItem} />
