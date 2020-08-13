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
        <div class="login_box">
          <div class="user_title">会员登陆</div>
          <el-form ref="form" label-width="auto" :model="form" :rules="loginRules" hide-required-asterisk>
            <el-form-item label="账号" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="form.pass"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-checkbox-group v-model="form.type" class="juzhumima_zhucezhanghao">
                <el-checkbox label="记住密码" name="type"></el-checkbox>
                <el-link :underline="false" href="javascript:;" class="zhucezhanghao">注册账号</el-link>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form')">登录</el-button>
            </el-form-item>
          </el-form>
          <div class="other_login">
            <span>其他登录方式</span>
            <img src="../assets/qq01.svg" alt="" />
            <img src="../assets/weixin01.svg" alt="" />
            <img src="../assets/weibo01.svg" alt="" />
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
      form: {
        type: []
      },
      loginRules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
  .login_container {
    background: url(../assets/beijing02.png) 0 0 / cover;
    box-shadow: 0px 3px 60px 0px rgba(255, 58, 58, .33);
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .login_box {
    width: 566px;
    height: 432px;
    background-color: #fff;
    margin: 103px auto 115px;
    border-radius: 30px;
    text-align: center;
  }
  .user_title {
    font-size: 30px;
    border-bottom: 2px solid rgba(112, 112, 112, .56);
    padding: 13px 0 7px;
  }
  .el-form {
    margin: 54px auto 39px;
    padding: 0 103px 0 74px;
  }
  .el-form .el-button {
    width: 100%;
    border-radius: 10px;
    font-size: 24px;
    background: linear-gradient(180deg, #fc2c89, #ff97c6);
    border: 1px solid #e64980;
  }
  .other_login img {
    margin-left: 32px;
  }
  .juzhumima_zhucezhanghao {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: normal;
  }
  .zhucezhanghao {
    text-decoration: underline;
  }
</style>