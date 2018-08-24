<!--
  params:
    pageNo: 总页数
    current: 当前的页码
 -->
<template>
  <div class="pager">
    <select class="select-page" @change="selectPage()">
                  <option value="10">每页10条</option>
                  <option value="15">每页15条</option>
                  <option value="20">每页20条</option>
    </select>
    <div class="page-right">
      <button class="btn btn-pager" :disabled="currentNow == 1" @click="prePage">
      <span aria-hidden="true"><i class="fa fa-angle-left"></i></span>
    </button>
    <span v-if="pageAll !== 1" class="page-index" v-bind:class="{'active':1 == currentNow}" @click="goPage(1)">1</span>
    <span v-if="preClipped" class="page-index">...</span>
    <span v-for="(index,j) in pages" :key="j" class="page-index" v-bind:class="{'active':index == currentNow}" @click="goPage(index)">{{index}}</span>
    <span v-if="backClipped" class="page-index">...</span>
    <span class="page-index" v-bind:class="{'active':pageAll == currentNow}" @click="goPage(pageAll)">{{pageAll}}</span>
    <button class="btn btn-pager" :disabled="currentNow == pageAll" @click="nextPage">
      <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
    </button>
    </div>
  </div>
</template>
<script type="es6">
export default {
  name:'page',
  props: {
    // 用于记录总页码，可由父组件传过来
    pageNo: {
      type: Number,
      default: 1
    },
    // 用于记录当前页数，这个与父组件进行数据交互来完成每一页的数据更新，所以我们只要改变current的值来控制整个页面的数据即可
    current: {
      type: Number,
      default: 1
    }
  },
  data: function () {
    return {
      // 用于判断省略号是否显示
      backClipped: true, 
      preClipped: false,
      //通过这种方法处理从父组件传来的参数
      currentNow:this.current,
      pageAll:this.pageNo/10,
      pageAll1:this.pageNo
    }
  },
  methods: {
    selectPage(){
      this.pageAll = parseInt(this.pageAll1/$('.select-page').val());
      if(this.currentNow > this.pageAll){
        this.currentNow = this.pageAll
      }
    },
    prePage () {
      // 上一页
      this.currentNow--

    },
    nextPage () {
      // 下一页
      this.currentNow++
    },
    goPage (index) {
      // 跳转到相应页面
      if (index !== this.currentNow) {
        this.currentNow = index
      }
    }
  },
  computed: {
    // 使用计算属性来得到每次应该显示的页码
    pages: function () {
      let ret = []
      if (this.currentNow > 3) {
        // 当前页码大于三时，显示当前页码的前2个
        ret.push(this.currentNow - 2)
        ret.push(this.currentNow - 1)
        if (this.currentNow > 4) {
          // 当前页与第一页差距4以上时显示省略号
          this.preClipped = true
        }
      } else {
        this.preClipped = false
        for (let i = 2; i < this.currentNow; i++) {
          ret.push(i)
        }
      }
      if (this.currentNow !== this.pageAll && this.currentNow !== 1) {
        ret.push(this.currentNow)
      }
      if (this.currentNow < (this.pageAll - 2)) {
        // 显示当前页码的后2个
        ret.push(this.currentNow + 1)
        ret.push(this.currentNow + 2)
        if (this.currentNow <= (this.pageAll - 3)) {
          //当前页与最后一页差距3以上时显示省略号
          this.backClipped = true
        }
      } else {
        this.backClipped = false
        for (let i = (this.currentNow + 1); i < this.pageAll; i++) {
          ret.push(i)
        }
      }
      // 返回整个页码组
      return ret
    }
  }
}
</script>
// 组件样式
<style scoped>
.pager {
  text-align: center;
}
.select-page{
  float: left;
  padding: 0px;
  margin-left: 31px;
  width: 80px;
  height: 24px;
  text-align: center;
  border:1px solid #CCCCCC;
  color: #999999;
  cursor:pointer;
}
.page-right{
  float: right;
  margin-right: 24px
}
.btn-pager {
  margin-left: 10px;
  padding: 0px;
  width: 24px;
  height: 24px;
  text-align: center;
  background-color: #ffffff;
  color: #CCCCCC;
  border: 1px solid #e3e3e3;
  border-radius: 0px;
  cursor:pointer;
}
.btn-pager:hover {
  background-color: #f2f2f2;
}
.page-index {
  display: inline-block;
  margin-left: 4px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-color: #ffffff;
  cursor: pointer;
  color: #000000;
}
.active {
  color: #ffffff;
  background-color: #FFA600;
}
</style>