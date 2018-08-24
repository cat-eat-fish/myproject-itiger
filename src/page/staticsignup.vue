<template>
  <div class="staticsignup" style="z-indx:-10; width: 100%;height: 100%;background-color: #3f0a59;">
      <div class="device_wrap">
        <div class="header">
            <img src="/static/img/background.png" alt="" class="background"> 
            <img src="/static/img/slogn.png" alt="" class="slogn">
        </div>
        <div class="scroll_message" style="perspective: 1000px;">
            <ul class="scroll_message_container" id="scroll_message_container" >
                <li v-for="(item,index) in mydata" :key="index" style="">
                    {{item.user}}入金获得¥200
                </li>
            </ul>
        </div>
        <section class="section flow">
            <div class="title_box">
                <div class="title_box_container">
                    <div class="line"></div>
                    <div class="title">活动流程</div>
                </div>
            </div>
            <div class="flow_intro">
                <div class="intro icons">
                    <img src="/static/img/card_00.png" alt=""> 
                    <img src="/static/img/card_01.png" alt="">
                    <img src="/static/img/card_02.png" alt="">
                </div>
                <div class="intro orders">
                    <div class="line"></div>
                    <div class="order">1</div>
                    <div class="order">2</div>
                    <div class="order">3</div>
            </div>
            <div class="intro desc">
                <div>开通账户</div>
                <div>入金／转户</div>
                <div>领取奖励</div>
            </div>
        </div>
        <a href="/accounts" class="get">
            立即领取
        </a>
    </section>
    <section class="section hk_desc">
        <div class="title_box">
            <div class="title_box_container">
                <div class="title">港股狂欢 开户即享</div>
                <div class="line"></div>
            </div>
        </div>
        <div class="containers">
            <img src="/static/img/card_10.png" alt="">
            <img src="/static/img/card_11.png" alt="">
        </div>
    </section>
    <section class="section why">
        <div class="title_box">
            <div class="title_box_container">
                <div class="title">为什么选择老虎</div>
                <div class="line"></div>
            </div>
        </div>
        <div class="container">
            <div class="advance">
                <img src="/static/img/card_20.png" alt="">
                <div class="advs">
                    <div class="adv1">实力雄厚</div>
                    <div class="adv2">小米、美国盈透等战略投资</div>
                </div>
            </div>
            <div class="advance">
                <img src="/static/img/card_21.png" alt="">
                <div class="advs">
                    <div class="adv1">交易利器</div>
                    <div class="adv2">三年精益打造美港股交易软件</div>
                </div>
            </div>
            <div class="advance">
                <img src="/static/img/card_22.png" alt="">
                <div class="advs">
                    <div class="adv1">账户强大</div>
                    <div class="adv2">一笔钱白天炒港股 晚上买美股</div>
                </div>
            </div>
            <div class="advance">
                <img src="/static/img/card_23.png" alt="">
                <div class="advs">
                    <div class="adv1">股票社区</div>
                    <div class="adv2">跟着大V买股票，掌握最新资讯</div>
                </div>
            </div>
        </div>
    </section>
    <section class="section live_line">
        <div class="title_box">
            <div class="title_box_container">
                <div class="title">以客户资产为第一生命线</div>
                <div class="line"></div>
            </div>
        </div>
        <div class="container">
            <div class="spe">
                <img src="/static/img/card_30.png" alt="">
                <div class="feature">客户资产</div>
                <div class="feature">隔离托管</div>
            </div>
            <div class="spe">
                <img src="/static/img/card_31.png" alt="">
                <div class="feature">美国监管</div>
                <div class="feature">机构保护</div>
            </div>
                <div class="spe">
                    <img src="/static/img/card_32.png" alt="">
                    <div class="feature">3000万美元</div>
                    <div class="feature">资产保护</div>
                </div>
            </div>
        </section>
        <section class="section rule">
            <div class="title_box">
                <div class="title_box_container">
                    <div class="title">活动规则</div>
                    <div class="line"></div>
                </div>
            </div>
            <ul class="container">
                <li>活动时间：2018年6月1日00:00:00至2018年7月31日23:59:59；</li>
                <li>获得奖励：通过好友的邀请开户并首次入金\转户成功后，即可获得美股免佣卡或200元人民币现金奖励（账户资产应不低于3000美金）；</li>
                <li>领取奖励：在APP中“我的-领取奖励”处可以查看奖励情况，点击“领取”可选择现金或免佣卡；选择现金后，填写并确认银行卡信息即可发起奖金领取，工作人员审核后，将于每个自然月的第一周统一发放；选择免佣卡后，免佣卡即刻生效，如已有免佣卡处于激活使用中，则需待该免佣卡失效后，新卡自动激活；</li><li>关于免佣卡：免佣卡可免除美股股票、港股股票、美港股ETF交易中老虎证券应收的费用；单张免佣卡可免除90天内的15次交易费用；单次可免除费用的最高金额为15美金或等值港币；免佣卡激活后达到90天，或免佣次数用尽，将自动失效；</li><li>特别说明：本活动奖励不与老虎证券的其他新入金奖励同时享受，如有冲突，老虎证券将为用户发放价值最高的奖励；</li><li>依中国大陆现行税法之规定，政府对用户的奖金所得将征收20%的个人所得税。为创造更优质的用户体验，受邀用户的实际到账奖励金200元将不作额外扣税，老虎证券为用户承担相关税费。</li>
            </ul>
        </section>
    </div>
  </div>
