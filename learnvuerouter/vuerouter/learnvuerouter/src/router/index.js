import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import HomeNews from '../components/HomeNews.vue'
import HomeMessage from '../components/HomeMessage.vue'
import User from '../components/User.vue'
const Profile = () => import('../components/Profile.vue')
const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '主页'
      },
      children: [
        // {
        //   path: '',
        //   redirect: 'news',
          
        // },
        {
          path: 'news',
          component: HomeNews,
        },
        {
          path: 'message',
          component: HomeMessage,
          meta: {
            title: '消息'
          }
        }
      ]
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/user/:userId',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        title: '我的'
      }
    }
  ],
  mode: 'history'
})
console.log(router)
router.beforeEach((to, from, next) => {
  console.log(to)
  next(); 
  document.title = to.matched[0].meta.title
})
export default router
