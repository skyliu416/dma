<template>
  <div class="home">
    <div class="title">
      <div style="width= 100%;">数字化成熟度评估</div>
      <img class="wslogo" src="../../src/assets/wavespace.png" />
      <div style="display:flex; justify-content:center; width: 100%;">
        <el-button size="mini" class="btn" @click="gotoNext()"
          ><span class='textOpacity'>确 定</span></el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  methods: {
    gotoNext() {
      this.$router.push("/intro");
    },
  },
  created() {},
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
  justify-content: center;
}
.title {
  text-align: center;
  opacity: 0;
  margin-bottom: 5%;
  padding: 0;
  display: block;
  /* flex-direction: column; */
  font-size: 32px;
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
.btn,
.btn:hover,
.btn:active,
.btn:focus {
  width: 10%;
  margin-top: 1%;
  color: black;
  background-color: #ffe600;
  border-color: #ffe600;
  font-weight: 800;
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
