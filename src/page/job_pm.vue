<template>
    <div class="job_pm">
        <div class="job-container">
            <div class="section pm">
            <div class="main">
            <div class="job-top">
            <h2 class="sub-title">产品</h2>
            <div class="job-dropdown">
            <a href="javascript:;" class="tit">检索适合你的职位</a>
            <ul class="list" style="display: none; height: 52px; padding-top: 5px; margin-top: 0px; padding-bottom: 5px; margin-bottom: 0px;">
            <li class="item"><a href="javascript:;" data-link="pm" class="item-link">产品经理/产品总监</a></li>
            <li class="item"><a href="javascript:;" data-link="project" class="item-link">项目经理</a></li>
            </ul>
            </div>
            </div>
            <img src="/static/img/job_pm.jpg" alt="" class="tab-img">
            <div class="content">
            <div id="pm" class="card">
            <h3 class="card-title">产品经理/产品总监</h3>
            <h4 class="card-stitle">您所做的事情是</h4>
            <ol class="sec">
            <li>将概念性的想法转化成对用户富有价值的产品，全面负责产品的整个生命周期；</li>
            <li>从概念到发布的完整用户体验，为产品设计简单优雅的流程和体验；</li>
            <li>带领不同团队，建造出你心目中的完美产品；</li>
            <li>参与公司产品战略制定参与设计评审；</li>
            <li>和其它设计师一起不断提高我们的设计质量；</li>
            </ol>
            <h4 class="card-stitle">我们需要这样的您 </h4>
            <ol class="sec">
            <li>对复杂事物和系统的洞察力；</li>
            <li>对视觉和交互细节的高度注意力；</li>
            <li>对互联网产品策略和愿景的深度思考；</li>
            <li>有交互设计项目经验，尤其是面向大众用户的大型产品设计经验；</li>
            <li>对用户体验各专业领域的知识和经验积累优秀的书面或口头表达能力 (你需要带领团队做出你理想的产品)；</li>
            <li>够用的原型制作能力适应快速变化的工作环境；</li>
            <li>有能力建造自己设计的东西尤佳；</li>
            <li>对于金融证券行业比较有热情，是股票的玩家；</li>
            </ol>
            </div>
            <div id="project" class="card">
            <h3 class="card-title">项目经理（Project Manager）</h3>
            <h4 class="card-stitle">您所做的事情是</h4>
            <ol class="sec">
            <li>与产品经理协作，参与设计券商后台业务系统，构建高效率的业务处理流程；</li>
            <li>根据不同的业务需求和风控要求，配合协助风控工程师来设计和应用相应的风控规则，规避潜在的各种金融风险；</li>
            <li>在业务系统中处理上市公司各种不同的公司行动所带来的后续操作；</li>
            <li>为公司内的其他部门或者客户提供关于交易，订单，结算，税费，报表等业务全面的支持服务；</li>
            <li>收集整理券商业务系统中出现的问题，并且发现原因和跟踪解决；</li>
            </ol>
            <h4 class="card-stitle">我们需要这样的您 </h4>
            <ol class="sec">
            <li>3年以上金融证券行业相关业务的工作经验；</li>
            <li>熟悉券商内部运作机制、业务系统以及风控模型；</li>
            <li>良好的计算机知识以及够用的原型制作能力；</li>
            <li>对复杂事物和系统出色的洞察力；</li>
            <li>优秀的沟通、交流和组织能力，较强的团队合作精神；</li>
            </ol>
            </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'job_pm',
  data () {
    return {
        
    }
  },
  created(){
    //   请求数据
    // axios.post('/user', {firstName: 'Fred',lastName: 'Flintstone'}).then(function (response) {
    //         console.log(response);
    //     }).catch(function (error) {
    //         console.log(error);
    //     }
    // );
  }
}
</script>
<style scoped lang="scss">
    .main{
      width: 960px;
      margin: 0 auto;
    }
    a{
      text-decoration: none;
    }
    

</style>
