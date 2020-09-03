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
                    <a href="javascript:;"><el-badge is-dot>完善个人信息</el-badge></a>
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
                    <li class="shuikanguowo01">
                      <span class="flag_num"><el-badge is-dot>0</el-badge></span>
                      <span class="flag_name">谁看过我</span>
                    </li>
                    <li>
                      <span class="flag_num">0</span>
                      <span class="flag_name">新增关注</span>
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
                        <span class="other_name">我看过的</span>
                      </li>
                      <li>
                        <span class="other_num">0</span>
                        <span class="other_name">好友</span>
                      </li>
                      <li>
                        <span class="other_num">0</span>
                        <span class="other_name">赞过我</span>
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
                <template>
                  <el-tabs v-model="activeName" style="background-color: #fff;border-radius: 30px;">
                    <el-tab-pane label="未读消息" name="first">
                      <ul class="unread_message_list">
                        <li>
                          <div class="left_img_name_des">
                            <div class="user_img">
                              <img src="../assets/username01.png" alt="">
                            </div>
                            <div class="name_age_adress_time">
                              <h4>昵称</h4>
                              <div>
                                <span>27岁</span>
                                <span class="message_adress_item">武汉</span>
                              </div>
                              <div class="day_time_message_list">今天 18:00</div>
                            </div>
                            <div class="message_info_item">哈喽，让我唱歌给你听吧</div>
                          </div>
                          <div class="right_lijihuifu">
                            <a href="javascript:;">立即回复</a>
                          </div>
                        </li>
                      </ul>
                    </el-tab-pane>
                    <el-tab-pane label="已读消息" name="second">已读消息</el-tab-pane>
                    <el-tab-pane label="系统消息" name="third">系统消息</el-tab-pane>
                  </el-tabs>
                  <el-pagination
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                  </el-pagination>
                </template>
              </el-col>
              <el-col :span="7">
                <div class="right_recently_contact_person">
                  <h4>最近联系人</h4>
                  <ul class="new_recently_contact_person">
                    <li>
                      <div class="item_contact_person">
                        <img src="../assets/username01.png" alt="" />
                        <span>在线</span>
                      </div>
                      <p class="contact_person_name">林俊杰</p>
                      <span class="contact_person_time">2分钟前在线</span>
                    </li>
                    <li>
                      <div class="item_contact_person">
                        <img src="../assets/username01.png" alt="" />
                        <span>在线</span>
                      </div>
                      <p class="contact_person_name">林俊杰</p>
                      <span class="contact_person_time">2分钟前在线</span>
                    </li>
                  </ul>
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
      activeName: 'first'
    }
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
    color: rgba(234,234,234,1);
  }
  .mine_info_middle ul li .flag_name {
    font-size: 24px;
  }
  .mine_info_middle ul li.shuikanguowo01,
  .mine_info_middle ul li.shuikanguowo01 .flag_num {
    color: rgba(230,73,128,1);
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

  .unread_message_list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px dashed rgba(103,103,103,0.15);
    padding: 20px;
  }
  .unread_message_list li:last-child {
    border: 0;
  }
  .unread_message_list li .left_img_name_des {
    display: flex;
    align-items: center;
  }
  .name_age_adress_time h4 {
    margin: 0;
    font-size: 20px;
  }
  .name_age_adress_time {
    line-height: 40px;
    margin-right: 40px;
  }
  .message_info_item {
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 20px;
    width: 400px;
  }
  .right_lijihuifu a {
    background-color: rgba(230,73,128,1);
    border-radius: 8px;
    color: #fff;
    padding: 8px 22px;
  }
  .day_time_message_list {
    color: rgba(152,152,152,1);
    font-size: 12px;
  }
  .message_adress_item {
    margin-left: 19px;
  }
  .mine_message_list {
    margin-top: 26px;
  }
  .right_recently_contact_person {
    background-color: #fff;
    margin-left: 20px;
    border-radius: 20px;
    padding: 10px 30px;
  }
  .right_recently_contact_person h4 {
    margin: 0;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .right_recently_contact_person h4::before {
    content: '';
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url(../assets/guanzhu01.png) no-repeat 0 0 / cover;
    vertical-align: middle;
    margin-right: 16px;
  }
  .new_recently_contact_person li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  .contact_person_time {
    color: rgba(152,152,152,1);
  }
  .item_contact_person {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item_contact_person img {
    width: 60px;
    height: 60px;
  }
  .item_contact_person span {
    font-size: 12px;
  }
  .el-pagination {
    margin-top: 25px;
  }
  .user_img {
    width: 108px;
    height: 108px;
  }
  .user_img img {
    width: 100%;
  }
</style>