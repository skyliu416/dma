<template>
  <div class="talentPage">
    <div class="talentContent">
      <div class="left">
        <div class="title">
          <span>创新团队能力评估</span>
        </div>
        <div id="radar"></div>
      </div>
      <div class="right">
        <div class="content flexColumn">
          <div class="" style="width: 100%">
            <div class="marks" v-show="showResult.a">
              <span class="f36 yellow">{{ avg }}分 /</span
              ><span class="f24 yellow">5分</span><br/>
              <div>
                数字化成熟度处于<span class="yellow">起步阶段</span
                ><br />建议立即着手搭建创新团队和组织机制，为企业发展提供创新响应能力和人才保障。建议能力训练课程有…
              </div>
            </div>
            <div class="marks" v-show="showResult.b">
              <span class="f36 yellow">{{ avg }} /</span
              ><span class="f24 yellow">5分</span>
              <div>
                数字化成熟度处于<span class="yellow">发展阶段</span
                ><br />下一步建议系统性搭建创新团队和组织机制，领导牵头，制度保障，技术护航，深度聆听团队声音，从核心团队开始进行创新组织转型。建议能力训练课程有…
              </div>
            </div>
            <div class="marks" v-show="showResult.c">
              <span class="f36 yellow">{{ avg }} /</span
              ><span class="f24 yellow">5分</span>
              <div>
                数字化成熟度达到<span class="yellow">行业平均水平</span
                ><br />下一步建议全面审视梳理现状，高效进行创新团队建设，在转型中占领主动地位。建议能力训练课程有…
              </div>
            </div>
            <div class="marks" v-show="showResult.d">
              <span class="f36 yellow">{{ avg }} /</span
              ><span class="f24 yellow">5分</span>
              <div>
                数字化成熟度接近<span class="yellow">行业领先水平</span
                ><br />下一步可以考虑储备人才、优化架构机制，与领先水平进行差距和创新组织战略分析，在创新能力上达到卓越。建议能力训练课程有…
              </div>
            </div>
            <div class="marks" v-show="showResult.e">
              <span class="f36 yellow">{{ avg }} /</span
              ><span class="f24 yellow">5分</span>
              <div>
                数字化成熟度达到<span class="yellow">行业领先水平</span
                ><br />建议维持先进的创新团队能力的同时，对内考虑通过创新团队规模化激活企业全局创新转型，对外考虑与行业的深度交融和开放创新。建议能力训练课程有…
              </div>
            </div>
            <div id="contacts" class="contacts">
              <div class="desc" style="">填写联系信息
                <br/>获取完整版数据解读</div>
              <div class="form" style="margin-top: 10%">
                <!-- <span class="inline-block wid30">姓名</span
                ><span class="ml10">组织/企业名称</span>
                <div style="display: flex">
                  <input class="wid30" v-model="name" />
                  <input class="ml10" v-model="company" />
                </div> -->
                <div style='display:flex' class=''>
              <div class='wid30'>
                <div class="inline-block">姓名</div>
                 <input class="" v-model="name" />
              </div>
              <div class='ml10'>
                <div class="inline-block">组织/企业名称</div>
                 <input class="" v-model="company" />
              </div>
              </div>
                <div class="mt2">联系方式 (手机/微信）</div>
                <input class=" " v-model="contact" />
                <div class="mt2">联系邮箱</div>
                <input class=" " v-model="email" />
                <div>
                  <el-button class="btn" @click="submit()">
                    <span class="btnText">提 交</span>
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <img class="footerlogo" src="@/assets/wavespace.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  data() {
    return {
      avg: 0,
      charts: "",
      name: "",
      company: "",
      email: "",
      contact: "",
      showContact: true,
      assessment:'',
      showResult: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
      },
      avg1: 1,
      avg2: 1,
      avg3: 1,
      avg4: 1,
      avg5: 1,
      avg6: 1,
    };
  },
  mounted() {
    // let result = localStorage.getItem("talent").split(","); //talent result

    if (window.location.href.indexOf("?") != -1) {
      document.getElementById("contacts").style.opacity = 0;
      this.avg1 = parseFloat(this.getQueryString("q1") || 1);
      this.avg2 = parseFloat(this.getQueryString("q2") || 1);
      this.avg3 = parseFloat(this.getQueryString("q3") || 1);
      this.avg4 = parseFloat(this.getQueryString("q4") || 1);
      this.avg5 = parseFloat(this.getQueryString("q5") || 1);
      this.avg6 = parseFloat(this.getQueryString("q6") || 1);
    } else {
      let result = localStorage.getItem("talent").split(","); //talent result
      this.avg1 = (result[0] * 1 + result[1] * 1 + result[2] * 1) / 3;
      this.avg2 = (result[3] * 1 + result[4] * 1 + result[5] * 1) / 3;
      this.avg3 = (result[6] * 1 + result[7] * 1 + result[8] * 1) / 3;
      this.avg4 = (result[9] * 1 + result[10] * 1 + result[11] * 1) / 3;
      this.avg5 = (result[12] * 1 + result[13] * 1 + result[14] * 1) / 3;
      this.avg6 = (result[15] * 1 + result[16] * 1 + result[17] * 1) / 3;
    }

    this.avg = (
      (this.avg1 + this.avg2 + this.avg3 + this.avg4 + this.avg5 + this.avg6) /
      6
    ).toFixed(1);

   

    if (1 <= this.avg <= 1.4) {
      this.showResult.a = true;
    } else if (1.5 <= this.avg <= 2.4) {
      this.showResult.b = true;
    } else if (2.5 <= this.avg <= 3.4) {
      this.showResult.c = true;
    } else if (3.5 <= this.avg <= 4.5) {
      this.showResult.d = true;
    } else if (4.5 <= this.avg <= 5) {
      this.showResult.e = true;
    }
    this.$nextTick(function () {
      this.drawPie("radar");
    });
  },

  methods: {
    getQueryString(param) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == param) {
          return pair[1];
        }
      }
      return false;
    },

    async submit() {
      let result = localStorage.getItem("talent").split(","); //talent result
      //send api
      this.assessment = {
        q1: {
          points: [result[0] * 1, result[1] * 1, result[2] * 1],
          avg: this.avg1,
        },
        q2: {
          points: [result[3] * 1, result[4] * 1, result[5] * 1],
          avg: this.avg2,
        },
        q3: {
          points: [result[6] * 1, result[7] * 1, result[8] * 1],
          avg: this.avg3,
        },
        q4: {
          points: [result[9] * 1, result[10] * 1, result[11] * 1],
          avg: this.avg4,
        },
        q5: {
          points: [result[12] * 1, result[13] * 1, result[14] * 1],
          avg: this.avg5,
        },
        q6: {
          points: [result[15] * 1, result[16] * 1, result[17] * 1],
          avg: this.avg6,
        },
      };

      let resultParam = {
        eventID: 2,
        name: this.name,
        company: this.company,
        email: this.email,
        contact: this.contact,
        assessment: JSON.stringify(this.assessment),
      };

      await this.$api.submit(resultParam);
      this.name = "";
      this.company = "";
      this.email = "";
      this.contact = "";
      localStorage.clear();
      this.$router.push("/talent/end");
    },
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));

      this.charts.setOption({
        backgroundColor: "transparent",
        color: "white",
        tooltip: {
          show: false,
          trigger: "item",
          extraCssText:
            "background: red; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: red;",
        },
        radar: {
          center: ["50%", "50%"],
          radius: "70%",
          startAngle: 90,
          splitNumber: 5,
          // shape: "circle",
          splitArea: {
            areaStyle: {
              color: ["rgba(61,99,163,.3)","rgba(76,111,171, 0.8)"].reverse(),
              //  shadowBlur: 30,
              //     shadowOffsetY: 20
            },
          },
          axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal",
          },
          axisLine: {
            show: false,
            splitLine: {
              color: "",
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              // type: "dashed",
              color: "grey",
              width: 1,
            },
          },
          name: {
            formatter: "{value}",
            textStyle: {
              color: "white",
            },
            fontSize: 16,
            fontFamily: "PingFang SC",
          },
          indicator: [
            {
              name: "多元团队",
              max: 5,
            },
            {
              name: "高管带领",
              max: 5,
            },
            {
              name: "前瞻洞见",
              max: 5,
            },
            {
              name: "协作共赢",
              max: 5,
            },
            {
              name: "持续学习",
              max: 5,
            },
            {
              name: "先锋决策",
              max: 5,
            },
          ],
        },

        series: [
          {
            name: "",
            type: "radar",
            // symbol: "circle",
            symbolSize: 5,
            areaStyle: {
              normal: {
                color: "rgba(255,245,153,0.6)",
                // color: new echarts.graphic.LinearGradient(
                //   0,
                //   0,
                //   0,
                //   1,
                //   [
                //     {
                //       offset: 2,
                //       color: "#ffe600",
                //     },
                //     {
                //       offset: 0.5,
                //       color: "rgba(0,0,0,0.8)",
                //     },
                //     {
                //       offset: 1,
                //       color: "#ffe600",
                //     },
                //     // {
                //     //   offset: 0,
                //     //   color: "grey",
                //     // },
                //     // {
                //     //   offset: 1,
                //     //   color: "#ffe600",
                //     // },
                //   ],
                //   false
                // ),
              },
            },
            itemStyle: {
              fontSize: "18px",
              color: "#ffe600",
              borderColor: "#ffe600",
              borderWidth: 0,
            },
            lineStyle: {
              normal: {
                color: "white",
                width: 0,
              },
            },
            data: [
              {
                value: [
                  this.avg1,
                  this.avg2,
                  this.avg3,
                  this.avg4,
                  this.avg5,
                  this.avg6,
                ],
                label: {
                  fontSize: "12",
                  show: true,
                  formatter: function (params) {
                    return params.value.toFixed(1);
                  },
                  color: "white",
                },
                //  lineStyle: {
                //         type: 'dashed'
                //     }
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.content {
  background: none;
  display: flex;
  height: 95%;
  width: 90%;
  align-items: center;
  justify-content: center;
}

.result {
  background: url(../../../src/assets/opacity.png);
  background-repeat: no-repeat;
  background-size: 90% auto;
  background-position: center center;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  height: 100%;
  width: 70%;
  margin-left: 5%;
}
.right {
  height: 100%;
  width: 30%;
  background-color: rgba(255, 255, 255, 0.13);
  /* background-color:rgba(75, 111, 171, 0.13); */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
#radar {
  height: 80%;
  width: 80%;
  margin: 10px;
}

.marks,
.contacts {
  color: white;
  margin: 10% 0 0 0;
}
.contacts {
  height: 40%;
}
.marks {
  height: 30%;
  opacity: 0;
  -webkit-animation: opacity 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}
.desc {
  opacity: 0;
  -webkit-animation: opacity 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

.form {
  opacity: 0;
  -webkit-animation: opacity 1s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
}
.btn {
  opacity: 0;
  -webkit-animation: opacity 1s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
}
.f36 {
  font-size: 32px;
  font-weight: bold;
}

.f24 {
  font-size: 24px;
}

.yellow {
  color: #ffe600;
}

.ml10 {
  margin-left: 10px;
    width: -webkit-fill-available;
}

.mt2 {
  margin-top: 2%;
}

.wid30 {
  width: 34%;
  display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.inline-block {
  display: inline-block;
}

input {
  margin-top: 1%;
  width: -webkit-fill-available;
}

.footer {
  width: 90%;
  bottom: 0;
  margin-right: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 5%;
}
.footerlogo {
  display: flex;
  width: 30%;
}
.talentContent {
  height: 100%;
  width: 100%;
}
/deep/ .btn {
  background: rgba(74, 128, 218, 0.3) !important;
  border: none !important;
  margin-top: 40px;
  height: 35px;
  width: 100%;
  color: white;
}

.btnText {
  color: white;
  font-size: 18px;
  font-weight: 600;
}

.title {
  padding: 30px 30px 10px 30px;
}
</style>
