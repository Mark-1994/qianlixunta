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
                    <img src="../assets/username01.png" alt="" />
                    <p>我的资料：80%</p>
                  </div>
                  <div class="name_phone_info">
                    <h4>林俊杰</h4>
                    <div class="three_images_status">
                      <img src="../assets/shouji01.png" alt="">
                      <img src="../assets/shimingrenzheng01.png" alt="">
                      <img src="../assets/shimingrenzheng03.png" alt="">
                    </div>
                    <a href="javascript:;"><el-badge is-dot>完善个人信息</el-badge></a>
                  </div>
                </div>
              </el-col>
              <el-col :span="9">
                <div class="mine_info_middle">
                  <ul>
                    <li>
                      <span class="flag_num">0</span>
                      <span class="flag_name">未读消息</span>
                    </li>
                    <li class="shuikanguowo01">
                      <span class="flag_num"><el-badge is-dot class="item">0</el-badge></span>
                      <span class="flag_name">谁看过我</span>
                    </li>
                    <li>
                      <span class="flag_num">0</span>
                      <span class="flag_name">新增关注</span>
                    </li>
                  </ul>
                </div>
              </el-col>
              <el-col :span="9">
                <div class="mine_info_right">
                  <div class="min_info_right_top">
                    <img src="../assets/username01.png" alt="">
                  </div>
                  <div class="min_info_right_bottom">
                    <ul>
                      <li>
                        <span class="other_num">0</span>
                        <span class="other_name">关注我的</span>
                      </li>
                      <li>
                        <span class="other_num">0</span>
                        <span class="other_name">我看过的</span>
                      </li>
                      <li>
                        <span class="other_num">0</span>
                        <span class="other_name">好友</span>
                      </li>
                      <li>
                        <span class="other_num">0</span>
                        <span class="other_name">赞过我</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="mine_info_form">
            <p class="information_progress">
              资料完善度 <span>{{percentage}}%</span>
              <el-progress :percentage="percentage" :color="customColor"></el-progress>
            </p>
            <el-tabs>
              <el-tab-pane label="完善资料">
                <el-tabs tab-position="left">
                  <el-tab-pane label="基本资料">
                    <p class="wanshanziliao01">完善资料</p>
                    <p class="wanshanziliaoshuoming01">为保证资料真实有效，灰色字体信息不得随意修改</p>
                    <el-form ref="mine_data_form" :model="mine_data_form" label-width="80px">
                      <el-form-item label="昵称">
                        <el-input v-model="mine_data_form.nickname" style="width: 220px;" placeholder="请输入"></el-input>
                      </el-form-item>
                      <el-form-item label="性别">
                        <el-select v-model="mine_data_form.improve_sex" placeholder="请选择">
                          <el-option
                            v-for="item in sex_options"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="出生日期">
                        <el-date-picker
                          v-model="mine_data_form.birth_day"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="生肖">
                        <el-select v-model="mine_data_form.the_chinese_zodiac" placeholder="请选择">
                          <el-option
                            v-for="item in animal_options"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="星座">
                        <el-select v-model="mine_data_form.constellation" placeholder="请选择">
                          <el-option
                            v-for="item in constellation_options"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="姓名">
                        <el-input v-model="mine_data_form.name" style="width: 220px;"></el-input>
                      </el-form-item>
                      <el-form-item label="婚姻状况">
                        <el-select v-model="mine_data_form.imp_marital_status" placeholder="请选择">
                          <el-option
                            v-for="item in marriage_options"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="身份证号">
                        <el-input v-model="mine_data_form.id_card" style="width: 220px;"></el-input>
                      </el-form-item>
                      <p class="height_education_monthly_pay">身高、学历、月薪的信息不可随意修改，一个月内只允许修改一次。</p>
                      <el-form-item label="身高">
                        <el-input v-model="mine_data_form.imp_height" style="width: 100px;"></el-input>&nbsp;cm
                      </el-form-item>
                      <el-form-item label="学历">
                        <el-select v-model="mine_data_form.imp_education" placeholder="请选择">
                          <el-option
                            v-for="item in education_options"
                            :key="item.id"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="月薪">
                        <el-input v-model="mine_data_form.imp_monthly_salary" style="width: 100px;"></el-input>&nbsp;元
                      </el-form-item>
                      <p class="danger_info_edit">以下信息，希望您依照实际情况谨慎修改。</p>
                      <el-form-item label="所在地区">
                        <el-input v-model="mine_data_form.address" style="width: 220px;"></el-input>
                      </el-form-item>
                      <el-form-item label="有无子女">
                        <el-input v-model="mine_data_form.is_children" style="width: 220px;"></el-input>
                      </el-form-item>
                      <el-form-item label="血型">
                        <el-input v-model="mine_data_form.blood_type" style="width: 220px;"></el-input>
                      </el-form-item>
                      <el-form-item label="购车情况">
                        <el-input v-model="mine_data_form.car_type" style="width: 220px;"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="save_info">保存</el-button>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane label="择偶条件">
                    <p>您的择偶条件</p>
                    <el-row>
                      <el-col :span="6">性别：女</el-col>
                      <el-col :span="6">年龄：20-30岁</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6">所在地：湖北武汉</el-col>
                      <el-col :span="6">身高：155-170CM</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6">民族：不限</el-col>
                      <el-col :span="6">学历：不限</el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6">婚姻状况：未婚</el-col>
                    </el-row>
                    <p>设置择偶条件</p>
                    <el-form ref="set_choose_form" :model="set_choose_form" label-width="80px">
                      <el-form-item label="年龄">
                        <el-select v-model="beforeage" placeholder="请选择">
                          <el-option
                            v-for="item in beforeage_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        -
                        <el-select v-model="afterage" placeholder="请选择">
                          <el-option
                            v-for="item in afterage_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="身高">
                        <el-select v-model="beforeheight" placeholder="请选择">
                          <el-option
                            v-for="item in beforeheight_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        -
                        <el-select v-model="afterheight" placeholder="请选择">
                          <el-option
                            v-for="item in afterheight_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="学历">
                        <el-select v-model="seteducation" placeholder="请选择">
                          <el-option v-for="item in seteducation_options" :key="item.id" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="婚姻状况">
                        <el-select v-model="marriage_status" placeholder="请选择">
                          <el-option v-for="item in marriage_status_options" :key="item.id" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="民族">
                        <el-select v-model="nation_type" placeholder="请选择">
                          <el-option v-for="item in nation_type_options" :key="item.id" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="所在地区">
                        <el-cascader
                        :options="nav_adress"
                        :props="{ checkStrictly: true }"
                        clearable></el-cascader>
                      </el-form-item>
                      <template>
                        <el-row>
                          <el-radio v-model="set_choose_condition" label="1">以上择偶条件仅供参考，接收中意我的异性给我写信</el-radio>
                        </el-row>
                        <el-row>
                          <el-radio v-model="set_choose_condition" label="2"> 只想收到符合我择友条件的异性来信，不满足的不能给我写信</el-radio>
                        </el-row>
                      </template>
                      <el-form-item>
                        <el-button type="primary">保存</el-button>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane label="内心独白">
                    <el-row>
                      <el-col>内心独白</el-col>
                    </el-row>
                    <el-form ref="soliloquy_form" :model="soliloquy_form" label-width="">
                      <el-form-item label="">
                        <el-input type="textarea" maxlength="1000" v-model="neixindubai" show-word-limit></el-input>
                      </el-form-item>
                      <ul>
                        <li>温馨提示：</li>
                        <li>1、内心独白中请勿出现QQ、微信、电话号码以及网址、广告、色情或其他不健康的内容</li>
                        <li>2、点击保存后，在我们未审核的24小时内不能再次修改，请认真检查。</li>
                      </ul>
                      <el-form-item>
                        <el-button type="primary">保存</el-button>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane label="我的照片">
                    <el-row>
                      <el-col>我的照片</el-col>
                    </el-row>
                    <el-row>
                      <el-col>我的头像</el-col>
                    </el-row>
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false" :on-success="handleAvatarSuccess">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <el-divider></el-divider>
                    <el-row>
                      <el-col :span="6">
                        <img src="../assets/example01.png" alt="">
                      </el-col>
                      <el-col :span="6">
                        <img src="../assets/example01.png" alt="">
                      </el-col>
                      <el-col :span="6">
                        <img src="../assets/example01.png" alt="">
                      </el-col>
                      <el-col :span="6">
                        <img src="../assets/example01.png" alt="">
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-button type="primary">上传照片</el-button>
                    </el-row>
                  </el-tab-pane>
                  <el-tab-pane label="详细资料">
                    <el-collapse v-model="activeNames">
                      <el-collapse-item title="工作与教育经历" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                      </el-collapse-item>
                      <el-collapse-item title="生活方式" name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                      </el-collapse-item>
                      <el-collapse-item title="婚姻观念" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                      </el-collapse-item>
                      <el-collapse-item title="经济实力" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                      </el-collapse-item>
                      <el-collapse-item title="外貌体型" name="5">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                      </el-collapse-item>
                      <el-collapse-item title="兴趣爱好" name="6">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                      </el-collapse-item>
                    </el-collapse>
                  </el-tab-pane>
                </el-tabs>
              </el-tab-pane>
              <el-tab-pane label="我的账号">我的账号</el-tab-pane>
              <el-tab-pane label="实名认证">实名认证</el-tab-pane>
            </el-tabs>
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
      cityInfo: [
        { id: 1, name: '北京' },
        { id: 2, name: '上海' },
        { id: 3, name: '广州' },
        { id: 4, name: '武汉' },
        { id: 5, name: '成都' },
        { id: 6, name: '天津' },
        { id: 7, name: '重庆' }
      ],
      mine_data_form: {
        nickname: '',
        improve_sex: '',
        birth_day: '',
        the_chinese_zodiac: '',
        constellation: '',
        name: '',
        imp_marital_status: '',
        id_card: '',
        imp_height: '',
        imp_education: '',
        imp_monthly_salary: '',
        address: '',
        is_children: '',
        blood_type: '',
        car_type: ''
      },
      customColor: '#409eff',
      percentage: 20,
      sex: '',
      sex_options: [
        { value: '1', label: '男', id: 1},
        { value: '0', label: '女', id: 2}
      ],
      animal: '',
      animal_options: [
        { value: '鼠', label: '鼠', id: 1},
        { value: '牛', label: '牛', id: 2},
        { value: '虎', label: '虎', id: 3},
        { value: '兔', label: '兔', id: 4},
        { value: '龙', label: '龙', id: 5},
        { value: '蛇', label: '蛇', id: 6},
        { value: '马', label: '马', id: 7},
        { value: '羊', label: '羊', id: 8},
        { value: '猴', label: '猴', id: 9},
        { value: '鸡', label: '鸡', id: 10},
        { value: '狗', label: '狗', id: 11},
        { value: '猪', label: '猪', id: 12}
      ],
      constellation: '',
      constellation_options: [
        { value: '白羊座', label: '白羊座', id: 1},
        { value: '金牛座', label: '金牛座', id: 2},
        { value: '双子座', label: '双子座', id: 3},
        { value: '巨蟹座', label: '巨蟹座', id: 4},
        { value: '狮子座', label: '狮子座', id: 5},
        { value: '处女座', label: '处女座', id: 6},
        { value: '天秤座', label: '天秤座', id: 7},
        { value: '天蝎座', label: '天蝎座', id: 8},
        { value: '射手座', label: '射手座', id: 9},
        { value: '摩羯座', label: '摩羯座', id: 10},
        { value: '水瓶座', label: '水瓶座', id: 11},
        { value: '双鱼座', label: '双鱼座', id: 12}
      ],
      marriage: '',
      marriage_options: [
        { value: '未婚', label: '未婚', id: 1},
        { value: '离异', label: '离异', id: 2},
        { value: '丧偶', label: '丧偶', id: 3}
      ],
      education: '',
      education_options: [
        { value: '博士研究生', label: '博士研究生', id: 1},
        { value: '硕士研究生', label: '硕士研究生', id: 2},
        { value: '本科', label: '本科', id: 3},
        { value: '大专', label: '大专', id: 4},
        { value: '高职', label: '高职', id: 5},
        { value: '其他', label: '其他', id: 6}
      ],
      // 设置择偶条件表单
      set_choose_form: {},
      beforeage: '',
      beforeage_options: [
        { value: '20', label: '20', id: 1},
        { value: '30', label: '30', id: 2}
      ],
      afterage: '',
      afterage_options: [
        { value: '20', label: '20', id: 1},
        { value: '30', label: '30', id: 2}
      ],
      beforeheight: '',
      beforeheight_options: [
        { value: '160', label: '160', id: 1},
        { value: '170', label: '170', id: 2}
      ],
      afterheight: '',
      afterheight_options: [
        { value: '170', label: '170', id: 1},
        { value: '180', label: '180', id: 2}
      ],
      seteducation: '',
      seteducation_options: [
        { value: '本科', label: '本科', id: 1},
        { value: '研究生', label: '研究生', id: 2}
      ],
      marriage_status: '',
      marriage_status_options: [
        { value: '未婚', label: '未婚', id: 1},
        { value: '离异', label: '离异', id: 2}
      ],
      nation_type: '',
      nation_type_options: [
        { value: '汉族', label: '汉族', id: 1},
        { value: '傣族', label: '傣族', id: 2}
      ],
      nav_adress: [{
        value: '湖北省',
        label: '湖北省',
        children: [{
          value: '武汉市',
          label: '武汉市',
          children: [{
            value: '武昌区',
            label: '武昌区',
          }]
        }]
      }],
      set_choose_condition: '1',
      soliloquy_form: {},
      neixindubai: '',
      imageUrl: '',
      activeNames: ['1']
    }
  },
  created: function() {
    if (!(window.localStorage.getItem('token') && window.localStorage.getItem('users_id'))) {
      this.$message.error('您还没有登录，请您先登陆！');
      this.$router.push('/login');
    }


  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    // 基本资料保存按钮
    save_info() {
      if (this.mine_data_form.birth_day) {
        this.mine_data_form.birth_day = new Date(this.mine_data_form.birth_day).getFullYear() + '.' + new Date(this.mine_data_form.birth_day).getMonth() + '.' + new Date(this.mine_data_form.birth_day).getDate();
      }
      console.log(this.mine_data_form);
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
  .mine_info_middle ul li .flag_name {
    font-size: 24px;
  }
  .min_info_right_top {
    text-align: center;
  }
  .min_info_right_top img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
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
  .mine_info_form {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 1px 2px 2px 0px rgba(141,141,141,0.3);
    margin-top: 14px;
    padding: 30px 38px 53px;
    position: relative;
  }
  .information_progress {
    position: absolute;
    right: 38px;
    top: 30px;
    margin: 0;
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
  .wanshanziliao01,
  .wanshanziliaoshuoming01,
  .height_education_monthly_pay,
  .danger_info_edit {
    margin-left: 80px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .shuikanguowo01,
  .mine_info_middle ul li.shuikanguowo01 .flag_num {
    color: rgba(230,73,128,1);
  }
</style>