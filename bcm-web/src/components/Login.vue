<template>
  <el-scrollbar class="login-scroll">
    <el-row type="flex"
            class="row-bg mg-top100"
            justify="center"
            align="middle">
      <div class="login-wrap">
        <div class="login-title">用户登录</div>
        <el-form status-icon
                 :model="loginForm"
                 ref="loginForm"
                 label-width="60px">
          <el-form-item prop="username"
                        :rules="$validateRules({ required: true, requiredItem: '用户名' })">
            <el-input placeholder="请输入用户名"
                      v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password"
                        :rules="$validateRules({ required: true, requiredItem: '密码' })">
            <el-input type="password"
                      placeholder="请输入密码"
                      v-model="loginForm.password"
                      @keyup.native="login('loginForm')"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="login('loginForm')">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="reset('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-row>
  </el-scrollbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {},
  props: {},
  data () {
    return {
      loginForm: {
        username: 'unary',
        password: '123456'
      }
    }
  },
  watch: {},
  computed: {
    ...mapState({
      token: 'token'
    })
  },
  methods: {
    ...mapMutations({
      setToken: 'SET_TOKEN'
    }),
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$service.login(this.loginForm).then(result => {
            this.setToken(result.data.token)
            sessionStorage.setItem('token', result.data.token)
            this.$message({
              message: '登陆成功！',
              duration: 1200,
              type: 'success'
            })
            this.$router.push({
              path: '/register'
            })
          }).catch(reason => {
            console.error(reason)
          })
        } else {
          console.error('error submit!!')
          return false
        }
      })
    },
    reset (formName) {
      this.$refs[formName].resetFields()
    }
  },
  created () { },
  mounted () { }
}
</script>
<style lang="scss">
.login-scroll {
  height: 100%;
  .el-scrollbar__wrap {
    overflow-x: hidden;
    .mg-top100 {
      margin-top: 10%;
    }
    .login-wrap {
      width: 350px;
      padding: 10px 30px;
      margin: 0 30px 30px;
      border-radius: 5px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
      .login-title {
        color: #606266;
        font-size: 20px;
        font-weight: 600;
        margin: 30px auto;
        text-align: center;
      }
      .el-form-item__content {
        margin-left: 0 !important;
      }
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
