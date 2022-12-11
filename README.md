# VUE-NET6-EF  
学习地址 :https://www.bilibili.com/video/BV1Pv4y1375c/?p=3&spm_id_from=pageDriver&vd_source=d8a4c09db5e33f3ebcb6438e6fe66cd7  P17未  
## 目录  
[安装环境VSCODE](#安装环境VSCODE)   
*   [1.VUE安装图标](#1.VUE安装图标)  

[使用VUE快速构建项目](#使用VUE快速构建项目)  
[VUE项目目录解析](#VUE项目目录解析)  
[Element-Plus框架的安装与使用](#Element-Plus框架的安装与使用)  
[路由的配置与使用](#路由的配置与使用)  
[VUEX的使用](#VUEX的使用)  
[EChartsVUE使用](#EChartsVUE使用)  
# 安装环境VSCODE  
![image](https://user-images.githubusercontent.com/46043439/206680917-80774d0a-67f4-4263-b387-406380b5631c.png)  
 检测NODEJS是否安装好 window+R打开CMD 输入命令 node --version 即可
 
*  #  1.VUE安装图标
 https://element-plus.gitee.io/zh-CN/component/icon.html#%E5%AE%89%E8%A3%85  
# 使用VUE快速构建项目  
1 vue demo create   
2 npm npm init vite@latest gh.admin  注意该语法最好用小写不然会报错  
1 与 2的区别 比如 官方的方法需要10秒 2NPM只需要2秒   
提示这个界面就算安装成功了  
![image](https://user-images.githubusercontent.com/46043439/206691909-71178ea5-f751-41e5-ba85-dd25bdb1e3c7.png)  

1 2   
2 进入到项目文件夹 gh.admin  
3 初始化 npm install  
4 完成  
常用命令 使用cmd进入项目文件夹gh.admin内然后输入该命令   npm run dev 启动项目 如果项目安装了 Pnpm 那么启动项目命令就可以简化成 pnpm dev即可

PNPM  
![image](https://user-images.githubusercontent.com/46043439/206694840-6c022c0b-d0de-4fee-a950-ed7e212d40e3.png)  
安装pnpm 打开CMD 输入 npm install -g pnpm  查看版本  pnpm --version
SCSS(用来写样式的)  SCSS的安装命令 pnpm install sass --save  
前台框架
Element Plus 基于VUE3 面向设计师和开发者组件库(https://element-plus.gitee.io/zh-CN)  
# VUE项目目录解析
![image](https://user-images.githubusercontent.com/46043439/206694135-3e320e4c-e7df-460a-bf23-a4dbfacaa7cc.png)

# Element-Plus框架的安装与使用
![image](https://user-images.githubusercontent.com/46043439/206699533-464840bf-0e53-44d5-afba-31a026047567.png)
安装命令  pnpm install element-plus --save  
# 路由的配置与使用
![image](https://user-images.githubusercontent.com/46043439/206701686-93986a3f-d8f8-4e20-a722-d58c7d6d298f.png)   

```
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "/views/HomePage.vue"
import LoveFower from "/views/LoveFlower.vue"
const router = createRouter({
history:createWebHistory(),
routes:[{path:'/',component:HomePage},
{path:'/loveflower',component:LoveFower}]
})
export default router
```
# VUEX的使用  

vuex其实就是用来做状态管理  那么状态管理究竟是什么呢 比如登录的时候就给在线状态 退出系统就下线或者情况  状态存储在哪里呢 状态存储在VUEX里  为了持久化不仅在VUEX里有本地也是有存储的 总结2方面一是存储在浏览器里 或者状态管理(vuex)  
VUEX安装命令  

```  
pnpm install vuex@netx --save  
```
![image](https://user-images.githubusercontent.com/46043439/206839141-f367756e-0fe8-467d-b586-995a26ab4606.png)

# EChartsVUE使用 
1 https://echarts.apache.org/handbook/zh/basics/download  
