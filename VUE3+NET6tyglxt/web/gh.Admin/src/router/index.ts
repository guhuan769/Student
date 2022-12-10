import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../view/index/LoginPage.vue'
// import LoveFower from "/views/LoveFlower.vue"
//此处为路由用于http导航
const router = createRouter({
history:createWebHistory(),
routes:
[
    {
        path:'/login',component:LoginPage
    },
]
})
export default router