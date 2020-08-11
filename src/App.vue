<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app, body, html {
    height: 100%;
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
</style>
