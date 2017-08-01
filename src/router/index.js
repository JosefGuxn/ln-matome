import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import Reader from '@/components/Reader/Reader'
import Home from '@/components/Main/Home'
import Novels from '@/components/Main/Novel/Novels'
import Series from '@/components/Main/Novel/Series'
import AddSeries from '@/components/Main/Novel/AddSeries'
import AddRelease from '@/components/Main/Novel/AddRelease'
import Finder from '@/components/Main/Novel/Finder'
import SignUp from '@/components/Main/User/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        { path: '/', component: Home },
        { path: 'novels', component: Novels },
        { path: 'series/:seriesId', component: Series },
        { path: 'series/:seriesId/addrelease', component: AddRelease },
        { path: 'addseries', component: AddSeries },
        { path: 'finder', component: Finder },
        { path: 'signup', component: SignUp }
      ]
    },
    {
      path: '/reader/:chapterId',
      name: 'Reader',
      component: Reader
    }
  ],
  mode: 'history'
})
