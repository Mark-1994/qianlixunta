<template>
  <div class="login_container">
    <el-container>
      <el-main>
        <div class="x-wrap">
          <div class="search_function_block">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="全部会员">
                <el-option label="会员01" value="1"></el-option>
                <el-option label="会员02" value="2"></el-option>
                <el-option label="会员03" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <!-- 条件筛选 -->
          <div class="condition_screening_search">
            <el-row class="search_title_external_bottom">
              <el-col :span="2">
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
              </el-col>
              <el-col :span="2">基本搜索</el-col>
            </el-row>
            <el-row>
              <el-form ref="search_form" :model="search_form" label-width="60px"
              :inline="true">
                <el-form-item label="年龄：">
                  <el-col :span="5">
                    <el-select v-model="search_form.region_start" placeholder="请选择">
                      <el-option label="10" value="shanghai"></el-option>
                      <el-option label="20" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                  <el-col class="line" :span="2" style="text-align: center;">-</el-col>
                  <el-col :span="5">
                    <el-select v-model="search_form.region_end" placeholder="请选择">
                      <el-option label="20" value="shanghai"></el-option>
                      <el-option label="30" value="beijing"></el-option>
                    </el-select>
                  </el-col>
                  <el-col class="line" :span="2" style="text-align: center;">岁</el-col>
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.education" placeholder="学历">
                    <el-option label="本科" value="shanghai"></el-option>
                    <el-option label="研究生" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.marital_status" placeholder="婚姻状况">
                    <el-option label="未婚" value="shanghai"></el-option>
                    <el-option label="离异" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.now_adress" placeholder="现居住地">
                    <el-option label="" value="shanghai"></el-option>
                    <el-option label="" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.now_height" placeholder="身高">
                    <el-option label="" value="shanghai"></el-option>
                    <el-option label="" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.has_picture" placeholder="有照片">
                    <el-option label="" value="shanghai"></el-option>
                    <el-option label="" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.shop_cars" placeholder="购车情况">
                    <el-option label="" value="shanghai"></el-option>
                    <el-option label="" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="">
                  <el-select v-model="search_form.month_income" placeholder="月收入">
                    <el-option label="" value="shanghai"></el-option>
                    <el-option label="" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">查询</el-button>
                </el-form-item>
              </el-form>
            </el-row>
          </div>
          <!-- 搜索结果列表 -->
          <div class="search_result_list">
            <el-row>
              <el-col :span="6">
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
              </el-col>
              <el-col :span="6">
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
              </el-col>
              <el-col :span="6">
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
              </el-col>
              <el-col :span="6">
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
              </el-col>
            </el-row>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '寻找TA',
      input3: '',
      select: '',
      search_form: {}
    }
  }
}
</script>

<style scoped>
  .search_function_block {
    width: 65%;
    margin: 59px auto 26px;
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
  }
  .item_left_img img {
    width: 115px;
    height: 100%;
  }
  .item_right_info {
    padding: 8px;
    box-shadow: 1px 2px 2px 0px rgba(0,0,0,0.16);
  }
  .item_right_info h4,
  .item_right_info p {
    margin: 0;
  }
  .item_right_info h4 {
    font-size: 22px;
    margin-bottom: 10px;
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
  }
  .hi_email_like {
    display: flex;
    justify-content: space-around;
  }
</style>