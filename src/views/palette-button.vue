<template>
  <div style="text-align:center;padding-top:200px;">
    <yz-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
      direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
      style="left:30px;">
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
      <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
    </yz-palette-button>
  </div>
</template>

<script>
  export default {
    methods: {
      main_log(val) {
        console.log('main_log', val);
      },
      sub_log(val) {
        console.log('sub_log', val);
        this.$refs.target_1.collapse();
      }
    }
  };
</script>

<style>
  .pb{
    width: 60px;
    height: 60px;
    line-height: 60px;
    color: #FFF;
    position:absolute;
    bottom: 30px;
  }
  .my-icon-button{
    width:30px;
    height:30px;
    border-radius:50%;
    background-color:#26a2ff;
    color: #fff;
    line-height:30px;
    text-align:center;
  }
  .yz-main-button{
    color: #000;
    background-color:#26a2ff;
  }
</style>
 