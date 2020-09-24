<script lang="ts">
  import { onMount, tick } from 'svelte';
  import Spinner from '../components/spinner.svelte';
  import CodeComponent from '../components/codeComponent.svelte';
  import { posts } from '../store';
  import { getPosts } from '../provider';

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
  {:else}
    <div>{$posts[0].title}</div>
    <div>{$posts[0].body}</div>
  {/if}
</div>
<CodeComponent {codeData} />
