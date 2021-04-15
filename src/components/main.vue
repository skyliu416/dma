<template>
  <div class="main">
     <div class="block" v-for="item in urls" :key="item.name">
      <a :href='item.url'>
    <el-image
       style="margin:2%" 
      :src="item.cover"
      fit='contain'
 ></el-image>
 <div class="name">{{ item.name }}</div>
 </a> 

</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      urls:[{
        name: '数字化程度评估',
        cover: require('../../src/assets/dmaCover.png'),
        url: '/dma'
      },
       {
        name: '创新团队能力评估',
        cover: require('../../src/assets/talentCover.png'),
        url: '/talent'
      }]
         
          
        
    }
  },
  methods: {
    gotoNext() {
      this.$router.push("/talent/intro");
    },
  },
  created() {},
};
</script>

<style scoped>
.main {
  display: flex;
  width: 100%;
  height: 100%;
  /* background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(0%, rgb(164, 166, 169)),
    color-stop(100%, rgb(56, 56, 57))
  ) !important; */
  background-color: grey;
}

.block{
    margin-top:10%;
  width: 25%;
 margin-left:2%;
      display: flex;
    flex-direction: column;
}

.name{
  text-align: center;
  color: white;
  font-weight: 600;
}
</style>
