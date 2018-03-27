<template>
  <div id="app">
    <header>
      <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">About</h4>
              <p class="text-muted">BuiltforVue provides a mirror for vue projects available on NPM. It provides useful stats for all the vue projects to help choose the right package for your project. BuiltforVue looks up all projects on NPM has the keyword <strong>vue</strong> and that have not been depcrecated and makes it available here.</p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Contact</h4>
              <ul class="list-unstyled">
                <li><a href="https://github.com/builtforvue/ui" class="text-white">Star our Repo</a></li>
                <!-- <li><a href="#" class="text-white">Buy me a coffee</a></li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
          <router-link :to="{ name: 'Home'}" class="navbar-brand d-flex align-items-center">
            <img src="/static/images/logo.png" class="img-fluid" style="width:150px;" alt="">
          </router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
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
