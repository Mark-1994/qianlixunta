<template>
  <div class="login_container login_container01">
    <el-container>

      <el-main>
        <div class="main_center_module">
          <div class="home_banner">
            <div class="home_banner_signup_form">
              <h3>一分钟注册</h3>
              <el-form ref="minute_form" :model="minute_form" label-width="82px">
                <el-form-item label="性别">
                  <el-radio-group v-model="minute_form.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="生日">
                  <el-select v-model="birthday_year" placeholder="请选择" class="register_form_birthday">
                    <el-option label="1991" value="1991"></el-option>
                    <el-option label="1992" value="1992"></el-option>
                    <el-option label="1993" value="1992"></el-option>
                    <el-option label="1994" value="1992"></el-option>
                  </el-select>
                  年
                  <el-select v-model="birthday_month" placeholder="请选择" class="register_form_birthday">
                    <el-option label="01" value="01"></el-option>
                    <el-option label="02" value="02"></el-option>
                    <el-option label="03" value="03"></el-option>
                    <el-option label="04" value="04"></el-option>
                    <el-option label="05" value="05"></el-option>
                    <el-option label="06" value="06"></el-option>
                    <el-option label="07" value="07"></el-option>
                    <el-option label="08" value="08"></el-option>
                    <el-option label="09" value="09"></el-option>
                    <el-option label="10" value="10"></el-option>
                    <el-option label="11" value="11"></el-option>
                    <el-option label="12" value="12"></el-option>
                  </el-select>
                  月
                  <el-select v-model="birthday_day" placeholder="请选择" class="register_form_birthday">
                    <el-option v-for="item in afterage_options" :key="item.id" :label="item.label" :value="item.value"></el-option>
                  </el-select>
                  日
                </el-form-item>
                <el-form-item label="现居住地">
                  <el-cascader
                    :options="cityList"
                    :props="{ checkStrictly: true }"
                    v-model="minute_form.address"
                    clearable></el-cascader>
                </el-form-item>
                <el-form-item label="手机号">
                  <el-input v-model="minute_form.phone" class="phone_number" style="width: 190px;margin-right: 10px;"></el-input>
                  <el-button type="primary" @click="sendcode" v-if="message_btn">短信验证</el-button>
                  <el-button type="info" v-if="message_btn_count_down" disabled>{{message_count_down_time}} s后重新获取</el-button>
                </el-form-item>
                <el-form-item label="短信验证码">
                  <el-input v-model="minute_form.code" style="width: 100px;"></el-input>
                </el-form-item>
                <el-form-item class="free_register_form_post">
                  <el-button type="primary" @click="free_register">免费注册</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="main_center_bottom_two">
            <el-row>
              <el-col :span="17">
                <div class="grid-content bg-purple main_center_bottom_left">
                  <!-- 推荐会员start -->
                  <div class="tuijianhuiyuan">
                    <div class="tuijianhuiyuan_title">
                      <h3>推荐会员</h3>
                      <a href="javascript:;">换一批</a>
                    </div>
                    <el-form ref="search_form" :model="search_form" class="search_form">
                      <el-form-item label="">
                        <el-radio-group v-model="search_form.year_type">
                          <el-radio label="同城"></el-radio>
                          <el-radio label="90后"></el-radio>
                          <el-radio label="80后"></el-radio>
                        </el-radio-group>
                      </el-form-item>
                      <el-row class="flex_oneline">
                        <el-form-item label="年龄">
                          <el-select v-model="search_form.year" placeholder="请选择">
                            <el-option label="20-30岁" value="20"></el-option>
                            <el-option label="30-40岁" value="30"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="性别">
                          <el-select v-model="search_form.sex" placeholder="请选择">
                            <el-option label="男" value="男"></el-option>
                            <el-option label="女" value="女"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="城市">
                          <el-select v-model="search_form.city" placeholder="请选择">
                            <el-option label="武汉" value="武汉"></el-option>
                            <el-option label="上海" value="上海"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary" @click="search_onSubmit">搜索<i class="el-icon-search el-icon--right"></i></el-button>
                        </el-form-item>
                      </el-row>
                    </el-form>
                    <el-row :gutter="20" class="top_bottom_margin_25">
                      <el-col :span="8">
                        <div class="grid-content bg-purple">
                          <img src="../assets/user_img01.png" alt="">
                          <div class="user_info">
                            <h3>罗永浩</h3>
                            <div class="user_privacy_info">
                              <span>18岁</span>
                              <span>177cm</span>
                              <span>本科</span>
                              <span>月薪5000K</span>
                            </div>
                            <p>我是一个多变的女孩，动如脱兔，静如处子，可谓动静皆宜...</p>
                            <el-row>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/dazhaohu01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/youxiang01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/aixin01.png" alt="">
                                </el-link>
                              </el-col>
                            </el-row>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="grid-content bg-purple">
                          <img src="../assets/user_img01.png" alt="">
                          <div class="user_info">
                            <h3>罗永浩</h3>
                            <div class="user_privacy_info">
                              <span>18岁</span>
                              <span>177cm</span>
                              <span>本科</span>
                              <span>月薪5000K</span>
                            </div>
                            <p>我是一个多变的女孩，动如脱兔，静如处子，可谓动静皆宜...</p>
                            <el-row>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/dazhaohu01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/youxiang01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/aixin01.png" alt="">
                                </el-link>
                              </el-col>
                            </el-row>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="grid-content bg-purple">
                          <img src="../assets/user_img01.png" alt="">
                          <div class="user_info">
                            <h3>罗永浩</h3>
                            <div class="user_privacy_info">
                              <span>18岁</span>
                              <span>177cm</span>
                              <span>本科</span>
                              <span>月薪5000K</span>
                            </div>
                            <p>我是一个多变的女孩，动如脱兔，静如处子，可谓动静皆宜...</p>
                            <el-row>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/dazhaohu01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/youxiang01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/aixin01.png" alt="">
                                </el-link>
                              </el-col>
                            </el-row>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                    <el-row :gutter="20" class="top_bottom_margin_24">
                      <el-col :span="8">
                        <div class="grid-content bg-purple">
                          <img src="../assets/user_img01.png" alt="">
                          <div class="user_info">
                            <h3>罗永浩</h3>
                            <div class="user_privacy_info">
                              <span>18岁</span>
                              <span>177cm</span>
                              <span>本科</span>
                              <span>月薪5000K</span>
                            </div>
                            <p>我是一个多变的女孩，动如脱兔，静如处子，可谓动静皆宜...</p>
                            <el-row>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/dazhaohu01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/youxiang01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/aixin01.png" alt="">
                                </el-link>
                              </el-col>
                            </el-row>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="grid-content bg-purple">
                          <img src="../assets/user_img01.png" alt="">
                          <div class="user_info">
                            <h3>罗永浩</h3>
                            <div class="user_privacy_info">
                              <span>18岁</span>
                              <span>177cm</span>
                              <span>本科</span>
                              <span>月薪5000K</span>
                            </div>
                            <p>我是一个多变的女孩，动如脱兔，静如处子，可谓动静皆宜...</p>
                            <el-row>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/dazhaohu01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/youxiang01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/aixin01.png" alt="">
                                </el-link>
                              </el-col>
                            </el-row>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="grid-content bg-purple">
                          <img src="../assets/user_img01.png" alt="">
                          <div class="user_info">
                            <h3>罗永浩</h3>
                            <div class="user_privacy_info">
                              <span>18岁</span>
                              <span>177cm</span>
                              <span>本科</span>
                              <span>月薪5000K</span>
                            </div>
                            <p>我是一个多变的女孩，动如脱兔，静如处子，可谓动静皆宜...</p>
                            <el-row>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/dazhaohu01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/youxiang01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link :underline="false">
                                  <img src="../assets/aixin01.png" alt="">
                                </el-link>
                              </el-col>
                            </el-row>
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <!-- 推荐会员end -->
                  <!-- 约吧走起start -->
                  <div class="yuebazouqi">
                    <h3>约吧走起</h3>
                    <div class="yuebazouqi_content">
                      <div class="yuebazouqi_content_title">
                        <h4>七月之约</h4>
                        <a href="javascript:;">查看更多活动&gt;</a>
                      </div>
                      <div class="yuebazouqi_content_main">
                        <div class="event_left">
                          <img src="../assets/huodong01.png" alt="">
                          <p>
                            <section>
                              <span class="active_adress">武汉</span>
                              <span class="active_time">活动时间：7月-9月</span>
                            </section>
                            <span class="active_join">已报名：<i>68</i></span>
                          </p>
                        </div>
                        <div class="event_right">
                          <img src="../assets/huodong02.png" alt="" class="active_banner_img02">
                          <img src="../assets/huodong03.png" alt="" class="active_banner_img03">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 约吧走起end -->
                  <!-- 情感交流start -->
                  <div class="qingganjiaoliu">
                    <h3>情感交流</h3>
                    <div class="qingganjiaoliu_content">
                      <div class="qingganjiaoliu_title_list">
                        <ul>
                          <li v-for="item in affective_interaction" :key="item.id"><a href="javascript:;">{{item.cate_name}}</a></li>
                        </ul>
                        <a href="javascript:;">查看更多&gt;</a>
                      </div>
                      <div class="qingganjiaoliu_news_list">
                        <el-row>
                          <el-col :span="8">
                            <div class="qingganjiaoliu_news_item">
                              <div class="qingganjiaoliu_news_item_img">
                                <img src="../assets/news_eg01.png" alt="">
                                <p>男女之间的交流技巧</p>
                              </div>
                              <ul>
                                <li v-for="item in article_list_one" :key="item.id">
                                  <a :href="'/#/article_article?id='+item.id">{{item.title}}</a>
                                </li>
                              </ul>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div class="qingganjiaoliu_news_item">
                              <div class="qingganjiaoliu_news_item_img">
                                <img src="../assets/news_eg01.png" alt="">
                                <p>男女之间的交流技巧</p>
                              </div>
                              <ul>
                                <li v-for="item in article_list_two" :key="item.id">
                                  <a :href="'/#/article_article?id='+item.id">{{item.title}}</a>
                                </li>
                              </ul>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div class="qingganjiaoliu_news_item">
                              <div class="qingganjiaoliu_news_item_img">
                                <img src="../assets/news_eg01.png" alt="">
                                <p>男女之间的交流技巧</p>
                              </div>
                              <ul>
                                <li v-for="item in article_list_three" :key="item.id">
                                  <a :href="'/#/article_article?id='+item.id">{{item.title}}</a>
                                </li>
                              </ul>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </div>
                  <!-- 情感交流end -->
                </div>
              </el-col>
              <el-col :span="7">
                <div class="grid-content bg-purple-light main_center_bottom_right">
                  <div class="xuntazhuanxian">
                    <h4>寻TA专线</h4>
                    <div class="one_line_double"></div>
                    <div class="one_line"></div>
                    <ul>
                      <li>
                        <img src="../assets/xunzhao01.png" alt="">
                        <span>寻找TA</span>
                      </li>
                      <li>
                        <img src="../assets/yuehui01.png" alt="">
                        <span>约吧</span>
                      </li>
                      <li>
                        <img src="../assets/yiduiyi02.png" alt="">
                        <span>红娘一对一</span>
                      </li>
                    </ul>
                    <router-link to="/join_member">
                      加入会员
                    </router-link>
                    <p>一年只交168元更快找到TA，无任何额外费用</p>
                  </div>
                  <div class="zuijiapipei">
                    <h4>最佳匹配</h4>
                    <div class="zuijiapipei_info">
                      <img src="../assets/user_img01.png" alt="">
                      <div>
                        <h4>JJ Lin</h4>
                        <p>容貌一般，不吓人，性格温和，bai脾气好，人品善良，真诚，du正直，吸烟，滴酒不沾...</p>
                        <el-row>
                          <el-tag size="mini">90后</el-tag>
                          <el-tag size="mini" type="success">开朗</el-tag>
                          <el-tag size="mini" type="info">外企</el-tag>
                        </el-row>
                      </div>
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
      // 情感交流
      affective_interaction: [],
      cityList: [{
        value: '湖北省',
        label: '湖北省',
        children: [
          {
            value: '武汉市',
            label: '武汉市',
            children: [
              {
                value: '武昌区',
                label: '武昌区'
              }
            ]
          }
        ]
      }],
      birthday_year: '',
      birthday_month: '',
      birthday_day: '',
      minute_form: {
        sex: '',
        birthday: '',
        address: [],
        phone: '',
        code: ''
      },
      afterage_options: [
        { id: 1, label: '01', value: '01' },
        { id: 2, label: '02', value: '02' },
        // { id: 3, label: 3, value: '03' },
        // { id: 4, label: 4, value: '04' },
        // { id: 5, label: 5, value: '05' },
        // { id: 6, label: 6, value: '06' },
        // { id: 7, label: 7, value: '07' },
        // { id: 8, label: 8, value: '08' },
        // { id: 9, label: 9, value: '09' },
        // { id: 10, label: 10, value: '10' },
        // { id: 11, label: 11, value: '11' },
        // { id: 12, label: 12, value: '12' }
      ],
      search_form: {},
      // 情感交流列表1
      article_list_one: [],
      // 情感交流列表2
      article_list_two: [],
      // 情感交流列表3
      article_list_three: [],
      // 发送验证码按钮的显示隐藏
      message_btn: true,
      // 发送验证码按钮倒计时的显示隐藏
      message_btn_count_down: false,
      // 短信倒计时秒数
      message_count_down_time: 0
    }
  },
  created: function() {
    this.$axios.get('/wpapi/article/category', {})
    .then((response) => {
      this.affective_interaction = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

    // 情感交流第一列数据
    this.$axios.get('/wpapi/article/category_list', {id:1})
    .then((result) => {
      console.log(result);
      this.article_list_one = result.data;
    })
    .catch((error) => {
      console.log(error);
    });
    
    // 情感交流第二列数据
    this.$axios.get('/wpapi/article/category_list', {id:2})
    .then((result) => {
      this.article_list_two = result.data;
    })
    .catch((error) => {
      console.log(error);
    });

    // 情感交流第三列数据
    this.$axios.get('/wpapi/article/category_list', {id:3})
    .then((result) => {
      this.article_list_three = result.data;
    })
    .catch((error) => {
      console.log(error);
    });
  },
  methods: {
    free_register() {
      var address01 = '';
      this.minute_form.birthday = this.birthday_year + '.' + this.birthday_month + '.' + this.birthday_day
      for (let i = 0; i < this.minute_form.address.length; i++) {
        address01 += this.minute_form.address[i];
      }
      this.minute_form.address = address01;
      this.$axios.post('/wpapi/register/minute_form', this.minute_form)
      .then((result) => {
        console.log(result);
        if (result.status !== '200') return this.$message.error(result.msg);
        this.$message.success(result.msg);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    search_onSubmit() {
      this.$message('搜索');
    },
    // 手机验证发送验证码
    sendcode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (!this.minute_form.phone) return this.$message.error('手机号不能为空');
      if (!reg.test(this.minute_form.phone)) {
        this.$message.error('请输入正确的手机号');
      } else {
        this.$axios.post('/wpapi/register/send_sms', {phone: this.minute_form.phone})
        .then((result) => {
          if (result.status !== '200') return this.$message.error(result.msg);
          this.$message.success('发送成功');
          this.message_btn = false;
          this.message_btn_count_down = true;
          this.message_count_down_time = 60;
          this.timer();
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
    // 60s倒计时
    timer() {
      if (this.message_count_down_time > 0) {
        this.message_count_down_time--;
        setTimeout(this.timer, 1000);
      } else {
        this.message_count_down_time = 0;
        this.message_btn = true;
        this.message_btn_count_down = false;
      }
    }
  }
}
</script>

<style scoped>
  .main_center_module {
    width: 1180px;
    margin: 0 auto;
  }
  .home_banner {
    background: url(../assets/home_banner01.png);
    background-size: 100% 100%;
    width: 100%;
    height: 467px;
    position: relative;
  }
  .home_banner_signup_form {
    background-color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 50px;
    border-radius: 20px;
    padding: 0 25px 20px;
  }
  .home_banner_signup_form h3 {
    margin: 0;
    text-align: center;
    font-size: 26px;
    margin: 20px auto;
  }
  .register_form_birthday {
    width: 90px;
  }
  .phone_number {
    width: 250px;
  }
  .free_register_form_post button {
    width: 295px;
    height: 53px;
    font-size: 30px;
    background-color: rgba(238, 61, 61, 1);
    border-radius: 5px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, .16);
    border: 0;
  }
  .el-form-item {
    margin-bottom: 12px;
  }
  .tuijianhuiyuan_title {
    display: flex;
    align-items: center;
    margin: 32px 0;
  }
  .tuijianhuiyuan_title h3 {
    font-size: 33px;
    font-weight: 700;
    text-shadow: 0px 3px 6px 0px rgba(42, 42, 42, .3);
    margin: 0;
  }
  .tuijianhuiyuan_title a {
    color: #fff;
    background-color: rgba(240, 62, 62, 1);
    border-radius: 20px;
    box-shadow: 3px 9px 16px 0px rgba(255, 51, 51, .39);
    padding: 8px 24px;
    margin-left: 30px;
  }
  .tuijianhuiyuan_title a::after {
    content: '';
    display: inline-block;
    width: 22px;
    height: 22px;
    margin-left: 17px;
    background: url(../assets/zhuanhuan01.png) 0 0 / cover;
    vertical-align: middle;
  }
  .search_form {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 1px 2px 2px 0px rgba(0,0,0,0.16);
    padding: 19px 53px 37px;
  }
  .flex_oneline {
    display: flex;
  }
  .flex_oneline .el-form-item {
    display: inline-flex;
    margin-right: 43px;
  }
  .flex_oneline .el-form-item .el-select {
    width: 100px;
  }
  .tuijianhuiyuan .el-row .el-col {
    /* background-color: #fff; */
  }
  .tuijianhuiyuan .el-row .el-col .grid-content {
    display: flex;
    background-color: #fff;
    margin: 0 7px;
  }
  .tuijianhuiyuan .el-row .el-col .grid-content>img {
    width: 121px;
  }
  .tuijianhuiyuan .el-row .el-col .grid-content .user_info h3,
  .tuijianhuiyuan .el-row .el-col .grid-content .user_info p {
    margin: 0;
  }
  .tuijianhuiyuan .el-row .el-col .grid-content .user_info .el-row {
    display: flex;
  }
  .tuijianhuiyuan .el-row .el-col .grid-content .user_info .el-row .el-col {
    text-align: center;
  }
  .top_bottom_margin_25.el-row {
    margin: 25px 0 !important;
  }
  .top_bottom_margin_25.el-row .el-col {
    padding: 0 !important;
  }
  .top_bottom_margin_24.el-row {
    margin: 0 !important;
  }
  .top_bottom_margin_24.el-row .el-col {
    padding: 0 !important;
  }
  .tuijianhuiyuan .el-row .el-col:nth-child(2) {
    /* margin: 0 24px; */
  }
  .tuijianhuiyuan .el-row .el-col .grid-content .user_info p {
    font-size: 10px;
    color: rgba(152, 152, 152, 1);
    margin-bottom: 8px;
  }
  .tuijianhuiyuan .el-row .el-col .grid-content .user_info h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }
  .user_privacy_info {
    font-size: 14px;
    margin-bottom: 8px;
  }
  .user_privacy_info span {
    margin-right: 10px;
    font-weight: 400;
  }
  .user_info {
    padding: 18px 13px 13px;
    box-shadow: 1px 2px 2px 0px rgba(0,0,0,0.16);
  }
  .yuebazouqi_content {
    background-color: #fff;
  }
  .yuebazouqi h3 {
    font-size: 33px;
    color: rgba(0, 30, 82, 1);
    font-weight: 700;
    text-shadow: 0px 3px 6px rgba(42,42,42,0.3);
    margin: 47px 0 22px;
  }
  .yuebazouqi_content {
    border-radius: 30px;
    padding: 26px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
  }
  .yuebazouqi_content .yuebazouqi_content_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9px;
  }
  .yuebazouqi_content .yuebazouqi_content_title h4 {
    margin: 0;
    font-size: 24px;
  }
  .yuebazouqi_content .yuebazouqi_content_title a {
    color: #000;
    font-size: 16px;
  }
  .yuebazouqi_content_main {
    display: flex;
    justify-content: space-between;
  }
  .yuebazouqi_content_main img {
    width: 100%;
    border-radius: 6px;
  }
  .yuebazouqi_content_main .event_left {
    flex: 2;
    position: relative;
    height: 100%;
    margin-right: 10px;
  }
  .yuebazouqi_content_main .event_right {
    flex: 1;
  }
  .active_banner_img02 {
    margin-bottom: 6px;
  }
  .yuebazouqi_content_main .event_left p {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0px 0px 6px 6px;
    /* filter: blur(30px); */
    background-color: rgba(255,255,255,.5);
    color: #000;
    width: 100%;
    margin: 0;
    line-height: 49px;
    padding: 0 13px 0 23px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .qingganjiaoliu_content {
    background-color: #fff;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    border-radius: 20px;
    padding: 25px 43px 44px;
  }
  .qingganjiaoliu h3 {
    margin: 47px 0 22px;
    font-size: 33px;
    font-weight: 700;
    text-shadow: 0px 3px 6px rgba(42,42,42,0.3);
  }
  .qingganjiaoliu_title_list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .qingganjiaoliu_title_list a {
    color: #000
  }
  .qingganjiaoliu_title_list>a {
    font-size: 16px;
  }
  .qingganjiaoliu_title_list ul {
    display: flex;
    font-size: 18px;
  }
  .qingganjiaoliu_title_list ul li {
    margin-right: 39px;
  }
  .qingganjiaoliu_news_list {
    display: flex;
  }
  .qingganjiaoliu_news_list img {
    width: 100%;
    border-radius: 10px;
  }
  .qingganjiaoliu_news_list .qingganjiaoliu_news_item:nth-child(2) {
    margin: 0 15px;
  }
  .qingganjiaoliu_news_item {
    margin: 0 7px;
  }
  .qingganjiaoliu {
    margin-bottom: 48px;
  }
  .qingganjiaoliu_news_item_img {
    position: relative;
  }
  .qingganjiaoliu_news_item_img p {
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.45);
    border-radius: 0px 0px 10px 10px;
    line-height: 36px;
    text-align: center;
    margin: 0;
    width: 100%;
    color: #fff;
    font-size: 16px;
  }
  .qingganjiaoliu_news_item ul {
    font-size: 18px;
    list-style: disc;
    padding-left: 20px;
    line-height: 34px;
    margin-top: 9px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .qingganjiaoliu_news_item ul li a {
    color: #000;
  }
  .main_center_bottom_right {
    padding-top: 108px;
  }
  .xuntazhuanxian,
  .zuijiapipei {
    background-color: #fff;
    margin-left: 47px;
  }
  .xuntazhuanxian h4 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    text-shadow: 0px 3px 6px rgba(0,0,0,0.29);
    text-align: center;
  }
  .xuntazhuanxian {
    padding: 15px 0 25px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
  }
  .xuntazhuanxian ul li img {
    width: 70px;
    height: 65px;
  }
  .xuntazhuanxian ul li span {
    display: inline-block;
  }
  .one_line_double {
    width: 100%;
    height: 9px;
    background: linear-gradient(135deg,#ff2a86, #917fff 35%, #927ffe 71%, #9effff);
    margin-top: 15px;
  }
  .one_line {
    width: 100%;
    height: 3px;
    margin-top: 4px;
    margin-bottom: 15px;
    background: linear-gradient(135deg,#ff2a86, #917fff 35%, #927ffe 71%, #9effff);
  }
  .xuntazhuanxian ul {
    display: flex;
    justify-content: space-around;
  }
  .xuntazhuanxian ul li {
    text-align: center;
  }
  .xuntazhuanxian>a {
    background: linear-gradient(125deg,#ff2a86 9%, #917fff 51%, #9effff 91%);
    border-radius: 24px;
    box-shadow: 8px 9px 18px 0px rgba(0,247,255,0.16);
    line-height: 60px;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    padding: 0 30px;
    margin: 49px auto 25px;
    display: inline-block;
  }
  .xuntazhuanxian>p {
    padding: 0 35px;
    margin: 0;
    color: #000;
    font-size: 16px;
    text-shadow: 0px 3px 6px rgba(0,0,0,0.29);
  }
  .zuijiapipei {
    padding: 18px 10px 18px 24px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    border-radius: 20px;
    margin-top: 24px;
  }
  .zuijiapipei h4 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    text-shadow: 0px 3px 6px rgba(0,0,0,0.29);
  }
  .zuijiapipei_info {
    display: flex;
    margin-top: 17px;
  }
  .zuijiapipei_info img {
    width: 110px;
    height: 180px;
    margin-right: 15px;
  }
  .zuijiapipei_info h4 {
    text-align: left;
    text-shadow: unset;
    font-weight: normal;
    font-size: 24px;
    margin: 10px 0 10px;
  }
  .zuijiapipei_info p {
    margin: 0;
    font-size: 12px;
    margin-bottom: 9px;
  }
  .zuijiapipei_info .el-row span {
    margin: 3px;
  }
  .active_adress {
    background-color: rgba(240, 62, 62, 1);
    color: #fff;
    border-radius: 14px;
    padding: 3px 17px;
  }
  .active_join i {
    font-style: unset;
    font-weight: bold;
  }
  .active_time {
    margin-left: 19px;
  }
</style>