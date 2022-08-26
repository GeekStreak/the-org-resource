require('./bootstrap');

import { createApp, onMounted } from 'vue'
//import App from './layouts/App'
import LaravelVuePagination from 'laravel-vue-pagination';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from './routes/index'
//import Login from './components/Login.vue'

const app = createApp({
})
app.use(router)
app.use(VueSweetalert2)
app.component('Pagination', LaravelVuePagination)
app.mount('#app')
