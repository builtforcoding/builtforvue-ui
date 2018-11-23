<template>
  <div id="app">
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 border-bottom box-shadow header-navbar">
        <h5 class="my-0 mr-md-auto font-weight-normal">
          <router-link :to="{ name: 'index'}" class="navbar-brand d-flex align-items-center">
            <img src="/images/logo.png" class="img-fluid" style="width:150px;" alt="BuiltForVue Logo" title="BuiltForVue Logo">
          </router-link>
        </h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <router-link :to="{ name: 'about', params: {} }">About</router-link> &nbsp; &nbsp; | &nbsp; &nbsp;
          <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Ecosystem
          </a>  &nbsp; &nbsp; |&nbsp; &nbsp;
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://www.builtforcoding.com" target="_blank"> <i class="fa fa-circle fa-xs text-success"></i> &nbsp;&nbsp; Built For Coding</a>
            <a class="dropdown-item" href="https://www.builtforreact.com" target="_blank"><i class="fa fa-circle fa-xs text-success"></i> &nbsp;&nbsp; Built For React</a>
            <a class="dropdown-item" href="javascript:void(0)" target="_blank"><i class="fa fa-circle fa-xs text-warning"></i> &nbsp;&nbsp; Built For Aurelia</a>
            <a class="dropdown-item" href="javascript:void(0)" target="_blank"><i class="fa fa-circle fa-xs text-danger"></i> &nbsp;&nbsp; Built For Laravel</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="javascript:void(0)" target="_blank"><i class="fa fa-circle fa-xs text-danger"></i> &nbsp;&nbsp; Requests</a>
            <a class="dropdown-item" href="https://github.com/builtforvue/ui" target="_blank">Github</a>
            <a class="dropdown-item" href="https://discord.gg/PKB9mHq" target="_blank">Discord</a>
          </div>
          <router-link :to="{ name: 'support', params: {} }">Support Us</router-link>
        </nav>
      </div>
    </header>
    <main role="main">
      <nuxt/>
    </main>
    <footer class="footer navbar fixed-bottom" v-cloak>
      <div class="container">
          <div class="d-flex flex-fill text-white">
            <p class="text-left small">Copyright &copy; 2018 Builtforcoding.com</p>
            <p class="float-right small ml-3">Made with <i class="fa fa-heart text-success heart-beat ml-1"></i></p>
          </div>
      </div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous"></script>
  </div>
</template>

<style>
.heart-beat {
  animation: beat 0.75s infinite alternate;
}
/* Heart beat animation */
@keyframes beat {
  to {
    transform: scale(1.4);
  }
}
</style>
