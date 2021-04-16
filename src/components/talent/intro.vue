<template>
  <div class="talentPage">
    <div class="talentContent flexColumn">
      <div class="talentTitle">
        <div style="width= 100%;">6 大维度全面评估创新团队</div>
      </div>
      <div id="pie"></div>
     <div style="display: flex; justify-content: center; width: 256px">
          <el-button size="mini" class="btn" @click="gotoNext()"
            ><span class="textOpacity">确 定</span></el-button
          >
        </div>
    </div>
    
    <div class="footer">
      <eyfooter />
    </div>
  </div>
</template>

<script>
import eyfooter from "../dma/eyfooter.vue";
import * as echarts from "echarts";
export default {
  components: { eyfooter },
  name: "TalentIntro",
  data() {
    return {
      charts: "",
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.drawPie("pie");
    });
  },
  methods: {
    gotoNext() {
      this.$router.push("/talent/assessment");
    },
    drawPie(id) {
      let bgColor = "rgba(57,97,168,.01)";

      let color = [
        {
          type: "linear",
          x: 1,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#396183", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#4E84AA", // 100% 处的颜色
            },
          ],
        },
        {
          type: "linear",
          x: 1,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#53878E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#468385", // 100% 处的颜色
            },
          ],
        },
        {
          type: "linear",
          x: 1,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#555AA8", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#311C6F", // 100% 处的颜色
            },
          ],
        },
        {
          type: "linear",
          x: 1,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#726A91", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#6C619A", // 100% 处的颜色
            },
          ],
        },
        {
          type: "linear",
          x: 1,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#747D96", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#6777A0", // 100% 处的颜色
            },
          ],
        },
        {
          type: "linear",
          x: 1,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#5E87BA", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#3168A7", // 100% 处的颜色
            },
          ],
        },
      ];
      let scaleData = [
        {
          name: "高管带领",
          value: "13",
          desc:
            "从企业决策层至部门执行层能够齐心并" +
            "\n" +
            "地为共同的创新目标努力",
          type: 1,
        },
        {
          name: "前瞻洞见",
          value: "12",
          desc:
            "善于从现有内容和数据" +
            "\n" +
            "中，发现潜在机遇并能" +
            "\n" +
            "够启发影响团队",
          type: 1,
        },
        {
          name: "协作共赢",
          value: "13",
          desc: "凝聚团队内外力量，实" + "\n" + "现高效合作，在变化中" + "\n" + "不断进步",
          type: 1,
        },
        
        {
          name: "先锋决策",
          value: "13",
          desc:
            "在充满未知和不确定性的环" +
            "\n" +
            "境和有限的信息与资源中带" +
            "\n" +
            "领团队稳健地前行",
          type: 2,
        },
        {
          name: "持续学习",
          value: "12",
          desc: "不断汲取新的知识，迅速做" + "\n" + "出改变和提升",
          type: 2,
        },
        {
          name: "多元团队",
          value: "12",
          desc: "有多领域的人才以及来自团" + "\n" + "队外和组织外的声音和资源",
          type: 2,
        },
      ];

      //       var placeHolderStyle = {
      //     normal: {
      //         label: {
      //             show: false,
      //         },
      //         labelLine: {
      //             show: false,
      //         },
      //         color: 'rgba(0, 0, 0, 0)',
      //         borderColor: 'rgba(0, 0, 0, 0)',
      //         borderWidth: 0
      //     }
      // };
      var data = [];

      for (var i = 0; i < scaleData.length; i++) {
        data.push(
          {
            value: scaleData[i].value,
            name: scaleData[i].name,
            desc: scaleData[i].desc,
            type: scaleData[i].type,
            // itemStyle: {
            //     normal: {
            //         borderWidth: 4,
            //         // shadowBlur: 30,
            //         borderColor:color[i],
            //         // shadowColor: color[i],
            //         color: color[i],
            //         // opacity:0.75,
            //     }
            // }
            itemStyle: {
              normal: {
                borderColor: bgColor,
                borderWidth: 20,
              },
            },
            labelLine: {
              normal: {
                length: 40,
                length2: 60,
                lineStyle: {
                  color: "white",
                },
              },
            },
            label: {
              normal: {
                formatter: (param) => {
                  console.log(param);
                  if (param.data.type == 2) {
                    return (
                      "{name|" +
                      param.name +
                      "}" +
                      "\n" +
                      "{right| " +
                      param.data.desc +
                      "}"
                    );
                  } else if (param.data.type == 1) {
                    return (
                      "{name|" +
                      param.name +
                      "}" +
                      "\n" +
                      "{left| " +
                      param.data.desc +
                      "}"
                    );
                  }
                },
                // padding: [0 , -100, 25, -100],
                rich: {
                  name: {
                    fontSize: 22,
                   lineHeight: 35,
                    fontWeight: "bold",
                    color: "yellow",
                    textAlign: "left",
                  },
                  right: {
                    fontSize: 14,
                    align: "right",
        lineHeight: 16,

                    color: "white",
                  },
                  left: {
                    fontSize: 14,
                    align: "left",
                    lineHeight: 16,
                    color: "white",
                  },
                },
              },
            },
          },
          {
            value: 1.5,
            name: "",
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                color: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(0, 0, 0, 0)",
                borderWidth: 0,
              },
            },
          }
        );
      }
      this.charts = echarts.init(document.getElementById(id));

      this.charts.setOption({
        // backgroundColor: bgColor,
        color: color,

        series: [
          {
            animationDuration: "5000",
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return idx * 50;
            },
            type: "pie",
            roseType: "radius",
            radius: ["45%", "60%"],

            data: data,
            hoverAnimation: true,
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
.talentTitle {
  height: 12%;
  justify-content: flex-end;
  width: 100%;
}

.left1 {
  position: absolute;
  height: 100px;
  width: 200px;
  background: grey;
}
#pie {
  height: 80%;
  width: 90%;
  /* margin: 10px; */
}
.talentContent {
  width: 100%;
}


@keyframes display {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.btn {
  font-weight: 600;
  height: 35px;
}
.textOpacity {
  opacity: 0;
  -webkit-animation: textOpacity 3s infinite;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}
@keyframes textOpacity {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>

<style scoped>
/deep/ .btn {
  background: rgba(74, 128, 218, 0.3) !important;
  border: none !important;
  height: 35px;
  width: 100%;
  color: white;
}

.textOpacity {
  color: white;
  font-size: 16px;
  font-weight: 600;
}
</style>
