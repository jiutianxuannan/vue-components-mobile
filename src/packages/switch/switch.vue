<template>
  <label class="yz-switch">
    <input class="yz-switch-input" :disabled="disabled" @change="$emit('change', currentValue)" type="checkbox"
      v-model="currentValue">
    <span class="yz-switch-core"></span>
    <div class="yz-switch-label">
      <slot></slot>
    </div>
  </label>
</template>

<script>
  export default {
    name: 'yz-switch',

    props: {
      value: Boolean,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      currentValue: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    }
  };
</script>

<style scoped>
  .yz-switch {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
  }

  .yz-switch * {
    pointer-events: none;
  }

  .yz-switch-label {
    margin-left: 10px;
    display: inline-block;
  }

  .yz-switch-label:empty {
    margin-left: 0;
  }

  .yz-switch-core {
    display: inline-block;
    position: relative;
    width: 52px;
    height: 32px;
    border: 1px solid #d9d9d9;
    border-radius: 16px;
    box-sizing: border-box;
    background: #d9d9d9;
  }

  .yz-switch-core::after,
  .yz-switch-core::before {
    content: " ";
    top: 0;
    left: 0;
    position: absolute;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    border-radius: 15px;
  }

  .yz-switch-core::after {
    width: 30px;
    height: 30px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
  }

  .yz-switch-core::before {
    width: 50px;
    height: 30px;
    background-color: #fdfdfd;
  }

  .yz-switch-input {
    display: none;
  }

  .yz-switch-input:checked+.yz-switch-core {
    border-color: #26a2ff;
    background-color: #26a2ff;
  }

  .yz-switch-input:checked+.yz-switch-core::before {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  .yz-switch-input:checked+.yz-switch-core::after {
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
</style>
