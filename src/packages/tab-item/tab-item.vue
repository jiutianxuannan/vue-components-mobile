<template>
  <a class="yz-tab-item" @click="$parent.$emit('input', id)" :class="{ 'is-selected': $parent.value === id }">
    <div class="yz-tab-item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="yz-tab-item-label">
      <slot></slot>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'yz-tab-item',

    props: ['id']
  };
</script>

<style scoped>
  .yz-tab-item {
    display: block;
    padding: 7px 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-decoration: none
  }

  .yz-tab-item-icon {
    width: 24px;
    height: 24px;
    margin: 0 auto 5px
  }

  .yz-tab-item-icon:empty {
    display: none
  }

  .yz-tab-item-icon>* {
    display: block;
    width: 100%;
    height: 100%
  }

  .yz-tab-item-label {
    color: inherit;
    font-size: 12px;
    line-height: 1
  }
</style>
