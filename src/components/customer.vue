<template>
    <div class="customers">
        <a class="customer" @click="open" href="javascript:;">
            <span class="iconfont icon-xiaoxi"></span>
            联系客服
        </a>
        <div id="aihecong">
            <div data-reactroot="" class="chat">
                <h3 class="title" style="background-color: rgb(33, 150, 243);">
                    <div class="head">
                        <img src="https://chatimg.aihecong.com/FtonZOUCqoeCWF-CYDaRBczHBshN?imageView2/1/w/100/h/100" width="40">
                    </div>
                    <div class="text">
                        <span>
                            客服
                        </span>  
                        <p>
                            <span>
                                <span>
                                    <span>Hi，很高兴为您服务。</span>
                                </span>
                                <span style="position: fixed; visibility: hidden; top: 0px; left: 0px;">…</span>
                            </span>
                        </p>
                    </div>
                </h3>
                <div style="height: 100%; overflow: hidden;">
                    <div id="chat-message-body">
                        <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
                            <div style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;">
                                <div class="loading-more-msg"></div>
                                <div class="chat-message-body-list complete">
                                    <!-- 客服 -->
                                    <div class="ser con">
                                        <p class="time-break">
                                            <span>16:50</span>
                                        </p>
                                        <div class="chat chat-left">
                                            <div class="chat-avatar">
                                                <img class="avatar" width="35" height="35" src="https://chatimg.aihecong.com/FtonZOUCqoeCWF-CYDaRBczHBshN?imageView2/1/w/100/h/100">
                                            </div>
                                            <div class="chat-body">
                                                <div class="chat-content">
                                                    <div class="txt-message">
                                                        <span><!-- react-text: 32 -->您好，有什么可以帮您的吗？<!-- /react-text -->
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 客户 -->
                                    <div class="cli con">
                                        <div class="chat chat-right">
                                            <div class="chat-avatar"></div>
                                            <div class="chat-body">
                                                <div class="chat-content" style="background-color: rgb(33, 150, 243);">
                                                    <div class="txt-message">
                                                        <span><!-- react-text: 157 -->不<!-- /react-text --></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="position: absolute; height: 6px; transition: opacity 200ms; opacity: 0; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;">
                                <div style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;">
                                </div>
                            </div>
                            <div style="position: absolute; width: 6px; transition: opacity 200ms; opacity: 0; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;">
                                <div style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 0px;">
                                </div>
                            </div>
                        </div>
                    </div>
                <div>
                <div id="chat-smile">
                </div>
                <div id="chat-evaluate">
                </div>
                <div class="chat-send">
                    <div class="chat-send-body">
                        <textarea type="textarea" placeholder="请输入" class="ant-input">
                        </textarea>
                    </div>
                    <div class="chat-tool">
                        <!-- 发送 -->
                        <i @click="send" class="iconfont icon-fasong" style="background: none;"></i>
                        <!-- <span>
                            <i class="icon iconfont icon-smile" style="color: rgb(204, 204, 204);"></i>
                        </span>
                        <span class="">
                            <div class="ant-upload ant-upload-select ant-upload-select-text">
                                <span tabindex="0" class="ant-upload" role="button">
                                    <input type="file" accept="" style="display: none;">
                                    <i class="icon iconfont icon-folder"></i>
                                </span>
                            </div>
                        </span> -->
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
</template>
<script>
    export default{
        name: 'customer',
        data(){
            return {
                
            }
        },
        mounted(){
            
        },
        methods:{
            WebSocketTest(){
                // WebSocket
                var ws = new WebSocket("ws://localhost:9998/kefu");
                switch (ws.readyState) {
                case WebSocket.CONNECTING:
                    // 正在连接do something
                    break;
                case WebSocket.OPEN:
                    // 连接成功do something
                    break;
                case WebSocket.CLOSING:
                    // 连接正在关闭do something
                    break;
                case WebSocket.CLOSED:
                    // 连接已经关闭或者打开连接失败do something
                    break;
                default:
                    // this never happens
                    break;
                }
            },
            open(){
                var now=document.querySelector('#aihecong').style.display;
                if(now=='none' || now=='' || now==undefined){
                    document.querySelector('#aihecong').style.cssText = 'display:block'
                }else{
                    document.querySelector('#aihecong').style.cssText = 'display:none'
                } 

                
            },
            send(){
                // WebSocket();
                // ws.send('你好，我想咨询您一些问题！')
            }
        }
    }
