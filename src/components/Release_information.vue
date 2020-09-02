<template>
  <div class="login_container login_container01">
    <el-container>
      
      <el-main>
        <div class="mine_info_show_change">
          <div class="mine_info">
            <el-row class="mine_info_items">
              <el-col :span="6">
                <div class="mine_info_left">
                  <div class="mine_img_info">
                    <img src="../assets/username01.png" alt="" />
                    <p>我的资料：80%</p>
                  </div>
                  <div class="name_phone_info">
                    <h4>林俊杰</h4>
                    <div class="three_images_status">
                      <img src="../assets/shouji01.png" alt="">
                      <img src="../assets/shimingrenzheng01.png" alt="">
                      <img src="../assets/shimingrenzheng01.png" alt="">
                    </div>
                    <a href="javascript:;">完善个人信息</a>
                  </div>
                </div>
              </el-col>
              <el-col :span="9">
                <div class="mine_info_middle">
                  <ul>
                    <li>
                      <span class="flag_num">0</span>
                      <span class="flag_name">未读消息</span>
                    </li>
                    <li>
                      <span class="flag_num">0</span>
                      <span class="flag_name">未读消息</span>
                    </li>
                    <li>
                      <span class="flag_num">0</span>
                      <span class="flag_name">未读消息</span>
                    </li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="9">
                <div class="mine_info_right">
                  <div class="min_info_right_top">
                    <img src="../assets/username01.png" alt="">
                  </div>
                  <div class="min_info_right_bottom">
                    <ul>
                      <li>
                        <span class="other_num">0</span>
                        <span class="other_name">关注我的</span>
                      </li>
                      <li>
                        <span class="other_num">0</span>
                        <span class="other_name">关注我的</span>
                      </li>
                      <li>
                        <span class="other_num">0</span>
                        <span class="other_name">关注我的</span>
                      </li>
                      <li>
                        <span class="other_num">0</span>
                        <span class="other_name">关注我的</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="mine_message_list">
            <el-row>
              <el-col :span="17">
                <el-card class="box-card" style="border-radius: 30px;margin-bottom: 23px;">
                  <div slot="header" class="clearfix header_title_info_show">
                    <el-avatar :size="60" src="http://localhost:8080/img/username01.ea4e23dc.png"></el-avatar>
                    <div class="item_name_time">
                      <span class="item_name_info">林俊杰</span>
                      <span class="month_day_item">3月10日</span>
                    </div>
                  </div>
                  <div class="text item item_fabuneirong">
                    <p>今天天气真好，想恋爱了😃😃</p>
                    <img src="../assets/fabu01.png" alt="">
                  </div>
                  <div class="dianzan_pinglun_num">
                    <el-link icon="el-icon-edit">22</el-link>
                    <el-link><i class="el-icon-view el-icon--right"></i> 3</el-link>
                  </div>
                  <div class="bottom clearfix click_three_items">
                    <el-button type="text" class="button">点赞</el-button>
                    <el-button type="text" class="button">评论</el-button>
                    <el-button type="text" class="button">关注</el-button>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="7">
                <div class="woyaofabu_right">
                  <div class="fabuxinxi_items">
                    <div class="fabuxinxi_items_top">
                      <div class="fabuxinxi_items_top_top">
                        <img src="../assets/fabu02.png" alt="" />
                        <h4>发布信息</h4>
                      </div>
                      <div class="fabuxinxi_items_top_middle">
                        <el-input
                          type="textarea"
                          :autosize="{ minRows: 4, maxRows: 6}"
                          placeholder="请输入内容"
                          v-model="fabuxinxi_text">
                        </el-input>
                      </div>
                      <div class="fabuxinxi_items_top_bottom">
                        <div class="two_btn_text_send">
                          <span>
                            <img src="../assets/meirong01.png" alt="">
                          </span>
                          <span>
                            <img src="../assets/tupian01.png" alt="">
                          </span>
                        </div>
                        <div class="fabu_anniu">
                          <a href="javascript:;">发布</a>
                        </div>
                      </div>
                    </div>
                    <div class="fabuxinxi_items_bottom">
                      <div class="woguanzhude_title">
                        <img src="../assets/guanzhu01.png" alt="" />
                        <h4>我关注的</h4>
                      </div>
                      <ul class="woguanzhude_list">
                        <li>
                          <img src="../assets/username01.png" alt="">
                          <span>林俊杰</span>
                        </li>
                        <li>
                          <img src="../assets/username01.png" alt="">
                          <span>林俊杰</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
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
      cityInfo: [
        { id: 1, name: '北京' },
        { id: 2, name: '上海' },
        { id: 3, name: '广州' },
        { id: 4, name: '武汉' },
        { id: 5, name: '成都' },
        { id: 6, name: '天津' },
        { id: 7, name: '重庆' }
      ],
      activeName: 'first',
      // 发布信息的文本
      fabuxinxi_text: ''
    }
  },
  created: function() {
    this.$emit('header', true);
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    }
  }
}
</script>

