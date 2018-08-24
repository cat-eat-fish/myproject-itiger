<template>
  <div class="helpitem">
    <div id="container" class="container-wrap" style="min-height: 350px;">
      <div class="page-help-top">
        <div class="main">
          <div class="breadcrumb">
            <a href="/help">帮助中心首页</a>
            <span class="arrow"></span>
            <span>开户指南</span>
            <span class="arrow"></span>
            <span>如何开户</span>
          </div>
          <form @submit.prevent="submit" class="help-search-form">
            <input type="text" name="keyword" v-model="inputtext.keyword" placeholder="输入您的问题" class="search">
            <button type="submit" class="search-icon icon-fangdajing iconfont"></button>
          </form>
        </div>
      </div>
      <div class="main clearfix">
        <div class="page-help-side">
          <ul id="help-side-nav" class="clear">
            <li v-for="(item,index) in nav" :key="index">
              <h4 :id="item.thisid">{{item.title}} <span class="arrow"></span></h4>
              <ul class="inner-nav">
                <li ref="nowstate" v-for="(item2,index2) in item.content" :key="index2">
                  <a @click="jump(item2,item2.href,item)" href="javascript:;" > {{item2.text}} </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MyHead from "@/components/myhead";
import MyFoot from "@/components/myfoot";
import Customer from "@/components/customer";
export default {
  name: "helpitem",
  components: {
    MyHead,
    MyFoot,
    Customer
  },
  data() {
    return {
      inputtext:{},
      nav:[
        {id:0,thisid:'guide',title:'开户导航',content:[
          {id:0,text:'零入金门槛开户',href:'/help/guide/573'},
          {id:1,text:'如何开户',href:'/help/guide/105'},
          {id:2,text:'邀请码',href:'/help/guide/106'},
          {id:3,text:'开户相关问题',href:'/help/guide/107'},
          {id:4,text:'老虎证劵优势',href:'/help/guide/108'}
        ]},
        {id:1,thisid:'funds',title:'资金相关',content:[
          {id:0,text:'入金必读',href:'/help/funds/115'},
          {id:1,text:'入金流程',href:'/help/funds/116'},
          {id:2,text:'提取资金',href:'/help/funds/117'},
          {id:3,text:'货币兑换',href:'/help/funds/242'},
        ]},
        {id:2,thisid:'charge',title:'收费标准',content:[
          {id:0,text:'港股收费（新）',href:'/help/charge/531'},
          {id:1,text:'美股收费（新）',href:'/help/charge/532'},
          {id:2,text:'新股申购收费',href:'/help/charge/606'},
          {id:3,text:'沪(深)港通收费',href:'/help/charge/111'},
          {id:4,text:'美股期权收费',href:'/help/charge/606'},
          {id:5,text:'窝轮/牛熊证收费',href:'/help/charge/453'},
          {id:6,text:'融资利息',href:'/help/charge/113'},
          {id:7,text:'收费相关问题',href:'/help/charge/114'},
          {id:7,text:'港股收费(旧)',href:'/help/charge/112'},
          {id:7,text:'美股收费(旧)',href:'/help/charge/109'},
        ]},
        {id:3,thisid:'trade',title:'美股交易',content:[
              {id:0,text:'美股行情',href:'/help/trade/95'},
              {id:1,text:'市场规则',href:'/help/trade/96'},
              {id:2,text:'订单类型',href:'/help/trade/97'},
              {id:3,text:'融资融券',href:'/help/trade/98'},
              {id:4,text:'账户类型',href:'/help/trade/99'},
              {id:5,text:'期权交易',href:'/help/trade/101'},
              {id:6,text:'订单执行',href:'/help/trade/303'},
              {id:7,text:'收益增强计划',href:'/help/trade/434'},
              {id:8,text:'常见交易问题',href:'/help/trade/100'},
        ]},
        {id:4,thisid:'tradehk',title:'港股交易',content:[
              {id:0,text:'交易相关',href:'/help/tradehk/122'},
              {id:1,text:'行情相关',href:'/help/tradehk/123'},
              {id:2,text:'窝轮交易',href:'/help/tradehk/449'},
              {id:3,text:'牛熊证交易',href:'/help/tradehk/450'},
        ]},
        {id:5,thisid:'tradezg',title:'A股交易',content:[
              {id:0,text:'A股交易相关',href:'/help/tradezg/207'},
        ]},
        {id:6,thisid:'atransfer',title:'股票转移',content:[
              {id:0,text:'股票转入',href:'/help/atransfer/118'},
              {id:1,text:'股票转出',href:'/help/atransfer/119'},
              {id:2,text:'股票转移方式',href:'/help/atransfer/120'},
              {id:3,text:'股票转移费用',href:'/help/atransfer/121'},
              {id:4,text:'关联IB账户',href:'/help/atransfer/137'},
        ]},
        {id:7,thisid:'jwhhk',title:'境外银行卡',content:[
              {id:0,text:'招行香港一卡通',href:'/help/jwhhk/313'},
              {id:1,text:'建行陆港通',href:'/help/jwhhk/313'},
              {id:2,text:'工银亚洲',href:'/help/jwhhk/313'},
              {id:3,text:'中银香港',href:'/help/jwhhk/313'},
              {id:4,text:'华商银行',href:'/help/jwhhk/313'},
              {id:5,text:'汇丰银行',href:'/help/jwhhk/313'},
              {id:6,text:'渣打银行境外卡',href:'/help/jwhhk/313'},
              {id:7,text:'花旗银行',href:'/help/jwhhk/313'},
              {id:8,text:'星展银行',href:'/help/jwhhk/313'},
              {id:9,text:'民生银行香港卡',href:'/help/jwhhk/313'},
        ]},
        {id:8,thisid:'security',title:'隐私安全',content:[
              {id:0,text:'资金安全',href:'/help/security/103'},
              {id:1,text:'隐私安全',href:'/help/security/102'},
              {id:2,text:'安全相关问题',href:'/help/security/104'},
        ]},
      ]
    };
  },
  methods:{
    submit: function() {
			if(this.inputtext.keyword){
        this.$router.push({path:'/help/search',query:{keyword:this.inputtext.keyword}});
      }else{
        return false;
      }
    },
    jump(item,href,j){
      this.$router.push({path:href})
      $(this.$refs.nowstate).each(function(index,i){$(i).removeClass('active')})
      if(j.id==0){
        $(this.$refs.nowstate[item.id]).addClass('active');
      }else{
        
      }
      
    }
  },
  mounted(){
      $('#help-side-nav li h4').click(function(){
          $('#help-side-nav li').each(function(index,ele){
              if($(ele).hasClass('default-open')){
                  $(this).removeClass('default-open');
              }
          })
          if($(this).parent().hasClass('default-open')){
              $(this).parent().removeClass('default-open');
          }else{
              $(this).parent().addClass('default-open');
          }
      })
  }
};
</script>

