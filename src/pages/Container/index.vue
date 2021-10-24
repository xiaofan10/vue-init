<template>
  <Container style="height: 100%;">
    <Aside width="300px" style="background: #ccc;">
      <h5>Element UI</h5>
      <Menu default-active="/page1"></Menu>
    </Aside>
    <Main>
      <router-view></router-view>
    </Main>
  </Container>
</template>

<script>
  import {
    Container,
    Aside,
    Main,
  } from 'element-ui'

  import Menu from '../Menu'
  export default {
    components: {
      Container,
      Aside,
      Main,
      Menu,
    }
  }
</script>

<style scoped>
</style>