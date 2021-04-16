<template>
  <div class="talentPage">
    <div class="talentContent flexColumn">
      <div class="barslide">
        <div :class="activeTab == 0 ? 'bar' : 'xbar'">多元团队</div>
        <div :class="activeTab == 1 ? 'bar' : 'xbar'">先锋决策</div>
        <div :class="activeTab == 2 ? 'bar' : 'xbar'">持续学习</div>
        <div :class="activeTab == 3 ? 'bar' : 'xbar'">高管带领</div>
        <div :class="activeTab == 4 ? 'bar' : 'xbar'">前瞻洞见</div>
        <div :class="activeTab == 5 ? 'bar' : 'xbar'">协作共赢</div>
      </div>
      <div class="questions">
        <el-carousel
          :autoplay="false"
          indicator-position="none"
          arrow="always"
          height="300px"
          @change="mychange"
          v-model="activeIndex"
          :loop="false"
        >
          <el-carousel-item v-for="(item, index) in questions" :key="index">
            <div class="question">
              <div class="qblock flexColumn">
                <div class="qnumber">{{ index + 1 }}/18</div>
                <div class="qtitle">
                  {{ item.name }}
                </div>
              </div>

              <div class="qoption">
                <div class="optionBlock">
                  <div class="f12">不符合</div>
                  <i class="sky iconcircle3" @click="answer($event, index, 0)">
                    <span class="f12">1</span>
                  </i>
                </div>

                <div class="optionline"></div>
                <div class="optionBlock">
                  <div class="f12 opa0">不符合</div>
                  <i class="sky iconcircle3" @click="answer($event, index, 1)">
                    <span class="f12">2</span>
                  </i>
                </div>
                <div class="optionline"></div>
                <div class="optionBlock">
                  <div class="f12">基本符合</div>
                  <i class="sky iconcircle3" @click="answer($event, index, 2)">
                    <span class="f12">3</span>
                  </i>
                </div>
                <div class="optionline"></div>
                <div class="optionBlock">
                  <div class="f12 opa0">基本符合</div>
                  <i class="sky iconcircle3" @click="answer($event, index, 3)">
                    <span class="f12">4</span>
                  </i>
                </div>
                <div class="optionline"></div>
                <div class="optionBlock">
                  <div class="f12">完全符合</div>
                  <i class="sky iconcircle3" @click="answer($event, index, 4)">
                    <span class="f12">5</span>
                  </i>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="submit" ref='talentSubmit'>
        <el-button class="btn" @click="gotoNext()">
          <span class="btnText">提 交</span>
        </el-button>
      </div>
    </div>
    <div class="footer">
      <eyfooter />
    </div>
  </div>
</template>

<script>
import eyfooter from "../dma/eyfooter.vue";

