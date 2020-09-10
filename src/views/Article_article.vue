<template>
  <div class="login_container01">
    <el-container>
      <el-main>
        <div class="x-wrap">
          <el-row class="article_article_top">
            <el-col :span="17">
              <div class="article_article_left">
                <div class="article_box">
                  <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>情感交流</el-breadcrumb-item>
                    <el-breadcrumb-item>最新文章</el-breadcrumb-item>
                    <el-breadcrumb-item>正文</el-breadcrumb-item>
                  </el-breadcrumb>
                  <h2>{{article_title}}</h2>
                  <el-row>
                    <el-col :span="6">{{article_create_time}}<el-divider direction="vertical"></el-divider></el-col>
                    <el-col :span="4">
                      <el-link :underline="false"><i class="el-icon-view el-icon--left"></i> 被查看 {{article_views}}<el-divider direction="vertical"></el-divider></el-link>
                    </el-col>
                    <el-col :span="4">
                      <el-link :underline="false"><i class="iconfont-qianlixunta icon-qianlixuntadianzan"></i> 点赞 {{article_num_of_likes}}</el-link>
                    </el-col>
                  </el-row>
                  <el-divider class="cut_off_line"></el-divider>
                  <div class="article_article_content_info">
                    <div v-html="article_content"></div>
                  </div>
                </div>
                <div class="article_article_bottom_dianzan">
                  <a href="javascript:;" @click="fabulous">
                    <span>赞</span>
                    <img src="../assets/dianzan01.png" alt="">
                  </a>
                </div>
                <div class="article_article_control_next_pre">
                  <a :href="'/#/article_article/'+article_info_up_id" @click="updata_article_info(article_info_up_id)" class="previous_article_box">
                    <span class="previous_article_title">{{article_info_up_title}}</span>
                    <span class="previous_article">上一篇</span>
                  </a>
                  <a :href="'/#/article_article/'+article_info_down_id" @click="updata_article_info(article_info_down_id)" class="next_article_box">
                    <span class="next_article">下一篇</span>
                    <span class="next_article_title">{{article_info_down_title}}</span>
                  </a>
                </div>
              </div>
            </el-col>
            <el-col :span="7">
              <div class="article_article_right">
                <div class="xuntazhuanxian01">
                  <h4>寻TA专线</h4>
                  <el-divider class="line_bgc_nine"></el-divider>
                  <el-divider class="line_bgc_three"></el-divider>
                  <el-row class="xuntazhuanxian01_box">
                    <el-col :span="8">
                      <div class="xuntazhuanxian01_item_box">
                        <img src="../assets/xunzhao01.png" alt="">
                        <span>寻找TA</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="xuntazhuanxian01_item_box">
                        <img src="../assets/yuehui01.png" alt="">
                        <span>约吧</span>
                      </div>
                    </el-col>
                    <el-col :span="8">
                      <div class="xuntazhuanxian01_item_box">
                        <img src="../assets/yiduiyi02.png" alt="">
                        <span>红娘一对一</span>
                      </div>
                    </el-col>
                  </el-row>
                  <el-row class="join_member_box">
                    <el-col>
                      <el-button type="primary" class="join_member"><router-link to="/join_member">加入会员</router-link></el-button>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col>
                      <span class="xuntazhuanxian01_des_info">一年只交168元更快找到TA，无任何额外费用</span>
                    </el-col>
                  </el-row>
                </div>
                <div class="zuijiapipei01">
                  <h4>最佳匹配</h4>
                  <el-row class="zuijiapipei01_img_info">
                    <el-col :span="14" class="zuijiapipei01_left_img">
                      <el-image
                        style="width: 100%; height: 250px"
                        :src="require('@/assets/banner01.png')"
                        fit="fit"></el-image>
                    </el-col>
                    <el-col :span="10" class="zuijiapipei01_right_info">
                      <h5>ANNA</h5>
                      <p>容貌一般，不吓人，性格温和，bai脾气好，人品善良，真诚，du正直，吸烟，滴酒不沾。喜欢做家务，做饭菜，懂生活。体贴，温柔...</p>
                      <div class="tag_all">
                        <el-tag size="mini">90后</el-tag>
                        <el-tag size="mini">开朗</el-tag>
                        <el-tag size="mini">外企</el-tag>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
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
      // 文章文本
      article_content: '',
      // 文章标题
      article_title: '',
      // 文章添加日期
      article_create_time: '',
      // 文章查看次数
      article_views: '',
      // 文章点赞数
      article_num_of_likes: '',
      // 上一篇文章标题
      article_info_up_title: '',
      // 下一篇文章标题
      article_info_down_title: '',
      // 上一篇文章id
      article_info_up_id: '',
      // 下一篇文章id
      article_info_down_id: ''
    }
  },
  created: function() {
    this.$emit('header', true);
    
    console.log(this.$route.params.id);
    this.$axios.get('/wpapi/article/category_detail', {params:{id: this.$route.params.id}})
    .then((result) => {
      console.log(result);
      this.article_content = result.data.info.content;
      this.article_title = result.data.info.title;
      this.article_create_time = result.data.info.create_time;
      this.article_views = result.data.info.views;
      this.article_num_of_likes = result.data.info.num_of_likes;
      this.article_info_up_title = result.data.info_up ? result.data.info_up.title : '没有了';
      this.article_info_down_title = result.data.info_down ? result.data.info_down.title : '没有了';
      this.article_info_up_id = result.data.info_up ? result.data.info_up.id : '#';
      this.article_info_down_id = result.data.info_down ? result.data.info_down.id : '#';
    })
    .catch((error) => {
      console.log(error);
    });
  },
  methods: {
    fabulous() {
      console.log(this.$route.params.id);
      this.$axios.get('/wpapi/article/fabulous', {params:{id: this.$route.params.id}})
      .then((result) => {
        console.log(result);
        if (result.status !== 200) return this.$message.error(result.msg);
        this.$message.success(result.msg);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 更新文章数据
    updata_article_info(id) {
      this.$axios.get('/wpapi/article/category_detail', {params:{id: id}})
      .then((result) => {
        console.log(result);
        this.article_content = result.data.info.content;
        this.article_title = result.data.info.title;
        this.article_create_time = result.data.info.create_time;
        this.article_views = result.data.info.views;
        this.article_num_of_likes = result.data.info.num_of_likes;
        this.article_info_up_title = result.data.info_up ? result.data.info_up.title : '没有了';
        this.article_info_down_title = result.data.info_down ? result.data.info_down.title : '没有了';
        this.article_info_up_id = result.data.info_up ? result.data.info_up.id : '#';
        this.article_info_down_id = result.data.info_down ? result.data.info_down.id : '#';
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
  .article_box {
    background-color: #fff;
    border-radius: 4px;
    padding: 36px 49px;
  }
  .article_article_top {
    margin-top: 47px;
  }
  .article_article_bottom_dianzan {
    margin: 55px auto;
  }
  .article_article_bottom_dianzan a {
    background: linear-gradient(330deg,#ff2a86 14%, #9e76f1 51%, #9effff 87%, #000000 87%);
    display: inline-block;
    color: #fff;
    width: 86px;
    height: 86px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    margin: 0 auto;
  }
  .article_article_control_next_pre {
    margin: 0 auto 97px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .article_article_control_next_pre a {
    color: #000;
  }
  .article_article_control_next_pre .previous_article,
  .article_article_control_next_pre .next_article {
    border: 1px solid #989898;
    color: #989898;
    padding: 8px 15px;
  }
  .previous_article_box,
  .previous_article_title {
    margin-right: 13px;
  }
  .next_article_box {
    text-align: left;
    flex: 1;
  }
  .previous_article_box {
    text-align: right;
    flex: 1;
  }
  .next_article_box,
  .next_article_title {
    margin-left: 13px;
  }
  .previous_article_title,
  .next_article_title {
    text-decoration: underline;
  }
  .article_article_right {
    margin-left: 47px;
  }
  .xuntazhuanxian01,
  .zuijiapipei01 {
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
  }
  .xuntazhuanxian01,
  .zuijiapipei01 {
    background-color: #fff;
    border-radius: 20px;
  }
  .line_bgc_nine,
  .line_bgc_three {
    margin: 0;
  }
  .xuntazhuanxian01 h4 {
    margin: 0;
    text-align: center;
    padding: 15px 0;
    font-size: 24px;
    font-weight: 700;
    text-shadow: 0px 3px 6px rgba(0,0,0,0.29);
  }
  .xuntazhuanxian01 {
    margin-bottom: 24px;
  }
  .line_bgc_nine {
    height: 9px;
    background: linear-gradient(135deg,#ff2a86, #917fff 35%, #927ffe 71%, #9effff);
  }
  .line_bgc_three {
    height: 3px;
    background: linear-gradient(135deg,#ff2a86, #917fff 35%, #927ffe 71%, #9effff);
    margin-top: 4px;
  }
  .xuntazhuanxian01_item_box {
    text-align: center;
  }
  .xuntazhuanxian01_item_box img {
    width: 70px;
    height: 65px;
  }
  .xuntazhuanxian01_item_box span {
    display: inline-block;
  }
  .xuntazhuanxian01_box {
    margin: 15px auto 49px;
  }
  .join_member {
    background-color: #fff;
    border-radius: 24px;
    border-color: #fff;
    background: linear-gradient(125deg,#ff2a86 9%, #917fff 51%, #9effff 91%);
    font-weight: 700;
    font-size: 24px;
  }
  .join_member a {
    color: #fff;
  }
  .xuntazhuanxian01_des_info {
    text-shadow: 0px 3px 6px rgba(0,0,0,0.29);
    padding: 0 35px;
    display: inline-block;
    text-align: center;
    margin: 15px auto;
  }
  .join_member_box {
    text-align: center;
  }
  .zuijiapipei01 h4 {
    margin: 0;
    text-align: center;
    padding: 18px 0;
    font-size: 24px;
    text-shadow: 0px 3px 6px rgba(0,0,0,0.29);
  }
  .zuijiapipei01_img_info {
    padding: 0 24px 19px;
  }
  .zuijiapipei01_left_img {
    padding-right: 14px;
  }
  .zuijiapipei01_right_info h5 {
    margin: 10px 0;
    font-size: 24px;
  }
  .zuijiapipei01_right_info p {
    font-size: 12px;
    margin: 0 0 9px;
  }
  .tag_all span {
    margin: 3px;
  }
  .cut_off_line {
    margin: 10px auto 30px;
  }
  .article_article_content_info {
    line-height: 50px;
  }
</style>