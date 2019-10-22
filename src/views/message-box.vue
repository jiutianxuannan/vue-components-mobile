<template>
  <div class="page-msgbox">
    <h1 class="page-title">Message Box</h1>
    <div class="page-msgbox-wrapper">
      <yz-button @click.native="openAlert" size="large">打开 alert 提示框</yz-button>
      <yz-button @click.native="openConfirm" size="large">打开 confirm 提示框</yz-button>
      <yz-button @click.native="openPrompt" size="large">打开 prompt 提示框</yz-button>
    </div>
  </div>
</template>

<style>
  .page-msgbox-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .page-msgbox-wrapper button:not(:last-child) {
    margin-bottom: 20px;
  }
</style>

<script type="text/babel">
  export default {
    methods: {
      openAlert() {
        this.$messagebox.alert('操作成功!', '提示');
      },

      openConfirm() {
        this.$messagebox.confirm('确定执行此操作?', '提示');
      },

      openPrompt() {
        this.$messagebox.prompt(' ', '请输入姓名').then(({ value }) => {
          if (value) {
            this.$messagebox.alert(`你的名字是 ${ value }`, '输入成功');
          }
        });
      }
    }
  };
</script>
