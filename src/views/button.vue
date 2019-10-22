<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="page-button-group">
      <yz-button size="large">default</yz-button>
    </div>

    <div class="page-button-group">
      <yz-button disabled size="large">default</yz-button>
    </div>
    <!-- <div class="page-button-group">
      <yz-button>
        <img src="../assets/100x100.png" height="20" width="20" slot="icon">
        带自定义图标
      </yz-button>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'button'
  };
</script>

<style lang="css">
  .page-button {
    padding: 0 15px 15px;
  }

  .page-button-group {
    margin-bottom: 15px;
  }

  .page-button-group>* {
    margin-bottom: 15px;
  }
</style>
