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
                      <a href="javascript:;" @click="let_go_show">立即报名</a>
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
                    <img src="../assets/huodong_yugao01.png" alt="">
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
      s: '0'
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
    let_go_show() {
      this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', '确认报名活动', {
        dangerouslyUseHTMLString: true
      });
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
</style>