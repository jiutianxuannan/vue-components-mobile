<template>
  <div>
    <div class="nav">
      <yz-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</yz-button>
      <yz-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</yz-button>
      <yz-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</yz-button>
    </div>
    <div class="page-tab-container">
      <yz-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <yz-tab-container-item id="tab-container1">
          <yz-cell v-for="n in 10" title="tab-container 1"></yz-cell>
        </yz-tab-container-item>
        <yz-tab-container-item id="tab-container2">
          <yz-cell v-for="n in 5" title="tab-container 2"></yz-cell>
        </yz-tab-container-item>
        <yz-tab-container-item id="tab-container3">
          <yz-cell v-for="n in 7" title="tab-container 3"></yz-cell>
        </yz-tab-container-item>
      </yz-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1'
    };
  }
};
</script>

<style lang="css" scoped>
  .item {
    display: inline-block;
  }

  .nav {
    padding: 10px;
  }

  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
</style>
