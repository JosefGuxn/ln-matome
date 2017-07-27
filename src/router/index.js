import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import Home from '@/components/Main/Home'
import Novels from '@/components/Main/Novel/Novels'
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
        { path: '/novels', component: Novels },
        { path: '/finder', component: Finder },
        { path: '/signup', component: SignUp }
      ]
    }
  ],
  mode: 'history'
})
