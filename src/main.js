import { createApp } from 'vue'
import App from './App.vue'

// Tailwind CSS
import "./assets/stylesheets/tailwind.css";

// Vue Router
import router from "@/routers/index";

// Vuex
import store from "@/store/index";

// echarts
import VChart from 'vue-echarts';

// viewport.js -
import viewport from "@/assets/script/viewport";

const app = createApp(App)
app.provide('viewport', viewport)
app.component('v-chart', VChart)
app.use(router)
app.use(store)
app.mount('#app')
