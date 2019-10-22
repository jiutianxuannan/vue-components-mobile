<template>
  <div class="yz-radiolist" @change="$emit('change', currentValue)">
    <label class="yz-radiolist-title" v-text="title"></label>
    <x-cell v-for="option in options">
      <label class="yz-radiolist-label" slot="title">
        <span :class="{'is-right': align === 'right'}" class="yz-radio">
          <input class="yz-radio-input" type="radio" v-model="currentValue" :disabled="option.disabled"
            :value="option.value || option">
          <span class="yz-radio-core"></span>
        </span>
        <span class="yz-radio-label" v-text="option.label || option"></span>
      </label>
    </x-cell>
  </div>
</template>

<script>
  import XCell from './cell/index.js';
  export default {
    name: 'yz-radio',

    props: {
      title: String,
      align: String,
      options: {
        type: Array,
        required: true
      },
      value: String
    },

    data() {
      return {
        currentValue: this.value
      };
    },

    watch: {
      value(val) {
        this.currentValue = val;
      },

      currentValue(val) {
        this.$emit('input', val);
      }
    },

    components: {
      XCell
    }
  };
</script>

<style scoped>
  .yz-radiolist .yz-cell {
    padding: 0;
  }

  .yz-radiolist-label {
    display: block;
    padding: 0 10px;
  }

  .yz-radiolist-title {
    font-size: 12px;
    margin: 8px;
    display: block;
    color: #888;
  }

  .yz-radio.is-right {
    float: right;
  }

  .yz-radio-label {
    vertical-align: middle;
    margin-left: 6px;
  }

  .yz-radio-input {
    display: none;
  }

  .yz-radio-input:checked+.yz-radio-core {
    background-color: #26a2ff;
    border-color: #26a2ff;
  }

  .yz-radio-input:checked+.yz-radio-core::after {
    background-color: #fff;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .yz-radio-input[disabled]+.yz-radio-core {
    background-color: #d9d9d9;
    border-color: #ccc;
  }

  .yz-radio-core {
    box-sizing: border-box;
    display: inline-block;
    background-color: #fff;
    border-radius: 100%;
    border: 1px solid #ccc;
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .yz-radio-core::after {
    content: " ";
    border-radius: 100%;
    top: 5px;
    left: 5px;
    position: absolute;
    width: 8px;
    height: 8px;
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s, -webkit-transform .2s;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
</style>
