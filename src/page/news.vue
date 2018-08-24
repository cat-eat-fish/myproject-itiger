<template>
  <div class="news">
        <div class="section about-container about-page-newsroom animated">
            <div class="main aninode">
                <h3 class="sub-title a-flyRightIn" data-animation="a-flyRightIn">媒体报道</h3>
                <img class="tab-bg delay200 a-flyRightIn" data-animation="a-flyRightIn" src="/static/img/about-2-bg.jpg">
                <ul class="article-box delay400 a-flyRightIn" data-animation="a-flyRightIn">
                    <li v-for="(item,index) in nowlists" :key="index" class="item">
                        <router-link :to="item.to">
                            <img class="article-icon" :src="item.thumb">
                        </router-link>
                        <h4 class="article-title">
                            <router-link :to="item.to">{{item.title}}</router-link>
                        </h4>
                        <div class="from-date clear">
                            <span class="where">{{item.where}}</span>
                            <span class="date">{{item.date}}</span>
                        </div>
                        <p class="desc">{{item.desc}}</p>
                        <router-link class="more" :to="item.to">了解详情</router-link>
                    </li>
                </ul>
                <Page :alldate="this.page.oldlistsnum" :onedate="this.page.onedate" @pageprev="pageprev" @ievent ="ievent"></Page>
            </div>
        </div>
  </div>
</template>

<script>
import Page from '@/components/page'
export default {
  components: {
    Page
  },
  name: 'news',
  data () {
    return {
        page:{
            onedate:10,
            oldlistsnum:'',
        },
        nowlists:[],
        lists:[
            {id:0,thumb:'/static/img/thumb1.png',title:'累计交易额超10000亿，中国互联网企业上市潮到来，C轮融资5亿元的美港股券商要如何借势起飞？',where:'新经济100',date:'2018-07-16',desc:'2017年，中国企业开始了新一波海外上市浪潮。自从2017年年初，新经济100人报道以来，老虎证券年交易额翻了四倍，港股和打新成为业务亮点。',to:'/about/news/0'},
            {id:1,thumb:'/static/img/thumb2.png',title:'老虎证券国际完成5亿C轮融资 估值10.6亿美元成新独角兽',where:'新华网',date:'2018-07-11',desc:'老虎证券国际(Tiger Brokers)宣布其完成超5亿C轮融资，投后估值10.6亿美元。此轮融资投资方包括PAC(Prospect Avenue Capital)、弘泰资本(Hontai Capital)、海松资本(Oceanpine Capital)等。',to:'/about/news/1'},
            {id:2,thumb:'/static/img/thumb3.jpg',title:'老虎证券今日上线美港股“一键打新”功能',where:'国际金融报',date:'2018-06-22',desc:'华人地区最大美港股券商老虎证券(Tiger Brokers)也于今日宣布上线美港股”一键打新“功能，并将于25日开通小米打新通道，投资者可通过手机APP一站式完成新股申购操作。',to:'/about/news/2'},
            {id:3,thumb:'/static/img/thumb4.jpg',title:'一线丨老虎证券与纳斯达克达成战略合作：共推美股数据解决方案',where:'腾讯科技',date:'2018-06-14',desc:'6月14日，华人地区美港股券商老虎证券（Tiger Brokers）与纳斯达克（Nasdaq）宣布达成战略合作，共同向互联网平台提供接入美国证券市场信息数据服务。',to:'/about/news/3'},
            {id:4,thumb:'/static/img/thumb5.jpg',title:'老虎证券APP上线33个月交易额超10000亿 华人“零门槛”投资美港股',where:'网易',date:'2018-06-05',desc:'知名美港股券商老虎证券(Tiger Brokers)宣布，旗下App Tiger Trade上线33个月后，其平台累计交易额超过10000亿人民币。老虎证券同时还发布了“零门槛投资美港股”活动，取消最低入金，提升投资者使用体验。',to:'/about/news/4'},
            {id:5,thumb:'/static/img/thumb6.jpg',title:'互联网券商再掀佣金战：老虎证券港股降佣至万2.9 小额交易免佣',where:'新浪财经',date:'2018-03-29',desc:'近期，知名港美股券商老虎证券(Tiger Brokers)宣布将港股佣金大降至万分之二点九，小额交易订单免收佣金。这是目前全市场在港股一侧给出的最低佣金，刺破费率底线。',to:'/about/news/5'},
            {id:6,thumb:'/static/img/thumb7.jpg',title:'美股强势连涨 老虎证券狂送投资者百万红包',where:'新浪财经',date:'2018-03-01',desc:'春节前后两周，美股市场强劲反弹。华人最大美港股券商老虎证券(Tiger Brokers)今日宣布加入红包大战，用户首次开通老虎环球账户即可分得现金红包，着实给美港股投资者送来一份开年大礼。',to:'/about/news/6'},
            {id:7,thumb:'/static/img/thumb8.jpg',title:'2018胡润新金融百强名单出炉：老虎证券再度上榜',where:'环球网',date:'2018-01-22',desc:'胡润百富公布2018胡润新金融百强名单，陆金所、京东金融、老虎证券等新金融公司上榜。据了解，这是老虎证券继2016年之后再度上榜，受到业内广泛认可。',to:'/about/news/7'},
            {id:8,thumb:'/static/img/thumb9.jpg',title:'老虎证券发布2017最热港股排行榜 腾讯登榜首',where:'老虎环球财经',date:'2017-12-15',desc:'12月13日，知名美港股券商老虎证券（Tiger Brokers）发布2017最热港股排行榜，腾讯控股（00700）、融创中国（01918）、中国恒大（03333）位列前三，成为今年最受投资者关注的港股公司。',to:'/about/news/8'},
            {id:9,thumb:'/static/img/thumb10.jpg',title:'2017金融领军者揭晓 老虎证券获“年度卓越金融科技产品”',where:'中国经济网',date:'2017-12-15',desc:'12月13日，知名美港股券商老虎证券（Tiger Brokers）发布2017最热港股排行榜，腾讯控股（00700）、融创中国（01918）、中国恒大（03333）位列前三，成为今年最受投资者关注的港股公司。',to:'/about/news/9'},
            {id:10,thumb:'/static/img/thumb11.jpg',title:'毕马威发布2017中国金融科技50强 老虎证券再度领跑互联网券商',where:'中国经营网',date:'2017-12-07',desc:'全球四大会计师事务所之一KPMG（毕马威）中国发布了2017中国领先金融科技50强榜单，微众银行、蚂蚁金服、京东金融、老虎证券等企业入选。',to:'/about/news/10'},
        ]
    }
  },
  created(){
    this.$route.query.page=undefined ? 1:this.$route.query.page;
    if(this.$route.query.page==1 || this.$route.query.page==undefined){
        this.nowlists=this.lists.slice(this.$route.query.page*this.page.onedate-this.page.onedate,this.page.onedate);
    }else{
        this.nowlists=this.lists.slice(this.$route.query.page*this.page.onedate-this.page.onedate,this.$route.query.page*this.page.onedate);
    }
  },
  methods:{
      ievent(data){
        if(data==1){
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,this.page.onedate);
        }else{
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,data*this.page.onedate);
        }
        this.$router.push({path:'/about/news',query:{page:data}})
      },
      pageprev(data){
        if(data==1){
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,this.page.onedate);
        }else{
            this.nowlists=this.lists.slice(data*this.page.onedate-this.page.onedate,data*this.page.onedate);
        }
        this.$router.push({path:'/about/news',query:{page:data}})
      }
  },
  mounted(){
        this.page.oldlistsnum=this.lists.length;
        var page=this.$route.query.page;
        if(page){
            page=this.$route.query.page;
        }else{
            page=1;
        }
  }
}
</script>

