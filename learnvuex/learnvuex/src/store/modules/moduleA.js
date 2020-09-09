export default {
  state: {
    name: 'zhanyong'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + '111'
    },
    fullName2(state, getters) {
      return getters.fullName + '222'
    },
    fullName3(state,getters,rootState) {
      return getters.fullName2 + rootState.count
    }
  },
  actions: {
    aChangeName(context) {
      setTimeout(() => {
        console.log(context)
        context.commit('updateName', 'haha')
      }, 1000)
    }
  }
}