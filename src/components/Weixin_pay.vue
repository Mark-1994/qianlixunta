<template>
  <div class="one_by_one">
    <header>
      <div class="header_content_center">
        <a href="javascript:;">
          <!-- <img src="../assets/logo01.png" alt="" /> -->
          <span>LOGO</span>
          <span>红娘一对一</span>
        </a>
        <div>
          <span>您好，林俊杰</span>
          <span>安全退出</span>
        </div>
      </div>
    </header>
    <div class="x-wrap">
      <!-- 微信支付 -->
      <div class="logo_income_desk">
        <div class="logo_income_desk_top">
          LOGO收银台
        </div>
        <div class="logo_income_desk_middle">
          <div>
            <p>订单编号：********</p>
            <p>订单类型：********</p>
          </div>
          <div>应付金额：¥78.40</div>
        </div>
        <div class="logo_income_desk_bottom">
          <el-tabs type="border-card">
            <el-tab-pane label="微信支付">
              <div class="center_erweima_two">
                <img src="../assets/eg_erweima01.png" alt=""><br>
                <img src="../assets/shuomingwenzi01.png" alt="">
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <el-footer height="auto">
        <el-menu mode="horizontal" class="el-menu-demo01">
          <el-menu-item index="1">联系客服</el-menu-item>
          <el-menu-item index="2">关于我们</el-menu-item>
          <el-menu-item index="3">防骗必看</el-menu-item>
          <el-menu-item index="4">帮助中心</el-menu-item>
          <el-menu-item index="5">安全中心</el-menu-item>
          <el-menu-item index="6">意见反馈</el-menu-item>
        </el-menu>
        <div class="zhongwenshiming">
          <p>
            <span>中文实名：xxx</span>
            <span>营业执照ICP证书：鄂B2-20100074</span>
            <span>增值电信业务经营许可证：鄂B2-20070313</span>
          </p>
          <p>免责声明：用户之间相互联系、见面等行为与本站无关，用户之间发生违法、犯罪、侵权等事件与本站无关。本站不承担任何责任。</p>
          <p>
            <span>公司名称：xxxxx</span>
            <span>公司地址：xxxxx</span>
          </p>
        </div>
        <p class="footer_num">
          <img src="../assets/footer_num.png" alt="">
        </p>
      </el-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '红娘一对一',
      radio: '1',
      checked: false
    }
  },
  created: function() {
      this.$axios.post('/api/statistics', {
        abc: 'a',
        def: 'b'
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  },
  methods: {
    
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