<template>
  <el-scrollbar class="main-wrap">
    <el-row type="flex"
            class="row-bg"
            justify="center"
            align="middle">
      <el-card shadow="always">
        <div slot="header">
          <span class="card-title">获取注册码</span>
        </div>
        <div>
          <el-form status-icon
                   :model="registerForm"
                   ref="registerForm"
                   label-width="70px"
                   label-position="left">
            <el-form-item prop="name"
                          :rules="$validateRules({ required: true, requiredItem: '姓名' })"
                          label="姓名">
              <el-input v-model="registerForm.name"></el-input>
            </el-form-item>
            <el-form-item prop="email"
                          :rules="$validateRules({ required: true, requiredItem: '邮箱', type: 'email' })"
                          label="邮箱">
              <el-input v-model="registerForm.email"></el-input>
            </el-form-item>
            <el-form-item prop="mobile"
                          :rules="$validateRules({ required: true, requiredItem: '手机号', type: 'mobile' })"
                          label="手机号">
              <el-input v-model="registerForm.mobile"></el-input>
            </el-form-item>
            <el-form-item prop="location"
                          :rules="$validateRules({ required: true, requiredItem: '所在地' })"
                          label="所在地">
              <el-select v-model="registerForm.location"
                         placeholder="请选择">
                <el-option v-for="item in locations"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="validPeriod"
                          :rules="$validateRules({ required: true, requiredItem: ' ' })"
                          label="有效期">
              <el-radio-group v-model="registerForm.validPeriod">
                <el-radio :label="1">一个月</el-radio>
                <el-radio :label="3">三个月</el-radio>
                <el-radio :label="12">一年</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click="register('registerForm')">注册</el-button>
              <el-button @click="reset('registerForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-row>
  </el-scrollbar>
</template>

<script>
export default {
  data () {
    return {
      registerForm: {
        name: 'admin',
        email: 'admin@163.com',
        mobile: '13333333333',
        location: '南京',
        validPeriod: 1
      },
      locations: [{
        value: '1',
        label: '南京'
      }, {
        value: '2',
        label: '北京'
      }, {
        value: '3',
        label: '上海'
      }, {
        value: '4',
        label: '广州'
      }, {
        value: '5',
        label: '重庆'
      }, {
        value: '6',
        label: '深圳'
      }, {
        value: '7',
        label: '杭州'
      }, {
        value: '8',
        label: '武汉'
      }]
    }
  },
  methods: {
    register (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$service.getRegistrationCode(this.registerForm).then(result => {
            this.$alert(result.data.registrationCode, '注册码', {
              confirmButtonText: '关闭',
              type: 'success',
              callback: action => {
              }
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
  }
}
</script>

<style lang="scss">
.main-wrap {
  width: 100%;
  height: 100%;
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .el-row {
    min-width: 800px;
    .el-card {
      min-width: 600px;
      margin: 100px;
      .card-title {
        font-size: 18px;
        font-weight: 800;
      }
      .el-form {
        width: 40%;
        min-width: 316px;
        margin: 20px auto;
        .el-select {
          width: 100%;
        }
      }
    }
  }
}
</style>
