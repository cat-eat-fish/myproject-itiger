import Vue from 'vue'
import Router from 'vue-router'
import MyMain from '@/page/mymain'                            //主页
import Maket201602 from '@/page/maket201602'                  //环球账户首页
import MyVideo from '@/page/myvideo'                          //股票学院
import MyVideoVideo from '@/page/myvideo-video'               //股票学院》视频课程
import MyVideoBasics from '@/page/myvideo-basics'             //股票学院》视频课程
import MyVideoAbout from '@/page/myvideo-about'               //股票学院》股票学院
import DownLoad from '@/page/download'                        //下载

import Help from '@/page/help'                                //帮助
import HelpItem from '@/page/helpitem'                        //帮助
import HelpGuide from '@/page/helpguide'                      //帮助>开户指南funds
import HelpFunds from '@/page/helpfunds'                      //帮助>资金相关
import HelpCharge from '@/page/helpcharge'                    //帮助>收费标准
import HelpTrade from '@/page/helptrade'                      //帮助>美股交易
import HelpTradehk from '@/page/helptradehk'                  //帮助>港股交易
import HelpTradezg from '@/page/helptradezg'                  //帮助>A股交易相关
import HelpAtransfer from '@/page/helpatransfer'              //帮助>股票转移
import HelpJwhhk from '@/page/helpjwhhk'                      //帮助>境外银行
import HelpSecurity from '@/page/helpsecurity'                //帮助>资金安全
import HelpSearch from '@/page/helpsearch'                    //帮助>搜索



import About from '@/page/about'                              //关于
import MyAbout from '@/page/myabout'                          //企业概括
import News from '@/page/news'                                //媒体报道
import NewsPage from '@/page/newspage'                        //新闻页面
import Honor from '@/page/honor'                              //企业荣誉
import Security from '@/page/security'                        //安全保障
import Contactus from '@/page/contactus'                      //联系我们

import Personal from '@/page/personal'                        //个人中心
import MyAccount from '@/page/myaccount'                      //个人中心/我的账户
import Invitation from '@/page/invitation'                    //个人中心/我的邀请
import Prize from '@/page/prize'                              //个人中心/我的活动
import Deposit from '@/page/deposit'                          //个人中心/存入资金
import Guide from '@/page/guide'                              //个人中心/存入资金 > 入金教程
import DepositAccount from '@/page/depositaccount'            //个人中心/存入资金 > 我的汇款账号 
import DepositNotice from '@/page/depositnotice'              //个人中心/存入资金 > 我的汇款账号
import Withdraw from '@/page/withdraw'                        //个人中心/提取资金
import AccountReport from '@/page/accountreport'              //个人中心/账单报告
import Portfolio from '@/page/portfolio'                      //个人中心/供股管理
import signupHTML from '@/page/staticsignup'                  //个人中心/我的活动》邀请好友
import Detail from '@/page/detail'                            //个人中心/我的活动》奖励中心

import Signup from '@/page/signup'                            //注册
import Accounts from '@/page/accounts'                        //注册项

import Retrive from '@/page/retrive'                          //修改密码

import Login from '@/page/login'                              //登录

import LogOut from '@/page/logout'                            //退出

import MyInfo from '@/page/info'                              //信息
import RiskDisclosure from '@/page/riskdisclosure'            //风险披露
import TermsAndConditions from '@/page/termsandconditions'    //条款声明

import Business from '@/page/business'                        //机构业务

import Job from '@/page/job'                                  //工作
import JobDev from '@/page/job_dev'                           //工作》工程师
import JobPm from '@/page/job_pm'                             //工作》产品

import Agreement9 from '@/page/agreement9'                    //期权交易风险披露

