<template>
    <div class="depositaccount">
        <div class="with-status-hoc animated-router-forward-enter-done">
            <div><div class="tip-warning">
                <p>*如果您选择通过美国的银行，支票，ach等其它非电汇入金的方式，请联系客服获取帮助</p>
                <p>*请您使用同名银行卡入金</p>
            </div>
            <div class="info-block" id="hkd-account">
                <h3 class="subtitle">
                    <span class="hkd-map"></span>我的港币账号
                    <span class="tip">（为确保入金账号信息填写准确，请您在每次入金前核对信息）</span>
                </h3>
                <li class="info-item">
                    <p class="label">收款人姓名:</p>
                    <p class="value">KE SHANXING</p>
                </li>
                <li class="info-item">
                    <p class="label">收款人账号:</p>
                    <p class="value">7105660000</p>
                </li>
                <li class="info-item">
                    <p class="label">收款行SWIFT代码:</p>
                    <p class="value">BKNZNZ22<span class="hint">（如必须填写11位代码，则填写BKNZNZ22XXX）</span></p>
                </li>
                <li class="info-item">
                    <p class="label">收款人地址:</p><p class="value">Level 4, 142 Broadway, Newmarket, Auckland 1023, New Zealand</p>
                </li>
                <li class="info-item">
                    <p class="label">收款行地址:</p><p class="value">60 Waterloo Quay, Pipitea, Wellington 6011,  New Zealand<span class="hint">（具体以银行显示为准，若必须手动填写，可填写此内容）</span></p>
                </li>
                <li class="info-item">
                    <p class="label">收款人国家/地区:</p><p class="value">New Zealand</p>
                </li>
                <li class="info-item">
                    <p class="label">收款人所在城市:</p><p class="value">Auckland</p>
                </li>
                <li class="info-item">
                    <p class="label">收款行所在国家/地区:</p>
                    <p class="value">New Zealand</p>
                </li>
                <li class="info-item">
                    <p class="label">收款行所在城市:</p>
                    <p class="value">Wellington</p>
                </li>
                <li class="info-item">
                    <p class="label">收款开户银行全称:</p>
                    <p class="value">Bank of New Zealand</p>
                </li><li class="info-item">
                    <p class="label">清算号码（ABA号）:</p>
                    <p class="value">021000089</p>
                </li>
                <li class="info-item">
                    <p class="label">汇款附言:</p>
                    <p class="value">663039 KE SHANXING</p>
                </li>
            </div>
            <div class="info-block" id="usd-account">
                <h3 class="subtitle">
                    <span class="usd-map"></span>我的美元账号
                    <span class="tip">（为确保入金账号信息填写准确，请您在每次入金前核对信息）</span>
                </h3>
                <li class="info-item">
                    <p class="label">收款人姓名:</p>
                    <p class="value">KE SHANXING</p>
                </li>
                <li class="info-item">
                    <p class="label">收款人账号:</p>
                    <p class="value">7105660002</p></li><li class="info-item"><p class="label">收款行SWIFT代码:</p><p class="value">BKNZNZ22<span class="hint">（如必须填写11位代码，则填写BKNZNZ22XXX）</span></p></li><li class="info-item"><p class="label">收款人地址:</p><p class="value">Level 4, 142 Broadway, Newmarket, Auckland 1023, New Zealand</p></li><li class="info-item"><p class="label">收款人国家/地区:</p><p class="value">New Zealand</p></li><li class="info-item"><p class="label">收款人所在城市:</p><p class="value">Auckland</p></li><li class="info-item"><p class="label">收款行所在国家/地区:</p><p class="value">New Zealand</p></li><li class="info-item"><p class="label">收款行所在城市:</p><p class="value">Wellington</p></li><li class="info-item"><p class="label">收款开户银行全称:</p><p class="value">Bank of New Zealand</p></li><li class="info-item"><p class="label">清算号码（ABA号）:</p><p class="value">021000089</p></li><li class="info-item"><p class="label">汇款附言:</p><p class="value">663039 KE SHANXING</p></li></div><div class="common-info info-block"><h3 class="subtitle">费用承担方：</h3><p>共同SHA，费用按承担人区分有两种方式：</p><p class="indent">1. “共同SHA”方式:汇款行所有费用由汇出人承担，扣款账户均为汇出人在汇款行开立的账户</p><p class="indent">2. “收款人BEN”方式:汇款行所有费用由收款人承担，按当天汇率折算成相应外币从汇款本金中扣收</p><p class="meta-info">*请使用和证券账户同名的银行账户入金，各银行国际汇款具体收费请参考该银行实际标准</p><p class="meta-info">*通常实际到账金额，银行会扣除一定的跨境手续费</p><p class="meta-info">*该页信息仅为示例参考，通常情况下收款人地址、收款行所在地址应与收款人国家在同一地区，请根据银行要求的具体规则填写</p><p class="meta-info">*更新时间：2018年1月9日</p></div></div></div>
    </div>
</template>

<script>
export default {
  name: "depositaccount",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="scss">
.tip-warning {
  border: 1px solid #f29c9f;
  background: #fff3f3;
  color: #ed1111;
  padding: 15px;
  margin: 1em 0;
}
.info-item {
  position: relative;
  padding: 10px 0;
  overflow: hidden;
}
#deposit-container {
  .tip {
    font-size: 12px;
    color: #ed1111;
    font-weight: 400;
  }
  .hint {
    font-size: 12px;
    color: #aaa;
  }
  .info-block {
    padding: 20px 0;
  }
  .info-item {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 5px 0;
    .label {
      color: #aaa;
      width: 150px;
      text-align: right;
    }
    .value {
      margin-left: 10px;
      -webkit-flex: 1 1;
      -ms-flex: 1 1;
      flex: 1 1;
    }
  }
  .subtitle {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    .hkd-map {
      display: inline-block;
      width: 36px;
      height: 21px;
      background: no-repeat 0 0;
      background-size: contain;
      float: left;
      margin-top: 4px;
      margin-right: 8px;
      background-image: url(/static/img/hk-map.png);
    }
    .tip {
      font-size: 14px;
    }
  }
  .info-block {
    padding: 20px 0;
  }
  .common-info {
    p {
      margin: 5px 0;
    }
    .indent {
      margin-left: 2em;
      font-size: 12px;
    }
    .meta-info {
      color: #aaa;
      font-size: 12px;
    }
  }
}
</style>
