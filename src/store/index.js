import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    login (state, data) {
      // 登入 >> 讓 user = data
      state.user = data
    },
    logout (state) {
      // 登出 >> 讓 user 清空
      state.user = ''
    }
  },
  getters: {
    // 呼叫後可以取得 user 名稱的 func
    user (state) {
      return state.user
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
