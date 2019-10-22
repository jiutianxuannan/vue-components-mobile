<template>
  <div class="page-toast">
    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <yz-button @click.native="openToast" size="large">弹出 Toast</yz-button>
      <yz-button @click.native="openToastWithIcon" size="large">带icon的Toast</yz-button>
    </div>
  </div>
</template>

<style>
  .page-toast-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .page-toast-wrapper button:not(:last-child) {
    margin-bottom: 20px;
  }
</style>

<script type="text/babel">
  export default {
    methods: {
      openToast() {
        this.$toast('提示信息');
      },

      openToastWithIcon() {
        this.$toast({
          message: '操作成功',
          iconClass: 'iconfont iconsuccess'
        });
      }
    }
  };
</script>
