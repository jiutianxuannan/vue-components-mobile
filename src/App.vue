<template>
  <div id="app">
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="iconfont iconback "></i>
    </router-link>
    <router-view />
  </div>
</template>

<style>

</style>
<script type="text/babel">
  export default {
    computed: {
      visible() {
        return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
      }
    }
  };
</script>
