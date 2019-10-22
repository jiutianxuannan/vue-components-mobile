<template>
  <div class="page-radio">
    <div class="page-title">radio</div>

    <yz-radio class="page-part" title="第二个单选框列表" v-model="value2" :options="options2" />
    <div>
      <yz-cell title="选中的项">{{ value2 }}</yz-cell>
    </div>

    <yz-radio align="right" class="page-part" title="右对齐" v-model="value3" :options="options3" />
  </div>
</template>

<script>
  export default {
    name: 'page-radio',

    data() {
      return {
        value2: '值A',
        value3: ''
      };
    },

    created() {
      this.options3 = ['选项A', '选项B', '选项C'];
      this.options2 = [
        {
          label: '被禁用',
          value: '值F',
          disabled: true
        },
        {
          label: '选项A',
          value: '值A'
        },
        {
          label: '选项B',
          value: '值B'
        }
      ];
    }
  };
</script>

<style lang="css">
  .page-radio .page-part {
    margin-top: 40px;
  }
</style>
