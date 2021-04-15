import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main'
import Assessment1 from '../components/dma/assessment1'
import Assessment2 from '../components/dma/assessment2'
import Assessment3 from '../components/dma/assessment3'
import Assessment4 from '../components/dma/assessment4'
import Assessment5 from '../components/dma/assessment5'
import Result from '../components/dma/result'
import Intro from '../components/dma/intro'
import End from '../components/dma/end'
import ProgressBar from '../components/dma/progressBar'
import Home from '../components/dma/home'

import TalentHome from '../components/talent/home'
import TalentIntro from '../components/talent/intro'
import TalentAssessment from '../components/talent/assessment'
import TalentResult from '../components/talent/result'
import TalentEnd from '../components/talent/end'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
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
    {
      path: '/talent',
      name: 'TalentHome',
      component: TalentHome
    },
    {
      path: '/talent/home',
      name: 'TalentHome',
      component: TalentHome
    },

    {
      path: '/talent/intro',
      name: 'TalentIntro',
      component: TalentIntro
    },
    {
      path: '/talent/assessment',
      name: 'TalentAssessment',
      component: TalentAssessment
    },
    {
      path: '/talent/result',
      name: 'TalentResult',
      component: TalentResult
    },
    {
      path: '/talent/end',
      name: 'TalentEnd',
      component: TalentEnd
    },
  ] ,
  mode:'history'  
})
