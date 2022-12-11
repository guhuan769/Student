import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../view/index/LoginPage.vue'
//导入main页面的路由
import RootPage from '../view/index/RootPage.vue'
//导入DeskTop页面 
import DeskTop from '../view/index/DeskTop.vue'

import PersonCenter from '../view/index/PersonCenter.vue'
import Menumanager from '../View/admin/menu/Menumanager.vue'
// import LoveFower from "/views/LoveFlower.vue"
//此处为路由用于http导航
const router = createRouter({
    history: createWebHistory(),
    routes:
        [{
            path: '/', component: RootPage,
            //嵌套路由 说白了就是将子页面嵌入到主页面里面  
            children: [
                {
                    name: "工作台", path: "/desktop", component: DeskTop
                },
                {
                    name: "个人信息", path: "/person", component: PersonCenter
                }
                ,
                {
                    name: "菜单管理", path: "/menuMnager", component: Menumanager
                }
            ]
        },
        {
            path: '/login', component: LoginPage
        },
        ]
})
export default router