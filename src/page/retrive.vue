<template>
  <div class="detail">
  <!-- 顶部组件 -->
  <MyHead></MyHead>
    <div id="container">
        <div class="card-container main">
            <h3 class="title">重置登录密码</h3>
            <div class="process-bar">
                <ul class="pb-steps-3">
                    <li class="active current">
                        <p class="pb-num">1</p>
                        <p class="pb-title">确认账号</p>
                    </li>
                    <li :class="{active:nowprogress>=2}">
                        <p class="pb-num">2</p>
                        <p class="pb-title">修改密码</p>
                    </li>
                    <li :class="{active:nowprogress>=3}">
                        <p class="pb-num">3</p>
                        <p class="pb-title">完成</p>
                    </li>
                </ul>
            </div>
            <!-- 手机-邮箱 -->
            <div v-if="nowprogress==1" class="steps-container">
                <!-- 手机 -->
                <div v-if="switchs.id==0" class="a-flyRightIn">
                    <div class="field-phone-group">
                        <div class="telcode-phone clearfix">
                            <div class="telcode country-tel-codes">
                                <a href="javascript:;" title="中国" class="country-link form-control">
                                    <span class="c">中国</span>
                                    <span class="t">+86</span>
                                </a>
                            </div>
                            <div class="form-group phone">
                                <input  v-model="message_phone" v-validate="'required|phone'" type="text" class="form-control" placeholder="手机号码" required="" pattern="/^1[3456789][0-9]{9}$/" name="phone" value="">
                            </div>
                        </div>
                        <div class="phone-filed-send-msg clearfix">
                            <div class="form-group code">
                                <!-- 4位验证码 6位的话 {4,6} -->
                                <input v-model="message_code" v-validate="{ required: true, regex: /^[A-Za-z0-9]{4}(?![A-Za-z0-9])$/ }" type="text" class="form-control" placeholder="短信验证码"  name="code" value=""></div><div class="form-group send-btn">
                                <button class="btn btn-default btn-block" disabled="" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                                    发送短信验证码
                                </button>
                            </div>
                        </div>
                    </div>
                    <button @click="onenext"  class="btn btn-primary btn-block " style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                        下一步
                    </button>
                    <div v-if="errors.has('phone')"  class="form-submit-error a-flipinX">{{ errors.first('phone') }}</div>
                    <div v-if="errors.has('code')"  class="form-submit-error a-flipinX">{{ errors.first('code') }}</div>
                </div>
                <!-- 邮箱 -->
                <div v-if="switchs.id==1" class="a-flyRightIn">
                    <div class="status">
                        <div class="info-icon icon-email"></div>
                    </div>
                    <div class="form-group">
                        <input v-model="message_email" v-validate="{ required: true, email:true }" type="text" placeholder="请输入邮箱" required="" class="form-control" pattern="/^(?![\-_.])[\w\-.]+@(?:(?![\-_])[\w\-一-龥]{1,63}\.)+[A-Za-z0-9]{2,}$/" name="email" value="">
                    </div>
                    <button @click="onenext" class="btn btn-primary btn-block" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                        发送验证邮件
                    </button>
                    <div v-if="errors.has('email')" class="form-submit-error a-flipinX">{{ errors.first('email') }}</div>
                </div>
                <div class="footer">
                    <div>
                        你还可以
                        <a @click="change" href="javascript:;">
                            {{switchs.text}}
                        </a>。
                    </div>
                    如果以上方式不能帮助您找回密码，<br>请联系客服 
                    <a href="tel:400-603-7555">400-603-7555</a>
                </div>
            </div>
            <!-- 手机2 -->
            <div v-if="nowprogress==2" class="steps-container">
                <div class="a-flyRightIn">
                    <div>
                        <div class="form-group">
                            <input v-model="message_password" v-validate="{required:true,min:6}" type="password" placeholder="请输入新密码" class="form-control" name="password" value="">
                        </div>
                        <ul class="form-group pwd-strong">
                            <li>弱</li>
                            <li>中</li>
                            <li>强</li>
                        </ul>
                        <div class="form-group">
                            <input v-model="message_password_confirm" type="password" v-validate="{required:true,confirmed:'password'}" class="form-control" placeholder="请再次输入新密码" name="password_confirm" value="">
                        </div>
                    </div>
                    <button @click="onenext" class="btn btn-primary btn-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                        确认修改
                    </button>
                    <div v-if="errors.has('password')" class="form-submit-error a-flipinX">{{ errors.first('password') }}</div>
                    <div v-if="errors.has('password_confirm')" class="form-submit-error a-flipinX">{{ errors.first('password_confirm') }}</div>
                </div>
            </div>
            <!-- 手机3 -->
            <div v-if="nowprogress==3" class="steps-container">
                <div class="a-flyRightIn">
                    <div class="completed">您的密码已重置。</div>
                    <router-link class="btn btn-primary btn-block" to="/login">完成，去登录</router-link>
                </div>
            </div>
        </div>
    </div>
  <!-- 底部组建 -->
  <MyFoot></MyFoot>
  <!-- 联系客服 -->
  <Customer></Customer>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Customer from '@/components/customer'
