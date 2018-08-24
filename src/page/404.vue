<template>
  <div class="no404">
  <!-- 顶部组件 -->
  <MyHead></MyHead>
    <div id="container" class="container-wrap" style="min-height: 350px;">
    <div class="main" style="">
    <img alt="页面不存在" class="tip-img" src="/static/img/404.jpg">
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
  name: 'no404',
  components: {
    MyHead,MyFoot,Customer
  },
  data () {
    return {

    }
  },
  mounted(){

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
    #container{
            padding: 60px 0 0;
            .tip-img{
                display: block;
                margin: 0 auto;
                padding: 20% 0;
                max-width: 100%;
            }
    }

    // 底部
    // 客服组件
    
</style>
