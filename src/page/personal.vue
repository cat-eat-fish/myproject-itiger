<template>
<div class="personal">
  <!-- 顶部组件 -->
  <MyHead ></MyHead>
    <div id="container">
        <div class="main clear">
            <div class="sidebar">
                <h3>个人中心</h3>
                <ul class="side-menu clear">
                    <li v-for="(item,index) in lis" :key="index"  @click="active=item.id">
                        <router-link :to="item.href" :class="{active:index==active}">{{item.txt}}</router-link>
                    </li>
                </ul>
            </div>
            <router-view mydata="1" ></router-view>
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
    components: {
        MyHead,MyFoot,Customer
    },
  name: 'personal',
  data () {
    return {
        lis:[
            {id:0,txt:'我的账户',href:'/personal'},
            {id:1,txt:'存入资金',href:'/personal/deposit'},
            {id:2,txt:'提取资金',href:'/personal/withdraw'},
            {id:3,txt:'账单报告',href:'/personal/account-report'},
            {id:4,txt:'供股管理',href:'/personal/portfolio'},
            {id:5,txt:'我的邀请',href:'/personal/invitation'},
            {id:6,txt:'我的活动',href:'/personal/prize'},
        ],
        active:0,
        myswitch:{text:'马上开户',to:'/signup'},
        user:sessionStorage.user,

    }
  },
  created(){
        
            //     if(this.user!=''){
            //         this.myswitch={text:'退出',to:'/logout'}
            //     }else{
            //         this.myswitch={text:'马上开户',to:'/signup'}
            //     }
      if(!this.user){
        this.$router.push('/login');
      }
    //   请求数据
    // axios.post('/user', {firstName: 'Fred',lastName: 'Flintstone'}).then(function (response) {
    //         console.log(response);
    //     }).catch(function (error) {
    //         console.log(error);
    //     }
    // );
  }
}
</script>
<style scoped lang="scss">
    .main{
      width: 960px;
      margin: 0 auto;
    }
    #container{
        a{
            text-decoration: none;
        }
        min-height: 470px;
        padding: 60px 0 0;
        .sidebar{
            a{
                text-decoration: none;
            }
            width: 175px;
            float: left;
            margin: 40px 0 0;
            text-align: center;
            h3{
                font-weight: 700;
                font-size: 18px;
            }
            ul{
                margin: 10px 0;
                li .active{
                    color: #000;
                    font-weight: 700;
                }
                li{
                    a{
                        display: block;
                        padding: 13px 0;
                        color: #a3a3a3;
                    }
                }
            }
        }
        .personal-main {
            margin-left: 200px;
            padding: 50px 20px;
            padding-right: 20px;
            .tip-box-info {
                padding: 10px 15px 10px 0px;
                background: #f0f7ff;
                color: #589cfb;
                i{
                    padding-left: 5px;
                    color: #589cfb;
                }
            }
            .account-process {
                position: relative;
                height: 60px;
                overflow: hidden;
                margin: 25px 0 0;
                ul{
                    margin: 0;
                    li.no-line {
                        margin-left: 2px;
                        position: absolute;
                        width: auto;
                    }
                    li.current {
                        color: #333;
                        .dot{
                            border: 2px solid #ffe100;
                            background: #fff;
                            padding: 2px;
                            z-index: 3;
                            top: 8px;
                        }
                    }
                    li{
                        width: 33.33%;
                        float: left;
                        text-align: right;
                        padding-top: 40px;
                        position: relative;
                        color: #929292;
                        .dot{
                            position: absolute;
                            right: 3px;
                            top: 10px;
                            border-radius: 100%;
                            z-index: 1;
                            i{
                                display: block;
                                width: 20px;
                                height: 20px;
                                border-radius: 100%;
                                background: #e4e4e4;
                            }
                        }
                        .line{
                            background: #e4e4e4;
                            position: absolute;
                            width: 100%;
                            top: 20px;
                            left: -3px;
                            height: 2px;
                        }
                    }
                }
            }
            .section {
                margin-bottom: 30px;
                h3{
                    color: #a3a3a3;
                    border-bottom: 1px solid #e5e5e5;
                    padding-bottom: 6px;
                    font-weight: 400;
                }
                .user-info{
                    margin-top: 20px;
                    .info-item{
                        position: relative;
                        padding: 10px 0;
                        overflow: hidden;
                        p.type{
                            float: left;
                            width: 70px;
                            color: #a3a3a3;
                            text-align: right;
                        }
                        .value{
                            margin-left: 80px;
                        }
                        .ctl {
                            position: absolute;
                            right: 0;
                            top: 10px;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }

</style>
