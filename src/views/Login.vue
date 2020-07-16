<template>
  <div id="login">
    <div class="from-wrap">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="admin" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="pwd" prop="password">
          <el-input v-model="ruleForm.password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      ruleForm: {
        id: 450000199101135719,
        name: '李艳',
        password: '11111'
      },
      rules: {
        name: [
          { required: true, message: 'name here', trigger: 'blur' },
          { min: 2, max: 5, message: '3-5 length', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'pass here', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios.post('/getuser', this.ruleForm)
            .then(res => {
              if (res.data) {
                this.$message({
                  message: 'admin confirm',
                  type: 'success',
                  duration: 800,
                  onClose: () => {
                    window.localStorage['token'] = JSON.stringify(res.data.token)
                    this.$router.push('/home')
                  }
                })
              } else {
                this.$message.error('admin not defined')
              }
            }).catch(err => console.log(err))
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
#login{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    opacity: 0.5;
    .from-wrap{
        color: black;
        margin: auto;
        .el-button{
            background: none;
            border: 1px solid #ccc;
            color: #ccc;
        }
    }
}
</style>
