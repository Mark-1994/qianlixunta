<template>
  <div class="login_container01">
    <el-container>
      <el-main>
        <div class="x-wrap">
          <el-row class="">
            <el-col :span="17">
              <div class="article_article_left">
                <div class="article_box">
                  <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>情感交流</el-breadcrumb-item>
                    <el-breadcrumb-item>最新文章</el-breadcrumb-item>
                    <el-breadcrumb-item>正文</el-breadcrumb-item>
                  </el-breadcrumb>
                  <h2>你最喜欢哪种类型的TA</h2>
                  <el-row>
                    <el-col :span="3">2020.7.8<el-divider direction="vertical"></el-divider></el-col>
                    <el-col :span="4">
                      <el-link :underline="false"><i class="el-icon-view el-icon--left"></i> 被查看 100<el-divider direction="vertical"></el-divider></el-link>
                    </el-col>
                    <el-col :span="4">
                      <el-link :underline="false"><i class="el-icon-view el-icon--left"></i> 点赞 100</el-link>
                    </el-col>
                  </el-row>
                  <el-divider></el-divider>
                  <div class="article_article_content_info">
                    <p>对于搜索，百度百科给出的基本解释是: 给予一定的条件后再寻求,搜查。因此，搜索，可以看做是用户快速获取特定信息的一种方式。</p>
                    <p>吾生也有涯，而知也无涯。以有涯随无涯，殆已！早在战国时期，庄子就发出了这样的感叹：以有限的生命追逐无限的知识，必然是败的。互联网伊始，当网络信息开始呈指数型增长时，搜索就应运而生，从Yahoo、Google到百度，在搜索的地基上催生了庞大的商业帝国。由此可见，面对信息爆炸的互联网，人们对于搜索，这一主动寻求特定信息方式的强烈渴求。</p>
                    <p>从认知科学的角度来说，人脑很难了解和记住所有的信息。认知科学的先驱托马斯·兰道尔，曾做过一个实验，用与计算机内存相同的衡量标准来衡量人类的记忆容量，他通过几种巧妙的方法推算出成年人的平均知识量是0.5GB。后来他又根据人们知识习得的速度，用多种方法来估算70年寿命后人脑所能存储的知识量，最后都指向同一个答案：1GB。这点存储量和浩如烟海的互联网信息相比，简直微如尘埃，不值一提。当然人类的大脑，主要用途并不是存储，也不擅长记忆，所以我们学会了创造并使用各种媒介来作为我们身体的延伸。</p>
                    <p>正因为互联网上信息浩如烟海，人们的记忆容量又极为有限，不同人在不同时刻，不同场景下想获取的知识千差万别，任何产品都很难揣摩其意图，随时随地，心照不宣的给出人们想要的信息。所以搜索之于互联网，就像阳光雨露一般不可缺失。借助搜索这一工具，人们无需再众里寻他千百度，只需一个简单的输入，搜索引擎就能把结果呈现在灯火阑珊处。</p>
                    <p>我们来共同关注两项调查：</p>
                    <p>根据艾媒咨询2018年的调研报告，当人们有搜索诉求时，多数用户第一反应是采用浏览器进行搜索。</p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="article_article_right">2</div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '文章页'
    }
  }
}
</script>

<style scoped>
  .article_box {
    background-color: #fff;
  }
</style>