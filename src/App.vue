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
  
  background-position: center center;
  overflow-x: hidden;
}

#app {
  font-family: "PingFang SC";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  width: 100%;
  height: 100%;
  justify-content: center;
  color: white;
}

body {
  margin: 0;
  padding: 0;
}

.dma {
  
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
      align-items: center;
}

.content{
  background: url('../src/assets/opacity.png');
  background-repeat: no-repeat;
  background-size: auto 80%;
  background-position: center center;
  display: flex;
  height: 90%;
  width: 90%;
    align-items: center;
  justify-content: center;
}

.flexColumn{
  flex-direction: column;
}

.footer{
  display: flex;
    /* position: fixed; */
    width: 90%;
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
/*包含以下四种的链接*/
a {
    text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
    text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
    text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
    text-decoration: none;
}
/* 正在点击的链接*/
a:active {
    text-decoration: none;
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
  box-shadow: 0px 0px 2px 1px grey;
  background: grey !important;
}
.title {
  display: flex;
  font-size: 32px;
  color: white;
  align-items:center;
  padding: 30px 30px 10px 30px;
  /* height: 10%; */
  width: 95%;
  justify-content: space-between;
}
.wslogo {
  width: 46%;
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
