<template>
  <div class="login_container login_container01">
    <el-container>
      
      <el-main>
        <div class="mine_info_show_change">
          <div class="mine_info">
            <el-row class="mine_info_items">
              <el-col :span="6">
                <div class="mine_info_left">
                  <div class="mine_img_info">
                    <img :src="'http://admin.qianlixunta.com'+come_news.head_portrait" alt="" />
                    <p>我的资料：80%</p>
                  </div>
                  <div class="name_phone_info">
                    <h4>
                      <span style="display:inline-block;max-width:95px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:18px;color:#000;">{{come_news.nickname}}</span>
                      <img src="../assets/zuanshi03.png" alt="" />
                      <span>v3</span>
                    </h4>
                    <div class="three_images_status">
                      <img src="../assets/shouji01.png" alt="">
                      <img src="../assets/faxiaoxi01.png" alt="">
                      <img src="../assets/shimingrenzheng01.png" alt="">
                    </div>
                    <router-link to="basicinformation">
                      <el-badge is-dot>完善个人信息</el-badge>
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="9">
                <div class="mine_info_middle">
                  <ul>
                    <li>
                      <span class="flag_num">{{come_news.no_read_message}}</span>
                      <span class="flag_name">未读消息</span>
                    </li>
                    <li class="shuikanguowo01">
                      <span class="flag_num"><el-badge is-dot>{{come_news.who_seed}}</el-badge></span>
                      <span class="flag_name">谁看过我</span>
                    </li>
                    <li>
                      <span class="flag_num">{{come_news.add_bind}}</span>
                      <span class="flag_name">新增关注</span>
                    </li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="9">
                <div class="mine_info_right">
                  <div class="min_info_right_top">
                    <img v-for="(item, index) in come_news.img_arr" :key="index" :src="'http://admin.qianlixunta.com'+item.head_portrait" alt="">
                  </div>
                  <div class="min_info_right_bottom">
                    <ul>
                      <li>
                        <span class="other_num">{{come_news.bind_num}}</span>
                        <span class="other_name">关注我的</span>
                      </li>
                      <li>
                        <span class="other_num">{{come_news.seed_num}}</span>
                        <span class="other_name">我看过的</span>
                      </li>
                      <li>
                        <span class="other_num">{{come_news.friend_num}}</span>
                        <span class="other_name">好友</span>
                      </li>
                      <li>
                        <span class="other_num">{{come_news.fabulous_num}}</span>
                        <span class="other_name">赞过的</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="mine_message_list">
            <el-row>
              <el-col :span="17">

                <!-- 无数据的情况 -->
                <el-card v-if="!circle_list.length">
                  <p style="text-align: center;">无数据</p>
                </el-card>

                <el-card class="box-card" style="border-radius: 30px;margin-bottom: 23px;" v-for="(item, index) in circle_list" :key="index">

                  <div class="item_msg_box">

                  <div slot="header" class="clearfix header_title_info_show">
                    <el-avatar :size="60" :src="'http://admin.qianlixunta.com'+item.head_portrait"></el-avatar>
                    <div class="item_name_time">
                      <span class="item_name_info">{{item.nickname}}</span>
                      <span class="month_day_item">{{item.create_time}}</span>
                    </div>
                    <el-button v-if="item.users_id == users_id" style="margin-left: auto;" type="text" icon="el-icon-close" @click="del_item(item.send_circle_id)"></el-button>
                  </div>
                  <div class="text item item_fabuneirong">
                    <p>{{item.content}}</p>
                    <!-- <img src="../assets/fabu01.png" alt=""> -->
                    <a :href="'http://admin.qianlixunta.com'+item.send_img" target="_blank">
                      <img v-if="item.send_img" :src="'http://admin.qianlixunta.com'+item.send_img" alt="">
                    </a>
                  </div>
                  <div class="dianzan_pinglun_num">
                    <el-link><i class="iconfont-qianlixunta icon-qianlixuntadianzan"></i> {{item.zan_num}}</el-link>
                    <el-link><i class="iconfont-qianlixunta icon-qianlixuntapinglun"></i> {{item.message_num}}</el-link>
                  </div>
                  <div class="bottom clearfix click_three_items">
                    <el-button type="text" class="button" @click="send_fabulous(item.send_circle_id)"><i class="iconfont-qianlixunta icon-qianlixuntadianzan"></i> 点赞</el-button>

                    <el-popover
                      placement="bottom"
                      width="400"
                      trigger="click"
                      @show="clearInput">
                      
                      <div class="msg_enter_box">
                        <el-form @submit.native.prevent v-if="true">
                          <el-form-item>
                            <el-input type="textarea" :rows="enter_box_row" placeholder="评论" v-model="item_msg_comment"
                            :autosize="{ minRows: 1, maxRows: 2}"></el-input>
                          </el-form-item>
                          <el-form-item style="text-align: right;">
                            <el-button @click="send_comment(item.send_circle_id)">发表</el-button>
                          </el-form-item>
                        </el-form>
                      </div>

                      <el-button type="text" class="button" slot="reference"><i class="iconfont-qianlixunta icon-qianlixuntapinglun"></i> 评论</el-button>
                      <!-- <el-button type="text" class="button" @click="comment(item.send_circle_id, item.users_id, index)"><i class="iconfont-qianlixunta icon-qianlixuntapinglun"></i> 评论</el-button> -->
                    </el-popover>

                    <el-button type="text" class="button"><i class="iconfont-qianlixunta icon-qianlixuntaguanzhu"></i> 关注</el-button>
                  </div>

                  <div class="msg_comment_list">
                    <ul class="comment_list_one">
                      <li v-for="item01 in item.comment_info" :key="item01.id">
                        <div class="huifu_first">
                          <div class="left_fa_users_head_portrait">
                            <img :src="'http://admin.qianlixunta.com' + item01.fa_users_head_portrait" alt="">
                          </div>
                          <div class="right_content">
                            <div class="right_nickname">
                              <router-link to="/index">{{item01.fa_nickname ? item01.fa_nickname : '匿名'}}</router-link>&nbsp;:
                              {{item01.content}}
                            </div>
                            <div class="right_time">
                              <span>{{item01.create_time}}</span>

                              <el-popover
                                placement="bottom"
                                width="400"
                                trigger="click"
                                @show="clearInput">

                                <div class="msg_enter_box">
                                  <el-form @submit.native.prevent>
                                    <el-form-item>
                                      <el-input type="textarea" :rows="enter_box_row" placeholder="评论" v-model="item_msg_comment"
                                      :autosize="{ minRows: 1, maxRows: 2}"></el-input>
                                    </el-form-item>
                                    <el-form-item style="text-align: right;">
                                      <el-button @click="reply_content(item01.id)">发表</el-button>
                                    </el-form-item>
                                  </el-form>
                                </div>

                                <!-- <a href="javascript:;" @click="reply_content(item.send_circle_id, item01.id)">回复</a> -->
                                <a href="javascript:;" slot="reference">回复</a>
                              </el-popover>

                            </div>
                          </div>
                        </div>

                        <!-- <div class="huifu_second" v-for="item02 in item01.comment_info_by" :key="item02.id">
                          <div class="huifu_second_left_headimg">
                            <img src="http://admin.qianlixunta.com/upload/admin/article/thumbnail/20200807/nv.png" alt="">
                          </div>
                          <div class="huifu_second_right_info">
                            <div class="huifu_second_nickname">
                              <a href="javascript:;">{{item02.fa_nickname ? item02.fa_nickname : '匿名'}}</a>&nbsp;回复<a href="javascript:;">{{item01.fa_nickname}}</a>&nbsp;:
                              {{item02.content}}
                            </div>
                            <div class="huifu_second_time">
                              <span>{{item02.create_time}}</span>
                              <a href="javascript:;">回复</a>
                            </div>
                          </div>
                        </div> -->

                      </li>
                    </ul>
                  </div>

                  <!-- <div class="msg_enter_box">
                    <el-form @submit.native.prevent v-if="false">
                      <el-form-item>
                        <el-input type="textarea" :rows="enter_box_row" placeholder="评论"></el-input>
                      </el-form-item>
                      <el-form-item style="text-align: right;">
                        <el-button @click="send_comment()">发表</el-button>
                      </el-form-item>
                    </el-form>
                  </div> -->

                  </div>

                </el-card>
              </el-col>
              <el-col :span="7">
                <div class="woyaofabu_right">
                  <div class="fabuxinxi_items">
                    <div class="fabuxinxi_items_top">
                      <div class="fabuxinxi_items_top_top">
                        <img src="../assets/fabu02.png" alt="" />
                        <h4>发布信息</h4>
                      </div>
                      <div class="fabuxinxi_items_top_middle">
                        <el-input
                          type="textarea"
                          :autosize="{ minRows: 4, maxRows: 6}"
                          placeholder="请输入内容"
                          v-model="fabuxinxi_text">
                        </el-input>
                      </div>

                      <!-- 图片上传 -->
                      <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                      <div class="fabuxinxi_items_top_bottom">
                        <div class="two_btn_text_send" style="width:77%;">
                          <span>
                            <el-popover
                              placement="bottom-start"
                              width="250"
                              trigger="click"
                              class="emoBox">

                              <div class="emotionList">
                                <a href="javascript:;" @click="getEmo(index)" v-for="(item, index) in faceList" :key="index" class="emotionItem">{{item}}</a>
                              </div>

                              <img slot="reference" src="../assets/meirong01.png" alt="">
                            </el-popover>
                            <!-- <img src="../assets/meirong01.png" alt=""> -->
                          </span>
                          <el-upload
                            class="upload-demo01"
                            style="width:84%;"
                            action="http://admin.qianlixunta.com/wpapi/member/send_image"
                            :on-preview="handlePreview"
                            :on-change="updata_img_change"
                            :on-success="updata_img_success"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            list-type="picture"
                            :data="{token:token}">
                            <span>
                              <img src="../assets/tupian01.png" alt="">
                            </span>
                          </el-upload>
                        </div>
                        <div class="fabu_anniu">
                          <a href="javascript:;" @click="send_circle">发布</a>
                        </div>
                      </div>
                    </div>
                    <div class="fabuxinxi_items_bottom">
                      <div class="woguanzhude_title">
                        <img src="../assets/guanzhu01.png" alt="" />
                        <h4>我关注的</h4>
                      </div>
                      <ul class="woguanzhude_list">
                        <li>
                          <img src="../assets/username01.png" alt="">
                          <span>林俊杰</span>
                        </li>
                        <li>
                          <img src="../assets/username01.png" alt="">
                          <span>林俊杰</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-main>
      
    </el-container>

  </div>
