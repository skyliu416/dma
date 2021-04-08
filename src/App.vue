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
  border: 2px solid #ffe600 !important;
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
  box-shadow: 0px 0px 2px 2px #ffe600;
}
.title {
  display: flex;
  font-size: 36px;
  color: white;
  padding: 30px 30px 10px 30px;
  height: 50px;
  width: 100%;
}
.wslogo {
  width: 12%;
  /* height: 48px; */
  margin: 0 auto;
}
.btn,
.btn:hover,
.btn:active,
.btn:focus {
  color: black !important;
  width: 150px;
  background-color: #ffe600 !important;
  border-color: #ffe600 !important;
}
</style>
