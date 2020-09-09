<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <h2>{{$store.state.count}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">添加学生</button>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改info</button>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="changeName('yongshen')">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncChangeName">修改模块中的名字</button>

    <h2>----------APP内容：getters相关信息---------</h2>
    <h2>{{$store.getters.say}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(25)}}</h2>

    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {
  INCREMENT
} from './store/mutation-type.js'
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // 1、普通的提交方式
      // this.$store.commit('incrementCount', count)
      // 2、另一种提交方式
      this.$store.commit({
        type: 'incrementCount',
        count: count
      })
    },
    addStu() {
      const stu = {id: 114, name: 'sun', age: 26};
      this.$store.commit('addStudent', stu) 
    },
    updateInfo() {
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('里面已经完成了');
      //   }
      // })
      this.$store
      .dispatch('aUpdateInfo', '我是携带的信息')
      .then(res => {
        console.log('里面完成了提交')
        console.log(res)
      })
    },
    changeName(name) {
      this.$store.commit('updateName', name)
    },
    asyncChangeName() {
      this.$store.dispatch('aChangeName')
    }
  }
}
</script>

<style>

</style>
