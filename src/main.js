import '@/styles/common.scss'
// import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { getCategoryAPI } from './apis/testApi'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)


getCategoryAPI().then(res => {
    console.log(res)
})

app.mount('#app')