import No404 from '@/page/404'                                //404


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 主页
    {
      path: '/',
      name: 'mymain',
      component: MyMain
    },
    // 环球账户首页
    {
      path: '/maket/201602',
      name: 'maket201602',
      component: Maket201602
    },
    // 注册
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    // 注册项
    {
      path: '/accounts',
      name: 'accounts',
      component: Accounts,
    },
    // 修改密码
    {
      path: '/account/retrive',
      name: 'retrive',
      component: Retrive,
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 退出
    {
      path: '/logout',
      name: 'logout',
      component: LogOut
    },
    // 股票学院
    {
      path: '/college',
      redirect:'/college/video',
      name:'myvideo',
      component: MyVideo,
      children:[
        {
          path : 'video',
          name:'myvideo-video',
          component:MyVideoVideo
        },
        {
          path : 'basics/:id',
          name:'myvideo-basics',
          component:MyVideoBasics
        },
        {
          path : 'about',
          name:'myvideo-about',
          component:MyVideoAbout
        }
      ]
    },
    // 下载
    {
      path: '/download',
      name: 'download',
      component: DownLoad
    },
    // 帮助 >
    // 帮助 >搜索页
    {
      path: '/help/search',
      name: 'helpsearch',
      component: HelpSearch,
    },
    {
      path: '/help',
      name: 'help',
      component: Help,
      children:[
        {
          path: '/help/',
          name: 'helpitem',
          component: HelpItem,
          children:[
            {
              path: '/help/guide/:id',
              name: 'helpguide',
              component: HelpGuide 
            },
            {
              path: '/help/funds/:id',
              name: 'helpfunds',
              component: HelpFunds 
            },
            {
              path: '/help/charge/:id',
              name: 'helpcharge',
              component: HelpCharge 
            },
            {
              path: '/help/trade/:id',
              name: 'helptrade',
              component: HelpTrade 
            },
            {
              path: '/help/tradehk/:id',
              name: 'helptradehk',
              component: HelpTradehk 
            },
            {
              path: '/help/tradezg/:id',
              name: 'helptradezg',
              component: HelpTradezg
            },
            {
              path: '/help/atransfer/:id',
              name: 'helpatransfer',
              component: HelpAtransfer 
            },
            {
              path: '/help/jwhhk/:id',
              name: 'jwhhk',
              component: HelpJwhhk 
            },
            {
              path: '/help/security/:id',
              name: 'helpsecurity',
              component: HelpSecurity 
            },
          ]
        },
      ]
    },

    // 关于
    {
      path: '/about',
      redirect:'/about/',
      name: 'about',
      component: About,
      children:[
        {
          path: '',
          component:MyAbout
        },
        {
          path: 'news',
          component:News,
        },
        {
          path: 'news/:id',
          component:NewsPage
        },
        {
          path: 'honor',
          component:Honor
        },
        {
          path: 'security',
          component:Security
        },
        {
          path: 'contactus',
          component:Contactus
        },
      ]
    },
    // 个人中心
    {
      path: '/personal',
      redirect:'/personal/',
      component:Personal,
      children:[
        {
          path: '',
          component:MyAccount
        },
        {
          path: 'invitation',
          component:Invitation
        },
        // 存入资金
        {
          path: 'deposit',
          redirect:'/personal/deposit/guide',
          component:Deposit,
          children:[
            {
              path: '/personal/deposit/guide',
              component:Guide,
            },
            {
              path: '/personal/deposit/account',
              component:DepositAccount,
            },
            {
              path: '/personal/deposit/notice',
              component:DepositNotice,
            },
          ]
        },
        // 提取资金
        {
          path: 'withdraw',
          name:'withdraw',
          component:Withdraw
        },
        // 账单报告
        {
          path: 'account-report',
          name:'accountreport',
          component:AccountReport
        },
        // 供股管理
        {
          path: 'portfolio',
          name:'portfolio',
          component:Portfolio
        },
        {
          path: 'prize',
          component:Prize,
          children:[
            {
              path: 'detail',
              component:Detail,
            }
          ]
        },
      ]
    },
    // 个人中心 》 我的活动 》 邀请好友
    
    {
      path : '/activity/forapp/invitation/signup',
      name:'staticsignup',
      component:signupHTML
    },

    // 信息
    {
      path : '/info',
      redirect:'/info/risk-disclosure',
      name:'info',
      component:MyInfo,
      children:[
        // 风险披露
        {
          path : 'risk-disclosure',
          name:'riskdisclosure',
          component:RiskDisclosure
        },
        // 条款声明
        {
          path : 'terms-and-conditions',
          name:'termsandconditions',
          component:TermsAndConditions
        },
      ]
    },
    
    // 业务机构
    {
      path : '/business',
      name:'business',
      component:Business
    },
    // job
    {
      path : '/job',
      name:'job',
      component:Job,
      children:[
        {
          path : 'dev',
          name:'job_dev',
          component:JobDev
        },
        {
          path : 'pm',
          name:'job_pm',
          component:JobPm
        },
      ]
    },

    // 股权交易风险披露
    {
      path : '/agreement/:id',
      name:'agreement9',
      component:Agreement9
    },

    {
      path : '*',
      name :'no404',
      component:No404
    }
  ]
})
