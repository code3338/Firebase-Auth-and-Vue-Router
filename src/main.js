import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./router"
import VueFire from "vuefire"
/*Don't foreget to install vuefire in command line
Also need to set secruity rules to true, so can acces the database.*/
// npm install vue firebase
//  vuefire --save
/*Go to database, rules tab, and change read and write to both true, and then select publish, should now be able to see the data.
firebase runs on a backend server for us, so don't have to open up back end.*/
Vue.use(VueRouter);
Vue.use(VueFire);

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
