<template>
  <div :class="['yz-spinner-fading-circle circle-color-' + _uid]" :style="{
      width: spinnerSize,
      height: spinnerSize
    }">
    <div v-for="n in 12" :class="['is-circle' + (n + 1)]" class="yz-spinner-fading-circle-circle"></div>
  </div>
</template>

<script>
  import common from './common.vue';

  export default {
    name: 'fading-circle',

    mixins: [common],

    created() {
      if (this.$isServer) return;
      this.styleNode = document.createElement('style');
      const css = `.circle-color-${this._uid} > div::before { background-color: ${this.spinnerColor}; }`;

      this.styleNode.type = 'text/css';
      this.styleNode.rel = 'stylesheet';
      this.styleNode.title = 'fading circle style';
      document.getElementsByTagName('head')[0].appendChild(this.styleNode);
      this.styleNode.appendChild(document.createTextNode(css));
    },

    destroyed() {
      if (this.styleNode) {
        this.styleNode.parentNode.removeChild(this.styleNode);
      }
    }
  };
</script>
<style scoped>
  .yz-spinner-fading-circle {
    position: relative
  }

  .yz-spinner-fading-circle-circle {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute
  }

  .yz-spinner-fading-circle-circle::before {
    content: " ";
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    border-radius: 100%;
    -webkit-animation: yz-fading-circle 1.2s infinite ease-in-out both;
    animation: yz-fading-circle 1.2s infinite ease-in-out both
  }

  .yz-spinner-fading-circle-circle.is-circle2 {
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg)
  }

  .yz-spinner-fading-circle-circle.is-circle2::before {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s
  }

  .yz-spinner-fading-circle-circle.is-circle3 {
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg)
  }

  .yz-spinner-fading-circle-circle.is-circle3::before {
    -webkit-animation-delay: -1s;
    animation-delay: -1s
  }

  .yz-spinner-fading-circle-circle.is-circle4 {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
  }

  .yz-spinner-fading-circle-circle.is-circle4::before {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s
  }

  .yz-spinner-fading-circle-circle.is-circle5 {
    -webkit-transform: rotate(120deg);
    transform: rotate(120deg)
  }

  .yz-spinner-fading-circle-circle.is-circle5::before {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s
  }

  .yz-spinner-fading-circle-circle.is-circle6 {
    -webkit-transform: rotate(150deg);
    transform: rotate(150deg)
  }

  .yz-spinner-fading-circle-circle.is-circle6::before {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s
  }

  .yz-spinner-fading-circle-circle.is-circle7 {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }

  .yz-spinner-fading-circle-circle.is-circle7::before {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s
  }

  .yz-spinner-fading-circle-circle.is-circle8 {
    -webkit-transform: rotate(210deg);
    transform: rotate(210deg)
  }

  .yz-spinner-fading-circle-circle.is-circle8::before {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s
  }

  .yz-spinner-fading-circle-circle.is-circle9 {
    -webkit-transform: rotate(240deg);
    transform: rotate(240deg)
  }

  .yz-spinner-fading-circle-circle.is-circle9::before {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s
  }

  .yz-spinner-fading-circle-circle.is-circle10 {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg)
  }

  .yz-spinner-fading-circle-circle.is-circle10::before {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s
  }

  .yz-spinner-fading-circle-circle.is-circle11 {
    -webkit-transform: rotate(300deg);
    transform: rotate(300deg)
  }

  .yz-spinner-fading-circle-circle.is-circle11::before {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s
  }

  .yz-spinner-fading-circle-circle.is-circle12 {
    -webkit-transform: rotate(330deg);
    transform: rotate(330deg)
  }

  .yz-spinner-fading-circle-circle.is-circle12::before {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s
  }

  @keyframes yz-fading-circle {

    0%,
    39%,
    100% {
      opacity: 0
    }

    40% {
      opacity: 1
    }
  }
</style>
