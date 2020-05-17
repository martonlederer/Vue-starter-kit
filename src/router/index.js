import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/pages/NotFound'
import HelloWorld from '@/pages/HelloWorld'

Vue.use(Router)

export default new Router({

  mode: 'history',
  routes: [

    {

      path: '/',
      name: 'HelloWorld',
      component: HelloWorld

    },

    //404 routes. Must be at the end of the routes array
    {

      path: '/404',
      name: 'NotFound',
      component: NotFound

    },
    {

      path: '*',
      name: 'NotFound',
      component: NotFound

    }

  ]

})
