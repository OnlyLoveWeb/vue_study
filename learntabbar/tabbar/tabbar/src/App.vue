<template>
  <div id="app">
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -3px 10px rgba(100,100,100, 0.2);
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
</style>
