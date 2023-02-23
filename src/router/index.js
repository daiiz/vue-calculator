import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import Calculator1 from '@/components/Calculator1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/calc1',
      name: 'Calc1',
      component: Calculator1
    }
  ]
})
