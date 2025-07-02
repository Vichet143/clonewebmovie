import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './route'
import { createPinia } from 'pinia'
import "vanilla-hcaptcha";

const app = createApp(App)

app.config.compilerOptions.isCustomElement = tag => ['h-captcha'].includes(tag)

const pinia = createPinia()
app.use(pinia)
app.use(Router)
app.mount('#app')
