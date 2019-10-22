<template>
  <div class="page-cell">
    <div class="page-title">Cell</div>
    <yz-cell title="标题文字"></yz-cell>
    <yz-cell title="标题文字" value="说明文字"></yz-cell>
    <yz-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </yz-cell>
    <!-- <yz-cell title="标题文字">
      <yz-button size="small" type="primary" icon="back">按钮</yz-button>
    </yz-cell> -->

    <!-- <yz-cell title="标题" label="描述信息" is-link></yz-cell>

    <yz-cell title="原生跳转" label="跳转到 https://mint-ui.github.io" is-link to="https://mint-ui.github.io"></yz-cell>
    <yz-cell title="路由跳转" label="跳转到 /#/toast" is-link :to="{ name: 'Toast' }"></yz-cell> -->
  </div>
</template>
