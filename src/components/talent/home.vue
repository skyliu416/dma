<template>
  <div class="talentPage">
    <div class="content">
      <div class="title">
        <div style="width= 100%;">数字化成熟度评估</div>
        <img class="wslogo" src="@/assets/wavespace.png" />
        <div style="display: flex; justify-content: center; width: 100%">
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
import eyfooter from "../dma/eyfooter.vue";

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

<style>

.talentPage{
  background: blue;
}
</style>
