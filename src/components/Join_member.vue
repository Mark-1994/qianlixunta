<template>
  <div class="login_container login_container01">
    <el-container>
      <el-main>
        <div class="banner_top_img">
          <el-image
            :src="require('@/assets/huiyuan_banner01.png')"
            fit="contain"></el-image>
        </div>
        <div class="x-wrap">
          <div class="price_list">
            <div class="item_price_list" v-for="item in member_card_list" :key="item.id">
              <div class="price_list_left">
                <h4>{{item.vip_price}}</h4>
                <div class="price_list_left_info">
                  <span>开通会员</span>
                  <span>{{item.vip_cycle}}个月</span>
                </div>
              </div>
              <div class="price_list_right">
                <a href="javascript:;" @click="is_vip(item.id,type)" class="click_join_member">加入会员</a>
                <a href="javascript:;" class="membership_renewal">会员续费</a>
              </div>
            </div>
            <div class="huiyuan_explain_info">
              <p>会员权益及相关说明：</p>
              <p>1.可随意查看和筛选资料，联系、发布和接收消息。2.服务将于在线支付成功后自动开通。3.服务一经开通，不予退款，敬请谅解。</p>
            </div>
          </div>
          <!-- 会员特权 -->
          <div class="huiyuantequan">
            <h4>会员特权</h4>
            <ul>
              <li>
                <div>
                  <img src="../assets/chakan01.png" alt="">
                </div>
                <p>无限查看</p>
              </li>
              <li>
                <div>
                  <img src="../assets/fabu02.png" alt="">
                </div>
                <p>发布消息</p>
              </li>
              <li>
                <div>
                  <img src="../assets/changliao01.png" alt="">
                </div>
                <p>无限畅聊</p>
              </li>
            </ul>
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
      // 会员卡信息
      member_card_list: [],
      // 支付产品类型
      type: ''
    }
  },
  created() {
    this.$emit('header', true);

    this.$axios.get('/wpapi/member/index')
    .then((result) => {
      this.member_card_list.push(result.data);
      this.type = '1';
    })
    .catch((error) => {
      console.log(error);
    });
  },
  methods: {
    is_vip(id,type) {
      if (!(localStorage.getItem('users_id') && localStorage.getItem('token'))) return this.$router.push('/login');
      this.$axios.post('/wpapi/member/is_vip', {users_id:localStorage.getItem('users_id')})
      .then((result) => {
        console.log(result);
        if (result.data.vip_status !== 0) return this.$message.success('您已经是168会员');
        this.$router.push('/hongniang_pay/'+id+'/'+type);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
  .item_price_list {
    background-color: #fff;
    border-radius: 30px;
    padding: 47px 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
  }
  .price_list_left h4 {
    margin: 0;
    font-size: 36px;
    margin-right: 40px;
  }
  .price_list_left h4::before {
    content: '￥';
    font-size: 20px;
    vertical-align: top;
  }
  .price_list_left {
    display: flex;
  }
  .price_list_left_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .click_join_member {
    background: linear-gradient(125deg,#ff2a86 9%, #917fff 51%, #9effff 91%);
    color: #fff;
    padding: 11px 36px;
    border-radius: 6px;
    box-shadow: 8px 9px 18px 0px rgba(0,247,255,0.16);
    margin-right: 30px;
  }
  .membership_renewal {
    border: 2px solid #000000;
    border-radius: 6px;
    font-weight: 700;
    text-shadow: 0px 3px 6px 0px rgba(160, 3, 3, 0.16);
    padding: 11px 36px;
    color: #000;
  }
  .huiyuan_explain_info p {
    margin: 0;
    color: rgba(152,152,152,1);
    line-height: 40px;
  }
  .huiyuantequan {
    background-color: #fff;
    margin-bottom: 276px;
    margin-top: 80px;
    padding: 26px 47px;
  }
  .huiyuantequan h4 {
    margin: 0;
    margin-bottom: 46px;
    font-weight: 700;
    font-size: 18px;
  }
  .huiyuantequan h4::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 34px;
    height: 34px;
    background: url(../assets/tequan01.png) no-repeat 0 0 / contain;
    margin-right: 11px;
  }
  .huiyuantequan ul {
    display: flex;
    justify-content: space-around;
  }
  .huiyuantequan ul li p {
    margin: 35px auto 0;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
</style>