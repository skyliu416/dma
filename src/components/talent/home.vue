<template>
  <div class="talentPage">
    <div class="talentContent flexColumn">
      <div class="title">
        <div style="width= 100%;">创新团队能力评估</div>
        <img class="wslogo" src="@/assets/wavespace.png" />
        <div style="display: flex; justify-content: center; width:256px">
          <el-button size="mini" class="btn" @click="gotoNext()"
            ><span class="btnText">进 入</span></el-button
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
import eyfooter from "../dma/eyfooter.vue";

export default {
  components: { eyfooter },
  name: "Home",

  methods: {
    gotoNext() {
      this.$router.push("/talent/intro");
    },
  },
  created() {},
};
</script>

<style scoped>


.title{
      display: flex;
    font-size: 32px;
    color: white;
    /* padding: 30px 30px 10px 30px; */
    /* height: 10%; */
    width: 30%;
    text-align: center;
    flex-direction: column;
}

/deep/ .btn{
      background: rgba(59,94,153,0.7) !important;
    border: none !important;
    margin-top: 30px;
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
<style>
.talentPage {
  /* background: -webkit-linear-gradient(135deg,rgba(40,90,170,1),rgba(40,90,170,0.9), rgba(19,30,82)); */
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(40,90,170,1)), color-stop(50%,rgba(40,90,170,0.9)),color-stop(100%,rgba(19,30,82,1))) !important;
    /* background-image: linear-gradient(135deg,rgba(40,90,170,0.8), rgba(19,30,82));  */
   
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
      align-items: center;
}

.talentContent{
  /* background: url('../../../src/assets/talentBG.png'); */
  background-repeat: no-repeat;
  background-size: auto 80%;
  background-position: center center;
  /* background-color: #2953A7; */
  display: flex;
  justify-content: center;
  align-items: center;
    width: 90%;
    height: 90%;
 
}

</style>
