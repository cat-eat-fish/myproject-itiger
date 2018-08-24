<template>
  <div class="helpsearch">
  <!-- 顶部组件 -->
  <MyHead></MyHead>
  <!--  -->
        <div id="container" class="container-wrap" style="min-height: 350px;">
            <div class="page-help-top">
                <div class="main">
                    <div class="breadcrumb">
                        <a href="/help">帮助中心首页</a>
                        <span class="arrow"></span>搜索结果
                    </div>
                    <form @submit.prevent="submit" class="help-search-form">
                        <input type="text" name="keyword" v-model="inputtext.keyword" placeholder="输入您的问题" class="search">
                        <button type="submit" class="search-icon iconfont"></button>
                    </form>
                </div>
            </div>
            <div class="main">
                <div v-if="searchdata.length==0" class="page-help-search">
                    <h2>未找到与 <span class="highlight">{{keyword}}</span> 相关的结果</h2>
                </div>
                <div v-if="searchdata.length!=0" class="page-help-search">
                    <h2>搜索到与 <span class="highlight">{{keyword}}</span> 相关的结果有{{searchdata.length}}条</h2>
                </div>
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
  name: 'helpsearch',
  components: {
    MyHead,MyFoot,Customer
  },
  data () {
    return {
        searchdata:[
        ],
        inputtext:{},
        keyword:'',
    }
  },
  methods:{
      submit: function() {
			if(this.inputtext.keyword){
                this.$router.push({path:'/help/search',query:{keyword:this.inputtext.keyword}});
            }else{
                return false;
            }
		}
  },
  mounted(){
        this.keyword=this.$route.query.keyword
  },
  created(){
    //   根据关键词获取相关信息
    //   axios.get('/search',{params:{keyword:this.keyword}}).then(function(response){this.searchdata=response;}).catch(function(err){console.log(err);});
  }
}
</script>

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

    #container {
        min-height: 800px!important;
        padding: 60px 0 0;
    }
    .container-wrap {
        position: relative;
        overflow: hidden;
    }
    .page-help-top {
        position: fixed;
        top: 60px;
        width: 100%;
        background: #f4f4f4;
        z-index: 5;
        .arrow {
            display: inline-block;
            width: 9px;
            height: 9px;
            margin: 0 5px;
            background: url(/static/img/arrow.png) no-repeat 0 0;
        }
        .breadcrumb {
            -webkit-flex: 1 1;
            margin: 0;
            -ms-flex: 1 1;
            flex: 1 1;
            white-space: nowrap;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
        }
        .help-search-form{
            .search-icon {
                border: 0;
                margin: 0;
                padding: 0;
                background: transparent;
                font-size: 28px;
                outline: none;
                cursor: pointer;
                position: absolute;
                top: 5px;
                right: 8px;
                width: 30px;
                line-height: 30px;
                color: #a1a1a1;
            }
            .search {
                display: block;
                width: 100%;
                height: 38px;
                padding: 8px 50px 8px 8px;
                border: none;
                outline: none;
                border-radius: 5px;
                background-color: #f4f4f4;
                -webkit-appearance: button;
            }
            .search {
                background-color: #fff;
            }
        } 
    }
    .help-search-form {
        position: relative;
    }
    .page-help-top>.main {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 60px;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .page-help-search {
        padding: 80px 0;
        h2 {
            font-size: 18px;
        }
        .highlight {
            color: red!important;
        }
    }
    // 底部
    // 客服组件
    
</style>