<style scoped lang="scss">
    .main{
        width: 960px;
        margin:0 auto;
    }
    a{
        text-decoration: none;
    }
    .about-container {
        padding-top: 40px;
        overflow: hidden;
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
                .item{
                    padding: 50px 120px 50px 240px;
                    position: relative;
                    border-bottom: 1px dashed #d3d3d3;
                    a{
                        .article-icon {
                            display: block;
                            margin: 0;
                            line-height: normal;
                            width: 200px;
                            height: 120px;
                            position: absolute;
                            left: 0;
                            top: 30px;
                        }
                    }
                    .article-title {
                        font-weight: 700;
                        font-size: 14px;
                        width: 375px;
                        white-space: nowrap;
                        overflow: hidden;
                        -o-text-overflow: ellipsis;
                        text-overflow: ellipsis;
                        a{
                            color: #000;
                        }
                    }
                    .from-date {
                        width: 220px;
                        font-size: 12px;
                        color: #959595;
                        position: absolute;
                        top: 52px;
                        left: 640px;
                        .where {
                            float: left;
                            width: 90px;
                            white-space: nowrap;
                            overflow-x: hidden;
                            -o-text-overflow: ellipsis;
                            text-overflow: ellipsis;
                        }
                        .date {
                            float: right;
                        }
                    }
                    .desc {
                        height: 36px;
                        font-size: 12px;
                        line-height: 1.5;
                        margin-top: 20px;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    }
                    .more {
                        display: block;
                        padding-right: 10px;
                        position: absolute;
                        right: 0;
                        top: 106px;
                        font-weight: 700;
                        color: #535353;
                    }
                }
            }
        }
    }
    
</style>
