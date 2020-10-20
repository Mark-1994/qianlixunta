<template>
  <div class="login_container login_container01">
    <el-container>

      <el-main>

        <template>
          <div class="block">
            <el-carousel trigger="click" height="500px">
              <el-carousel-item v-for="item in banner_img" :key="item.id">
                <el-image :src="item.src"
                fit="fill" style="width: 100%;height: 100%;"></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
        </template>

        <div class="main_center_module">
          <!-- <div class="home_banner">
            <div class="home_banner_signup_form">
              <h3>一分钟注册</h3>
              <el-form ref="minute_form" :model="minute_form" label-width="82px"
              :rules="minuteRules">
                <el-form-item label="性别" prop="sex">
                  <el-radio-group v-model="minute_form.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="生日" prop="birthday">
                  <el-date-picker
                    v-model="minute_form.birthday"
                    type="date"
                    placeholder="选择日期" :picker-options="pickerOptions">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="现居住地" prop="address">
                  <el-cascader
                    :options="cityList"
                    :props="{ checkStrictly: true }"
                    v-model="minute_form.address"
                    clearable></el-cascader>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                  <el-input v-model="minute_form.phone" class="phone_number" style="width: 190px;margin-right: 10px;"></el-input>
                  <el-button type="primary" @click="sendcode" v-if="message_btn">短信验证</el-button>
                  <el-button type="info" v-if="message_btn_count_down" disabled>{{message_count_down_time}} s后重新获取</el-button>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                  <el-input v-model="minute_form.code" style="width: 100px;"></el-input>
                </el-form-item>
                <el-form-item class="free_register_form_post">
                  <el-button type="primary" @click="free_register('minute_form')">免费注册</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div> -->
          <div class="main_center_bottom_two">
            <el-row>
              <el-col :span="17">
                <div class="grid-content bg-purple main_center_bottom_left">
                  <!-- 推荐会员start -->
                  <div class="tuijianhuiyuan">
                    <div class="tuijianhuiyuan_title">
                      <h3>推荐会员</h3>
                      <a href="javascript:;" @click="btn_change_friend">换一批</a>
                    </div>
                    <!-- <el-form ref="search_form" :model="search_form" class="search_form">
                      <el-form-item label="">
                        <el-radio-group v-model="search_form.year_type">
                          <el-radio label="同城"></el-radio>
                          <el-radio label="90后"></el-radio>
                          <el-radio label="80后"></el-radio>
                        </el-radio-group>
                      </el-form-item>
                      <el-row class="flex_oneline">
                        <el-form-item label="年龄">
                          <el-select v-model="age" placeholder="请选择">
                            <el-option label="20-30" value="20-30"></el-option>
                            <el-option label="30-40" value="30-40"></el-option>
                            <el-option label="40-50" value="40-50"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="性别">
                          <el-select v-model="search_form.sex" placeholder="请选择">
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="0"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="城市">
                          <el-cascader
                            :options="cityList"
                            :props="{ multiple: false, checkStrictly: true }"
                            clearable style="width: 140px;" v-model="search_form.workplace"></el-cascader>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary" @click="search_onSubmit" style="background-color: #F03E3E;border: 1px solid #F03E3E;">搜索<i class="el-icon-search el-icon--right"></i></el-button>
                        </el-form-item>
                      </el-row>
                    </el-form> -->

                    <!-- <el-row :gutter="20" class="top_bottom_margin_25">
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
                    </el-row> -->

                    <ul class="default_recommend_member_list">
                      <li v-for="item in default_recommend_member_list" :key="item.id" style="border-radius: 10px;">
                        <div class="default_recommend_member_left">
                          <div class="default_recommend_member_left_big_img">
                            <router-link :to="'other_user/'+item.id">
                            <img :src="'http://admin.qianlixunta.com'+item.head_portrait" alt="" style="border-radius: 10px 0 0 0;" />
                            </router-link>
                          </div>
                          <div class="default_recommend_member_left_small_img">
                            <img v-for="(item01, index) in JSON.parse(item.life_imgs ? item.life_imgs : '[]')" :key="index" :src="'http://admin.qianlixunta.com'+item01" alt="" />
                          </div>
                        </div>
                        <div class="default_recommend_member_right" style="border-radius: 0 10px 10px 0;">
                          <router-link :to="'other_user/'+item.id">
                          <h4 style="color:#000;">{{item.nickname ? item.nickname : '无数据'}}</h4>
                          </router-link>
                          <div class="default_recommend_member_left_info">
                            <span>{{now_year-item.users_year == now_year ? '无数据' : now_year-item.users_year}}岁</span>
                            <span>{{item.height ? item.height : '无数据'}}cm</span>
                            <span>{{item.education ? item.education : '无数据'}}</span>
                            <span>月薪{{item.monthly_salary ? item.monthly_salary : '无数据'}}</span>
                          </div>
                          <p>{{item.introduce_oneself ? item.introduce_oneself : '无数据'}}</p>
                          <div class="default_recommend_member_right_click">
                            <div>
                              <router-link :to="'other_user/'+item.id">
                              <img src="../assets/dazhaohu01.png" alt="" />
                              </router-link>
                            </div>
                            <div>
                              <router-link :to="'other_user/'+item.id">
                              <img src="../assets/youxiang01.png" alt="" />
                              </router-link>
                            </div>
                            <div>
                              <router-link :to="'other_user/'+item.id">
                              <img src="../assets/aixin01.png" alt="" />
                              </router-link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <!-- <li>
                        <div class="default_recommend_member_left">
                          <img src="../assets/user_img01.png" alt="" />
                        </div>
                        <div class="default_recommend_member_right">
                          <h4>雷军</h4>
                          <div class="default_recommend_member_left_info">
                            <span>18岁</span>
                            <span>157cm</span>
                            <span>本科</span>
                            <span>月薪10000k</span>
                          </div>
                          <p>我是一个多变的女孩，动如脱兔，静如处子，可谓动静皆宜。生活中的我，不仅</p>
                          <div class="default_recommend_member_right_click">
                            <div>
                              <img src="../assets/aixin01.png" alt="" />
                            </div>
                            <div>
                              <img src="../assets/aixin01.png" alt="" />
                            </div>
                            <div>
                              <img src="../assets/aixin01.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </li> -->
                    </ul>

                  </div>
                  <!-- 推荐会员end -->
                  <!-- 约吧走起start -->
                  <div class="yuebazouqi">
                    <h3>约吧走起</h3>
                    <div class="yuebazouqi_content">
                      <div class="yuebazouqi_content_title">
                        <h4>七月之约</h4>
                        <router-link to="/yueba">查看更多活动&gt;</router-link>
                        <!-- <a href="javascript:;">查看更多活动&gt;</a> -->
                      </div>
                      <router-link to="yueba">
                      <div class="yuebazouqi_content_main">
                        <div class="event_left">
                          <img :src="'http://admin.qianlixunta.com'+qixi_festival_first.img" alt="">
                          <p>
                            <section>
                              <span class="active_adress">{{qixi_festival_first.city}}</span>
                              <span class="active_time">活动时间：{{qixi_festival_first.start_time}}</span>
                            </section>
                            <span class="active_join">已报名：<i>{{qixi_festival_first.join_nums}}</i></span>
                          </p>
                        </div>
                        <div class="event_right">
                          <img :src="'http://admin.qianlixunta.com'+qixi_festival_second.img" alt="" class="active_banner_img02">
                          <img :src="'http://admin.qianlixunta.com'+qixi_festival_third.img" alt="" class="active_banner_img03">
                        </div>
                      </div>
                      </router-link>
                    </div>
                  </div>
                  <!-- 约吧走起end -->
                  <!-- 情感交流start -->
                  <div class="qingganjiaoliu">
                    <h3>情感交流</h3>
                    <div class="qingganjiaoliu_content">
                      <div class="qingganjiaoliu_title_list">
                        <ul>
                          <li v-for="item in affective_interaction" :key="item.id"><router-link to="/article_list">{{item.cate_name}}</router-link></li>
                        </ul>
                        <!-- <a href="javascript:;">查看更多&gt;</a> -->
                        <router-link to="/article_list">查看更多&gt;</router-link>
                      </div>
                      <div class="qingganjiaoliu_news_list">
                        <router-link to="article_list">
                        <el-row>
                          <el-col :span="8">
                            <div class="qingganjiaoliu_news_item">
                              <div class="qingganjiaoliu_news_item_img">
                                <img src="../assets/news_eg01.png" alt="">
                                <p>男女之间的交流技巧</p>
                              </div>
                              <ul>
                                <li v-for="item in article_list_one" :key="item.id">
                                  <a :href="'/#/article_article/'+item.id">{{item.title}}</a>
                                </li>
                              </ul>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div class="qingganjiaoliu_news_item">
                              <div class="qingganjiaoliu_news_item_img">
                                <img src="../assets/news_eg02.jpg" alt="">
                                <p>男女之间如何正确相处</p>
                              </div>
                              <ul>
                                <li v-for="item in article_list_two" :key="item.id">
                                  <a :href="'/#/article_article/'+item.id">{{item.title}}</a>
                                </li>
                              </ul>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div class="qingganjiaoliu_news_item">
                              <div class="qingganjiaoliu_news_item_img">
                                <img src="../assets/news_eg03.jpg" alt="">
                                <p>结婚后的生活小技巧</p>
                              </div>
                              <ul>
                                <li v-for="item in article_list_three" :key="item.id">
                                  <a :href="'/#/article_article/'+item.id">{{item.title}}</a>
                                </li>
                              </ul>
                            </div>
                          </el-col>
                        </el-row>
                        </router-link>
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
                      <router-link :to="'other_user/'+agreement_join_shuffle.id">
                        <img :src="'http://admin.qianlixunta.com'+agreement_join_shuffle.head_portrait" alt="">
                      </router-link>
                      <div>
                        <router-link :to="'other_user/'+agreement_join_shuffle.id">
                          <h4 style="color:#000;">{{agreement_join_shuffle.nickname}}</h4>
                        </router-link>
                        <p>{{agreement_join_shuffle.introduce_oneself}}</p>
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
import allCityList from "@/assets/cityList.json"
import wx from "weixin-js-sdk"

