<template>
  <div id="app">
    <Container />
  </div>
</template>

<script>
import Container from './pages/Container'
export default {
  name: 'App',
  components: {
    Container,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
