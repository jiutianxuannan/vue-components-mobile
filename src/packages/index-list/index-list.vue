<template>
  <div class="yz-indexlist">
    <ul class="yz-indexlist-content" ref="content"
      :style="{ 'height': currentHeight + 'px', 'margin-right': navWidth + 'px'}">
      <slot></slot>
    </ul>

    <div class="yz-indexlist-nav" @touchstart="handleTouchStart" ref="nav">
      <ul class="yz-indexlist-navlist">
        <li class="yz-indexlist-navitem" v-for="section in sections">{{ section.index }}</li>
      </ul>
    </div>

    <div class="yz-indexlist-indicator" v-if="showIndicator" v-show="moving">{{ currentIndicator }}</div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'yz-index-list',

    props: {
      height: Number,
      showIndicator: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        sections: [],
        navWidth: 0,
        indicatorTime: null,
        moving: false,
        firstSection: null,
        currentIndicator: '',
        currentHeight: this.height,
        navOffsetX: 0
      };
    },

    watch: {
      sections() {
        this.init();
      },
      height(val) {
        if (val) {
          this.currentHeight = val;
        }
      }
    },

    methods: {
      init() {
        this.$nextTick(() => {
          this.navWidth = this.$refs.nav.clientWidth;
        });
        let listItems = this.$refs.content.getElementsByTagName('li');
        if (listItems.length > 0) {
          this.firstSection = listItems[0];
        }
      },

      handleTouchStart(e) {
        if (e.target.tagName !== 'LI') {
          return;
        }
        this.navOffsetX = e.changedTouches[0].clientX;
        this.scrollList(e.changedTouches[0].clientY);
        if (this.indicatorTime) {
          clearTimeout(this.indicatorTime);
        }
        this.moving = true;
        window.addEventListener('touchmove', this.handleTouchMove);
        window.addEventListener('touchend', this.handleTouchEnd);
      },

      handleTouchMove(e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
      },

      handleTouchEnd() {
        this.indicatorTime = setTimeout(() => {
          this.moving = false;
          this.currentIndicator = '';
        }, 500);
        window.removeEventListener('touchmove', this.handleTouchMove);
        window.removeEventListener('touchend', this.handleTouchEnd);
      },

      scrollList(y) {
        let currentItem = document.elementFromPoint(this.navOffsetX, y);
        if (!currentItem || !currentItem.classList.contains('yz-indexlist-navitem')) {
          return;
        }
        this.currentIndicator = currentItem.innerText;
        let targets = this.sections.filter(section => section.index === currentItem.innerText);
        let targetDOM;
        if (targets.length > 0) {
          targetDOM = targets[0].$el;
          this.$refs.content.scrollTop = targetDOM.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top;
        }
      }
    },

    mounted() {
      if (!this.currentHeight) {
        window.scrollTo(0, 0);
        requestAnimationFrame(()=>{
          this.currentHeight = document.documentElement.clientHeight - this.$refs.content.getBoundingClientRect().top;
        });
      }
      this.init();
    }
  };
</script>
<style scoped>
  .yz-indexlist {
    width: 100%;
    position: relative;
    overflow: hidden
  }

  .yz-indexlist-content {
    margin: 0;
    padding: 0;
    overflow: auto
  }

  .yz-indexlist-nav {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    background-color: #fff;
    border-left: solid 1px #ddd;
    text-align: center;
    max-height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
  }

  .yz-indexlist-navlist {
    padding: 0;
    margin: 0;
    list-style: none;
    max-height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
  }

  .yz-indexlist-navitem {
    padding: 2px 6px;
    font-size: 12px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none
  }

  .yz-indexlist-indicator {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 50px;
    background-color: rgba(0, 0, 0, .7);
    border-radius: 5px;
    color: #fff;
    font-size: 22px
  }
</style>
