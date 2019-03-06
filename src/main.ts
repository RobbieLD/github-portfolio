import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Import all the sass
import './assets/app.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
