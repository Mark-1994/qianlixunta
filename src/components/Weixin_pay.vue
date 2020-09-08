<template>
  <div class="one_by_one">
    <header>
      <div class="header_content_center">
        <a href="/#/index">
          <!-- <img src="../assets/logo01.png" alt="" /> -->
          <span>LOGO</span>
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
      nickname: ''
    }
  },
  created: function() {
    this.$emit('header', false);

    this.nickname = localStorage.getItem('nickname');

    // 168会员微信支付展示页面
    if (this.$route.params.type == 1) {
      this.$axios.get('/wpapi/member/wx_pay', {params:{users_id:localStorage.getItem('users_id'),order_id:this.$route.params.order_id,type:this.$route.params.type}})
      .then((result) => {
        console.log(result);
        this.order_son = result.data.order_son;
        this.order_price = result.data.order_price;
        this.title = result.data.title;
        this.code_img = result.data.code_img;
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
      })
      .catch((error) => {
        console.log(error);
      });
    }
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
</style>