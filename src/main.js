import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {Utils} from'./mixins/utils.js'

Vue.mixin(Utils)

store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state));
});

Vue.config.productionTip = false

window.axios = axios.create({
	baseURL: 'http://coop.api.netlor.fr/api',
	params : {
		token : false 
	}, 
	headers: { 
		Authorization: 'Token token=4012bf712ae943fa8b4d9aba70a8c78c' 
	} 
});

new Vue({
  router,
  store,
  beforeCreate() {
  	this.$store.commit('initialiseStore');
  },
  render: h => h(App)
}).$mount('#app')
