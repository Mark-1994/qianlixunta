<template>
  <div class="">
    <el-footer height="auto">
      <el-menu mode="horizontal" class="el-menu-demo01">
        <el-menu-item index="1">联系客服</el-menu-item>
        <el-menu-item index="2">
          <!-- <router-link to="/article_article/12">关于我们</router-link> -->
          <a href="/#/article_article/12">关于我们</a>
        </el-menu-item>
        <el-menu-item index="3">
          <!-- <router-link to="/article_article/11">防骗必看</router-link> -->
          <a href="/#/article_article/11">防骗必看</a>
        </el-menu-item>
        <el-menu-item index="4">帮助中心</el-menu-item>
        <!-- <el-menu-item index="5">安全中心</el-menu-item>
        <el-menu-item index="6">意见反馈</el-menu-item> -->
      </el-menu>
      <div class="zhongwenshiming">
        <p>
          <span>公司名称：{{companyInformation.name}}</span>
          <span>公司地址：{{companyInformation.address}}</span>
        </p>
        <p>
          <span>邮箱地址：{{companyInformation.email}}</span>
          <span>联系电话：{{companyInformation.phone}}</span>
        </p>
        <p style="font-weight: bold;">
          <!-- <span> 增值电信业务经营许可证：鄂B2-20070313</span> -->
          <span>营业执照：{{companyInformation.business_license}}</span>
          <span>备案号：{{companyInformation.record_no}}</span>
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
      // 公司信息
      companyInformation: {}
    }
  },
  created: function () {
    this.getCompanyInformation()
  },
  methods: {
    // 获取公司信息
    getCompanyInformation: async function () {
      const res = await this.$axios.get('/wpapi/member/company_init')
      if (res.status !== '200') return this.$message.error(res.msg)
      this.companyInformation = res.data
    }
  }
}
</script>

<style scoped>

</style>