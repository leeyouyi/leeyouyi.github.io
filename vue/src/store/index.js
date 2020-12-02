import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)

const types = {
  LOGIN: 'LOGIN',
  MASK: 'MASK'
}
export default new Vuex.Store({
  state: {
    login: false,
    mask: false
  },
  mutations: {
    // 在 mutation 改變 state（只有 mutation 可以改變！）
    [types.LOGIN] (state, payload) {
      state.login = payload
    },
    [types.MASK] (state, payload) {
      state.mask = payload
    }
  },
  actions: {
    actionLogin: ({ commit }, val) => {
      commit(types.LOGIN, val)
    },
    actionMask: ({ commit }, val) => {
      commit(types.MASK, val)
    }
  },
  modules: {
    user
  }
})
