import Vue  from 'vue'
import Vuex  from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    error: {
      list: []
    },
    count: 0,
    isLoading: false,
  },
  mutations: {
    startLoading (state) {
      // mutations 必须是同步的，可以通过 store.commit 触发
      state.isLoading = true
    },
    finishLoading (state) {
      state.isLoading = false
    },
    addError (state, payload) {
      state.error.list.push(payload.error)
    },
    minusError (state, payload) {
      let i
      state.error.list.forEach((item,o) => {
        if(item.requestId === payload.error.requestId) {
          i = o
        }
      })
      state.error.list.splice(i, 1)
    },
    increment (state) {
      state.count++
    }
  },
  actions: {
    startLoading ({ commit }) {
      // 这里可以写异步呦，action必须通过dispatch触发
      commit('startLoading')
    }
  }
})

export default store