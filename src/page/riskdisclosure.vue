<template>
    <div class="riskdisclosure">
        <div id="container" class="container-wrap" style="min-height: 350px;">
            <div class="main">
                <h3 class="title">
                    风险披露
                </h3>
                <ul class="list-wrap">
                    <li v-for="(item,index) in lists" :key="index" class="list-item">
                        <a :href="item.href" target="_blank">{{item.text}}</a>
                    </li>
                </ul>
                <div class="warn">
                    <p>风险提醒：通过网络交易股票、期权、期货、外汇、外国证券和债券的损失可能是巨大的。期权并非适合所有的投资人。有关详细信息，请阅读“Characteristics and Risks of Standardized Options”。索取复印本，请访问 <a href="http://www.theocc.com/about/publications/character-risks.jsp" target="_blank">http://www.theocc.com/about/publications/character-risks.jsp</a>。在交易开始之前，请阅读我们的“期权风险披露声明”：<a href="/agreement/9" target="_blank">https://www.itiger.com/agreement/9</a>。使用保证金进行交易仅适用于可承受高风险的专业投资人。您的损失可能会大于您的初始投资。</p><br>
                    <p>所有投资都存在风险。任何一支证券或金融产品的历史数据都不能保证其未来的表现及回报。虽然投资多样化可以帮助分散风险，但是并不能在市场低迷时确保您获益或防止您损失。投资证券或金融产品总会存在潜在的亏损可能。投资者在进行投资前需考虑自身的投资目标及风险承受能力。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'riskdisclosure',
  data () {
    return {
        lists:[
            {id:0,text:'保证金风险交易披露',href:"https://www.interactivebrokers.com/Universal/servlet/Registration.formSampleView?ad=margin_trading_risk_disclosure.html",},
            {id:1,text:'外汇及多币种账户披露',href:"https://gdcdyn.interactivebrokers.com/Universal/Application?action=formSampleView&amp;formdb=3024&amp;lang=en_US",},
            {id:2,text:'日内交易风险披露',href:"https://gdcdyn.interactivebrokers.com/Universal/servlet/Registration_v2.formSampleView?ad=day_trading_risk_disclosure.html",},
            {id:3,text:'盘后交易风险披露',href:"https://gdcdyn.interactivebrokers.com/Universal/servlet/Registration_v2.formSampleView?ad=afterHoursTradingRiskDisclosure.html",},
            {id:4,text:'商品期货交易委员会风险披露声明',href:"https://www.itiger.com/agreement/6?skin=2",},
            {id:5,text:'投资组合保证金风险披露',href:"https://gdcdyn.interactivebrokers.com/Universal/servlet/Registration.formSampleView?url=jsp/html/PMRGNRiskDisclosure.html",},
            {id:6,text:'期权交易风险披露',href:"/agreement/9"},
            {id:7,text:'CFTC风险披露 - 规则1.55的附录',href:"https://gdcdyn.interactivebrokers.com/Universal/servlet/Registration.formSampleView?ad=cftc_risk_disclosure.html",},
            {id:8,text:'CFTC风险披露声明 - 规则1.55(b)',href:"https://gdcdyn.interactivebrokers.com/Universal/servlet/Registration.formSampleView?ad=cftc_risk_disclosure_rule_1_55.html",},
        ]
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
        a{
            text-decoration: none;
        }
        .title {
            text-align: center;
            font-size: 24px;
            border-bottom: 1px solid #e6e6e6;
            padding: 20px 0 5px;
            font-weight: 700;
        }
        .list-wrap {
            margin: 30px;
            .list-item {
                list-style: decimal;
                padding: 10px 0;
                font-size: 15px;
                vertical-align: top;
                a {
                    display: inline-block;
                    position: relative;
                    border-bottom: 3px solid #ffe100;
                    -webkit-transition: border .5s ease;
                    -o-transition: border .5s ease;
                    transition: border .5s ease;
                }
                a:hover{
                    border-color: rgb(92, 184, 92)
                }
            }
        }
        .warn {
            font-size: 12px;
            color: #666;
            margin: 30px 10px;
        }
    }

</style>
