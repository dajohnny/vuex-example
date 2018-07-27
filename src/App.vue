<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="nav-warp">
      <router-link to="/home" tag="span"> home </router-link>
      <router-link to="/personal/info" tag="span"> personal-info </router-link>
      <router-link to="/personal/project" tag="span"> personal-project </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
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

<style land="scss">
  #app {
    color: red;
  }

  .nav-warp {
    width: 400px;
    text-align: center;
  }

  .nav-warp span {
    text-align: center;
    height: 30px;
    padding: 10px 20px;
    border-radius: 10px;
    background: #ededed;
    margin-left: 10px;
  }
</style>
