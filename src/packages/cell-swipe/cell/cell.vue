<template>
  <a class="yz-cell" :href="href">
    <span class="yz-cell-mask" v-if="isLink"></span>
    <div class="yz-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="yz-cell-wrapper">
      <div class="yz-cell-title">
        <slot name="icon">
          <i v-if="icon" class="mintui" :class="icon"></i>
        </slot>
        <slot name="title">
          <span class="yz-cell-text" v-text="title"></span>
          <span v-if="label" class="yz-cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="yz-cell-value" :class="{ 'is-link' : isLink }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
      <i v-if="isLink" class="yz-cell-allow-right"></i>
    </div>
    <div class="yz-cell-right">
      <slot name="right"></slot>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'yz-cell',

    props: {
      to: [String, Object],
      icon: String,
      title: String,
      label: String,
      isLink: Boolean,
      value: {}
    },

    computed: {
      href() {
        if (this.to && !this.added && this.$router) {
          const resolved = this.$router.match(this.to);
          if (!resolved.matched.length) return this.to;

          this.$nextTick(() => {
            this.added = true;
            this.$el.addEventListener('click', this.handleClick);
          });
          return resolved.fullPath || resolved.path;
        }
        return this.to;
      }
    },

    methods: {
      handleClick($event) {
        $event.preventDefault();
        this.$router.push(this.href);
      }
    }
  };
</script>

<style scoped>
  .yz-cell {
    background-color: #fff;
    box-sizing: border-box;
    color: inherit;
    min-height: 48px;
    display: block;
    overflow: hidden;
    position: relative;
    text-decoration: none;
  }

  .yz-cell img {
    vertical-align: middle;
  }

  .yz-cell:first-child .yz-cell-wrapper {
    background-origin: border-box;
  }

  .yz-cell:last-child {
    background-image: -webkit-linear-gradient(bottom, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .yz-cell-wrapper {
    background-image: -webkit-linear-gradient(top, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 120% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-origin: content-box;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 16px;
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
    padding: 0 10px;
    width: 100%;
  }

  .yz-cell-mask::after {
    background-color: #000;
    content: " ";
    opacity: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }

  .yz-cell-mask:active::after {
    opacity: .1;
  }

  .yz-cell-text {
    vertical-align: middle;
  }

  .yz-cell-label {
    color: #888;
    display: block;
    font-size: 12px;
    margin-top: 6px;
  }

  .yz-cell-title {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .yz-cell-value {
    color: #888;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .yz-cell-value.is-link {
    margin-right: 24px;
  }

  .yz-cell-left {
    position: absolute;
    height: 100%;
    left: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  .yz-cell-right {
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  .yz-cell-allow-right::after {
    border: solid 2px #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    top: 50%;
    right: 20px;
    position: absolute;
    width: 5px;
    height: 5px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
</style>
