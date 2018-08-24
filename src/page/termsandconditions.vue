<template>
    <div class="termsandconditions">
        <div id="container" class="container-wrap" style="min-height: 350px;">
            <div class="main">
                <h3 class="title">
                    条款
                </h3>
                <ul class="list-wrap">
                    <li v-for="(item,index) in lists1" :key="index" class="list-item">
                        <a :href="item.href" target="_blank">{{item.text}}</a>
                    </li>
                </ul>
                <h3 class="title">
                    声明
                </h3>
                <ul class="list-wrap">
                    <li v-for="(item,index) in lists2" :key="index" class="list-item">
                        <a :href="item.href" target="_blank">{{item.text}}</a>
                    </li>
                </ul>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: 'termsandconditions',
  data () {
    return {
        lists1:[
            {id:0,text:'产品使用许可协议',href:"/agreement/3",},
            {id:1,text:'老虎证券客户协议书',href:"/agreement/4",},
            {id:2,text:'盈透证券客户协议书',href:"/agreement/5",},
            {id:3,text:'盈透证券法律承认',href:"/agreement/6",},
            {id:4,text:'盈透证券账户交易控制及所有权证明',href:"/agreement/7",},
            {id:5,text:'通知和确认清算安排',href:"/agreement/8",},
            {id:6,text:'期货交易仲裁协议',href:"/agreement/9"},
        ],
        lists2:[
            {id:0,text:'老虎证券披露声明',href:"/agreement/3",},
            {id:1,text:'隐私政策',href:"/agreement/4",},
            {id:2,text:'免责声明',href:"/agreement/5",},
            {id:3,text:'行情使用免责声明',href:"/agreement/6",},
            {id:4,text:'版权声明',href:"/agreement/6",},
        ]
    }
  },
  created(){
      
  }
}
</script>
<style scoped lang="scss">
    .main{
      width: 960px;
      margin: 0 auto;
    }
    #container {
        padding: 60px 0 0;
        a{
            text-decoration: none;
        }
        .title {
            text-align: center;
            font-size: 24px;
            border-bottom: 1px solid #e6e6e6;
            padding: 20px 0 5px;
            font-weight: 700;
        }
        .list-wrap {
            margin: 30px;
            .list-item {
                list-style: decimal;
                padding: 10px 0;
                font-size: 15px;
                vertical-align: top;
                a {
                    display: inline-block;
                    position: relative;
                    border-bottom: 3px solid #ffe100;
                    -webkit-transition: border .5s ease;
                    -o-transition: border .5s ease;
                    transition: border .5s ease;
                }
                a:hover{
                    border-color: rgb(92, 184, 92)
                }
            }
        }
        .warn {
            font-size: 12px;
            color: #666;
            margin: 30px 10px;
        }
    }
    

</style>
