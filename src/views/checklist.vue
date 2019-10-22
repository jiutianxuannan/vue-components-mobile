<template>
  <div class="page-checklist">
    <div class="page-title">Checklist</div>

    <yz-checklist class="page-part" title="第二个复选框列表" v-model="value2" :options="options2">
    </yz-checklist>

    <div>
      <yz-cell title="选中的项">{{ value2 }}</yz-cell>
    </div>

    <yz-checklist class="page-part" title="最多选两个" :max="2" v-model="value3" :options="options3">
    </yz-checklist>

    <div>
      <yz-cell title="选中的项">{{ value3 }}</yz-cell>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-checklist',

    data() {
      return {
        value2: ['选中禁用的值'],
        value3: ['选项A'],
      };
    },

    created() {
      this.options3 = ['选项A', '选项B', '选项C', '选项D'];
      this.options2 = [
        {
          label: '被禁用',
          value: '值F',
          disabled: true
        },
        {
          label: '选中禁用',
          value: '选中禁用的值',
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
  .page-checklist .page-part {
    margin-top: 40px;
  }
</style>
