<template>
  <div class="page-popup">
    <h1 class="page-title">Popup</h1>
    <div class="page-popup-wrapper">
      <yz-button @click.native="popupVisible1 = true" size="large" ref="button">中部弹出 popup</yz-button>
      <yz-button @click.native="popupVisible2 = true" size="large">上侧弹出 popup</yz-button>
      <!-- <yz-button @click.native="popupVisible3 = true" size="large">右侧弹出 popup</yz-button> -->
    </div>
    <yz-popup v-model="popupVisible1" popup-transition="popup-fade" class="yz-popup-1">
      <h1>popup</h1>
      <p>/ ˈpɑpˌʌp /</p>
      <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
      <p>adj. 弹起的; 有自动起跳装置的</p>
    </yz-popup>
    <yz-popup v-model="popupVisible2" position="top" class="yz-popup-2" :modal="false">
      <p>更新成功</p>
    </yz-popup>
    <yz-popup v-model="popupVisible3" position="right" class="yz-popup-3" :modal="false">
      <yz-button @click.native="popupVisible3 = false" size="large" type="primary">关闭 popup</yz-button>
    </yz-popup>
  </div>
</template>

<style>
  .page-popup-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .page-popup-wrapper button:not(:last-child) {
    margin-bottom: 20px;
  }

  .yz-popup-1 {
    width: 200px;
    border-radius: 8px;
    padding: 10px;
    transform: translate(-50%, 0);

    h1 {
      font-size: 20px;
      color: #26a2ff;
    }

    p {
      margin-bottom: 10px;
    }
  }

  .yz-popup-1:before {
    triangle: 10px top #fff;
    content: '';
    position: absolute;
    top: -20px;
    right: 50px;
  }

  .yz-popup-2 {
    width: 100%;
    height: 50px;
    text-align: center;
    background-color: rgba(0, 0, 0, .7) !important;
    backface-visibility: hidden;
  }

  .yz-popup-2 p {
    line-height: 50px;
    color: #fff !important;
  }

  .yz-popup-3 {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .yz-popup-3 .yz-button {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        popupVisible1: false,
        popupVisible2: false,
        popupVisible3: false
      };
    },

    watch: {
      popupVisible2(val) {
        if (val) {
          setTimeout(() => {
            this.popupVisible2 = false;
          }, 2000);
        }
      }
    }
  };
</script>
