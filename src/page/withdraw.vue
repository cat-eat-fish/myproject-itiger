<template>
  <div class="withdraw">
        <div class="personal-main">
            <!-- 如果用户开通了两个账户 -->

            <section class="section">
            <h3 class="title">提取资金</h3>

            <div id="withdraw-form-container"><div class="bos-withdraw"><h3 class="form-title">收款账户信息<a class="small-link" href="/personal/withdraw/history">出金通知填写记录</a></h3><div class="form-area"><h4>您还没有添加收款银行信息，请添加：</h4><div class="add-bank-from"><div class="important-tips">【温馨提示】<br>1、建议您优先使用境外卡/香港卡出金。<br>2、使用境内银行卡出金，存在被拒风险（根据客户以往的经验反馈，招商银行、农业银行等被拒风险较高），请谨慎选择。<br>3、此提示旨在提醒您出金存在的潜在风险，因银行、监管机构政策调整或其他因素影响，老虎证券无法确保此提示的准确性及实时性，亦无法承担您由于此提示遭受的任何损失。</div><div class="form-group"><input type="text" readonly="" placeholder="收款人姓名" class="form-control" name="holderName" value="柯善星"></div><div class="form-group"><input type="text" placeholder="银行名称" required="" class="form-control" name="bankName" value=""><div class="form-tip">请填写精确至支行名称，例如：中国银行海淀支行</div></div><div class="form-group"><input type="text" placeholder="银行账号" required="" class="form-control" name="cardNo" value=""></div><div class="form-group"><input type="text" placeholder="银行地址" required="" class="form-control" name="bankAddr" value=""></div><div class="form-group"><input type="text" placeholder="SWIFT Code" required="" class="form-control" name="swiftCode" value=""><div class="form-tip">SWIFT Code 请向您的收款银行客服咨询</div></div><div class="form-group"><input type="checkbox" class="" name="isDefault" checked>设为默认收款账号</div><button class="btn btn-primary btn-block" disabled="" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">保存收款信息</button></div></div></div></div>

            </section>
        </div>
  </div>
</template>

<script>
export default {
  name: 'withdraw',
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
    }
    .section {
        margin-bottom: 30px;
        .title {
            color: #a3a3a3;
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 6px;
        }
    }
    .bos-withdraw h3 {
        font-weight: 700;
        font-size: 16px;
        margin: 1em 0;
        .small-link {
            font-size: 12px;
            margin-left: 10px;
        }
    }
    #withdraw-form-container{
       .form-title {
            font-weight: 700;
            margin-bottom: 5px;
            font-size: 16px;
            margin: 1em 0;
        } 
    } 
    .bos-withdraw h4 {
        margin: .5em 0;
    }
    .form-area {
        margin-right: 300px;
    }
    .important-tips {
        color: red;
        margin-bottom: 20px;
    }
    .form-group {
        margin-bottom: 20px;
        position: relative;
    }
</style>
