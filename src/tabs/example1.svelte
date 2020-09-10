<script lang="ts">
  import CodeComponent from '../components/codeComponent.svelte';
  let name: string = '';
  let codeData = [];
</script>

<div class="output"><input placeholder="name" bind:value={name} /></div>
<div>{name}</div>

<CodeComponent {codeData} />
