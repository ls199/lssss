import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Test from'@/views/Test'
import MatchReports from '@/views/MatchReports'
import Login from '@/components/Login'
//import VueRouter from 'vue-router'
import LunFanTu from '@/views/LunFanTu'
import DaoHang from '@/views/DaoHang'
import HY from '@/views/HY'
import Homepage from '@/views/Homepage'
import analysis from '@/views/detail/analysis'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/result',
      name: 'MatchReports',
      component: MatchReports
    },
   
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },



    {
      path: '/analysis',
      name: 'analysis',
      component: analysis
    },


    {
      path: '/HY',
      name: 'HY',
      component: HY
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/LunFanTu',
      name: 'LunFanTu',
      component: LunFanTu
    },
    {
      path: '/DaoHang',
      name: 'DaoHang',
      component: DaoHang
    }
  ]
})
