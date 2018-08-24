<template>
  <div class="myvideo-video">
      <!-- 直播课程 -->
      <div class="college-section college-live animated">
        <div class="main">
          <div class="live-box-wrap">
            <div class="live-left-section">
              <div class="title-box clear">
                <h2 class="mid-title">小米上市敲钟直播回放<span class="live-icon"></span></h2>
              </div>
              <!-- 播放视频组件 -->
              <video-player  style="height:480px" id="live_box_wrap" class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
              </video-player>
            </div>
            <div class="live-right-section">
              <div class="title-box">
                <h2 class="mid-title">精彩推荐</h2>
              </div>
              <ul class="items-l">
                <li class="item-1" v-for="(item,index) in recommendation" :key="index">
                  <div class="img-box">
                    <img class="small-img" :src="item.src" alt="">
                  </div>
                  <div class="desc-box">
                    <h6 class="sm-title">
                      <a :href="item.a_href">{{item.a_text}}</a>
                    </h6>
                    <p class="text">{{item.desc}}</p>
                    <ul class="live-list-icon-common live-recommend ">
                      <li class="item item-name">
                        <i class="iconfont icon-huatong"></i>{{item.name}}
                      </li>
                      <li class="item item-date">
                        <i class="iconfont icon-shijian"></i>{{item.date}}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 3个 -->
      <div class="college-live-navbox" id="college_live_navbox">
        <div class="main">
          <nav class="live-navbox clear">
            <a @click="jump(index)" :class="{active:index==active}" v-for="(item,index) in fNav"  :key="index"  href="javascript:;">
              {{item.text}}
              <span class="arrow" v-if="index==active"></span>
            </a>
          </nav>
        </div>
      </div>
      <!-- 列表 -->
      <div class="college-live-content">
        <div class="main">
          <div class="live-content">
            <ul class="items-l  it2">
              <li v-for="(item,index) in nowlists" :key="index">
                <div class="img-box">
                  <img :src="item.src" alt="">
                </div>
                <div class="desc-box">
                  <h6 class="video-title">
                    <a :href="item.a_href">{{item.a_text}}</a>
                  </h6>
                  <ul class="live-list-icon-common live-list-icon clear">
                    <li class="item item-name">
                      <i class="iconfont icon-huatong"></i>{{item.name}}
                    </li>
                    <li class="item item-date">
                      <i class="iconfont icon-shijian"></i>{{item.date}}
                    </li>
                  </ul>
                  <p class="text">{{item.desc}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 页码 -->
      <MyPage :alldate="this.oldlistsnum" :onedate="this.onedate" @pageprev="pageprev" @ievent = "ievent"></MyPage>
    </div>
</template>

<script>
import MyPage from "@/components/page";
export default {
  components:{
    MyPage
  },
  name: "myvideo-video",
  data() {
    return {
      active:0,
      // 课程数据
      recommendation: [
        {
          id: 0,
          a_text: "港股推同股不同权",
          a_href: "javascript:;",
          src: "/static/img/ce1.jpg",
          desc: "什么是港股的同股不同权",
          name: "老虎大概两",
          date: "03-06",
          img:'/static/img/1520323951_162409150.jpg',
          video:'http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/972aaeab7447398155454250823/v.f20.mp4'
        },
        {
          id: 1,
          a_text: "港股推同股不同权",
          a_href: "javascript:;",
          src: "/static/img/ce2.jpg",
          desc: "什么是港股的同股不同权",
          name: "老虎大概两",
          date: "03-06",
          img:'/static/img/loading.png',
          video:'http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/972aaeab7447398155454250823/v.f20.mp4'
        },
        {
          id: 2,
          a_text: "港股推同股不同权",
          a_href: "javascript:;",
          src: "/static/img/ce3.jpg",
          desc: "什么是港股的同股不同权",
          name: "老虎大概两",
          date: "03-06",
          img:'/static/img/loading.png',
          video:'http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/972aaeab7447398155454250823/v.f20.mp4'
        },
        {
          id: 3,
          a_text: "港股推同股不同权",
          a_href: "javascript:;",
          src: "/static/img/ce4.jpg",
          desc: "什么是港股的同股不同权",
          name: "老虎大概两",
          date: "03-06",
          img:'/static/img/loading.png',
          video:'http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/972aaeab7447398155454250823/v.f20.mp4'
        },
        {
          id: 4,
          a_text: "港股推同股不同权",
          a_href: "javascript:;",
          src: "/static/img/ce5.jpg",
          desc: "什么是港股的同股不同权",
          name: "老虎大概两",
          date: "03-06",
          img:'/static/img/loading.png',
          video:'http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/972aaeab7447398155454250823/v.f20.mp4'
        }
      ],
      // 3个底导航
      fNav: [
        { id: 0, text: "直播回放", src: "/college/video?category=replay" },
        { id: 1, text: "基础课堂", src: "/college/video?category=basics" },
        { id: 2, text: "老虎说", src: "/college/video?category=talking" }
      ],
      onedate:5,
      oldlistsnum:'',
      // 列表数据
      lists: [
        {
          id: 0,
          a_text: "港股推同股不同权",
          a_href: "javascript:;",
          src: "/static/img/ce1.jpg",
          desc: "什么是港股的同股不同权",
          name: "老虎说钱",
          date: "03-06",
          img:'/static/img/videobg1.jpg',
          video:'http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/972aaeab7447398155454250823/v.f20.mp4'
        },
        {
          id: 1,
          a_text: "港股推同股不同权",
          a_href: "javascript:;",
          src: "/static/img/ce2.jpg",
          desc: "什么是港股的同股不同权",
          name: "老虎说钱",
          date: "03-06",
          img:'/static/img/videobg1.jpg',
          video:'http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/972aaeab7447398155454250823/v.f20.mp4'
        },
        {
          id: 2,
          a_text: "港股推同股不同权",
          a_href: "javascript:;",
          src: "/static/img/ce3.jpg",
          desc: "什么是港股的同股不同权",
          name: "老虎说钱",
          date: "03-06",
          img:'/static/img/videobg1.jpg',
          video:'http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/972aaeab7447398155454250823/v.f20.mp4'
        },
        {
          id: 3,
          a_text: "港股推同股不同权",
          a_href: "javascript:;",
          src: "/static/img/ce4.jpg",
          desc: "什么是港股的同股不同权",
          name: "老虎说钱",
          date: "03-06",
          img:'/static/img/videobg1.jpg',
          video:'http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/972aaeab7447398155454250823/v.f20.mp4'
        },
        {
          id: 4,
          a_text: "港股推同股不同权",
          a_href: "javascript:;",
          src: "/static/img/ce5.jpg",
          desc: "什么是港股的同股不同权",
          name: "老虎说钱",
          date: "03-06",
          img:'/static/img/videobg1.jpg',
          video:'http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/972aaeab7447398155454250823/v.f20.mp4'
        },
        {
          id: 5,
          a_text: "港股推同股不同权",
          a_href: "javascript:;",
          src: "/static/img/ce5.jpg",
          desc: "什么是港股的同股不同权",
          name: "老虎说钱",
          date: "03-06",
          img:'/static/img/videobg1.jpg',
          video:'http://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/972aaeab7447398155454250823/v.f20.mp4'
        }
      ],
      nowlists:[],
      // 视频组件
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src:
              "https://1254107296.vod2.myqcloud.com/27e1f7ecvodtransgzp1254107296/9d65f72b7447398157138280225/v.f20.mp4" //url地址
          }
        ],
        poster: "/static/img/1531200098_3212089658.100_0.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  created(){
    this.nowlists=this.lists;
  },
  methods:{
    jump(index){
      this.$router.push(this.fNav[index].src);
      this.active=index;
    },
      ievent(data){
        this.$router.push({path:'/college/video',query:{page:data}})
        if(data==1){
          var a=this.lists.slice(0,this.onedate);
          this.nowlists=a;
        }else{
          var a=this.lists.slice(data*this.onedate-5,data*this.onedate-1);
          this.nowlists=a;
        }
      },
      pageprev(data){
        this.$router.push({path:'/college/video',query:{page:data}})
        if(data==1){
          var a=this.lists.slice(0,this.onedate);
          this.nowlists=a;
        }else{
          var a=this.lists.slice(data*this.onedate-5,data*this.onedate-1);
          this.nowlists=a;
        }
      }
  },
  mounted(){
    this.oldlistsnum=this.lists.length;
    // 初始显示页码1内容
    var page=this.$route.query.page;
    if(page){
      page=this.$route.query.page;
    }else{
      page=1;
    }
    
    var that=this;
    var a=document.querySelectorAll('.items-l li a');
    var b=document.querySelectorAll('.it2 li a');
    a.forEach(function(item,index){
      item.onclick=function(){
        that.playerOptions['sources'][0].src=that.recommendation[index].video;
        that.playerOptions.poster=that.recommendation[index].img;
        var obj = document.getElementById("live_box_wrap").offsetTop;
        scrollTo(0,obj);
      }
    })
    b.forEach(function(item,index){
      item.onclick=function(){
        that.playerOptions['sources'][0].src=that.lists[index].video;
        that.playerOptions.poster=that.lists[index].img;
        var obj = document.getElementById("live_box_wrap").offsetTop;
        scrollTo(0,obj);
      }
    })
  }
};
</script>
<style scoped lang="scss">
body{
  height: 100%;
}
.myvideo-video{
  width: 960px;
  margin: 0 auto;
}
  // 直播课程
  .live-box-wrap {
    margin-top: -20px;
    padding-top: 60px;
    .live-left-section {
      float: left;
      width: 670px;
      height: 100%;
      .title-box {
        h2 {
          line-height: 1;
          position: relative;
          padding: 10px 0;
          font-size: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #333;
        }
        .live-icon {
          position: absolute;
          top: 7px;
          display: inline-block;
          zoom: 1;
          width: 70px;
          height: 30px;
          margin-left: 10px;
          background: url(/static/img/live-icon.png) left center no-repeat;
        }
      }
      .live-box {
        position: relative;
        overflow: hidden;
        height: 480px;
        background-color: #000;
        img {
          display: block;
          visibility: hidden;
          width: 100%;
          height: 100%;
        }
      }
    }
    .live-right-section {
      width: 270px;
      height: 100%;
      margin-left: 690px;
      .title-box {
        h2 {
          line-height: 1;
          position: relative;
          padding: 10px 0;
          font-size: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #333;
        }
      }
      .items-l {
        overflow: hidden;
        height: 480px;
        .item-1 {
          width: 270px;
          height: 80px;
          overflow: hidden;
          margin-bottom: 20px;
          .img-box {
            position: relative;
            float: left;
            overflow: hidden;
            width: 117px;
            height: 80px;
            img.small-img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .desc-box {
            height: 80px;
            margin-left: 130px;
            h6 {
              line-height: 1;
              margin-bottom: 6px;
              margin-top: 0px;
              color: #333;
              font-weight: 400;
              a {
                display: block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #000;
              }
            }
            p {
              font-size: 12px;
              line-height: 1.3;
              overflow: hidden;
              height: 30px;
              margin-bottom: 6px;
              color: #999;
            }
            .live-list-icon-common {
              font-size: 12px;
              width: 100%;
              max-width: 150px;
              height: 20px;
              color: #ccc;
              li.item {
                line-height: 20px;
                float: left;
                overflow: hidden;
                height: 20px;
                text-indent: 2px;
              }
              .item-name {
                width: 60%;
              }
              .item-date {
                width: 40%;
              }
            }
          }
        }
      }
    }
  }
  // 3个底导航
  .college-live-navbox {
    .live-navbox {
    height: 152px;
      margin-top: -20px;
      padding: 60px 0 40px;
      a {
        font-size: 24px;
        text-decoration: none;
        line-height: 50px;
        float: left;
        width: 33.3%;
        height: 50px;
        text-align: center;
        color: #333;
        border-bottom: 2px solid #e7e7e7;
        span.arrow {
          position: absolute;
          bottom: 0;
          left: 50%;
          display: block;
          width: 0;
          height: 0;
          margin-left: -7px;
          border-top: 0;
          border-right: 7px solid transparent;
          border-bottom: 6px solid #ffe100;
          border-left: 7px solid transparent;
        }
      }
      a.active {
        position: relative;
        border-bottom-color: #ffe100;
      }
    }
  }
  // 列表
  .college-live-content {
    ul.items-l {
      overflow: hidden;
      max-height: 914px;
      li:nth-child(1) {
        border: none;
      }
      li {
        box-sizing: content-box;
        padding: 30px 0;
        height: 129px;
        border-top: 1px solid #f3f3f3;
        .img-box {
          position: relative;
          float: left;
          overflow: hidden;
          width: 190px;
          height: 130px;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .desc-box {
          position: relative;
          margin-left: 220px;
          padding: 17px 0;
          h6 {
            font-size: 20px;
            line-height: 1;
            margin-bottom: 12px;
            color: #333;
            font-weight: 600;
            a {
              color: #000;
            }
          }
          .live-list-icon {
            position: absolute;
            top: 18px;
            right: 0;
            width: 130px;
            .item {
              line-height: 20px;
              font-size: 12px;
              float: left;
              overflow: hidden;
              height: 20px;
              text-indent: 2px;
              border: none;
              color: #ccc;
            }
            .item-name {
              width: 60%;
            }
            .item-date {
              width: 40%;
            }
          }
          .text {
            line-height: 1.5;
            min-height: 63px;
            color: #838383;
          }
        }
      }
    }
  }
  // 页码
  .page {
    margin: 80px 0;
    text-align: center;
  }
</style>
