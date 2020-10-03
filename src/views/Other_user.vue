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
                    <router-link to="/basicinformation">
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
                        <span class="other_name">赞过的</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- 其他客户信息main -->
          <div class="other_user_main">
            <div class="other_user_main_left">
              <div class="other_user_main_left_big_img">
                <img :src="'http://admin.qianlixunta.com'+select_users_info.head_portrait" alt="" />
              </div>
              <div class="other_user_main_left_small_img" v-if="select_users_info.life_imgs">
                <a href="javascript:;" class="img_left_move" @click="img_left_move">&lt;</a>
                <ul>
                  <li v-for="(item, index) in select_users_info.life_imgs" :key="index"><img :src="'http://admin.qianlixunta.com'+item" alt=""></li>
                  <!-- <li><img src="../assets/touxiang_small02.png" alt=""></li>
                  <li><img src="../assets/touxiang_small02.png" alt=""></li> -->
                </ul>
                <a href="javascript:;" class="img_right_move" @click="img_right_move">&gt;</a>
              </div>
            </div>
            <div class="other_user_main_right">
              <div class="nickname_info">
                <h4>{{select_users_info.nickname}}<img src="../assets/zuanshi03.png" alt="" /><span>v3</span></h4>
              </div>
              <div class="user_info">
                <img src="../assets/shouji01.png" alt="">
                <img src="../assets/faxiaoxi01.png" alt="">
                <img src="../assets/shimingrenzheng03.png" alt="">
              </div>
              <div class="user_age_sex_marrage">
                <span v-if="select_users_info.birth_day">{{new Date().getFullYear() - select_users_info.birth_day.split('.')[0]}}岁</span>
                <span>{{select_users_info.sex ? '男' : '女'}}</span>
                <span>{{select_users_info.marital_status}}</span>
              </div>
              <div class="ither_user_info_list">
                <ul>
                  <li><span>现居：</span>{{select_users_info.address}}</li>
                  <li><span>籍贯：</span>{{select_users_info.native_place}}</li>
                  <li><span>星座：</span>{{select_users_info.constellation}}</li>
                  <li><span>生肖：</span>{{select_users_info.the_chinese_zodiac}}</li>
                  <li><span>身高：</span>{{select_users_info.height}}CM</li>
                  <li><span>体重：</span><span v-if="select_users_info.weight">{{select_users_info.weight}}公斤</span></li>
                  <li><span>职业：</span>{{select_users_info.job}}</li>
                  <li><span>收入：</span>{{select_users_info.monthly_salary}}元</li>
                </ul>
              </div>
            </div>
            <!-- 右上角三个按钮 -->
            <div class="greet_msg_like">
              <!-- <el-button type="primary">打招呼</el-button> -->
              <el-button type="primary" @click="send_message">发消息</el-button>
              <!-- <el-button type="info" @click="send_message">发消息</el-button> -->
              <el-button type="danger">喜欢</el-button>
            </div>
          </div>
          <!-- 自我介绍 -->
          <div class="other_user_introduce_myself">
            <h4><img src="../assets/ziwojieshao01.png" alt="" /> 自我介绍</h4>
            <p>{{select_users_info.introduce_oneself}}</p>
          </div>
          <!-- 人物速写DNA -->
          <div class="other_user_unedited_biographies">
            <h4><img src="../assets/dna01.png" alt="" /> 人物速写DNA</h4>
            <div class="hobbies_personality_label">
              <div class="hobbies_personality_label_left">
                她的兴趣爱好：
                <div>
                  <el-tag>健身</el-tag>
                  <el-tag type="success">电影</el-tag>
                  <el-tag type="info">旅游</el-tag>
                  <el-tag type="warning">游泳</el-tag>
                  <el-tag type="danger">游泳</el-tag>
                </div>
              </div>
              <div class="hobbies_personality_label_right">
                她的个性标签：
                <div>
                  <el-tag>外向</el-tag>
                  <el-tag type="success">阳光</el-tag>
                  <el-tag type="info">幽默</el-tag>
                  <el-tag type="warning">幽默</el-tag>
                  <el-tag type="danger">幽默</el-tag>
                </div>
              </div>
            </div>
          </div>
          <!-- TA的理想型 -->
          <div class="other_user_ideal_type">
            <h4><img src="../assets/tadelixiangxing01.png" alt="" /> TA的理想型</h4>
            <ul>
              <li><span>年龄：</span>&nbsp;</li>
              <li><span>民族：</span>&nbsp;</li>
              <li><span>身高：</span><span v-if="select_users_info.imp_height" style="color:#000;">{{select_users_info.imp_height}}CM</span></li>
              <li><span>居住地：</span>&nbsp;</li>
              <li><span>学历：</span>{{select_users_info.imp_education}}</li>
              <li><span>婚姻状况：</span>{{select_users_info.imp_marital_status}}</li>
            </ul>
          </div>
          <!-- 生活方式 -->
          <div class="other_user_life_style">
            <h4><img src="../assets/shenghuofangshi01.png" alt="" /> 生活方式</h4>
            <ul>
              <li><span>吸烟：</span>{{select_users_info.smoke}}</li>
              <li><span>饮酒：</span>{{select_users_info.drink_wine}}</li>
              <li><span>饮食习惯：</span>{{select_users_info.eating_habits}}</li>
              <li><span>宗教信仰：</span>{{select_users_info.religious_belief}}</li>
              <li><span>作息时间：</span>{{select_users_info.time_table}}</li>
              <li><span>交际圈子：</span>{{select_users_info.social_circle}}</li>
              <li><span>锻炼习惯：</span>{{select_users_info.exercise_habits}}</li>
              <li><span>逛街购物：</span>{{select_users_info.shopping_habits}}</li>
              <li><span>最大消费：</span>{{select_users_info.maximum_consumption}}</li>
              <li><span>家务：</span>{{select_users_info.household_distribution}}</li>
              <li><span>宠物：</span>{{select_users_info.pet_rearing}}</li>
            </ul>
          </div>
          <!-- 婚姻观念 -->
          <div class="other_user_marriage_concept">
            <h4><img src="../assets/hunyinguannian01.png" alt="" /> 婚姻观念</h4>
            <ul>
              <li><span>籍贯：</span>{{select_users_info.native_place}}</li>
              <li><span>国籍：</span>{{select_users_info.nationality}}</li>
              <li><span>性格：</span>{{select_users_info.personality}}</li>
              <li><span>幽默感：</span>{{select_users_info.sense_of_humor}}</li>
              <li><span>脾气：</span>{{select_users_info.bad_temper}}</li>
              <li><span>是否投入看真实情况：</span>{{select_users_info.treat_feelings}}</li>
              <li><span>是否愿意要孩子：</span>{{select_users_info.about_children}}</li>
              <li><span>结婚：</span>{{select_users_info.get_married}}</li>
              <li><span>长时间异地恋：</span>{{select_users_info.long_distance_love}}</li>
              <li><span>理想婚姻：</span>{{select_users_info.ideal_marriage}}</li>
              <li><span>赡养老人：</span>{{select_users_info.parents_live_together}}</li>
              <li><span>是否是独生子女：</span>{{select_users_info.home_ranking}}</li>
              <li><span>兄妹还是姐弟：</span>{{select_users_info.brothers_and_sisters}}</li>
              <li><span>父母健康情况：</span>{{select_users_info.parents}}</li>
              <li><span>父亲工作：</span>{{select_users_info.father_job}}</li>
              <li><span>母亲工作：</span>{{select_users_info.mother_job}}</li>
              <li><span>父母是否有退休金：</span>{{select_users_info.parent_economy}}</li>
              <li><span>父母是否有医疗保险：</span>{{select_users_info.parents_medical_insurance}}</li>
            </ul>
          </div>
          <!-- 经济实力 -->
          <div class="other_user_economic_power">
            <h4><img src="../assets/jingjishili01.png" alt="" /> 经济实力</h4>
            <ul>
              <li><span>投资理财：</span>{{select_users_info.investment_and_financing}}</li>
              <li><span>外债贷款：</span>{{select_users_info.foreign_debt_loan}}</li>
              <li><span>经济观念：</span>{{select_users_info.economic_concept}}</li>
            </ul>
          </div>
          <!-- 体型外貌 -->
          <div class="other_user_body_image">
            <h4><img src="../assets/tixingwaimao01.png" alt="" /> 体型外貌</h4>
            <ul>
              <li><span>体重：</span><span v-if="select_users_info.weight" style="color:#000;">{{select_users_info.weight}}KG</span></li>
              <li><span>体型：</span>{{select_users_info.shape}}</li>
              <li><span>脸型：</span>{{select_users_info.face_shape}}</li>
              <li><span>眼睛：</span>{{select_users_info.eye}}</li>
              <li><span>头发：</span>{{select_users_info.hair}}</li>
              <li><span>皮肤：</span>{{select_users_info.skin}}</li>
              <li><span>肌肉：</span>{{select_users_info.muscle}}</li>
              <li><span>穿衣风格：</span>{{select_users_info.dressing_style}}</li>
            </ul>
          </div>
          <!-- 兴趣爱好 -->
          <div class="other_user_hobbies_interests">
            <h4><img src="../assets/xingquaihao01.png" alt="" /> 兴趣爱好</h4>
            <ul>
              <li><span>旅游：</span>{{select_users_info.travel_play}}</li>
              <li><span>饮食：</span>{{select_users_info.food}}</li>
              <li><span>书籍：</span>{{select_users_info.book}}</li>
              <li><span>电影：</span>{{select_users_info.film}}</li>
              <li><span>节目：</span>{{select_users_info.program}}</li>
              <li><span>娱乐休闲：</span>{{select_users_info.entertainment_leisure}}</li>
              <li><span>业余爱好：</span>{{select_users_info.avocation}}</li>
            </ul>
          </div>
        </div>
      </el-main>
      
    </el-container>

    <!-- 发消息弹窗 -->
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="660px">
      <el-row>
        <div class="dialog_send_message">
          <el-col :span="7">
          <div class="dialog_send_message_left">
            <el-image
            style="width: 100%; height: 150px; border-radius: 10px; box-shadow: 3px 3px 9px #888;"
            :src="'http://admin.qianlixunta.com'+select_users_info.head_portrait"
            fit="fit"></el-image>
            <h4>{{select_users_info.nickname}}<img src="../assets/zuanshi03.png" alt="" /><span>v3</span></h4>
            <div class="img_status_list">
              <img src="../assets/shouji01.png" alt="">
              <img src="../assets/faxiaoxi01.png" alt="">
              <img src="../assets/shimingrenzheng01.png" alt="">
            </div>
            <ul class="user_list_info">
              <li v-if="select_users_info.birth_day">{{new Date().getFullYear() - select_users_info.birth_day.split('.')[0]}}岁</li>
              <li>{{select_users_info.marital_status}}</li>
              <li>{{select_users_info.height}}CM</li>
            </ul>
            <h4 class="common_tag_title">你们的共同标签</h4>
            <ul class="common_tag">
              <li>90后</li>
              <li>健身</li>
              <li>游戏</li>
            </ul>
            <el-button style="background: linear-gradient(360deg,#fc2c89 11%, #ff97c6 99%);color: #fff;outline: none;border: 0;display:block;margin: 0 auto;" size="mini">关注TA</el-button>
          </div>
          </el-col>
          <el-col :span="17">
          <div class="dialog_send_message_right">
            <div class="show_message_list">
              <ul>
                <li v-for="(item, index) in msg_list" :class="item.fromid == users_id ? 'msg_right' : 'msg_left'" :key="index"><span v-if="item.fromid != users_id" class="msg_fromname">{{item.fromname}}：</span><span class="msg_content">{{item.content}}</span><span v-if="item.fromid == users_id" class="msg_fromname">：{{item.fromname}}</span></li>
                <!-- <li>今天一起吃晚饭吗</li> -->
              </ul>
            </div>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="send_message_content" style="margin: 15px 0px 10px;">
            </el-input>
            <div class="send_msg_btn">

              <el-popover
                placement="bottom-start"
                width="250"
                trigger="click"
                class="emoBox">

                <div class="emotionList">
                  <a href="javascript:;" @click="getEmo(index)" v-for="(item, index) in faceList" :key="index" class="emotionItem">{{item}}</a>
                </div>

                <img slot="reference" src="../assets/biaoqing01.png" alt="">
              </el-popover>

              <el-button style="background: linear-gradient(0deg,#5ac2ff, #c3e9ff);color: #fff;outline: none;border: 0;" @click="send_btn">发送</el-button>
            </div>
          </div>
          </el-col>
        </div>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import emoji from '@/assets/emoji.json'

