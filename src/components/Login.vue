<template>
  <div class="login_container login_container01">
    <el-container>
      
      <el-main>
        <div class="login_box">
          <div class="user_title">会员登陆</div>
          <el-form ref="login_form" label-width="auto" :model="login_form" :rules="loginRules" hide-required-asterisk>
            <el-form-item label="账号" prop="phone">
              <el-input v-model="login_form.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="login_form.password"></el-input>
            </el-form-item>
            <el-form-item label="">

              <div class="juzhumima_zhucezhanghao">
                <el-checkbox v-model="checked">记住密码</el-checkbox>
                <el-link :underline="false" href="/#/register" class="zhucezhanghao">注册账号</el-link>
              </div>

            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('login_form')">登录</el-button>
            </el-form-item>
          </el-form>
          <div class="other_login">
            <span>其他登录方式</span>
            <!-- <a href="javascript:;" @click='toLogin'>
              <img class="avatar size-S" src="http://admin.qianlixunta.com/static/qq.jpg" title="QQ登录">
            </a> -->
            <!-- <img src="../assets/qq01.svg" alt="" /> -->
            <a href="http://admin.qianlixunta.com/wpapi/register/wx_login" target="_blank">
              <img src="../assets/weixin01.svg" alt="" />
            </a>
            <!-- <a href="javascript:;" @click="weibo_login">
              <img src="../assets/weibo01.svg" alt="" />
            </a> -->
          </div>
        </div>
      </el-main>
      
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_form: {
        phone: '',
        password: ''
      },
      loginRules: {
        phone: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      },
      // 是否记住密码
      checked: false
    }
  },
  created: function() {
    this.$emit('header', true);

    // 是否记住密码
    this.remember_password();
  },
  methods: {
    // 初始化记住密码
    remember_password() {
      for (let i = 0; i < window.document.cookie.split(';').length; i++) {
        let arr = window.document.cookie.split(';')[i].split('=');
        if (arr[0].trim() == 'phone') {
          // console.log(arr[1]);
          this.login_form.phone = arr[1];
        } else if (arr[0].trim() == 'password') {
          // console.log(arr[1]);
          this.login_form.password = arr[1];
        } else if (arr[0].trim() == 'remember') {
          this.checked = Boolean(arr[1]);
        }
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.login_form);
          if (this.checked) {
            let date = new Date();
            date.setDate(date.getDate() + 7); // 有效期 7 天
            // 设置cookie
            document.cookie = 'phone=' + this.login_form.phone + ';expires=' + date;
            document.cookie = 'password=' + this.login_form.password + ';expires=' + date;
            document.cookie = 'remember=' + this.checked + ';expires=' + date;
          }else {
            let date = new Date();
            date.setDate(date.getDate() - 1);
            // 删除cookie
            document.cookie = 'phone=' + '' + ';expires=' + date;
            document.cookie = 'password=' + '' + ';expires=' + date;
            document.cookie = 'remember=' + this.checked + ';expires=' + date;
          }
          this.$axios.post('/wpapi/register/login', this.login_form)
          .then((result) => {
            // console.log(result);
            if (result.status !== '200') return this.$message.error(result.msg);
            this.$message.success('登陆成功');
            window.localStorage.setItem('token', result.data.token);
            window.localStorage.setItem('users_id', result.data.users_id);
            window.localStorage.setItem('nickname', result.data.nickname);
            // this.$router.push('/index');
            this.$router.go(-1);
          })
          .catch((error) => {
            console.log(error);
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // QQ登录
    toLogin() {
      //以下为按钮点击事件的逻辑。注意这里要重新打开窗口
      //否则后面跳转到QQ登录，授权页面时会直接缩小当前浏览器的窗口，而不是打开新窗口
      var A = window.open("http://admin.qianlixunta.com/wpapi/register/qq_login","TencentLogin","width=450,height=320,menubar=0,scrollbars=1, top=100,left=50,resizable=1,status=1,titlebar=0,toolbar=0,location=1");
    },
    // 新浪微博
    weibo_login() {
      this.$axios.post('/wpapi/register/weibo_login', {})
      .then((result) => {
        console.log(result);
        window.open(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
  .login_container {
    background: url(../assets/beijing02.png) 0 0 / cover;
    box-shadow: 0px 3px 60px 0px rgba(255, 58, 58, .33);
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .login_box {
    width: 566px;
    height: 432px;
    background-color: #fff;
    margin: 103px auto 115px;
    border-radius: 30px;
    text-align: center;
  }
  .user_title {
    font-size: 30px;
    border-bottom: 2px solid rgba(112, 112, 112, .56);
    padding: 13px 0 7px;
  }
  .el-form {
    margin: 54px auto 39px;
    padding: 0 103px 0 74px;
  }
  .el-form .el-button {
    width: 100%;
    border-radius: 10px;
    font-size: 24px;
    background: linear-gradient(180deg, #fc2c89, #ff97c6);
    border: 1px solid #e64980;
  }
  .other_login img {
    margin-left: 32px;
  }
  .juzhumima_zhucezhanghao {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: normal;
  }
  .zhucezhanghao {
    text-decoration: underline;
  }
</style>