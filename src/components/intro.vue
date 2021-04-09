<template>
  <div class="intro">
    <div class="block">
      <div class="heading1">
        5大创新聚焦方向
        <el-divider class="bgYellow height2 heading1Animation"></el-divider>
      </div>

      <div class="list">
        <div class="barlist">
          <el-divider class="bgLightYellow height16 headingBar"></el-divider>
          <div class="headingText">战略与创新增长</div>
        </div>
        <div class="barlist">
          <el-divider class="bgYellow height16 headingBar"></el-divider>
          <div class="headingText">战略与创新增长</div>
        </div>
        <div class="barlist">
          <el-divider class="bgLightYellow height16 headingBar"></el-divider>
          <div class="headingText">战略与创新增长</div>
        </div>
        <div class="barlist">
          <el-divider class="bgYellow height16 headingBar"></el-divider>
          <div class="headingText">战略与创新增长</div>
        </div>
        <div class="barlist">
          <el-divider class="bgLightYellow height16 headingBar"></el-divider>
          <div class="headingText">战略与创新增长</div>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="heading2">
        5项创新驱动力
        <el-divider class="bgYellow height2 heading2Animation"></el-divider>
      </div>
      <div class="list">
        <div class="barlist headingIcon">
          <img class="icon" src="../../src/assets/icon3.png" /><br />清晰规划
        </div>
        <div class="barlist headingIcon">
          <img class="icon" src="../../src/assets/icon4.png" /><br />市场洞察
        </div>

        <div class="barlist headingIcon">
          <img class="icon" src="../../src/assets/icon2.png" /><br />转型管理
        </div>
        <div class="barlist headingIcon">
          <img class="icon" src="../../src/assets/icon5.png" /><br />前沿科技
        </div>
        <div class="barlist headingIcon">
          <img class="icon" src="../../src/assets/icon1.png" /><br />生态联盟
        </div>
      </div>
    </div>
    <div class="block">
      <div class="heading3">
        5层创新发展阶段
        <el-divider class="bgYellow height2 heading3Animation"></el-divider>
      </div>
      <div class="list">
        <div class='frame'>
<div class="lastline1">
          <div class="circle1"></div>
          <div class="lastTxt1">起步阶段</div>
        </div>
        </div>
        <div class='frame'>
        <div class="lastline2">
          <div class="circle2"></div>
          <div class="lastTxt2">发展阶段</div>
        </div>
        </div>
        <div class='frame'>
        <div class="lastline3">
          <div class="circle3"></div>
          <div class="lastTxt3">行业平均水平</div>
        </div>
        </div>
        <div class='frame'>
        <div class="lastline4">
          <div class="circle4"></div>
          <div class="lastTxt4">接近行业领先</div>
        </div>
        </div>
        <div class=''>
        <div class="lastline5">
          <div class="lastTxt5">行业领先</div>
          <div class="circle5"></div>
        </div>
        </div>
      </div>
    </div>
    <div class='btnBlock'>
       <el-button class="btn" @click='gotoAssessment()'><span class='textOpacity'>进入评估</span></el-button>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {
      value1: 0,
      value2: 0,
    };
  },
  methods: {
    gotoAssessment(){
      this.$router.push('/assessment1')
    }
  },
};
</script>

<style scoped>
.lastline1 {
  opacity: 0;

  width: 25%;
  font-size: 16px;
    border-top: 2px solid #ffe600;
  position: relative;
  -webkit-animation: lastChange 1s;
  animation-fill-mode: forwards;
  animation-delay: 4s;
}

.lastline2 {
  opacity: 0;

  width: 25%;
  font-size: 16px;
    border-top: 2px solid #ffe600;
  position: relative;
  -webkit-animation: lastChange 1s;
  animation-fill-mode: forwards;
  animation-delay:5s;
}

.lastline3 {
  opacity: 0;

  width: 25%;
  font-size: 16px;
  border-top: 2px solid #ffe600;
  position: relative;
  -webkit-animation: lastChange 1s;
  animation-fill-mode: forwards;
  animation-delay: 6s;
}
.lastline4 {
  opacity: 0;

  width: 25%;
  font-size: 16px;
  border-top: 2px solid #ffe600;
  position: relative;
  -webkit-animation: lastChange 1s;
  animation-fill-mode: forwards;
  animation-delay: 7s;
}
.lastline5 {
  opacity: 0;
 
  width: 0;
  font-size: 16px;
  border-top: 2px solid #ffe600;
  position: relative;
  -webkit-animation: lastChange 1s;
  animation-fill-mode: forwards;
  animation-delay: 8s;
}

/* .last5 {
  height: 10px;

  font-size: 16px;
  border-top: 2px solid yellow;
  position: relative;
  -webkit-animation: lastChange 3s;
  animation-fill-mode: forwards;
  animation-delay: 10s;
} */
.lastTxt1 {
  opacity: 0;
  font-size: 16px;
  margin-top: 10px;
  position: absolute;
  left: -20px;
  -webkit-animation: opacity 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 4.2s;
}
.lastTxt2 {
  opacity: 0;
  font-size: 16px;
  margin-top: 10px;
  position: absolute;
  left: -20px;
  -webkit-animation: opacity 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 5.2s;
}
.lastTxt3 {
  opacity: 0;
  font-size: 16px;
  margin-top: 10px;
  position: absolute;
  left: -35px;
  -webkit-animation: opacity 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 6.2s;
}

