<template>
  <div class="invitation">
            <div class="personal-main">
                <section class="invitation-section section">
                    <h3 class="title">我的邀请</h3>
                        <div class="outer-box clear">
                            <div class="inner-left clear edit-invite-form">
                                <h5 class="invite-title">我的专属邀请链接</h5>
                                <div id="invite-edit-form" class="clearfix">
                                    <div class="form-box">
                                        <label>邀请码</label>
                                        <div v-if="!isedit" class="code">{{code}}</div>
                                        <div v-if="isedit" class="code">
                                            <input v-model="code" type="text" name="invite" required="" class="form-control ef-valid ef-touched" value="JDTAB">
                                        </div>
                                        <button @click="change" class="btn btn-primary" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                                            {{isedittext}}
                                        </button>
                                    </div>
                                </div>
                                <a class="invite-link" href="https://itiger.com/accounts?invite=JDTAB">https://itiger.com/accounts?invite=JDTAB</a>
                            </div>
                            <div class="inner-right">
                                <div class="count">0</div>
                                <div class="count-text">您已邀请好友0个</div>
                            </div>
                        </div>
                    <ul class="invitation-list clear">

                    </ul>
                </section>
            </div>
        
  </div>
</template>

<script>
export default {
  name: 'invitation',
  props:['mydata'],
  data () {
    return {
        isedit:false,
        isedittext:'编辑',
        code:'JDTAB',
    }
  },
  methods:{
      change:function(){
          if(this.isedit==false){
            this.isedit=true;
            this.isedittext='确定';
          }else{
              this.isedit=false;
              this.isedittext='编辑';
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
            .sidebar{
                a{
                    text-decoration: none;
                }
                width: 175px;
                float: left;
                margin: 40px 0 0;
                text-align: center;
                h3{
                    font-weight: 700;
                    font-size: 18px;
                }
                ul{
                    margin: 10px 0;
                    li .active{
                        color: #000;
                        font-weight: 700;
                    }
                    li{
                        a{
                            display: block;
                            padding: 13px 0;
                            color: #a3a3a3;
                        }
                    }
                }
            }
        .personal-main {
            margin-left: 200px;
            padding: 50px 20px;
            padding-right: 20px;
            .section{
                margin-bottom: 30px;
                h3{
                    color: #a3a3a3;
                    border-bottom: 1px solid #e5e5e5;
                    padding-bottom: 6px;
                    font-size: 14px;
                }
                .outer-box{
                    height: 270px;
                    padding: 40px 0 40px 40px;
                    margin: 20px 0 30px;
                    text-align: center;
                    background: url(/static/img/invitation-bg.png) repeat 0 0;
                    .inner-left{
                        padding: 50px 0 30px;
                        -webkit-box-shadow: 0 0 10px #b6b6b6;
                        box-shadow: 0 0 10px #b6b6b6;
                        float: left;
                        width: 70%;
                        background: #fff url(/static/img/link-bg.png) no-repeat 0 100%;
                        h5{
                            font-size: 18px;
                            margin-bottom: 20px;
                        }
                        .form-box{
                            width: 300px;
                            margin: 0 auto;
                            height: 40px;
                            label{
                                width: 80px;
                                font-weight: 700;
                                color: #999;
                                float: left;
                            }
                            .code{
                                width: 160px;
                                text-align: center;
                                float: left;
                                input{
                                    width: 140px;
                                    margin-right: 20px;
                                    margin-top: -10px;
                                }
                            }
                            button{
                                float: left;
                                margin-top: -10px;
                            }
                        }
                    }
                    .inner-right{
                        float: right;
                        width: 30%;
                        .count{
                            font-size: 30px;
                            height: 100px;
                            line-height: 100px;
                            font-weight: 700;
                        }
                        .count-text{

                        }
                    }
                }
            }
        }

    }

    // 底部
    // 客服组件
    
</style>
