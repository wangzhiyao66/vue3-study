<template>
  <div class="login-box">
    <div class="form">
      <p class="title-text">欢迎来到Control系统！</p>
      <el-form :label-position="labelPosition" status-icon :rules="rules" ref="formLogin" label-width="80px"
        :model="formLabel">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="formLabel.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formLabel.password" placeholder="请输入密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" class="login-btn" @click="submitForm()">登录</el-button>
          <el-button type="primary" class="login-btn" @click="resetForm()">立即重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { reactive, ref, defineComponent } from 'vue'
import { UserInfoStore } from '@/stores/UserInfo'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const store = UserInfoStore();
const router = useRouter();
const formLogin = ref(null);
const labelPosition = ref('left')

// 创建响应式表单
const formLabel = reactive({
  name: '',
  password: '',
})

// 表单密码校验规则
const validatePass = (
  rule: unknown,
  value: string,
  callback: (arg0?: Error | undefined) => void,
) => {
  console.log('Pass', value)
  if (value == '') {
    callback(new Error('请输入密码'))
  } else {
    // callback()
    value.length >= 5 ? callback() : callback(new Error('最小长度5非空字符！'))
    // const phoneReg = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
    // phoneReg.test(value)
    //   ? callback()
    //   : callback(new Error('手机号码格式不对，请输入正确手机号'))
  }
}
// 表单用户名校验规则
const validateName = (
  rule: unknown,
  value: string,
  callback: (arg0?: Error | undefined) => void,
) => {
  console.log('name', value)

  if (value == '') {
    callback(new Error('请输入用户名'))
  } else {
    const reg = /^[a-zA-Z0-9_-]{4,16}$/ //4-16位字符，
    reg.test(value) ? callback() : callback(new Error('用户名格式不正确，需要4-16位字符'))
  }
}
//表单校验
const rules = reactive({
  name: [
    { required: true, massage: '请输入用户名', trigger: 'blur' },
    { validator: validateName, trigger: 'blur' },
  ],
  password: [
    { required: true, massage: '请输入密码', trigger: 'blur' },
    { validator: validatePass, trigger: 'blur' },
  ],
})

function submitForm() {
  this.formLogin.validate((valid: any) => {
    console.log('valid', valid);
    // 登录成功
    if (valid) {
      let UserPermission = null;
      // admin 用户具有所有模块的查看权限
      if (this.formLabel.name == 'admin') {
        UserPermission = ['All', 'Home', 'Over', 'Story', 'Task', 'Problem', ' Version', 'Setting', 'UserCenter']
      } else {
        UserPermission = ['Home', 'Over', 'Story', 'Task', 'Problem', 'UserCenter']
      }
      let obj = {
        userName: this.formLabel.name,
        passWord: this.formLabel.password,
        permission: UserPermission
      }
      // 模拟登录成功
      store.login(obj);
      ElMessage({
        message: '恭喜你，登录成功',
        type: 'success',
      })
      // 路由跳转
      router.push({ path: '/home', query: { id: '123' } })
      // router.push({ path: '/home', params:obj })
      // router.push({ name: 'Home', params: { id: 1 } });
      console.log(this.formLabel.name);
    }
  })

}

function resetForm() {
  this.formLogin.resetFields()
}
</script>
<style lang="less" scoped>
:deep(.el-input__wrapper) {
  padding: 0;
  width: 100%;
}

//  /deep/ .el-input__wrapper {
//   padding: 0;
//   width: 100%;
// }
.login-box {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.title-text {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 5px;
  text-align: left;
  padding-left: 80px;
  margin: 0 0 30px 0;
}

.form {
  width: 350px;
  background: #fff;
  text-align: center;
}

.login-btn {
  width: 125px;
  letter-spacing: 3px;
  text-align: center;
}
</style>
@/stores/UserInfo
