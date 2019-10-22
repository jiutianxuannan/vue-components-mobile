<template>
  <div class="yz-progress">
    <slot name="start"></slot>
    <div class="yz-progress-content">
      <div class="yz-progress-runway" :style="{ height: barHeight + 'px' }"></div>
      <div class="yz-progress-progress" :style="{ width: value + '%', height: barHeight + 'px' }"></div>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<script>
  export default {
    name: 'yz-progress',

    props: {
      value: Number,
      barHeight: {
        type: Number,
        default: 3
      }
    }
  };
</script>
<style scoped>
  .yz-progress {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 30px;
    line-height: 30px
  }

  .yz-progress>* {
    display: -ms-flexbox;
    display: flex;
    display: -webkit-box
  }

  .yz-progress *[slot="start"] {
    margin-right: 5px
  }

  .yz-progress *[slot="end"] {
    margin-left: 5px
  }

  .yz-progress-content {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
  }

  .yz-progress-runway {
    position: absolute;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    top: 50%;
    left: 0;
    right: 0;
    background-color: #ebebeb;
    height: 3px
  }

  .yz-progress-progress {
    position: absolute;
    display: block;
    background-color: #26a2ff;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    width: 0
  }
</style>
