<template>
  <div>
    <h1 class="kj-name">吴松 的空间</h1>
    <div>
      <router-link to="/ws/QRcode">QRcode二维码</router-link>
    </div>
    <div>
      <router-link to="/ws/video">video</router-link>
    </div>
    
<!-- <vue-qr :logoSrc="imageUrl" text="xxx" :size="200"></vue-qr> -->
<div id="qrCode" ref="qrCodeDiv"></div>
  </div>
</template>


<script>
  import QRCode from 'qrcodejs2';

  export default {

    data() {
      return {
        // imageUrl: require("../assets/logo.png"),
      }
    },
    mounted() {
     new QRCode(this.$refs.qrCodeDiv, {
       text: "https://www.baidu.com",
       width: 200,
       height: 200,
       colorDark: "#333", //二维码颜色
       colorLight: "#fff", //二维码背景色
       correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
     });
    }


  }
</script

<style scoped>
</style>
