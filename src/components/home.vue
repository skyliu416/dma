<template>
  <div class="home">
    <div ref="progressBar" class="progress" v-show="showProgressBar">
      <span>正在加载</span>
      <div class="barDiv">
        <div class="bar"></div>
      </div>
    </div>
    <div class="title" v-show="showTitle">
      <span>数字化成熟度评估</span>
      <img class="wslogo" src="../../src/assets/wavespace.png" />
      <el-button class="btn" @click="gotoNext()"><span class='textOpacity'>确 定</span></el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      showTitle: false,
      showProgressBar: true,
    };
  },
  methods:{
    gotoNext(){
 this.$router.push('/intro')
    }
  },
  created() {
    this.$nextTick(function () {
      let progressBar = this.$refs.progressBar;

      progressBar.addEventListener("webkitAnimationEnd", () => {
        this.showProgressBar = false;
        this.showTitle = true;
      });
    });
  },
};
</script>

<style scoped>
.home {
  background: url(../../src/assets/opacity.png);
  background-repeat: no-repeat;
  background-size: auto 80%;
  background-position: center center;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  /* justify-content: center; */
}


.progress {
  margin-top: 20%;
  width: 15%;
  display: flex;
  flex-direction: column;

  text-align: center;
}
.bar {
  width: 0%;
  /* border: 2px solid yellow; */
  background: yellow;
  height: 5px;
  -webkit-animation: change 3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

@keyframes change {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.barDiv {
  margin-top: 2%;
  width: 100%;
  border: 1px solid grey;
  height: 5px;
}
.title {
  opacity: 0;
  margin-top: 15%;
  /* display: flex; */
  flex-direction: column;
  font-size: 42px;
  color: white;
      align-items: center;
      -webkit-animation: display 3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}
@keyframes display {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.btn,
.btn:hover,
.btn:active,
.btn:focus {
  margin-top: 2%;
  color: black;
  width: 8%;
  background-color: #ffe600;
  border-color: #ffe600;
  font-weight: 800;
}
.textOpacity{

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
