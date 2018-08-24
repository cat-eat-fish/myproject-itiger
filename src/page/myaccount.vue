<template>
    <div class="myaccount">
        <div class="personal-main personal-info">
                <!-- 提示信息 -->
                <div class="tip-box-info">
                    <i class="iconfont icon-gantanhao"></i> 账户状态：开启美股投资之旅，<router-link to="/accounts">马上开户</router-link>
                </div>
                <!-- 开户进度 模板底部传入开户进度（1－4） -->
                <div class="account-process">
                    <ul>
                        <li class="no-line current">
                            <div class="dot"><i></i></div>
                            <p>开户</p>
                        </li>
                        <li>
                            <div class="dot"><i></i></div>
                            <div class="line"></div>
                            <p>审核</p>
                        </li>
                        <li>
                            <div class="dot"><i></i></div>
                            <div class="line"></div>
                            <p>入金</p>
                        </li>
                        <li>
                            <div class="dot"><i></i></div>
                            <div class="line"></div>
                            <p>交易</p>
                        </li>
                    </ul>
                </div>
                <!-- 我的账户 -->
                <section class="section account-info">
                    <h3 class="title">我的账户</h3>
                    <div class="user-info">
                        <div class="info-item">
                            <p class="type">姓名：</p>
                            <p class="value">**</p>
                        </div>
                        <div class="info-item">
                            <p class="type">手机号：</p>
                            <p class="value">+(86)184****7522</p>
                            <p class="ctl">
                                <router-link to="/personal/info/phone?f=personal">修改</router-link>
                            </p>
                        </div>
                        <div class="info-item">
                            <p class="type">账户：</p>
                            <p class="value">663039</p>
                        </div>
                        <div class="info-item">
                            <p class="type">邮箱：</p>
                            <p class="value">1****3@qq.com</p>
                            <p class="ctl">
                                <router-link class="mod-pwd" to="personal/info/email">修改</router-link>
                            </p>
                        </div>
                        <div class="info-item">
                            <p class="type">密码：</p>
                            <p class="value">**************</p>
                            <p class="ctl">
                                <router-link class="mod-pwd" to="/account/retrive">修改</router-link>
                            </p>
                        </div>
                        <div class="info-item">
                            <p class="type">邀请码：</p>
                            <p class="value">G7GIP</p>
                            <p class="ctl">
                                <router-link class="mod-pwd" to="/personal/invitation">修改</router-link>
                            </p>
                        </div>
                        <div class="info-item">
                            <p class="type">安全问题：</p>
                            <p class="value">未设置</p>
                            <p class="ctl">
                                <router-link class="mod-pwd" to="/account/security/questions">修改</router-link>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
    </div>
</template>

<script>
export default {
  name: 'myaccount',
  data () {
    return {

    }
  }
}
</script>
<style scoped lang="scss">
        .personal-main {
            margin-left: 200px;
            padding: 50px 20px;
            padding-right: 20px;
            .tip-box-info {
                padding: 10px 15px 10px 0px;
                background: #f0f7ff;
                color: #589cfb;
                i{
                    padding-left: 5px;
                    color: #589cfb;
                }
            }
            .account-process {
                position: relative;
                height: 60px;
                overflow: hidden;
                margin: 25px 0 0;
                ul{
                    margin: 0;
                    li.no-line {
                        margin-left: 2px;
                        position: absolute;
                        width: auto;
                    }
                    li.current {
                        color: #333;
                        .dot{
                            border: 2px solid #ffe100;
                            background: #fff;
                            padding: 2px;
                            z-index: 3;
                            top: 8px;
                        }
                    }
                    li{
                        width: 33.33%;
                        float: left;
                        text-align: right;
                        padding-top: 40px;
                        position: relative;
                        color: #929292;
                        .dot{
                            position: absolute;
                            right: 3px;
                            top: 10px;
                            border-radius: 100%;
                            z-index: 1;
                            i{
                                display: block;
                                width: 20px;
                                height: 20px;
                                border-radius: 100%;
                                background: #e4e4e4;
                            }
                        }
                        .line{
                            background: #e4e4e4;
                            position: absolute;
                            width: 100%;
                            top: 20px;
                            left: -3px;
                            height: 2px;
                        }
                    }
                }
            }
            .section {
                margin-bottom: 30px;
                h3{
                    color: #a3a3a3;
                    border-bottom: 1px solid #e5e5e5;
                    padding-bottom: 6px;
                    font-weight: 400;
                }
                .user-info{
                    margin-top: 20px;
                    .info-item{
                        position: relative;
                        padding: 10px 0;
                        overflow: hidden;
                        p.type{
                            float: left;
                            width: 70px;
                            color: #a3a3a3;
                            text-align: right;
                        }
                        .value{
                            margin-left: 80px;
                        }
                        .ctl {
                            position: absolute;
                            right: 0;
                            top: 10px;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
</style>




