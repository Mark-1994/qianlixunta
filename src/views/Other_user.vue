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
              <div class="other_user_main_left_small_img">
                <ul>
                  <li><img src="../assets/touxiang_small01.png" alt=""></li>
                  <li><img src="../assets/touxiang_small02.png" alt=""></li>
                  <li><img src="../assets/touxiang_small03.png" alt=""></li>
                  <li><img src="../assets/touxiang_small01.png" alt=""></li>
                  <li><img src="../assets/touxiang_small02.png" alt=""></li>
                  <li><img src="../assets/touxiang_small03.png" alt=""></li>
                </ul>
              </div>
            </div>
            <div class="other_user_main_right">
              <div class="nickname_info">
                <h4>{{select_users_info.nickname}}<img src="../assets/zuanshi03.png" alt="" /><span>v3</span></h4>
              </div>
              <div class="user_info">
                <img src="../assets/shouji01.png" alt="">
                <img src="../assets/shimingrenzheng01.png" alt="">
                <img src="../assets/shimingrenzheng03.png" alt="">
              </div>
              <div class="user_age_sex_marrage">
                <span>{{select_users_info.users_year - new Date().getFullYear()}}岁</span>
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
              <el-button type="primary">打招呼</el-button>
              <el-button type="info">发消息</el-button>
              <el-button type="danger">喜欢</el-button>
            </div>
          </div>
          <!-- 自我介绍 -->
          <div class="other_user_introduce_myself">
            <h4><img src="../assets/ziwojieshao01.png" alt="" />自我介绍</h4>
            <p>我是一个多变的女孩，动如脱兔，静如处子，可谓动静皆宜。生活中的我，不仅喜欢旅游、聚会，也喜欢独自读《红楼梦》、看韩剧美剧，当然家务能力也是不错的。期待自己的另一半是一个可以理解自己，有生活情趣和共同语言的男士，我是世纪佳缘手机版用户，我在这里等着你哦！</p>
          </div>
          <!-- 人物速写DNA -->
          <div class="other_user_unedited_biographies">
            <h4><img src="../assets/dna01.png" alt="" />人物速写DNA</h4>
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
            <h4><img src="../assets/tadelixiangxing01.png" alt="" />TA的理想型</h4>
            <ul>
              <li><span>年龄：</span>20-30岁之间</li>
              <li><span>民族：</span>不限</li>
              <li><span>身高：</span>不限</li>
              <li><span>居住地：</span>湖北武汉</li>
              <li><span>学历：</span>不限</li>
              <li><span>婚姻状况：</span>不限</li>
            </ul>
          </div>
          <!-- 生活方式 -->
          <div class="other_user_life_style">
            <h4><img src="../assets/shenghuofangshi01.png" alt="" />生活方式</h4>
            <ul>
              <li><span>吸烟：</span>不抽烟也讨厌他人抽烟</li>
              <li><span>饮酒：</span>不喝酒</li>
              <li><span>饮食习惯：</span>湖北武汉</li>
              <li><span>宗教信仰：</span>无</li>
              <li><span>作息时间：</span>偶尔懒散一下</li>
              <li><span>交际圈子：</span>经常和朋友见面</li>
              <li><span>锻炼习惯：</span>不限</li>
              <li><span>逛街购物：</span>偶尔逛街</li>
              <li><span>最大消费：</span>购置服装</li>
              <li><span>家务：</span>会一些</li>
              <li><span>宠物：</span>不喜欢</li>
            </ul>
          </div>
          <!-- 婚姻观念 -->
          <div class="other_user_marriage_concept">
            <h4><img src="../assets/hunyinguannian01.png" alt="" />婚姻观念</h4>
          </div>
          <!-- 经济实力 -->
          <div class="other_user_economic_power">
            <h4><img src="../assets/jingjishili01.png" alt="" />经济实力</h4>
          </div>
          <!-- 体型外貌 -->
          <div class="other_user_body_image">
            <h4><img src="../assets/tixingwaimao01.png" alt="" />体型外貌</h4>
          </div>
          <!-- 兴趣爱好 -->
          <div class="other_user_hobbies_interests">
            <h4><img src="../assets/xingquaihao01.png" alt="" />兴趣爱好</h4>
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
      // 个人信息数据
      come_news: {
        head_portrait: '/upload/admin/article/thumbnail/20200807/nv.png'
      },
      // 当前用户信息
      select_users_info: {
        head_portrait: '/upload/admin/article/thumbnail/20200807/nv.png'
      }
    }
  },
  created: function() {
    this.$emit('header', true);

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
    
  },
  methods: {
    
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
  .other_user_life_style ul {
    display: flex;
    flex-wrap: wrap;
  }
  .other_user_life_style ul li {
    width: 20%;
    line-height: 40px;
  }
  .other_user_life_style ul li span {
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
  }
  .other_user_main_left_big_img img {
    width: 222px;
    height: 235px;
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
  .other_user_main_left_small_img::before,
  .other_user_main_left_small_img::after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid gray;
    height: 100%;
  }
  .other_user_main_left_small_img::before {
    content: '<';
    left: 5px;
  }
  .other_user_main_left_small_img::after {
    content: '>';
    right: 5px;
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
  
</style>