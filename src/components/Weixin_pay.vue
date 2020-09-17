<template>
  <div class="one_by_one">
    <header>
      <div class="header_content_center">
        <a href="/#/index">
          <!-- <img src="../assets/logo01.png" alt="" /> -->
          <span>千里寻TA</span>
          <el-divider direction="vertical"></el-divider>
          <span>红娘一对一</span>
        </a>
        <div>
          <span>您好，{{nickname}}</span>
          <el-divider direction="vertical"></el-divider>
          <span @click="safe_withdrawing">安全退出</span>
        </div>
      </div>
    </header>
    <div class="x-wrap" style="padding-bottom:1px;">
      <!-- 微信支付 -->
      <div class="logo_income_desk">
        <div class="logo_income_desk_top">
          LOGO收银台
        </div>
        <div class="logo_income_desk_middle">
          <div>
            <p>订单编号：{{order_son}}</p>
            <p>订单类型：{{title}}</p>
          </div>
          <div>应付金额：¥{{order_price}}</div>
        </div>
        <div class="logo_income_desk_bottom">
          <el-tabs type="border-card">
            <el-tab-pane label="微信支付">
              <div class="center_erweima_two">
                <img :src="code_img" alt=""><br>
                <img src="../assets/shuomingwenzi01.png" alt="">
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>

    <!-- 支付成功的弹窗 -->
    <el-dialog
      :lock-scroll="false"
      :show-close="false"
      :close-on-click-modal="false"
      title=""
      :visible.sync="dialogVisible"
      width="30%">
      <div class="dialog_content_center">
        <p>恭喜，付款成功</p>
        <p>快来寻找你的另一半吧</p>
        <p class="three_seconds">三秒后自动开启寻TA之旅</p>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 订单编号
      order_son: '',
      // 应付金额
      order_price: '',
      // 订单类型
      title: '',
      // 微信支付二维码
      code_img: '',
      nickname: '',
      // 支付成功的弹窗
      dialogVisible: false
    }
  },
  created: function() {
    this.$emit('header', false);

    this.nickname = localStorage.getItem('nickname');

    // type=1,168会员, type=2,168会员续费, type=3,红娘一对一, type=4,约吧走起活动
    // 168会员微信支付展示页面
    if (this.$route.params.type == 1) {
      this.$axios.get('/wpapi/member/wx_pay', {params:{users_id:localStorage.getItem('users_id'),order_id:this.$route.params.order_id,type:this.$route.params.type}})
      .then((result) => {
        console.log(result);
        this.order_son = result.data.order_son;
        this.order_price = result.data.order_price;
        this.title = result.data.title;
        this.code_img = result.data.code_img;

        // 检测当前订单是否支付成功
        let timer = setInterval(() => {
          this.$axios.post('/wpapi/member/vip_status_check', {
            order_osn: this.order_son
          })
          .then((result) => {
            console.log(result);
            if (result.data == 1) {
              this.dialogVisible = true;
              setTimeout(() => {
                this.$router.push('/index');
              }, 3000);
              clearInterval(timer);
            }
          })
          .catch((error) => {
            console.log(error);
          });
        }, 2000);

      })
      .catch((error) => {
        console.log(error);
      });
    } else if (this.$route.params.type == 2) {
      this.$axios.get('/wpapi/member/wx_pay', {params:{users_id:localStorage.getItem('users_id'),order_id:this.$route.params.order_id,type:this.$route.params.type}})
      .then((result) => {
        console.log(result);
        this.order_son = result.data.order_son;
        this.order_price = result.data.order_price;
        this.title = result.data.title;
        this.code_img = result.data.code_img;

        // 检测当前订单是否支付成功
        let timer = setInterval(() => {
          this.$axios.post('/wpapi/member/vip_status_check', {
            order_osn: this.order_son
          })
          .then((result) => {
            console.log(result);
            if (result.data == 1) {
              this.dialogVisible = true;
              setTimeout(() => {
                this.$router.push('/index');
              }, 3000);
              clearInterval(timer);
            }
          })
          .catch((error) => {
            console.log(error);
          });
        }, 2000);

      })
      .catch((error) => {
        console.log(error);
      });
    } else if (this.$route.params.type == 3) {
      // 红娘一对一微信支付展示页面
      this.$axios.get('/wpapi/member/wx_pay', {params:{users_id:localStorage.getItem('user_id'),order_id:this.$route.params.order_id,type:this.$route.params.type,super_vip_id: this.$route.params.super_vip_id}})
      .then((result) => {
        console.log(result);
        this.order_son = result.data.order_son;
        this.order_price = result.data.order_price;
        this.title = result.data.title;
        this.code_img = result.data.code_img;

        // 检测当前订单是否支付成功
        let timer = setInterval(() => {
          this.$axios.post('/wpapi/member/super_status_check', {
            order_osn: this.order_son
          })
          .then((result) => {
            console.log(result);
            if (result.data == 1) {
              this.dialogVisible = true;
              setTimeout(() => {
                this.$router.push('/hongniang_list');
              }, 3000);
              clearInterval(timer);
            }
          })
          .catch((error) => {
            console.log(error);
          });
        }, 2000);

      })
      .catch((error) => {
        console.log(error);
      });
    } else if (this.$route.params.type == 4) {
      // 约吧走起微信支付展示页面
      console.log(this.$route.params.order_id);
      console.log(this.$route.params.type);
      console.log(this.$route.params.super_vip_id);
      this.$axios.get('/wpapi/member/wx_pay', {
        params: {
          users_id: localStorage.getItem('users_id'),
          let_go_id: this.$route.params.order_id,
          phone: localStorage.getItem('phone'),
          pay_price: this.$route.params.super_vip_id,
          type: this.$route.params.type
        }
      })
      .then((result) => {
        console.log(result);
        this.order_son = result.data.order_son;
        this.order_price = result.data.order_price;
        this.title = result.data.title;
        this.code_img = result.data.code_img;

        // 检测当前订单是否支付成功
        let timer = setInterval(() => {
          this.$axios.post('/wpapi/member/let_status_check', {
            order_osn: this.order_son
          })
          .then((result) => {
            console.log(result);
            if (result.data == 1) {
              this.dialogVisible = true;
              setTimeout(() => {
                this.$router.push('/index');
              }, 3000);
              clearInterval(timer);
            }
          })
          .catch((error) => {
            console.log(error);
          });
        }, 2000);

      })
      .catch((error) => {
        console.log(error);
      });
    };
  },
  methods: {
    safe_withdrawing() {
      localStorage.clear();
      this.$router.push('/index');
    }
  }
}
</script>

<style scoped>
  .x-wrap {
    width: 1180px;
    margin: 0 auto;
  }
  .one_by_one {
    background-color: rgba(240,242,245,1);
  }
  header {
    background-color: #000;
    color: #fff;
  }
  header a {
    color: #fff;
  }
  .header_content_center {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo_income_desk {
    width: 80%;
    border: 1px solid #999;
    margin: 60px auto;
  }
  .logo_income_desk_middle {
    background-color: #fff;
  }
  .logo_income_desk_middle p {
    margin: 0;
  }
  .logo_income_desk_top,
  .logo_income_desk_middle {
    padding: 10px 20px;
  }
  .logo_income_desk_bottom {
    padding: 20px 40px 60px;
  }
  .center_erweima_two {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .center_erweima_two img {
    width: 200px;
  }
  .dialog_content_center {
    text-align: center;
    font-size: 16px;
  }
  .dialog_content_center p {
    color: #000;
  }
  .dialog_content_center .three_seconds {
    color: #E64980;
    margin: 40px auto;
    font-size: 14px;
  }
</style>