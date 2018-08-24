<template>
  <div class="invitation">
            <div v-if="this.$route.path=='/personal/prize'" class="personal-main">
                <section class="section">
                    <h3 class="title">长期活动</h3>
                    <div class="personal-table-wrap">
                        <table class="table personal-table-list">
                            <thead>
                                <tr>
                                    <th>活动名称</th>
                                    <th>奖励形式</th>
                                    <th>参与说明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>转户活动</td>
                                    <td>$75</td>
                                    <td><a target="_blank" href="/transfer-account">前往</a></td>
                                </tr>
                                <tr>
                                    <td>邀请好友</td><td>200元／免佣卡</td>
                                    <td><router-link  to="/activity/forapp/invitation/signup">前往</router-link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 class="title">
                        填写领奖信息 
                        <router-link to="/personal/prize/detail" class="go-reward">
                            查看<span class="iconfont icon-gifs"></span>
                        </router-link>
                    </h3>
                    <div id="prize-container">
                        <div><div class="nav-tab">
                            <a v-for="(item,index) in show" :key="index" href="javascript:;" @click="nowshow=item.id" :class="{active:nowshow==item.id}" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                                {{item.text}}
                            </a>
                        </div>
                        <!-- 收货地址 -->
                        <div v-if="nowshow+1==1" class="forms-field">
                            <div class="form-group">
                                <input type="text" placeholder="收货人姓名" required="" class="form-control" name="receiver" value="">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="收货人手机号" class="form-control" required="" name="phone" value="">
                            </div>
                            <div class="province-city-group clearfix">
                                <select class="form-control" required="" type="select" name="province">
                                    <option value="">选择省份</option>
                                    <option value="北京市">北京市</option>
                                    <option value="天津市">天津市</option>
                                    <option value="河北省">河北省</option>
                                    <option value="山西省">山西省</option>
                                    <option value="内蒙古自治区">内蒙古自治区</option>
                                    <option value="辽宁省">辽宁省</option>
                                    <option value="吉林省">吉林省</option>
                                    <option value="黑龙江省">黑龙江省</option>
                                    <option value="上海市">上海市</option>
                                    <option value="江苏省">江苏省</option>
                                    <option value="浙江省">浙江省</option>
                                    <option value="安徽省">安徽省</option>
                                    <option value="福建省">福建省</option>
                                    <option value="江西省">江西省</option>
                                    <option value="山东省">山东省</option>
                                    <option value="河南省">河南省</option>
                                    <option value="湖北省">湖北省</option>
                                    <option value="湖南省">湖南省</option>
                                    <option value="广东省">广东省</option>
                                    <option value="广西壮族自治区">广西壮族自治区</option>
                                    <option value="海南省">海南省</option>
                                    <option value="重庆市">重庆市</option>
                                    <option value="四川省">四川省</option>
                                    <option value="贵州省">贵州省</option>
                                    <option value="云南省">云南省</option>
                                    <option value="西藏自治区">西藏自治区</option>
                                    <option value="陕西省">陕西省</option>
                                    <option value="甘肃省">甘肃省</option>
                                    <option value="青海省">青海省</option>
                                    <option value="宁夏回族自治区">宁夏回族自治区</option>
                                    <option value="新疆维吾尔自治区">新疆维吾尔自治区</option>
                                </select>
                                <select class="form-control" required="" type="select" name="city">
                                    <option value="">选择城市</option>
                                </select>
                                <select class="form-control" required="" type="select" name="area">
                                    <option value="">选择地区</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="详细地址" class="form-control" required="" name="address" value="">
                            </div>
                            <div class="btn-outer">
                                <button class="btn btn-primary btn-block" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">提交</button>
                            </div>
                            </div>
                        </div>
                        <!-- 银行卡 -->
                        <div v-if="nowshow+1==2" class="forms-field">
                            <div class="form-group">
                                <input type="text" required="" class="form-control" placeholder="请填写银行名，例如：招商银行" name="bank_name" value="">
                            </div>
                            <div class="form-group">
                                <input type="text" required="" class="form-control" pattern="/^\d+$/" placeholder="请填写银行卡号" name="account_number" value="">
                            </div>
                            <div class="form-group">
                                <input type="text" required="" class="form-control" placeholder="请填写开户行所在地" name="address" value="">
                            </div>
                            <div class="form-group">
                                <input type="text" required="" class="form-control" placeholder="请填写开户行名称" name="open_at" value="">
                            </div>
                            <div class="btn-outer">
                                <button class="btn btn-primary btn-block" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">提交</button>
                            </div>
                        </div>
                        <!-- 收货地址 -->
                        <div v-if="nowshow+1==3" class="forms-field">
                            <div class="form-group">
                                <input type="text" required="" class="form-control" placeholder="请填写微信号" name="wechat_id" value="">
                            </div>
                            <div class="btn-outer">
                                <button class="btn btn-primary btn-block" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">提交</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <router-view keep-alive></router-view>
  </div>
