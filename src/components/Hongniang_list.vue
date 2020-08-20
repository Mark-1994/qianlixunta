<template>
  <div class="one_by_one">
    <header>
      <div class="header_content_center">
        <a href="javascript:;">
          <!-- <img src="../assets/logo01.png" alt="" /> -->
          <span>LOGO</span>
          <span>红娘一对一</span>
        </a>
        <div>
          <span>您好，林俊杰</span>
          <span>安全退出</span>
        </div>
      </div>
    </header>
    <div class="x-wrap">
      <!-- 10年红娘经验 -->
      <ul class="hongniang_list_item_info">
        <li>
          <div class="teacher_img">
            <img src="../assets/coco_teacher01.png" alt="">
          </div>
          <h3 class="teacher_name">COCO老师</h3>
          <h4 class="matt_parry">资深顾问</h4>
          <h3 class="ten_year_exp">10年红娘经验</h3>
          <p class="phonenumber">18572487828</p>
          <p class="qqnumber">464729484</p>
        </li>
        <li>
          <div class="teacher_img">
            <img src="../assets/coco_teacher01.png" alt="">
          </div>
          <h3 class="teacher_name">COCO老师</h3>
          <h4 class="matt_parry">资深顾问</h4>
          <h3 class="ten_year_exp">10年红娘经验</h3>
          <p class="phonenumber">18572487828</p>
          <p class="qqnumber">464729484</p>
        </li>
        <li>
          <div class="teacher_img">
            <img src="../assets/coco_teacher01.png" alt="">
          </div>
          <h3 class="teacher_name">COCO老师</h3>
          <h4 class="matt_parry">资深顾问</h4>
          <h3 class="ten_year_exp">10年红娘经验</h3>
          <p class="phonenumber">18572487828</p>
          <p class="qqnumber">464729484</p>
        </li>
        <li>
          <div class="teacher_img">
            <img src="../assets/coco_teacher01.png" alt="">
          </div>
          <h3 class="teacher_name">COCO老师</h3>
          <h4 class="matt_parry">资深顾问</h4>
          <h3 class="ten_year_exp">10年红娘经验</h3>
          <p class="phonenumber">18572487828</p>
          <p class="qqnumber">464729484</p>
        </li>
        <li>
          <div class="teacher_img">
            <img src="../assets/coco_teacher01.png" alt="">
          </div>
          <h3 class="teacher_name">COCO老师</h3>
          <h4 class="matt_parry">资深顾问</h4>
          <h3 class="ten_year_exp">10年红娘经验</h3>
          <p class="phonenumber">18572487828</p>
          <p class="qqnumber">464729484</p>
        </li>
      </ul>
    </div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '红娘一对一',
      radio: '1',
      checked: false
    }
  },
  created: function() {
      this.$axios.post('/api/statistics', {
        abc: 'a',
        def: 'b'
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
  },
  methods: {
    
  }
}
</script>

<style scoped>
  .x-wrap {
    width: 1180px;
    margin: 0 auto;
  }
  .one_by_one {
    background-color: rgba(240,242,245,1);
  }
  header {
    background-color: #000;
    color: #fff;
  }
  header a {
    color: #fff;
  }
  .header_content_center {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hongniang_list_item_info li {
    width: 100%;
    height: 292px;
    background: url(../assets/hongniang_list_item01.png) no-repeat 0 0 / contain;
    position: relative;
  }
  .teacher_img {
    position: absolute;
    bottom: 28px;
    left: 79px;
    width: 230px;
  }
  .teacher_img img {
    width: 100%;
  }
  .teacher_name {
    position: absolute;
    left: 270px;
    top: 38px;
    color: #fff;
    font-size: 39px;
    font-weight: 700;
  }
  .matt_parry {
    position: absolute;
    left: 600px;
    top: 70px;
    background: linear-gradient(to bottom, rgba(255,255,255,1), rgba(33,55,173,1));
    -webkit-background-clip: text;
    color: transparent;
    font-size: 38px;
  }
  .ten_year_exp {
    position: absolute;
    top: 125px;
    left: 540px;
    font-size: 44px;
    background: linear-gradient(to bottom, rgba(255,255,255,1), rgba(33,55,173,1));
    -webkit-background-clip: text;
    color: transparent;
  }
  .phonenumber {
    position: absolute;
    right: 85px;
    top: 157px;
    font-size: 14px;
    color: rgba(230,73,128,1);
  }
  .qqnumber {
    position: absolute;
    right: 92px;
    top: 188px;
    font-size: 14px;
    color: rgba(108,99,255,1);
  }
</style>