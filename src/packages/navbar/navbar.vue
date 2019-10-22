<template>
  <div class="yz-navbar" :class="{ 'is-fixed': fixed }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'yz-navbar',

    props: {
      fixed: Boolean,
      value: {}
    }
  };
</script>

<style scoped>
  .yz-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
  }

  .yz-navbar .yz-tab-item {
    padding: 17px 0;
    font-size: 15px
  }

  .yz-navbar .yz-tab-item:last-child {
    border-right: 0;
  }

  .yz-navbar .yz-tab-item.is-selected {
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: -3px;
  }

  .yz-navbar.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }
</style>
