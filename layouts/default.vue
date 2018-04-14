<template>
  <div id="app">
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 border-bottom box-shadow header-navbar">
        <h5 class="my-0 mr-md-auto font-weight-normal">
          <router-link :to="{ name: 'index'}" class="navbar-brand d-flex align-items-center">
            <img src="/images/logo.png" class="img-fluid" style="width:150px;" alt="">
          </router-link>
        </h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <router-link :to="{ name: 'about', params: {} }">About</router-link> &nbsp; &nbsp; | &nbsp; &nbsp;
          <a href="https://github.com/builtforvue/ui" target="_blank">Github</a> &nbsp; &nbsp; |&nbsp; &nbsp;
          <a href="https://discord.gg/PKB9mHq" target="_blank">Discord</a> &nbsp; &nbsp; |&nbsp; &nbsp;
          <router-link :to="{ name: 'support', params: {} }">Support Us</router-link>
        </nav>
      </div>
    </header>
    <main role="main">
      <nuxt/>
    </main>
    <footer class="footer navbar fixed-bottom" v-cloak>
      <div class="container">
        <div class="row">
          <div class="col text-white justify-content-center">
            <div class="text-center small">Copyright &copy; 2018 Builtforvue.com</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
