<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <div class="page-title">Tabbar</div>
      <div>
        <yz-cell class="page-part" title="当前选中" :value="selected" />
      </div>

      <yz-tab-container class="page-tabbar-container" v-model="selected">
        <yz-tab-container-item id="外卖">
          <yz-cell v-for="n in 10" :title="'餐厅 ' + n" />
        </yz-tab-container-item>
        <yz-tab-container-item id="订单">
          <yz-cell v-for="n in 5" :title="'订单 ' + n" />
        </yz-tab-container-item>
        <yz-tab-container-item id="发现">
          <yz-cell v-for="n in 7" :title="'发现 ' + n" />
        </yz-tab-container-item>
        <yz-tab-container-item id="我的">
          <div class="page-part">
            <yz-cell v-for="n in 12" :title="'我的 ' + n" />
          </div>
          <router-link to="/">
            <yz-button type="danger" size="large">退出</yz-button>
          </router-link>
        </yz-tab-container-item>
      </yz-tab-container>
    </div>

    <yz-tabbar v-model="selected" fixed>
      <yz-tab-item id="选项一">
        <img slot="icon" src="../assets/100x100.png">
        选项一
      </yz-tab-item>
      <yz-tab-item id="选项二">
        <img slot="icon" src="../assets/100x100.png">
        选项二
      </yz-tab-item>
      <yz-tab-item id="选项三">
        <img slot="icon" src="../assets/100x100.png">
        选项三
      </yz-tab-item>
      <yz-tab-item id="选项四">
        <img slot="icon" src="../assets/100x100.png">
        选项四
      </yz-tab-item>
    </yz-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'page-tabbar',
    data() {
      return {
        selected: '选项一'
      };
    }
  };
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
