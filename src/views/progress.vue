<template>
  <div class="page-progress">
    <h1 class="page-title">Progress</h1>
    <yz-cell title="默认">
      <yz-progress></yz-progress>
    </yz-cell>
    <yz-cell title="设置 value">
      <yz-progress :value="20"></yz-progress>
    </yz-cell>
    <yz-cell title="左右文字">
      <yz-progress :value="40">
        <div slot="start">0%</div>
        <div slot="end">100%</div>
      </yz-progress>
    </yz-cell>
    <yz-cell title="定义线宽">
      <yz-progress :value="60" :bar-height="5"></yz-progress>
    </yz-cell>
    <div class="page-progress-wrapper">
      <yz-button size="large" type="primary" @click.native="uploadFile">上传文件</yz-button>
      <yz-progress :value="value" v-if="progressVisible" transition="progress-fade">
        <div slot="end">{{ value }}%</div>
      </yz-progress>
    </div>
  </div>
</template>

<style>
  .page-progress .yz-cell-value {
    flex: 2.5;
    position: relative;
    top: -20px;
  }
  .page-progress .yz-progress {
    width: 100%;
    position: absolute;
    top: 5px;
  }
  .page-progress-wrapper {
    padding: 0 10px;
    margin-top: 50px;
  }
  .page-progress-wrapper .yz-progress {
    position: relative;
  }
  .page-progress-wrapper .progress-fade-transition {
    transition: opacity .3s;
  }

  .page-progress-wrapper .progress-fade-enter,
  .page-progress-wrapper .progress-fade-leave {
    opacity: 0;
  }
</style>

<script type="text/babel">

  export default {
    data() {
      return {
        progressVisible: false,
        value: 0,
        uploading: false,
        timer: null
      };
    },

    watch: {
      value(val) {
        if (val >= 100) {
          this.uploading = false;
          this.progressVisible = false;
          setTimeout(() => this.$toast({ message: '上传成功', position: 'bottom', duration: 1000 }), 200);
          clearTimeout(this.timer);
        }
      }
    },

    methods: {
      uploadFile() {
        if (!this.uploading) {
          this.value = 0;
          this.progressVisible = true;
          this.uploading = true;
          this.timer = setInterval(() => this.value++, 10);
        }
      }
    }
  };
</script>
