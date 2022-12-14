import App from '@/App.vue'
import router from '@/router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import dayjs from 'dayjs'
import jsonp from '@/http/jsonp'
import { formatDate } from '@/utils'
import directive from '@/utils/directive'

// 默哀的全局灰色
// import "@/assets/gray.less"
import '@/assets/base.less'
import '@/assets/main.less'

const Vue = createApp(App)

Vue.config.globalProperties.GetEnv = import.meta.env
Vue.config.globalProperties.formatDate = formatDate
Vue.config.globalProperties.Dayjs = dayjs
Vue.config.globalProperties.Jsonp = jsonp

Vue.use(createPinia())
Vue.use(router)
Vue.use(directive)

Vue.mount('#app')
