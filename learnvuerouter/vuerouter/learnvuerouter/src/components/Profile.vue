<template>
 <div>
   <h2>我是档案</h2>
   <P>我是档案内容，嘻嘻嘻</P>
   <h2>{{$route.query.name}}</h2>
   <h2>{{$route.query}}</h2>
 </div>
</template>

<script>
 export default {
   name: 'Profile',
   data () {
     return {

     }
   },
   created() {
     console.log('profile created')
   },
   destroyed() {
     console.log('profile destroyed')
   }
 }
</script>

<style>

 
</style>
