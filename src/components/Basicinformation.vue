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
                  <div>
                    <img src="../assets/username01.png" alt="" />
                    <p>我的资料：80%</p>
                  </div>
                  <div>
                    <h4>林俊杰</h4>
                    <div>
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
          <div class="mine_info_form">
            <p class="information_progress">
              资料完善度 <span>{{percentage}}%</span>
              <el-progress :percentage="percentage" :color="customColor"></el-progress>
            </p>
            <el-tabs>
              <el-tab-pane label="完善资料">
                <el-tabs tab-position="left">
                  <el-tab-pane label="基本资料">
                    <p>完善资料</p>
                    <p>为保证资料真实有效，灰色字体信息不得随意修改</p>
                    <el-form ref="mine_data_form" :model="mine_data_form" label-width="80px">
                      <el-form-item label="昵称">
                        <el-input v-model="mine_data_form.name"></el-input>
                      </el-form-item>
                      <el-form-item label="性别">
                        <el-select v-model="sex" placeholder="请选择">
                          <el-option
                            v-for="item in sex_options"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="出生日期">
                        <el-select v-model="mine_data_form.year" placeholder="年" class="register_form_birthday">
                          <el-option label="1991" value="1991"></el-option>
                          <el-option label="1992" value="1992"></el-option>
                        </el-select>
                        年
                        <el-select v-model="mine_data_form.month" placeholder="月" class="register_form_birthday">
                          <el-option label="01" value="01"></el-option>
                          <el-option label="02" value="02"></el-option>
                        </el-select>
                        月
                        <el-select v-model="mine_data_form.day" placeholder="日" class="register_form_birthday">
                          <el-option label="01" value="01"></el-option>
                          <el-option label="02" value="02"></el-option>
                        </el-select>
                        日
                      </el-form-item>
                      <el-form-item label="生肖">
                        <el-select v-model="animal" placeholder="请选择">
                          <el-option
                            v-for="item in animal_options"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="星座">
                        <el-select v-model="constellation" placeholder="请选择">
                          <el-option
                            v-for="item in constellation_options"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="姓名">
                        <el-input v-model="mine_data_form.username"></el-input>
                      </el-form-item>
                      <el-form-item label="婚姻状况">
                        <el-select v-model="marriage" placeholder="请选择">
                          <el-option
                            v-for="item in marriage_options"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="身份证号">
                        <el-input v-model="mine_data_form.userid"></el-input>
                      </el-form-item>
                      <p>身高、学历、月薪的信息不可随意修改，一个月内只允许修改一次。</p>
                      <el-form-item label="身高">
                        <el-input v-model="mine_data_form.userheight"></el-input>
                      </el-form-item>
                      <el-form-item label="学历">
                        <el-select v-model="education" placeholder="请选择">
                          <el-option
                            v-for="item in education_options"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="月薪">
                        <el-input v-model="mine_data_form.monthmoney"></el-input>
                      </el-form-item>
                      <p>以下信息，希望您依照实际情况谨慎修改。</p>
                      <el-form-item label="所在地区">
                        <el-input v-model="mine_data_form.nowadress"></el-input>
                      </el-form-item>
                      <el-form-item label="有无子女">
                        <el-input v-model="mine_data_form.nochildren"></el-input>
                      </el-form-item>
                      <el-form-item label="血型">
                        <el-input v-model="mine_data_form.blood"></el-input>
                      </el-form-item>
                      <el-form-item label="购车情况">
                        <el-input v-model="mine_data_form.car"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary">保存</el-button>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane label="择偶条件">
                    <p>您的择偶条件</p>
                    <el-row>
                      <el-col>性别：女</el-col>
                      <el-col>年龄：20-30岁</el-col>
                    </el-row>
                    <el-row>
                      <el-col>所在地：湖北武汉</el-col>
                      <el-col>身高：155-170CM</el-col>
                    </el-row>
                    <el-row>
                      <el-col>民族：不限</el-col>
                      <el-col>学历：不限</el-col>
                    </el-row>
                    <el-row>
                      <el-col>婚姻状况：未婚</el-col>
                    </el-row>
                    <p>设置择偶条件</p>
                    <el-form ref="set_choose_form" :model="set_choose_form" label-width="80px">
                      <el-form-item label="年龄">
                        <el-select v-model="beforeage" placeholder="请选择">
                          <el-option
                            v-for="item in beforeage_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        -
                        <el-select v-model="afterage" placeholder="请选择">
                          <el-option
                            v-for="item in afterage_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="身高">
                        <el-select v-model="beforeheight" placeholder="请选择">
                          <el-option
                            v-for="item in beforeheight_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        -
                        <el-select v-model="afterheight" placeholder="请选择">
                          <el-option
                            v-for="item in afterheight_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane label="内心独白">内心独白</el-tab-pane>
                  <el-tab-pane label="我的照片">我的照片</el-tab-pane>
                  <el-tab-pane label="详细资料">详细资料</el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane label="我的账号">我的账号</el-tab-pane>
              <el-tab-pane label="实名认证">实名认证</el-tab-pane>
            </el-tabs>
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
      mine_data_form: {
        
      },
      customColor: '#409eff',
      percentage: 20,
      sex: '',
      sex_options: [
        { value: '男', label: '男', id: 1},
        { value: '女', label: '女', id: 2}
      ],
      animal: '',
      animal_options: [
        { value: '猪', label: '猪', id: 1},
        { value: '狗', label: '狗', id: 2}
      ],
      constellation: '',
      constellation_options: [
        { value: '天蝎座', label: '天蝎座', id: 1},
        { value: '金牛座', label: '金牛座', id: 2}
      ],
      marriage: '',
      marriage_options: [
        { value: '未婚', label: '未婚', id: 1},
        { value: '离异', label: '离异', id: 2}
      ],
      education: '',
      education_options: [
        { value: '本科', label: '本科', id: 1},
        { value: '研究生', label: '研究生', id: 2}
      ],
      // 设置择偶条件表单
      set_choose_form: {},
      beforeage: '',
      beforeage_options: [
        { value: '20', label: '20', id: 1},
        { value: '30', label: '30', id: 2}
      ],
      afterage: '',
      afterage_options: [
        { value: '20', label: '20', id: 1},
        { value: '30', label: '30', id: 2}
      ],
      beforeheight: '',
      beforeheight_options: [
        { value: '160', label: '160', id: 1},
        { value: '170', label: '170', id: 2}
      ],
      afterheight: '',
      afterheight_options: [
        { value: '170', label: '170', id: 1},
        { value: '180', label: '180', id: 2}
      ]
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
  .mine_info_form {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    margin-top: 14px;
    padding: 30px 38px 53px;
    position: relative;
  }
  .information_progress {
    position: absolute;
    right: 38px;
    top: 30px;
    margin: 0;
  }
</style>