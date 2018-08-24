<template>
    <div class="depositnotice">
         <div class="animated-router-forward-enter-done"><h3 class="page-title">填写存款通知<a class="small-link" href="/personal/deposit/notice/history">存款通知填写记录</a></h3><div class="animated-router-container react-animated-router"><div class="with-status-hoc animated-router-forward-enter-done"><div><div class="tip-warning">* 为保障您的资金及时到账，请根据真实情况，将下列内容填写完整<br>* 需使用本人同名银行账户入金</div><div class="form-area"><div class="form-field-tab"><span class="tab-item active" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">存入港币</span><span class="tab-item" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">存入美元</span></div><div class="form-wrap"><div class="form-group"><input type="text" placeholder="汇款金额，首次入金无金额门槛" required="" class="form-control" pattern="/^(\d+|\d+(\.\d+))$/" name="amount" value=""></div><div class="form-group"><select class="form-control" type="select" name="bank"><option value="" disabled="">汇款银行</option><option value="中国邮政储蓄">中国邮政储蓄</option><option value="中国银行">中国银行</option><option value="中国农业银行">中国农业银行</option><option value="中国建设银行">中国建设银行</option><option value="中国工商银行">中国工商银行</option><option value="中信银行">中信银行</option><option value="招商银行">招商银行</option><option value="招商银行（香港分行）">招商银行（香港分行）</option><option value="兴业银行">兴业银行</option><option value="浦发银行">浦发银行</option><option value="平安银行">平安银行</option><option value="民生银行">民生银行</option><option value="交通银行">交通银行</option><option value="华夏银行">华夏银行</option><option value="广发银行">广发银行</option><option value="光大银行">光大银行</option><option value="香港银行">香港银行</option><option value="支付宝">支付宝</option><option value="其他境外银行">其他境外银行</option><option value="其他大陆银行">其他大陆银行</option></select></div><div class="form-group"><textarea rows="3" placeholder="在汇款时在银行操作时填写的汇款人地址(用于银行对账，请尽量填写以加快到账速度)" maxlength="200" class="form-control" type="textarea" name="pay_address"></textarea></div></div><button class="btn btn-primary btn-block" type="button" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">通知老虎查看款项</button><p class="form-meta">*使用和证券账户同名的银行账户汇款后请务必填写此表格，方便您资金顺利到账；不填写此表格，或填写金额与实际入金金额不一致会造成资金到账时间变长</p></div></div></div></div></div>
    </div>
</template>

<script>
export default {
  name: "depositnotice",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
    .tip-warning {
        border: 1px solid #f29c9f;
        background: #fff3f3;
        color: #ed1111;
        padding: 15px;
        margin: 1em 0;
    }
    .form-area {
        margin-right: 300px;
    }
    .form-field-tab .active {
        border-color: #ffe100;
        background-color: #fffbe1;
    }
    textarea.form-control {
        height: auto;
    }
    .btn-block {
        width: 100%;
        display: block;
    }
    .btn-primary {
        color: #333;
        background-color: #ffe100;
        border-color: #e6cb00;
    }
    .form-control {
        display: block;
        width: 100%;
        height: 40px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 3px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color .35s ease-in-out,-webkit-box-shadow .35s ease-in-out;
        transition: border-color .35s ease-in-out,-webkit-box-shadow .35s ease-in-out;
        -o-transition: border-color ease-in-out .35s,box-shadow ease-in-out .35s;
        transition: border-color .35s ease-in-out,box-shadow .35s ease-in-out;
        transition: border-color .35s ease-in-out,box-shadow .35s ease-in-out,-webkit-box-shadow .35s ease-in-out;
    }
    select.form-control {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url(/static/img/about-3-logo3_1.png) no-repeat 100%;
        background-size: auto 6px;
    }
    .form-group {
        margin-bottom: 20px;
        position: relative;
    }
    #deposit-container{
        .form-meta {
            font-size: 12px;
            color: #aaa;
            margin: 20px 0;
        }
       .page-title {
            font-weight: 700;
            font-size: 16px;
            margin: 1em 0;
            .small-link {
                margin-left: 10px;
                font-size: 12px;
            }
        } 
        .form-field-tab {
            margin: 10px 0;
            .tab-item {
                text-decoration: none;
                display: inline-block;
                margin: 5px 20px 5px 0;
                border: 1px solid #ccc;
                border-radius: 3px;
                padding: 10px;
                position: relative;
                color: #333;
                cursor: pointer;
            }
        }
        .tab-item {
            text-decoration: none;
            display: inline-block;
            margin: 5px 20px 5px 0;
            border: 1px solid #ccc;
            border-radius: 3px;
            padding: 10px;
            position: relative;
            color: #333;
            cursor: pointer;
        }
    } 
</style>
