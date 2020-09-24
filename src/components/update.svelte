<input type="number" bind:value={index} />
<button
  on:click={async () => {
    loading = true;
    await getSinglePost(index);
  }}
>Hent en annen post</button>
{#if loading}
  <Spinner type="loading" />
{:else}
  <div>{$singlePost.id}</div>
  <form
    class:negative
    bind:this={form1}
    on:submit={async (e) => {
      console.log(e);
      e.preventDefault();
      await updatePost($singlePost);
    }}
  >
    <div>
      <input
        class:negative
        placeholder={$singlePost.title}
        bind:value={$singlePost.title}
        required
      />
    </div>
    <div><textarea class:negative minlength="10" bind:value={$singlePost.body} required /></div>
    <div>{validationMessage}</div>
    <button>Oppdater </button>
  </form>
{/if}
