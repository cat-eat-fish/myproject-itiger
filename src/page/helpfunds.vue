<template>
  <div class="helpfunds">
        <div class="page-help-content">
            <div class="help-entry-content">
            <h2 class="help-section-title">入金必读</h2>
            <div class="entry-content">
            <p>1. 老虎证券推荐使用网银进行转账汇款；</p>
            <p>2. 老虎证券使用第三方清算渠道盈透证券，所有客户资产被妥善保存于清算机构的账户内，如美国花旗银行、渣打银行、美国富国银行等；</p>
            <p>3. 根据美国反洗钱法（AML）规定，客户存入或转出资金时，资产只能在同名账户中流转，所以请使用在老虎证券开户时填写姓名的同名银行卡进行转账汇款操作；</p>
            <p>4. 存入资金高于$2000且符合相关法规时，即可立即开通融资融券权限。</p>
            </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "helpfunds",
  components: {

  },
  data() {
    return {};
  },
  mounted(){

  }
};
</script>

<style scoped lang="scss">
    .page-help-content {
    padding: 80px 10px 20px 126px;
}
.help-section-title {
    padding-left: 30px;
    position: relative;
    font-size: 20px;
    font-weight: 700;
    margin: 0;
}
</style>
