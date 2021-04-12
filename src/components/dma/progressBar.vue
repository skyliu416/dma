<template>
  <div class="dma">
    <div class="content">
      <div ref="progressBar" class="progress">
        <span>正在加载</span>
        <div class="barDiv">
          <div class="bar"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <eyfooter />
    </div>
  </div>
</template>

<script>
import eyfooter from "./eyfooter.vue";
export default {
  name: "ProgressBar",
  components: { eyfooter },
  created() {
    this.$nextTick(function () {
      let progressBar = this.$refs.progressBar;

      progressBar.addEventListener("webkitAnimationEnd", () => {
        this.$router.push("/dma/home");
      });
    });
  },
};
</script>

<style scoped>
.home {
  background: url(../../../src/assets/opacity.png);
  background-repeat: no-repeat;
  background-size: auto 80%;
  background-position: center center;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.progress {
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
</style>
