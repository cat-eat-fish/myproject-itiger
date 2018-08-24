<template>
    <div class="deposit">
        <div class="animated-router-container react-animated-router">
            <div class="with-status-hoc animated-router-forward-enter-done">
                <div class="deposit-guide">
                    <div class="guide-steps">
                        <h3 class="subtitle">汇款流程 </h3>
                        <div class="step-group">
                            <div class="step">
                                <span class="step1-icon"></span>
                                货币兑换
                            </div>
                            <div class="line"></div>
                            <div class="step">
                                <span class="step2-icon"></span>
                                境外汇款
                            </div>
                            <div class="line"></div>
                            <div class="step">
                                <span class="step3-icon"></span>
                                填写汇款通知
                            </div>
                        </div>
                        <div class="banks-list">
                            <h3 class="subtitle">
                                港元入金教程
                                <span class="guide-tip">（查看费用及指引）</span>
                            </h3>
                            <div class="bank">
                                <a href="https://www.itiger.com/fee/cebhkd_bs?account=standard&amp;lang=zh_CN&amp;currency=2&amp;platform=1&amp;id=53" target="_blank" style="background-image: url(&quot;https://static.tigerbbs.com/270c7a831cd449ad4cbd3584e05dd25a&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div><div class="bank"><a href="https://www.itiger.com/fee/hxbhkd_bs?account=standard&amp;lang=zh_CN&amp;currency=2&amp;platform=1&amp;id=55" target="_blank" style="background-image: url(&quot;https://static.tigerbbs.com/7bef899b034f75b0739bcc8c244603a0&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div><div class="bank"><a href="https://www.itiger.com/fee/cgbhkd_bs?account=standard&amp;lang=zh_CN&amp;currency=2&amp;platform=1&amp;id=56" target="_blank" style="background-image: url(&quot;https://static.tigerbbs.com/3aa2749508b6c914151646101cf6686c&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div><div class="bank"><a href="https://www.itiger.com/fee/spdbhkd_bs?account=standard&amp;lang=zh_CN&amp;currency=2&amp;platform=1&amp;id=57" target="_blank" style="background-image: url(&quot;https://static.tigerbbs.com/997acb1b9461f16eab61b30bb7a85f00&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div><div class="bank"><a href="https://www.itiger.com/fee/icbchkd_bs?account=standard&amp;lang=zh_CN&amp;currency=2&amp;platform=1&amp;id=36" target="_blank" style="background-image: url(&quot;https://static.laohu8.com/b5dc093b0b582ed7dbe89a064de84e56&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div><div class="bank"><a href="https://www.itiger.com/fee/otherhkd_bs?account=standard&amp;lang=zh_CN&amp;currency=2&amp;platform=1&amp;id=34" target="_blank" style="background-image: url(&quot;https://static.laohu8.com/e0bf9384bf23a0490d1edbd52db8d4c6&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div></div><div class="banks-list"><h3 class="subtitle">
                                    美元入金教程
                                    <span class="guide-tip">（查看费用及指引）</span>
                                    </h3>
                                    <div class="bank">
                                        <a href="https://www.itiger.com/fee/cebb_bs?account=standard&amp;lang=zh_CN&amp;currency=1&amp;platform=1&amp;id=33" target="_blank" style="background-image: url(&quot;https://static.laohu8.com/270c7a831cd449ad4cbd3584e05dd25a&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div><div class="bank"><a href="https://www.itiger.com/fee/cmbc_bs?account=standard&amp;lang=zh_CN&amp;currency=1&amp;platform=1&amp;id=32" target="_blank" style="background-image: url(&quot;https://static.laohu8.com/93ba6ee3bb054a18c5840e613643d5ef&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div><div class="bank"><a href="https://www.itiger.com/fee/abc_bs?account=standard&amp;lang=zh_CN&amp;currency=1&amp;platform=1&amp;id=1" target="_blank" style="background-image: url(&quot;https://static.laohu8.com/c088e2ae5a69c17de2a73e3d7960eb35&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div><div class="bank"><a href="https://www.itiger.com/fee/icbc_bs?account=standard&amp;lang=zh_CN&amp;currency=1&amp;platform=1&amp;id=2" target="_blank" style="background-image: url(&quot;https://static.laohu8.com/b5dc093b0b582ed7dbe89a064de84e56&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div><div class="bank"><a href="https://www.itiger.com/fee/ccb_bs?account=standard&amp;lang=zh_CN&amp;currency=1&amp;platform=1&amp;id=3" target="_blank" style="background-image: url(&quot;https://static.laohu8.com/493bf9842c2c26f65aa8cee06aa85c96&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div><div class="bank"><a href="https://www.itiger.com/fee/cmbhk_bs?account=standard&amp;lang=zh_CN&amp;currency=1&amp;platform=1&amp;id=5" target="_blank" style="background-image: url(&quot;https://static.laohu8.com/c1f51ad71237976ed188d093eab1535a&quot;);"><span class="cover a-fadeIn">查看费用及指引</span></a></div><div class="bank"><a href="https://www.itiger.com/fee/other_bs?account=standard&amp;lang=zh_CN&amp;currency=1&amp;platform=1&amp;id=8" target="_blank" style="background-image: url(&quot;https://static.laohu8.com/e0bf9384bf23a0490d1edbd52db8d4c6&quot;);">
                                    <span class="cover a-fadeIn">
                                        查看费用及指引
                                    </span>
                                </a>
                            </div>
                        </div>
                        <p class="tip guide-btm-tip">
                            *其它未列出银行入金步骤可参照已列出的指引，具体费用参照各行实际收费标准
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'deposit',
  data () {
    return {
        
    }
  },
  methods:{
    
  }
}
</script>
<style scoped lang="scss">
        #deposit-container{ 
            .subtitle {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 10px;
            }
            .guide-tip {
                font-size: 14px;
                font-weight: 400;
            }
            .guide-steps .subtitle {
                margin: 2em 0;
            }
            .step-group {
                overflow: hidden;
                text-align: center;
                padding: 10px 0;
                .step {
                    float: left;
                    width: 16.66667%;
                }
                .line {
                    float: left;
                    width: 16%;
                    margin: 8% 4%;
                    border-bottom: 1px dashed #b0b1b2;
                }
                span {
                    display: block;
                    padding-bottom: 100%;
                    border-radius: 50%;
                    background: #f2f5f6 no-repeat 50%;
                    background-size: 50% 50%;
                    margin-bottom: 16px;
                }
                .step1-icon {
                    background-image: url(/static/img/step1.png);
                }
                .step2-icon {
                    background-image: url(/static/img/step2.png);
                }
                .step3-icon {
                    background-image: url(/static/img/step3.png);
                }
            }
            .banks-list {
                overflow: hidden;
                padding: 20px 0;
                .bank {
                    float: left;
                    width: 25%;
                    margin-bottom: 6px;
                }
                .cover {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,.7);
                    text-align: center;
                    color: #fff;
                    padding-top: 70px;
                    opacity: 0;
                    transition: all 0.5s;
                }
                a {
                    position: relative;
                    display: block;
                    width: 98%;
                    background: no-repeat 50%;
                    background-size: contain;
                    padding: 80px 10px;
                    background-color: #f2f5f6;
                }
                a:hover span{
                    opacity: 1;
                }
            }
            .guide-btm-tip {
                margin: 1em 0;
            }
            .tip {
                font-size: 12px;
                color: #ed1111;
                font-weight: 400;
            }
        }
</style>
