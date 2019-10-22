<template>
  <div class="page-swipe">
    <h1 class="page-title">Swipe</h1>
    <!-- <p class="page-swipe-desc">基础用法</p>
    <yz-swipe :auto="4000">
      <yz-swipe-item class="slide1">1</yz-swipe-item>
      <yz-swipe-item class="slide2">2</yz-swipe-item>
      <yz-swipe-item class="slide3">3</yz-swipe-item>
    </yz-swipe> -->

    <yz-swipe :auto="0">
      <yz-swipe-item class="slide1">1</yz-swipe-item>
      <yz-swipe-item class="slide2">2</yz-swipe-item>
      <yz-swipe-item class="slide3">3</yz-swipe-item>
    </yz-swipe>

    <!-- <p class="page-swipe-desc">设置默认显示页</p>
    <yz-swipe :auto="0" :defaultIndex="1">
      <yz-swipe-item class="slide1">1</yz-swipe-item>
      <yz-swipe-item class="slide2">2</yz-swipe-item>
      <yz-swipe-item class="slide3">3</yz-swipe-item>
    </yz-swipe> -->
  </div>
</template>

<style>
  .page-swipe {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
  }

  .page-swipe .yz-swipe {
    height: 200px !important;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }

  .page-swipe .yz-swipe-item {
    line-height: 200px;
  }

  .page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
  }

  .page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
  }

  .page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
</style>
