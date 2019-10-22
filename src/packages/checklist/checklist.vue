<template>
  <div @change="$emit('change', currentValue)" class="yz-checklist" :class="{ 'is-limit': max <= currentValue.length }">
    <label class="yz-checklist-title" v-text="title"></label>
    <x-cell v-for="option in options" :key="option.value">
      <label class="yz-checklist-label" slot="title">
        <span :class="{'is-right': align === 'right'}" class="yz-checkbox">
          <input class="yz-checkbox-input" type="checkbox" v-model="currentValue" :disabled="option.disabled"
            :value="option.value || option">
          <span class="yz-checkbox-core"></span>
        </span>
        <span class="yz-checkbox-label" v-text="option.label || option"></span>
      </label>
    </x-cell>
  </div>
</template>

<script>
  import XCell from './cell';
  export default {
    name: 'yz-checklist',

    props: {
      max: Number,
      title: String,
      align: String,
      options: {
        type: Array,
        required: true
      },
      value: Array
    },

    components: { XCell },

    data() {
      return {
        currentValue: this.value
      };
    },

    computed: {
      limit() {
        return this.max < this.currentValue.length;
      }
    },

    watch: {
      value(val) {
        this.currentValue = val;
      },

      currentValue(val) {
        if (this.limit) val.pop();
        this.$emit('input', val);
      }
    }
  };
</script>

<style scoped>
  .yz-checklist .yz-cell {
    padding: 0;
  }

  .yz-checklist.is-limit .yz-checkbox-core:not(:checked) {
    background-color: #d9d9d9;
    border-color: #d9d9d9;
  }

  .yz-checklist-label {
    display: block;
    padding: 0 10px;
  }

  .yz-checklist-title {
    color: #888;
    display: block;
    font-size: 12px;
    margin: 8px;
  }


  .yz-checkbox.is-right {
    float: right;
  }

  .yz-checkbox-label {
    vertical-align: middle;
    margin-left: 6px;
  }

  .yz-checkbox-input {
    display: none;
  }

  .yz-checkbox-input:checked+.yz-checkbox-core {
    background-color: #26a2ff;
    border-color: #26a2ff;
  }

  .yz-checkbox-input:checked+.yz-checkbox-core::after {
    border-color: #fff;
    -webkit-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
  }

  .yz-checkbox-input[disabled]+.yz-checkbox-core {
    background-color: #d9d9d9;
    border-color: #ccc;
  }

  .yz-checkbox-core {
    display: inline-block;
    background-color: #fff;
    border-radius: 100%;
    border: 1px solid #ccc;
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  .yz-checkbox-core::after {
    border: 2px solid transparent;
    border-left: 0;
    border-top: 0;
    content: " ";
    top: 3px;
    left: 6px;
    position: absolute;
    width: 4px;
    height: 8px;
    -webkit-transform: rotate(45deg) scale(0);
    transform: rotate(45deg) scale(0);
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s;
  }
</style>
