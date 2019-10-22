<template>
  <div class="page-cell">
    <div class="page-title">Cell Swipe</div>
    <yz-cell-swipe v-for="n in 15" :right="rightButtons" title="swipe me">
    </yz-cell-swipe>
  </div>
</template>

<script>
  export default {
    created() {
      this.rightButtons = [
        {
          content: '取消',
          style: { background: 'lightgray', color: '#fff' }
        },
        {
          content: '删除',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$messagebox('delete')
        }
      ];
    },

    methods: {
      leftButtonHandler(evt) {
        console.log(123);
      }
    }
  };
</script>
