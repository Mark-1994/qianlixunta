<template>
  <div class="login_container login_container01">
    <el-container>
      
      <el-main>
        <div class="register_form">
          <h3 class="h3_logo">
            <img src="../assets/logo01.png" alt="">
          </h3>
          <div class="line_9"></div>
          <div class="line_3"></div>
          <p class="weight_info">请多花点时间如实填写</p>
          <el-form ref="free_register_form" :model="free_register_form" label-width="80px" class="form_user_info" :rules="registerRules">
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="free_register_form.sex">
                <el-radio label="1">
                  <img width="20px" height="20px" src="../assets/nansheng01.png" alt="">
                  男生
                </el-radio>
                <el-radio label="2">
                  <img width="20px" height="20px" src="../assets/nvsheng01.png" alt="">
                  女生
                </el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="生日" prop="birthday">
              <el-date-picker
                v-model="free_register_form.birthday"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </el-form-item>
            <!-- <el-form-item label="生日">
              <el-select v-model="birthday_year" placeholder="请选择" class="register_form_birthday">
                <el-option label="1991" value="1991"></el-option>
                <el-option label="1992" value="1992"></el-option>
              </el-select>
              年
              <el-select v-model="birthday_month" placeholder="请选择" class="register_form_birthday">
                <el-option label="01" value="01"></el-option>
                <el-option label="02" value="02"></el-option>
              </el-select>
              月
              <el-select v-model="birthday_day" placeholder="请选择" class="register_form_birthday">
                <el-option label="01" value="01"></el-option>
                <el-option label="02" value="02"></el-option>
              </el-select>
              日
            </el-form-item> -->
            <el-form-item label="婚姻状况" prop="marital_status">
              <el-radio-group v-model="free_register_form.marital_status">
                <el-radio label="未婚">
                  <img src="@/assets/weihun01.png" alt="">
                  未婚
                </el-radio>
                <el-radio label="离异">
                  <img src="@/assets/liyi01.png" alt="">
                  离异
                </el-radio>
                <el-radio label="丧偶">
                  <img src="@/assets/sangou01.png" alt="">
                  丧偶
                </el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="身高" prop="height">
              <el-input v-model="free_register_form.height" style="width: 100px;"></el-input>
              cm
            </el-form-item>
            <el-form-item label="学历" prop="education">
              <el-select v-model="free_register_form.education" placeholder="请选择" style="width: 120px;">
                <el-option label="博士研究生" value="博士研究生"></el-option>
                <el-option label="硕士研究生" value="硕士研究生"></el-option>
                <el-option label="本科" value="本科"></el-option>
                <el-option label="大专" value="大专"></el-option>
                <el-option label="高职" value="高职"></el-option>
                <el-option label="其他" value="其他"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="工作地" prop="workplace">
              <el-cascader
                v-model="free_register_form.workplace"
                :options="cityList"
                :props="{ checkStrictly: true }"
                clearable></el-cascader>
            </el-form-item>
            <el-form-item label="月薪" prop="monthly_salary_end">
              <el-row>
                <el-col :span="4">
                  <el-input v-model="free_register_form.monthly_salary_start"></el-input>
                </el-col>
                <el-col :span="1" style="text-align: center;">-</el-col>
                <el-col :span="4">
                  <el-input v-model="free_register_form.monthly_salary_end"></el-input>
                </el-col>
                <el-col :span="1" style="text-align: center;">元</el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-row>
                <el-col :span="8" style="margin-right: 16px;">
                  <el-input v-model="free_register_form.phone"></el-input>
                </el-col>
                <el-col :span="4" v-if="message_btn">
                  <el-button type="primary" @click="sendcode">短信验证</el-button>
                </el-col>
                <el-col :span="4" v-if="message_btn_count_down">
                  <el-button type="info" disabled>{{message_count_down_time}} s后重新获取</el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <el-input v-model="free_register_form.code" style="width: 100px;"></el-input>
            </el-form-item>
            <el-form-item label="账号密码" prop="password">
              <el-input type="password" v-model="free_register_form.password" style="width: 190px;"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nickname">
              <el-input v-model="free_register_form.nickname" style="width: 190px;"></el-input>
            </el-form-item>
            <el-form-item label="自我介绍" prop="introduce_oneself">
              <el-input type="textarea" :rows="8" v-model="free_register_form.introduce_oneself" style="width: 350px;"></el-input>
            </el-form-item>
            <el-form-item label="标签">
              <el-tag
                v-model="free_register_form.tag_id"
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </el-form-item>
            <el-form-item class="free_register_form_post">
              <el-button type="primary" @click="free_register('free_register_form')">免费注册</el-button>
            </el-form-item>
            <el-form-item label="" class="free_register_form_protocol">
              <el-checkbox v-model="free_register_form.checked">
                <div class="free_register_clause">
                  <span>我同意注册条款和会员加入标准</span>
                  <span>并承诺年满18岁、单身、抱着积极的态度，真诚交友</span>
                </div>
              </el-checkbox>
            </el-form-item>
          </el-form>
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
      // 表单规则校验
      registerRules: {
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        birthday: [
          { required: true, message: '请选择出生日期', trigger: 'change' }
        ],
        marital_status: [
          { required: true, message: '请选择婚姻状况', trigger: 'change' }
        ],
        height: [
          { required: true, message: '请填写身高', trigger: 'blur' }
        ],
        education: [
          { required: true, message: '请选择学历', trigger: 'change' }
        ],
        workplace: [
          { required: true, message: '请选择工作地', trigger: 'change' }
        ],
        monthly_salary_end: [
          { required: true, message: '请填写月薪', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请填写手机号', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请填写验证码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写账号密码', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请填写昵称', trigger: 'blur' }
        ],
        introduce_oneself: [
          { required: true, message: '请填写自我介绍', trigger: 'blur' }
        ]
      },
      // 禁用大于今天的日期
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      birthday_year: '',
      birthday_month: '',
      birthday_day: '',
      free_register_form: {
        sex: '',
        birthday: '',
        marital_status: '',
        height: '',
        education: '',
        workplace: '',
        monthly_salary_start: '',
        monthly_salary_end: '',
        monthly_salary: '',
        phone: '',
        code: '',
        password: '',
        nickname: '',
        introduce_oneself: '',
        tag_id: [],
        checked: false
      },
      cityList: [{
        value: '湖北省',
        label: '湖北省',
        children: [
          {
            value: '武汉市',
            label: '武汉市',
            children: [
              {
                value: '武昌区',
                label: '武昌区'
              }
            ]
          }
        ]
      }],
      dynamicTags: ['90后', '靠谱', '开朗'],
      inputVisible: false,
      inputValue: '',
      // 控制短信发送按钮的显示隐藏
      message_btn: true,
      // 控制短信发送按钮倒计时的显示隐藏
      message_btn_count_down: false,
      // 短信倒计时秒数
      message_count_down_time: 0
    }
  },
  created() {
    this.$emit('header', true);
  },
  methods: {
    free_register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.free_register_form.checked);
          if (!this.free_register_form.checked) return this.$message.error('请勾选注册条款');
          console.log(this.free_register_form);
          console.log(this.$refs.free_register_form);
          // this.free_register_form.birthday = this.birthday_year + '年' + this.birthday_month + '月' + this.birthday_day + '日';
          this.free_register_form.birthday = new Date(this.free_register_form.birthday).getFullYear() + '.' + new Date(this.free_register_form.birthday).getMonth() + '.' + new Date(this.free_register_form.birthday).getDate();
          let workplace = '';
          for (let i = 0; i < this.free_register_form.workplace.length; i++) {
            workplace += this.free_register_form.workplace[i];
          }
          this.free_register_form.workplace = workplace;
          this.free_register_form.monthly_salary = this.free_register_form.monthly_salary_start + '-' + this.free_register_form.monthly_salary_end;
          this.free_register_form.tag_id = this.dynamicTags;
          this.$axios.post('/wpapi/register/form', this.free_register_form)
          .then((response) => {
            console.log(response);
            if (response.status == '401') {
              return this.$message.error(response.msg);
            }else if (response.status == '400') {
              return this.$message.error(response.msg);
            }else if (response.status !== '200') {
              return this.$message.error('注册失败！');
            }
            this.$message.success('恭喜你，注册成功！');
            window.localStorage.setItem('token', response.data.token);
            window.localStorage.setItem('users_id', response.data.users_id);
            this.$router.push('/login');
          })
          .catch((error) => {
            console.log(error);
          });
        } else {
          console.log('温馨提示:有必填项没有填写');
          return false;
        }
      });
    },
    handleCommand(clickThis) {
      this.$message(clickThis);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    // 手机验证发送验证码
    sendcode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (!this.free_register_form.phone) return this.$message.error('手机号不能为空');
      if (!reg.test(this.free_register_form.phone)) {
        this.$message.error('请输入正确的手机号');
      } else {
        // console.log(this.free_register_form.phone);
        this.$axios.post('/wpapi/register/send_sms', {phone: this.free_register_form.phone})
        .then((result) => {
          if (result.status !== '200') return this.$message.error(result.msg);
          this.$message.success('发送成功');
          this.message_btn = false;
          this.message_btn_count_down = true;
          this.message_count_down_time = 60;
          this.timer();
        })
        .catch((error) => {
          console.log(error);
        })
      }
    },
    // 60S倒计时
    timer() {
      if (this.message_count_down_time > 0) {
        this.message_count_down_time--;
        setTimeout(this.timer, 1000);
      } else {
        this.message_count_down_time = 0;
        this.message_btn = true;
        this.message_btn_count_down = false;
      }
    }
  }
}
</script>

