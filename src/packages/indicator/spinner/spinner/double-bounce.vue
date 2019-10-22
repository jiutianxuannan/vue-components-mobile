<template>
  <div class="yz-spinner-double-bounce" :style="{
      width: spinnerSize,
      height: spinnerSize
    }">
    <div class="yz-spinner-double-bounce-bounce1" :style="{ backgroundColor: spinnerColor }"></div>
    <div class="yz-spinner-double-bounce-bounce2" :style="{ backgroundColor: spinnerColor }"></div>
  </div>
</template>

<script>
  import common from './common.vue';

  export default {
    name: 'double-bounce',

    mixins: [common]
  };
</script>
<style scoped>
  .yz-spinner-double-bounce {
    position: relative;
  }

  .yz-spinner-double-bounce-bounce1,
  .yz-spinner-double-bounce-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: yz-spinner-double-bounce 2.0s infinite ease-in-out;
    animation: yz-spinner-double-bounce 2.0s infinite ease-in-out;
  }

  .yz-spinner-double-bounce-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @keyframes yz-spinner-double-bounce {

    0%,
    100% {
      -webkit-transform: scale(0.0);
      transform: scale(0.0);
    }

    50% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
</style>
