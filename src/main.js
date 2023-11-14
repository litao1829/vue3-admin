import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installDirective from '@/directives'

// 导入全局样式
import './styles/index.scss'
// 导入 svgIcon
import installIcons from '@/icons'
import './permission'
// 导入 i18n
import i18n from './i18n'
// filter
import installFilter from '@/filter'

const app = createApp(App)
installDirective(app)
installElementPlus(app)
installIcons(app)
installFilter(app)
app.use(store).use(router).use(i18n).mount('#app')