</template>

<script>
import emoji from '@/assets/emoji.json'

export default {
  mounted() {
    for (let i in emoji) {
      this.faceList.push(emoji[i].char);
    }
  },
  data() {
    return {
      // 评论框
      item_msg_comment: '',
      // 上传的文件列表
      fileList: [],
      activeName: 'first',
      // 发布信息的文本
      fabuxinxi_text: '',
      // 个人信息数据
      come_news: {
        head_portrait: '/upload/admin/article/thumbnail/20200807/nv.png'
      },
      // 朋友圈列表数据初始化
      circle_list: {},
      // 登陆后保存的 token
      token: localStorage.getItem('token'),
      // 表情列表
      faceList: [],
      // 回复框的行数
      enter_box_row: 1,
      // users_id
      users_id: localStorage.getItem('users_id')
    }
  },
  created: function() {
    this.$emit('header', true);

    // 判断用户是否登录，如果没有登录就跳转到登录页面
    if (!(window.localStorage.getItem('token') && window.localStorage.getItem('users_id'))) {
      this.$message.error('您还没有登录，请您先登陆！');
      this.$router.push('/login');
    }

    // 个人信息初始化
    this.$axios.post('/wpapi/member/come_news', {users_id: localStorage.getItem('users_id')})
    .then((result) => {
      console.log(result);
      this.come_news = result.data;
    })
    .catch((error) => {
      console.log(error);
    });

    // 朋友圈列表数据初始化
    this.$axios.post('/wpapi/me/circle_list', {token:localStorage.getItem('token'),users_id: localStorage.getItem('users_id')})
    .then((result) => {
      console.log(result);
      this.circle_list = result.data;
      // console.log(JSON.parse(result.data[0].send_img)[0]);
      this.circle_list.forEach(element => {
        if (element.send_img) {
          element.send_img = JSON.parse(element.send_img)[0];
          // console.log(element.send_img);
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });

  },
  methods: {
    // 上传图片文件列表移除文件时的钩子
    handleRemove() {
      console.log('上传图片文件列表移除文件时的钩子');
    },
    // 点击上传图片文件列表中已上传的文件时的钩子
    handlePreview() {
      console.log('点击上传图片文件列表中已上传的文件时的钩子');
    },
    // 上传图片成功的回调
    updata_img_success(response, file, fileList) {
      console.log(response, file, fileList);
      fileList.forEach((item, index) => {
        this.fileList[index] = item.response.path;
      });
      console.log(this.fileList);
    },
    // 上传图片文件状态改变
    updata_img_change(file, fileList) {
      // fileList.forEach(item => {
      //   if (item.response) {
      //     console.log(item);
      //   }
      // });
      // console.log(fileList);
    },
    // 发朋友圈
    send_circle() {
      if (!this.fabuxinxi_text) return false;
      console.log(this.fabuxinxi_text);
      console.log(this.fileList);
      this.$axios.post('/wpapi/me/send_circle', {
        users_id: localStorage.getItem('users_id'),
        token: localStorage.getItem('token'),
        content: this.fabuxinxi_text,
        send_img: this.fileList.length ? this.fileList : ''
      })
      .then((result) => {
        console.log(result);
        if (result.status !== '200') return this.$message.error('发布失败！');
        this.$message.success('发布成功！');
        this.fabuxinxi_text = '';
        this.fileList = [];

        // 发布成功更新朋友圈列表数据
        this.$axios.post('/wpapi/me/circle_list', {token:localStorage.getItem('token'),users_id: localStorage.getItem('users_id')})
        .then((result) => {
          console.log(result);
          this.circle_list = result.data;
          // console.log(JSON.parse(result.data[0].send_img)[0]);
          this.circle_list.forEach(element => {
            if (element.send_img) {
              element.send_img = JSON.parse(element.send_img)[0];
              // console.log(element.send_img);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });

      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 点赞
    send_fabulous(send_circle_id) {
      this.$axios.post('/wpapi/me/send_fabulous', {
        users_id: localStorage.getItem('users_id'),
        token: localStorage.getItem('token'),
        zan_users_id: localStorage.getItem('users_id'),
        send_circle_id: send_circle_id
      })
      .then((result) => {
        console.log(result);
        if (result.status !== '200') return this.$message.error('点赞失败！');
        this.$message.success(result.msg);

        // 更新朋友圈列表数据
        this.$axios.post('/wpapi/me/circle_list', {token:localStorage.getItem('token'),users_id: localStorage.getItem('users_id')})
        .then((result) => {
          this.circle_list = result.data;
          this.circle_list.forEach(element => {
            if (element.send_img) {
              element.send_img = JSON.parse(element.send_img)[0];
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });

      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 评论
    comment(send_circle_id, pl_users_id,index,item) {
      console.log(send_circle_id,pl_users_id,index);

      // this.$axios.post('/wpapi/me/send_comment', {
      //   users_id: localStorage.getItem('users_id'),
      //   token: localStorage.getItem('token'),
      //   fa_users_id: localStorage.getItem('users_id'),
      //   pl_users_id: pl_users_id,
      //   content: '编辑内容',
      //   send_circle_id: send_circle_id
      // })
      // .then((result) => {
      //   console.log(result);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
    },
    // 点击表情列表
    getEmo(index) {
      console.log(this.faceList[index]);
      this.fabuxinxi_text = this.fabuxinxi_text + this.faceList[index];
    },
    // 回复消息
    reply_content(send_comment_id) {
      if (!this.item_msg_comment) return false;
      this.$axios.post('/wpapi/me/by_send_comment', {
        users_id: localStorage.getItem('users_id'),
        token: localStorage.getItem('token'),
        send_comment_id: send_comment_id,
        by_content: this.item_msg_comment
      })
      .then((result) => {
        console.log(result);
        
        if (result.status != '200') return this.$message.error(result.msg);

        // 更新朋友圈列表数据
        this.$axios.post('/wpapi/me/circle_list', {token:localStorage.getItem('token'),users_id: localStorage.getItem('users_id')})
        .then((result) => {
          this.circle_list = result.data;
          this.circle_list.forEach(element => {
            if (element.send_img) {
              element.send_img = JSON.parse(element.send_img)[0];
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });

        this.item_msg_comment = '';
        this.$message.success(result.msg);

      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 删除自己的朋友圈
    del_item(send_circle_id) {
      console.log(send_circle_id);
      this.$confirm('此操作将删除该朋友圈，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
      .then(() => {
        this.$axios.post('/wpapi/member/send_image', {
          send_circle_id: send_circle_id
        })
        .then((result) => {
          if (result !== '200') return this.$message.error('删除失败');

          // 更新朋友圈列表数据
          this.$axios.post('/wpapi/me/circle_list', {token:localStorage.getItem('token'),users_id: localStorage.getItem('users_id')})
          .then((result) => {
            this.circle_list = result.data;
            this.circle_list.forEach(element => {
              if (element.send_img) {
                element.send_img = JSON.parse(element.send_img)[0];
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });

          this.$message({
            type: 'success',
            message: '删除成功！'
          })
        })
        .catch((error) => {
          this.$message({
            type: 'error',
            message: '删除失败！'
          })
        });
      })
      .catch(() => {
        this.$message.info('已取消删除');
      });
    },
    // 发表评论
    send_comment(send_circle_id) {
      if (!this.item_msg_comment) return false;
      this.$axios.post('/wpapi/me/send_comment', {
        users_id: localStorage.getItem('users_id'),
        token: localStorage.getItem('token'),
        content: this.item_msg_comment,
        send_circle_id: send_circle_id
      })
      .then((result) => {
        console.log(result);
        if (result.status != '200') return this.$message.error(result.msg);

        // 更新朋友圈列表数据
        this.$axios.post('/wpapi/me/circle_list', {token:localStorage.getItem('token'),users_id: localStorage.getItem('users_id')})
        .then((result) => {
          this.circle_list = result.data;
          this.circle_list.forEach(element => {
            if (element.send_img) {
              element.send_img = JSON.parse(element.send_img)[0];
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });

        this.item_msg_comment = '';
        this.$message.success(result.msg);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 清空输入框
    clearInput() {
      this.item_msg_comment = '';
    }
  }
}
</script>

<style scoped>
  .mine_info_show_change {
    width: 1180px;
    margin: 69px auto 148px;
  }
  .mine_info {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 27px;
  }
  .mine_info_items {
    display: flex;
    align-items: center;
  }
  .mine_info_left {
    display: flex;
  }
  .shuikanguowo01 {
    color: rgba(230,73,128,1);
  }
  .mine_info_middle ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .mine_info_middle ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mine_info_middle ul li .flag_num {
    font-size: 60px;
    color: rgba(234,234,234,1);
  }
  .mine_info_middle ul li.shuikanguowo01 .flag_num {
    color: rgba(230,73,128,1);
  }
  .mine_info_middle ul li .flag_name {
    font-size: 24px;
  }
  .min_info_right_top {
    text-align: center;
    height: 70px;
    position: relative;
  }
  .min_info_right_top img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
  }
  .min_info_right_top img:nth-child(1) {
    transform: translateX(-10%);
    filter: blur(1px);
  }
  .min_info_right_top img:nth-child(2) {
    transform: translateX(-50%);
    filter: blur(1px);
  }
  .min_info_right_top img:nth-child(3) {
    transform: translateX(-90%);
  }
  .min_info_right_bottom ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .min_info_right_bottom ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mine_img_info img {
    border-radius: 50%;
    padding: 10px;
    width: 130px;
    height: 130px;
  }
  .mine_img_info p {
    border-radius: 12px;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.19);
    padding: 5px 14px;
    margin: 0;
    position: relative;
  }
  .mine_img_info p::before {
    content: '';
    position: absolute;
    border: 1px solid #eee;
    background-color: #fff;
    width: 10px;
    height: 10px;
    left: 50%;
    top: -6px;
    transform: translateX(-50%) rotate(45deg);
  }
  .mine_img_info p::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 9px;
    background-color: #fff;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .name_phone_info {
    text-align: center;
  }
  .name_phone_info h4 {
    text-align: center;
    font-size: 18px;
  }
  .name_phone_info h4 span {
    color: rgba(250,176,5,1);
    font-size: 12px;
    vertical-align: bottom;
  }
  .name_phone_info h4 img {
    vertical-align: bottom;
    margin: 0 2px 0 5px;
  }
  .name_phone_info a {
    color: rgba(230,73,128,1);
    margin-top: 20px;
    display: block;
  }
  .three_images_status {
    text-align: center;
  }
  .three_images_status img {
    margin: 0 6px;
    vertical-align: bottom;
  }

  .mine_message_list {
    margin-top: 26px;
  }
  .item_fabuneirong img {
    max-width: 100%;
    max-height: 600px;
  }
  .header_title_info_show {
    display: flex;
  }
  .item_name_time {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    margin-left: 15px;
  }
  .month_day_item {
    color: rgba(152,152,152,1);
  }
  .item_name_info {
    font-size: 18px;
  }
  .click_three_items {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid rgba(112,112,112,0.36);
  }
  .fabuxinxi_items {
    margin-left: 20px;
  }
  .fabuxinxi_items_top {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 24px 9px;
    margin-bottom: 25px;
  }
  .fabuxinxi_items_top_top {
    display: flex;
    margin: 0 0 10px;
  }
  .fabuxinxi_items_top_top h4 {
    margin: 0 0 0 10px;
    line-height: 40px;
  }
  .fabuxinxi_items_top_top img {
    width: 40px;
    height: 40px;
  }
  .fabuxinxi_items_top_bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .two_btn_text_send span {
    margin: 0 5px;
  }
  .fabu_anniu a {
    background-color: rgba(255,72,72,1);
    color: #fff;
    border-radius: 13px;
    padding: 3px 17px;
  }
  .fabuxinxi_items_bottom {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 10px 29px;
  }
  .woguanzhude_title {
    display: flex;
    margin-bottom: 10px;
  }
  .woguanzhude_title img {
    width: 37px;
    height: 36px;
  }
  .woguanzhude_title h4 {
    margin: 0 0 0 10px;
    line-height: 36px;
  }
  .woguanzhude_list li img {
    width: 59px;
    height: 59px;
  }
  .woguanzhude_list li span {
    margin-left: 10px;
  }
  .dianzan_pinglun_num {
    margin: 10px;
  }
  .dianzan_pinglun_num a {
    margin: 0 5px;
  }
  .icon-qianlixuntadianzan {
    color: rgba(82, 106, 241, 1);
  }
  .icon-qianlixuntapinglun {
    color: #fab005;
  }
  .icon-qianlixuntaguanzhu {
    color: #e64980;
  }
  .button {
    color: #000;
  }
  .upload-demo01 {
    display: inline-block;
  }
  .left_fa_users_head_portrait img,
  .huifu_second_left_headimg img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
  .huifu_first:after {
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .huifu_first {
    *zoom: 1;
  }
  .huifu_first {
    padding: 10px 0;
  }
  .huifu_second {
    padding: 10px 0 10px 54px;
  }
  .comment_list_one li {
    padding: 10px 0;
  }
  .comment_list_one li .left_fa_users_head_portrait {
    float: left;
  }
  .comment_list_one li .right_content {
    float: left;
    margin-left: 10px;
  }
  .right_time {
    margin-top: 2px;
  }
  .right_time span {
    margin-right: 10px;
  }
  .huifu_second_left_headimg {
    float: left;
  }
  .huifu_second_right_info {
    float: left;
  }
  .huifu_second:after {
    content: '.';
    display: block;
    visibility: hidden;
    clear: both;
    height: 0;
  }
  .huifu_second {
    *zoom: 1;
  }
  .huifu_second_right_info {
    margin-left: 10px;
  }
  .huifu_second_time {
    margin-top: 3px;
  }
  .huifu_second_time span {
    margin-right: 10px;
  }
</style>