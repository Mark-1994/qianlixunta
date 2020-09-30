<template>
  <div class="">
    <el-footer height="auto">
      <el-menu mode="horizontal" class="el-menu-demo01">
        <el-menu-item index="1">联系客服</el-menu-item>
        <el-menu-item index="2">关于我们</el-menu-item>
        <el-menu-item index="3">防骗必看</el-menu-item>
        <el-menu-item index="4">帮助中心</el-menu-item>
        <!-- <el-menu-item index="5">安全中心</el-menu-item>
        <el-menu-item index="6">意见反馈</el-menu-item> -->
      </el-menu>
      <div class="zhongwenshiming">
        <p>
          <span>公司名称：武汉千里寻他信息科技有限公司</span>
          <span>公司地址：武汉市江岸区永清路60号3栋3单元502室</span>
        </p>
        <p>
          <span>邮箱地址：hd1319635324@126.com</span>
          <span>联系电话：15327204213</span>
        </p>
        <p style="font-weight: bold;">
          <!-- <span> 增值电信业务经营许可证：鄂B2-20070313</span> -->
          <span>营业执照：91420102MA49GUP51M</span>
        </p>
        <p style="color: #989898;">免责声明：用户之间相互联系、见面等行为与本站无关，用户之间发生违法、犯罪、侵权等事件与本站无关。 本站不承担任何责任。</p>
      </div>
      <p class="footer_num">
        <img src="../assets/footer_num.png" alt="">
      </p>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'app-footer',
  data() {
    return {
      msg: '页脚'
    }
  }
}
</script>

<style scoped>

</style>