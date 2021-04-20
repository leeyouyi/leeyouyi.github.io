import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  LIST: 'LIST',
  LOGIN: 'LOGIN'
}

export default new Vuex.Store({
  state: {
    list:{
      title:'',
      src:''
    },
    login: false
  },
  mutations: {
    [types.LIST](state,payload){
      state.list = payload
    },
    [types.LOGIN](state,payload){
      state.login = payload
    }
  },
  actions: {
    list: (({commit}, val)=>{
      commit(types.LIST,val)
    }),
    login: (({commit}, val)=>{
      commit(types.LOGIN, val)
    }),
  },

})
