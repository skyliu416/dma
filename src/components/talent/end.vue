<template>
  <div class="talentPage">
    <div class="talentContent flexColumn">
      <div class='end' ref="end">
 <div class="endtitle">感谢您的参与</div>
    <div class="subtitle">
      欢迎和创新顾问进一步咨询团队创新能力提升方案

    </div>
    </div>
    </div>
   
    <div class='footer'><eyfooter></eyfooter></div>
    
  </div>
</template>

<script>
import eyfooter from "../dma/eyfooter.vue";
export default {
  name: "End",
  data() {
    return {};
  },
  methods: {

  },
  created() {
    this.$nextTick(function () {
      let end = this.$refs.end;

      end.addEventListener("webkitAnimationEnd", () => {
         this.$router.push('/talent/home')
      });
    });
  },
  components: { eyfooter },
};
</script>

<style scoped>

.content{
  height: 95%;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;

}
.end{
     opacity: 0;
  -webkit-animation: textOpacity 5s;
  /* animation-delay: 1s; */
  animation-fill-mode: forwards;
  position: relative;
  text-align: center;
}
.wslogo {
  width: 259px;
  height: 48px;
  margin: 0 auto;
}
.endtitle {
  /* margin-top: 20%; */
  /* display: flex; */
  flex-direction: column;
  font-size: 28px;
  color: white;
  align-items: center;
  height: auto;
  font-weight: 600;
}
.subtitle {
  margin-top: 1%;
  font-size: 20px;
  font-weight: 400;
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
