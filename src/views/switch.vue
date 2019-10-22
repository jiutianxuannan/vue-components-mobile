<template>
  <div class="page-switch">
    <div class="page-title">Switch</div>

    <yz-cell :title="'选项 ' + value2">
      <yz-switch v-model="value2" @change="handleChange"></yz-switch>
    </yz-cell>
  </div>
</template>

<script>
  export default {
    name: 'page-switch',

    data() {
      return {
        value2: false
      };
    },

    methods: {
      handleChange(event) {
        console.log(event);
      }
    }
  };
</script>

<style lang="css">
  .page-switch-padding {
    padding: 0 10px;
  }
</style>
