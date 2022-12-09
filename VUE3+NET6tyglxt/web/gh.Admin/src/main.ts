
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//该文件导入ElementUI-pLUS
import ElementPlus from 'element-plus'
//导入ElementUI-pLUS样式
import 'element-plus/dist/index.css'
//该文件为全局导入
createApp(App)
.use(ElementPlus)
.mount('#app')
