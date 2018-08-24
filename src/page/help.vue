<template>
  <div class="help">
  <!-- 顶部组件 -->
  <MyHead></MyHead>
  <!--  -->
  <div id="container" v-if="nowstate">
        <div class="help-index-banner">
            <div class="main">
            <h1>欢迎来到帮助中心</h1>
            <h2>更快捷更简易的查询体验</h2>
            </div>
        </div>
        <div class="main">
            <div class="help-index-search">
                <h2 class="title">关键词查找</h2>
                <form @submit.prevent="submit" class="help-search-form">
                <input type="text" v-model="inputtext.keyword" name="keyword" placeholder="输入问题关键词" class="search">
                <button type="submit" class="search-icon iconfont icon-fangdajing"></button>
                </form>
            </div>
            <div class="help-index-nav">
                <h2 class="title border-title">分类查找</h2>
                <div class="category-list clearfix">



        <div class="category clearfix" v-for="(item,index) in helpNav" :key="index">
            <div class="icon" :style="{backgroundPosition:item.iconpos}"></div>
            <div class="nav-links">
                <h3 class="category-name">
                    <span class="c-link" :title="item.title">{{item.title}}</span>      
                </h3>
                <ul class="children">
                    <li v-for="(item2,index2) in item.content" :key="index2">
                        <a class="c-link c-link-small" :href="item2.href" :title="item2.text">
                            {{item2.text}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
            <!-- faq -->
            <div class="help-faq">
                <h3>FAQ</h3>
                <h4>老虎证券标准账户使用常见问题</h4>
                <h5 v-for="(item,index) in faq" :key="index"  class="show">
                    <div class="clic">
                        <i class="iconfont icon-you"></i>
                        <p>Q：{{item.problem}}</p>
                    </div>
                    <div class="item">
                        <span class="answer">A：</span>
                        <p v-html="item.answer"></p>
                    </div>
                </h5>
            </div>
        </div>
  </div>
    <router-view v-if="!nowstate"></router-view>
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
  name: 'help',
  components: {
    MyHead,MyFoot,Customer
  },
  data () {
    return {
      nowstate:true,
      helpNav:[
          {iconpos:'0 0',title:'开户指南',content:[
              {id:0,text:'零入金门槛开户',href:'/help/guide/573'},
              {id:1,text:'如何开户',href:'/help/guide/105'},
              {id:2,text:'邀请码',href:'/help/guide/106'},
              {id:3,text:'开户相关问题',href:'/help/guide/107'},
          ]},
          {iconpos:'0 -38px',title:'资金相关',content:[
              {id:0,text:'入金必读',href:'/help/funds/115'},
              {id:1,text:'入金流程',href:'/help/funds/116'},
              {id:2,text:'提取资金',href:'/help/funds/117'},
              {id:3,text:'货币兑换',href:'/help/funds/242'},
          ]},
          {iconpos:'0 -77px',title:'收费标准',content:[
              {id:0,text:'港股收费（新）',href:'/help/charge/531'},
              {id:1,text:'美股收费（新）',href:'/help/charge/532'},
              {id:2,text:'新股申购收费',href:'/help/charge/606'},
              {id:3,text:'沪(深)港通收费',href:'/help/charge/111'},
          ]},
          {iconpos:'0 -115px',title:'美股交易',content:[
              {id:0,text:'美股行情',href:'/help/trade/95'},
              {id:1,text:'市场规则',href:'/help/trade/95'},
              {id:2,text:'订单类型',href:'/help/trade/95'},
              {id:3,text:'融资融券',href:'/help/trade/95'},
          ]},
          {iconpos:'0 -154px',title:'港股交易',content:[
              {id:0,text:'交易相关',href:'/help/tradehk/122'},
              {id:1,text:'行情相关',href:'/help/tradehk/123'},
              {id:2,text:'窝轮交易',href:'/help/tradehk/449'},
              {id:3,text:'牛熊证交易',href:'/help/tradehk/450'},
          ]},
          {iconpos:'0 -192px',title:'A股交易',content:[
              {id:0,text:'A股交易相关',href:'/help/tradezg/207'},
          ]},
          {iconpos:'0 -231px',title:'股票转移',content:[
              {id:0,text:'股票转入',href:'/help/atransfer/118'},
              {id:1,text:'股票转出',href:'/help/atransfer/119'},
              {id:2,text:'股票转移方式',href:'/help/atransfer/120'},
              {id:3,text:'股票转移费用',href:'/help/atransfer/121'},
          ]},
          {iconpos:'0 -269px',title:'隐私安全',content:[
              {id:0,text:'资金安全',href:'/help/security/103'},
              {id:1,text:'隐私安全',href:'/help/atransfer/102'},
              {id:2,text:'安全相关问题',href:'/help/atransfer/104'},
          ]},
      ],
      faq:[
        {id:0,problem:'老虎证券相比于传统券商有什么区别和优势？',answer:'开户便捷 —— 开户便捷，只需几分钟即可完成注册；<br>成交迅速 —— 专线直连保证成交价格更优；<br>优质服务 —— 全中文的客服覆盖美股交易时间同时保证极高的接通率；<br>交易软件 —— 自主研发的APP以及PC端交易软件，界面友好、稳定性强，全面优化用户的操作体验；',},
        {id:1,problem:'我在老虎证券开通的标准账户及账户里的资金是受保护的吗？',answer:'在老虎证券所开立的标准证券账户，受新西兰交易所和证监会的严格监管。客户资产由第三方银行托管在专门的客户资金账户中，未经客户授权动用客户资产，属于严重违法行为。因此，若非获得客户本人授权，老虎证券将无法处置客户账户内的任何资产。<br>老虎标准账户，用户订单的执行和清算，与老虎环球账户是完全一致的。',},
        {id:2,problem:'老虎标准账户与老虎环球账户有何差异？',answer:'<div class="table-scrollbox"><table style=" margin-top:10px;text-align:center; border: 1px solid #ccc;min-width: 500px;background-color: #fff;" id="mytable"><tbody><tr><td></td><td>环球账户</td><td>标准账户</td></tr><tr><td>开户周期</td><td>2-3个交易日</td><td>1个交易日内</td></tr><tr><td>入金门槛</td><td style="padding:5px;">3000美金/等值港币</td><td>0门槛</td></tr><tr><td>交易产品</td><td>美股正股/美股ETF/美股期权<br>港股正股/港股衍生品</td><td>美股正股/美股ETF/港股正股</td></tr><tr><td>融资</td><td>是</td><td>是</td></tr><tr><td>融券</td><td>是</td><td>否，正在开发中</td></tr></tbody></table></div>',},
        {id:3,problem:'我在老虎证券上进行交易，老虎证券怎么保护我的隐私数据？',answer:'老虎证券在登录和交易环节采用了自主研发领先的安全和加密技术，基于角色的最严格内控系统，严格防止外部攻击者对用户隐私信息的获取，为用户交易保驾护航。',},
        {id:4,problem:'老虎证券标准账户可以交易哪些品种？',answer:'老虎证券标准账户目前支持交易美股正股、ETF和港股正股。',},
        {id:5,problem:'老虎证券标准账户的美股收费标准是什么？',answer:'美股交易佣金是0.0039美元/股，单笔最低佣金为0.99美元。<br>如果单笔佣金小于0.99美元，则按0.99美元收取。<router-link to="a">详见</router-link>\>\>',},
        {id:6,problem:'老虎证券标准账户的港股收费标准是什么？',answer:'港股交易佣金是交易额的万2.9，佣金起收点为62069港币。<br>即当交易额低于或等于62069港币时，佣金为0；当交易额高于62069港币时，佣金为0.029%*（交易额-62069港币）。<router-link to="a">详见</router-link>\>\>',},
        {id:7,problem:'老虎证券标准账户首次入金有最低的限额吗？我需要入多少钱才可以开始交易？',answer:'首次入金没有门槛限制。',},
        {id:8,problem:'我可以通过哪些方式汇款到我的证券账户？',answer:'建议您直接通过网银电汇方式汇款，先进行美元/港元的购汇，再进行跨境转账汇款。',},
        {id:9,problem:'汇款会产生费用吗？汇款多久可以到账？',answer:'关于入金，银行会收取手续费、电邮费以及中转行费用，中转行费用一般按笔收取，每笔25美元左右。<br>银行间后台处理汇款申请需要一定时间，银行通知“已汇出”不等于老虎证券已收到款项。资金到达证券账户后需要进行资金的结算与审批。一般跨境转账，资金汇出后还需要经过中转行，中转后再到收款行。根据不同银行的处理时效，在您汇款成功后，香港卡1-2个工作日左右资金可以到账；境内银行卡2-3个工作日左右资金可以到账，具体到账时间需要以银行为准。',},
        {id:10,problem:'老虎证券标准账户支持哪些币种汇款？',answer:'目前入金币种支持美元、港元。',},
        {id:11,problem:'我可以通过哪些方式取款到我的银行账户？',answer:'关于出金，您需要先登录老虎证券官网-个人中心-提取资金，填写相关信息后，点击通知老虎处理款项；',},
        {id:12,problem:'取款会产生费用吗？取款多久可以到？',answer:'老虎证券1美金／笔+银行15美金／笔+中转行费用，中转行费用收取需要以银行为准，中转行费用一般是25美元左右；<br>到账时间：一般情况下会在收到您的指令后1天内将款项汇出，1-4个工作日后可以到达您的银行账户。',},
      ],
      isRotate:true,
      inputtext:{}
    }
  },
  mounted(){
        $('.help-faq .clic').attr("data-isRotate","true");
        $('.help-faq .clic').click(function(){
            $(this).next('.item').slideToggle();
        })
        // 表格样式
        $('#mytable td').css({padding:'5px',minWidth: '100px',border: '1px solid #ccc',textAlign: 'center',verticalAlign: 'middle'});
  },
  methods:{
    submit: function() {
	if(this.inputtext.keyword){
        this.$router.push({path:'/help/search',query:{keyword:this.inputtext.keyword}});
        scrollTo(0,0);
      }else{
        return false;
      }
	}
  },
  created(){
      var a=this.$route.path;
      if(a!='/help'){
          this.nowstate=false
      }
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

    .help-index-banner {
        background: url(/static/img/about-help-bg.jpg) no-repeat 50%;
        background-size: cover;
        height: 353px;
        text-align: center;
        font-weight: 700;
        padding-top: 120px;
        h1 {
            font-size: 40px;
            font-weight: 400;
        }
        h2 {
            font-size: 24px;
        }
    }
    .title {
        text-align: left;
        font-size: 30px;
        padding: 80px 0 13px;
        font-weight: 700;
    }
    .container-wrap .title {
        text-align: left;
        font-size: 30px;
        padding: 80px 0 13px;
        font-weight: 700;
    }
    .help-search-form {
        position: relative;
        .search {
            display: block;
            width: 100%;
            height: 38px;
            padding: 8px 50px 8px 8px;
            border: none;
            outline: none;
            border-radius: 5px;
            background-color: #f4f4f4;
            -webkit-appearance: button;
        }
        .search-icon {
            border: 0;
            margin: 0;
            padding: 0;
            background: transparent;
            font-size: 28px;
            outline: none;
            cursor: pointer;
            position: absolute;
            top: 5px;
            right: 8px;
            width: 30px;
            line-height: 30px;
            color: #a1a1a1;
        }
    }
    .help-index-nav {
        margin-bottom: 30px;
        .border-title {
            border-bottom: 1px solid rgba(0,0,0,.3);
            text-align: left;
            font-size: 30px;
            padding: 80px 0 13px;
            font-weight: 700;
        }
        .c-link {
            color: #333;
            padding-right: 15px;
            background: url(/static/img/arrow-left.png) no-repeat 100%;
        }
        .c-link-small {
            background-size: auto 10px;
            padding-right: 10px;
        }
        .category-name {
            font-size: 20px;
        }
        .category {
            float: left;
            width: 25%;
            margin: 40px 0;
            padding-right: 10px;
            min-height: 140px;
            .children {
                margin: 10px 0 0;
            }
            .nav-links {
                margin-left: 60px;
                overflow: hidden;
            }
            .icon {
                float: left;
                width: 36px;
                height: 36px;
                background-image: url(/static/img/help-icon.png);
                background-repeat: no-repeat;
                background-size: 100%;
            }
            .icon.guide {
                background-position: 0 0;
            }
            .icon.funds {
                background-position: 0 -38px;
            }
            .icon.charge {
                background-position: 0 -77px;
            }
            .icon.trade {
                background-position: 0 -115px;
            }
            .icon.tradehk {
                background-position: 0 -154px;
            }
            .icon.tradezg {
                background-position: 0 -192px;
            }
            .icon.atransfer {
                background-position: 0 -231px;
            }
            .icon.security {
                background-position: 0 -269px;
            }
        }
    }
    #container{
        padding: 60px 0;
        background-color: #f9f9f9;
        position: relative;
        overflow: hidden;
        .main{
            h2.page-title{
                text-align: center;
                font-size: 24px;
                padding: 20px 0 5px;
                font-weight: 700;
            }
            
            .help-faq{
                padding: 30px 0;
                h3{
                    font-size: 24px;
                    text-align: left;
                    font-weight: 700;
                    border-bottom: 1px solid #e6e6e6;
                }
                h4{
                    font-size: 20px;
                    font-weight: 700;
                    margin: 16px 0 0;
                }
                h5{
                    margin-top: 14px;
                    font-size: 16px;
                    font-weight: 400;
                    .clic{
                        cursor: pointer;
                        margin-bottom: 10px;
                        i{
                            margin-right: 5px;
                            float: left;
                            margin-top: 0px;
                            display:block;
                            width: 10px;
                            height: 10px;
                            color: #000;
                            transform:rotate(0deg);
                            transition: all 0.3s;
                        transform-origin: center center;
                        }
                        p{
                            display: inline-block;
                            padding-left: 5px;
                            margin-bottom: 0;
                        }
                    }
                }
                .item{
                    display: none;
                    margin: 8px 0 20px;
                    color: #a3a3a3;
                    padding-left: 15px;
                    overflow: hidden;
                    font-size: 14px;
                    position: relative;
                    span.answer{
                        margin-left: 8px;
                        display: inline-block;
                        float: left;
                    }
                    p{
                        position: relative;
                        width: 100%;
                        height: auto;
                        top: -4px;
                        line-height: 20px;
                        padding-left: 30px;
                        #mytable{
                            
                        }
                    }
                }
            }
        }
    }
    
    .mytd{
        min-width: 100px;
        padding: 5px;
        border: 1px solid #ccc;
        text-align: center;
        vertical-align: middle;
    }

    // 底部
    // 客服组件
    
</style>