<style scoped lang="scss">
// 顶部
// 共有
.main {
  width: 960px;
  margin: 0 auto;
}
.section {
  position: relative;
  overflow: hidden;
}
.view {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

#container {
  padding: 60px 0 0;
  min-height: 800px !important;
  a {
    text-decoration: none;
  }
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
  .breadcrumb {
    -webkit-flex: 1 1;
    -ms-flex: 1 1;
    flex: 1 1;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    margin: 0;
  }
  .help-search-form .search {
    background-color: #fff;
  }
  .arrow {
    display: inline-block;
    width: 9px;
    height: 9px;
    margin: 0 5px;
    background: url(/static/img/arrow.png) no-repeat 0 0;
  }
}
.page-help-top > .main {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 60px;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.help-search-form {
  position: relative;
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
}

// 侧栏
.page-help-side {
  position: fixed;
  top: 140px;
  width: 110px;
  #help-side-nav {
    font-size: 14px;
    padding-right: 10px;
    border-right: 1px solid #000;
    background: #fff;
    ul {
      display: none;
      padding: 5px 0;
      background-color: #f9f9f9;
      li {
        line-height: 1.2;
        font-size: 12px;
      }
      a {
        display: block;
        color: #9d9d9d;
        padding: 5px 10px;
      }
      a:hover {
        color: #000;
      }
    }
    h4 {
      cursor: pointer;
      position: relative;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.2;
      padding: 10px 16px 10px 10px;
      -webkit-tap-highlight-color: transparent;
      margin: 0;
    }
    .default-open ul {
      display: block;
    }
    .active a {
      color: #333;
      font-weight: 700;
    }
  }
}

footer {
  position: relative;
  z-index: 5;
}
</style>
