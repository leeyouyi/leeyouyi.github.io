import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  LIST: 'LIST',
}

export default new Vuex.Store({
  state: {
    list:{
      title:'',
      src:''
    }
  },
  mutations: {
    [types.LIST](state,payload){
      state.list = payload
    }
  },
  actions: {
    list: (({commit},val)=>{
      commit(types.LIST,val)
    })
  },
  modules: {
  }
})
