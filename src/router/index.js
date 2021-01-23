import Vue from "vue"
import VueRouter from "vue-router"
import Login from "../views/Login.vue"
import Profile from "../views/Profile.vue"
import store from "../store/index.js"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/profile",
      component: Profile,
      meta: {requiresAuth: true}, //ログイン認証が必要なページ
    },
    {
      path: "/",
      meta: {requiresAuth: true}, //ログイン認証が必要なページ
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) { //ログイン状態でなかったら
      next({
        path: "/login", //ログインページにリダイレクト
        query: {
          redirect: to.fullPath,
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
