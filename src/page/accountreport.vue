<template>
    <div class="accountreport">
        <div class="personal-main">
            <section class="section">
            <h3 class="title">账单报告</h3>
            <div id="activity-container"><div class="activity-date-form form-area"><div class="datepicker-group"><label>开始时间：</label><div class="form-group date-picker"><div><div class="react-datepicker-wrapper"><div class="react-datepicker__input-container"><input type="text" value="2018-07-25" class="form-control" readonly=""></div></div></div></div></div><div class="datepicker-group"><label>结束时间：</label><div class="form-group date-picker"><div><div class="react-datepicker-wrapper"><div class="react-datepicker__input-container"><input type="text" value="2018-07-31" class="form-control" readonly=""></div></div></div></div></div><button class="btn btn-block btn-primary" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">查询</button></div></div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: "accountreport",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
    .personal-main {
        margin-left: 200px;
        padding: 50px 20px;
        padding-right: 20px;
    }
    .section {
        margin-bottom: 30px;
        .title {
            color: #a3a3a3;
            font-size: 14px;
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 6px;
        }
    }
    .activity-date-form {
        margin-top: 30px;
    }
    .form-group {
        margin-bottom: 20px;
        position: relative;
    }
    .datepicker-group {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 20px;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        label {
            width: 100px;
            font-weight: 700;
        }
        .form-group {
            margin-bottom: 0;
            -webkit-flex: 1 1;
            -ms-flex: 1 1;
            flex: 1 1;
        }
    }
    .datepicker-wrapper {
        display: inline-block;
    }
    .react-datepicker__input-container .form-control[readonly] {
        background-color: #fff;
    }
</style>
