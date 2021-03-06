import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {library} from '@fortawesome/fontawesome-svg-core';
import { faVuejs, faUikit, faLess, faLaravel, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faVuejs, faUikit, faLess, faLaravel, faDocker, faDatabase, faBars);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
