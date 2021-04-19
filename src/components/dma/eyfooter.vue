<template>
  <div class='eyfooter'>
     <img class="footerlogo" src="@/assets/wavespace.png" />
  </div>
</template>

<script>
export default {
  name: "eyfooter",

methods: {

}
};
</script>

<style scoped>

.eyfooter{
  width: 100%;
      height: 100%;
    bottom: 0;
    /* right: 5%; */
  display: flex;
  justify-content: flex-end;
  align-items: baseline;

}

.footerlogo{
  display: flex;
width: 10%;
}
</style>
