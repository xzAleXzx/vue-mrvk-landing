import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import './assets/styles/styles.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
