<script lang="ts">
  import { onMount } from 'svelte';
  import Spinner from '../components/spinner.svelte';
  import CodeComponent from '../components/codeComponent.svelte';
  import { singlePost } from '../store';
  import { addPost } from '../provider';
  let codeData = [];
  let loading = false;
  let newPost: Posts = { title: ' ', body: '', userId: 0 };
</script>

<div class="output">
  <form
    on:submit={async (e) => {
      console.log(e);
      e.preventDefault();
      loading = true;
      await addPost(newPost);
      loading = false;
    }}
  >
    <div><input placeholder={'tittel'} bind:value={newPost.title} /></div>
    <div><textarea placeholder={'body'} bind:value={newPost.body} /></div>
    <div><input placeholder={'userId'} type="number" bind:value={newPost.userId} /></div>

    <button>Last opp ny </button>
  </form>
  {#if loading}
    <Spinner type="loading" />
  {:else if $singlePost}
    <div>{$singlePost?.id}</div>
    <div>{$singlePost?.title}</div>
    <div>{$singlePost?.body}</div>
    <div>{$singlePost?.userId}</div>
  {/if}
</div>
<CodeComponent {codeData} />
