<template>
<div class="personal">
  <!-- 顶部组件 -->
  <MyHead></MyHead>
      <div class="job-tab-box">
        <div class="main clear">
          <a href="javascript:;" @click="jump(index)" :class="{active:active==index}" class="tab-item" v-for="(item,index) in lists" :key="index">
            {{item.text}}
          </a>
        </div>
      </div>
      <router-view></router-view>

      <div class="job-footer">
        <div class="main">
        <h2 class="sub-title">
        我们是这样的小虎
        </h2>
        <ol class="sec">
        <li>互联网金融业务方向，核心团队职责；</li>
        <li>产品技术导向型公司，扁平管理结构，公司氛围好；</li>
        <li>公司发展速度快，个人成长空间大；</li>
        <li>提供行业内有竞争力的薪资待遇；</li>
        </ol>
        <h2 class="sub-title">
        具备以下条件之一或多个者, 优先考虑
        </h2>
        <ol class="sec">
        <li>学历背景优（211、985优先，本科及以上）；</li>
        <li>工作背景优（一线互联网企业优先）；</li>
        <li>项目背景优（大型互联网上线产品研发经验优先）；</li>
        <li>资深股票玩家；</li>
        </ol>
        <h2 class="sub-title">
        直接联系HR
        </h2>
        <div class="sec">
        <p>简历接收邮箱：hr@tigerbrokers.com</p>
        <p>招聘联系电话：010-52291480</p>
        </div>
        <i class="line"></i>
        <h4 class="des">以上招聘职位长期有效，感谢关注！</h4>
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
        active:0,
        lists:[
          {id:0,text:"工程师",to:'/job/dev'},
          {id:1,text:'产品',to:'/job/pm'}
        ]
    }
  },
  methods:{
    jump:function(index){
      this.$router.push(this.lists[index].to);
      this.active=index;
    }
  },
  created(){
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
    a{
      text-decoration: none;
    }
    .job-tab-box {
      width: 100%;
      position: fixed;
      top: 60px;
      z-index: 8;
      background-color: #f2f2f2;
      a.active{
        border-bottom: 2px solid #ffe202;
      }
      .tab-item {
          width: 192px;
          height: 52px;
          font-size: 14px;
          position: relative;
          line-height: 52px;
          float: left;
          text-align: center;
          outline: none;
          color: #000;
      }
  }

  .job-footer {
      padding-top: 26px;
      background-color: #f7f8f8;
      .sub-title {
          margin-bottom: 8px;
      }
      .sec {
          padding-bottom: 30px;
      }
      .sub-title {
          margin-bottom: 8px;
      }
  }
  .container-wrap ol.sec {
      list-style: decimal;
      padding-left: 24px;
      
  }
  ol.sec li {
    list-style-position: outside;
    margin: 5px 0;
  }
  .sub-title {
      font-size: 24px;
  }

</style>
