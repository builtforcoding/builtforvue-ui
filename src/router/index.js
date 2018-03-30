import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import About from '@/components/Static/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:author/:repo',
      name: 'Detail',
      component: Detail
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