.lastTxt4 {
  opacity: 0;
  font-size: 16px;
  margin-top: 10px;
  position: absolute;
  left: -35px;
  -webkit-animation: opacity 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 7.2s;
}
.lastTxt5 {
  opacity: 0;
  font-size: 16px;
  margin-top: 10px;
  position: absolute;
  left: -20px;
  width: max-content;
  left: -36px;
  -webkit-animation: opacity 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 8.2s;
}
.circle1 {
  opacity: 0;
  position: absolute;
  width: 20px;
  top: -10px;
  height: 20px;
  background-color: #ffe600;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  -webkit-animation: opacity 0.1s;
  animation-fill-mode: forwards;
  animation-delay: 4s;
}

.circle2 {
  opacity: 0;
  position: absolute;
  width: 20px;
  top: -10px;
  height: 20px;
  background-color: #ffe600;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6.5px;
  -webkit-animation: opacity 0.1s;
  animation-fill-mode: forwards;
  animation-delay: 5s;
}
.circle3 {
  opacity: 0;
  position: absolute;
  width: 20px;
  top: -10px;
  height: 20px;
  background-color: #ffe600;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
  -webkit-animation: opacity 0.1s;
  animation-fill-mode: forwards;
  animation-delay: 6s;
}

.circle4 {
  opacity: 0;
  position: absolute;
  width: 20px;
  top: -10px;
  height: 20px;
  background-color: #ffe600;
  border-radius: 50%;
  display: inline-block;
  margin-right: 7px;
  -webkit-animation: opacity 0.1s;
  animation-fill-mode: forwards;
  animation-delay: 7s;
}
.circle5 {
  /* opacity: 0; */
  position: absolute;
  width: 20px;
  right: -10px;
  top: -10px;
  height: 20px;
  background-color: #ffe600;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;

  /* -webkit-animation: opacity 0.1s;
  animation-fill-mode: forwards;
  animation-delay: 10.5s; */
}
.heading1 {
  opacity: 0;
  -webkit-animation: opacity 4s;
  animation-fill-mode: forwards;
}

.heading2 {
  opacity: 0;
  -webkit-animation: opacity 4s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

.heading3 {
  opacity: 0;
  -webkit-animation: opacity 5s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
}

.headingBar {
  opacity: 0;
  -webkit-animation: opacity 2s;
  animation-fill-mode: forwards;
  animation-delay: 1s;
}

.heading1Animation {
  width: 0;
  -webkit-animation: change 2s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
}
.heading2Animation {
  width: 0;
  -webkit-animation: change 2s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
.heading3Animation {
  width: 0;
  -webkit-animation: change 5s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
}
.headingText {
  opacity: 0;
  margin-top: 10px;
  animation-delay: 2s;
  animation: bounce 3s cubic-bezier(0.05, 0, 0.2, 1);

  animation-fill-mode: forwards;
}
.headingIcon {
  opacity: 0;
  -webkit-animation: opacity 3s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

.frame{
  height: 10px;
  width: 25%;
}
@keyframes change {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes lastChange {
  from {
    opacity: 0;
    border-top: 2px solid;
    width: 0;
  }
  to {
    width: 100%;
    opacity: 1;
    border-top: 2px solid #ffe600;
    box-shadow: 0 0 10px 3px #ffe600;
  }
}

@keyframes headingIcon {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes bounce {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  20% {
    opacity: 0.2;
  }
  40% {
    opacity: 0.4;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, -10px, 0);
  }
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.2;
  }
  40% {
    opacity: 0.4;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

@keyframes textOpacity {
  0% {
    opacity: 0;
  }
 
  33% {
    opacity: 1;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


.intro {
  /* display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  align-items: center; */

 background: url(../../src/assets/opacity.png);
  background-repeat: no-repeat;
  background-size: 90% auto;
  background-position: center center;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
}

.block {
  height: 27%;
  width: 100%;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.list {
  width: 80%;
  display: flex;
  margin-top: 2%;
  justify-content: space-between;
}
.barlist {
  text-align: center;
  display: inline-block;
  width: 18%;

  font-size: 16px;
}
.heading {
  width: 33%;
  height: 5%;
}

.el-divider--horizontal {
  margin: 2px 0;
}
.bgLightYellow {
  background-color: #fff174;
}
.bgYellow {
  background-color: #ffe600;
}
.height16 {
  height: 15px;
}

.height2 {
  height: 2px;
}

.icon {
  height: 55px;
  width: 55px;
}

.btn,
.btn:hover,
.btn:active,
.btn:focus {
  opacity: 0;
  font-weight: bold;
  color: black;
  width: 175px;
  background-color: #ffe600;
  border-color: #ffe600;
}

.btnBlock{
  display: flex;
    align-items: center;
  height: 18%;
}
.btn{
  -webkit-animation: opacity  1s;
  animation-delay: 8.5s;
  animation-fill-mode: forwards;
}

.textOpacity{

opacity: 0;
  -webkit-animation: textOpacity ease-in-out 2s;
  animation-delay: 9s;
  animation-fill-mode: forwards;
}
</style>


<style >
.el-step__icon,
.el-step__icon-inner {
  background: #ffe600 !important;
  color: #ffe600;
}
.el-step__line {
  background: #ffe600 !important;
}
.el-step__head.is-wait {
  border: none !important;
}
.el-step.is-horizontal .el-step__line {
  height: 2px;
}
.el-step__title.is-wait {
  color: white !important;
}
</style>
