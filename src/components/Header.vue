<template>
  <div class="login_container">
    <el-header style="height: auto;">
      <el-row class="header_left_right">
        <el-col :span="12" class="header_left_slogn">
          <router-link to="/index">
            <img src="../assets/logo01.png" alt="" />
          </router-link>
          <span>千里寻他</span>
        </el-col>
        <el-col :span="12" class="header_right_item">
          <img src="../assets/dibiao01.svg" alt="" />
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              武汉<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="select_city_list">
              <li class="el-dropdown-menu__item">热门：</li>
              <el-dropdown-item v-for="item in cityInfo" :key="item.id" :command="item.name">{{item.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span v-if="!(users_id && token)">
            <router-link to="/login">
              <el-button size="small" round class="login">登录</el-button>
            </router-link>
            <router-link to="/register">
              <el-button size="small" round class="signin">注册</el-button>
            </router-link>
          </span>
          <el-dropdown v-else @command="users_nav">
            <span class="el-dropdown-link">
              你好，{{nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
      cityInfo: [
        { id: 1, name: '北京' },
        { id: 2, name: '天津' },
        { id: 3, name: '河北省' },
        { id: 4, name: '山西省' },
        { id: 5, name: '内蒙古自治区' },
        { id: 6, name: '辽宁省' },
        { id: 7, name: '吉林省' },
        // { id: 8, name: '吉林省' },
        // { id: 9, name: '吉林省' },
        // { id: 10, name: '吉林省' },
        // { id: 11, name: '吉林省' },
        // { id: 12, name: '吉林省' },
        // { id: 13, name: '吉林省' },
        // { id: 14, name: '吉林省' },
        // { id: 15, name: '吉林省' },
        // { id: 16, name: '吉林省' },
        // { id: 17, name: '吉林省' },
        // { id: 18, name: '吉林省' },
        // { id: 19, name: '吉林省' },
        // { id: 20, name: '吉林省' },
        // { id: 21, name: '吉林省' },
        // { id: 22, name: '吉林省' },
        // { id: 23, name: '吉林省' },
        // { id: 24, name: '吉林省' }
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
      ],
      // users_id
      users_id: localStorage.getItem('users_id'),
      // token
      token: localStorage.getItem('token'),
      // nickname
      nickname: localStorage.getItem('nickname')
    }
  },
  methods: {
    handleCommand(command) {
      this.$message(command);
    },
    // 退出登录
    users_nav(command) {
      localStorage.clear();
      this.$router.push('/login');
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>