</template>

<script>
import "@/assets/js/rem.js";
export default {
  name: 'staticsignup',
  data () {
    return {
        mydata:[
            {id:0,user:'156****0256'},
            {id:0,user:'156****0256'},
            {id:0,user:'156****0256'},
            {id:0,user:'156****0256'},
            {id:0,user:'156****0256'},
            {id:0,user:'156****0256'},
            {id:0,user:'156****0256'},
        ]
    }
  },
  created(){
    
  },
  methods:{
    
  }
}
</script>
<style scoped lang="scss">
    .stticsignup{
        width: 100%;
        height: 100%;
        background-color: #3f0a59;
    }
    .device_wrap {
        width: 3.75rem;
        margin: 0 auto;
        position: relative;
        padding-top: 1.8rem;
        .header{
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            img.background{
                width: 100%;
                display: block;
            }
            img.slogn{
                width: 2.18rem;
                position: absolute;
                top: .2rem;
                left: .2rem;
            }
        }
        .scroll_message{
            position: absolute;
            top: 1.45rem;
            width: 2.2rem;
            height: .26rem;
            left: 50%;
            margin-left: -1.1rem;
            background-color: hsla(0,0%,100%,.7);
            border-radius: 13px;
            background-image: url(/static/img/scroll_tips_icon.png);
            background-repeat: no-repeat;
            background-size: .2rem .22rem;
            background-position: .1rem .02rem;
            padding-left: .2rem;
            font-size: .12rem;
            color: #1e1e1e;
            overflow: hidden;
            ul.scroll_message_container{
                margin: 0;
                width: 100%;
                position: relative;
                height: 0.26rem;
                li{
                    line-height: 0.28rem;
                    text-align: center;
                    position: absolute; 
                    top: 0px; 
                    left: 0px; 
                    width: 100%; 
                    height: 100%; 
                    display: blobk; 
                    // transform: rotateX(0deg) translateZ(19.5px);
                }
            }
        }
        .section{
            margin: .1rem;
            background: #fff;
            border-radius: 2px;
            padding: 1px 0;
            .intro{
                display: flex;
                justify-content: space-between;
                margin: 0 auto;
            }
            .title_box{
                height: .24rem;
                padding: .14rem 0;
                text-align: center;
                position: relative;
                .title_box_container{
                    position: relative;
                    display: inline-block;
                    height: .24rem;
                    padding: 0 .22rem;
                    .line{
                        width: 100%;
                        height: 2px;
                        background: #45165d;
                        position: absolute;
                        left: 0;
                        top: 50%;
                    }
                    .title{
                        font-size: .16rem;
                        color: #45165d;
                        padding: 0 .12rem;
                        background: #fff;
                        font-weight: 700;
                        position: relative;
                        z-index: 1;
                    }
                }
            }
            .flow_intro{
                margin-top: .4rem;

                .icons{
                    width: 2.8rem;
                    display: flex;
                    justify-content: space-between;
                    margin: 0 auto;
                    img{
                        width: .5rem;
                        height: .5rem;
                    }
                }
                .orders {
                    width: 2.5rem;
                    margin: .16rem auto;
                    position: relative;
                    .line{
                        position: absolute;
                        background: #fdb875;
                        width: 100%;
                        height: 2px;
                        left:0;
                        top: 50%;
                    }
                    .order{
                        width: .22rem;
                        height: .22rem;
                        background: #fdb875;
                        border-radius: 100%;
                        text-align: center;
                        color: #fff;
                        line-height: .22rem;
                        position: relative;
                        z-index: 1;
                    }
                }
                .desc{
                    color: #45165d;
                    width: 2.8rem;
                }
            }
            .get{
                display: block;
                margin: .3rem auto;
                width: 3.06rem;
                height: 0.45rem;
                background: #f8cc00;
                border-radius: .45rem;
                text-align: center;
                line-height: .46rem;
                font-size: .16rem;
                color: #333;
            }
        }
        .flow{
            position: relative;
            z-index: 10;
        }
        // 港股
        .hk_desc{
            .containers{
                width: 3.3rem;
                margin: .3rem auto;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                justify-content: space-between;
                img{
                    width: 1.6rem;
                    height: 1.08rem;
                    display: block;
                }
            }
        }
        // why
        .why {
            .container{
                width: 2.6rem;
                margin: .3rem auto;
                .advance{
                    display: flex;
                    margin-top: .26rem;
                    img{
                        width: .46rem;
                        height: .46rem;
                        margin-right: .2rem;
                        display: block;
                    }
                    .advs{
                        .adv1{
                            color: #f76f1c;
                            font-size: .16rem;
                            font-weight: 700;
                        }
                        .adv2{
                            color: #666;
                            font-size: .13rem;
                        }
                    }
                }
            }
        }
        // 以客户资产
        .live_line{
            .container{
                width: 3rem;
                margin: .3rem auto;
                display: flex;
                .spe{
                    width: 1rem;
                    text-align: center;
                    img{
                        margin: 0 auto .1rem;
                        width: .46rem;
                        height: .46rem;
                    }
                    .feature{
                        color: #f86f1d;
                        font-size: .15rem;
                    }
                }
            }
        }
        // 活动规则
        .rule{
            .container{
                width: 2.8rem;
                margin: .3rem auto;
                color: #45165d;
                font-size: .14rem;
                li{
                    margin: .1rem 0;
                    text-align: justify;
                    list-style: decimal;
                }
            }
        }
    }
</style>






