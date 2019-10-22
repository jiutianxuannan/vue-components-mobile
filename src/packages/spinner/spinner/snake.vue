<template>
  <div class="yz-spinner-snake" :style="{
    'border-top-color': spinnerColor,
    'border-left-color': spinnerColor,
    'border-bottom-color': spinnerColor,
    'height': spinnerSize,
    'width': spinnerSize
    }">
  </div>
</template>

<script>
  import common from './common.vue';

  export default {
    name: 'snake',

    mixins: [common]
  };
</script>
<style scoped>
  .yz-spinner-snake {
    -webkit-animation: yz-spinner-rotate 0.8s infinite linear;
    animation: yz-spinner-rotate 0.8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
  }

  @keyframes yz-spinner-rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
