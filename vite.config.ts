import { defineConfig } from "vite";  // 导入 Vite 的配置函数
import vue from "@vitejs/plugin-vue";  // 导入 Vue 官方 Vite 插件，用于处理 .vue 文件
// @ts-expect-error  // TypeScript 类型检查忽略，因为该模块可能没有类型定义
import Components from "unplugin-vue-components/vite";  // 导入 unplugin-vue-components 插件，用于按需自动导入组件
// @ts-expect-error  // TypeScript 类型检查忽略，因为该模块可能没有类型定义
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";  // 导入 Ant Design Vue 组件库的自动导入解析器
// @ts-expect-error  // TypeScript 类型检查忽略，因为该模块可能没有类型定义
import { chromeExtension } from "./build/chromeExtension";  // 导入自定义的 Chrome 扩展构建插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),  // Vue 插件，用于编译和处理 Vue 单文件组件
    // 按需加载 ant-design-vue
    Components({
      resolvers: [AntDesignVueResolver()],  // 配置组件解析器，自动按需导入 Ant Design Vue 组件
    }),
    process.env.BUILD_CRX && chromeExtension(),  // 条件性地添加 Chrome 扩展插件，仅在 BUILD_CRX 环境变量为真时启用
  ].filter(Boolean),  // 过滤掉 falsy 值，确保插件数组中只包含有效的插件
});
