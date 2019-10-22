<template>
  <div v-show="$parent.swiping || id === $parent.currentActive" class="yz-tab-container-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'yz-tab-container-item',

    props: ['id']
  };
</script>

<style scoped>
  .yz-tab-container-item {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%
  }
</style>
