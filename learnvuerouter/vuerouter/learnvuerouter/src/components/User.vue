<template>
 <div>
   <h2>我是用户</h2>
   <p>我是用户，哼哼哼</p>
   <h2>{{userId}}</h2>
   <button @click="btnClick">按钮</button>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   computed: {
     userId() {
       return this.$route.params.userId
     }
   },
   created() {
     console.log('user created')
   },
   destroyed() {
     console.log('user destroyed')
   },
   components: {

   },
   methods: {
     btnClick() {
       console.log(this.$router)
     }
   }
 }
</script>

<style>

 
</style>