<style scoped>
  .mine_info_show_change {
    width: 1180px;
    margin: 69px auto 148px;
  }
  .mine_info {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 27px;
  }
  .mine_info_items {
    display: flex;
    align-items: center;
  }
  .mine_info_left {
    display: flex;
  }
  .mine_info_middle ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .mine_info_middle ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mine_info_middle ul li .flag_num {
    font-size: 60px;
  }
  .mine_info_middle ul li .flag_name {
    font-size: 24px;
  }
  .min_info_right_top {
    text-align: center;
  }
  .min_info_right_top img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .min_info_right_bottom ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .min_info_right_bottom ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .mine_img_info p {
    border-radius: 12px;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.19);
    padding: 5px 14px;
    margin: 0;
    position: relative;
  }
  .mine_img_info p::before {
    content: '';
    position: absolute;
    border: 1px solid #eee;
    background-color: #fff;
    width: 10px;
    height: 10px;
    left: 50%;
    top: -6px;
    transform: translateX(-50%) rotate(45deg);
  }
  .mine_img_info p::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 9px;
    background-color: #fff;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .name_phone_info {
    text-align: center;
  }
  .name_phone_info h4 {
    text-align: center;
  }
  .name_phone_info a {
    color: rgba(230,73,128,1);
    margin-top: 20px;
    display: block;
  }
  .three_images_status {
    text-align: center;
  }
  .three_images_status img {
    margin: 0 6px;
    vertical-align: bottom;
  }

  .mine_message_list {
    margin-top: 26px;
  }
  .item_fabuneirong img {
    width: 100%;
  }
  .header_title_info_show {
    display: flex;
  }
  .item_name_time {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-left: 15px;
  }
  .month_day_item {
    color: rgba(152,152,152,1);
  }
  .item_name_info {
    font-size: 18px;
  }
  .click_three_items {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid rgba(112,112,112,0.36);
  }
  .fabuxinxi_items {
    margin-left: 20px;
  }
  .fabuxinxi_items_top {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 24px 9px;
    margin-bottom: 25px;
  }
  .fabuxinxi_items_top_top {
    display: flex;
  }
  .fabuxinxi_items_top_top img {
    width: 40px;
    height: 40px;
  }
  .fabuxinxi_items_top_bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .two_btn_text_send span {
    margin: 0 5px;
  }
  .fabu_anniu a {
    background-color: rgba(255,72,72,1);
    color: #fff;
    border-radius: 13px;
    padding: 3px 17px;
  }
  .fabuxinxi_items_bottom {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 10px 29px;
  }
  .woguanzhude_title {
    display: flex;
  }
  .woguanzhude_title img {
    width: 37px;
    height: 36px;
  }
  .woguanzhude_list li img {
    width: 59px;
    height: 59px;
  }
  .woguanzhude_list li span {
    margin-left: 10px;
  }
  .dianzan_pinglun_num {
    margin: 10px;
  }
  .dianzan_pinglun_num a {
    margin: 0 5px;
  }
</style>