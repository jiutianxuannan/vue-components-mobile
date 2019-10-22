<template>
  <div class="yz-range" :class="{ 'yz-range--disabled': disabled }">
    <slot name="start"></slot>
    <div class="yz-range-content" ref="content">
      <div class="yz-range-runway" :style="{ 'border-top-width': barHeight + 'px' }"></div>
      <div class="yz-range-progress" :style="{ width: progress + '%', height: barHeight + 'px' }"></div>
      <div class="yz-range-thumb" ref="thumb" :style="{ left: progress + '%' }"></div>
    </div>
    <slot name="end"></slot>
  </div>
</template>
<script type="text/babel">
  import draggable from './draggable';

  export default {
    name: 'yz-range',

    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: Number
      },
      barHeight: {
        type: Number,
        default: 1
      }
    },

    computed: {
      progress() {
        const value = this.value;
        if (typeof value === 'undefined' || value === null) return 0;
        return Math.floor((value - this.min) / (this.max - this.min) * 100);
      }
    },

    mounted() {
      const thumb = this.$refs.thumb;
      const content = this.$refs.content;

      const getThumbPosition = () => {
        const contentBox = content.getBoundingClientRect();
        const thumbBox = thumb.getBoundingClientRect();
        return {
          left: thumbBox.left - contentBox.left,
          top: thumbBox.top - contentBox.top,
          thumbBoxLeft: thumbBox.left
        };
      };

      let dragState = {};
      draggable(thumb, {
        start: (event) => {
          if (this.disabled) return;
          const position = getThumbPosition();
          const thumbClickDetalX = event.clientX - position.thumbBoxLeft;
          dragState = {
            thumbStartLeft: position.left,
            thumbStartTop: position.top,
            thumbClickDetalX: thumbClickDetalX
          };
        },
        drag: (event) => {
          if (this.disabled) return;
          const contentBox = content.getBoundingClientRect();
          const deltaX = event.pageX - contentBox.left - dragState.thumbStartLeft - dragState.thumbClickDetalX;
          const stepCount = Math.ceil((this.max - this.min) / this.step);
          const newPosition = (dragState.thumbStartLeft + deltaX) - (dragState.thumbStartLeft + deltaX) % (contentBox.width / stepCount);

          let newProgress = newPosition / contentBox.width;

          if (newProgress < 0) {
            newProgress = 0;
          } else if (newProgress > 1) {
            newProgress = 1;
          }

          this.$emit('input', Math.round(this.min + newProgress * (this.max - this.min)));
        },
        end: () => {
          if (this.disabled) return;
          this.$emit('change', this.value);
          dragState = {};
        }
      });
    }
  };
</script>
<style scoped>
  .yz-range {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 30px;
    line-height: 30px
  }

  .yz-range>* {
    display: -ms-flexbox;
    display: flex;
    display: -webkit-box
  }

  .yz-range *[slot=start] {
    margin-right: 5px
  }

  .yz-range *[slot=end] {
    margin-left: 5px
  }

  .yz-range-content {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-right: 30px
  }

  .yz-range-runway {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0;
    right: -30px;
    border-top-color: #a9acb1;
    border-top-style: solid
  }

  .yz-range-thumb {
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    cursor: move;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .4)
  }

  .yz-range-progress {
    position: absolute;
    display: block;
    background-color: #26a2ff;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 0
  }

  .yz-range--disabled {
    opacity: 0.5
  }
</style>
