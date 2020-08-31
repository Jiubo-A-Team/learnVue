import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import ws from '@/components/ws/ws'
import QRcode from '@/components/ws/QRcode'
import yy from '@/components/yy/yy'
import lm from '@/components/lm/lm'
import far from '@/components/far/far'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '/ws/ws',
          name: 'ws',
          component: ws
        },
        {
          path: '/ws/QRcode',
          name: 'QRcode',
          component: QRcode
        },
        {
          path: '/yy/yy',
          name: 'yy',
          component: yy
        },
        {
          path: '/lm/lm',
          name: 'lm',
          component: lm
        },
        {
          path: '/far/far',
          name: 'far',
          component: far
        }
      ],
      redirect: '/ws/ws'
    }

  ],
  //mode: "history"//干掉地址栏里边的#号键
})
