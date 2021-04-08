<template>
  <div class="assessment">
    <div class="title">
      <div style='width:30%'>数字化成熟度评估</div>
      <div class="barslide">
        <div class="bar">战略与创新增长</div>
        <div class="bar">数字化客户体验</div>
        <div class="bar">智能运营与决策</div>
        <div class="bar borderYellow fontWhite ">信息技术与数据安全</div>
        <div class="bar">组织架构与人才</div>
      </div>
    </div>
    <div class="question">
      <div class="q1">
        <span>1. 是否拥有清晰的针对客户体验优化的数字化创新战略？</span>
        <el-slider
          v-model="value1"
          :step="1"
          :marks="marks"
          :show-tooltip="false"
          :min="1"
          :max="5"
          @change="change(1)"
        >
        </el-slider>
      </div>
      <div class="q1">
        <span>1. 是否拥有清晰的针对客户体验优化的数字化创新战略？</span>
        <el-slider
          v-model="value2"
          :step="1"
          :marks="marks"
          :show-tooltip="false"
          :min="1"
          :max="5"
          @change="change(2)"
        >
        </el-slider>
      </div>
      <div class="q1">
        <span>1. 是否拥有清晰的针对客户体验优化的数字化创新战略？</span>
        <el-slider
          v-model="value3"
          :step="1"
          :marks="marks"
          :show-tooltip="false"
          :min="1"
          :max="5"
          @change="change(3)"
        >
        </el-slider>
      </div>
      <div class="q1">
        <span>1. 是否拥有清晰的针对客户体验优化的数字化创新战略？</span>
        <el-slider
          v-model="value4"
          :step="1"
          :marks="marks"
          :show-tooltip="false"
          :min="1"
          :max="5"
          @change="change(4)"
        >
        </el-slider>
      </div>
      <div class="q1">
        <span>1. 是否拥有清晰的针对客户体验优化的数字化创新战略？</span>
        <el-slider
          v-model="value5"
          :step="1"
          :marks="marks"
          :show-tooltip="false"
          :min="1"
          :max="5"
          @change="change(5)"
        >
        </el-slider>
      </div>
    </div>
    <el-button class="btn" @click='gotoNext()'>下一页</el-button>
   <div class='footer'><eyfooter></eyfooter></div>
  </div>
</template>

<script>
import eyfooter from './eyfooter.vue';
export default {
  components: { eyfooter },
  name: "Assessment1",
  methods: {
    gotoNext(){
      let result = { 
       points:[this.value1.toFixed(1),this.value2.toFixed(1),this.value3.toFixed(1),this.value4.toFixed(1),this.value5.toFixed(1)],
       avg: ((this.value1+this.value2+this.value3+this.value4+this.value5) / 5).toFixed(1)
      }
      localStorage.setItem('q4', JSON.stringify(result))
      this.$router.push('/assessment5')
    },
    change(v) {
      let marks = document.getElementsByClassName("el-slider__marks-text");
      let marksArray = [].slice.call(marks);

      if (v == 1) {
        let marksSet = marksArray.slice(0, 4);
        marksSet.forEach((element, index) => {
          if (index == this.value1 - 1) {
            element.style.color = "#ffe600";
          } else {
            element.style.color = "#909399";
          }
        });
      }

      if (v == 2) {
        let marksSet = marksArray.slice(5, 9);
        marksSet.forEach((element, index) => {
          if (index == this.value2 - 1) {
            element.style.color = "#ffe600";
          } else {
            element.style.color = "#909399";
          }
        });
      }

      if (v == 3) {
        let marksSet = marksArray.slice(10, 14);
        marksSet.forEach((element, index) => {
          if (index == this.value3 - 1) {
            element.style.color = "#ffe600";
          } else {
            element.style.color = "#909399";
          }
        });
      }
      if (v == 4) {
        let marksSet = marksArray.slice(15, 19);
        marksSet.forEach((element, index) => {
          if (index == this.value4 - 1) {
            element.style.color = "#ffe600";
          } else {
            element.style.color = "#909399";
          }
        });
      }
      if (v == 5) {
        let marksSet = marksArray.slice(20, 24);
        marksSet.forEach((element, index) => {
          if (index == this.value5 - 1) {
            element.style.color = "#ffe600";
          } else {
            element.style.color = "#909399";
          }
        });
      }
    },
  },
  data() {
    return {
      page: 1,
      marks: {
        1: "1 起步阶段",
        2: "2 正在发展",
        3: "3 充分应用",
        4: "4 比较先进",
        5: "5 行业领先",
      },
      value1: 1,
      value2: 1,
      value3: 1,
      value4: 1,
      value5: 1,
    };
  },

};
</script>

<style scoped>




.barslide {
  display: inline-flex;
width: 70%;
  justify-content: flex-end;
}

.bar {
  border-top: solid 3px;
  margin-top: 24px;
  margin-right: 3px;
  color: #2b2b39;
  
  height: 50%;
  width: 175px;
  font-size: 12px;
  text-align: center;
}

.question {
  margin: 5% 0 5% 0;
  font-size: 16px;

  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.q1 {
  margin-top: 3%;
  width: 100%;
}

</style>

<style >
.el-slider__bar {
  background-color: #ffe600 !important;
}

/* .el-slider__button {
  border: 2px solid #ffe600 !important;
  background-color: #ffe600 !important;
}
el-button:focus,
.el-button:hover {
  background-color: #ffe600 !important;

  border-color: #ffe600 !important;
} */

.el-slider__marks-text {
  width: fit-content;
}


.assessment {
  background: url(../../src/assets/opacity.png);
  background-repeat: no-repeat;
  background-size: auto 80%;
  background-position: center center;
  /* opacity: 50%; */

  height: 100%;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  
}
</style>
