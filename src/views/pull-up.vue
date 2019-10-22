<template>
  <div class="page-loadmore">
    <h1 class="page-title">Pull up</h1>
    <p class="page-loadmore-desc">上拉加载</p>
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <yz-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
        ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
        <div slot="bottom" class="yz-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <yz-spinner type="snake"></yz-spinner>
          </span>
        </div>
      </yz-loadmore>
    </div>
  </div>
</template>

<style>
  .page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px;
  }

  .page-loadmore-desc:last-of-type {
    border-bottom: solid 1px #eee;
  }

  .page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #eee;
    text-align: center;
  }

  .page-loadmore-listitem:first-child {
    border-top: solid 1px #eee;
  }

  .page-loadmore-wrapper {
    overflow: scroll;
  }

  .page-loadmore .yz-spinner {
    display: inline-block;
    vertical-align: middle;
  }

  .yz-loadmore-bottom span {
    display: inline-block;
    transition: .2s linear;
    vertical-align: middle;
  }

  .yz-loadmore-bottom .is-rotate {
    transform: rotate(180deg);
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0
      };
    },

    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },

      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      }
    },

    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>
