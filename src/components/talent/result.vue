<template>
<div class='talentPage'>
  <div class="talentContent">
    <div class="left">
      <div class="title">
        <span>创新团队能力评估</span>
      </div>
      <div id="radar"></div>
    </div>
    <div class="right">
      <div class="content flexColumn">
        <div class="" style="width: 90%">
          <div class="marks" v-show="showResult.a">
            <span class="f36 yellow">{{ avg }}分 /</span
            ><span class="f24 yellow">5分</span>
            <div>
              数字化成熟度处于<span class="yellow">起步阶段</span
              ><br />下一步数字化发展可对标的企业有:<br />......
            </div>
          </div>
          <div class="marks" v-show="showResult.b">
            <span class="f36 yellow">{{ avg }} /</span
            ><span class="f24 yellow">5分</span>
            <div>
              数字化成熟度处于<span class="yellow">发展阶段</span
              ><br />下一步数字化发展可对标的企业有:<br />......
            </div>
          </div>
          <div class="marks" v-show="showResult.c">
            <span class="f36 yellow">{{ avg }} /</span
            ><span class="f24 yellow">5分</span>
            <div>
              数字化成熟度达到<span class="yellow">行业平均水平</span
              ><br />下一步数字化发展可对标的企业有:<br />......
            </div>
          </div>
          <div class="marks" v-show="showResult.d">
            <span class="f36 yellow">{{ avg }} /</span
            ><span class="f24 yellow">5分</span>
            <div>
              数字化成熟度接近<span class="yellow">行业领先水平</span
              ><br />下一步数字化发展可对标的企业有:<br />......
            </div>
          </div>
          <div class="marks" v-show="showResult.e">
            <span class="f36 yellow">{{ avg }} /</span
            ><span class="f24 yellow">5分</span>
            <div>
              数字化成熟度达到<span class="yellow">行业领先水平</span
              ><br />下一步数字化发展可对标的企业有:<br />......
            </div>
          </div>
          <div id='contacts' class="contacts">
            <div class="desc" style="">填写联系信息，获取完整版数据解读</div>
            <div class="form" style="margin-top: 10%">
              <span class="inline-block wid30">姓名</span
              ><span class="ml10">组织/企业名称</span>
              <div style="display: flex">
                <input class="wid30" v-model="name" />
                <input class="ml10" v-model="company" />
              </div>
              <div class="mt2">联系方式 (手机/微信）</div>
              <input class=" " v-model="contact" />
              <div class="mt2">联系邮箱</div>
              <input class=" " v-model="email" />
              <div>
                <el-button class="btn" @click="submit()">
                  <span class='btnText'>提 交</span>
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
      showContact:true,
      showResult: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
      },
    };
  },
  mounted() {
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
      //send api
      let assessment = {
        q1: JSON.parse(localStorage.getItem("q1")),
        q2: JSON.parse(localStorage.getItem("q2")),
        q3: JSON.parse(localStorage.getItem("q3")),
        q4: JSON.parse(localStorage.getItem("q4")),
        q5: JSON.parse(localStorage.getItem("q5")),
      };
      let result = {
        eventID: 1,
        name: this.name,
        company: this.company,
        email: this.email,
        contact: this.contact,
        assessment: JSON.stringify(assessment),
      };

      await this.$api.submit(result);
      this.name = "";
      this.company = "";
      this.email = "";
      this.contact = "";
      localStorage.clear();
      this.$router.push("/talent/end");
    },
    drawPie(id) {
      let avg1 = 1;
      let avg2 = 1;
      let avg3 = 1;
      let avg4 = 1;
      let avg5 = 1;
      let avg6 = 1;
let result = localStorage.getItem('talent').split(',') //talent result
console.log(result)
      if (window.location.href.indexOf("?") != -1) {
        document.getElementById('contacts').style.opacity = 0;
        avg1 = parseFloat(this.getQueryString("q1")||1);
        avg2 = parseFloat(this.getQueryString("q2")||1);
        avg3 = parseFloat(this.getQueryString("q3")||1);
        avg4 = parseFloat(this.getQueryString("q4")||1);
        avg5 = parseFloat(this.getQueryString("q5")||1);
        avg6 = parseFloat(this.getQueryString("q5")||1);
      } else {
        avg1 = (result[0]*1+result[1]*1+result[2]*1) / 3
        avg2 = (result[3]*1+result[4]*1+result[5]*1) / 3
        avg3 = (result[6]*1+result[7]*1+result[8]*1) / 3
        avg4 = (result[9]*1+result[10]*1+result[11]*1) / 3
        avg5 = (result[12]*1+result[13]*1+result[14]*1) / 3
        avg6 = (result[15]*1+result[16]*1+result[17]*1) / 3
      }

      this.avg = ((avg1 + avg2 + avg3 + avg4 + avg5 + avg6) / 6).toFixed(1);
      console.log(result[1]+result[2])
      console.log(1)
      console.log(avg6)
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
      this.charts = echarts.init(document.getElementById(id));

      this.charts.setOption({
        backgroundColor:'transparent',
        color: 'white',
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
          splitNumber: 6,
          // shape: "circle",
          splitArea: {
            areaStyle: {
             color:['rgba(76,111,171, 0.8)', 'rgba(61,99,163,.3)'].reverse(),
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
              name: "战略与创新增长",
              max: 5,
            },
            {
              name: "数字化客户体验",
              max: 5,
            },
            {
              name: "智能运营与决策",
              max: 5,
            },
            {
              name: "信息技术与数据安全",
              max: 5,
            },
            {
              name: "组织架构与人才",
              max: 5,
            },
            {
              name: "xx",
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
                value: [avg1, avg2, avg3, avg4, avg5, avg6],
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
.content{
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
  margin: 12% 0 0 0;
}
.contacts {
  height: 40%;
}
.marks {
  height: 25%;
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
}

.mt2 {
  margin-top: 2%;
}
.wid30 {
  width: 40%;
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
.talentContent{
  height: 100%;
  width: 100%;
}
/deep/ .btn{
      background: rgba(74, 128, 218, 0.7) !important;
    border: none !important;
    margin-top: 40px;
    height: 35px;
    width: 100%;
    color: white;

}

.btnText{
  color: white;
  font-size: 18px;
  font-weight: 600;
}

.title{
      padding: 30px 30px 10px 30px;
}
</style>
