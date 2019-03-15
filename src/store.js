import Vue from 'vue'
import Vuex from 'vuex'
import {Utils} from'./mixins/utils.js'

Vue.mixin(Utils)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	token : false,
    member : false,
  },
  mutations: {
  	setToken(state, token){
  		state.token = token
  	},
    setMember(state, member){
      state.member = member
    },
  	initialiseStore(state) {
      if(localStorage.getItem('store')) {
          this.replaceState(
              Object.assign(state, JSON.parse(localStorage.getItem('store')))
          );
      }
    }
  },
  actions: {

  }
})
