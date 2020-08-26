<template>
  <div class="contenter">
    <div class="menu">

        <el-menu
          :style="menuHeight"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>

          <el-menu-item index="/ws/ws">
            <i class="el-icon-menu"></i>
            <span slot="title">吴松</span>
          </el-menu-item>
          <el-menu-item index="/yy/yy">
            <i class="el-icon-menu"></i>
            <span slot="title">杨勇</span>
          </el-menu-item>
          <el-menu-item index="/lm/lm">
            <i class="el-icon-document"></i>
            <span slot="title">李密</span>
          </el-menu-item>
          <el-menu-item index="/far/far">
            <i class="el-icon-setting"></i>
            <span slot="title">冯安然</span>
          </el-menu-item>

        </el-menu>

    </div>

    <div class="main">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuHeight: {
        height: innerHeight + 'px'
      }
    }
  },

  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.contenter{width: 100%;overflow: hidden;}
.contenter .menu{width: 15%;overflow: hidden;float: left;}
.contenter .main{width: 85%;overflow: hidden;float: left;}
</style>