</template>

<script>
import MyHead from '@/components/myhead'
import MyFoot from '@/components/myfoot'
import Customer from '@/components/customer'
export default {
  name: 'invitation',
  components: {
    MyHead,MyFoot,Customer
  },
  data () {
    return {
        show:[
            {id:0,text:'收货地址',},
            {id:1,text:'银行卡',},
            {id:2,text:'微信号',},
        ],
        nowshow:0,
    }
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
    #container{
        padding: 60px 0 0;
        a{
            text-decoration: none;
        }
            .sidebar{
                a{
                    text-decoration: none;
                }
                width: 175px;
                float: left;
                margin: 40px 0 0;
                text-align: center;
                h3{
                    font-weight: 700;
                    font-size: 18px;
                }
                ul{
                    margin: 10px 0;
                    li .active{
                        color: #000;
                        font-weight: 700;
                    }
                    li{
                        a{
                            display: block;
                            padding: 13px 0;
                            color: #a3a3a3;
                        }
                    }
                }
            }
        .personal-main {
            margin-left: 200px;
            padding: 50px 20px;
            padding-right: 20px;
            .section{
                margin-bottom: 30px;
                h3.title{
                    color: #a3a3a3;
                    border-bottom: 1px solid #e5e5e5;
                    padding-bottom: 6px;
                    font-size: 14px;
                    margin: 0;
                    a{
                        display: inline-block;
                        margin-left: 10px;
                        span{
                            color: #4e97fa;
                            margin-left: 4px;
                            font-size: 18px;
                        }
                    }
                }
                .personal-table-wrap{
                    margin: 10px 0;
                    .personal-table-list{
                        width: 100%;
                        font-size: 13px;
                        thead {
                            background: #e3e7e9;
                            th{
                                font-weight: 700;
                                padding: 5px;
                                text-align: center;
                                vertical-align: middle;
                                border: 1px solid #f2f5f6;
                            }
                        }
                        tbody{
                            td{
                                padding: 5px;
                                text-align: center;
                                vertical-align: middle;
                                border: 1px solid #f2f5f6;
                            }
                        }
                    }
                }
                #prize-container{
                    .nav-tab{
                        margin: 20px 0;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        border: 1px solid #f2f5f6;
                        -webkit-align-items: center;
                        -ms-flex-align: center;
                        align-items: center;
                        a:first-child {
                            border-left: 0;
                        }
                        a.active, a.active:hover {
                            background-color: #ffe100;
                        }
                        a{
                            -webkit-flex: 1 1;
                            -ms-flex: 1 1;
                            flex: 1 1;
                            border-left: 1px solid #f2f5f6;
                            text-align: center;
                            color: #333;
                            font-weight: 400;
                            padding: 5px 0;
                            position: relative;
                            display: block;
                            -webkit-transition: .6s linear;
                            -o-transition: .6s linear;
                            transition: .6s linear;
                        }
                    }
                    .forms-field{
                        width: 360px;
                        .province-city-group{
                            height: 60px;
                            .form-control{
                                float: left;
                                width: 31%;
                                display: block;
                                height: 34px;
                                padding: 6px 12px;
                                font-size: 14px;
                                line-height: 1.42857143;
                                color: #555;
                                background-color: #fff;
                                border: 1px solid #ccc;
                                border-radius: 4px;
                            }
                            .form-control:nth-child(2) {
                                margin: 0 3.5%;
                            }
                        }
                        .btn-outer{
                            margin-bottom: 10px;
                            button{
                                color: #333;
                                background-color: #ffe100;
                                border-color: #e6cb00;
                            }
                        }
                    }
                }
                
            }
        }

    }

    // 底部
    // 客服组件
    
</style>
