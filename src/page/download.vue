<template>
  <div class="mymain">
  <!-- 顶部组件 -->
  <MyHead></MyHead>
  <!--  -->
  <div class="download-head clear">
    <div class="content a-flyTopIn">
      <h2>客户端下载</h2>
    </div>
  </div>

  <!--  -->
  <div class="section download-apps animated">
    <div class="main aninode clear">
      <img class="delay200 client-img a-flyBottomIn" src="/static/img/platform_cn.d01d8a04.png" alt="">
      <div class="desc-02">Tiger Trade，全球资产配置的一站式股票交易平台</div>
      <ul class="desc-more clear">
        <li :class="{l:index==0||index==2}" v-for="(item,index) in descMoer" :key="index">
          <div class="item-t">{{item.title}}</div>
          <div class="item-desc">{{item.text}}</div>
        </li>
      </ul>
      <ul class="items clear">
        <li v-if="index==0" class="first" v-for="(item,index) in downList" :key="index">
          <img :src="item.img_src" :alt="item.img_alt">
          <div :style="{color:item.img_color}" class="client-type">{{item.img_text}}</div>
          <a class="btn download-btn" :href="item.a_href">{{item.a_text}}</a>
          <li class="line"></li>
        </li>
        <li v-if="index==1||index==2||index==3" class="center" v-for="(item,index) in downList" :key="index">
          <img :src="item.img_src" :alt="item.img_alt">
          <div :style="{color:item.img_color}" class="client-type">{{item.img_text}}</div>
          <a class="btn download-btn" :href="item.a_href">{{item.a_text}}</a>
          <li class="line"></li>
        </li>
        <li v-if="index==4" class="last" v-for="(item,index) in downList" :key="index">
          <img :src="item.img_src" :alt="item.img_alt">
          <div :style="{color:item.img_color}" class="client-type">{{item.img_text}}</div>
          <a class="btn download-btn" :href="item.a_href">{{item.a_text}}</a>
        </li>
        <!-- <li class="item line" v-for="(item,index) in downList" :key="index"></li> -->
      </ul>
    </div>
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
  name: 'download',
  components: {
    MyHead,MyFoot,Customer
  },
  data () {
    return {
      descMoer:[
        {id:0,title:'最懂华人的国际化股票交易软件',text:'根据华人的投资习惯开发的全球化股票软件，完全汉化的个股信息、交易指标和全球新闻资讯，无障碍买遍全球资本市场。'},
        {id:1,title:'股票社区，大V分享投资机会',text:'汇集股票投资高手，每天分享投资心得和投资策略，个股观点、小道消息、行业要闻一网打尽。和大V一起做投资，投资机会尽在掌握。'},
        {id:2,title:'下载即享三大市场实时行情',text:'价值3800元的美股、港股实时行情免费赠送，无需开户即可轻松了解全球证券市场动态。'},
        {id:3,title:'中英文客户端，全渠道覆盖',text:'iOS、Android，老虎证券致力于以科技和创新提升交易速度、改善交易体验。'},
      ],
      downList:[
        {id:0,img_src:'/static/img/iphone.png',img_alt:'iOS版',img_text:'iPhone',img_color:'#000',a_href:'https://itunes.apple.com/cn/app/lao-hu-mei-gu/id1023600494?l=zh&ls=1&mt=8',a_text:'ios下载'},
        {id:1,img_src:'/static/img/android.png',img_alt:'android版',img_text:'Android',img_color:'#97c03d',a_href:'http://android.myapp.com/myapp/detail.htm?apkName=com.tigerbrokers.stock',a_text:'Android下载'},
        {id:2,img_src:'/static/img/mac.png',img_alt:'Mac版',img_text:'Mac',img_color:'#7e23aa',a_href:'/404',a_text:'敬请期待'},
        {id:3,img_src:'/static/img/windows.png',img_alt:'Windows版',img_text:'Windows',img_color:'#0079d7',a_href:'/404',a_text:'敬请期待'},
        {id:4,img_src:'/static/img/browser.png',img_alt:'网页版',img_text:'Browser',img_color:'#e04c2a',a_href:'https://web.itiger.com/',a_text:'网页版'},
      ],
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

    .download-head{
      position: relative;
      padding-bottom: 516px;
      background: url(/static/img/downloadbg.jpg) no-repeat 50%/cover;
      .content {
        position: absolute;
        left: 0;
        top: 100px;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 30px;
        h2{
          font-weight: 400;
        }
      }
    }
    .download-apps {
      margin-top: -320px;
      padding-bottom: 100px;
      img.client-img{
        display: block;
        margin: 0 auto 60px;
        position: relative;
        width: 100%;
      }
      .desc-02{
        font-size: 24px;
        line-height: 1.3;
        margin-top: 10px;
        color: #000;
        font-weight: 700;
      }
      ul.desc-more {
        margin-top: 20px;
        padding-bottom: 50px;
        li{
          float: left;
          width: 45%;
          margin-top: 20px;
          .item-t{
            font-weight: 700;
            line-height: 1.3;
          }
          .item-desc{
            margin-top: 10px;
            font-size: 12px;
          }
        }
        li.l{
          margin-right: 10%;
        }
      }
      ul.items{
        li.first{
          margin-right: 34px;
        }
        li.last{
          margin-left: 34px;
        }
        li.center{
          margin: 0 36px;
        }
        .line {
          display: block;
          width: 1px;
          height: 116px;
          background-color: #e5e5e5;
        }
        li{
          width: 134px;
          float: left;
          img{
            display: block;
            width: 130px;
            margin: 0 auto;
          }
          div.client-type{
            display: block;
            height: 30px;
            line-height: 30px;
            font-size: 27px;
            text-align: center;
          }
          a{
            width: 134px;
            height: 40px;
            line-height: 40px;
            border-color: #959595;
            color: #535353;
            font-weight: 700;
            display: block;
            margin: 40px auto 0;
            padding: 0;
            text-align: center;
            border: 1px solid #959595;
            border-radius: 3px;
            outline: 0;
            
            transition: all .3s ease;
          }
        }
      }
    }

    // 底部
    // 客服组件
    
</style>
