<template>
  <div id="app">
    <div class="main">
      <header-nav></header-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from './components/header'
// import sideBar from './components/sideBar'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    headerNav: header,
    // sideBar:sideBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left:-8px;
  .main{
    padding-top:31px;
  }
}
</style>
