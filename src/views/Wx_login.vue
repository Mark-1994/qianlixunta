<template>
  <div class="wx_login login_container01">
    <div class="login_window">
      <div class="login_window_left">
        <p class="card-icon">
          <img src="../assets/card-icon-42.png" alt="">
        </p>
        <p class="card-portrait">
          <img :src="login_info.headimgurl" alt="">
        </p>
        <p class="card-username">{{login_info.nickname}}</p>
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
      phone: '',
      login_info: {
        // openid: 'oVyMC6PtPjlziEaEH7Sj8tY0jgwc',
        // nickname: '樊俊贤',
        // headimgurl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKc5nNF2TPU1yJGia84U143oYL1WiaR6EW7zibibgG7yJNQHVlDjymQXxcJLtyXD5BUKSVBYL3uLqOu2w/132'
      }
    }
  },
  created() {
    if (location.href.indexOf('code=') > -1) {
      let codeVal = location.href.slice(location.href.indexOf('code=') + 5, location.href.indexOf('&state='));

      // 获取用户信息
      this.$axios.get('/wpapi/register/oauth_callback', {
        params: {
          code: codeVal,
          state: 'STATE'
        }
      })
      .then((result) => {
        console.log(result);
        this.login_info = result.data;

        if (result.data.wx_is_status == 1) {
          window.localStorage.setItem('token', result.data.token);
          window.localStorage.setItem('users_id', result.data.users_id);
          window.localStorage.setItem('nickname', result.data.nickname);
          this.$message.success('登陆成功');
          this.$router.push('/index');
        }

      })
      .catch((error) => {
        console.log(error);
      });

    }
  },
  methods: {
    agree_bind() {
      // 手机号判断
      if (!this.phone.trim()) return this.$message.error('手机号不能为空！');
      if(!(/^1[3456789]\d{9}$/.test(this.phone))) return this.$message.error('请填写正确的手机号！');

      // 同意协议并绑定
      this.$axios.post('/wpapi/register/wx_login_bind', {
        openid: this.login_info.openid,
        nickname: this.login_info.nickname,
        headimgurl: this.login_info.headimgurl,
        phone: this.phone
      })
      .then((result) => {
        console.log(result);
        if (result.status !== '200') return this.$message.error('绑定失败！');

        window.localStorage.setItem('token', result.data.token);
        window.localStorage.setItem('users_id', result.data.users_id);
        window.localStorage.setItem('nickname', result.data.nickname);

        this.$message.success('绑定成功');
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