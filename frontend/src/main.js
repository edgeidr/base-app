import lodash from 'lodash';
import axios from 'axios';

import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import router from './router/router.js';

import './assets/scss/styles.scss';
import VueuseDirectives from './plugins/vueuse-directives.js';
import App from './App.vue';

window._ = lodash;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = ' XMLHttpRequest';
window.axios.defaults.withCredentials = true;
window.axios.defaults.baseURL = `${import.meta.env.VITE_API_BASE_URL}/api`;

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
	store.router = markRaw(router);
});

app.use(router);
app.use(pinia);
app.use(VueuseDirectives);
app.mount('#app');
