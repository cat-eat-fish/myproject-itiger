<template>
<div class="personal">
  <!-- 顶部组件 -->
  <MyHead></MyHead>
        <div id="container" class="container-wrap" style="min-height: 350px;">
            <section class="business business-head">
                <img class="bg-img" src="/static/img/bg-1.jpg">
                <section class="centered">
                    <h2 class="a-flyTopIn">老虎证券海外私募机构管家<br>为机构提供一站式服务</h2>
                    <a href="mailto:service@tigerbrokers.com" class="btn btn-primary btn-business a-flyBottomIn">立即咨询</a>
                    <div class="phone-box a-flyBottomIn">
                        <div class="phone"><span></span><a href="tel:010-52291483">010-52291483</a></div>
                    </div>
                </section>
                <p>老虎证券机构专线，开启一年来获得近百家机构客户的认可，单体账户资金规模近2亿美金。我们尽心，只为您更好。</p>
            </section>
            <section class="business business-points">
                <section class="main">
                    <ul class="clear">
                        <li>
                            <span></span><p>全程免费协助<br>设立海外基金</p>
                        </li>
                        <li>
                            <span></span><p>持续营销优秀<br>海外对冲基金</p>
                        </li>
                        <li>
                            <span></span><p>精选优秀投顾<br>合作共赢</p>
                        </li>
                        <li>
                            <span></span><p>卓越的PB服务<br>深度研究支持</p>
                        </li>
                    </ul>
                </section>
            </section>
            <section class="business business-advantage">
                <section class="main">
                    <h3>老虎证券的优势</h3>
                    <section class="piece clear">
                        <img src="/static/img/icon2-1.png">
                        <div>
                            <h4>资金安全</h4>
                            <p>我们将客户资产隔离在指定给盈透客户的专用特殊银行或托管账户中。该保护（SEC称为“储备”，CFTC称为“隔离”）是证券和商品经纪的核心原则。妥善分离客户资产的益处在于当经纪商违约或破产，并且客户没有借入资金或股票并且未持有期货头寸时，客户资产可以返还给客户。盈透在这些储备和隔离账户中持有多余金额的自有资金，以确保有足够的资金保护所有客户。</p>
                        </div>
                    </section>
                    <section class="piece clear">
                        <img src="/static/img/icon2-2.png">
                        <div>
                            <h4>交易全球</h4>
                            <p>通过一个老虎证券账户即可交易全球24个国家的100多个市场中心的品种，涵盖：股票、期权、期货、外汇、债券、交易所指数基金（ETF）及差价合约（CFD）。在老虎证券，您可以用多种外币向您的账户注资，软件支持货币兑换，随时随地连接全球。佣金低廉，不断搜索并重新传递订单，以实现股票、期权与组合产品的最佳价格。</p>
                        </div>
                    </section>
                    <ul class="items clear">
                        <li><span></span>最大限度满足你做空需求</li>
                        <li><span></span>股票收益增强计划<br>交易外的盈利机会</li>
                        <li><span></span>支持多种接口<br>随意创建自动化交易系统</li>
                        <li><span></span>同时管理多个客户账户</li>
                    </ul>
                </section>
            </section>
            <section class="business business-types">
                <section class="main">
                    <h3>支持的交易品种</h3>
                    <ul class="clear">
                        <li>股票</li>
                        <li>期货</li>
                        <li>期权</li>
                        <li>外汇</li>
                        <li>债券</li>
                        <li>ETF</li>
                        <li>CFD</li>
                    </ul>
                    <p>支持多种接口，随意创建自动化交易系统</p>
                </section>
                </section>
                <section class="business business-about">
                    <img class="bg-img" src="/static/img/bg-2.jpg">
                    <section class="centered">
                        <img src="/static/img/icon5_1.png">
                        <p>老虎证券机构专线，开启一年来获得近百家机构客户的认可，<br>单体账户资金规模近2亿美金。<br>我们尽心，只为您更好。</p>
                        <a class="btn btn-primary btn-business" href="mailto:service@tigerbrokers.com">立即咨询</a>
                    </section>
                </section>
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
    components: {
        MyHead,MyFoot,Customer
    },
  name: 'personal',
  data () {
    return {

    }
  },
  created(){

  }
}
</script>
<style scoped lang="scss">
    .main{
      width: 960px;
      margin: 0 auto;
    }
    #container {
        padding: 60px 0 0;
        .business{ 
            img {
                display: block;
            }
            .bg-img {
                min-width: 100%;
            }
            h3 {
                font-size: 26px;
                font-weight: 700;
            }
            .centered {
                width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
            }
        }
        .business-head {
            position: relative;
            margin-top: -60px;
            color: #fff;
            text-align: center;
            overflow: hidden;
            p {
                position: absolute;
                bottom: 35px;
                left: 0;
                width: 100%;
                font-size: 18px;
                padding: 0 14px;
                color: #f7f5f5;
            }
             h2 {
                font-size: 44px;
                font-weight: 700;
            }
            .bg-img {
                min-height: 706px;
            }
            .centered {
                width: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
                .btn-business {
                    border-radius: 0;
                    margin-top: 40px;
                    width: 226px;
                    height: 52px;
                    line-height: 34px;
                    font-size: 18px;
                    font-weight: 700;
                    color: #333;
                    background-color: #ffe100;
                    border-color: #e6cb00;
                }
                .phone-box {
                    position: relative;
                    padding: 30px 0;
                    .phone {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        -webkit-transform: translate(-50%,-50%);
                        -ms-transform: translate(-50%,-50%);
                        transform: translate(-50%,-50%);
                        font-size: 18px;
                    }
                    span {
                        display: block;
                        width: 21px;
                        height: 21px;
                        background: url(/static/img/icon-phone.png) no-repeat 0 0;
                        background-size: 100% 100%;
                        float: left;
                        margin-top: 3px;
                        margin-right: 20px;
                    }
                    a {
                        color: #fff;
                    }
                }
            }
        }
        .business-points {
            padding: 38px 0 48px;
            height: 134px;
            color: #292929;
            ul.clear{
                height: 48px;
            }
            li {
                float: left;
                width: 26%;
            }
            span {
                display: block;
                width: 48px;
                height: 48px;
                background: url(/static/img/icon1_1.png) no-repeat;
                background-size: 100% auto;
                float: left;
            }
            li:nth-child(4) {
                width: 22%;
            }
            li:first-child span {
                background-position: 0 0;
            }
            li:nth-child(2) span {
                background-position: 0 -48px;
            }
            li:nth-child(3) span {
                background-position: 0 -96px;
            }
            li:nth-child(4) span {
                background-position: 0 -144px;
            }
            p {
                float: left;
                border-left: 1px solid #d8d8d8;
                padding-left: 16px;
                margin-left: 18px;
                margin-top: 3px;
                font-size: 18px;
                line-height: 1.2;
            }
        }
        .business-advantage {
            background-color: #f9f9f9;
            padding: 50px 0 60px;
            .piece {
                padding: 50px 0;
                border-bottom: 1px dashed #d1d1d1;
                img {
                    width: 188px;
                }
            }
            .piece:nth-child(2) img {
                float: right;
            }
            h4 {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 40px;
            }
            .piece:nth-child(3) img {
                float: left;
            }
            .piece:nth-child(2) div {
                padding-right: 276px;
            }
            .piece:nth-child(3) div {
                padding-left: 286px;
            }
            .items {
                padding-top: 50px;
                text-align: center;
                font-weight: 700;
                span {
                    display: block;
                    margin: 0 auto 45px;
                    width: 104px;
                    height: 106px;
                    background: url(/static/img/icon3_1.png) no-repeat;
                    background-size: 100% auto;
                }
                li {
                    float: left;
                    width: 25%;
                }
                li:first-child span {
                    background-position: 0 0;
                }
                li:nth-child(2) span {
                    background-position: 0 -106px;
                }
                li:nth-child(3) span {
                    background-position: 0 -212px;
                }
                li:nth-child(4) span {
                    background-position: 0 -318px;
                }
            }
        }
        .business-types {
            padding: 55px 0 65px;
            ul {
                height: 226px;
                padding: 60px 0 86px;
            }
            li{
                float: left;
                width: 80px;
                height: 80px;
                line-height: 80px;
                text-align: center;
                margin: 0 33px;
                background: url(/static/img/icon4_1.png) no-repeat 0 0;
                background-size: 100% auto;
                font-size: 18px;
                font-weight: 700;
            }
            li:first-child {
                margin-left: 0;
            }
            li:nth-child(7) {
                margin-right: 0;
            }
            p {
                font-size: 16px;
                font-weight: 700;
                text-align: center;
            }
        }
        .business-about {
            position: relative;
            text-align: center;
            font-weight: 700;
            line-height: 2;
            overflow: hidden;
            color: #fff;
            .business-about .bg-img {
                min-height: 524px;
                width: 100%;
            }
            .centered img {
                width: 90px;
                margin: 0 auto 28px;
            }
            .btn-business {
                border-radius: 0;
                margin-top: 40px;
                width: 226px;
                height: 52px;
                line-height: 34px;
                font-size: 18px;
                font-weight: 700;
                color: #333;
                background-color: #ffe100;
                border-color: #e6cb00;
            }
        }
    }

</style>
