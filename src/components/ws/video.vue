<template>
 <div class='demo'>
  <video-player  class="video-player-box"
                   ref="videoPlayer"
                   :options="playerOptions"
                   :playsinline="true"
                   customEventName="customstatechangedeventname"
                   @play="onPlayerPlay($event)"
                   @pause="onPlayerPause($event)"
                   @ended="onPlayerEnded($event)"
                   @statechanged="playerStateChanged($event)"
                   @ready="playerReadied">
    </video-player>
 </div>
 </template>
<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'
  export default {
    data() {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "http://172.16.6.78//jiubopeixun/audio/weijiyishi_quanlufei.mp4"
          }],
          poster: "/static/logo.png",
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: true,
            currentTimeDisplay: true, // 当前时间
            // volumeControl: false, // 声音控制键
            playToggle: true, // 暂停和播放键
            progressControl: true, // 进度条
            fullscreenToggle: true // 全屏按钮
          }
        }
      }
    },
    created() {
      this.playerOptions.controlBar.progressControl = false
    }
    ,
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },

      onPlayerEnded(player){
        console.log('the player is end', player)
      }


    }
  }
</script>
<style>
  .video-item {
    width: 100%;
    height: 100%;
  }
  .video-player-box div.video-js{width: 80%;height: 600px;margin: 0 auto;}

 .demo .vjs-big-play-button {
   background-color: rgba(0,0,0,0.45);
    font-size: 3.5em;
    border-radius: 50%;
    height: 2em !important;
    line-height: 2em !important;
    margin-top: -1em !important;
    margin-left: -1em !important;
    width: 2em !important;
    outline: none;
    top: 50%;
    left: 50%;
  }

</style>
