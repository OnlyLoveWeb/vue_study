import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

 
const state = {
  count: 100,
  students: [
    {id: 110, name: 'zhan', age: 18},
    {id: 110, name: 'wang', age: 24},
    {id: 110, name: 'li', age: 30},
    {id: 110, name: 'yang', age: 10}
  ],
  info: {
    name: 'zhu',
    age: 20,
    height: 1.88
  }
}



const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA
  }
})

export default store