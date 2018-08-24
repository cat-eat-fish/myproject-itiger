<template>
  <div class="myabout">
      <div class="about-container about-page-overview">
            <!-- 业务定位 -->
            <div class="section position border animated">
                <div class="main aninode">
                    <h3 class="sub-title a-flyRightIn">
                        业务定位
                    </h3>
                    <div class="img-box">
                        <div class="content">
                            <h4 class="content-title delay200 a-flyRightIn">
                                华人地区知名美港股券商<br>致力于为用户提供一流的全球投资体验
                            </h4>
                            <p class="text-box delay400 a-flyRightIn">
                                证券业务覆盖美股、港股、A股等主流证券市场<br>自由选择市场上的股票、期权、ETFs、债券、外汇等丰富交易品种<br>灵活投资、实现收益最大化。   
                            </p>   
                        </div>
                    </div>
                </div>
            </div>
            <!-- 金融资质 -->
            <div class="section super border animated">
                <div class="main aninode">
                    <h3 class="sub-title a-flyRightIn">金融资质</h3>
                    <ul class="items">
                        <li v-for="(item,index) in jrzz" :key="index" class="super-item nzx delay200 a-flyRightIn">
                            <img :src="item.img_src" alt="">
                            <h5 class="super-title">{{item.title}}</h5>
                            <p class="super-text" v-html="item.a_text"></p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 业务趋势 -->
            <div class="section super border animated">
                <div class="main aninode">
                    <h3 class="sub-title a-flyRightIn">业务趋势</h3>
                    <ul class="items ywqs delay200 a-flyRightIn">
                        <li v-for="(item,index) in ywqs" :key="index" class="super-item nzx delay200 a-flyRightIn">
                            <h5>{{item.title}}</h5>
                            <p v-html="item.text"></p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 管理团队 -->
            <div class="section super border animated">
                <div class="main aninode">
                    <h3 class="sub-title a-flyRightIn">管理团队</h3>
                    <p class="team-text delay200 a-flyRightIn">
                        老虎证券的管理团队拥有多年国际化金融市场经验和互联网产品技术背景，主要团队成员来自高盛、芝加哥交易所、国信证券、网易、腾讯、百度、小米等知名金融机构和互联网公司。
                    </p>
                </div>
            </div>
            <!-- 投资方信息 -->
            <div class="section super border animated">
                <div class="main aninode">
                    <h3 class="sub-title a-flyRightIn">投资方信息</h3>
                    <ul class="logos clear delay200 a-flyRightIn">
                        <li v-for="(item,index) in tzfxx" :key="index">
                            <img :src="item.img_src" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 合作伙伴 -->
            <div class="section super border animated">
                <div class="main aninode">
                    <h3 class="sub-title a-flyRightIn">投资方信息</h3>
                    <div class="coop-box delay200 a-flyRightIn">
                        <img src="/static/img/about-1-logo3.png" alt="">
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'myabout',
  data () {
    return {
        jrzz:[
            {id:0,img_src:'/static/img/about-1-super1.png',title:'NZX Participant',a_text:'<a href="">新西兰证券交易所成员</a>'},
            {id:1,img_src:'/static/img/about-1-super2.png',title:'Financial Service Providers Register',a_text:'注册金融服务商（编号：<a href="">FSP473106</a>，<a href="">FSP443886</a>）'}
        ],
        ywqs:[
            {id:0,title:'中文客服',text:'全天20小时贴心守候'},
            {id:1,title:'功能强大',text:'支持美股股票、ETF、期权、港股、<br>A股沪港通和深港通交易'},
            {id:2,title:'融资融券',text:'美股港股均支持融资融券<br>融资年化利率低廉'},
            {id:3,title:'极速开户',text:'足不出户<br>开通美股港股账户'},
            {id:4,title:'超低佣金',text:'美股佣金$0.0039/股(USD)<br>港股万2.9，小额订单免佣(HKD)'},
            {id:5,title:'免费行情',text:'免费享用美股、港股<br>A股实时行情'},
        ],
        tzfxx:[
            {id:0,img_src:'/static/img/about-1-invest1.png'},
            {id:1,img_src:'/static/img/about-1-invest2.png'},
            {id:2,img_src:'/static/img/about-1-invest3.png'},
            {id:3,img_src:'/static/img/about-1-invest4.png'},
        ],
    }
  },
  mounted(){



    $(function(){
        
    })


  }





}
</script>

<style scoped lang="scss">
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
        .about-tab-box{
            background: #f2f2f2;
            width: 100%;
            display: block;
            position: fixed;
            top: 60px;
            z-index: 8;
            .main{
                text-align: center;
                display: flex;
                justify-content: space-between;
                a{
                    color: #000;
                    padding: 13px;
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    position: relative;
                    box-sizing: border-box;
                }
                a.active:after{
                    z-index: 100;
                    content: "";
                    width: 100%;
                    border-bottom: 2px solid #ffe202;
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    -webkit-transform: scale(0);
                    -ms-transform: scale(0);
                    transform: scale(0);
                    -webkit-transition: all .5s;
                    -o-transition: all .5s;
                    transition: all .5s;
                }
                a:hover{
                    border-bottom: 2px solid #ffe202;
                }
            }
        }
        .about-container {
            padding-top: 40px;
            overflow: hidden;
            .border {
                border-bottom: 1px dashed #d3d3d3;
                .main {
                    padding: 30px 10px 50px;
                    h3.sub-title{
                        font-size: 18px;
                        font-weight: 700;
                        margin-bottom: 10px;
                    }
                    .img-box{
                        min-height: 320px;
                        text-align: center;
                        color: #fff;
                        position: relative;
                        background: url(/static/img/about-1-bg.jpg) no-repeat 50%/cover;
                        .content{
                            padding: 80px 10px;
                            h4{
                                font-size: 30px;
                                line-height: 1.4;
                            }
                            p{
                                font-size: 12px;
                                padding: 14px 0;
                            }
                        }
                    }
                    .items{
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 20px;
                        li{
                            width: 50%;
                            text-align: center;
                            font-size: 15px;
                            img{
                                text-align: center;
                                width: 40%;
                                height: auto;
                            }
                            h5{
                                margin-top: 10px;
                                font-weight: 400;
                            }
                            p{
                                font-size: 15px;
                                a{
                                    text-decoration: none;
                                    color: #4e97fa;
                                }
                            }
                        }
                    }
                    .ywqs{
                        li{
                            width: 33%;
                            text-align: center;
                            padding: 10px 0;
                            h5{
                                font-size: 24px;
                                line-height: 1.3;
                                font-weight: 700;
                                margin: 10px auto;
                            }
                            p{
                                line-height: 1.3;
                                font-size: 14px;
                                color: #333;
                            }
                        }
                    }
                    .team-text{
                        margin-top: 20px;
                    }
                    .logos{
                        margin: 10px auto;
                        display: flex;
                        flex-wrap: wrap;
                        li{
                            float: left;
                            width: 50%;
                            height: auto;
                            margin: 26px 0;
                            img{
                                display: block;
                                width: 100%;
                                height: auto;
                                margin: 0 auto;
                            }
                        }
                    }
                    .coop-box{
                        img{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
    
</style>












