<template>
  <div class="mymain">
  <!-- 顶部组件 -->
  <MyHead></MyHead>
    <div class="topbox">
        <!-- 轮播 -->
        <div id="banner">
            <div class="swiper-container" id="swiper1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide s1">
                        <img  class="slideImg " src="/static/img/banner4.jpg" alt="" >
                        <div class="main view" >
                            <img src="/static/img/title1.png" alt="">
                        </div>
                    </div>

                <div class="swiper-slide s3">
                <img class="slideImg " src="/static/img/banner3.jpg" alt="" >
                <div class="main view">
                    <img swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" class="ani slogan slogan-active" src="/static/img/banner-title.png" alt="">
                    <div class="open-btn-wrapper a-flyBottomIn">
                    </div>
                </div>
                </div>
                <div class="swiper-slide s4">
                    <img class="slideImg " src="/static/img/bg1.jpg" alt="" >
                <div class="main view">
                    <h2 swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" class="slogan-meigujie">一个账户一笔钱<br><span>白天炒港股 晚上买美股</span></h2>
                </div>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            </div>
        </div>
        <!-- 固定 -->
        <div class="main register-box clear">
            <div class="lp-register">
                <div class="form-box clear">
                    <p class="reg-title">注册即送</p>
                    <p class="reg-title btm">美股、港股实时行情</p>
                    <form id="signup-form" class="signup-form" action="javascript:;">
                        <div class="form-wrap clear">
                            <div class="input-left">
                                <div class="input-wrap">
                                    <input type="text" class="input-text lt" placeholder="手机号码" name="phone">
                                </div>
                            </div>
                            <div class="input-right">
                                <button class="btn btn-code verify-by-phone">发送验证码</button>
                            </div>
                        </div>
                        <div class="form-wrap clear none">
                            <button class="btn btn-hide verify-by-voice">没收到短信？试试语音验证码</button>
                        </div>
                        <div class="form-wrap clear">
                            <div class="input-wrap">
                                <input class="input-text" type="text" placeholder="请输入验证码" name="verify-code">
                            </div>
                        </div>
                        <div class="form-wrap btm clear">
                            <div class="input-wrap">
                                <input type="password" class="input-text" placeholder="请输入密码" name="password">
                            </div>
                        </div>
                        <div class="form-wrap clear">
                            <button class="btn btn-submit"><span class="loading"></span>立即注册</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- 优势 -->
    <div class="lp-piece-section">
        <ul class="main piece-boxes clear">
        <li class="lp-piece">
        <img class="img" src="/static/img/201602-icon-1.png">
        <div class="text">
        <p class="bold">功能强大</p>
        <p class="tip">交易榜单、选股工具助力投资决策</p>
        </div>
        </li>
        <li class="lp-piece">
        <img class="img" src="/static/img/201602-icon-2.png">
        <div class="text">
        <p class="bold">免费实时行情</p>
        <p class="tip">3800元美股实时行情免费赠送</p>
        </div>
        </li>
        <li class="lp-piece">
        <img class="img" src="/static/img/201602-icon-3.png">
        <div class="text">
        <p class="bold">中文客服</p>
        <p class="tip">专业客服交易日20小时全程陪伴</p>
        </div>
        </li>
        <li class="lp-piece">
        <img class="img" src="/static/img/201602-icon-4.png">
        <div class="text">
        <p class="bold">投资培训</p>
        <p class="tip">胡海泉领衔财富导师，玩转股票投资</p>
        </div>
        </li>
        </ul>
    </div>
    <!-- 优势2 -->
    <div class="lp-advantages">
        <div class="main">
        <ul class="main lp-adv-boxes clear">
        <li class="lp-piece p1">
        <p class="line2">全球资产配置</p>
        <p class="line3">只需一个账户一笔钱</p>
        <p class="line3">买遍美股、港股、A股（沪港通）</p>
        </li>
        <li class="lp-piece p2">
        <p class="line2">极速交易</p>
        <p class="line3">直连交易所，成交价格更优</p>
        <p class="line3">跨境专线，毫秒下单速度</p>
        </li>
        <li class="lp-piece p3">
        <p class="line2">超低佣金</p>
        <p class="line3">美股$0.0039/股，最低$0.99/笔</p>
        <p class="line3">港股佣金万2.9，小额订单免佣</p>
        </li>
        <li class="lp-piece p4">
        <p class="line2">品类丰富</p>
        <p class="line3">涵盖股票、期权、基金等品种</p>
        <p class="line3">可以做空，牛熊市均可操作</p>
        </li>
        </ul>
        </div>
        <div class="main blackimg">
        <img src="/static/img/201602-block.jpg">
        </div>
    </div>
    <!-- 值得信赖 -->
    <div class="lp-rely">
        <div class="main aniPage animated">
        <h2 class="page-title a-flyLeftIn" data-animate="a-flyLeftIn">值得信赖的美股、港股券商</h2>
        <ul class="lp-boxes clear">
        <li class="lp-piece a-flyBottomIn" data-animate="a-flyBottomIn">
        <img class="logos bg-logo" src="/static/img/logo-8.png">
        <p>美国花旗银行、渣打银行等</p>
        </li>
        <li class="lp-piece a-flyBottomIn" data-animate="a-flyBottomIn">
        <img class="logos" src="/static/img/logo-2_1.png">
        <p>账户受美国证监会监管</p>
        </li>
        <li class="lp-piece a-flyBottomIn" data-animate="a-flyBottomIn">
        <img class="logos" src="/static/img/logo-3_1.png">
        <p>3000万美金商业保险</p>
        </li>
        <li class="lp-piece a-flyBottomIn" data-animate="a-flyBottomIn">
        <img class="logos" src="/static/img/logo-9_1.png">
        <p>美国知名的清算服务商</p>
        </li>
        </ul>
        </div>
    </div>
    <!-- 信赖大佬 -->
    <div class="lp-stars">
        <div class="main aniPage animated">
        <h2 class="page-title a-flyLeftIn" data-animate="a-flyLeftIn">支持老虎证券的大咖们</h2>
        <ul class="lp-boxes clear">
        <li class="lp-piece a-flyBottomIn" data-animate="a-flyBottomIn">
        <img class="headimg" src="/static/img/person-5_1.png">
        <p class="name">吉姆·罗杰斯</p>
        <p>华尔街著名投资人</p>
        </li>
        <li class="lp-piece a-flyBottomIn" data-animate="a-flyBottomIn">
        <img class="headimg" src="/static/img/person-1_1.png">
        <p class="name">徐小平</p>
        <p>真格基金创始人</p>
        </li>
        <li class="lp-piece a-flyBottomIn" data-animate="a-flyBottomIn">
        <img class="headimg" src="/static/img/person-2_1.png">
        <p class="name">胡海泉</p>
        <p>明星投资人、羽泉组合成员</p>
        </li>
        <li class="lp-piece a-flyBottomIn" data-animate="a-flyBottomIn">
        <img class="headimg" src="/static/img/person-3_1.png">
        <p class="name">王兴</p>
        <p>美团网创始人兼CEO</p>
        </li>
        </ul>
        </div>
    </div>
    <!-- 关于 -->
    <div class="lp-times">
        <div class="main aniPage animated">
        <h2 class="page-title a-flyLeftIn" data-animate="a-flyLeftIn">关于老虎证券</h2>
        <p class="text">华人地区知名港美股券商，致力于为客户提供一流的境外投资体验，帮助华人地区投资者进行全球化资产配置。</p>
        <div class="textbox">
        <div class="section clear a-flyBottomIn" data-animate="a-flyBottomIn">
        <span class="time">2017.08</span>
        <div class="event">
        <p>老虎社区功能升级，新增实盘分享功能</p>
        </div>
        </div>
        <div class="section clear delay100 a-flyBottomIn" data-animate="a-flyBottomIn">
        <span class="time">2017.07</span>
        <div class="event">
        <p>入选全球金融科技250强</p>
        </div>
        </div>
        <div class="section clear delay200 a-flyBottomIn" data-animate="a-flyBottomIn">
        <span class="time">2017.02</span>
        <div class="event">
        <p>沪港通、深港通交易功能上线</p>
        </div>
        </div>
        <div class="section clear delay300 a-flyBottomIn" data-animate="a-flyBottomIn">
        <span class="time">2016.11</span>
        <div class="event">
        <p>月交易额突破150亿人民币</p>
        </div>
        </div>
        <div class="section clear delay500 a-flyBottomIn" data-animate="a-flyBottomIn">
        <span class="time">2016.09</span>
        <div class="event">
        <p>入选毕马威中国发布的《中国金融科技50强榜单》</p>
        </div>
        </div>
        <div class="section clear delay700 a-flyBottomIn" data-animate="a-flyBottomIn">
        <span class="time">2016.05</span>
        <div class="event">
        <p>港股交易功能上线，支持一个账户、一笔钱同时交易美股、港股</p>
        </div>
        </div>
        <div class="section clear delay900 a-flyBottomIn" data-animate="a-flyBottomIn">
        <span class="time">2016.03</span>
        <div class="event">
        <p>美股期权交易功能上线，满足高端投资者的投资需求</p>
        </div>
        </div>
        <div class="section clear lastbox delay1100 a-flyBottomIn" data-animate="a-flyBottomIn">
        <span class="time lasttime">2016.01</span>
        <div class="event lastevent">
        <p>荣登“2016胡润新金融50强”，与陆金所、蚂蚁金服、京东金融等品牌共同上榜</p>
        </div>
        </div>
        </div>
        </div>
    </div>
    <!-- 提示 -->
    <div class="main" style="font-size:12px;color:#aaa;padding-bottom:20px;margin-top:50px;">
        * 投资有风险，入市需谨慎。
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
import Swiper from 'swiper';
import 'swiper/dist/js/swiper.animate1.0.2.min.js';
export default {
  name: 'mymain',
  components: {
    MyHead,MyFoot,Customer
  },
  data () {
    return {
      // 轮播图片
      swiperImg:[
        {id:0,src:'/static/img/banner1.jpg'},
        {id:1,src:'src/assets/img/banner2.jpg'},
        {id:2,src:'src/assets/img/banner3.jpg'},
        {id:3,src:'src/assets/img/banner4.jpg'}
      ],
    }
  },
  mounted(){
    let effect,j,style,duration,delay,allBoxes,i;
    function swiperAnimateCache(a){for(j=0;j<a.slides.length;j++)for(allBoxes=a.slides[j].querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["style"]?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes["style"].value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function swiperAnimate(a){clearSwiperAnimate(a);var b=a.slides[a.activeIndex].querySelectorAll(".ani");for(i=0;i<b.length;i++)b[i].style.visibility="visible",effect=b[i].attributes["swiper-animate-effect"]?b[i].attributes["swiper-animate-effect"].value:"",b[i].className=b[i].className+"  "+effect+" "+"animated",style=b[i].attributes["style"].value,duration=b[i].attributes["swiper-animate-duration"]?b[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=b[i].attributes["swiper-animate-delay"]?b[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),b[i].setAttribute("style",style)}function clearSwiperAnimate(a){for(j=0;j<a.slides.length;j++)for(allBoxes=a.slides[j].querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}
    //轮播
    var swiper = new Swiper('#swiper1', {
      on:{
        init: function(){
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        }, 
        slideChangeTransitionEnd: function(){ 
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        } 
      },
      effect : 'fade',
      loop:true,
      pagination: {
        el: '#swiper1 .swiper-pagination',
        clickable :true,
      },
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    .topbox{
        position: relative;
    }
    // 轮播
    #swiper1{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 520px;
        overflow: hidden;
        background-color: #000;
        color: #fff;
        .view {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 100%;
            margin-left: -210px;
            padding-top: 130px;
        }
        .swiper-wrapper{
          .swiper-slide{
            position: relative;
            width: 100%;
            .slideImg{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            .video-bg{
              position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              .video-bg video{
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
            }
          }
          .s1{
            .view{
              // height: 248px;
              img{
                display: block;
              }
              a{
                display: block;
                height: 42px;
                color: #333;
                background-color: #ffe100;
                border-radius: 5px;
                transition: .5s ease;
                text-align: center;
                width: 200px;
                line-height: 42px;
                font-size: 16px;
                border: 0;
                font-weight: 700;
                margin: 20px 0
              }
              a:hover{
                text-decoration: none;
                background-color: rgb(203,203,0);
              }
            }
          }
          .s2{
            .view{
              img.slogan-pic{
                width: 280px;
                float: left;
                margin-top: 100px;
              }
              .right{
                margin: 150px 0 0 70px;
                float: left;
                text-align: left;
                color: #000;
                img.slogan {
                      width: 250px;
                }
                h2{
                  font-size: 56px;
                  font-weight: 700;
                }
                h3{
                  font-size: 26px;
                  line-height: 2.5;
                  span{
                    font-weight: 700;
                  }
                }
                .btn-zero{
                  width: 120px;
                  height: 40px;
                  line-height: 40px;
                  background-color: #000;
                  color: #ffe100;
                  line-height: 40px;
                  font-weight: 400;
                  font-size: 18px;
                  border-radius: 20px;
                  margin-top: 35px;
                  padding: 0;
                }
                .banner-link{
                  text-decoration: underline;
                  color: #000;
                  display: block;
                  margin: 10px 0 0 10px;
                }
              }
            }
          }
          .s3{
            .view{
              .open-btn-wrapper{
                margin-top: 10px;
                a.btn-scroll{
                  width: 188px;
                  height: 45px;
                  padding: 0;
                  line-height: 45px;
                  border-radius: 0;
                  display: inline-block;
                  color: #000;
                  background-color: #ffe100;
                  margin-top: 56px;
                  font-size: 18px;
                  font-weight: 700;
                  letter-spacing: 2px;
                }
              }
            }
          }
          .s4{
            .slogan-meigujie {
                font-size: 50px;
                font-weight: 700;
                line-height: 1.4;
                color: #fff;
                span {
                    color: #ffe100;
                }
            }
          }
        }
    }
    // 固定
    .register-box {
        z-index: 100;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 480px;
        height: 100%;
        margin: -152px 0 0;
        .lp-register {
            float: right;
            width: 400px;
            border-radius: 6px;
            background-color: rgba(0,0,0,.4);
            .form-box {
                width: 360px;
                padding: 20px 20px 25px;
                border-radius: 5px;
                .reg-title {
                    font-size: 22px;
                    line-height: 1;
                    text-align: left;
                    color: #fff;
                }
                .btm {
                    margin-bottom: 16px;
                }
                #signup-form{
                    .form-wrap {
                        width: 359px;
                        height: 40px;
                        margin-bottom: 6px;
                        .input-left {
                            float: left;
                            width: 220px;
                        }
                        .input-wrap {
                            width: 100%;
                                position: relative;
                                display: inline-block;
                                float: left;
                                .input-text {
                                    display: block;
                                    width: 359px;
                                    border: 0;
                                    height: 40px;
                                    margin: 0;
                                    padding: 5px 10px;
                                    -webkit-transition: .5s ease;
                                    -moz-transition: .5s ease;
                                    transition: .5s ease;
                                    -webkit-transition-property: outline,border,color,background;
                                    -moz-transition-property: outline,border,color,background;
                                    transition-property: outline,border,color,background;
                                    border: 1px solid #ccc;
                                    border-radius: 4px;
                                    outline: 0;
                                }
                                .lt {
                                    width: 220px;
                                }
                            }
                        .input-right {
                            float: right;
                            .btn-code {
                                font-size: 14px;
                                width: 130px;
                                height: 40px;
                                color: #e55319;
                                border: 0;
                                background-color: #fff;
                            }
                        }
                        .btn-submit {
                            font-size: 22px;
                            font-weight: 700;
                            width: 100%;
                            height: 56px;
                            color: #fff;
                            border: 0;
                            background-color: #f77215;
                            .loading {
                                display: none;
                                width: 20px;
                                height: 20px;
                                margin-right: 5px;
                                vertical-align: middle;
                                background: url(/static/img/loading-2.gif) no-repeat;
                            }
                        }
                    }
                    .none {
                        display: none;
                        overflow: hidden;
                    }
                    .btm {
                        margin-bottom: 16px;
                    }
                }
            }
        }
    }

    // 优势
    .lp-piece-section {
        margin-bottom: 10px;
        background-color: #fff;
         .piece-boxes {
            padding: 30px 0;
            height: 142px;
            .lp-piece {
                float: left;
                width: 25%;
                .img {
                    float: left;
                    width: 54px;
                    margin-top: 14px;
                }
                .text {
                    padding-left: 79px;
                    .bold {
                        font-size: 18px;
                        color: #000;
                    }
                    .tip {
                        font-size: 14px;
                        color: #585858;
                        display: block;
                        padding-right: 18px;
                    }
                }
            }
        }
    }
    // 优势2
    .lp-advantages {
        text-align: center;
        color: #252525;
        .lp-adv-boxes {
            margin: 33px 0;
            height:186px;
            .lp-piece {
                float: left;
                margin-right: 10px;
                border: 9px solid #f5f5f4;
                background: no-repeat #ffe100;
                width: 232px;
                height: 186px;
                padding: 24px 4px;
                .line2 {
                    font-size: 30px;
                    font-weight: 700;
                }
            }
            .p1 {
                background-image: url(/static/img/201602-icon-5.png);
            }
            .p2 {
                background-image: url(/static/img/201602-icon-6.png);
            }
            .p3 {
                background-image: url(/static/img/201602-icon-7.png);
            }
            .p4 {
                margin-right: 0;
                background-image: url(/static/img/201602-icon-8.png);
            }
        }
        .blackimg {
            margin-bottom: 40px;
        }
    }
    // 值得信赖
    .lp-rely{
        .page-title {
            font-size: 26px;
            font-weight: 700;
            color: #000;
        }
        .lp-boxes {
            margin-bottom: 30px;
            .lp-piece {
                float: left;
                width: 25%;
                padding: 40px 0;
                text-align: center;
                 .bg-logo {
                    width: 194px;
                }
                p {
                    color: #585858;
                }
            }
        }
    }
    // 支持的大佬
    .lp-stars {
        margin-bottom: 40px;
        padding-bottom: 60px;
        border-bottom: 1px solid #e9e9e6;
        .page-title {
            font-size: 26px;
            font-weight: 700;
            color: #000;
        }
        ul{
            height: 240px;
            .lp-piece {
                padding-top: 38px;
                text-align: center;
                float: left;
                width: 25%;
                .headimg {
                    display: block;
                    margin: 0 auto 16px;
                }
                p{
                    color: #585858;
                }
            }
        }
    }
    // 关于
    .lp-times {
        margin-bottom: 10px;
        .page-title {
            margin-bottom: 20px;
        }
        .text {
            font-size: 16px;
            margin-bottom: 40px;
        }
        .textbox {
            position: relative;
            margin-left: 10px;
            padding-bottom: 0px;
            color: #585858;
            border-left: 1px solid #696969;
            .section {
                height: 18px;
                margin-bottom: 12px;
                .time {
                    display: block;
                    float: left;
                    margin-top: 0px;
                    margin-left: -6px;
                    padding-left: 25px;
                    color: #a0a0a0;
                    background: url(/static/img/point.png) 0 center no-repeat;
                }
                .event {
                    float: left;
                    margin-top: 0px;
                    padding-left: 10px;
                }
            }
        }
    }



    // 底部
    // 客服组件
    
</style>
