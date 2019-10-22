<template>
  <x-cell class="yz-field" :title="label" v-clickoutside="doCloseActive" :class="[{
        'is-textarea': type === 'textarea',
        'is-nolabel': !label
      }]">
    <textarea @change="$emit('change', currentValue)" ref="textarea" class="yz-field-core" :placeholder="placeholder"
      v-if="type === 'textarea'" :rows="rows" :disabled="disabled" :readonly="readonly" v-model="currentValue">
      </textarea>
    <input @change="$emit('change', currentValue)" ref="input" class="yz-field-core" :placeholder="placeholder"
      :number="type === 'number'" v-else :type="type" @focus="active = true" :disabled="disabled" :readonly="readonly"
      :value="currentValue" @input="handleInput">
    <div @click="handleClear" class="yz-field-clear" v-if="!disableClear"
      v-show="currentValue && type !== 'textarea' && active">
      <i class="iconfont iconclose"></i>
    </div>
    <span class="yz-field-state" v-if="state" :class="['is-' + state]">
      <i class="yzui" :class="['yzui-field-' + state]"></i>
    </span>
    <div class="yz-field-other">
      <slot></slot>
    </div>
  </x-cell>
</template>

<script>
  import XCell from './cell/index.js';
  import Clickoutside from './clickoutside';
  export default {
    name: 'yz-field',

    data() {
      return {
        active: false,
        currentValue: this.value
      };
    },

    directives: {
      Clickoutside
    },

    props: {
      type: {
        type: String,
        default: 'text'
      },
      rows: String,
      label: String,
      placeholder: String,
      readonly: Boolean,
      disabled: Boolean,
      disableClear: Boolean,
      state: {
        type: String,
        default: 'default'
      },
      value: {},
      attr: Object
    },

    components: { XCell },

    methods: {
      doCloseActive() {
        this.active = false;
      },

      handleInput(evt) {
        this.currentValue = evt.target.value;
      },

      handleClear() {
        if (this.disabled || this.readonly) return;
        this.currentValue = '';
      }
    },

    watch: {
      value(val) {
        this.currentValue = val;
      },

      currentValue(val) {
        this.$emit('input', val);
      },

      attr: {
        immediate: true,
        handler(attrs) {
          this.$nextTick(() => {
            const target = [this.$refs.input, this.$refs.textarea];
            target.forEach(el => {
              if (!el || !attrs) return;
              Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
            });
          });
        }
      }
    }
  };
</script>

<style scoped>
  .yz-field {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .yz-field .yz-cell-value {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: inherit;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .yz-field.is-nolabel .yz-cell-title {
    display: none;
  }

  .yz-field.is-textarea {
    -webkit-box-align: inherit;
    -ms-flex-align: inherit;
    align-items: inherit;
  }

  .yz-field-core {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    border: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    outline: 0;
    line-height: 1.6;
    font-size: inherit;
    width: 100%;
  }

  .yz-field-clear {
    opacity: .2;
  }

  .yz-field-state {
    color: inherit;
    margin-left: 20px;
  }

  .yz-field-state .yzui {
    font-size: 20px;
  }

  .yz-field-state.is-default {
    margin-left: 0;
  }

  .yz-field-state.is-success {
    color: #4caf50;
  }

  .yz-field-state.is-warning {
    color: #ffc107;
  }

  .yz-field-state.is-error {
    color: #f44336;
  }

  .yz-field-other {
    top: 0;
    right: 0;
    position: relative;
  }
</style>
<style>
  .yz-field .yz-cell-title {
    width: 105px;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
  }

  .yz-field.is-textarea .yz-cell-title {
    padding: 10px 0;
  }

  .yz-field.is-textarea .yz-cell-value {
    padding: 5px 0;
  }
</style>
