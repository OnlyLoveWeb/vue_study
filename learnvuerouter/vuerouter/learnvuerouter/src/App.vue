<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/home" replace>主页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link v-bind:to="'/user/'+ userId" replace>用户</router-link>
    <!-- <router-link :to="{path: '/profile', query: {name: 'shen',
    year: '25', height: '1.80'}}" replace>我的</router-link> -->
    <button @click="profileClick">我的</button>
    
    <keep-alive exclude="Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    profileClick() {
     this.$router.push({
       path: '/profile',
       query: {
         name: 'shen',
         year: '24',
         height: '1.80'
       }
     })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
