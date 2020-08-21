<template>
  <div id="app">
    <app-header v-if="header_show"></app-header>
    <router-view @header="header" @footer="footer"/>
    <app-footer v-if="footer_show"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  data() {
    return {
      header_show: true,
      footer_show: true
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  methods: {
    // 是否显示头部
    header: function(bool) {
      this.header_show = bool;
    },
    // 是否显示底部
    footer: function(bool) {
      this.footer_show = bool;
    }
  }
}
</script>

<style>
  #app, body, html {
    margin: 0;
    padding: 0;
    min-width: 1366px;
  }
  header,
  main,
  footer {
    padding: 0 !important;
  }
  header {
    line-height: 90px;
  }
  img {
    vertical-align: middle;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .x-wrap {
    width: 1180px;
    margin: 0 auto;
  }
  .header_left_right {
    padding: 0 120px;
  }
  .login_container {
    background: url(./assets/beijing02.png) 0 0 / cover;
    box-shadow: 0px 3px 60px 0px rgba(255, 58, 58, .33);
  }
  .el-menu.el-menu--horizontal {
    background: linear-gradient(154deg, #ff2a86, #927ffe 65%, #917fff 83%, #9effff 181%);
    border-radius: 20px 20px 0px 0px;
    padding: 0 160px;
  }
  .header_left_slogn span {
    color: rgba(108, 108, 108, 1);
    font-size: 16px;
  }
  .header_right_item {
    text-align: right;
  }
  .header_right_item img {
    margin-right: 18px;
  }
  .header_right_item .el-dropdown {
    margin-right: 64px;
  }
  .header_right_item .login {
    margin-right: 16px;
  }
  .header_right_item .el-button--small.is-round {
    width: 94px;
    height: 31px;
    margin-left: 0;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    border: 0;
  }
  .header_right_item .el-dropdown {
    line-height: normal;
  }
  .header_right_item .el-dropdown span {
    color: rgba(0, 0, 0, 1);
  }
  .el-menu.el-menu--horizontal li:hover {
    background-color: transparent !important;
    border-bottom: 2px solid #fff;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    background-color: transparent !important;
  }
  .el-menu.el-menu--horizontal li {
    /* font-size: 24px; */
  }
  footer {
    background-color: #fff;
  }
  .el-menu.el-menu--horizontal.el-menu-demo01 {
    background: #fff;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .zhongwenshiming {
    width: 80%;
    margin: 0 auto;
  }
  .footer_num {
    width: 80%;
    margin: 0 auto
  }
  .footer_num img {
    width: 100%;
  }
  .zhongwenshiming span {
    margin-right: 60px;
  }
  .select_city_list {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
  }
</style>