export default {
  components: { eyfooter },
  name: "TalentAssessment",
  data() {
    return {
      activeIndex: 0,
      activeTab: 0,
      showBtn: false,
      value: [],
      questions: [
        {
          name: "我们的创新团队融合了跨领域人才，具有创新相关实践经验",
          number: 1,
        },
        { name: "我们的创新团队欢迎并积极听取其他部门的建议", number: 1 },
        { name: "我们的创新团队能够接触和充分利用组织外部生态资源", number: 1 },
        { name: "高级管理层与创新团队有着成熟的互动机制和管理规则", number: 2 },
        { name: "高级管理层对创新团队的成员有明确职责分工", number: 2 },
        { name: "高级管理层对创新团队设有公平的绩效评估指标", number: 2 },
        {
          name: "能够从商业、客户、技术、数据等多维度洞察有商业价值的机遇",
          number: 3,
        },
        {
          name: "能够将创新机遇和公司战略紧密结合，构建合理的创新项目路线图",
          number: 3,
        },
        {
          name:
            "能够有说服力地阐述创新项目价值，激励团队的执行力，扩大外部的认同",
          number: 3,
        },
        { name: "具备积极的团队创新协作共赢文化，鼓励不断迭代", number: 4 },
        { name: "具备成熟的协作管理机制，能够做出合理的资源分配", number: 4 },
        {
          name:
            "具备完善的协作管理方法，能够高效拆分项目工作，帮助团队顺利高效地完成目标",
          number: 4,
        },
        {
          name: "拥有持续学习的文化，能够在业务、技术和管理技能上不断提升能力",
          number: 5,
        },
        {
          name: "拥有完善的激励机制，鼓励人才持续学习，提升各方面技能",
          number: 5,
        },
        {
          name: "拥有成熟的培训方法，赋能人才持续学习，提升各方面技能",
          number: 5,
        },
        {
          name: "具备挑战现状的先锋文化，面对质疑和阻挠依然意志坚定",
          number: 6,
        },
        {
          name:
            "拥有在变革环境中的决策管理机制，能够拥抱不确定性，抓住问题的主要矛盾，迅速做出决策",
          number: 6,
        },
        {
          name:
            "能够分析创新项目的投入产出比和风险，运用财务模型与量化方法，适时调整战略投入和风控决策",
          number: 6,
        },
      ],
    };
  },

  methods: {
    mychange(index) {
      if (index == 17) {
       this.$refs.talentSubmit.style.opacity = 1
      } else {
        this.$refs.talentSubmit.style.opacity = 0
      }

      this.activeIndex = index;

      if (index >= 0 && index < 3) {
        this.activeTab = 0;
      } else if (index >= 3 && index < 6) {
        this.activeTab = 1;
      } else if (index >= 6 && index < 9) {
        this.activeTab = 2;
      } else if (index >= 9 && index < 12) {
        this.activeTab = 3;
      } else if (index >= 12 && index < 15) {
        this.activeTab = 4;
      } else if (index >= 15 && index < 18) {
        this.activeTab = 5;
      }
    },
    answer(param, item, index) {
      this.value[item - 1] = index + 1; //分数
      console.log(this.value);
      let iconNodes = document.querySelectorAll(".qoption>.optionBlock>.sky");

      let iconArray = Array.prototype.slice
        .call(iconNodes)
        .slice(5 * (item), 5 * (item+1));
      console.log(item);
      console.log(index);
      console.log(iconArray);
      iconArray.map((i, index1) => {
        if (index1 != index) {
          i.classList.remove("iconcircle1");
          i.classList.add("iconcircle3");
        } else {
          i.classList.remove("iconcircle3");
          i.classList.add("iconcircle1");
        }
      });
      // param.target.classList.remove("iconcircle3");
      // param.target.classList.add("iconcircle1");
    },
    async gotoNext() {
      localStorage.setItem("talent", this.value);
      this.$router.push("/talent/result");
    },
  },
  mounted() {
    this.value = new Array(18).fill(1);
  },
};
</script>

<style scoped>
.question {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  background: rgba(208, 232, 250, 0.11);
}

.questions {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 70%;
  margin-top: 5%;
}

.submit {
  opacity: 0;
  height: 15%;
  width: 25%;
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
}

.qblock,
.qtitle,
.qoption,
.qnumber {
  display: flex;
}

.qblock,
.qoption {
  width: 90%;
}

.qnumber {
  color: #fff174;
  font-size: 18px;
  font-weight: 800;
}
.qtitle {
  font-size: 20px;
  font-family: "Microsoft YaHei";
  margin-top: 2%;
  font-weight: 600;
}

.barslide {
  margin-top: 8%;
  display: inline-flex;
  width: 70%;
  height: 15%;
  justify-content: space-evenly;
}

.bar {
  height: 100%;
  width: 16%;
  border-top: solid 3px #fff174;
  color: #fff174;
  margin-right: 1%;
  text-align: center;
}
.xbar {
  color: transparent;
  height: 100%;
  width: 16%;
  border-top: solid 3px white;
  margin-right: 1%;
  text-align: center;
}

.borderYellow {
  border-color: #fff174 !important;
}

/deep/ .el-icon-arrow-left {
  font-size: 60px !important;
}

/deep/ .el-icon-arrow-right {
  font-size: 60px !important;
}

/deep/ .el-carousel__arrow {
  height: 70px !important;
  width: 70px !important;
}
/* 
el-step__icon,
.el-step__icon-inner {
  background: transparent;
  color: transparent;
} */

.optionline {
  border-bottom: 2px solid white;
  height: 2px;
  width: 18%;
  margin-top: 36px;
  /* margin-left: 1px;
  margin-right: 1px; */
}

.f12 {
  font-size: 12px;
  width: max-content;
}

.sky {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

/deep/ .btn {
  background: rgba(74, 128, 218, 0.3) !important;
  border: none !important;
  height: 35px;
  width: 100%;
  color: white;
  margin-top:30px;
}

.btnText {
  color: white;
  font-size: 18px;
  font-weight: 600;
}

.opa0 {
  opacity: 0;
}
</style>

