<template>
<div class="info">
  <!-- 顶部组件 -->
  <MyHead></MyHead>
        <router-view></router-view>
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
  name: 'info',
  data () {
    return {
        
    }
  },
  created(){
      
  }
}
</script>
<style scoped lang="scss">


</style>
