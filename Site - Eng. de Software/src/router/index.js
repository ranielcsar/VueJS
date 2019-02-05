import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import caixinha from '@/components/caixinha'
import sobre from '@/components/sobre'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    {
    	path: '/caixinha',
    	name: 'caixinha',
    	component: caixinha
    },

    {
    	path: '/sobre',
    	name: 'sobre',
    	component: sobre
    }
  ]
})
