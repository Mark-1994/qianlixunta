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
        <div class="main_center_module">
          <div class="home_banner">
            <div class="home_banner_signup_form">
              <h3>一分钟注册</h3>
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="性别">
                  <el-radio-group v-model="form.sex">
                    <el-radio label="男生"></el-radio>
                    <el-radio label="女生"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="生日">
                  <el-select v-model="form.year" placeholder="年" class="register_form_birthday">
                    <el-option label="1991" value="1991"></el-option>
                    <el-option label="1992" value="1992"></el-option>
                  </el-select>
                  年
                  <el-select v-model="form.month" placeholder="月" class="register_form_birthday">
                    <el-option label="01" value="01"></el-option>
                    <el-option label="02" value="02"></el-option>
                  </el-select>
                  月
                  <el-select v-model="form.day" placeholder="日" class="register_form_birthday">
                    <el-option label="01" value="01"></el-option>
                    <el-option label="02" value="02"></el-option>
                  </el-select>
                  日
                </el-form-item>
                <el-form-item label="现居住地">
                  <el-cascader
                    :options="cityList"
                    :props="{ checkStrictly: true }"
                    clearable></el-cascader>
                </el-form-item>
                <el-form-item label="手机号">
                  <el-input v-model="form.phone_number" class="phone_number"></el-input>
                </el-form-item>
                <el-form-item class="free_register_form_post">
                  <el-button type="primary" @click="free_register">免费注册</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="main_center_bottom_two">
            <el-row>
              <el-col :span="16">
                <div class="grid-content bg-purple main_center_bottom_left">
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
                          <el-select v-model="search_form.year" placeholder="">
                            <el-option label="20-30岁" value="20"></el-option>
                            <el-option label="30-40岁" value="30"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="性别">
                          <el-select v-model="search_form.sex" placeholder="">
                            <el-option label="男" value="男"></el-option>
                            <el-option label="女" value="女"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item label="城市">
                          <el-select v-model="search_form.city" placeholder="">
                            <el-option label="武汉" value="武汉"></el-option>
                            <el-option label="上海" value="上海"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary" @click="search_onSubmit">搜索</el-button>
                        </el-form-item>
                      </el-row>
                    </el-form>
                    <el-row :gutter="20">
                      <el-col :span="8">
                        <div class="grid-content bg-purple">
                          <img src="../assets/user_img01.png" alt="">
                          <div class="user_info">
                            <h3>林俊杰</h3>
                            <div>
                              <span>18岁</span>
                              <span>177cm</span>
                              <span>本科</span>
                              <span>月薪5000K</span>
                            </div>
                            <p>我是一个多变的女孩，动如脱兔，静如处子，可谓动静皆宜。生活中的我，不仅喜欢旅游、聚会，也喜欢独自读《红楼梦》、看韩剧美剧，当然家务能力也是不错的。期待自己的另一半是一个可以理解自己，有生活情趣和共同语言的男士，我是世纪佳缘手机版用户，我在这里等着你哦！</p>
                            <el-row>
                              <el-col>
                                <el-link type="primary">
                                  <img src="../assets/dazhaohu01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link type="primary">
                                  <img src="../assets/dazhaohu01.png" alt="">
                                </el-link>
                              </el-col>
                              <el-col>
                                <el-link type="primary">
                                  <img src="../assets/dazhaohu01.png" alt="">
                                </el-link>
                              </el-col>
                            </el-row>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="8"><div class="grid-content bg-purple">2</div></el-col>
                      <el-col :span="8"><div class="grid-content bg-purple">3</div></el-col>
                    </el-row>
                    <el-row :gutter="20">
                      <el-col :span="8"><div class="grid-content bg-purple">4</div></el-col>
                      <el-col :span="8"><div class="grid-content bg-purple">5</div></el-col>
                      <el-col :span="8"><div class="grid-content bg-purple">6</div></el-col>
                    </el-row>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light main_center_bottom_right">2</div>
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
      form: {},
      search_form: {}
    }
  },
  methods: {
    handleCommand(abc) {
      this.$message(abc);
    },
    free_register() {
      this.$message('注册');
    },
    search_onSubmit() {
      this.$message('搜索');
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
    top: 50px;
    right: 50px;
    border-radius: 20px;
    padding: 0 32px 30px;
  }
  .home_banner_signup_form h3 {
    margin: 0;
    text-align: center;
    font-size: 26px;
    margin: 20px auto;
  }
  .register_form_birthday {
    width: 80px;
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
    background-color: #fff;
  }
</style>