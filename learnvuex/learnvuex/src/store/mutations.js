import {INCREMENT} from './mutation-type'

export default {
   
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
  
}