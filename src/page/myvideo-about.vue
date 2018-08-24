<template>
  <div class="myvideo-about">
        <div class="main intro-main">
            <h2 class="title">关于股票学院</h2>
            <div class="intro-left">
            <p class="intro-text">股票学院专注于普及股票投资知识的教育，力求搭建全方位的投资养成体系，使更多人受惠于股票投资。股票学院选用一流的证券分析师和骨灰级的股票投资人作担当讲师，他们兼具学术素养和实战经验，善于把艰深专业的股票投资知识以浅显易懂方式传达给投资人。</p>
            </div>
            <ul class="items clear">
            <li class="item">
            <img class="icon-img" src="/static/img/about-icon1.png">
            <div class="icon-text">专业的直播课程</div>
            </li>
            <li class="item">
            <img class="icon-img" src="/static/img/about-icon2.png">
            <div class="icon-text">投资交流沙龙</div>
            </li>
            <li class="item">
            <img class="icon-img" src="/static/img/about-icon3.png">
            <div class="icon-text">高端投资交流群</div>
            </li>
            <li class="item">
            <img class="icon-img" src="/static/img/about-icon4.png">
            <div class="icon-text">明星导师公开课</div>
            </li>
            </ul>
        </div>
        <div class="college-section college-masters animated">
            <div class="main">
                <h2 class="title">知名投资人+资深分析师联手打造</h2>
                <div class="investor-ceo clear">
                    <div class="people">
                        <img src="/static/img/p1.png" class="avatar">
                        <h3 class="name">徐小平 &nbsp; 名誉院长</h3>
                        <h4 class="position">真格基金创始人 / 新东方联合创始人</h4>
                        <div class="desc">
                            曾经以青年导师闻名全国，如今他已是国内最著名的天使投资人，他将天使投资看做是青年导师生涯的延续，他被称为圈内最受创业者欢迎的天使投资人。
                        </div>
                    </div>
                    <div class="people">
                        <img src="/static/img/m2.png" class="avatar">
                        <h3 class="name">巫天华 &nbsp; 学院创办人</h3>
                        <h4 class="position">老虎证券创始人</h4>
                        <div class="desc">
                            老虎证券创始人，清华计算机本硕，前网易有道项目负责人，10余年股票和衍生品量化交易经验。
                        </div>
                    </div>
                </div>
                <!-- scroll -->
                <div class="teacher-list">
                    <div class="main">
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
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/js/swiper.animate1.0.2.min.js';
export default {
  name: "myvideo-about",
  data() {    
    return {
        biggie :[
        {id:0,src:'/static/img/m3.png',name:'李剑威',des:'特邀顾问',text:'真格基金合伙人，首席投资官，曾任红杉资本副总裁，富达亚洲副总裁，主要关注智能硬件，企业服务等领域，曾主导投资华米科技等十多个企业。'},
        {id:1,src:'/static/img/m5.png',name:'胡海泉',des:'特邀顾问',text:'羽泉组合成员；天使投资人。涉足可穿戴设备、在线旅游等领域的天使和A轮投资，曾参与投资手游《龙之召唤》和土曼科技等创业公司。'},
        {id:2,src:'/static/img/m6.png',name:'Robert',des:'特邀顾问',text:'毕业于浙江大学经济学专业，师从著名经济学家周其仁。历任电子商务行业高管（newegg、钻石小鸟等）、贵金属券商董事长特助兼研究部门总监，与腾讯共建白银频道。'},
        {id:3,src:'/static/img/m7.png',name:'牙公子',des:'特邀顾问',text:'牛津大学本科，伦敦政治经济学院研究生毕业，金融大鳄索罗斯同门师妹。曾任华尔街知名投行证券交易员。现任老虎证券美股研究员，主要研究方向为美股中概股及科技股。'},
        {id:4,src:'/static/img/m8.png',name:'TJ',des:'特邀顾问',text:'美国克拉科大学研究生毕业，金融学硕士。曾任华尔街卖方分析师，现任国内知名证券公司海外分析师，主攻业务方向为美股二级市场。近10年股票投资经历，主要投资方向互联网中概股。'},
      ],
    };
  },
    mounted(){
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
};
</script>
<style scoped lang="scss">
.myvideo-about {
  padding-top: 40px;
}
.main {
  position: relative;
  width: 960px;
  margin: 0 auto;
  h2.title {
    font-size: 30px;
    font-weight: 700;
    line-height: 60px;
  }
  .intro-left {
    text-align: justify;
  }
  .items {
    padding: 64px 0 80px;
    .item{
        float: left;
        width: 25%;
        .icon-img {
            display: block;
            width: 100px;
            margin: 0 auto 24px;
        }
        .icon-text {
            font-size: 16px;
            text-align: center;
        }
    }
  }
}
.college-masters{
    .investor-ceo {
        margin-top: 10px;
        .people{
            float: left;
            width: 50%;
            .avatar {
                display: block;
                margin: 0 auto 20px;
            }
            .name {
                font-size: 24px;
                font-weight: 700;
                text-align: center;
                color: #000;
            }
            .position {
                text-align: center;
            }
            .desc {
                padding: 20px 80px;
            }
        }
    }
    // 轮播
    .teacher-list {
        position: relative;
        overflow: hidden;
        height: 430px;
        width: 100%;
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
              text-align: center;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.2;
            margin-top: 18px;
          }
          p.des{
            font-weight: 700;
            margin-bottom: 8px;
          }
          p.des{
            text-align: center;
            font-weight: 400;
            font-size: 12px;
            padding: 0 52px;
            color: #535353;
          }
          p.txt{
              padding: 15px 60px;
          }
        }
    }
}
</style>
