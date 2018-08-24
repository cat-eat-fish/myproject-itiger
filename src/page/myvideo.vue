<template>
  <div class="video">
    <!-- 顶部组件 -->
    <MyHead></MyHead>
    <!-- 内容 -->
    <div id="container">
      <!-- banner图 -->
      <div class="banner">
        <img src="/static/img/banner.jpg" alt="" />/>
      </div>
      <!-- 导航 -->
      <div class="content-nav">
        <div class="main">
          <nav class="nav-box clear">
            <a @click="gonext(index)" :class="{active:active==index}" href="javascript:;" v-for="(item,index) in contentNav" :key="index" >
              {{item.txt}}
              <span class="nav-arrow" v-if="item.id=0"></span>
            </a>
          </nav>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <!-- 底部组建 -->
    <MyFoot></MyFoot>
    <!-- 联系客服 -->
    <Customer></Customer>
  </div>
</template>

<script>
import MyHead from "@/components/myhead";
import MyFoot from "@/components/myfoot";
import Customer from "@/components/customer";
export default {
  name: "myvideo",
  components: {
    MyHead,
    MyFoot,
    Customer
  },
  data() {
    return {
      // 3个导航块
      contentNav: [
        { id: 0, txt: "视频课程", src: "/college/video" },
        { id: 1, txt: "投资知识", src: "/college/basics/1" },
        { id: 2, txt: "股票学院", src: "/college/about" }
      ],
      active: 0
    };
  },
  methods: {
    gonext(index) {
      this.active=index;
      this.$router.push(this.contentNav[index].src);
    }
  },
  mounted() {}
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

//视频组件
.video-player {
}
// 内容
#container {
  width: 100%;
  // banner图
  .banner {
    position: relative;
    overflow: hidden;
    height: 500px;
    background: url("/static/img/banner_bg.jpg") center bottom repeat-x;
    img {
      position: absolute;
      left: 50%;
      height: 100%;
      margin-left: -583px;
    }
  }
  // 3个
  .content-nav {
    margin-top: 20px;
    nav.nav-box {
      height: 60px;
      a {
        font-size: 24px;
        text-decoration: none;
        line-height: 60px;
        display: block;
        float: left;
        width: 33.33%;
        height: 100%;
        text-align: center;
        color: #333;
        background-color: #f2f2f2;
        .nav-arrow {
          position: absolute;
          bottom: -7px;
          left: 50%;
          display: block;
          width: 0;
          height: 0;
          margin-left: -7px;
          border-top: 8px solid #ffe100;
          border-right: 7px solid transparent;
          border-bottom: 0;
          border-left: 7px solid transparent;
        }
      }
      a.active {
        position: relative;
        background-color: #ffe100;
      }
    }
  }
}

// 底部
// 客服组件

</style>
