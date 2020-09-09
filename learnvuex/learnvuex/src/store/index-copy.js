import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutation-type.js'
Vue.use(Vuex)

const moduleA = {
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
const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    [INCREMENT](state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    // 1、对应普通的提交方式
    // incrementCount(state, count) {
    //   state.count += count
    // }
    // 2、对应另一种提交方式
    incrementCount(state, payload) {
      state.count += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    update(state) {
      // setTimeout(() => {
      //   state.info.name = 'qian'
      // }, 1000)
      state.info.name = 'qian'
      // Vue.set(state.info, 'address', 'beijing')
      // Vue.delete(state.info, 'name')
    }
  },
  getters: {
     say(state) {
       return state.count * state.count
     },
     more20stu(state) {
       return state.students.filter(s => s.age > 20)
     },
     more20stuLength(state, getters) {
       return getters.more20stu.length
     },
     moreAgeStu(state) {
       return function (age) {
         return state.students.filter(s => s.age > age)
       }
     }
  },
  actions: {
    // aUpdateInfo(context, payload) {
    //   setTimeout( () => {
    //     context.commit('update')
    //     console.log(payload.message)
    //     payload.success()
    //   }, 1000)
    // }
    aUpdateInfo(context, payload) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            context.commit('update')
            console.log(payload)
            resolve()
          }, 1000)
        })
      }
  },
  modules: {
    a: moduleA
  }
})

export default store