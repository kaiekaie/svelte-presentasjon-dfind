<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { fly, slide } from 'svelte/transition';
  import InputExample from '../components/inputExample.svelte';
  import { testobject } from '../data';
  import CodeComponent from '../components/codeComponent.svelte';
  let codeData = [];
  let multipleArray = [Object.create(testobject), Object.create(testobject)];
  const addMore = () => {
    multipleArray = [...multipleArray, Object.create(testobject)];
  };

  const remove = (nr: number) => (multipleArray = multipleArray.filter((e, i) => i !== nr));
</script>

<div class="output">
  <button on:click={addMore}>legg til</button>
  <InputExample {multipleArray} removeItem={remove} />
</div>

<CodeComponent {codeData} />
