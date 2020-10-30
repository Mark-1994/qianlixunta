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
                    <h4>
                      <span style="display:inline-block;max-width:95px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:18px;color:#000;">{{come_news.nickname}}</span>
                      <img src="../assets/zuanshi03.png" alt="" />
                      <span>v3</span>
                    </h4>
                    <div class="three_images_status">
                      <img src="../assets/shouji01.png" alt="">
                      <img src="../assets/faxiaoxi01.png" alt="">
                      <img src="../assets/shimingrenzheng01.png" alt="">
                    </div>
                    <router-link to="basicinformation">
                      <el-badge is-dot>完善个人信息</el-badge>
                    </router-link>
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
                  <el-tabs v-model="activeName" style="background-color: #fff;border-radius: 30px;padding: 20px;" @tab-click="handleClick">
                    <el-tab-pane label="未读消息" name="first">
                      <ul class="unread_message_list">
                        <li v-for="item in general_message_list.data" :key="item.id">
                          <div class="left_img_name_des">
                            <div class="user_img">
                              <!-- <img src="../assets/username01.png" alt=""> -->
                              <img :src="'http://admin.qianlixunta.com'+item.head_portrait" alt="">
                            </div>
                            <div class="name_age_adress_time">
                              <h4>{{item.fromname}}</h4>
                              <div>
                                <span>年龄</span>
                                <span class="message_adress_item">地址</span>
                              </div>
                              <div class="day_time_message_list">{{item.time}}</div>
                            </div>
                            <div class="message_info_item">{{item.content}}</div>
                          </div>
                          <div class="right_lijihuifu">
                            <a :href="'/#/other_user/'+item.fromid">立即回复</a>
                          </div>
                        </li>
                      </ul>
                    </el-tab-pane>
                    <el-tab-pane label="已读消息" name="second">
                      <ul>
                        <li v-for="item in general_message_list.data" :key="item.id">已读消息{{item.title}}</li>
                      </ul>
                    </el-tab-pane>
                    <el-tab-pane label="系统消息" name="third">
                      <ul class="system_list">
                        <li v-for="item in general_message_list" :key="item.id" style="border-bottom: 2px dashed rgba(103,103,103,0.15);padding: 20px;">
                          <p style="font-weight: bold;">{{item.title}}</p>
                          <p>{{item.content}}</p>
                          <p>{{item.order_osn}}</p>
                          <p>{{item.pay_time}}</p>
                          <p>{{item.vip_price}}</p>
                        </li>
                      </ul>
                    </el-tab-pane>
                  </el-tabs>
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="general_message_list.total">
                  </el-pagination>
                </template>
              </el-col>
              <el-col :span="7">
                <div class="right_recently_contact_person">
                  <h4>最近联系人</h4>
                  <ul class="new_recently_contact_person">
                    <li v-for="(item, index) in recentContactsList" :key="index">
                      <div class="item_contact_person">
                        <img :src="`http://admin.qianlixunta.com${item.head_portrait}`" alt="" style="border-radius: 50%;margin: 8px 0;box-shadow: 1px 1px 10px 1px #999;" />
                        <span>在线</span>
                      </div>
                      <p class="contact_person_name">{{item.nickname}}</p>
                      <span class="contact_person_time">{{item.time | dateFormat}}</span>
                    </li>
                    <!-- <li>
                      <div class="item_contact_person">
                        <img src="../assets/username01.png" alt="" />
                        <span>在线</span>
                      </div>
                      <p class="contact_person_name">林俊杰</p>
                      <span class="contact_person_time">2分钟前在线</span>
                    </li> -->
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
      activeName: 'first',
      // 个人信息数据
      come_news: {
        head_portrait: '/upload/admin/article/thumbnail/20200807/nv.png'
      },
      // 消息列表
      // general_message_list: {},
      general_message_list: [],
      // 当前消息类型
      message_type: 0,
      // 最近联系人
      recentContactsList: []
    }
  },
  created() {
    this.$emit('header', true);

    // 判断用户是否登录，如果没有登录就跳转到登录页面
    if (!(window.localStorage.getItem('token') && window.localStorage.getItem('users_id'))) {
      this.$message.error('您还没有登录，请您先登陆！');
      this.$router.push('/login');
    }

    // 个人信息初始化
    this.$axios.post('/wpapi/member/come_news', {
      users_id: localStorage.getItem('users_id')
    })
    .then((result) => {
      console.log(result);
      this.come_news = result.data;
    })
    .catch((error) => {
      console.log(error);
    });

    // 未读消息
    this.$axios.post('/wpapi/member/is_read_message', {
      users_id: localStorage.getItem('users_id'),
      page: 1
    })
    .then((result) => {
      console.log(result);
      this.general_message_list = result.data;
    })
    .catch((error) => {
      console.log(error);
    });

    // 最近联系人
    this.showRecentContactsList()
  },
  methods: {
    // tab栏 未读消息 已读消息 系统消息 切换时触发
    handleClick(tab, event) {
      // console.log(tab, event);
      if (tab.name == 'first') {
        // 未读消息
        this.message_type = 0;
        this.$axios.post('/wpapi/member/is_read_message', {users_id:localStorage.getItem('users_id'),page:1})
        .then((result) => {
          console.log(result);
          this.general_message_list = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
      } else if (tab.name == 'second') {
        // 已读消息
        this.message_type = 1;
        this.$axios.post('/wpapi/member/had_read_message', {users_id:localStorage.getItem('users_id'),page:1})
        .then((result) => {
          console.log(result);
          this.general_message_list = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
      } else if (tab.name == 'third') {
        // 系统消息
        this.message_type = 2;
        this.$axios.post('/wpapi/member/system_message', {users_id:localStorage.getItem('users_id'),page:1})
        .then((result) => {
          console.log(result);
          this.general_message_list = result.data.message_info;
          this.general_message_list.total = result.data.page_count;
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
    // 分页事件
    handleSizeChange(val) {
      console.log(`每页${val}条`);
      // 判断当前是哪一种消息
      if (this.message_type == 0) {
        console.log('未读消息');
      } else if (this.message_type == 1) {
        console.log('已读消息');
      } else if (this.message_type == 2) {
        console.log('系统消息');
      }
    },
    handleCurrentChange(val) {
      console.log(`下一页${val}`);
      // 判断当前是哪一种消息
      if (this.message_type == 0) {
        console.log('未读消息');
      } else if (this.message_type == 1) {
        console.log('已读消息');
      } else if (this.message_type == 2) {
        console.log('系统消息');
      }
    },
    // 最近联系人
    async showRecentContactsList () {
      const res = await this.$axios.post('/wpapi/member/recent_contacts_list', {
        users_id: localStorage.getItem('users_id')
      })
      if (res.status !== '200') return this.$message.error(res.msg)
      this.recentContactsList = res.data
    }
  }
}
</script>

<style scoped>
  .mine_info_show_change {
    width: 1180px;
    margin: 24px auto 148px;
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
    font-weight: bold;
  }
  .mine_info_middle ul li.shuikanguowo01,
  .mine_info_middle ul li.shuikanguowo01 .flag_num {
    color: rgba(230,73,128,1);
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
  .name_phone_info h4 img {
    vertical-align: bottom;
    margin: 0 2px 0 5px;
  }
  .name_phone_info h4 span {
    color: rgba(250,176,5,1);
    font-size: 12px;
    vertical-align: bottom;
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
    font-size: 18px;
  }
  .name_age_adress_time {
    line-height: 40px;
    margin-right: 40px;
  }
  .message_info_item {
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 20px;
    width: 370px;
    margin-right: 10px;
  }
  .right_lijihuifu a {
    background-color: rgba(230,73,128,1);
    border-radius: 8px;
    color: #fff;
    padding: 8px 22px;
    display: inline-block;
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
    width: 80%;
    height: 80%;
    border-radius: 50%;
  }
  .system_list li:last-child {
    border: none !important;
  }
</style>