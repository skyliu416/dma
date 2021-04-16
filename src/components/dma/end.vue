<template>
  <div  class="dma">
    <div class='content'>
      <div class='end' ref="end">
 <div class="endtitle">您已完成评估, 谢谢!</div>
  <div class="subtitle">请移步咨询室, 参与行业洞察与对标咨询</div>
    <!-- <div class="subtitle">
      本区域还有安永整理总结的行业数字化转型最佳实践，<br />欢迎前往房间浏览
    </div> -->
    </div>
    </div>
   
    <div class='footer'><eyfooter></eyfooter></div>
    
  </div>
</template>

<script>
import eyfooter from "./eyfooter.vue";
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
         this.$router.push('/dma')
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
  text-align: center;
     opacity: 0;
  -webkit-animation: textOpacity 5s;
  animation-fill-mode: forwards;
  position: relative;
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
  animation-fill-mode: forwards;
}
.subtitle {
  margin-top: 1%;
  font-size: 20px;
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
