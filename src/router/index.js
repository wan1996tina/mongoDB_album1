import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      login: false,
      title: '線上相簿'
    }
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue'),
    meta: {
      login: false,
      title: '線上相簿 | 註冊'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      login: false,
      title: '線上相簿 | 登入'
    }
  },
  {
    path: '/album',
    name: 'Album',
    // 在 npm run dev 的時候，告訴 nodemon 要重啟的檔案名稱 ? ，是有意義的註解
    component: () => import(/* webpackChunkName: "album" */ '../views/Album.vue'),
    meta: {
      login: true
      // 想要名稱顯示是誰的相簿，不能寫在這裡，因為vuex在一進入頁面的時候就進行名稱更新，但那時使用者還未登入，所以會變成undefined的相簿，應該寫在那個頁面裡
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login && !store.state.user) {
    next('/login')
  } else {
    next()
  }
})

// store >> vuex 用來儲存頁面狀態的地方
router.afterEach((to, from) => {
  // 如果 to.name(去的頁面的名稱) 是 Album ，就加上 user name ( 顯示 XXX 的相簿 ) ，如果不是，那就還是原本的名稱
  // 因為要改名字的只有 Album 頁面，其他頁不用
  document.title = (to.name !== 'Album') ? to.meta.title : store.state.user + ' 的相簿'

  // if(to.name !== 'Album') document.title = to.meta.title
  // else document.title = store.state.user + ' 的相簿'
})

export default router
