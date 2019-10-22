<template>
  <div class="page-navbar">
    <div class="page-title">Navbar</div>
    <yz-navbar class="page-part" v-model="selected">
      <yz-tab-item id="1">选项一</yz-tab-item>
      <yz-tab-item id="2">选项二</yz-tab-item>
      <yz-tab-item id="3">选项三</yz-tab-item>
    </yz-navbar>

    <div>
      <yz-cell class="page-part" title="当前选中">{{ selected }}</yz-cell>
    </div>

    <yz-tab-container v-model="selected" swipeable>
      <yz-tab-container-item id="1">
        <yz-cell v-for="n in 10" :title="'内容 ' + n" />
      </yz-tab-container-item>
      <yz-tab-container-item id="2">
        <yz-cell v-for="n in 4" :title="'测试 ' + n" />
      </yz-tab-container-item>
      <yz-tab-container-item id="3">
        <yz-cell v-for="n in 6" :title="'选项 ' + n" />
      </yz-tab-container-item>
    </yz-tab-container>
  </div>
</template>

<script>
  export default {
    name: 'page-navbar',

    data() {
      return {
        selected: '1'
      };
    }
  };
</script>
