<template>
  <div class="signup">
      <div id="container">
          <div class="main clear account-wrap account-signup">
              <h1 class="logo">
                  <router-link to="/">
                    <div class="tiger-logo-canvas-container">
                        <img class="tiger-logo-canvas " src="/static/img/logo2.png" alt="">
                        <img class="tiger-logo-brand" src="/static/img/logo.black.png" alt="">
                    </div>
                  </router-link>
              </h1>
              <div class="steps-intro">
                  <ul>
                      <li v-for="(item,index) in lists" :key="index">
                          <span v-if="index!=4">{{item.num}}</span>
                          <span v-if="index==4"><i :class="item.num"></i></span>
                          {{item.text}}
                      </li>
                  </ul>
              </div>
              <div class="signup-go">
                  <router-link to="/accounts" class="btn btn-regular">
                      在线开户
                  </router-link>
                  <p class="tip">
                      已开户？<router-link to="/login">登录</router-link> 查看开户进度
                  </p>
                  <p class="quick-text">闪电开户<br>马上交易</p> 
              </div>
              <footer class="account-footer-info content clear">
                  <p>
                      *老虎证券的底层清算：盈透证券（Interactive Brokers，NASDAQ: IBKR），是美国最大的互联网券商，1977年创建，纳斯达克上市公司。致力于提供更快更稳定更安全的电子进场交易技术，直连交易所，而非其他券商通过流动性提供商间接交易。相同时间下单，直连交易所订单成交价格最优。盈透证券集团及其分支机构拥有超过50亿美元的总股本资产，日平均63万3千单的营收交易。
                  </p>
              </footer>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
        lists:[
            {id:0,num:1,text:'验证手机号，填写个人资料'},
            {id:0,num:2,text:'上传你的身份证和签名'},
            {id:0,num:3,text:'等待资料审核通过'},
            {id:0,num:4,text:'向您的账号存入资金'},
            {id:0,num:'iconfont icon-xiazai',text:'下载交易软件，开始交易'},
        ]
    }
  }
}
</script>
<style scoped lang="scss">
    .main{
        width: 960px;
        margin: 0 auto;
    }
    #container{
        .account-signup{
            padding: 40px 0;
            h1.logo{
                margin: 0;
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
            .steps-intro{
                float: left;
                width: 590px;
                margin: 100px 0;
                ul{
                    li{
                        font-size: 24px;
                        margin-bottom: 20px;
                        span{
                            float: left;
                            overflow: hidden;
                            background: #ffe100;
                            width: 30px;
                            height: 30px;
                            text-align: center;
                            line-height: 30px;
                            border-radius: 100%;
                            margin: 4px 10px 0 0;
                            font-size: 16px;
                            font-weight: 700;
                        }
                    }
                }
            }
            .signup-go{
                margin: 100px 0;
                float: right;
                width: 280px;
                text-align: center;
                a.btn-regular{
                    width: 200px;
                    display: block;
                    margin: 0 auto 10px;
                    font-size: 16px;
                    font-weight: 700;
                    background: #ffe100;
                    color: #333;
                    position: relative;
                    line-height: 1.42857143;
                    text-align: center;
                    white-space: nowrap;
                }
                p.tip{
                    color: #a3a3a3;
                }
                p.quick-text{
                    font-weight: 700;
                    font-size: 30px;
                    line-height: 1.4;
                    margin-top: 30px;
                }
            }
            footer{
                width: auto;
                clear: both;
                font-size: 12px;
                color: #a3a3a3;
                border-top: 1px solid #f0f0f0;
                margin-top: 80px;
                padding-top: 20px;
            }
        }
    }
</style>
