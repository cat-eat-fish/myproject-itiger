<template>
    <div class="myfoot">
        <footer>
            <div class="main">
                <div class="foot-top">
                    <div class="col-left">
                        <div class="links-section">
                            <ul v-for="(items,index) in links" class="links-group" :key="index">
                                <li v-for="(item,ind) in items" v-if="ind==linkHead" class="linkHead" :key="ind">
                                    {{item.txt}}
                                </li>
                                <li  v-for="(item,ind) in items" v-if="ind!=linkHead" :key="ind">
                                    <a :href="item.to">
                                        {{item.txt}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="download">
                            <strong>快速下载</strong>
                            <div class="icons">
                                <router-link v-for="(item,index) in icons"   :to="item.to" :key="index">
                                    <i :class="item.class"></i>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-right">
                        <p class="time">
                            <span>客服电话</span><br>
                             交易日09:30 - 次日05:00
                        </p>
                        <p class="tel-num">
                            <strong>400-603-7555</strong>
                        </p>
                        <div class="xn-kefu">
                            <router-link to="a" class="kefu-icon">
                                <span class="iconfont icon-erji"></span>
                                点击联系中文客服
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="foot-section  foot-middle">
                    <p>
                        <router-link to="a">
                            老虎证券实体Top Capital Partners Limited(TCPL)</router-link><br>是新西兰交易所（
                        <router-link to="a">
                            New Zealand Stock Exchange
                        </router-link>
                        ）认证成员，已与新西兰交易所达成合作关系并承诺遵守新西兰交易所成员规则。
                        <br>
                        TCPL是新西兰注册金融服务商，Financial Service Providers Register
                        <br>
                        注册编号：
                        <router-link to="a">
                            FSP473106
                        </router-link>
                        .注册地址：Level 4, 142 Broadway, Newmarket, Auckland, 1023, New Zealand
                    </p>
                </div>
                <div class="footer-section  footer-bottom">
                    <a href="http://www.miitbeian.gov.cn/">
                        京ICP备18034653号-1
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    export default{
        name: 'myhead',
        data(){
            return {
                links:[
                    [
                        {id:0,txt:'关于我们'},
                        {id:1,txt:'企业概括',to:'/about'},
                        {id:2,txt:'媒体报道',to:'/about/news'},
                        {id:3,txt:'企业荣誉',to:'/about/honor'},
                        {id:1,txt:'安全保障',to:'/about/security'}
                    ],
                    [
                        {id:0,txt:'特色业务'},
                        {id:1,txt:'老虎社区',to:'/laohu8'},
                        {id:2,txt:'股票学院',to:'/college/video'},
                        {id:3,txt:'亲友账户',to:'/ffa'},
                        {id:1,txt:'机构业务',to:'/business'}
                    ],
                    [
                        {id:0,txt:'法律文件'},
                        {id:1,txt:'风险披露',to:'/info/risk-disclosure'},
                        {id:2,txt:'条款声明',to:'/info/terms-and-conditions'},
                    ],
                    [
                        {id:0,txt:'其他'},
                        {id:1,txt:'加入我们',to:'/job'},
                        {id:2,txt:'联系我们',to:'/about/contactus'},
                    ],
                ],
                linkHead:0,
                icons:[
                    {id:0,class:'iconfont icon-windows',to:'icon'},
                    {id:1,class:'iconfont icon-diannao-tianchong',to:'icon'},
                    {id:2,class:'iconfont icon-anzhuo',to:'http://android.myapp.com/myapp/detail.htm?apkName=com.tigerbrokers.stock'},
                    {id:3,class:'iconfont icon-pingguo',to:'https://itunes.apple.com/cn/app/lao-hu-mei-gu/id1023600494?l=zh&ls=1&mt=8'},
                ]
            }
        },
        mounted(){
            
        },
        methods:{
            im_openInPageChat:function(){
                console.log(1)
            }
        }
    }
</script>
<style scoped lang='scss'>
    footer{
        a{
          text-decoration: none;
        }
        width:100%;
        // height:601px;
        background: #ffe100;
        a{
                color: #000;
        }
        .main{
            width: 960px;
            margin: 0 auto;
            padding: 80px 0 40px;
            color: #000;
            .foot-top{
                height: 254px;
                .col-left{
                    float: left;
                    width: 600px;
                    .links-section{
                        display: flex;
                        flex-wrap: nowrap;
                        .links-group{
                            font-size: 15px;
                            width: 25%;
                            li{
                                a{
                                    color: #000;
                                }
                            }
                            li.linkHead{
                                font-size: 18px;
                                margin-bottom: 8px;
                                font-weight: 700;
                            }

                        }
                    }
                    .download{
                        font-size: 18px;
                        padding-top: 50px;
                        padding-bottom: 20px;
                        .icons{
                            display: inline-block;
                            margin-left: 30px;
                            vertical-align: middle;
                            .iconfont{
                                display: inline-block;
                                width: 23px;
                                height: 26px;
                                margin-right: 18px;
                                background: 0 0/100% auto no-repeat;
                                font-size: 22px
                            }
                        }
                    }
                }
                .col-right{
                    margin-left: 600px;
                    text-align: right;
                    .time{
                        margin-bottom: 10px;
                        span{
                            font-weight: 700;
                        }
                    }
                    .tel-num{
                        font-size: 36px;
                        line-height: 1;
                        color: #000;
                        font-weight: 700;
                    }
                    .kefu-icon:hover{
                        color:rgb(243, 152, 0)
                    }
                    .kefu-icon{
                        font-size: 16px;
                        display: block;
                        float: right;
                        overflow: hidden;
                        text-align: left;
                        color: #333;
                        transition: all 0.3s;
                    }
                }
            }
            .foot-middle{
                border-top: 1px solid #000;
                border-bottom: 1px solid #000;
            }
            .foot-section{
                    padding: 25px 0;
                    p a{
                        text-decoration:underline;
                    }
            }
        }
    }
</style>