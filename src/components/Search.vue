<template>
  <div class="login_container login_container01">
    <el-container>
      <el-main>
        <div class="x-wrap">
          <div class="search_function_block">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input3" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="全部会员">
                <el-option label="全部会员" value="1"></el-option>
                <el-option label="在线会员" value="2"></el-option>
              </el-select>
              <el-button slot="append" @click="btn_select_friend">搜索</el-button>
            </el-input>
          </div>
          <!-- 条件筛选 -->
          <div class="condition_screening_search">
            <el-row class="search_title_external_bottom">
              <!-- <el-col :span="2">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    智能排序<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>顺序</el-dropdown-item>
                    <el-dropdown-item>倒序</el-dropdown-item>
                    <el-dropdown-item>时间</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col> -->
              <el-col :span="2">基本搜索</el-col>
            </el-row>
            <el-row>
              <el-form ref="search_form" :model="search_form" label-width="55px"
              :inline="true">
                <el-form-item label="年龄：">
                  <el-select v-model="age" placeholder="请选择" style="width: 90px;">
                    <el-option label="20-30" value="20-30"></el-option>
                    <el-option label="30-40" value="30-40"></el-option>
                    <el-option label="40-50" value="40-50"></el-option>
                  </el-select>
                  岁
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.education" placeholder="学历" style="width: 120px;">
                    <el-option label="博士" value="博士"></el-option>
                    <el-option label="硕士" value="硕士"></el-option>
                    <el-option label="本科" value="本科"></el-option>
                    <el-option label="大专" value="大专"></el-option>
                    <el-option label="高职" value="高职"></el-option>
                    <el-option label="其他" value="其他"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.marital_status" placeholder="婚姻状况" style="width: 110px;">
                    <el-option label="未婚" value="未婚"></el-option>
                    <el-option label="离异" value="离异"></el-option>
                    <el-option label="丧偶" value="丧偶"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.workplace" placeholder="现居住地" style="width: 110px;">
                    <el-option label="上海" value="上海"></el-option>
                    <el-option label="北京" value="北京"></el-option>
                    <el-option label="武汉" value="武汉"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="">
                  <el-input v-model="search_form.height" placeholder="身高" style="width: 90px;"></el-input>
                  cm
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.has_picture" placeholder="有照片" style="width: 90px;">
                    <el-option label="有" value="有"></el-option>
                    <el-option label="无" value="无"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.car_type" placeholder="购车情况" style="width: 110px;">
                    <el-option label="有车" value="有车"></el-option>
                    <el-option label="无车" value="无车"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item>
                  <el-select v-model="search_form.house_type" placeholder="购房情况" style="width: 110px;">
                    <el-option label="有" value="1"></el-option>
                    <el-option label="无" value="0"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="">
                  <el-select v-model="search_form.monthly_salary" placeholder="月收入" style="width: 135px;">
                    <el-option label="3000-4000" value="3000-4000"></el-option>
                    <el-option label="4000-5000" value="4000-5000"></el-option>
                    <el-option label="5000-8000" value="5000-8000"></el-option>
                    <el-option label="10000-20000" value="10000-20000"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="click_search">确定</el-button>
                </el-form-item>
              </el-form>
            </el-row>
          </div>
          <!-- 搜索结果列表 -->
          <div class="search_result_list">
            <el-row>
              <el-col :span="6" v-for="item in find_friend" :key="item.id">
                <div class="item_list_info">
                  <div class="item_left_img">

                    <div class="item_left_img_big_img">
                      <router-link :to="'/other_user/'+item.id">
                        <img :src="'http://admin.qianlixunta.com'+item.head_portrait" alt="">
                      </router-link>
                    </div>
                    <div class="item_left_img_small_img">
                      <router-link :to="'/other_user/'+item.id">
                        <img v-for="(item01, index) in item.life_imgs ? JSON.parse(item.life_imgs).slice(0, 2) : []" :key="index" :src="'http://admin.qianlixunta.com'+item01" alt="" />
                      </router-link>
                    </div>

                  </div>
                  <div class="item_right_info">
                    <h4>
                      <router-link :to="'/other_user/'+item.id">
                      {{item.nickname}}
                      </router-link>
                    </h4>
                    <div class="person_info">
                      <span>{{new Date().getFullYear() - item.users_year}}岁</span>
                      <span>{{item.height}}cm</span>
                      <span>{{item.education}}</span>
                      <span>月薪{{item.monthly_salary}}</span>
                    </div>
                    <p>{{item.introduce_oneself}}</p>
                    <div class="hi_email_like">
                      <router-link :to="'/other_user/'+item.id">
                        <img src="../assets/dazhaohu01.png" alt="">
                      </router-link>
                      <router-link :to="'/other_user/'+item.id">
                        <img src="../assets/youxiang01.png" alt="">
                      </router-link>
                      <router-link :to="'/other_user/'+item.id">
                        <img src="../assets/aixin01.png" alt="">
                      </router-link>
                    </div>
                  </div>
                </div>
              </el-col>
              <!-- <el-col :span="6">
                <div class="item_list_info">
                  <div class="item_left_img">
                    <img src="../assets/user_img01.png" alt="">
                  </div>
                  <div class="item_right_info">
                    <h4>林俊杰</h4>
                    <div class="person_info">
                      <span>18岁</span>
                      <span>157cm</span>
                      <span>本科</span>
                      <span>月薪1k</span>
                    </div>
                    <p>我是一个多变的女孩我是一个多变的女孩我是一个多变的女孩我是一个多变的</p>
                    <div class="hi_email_like">
                      <a href="javascript:;">
                        <img src="../assets/dazhaohu01.png" alt="">
                      </a>
                      <a href="javascript:;">
                        <img src="../assets/dazhaohu01.png" alt="">
                      </a>
                      <a href="javascript:;">
                        <img src="../assets/dazhaohu01.png" alt="">
                      </a>
                    </div>
                  </div>
                </div>
              </el-col> -->
            </el-row>
          </div>
          <!-- 页码 -->
          <el-pagination
            class="page_num"
            @current-change="handleCurrentChange"
            :current-page="current_page" :page-sizes="[10,20,30,50]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input3: '',
      select: '',
      search_form: {
        page: '1',
        age_low: '',
        age_height: '',
        education: '',
        marital_status: '',
        car_type: '',
        monthly_salary: '',
        height: '',
        workplace: '',
        house_type: '',
        users_id: localStorage.getItem('users_id') ? localStorage.getItem('users_id') : ''
      },
      // 基本搜索年龄参数
      age: '',
      // 全部会员信息
      find_friend: [],
      // 总条数
      total: 0,
      // 每页条数
      per_page: 0,
      // 判断当前是否是搜索页 0 不是 1 是 2 顶部搜索
      search_flag: 0,
      // 当前页码
      current_page: 1
    }
  },
  created() {
    this.$emit('header', true);

    // 查看用户信息
    this.$axios.post('/wpapi/me/select_users_info', {
      users_id: localStorage.getItem('users_id'),
      token: localStorage.getItem('token'),
      bei_users_id: 56
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
    
    this.$axios.post('/wpapi/member/find_friend', { page: 1, users_id: localStorage.getItem('users_id') ? localStorage.getItem('users_id') : '' })
    .then((result) => {
      console.log(result);
      this.find_friend = result.data.data;
      this.total = result.data.total;
      this.per_page = result.data.per_page;
    })
    .catch((error) => {
      console.log(error);
    });
  },
  methods: {
    btn_select_friend() {
      this.search_flag = 2;
      this.$axios.post('/wpapi/member/btn_select_friend', {
        param: this.input3,
        page: 1,
        users_id: localStorage.getItem('users_id') ? localStorage.getItem('users_id') : ''
      })
      .then((result) => {
        console.log(result);
        this.find_friend = result.data.data;
        this.total = result.data.total;
        this.current_page = 1;
      })
      .catch((error) => {
        console.log(error);
      });
    },
    handleCurrentChange(val) {
      if (!this.search_flag) {
        this.$axios.post('/wpapi/member/find_friend', { page: val, users_id: localStorage.getItem('users_id') ? localStorage.getItem('users_id') : '' })
        .then((result) => {
          this.find_friend = result.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
      } else if (this.search_flag == 1) {
        this.search_form.page = val;
        this.$axios.post('/wpapi/member/select_friend', this.search_form)
        .then((result) => {
          console.log(result);
          this.find_friend = result.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
      } else if (this.search_flag == 2) {
        this.search_form.page = val;
        this.$axios.post('/wpapi/member/btn_select_friend', {
        param: this.input3,
        page: val,
        users_id: localStorage.getItem('users_id') ? localStorage.getItem('users_id') : ''
      })
      .then((result) => {
        console.log(result);
        this.find_friend = result.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
      }
    },
    // 搜索按钮
    click_search() {
      console.log(this.search_form);
      this.search_flag = 1;
      if (this.age) {
        this.search_form.age_low = this.age.split('-')[0];
        this.search_form.age_height = this.age.split('-')[1];
      }
      this.$axios.post('/wpapi/member/select_friend', this.search_form)
      .then((result) => {
        console.log(result);
        this.find_friend = result.data.data;
        this.total = result.data.total;
        this.current_page = 1;
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
  .search_function_block {
    width: 65%;
    margin: 24px auto 26px;
  }
  .search_function_block .el-select {
    width: 120px;
  }
  .condition_screening_search {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    padding: 21px 33px;
  }
  .search_title_external_bottom {
    margin-bottom: 31px;
  }
  .item_list_info {
    background-color: #fff;
    margin: 20px;
    display: flex;
    height: 210px;
  }
  .item_left_img {
    display: flex;
    flex-direction: column;
    width: 48%;
  }
  .item_left_img img {
    width: 100%;
    height: 100%;
  }
  .item_left_img_big_img {
    flex: 1.8;
  }
  .item_left_img_big_img a img {
    height: 135px;
  }
  .item_left_img_small_img {
    flex: 1;
  }
  .item_left_img_small_img img {
    width: 50%;
  }
  .item_right_info {
    width: 52%;
    padding: 8px;
    box-shadow: 1px 2px 2px 0px rgba(0,0,0,0.16);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .item_right_info h4,
  .item_right_info p {
    margin: 0;
  }
  .item_right_info h4 {
    font-size: 22px;
    margin-bottom: 10px;
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .item_right_info h4 a {
    color: #000;
  }
  .person_info {
    margin-bottom: 10px;
  }
  .person_info span {
    font-size: 14px;
    margin-right: 6px;
  }
  .item_right_info p {
    font-size: 12px;
    text-indent: 2em;
    color: rgba(152,152,152,1);
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .hi_email_like {
    display: flex;
    justify-content: space-around;
  }
  .page_num {
    text-align: center;
    margin: 10px auto 90px;
  }
</style>