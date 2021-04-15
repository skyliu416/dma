<template>
  <div class="dma">
    <div class="content">
      <div class="hometitle">
        <div style="width= 100%;">数字化成熟度评估</div>
        <img class="wslogo" src="@/assets/wavespace.png" />
        <div style="display: flex; justify-content: center; width: 256px">
          <el-button size="mini" class="btn" @click="gotoNext()"
            ><span class="textOpacity">确 定</span></el-button
          >
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
  components: { eyfooter },
  name: "Home",

  methods: {
    gotoNext() {
      this.$router.push("/dma/intro");
    },
  },
  created() {},
};
</script>

<style scoped>

.hometitle {
     display: flex;
    font-size: 32px;
    width: 30%;
    text-align: center;
    flex-direction: column;
  color: white;
  align-items: center;
  -webkit-animation: display 3s;

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

.textOpacity {
  color: black;
  font-size: 16px;
  font-weight: 600;
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

/deep/ .btn{

    border: none !important;
    margin-top: 30px;
    height: 35px;
    width: 100%;
    color: white;

}
</style>
