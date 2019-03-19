import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import caixinha from '../components/caixinha'
import sobre from '../components/sobre'
import telaLogin from '../components/telaLogin'
import telaCadastro from '../components/telaCadastro'

Vue.use(Router);

export default new Router({

  linkActiveClass: 'active',
  mode: 'history',

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
    },

    {
      path: '/telaLogin',
      name: 'login',
      component: telaLogin
    },

    {
      path: '/telaCadastro',
      name: 'telaCadastro',
      component: telaCadastro
    }
  ]
});