export default {
  data() {
    return {
      // banner 图片
      banner_img: [{
        id: 1,
        src: require('@/assets/banner01.jpg')
      }, {
        id: 2,
        src: require('@/assets/banner02.jpg')
      }, {
        id: 3,
        src: require('@/assets/banner03.jpg')
      }],
      // 情感交流
      affective_interaction: [],
      cityList: '',
      // 禁用大于今天的日期
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      // 一分钟注册表单校验规则
      minuteRules: {
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        birthday: [
          { required: true, message: '请填写出生日期', trigger: 'change' }
        ],
        address: [
          { required: true, message: '请选择居住地址', trigger: 'change' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请填写短信验证码', trigger: 'blur' }
        ]
      },
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
      // 推荐会员
      age: '',
      search_form: {
        age_low: '',
        age_height: '',
        sex: '',
        workplace: ''
      },
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
      message_count_down_time: 0,
      // 推荐会员默认列表
      default_recommend_member_list: [],
      // 当前年份
      now_year: new Date().getFullYear(),
      // 七月之约活动展示
      qixi_festival: [],
      // 七月之约第一个活动
      qixi_festival_first: {
        img: '/upload/admin/let_go/20200730/795a496fd0d47413976d4a6cc69a9f89.png'
      },
      // 七月之约第二个活动
      qixi_festival_second: {
        img: '/upload/admin/let_go/20200730/795a496fd0d47413976d4a6cc69a9f89.png'
      },
      // 七月之约第三个活动
      qixi_festival_third: {
        img: '/upload/admin/let_go/20200730/795a496fd0d47413976d4a6cc69a9f89.png'
      },
      // 右侧最佳匹配
      agreement_join_shuffle: {
        head_portrait: '/upload/admin/article/thumbnail/20200807/nan.png'
      }
    }
  },
  created: function() {
    this.$emit('header', true);

    this.cityList = allCityList;

    // 移动端跳转
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(navigator.userAgent)) {
      window.location.href = "http://m.qianlixunta.com/"
    }

    this.$axios.get('/wpapi/article/category', {})
    .then((response) => {
      this.affective_interaction = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

    // 情感交流第一列数据
    this.$axios.get('/wpapi/article/category_list', {params:{id:1}})
    .then((result) => {
      console.log(result);
      this.article_list_one = result.data;
    })
    .catch((error) => {
      console.log(error);
    });
    
    // 情感交流第二列数据
    this.$axios.get('/wpapi/article/category_list', {params:{id:2}})
    .then((result) => {
      this.article_list_two = result.data;
    })
    .catch((error) => {
      console.log(error);
    });

    // 情感交流第三列数据
    this.$axios.get('/wpapi/article/category_list', {params:{id:3}})
    .then((result) => {
      this.article_list_three = result.data;
    })
    .catch((error) => {
      console.log(error);
    });

    // 推荐会员列表
    this.$axios.post('/wpapi/member/recommend_friend', this.search_form)
    .then((result) => {
      console.log(result);
      this.default_recommend_member_list = result.data;
    })
    .catch((error) => {
      console.log(error);
    });

    // 约吧走起-活动展示
    this.$axios.get('/wpapi/member/let_go_list', {params:{}})
    .then((result) => {
      console.log(result);
      this.qixi_festival = result.data;
      this.qixi_festival_first = this.qixi_festival[0];
      this.qixi_festival_second = this.qixi_festival[1];
      this.qixi_festival_third = this.qixi_festival[2];
    })
    .catch((error) => {
      console.log(error);
    });

    // 右侧边栏-最佳匹配
    this.$axios.get('/wpapi/register/agreement_join_shuffle', {params:{}})
    .then((result) => {
      console.log(result);
      this.agreement_join_shuffle = result.data;
    })
    .catch((error) => {
      console.log(error);
    });
  },
  mounted: function() {
    console.log(wx);
    console.log(location.href);

    if (wx) {
      this.$axios.post('http://wxshare.qianlixunta.com/wxJssdk/getJssdk', {url: location.href}).then((response) => {
        // var data = response.data

        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: response.appId, // 必填，公众号的唯一标识
          timestamp: response.timestamp, // 必填，生成签名的时间戳
          nonceStr: response.nonceStr, // 必填，生成签名的随机串
          signature: response.signature,// 必填，签名，见附录1
          jsApiList: ['updateTimelineShareData', 'updateAppMessageShareData'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });

        wx.ready(function () {
          // 分享到朋友圈
          wx.updateTimelineShareData({
              title: '千里寻他官网',
              desc: '千里寻他',
              link: 'http://www.qianlixunta.com/',
              imgUrl: 'http://www.qianlixunta.com/images/wx_share01.jpg'
            });
    
            // 分享给朋友
            wx.updateAppMessageShareData({
              title: '千里寻他官网',
              desc: '千里寻他',
              link: 'http://www.qianlixunta.com/',
              imgUrl: 'http://www.qianlixunta.com/images/wx_share01.jpg'
            });
        })
    
        wx.error(function (res) {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        })
      })
    }

  },
  methods: {
    free_register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var address01 = '';
          // this.minute_form.birthday = this.birthday_year + '.' + this.birthday_month + '.' + this.birthday_day;
          this.minute_form.birthday = new Date(this.minute_form.birthday).getFullYear() + '.' + new Date(this.minute_form.birthday).getMonth() + '.' + new Date(this.minute_form.birthday).getDate();
          for (let i = 0; i < this.minute_form.address.length; i++) {
            address01 += this.minute_form.address[i];
          }
          this.minute_form.address = address01;
          this.$axios.post('/wpapi/register/minute_form', this.minute_form)
          .then((result) => {
            console.log(result);
            if (result.status !== '200') return this.$message.error(result.msg);
            this.$message.success(result.msg);
            this.$router.push('/login');
          })
          .catch((error) => {
            console.log(error);
          });
        } else {
          console.log('温馨提示:有必填项没有填写');
          return false;
        }
      })
    },
    search_onSubmit() {
      if (this.age) {
        this.search_form.age_low = this.age.split('-')[0];
        this.search_form.age_height = this.age.split('-')[1];
      }
      this.search_form.workplace = this.search_form.workplace[this.search_form.workplace.length - 1];
      this.$axios.post('/wpapi/member/recommend_friend', this.search_form)
      .then((result) => {
        console.log(result);
        this.default_recommend_member_list = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
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
    },
    // 推荐会员换一批
    btn_change_friend() {
      this.$axios.post('/wpapi/member/btn_change_friend', {sex: Math.random() > 0.5 ? '0' : '1'})
      .then((result) => {
        console.log(result);
        this.default_recommend_member_list = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
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
    /* margin-bottom: 12px; */
  }
  .tuijianhuiyuan_title {
    display: flex;
    align-items: center;
    margin: 32px 0 22px;
  }
  .tuijianhuiyuan_title h3 {
    font-size: 33px;
    font-weight: 700;
    text-shadow: 0px 3px 6px rgba(42, 42, 42, .3);
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
    /* color: rgba(0, 30, 82, 1); */
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
    height: 126px;
  }
  .yuebazouqi_content_main .event_left {
    flex: 2;
    position: relative;
    /* height: 100%; */
    height: 259px;
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
  .yuebazouqi_content_main .event_left img {
    height: 100%;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 138px;
  }
  .zuijiapipei_info p {
    margin: 0;
    font-size: 12px;
    margin-bottom: 9px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
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

  /* 重构的默认推荐会员列表 */
  .default_recommend_member_list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
  }
  .default_recommend_member_list li {
    background-color: #fff;
    width: 31.33%;
    margin: 1%;
    display: flex;
  }
  .default_recommend_member_left {
    width: 48%;
    display: flex;
    flex-direction: column;
  }
  .default_recommend_member_left img {
    width: 100%;
    height: 100%;
  }
  .default_recommend_member_left_small_img {
    display: flex;
    flex: 1;
    border-radius: 0 0 0 10px;
    overflow: hidden;
  }
  .default_recommend_member_left_small_img img {
    width: 50%;
  }
  .default_recommend_member_left_big_img {
    flex: 1.8;
  }
  .default_recommend_member_right {
    width: 52%;
    padding: 13px;
    box-shadow: 1px 2px 2px 0px rgba(0,0,0,0.16);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .default_recommend_member_right h4 {
    font-size: 22px;
    margin: 10px 0;
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .default_recommend_member_left_info span {
    font-size: 14px;
    font-weight: 500;
    margin-right: 10px;
  }
  .default_recommend_member_right p {
    font-size: 12px;
    color: rgba(152,152,152,1);
    line-height: 20px;
    text-indent: 2em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .default_recommend_member_right_click {
    display: flex;
    justify-content: space-around;
  }
</style>