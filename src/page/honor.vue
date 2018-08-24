<template>
  <div class="honor">
      <div class="section about-container about-page-awards animated">
        <div class="main aninode">
          <h3 class="sub-title a-flyRightIn" data-animation="a-flyRightIn">企业荣誉</h3>
          <img class="tab-bg delay200 a-flyRightIn" data-animation="a-flyRightIn" src="/static/img/about-3-bg.jpg">
          <ul class="awards-box delay400 a-flyRightIn" data-animation="a-flyRightIn">
            <li v-for="(item,index) in lists" :key="index" class="item">
              <div class="img-box">
                <img class="honor-logo" :src="item.src">
              </div>
              <h4 class="item-title">{{item.title}}</h4>
              <div class="content">{{item.content}}</div>
              <div class="date">{{item.date}}</div>
            </li>
        </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'honor',
  data () {
    return {
        lists:[
            {id:0,src:'/static/img/about-3-logo4.png',title:'金融科技50强',conent:'两次入选毕马威中国发布的领先金融科技50强榜单。',date:'2017年12月 / 2016年9月'},
            {id:1,src:'/static/img/about-3-logo12.png',title:'业务创新信息商',content:'获香港交易所市场数据论坛“业务创新信息商”称号',date:'2017年12月'},
            {id:2,src:'/static/img/about-3-logo13.png',title:'',content:'Tiger Trade 被评为华尔街见闻2017年度卓越金融科技产品',date:'2017年12月'},
            {id:3,src:'/static/img/about-3-logo9.png',title:'中国40位40岁以下的商界精英',content:'创始人巫天华入选《财富》“中国40位40岁以下的商界精英”',date:'2017年9月'},
            {id:4,src:'/static/img/about-3-logo10.png',title:'美国CB Insights全球金融科技250强',content:'入选美国CB Insights全球金融科技250强',date:'2017年7月'},
            {id:5,src:'/static/img/about-3-logo6.png',title:'中国创新成长企业100强',content:'两次入选创业邦“中国创新成长企业100强”。',date:'2017年12月 / 2016年1月'},
            {id:6,src:'/static/img/about-3-logo14.png',title:'最佳科技金融创业公司Top10',content:'入选猎云网最佳科技金融创业公司Top10',date:'2017年11月'},
            {id:7,src:'/static/img/about-3-logo2.png',title:'2016年度黑马TOP100',content:'入选i黑马“2016年度黑马TOP100”榜单',date:'2016年12月'},
            {id:8,src:'/static/img/about-3-logo11.png',title:'2016年度最具创新力金融理财APP',content:'获得中央人民广播电台“2016年度最具创新力金融理财APP”',date:'2016年12月'},
            {id:9,src:'/static/img/about-3-logo3.png',title:'2016年度新锐创业公司TOP30',content:'入选小饭桌“2016年度新锐创业公司TOP30”榜单',date:'2016年12月'},
            {id:10,src:'/static/img/about-3-logo1.png',title:'21世纪中国最佳商业模式奖',content:'获得《21世纪商业评论》颁布的“21世纪中国最佳商业模式奖”',date:'2016年12月'},
            {id:11,src:'/static/img/about-3-logo5.png',title:'2016年35位35岁以下创业精英',content:'公司创始人巫天华荣获《创业家》发布《2016年35位35岁以下创业精英》称号',date:'2016年7月'},
            {id:12,src:'/static/img/about-3-logo7.png',title:'2016胡润新金融50强',content:'荣登胡润新金融百强榜峰会公布的“2016胡润新金融50强”',date:'2016年1月'},
            {id:13,src:'/static/img/about-3-logo8.png',title:'年度产品TOP10',content:'钛媒体、《商业价值》联合中外五大主流媒体和主流投资机构举办的BT Awards年度创新评选中，荣获“年度产品TOP10”',date:'2015年12月'},
            {id:14,src:'/static/img/about-3-logo2.png',title:'未来独角兽公司',content:'荣登黑马创业集团甄选的“未来独角兽公司”榜单，被评为“2015年度互联网证券平台”',date:'2015年12月'},
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
        font-size: 14px;
        .main {
            padding: 30px 10px 50px;
            .sub-title {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 10px;
            }
            .tab-bg {
                display: block;
                margin: 0 auto;
                max-width: 100%;
            }
            ul{
                margin-right: -105px;
                font-size: 12px;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-flex-wrap: wrap;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                .item {
                    width: 345px;
                    padding: 45px 105px 45px 0;
                    border-bottom: 1px dashed #ccc;
                    .img-box {
                        width: 200px;
                        height: 100px;
                        border: 1px solid #d1d1d1;
                        margin-bottom: 16px;
                        .honor-logo {
                            display: block;
                            width: 100%;
                        }
                    }
                    .about-page-awards .item-title {
                        font-size: 14px;
                        font-weight: 700;
                        margin-bottom: 10px;
                        line-height: 1.2;
                    }
                }
            }
        }
    }
    
</style>
