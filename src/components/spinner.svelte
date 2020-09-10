<script lang="ts">
  export let type;
</script>

<style lang="scss">
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .centered {
    width: 100px;
    span {
      position: absolute;
      font-size: 20px;
      -webkit-animation: spin 4s linear infinite;
      -moz-animation: spin 4s linear infinite;
      animation: spin 4s linear infinite;
    }
  }
</style>

<div class="centered">
  <span>{type === 'loading' ? '😀' : '🥵'} {type}</span>
</div>
