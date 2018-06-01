import routes from './routes.js';
import contents from './webComponents/contents.vue';
import headers from './webComponents/headers.vue';
import footers from './webComponents/footers.vue';

Vue.config.devtools = true;

Vue.use(VueRouter);

const components = {
  contents,
  headers,
  footers,
};

function install(Vue) {
  Object.keys(components).forEach((value)=>{
    Vue.component(value, components[value]);
  });
}

install(Vue);

let router = new VueRouter({
  routes,
});

new Vue({
  router,
}).$mount('#app');
