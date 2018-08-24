<template>
  <div class="detail">
            <div class="personal-main">
                <section class="section" id="prize-list-container">
                    <h3 class="detail-title">
                        奖励中心 <span class="iconfont icon-gifs"></span>
                    </h3>
                    <p>您还未获得奖励!</p>
                    <p></p>
                </section>
            </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
        a:this.$router.path,
    }
  }
}
</script>
<style scoped lang="scss">
    
        .personal-main {
            margin-left: 200px;
            padding: 50px 20px;
            padding-right: 20px;
            .section{
                margin-bottom: 30px;
                h3{
                    text-align: center;
                    font-size: 14px;
                    font-weight: 700;
                    margin: 0;
                    margin-bottom: 16px;
                }
            }
        }
</style>
