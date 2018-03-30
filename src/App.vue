<template>
  <div id="app">
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 border-bottom box-shadow header-navbar">
        <h5 class="my-0 mr-md-auto font-weight-normal">
          <router-link :to="{ name: 'Home'}" class="navbar-brand d-flex align-items-center">
            <img src="/static/images/logo.png" class="img-fluid" style="width:150px;" alt="">
          </router-link>
        </h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <router-link :to="{ name: 'About', params: {} }">About</router-link> &nbsp; &nbsp; | &nbsp; &nbsp;
          <a href="https://github.com/builtforvue/ui" target="_blank">Github</a> &nbsp; &nbsp; |&nbsp; &nbsp;
          <a href="https://discord.gg/PKB9mHq" target="_blank">Discord</a> &nbsp; &nbsp; |&nbsp; &nbsp;
          <a href="https://www.buymeacoffee.com/G5hRfqkwd" target="_blank">Buy me a coffee!</a>
        </nav>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
