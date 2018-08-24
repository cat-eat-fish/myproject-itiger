<template>
  <div class="security">
      <div class="section about-container about-page-security animated">
            <div class="main aninode">
                <h3 class="security-title delay200 a-flyRightIn" data-animation="a-flyRightIn">老虎证券以客户资产安全为第一生命线</h3>
                <ul class="item-box">
                    <li v-for="(item,index) in lists" :key="index" class="item delay200 a-flyRightIn" data-animation="a-flyRightIn">
                        <img class="icon" :src="item.src">
                        <div class="step">{{item.title}}</div>
                        <p class="content" v-html="item.content"></p>
                    </li>
                </ul>
                <p class="tips delay500 a-flyRightIn" data-animation="a-flyRightIn">
                    备注1：老虎证券的清算公司为盈透证券，该公司是美国注册的经纪商-经销商、期货佣金商。盈透证券不仅是一个互联网券商，同时还为其他的券商提供清算服务，盈透证券提供清算服务包括账户开立和订单清算等。<br><br>
                    备注2：客户账户均指老虎证券客户开立在盈透证券的账户。
                </p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'security',
  data () {
    return {
        lists:[
            {id:0,src:'/static/img/about-4-1.png',title:'措施一：客户资产隔离托管',content:'老虎证券使用美国盈透等三方清算通道，客户资产托管在清算机构的账户内，如渣打银行、美国富国银行等银行（详情参照<a href="https://www.ibkr.com/en/index.php?f=6552" target="_blank">IB说明</a>）。此种保护措施严格按照美国证监会的要求执行，使得券商公司不能接触或挪用客户资产，且交割出金时资产只能向同名账户流通。'},
            {id:1,src:'/static/img/about-4-2.png',title:'措施二：客户账户受美国监管机构严格保护',content:'老虎证券的客户账户同时受到美国证券交易监督委员会（SEC）、美国金融业监管局（FINRA）、美国证券投资者保护公司（SIPC）的监管。其中SEC和FINRA是美国联邦政府机构；SIPC是由美国国会建立的非营利性公司，对证券经纪商的客户进行资产保护。'},
            {id:2,src:'/static/img/about-4-3.png',title:'措施三：高达50万美元账户资产保护',content:'老虎证券的客户账户均享受证券投资人保护公司(SIPC)最高达50万美元（现金额度25万美元）的保护，同时还享受额外的商业保险赔付保护，单个证券账户享有高达3000万美元的保护（现金额度为90万美元）。<span class="break">备注：此项保险，只在证券公司破产时为客户提供保护，而不针对客户在证券市场上的投资损失。'},
        ]
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
    .about-container {
        padding-top: 40px;
        overflow: hidden;
        .main {
            padding: 30px 10px 50px;
            .security-title {
                font-size: 30px;
                font-weight: 700;
                text-align: center;
            }
            .item-box {
                margin-bottom: 70px;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-flex-wrap: wrap;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                -webkit-justify-content: space-between;
                -ms-flex-pack: justify;
                justify-content: space-between;
                .item {
                    width: 28%;
                    .icon {
                        display: block;
                        width: 134px;
                        margin: 50px auto;
                    }
                    .step {
                        font-weight: 700;
                        text-align: center;
                        margin-bottom: 12px;
                        line-height: 1.4;
                    }
                    .content {
                        font-size: 12px;
                        line-height: 1.8;
                        text-align: left;
                    }
                }
            }
            .tips {
                font-size: 12px;
                color: #959595;
                padding-right: 190px;
            }
        }
    }
</style>
