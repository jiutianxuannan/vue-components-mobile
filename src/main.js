import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './route';
import Mint from './index';
import './style/index.css'

Vue.use(Mint)
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  base: __dirname,
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});
