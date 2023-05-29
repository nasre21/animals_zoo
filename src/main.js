import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import bootstrap
import * as bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App, bootstrap).use(router).mount('#app')




