import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { layouts } from './plugins/layouts'

import "./assets/styles/index.scss"

const app = createApp(App)

app
  .use(router)
  .use(layouts)
  .mount('#app')
