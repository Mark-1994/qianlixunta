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
        <div class="register_form">
          <h3 class="h3_logo">
            <img src="../assets/logo01.png" alt="">
          </h3>
          <div class="line_9"></div>
          <div class="line_3"></div>
          <p class="weight_info">请多花点时间如实填写</p>
          <el-form ref="form" :model="form" label-width="80px" class="form_user_info">
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
            <el-form-item label="婚姻状况">
              <el-radio-group v-model="form.marriage">
                <el-radio label="未婚"></el-radio>
                <el-radio label="离异"></el-radio>
                <el-radio label="丧偶"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="身高">
              <el-input v-model="form.height"></el-input>
            </el-form-item>
            <el-form-item label="学历">
              <el-select v-model="form.education" placeholder="请选择学历">
                <el-option label="硕士研究生" value="硕士研究生"></el-option>
                <el-option label="研究生" value="研究生"></el-option>
                <el-option label="本科" value="本科"></el-option>
                <el-option label="大专" value="大专"></el-option>
                <el-option label="高职" value="高职"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="工作地">
              <el-cascader
                :options="cityList"
                :props="{ checkStrictly: true }"
                clearable></el-cascader>
            </el-form-item>
            <el-form-item label="月薪">
              <el-input v-model="form.monthly"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="form.phone_number"></el-input>
              <el-button type="primary">短信验证</el-button>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input v-model="form.auth_code"></el-input>
            </el-form-item>
            <el-form-item label="账号密码">
              <el-input v-model="form.pass"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="自我介绍">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="标签">
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
            <el-form-item class="free_register_form_post">
              <el-button type="primary" @click="free_register">免费注册</el-button>
            </el-form-item>
            <el-form-item label="" class="free_register_form_protocol">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="" name="type">我同意注册条款和会员加入标准<br>并承诺年满18岁、单身、抱着积极的态度，真诚交友</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
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
      form: {
        type: []
      },
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
      dynamicTags: ['90后', '靠谱', '开朗'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    free_register() {
      console.log(this);
    },
    handleCommand(clickThis) {
      this.$message(clickThis);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>

<style scoped>
  .register_form {
    background-color: #fff;
    border-radius: 30px;
    width: 1088px;
    margin: 35px auto 104px;
  }
  .register_form .h3_logo {
    text-align: center;
    margin: 0;
    padding: 43px 0 32px;
  }
  .line_9 {
    height: 9px;
    background: linear-gradient(135deg, #ff2a86, #917fff 35%, #927ffe 71%, #9effff);
  }
  .line_3 {
    margin-top: 4px;
    height: 3px;
    background: linear-gradient(135deg, #ff2a86, #917fff 35%, #927ffe 71%, #9effff);
  }
  .weight_info {
    padding: 19px 0 58px;
    margin: 0;
    text-align: center;
    color: rgba(152, 152, 152, 1);
    font-size: 16px;
  }
  .register_form_birthday {
    width: 100px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .form_user_info {
    width: 60%;
    margin: 0 auto;
  }
  .free_register_form_post {
    text-align: center;
    margin: 0;
  }
  .free_register_form_post button {
    width: 295px;
    height: 53px;
    font-size: 30px;
    border: 0;
    margin: 58px auto 24px;
    background-color: rgba(238, 61, 61, 1);
    border-radius: 5px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, .16);
  }
  .free_register_form_protocol {
    margin: 0;
    padding-bottom: 67px;
  }
</style>