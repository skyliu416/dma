<template>
  <div id='app'>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted(){

  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, 1);
  background-position: center center;
}

#app {
  font-family: "PingFang SC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  

  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;

  
  color: white;


}

body {
  margin: 0;
  padding: 0;
}

.footer{
  display: flex;
    /* position: fixed; */
    width: 100%;
    height: 6%;
    margin-bottom: 1%;
}

ul {
  margin: 0;
}
li {
  list-style-type: none;
}

.fl {
  float: left;
}

input{
outline: none; 
-webkit-appearance: button; 
-webkit-appearance: none; 
border-radius: 0; 
border: none;
line-height: 25px;
background-color: #D1D1D2  ;
}

.borderYellow{
  border-color: #FFF174 !important;

}

.borderGrey{
  border-color: #2b2b39 !important;
}

.fontWhite{
  color:white !important;
}

.el-slider__button {
  border: 2px solid yellow !important;
  background-color: #ffe600 !important;
}
el-button:focus,
.el-button:hover {
  background-color: #ffe600 !important;

  border-color: #ffe600 !important;
}
.el-slider__stop {
      background-color: inherit !important;
}
.el-slider__runway{
  box-shadow: 0px 0px 2px 1px #ffe600;
  background: grey !important;
}
.title {
  display: flex;
  font-size: 32px;
  color: white;
  padding: 30px 30px 10px 30px;
  height: 10%;
  width: 95%;
  justify-content: space-between;
}
.wslogo {
  width: 10%;
  /* height: 48px; */
  margin: 0 auto;
}
.btn,
.btn:hover,
.btn:active,
.btn:focus {
  width: 150px;
  color: black !important;
  background-color: #ffe600 !important;
  border-color: #ffe600 !important;
  -webkit-appearance: none !important;
}
.el-slider__marks-text{
  font-size: 12px  !important;
}


.question {
  margin: 2% 0 5% 0;
  font-size: 16px;

  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.assessment {
  background: url('../src/assets/opacity.png');
  background-repeat: no-repeat;
  background-size: auto 80%;
  background-position: center center;
  /* opacity: 50%; */

  height: 100%;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
      justify-content: space-between;
}
</style>
