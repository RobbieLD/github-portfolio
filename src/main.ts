import 'babel-polyfill';
import 'es6-promise/auto';
import 'whatwg-fetch';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueTimeago from 'vue-timeago';
import { store } from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faStar,
  faCodeBranch,
  faCalendarAlt,
  faUsers,
  faTag,
  faUpload,
  faDesktop,
  faSquare,
  faCircle,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  faStackOverflow,
  faTwitter,
  faNpm,
  faBitbucket,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
    faStar,
    faCodeBranch,
    faCalendarAlt,
    faUsers,
    faTag,
    faUpload,
    faDesktop,
    faStackOverflow,
    faTwitter,
    faNpm,
    faSquare,
    faCircle,
    faBitbucket,
    faGithub,
    faMapMarkerAlt,
  );
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Import all the sass
import './assets/app.scss';

Vue.config.productionTip = false;

Vue.use(VueTimeago, {
  name: 'timeago',
  locale: navigator.language,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
