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
    <div class="bannerTop">
      <div class="one_by_one_serve">
        <h4>红娘一对一服务</h4>
        <ul>
          <li>隐私无泄漏</li>
          <li>安全可靠</li>
          <li>一对一量身定做</li>
        </ul>
        <a href="javascript:;">立即报名</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '红娘一对一'
    }
  }
}
</script>

<style scoped>
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
  .header_content_center a {
    
  }
  .bannerTop {
    background: url(../assets/banner01.png) no-repeat center center / cover;
    position: relative;
    width: 100%;
    height: 491px;
  }
  .one_by_one_serve {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 119px;
    background-color: rgba(255, 255, 255, .5);
    padding: 27px 84px;
    border-radius: 20px;
  }
  .one_by_one_serve h4 {
    margin: 0;
    color: rgba(230,73,128,1);
    font-size: 24px;
    font-weight: 500;
  }
  .one_by_one_serve a {
    color: #fff;
    background: linear-gradient(125deg,#ff2a86 9%, #917fff 51%, #9effff 91%);
    border-radius: 6px;
    padding: 12px 31px;
    display: inline-block;
  }
  .one_by_one_serve ul li {
    line-height: 40px;
    margin: 10px 0;
  }
  .one_by_one_serve ul li::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 28px;
    background: url(../assets/yinsi01.png) no-repeat 0 0 / cover;
  }
</style>