</script>
<style scoped lang='scss'>
        a{
            text-decoration: none;
        }
    .customer .iconfont{
        position: absolute;
        top: 0;
        left: 0;
        width: 37px;
        height: 37px;
        border-radius: 100%;
        background: center center/70% auto no-repeat #ffe500;
        -webkit-box-shadow: 0 0 5px rgba(0,0,0,.2);
        box-shadow: 0 0 5px rgba(0,0,0,.2);
        font-size: 24px;
        text-align: center;
        line-height: 37px;
        color: #000;
    }
    .customer{
        position: fixed;
        z-index: 999;
        right: 20px;
        bottom: 30px;
        background: #ffe100;
        padding: 8px 22px 8px 52px;
        border: 1px solid #fbb409;
        border-radius: 20px;
        color: #000;
        white-space: nowrap;
        font-weight: 700;
        line-height: 1.6;
    }
    *{
        box-sizing: border-box;
    }
    #aihecong{
        display: none;
        bottom: 95px;
        border-radius: 8px;
        left: auto;
        right: 20px;
        position: fixed;
        z-index: 2147483001;
        height: calc(100% - 20px - 75px - 20px);
        width: 370px;
        min-height: 250px;
        max-height: 590px;
        box-shadow: 0 5px 40px rgba(0,0,0,.16);
        overflow: hidden;
        background-color:rgb(252, 252, 252); 
        .chat {
            height: 100%;
            h3.title {
                z-index: 1020;
                margin: 0;
                top: 0;
                width: 100%;
                font-weight: 400;
                height: 75px;
                overflow: hidden;
                padding: 0 20px;
                background: #4e97d9;
                color: hsla(0,0%,100%,.95);
                -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.2);
                box-shadow: 0 1px 4px rgba(0,0,0,.2);
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                .head,.head img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
                .text {
                    padding-left: 15px;
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    font-size: 16px;
                    font-weight: 400;
                    p {
                        height: 20px;
                        line-height: 20px;
                        overflow: hidden;
                        font-size: 13px;
                    }
                }
            }
        }
        #chat-message-body {
            height: calc(100% - 130px);
            overflow: hidden;
            background: #fcfcfc;
            .loading-more-msg {
                text-align: center;
                color: #aaa;
                font-size: 16px;
                height: 10px;
                line-height: 10px;
                margin-top: 10px;
            }
            .chat-message-body-list.complete {
                min-height: calc(100% - 20px - 34px);
                height: auto;
            }
            .time-break{
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                display: flex;
                padding: 15px 0;
                margin: 0;
                span{
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    background-color: #f5f5f5;
                    border-radius: 4px;
                    color: #4a4a4a;
                    display: -webkit-inline-box;
                    display: -ms-inline-flexbox;
                    display: inline-flex;
                    height: 2em;
                    line-height: 1.5;
                    padding-left: .75em;
                    padding-right: .75em;
                    white-space: nowrap;
                    justify-content: center;
                }
            }
        }
    }
    .chat-send {
        background: #fff;
        min-height: 55px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 9;
        width: 100%;
        -webkit-box-shadow: 0 0 100px 0 rgba(150,165,190,.24);
        box-shadow: 0 0 100px 0 rgba(150,165,190,.24);
        border-top: 1px solid #e6e6e6;
        .chat-send-body {
            position: relative;
        }
        textarea {
            height: 55px;
            resize: none;
            background: transparent;
            border-style: none;
            font-size: 14px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding: 17px;
            padding-right: 120px;
            padding-left: 25px;
            width: 100%;
            height: 100%;
            height: 55px;
        }
        .chat-tool {
            position: absolute;
            right: 0;
            top: 0;
            height: 55px;
            line-height: 55px;
            padding-right: 20px;
            i {
                font-size: 19px;
                margin-left: 13px;
                display: inline-block;
                cursor: pointer;
                color: #ccc;
            }
        }
    }


    // 对话
    .con{
        .chat-content {
            float: left;
            background-color: #f3f3f3;
            position: relative;
            display: block;
            margin: 0 10px 16px;
            margin-right: 15px;
            max-width: 220px;
            clear: both;
            border-radius: 4px;
            white-space: normal;
            word-wrap: break-word;
        }
        .txt-message {
            padding: 8px 15px;
            font-size: 14px;
            font-weight: 400;
            color: #000;
        }
         // 内容
            .chat-body {
                display: block;
                overflow: hidden;
                margin-right: 0;
                .chat-content:before {
                    position: absolute;
                    top: 10px;
                    right: -10px;
                    width: 0;
                    height: 0;
                    content: "";
                    right: auto;
                    left: -10px;
                    border: 5px solid transparent;
                    border-right-color: #f3f3f3;
                }
            }
        .chat-left{
            // 头像
            .chat-avatar {
                margin-right: 0;
                margin-left: 15px;
                float: left;
                .avatar {
                    width: 35px;
                    border-radius: 50%;
                }
            }
           
        }
    }
    .cli{
        // 内容
        .chat-body {
            .chat-content:before {
                z-index: 100;
                left: 44px;
                border-left-color: #2196f3;
                border-right-color: transparent;
            }
            .chat-content {
                margin-right: 25px;
                float: right;
                background-color: #2196f3;
                .txt-message {
                    color: #fff;
                }
            }
        }
    }

</style>