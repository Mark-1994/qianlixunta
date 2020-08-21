<template>
  <div class="login_container">
    <el-container>
      <el-main>
        <div class="x-wrap">
          <el-row class="distance_top">
            <el-col :span="17">
              <div class="activity_list_all">
                <el-card class="activity_list_item">
                  <div class="activity_list_item_top">
                    <span>免费</span>
                    <h4>单身福利！大型线下联谊活动</h4>
                  </div>
                  <div class="activity_list_item_middle">
                    <img src="../assets/xianxialianyi01.png" alt="">
                    <div class="position_bottom_info">
                      <div class="left_adress_time">
                        <span class="adress_activity_now">武汉</span>
                        <span class="adress_activity_time">活动时间：7月-9月</span>
                      </div>
                      <div class="right_adress_time">已报名：<span>68</span></div>
                    </div>
                  </div>
                  <div class="activity_list_item_bottom">
                    <div class="item_bottom_left">
                      倒计时 00:11:22
                    </div>
                    <div class="item_bottom_right">
                      <a href="javascript:;">立即报名</a>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="activity_prediction_recent">
                def
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
      msg: '约吧页面'
    }
  },
  created() {
    this.$emit('header', true);
    this.$emit('footer', true);
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
    background-color: rgba(255,42,134,1);
    border-radius: 24px;
    box-shadow: 8px 9px 18px 0px rgba(0,247,255,0.16);
    color: #fff;
    padding: 7px 20px;
  }
</style>