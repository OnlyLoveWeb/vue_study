<template>
  <div>
    <div>
    <h2 class="color">我是一名前端工程师</h2>
    <button>按钮</button>
    </div>
    <cpn/>
  </div>
</template>

<script>
import cpn from './Cpn.vue'
export default {
  name: 'app',
  components: {
    cpn
    },
  data() {
    return {
      message: 'hello'
    }
  },
  methods: {
    btnClick() {

    }
  }
}
</script>

<style scoped>
  .color {
    color: green;
    }
</style>
