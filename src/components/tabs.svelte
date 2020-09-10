<script lang="ts">
  import tabs from './tabs';
  import { fly } from 'svelte/transition';

  let currentTab = tabs.find((e) => e.active);

  let tabs_button = true;
</script>

<style lang="scss">
  .tabs {
    margin: 0 auto;
    width: 50vw;
    min-width: 750px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    &_button {
      width: 100%;
    }
    &_nav {
      display: flex;
      margin: 0 auto;
    }
    &_tab {
      width: 100%;
      grid-column: 1;
      grid-row: 1;
    }
    &_container {
      display: grid;
    }
  }
</style>

<section class="tabs">
  <nav class="tabs_nav">
    {#each tabs as tab}
      <button
        class={tab.active ? 'active' : ''}
        class:tabs_button
        on:click={() => {
          currentTab.active = false;
          tab.active = true;
          currentTab = tab;
          history.pushState({ page: tab.name.replace(' ', '') }, tab.name, tab.name.replace(' ', ''));
        }}
      >
        {tab.name}
      </button>
    {/each}
  </nav>
  <h2>{currentTab.name}</h2>
  <p>{currentTab?.description}</p>
  <div>
    <section class="tabs_container">
      {#each tabs as tab}
        {#if tab.active}
          <div
            in:fly={{ x: 600, duration: 1000 }}
            out:fly={{ x: -600, duration: 1000 }}
            class="tabs_tab"
          >
            <svelte:component this={tab.component} />
          </div>
        {/if}
      {/each}
    </section>
  </div>
</section>
