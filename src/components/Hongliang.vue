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
    <div class="bannerTop">
      <div class="one_by_one_serve">
        <h4>红娘一对一服务</h4>
        <ul>
          <li>隐私无泄漏</li>
          <li>安全可靠</li>
          <li>一对一量身定做</li>
        </ul>
        <a href="javascript:;">立即报名</a>
      </div>
    </div>
    <div class="x-wrap">
      <ul class="ul_list_goods">
        <li v-for="item in baoming_taocan_list.data" :key="item.id" :style="item.status ? '' : 'filter: grayscale(1);'">
          <div class="list_item_left">
            <h3>{{item.price}}</h3>
            <div class="right_right">
              <span>{{item.title}}</span>
              <span>{{item.cycle}}个月</span>
            </div>
          </div>
          <p class="list_item_center">{{item.describe}}</p>
          <div class="list_item_right">
            <a href="javascript:;" @click="is_vip(item.id,type, item.status)">立即报名</a>
          </div>
        </li>
        <!-- <li>
          <div class="list_item_left">
            <h3>1888</h3>
            <div class="right_right">
              <span>红娘一对一</span>
              <span>12个月</span>
            </div>
          </div>
          <p class="list_item_center">按您的要求精心挑选20位心仪的对象</p>
          <div class="list_item_right">
            <a href="javascript:;">立即报名</a>
          </div>
        </li> -->
      </ul>
      <!-- 红娘一对一特权 -->
      <div class="description_word">
        <p>红娘一对一权益及相关说明：</p>
        <p>1.服务将于在线支付成功后自动开通。2.服务一经开通，不予退款，敬请谅解。</p>
        <div class="hongniang_one_by_one_privilege">
          <h4>红娘一对一特权</h4>
          <ul>
            <li>
              <img src="../assets/zhuanshufuwu01.png" alt="">
              <p>一对一专属服务</p>
            </li>
            <li>
              <img src="../assets/zhenshi01.png" alt="">
              <p>真实会员，安全可靠</p>
            </li>
            <li>
              <img src="../assets/yinsi02.png" alt="">
              <p>个人隐私有保障</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 更多优质客户 -->
      <div class="more_than_customer">
        <h4>更多优质客户供你选择</h4>
        <ul class="more_than_list_customer">
          <li><img src="../assets/guke01.png" alt=""></li>
          <li><img src="../assets/guke02.png" alt=""></li>
          <li><img src="../assets/guke03.png" alt=""></li>
          <li><img src="../assets/guke04.png" alt=""></li>
          <li><img src="../assets/guke05.png" alt=""></li>
          <li><img src="../assets/guke06.png" alt=""></li>
          <li><img src="../assets/guke07.png" alt=""></li>
          <li><img src="../assets/guke08.png" alt=""></li>
          <li><img src="../assets/guke09.png" alt=""></li>
          <li><img src="../assets/guke10.png" alt=""></li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 报名套餐列表
      baoming_taocan_list: {},
      // 支付产品类型
      type: '',
      // 登录名
      nickname: ''
    }
  },
  created() {
    // 控制公共头是否显示隐藏
    this.$emit('header', false);

    this.nickname = localStorage.getItem('nickname') ? localStorage.getItem('nickname') : '用户名';

    // 报名展示页
    this.$axios.get('/wpapi/member/red_show_list', {
      // users_id: '',
      // token: ''
    })
    .then((result) => {
      console.log(result);
      this.baoming_taocan_list = result;
      this.type = '3';
    })
    .catch((error) => {
      console.log(error);
    });
  },
  methods: {
    is_vip(id,type, product_status) {
      if (!(localStorage.getItem('users_id') && localStorage.getItem('token'))) return this.$router.push('/login');
      if (!product_status) return this.$message.info('下架了')
      this.$axios.post('/wpapi/member/is_vip', {users_id:localStorage.getItem('users_id')})
      .then((result) => {
        console.log(result);
        if (result.data.super_vip_status !== 0) return this.$message.success('您已经是红娘一对一会员');
        this.$router.push('/hongniang_pay/'+id+'/'+type);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 退出登录
    safe_withdrawing() {
      localStorage.clear();
      this.$router.push('/index');
    }
  }
}
</script>

<style scoped>
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
  .header_content_center a {
    
  }
  .bannerTop {
    background: url(../assets/banner01.png) no-repeat center center / cover;
    position: relative;
    width: 100%;
    height: 491px;
  }
  .one_by_one_serve {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 119px;
    background-color: rgba(255, 255, 255, .5);
    padding: 27px 84px;
    border-radius: 20px;
  }
  .one_by_one_serve h4 {
    margin: 0;
    color: rgba(230,73,128,1);
    font-size: 24px;
    font-weight: 500;
  }
  .one_by_one_serve a {
    color: #fff;
    background: linear-gradient(125deg,#ff2a86 9%, #917fff 51%, #9effff 91%);
    border-radius: 6px;
    padding: 12px 31px;
    display: inline-block;
  }
  .one_by_one_serve ul li {
    line-height: 40px;
    margin: 10px 0;
  }
  .one_by_one_serve ul li::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 28px;
    background: url(../assets/yinsi01.png) no-repeat 0 0 / contain;
    margin-right: 15px;
    vertical-align: middle;
  }
  .one_by_one_serve ul li:nth-child(2):before {
    content: '';
    background: url(../assets/anquan01.png) no-repeat 0 0 / contain;
  }
  .one_by_one_serve ul li:nth-child(3):before {
    content: '';
    background: url(../assets/yiduiyi01.png) no-repeat 0 0 / contain;
  }
  .x-wrap {
    width: 1180px;
    margin: 0 auto;
  }
  .one_by_one {
    background-color: rgba(240, 242, 245, 1);
  }
  .ul_list_goods li {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 47px 38px;
    margin: 28px auto;
  }
  .ul_list_goods li .list_item_left {
    display: flex;
    align-items: center;
  }
  .ul_list_goods li .list_item_left h3,
  .ul_list_goods li p {
    margin: 0;
  }
  .ul_list_goods li p {
    color: rgba(230,73,128,1);
    font-size: 18px;
  }
  .ul_list_goods li .list_item_left h3 {
    font-weight: 800;
    font-size: 35px;
  }
  .ul_list_goods li .list_item_left h3::before {
    content: '¥';
    font-size: 18px;
    vertical-align: top;
  }
  .ul_list_goods li .list_item_left .right_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 22px;
    font-weight: 500;
    line-height: 30px;
  }
  .ul_list_goods li .list_item_right a{
    background: linear-gradient(125deg,#ff2a86 9%, #917fff 51%, #9effff 91%);
    color: #fff;
    padding: 12px 36px;
    border-radius: 6px;
    font-weight: 700;
  }
  .hongniang_one_by_one_privilege {
    background-color: #fff;
  }
  .description_word>p {
    margin: 0;
    color: rgba(152,152,152,1);
    line-height: 30px;
  }
  .hongniang_one_by_one_privilege {
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 31px 47px 37px;
    margin-top: 30px;
  }
  .hongniang_one_by_one_privilege h4 {
    margin: 0;
    font-weight: 700;
  }
  .hongniang_one_by_one_privilege h4::before {
    content: '';
    display: inline-block;
    width: 34px;
    height: 29px;
    background: url(../assets/tequan01.png) no-repeat 0 0 / cover;
    vertical-align: bottom;
    margin-right: 11px;
  }
  .hongniang_one_by_one_privilege ul {
    display: flex;
    justify-content: space-around;
    margin-top: 46px;
  }
  .hongniang_one_by_one_privilege ul li {
    text-align: center;
  }
  .hongniang_one_by_one_privilege ul li p {
    font-weight: 700;
    font-size: 20px;
  }
  .more_than_customer {
    padding-bottom: 173px;
  }
  .more_than_list_customer {
    display: flex;
    flex-wrap: wrap;
  }
  .more_than_list_customer li {
    width: 20%;
  }
  .more_than_list_customer li img {
    width: 100%;
  }
  .more_than_customer h4 {
    text-align: center;
    font-weight: 700;
    font-size: 36px;
    margin: 102px auto 51px;
  }
</style>