<style scoped>
  .register_form {
    background-color: #fff;
    border-radius: 30px;
    width: 1088px;
    margin: 35px auto 104px;
  }
  .register_form .h3_logo {
    text-align: center;
    margin: 0;
    padding: 43px 0 32px;
  }
  .line_9 {
    height: 9px;
    background: linear-gradient(135deg, #ff2a86, #917fff 35%, #927ffe 71%, #9effff);
  }
  .line_3 {
    margin-top: 4px;
    height: 3px;
    background: linear-gradient(135deg, #ff2a86, #917fff 35%, #927ffe 71%, #9effff);
  }
  .weight_info {
    padding: 19px 0 58px;
    margin: 0;
    text-align: center;
    color: rgba(152, 152, 152, 1);
    font-size: 16px;
  }
  .register_form_birthday {
    width: 100px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .form_user_info {
    width: 60%;
    margin: 0 auto;
  }
  .free_register_form_post {
    text-align: center;
    margin: 0;
  }
  .free_register_form_post button {
    width: 295px;
    height: 53px;
    font-size: 30px;
    border: 0;
    margin: 58px auto 24px;
    background-color: rgba(238, 61, 61, 1);
    border-radius: 5px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, .16);
  }
  .free_register_form_protocol {
    margin: 0;
    padding-bottom: 67px;
  }
  .free_register_clause {
    display: flex;
    flex-direction: column;
  }
</style>