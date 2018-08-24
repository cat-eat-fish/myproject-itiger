<template>
  <div class="login">
      <div id="container">
          <div class="login-form-container">
              <h1>
                  <router-link to="/">
                    <div class="tiger-logo-canvas-container">
                        <img class="tiger-logo-canvas " src="/static/img/logo2.png" alt="">
                        <img class="tiger-logo-brand" src="/static/img/logo.black.png" alt="">
                    </div>
                  </router-link>
              </h1>
              <div v-if="state.code==0" class="telcode-phone clearfix">
                  <div   class="telcode country-tel-codes">
                      <a  href="javascript:;"  class="country-link form-control" title="中国">
                          <span class="c">中国</span>
                          <span class="t">+86</span>
                      </a>
                  </div>
                  <div class="form-group phone">
                    <input v-model="message.phone" class="form-control" placeholder="手机号码" v-validate="'required|phone'" name="phone" pattern="/^1[3456789][0-9]{9}$/" type="text">
                  </div>
              </div>
              <div v-if="state.code==1" class="form-group">
                  <input v-model="message.email" type="text" placeholder="邮箱地址" v-validate="'required|email'"  class="form-control" pattern="/^\w[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})$/" name="email">
               </div>
              <div class="form-group password">
                  <input v-model="message.password" type="password" placeholder="请输入密码" v-validate="'required|min:6'" class="form-control" name="password">
              </div>
              <div class="extra-link">
                  <router-link to="/account/retrive">
                    忘记密码
                  </router-link>
                  <a href="" @click.prevent="exchange">
                    {{state.mess}}
                  </a>
              </div>
              <button @click="signIn" class="btn btn-primary">登录</button>
              <div class="form-group autologin">
                  <label for="">
                      <input checked type="checkbox" class="autologin" name="autologin" >三天内自动登录
                  </label>
              </div>
              <div v-if="errors.has('email')" class="form-submit-error a-flipinX">{{ errors.first('email') }}</div>
              <div v-if="errors.has('phone')"  class="form-submit-error a-flipinX">{{ errors.first('phone') }}</div>
              <div v-if="errors.has('password')"  class="form-submit-error a-flipinX">{{ errors.first('password') }}</div>
              <!-- <span class="form-submit-error a-flipinX">{{ errors.first('phone') }}</span> -->
              <div class="go-open">
                  还没有账户？<router-link to="/accounts">立即开户</router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
        state:{code:0,mess:'使用邮箱登录'},
        message:{phone:'',email:'',password:''},
        user : sessionStorage.user,
    }
  },
  methods:{
    signIn(){
        this.$validator.validateAll().then((result)=>{
            if(result){
            //     //  提交数据
            //     $.post(url, data, xhr => {
            //         this.$store.commit(MESSAGE, {
            //             status: 'success',
            //             text: '操作成功了！'
            //         })
            //     })
            
            sessionStorage.user = this.message.phone;
            this.$router.push('/personal');
            }
        })
    },
    exchange:function(){
        this.state=this.state.code==1? {code:0,mess:'使用邮箱登陆'}:{code:1,mess:'使用手机号登陆'};
    }
  }
}
</script>
<style scoped lang="scss">
    #container{
        a{
            text-decoration: none;
        }
        min-height: 521px;
        .login-form-container {
            min-height: 380px;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            max-width: 350px;
            width: 100%;
            padding: 0 15px;
        }
        h1{
            margin-bottom: 20px;
            a{
                text-decoration: none;
                color: #4e97fa;
                .tiger-logo-canvas-container{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 40px;
                    img.tiger-logo-canvas {
                        background-color: #ffe100;
                        height: 40px;
                        width: 40px;
                        border-radius: 100%;
                        margin: 0 .5em;
                    }
                    .tiger-logo-brand{
                        height: 100%;
                    }
                }
            }
        }
        .telcode-phone{
            .telcode {
                width: 40%;
                padding-right: 15px;
                position: relative;
                float: left;
                a{
                    background-repeat: no-repeat;
                    background-position: 100%;
                    background-color: #fff;
                    background-size: auto 6px;
                    cursor: default;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    padding-right: 20px;
                    span.c{
                        color: #888;
                    }
                    span.t{
                        color: #333;
                            margin-left: 5px;
                    }
                }
            }
            .phone{
                width: 60%;
                float: right;
            }
        }
        .password{
            margin-bottom: 20px;
            position: relative;
            input{
                display: block;
                width: 100%;
                height: 40px;
                padding: 6px 12px;
                font-size: 14px;
                line-height: 1.42857;
                color: #555;
                background-color: #fff;
                background-image: none;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
        }
        .extra-link{
            font-size: 12px;
            margin: -12px 0 20px;
            a:first-child{
                color: #aaa;
            }
            a:last-child{
                float: right;
            }
        }
        button.btn-primary{
            width: 100%;
            font-weight: 700;
            font-size: 16px;
            color: #333;
            background-color: #ffe100;
            border-color: #e6cb00;
            margin-bottom: 10px;
        }
        .autologin{
            color: #a3a3a3;
            margin-bottom: 20px;
            position: relative;
            label{
                input{
                    color: #a3a3a3;
                    margin: 0px 5px 0 0;
                    -webkit-appearance: checkbox;
                }
            }
        }
        .go-open{
            text-align: center;
            font-size: 13px;
            color: #a3a3a3;
            margin-top: 8px;
        }
    }
    .form-submit-error {
        padding: 10px;
        margin-bottom: 15px;
        margin-top: 15px;
        color: #fff;
        background: #fe5656;
    }
</style>
