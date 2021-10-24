<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
    {{$store.state.isLoading ? '加载中。。。' : '请求完成'}}
    <div v-for="(item, i) in $store.state.error.list" :key="i">
      {{i}}ErrorList
    </div>
  </div>
</template>

<script>
  import HelloWorld from "../../components/HelloWorld";

  export default {
    components: {
      HelloWorld,
    },
    mounted() {
      console.log('store',this.$store.state)
    }
  }
</script>