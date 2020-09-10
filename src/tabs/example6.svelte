<script lang="ts">
  import { onMount, tick } from 'svelte';
  import Spinner from '../components/spinner.svelte';
  import CodeComponent from '../components/codeComponent.svelte';
  import { posts, getPosts } from '../store';

  let loading = false;
  onMount(async () => {
    await getPosts();
  });
  let codeData = [];
  $: $posts ? (loading = false) : (loading = true);
</script>

<div class="output">
  {#if loading}
    <Spinner type="loading" />
  {:else}{JSON.stringify($posts[0])}{/if}
</div>
<CodeComponent {codeData} />
