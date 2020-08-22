<template>
  <div class="login_container">
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
      <div class="nav_bg_color">
        <div class="x-wrap">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            text-color="#fff"
            active-text-color="#fff"
            router
            background-color="rgba(0,0,0,0)">
            <el-menu-item v-for="item in navMenu" :key="item.id" :index="item.index">{{item.navName}}</el-menu-item>
          </el-menu>
        </div>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      msg: '头部',
      cityInfo: [
        { id: 1, name: '北京' },
        { id: 2, name: '上海' },
        { id: 3, name: '广州' },
        { id: 4, name: '武汉' },
        { id: 5, name: '成都' },
        { id: 6, name: '天津' },
        { id: 7, name: '重庆' }
      ],
      navMenu: [
        { id: 1, navName: '首页', index: '/index' },
        { id: 2, navName: '加入会员', index: '/join_member' },
        { id: 3, navName: '寻找TA', index: '/search' },
        { id: 4, navName: '约吧走起', index: '/yueba' },
        { id: 5, navName: '我要发布', index: '/release_information' },
        { id: 6, navName: '来消息啦', index: '/message_list' },
        { id: 7, navName: '红娘一对一', index: '/hongniang' },
        { id: 8, navName: '我的', index: '/basicinformation' }
      ]
    }
  },
  methods: {
    handleCommand(abc) {
      this.$message(abc);
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>