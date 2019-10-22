<template>
  <transition name="yz-indicator">
    <div class="yz-indicator" v-show="visible">
      <div class="yz-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <spinner class="yz-indicator-spin" :type="convertedSpinnerType" :size="32"></spinner>
        <span class="yz-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="yz-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>
<script type="text/babel">
  import Spinner from './spinner';
  export default {
    data() {
      return {
        visible: false
      };
    },

    components: {
      Spinner
    },

    computed: {
      convertedSpinnerType() {
        switch (this.spinnerType) {
          case 'double-bounce':
            return 1;
          case 'triple-bounce':
            return 2;
          case 'fading-circle':
            return 3;
          default:
            return 0;
        }
      }
    },

    props: {
      text: String,
      spinnerType: {
        type: String,
        default: 'snake'
      }
    }
  };
</script>
<style>
  .yz-indicator {
    -webkit-transition: opacity .2s linear;
    transition: opacity .2s linear;
  }

  .yz-indicator-wrapper {
    top: 50%;
    left: 50%;
    position: fixed;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    box-sizing: border-box;
    text-align: center;
    z-index: 3000;
  }

  .yz-indicator-text {
    display: block;
    color: #fff;
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
  }

  .yz-indicator-spin {
    display: inline-block;
    text-align: center;
  }

  .yz-indicator-mask {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: transparent;
    z-index: 3000;
  }

  .yz-indicator-enter,
  .yz-indicator-leave-active {
    opacity: 0;
  }
</style>
