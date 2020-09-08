<template>
  <div class="login_container login_container01">
    <el-container>
      <el-main>
        <div class="x-wrap">
          <el-row class="distance_top">
            <el-col :span="17">
              <div class="activity_list_all">
                <el-card class="activity_list_item" v-for="item in yuebazouqi_list.data" :key="item.id" :body-style="{ padding: '20px' }">
                  <div class="activity_list_item_top">
                    <span>{{item.pay_price}}元</span>
                    <h4>{{item.title}}</h4>
                  </div>
                  <div class="activity_list_item_middle">
                    <img :src="'http://admin.qianlixunta.com'+item.img" alt="" v-if="item.img">
                    <div v-if="!item.img"><br><br><br></div>
                    <div class="position_bottom_info">
                      <div class="left_adress_time">
                        <span class="adress_activity_now">{{item.city}}</span>
                        <span class="adress_activity_time">活动时间：{{item.start_time}}-{{item.end_time}}</span>
                      </div>
                      <div class="right_adress_time">已报名：<span>{{item.join_nums}}</span></div>
                    </div>
                  </div>
                  <div class="activity_list_item_bottom">
                    <div class="item_bottom_left">
                      倒计时 {{countTime(item.end_time)}}
                    </div>
                    <div class="item_bottom_right">
                      <a href="javascript:;" @click="let_go_show(item.id)">立即报名</a>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="activity_prediction_recent">
                <div class="activity_prediction_time">
                  <div class="activity_prediction_time_title">
                    <h4>活动预告</h4>
                  </div>
                  <div class="activity_prediction_time_img">
                    <img :src="'http://admin.qianlixunta.com'+activity_forecast.img" alt="">
                  </div>
                  <div class="activity_prediction_time_now">
                    <div class="right_now_click">
                      <a href="javascript:;">立即预约</a>
                    </div>
                    <div class="item_apply_time">
                      报名时间：7月8日-9日
                    </div>
                  </div>
                </div>
                <div class="activity_recent_time">
                  <div class="activity_recent_time_title">
                    <h4>近期活动</h4>
                  </div>
                  <div class="activity_recent_time_img">
                    <img src="../assets/huodong_yugao01.png" alt="">
                  </div>
                  <ul class="activity_recent_time_bottom">
                    <li>
                      <div class="activity_recent_time_calendar">
                        <h5>7.20</h5>
                      </div>
                      <div class="activity_recent_time_des">
                        <p>单身福利！大型线下联谊活动</p>
                        <p>秋意渐浓，你还没有找到你的另一半吗？</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>

    <!-- 这个是嵌套的表单 -->
    <el-dialog title="" :visible.sync="dialogFormVisible" center class="dialog_activity">
      <div slot="title" class="dialog-header">
        <h3>确认报名活动</h3>
        <span class="activity_sign_up">报名活动</span>
        <div class="activity_des">
          <div class="activity_des_left">
            <img :src="'http://admin.qianlixunta.com'+let_go_show_info.img" alt="">
          </div>
          <div class="activity_des_right">
            <p>{{let_go_show_info.title}}</p>
            <div class="activity_des_right_bottom">
              <span>活动地点：{{let_go_show_info.address}}</span>
              <span>活动时间：{{let_go_show_info.start_time}}</span>
            </div>
          </div>
        </div>
      </div>
      <span class="contact_way">联系方式</span>
      <el-form :model="activityForm" class="activity_form_info" ref="refActivityForm">
        <div class="activity_form_info_top">
          <el-form-item label="手机号：" :label-width="formLabelWidth">
            <el-input v-model="activityForm.phone" autocomplete="off" style="width: 217px;"></el-input>
            <span class="phone_num_des">仅用于活动联系，不会展示</span>
          </el-form-item>
          <el-form-item label="验证码：" :label-width="formLabelWidth">
            <el-input v-model="activityForm.verify" autocomplete="off" style="width: 100px;"></el-input>
            <el-image
              style="width: 70px; height: 30px; vertical-align: middle; display: inline-block;margin: 0 20px;"
              src="http://localhost:8080/img/huodong_yugao01.095909fa.png"
              fit="fit"></el-image>
            <el-link href="javascript:;" style="display: inline;">换一张</el-link>
          </el-form-item>
        </div>
        <span class="payment_method_text">支付方式</span>
        <el-form-item class="payment_method">
          <el-radio v-model="activityForm.payment_method" label="0">支付宝</el-radio>
          <el-radio v-model="activityForm.payment_method" label="1">微信支付</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogFormVisible = false">取 消</el-button> -->
        <el-button type="primary" class="activity_sign_up_sure" @click="activity_sign_up_sure_btn(activityForm.id)">确认报名</el-button>
        <!-- `checked` 为 true 或 false -->
        <el-checkbox v-model="activity_checked">同意千里寻他报名须知</el-checkbox>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 约吧走起展示列表
      yuebazouqi_list: {},
      // 倒计时
      d: '0',
      h: '0',
      m: '0',
      s: '0',
      // 控制弹框显示隐藏
      dialogFormVisible: false,
      // 确认报名活动表单数据
      activityForm: {
        phone: '',
        verify: '',
        payment_method: '0'
      },
      // 输入框描述
      formLabelWidth: '80px',
      // 同意千里寻他报名须知
      activity_checked: false,
      // 活动报名页信息
      let_go_show_info: {
        img: '/upload/admin/let_go/20200729/ff37e981b3b7ca9130eca455e13e4fbe.png'
      },
      // 活动预告
      activity_forecast: {}
    }
  },
  created() {
    this.$emit('header', true);
    this.$emit('footer', true);

    // 约吧走起--展示列表
    this.$axios.get('/wpapi/member/let_go_list', {params:{}})
    .then((result) => {
      console.log(result);
      this.yuebazouqi_list = result;
    })
    .catch((error) => {
      console.log(error);
    });

    // 活动预告、近期活动
    this.$axios.get('/wpapi/member/let_go_list_sidebar', {params:{}})
    .then((result) => {
      console.log(result);
      this.activity_forecast = result.data.list_sidebar_first;
    })
    .catch((error) => {
      console.log(error);
    });
  },
  methods: {
    countTime: function(end_time) {
      // 获取当前时间
      let date = new Date();
      let now = date.getTime();
      // 设置截止时间
      let endDate = new Date(end_time);
      let end = endDate.getTime();
      // 时间差
      let leftTime = end - now;
      // 定义变量 d,h,m,s 保存倒计时的时间
      if(leftTime >= 0) {
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.m = Math.floor((leftTime / 1000 / 60) % 60);
        this.s = Math.floor((leftTime / 1000) % 60);
      }
      // console.log(this.s);
      // 递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000);
      return this.d + '天' + this.h + '时' + this.m + '分' + this.s + '秒';
    },
    // 报名展示页
    let_go_show(let_go_id) {
      // 判断当前是否登录
      if (!(localStorage.getItem('users_id') && localStorage.getItem('token'))) return this.$router.push('/login');

      this.dialogFormVisible = true;
      this.activityForm.id = let_go_id;
      console.log(let_go_id);
      this.$axios.post('/wpapi/member/let_go_show', {
        let_go_id: let_go_id
      })
      .then((result) => {
        console.log(result);
        this.let_go_show_info = result.data[0];
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 确认报名按钮
    activity_sign_up_sure_btn(let_go_id) {
      if (!this.activity_checked) return this.$message.warning('请勾选协议');
      this.dialogFormVisible = false;
      // 判断当前是支付宝还是微信支付
      if (!Number(this.activityForm.payment_method)) {
        // 支付宝支付
        this.$axios.get('/wpapi/member/let_go_zfb_pay', {
          params: {users_id:localStorage.getItem('users_id'),let_go_id:let_go_id,phone:this.activityForm.phone}
        })
        .then((result) => {
          console.log(result);
          if (result.status !== '200') return this.$message.error(result.msg);
          
        })
        .catch((error) => {
          console.log(error);
        });
      } else {
        // 微信支付
        this.$axios.get('/wpapi/member/let_go_zfb_pay', {params:{users_id:localStorage.getItem('users_id'),let_go_id:let_go_id,phone:this.activityForm.phone}})
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }
  }
}
</script>

<style scoped>
  .distance_top {
    margin: 47px auto;
  }
  .activity_list_all {
    background-color: #fff;
  }
  .activity_list_item {
    border: 0;
    box-shadow: none;
  }
  .activity_list_item_middle img {
    width: 100%;
  }
  .activity_list_item_top {
    display: flex;
    align-items: center;
    margin-bottom: 17px;
  }
  .activity_list_item_top span {
    background-color: rgba(230,73,128,1);
    color: #fff;
    padding: 3px 10px;
    border-radius: 7px;
    margin-right: 10px;
  }
  .activity_list_item_top h4 {
    font-size: 30px;
    margin: 0;
  }
  .activity_list_item_middle {
    position: relative;
  }
  .position_bottom_info {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, .5);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    box-sizing: border-box;
    line-height: 62px;
  }
  .adress_activity_now {
    background-color: rgba(240,62,62,1);
    border-radius: 19px;
    font-size: 22px;
    color: #fff;
    padding: 5px 21px;
    margin-right: 26px;
  }
  .adress_activity_time {
    font-weight: 500;
    font-size: 18px;
  }
  .right_adress_time {
    font-size: 18px;
  }
  .right_adress_time span {
    font-size: 20px;
    font-weight: 800;
  }
  .activity_list_item_bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;
  }
  .item_bottom_right a {
    display: inline-block;
    background: linear-gradient(125deg,#ff2a86 9%, #917fff 51%, #9effff 91%);
    border-radius: 24px;
    box-shadow: 8px 9px 18px 0px rgba(0,247,255,0.16);
    color: #fff;
    padding: 7px 20px;
  }
  .activity_prediction_time {
    background-color: #fff;
    padding: 23px 17px;
    margin-bottom: 25px;
  }
  .activity_prediction_time_img img {
    width: 100%;
  }
  .activity_prediction_recent {
    margin-left: 20px;
  }
  .activity_prediction_time_title {
    margin-bottom: 22px;
  }
  .activity_prediction_time_title h4 {
    margin: 0;
    font-weight: 700;
    font-size: 20px;
  }
  .activity_prediction_time_title h4::before {
    content: '';
    display: inline-block;
    width: 37px;
    height: 37px;
    background: url(../assets/yugao01.png) no-repeat 0 0 / contain;
    vertical-align: middle;
    margin-right: 7px;
  }
  .activity_prediction_time_img {
    margin-bottom: 21px;
  }
  .activity_prediction_time_now {
    display: flex;
    justify-content: space-between;
  }
  .right_now_click a {
    background-color: rgba(255,42,134,1);
    color: #fff;
    border-radius: 18px;
    padding: 7px 22px;
    box-shadow: 8px 9px 18px 0px rgba(0,247,255,0.16);
  }
  .activity_recent_time {
    background-color: #fff;
    padding: 23px 17px;
  }
  .activity_recent_time_title h4 {
    margin: 0;
    font-weight: 700;
    font-size: 20px;
  }
  .activity_recent_time_title h4::before {
    content: '';
    display: inline-block;
    width: 37px;
    height: 37px;
    background: url(../assets/paiduishi01.png) no-repeat 0 0 / contain;
    vertical-align: middle;
    margin-right: 7px;
  }
  .activity_recent_time_img img {
    width: 100%;
    margin-bottom: 21px;
  }
  .activity_recent_time_bottom li {
    line-height: 30px;
  }
  .activity_recent_time_bottom li h5,
  .activity_recent_time_bottom li p {
    margin: 0;
  }
  .activity_recent_time_bottom li h5 {
    color: rgba(240,62,62,1);
    font-size: 18px;
  }
  .activity_recent_time_bottom li h5::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(../assets/riqi01.png) no-repeat 0 0 / contain;
    vertical-align: middle;
    margin-right: 7px;
  }
  .activity_recent_time_title {
    margin-bottom: 22px;
  }
  .activity_recent_time_bottom li p {
    font-weight: 500;
  }
  .dialog-header .activity_sign_up {
    text-align: left;
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .contact_way {
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 16px;
    color: #000;
    display: block;
  }
  .activity_des {
    display: flex;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    /* border: 1px solid gray; */
    padding: 5px;
    align-items: center;
  }
  .activity_des_left img {
    width: 148px;
    height: 102px;
  }
  .activity_des_right {
    text-align: left;
    margin-left: 30px;
    height: 102px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .activity_des_right p {
    margin: 0;
    font-weight: 700;
  }
  .activity_des_right_bottom span:nth-child(1) {
    margin-right: 20px;
  }
  .activity_form_info_top {
    /* border: 1px solid gray; */
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 23px 0 1px;
  }
  .payment_method {
    /* border: 1px solid gray; */
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 0 30px;
  }
  .payment_method_text {
    display: block;
    margin-bottom: 10px;
    margin-top: 25px;
    font-size: 16px;
    color: #000;
    font-weight: 700;
  }
  .activity_sign_up_sure {
    display: block;
    margin: 0 auto;
    background: linear-gradient(125deg,#ff2a86 9%, #917fff 51%, #9effff 91%);
    border-radius: 6px;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    border: 0;
  }
  .activity_form_info {
    /* padding: 10px; */
  }
  .phone_num_des {
    color: #989898;
    margin-left: 20px;
  }
</style>