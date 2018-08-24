<template>
    <div class="registrantionitem">
        <router-link to="/">
            <img class="logo" src="/static/img/logo2.png" alt="">
        </router-link>
        <ul class="clearfix">
            <li :class="{active:index==0}" v-for="(item,index) in lis" :key="index">
                <div class="bar"></div>
                <div class="title">{{item.id+1}} {{item.text}}</div>
                <div class="mobile-title">
                    {{item.text}} {{index+1}}/{{lis.length}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name: 'registrantionitem',
        data(){
            return {
                lis:[
                    {id:0,text:'注册账号'},
                    {id:1,text:'填写资料'},
                    {id:2,text:'选择账户'},
                    {id:3,text:'投资信息'},
                    {id:4,text:'阅读协议'},
                    {id:5,text:'上传证件'},
                    {id:6,text:'完成开户'},
                ]
            }
        },
        mounted(){
            
        },
    }
</script>
<style scoped lang='scss'>
    .registrantionitem{
        margin: 30px 0;
        a{
            img.logo{
                float: left;
                width: 40px;
                height: 40px;
                background-color: #ffe100;
                border-radius: 100%;
            }
        }
        ul.clearfix{
            margin-left: 60px;
            padding: 0;
            list-style: none;
            color: #a3a3a3;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            li:first-child{
                .bar{
                    border-radius: 5px 0 0 5px;
                }
            }
            li.active{
                .bar{
                    background: #ffe100;
                }
                .title{
                    color: #333;
                    font-weight: 700;
                }
            }
            li{
                flex: 1 1;
                .bar{
                    background: #ffe100;
                    height: 10px;
                    background: #f2f4f6;
                    margin: 0 1px 10px;
                    -webkit-transition: background .5s ease;
                    -o-transition: background .5s ease;
                    transition: background .5s ease;
                }
                .title{
                    margin-left: 8px;
                    color: #a3a3a3;
                }
                .mobile-title{
                    display: none;
                }
            }
        }
    }
</style>