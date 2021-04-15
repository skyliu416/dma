<template>
  <div class="talentPage">
    <div class="talentContent flexColumn">
      <div class="barslide">
        <div :class="activeTab==0? 'bar':'xbar'">多元团队</div>
        <div :class="activeTab==1? 'bar':'xbar'">先锋决策</div>
        <div :class="activeTab==2? 'bar':'xbar'">持续学习</div>
        <div :class="activeTab==3? 'bar':'xbar'">高管带领</div>
        <div :class="activeTab==4? 'bar':'xbar'">前瞻洞见</div>
        <div :class="activeTab==5? 'bar':'xbar'">协作共赢</div>
      </div>
      <div class="questions">
        <el-carousel
          :autoplay="false"
          indicator-position="none"
          arrow="always"
          height="300px"
          @change="mychange"
          v-model="activeIndex"
          :loop=false
        >
          <el-carousel-item v-for="item in 18" :key="item" >
            <div class="question">
              <div class="qblock flexColumn">
                <div class="qnumber">{{ item }}/18</div>
                <div class="qtitle">
                  我的团队欢迎并积极听取其他部门的建议，从多视角审视调整方案
                </div>
              </div>

              <div class="qoption">
                
                <i class="sky iconcircle3" @click="answer($event, item, 0)">
                  <span class='f12'>1</span>
                </i>

                <div class="optionline"></div>

                <i class="sky iconcircle3" @click="answer($event, item, 1)">
                  <span class='f12'>2</span>
                </i>

                <div class="optionline"></div>

                <i class="sky iconcircle3" @click="answer($event, item, 2)">
                  <span class='f12'>3</span>
                </i>
                <div class="optionline"></div>

                <i class="sky iconcircle3" @click="answer($event, item, 3)">
                  <span class='f12'>4</span>
                </i>
                <div class="optionline"></div>

                <i class="sky iconcircle3" @click="answer($event, item, 4)">
                  <span class='f12'>5</span>
                </i>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="submit" v-show='showBtn'>
            <el-button class="btn" @click='gotoNext()'>
              <span class='btnText'>提 交</span>
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
      activeTab:0,
      showBtn:false,
      value: [],
      q1: {
        q: "1. 是否拥有清晰的创新增长战略，并已在高管团队内部达成共识？",
        a: {
          1: "1 起步阶段",
          2: "2 正在发展",
          3: "3 达到标准",
          4: "4 比较先进",
          5: "5 行业领先",
        },
      },
      q2: {
        q: "2. 是否拥有持续的工作流程去收集行业内外的创新趋势与洞察？",
        a: {
          1: "1 起步阶段",
          2: "2 正在发展",
          3: "3 达到标准",
          4: "4 比较先进",
          5: "5 行业领先",
        },
      },
      q3: {
        q: "3. 是否拥有专业技能完善的创新战略领导团队和项目团队？",
        a: {
          1: "1 起步阶段",
          2: "2 正在发展",
          3: "3 达到标准",
          4: "4 比较先进",
          5: "5 行业领先",
        },
      },
      q4: {
        q: "4. 是否已经在战略层面应用新经济/数字经济的创新商业模型？",
        a: {
          1: "1 起步阶段",
          2: "2 逐步了解",
          3: "3 充分应用",
          4: "4 比较先进",
          5: "5 行业领先",
        },
      },
    };
  },

  methods: {
    mychange(index){
     if (index == 17) {this.showBtn = true}
     else {this.showBtn = false}

      this.activeIndex = index
 
      if(index>=0&&index<3){
        this.activeTab = 0
      }
       else if(index>=3&&index<6){
        this.activeTab = 1
      }
        else if(index>=6&&index<9){
        this.activeTab = 2
      }
      else if(index>=9&&index<12){
        this.activeTab = 3
      }
     else if(index>=12&&index<15){
        this.activeTab = 4
      }
      else if(index>=15&&index<18){
        this.activeTab = 5
      }  
    },
    answer(param, item, index) {
      this.value[item-1] = index + 1 //分数
      console.log(this.value)
      let iconNodes = document.querySelectorAll(".qoption>.sky");

      let iconArray = Array.prototype.slice
        .call(iconNodes)
        .slice(5 * (item - 1), 5 * item);

      iconArray.map((i,index1) => {
        if (index1 != index) {
          i.classList.remove("iconcircle1");
          i.classList.add("iconcircle3");
        }else{
          i.classList.remove("iconcircle3");
          i.classList.add("iconcircle1");
        }
      });
      // param.target.classList.remove("iconcircle3");
      // param.target.classList.add("iconcircle1");
    },
    async gotoNext() {
      localStorage.setItem('talent', this.value)
      this.$router.push("/talent/result");
    },
  },
  mounted() {
    this.value = new Array(18).fill(1)
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

.submit{
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
  color: yellow;
  font-size: 18px;
  font-weight: 800;
}
.qtitle {
  font-size: 20px;
  font-family: "Microsoft YaHei";
  margin-top: 2%;
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
  border-top: solid 3px white;
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
  margin-top: 20px;
  /* margin-left: 1px;
  margin-right: 1px; */
}

.f12{
  font-size: 14px;
}

.sky{
  display: flex;
  flex-direction: column;
  align-items: center;
   cursor: pointer;
}

/deep/ .btn{
      background: rgba(74,128,218,0.5) !important;
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
</style>

