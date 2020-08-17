<template>
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
</style>