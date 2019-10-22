<template>
  <li class="yz-indexsection">
    <p class="yz-indexsection-index">{{ index }}</p>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script type="text/babel">
  export default {
    name: 'yz-index-section',

    props: {
      index: {
        type: String,
        required: true
      }
    },

    mounted() {
      this.$parent.sections.push(this);
    },

    beforeDestroy() {
      let index = this.$parent.sections.indexOf(this);
      if (index > -1) {
        this.$parent.sections.splice(index, 1);
      }
    }
  };
</script>
<style scoped>
  .yz-indexsection {
    padding: 0;
    margin: 0
  }

  .yz-indexsection-index {
    margin: 0;
    padding: 10px;
    background-color: #fafafa
  }

  .yz-indexsection-index+ul {
    padding: 0
  }
</style>
