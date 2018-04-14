<template>
    <ais-index :app-id="appId" :api-key="appKey" :index-name="indexName">
      <section class="jumbotron text-center">
        <div class="container search-container">
          <ais-search-box :autofocus="true" placeholder="Find a Vue Project...">
            <div class="form-group mx-sm-8">
              <h1 class="title"> Search for a Vue Package</h1>
              <ais-input placeholder="Search a Vue Project..." :classNames="{'ais-input': 'form-control form-control-lg'}" />
              <div style="margin-top: 10px; float:right;">
                <img src="/images/search-by-algolia.png" alt="Search By Algolia" class="search-by-algolia">
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
      <div class="modal fade" id="score_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">How are the scores calculated?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col">
                  <a href="#">Builtforvue</a>, uses the statistics provided by npms analytics that continuously analyzes the npm ecosystem, gathering as much information as possible from a variety of sources.
                  Using the collected information, a final score for each package is calculated based on four different aspects:

                  <div class="card-deck scores-calculated mt-2">
                    <div class="card">
                      <h5 class="card-header">Quality</h5>
                      <div class="card-body">
                        <p class="card-text">
                          Quality attributes are easy to calculate because they are self-contained. These are the kind of attributes that a person looks at first when checking out a package.
                        </p>
                        <ul>
                          <li>Has README? Has license? Has .gitignore and friends?</li>
                          <li>Is the version stable (> 1.x.x)? Is it deprecated?</li>
                          <li>Has tests? What's their coverage %? Is the build passing?</li>
                          <li>Has outdated dependencies? Do they have vulnerabilities?</li>
                          <li>Has custom website? Has badges?</li>
                          <li>Are there linters configured?</li>
                        </ul>
                      </div>
                    </div>
                    <div class="card">
                      <h5 class="card-header">Maintenance</h5>
                      <div class="card-body">
                        <p class="card-text">
                          Maintenance attributes allows us to understand if the package is active and healthy or if it is abandoned. These are typically the second kind of attributes that a person looks at when examining a package.
                          </p>
                        <ul>
                          <li>Ratio of open issues vs. total issues</li>
                          <li>The time it takes to close issues</li>
                          <li>Most recent commit</li>
                          <li>Commit frequency</li>
                          <li>Release frequency</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card-deck scores-calculated mt-3">
                    <div class="card">
                      <h5 class="card-header">Popularity</h5>
                      <div class="card-body">
                        <p class="card-text">
                          Popularity attributes allows us to understand the package adoption and community size.
                          These are the kind of attributes that a person looks at when they are undecided on the package choice.
                        </p>
                        <ul>
                          <li>Number of stars</li>
                          <li>Number of forks</li>
                          <li>Number of subscribers</li>
                          <li>Number of contributors</li>
                          <li>Number of dependents</li>
                          <li>Number of downloads</li>
                          <li>Downloads acceleration</li>
                        </ul>
                      </div>
                    </div>
                    <div class="card">
                      <h5 class="card-header">Personalities</h5>
                      <div class="card-body">
                        <p class="card-text">
                          If two packages are similar, one tends to choose the one whose author is well known in the community.

                          Relationships between people are also important. When a user follows another, there's a link between them. We can infer that people prefer packages from the users they follow.

                          As of this writing the personalities attributes are not yet implemented.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ais-index>
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
  head(){
    return {
      meta:[
        { hid: 'description', name: 'description', content: 'BuiltforVue provides a mirror for vue projects available on NPM. It combines information from npm and jsdelivr to provide useful stats to help choose the right package for your project' }
      ]
    }
  },
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
