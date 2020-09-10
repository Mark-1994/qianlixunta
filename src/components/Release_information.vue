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
                    <img :src="'http://admin.qianlixunta.com'+come_news.head_portrait" alt="" />
                    <p>我的资料：80%</p>
                  </div>
                  <div class="name_phone_info">
                    <h4>{{come_news.nickname}}<img src="../assets/zuanshi03.png" alt="" /><span>v3</span></h4>
                    <div class="three_images_status">
                      <img src="../assets/shouji01.png" alt="">
                      <img src="../assets/faxiaoxi01.png" alt="">
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
                      <span class="flag_num">{{come_news.no_read_message}}</span>
                      <span class="flag_name">未读消息</span>
                    </li>
                    <li class="shuikanguowo01">
                      <span class="flag_num"><el-badge is-dot>{{come_news.who_seed}}</el-badge></span>
                      <span class="flag_name">谁看过我</span>
                    </li>
                    <li>
                      <span class="flag_num">{{come_news.add_bind}}</span>
                      <span class="flag_name">新增关注</span>
                    </li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="9">
                <div class="mine_info_right">
                  <div class="min_info_right_top">
                    <img v-for="(item, index) in come_news.img_arr" :key="index" :src="'http://admin.qianlixunta.com'+item.head_portrait" alt="">
                  </div>
                  <div class="min_info_right_bottom">
                    <ul>
                      <li>
                        <span class="other_num">{{come_news.bind_num}}</span>
                        <span class="other_name">关注我的</span>
                      </li>
                      <li>
                        <span class="other_num">{{come_news.seed_num}}</span>
                        <span class="other_name">我看过的</span>
                      </li>
                      <li>
                        <span class="other_num">{{come_news.friend_num}}</span>
                        <span class="other_name">好友</span>
                      </li>
                      <li>
                        <span class="other_num">{{come_news.fabulous_num}}</span>
                        <span class="other_name">赞过的</span>
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
                <el-card class="box-card" style="border-radius: 30px;margin-bottom: 23px;" v-for="(item, index) in circle_list" :key="index">
                  <div slot="header" class="clearfix header_title_info_show">
                    <el-avatar :size="60" :src="'http://admin.qianlixunta.com'+item.head_portrait"></el-avatar>
                    <div class="item_name_time">
                      <span class="item_name_info">{{item.nickname}}</span>
                      <span class="month_day_item">{{item.create_time}}</span>
                    </div>
                  </div>
                  <div class="text item item_fabuneirong">
                    <p>{{item.content}}</p>
                    <!-- <img src="../assets/fabu01.png" alt=""> -->
                    <img :src="'http://'+item.send_img" alt="">
                  </div>
                  <div class="dianzan_pinglun_num">
                    <el-link><i class="iconfont-qianlixunta icon-qianlixuntadianzan"></i> {{item.zan_num}}</el-link>
                    <el-link><i class="iconfont-qianlixunta icon-qianlixuntapinglun"></i> {{item.message_num}}</el-link>
                  </div>
                  <div class="bottom clearfix click_three_items">
                    <el-button type="text" class="button"><i class="iconfont-qianlixunta icon-qianlixuntadianzan"></i> 点赞</el-button>
                    <el-button type="text" class="button"><i class="iconfont-qianlixunta icon-qianlixuntapinglun"></i> 评论</el-button>
                    <el-button type="text" class="button"><i class="iconfont-qianlixunta icon-qianlixuntaguanzhu"></i> 关注</el-button>
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

                      <!-- 图片上传 -->
                      <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                      <div class="fabuxinxi_items_top_bottom">
                        <div class="two_btn_text_send">
                          <span>
                            <img src="../assets/meirong01.png" alt="">
                          </span>
                          <el-upload
                            class="upload-demo01"
                            action="http://admin.qianlixunta.com/wpapi/member/send_image"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            list-type="picture"
                            :data="{token:token}">
                            <span>
                              <img src="../assets/tupian01.png" alt="">
                            </span>
                          </el-upload>
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
      // 上传的文件列表
      fileList: [],
      activeName: 'first',
      // 发布信息的文本
      fabuxinxi_text: '',
      // 个人信息数据
      come_news: {
        head_portrait: '/upload/admin/article/thumbnail/20200807/nv.png'
      },
      // 朋友圈列表数据初始化
      circle_list: {},
      // 登陆后保存的 token
      token: localStorage.getItem('token')
    }
  },
  created: function() {
    this.$emit('header', true);

    // 判断用户是否登录，如果没有登录就跳转到登录页面
    if (!(window.localStorage.getItem('token') && window.localStorage.getItem('users_id'))) {
      this.$message.error('您还没有登录，请您先登陆！');
      this.$router.push('/login');
    }

    // 个人信息初始化
    this.$axios.post('/wpapi/member/come_news', {users_id: localStorage.getItem('users_id')})
    .then((result) => {
      console.log(result);
      this.come_news = result.data;
    })
    .catch((error) => {
      console.log(error);
    });

    // 朋友圈列表数据初始化
    this.$axios.post('/wpapi/me/circle_list', {token:localStorage.getItem('token'),users_id: localStorage.getItem('users_id')})
    .then((result) => {
      console.log(result);
      this.circle_list = result.data;
      console.log(JSON.parse(result.data[0].send_img)[0]);
      this.circle_list.forEach(element => {
        if (element.send_img) {
          element.send_img = JSON.parse(element.send_img)[0];
          // console.log(element.send_img);
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });

  },
  methods: {
    // 上传图片文件列表移除文件时的钩子
    handleRemove() {
      console.log('上传图片文件列表移除文件时的钩子');
    },
    // 点击上传图片文件列表中已上传的文件时的钩子
    handlePreview() {
      console.log('点击上传图片文件列表中已上传的文件时的钩子');
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
  .shuikanguowo01 {
    color: rgba(230,73,128,1);
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
  .mine_info_middle ul li.shuikanguowo01 .flag_num {
    color: rgba(230,73,128,1);
  }
  .mine_info_middle ul li .flag_name {
    font-size: 24px;
  }
  .min_info_right_top {
    text-align: center;
    height: 70px;
    position: relative;
  }
  .min_info_right_top img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
  }
  .min_info_right_top img:nth-child(1) {
    transform: translateX(-10%);
    filter: blur(1px);
  }
  .min_info_right_top img:nth-child(2) {
    transform: translateX(-50%);
    filter: blur(1px);
  }
  .min_info_right_top img:nth-child(3) {
    transform: translateX(-90%);
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
  .mine_img_info img {
    border-radius: 50%;
    padding: 10px;
    width: 130px;
    height: 130px;
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
    font-size: 18px;
  }
  .name_phone_info h4 span {
    color: rgba(250,176,5,1);
    font-size: 12px;
    vertical-align: bottom;
  }
  .name_phone_info h4 img {
    vertical-align: bottom;
    margin: 0 2px 0 5px;
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
    max-width: 100%;
  }
  .header_title_info_show {
    display: flex;
  }
  .item_name_time {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
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
    margin: 0 0 10px;
  }
  .fabuxinxi_items_top_top h4 {
    margin: 0 0 0 10px;
    line-height: 40px;
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
    margin-bottom: 10px;
  }
  .woguanzhude_title img {
    width: 37px;
    height: 36px;
  }
  .woguanzhude_title h4 {
    margin: 0 0 0 10px;
    line-height: 36px;
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
  .icon-qianlixuntadianzan {
    color: rgba(82, 106, 241, 1);
  }
  .icon-qianlixuntapinglun {
    color: #fab005;
  }
  .icon-qianlixuntaguanzhu {
    color: #e64980;
  }
  .button {
    color: #000;
  }
  .upload-demo01 {
    display: inline-block;
  }
</style>