export default {
  data() {
    return {
      // 个人信息数据
      come_news: {
        head_portrait: '/upload/admin/article/thumbnail/20200807/nv.png'
      },
      // 当前用户信息
      select_users_info: {
        head_portrait: '/upload/admin/article/thumbnail/20200807/nv.png'
      },
      // 发消息弹窗显示隐藏
      dialogVisible: false,
      // 发送消息内容
      send_message_content: '',
      // 消息列表
      msg_list: [],
      // 表情列表
      faceList: [],
      // users_id
      users_id: localStorage.getItem('users_id')
    }
  },
  created: function() {
    this.$emit('header', true);

    // 聊天页面信息展示
    // this.$axios.post('/wpapi/me/chat_show', {
    //   users_id: localStorage.getItem('users_id'),
    //   token: localStorage.getItem('token'),
    //   bei_users_id: this.$route.params.bei_users_id
    // })
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });

    // 判断用户是否登录，如果没有登录就跳转到登录页面
    if (!(window.localStorage.getItem('token') && window.localStorage.getItem('users_id'))) {
      this.$message.error('您还没有登录，请您先登陆！');
      this.$router.push('/login');
    }

    // 用户信息展示页
    this.$axios.post('/wpapi/me/select_users_info', {
      users_id: localStorage.getItem('users_id'),
      token: localStorage.getItem('token'),
      bei_users_id: this.$route.params.bei_users_id
    })
    .then((result) => {
      console.log(result);
      this.select_users_info = result.data;
      this.select_users_info.life_imgs = JSON.parse(this.select_users_info.life_imgs);
    })
    .catch((error) => {
      console.log(error);
    });

    // 个人信息初始化
    this.$axios.post('/wpapi/member/come_news', {users_id: localStorage.getItem('users_id')})
    .then((result) => {
      console.log(result);
      this.come_news = result.data;
    })
    .catch((error) => {
      console.log(error);
    });

  },
  mounted: function() {
    for (let i in emoji) {
      this.faceList.push(emoji[i].char);
    }
  },
  methods: {
    // 发消息弹窗
    send_message() {
      this.dialogVisible = true;

      this.$axios.post('/wpapi/me/chat_start_init', {
        users_id: localStorage.getItem('users_id'),
        token: localStorage.getItem('token'),
        fromid: localStorage.getItem('users_id'),
        toid: this.$route.params.bei_users_id
      })
      .then((result) => {
        console.log(result);
        this.msg_list = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 发送消息按钮
    send_btn() {
      this.$axios.post('/wpapi/me/chat_start', {
        users_id: localStorage.getItem('users_id'),
        token: localStorage.getItem('token'),
        bei_users_id: this.$route.params.bei_users_id,
        content: this.send_message_content
      })
      .then((result) => {
        console.log(result);
        if (result.status !== '200') return this.$message.error('留言消息发送失败！');
        this.send_message_content = '';

        // 更新发消息列表
        this.$axios.post('/wpapi/me/chat_start_init', {
          users_id: localStorage.getItem('users_id'),
          token: localStorage.getItem('token'),
          fromid: localStorage.getItem('users_id'),
          toid: this.$route.params.bei_users_id
        })
        .then((result) => {
          console.log(result);
          this.msg_list = result.data;
        })
        .catch((error) => {
          console.log(error);
        });

        this.$message.success('留言消息发送成功！');
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 点击表情列表
    getEmo(index) {
      console.log(this.faceList[index]);
      this.send_message_content = this.send_message_content + this.faceList[index];
    },
    // 图片左移
    img_left_move() {
      console.log('图片左移');
    },
    // 图片右移
    img_right_move() {
      console.log('图片右移');
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

  .other_user_main {
    margin-top: 26px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 56px 71px;
    display: flex;
    position: relative;
  }
  .other_user_main_left {
    flex: 1;
  }
  .other_user_main_right {
    flex: 3;
  }
  .ither_user_info_list ul {
    display: flex;
    flex-wrap: wrap;
  }
  .ither_user_info_list ul li {
    width: 40%;
    margin: 5px 0;
  }
  .other_user_introduce_myself {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    margin-top: 26px;
    padding: 24px 49px;
  }
  .other_user_introduce_myself p {
    text-indent: 2em;
    color: #989898;
  }
  .other_user_unedited_biographies {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    margin-top: 26px;
    padding: 18px 55px;
  }
  .other_user_ideal_type {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    margin-top: 26px;
    padding: 30px 47px;
  }
  .other_user_ideal_type ul {
    display: flex;
    flex-wrap: wrap;
  }
  .other_user_ideal_type ul li {
    width: 20%;
    line-height: 40px;
  }
  .other_user_ideal_type ul li span {
    color: #989898;
  }
  .other_user_life_style {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    margin-top: 26px;
    padding: 21px 47px;
  }
  .other_user_life_style ul,
  .other_user_marriage_concept ul,
  .other_user_economic_power ul,
  .other_user_body_image ul,
  .other_user_hobbies_interests ul {
    display: flex;
    flex-wrap: wrap;
  }
  .other_user_life_style ul li,
  .other_user_economic_power ul li {
    width: 25%;
    line-height: 40px;
  }
  .other_user_marriage_concept ul li {
    width: 30%;
    line-height: 40px;
  }
  .other_user_body_image ul li,
  .other_user_hobbies_interests ul li {
    width: 20%;
    line-height: 40px;
  }
  .other_user_life_style ul li span,
  .other_user_marriage_concept ul li span,
  .other_user_economic_power ul li span,
  .other_user_body_image ul li span,
  .other_user_hobbies_interests ul li span {
    color: #989898;
  }
  .other_user_marriage_concept {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    margin-top: 26px;
    padding: 31px 47px;
  }
  .other_user_economic_power {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    margin-top: 26px;
    padding: 26px 47px;
  }
  .other_user_body_image {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    margin-top: 26px;
    padding: 19px 47px;
  }
  .other_user_hobbies_interests {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    margin-top: 26px;
    padding: 19px 47px;
  }
  .other_user_main_left_big_img {
    text-align: center;
    margin-bottom: 6px;
  }
  .other_user_main_left_big_img img {
    width: 222px;
    height: 235px;
    border-radius: 10px;
  }
  .other_user_main_left_small_img {
    position: relative;
  }
  .other_user_main_left_small_img ul {
    display: flex;
    width: 222px;
    overflow: hidden;
    margin: 0 auto;
  }
  /* .other_user_main_left_small_img::before,
  .other_user_main_left_small_img::after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid gray;
    height: 100%;
    line-height: 72px;
  }
  .other_user_main_left_small_img::before {
    content: '<';
    left: 5px;
  }
  .other_user_main_left_small_img::after {
    content: '>';
    right: 5px;
  } */
  .img_left_move,
  .img_right_move {
    position: absolute;
    border: 2px solid #a9a9a9;
    top: 50%;
    transform: translateY(-50%);
    line-height: 66px;
    color: #a9a9a9;
    font-weight: bold;
  }
  .img_left_move {
    left: 0;
    border-radius: 4px 0 0 4px;
  }
  .img_right_move {
    right: 0;
    border-radius: 0 4px 4px 0;
  }
  .other_user_main_left_small_img ul li img {
    width: 74px;
    height: 74px;
    padding: 3px;
    box-sizing: border-box;
  }
  .nickname_info,
  .user_info,
  .user_age_sex_marrage,
  .ither_user_info_list {
    margin-left: 60px;
  }
  .nickname_info h4 {
    font-size: 18px;
  }
  .nickname_info h4 img {
    vertical-align: bottom;
    margin: 0 2px 0 5px;
  }
  .nickname_info h4 span {
    color: rgba(250,176,5,1);
    font-size: 12px;
    vertical-align: bottom;
  }
  .user_info img {
    margin: 0 6px;
    vertical-align: bottom;
  }
  .user_age_sex_marrage {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .user_age_sex_marrage span {
    margin-right: 20px;
  }
  .greet_msg_like {
    position: absolute;
    right: 71px;
    top: 56px;
  }
  .hobbies_personality_label {
    display: flex;
    justify-content: space-around;
  }
  .hobbies_personality_label .el-tag {
    margin-right: 15px;
    margin-bottom: 15px;
  }
  .hobbies_personality_label_left,
  .hobbies_personality_label_right {
    display: flex;
    flex: 1;
    justify-content: center;
    color: #989898;
  }
  .dialog_send_message_left {
    padding-right: 12px;
  }
  .dialog_send_message_left h4 {
    text-align: center;
    font-size: 18px;
    margin: 15px auto;
  }
  .dialog_send_message_left h4 img {
    vertical-align: bottom;
    margin: 0 2px 0 5px;
  }
  .dialog_send_message_left h4 span {
    color: rgba(250,176,5,1);
    font-size: 12px;
    vertical-align: bottom;
  }
  .img_status_list {
    text-align: center;
  }
  .img_status_list img {
    margin: 0 6px;
    vertical-align: bottom;
  }
  .user_list_info {
    display: flex;
    justify-content: space-around;
    color: #989898;
    margin: 12px auto;
  }
  h4.common_tag_title {
    color: #E64980;
    font-size: 14px;
  }
  .show_message_list ul {
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px #ddd;
    height: 340px;
    padding: 10px;
    overflow: auto;
  }
  .show_message_list ul::-webkit-scrollbar {
    width: 8px;
    background-color: #ddd;
    border-radius: 8px;
  }
  .show_message_list ul::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 8px;
  }
  .show_message_list ul li {
    line-height: 32px;
  }
  .send_msg_btn {
    text-align: right;
  }
  .send_msg_btn img {
    margin: 0 10px;
  }
  .msg_right {
    text-align: right;
  }
  .msg_fromname {
    font-weight: bold;
  }
  .msg_content {
    text-align: left;
    display: inline-block;
    max-width: 70%;
  }
  .msg_fromname {
    text-align: right;
    display: inline-block;
    max-width: 30%;
    vertical-align: top;
  }
  .common_tag {
    position: relative;
    height: 140px;
  }
  .common_tag li:nth-child(1) {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: linear-gradient(354deg,#ff2a86 5%, #ffef9e 95%);
    box-shadow: 4px 6px 16px 0px #ff9a94;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    left: 20px;
    top: 0;
  }
  .common_tag li:nth-child(2) {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: linear-gradient(170deg,#ffefca 5%, #ff9e2e 93%, #ccff00 93%);
    box-shadow: 4px 6px 16px 0px #ffcb84;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    right: 20px;
    top: 40px;
  }
  .common_tag li:nth-child(3) {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: linear-gradient(345deg,#da5aff 9%, #bae6ff 88%);
    box-shadow: 4px 6px 16px 0px #cb9cff;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    right: 60px;
    top: 70px;
  }
</style>