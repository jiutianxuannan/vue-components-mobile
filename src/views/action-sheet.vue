<template>
  <div class="page-actionsheet">
    <h1 class="page-title">Action Sheet</h1>
    <div class="page-actionsheet-wrapper">
      <yz-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</yz-button>
      <yz-button @click.native="sheetVisible2 = true" size="large">不带取消按钮的 action sheet</yz-button>
    </div>
    <yz-actionsheet :actions="actions" v-model="sheetVisible"></yz-actionsheet>
    <yz-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></yz-actionsheet>
  </div>
</template>

<style>
  .page-actionsheet-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .page-actionsheet-wrapper button:first-child {
    margin-bottom: 20px;
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        sheetVisible: false,
        sheetVisible2: false,
        actions: [],
        actions2: []
      };
    },

    methods: {
      takePhoto() {
        console.log('taking photo');
      },

      openAlbum() {
        console.log('opening album');
      },

      goBack() {
        history.go(-1);
      }
    },

    mounted() {
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }];
      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];
    }
  };
</script>
