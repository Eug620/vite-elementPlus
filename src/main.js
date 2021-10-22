import { createApp } from 'vue'
import '/@/assets/styles/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import { usePlugins } from './plugin/index.js'

const app = createApp(App)

app.use(ElementPlus)
usePlugins(app)
app.mount('#app')
