<template>
  <div class="yz-search">
    <div class="yz-searchbar">
      <div class="yz-searchbar-inner">
        <i class="yzui yzui-search"></i>
        <input ref="input" @click="visible = true" type="search" v-model="currentValue" :placeholder="placeholder"
          class="yz-searchbar-core">
      </div>
      <a class="yz-searchbar-cancel" @click="visible = false, currentValue = ''" v-show="visible" v-text="cancelText">
      </a>
    </div>
    <div class="yz-search-list" v-show="show || currentValue">
      <div class="yz-search-list-warp">
        <slot>
          <x-cell v-for="(item, index) in result" :key="index" :title="item"></x-cell>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  import XCell from './cell';
  export default {
    name: 'yz-search',

    data() {
      return {
        visible: false,
        currentValue: this.value
      };
    },

    components: { XCell },

    watch: {
      currentValue(val) {
        this.$emit('input', val);
      },

      value(val) {
        this.currentValue = val;
      }
    },

    props: {
      value: String,
      autofocus: Boolean,
      show: Boolean,
      cancelText: {
        default: '取消'
      },
      placeholder: {
        default: '搜索'
      },
      result: Array
    },

    mounted() {
      this.autofocus && this.$refs.input.focus();
    }
  };
</script>

<style scoped>
  .yz-search {
    height: 100vh;
    overflow: hidden;
  }

  .yz-searchbar {
    position: relative;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #d9d9d9;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 8px 10px;
    z-index: 1;
  }

  .yz-searchbar-inner {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
    border-radius: 2px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 28px;
    padding: 4px 6px;
  }

  .yz-searchbar-inner .yzui-search {
    font-size: 12px;
    color: #d9d9d9;
  }

  .yz-searchbar-core {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    outline: 0;
  }

  .yz-searchbar-cancel {
    color: #26a2ff;
    margin-left: 10px;
    text-decoration: none;
  }

  .yz-search-list {
    overflow: auto;
    padding-top: 44px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }
</style>
