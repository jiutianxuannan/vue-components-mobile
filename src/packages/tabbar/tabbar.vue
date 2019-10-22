<template>
  <div class="yz-tabbar" :class="{
      'is-fixed': fixed
    }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'yz-tabbar',

    props: {
      fixed: Boolean,
      value: {}
    }
  };
</script>

<style scoped>
  .yz-tabbar {
    background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-color: #fafafa;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    text-align: center;
  }

  .yz-tabbar>.yz-tab-item.is-selected {
    background-color: #eaeaea;
    color: #26a2ff;
  }

  .yz-tabbar.is-fixed {
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }
</style>
