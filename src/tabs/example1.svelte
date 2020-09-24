<script lang="ts">
  import CodeComponent from '../components/codeComponent.svelte';
  let name: string = '';
  let codeData = [];
  let output_data = true;
</script>

<style>
  .output_data {
    color: red;
  }
</style>

<div class="output"><input placeholder="name" bind:value={name} /></div>
<div class:output_data>{name}</div>

<CodeComponent {codeData} />
