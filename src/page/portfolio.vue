<template>
    <div class="portfolio">
         <div class="personal-main">
            <section class="section">
                <h3 class="title">供股</h3>
                <div id="portfolio-container"><div class="animated-router-container react-animated-router portfolio-root"><div><h3 class="tip-warning">当前没有供股权持仓，无法参与供股</h3></div></div></div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: "portfolio",
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
    .tip-warning {
        border: 1px solid #f29c9f;
        background: #fff3f3;
        color: #ed1111;
        padding: 15px;
        margin: 1em 0;
        font-size: 14px;
    }
</style>
