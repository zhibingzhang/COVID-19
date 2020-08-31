<template>
  <div class="dashboard-editor-container">
    <el-row class="daily" :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <h2>{{ newData.xinwen.title }}</h2>
          <ul>
            <li v-for="item in newData.xinwen.dataList" :key="item.title">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <h2>{{ newData.gongzuo.title }}</h2>
          <ul>
            <li v-for="item in newData.gongzuo.dataList" :key="item.title">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row class="daily" :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <h2>{{ newData.meiti.title }}</h2>
          <ul>
            <li v-for="item in newData.meiti.dataList" :key="item.title">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <h2>{{ newData.yiqing.title }}</h2>
          <ul>
            <li v-for="item in newData.yiqing.dataList" :key="item.title">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "PagePermission",
  components: {},
  data() {
    return {
      newData: {
        xinwen: {
          title: "新闻动态：",
          dataList: [
            {
              title: "截至8月28日24时新型冠状病毒肺炎疫情最新情况",
              url:
                "http://www.nhc.gov.cn/yjb/s7860/202008/ac1c7ff6089147549c87ba9497caa2dd.shtml"
            },
            {
              title: "截至8月27日24时新型冠状病毒肺炎疫情最新情况",
              url:
                "http://www.nhc.gov.cn/yjb/s7860/202008/df53830dfd144de59f538dc14575e554.shtml"
            },
            {
              title: "截至8月26日24时新型冠状病毒肺炎疫情最新情况",
              url:
                "http://www.nhc.gov.cn/yjb/s7860/202008/99403e08d5354bb89012a7f541c8e0ab.shtml"
            },
            {
              title: "截至8月25日24时新型冠状病毒肺炎疫情最新情况",
              url:
                "http://www.nhc.gov.cn/yjb/s7860/202008/cd68784852cc4365bf741058bdff009b.shtml"
            },
            {
              title:
                "国家卫生健康委召开巡视工作会议暨委党组2020年巡视动员部署会",
              url:
                "http://www.nhc.gov.cn/jgdw/s7967/202008/0b48a44d9e4a4e728ee1b97946a6f6c3.shtml"
            },
            {
              title: "截至8月24日24时新型冠状病毒肺炎疫情最新情况",
              url:
                "http://www.nhc.gov.cn/yjb/s7860/202008/34a1d6028a3449d0b2c2679c5d8e3b1b.shtml"
            },
            {
              title: "截至8月23日24时新型冠状病毒肺炎疫情最新情况",
              url:
                "http://www.nhc.gov.cn/yjb/s7860/202008/ac1fb9f4a3a94e91ae86aaec7a6b44d6.shtml"
            }
          ]
        },
        gongzuo: {
          title: "工作动态：",
          dataList: [
            {
              title:
                "国家卫生健康委疾控局关于开展2020年“全国爱牙日”宣传活动的通知",
              url:
                "http://www.nhc.gov.cn/jkj/s7914/202008/3b1a38ce83f845d69307f3ddf31cea84.shtml"
            },
            {
              title: "截至8月24日24时新型冠状病毒肺炎疫情最新情况",
              url:
                "http://www.nhc.gov.cn/yjb/s7860/202008/34a1d6028a3449d0b2c2679c5d8e3b1b.shtml"
            },
            {
              title: "截至8月23日24时新型冠状病毒肺炎疫情最新情况",
              url:
                "http://www.nhc.gov.cn/yjb/s7860/202008/ac1fb9f4a3a94e91ae86aaec7a6b44d6.shtml"
            },
            {
              title: "截至8月22日24时新型冠状病毒肺炎疫情最新情况",
              url:
                "http://www.nhc.gov.cn/yjb/s7860/202008/ae2bca58dd6548f38ec9d71ac802ed99.shtml"
            },
            {
              title:
                "妇幼司公布全国首届出生缺陷防治科普作品征集大赛入围作品网络展示和投票平台",
              url:
                "http://www.nhc.gov.cn/fys/s3590/202008/aae5b2f9ca2a44b399c7641f1a0527fd.shtml"
            },
            {
              title: "截至8月21日24时新型冠状病毒肺炎疫情最新情况",
              url:
                "http://www.nhc.gov.cn/yjb/s7860/202008/d3ac3a68c25249adb5df9f0cb58820f3.shtml"
            },
            {
              title: "老龄健康司发布老年健康教育系列科普视频",
              url:
                "http://www.nhc.gov.cn/lljks/s7786/202008/c726381f9cba482fa99944188c0649de.shtml"
            }
          ]
        },
        meiti: {
          title: "媒体报道：",
          dataList: [
            {
              title:
                "[新华网] 孙春兰在新疆调研时强调 以科学精准措施遏制疫情扩散 维护各族群众生命安全和身体健康",
              url:
                "http://www.nhc.gov.cn/wjw/xwdt/202007/3bad7c450d344e17b09155d315723059.shtml"
            },
            {
              title:
                "[新华网] （受权发布）中华人民共和国基本医疗卫生与健康促进法",
              url:
                "http://www.nhc.gov.cn/fzs/fzxqjxfv/202007/1e269b788b994b838a71d24caeff8238.shtml"
            },
            {
              title:
                "[学习时报] 国家卫生健康委党组书记、主任马晓伟：完善重大疫情防控体制机制 为维护人民健康提供有力保障",
              url:
                "http://www.nhc.gov.cn/xcs/s3574/202007/77faea41347340fe957189733a3031a0.shtml"
            },
            {
              title: "[新华网] 习近平同阿根廷总统费尔南德斯互致信函",
              url:
                "http://www.nhc.gov.cn/wjw/xwdt/202007/d97d71764cf04875820b4a66f0b704f0.shtml"
            },
            {
              title:
                "[新华网] 习近平主持召开中央全面深化改革委员会第十四次会议",
              url:
                "http://www.nhc.gov.cn/wjw/xwdt/202007/93f6e275544f45ad8bdc64189aebe30d.shtml"
            },
            {
              title:
                "[新华网] 习近平在中非团结抗疫特别峰会上的主旨讲话（全文）",
              url:
                "http://www.nhc.gov.cn/wjw/xwdt/202006/071359da91ae49b0858386ea640acbf5.shtml"
            }
          ]
        },
        yiqing: {
          title: "疫情播报：",
          dataList: [
            {
              title: "2020年6月全国法定传染病疫情概况",
              url:
                "http://www.nhc.gov.cn/jkj/s3578/202007/a6eaa8917f0447cc9fd91c0ebddf821c.shtml"
            },
            {
              title: "2020年5月全国法定传染病疫情概况",
              url:
                "http://www.nhc.gov.cn/jkj/s5899tg/202006/554a0f964edc46318635eedeca8edd13.shtml"
            },
            {
              title: "2020年4月全国法定传染病疫情概况",
              url:
                "http://www.nhc.gov.cn/jkj/s5899tg/202006/562eede38f744c10a738ab2b37d806d0.shtml"
            },
            {
              title: "2020年3月全国法定传染病疫情概况",
              url:
                "http://www.nhc.gov.cn/jkj/s3578/202004/78d3c1e01c0644ee978415a13a0e002a.shtml"
            },
            {
              title: "2019年全国法定传染病疫情概况",
              url:
                "http://www.nhc.gov.cn/jkj/s3578/202004/b1519e1bc1a944fc8ec176db600f68d1.shtml"
            },
            {
              title: "2020年2月全国法定传染病疫情概况",
              url:
                "http://www.nhc.gov.cn/jkj/s3578/202003/5925e2c60c254d88bc534e7d7b680a19.shtml"
            },
            {
              title: "2020年1月全国法定传染病疫情概况",
              url:
                "http://www.nhc.gov.cn/jkj/s3578/202002/f1dd61c00acf4e5caf2f755cc48b9063.shtml"
            }
          ]
        }
      }
    };
  }
};
</script>

<style lang="scss">
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
  min-height: 96vh;
  h2 {
    color: #4d5054;
  }
  ul {
    li {
      margin-bottom: 10px;
      &:hover {
        a {
          color: #10aeb5;
        }
      }
    }
    a {
      color: #4d5054;
      transition: all 0.2s;
    }
  }
  .daily {
    .chart-wrapper {
      padding-bottom: 16px;
    }
  }
  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
