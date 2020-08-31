<template>
  <div class="container">
          <div class="share-img">
              <img :src="imgUrl" alt="分享图">
          </div>
          <div class="creat-img" ref="box">
              <img src="../../assets/img/qrcode-bg.png" alt="分享背景图">
              <div id="qrcode" class="qrcode"></div>
          </div>

          <!-- <h3>QRcode二维码</h3>
          <div id="qrcode"></div> -->
          <el-button type="primary" @click="createQrcode">合成图片</el-button>
           <el-button type="primary" @click="picDowns">下载图片</el-button>
      </div>

</template>

<script>
  // import QRCode from 'qrcodejs2'
  import { qrcanvas } from 'qrcanvas'
  import html2canvas from 'html2canvas'
  export default {
     data () {
          return {
              imgUrl:'',
          }
      },

    mounted () {
        // this.qrcode();
    },

    watch:{
        imgUrl(val,oldval){
            //监听到imgUrl有变化以后 说明新图片已经生成 隐藏DOM
            this.$refs.box.style.display = "none";
        }
    },
    created() {
      // this.createQrcode();

    },

    methods: {
      // qrcode() {
      //   let qrcode = new QRCode('qrcode', {
      //     width: 132,
      //     height: 132,
      //     text: 'https://www.baidu.com', // 二维码地址
      //     colorDark : "#000",
      //     colorLight : "#fff",
      //   })
      // },
      createQrcode(){
        let that = this;
        that.$nextTick(function () {
           //生成二维码
           var canvas1 = qrcanvas({
                data: decodeURIComponent('https://www.baidu.com/'),
                size:168
            });
            document.getElementById("qrcode").innerHTML = '';
            document.getElementById('qrcode').appendChild(canvas1);

            html2canvas(that.$refs.box).then(function(canvas) {
                that.imgUrl =  URL.createObjectURL(that.base64ToBlob(canvas.toDataURL()))

            });
         })

         // setTimeout(function (){
         //   that.picDowns();
         // },1000)
      },

     //下载图片
      picDowns() {

        var alink = document.createElement("a");
        alink.href = this.imgUrl;
        alink.download = "pic"; //图片名
        alink.click();
      },


       //base64转blob
        base64ToBlob(code) {
            let parts = code.split(';base64,');
            let contentType = parts[0].split(':')[1];
            let raw = window.atob(parts[1]);
            let rawLength = raw.length;

            let uInt8Array = new Uint8Array(rawLength);

            for (let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
            }
            return new Blob([uInt8Array], {type: contentType});
        },

    }
  }
</script>

<style scoped>
.share-img{
display: none;
}

.creat-img{
  /* visibility: hidden; */
  /* display: none; */
  width: 414px;
  height: 585px;
  position: relative;
}
.creat-img  img{
  width: 100%;
  height: 100%;
  z-index: 3;
}
.creat-img .qrcode{
  position: absolute;
  left: 128px;
  bottom: 115px;
 /* left: 50%;
  margin-left: -64px; */
  z-index: 5;
}

</style>
<!-- service wdapache start|stop|restart wdcp -->