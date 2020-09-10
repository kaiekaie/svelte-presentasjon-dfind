<script lang="ts">
  import { tick } from 'svelte';
  import Spinner from '../components/spinner.svelte';
  import CodeComponent from '../components/codeComponent.svelte';

  let codeData = [];
  const promise = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  };
</script>

<div class="output">
  {#await promise()}
    <Spinner type="loading" />
  {:then data}
    {JSON.stringify(data[0])}
  {:catch error}
    <Spinner type="error" />
  {/await}
</div>
<CodeComponent {codeData} />
