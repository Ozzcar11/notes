import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { layouts } from './plugins/layouts'

const app = createApp(App)

import './assets/styles/main.scss'

app
  .use(router)
  .use(layouts)
  .mount('#app')
