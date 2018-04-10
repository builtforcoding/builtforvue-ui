<template>
  <main role="main">
    <ais-index :app-id="appId" :api-key="appKey" :index-name="indexName">
      <section class="jumbotron text-center">
        <div class="container search-container">
          <ais-search-box :autofocus="true" placeholder="Find a Vue Project...">
            <div class="form-group mx-sm-8">
              <h1 class="title"> Search for a Vue Package</h1>
              <ais-input placeholder="Search a Vue Project..." :classNames="{'ais-input': 'form-control form-control-lg'}" />
              <div style="margin-top: 10px; float:right;">
                <!-- <ais-powered-by :classNames="{'ais-powered-by':'justify-content-right'}"></ais-powered-by> -->
              </div>
            </div>
          </ais-search-box>
          <!-- <top-category-refinement-list attribute-name="keywords"></top-category-refinement-list> -->
        </div>
      </section>
      <div class="container result-container">
        <ais-results>
          <template slot-scope="{ result }">
            <result :result="result"></result>
          </template>
        </ais-results>
      </div>
      <div class="container mt-5">
        <ais-pagination :classNames="{'ais-pagination': 'pagination justify-content-center pagination-lg', 'ais-pagination__item': 'page-item', 'ais-pagination__link':'page-link'}"  v-on:page-change="onPageChange"></ais-pagination>
      </div>
    </ais-index>
  </main>
</template>
<script>
import Result from '../components/Common/Result'
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import TopCategoryRefinementList from '../components/Home/RefinementList'


Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease-in',
  offset: 0,
  cancelable: false,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

export default {
  components: {
    Result,
    TopCategoryRefinementList
  },
  name: 'Home',
  data () {
    return {}
  },
  methods: {
    lastUpdatedAt () {},
    onPageChange () {
      VueScrollTo.scrollTo('.result-container')
    }
  },
  computed: {
    appId () {
      return process.env.ALGOLIA_APP_ID
    },
    appKey () {
      return process.env.ALGOLIA_APP_KEY
    },
    indexName () {
      return process.env.ALGOLIA_DB_INDEX
    }
  }
}
</script>