export default {
  name: 'detail',
  components: {
    MyHead,MyFoot,Customer
  },
  data () {
    return {
        nowprogress:1,
        switchs:{id:0,text:'使用邮箱地址重置密码'},
        //验证信息
        message_phone:'',
        message_email:'',
        message_code:'',
        message_password:'',
        message_password_confirm:''
    }
  },
  watch: {
    message_phone (val,oldval) {
        var patt=/^1[3456789][0-9]{9}$/;
        let dom=document.querySelector('.btn-block');
        if(patt.test(val)){
            dom.removeAttribute('disabled')
        }else{
            dom.setAttribute('disabled','true')
        }
    },
    message_password(val){
        var patt1=/^[0-9]{6,18}$/;
        var patt2=/^[0-9a-z]{6,18}$/;
        var patt3=/^[0-9a-zA-Z]{6,18}$/;
        let dom1=document.querySelector('.pwd-strong li:nth-of-type(1)');
        let dom2=document.querySelector('.pwd-strong li:nth-of-type(2)');
        let dom3=document.querySelector('.pwd-strong li:nth-of-type(3)');
        if(patt1.test(val)){
            dom1.classList.add('active')
        }else if(patt2.test(val)){
            dom1.classList.add('active')
            dom2.classList.add('active')
        }else if(patt3.test(val)){
            dom1.classList.add('active')
            dom2.classList.add('active')
            dom3.classList.add('active')
        }else{
            dom1.classList.remove('active')
            dom2.classList.remove('active')
            dom3.classList.remove('active')
        }
    }
  },
  methods:{
      onenext(){
          this.$validator.validateAll().then((result)=>{
            if(result){
                // $.post(url, data, xhr => {
                //     this.$store.commit(MESSAGE, {
                //         status: 'success',
                //         text: '操作成功了！'
                //     })
                // })
                this.nowprogress++;
            }
        })
      },
      change:function(){
          if(this.switchs.id==0){
                this.switchs={id:1,text:'使用手机号重置密码'};
          }else{
                this.switchs={id:0,text:'使用邮箱地址重置密码'};
          }
      }
  }
}
</script>
<style scoped lang="scss">
    // 顶部
    // 共有
    .main{
      width: 960px;
      height: 242px;
      margin: 0 auto;
    }
    .section {
      position: relative;
      overflow: hidden;
    }
    .view{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
    }
    #container{
        padding: 60px 0 0;
        a{
            text-decoration: none;
        }
        .card-container {
            height: 467px;
            margin: 30px auto;
            padding: 30px;
            border: 1px solid #e8e7e7;
            border-radius: 3px;
            background: #fff;
            -webkit-box-shadow: 2px 2px 5px rgba(0,0,0,.16);
            box-shadow: 2px 2px 5px rgba(0,0,0,.16);
            h3{
                font-weight: 700;
                text-align: center;
                font-size: 18px;
            }
            .process-bar{
                margin: 30px 0;
                ul{
                    display: flex;
                    li.active {
                        color: #f39800;
                        .pb-num{
                            background: #f39800;
                            -webkit-box-shadow: 0 0 0 2px #f39800;
                            box-shadow: 0 0 0 2px #f39800;
                        }
                    }
                    li{
                        flex: 1 1;
                        color: #aaa;
                        position: relative;
                        .pb-num{
                            position: absolute;
                            line-height: 25px;
                            width: 25px;
                            height: 25px;
                            text-align: center;
                            color: #fff;
                            border: 1px solid #fff;
                            border-radius: 100%;
                            background: #aaa;
                            -webkit-box-shadow: 0 0 0 2px #aaa;
                            box-shadow: 0 0 0 2px #aaa;
                            top: 10px;
                            left: 3px;
                        }
                        .pb-title{
                            text-align: center;
                            margin: 0 20px 10px 40px;
                            border-bottom: 1px dashed;
                            padding: 5px 0;
                        }
                    }
                }
            }
            .steps-container{
                width: 360px;
                margin: 0 auto;
                .footer{
                    text-align: center;
                    margin-top: 50px;
                }
                ul.pwd-strong{
                    overflow: hidden;
                    li{
                        float: left;
                        width: 31.33%;
                        margin: 0 1%;
                        background: #aaa;
                        text-align: center;
                        font-size: 12px;
                    }
                }
                .form-submit-error {
                    margin-top: 10px;
                    margin-bottom: 15px;
                    margin-top: 15px;
                    padding: 10px;
                    color: #fff;
                    background: #fe5656;
                }
                // 1
                .icon-email {
                    background-image: url('/static/img/mail.png');
                    width: 50px;
                    height: 50px;
                    background: no-repeat 50%;
                    background-size: contain;
                    margin: 10px auto;
                }
                .telcode {
                    float: left;
                    width: 40%;
                    padding-right: 15px;
                    span.c{
                        color: #888; 
                    }
                    span.t{
                        color: #333;
                    }
                }
                .phone{
                    width: 60%;
                    float: right;
                }
                .code{
                    float: left;
                    width: 40%;
                    padding-right: 15px;
                }
                .send-btn{
                    float: right;
                    width: 60%;
                }
                .btn-primary {
                    color: #333;
                    background-color: #ffe100;
                    border-color: #e6cb00;
                }
                // 3
                .completed{
                    text-align: center;
                    margin: 20px 0;
                }
            }
        }
    }

    // 添加的
    .a-flyRightIn .pwd-strong li.active {
        background: #f39800!important;
        color: #fff!important;
    }

    // 底部
    // 客服组件
    
</style>
