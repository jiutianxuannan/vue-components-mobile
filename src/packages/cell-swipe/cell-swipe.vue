<template>
  <x-cell v-clickoutside:touchstart="swipeMove" @click.native="swipeMove()" @touchstart.native="startDrag"
    @touchmove.native="onDrag" @touchend.native="endDrag" class="yz--cell-swipe" :title="title" :icon="icon"
    :label="label" :to="to" :is-link="isLink" ref="cell" :value="value">
    <div slot="right" class="yz--cell-swipe-buttongroup" ref="right">
      <a class="yz--cell-swipe-button" v-for="btn in right" :style="btn.style"
        @click.prevent.stop="btn.handler && btn.handler(), swipeMove()" v-html="btn.content"></a>
    </div>
    <div slot="left" class="yz--cell-swipe-buttongroup" ref="left">
      <a class="yz--cell-swipe-button" v-for="btn in left" :style="btn.style"
        @click.prevent.stop="btn.handler && btn.handler(), swipeMove()" v-html="btn.content"></a>
    </div>
    <slot></slot>
    <span v-if="$slots.title" slot="title">
      <slot name="title"></slot>
    </span>
    <span v-if="$slots.icon" slot="icon">
      <slot name="icon"></slot>
    </span>
  </x-cell>
</template>

<script>
  import { once } from './util';
  import XCell from './cell';
  import Clickoutside from './clickoutside';
  export default {
    name: 'yz-cell-swipe',

    components: { XCell },

    directives: { Clickoutside },

    props: {
      to: String,
      left: Array,
      right: Array,
      icon: String,
      title: String,
      label: String,
      isLink: Boolean,
      value: {}
    },

    data() {
      return {
        start: { x: 0, y: 0 }
      };
    },

    mounted() {
      this.wrap = this.$refs.cell.$el.querySelector('.yz-cell-wrapper');
      this.leftElm = this.$refs.left;
      this.rightElm = this.$refs.right;
      this.leftWrapElm = this.leftElm.parentNode;
      this.rightWrapElm = this.rightElm.parentNode;
      this.leftWidth = this.leftElm.getBoundingClientRect().width;
      this.rightWidth = this.rightElm.getBoundingClientRect().width;

      this.leftDefaultTransform = this.translate3d(-this.leftWidth - 1);
      this.rightDefaultTransform = this.translate3d(this.rightWidth);

      this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform;
      this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform;
    },

    methods: {
      resetSwipeStatus() {
        this.swiping = false;
        this.opened = true;
        this.offsetLeft = 0;
      },

      translate3d(offset) {
        return `translate3d(${offset}px, 0, 0)`;
      },

      setAnimations(val) {
        this.wrap.style.transitionDuration = val;
        this.rightWrapElm.style.transitionDuration = val;
        this.leftWrapElm.style.transitionDuration = val;
      },

      swipeMove(offset = 0) {
        this.wrap.style.webkitTransform = this.translate3d(offset);
        this.rightWrapElm.style.webkitTransform = this.translate3d(this.rightWidth + offset);
        this.leftWrapElm.style.webkitTransform = this.translate3d(-this.leftWidth + offset);
        offset && (this.swiping = true);
      },

      swipeLeaveTransition(direction) {
        setTimeout(() => {
          this.swipeLeave = true;

          // left
          if (direction > 0 && -this.offsetLeft > this.rightWidth * 0.4) {
            this.swipeMove(-this.rightWidth);
            this.resetSwipeStatus();
            return;
            // right
          } else if (direction < 0 && this.offsetLeft > this.leftWidth * 0.4) {
            this.swipeMove(this.leftWidth);
            this.resetSwipeStatus();
            return;
          }

          this.swipeMove(0);
          once(this.wrap, 'webkitTransitionEnd', _ => {
            this.wrap.style.webkitTransform = '';
            this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform;
            this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform;
            this.swipeLeave = false;
            this.swiping = false;
          });
        }, 0);
      },

      startDrag(evt) {
        evt = evt.changedTouches ? evt.changedTouches[0] : evt;
        this.dragging = true;
        this.start.x = evt.pageX;
        this.start.y = evt.pageY;
        this.direction = '';
      },

      onDrag(evt) {
        if (this.opened) {
          if (!this.swiping) {
            this.swipeMove(0);
            this.setAnimations('');
          }
          this.opened = false;
          return;
        }
        if (!this.dragging) return;

        let swiping;
        const e = evt.changedTouches ? evt.changedTouches[0] : evt;
        const offsetTop = e.pageY - this.start.y;
        const offsetLeft = this.offsetLeft = e.pageX - this.start.x;

        const y = Math.abs(offsetTop);
        const x = Math.abs(offsetLeft);

        this.setAnimations('0ms');

        if (this.direction === '') {
          this.direction = x > y ? 'horizonal' : 'vertical';
        }

        if (this.direction === 'horizonal') {
          evt.preventDefault();
          evt.stopPropagation();

          swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
          if (!swiping) return;

          if ((offsetLeft < 0 && -offsetLeft > this.rightWidth) ||
            (offsetLeft > 0 && offsetLeft > this.leftWidth) ||
            (offsetLeft > 0 && !this.leftWidth) ||
            (offsetLeft < 0 && !this.rightWidth)) {
          } else {
            this.swipeMove(offsetLeft);
          }
        }
      },

      endDrag() {
        this.direction = '';
        this.setAnimations('');
        if (!this.swiping) return;
        this.swipeLeaveTransition(this.offsetLeft > 0 ? -1 : 1);
      }
    }
  };
</script>

<style scoped>
  .yz--cell-swipe .yz--cell-wrapper {
    position: relative;
  }

  .yz--cell-swipe .yz--cell-wrapper,
  .yz--cell-swipe .yz--cell-left,
  .yz--cell-swipe .yz--cell-right {
    -webkit-transition: -webkit-transform 150ms ease-in-out;
    transition: -webkit-transform 150ms ease-in-out;
    transition: transform 150ms ease-in-out;
  }

  .yz--cell-swipe-buttongroup {
    height: 100%;
  }

  .yz--cell-swipe-button {
    height: 100%;
    display: inline-block;
    padding: 0 10px;
    line-height: 48px;
  }
</style>
