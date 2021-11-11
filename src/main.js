import { createApp } from 'vue'
import '/@/assets/styles/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '/@/router'
import { pinia } from './store/index.js'
import { usePlugins } from './plugin/index.js'
import 'intro.js/introjs.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(pinia)
app.use(router)
usePlugins(app)
app.mount('#app')
