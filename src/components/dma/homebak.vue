// <template>
//   <div class="home">
//     <progress-bar v-show='showProgressBar'></progress-bar>
//     <home-title v-show='showTitle'></home-title>
//   </div>
// </template>

// <script>

// import progressBar from './progressBar.vue';
// import HomeTitle from './home.vue';
// export default {
//   components: { progressBar, HomeTitle },
//   name: "Home",
//   data() {
//     return {
//       showTitle: false,
//       showProgressBar: true,
//     };
//   },
//   methods:{

//   },
//  created() {
//     this.$nextTick(function () {
//       let progressBar = this.$refs.progressBar;

//       progressBar.addEventListener("webkitAnimationEnd", () => {
//         this.showProgressBar = false
//         this.showTitle = true
//         alert(this.showTitle)
//       });
//     });
//   },
// };
// </script>

// <style scoped>
// .home {
//   background: url(../../src/assets/opacity.png);
//   background-repeat: no-repeat;
//   background-size: auto 80%;
//   background-position: center center;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   align-items: center;
//   /* justify-content: center; */
// }


// .progress {
//   margin-top: 40%;
//   width: 15%;
//   display: flex;
//   flex-direction: column;

//   text-align: center;
// }
// .bar {
//   width: 0%;
//   /* border: 2px solid yellow; */
//   background: yellow;
//   height: 5px;
//   -webkit-animation: change 3s;
//   animation-delay: 1s;
//   animation-fill-mode: forwards;
// }

// @keyframes change {
//   from {
//     width: 0%;
//   }
//   to {
//     width: 100%;
//   }
// }
// .barDiv {
//   margin-top: 2%;
//   width: 100%;
//   border: 1px solid grey;
//   height: 5px;
// }
// .title {
//   opacity: 0;
//   margin-top: 15%;
//   /* display: flex; */
//   flex-direction: column;
//   font-size: 42px;
//   color: white;
//       align-items: center;
//       -webkit-animation: display 3s;
//   animation-delay: 1s;
//   animation-fill-mode: forwards;
// }
// @keyframes display {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }
// .btn,
// .btn:hover,
// .btn:active,
// .btn:focus {
//   margin-top: 2%;
//   color: black;
//   /* width: 10%; */
//   background-color: #ffe600;
//   border-color: #ffe600;
//   /* font-weight: 800; */
// }
// .textOpacity{

// opacity: 0;
//   -webkit-animation: textOpacity 3s infinite;
//   animation-delay: 1s;
//   animation-fill-mode: forwards;
// }
// @keyframes textOpacity {
//   0% {
//     opacity: 0;
//   }

//   100% {
//     opacity: 1;
//   }
// }
// </style>
