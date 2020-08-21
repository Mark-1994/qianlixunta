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
      <!-- 购买产品 -->
      <div class="shop_goods">
        <h4>购买产品</h4>
        <div class="goods_info">
          <div class="goods_info_left">
            <img src="../assets/zuanshi02.png" alt="">
            <div class="goods_title">
              <span>红娘一对一服务</span>
              <span>12个月</span>
            </div>
          </div>
          <div class="goods_info_right">
            <p>还需支付<span>3000</span>元</p>
          </div>
        </div>
      </div>
      <!-- 支付方式 -->
      <div class="pay_method">
        <h4>支付方式</h4>
        <div class="zhifufangshi">
          <el-radio v-model="radio" label="1">支付宝</el-radio>
          <el-radio v-model="radio" label="2">微信支付</el-radio>
        </div>
        <p class="order_number">订单号：12312312441</p>
        <p class="amount_payable">应付金额：￥3000元</p>
        <p class="confirm_payment">
          <el-button type="danger">确认支付</el-button>
        </p>
        <p class="qianli_protocols">
          <el-checkbox v-model="checked">已阅读并同意<a href="javascript:;">《千里寻他付费服务条款》</a></el-checkbox>
        </p>
      </div>
    </div>
    
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
  created() {
    this.$emit('header', false);
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

  .goods_info {
    background-color: #fff;
    border-radius: 20px;
    padding: 46px 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .shop_goods h4 {
    margin: 43px 0 17px;
    font-size: 22px;
  }
  .goods_info_left {
    display: flex;
  }
  .goods_title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 32px;
    font-weight: 700;
    font-size: 22px;
  }
  .goods_info_right p {
    font-size: 22px;
  }
  .goods_info_right p span {
    color: rgba(230,73,128,1);
    font-weight: 800;
    font-size: 24px;
  }
  .zhifufangshi {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 37px 62px;
  }
  .pay_method {
    margin-bottom: 67px;
  }
  .pay_method h4 {
    margin: 43px 0 17px;
    font-size: 22px;
  }
  .order_number {
    text-align: right;
    margin: 0;
    margin-top: 65px;
    margin-bottom: 15px;
  }
  .amount_payable {
    text-align: right;
    font-size: 24px;
    margin: 0;
    margin-bottom: 112px;
  }
  .confirm_payment {
    text-align: center;
  }
  .qianli_protocols {
    text-align: center;
  }
</style>