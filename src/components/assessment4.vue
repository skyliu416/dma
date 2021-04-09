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
        <span>{{q1.q}}</span>
        <el-slider
          v-model="value1"
          :step="1"
          :marks='q1.a'
          :show-tooltip="false"
          :min="1"
          :max="5"
          @change="change(1)"
        >
        </el-slider>
      </div>
      <div class="q1">
        <span>{{q2.q}}</span>
        <el-slider
          v-model="value2"
          :step="1"
          :marks="q2.a"
          :show-tooltip="false"
          :min="1"
          :max="5"
          @change="change(2)"
        >
        </el-slider>
      </div>
      <div class="q1">
        <span>{{q3.q}}</span>
        <el-slider
          v-model="value3"
          :step="1"
          :marks="q3.a"
          :show-tooltip="false"
          :min="1"
          :max="5"
          @change="change(3)"
        >
        </el-slider>
      </div>
      <div class="q1">
        <span>{{q4.q}}</span>
        <el-slider
          v-model="value4"
          :step="1"
          :marks="q4.a"
          :show-tooltip="false"
          :min="1"
          :max="5"
          @change="change(4)"
        >
        </el-slider>
      </div>
      <div class="q1">
        <span>{{q5.q}}</span>
        <el-slider
          v-model="value5"
          :step="1"
          :marks="q5.a"
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
      q1: {
        q: "1. 是否拥有清晰的针对信息技术与数据安全的数字化创新战略？",
        a: {
          1: "1 起步阶段",
          2: "2 正在发展",
          3: "3 达到标准",
          4: "4 比较先进",
          5: "5 行业领先",
        },
      },
      q2: {
        q: "2. 是否充分熟悉行业内外针对信息技术与数据安全的数字化创新的最佳实践案例？",
        a: {
          1: "1 起步阶段",
          2: "2 正在发展",
          3: "3 充分熟悉",
          4: "4 比较先进",
          5: "5 行业领先",
        },
      },
      q3: {
        q: "3. 是否拥有成熟的数字化+业务团队负责领导和执行信息技术与数据安全的创新项目？",
        a: {
          1: "1 起步阶段",
          2: "2 正在发展",
          3: "3 达到标准",
          4: "4 比较先进",
          5: "5 行业领先",
        },
      },
      q4: {
        q: "4. 是否了解且已经将新兴技术应用在信息技术与数据安全的创新项目（如区块链智能合约与加密追溯等）？",
        a: {
          1: "1 起步阶段",
          2: "2 逐步了解",
          3: "3 充分应用",
          4: "4 比较先进",
          5: "5 行业领先",
        },
      },
      q5: {
        q: "5. 是否在信息技术与数据安全的创新规划中，有成熟的生态合作伙伴？",
        a: {
          1: "1 起步阶段",
          2: "2 正在发展",
          3: "3 达到标准",
          4: "4 比较先进",
          5: "5 行业领先",
        },
      },
    };
  },

};
</script>

<style scoped>
.barslide {
  display: inline-flex;
  width: 65%;
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

</style>
