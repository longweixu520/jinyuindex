/**
 * 应用入口文件
 * 负责初始化 Vue 应用并配置各种插件
 */

// 导入 Vue 3 应用创建函数
import { createApp } from 'vue'
// 导入 Pinia 状态管理库
import { createPinia } from 'pinia'
// 导入 Ant Design Vue 组件库
import Antd from 'ant-design-vue'
// 导入 Ant Design Vue 的样式重置文件
import 'ant-design-vue/dist/reset.css'

// 导入根组件
import App from './App.vue'
// 导入路由配置
import router from './router'

// 创建 Vue 应用实例
const app = createApp(App)

// 注册 Pinia 状态管理插件
app.use(createPinia())
// 注册 Vue Router 路由插件
app.use(router)
// 注册 Ant Design Vue 组件库
app.use(Antd)

// 将应用挂载到 DOM 元素上
app.mount('#app')