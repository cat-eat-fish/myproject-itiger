<template>
    <div class="deposit">
        <div class="personal-main">
        <!-- 如果用户开通了两个账户 -->
            <section class="section">
                <h3 class="title">存入资金</h3>
                <div id="deposit-container">
                    <div class="nav-tab">
                        <a v-for="(item,index) in nav" @click="jump(index)" :key="index" aria-current="true" href="javascript:;" :class="{active:active==index}" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                            入金教程
                        </a>
                    </div>
                    <router-view></router-view>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: 'deposit',
  data () {
    return {
        active:0,
        nav:[
            {id:0,text:'入金教程',href:'/personal/deposit/guide'},
            {id:1,text:'我的汇款账号',href:'/personal/deposit/account'},
            {id:2,text:'存款通知',href:'/personal/deposit/notice'},
        ],
        jump(index){
            this.$router.push(this.nav[index].href);
            this.active=index;
        }
    }
  },
  methods:{
    
  }
}
</script>
<style scoped lang="scss">
    .personal-main {
        margin-left: 200px;
        padding: 50px 20px;
        padding-right: 20px;
    }
    .section {
        margin-bottom: 30px;
        .title {
            color: #a3a3a3;
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 6px;
        }
    }
    .nav-tab {
        margin: 20px 0;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        border: 1px solid #f2f5f6;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        a:first-child, {
            border-left: 0;
            border-color: #ffe100;
        }
        .active{
            border-color: #ffe100;
            background: #ffe100;
        }
        a{
            text-decoration: none;
            -webkit-flex: 1 1;
            -ms-flex: 1 1;
            flex: 1 1;
            border-left: 1px solid #f2f5f6;
            text-align: center;
            color: #333;
            font-weight: 400;
            padding: 5px 0;
            position: relative;
            display: block;
            -webkit-transition: .6s linear;
            -o-transition: .6s linear;
            transition: .6s linear;
        }
    }
    #deposit-container .nav-tab {
        margin-bottom: 0;
    }
    
</style>
