<template>
  <div class="wx_login login_container01">
    <div class="login_window">
      <div class="login_window_left">
        <p class="card-icon">
          <img src="../assets/card-icon-42.png" alt="">
        </p>
        <p class="card-portrait">
          <img src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLzFWa6lzhuWxXkg08xU56YDg8ib71xn8BfIO72EIYa58Pr59lvkU7r3dic3Aib6D5YOicJxOHBu50zGw/132" alt="">
        </p>
        <p class="card-username">微信用户名</p>
      </div>
      <div class="login_window_right">
        <div class="login_window_right_content">
          <div class="pass-card">
            <p class="card-icon">
              <img src="" alt="">
              logo
              <span>千里寻TA账号</span>
            </p>
          </div>
          <div class="bind_phone_form">
            <el-form label-width="" @submit.native.prevent>
              <el-form-item label="">
                <el-input
                  placeholder="手机号"
                  prefix-icon="el-icon-mobile-phone"
                  v-model="phone">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="display: block;width: 100%;" @click="agree_bind">同意协议并绑定</el-button>
                <span class="tang-pass-sms-agreement">
                  阅读并接受
                  <a href="javascript:;">《千里寻TA用户协议》</a>
                </span>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: ''
    }
  },
  methods: {
    agree_bind() {
      console.log(this.phone);

      // 同意协议并绑定
      this.$axios.post('/wpapi/register/wx_login_is_user_bind', {
        openid: '',
        nickname: '',
        headimgurl: '',
        phone: ''
      })
      .then((result) => {
        console.log(result);
        if (result.status !== '200') return this.$message.error('绑定失败！');
        this.$message.success('绑定成功！');
        this.$router.push('/index');
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
  .wx_login {
    padding: 1px;
  }
  .login_window {
    background-color: #fff;
    border-radius: 30px;
    width: 566px;
    margin: 103px auto 115px;
    padding: 30px 58px 40px 48px;
    *zoom: 1;
  }
  .login_window:after {
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .login_window .login_window_left {
    float: left;
    width: 45%;
    background: url(../assets/arrow.png) no-repeat right;
  }
  .login_window .login_window_right {
    float: left;
    width: 55%;
  }
  .login_window_right_content {
    margin-left: 60px;
  }
  .card-portrait {
    text-align: center;
  }
  .card-portrait>>>img {
    border-radius: 50%;
    padding: 3px;
    border: 1px solid #eee;
    width: 87px;
    height: 87px;
  }
  .card-username {
    text-align: center;
  }
  .tang-pass-sms-agreement {
    font-size: 12px;
  }
</style>