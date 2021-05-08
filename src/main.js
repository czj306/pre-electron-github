/*
 * @Author: czj
 * @Date: 2021-05-08 11:32:25
 * @LastEditors: czj
 * @LastEditTime: 2021-05-08 16:23:02
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import _ from "lodash"
import 'materialize-css/dist/css/materialize.min.css'

const app = createApp(App)

app.config.globalProperties.$_ = _

app.mount('#app')
