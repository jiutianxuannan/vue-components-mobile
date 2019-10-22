<template>
  <div class="page-spinner">
    <div class="page-title">Spinner</div>

    <yz-cell title="snake">
      <yz-spinner color="#26a2ff" type="snake"></yz-spinner>
    </yz-cell>

    <yz-cell title="double-bounce">
      <yz-spinner color="#26a2ff" type="double-bounce"></yz-spinner>
    </yz-cell>

    <yz-cell title="triple-bounce">
      <yz-spinner color="#26a2ff" type="triple-bounce"></yz-spinner>
    </yz-cell>

    <yz-cell title="fading-circle">
      <yz-spinner color="#26a2ff" type="fading-circle"></yz-spinner>
    </yz-cell>
  </div>
</template>

<script>
  export default {
    name: 'page-spinner',

    data() {
      return {

      };
    }
  };
</script>

<style lang="css">
  .page-spinner .mint-cell {
    min-height: 50px;
  }
</style>
