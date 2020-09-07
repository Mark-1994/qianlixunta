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
                    <h4>{{come_news.nickname}}<img src="../assets/zuanshi03.png" alt="" /><span>v3</span></h4>
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
                      <span class="flag_num">{{come_news.no_read_message}}</span>
                      <span class="flag_name">未读消息</span>
                    </li>
                    <li class="shuikanguowo01">
                      <span class="flag_num"><el-badge is-dot class="item">{{come_news.who_seed}}</el-badge></span>
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
                <el-tabs tab-position="left" @tab-click="handleClick">
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
                        <el-select v-model="set_choose_form.age_low" placeholder="请选择" style="width: 90px;">
                          <el-option
                            v-for="item in beforeage_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        -
                        <el-select v-model="set_choose_form.age_height" placeholder="请选择" style="width: 90px;">
                          <el-option
                            v-for="item in afterage_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="身高">
                        <el-select v-model="set_choose_form.stature_low" placeholder="请选择" style="width: 90px;">
                          <el-option
                            v-for="item in beforeheight_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        -
                        <el-select v-model="set_choose_form.stature_height" placeholder="请选择" style="width: 90px;">
                          <el-option
                            v-for="item in afterheight_options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="学历">
                        <el-select v-model="set_choose_form.education" placeholder="请选择" style="width: 120px;">
                          <el-option v-for="item in seteducation_options" :key="item.id" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="婚姻状况">
                        <el-select v-model="set_choose_form.marital_status" placeholder="请选择" style="width: 120px;">
                          <el-option v-for="item in marriage_status_options" :key="item.id" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="民族">
                        <el-select v-model="set_choose_form.nation" placeholder="请选择" style="width: 120px;">
                          <el-option v-for="item in nation_type_options" :key="item.id" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="所在地区">
                        <el-cascader v-model="set_choose_form.address" :options="nav_adress"
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
                        <el-button type="primary" @click="save_object">保存</el-button>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane label="内心独白">
                    <el-row>
                      <el-col>内心独白</el-col>
                    </el-row>
                    <el-form ref="soliloquy_form" :model="soliloquy_form" label-width="">
                      <el-form-item label="">
                        <el-input type="textarea" maxlength="1000" placeholder="请输入内容" :autosize="{ minRows: 6, maxRows: 8}" v-model="neixindubai" show-word-limit></el-input>
                      </el-form-item>
                      <ul>
                        <li>温馨提示：</li>
                        <li>1、内心独白中请勿出现QQ、微信、电话号码以及网址、广告、色情或其他不健康的内容</li>
                        <li>2、点击保存后，在我们未审核的24小时内不能再次修改，请认真检查。</li>
                      </ul>
                      <el-form-item>
                        <el-button type="primary" @click="save_neixindubai">保存</el-button>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane label="我的照片" name="3">
                    <el-row>
                      <el-col>我的照片</el-col>
                    </el-row>
                    <el-row>
                      <el-col>我的头像</el-col>
                    </el-row>
                    <el-upload
                      class="avatar-uploader"
                      action="http://admin.qianlixunta.com/wpapi/register/up_head_portrait" :show-file-list="false" :on-success="handleAvatarSuccess"
                      :on-error="handleAvatarError" :data="{token:token}">
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
                        <el-form :inline="true" ref="job_form" :model="job_form" label-width="130px">
                          <el-form-item label="职业职位">
                            <el-input v-model="job_form.job"></el-input>
                          </el-form-item>
                          <el-form-item label="公司行业">
                            <el-input v-model="job_form.company_industry"></el-input>
                          </el-form-item>
                          <el-form-item label="公司类型">
                            <el-input v-model="job_form.company_type"></el-input>
                          </el-form-item>
                          <el-form-item label="调动工作可能性">
                            <el-input v-model="job_form.move_job"></el-input>
                          </el-form-item>
                          <el-form-item label="工作状态">
                            <el-input v-model="job_form.work_status"></el-input>
                          </el-form-item>
                          <el-form-item label="海外工作可能性">
                            <el-input v-model="job_form.overseas_work"></el-input>
                          </el-form-item>
                          <el-form-item label="福利待遇">
                            <el-input v-model="job_form.fringe_benefits"></el-input>
                          </el-form-item>
                          <el-form-item label="事业与家庭">
                            <el-input v-model="job_form.work_home"></el-input>
                          </el-form-item>
                          <el-form-item label="毕业学校">
                            <el-input v-model="job_form.graduate_school"></el-input>
                          </el-form-item>
                          <el-form-item label="专业类型">
                            <el-input v-model="job_form.major_type"></el-input>
                          </el-form-item>
                          <el-form-item label="语言能力">
                            <el-checkbox-group v-model="checkList">
                              <el-checkbox label="英语"></el-checkbox>
                              <el-checkbox label="日语"></el-checkbox>
                              <el-checkbox label="法语"></el-checkbox>
                              <el-checkbox label="德语"></el-checkbox>
                              <el-checkbox label="西班牙语"></el-checkbox>
                              <el-checkbox label="泰语"></el-checkbox>
                              <el-checkbox label="俄语"></el-checkbox>
                              <el-checkbox label="韩语"></el-checkbox>
                              <el-checkbox label="意大利语"></el-checkbox>
                              <el-checkbox label="其他"></el-checkbox>
                            </el-checkbox-group>
                          </el-form-item>
                        </el-form>
                        <el-button type="primary" @click="save_job_form">保存</el-button>
                      </el-collapse-item>
                      <el-collapse-item title="生活方式" name="2">
                        <el-form ref="life_form" :model="life_form" label-width="130px" :inline="true">
                          <el-form-item label="吸烟">
                            <el-input v-model="life_form.smoke"></el-input>
                          </el-form-item>
                          <el-form-item label="饮酒">
                            <el-input v-model="life_form.drink_wine"></el-input>
                          </el-form-item>
                          <el-form-item label="锻炼习惯">
                            <el-input v-model="life_form.exercise_habits"></el-input>
                          </el-form-item>
                          <el-form-item label="逛街习惯">
                            <el-input v-model="life_form.shopping_habits"></el-input>
                          </el-form-item>
                          <el-form-item label="饮食习惯">
                            <el-input v-model="life_form.eating_habits"></el-input>
                          </el-form-item>
                          <el-form-item label="宗教信仰">
                            <el-input v-model="life_form.religious_belief"></el-input>
                          </el-form-item>
                          <el-form-item label="作息时间">
                            <el-input v-model="life_form.time_table"></el-input>
                          </el-form-item>
                          <el-form-item label="交际圈子">
                            <el-input v-model="life_form.social_circle"></el-input>
                          </el-form-item>
                          <el-form-item label="最大消费">
                            <el-input v-model="life_form.maximum_consumption"></el-input>
                          </el-form-item>
                          <el-form-item label="家务水平">
                            <el-input v-model="life_form.housework_level"></el-input>
                          </el-form-item>
                          <el-form-item label="家务分配">
                            <el-input v-model="life_form.household_distribution"></el-input>
                          </el-form-item>
                          <el-form-item label="宠物-喜欢程度">
                            <el-input v-model="life_form.liking_degree"></el-input>
                          </el-form-item>
                          <el-form-item label="宠物-养宠情况">
                            <el-input v-model="life_form.pet_rearing"></el-input>
                          </el-form-item>
                        </el-form>
                        <el-button type="primary" @click="save_life_form">保存</el-button>
                      </el-collapse-item>
                      <el-collapse-item title="婚姻观念" name="3">
                        <el-form ref="marriage_form" :model="marriage_form" label-width="150px" :inline="true">
                          <el-form-item label="籍贯">
                            <el-input v-model="marriage_form.native_place"></el-input>
                          </el-form-item>
                          <el-form-item label="国籍">
                            <el-input v-model="marriage_form.nationality"></el-input>
                          </el-form-item>
                          <el-form-item label="性格">
                            <el-input v-model="marriage_form.personality"></el-input>
                          </el-form-item>
                          <el-form-item label="幽默感">
                            <el-input v-model="marriage_form.sense_of_humor"></el-input>
                          </el-form-item>
                          <el-form-item label="脾气">
                            <el-input v-model="marriage_form.bad_temper"></el-input>
                          </el-form-item>
                          <el-form-item label="是否投入看真实情况">
                            <el-input v-model="marriage_form.treat_feelings"></el-input>
                          </el-form-item>
                          <el-form-item label="是否愿意要孩子">
                            <el-input v-model="marriage_form.about_children"></el-input>
                          </el-form-item>
                          <el-form-item label="结婚">
                            <el-input v-model="marriage_form.get_married"></el-input>
                          </el-form-item>
                          <el-form-item label="结婚">
                            <el-input v-model="marriage_form.get_married"></el-input>
                          </el-form-item>
                          <el-form-item label="长时间异地恋">
                            <el-input v-model="marriage_form.long_distance_love"></el-input>
                          </el-form-item>
                          <el-form-item label="理想婚姻">
                            <el-input v-model="marriage_form.ideal_marriage"></el-input>
                          </el-form-item>
                          <el-form-item label="赡养老人">
                            <el-input v-model="marriage_form.parents_live_together"></el-input>
                          </el-form-item>
                          <el-form-item label="是否是独生子女">
                            <el-input v-model="marriage_form.home_ranking"></el-input>
                          </el-form-item>
                          <el-form-item label="兄妹还是姐弟">
                            <el-input v-model="marriage_form.brothers_and_sisters"></el-input>
                          </el-form-item>
                          <el-form-item label="父母健康情况">
                            <el-input v-model="marriage_form.parents"></el-input>
                          </el-form-item>
                          <el-form-item label="父亲工作">
                            <el-input v-model="marriage_form.father_job"></el-input>
                          </el-form-item>
                          <el-form-item label="母亲工作">
                            <el-input v-model="marriage_form.mother_job"></el-input>
                          </el-form-item>
                          <el-form-item label="父母是否有退休金">
                            <el-input v-model="marriage_form.parent_economy"></el-input>
                          </el-form-item>
                          <el-form-item label="父母是否有医疗保险">
                            <el-input v-model="marriage_form.parents_medical_insurance"></el-input>
                          </el-form-item>
                        </el-form>
                        <el-button type="primary" @click="save_marriage_form">保存</el-button>
                      </el-collapse-item>
                      <el-collapse-item title="经济实力" name="4">
                        <el-form ref="economic_form" :model="economic_form" label-width="130px" :inline="true">
                          <el-form-item label="投资理财">
                            <el-input v-model="economic_form.investment_and_financing"></el-input>
                          </el-form-item>
                          <el-form-item label="外债贷款">
                            <el-input v-model="economic_form.foreign_debt_loan"></el-input>
                          </el-form-item>
                          <el-form-item label="经济观念">
                            <el-input v-model="economic_form.economic_concept"></el-input>
                          </el-form-item>
                        </el-form>
                        <el-button type="primary" @click="save_economic_form">保存</el-button>
                      </el-collapse-item>
                      <el-collapse-item title="外貌体型" name="5">
                        <el-form ref="appearance_form" :model="appearance_form" label-width="130px" :inline="true">
                          <el-form-item label="体重">
                            <el-input v-model="appearance_form.weight"></el-input>
                          </el-form-item>
                          <el-form-item label="体型">
                            <el-input v-model="appearance_form.shape"></el-input>
                          </el-form-item>
                          <el-form-item label="脸型">
                            <el-input v-model="appearance_form.face_shape"></el-input>
                          </el-form-item>
                          <el-form-item label="眼睛">
                            <el-input v-model="appearance_form.eye"></el-input>
                          </el-form-item>
                          <el-form-item label="头发">
                            <el-input v-model="appearance_form.hair"></el-input>
                          </el-form-item>
                          <el-form-item label="皮肤">
                            <el-input v-model="appearance_form.skin"></el-input>
                          </el-form-item>
                          <el-form-item label="肌肉">
                            <el-input v-model="appearance_form.muscle"></el-input>
                          </el-form-item>
                          <el-form-item label="穿衣风格">
                            <el-input v-model="appearance_form.dressing_style"></el-input>
                          </el-form-item>
                        </el-form>
                        <el-button type="primary" @click="save_appearance_form">保存</el-button>
                      </el-collapse-item>
                      <el-collapse-item title="兴趣爱好" name="6">
                        <el-form ref="hobby_form" :model="hobby_form" label-width="130px" :inline="true">
                          <el-form-item label="旅游">
                            <el-input v-model="hobby_form.travel_play"></el-input>
                          </el-form-item>
                          <el-form-item label="饮食">
                            <el-input v-model="hobby_form.food"></el-input>
                          </el-form-item>
                          <el-form-item label="书籍">
                            <el-input v-model="hobby_form.book"></el-input>
                          </el-form-item>
                          <el-form-item label="电影">
                            <el-input v-model="hobby_form.film"></el-input>
                          </el-form-item>
                          <el-form-item label="节目">
                            <el-input v-model="hobby_form.program"></el-input>
                          </el-form-item>
                          <el-form-item label="娱乐休闲">
                            <el-input v-model="hobby_form.entertainment_leisure"></el-input>
                          </el-form-item>
                          <el-form-item label="业余爱好">
                            <el-input v-model="hobby_form.avocation"></el-input>
                          </el-form-item>
                        </el-form>
                        <el-button type="primary" @click="save_hobby_form">保存</el-button>
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
        // nickname: '',
        // improve_sex: '',
        // birth_day: '',
        // the_chinese_zodiac: '',
        // constellation: '',
        // name: '',
        // imp_marital_status: '',
        // id_card: '',
        // imp_height: '',
        // imp_education: '',
        // imp_monthly_salary: '',
        // address: '',
        // is_children: '',
        // blood_type: '',
        // car_type: ''
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
      set_choose_form: {
        // age_low: '',
        // age_height: '',
        // stature_low: '',
        // stature_height: '',
        // education: '',
        // marital_status: '',
        // nation: '',
        // address: ''
      },
      beforeage_options: [
        { value: '20', label: '20', id: 1},
        { value: '30', label: '30', id: 2}
      ],
      afterage_options: [
        { value: '40', label: '40', id: 1},
        { value: '50', label: '50', id: 2}
      ],
      beforeheight_options: [
        { value: '160', label: '160', id: 1},
        { value: '170', label: '170', id: 2}
      ],
      afterheight_options: [
        { value: '180', label: '180', id: 1},
        { value: '190', label: '190', id: 2}
      ],
      seteducation_options: [
        { value: '博士研究生', label: '博士研究生', id: 1},
        { value: '硕士研究生', label: '硕士研究生', id: 2},
        { value: '本科', label: '本科', id: 3},
        { value: '大专', label: '大专', id: 4},
        { value: '高职', label: '高职', id: 5},
        { value: '其他', label: '其他', id: 6}
      ],
      marriage_status_options: [
        { value: '未婚', label: '未婚', id: 1},
        { value: '离异', label: '离异', id: 2},
        { value: '丧偶', label: '丧偶', id: 3}
      ],
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
      activeNames: ['1'],
      // 工作与教育经历表单
      job_form: {
        // job: '',
        // company_industry: '',
        // company_type: '',
        // move_job: '',
        // work_status: '',
        // overseas_work: '',
        // fringe_benefits: '',
        // work_home: '',
        // graduate_school: '',
        // major_type: '',
        // language: ''
      },
      checkList: [],
      token: localStorage.getItem('token'),
      // 生活方式表单
      life_form: {
        // smoke: '',
        // drink_wine: '',
        // exercise_habits: '',
        // shopping_habits: '',
        // eating_habits: '',
        // religious_belief: '',
        // time_table: '',
        // social_circle: '',
        // maximum_consumption: '',
        // housework_level: '',
        // household_distribution: '',
        // liking_degree: '',
        // pet_rearing: ''
      },
      // 婚姻观念表单
      marriage_form: {
        // native_place: '',
        // nationality: '',
        // personality: '',
        // sense_of_humor: '',
        // bad_temper: '',
        // treat_feelings: '',
        // about_children: '',
        // get_married: '',
        // long_distance_love: '',
        // ideal_marriage: '',
        // parents_live_together: '',
        // home_ranking: '',
        // brothers_and_sisters: '',
        // parents: '',
        // father_job: '',
        // mother_job: '',
        // parent_economy: '',
        // parents_medical_insurance: ''
      },
      // 经济实力表单
      economic_form: {
        // investment_and_financing: '',
        // foreign_debt_loan: '',
        // economic_concept: ''
      },
      // 外貌体型表单
      appearance_form: {
        // weight: '',
        // shape: '',
        // face_shape: '',
        // eye: '',
        // hair: '',
        // skin: '',
        // muscle: '',
        // dressing_style: ''
      },
      // 兴趣爱好表单
      hobby_form: {
        // travel_play: '',
        // food: '',
        // book: '',
        // film: '',
        // program: '',
        // entertainment_leisure: '',
        // avocation: ''
      },
      // 个人信息数据
      come_news: {
        head_portrait: '/upload/admin/article/thumbnail/20200807/nv.png'
      }
    }
  },
  created: function() {
    this.$emit('header', true);

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

  },
  methods: {
    handleClick(tab, event) {
      // 判断当前栏目是否是我的照片
      if (tab.name == 3) {
        this.$axios.post('/wpapi/register/picture_init', {
          users_id: localStorage.getItem('users_id')
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
    handleAvatarSuccess(res, file) {
      console.log(res,file);
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$message.success('上传成功！');
    },
    handleAvatarError(res, file) {
      this.$message.error('上传失败！');
    },
    // 基本资料保存按钮
    save_info() {
      if (this.mine_data_form.birth_day) {
        this.mine_data_form.birth_day = new Date(this.mine_data_form.birth_day).getFullYear() + '.' + new Date(this.mine_data_form.birth_day).getMonth() + '.' + new Date(this.mine_data_form.birth_day).getDate();
      }
      console.log(this.mine_data_form);
      this.mine_data_form.users_id = localStorage.getItem('users_id');
      this.mine_data_form.token = localStorage.getItem('token');
      this.$axios.post('/wpapi/me/improve_users', this.mine_data_form)
      .then((result) => {
        console.log(result);
        if (result.status !== '200') return this.$message.error('保存失败！');
        this.$message.success('保存成功！');
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 保存择偶条件
    save_object() {
      if (this.set_choose_form.address) {
        let address = '';
        for (let i = 0; i < this.set_choose_form.address.length; i++) {
          address+=this.set_choose_form.address[i];
        }
        this.set_choose_form.address = address;
      }
      console.log(this.set_choose_form);
      this.set_choose_form.token = localStorage.getItem('token');
      this.set_choose_form.users_id = localStorage.getItem('users_id');
      this.$axios.post('/wpapi/me/mate_selection', this.set_choose_form)
      .then((result) => {
        console.log(result);
        if (result.status !== '200') return this.$message.error('保存失败！');
        this.$message.success('保存成功！');
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 保存内心独白
    save_neixindubai() {
      console.log('保存内心独白');
    },
    // 保存详细资料-工作与教育经历
    save_job_form() {
      this.job_form.token = localStorage.getItem('token');
      this.job_form.users_id = localStorage.getItem('users_id');
      if (this.checkList.length) {
        let language_list = this.checkList;
        this.job_form.language = language_list.join();
      }
      this.$axios.post('/wpapi/me/job_form', this.job_form)
      .then((result) => {
        if (result.status !== '200') return this.$message.error('保存失败！');
        this.$message.success('保存成功！');
      })
      .catch((error) => {
        console.log(error);
      })
    },
    // 保存详细资料-生活方式
    save_life_form() {
      console.log(this.life_form);
      this.life_form.token = localStorage.getItem('token');
      this.life_form.users_id = localStorage.getItem('users_id');
      this.$axios.post('/wpapi/me/life_form', this.life_form)
      .then((result) => {
        console.log(result);
        if (result.status !== '200') return this.$message.error('保存失败！');
        this.$message.success('保存成功！');
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 保存详情资料-婚姻观念
    save_marriage_form() {
      this.marriage_form.token = localStorage.getItem('token');
      this.marriage_form.users_id = localStorage.getItem('users_id');
      this.$axios.post('/wpapi/me/marriage_form', this.marriage_form)
      .then((result) => {
        if (result.status !== '200') return this.$message.error('保存失败！');
        this.$message.success('保存成功！');
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 保存详情资料-经济实力
    save_economic_form() {
      this.economic_form.token = localStorage.getItem('token');
      this.economic_form.users_id = localStorage.getItem('users_id');
      this.$axios.post('/wpapi/me/economic_form', this.economic_form)
      .then((result) => {
        if (result.status !== '200') return this.$message.error('保存失败！');
        this.$message.success('保存成功！');
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 保存详情资料-外貌体型
    save_appearance_form() {
      this.appearance_form.token = localStorage.getItem('token');
      this.appearance_form.users_id = localStorage.getItem('users_id');
      this.$axios.post('/wpapi/me/appearance_form', this.appearance_form)
      .then((result) => {
        console.log(result);
        if(result.status !== '200') return this.$message.error('保存失败！');
        this.$message.success('保存成功！');
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 保存详情资料-兴趣爱好
    save_hobby_form() {
      this.hobby_form.token = localStorage.getItem('token');
      this.hobby_form.users_id = localStorage.getItem('users_id');
      this.$axios.post('/wpapi/me/hobby_form', this.hobby_form)
      .then((result) => {
        if (result.status !== '200') return this.$message.error('保存失败！');
        this.$message.success('保存成功！');
      })
      .catch((error) => {
        console.log(error);
      });
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
    filter: blur(1px);
    transform: translateX(-10%);
  }
  .min_info_right_top img:nth-child(2) {
    filter: blur(1px);
    transform: translateX(-50%);
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
  .name_phone_info h4 img {
    vertical-align: bottom;
    margin: 0 2px 0 5px;
  }
  .name_phone_info h4 span {
    color: rgba(250,176,5,1);
    font-size: 12px;
    vertical-align: bottom;
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