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
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      msg: '头部'
    }
  },
  methods: {

  },
  created() {

  }
}
</script>

<style scoped>

</style>