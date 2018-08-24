<template>
  <div class="contactus">
        <div class="about-container about-page-contactus">
<section class="section banner animated">
<div class="main aninode">
<div class="title a-flyRightIn" data-animation="a-flyRightIn">
<p class="text">联系我们</p>
</div>
</div>
</section>
<section class="section content animated">
<div class="main aninode">
<div class="title a-flyRightIn" data-animation="a-flyRightIn">老虎证券四大优势</div>
<ul class="intro delay200 a-flyRightIn" data-animation="a-flyRightIn">
    <li v-for="(item,index) in lists" :key="index" class="item">
        <img class="adv-icon" :src="item.src">
        <h3 class="captain">{{item.captain}}</h3>
        <p class="detail" v-html="item.detail"></p>
    </li>
</ul>
<div class="call delay400 a-flyRightIn" data-animation="a-flyRightIn">联系电话：<a href="tel:400-603-7555">400 603 7555</a></div>
<div class="email delay400 a-flyRightIn" data-animation="a-flyRightIn">咨询邮箱：<a href="mailto:service@tigerbrokers.com">service@tigerbrokers.com</a></div>
<div class="email delay400 a-flyRightIn" data-animation="a-flyRightIn">投诉邮箱<sup>1</sup>：<a href="mailto:complaints@tigerbrokers.com">complaints@tigerbrokers.com</a></div>
<router-link to="/help" class="qa delay600 a-flyRightIn" data-animation="a-flyRightIn">投资者常见问题</router-link>
</div>
</section>
<section class="section announce animated">
<div class="main">
<h6 class="title">披露</h6>
<p>1. 老虎证券的投诉受理服务由新西兰监管指定的专业第三方(<a href="https://fdrs.org.nz/" target="_blank">Financial Dispute Resolution Service</a>)提供保障</p>
</div>
</section>
</div>
  </div>
</template>

<script>
export default {
  name: 'contactus',
  data () {
    return {
        lists:[
            {id:0,src:'/static/img/icon-1.png',captain:'简单易用',detail:'人性化设计，全中文操作<br>适合全球华人操作的交易客户端'},
            {id:1,src:'/static/img/icon-2.png',captain:'功能强大',detail:'支持美股股票、ETF、期权、港<br>股、A股沪港通和深港通交易'},
            {id:2,src:'/static/img/icon-3.png',captain:'融资融券',detail:'$3000 即享融资特权<br>融资年化利率低廉'},
            {id:3,src:'/static/img/icon-4.png',captain:'免费教程',detail:'股票学院专业课程免费<br>赠送，助你小白变股神'},
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
.intro {
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
                        width: 180px;
                        margin-top: 30px;
                        text-align: center;
                        .adv-icon {
                            display: block;
                            margin: 0 auto;
                        }
                        .captain {
                            font-size: 30px;
                            margin: 10px 0;
                            line-height: 1.2;
                        }
                        .detail {
                            font-size: 12px;
                            color: #888;
                        }
                    }
                }
    a{
        text-decoration: none;
    }
    .main{
        width: 960px;
        margin: 0 auto;
        font-size: 14px;
    }
    section.content .main .title{
        background: none;
        font-size: 18px;
                    color: #161618;
                    font-weight: 700;
    }
    section.announce .title{
        background: none;
    }
    .about-container {
        padding-top: 40px;
        overflow: hidden;
            .banner{
                .title {
                    position: relative;
                    background: url(/static/img/bg.jpg) no-repeat 50%/cover;
                    min-height: 320px;
            }
            .content{
                .title{
                    font-size: 18px;
                    color: #161618;
                    font-weight: 700;
                }
                
            }
        .main{
            padding: 30px 10px 50px;
                .text {
                    color: #fff;
                    font-size: 48px;
                    font-weight: 700;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    -webkit-transform: translate(-50%,-50%);
                    -ms-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
                }
            }
            
        }
    }
    .announce {
        background: #f7f8f8;
        .main {
            padding: 25px 10px;
            .title {
                margin-bottom: 12px;
            }
            p {
                font-size: 12px;
                margin: 2px 0;
            }
        }
    }
    // section2
            .call {
                margin-top: 100px;
                a {
                    color: #333;
                }
            }
            .qa {
                color: #333;
                display: inline-block;
                margin-top: 100px;
                padding-right: 10px;
                line-height: 1;
                background: url(/static/img/download-arrow.png) no-repeat;
                background-position: right -14px;
                -webkit-transition: none;
                -o-transition: none;
                transition: none;
            }

</style>
