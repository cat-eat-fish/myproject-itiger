<template>

  <div class="mymain">
  <!-- 顶部组件 -->
  <MyHead></MyHead>

  <!-- 轮播 -->
  <div id="banner">
    <div class="swiper-container" id="swiper1">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide s1">
          <img  class="slideImg " src="/static/img/banner1.jpg" alt="" >
          <div class="main view" >
            <img src="/static/img/title1.png" alt="">
            <router-link to="/signup">立即报名</router-link>
          </div>
        </div> -->
        <div class="swiper-slide s1">
          <div class="main view">
            <h1 swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" class="ani a-flyTopIn">美港股打新上老虎</h1>
            <img swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" class="ani title a-flyTopIn" src="/static/img/daxin-title.png">
            <div class="open-btn-wrapper a-flyBottomIn">
              <router-link class="btn btn-scroll" data-trace="button,click" to="/signup?">立即开户</router-link>
            </div>
          </div>
        </div>
        <div class="swiper-slide s2">
          <img class="slideImg " src="/static/img/banner2.jpg" alt="" >
          <div class="main view">
            <img swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" class="ani slogan-pic a-flyTopIn" src="/static/img/banner-zero-pic.png" alt="">
            <div class="right">
              <img swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" class="ani slogan " src="/static/img/banner-zero-slogan.png" alt="">
              <h2 swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" class="ani a-flyTopIn">0入金门槛 投资美港股</h2>
              <h3 swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" class="ani a-flyTopIn"><span class="bold">7.1-7.31</span> 开通美港股账户 无资金门槛</h3>
              <router-link swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" class="ani btn btn-scroll btn-zero a-flyBottomIn" to="/signup">立即开户</router-link>
              <router-link class="banner-link" to="/signup">活动细则</router-link>
            </div>
          </div>
        </div>
        <div class="swiper-slide s3">
          <img class="slideImg " src="/static/img/banner3.jpg" alt="" >
          <div class="main view">
            <img swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" class="ani slogan slogan-active" src="/static/img/banner-title.png" alt="">
            <div class="open-btn-wrapper a-flyBottomIn">
              <router-link swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" class="ani btn btn-scroll" to="/signup">
                立即开户
              </router-link>
            </div>
          </div>
        </div>
        <div class="swiper-slide s4">
          <div class="video-bg">
            <video autoplay loop preload muted width="1280" height="720" style="top: -111.367px; left: 0px; width: 100%; height: 935.438px;">
              <source src="/static/img/tiger-intro-poster-0413.ogv" type="video/ogg">
              <source src="/static/img/tiger-intro-poster-0413.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="main view">
            <div>
              <img class="ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.1s" src="/static/img/tiger-intro-title.png" alt="">
            </div>
            <i class="iconfont icon-bofang" title="点击播放完整视频"></i>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <!--  -->
  <section class="section advantage animated">
    <div class="main aninode">
      <h2 class="page-title a-flyRightIn">为什么投资美股、港股?</h2>
      <div class="container-box">
        <ul class="clearfix a-flyBottomIn">
          <li v-for="(item,index) in mggg" :key="index">
            <img :src="item.src" alt="">
            <p class="title">{{item.title}}</p>
            <p class="text">{{item.text}}</p>
            <p class="text">{{item.text2}}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- 下载 -->
  <section class="section download-app animated">
    <div class="main aninode clear">
      <div class="title-box show-phone a-flyRightIn">
        <h2>中英文交易客户端全渠道覆盖</h2>
      </div>
      <img src="/static/img/platform_cn.d01d8a04.png" alt="覆盖所有系统的美股软件">
      <div class="clear delay500 a-flyBottomIn">
        <div class="btn-box">
          <img class="block-img" src="/static/img/download.0e32e0a8.png" alt="">
          <router-link to="/download" class="btn downbtn">立即下载</router-link>
        </div>
        <div class="text-box">
          <div class="show-pc">
            <h2 class="title">中英文交易客户端全渠道覆盖</h2>
          </div>
          <p class="secondary top">iOS、Android、Windows、MacOS</p>
          <p class="secondary">为全球华人量身定制的专业股票投资软件，服务专业交易者</p>
          <p class="secondary">老虎证券致力于以科技和创新提升交易速度、改善交易体验、优化成交价格</p>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
  <section class="section security animated">
    <div class="main aninode ">
      <h3 class="page-title text-center delay300 a-flyTopIn">以客户资产安全为第一生命线</h3>
      <ul class="item-box clear delay300 a-flyBottomIn">
        <li v-for="(item,index) in zcap" :key="index">
          <img class="block-img feature-icon" :src="item.src" alt="">
          <div class="text-center">{{item.title}}</div>
          <div class="text-detail">{{item.text}}</div>
        </li>
      </ul>
    </div>
  </section>
  <!-- 地图 -->
  <section class="section global animated">
    <div class="main aninode">
      <div class="exchange-map">
        <img class="block-img" src="/static/img/map.png" alt="">
        <div class="exchange ec-us a-scaleIn">
          <div class="spot"></div>
          <div class="spot-time">
            <p><span class="time">21:30-4:00</span>（夏令时）</p>
            <p><span class="time">22:30-5:00</span>（冬令时）</p>
            <p>美股交易时间（北京时间）</p>
          </div>
        </div>
        <div class="exchange ec-cn a-scaleIn">
          <div class="spot"></div>
          <div class="spot-time">
            <p><span class="time">9:30-11:30,13:00-15:00</span></p>
            <p>A股交易时间（北京时间）</p>
          </div>
        </div>
        <div class="exchange ec-hk a-scaleIn">
          <div class="spot"></div>
          <div class="spot-time">
            <p><span class="time">9:30-12:00,13:00-16:00</span></p>
            <p>港股交易时间（北京时间）</p>
          </div>
        </div>
      </div>
      <div class="text-area delay500 a-flyBottomIn">
          <h2 class="title">一个老虎证券账户<br>玩转美股、港股、A股</h2>
          <p class="text">老虎证券不仅可以交易美股、港股、A股（沪港通、深港通），并且支持包括北美、欧盟国家、日本、新加坡等国家在内的全球活跃证券市场，真正实现资产的全球化配置。一个交易账户，立足全球资本市场。一笔钱白天炒港股、A股（沪港通、深港通），晚上玩美股。</p>
      </div>
    </div>
  </section>
  <!-- 4个 -->
  <section class="section feature animated">
    <ul class="main aninode clear">
      <li v-for="(item,index) in small" :key="index">
        <img class="block-img feature-icon delay200 a-flyBottomIn" :src="item.src" alt="">
        <div class="delay400 a-flyBottomIn">
          <h3 class="title">{{item.title}}</h3>
          <div class="text text-l">{{item.text}}</div>
          <div class="text">{{item.text2}}</div>
        </div>
      </li>
    </ul>
  </section>
  <!-- 加入我们 -->
  <section class="section joinus animated">
    <div class="main aninode">
    <div class="title-box text-center delay300 a-flyTopIn" data-animation="a-flyTopIn">
    <h3 class="title"><span>华人地区知名美港股券商</span></h3>
    <h3 class="title">致力于为用户提供一流的全球投资体验</h3>
    </div>
    <img src="/static/img/index-logo.png" class="logo delay500 a-flyBottomIn" data-animation="a-flyBottomIn">
    <img src="/static/img/index-logo-mobile.png" class="logo-mobile delay500 a-flyBottomIn" data-animation="a-flyBottomIn">
    <router-link class="btn btn-light btn-about delay500 a-flyBottomIn" to="/about" data-animation="a-flyBottomIn">关于我们</router-link>
    </div>
  </section>
  <!-- <section class="section joinus animated">
    <img class="bg" src="/static/img/joinus.jpg" alt="">
    <div class="mask"></div>
    <div class="main aninode">
      <div class="title-box text-center delay300 a-flyTopIn">
        <h3 class="title">华人地区知名美港股券商</h3>
        <h3 class="title">致力于为用户提供一流的全球投资体验</h3>
      </div>
      <ul class="logo-box clear delay500 a-flyBottomIn">
        <li v-for="(item,index) in joinus" :key="index">
          <img :src="item.src" alt="">
        </li>
      </ul>
      <router-link to="/about" class="btn btn-light btn-about delay500 a-flyBottomIn" href="">关于我们</router-link>
    </div>
  </section> -->

  <!-- biggie -->
  <section class="section biggie animated">
    <div class="main aninode">
      <h2 class="page-title a-flyTopIn">信赖老虎证券的大咖和投资人</h2>
      <div class="biggie-touchslide-box">
          <div class="swiper-container" id="swiper2">
            <ul class="swiper-wrapper">
              <li class="swiper-slide" v-for="(item,index) in biggie" :key="index">
                <img :src="item.src" alt="">
                <p class="name">{{item.name}}</p>
                <p class="des">{{item.des}}</p>
                <p class="txt">{{item.text}}</p>
              </li>
            </ul>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
          </div>


      </div>
    </div>
  </section>
  <!-- 披露 -->
  <section class="section announce animated">
    <div class="main">
      <h6>披露</h6>
      <p>1. 日内交易属于风险较高的交易类型，请参照风险披露谨慎操作</p>
      <p>2. 客户账户均指老虎证券客户开立在盈透证券的账户</p>
      <p>3. A股的交易范围仅限于沪港通和深港通的股票范围内的标的</p>
      <p>4. 融资融券交易风险，请阅读<router-link to="/help/trade:98">此处</router-link>信息</p>
      <p>5. 系统故障或网络等待时间过长引起的订单执行风险，请阅读<router-link to="/help/trade:303">此处</router-link>信息</p>
    </div>
  </section>
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
      // 美股港股
      mggg:[
        {id:0,src:'/static/img/icon1.png',title:'投资优质公司',text:"苹果、谷歌、阿里、百度、腾讯",text2:'等尽在美股、港股等国际市场'},
        {id:1,src:'/static/img/icon2.png',title:'交易产品多样',text:'股票、期权、ETF',text2:'及更多证券衍生产品'},
        {id:2,src:'/static/img/icon3.png',title:'投资手段丰富',text:'可买涨可卖空，',text2:'无论牛市熊市都可操作'},
        {id:3,src:'/static/img/icon4.png',title:'市场透明规范',text:'市场制度完善，监管严格，',text2:'充分保护普通投资者权益'},
        {id:4,src:'/static/img/icon5.png',title:'T+0交易随时卖',text:'当天买卖，',text2:'证券流动性好，锁定收益'},
      ],
      // 资产安全
      zcap:[
        {id:0,src:'/static/img/security-1.81119663.png',title:'客户资产隔离托管',text:"客户资产托管于花旗银行等清算机构银行账户，且同名账户流通，严格按照监管部门要求执行"},
        {id:1,src:'/static/img/security-2.d62a7ce0.png',title:'受美国监管机构保护',text:"客户账户受到美国证券交易监督委员（SEC）、美国金融监管局（FINRA）、美国证券投资者保护公司（SIPC）监管"},
        {id:2,src:'/static/img/security-3.b7882bd8.png',title:'50万美元资产保护',text:"客户资产享受高达50万美元（现金额度25万美元）的证券投资人保护公司（SIPC）及商业保险赔付保护"},
      ],
      // 4个
      small:[
        {id:0,src:'/static/img/small1.png',title:'功能强大',text:'支持美股股票、ETF、期权、港股、A股沪港通和深港通交易，支持融',text2:'资融券（做空），日内交易最高4倍杠杆'},
        {id:1,src:'/static/img/small2.png',title:'股票社区',text:'专业机构、美股大咖与广大投资者一起分享投资策略，讨论投资机',text2:'会，在互动中提升投资能力'},
        {id:2,src:'/static/img/small3.png',title:'交易专线',text:'采用了国际上延迟最低的证券交易系统，实现毫秒极别的下单速度',text2:''},
        {id:3,src:'/static/img/small4.png',title:'功能强大',text:'用户的订单直达美国、香港各大交易所，得益于先进的底层智能传递',text2:'系统，下单后在多个交易所询价使订单以最优价成交'},
      ],
      // 加入我们
      joinus:[
        {id:0,src:'/static/img/index-logo-1.png'},
        {id:1,src:'/static/img/index-logo-2.png'},
        {id:2,src:'/static/img/index-logo-3.png'},
        {id:3,src:'/static/img/index-logo-4.png'}
      ],
      // biggie 
      biggie :[
        {id:0,src:'/static/img/p1.png',name:'徐小平',des:'真格基金创始人',text:'我很看好老虎证券的发展。老虎证券的团队，是我见过的互联网里最懂证券、证券行业里面最懂互联网的，他们的产品非常贴合全球华人投资美股的需求。老虎证券做的事情非常有前景，通过技术提升全球资产配置的效率。科技将改变一切，科技已经并将继续改变金融行业。'},
        {id:1,src:'/static/img/p2.png',name:'胡海泉',des:'明星投资人、羽泉组合成员',text:'老虎证券做的事情非常有前景，通过技术提升全球资产配置的效率。科技将改变一切，科技已经并将继续改变金融行业。'},
        {id:2,src:'/static/img/p3.png',name:'王兴',des:'美团网创始人兼CEO',text:'老虎证券是华人地区投资者进入美股市场的方便之门，为中国企业在推动全球资产配置方面做出了重大努力。老虎证券，一个可以信赖的美股交易平台。'},
        {id:3,src:'/static/img/p4.png',name:'洪锋',des:'小米联合创始人、副总裁（MIUI）',text:'老虎证券细节处理很用心，持续迭代很扎实。老虎证券，一个方便好用的互联网美股产品。'},
        {id:4,src:'/static/img/p5.png',name:'唐彬森',des:'智明星通CEO',text:'老虎证券支持的交易品种非常多，可以同时交易美股、港股、期权，是投资者进行海外资产配置的好选择。在老虎证券投资美股，我非常放心。'},
        {id:5,src:'/static/img/p6.png',name:'吉姆·罗杰斯',des:'华尔街著名投资人',text:'老虎证券做的事情非常有前景，通过技术提升全球资产配置的效率。科技将改变一切，科技已经并将继续改变金融行业。'},
      ],
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
    var allExchange = $('.exchange');
    var timeout =1000; //每隔50ms
    var index = 0;
    var addClassOn;
    setInterval(function(){
      if(index<=0){
        index=0;
        allExchange.eq(index).fadeIn();
        allExchange.not(index).fadeOut();
      }else if(index>allExchange.length){
        index=0;
        allExchange.eq(index).fadeIn();
        allExchange.not(index).fadeOut();
      }else{
        allExchange.eq(index).fadeIn();
        allExchange.not(index).fadeOut();
      }
      index++;
    },timeout);


 
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
      autoplay:true,
      pagination: {
        el: '#swiper1 .swiper-pagination',
        clickable :true,
      },
    });
   // 底下的轮播
    var swiper2 = new Swiper('#swiper2', {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      loop:true,
      slidesOffsetBefore:-320,
      navigation: {
        nextEl: '#swiper2 .swiper-button-next',
        prevEl: '#swiper2 .swiper-button-prev',
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
    // 轮播
    #swiper1{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 700px;
        overflow: hidden;
        background-color: #000;
        color: #fff;
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
          // .s1{
          //   .view{
          //     img{
          //       display: block;
          //     }
          //     a{
          //       display: block;
          //       height: 42px;
          //       color: #333;
          //       background-color: #ffe100;
          //       border-radius: 5px;
          //       transition: .5s ease;
          //       text-align: center;
          //       width: 200px;
          //       line-height: 42px;
          //       font-size: 16px;
          //       border: 0;
          //       font-weight: 700;
          //       margin: 20px 0
          //     }
          //     a:hover{
          //       text-decoration: none;
          //       background-color: rgb(203,203,0);
          //     }
          //   }
          // }
          .s1{
            background: url(/static/img/banner-daxin.jpg) no-repeat 50%/cover;
            a{
                display: block;
                height: 42px;
                color: #333;
                background-color: #ffe100;
                border-radius: 5px;
                transition: .5s ease;
                text-align: center;
                width: 200px;
                line-height: 30px;
                font-size: 16px;
                border: 0;
                font-weight: 700;
                margin: 20px auto;
              }
              a:hover{
                text-decoration: none;
                background-color: rgb(203,203,0);
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


            
            i{
              display: block;
              margin: 30px auto;
              width: 40px;
              height: 40px;
              line-height: 40px;
              border-radius: 50%;
              background: #ffe100;
              transition: .5s ease;
              position: relative;
              color: #fff;
              font-size: 20px;
              text-align: center;
              cursor: pointer;
            }
            i:hover{
              transform: scale(1.2);
            }
          }
        }
    }
    // 
    .advantage{
      padding: 40px 0 30px;
      background-color: #f3f3f3;
      h2{
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 1em;
        line-height: 1.4;
      }
      .container-box{
        position: relative;
        ul{
          li{
            float: left;
            width: 20%;
            text-align: center;
            img{
              width: 75px;
            }
            p.title{
              font-size: 14px;
              font-weight: 700;
              margin: 15px 0 10px;
              line-height: 1.3;
            }
            p.text{
              font-size: 12px;
              line-height: 1;
              color: #535353;
            }
          }
        }
      }
    }
    // 下载
    .download-app {
      padding: 60px 0;
      img.block-img{
        display: block;
        margin: 0 auto;
        max-width: 100%;
      }
      .delay500{
        .btn-box{
          float: right;
          width: 300px;
          margin: 38px 20px 0 0;
          img{
            width: 215px;
          }
          a.downbtn{
            display: block;
            margin: 25px auto 0;
            width: 210px;
            height: 62px;
            line-height: 62px;
            font-size: 24px;
            font-weight: 700;
            color: #000;
            border-color: #000;
            transition: all 0.5s;
            padding: 0;
          }
          a.downbtn:hover{
            background-color: #ffe100;
            border-color: #ffe100;
          }
        }
        .text-box{
          padding-right: 394px;
          padding-top: 38px;
          .show-pc{
            h2.title{
              font-size: 30px;
              font-weight: 700;
              line-height: 1.4;
            }
            p.top{
              margin-top: 30px;
            }
            p.secondary{
              font-size: 12px;
              color: #535353;
            }
          }
        }
      }
    }
    //资产安全
    .security {
        height: auto;
        color: #fff;
        background: url('/static/img/security-bg.25e456e9.jpg') no-repeat 0 0;
        background-size: cover;
        h3{
          padding: 0 4px;
          line-height: 1.2;
          font-weight: 700;
          margin: 80px 0;
        }
        ul.item-box{
          margin-bottom: 40px;
          height: 273px;
          li{
            float:left;
            width: 33.3%;
            img.block-img{
              display: block;
              margin: 0 auto 30px;
              width: 122px;
            }
            .text-center{
              padding: 0 4px;
              line-height: 1.2;
              font-weight: 700;
            }
            .text-detail{
              font-size: 12px;
              padding: 10px 15px 0;
            }
          }
        }
    }
    // 地图
    .global {
      padding: 50px 0 40px;
      background-color: #ffe100;
      text-align: center;
      .exchange-map{
        position: relative;
        .exchange {
          position: absolute;
          display: none;
          -webkit-transform-origin: 0 0;
          -ms-transform-origin: 0 0;
          transform-origin: 0 0;
          z-index: 0;
          .spot{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: red;
            float: left;
          }
          .spot-time{
            text-align: left;
            line-height: 1.2;
            padding: 4px;
            background-color: #ffe100;
            float: left;
            margin: 8px 0 0;
            font-size: 12px;
            p{
              font-size: 12px;
              .time{
                font-size: 18px;
              }
            }
          }
        }
        .ec-us{
          top: 31%;
          left: 12%;
        }
        .ec-cn {
          top: 36%;
          left: 77%;
        }
        .ec-hk {
          top: 40%;
          left: 75%;
        }
        .text-area{
          position: relative;
          z-index: 1;
          h2.title{
            font-size: 30px;
            font-weight: 700;
            line-height: 1.2;
            margin-top: -20px;
          }
          p.text{
            font-size: 12px;
            padding: 30px 70px 0;
          }
        }
      }
    }
    // 4个
    .feature {
      padding-top: 40px;
      text-align: center;
      ul{
        li{
          width: 46%;
          float: left;
          img{
            width: 144px;
          }
          .delay400 {
            h3{
              font-size: 30px;
              font-weight: 700;
              margin-top: 20px;
              line-height: 1.2;
              margin: 10px auto;
            }
            .text {
              font-size: 12px;
              padding: 0 36px;
            }
          }
        }
      }
    }
    // 加入我们
    // .joinus {
    //   margin-top: 60px;
    //   padding: 90px 0 100px;
    //   color: #fff;
    //   img.bg{
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     min-width: 100%;
    //     min-height: 100%;
    //     z-index: -10;
    //   }
    //   .joinus .mask {
    //       position: absolute;
    //       top: 0;
    //       left: 0;
    //       width: 100%;
    //       height: 100%;
    //       opacity: 0;
    //       background-color: #000;
    //   }
    //   .aninode{
    //     .title-box{
    //       margin-bottom: 30px;
    //       h3{
    //         font-size: 30px;
    //         font-weight: 700;
    //         line-height: 1.4;
    //       }
    //     }
    //     .logo-box{
    //       height: 240px;
    //       margin: 0 auto 50px;
    //       li{
    //         float: left;
    //         width: 50%;
    //         height: auto;
    //         line-height: 0;
    //         margin: 25px 0;
    //         img{
    //           display: block;
    //           width: 100%;
    //           height: auto;
    //           margin: 0 auto;
    //         }
    //       }
    //     }
    //     .btn-about {
    //       display: block;
    //       margin: 0 auto;
    //       width: 212px;
    //       height: 62px;
    //       font-size: 24px;
    //       font-weight: 700;
    //       line-height: 62px;
    //       background-color: transparent;
    //       color: #ffe100;
    //       transition: .5s ease;
    //       text-align: center;
    //       border: 1px solid;
    //       border-radius: 5px;
    //       padding: 0;
    //     }
    //     .btn-about:hover{
    //       background-color: #ffe100;
    //       color: #000;
    //     }
    //   }
    // }
      .joinus {
          background: url(/static/img/joinus2.jpg) no-repeat 0 0;
          background-size: cover;
          margin-top: 60px;
          padding: 90px 0 100px;
          color: #000;
          .title-box {
              margin-bottom: 40px;
          }
          .title {
              font-size: 30px;
              line-height: 1.4;
              span {
                  font-weight: 700;
              }
          }
          .logo {
              margin: 0 auto 50px;
              width: 100%;
          }
          .logo-mobile {
              display: none;
          }
          .btn-about {
                display: block;
                margin: 0 auto;
                width: 212px;
                height: 62px;
                font-size: 24px;
                font-weight: 700;
                line-height: 50px;
                background-color: transparent;
                color: #000;
                transition: .5s ease;
                text-align: center;
                border: 1px solid;
                border-radius: 5px;
          }
          .btn-about:hover{
            background: #000;
            color: #fff;
          }
      }
    // biggie 
    .biggie{
      height: 547px;
      padding: 60px 0;
      text-align: center;
      h2{
        text-align: center;
        margin-bottom: 40px;
        font-size: 30px;
        font-weight: 700;
        line-height: 1.4;
      }
      .biggie-touchslide-box {
        display: block;
        z-index: -1;
        height: 345px;
        #swiper2 {
          width: 100%;
          height: 100%;
          margin: 20px auto;
        }
        #swiper2 .swiper-slide {
          // float: left;
          display: inline;
          // width: 320px;
          img{
            display: block;
            margin: 0 auto;
            max-width: 100%;
          }
          p{
            display: block;
          }
          p.name{
            font-size: 24px;
            font-weight: 700;
            line-height: 1.2;
            margin-top: 18px;
          }
          p.des{
            font-weight: 700;
            margin-bottom: 8px;
          }
          p.txt{
            font-size: 12px;
            text-align: left;
            padding: 0 52px;
            color: #535353;
          }
        }
      }
    }
    //披露 
    .announce {
      background: #f7f8f8;
      padding: 30px 0;
      h6{
        margin-bottom: 12px;
        font-weight: 400;
      }
      p{
        font-size: 12px;
        margin: 2px 0;
      }
    }
    // 底部
    // 客服组件
    
</style>
