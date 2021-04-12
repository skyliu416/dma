import Vue from 'vue'
import Router from 'vue-router'
import Assessment1 from '../components/assessment1'
import Assessment2 from '../components/assessment2'
import Assessment3 from '../components/assessment3'
import Assessment4 from '../components/assessment4'
import Assessment5 from '../components/assessment5'
import Result from '../components/result'
import Intro from '../components/intro'
import End from '../components/end'
import ProgressBar from '../components/progressBar'
import Home from '../components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dma',
      name: '',
      component: ProgressBar
    },
    {
      path: '/dma/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/dma/assessment1',
      name: 'Assessment1',
      component: Assessment1
    },
    {
      path: '/dma/assessment2',
      name: 'Assessment2',
      component: Assessment2
    },
    {
      path: '/dma/assessment3',
      name: 'Assessment3',
      component: Assessment3
    },
    {
      path: '/dma/assessment4',
      name: 'Assessment4',
      component: Assessment4
    },
    {
      path: '/dma/assessment5',
      name: 'Assessment5',
      component: Assessment5
    },
    {
      path: '/dma/result',
      name: 'Result',
      component: Result
    },
    {
      path: '/dma/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/dma/end',
      name: 'End',
      component: End
    },
  ] ,
  mode:'history'  
})
