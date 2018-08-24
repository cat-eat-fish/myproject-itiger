<template>
    <div class="head">
        <header>
            <nav class="navbar navbar-fixed-top navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/">
                    <img class=logo src="../assets/img/logo.png" alt="">
                </router-link>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <router-link to="/maket/201602" class="dropdown-toggle" ><span class="txt">环球账户首页</span> <span class="glyphicon glyphicon-menu-down"></span></router-link>
                        <ul class="dropdown-menu">
                            <li><router-link to="/maket/201602" href="#">环球账户首页</router-link></li>
                            <li><router-link to="/" href="#">标准账户首页</router-link></li>
                        </ul>
                    </li>
                    <li v-for="(item,index) in lists" :key="index">
                        <router-link :to="item.href">{{item.txt}}</router-link>
                    </li>
                    <li>
                        <router-link id="mskh" :to="myswitch.to">{{myswitch.text}}</router-link>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
        </header>
    </div>
</template>
<script>
    export default{
        name: 'myhead',
        data(){
            return {
                lists:[
                    {id:0,txt:"股票学院",href:'/college'},
                    {id:1,txt:"下载",href:'/download'},
                    {id:2,txt:"帮助",href:'/help'},
                    {id:3,txt:"关于",href:'/about'},
                    {id:4,txt:"个人中心",href:'/personal'},
                ],
                myswitch:{text:'马上开户',to:'/signup'},
                grzx:4,
                mskh:5,
                user:sessionStorage.user,
            }
        },
        props:[''],
        watch:{
            // user(val,oldval){
            //     if(val!=''){
            //         this.myswitch={text:'退出',to:'/logout'}
            //     }else{
            //         this.myswitch={text:'马上开户',to:'/signup'}
            //     }
            // }
        },
        mounted(){
            
        },
    }
</script>
<style scoped lang='scss'>
    header{
        z-index:10;
        width: 100%;
        height: 60px;
        background: rgba(0,0,0,.8);
        position: fixed;
        top:0;
        left: 0;
    }
    .navbar{
        border: none;
        background: none;
        max-width:960px;
        height: 60px;
        margin: 0 auto;
    }
    .navbar-brand,.logo{
        display: block;
        width: 132.5px;
        height: 40px;
    }
    .logo{
        margin: -5px 0 0 -5px;
    }
    .navbar-right li{
        transition: .6s ease;
    }
    .navbar-right li a{
        height: 60px;
        line-height: 34px;
        font-size: 14px;
        color:#ffffff;
        transition: .6s ease;
    }
    .navbar-right li:hover{
        background-color: rgba(0, 0, 0, 0.2)
    }
    .navbar-right li:hover a{
        color: #ffe100; 
    }
    .dropdown-toggle .txt{
        color: #ffe100; 
    }
    .dropdown .dropdown-toggle{
        width: 100%;
        height: 100%;
        display: block;
    }
    .dropdown span.glyphicon{
        transition:all 0.6s;
    }
    .dropdown:hover span.glyphicon{
        transform: rotate(180deg);
    }
    .dropdown:hover .dropdown-menu{
        transform: scale(1) translateY(0px);
    }
    .dropdown-menu{
        transform: scale(0) translateY(-120px);
        position: absolute;
        top: 60px;
        display: block;
        height: 60px; 
        padding-top: 0px;
        padding-bottom: 0px; 
        margin-bottom: 0px;
        background-color: #222;
        min-width: 100%;
        border: none;
        transition: all 0.5s;
    }
    .dropdown-menu li,.dropdown-menu li a{
        margin: 0;
        padding: 0;
        display: inline-block;
        height: 30px;
        width: 100%;
    }
    .dropdown-menu li a{
        display: block;
        padding: 5px 10px;
        line-height:22px;
        transition: .6s ease;
    }
    .dropdown-menu li a:hover{
        background-color: #ffe100;
        color: #222222;
    }
    // 个人中心
    .grzx{
        color:#ffe100!important;
    }
    // 马上开户
    #mskh{
        display:block;
        width:88px;
        height:32px;
        margin: 14px 0;
        padding: 5px 15px;
        color: #333;
        border: 1px solid #ffe100;
        border-radius: 5px;
        background-color: #ffe100;
        line-height: 20px;
    }
    #mskh:hover{
        background-color: #333;
        color:#ffe100;
    }
</style>