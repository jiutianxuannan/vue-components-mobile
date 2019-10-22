<template>
  <div class="page-datetime">
    <h1 class="page-title">Datetime Picker</h1>
    <div class="page-datetime-wrapper">
      <yz-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</yz-button>
      <yz-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</yz-button>
      <yz-button @click.native="open('picker3')" size="large">点击弹出 Time Picker</yz-button>
      <yz-button @click.native="open('picker4')" size="large">自定义模板</yz-button>
      <yz-button @click.native="open('picker5')" size="large">设定初始值</yz-button>
    </div>
    <yz-datetime-picker ref="picker1" v-model="value" :closeOnClickModal="false" @visible-change="handleVisibleChange"
      @confirm="handleChange">
    </yz-datetime-picker>
    <yz-datetime-picker ref="picker2" type="date" v-model="value2" @confirm="handleChange">
    </yz-datetime-picker>
    <yz-datetime-picker ref="picker3" type="time" v-model="value3" @confirm="handleChange">
    </yz-datetime-picker>
    <yz-datetime-picker ref="picker4" type="date" v-model="value4" year-format="{value} 年" month-format="{value} 月"
      date-format="{value} 日" @confirm="handleChange">
    </yz-datetime-picker>
    <yz-datetime-picker ref="picker5" type="time" v-model="value5" @confirm="handleChange">
    </yz-datetime-picker>
  </div>
</template>

<style>
  .page-datetime-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .page-datetime-wrapper button:not(:last-child) {
    margin-bottom: 20px;
  }
</style>

<script type="text/babel">

  export default {
    data() {
      return {
        value: null,
        value2: null,
        value3: null,
        value4: null,
        value5: '04:32',
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false
      };
    },

    methods: {
      open(picker) {
        this.$refs[picker].open();
      },

      handleChange(value) {
        this.$toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },

      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }
    }
  };
</script>
