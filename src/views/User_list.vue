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
                    <li :class="come_news.no_read_message ? 'shuikanguowo01' : ''">
                      <router-link to="/message_list" :style="come_news.no_read_message ? 'color: rgba(230,73,128,1);' : 'color: rgb(234, 234, 234);'">
                        <span class="flag_num">{{come_news.no_read_message}}</span>
                      </router-link>
                      <router-link to="/message_list" :style="come_news.no_read_message ? 'color: rgba(230,73,128,1);' : 'color: rgb(0, 0, 0);'">
                        <span class="flag_name">未读消息</span>
                      </router-link>
                    </li>
                    <li :class="come_news.who_seed ? 'shuikanguowo01' : ''">
                      <span class="flag_num">
                        <router-link to="/user_list" :style="come_news.who_seed ? 'color: rgba(230,73,128,1);' : 'color: rgb(234, 234, 234);'">
                          <el-badge :is-dot="Boolean(come_news.who_seed)">{{come_news.who_seed}}</el-badge>
                        </router-link>
                      </span>
                      <span class="flag_name">
                        <router-link to="/user_list" :style="come_news.who_seed ? 'color: rgba(230,73,128,1);' : 'color: rgb(0, 0, 0);'">
                        谁看过我
                        </router-link>
                      </span>
                    </li>
                    <li :class="come_news.add_bind ? 'shuikanguowo01' : ''">
                      <span class="flag_num">
                        <router-link to="/user_list" :style="come_news.add_bind ? 'color: rgba(230,73,128,1);' : 'color: rgba(234,234,234,1);'">
                          {{come_news.add_bind}}
                        </router-link>
                      </span>
                      <span class="flag_name">
                        <router-link to="/user_list" :style="come_news.add_bind ? 'color: rgba(230,73,128,1);' : 'color: rgba(0,0,0,1);'">
                        新增关注
                        </router-link>
                      </span>
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
                        <span class="other_num">
                          <router-link to="/user_list">
                            {{come_news.bind_num}}
                          </router-link>
                        </span>
                        <span class="other_name">
                          <router-link to="/user_list">
                          关注我的
                          </router-link>
                        </span>
                      </li>
                      <li>
                        <span class="other_num">
                          <router-link to="/user_list">
                            {{come_news.seed_num}}
                          </router-link>
                        </span>
                        <span class="other_name">
                          <router-link to="/user_list">
                          我看过的
                          </router-link>
                        </span>
                      </li>
                      <li>
                        <span class="other_num">
                          <router-link to="/user_list">
                            {{come_news.friend_num}}
                          </router-link>
                        </span>
                        <span class="other_name">
                          <router-link to="/user_list">
                          好友
                          </router-link>
                        </span>
                      </li>
                      <li>
                        <span class="other_num">
                          <router-link to="/user_list">
                            {{come_news.fabulous_num}}
                          </router-link>
                        </span>
                        <span class="other_name">
                          <router-link to="/user_list">
                          赞过我
                          </router-link>
                        </span>
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
                    <el-tab-pane label="谁看过我" name="first">
                      <p style="text-align: center;color: #ccc;font-size: 14px;" v-if="!seen.length">什么都还没有呢(￣▽￣)</p>
                      <ul class="unread_message_list" v-else>
                        <li v-for="(item, index) in seen" :key="index">
                          <div class="left_img_name_des">
                            <div class="user_img">
                              <img :src="'http://admin.qianlixunta.com'+item.head_portrait" alt="">
                            </div>
                            <div class="name_age_adress_time">
                              <h4>{{item.nickname}}</h4>
                              <div>
                                <span>{{new Date().getFullYear() - item.users_year}}岁</span>
                                <span class="message_adress_item">{{item.workplace}}</span>
                              </div>
                              <div class="day_time_message_list">&nbsp;</div>
                            </div>
                            <!-- <div class="message_info_item">&nbsp;</div> -->
                          </div>
                          <div class="right_lijihuifu">
                            <a href="javascript:;" @click="getFocusBtn(item.users_id, 0)" :style="item.is_band_status ? 'background-color: #ddd;' : ''">
                              <span v-if="item.is_band_status">已关注</span>
                              <span v-else>关注</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </el-tab-pane>
                    <el-tab-pane label="新增关注" name="second">
                      <p style="text-align: center;color: #ccc;font-size: 14px;" v-if="!newlyAdded.length">什么都还没有呢(￣▽￣)</p>
                      <ul class="unread_message_list" v-else>
                        <li v-for="(item, index) in newlyAdded" :key="index">
                          <div class="left_img_name_des">
                            <div class="user_img">
                              <img :src="'http://admin.qianlixunta.com'+item.head_portrait" alt="">
                            </div>
                            <div class="name_age_adress_time">
                              <h4>{{item.nickname}}</h4>
                              <div>
                                <span>{{new Date().getFullYear() - item.users_year}}岁</span>
                                <span class="message_adress_item">{{item.workplace}}</span>
                              </div>
                              <div class="day_time_message_list">&nbsp;</div>
                            </div>
                            <!-- <div class="message_info_item">&nbsp;</div> -->
                          </div>
                          <div class="right_lijihuifu">
                            <a href="javascript:;" @click="getFocusBtn(item.users_id, 1)" :style="item.is_band_status ? 'background-color: #ddd;' : ''">
                              <span v-if="item.is_band_status">已关注</span>
                              <span v-else>关注</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </el-tab-pane>
                    <el-tab-pane label="关注我的" name="third">
                      <p style="text-align: center;color: #ccc;font-size: 14px;" v-if="!follow.length">什么都还没有呢(￣▽￣)</p>
                      <ul class="unread_message_list" v-else>
                        <li v-for="(item, index) in follow" :key="index">
                          <div class="left_img_name_des">
                            <div class="user_img">
                              <img :src="'http://admin.qianlixunta.com'+item.head_portrait" alt="">
                            </div>
                            <div class="name_age_adress_time">
                              <h4>{{item.nickname}}</h4>
                              <div>
                                <span>{{new Date().getFullYear() - item.users_year}}岁</span>
                                <span class="message_adress_item">{{item.workplace}}</span>
                              </div>
                              <div class="day_time_message_list">&nbsp;</div>
                            </div>
                            <!-- <div class="message_info_item">&nbsp;</div> -->
                          </div>
                          <div class="right_lijihuifu">
                            <a href="javascript:;" @click="getFocusBtn(item.users_id, 2)" :style="item.is_band_status ? 'background-color: #ddd;' : ''">
                              <span v-if="item.is_band_status">已关注</span>
                              <span v-else>关注</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </el-tab-pane>
                    <el-tab-pane label="我看过的" name="fourthly">
                      <p style="text-align: center;color: #ccc;font-size: 14px;" v-if="!iSeen.length">什么都还没有呢(￣▽￣)</p>
                      <ul class="unread_message_list" v-else>
                        <li v-for="(item, index) in iSeen" :key="index">
                          <div class="left_img_name_des">
                            <div class="user_img">
                              <img :src="'http://admin.qianlixunta.com'+item.head_portrait" alt="">
                            </div>
                            <div class="name_age_adress_time">
                              <h4>{{item.nickname}}</h4>
                              <div>
                                <span>{{new Date().getFullYear() - item.users_year}}岁</span>
                                <span class="message_adress_item">{{item.workplace}}</span>
                              </div>
                              <div class="day_time_message_list">&nbsp;</div>
                            </div>
                            <!-- <div class="message_info_item">&nbsp;</div> -->
                          </div>
                          <div class="right_lijihuifu">
                            <a href="javascript:;" @click="getFocusBtn(item.users_id, 3)" :style="item.is_band_status ? 'background-color: #ddd;' : ''">
                              <span v-if="item.is_band_status">已关注</span>
                              <span v-else>关注</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </el-tab-pane>
                    <el-tab-pane label="好友" name="fifth">
                      <p style="text-align: center;color: #ccc;font-size: 14px;" v-if="!myFriend.length">什么都还没有呢(￣▽￣)</p>
                      <ul class="unread_message_list" v-else>
                        <li v-for="(item, index) in myFriend" :key="index">
                          <div class="left_img_name_des">
                            <div class="user_img">
                              <img :src="'http://admin.qianlixunta.com'+item.head_portrait" alt="">
                            </div>
                            <div class="name_age_adress_time">
                              <h4>{{item.nickname}}</h4>
                              <div>
                                <span>{{new Date().getFullYear() - item.users_year}}岁</span>
                                <span class="message_adress_item">{{item.workplace}}</span>
                              </div>
                              <div class="day_time_message_list">&nbsp;</div>
                            </div>
                            <!-- <div class="message_info_item">&nbsp;</div> -->
                          </div>
                          <div class="right_lijihuifu">
                            <a href="javascript:;" @click="getFocusBtn(item.users_id, 4)" :style="item.is_band_status ? 'background-color: #ddd;' : ''">
                              <span v-if="item.is_band_status">已关注</span>
                              <span v-else>关注</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </el-tab-pane>
                    <el-tab-pane label="赞过我" name="sixth">
                      <p style="text-align: center;color: #ccc;font-size: 14px;" v-if="!star.length">什么都还没有呢(￣▽￣)</p>
                      <ul class="unread_message_list" v-else>
                        <li v-for="(item, index) in star" :key="index">
                          <div class="left_img_name_des">
                            <div class="user_img">
                              <img :src="'http://admin.qianlixunta.com'+item.head_portrait" alt="">
                            </div>
                            <div class="name_age_adress_time">
                              <h4>{{item.nickname}}</h4>
                              <div>
                                <span>{{new Date().getFullYear() - item.users_year}}岁</span>
                                <span class="message_adress_item">{{item.workplace}}</span>
                              </div>
                              <div class="day_time_message_list">&nbsp;</div>
                            </div>
                            <!-- <div class="message_info_item">&nbsp;</div> -->
                          </div>
                          <div class="right_lijihuifu">
                            <a href="javascript:;" @click="getFocusBtn(item.users_id, 5)" :style="item.is_band_status ? 'background-color: #ddd;' : ''">
                              <span v-if="item.is_band_status">已关注</span>
                              <span v-else>关注</span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </el-tab-pane>
                  </el-tabs>
                </template>
              </el-col>
              <el-col :span="7">
                <div class="right_recently_contact_person">
                  <h4>最近联系人</h4>
                  <p style="text-align: center;color: #ccc;font-size: 14px;" v-if="!recentContactsList.length">什么都还没有呢(￣▽￣)</p>
                  <ul class="new_recently_contact_person" v-else>
                    <li v-for="(item, index) in recentContactsList" :key="index">
                      <div class="item_contact_person">
                        <router-link :to="`other_user/${item.users_id}`">
                          <img :src="`http://admin.qianlixunta.com${item.head_portrait ? item.head_portrait : '/upload/admin/article/thumbnail/20200807/nan.png'}`" alt="" style="border-radius: 50%;margin: 8px 0;box-shadow: rgba(153, 153, 153, .5) 1px 1px 10px 1px;" />
                        </router-link>
                        <span>在线</span>
                      </div>
                      <p class="contact_person_name">{{item.nickname}}</p>
                      <span class="contact_person_time">{{item.time | dateFormat}}</span>
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
      activeName: 'first',
      // 个人信息数据
      come_news: {
        head_portrait: '/upload/admin/article/thumbnail/20200807/nv.png'
      },
      // 最近联系人
      recentContactsList: [],
      // 谁看过我
      seen: [],
      // 新增关注
      newlyAdded: [],
      // 关注我的
      follow: [],
      // 我看过的
      iSeen: [],
      // 好友
      myFriend: [],
      // 赞过我
      star: []
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
    })

    // 最近联系人
    this.showRecentContactsList()

    // 谁看过我
    this.getSeen()
  },
  methods: {
    // tab栏 切换时触发
    handleClick(tab, event) {
      if (tab.name == 'first') {
        // 谁看过我
        this.getSeen()
      } else if (tab.name == 'second') {
        // 新增关注
        this.getNewlyAdded()
      } else if (tab.name == 'third') {
        // 关注我的
        this.getFollow()
      } else if (tab.name == 'fourthly') {
        // 我看过的
        this.getISeen()
      } else if (tab.name == 'fifth') {
        // 好友
        this.getMyFriend()
      } else if (tab.name == 'sixth') {
        // 赞过我
        this.getStar()
      }
    },
    // 最近联系人
    async showRecentContactsList () {
      const res = await this.$axios.post('/wpapi/member/recent_contacts_list', {
        users_id: localStorage.getItem('users_id')
      })
      if (res.status !== '200') return this.$message.error(res.msg)
      this.recentContactsList = res.data
    },
    // 谁看过我
    async getSeen () {
      const res = await this.$axios.post('/wpapi/member/who_watch_list', {
        users_id: localStorage.getItem('users_id')
      })
      if (res.status !== '200') return this.$message.error(res.msg)
      this.seen = res.data
    },
    // 新增关注
    async getNewlyAdded () {
      const res = await this.$axios.post('/wpapi/member/add_follow_list', {
        users_id: localStorage.getItem('users_id')
      })
      if (res.status !== '200') return this.$message.error(res.msg)
      this.newlyAdded = res.data
    },
    // 关注我的
    async getFollow () {
      const res = await this.$axios.post('/wpapi/member/me_follow_list', {
        users_id: localStorage.getItem('users_id')
      })
      if (res.status !== '200') return this.$message.error(res.msg)
      this.follow = res.data
    },
    // 我看过的
    async getISeen () {
      const res = await this.$axios.post('/wpapi/member/me_watch_list', {
        users_id: localStorage.getItem('users_id')
      })
      if (res.status !== '200') return this.$message.error(res.msg)
      this.iSeen = res.data
    },
    // 好友
    async getMyFriend () {
      const res = await this.$axios.post('/wpapi/member/friend_list', {
        users_id: localStorage.getItem('users_id')
      })
      if (res.status !== '200') return this.$message.error(res.msg)
      this.myFriend = res.data
    },
    // 赞过我
    async getStar () {
      const res = await this.$axios.post('/wpapi/member/zan_list', {
        users_id: localStorage.getItem('users_id')
      })
      if (res.status !== '200') return this.$message.error(res.msg)
      this.star = res.data
    },
    // 关注按钮
    async getFocusBtn (bei_users_id, type) {
      const res = await this.$axios.post('/wpapi/me/btn_click', {
        users_id: localStorage.getItem('users_id'),
        token: localStorage.getItem('token'),
        bei_users_id: bei_users_id
      })
      if (res.status !== '200') return this.$message.error(res.msg)
      this.$message.success(res.data.msg)
      // 判断当前点击的关注属于哪个列表，然后调用接口，更新列表数据
      if (type === 0) {
        // 谁看过我
        this.getSeen()
      } else if (type === 1) {
        // 新增关注
        this.getNewlyAdded()
      } else if (type === 2) {
        // 关注我的
        this.getFollow()
      } else if (type === 3) {
        // 我看过的
        this.getISeen()
      } else if (type === 4) {
        // 好友
        this.getMyFriend()
      } else if (type === 5) {
        // 赞过我
        this.getStar()
      }
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