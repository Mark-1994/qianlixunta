<template>
  <div class="login_container">
    <el-container>
      <el-header style="height: auto;">
        <el-row class="header_left_right">
          <el-col :span="12" class="header_left_slogn">
            <img src="../assets/logo01.png" alt="" />
            <span>千里寻他</span>
          </el-col>
          <el-col :span="12" class="header_right_item">
            <img src="../assets/dibiao01.svg" alt="" />
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                武汉<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="select_city_list">
                <el-dropdown-item>热门：</el-dropdown-item>
                <el-dropdown-item v-for="item in cityInfo" :key="item.id" :command="item.name">{{item.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button size="small" round class="login">登录</el-button>
            <el-button size="small" round class="signin">注册</el-button>
          </el-col>
        </el-row>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          text-color="#fff"
          active-text-color="#fff">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">加入会员</el-menu-item>
          <el-menu-item index="3">寻找TA</el-menu-item>
          <el-menu-item index="4">约吧走起</el-menu-item>
          <el-menu-item index="5"><a href="javascript:;">我要发布</a></el-menu-item>
          <el-menu-item index="6"><a href="javascript:;">来消息啦</a></el-menu-item>
          <el-menu-item index="7"><a href="javascript:;">红娘一对一</a></el-menu-item>
          <el-menu-item index="8"><a href="javascript:;">我的</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <div class="mine_info_show_change">
          <div class="mine_info">
            <el-row>
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
                      <img src="../assets/shouji01.png" alt="">
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
                  <div>
                    <el-link icon="el-icon-edit">22</el-link>
                    <el-link><i class="el-icon-view el-icon--right"></i> 3</el-link>
                  </div>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">点赞</el-button>
                    <el-button type="text" class="button">评论</el-button>
                    <el-button type="text" class="button">关注</el-button>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="7">
                def
              </el-col>
            </el-row>
          </div>
        </div>
      </el-main>
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
</style>