import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import Home from '@/components/Main/Home'
import Series from '@/components/Main/Novel/Series'
import Finder from '@/components/Main/Novel/Finder'
import SignUp from '@/components/Main/User/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        { path: '/', component: Home },
        { path: '/series', component: Series },
        { path: '/finder', component: Finder },
        { path: '/signup', component: SignUp }
      ]
    }
  ],
  mode: 'history'
})
