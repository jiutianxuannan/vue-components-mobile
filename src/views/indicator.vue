<template>
  <div class="page-indicator">
    <h1 class="page-title">Indicator</h1>
    <div class="page-indicator-wrapper">
      <yz-button @click.native="openIndicatorWithSpinner" size="large">可配置 spinner</yz-button>
      <yz-button @click.native="openIndicatorWithText" size="large">点击弹出带有文字的 Indicator</yz-button>
    </div>
  </div>
</template>

<style>
  .page-indicator-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .page-indicator-wrapper button:not(:last-child) {
    margin-bottom: 20px;
  }
</style>

<script type="text/babel">
  export default {
    methods: {
      openIndicator() {
        this.$indicator.open();
        setTimeout(() => this.$indicator.close(), 2000);
      },

      openIndicatorWithSpinner() {
        this.$indicator.open({ spinnerType: 'fading-circle' });
        setTimeout(() => this.$indicator.close(), 2000);
      },

      openIndicatorWithText() {
        this.$indicator.open('加载中...');
        setTimeout(() => this.$indicator.close(), 2000);
      }
    },

    beforeDestroy() {
      this.$indicator.close();
    }
  };
</script>
