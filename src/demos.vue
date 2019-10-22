<template>
  <section class="page-demo">
    <div v-for="group in navs">
      <div class="page-index-title" v-text="group.title"></div>
      <yz-cell v-for="item in group.list" :to="item.path" is-link>
        <div slot="title">
          <i :class="['indexicon', 'icon-' + item.icon]"></i>
          <span>{{ item.name }}</span>
        </div>
      </yz-cell>
    </div>
  </section>
</template>
<script type="text/babel">
  import { navs } from './route';

  export default {
    data() {
      return {
        navs: []
      };
    },

    created() {
      this.navs = navs;
    }
  };
</script>
<style>
  .page-demo {
    padding-bottom: 50px;

    .indexicon {
      font-size: 22px;
      color: #26a2ff;
      display: inline-block;
      width: 30px;
      vertical-align: middle;

      &.icon-swipe {
        font-size: 26px;
      }

      &.icon-checklist {
        font-size: 18px;
      }
    }
  }

  .page-index-title {
    font-size: 20px;
    padding: 20px 0;
    text-align: center;
    display: block;
    line-height: 1;
    margin-bottom: 10px;
  }

  .page-title {
    font-size: 20px;
    margin: 20px auto;
    text-align: center;
    display: block;
    line-height: 1;
  }

  .page-part {
    margin-bottom: 15px;
  }
</style>
