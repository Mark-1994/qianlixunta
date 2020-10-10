<template>
  <div class="login_container01">
    <el-container>
      <el-main>
        <div class="x-wrap">
          <el-row class="article_article_top">
            <el-col :span="17">
              <div class="article_article_left">
                <div class="article_box">
                  <div class="nav_title_cut_off">
                    <el-row>
                      <el-col :span="3" v-for="(item,index) in article_category" :key="item.id">
                        <a href="javascript:;" :class="index == cur ? 'nav_this' : ''" @click="click_change_list(item.id, index)">{{item.cate_name}}</a>
                      </el-col>
                    </el-row>
                    <el-divider class="cut_off_line"></el-divider>
                  </div>
                  <div class="article_article_content_info">
                    <el-row class="article_list_item" v-for="item in article_list" :key="item.id">
                      <el-col :span="6">
                        <!-- <el-image
                          :src="require('@/assets/article_list_example01.png')"
                          fit="fit"></el-image> -->
                        <el-image
                          :src="'http://admin.qianlixunta.com'+item.thumbnail"
                          fit="fit"></el-image>
                      </el-col>
                      <el-col :span="18">
                        <el-row class="article_list_item_right">
                          <el-col class="article_list_item_title">
                            <h4>
                              <router-link :to="'/article_article/'+item.id">{{item.title}}</router-link>
                            </h4>
                          </el-col>
                          <el-col class="show_article_desc01">
                            <p v-html="item.content" class="show_article_desc02"></p>
                          </el-col>
                          <el-col class="num_of_likes_views01">
                            <el-link :underline="false"><i class="iconfont-qianlixunta icon-qianlixuntadianzan"></i> {{item.num_of_likes}}</el-link>
                            <el-link :underline="false" icon="el-icon-view">{{item.views}}</el-link>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                    <!-- <el-row class="article_list_item">
                      <el-col :span="6">
                        <el-image
                          :src="require('@/assets/article_list_example01.png')"
                          fit="fit"></el-image>
                      </el-col>
                      <el-col :span="18">
                        <el-row class="article_list_item_right">
                          <el-col class="article_list_item_title">
                            <h4>你最喜欢哪种类型的TA</h4>
                          </el-col>
                          <el-col>
                            <p>现实生活中，农夫与蛇的故事似乎总在不断上演。还记得几年前的“刘鑫江歌案”，至今仍热度不减，而舆论的焦点便是，惨案背后折射的关乎人性深处</p>
                          </el-col>
                          <el-col>
                            <el-link :underline="false" icon="el-icon-edit">100</el-link>
                            <el-link :underline="false" icon="el-icon-edit">100</el-link>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row> -->
                  </div>
                </div>
                <!-- 页码 -->
                <el-pagination
                class="page_list"
                :page-sizes="[20, 30, 50, 80]"
                :page-size="6"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
              </el-pagination>
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
                      <!-- <el-image
                        style="width: 100%; height: 250px"
                        :src="require('@/assets/banner01.png')"
                        fit="fit"></el-image> -->
                      <router-link :to="'other_user/'+agreement_join_shuffle.id">
                        <el-image
                        style="width: 100%; height: 180px"
                        :src="'http://admin.qianlixunta.com'+agreement_join_shuffle.head_portrait"
                        fit="fit"></el-image>
                      </router-link>
                    </el-col>
                    <el-col :span="10" class="zuijiapipei01_right_info">
                      <router-link :to="'other_user/'+agreement_join_shuffle.id">
                        <h5 style="color:#000;">{{agreement_join_shuffle.nickname}}</h5>
                      </router-link>
                      <p>{{agreement_join_shuffle.introduce_oneself}}</p>
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
      // 文章分类
      article_category: {},
      // 文章列表
      article_list: [],
      // 指定分类下添加下划线
      cur: '0',
      // 文章总条数
      total: 1,
      // 右侧最佳匹配
      agreement_join_shuffle: {
        head_portrait: '/upload/admin/article/thumbnail/20200807/nv.png'
      }
    }
  },
  created() {
    this.$emit('header', true);

    // 右侧最佳匹配
    this.$axios.get('/wpapi/register/agreement_join_shuffle', {
      params: {}
    })
    .then((result) => {
      console.log(result);
      this.agreement_join_shuffle = result.data;
    })
    .catch((error) => {
      console.log(error);
    });
    
    // 默认文章列表
    this.$axios.get('/wpapi/article/category_list_page', {params: {cate_id:1,page:1}})
    .then((result) => {
      console.log(result);
      this.article_list = result.data.data;
      this.total = result.data.total;
    })
    .catch((error) => {
      console.log(error);
    });

    // 文章分类列表
    this.$axios.get('/wpapi/article/category', {params:{}})
    .then((result) => {
      console.log(result);
      this.article_category = result.data;
    })
    .catch((error) => {
      console.log(error);
    });
  },
  methods: {
    click_change_list(id,index) {
      // console.log(id);
      // console.log(index);
      this.cur = index;
      this.$axios.get('/wpapi/article/category_list_page', {params:{cate_id: id,page:1}})
      .then((result) => {
        console.log(result);
        this.article_list = result.data.data;
        this.total = result.data.total;
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
  }
  .article_article_top {
    margin-top: 24px;
  }
  .previous_article_box,
  .previous_article_title {
    margin-right: 13px;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .zuijiapipei01_right_info p {
    font-size: 12px;
    margin: 0 0 9px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
  .tag_all span {
    margin: 3px;
  }
  .cut_off_line {
    margin: 10px auto 0;
  }
  .nav_title_cut_off {
    padding: 23px 0 0 59px;
  }
  .nav_title_cut_off .el-row .el-col a {
    color: rgba(35,41,52,1);
    padding-bottom: 6px;
  }
  .nav_title_cut_off .el-row .el-col a.nav_this {
    border-bottom: 4px solid rgba(230,73,128,1);
  }
  .article_list_item {
    padding: 24px 59px;
    border-bottom: 1px solid rgba(103,103,103,0.15);
  }
  .article_list_item:last-child {
    border: 0;
  }
  .article_list_item_title h4 {
    margin: 0;
    font-size: 20px;
  }
  .article_list_item_title h4 a {
    color: #000;
  }
  .article_list_item_right {
    margin-left: 34px;
  }
  .article_list_item_right p {
    font-size: 14px;
  }
  .page_list {
    margin: 36px 0 46px;
  }
  .show_article_desc01 {
    /* overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; */
  }
  .show_article_desc02 {
    margin: 0 0 10px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    text-overflow: -o-ellipsis-lastline;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .num_of_likes_views01 a {
    margin: 0 5px;
  }
</style>