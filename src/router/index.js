import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/home'
import Business from '@/components/business/business'
import Personal from '@/components/personal/personal'
import PersonalInfo from '@/components/personal/info'
import PersonalPerject from '@/components/personal/perject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/personal',
      component: Personal,
      children: [
        {
          path: 'info',
          component: PersonalInfo
        },
        {
          path: 'info/:infoId',
          component: PersonalInfo,
          name: 'info'
        },
        {
          path: 'project',
          name: 'project',
          component: PersonalPerject
        }
      ]
    },
    {
      path: '/business',
      name: 'business',
      component: Business
    }
  ]
})
