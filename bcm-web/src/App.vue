<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapMutations({
      setToken: 'SET_TOKEN'
    })
  },
  created () {
    // 在页面加载时读取sessionStorage里的token信息
    if (sessionStorage.getItem('token')) {
      this.setToken(sessionStorage.getItem('token'))
    }
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
}
.el-loading-spinner {
  .path {
    stroke: #fff;
  }
  .el-loading-text {
    color: #fff;
  }
}
.el-message-box__message p {
  word-break: break-all;
}
</style>
