<template>
  <div class="repo-detail">
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ad0f06726ede532"></script>
    <fixed-header :fixed.sync="isFixed">
      <nav class="navbar navbar-expand-lg d-none header-navbar secondary-navbar" :class="{'fixed-top': isFixed, 'd-block': isFixed}">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <img :src="authorImage" alt="">
              <span class="repo-name">{{ author + "/" + repo }}</span>
            </li>
          </ul>
          <ul class="pull-right list-inline repository-links-content">
              <li>
                <a :href="repoLink" target="_blank">
                    <i class="fab fa-github-alt"></i>
                  </a>
              </li>
              <li>
                    <a :href="npmLink" target="_blank">
                    <i class="fab fa-npm"></i>
                  </a>
              </li>
              <li>
                    <a :href="bugsLink" target="_blank">
                    <i class="fa fa-bug"></i>
                  </a>
              </li>
              <li>
                  <a :href="homepageLink" target="_blank">
                    <i class="fa fa-home"></i>
                  </a>
              </li>
          </ul>
        </div>
      </nav>
    </fixed-header>
    <div class="row repo-jumbotron">
      <div class="col">
        <div class="repo-badge">
          <img :src="badgeUrl" alt="">
          <img :src="npmScore" alt="">
        </div>
        <div class="repository-links-content">
          <ul>
              <li>
                <a :href="repoLink" target="_blank">
                    <i class="fab fa-github-alt"></i>
                  </a>
              </li>
              <li>
                    <a :href="npmLink" target="_blank">
                    <i class="fab fa-npm"></i>
                  </a>
              </li>
              <li>
                    <a :href="bugsLink" target="_blank">
                    <i class="fa fa-bug"></i>
                  </a>
              </li>
              <li>
                  <a :href="homepageLink" target="_blank">
                    <i class="fa fa-home"></i>
                  </a>
              </li>
          </ul>
          <div class="clear"></div>
      </div>
      <div class="repo-info">
        <img :src="authorImage" alt="">
        <span class="repo-name">{{ author + "/" + repo }}</span>
      </div>
      <usage-chart :width="chartOptions.width" :height="chartOptions.height" :chart-data="jumbotronChartData" :css-classes="chartOptions.cssClass"></usage-chart>
      </div>
    </div>
    <div class="container detail-container">
      <div class="row">
        <div class="col-md-8">
          <div class="row repo-description">
            <div class="col-md-12">
              <div class="repo-info">
                <span class="repo-name">{{ author + "/" + repo }}</span>
                <a href="#" class="badge badge-secondary repo-version-badge">v{{ version }}</a>
                <a href="#" class="badge badge-info repo-license-badge">{{ license }}</a>
              </div>
              <div class="repo-description-text">{{ repoDescription }}</div>
              <ul class="tags clearfix repo-tags" v-show="tags.length > 0">
                <li v-for="tag in tags" :key="tag"><a href="#">{{tag}}</a></li>
              </ul>
            </div>
            <div class="row">
              <div class="col-md-12 mt-3">
                <div class="info-block">
                  <dl>
                    <dt>{{ forksCount }}</dt>
                    <dd>Forks</dd>
                  </dl>
                </div>
                <div class="info-block">
                  <dl>
                    <dt>{{ watchersCount }}</dt>
                    <dd>Watchers</dd>
                  </dl>
                </div>
                <div class="info-block">
                  <dl>
                    <dt>{{ stargazersCount }}</dt>
                    <dd>Stargazers</dd>
                  </dl>
                </div>
                <div class="info-block">
                  <dl>
                    <dt>{{ subscribersCount }}</dt>
                    <dd>Subscribers</dd>
                  </dl>
                </div>
                <div class="info-block">
                  <dl>
                    <dt>{{ lastUpdated }}</dt>
                    <dd>Last Update</dd>
                  </dl>
                </div>
                <div class="info-block npm-count">
                  <dl>
                    <dt>{{ npmDownloadsCount }}</dt>
                    <dd>NPM Downloads Count</dd>
                  </dl>
                </div>
                <div class="info-block js-delivr">
                  <dl>
                    <dt>{{ jsDelivrDownloadsCount }}</dt>
                    <dd>jsDelivr Hits</dd>
                  </dl>
                </div>
            </div>
          </div>
          </div>
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="readme-tab" data-toggle="tab" href="#readme" role="tab" aria-controls="readme" aria-selected="true">Read me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="runkit-tab" data-toggle="tab" href="#runkit" role="tab" aria-controls="runkit" aria-selected="false">RunKit</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="jsDelivr-tab" data-toggle="tab" href="#jsDelivr" role="tab" aria-controls="jsDelivr" aria-selected="false">
                <img src="/images/jsdelivr-logo.png" alt="" style="width:25px;"> jsDelivr
              </a>
            </li>
          </ul>
          <div class="tab-content repo-detail-info">
            <div class="tab-pane fade show active readme" id="readme" role="tabpanel" aria-labelledby="readme-tab">
              <vue-markdown :source="readme" :toc="markdown.toc" :breaks="markdown.breaks"></vue-markdown>
            </div>
            <div class="tab-pane fade" id="runkit" role="tabpanel" aria-labelledby="runkit-tab">
              <iframe :src="`https://npm.runkit.com/${repo}`" width="100%" height="700px" frameborder="0"></iframe>
            </div>
            <div class="tab-pane fade" id="jsDelivr" role="tabpanel" aria-labelledby="jsDelivr-tab">
              <iframe :src="`https://www.jsdelivr.com/package/npm/${repo}`" width="100%" height="700px" frameborder="0"></iframe>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <h3 class="legend">install</h3>
              <h5>npm</h5>
              <div class="alert alert-dark install-content" role="alert">
                <i class="fa fa-angle-right"></i> npm install {{ repo }} <i class="fa fa-copy" style="text-align:right"></i>
              </div>
              <h5>jsdelivr</h5>
              <div class="alert alert-dark install-content script" role="alert">
                <pre>&lt;script src="https://cdn.jsdelivr.net/npm/{{repo}}@{{version}}{{defaultFile}}"&gt;&lt;script&gt;</pre>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <h5 class="card-header">Ranking</h5>
                <div class="card-body">
                  <label class="control-label">QUALITY</label>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="qualityScore | css_width" :aria-valuenow="qualityScore" aria-valuemin="0" aria-valuemax="100">{{ qualityScore | to_percentage }}</div>
                  </div>
                  <br>
                  <label class="control-label">POPULARITY</label>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="popularityScore | css_width" :aria-valuenow="popularityScore" aria-valuemin="0" aria-valuemax="100">{{ popularityScore | to_percentage }}</div>
                  </div>
                  <br>
                  <label class="control-label">MAINTENANCE</label>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="maintenanceScore | css_width" :aria-valuenow="maintenanceScore" aria-valuemin="0" aria-valuemax="100">{{ maintenanceScore | to_percentage }}</div>
                  </div>
                  <br>
                  <label class="control-label">OVERALL</label>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="overallScore | css_width" :aria-valuenow="overallScore" aria-valuemin="0" aria-valuemax="100">{{ overallScore | to_percentage }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import r from 'axios'
import Result from '../../../components/Common/Result'
import UsageChart from '../../../components/Detail/UsageChart'
import m from 'moment'
import Vue from 'vue'
import $ from 'cheerio'
import n from 'numeral'
import VueMarkdown from '../../../components/Detail/VueMarkdown'
import FixedHeader from 'vue-fixed-header'

Vue.filter('css_width', function(value) {
  return 'width: ' + value + '%;'
})

Vue.filter('to_percentage', function(value) {
  return parseInt(value) + '%'
})

export default {
  head() {
    return {
      title: 'BuiltforVue: ' + this.author + '/' + this.repo,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.repoDescription
        },

        {
          hid: 'google_title',
          itemprop: 'name',
          content: this.author + '/' + this.repo
        },
        {
          hid: 'google_description',
          itemprop: 'description',
          content: this.repoDescription
        },
        {
          hid: 'google_author_image',
          itemprop: 'image',
          content: this.authorLargeImage
        },

        { hid: 'twitter-card', property: 'twitter:card', content: 'summary' },
        {
          hid: 'twitter-title',
          property: 'twitter:title',
          content: this.author + '/' + this.repo
        },
        {
          hid: 'twitter-description',
          property: 'twitter:description',
          content: this.repoDescription
        },
        {
          hid: 'twitter-image',
          property: 'twitter:image',
          content: this.authorLargeImage
        },

        {
          hid: 'og-title',
          property: 'og:title',
          content: this.author + '/' + this.repo
        },
        { hid: 'og_type', property: 'og:type', content: 'article' },
        {
          hid: 'og_url',
          property: 'og:url',
          content: '/' + this.author + '/' + this.repo
        },
        {
          hid: 'og_image',
          property: 'og:image',
          content: this.authorLargeImage
        },
        {
          hid: 'og_description',
          property: 'og:description',
          content: this.repoDescription
        },
        { hid: 'og_sitename', property: 'og:site_name', content: 'BuiltforVue' }
      ]
    }
  },
  components: {
    Result,
    UsageChart,
    VueMarkdown,
    FixedHeader
  },
  created() {
    this.fetchParams()
  },
  data() {
    return {
      author: '',
      repo: '',
      version: '',
      statsPeriod: 'month',
      npmInfo: null,
      versions: [],
      files: null,
      packageStats: null,
      packageVersionStats: null,
      versionStats: {},
      githubData: null,
      markdown: {
        breaks: true,
        toc: true,
        emoji: true
      },
      readme: '',
      chartOptions: {
        width: 100,
        height: 20,
        cssClass: 'chart-container'
      },
      isFixed: false
    }
  },
  methods: {
    fetchParams() {
      let params = this.$route.params
      this.author = params.author
      this.repo = params.repo
      this.fetchNPMData()

      this.fetchVersionsInfo()
      this.fetchStatsInfo()
      this.fetchVersionStatsInfo()
    },
    fetchNPMData() {
      r.get(`https://api.npms.io/v2/package/${this.repo}`).then(res => {
        let data = res.data
        this.npmInfo = data
        this.version = this.repoMetadata.version

        this.fetchFilesInfo(this.version)
        this.fetchUsageInfoByVersion(this.version)
        this.fetchGithubRepoInfo()
      })
    },
    fetchVersionsInfo() {
      r.get(`https://data.jsdelivr.com/v1/package/npm/${this.repo}`).then(
        res => {
          this.versions = res.data
        }
      )
    },
    fetchFilesInfo(version) {
      r.get(
        `https://data.jsdelivr.com/v1/package/npm/${this.repo}@${version}`
      ).then(res => {
        this.files = res.data
      })
    },
    fetchStatsInfo() {
      r.get(
        `https://data.jsdelivr.com/v1/package/npm/${this.repo}/stats/date`
      ).then(res => {
        this.packageStats = res.data
      })
    },
    fetchVersionStatsInfo() {
      r.get(
        `https://data.jsdelivr.com/v1/package/npm/${
          this.repo
        }/stats/version/month`
      ).then(res => {
        this.packageVersionStats = res.data
      })
    },
    fetchUsageInfoByVersion(version) {
      r.get(
        `https://data.jsdelivr.com/v1/package/npm/${this.repo}@${version}/stats`
      ).then(res => {
        this.versionStats = res.data
      })
    },
    fixAnchorTags() {
      let self = this
      this.$nextTick(function() {
        $('.tab-content.repo-detail-info a:not([href^="#"], .toc-anchor)').each(
          function(idx, a) {
            $(a).attr('target', '_blank')
            if (a.href !== '') {
              if (window.location.host === a.host) {
                console.log(self.defaultBranch)
                if (
                  self.defaultBranch !== undefined &&
                  self.defaultBranch !== ''
                ) {
                  let pathName = $(a)[0].pathname.replace(`/${self.author}`, '')
                  let blobLink = `${self.repoLink}/blob/${
                    self.defaultBranch
                  }${pathName}`
                  $(a).attr('href', blobLink)
                } else {
                  $(a).attr('href', 'javascript:void(0)')
                  $(a).removeAttr('target')
                }
              }
            }
          }
        )

        $('.tab-content.repo-detail-info .table').addClass(
          'table table-condensed table-stripped table-bordered'
        )
      })
    },
    fetchGithubRepoInfo() {
      let repoLink = this.repoLink.replace('https://github.com/', '')
      r.get(`https://api.github.com/repos/${repoLink}`, {
        auth: { username: 'abishekrsrikaanth' }
      }).then(res => {
        this.githubData = res.data
        this.fetchReadMe()
      })
    },
    fetchReadMe() {
      let self = this
      if (this.githubData) {
        let repoLink = this.repoLink.replace('https://github.com/', '')
        r.get(`https://api.github.com/repos/${repoLink}/readme`, {
          auth: { username: 'abishekrsrikaanth' }
        }).then(res => {
          let data = res.data
          let downloadUrl = data.download_url
          r.get(downloadUrl).then(res => {
            this.readme = res.data
            this.$nextTick(() => {
              self.fixAnchorTags()
            })
          })
        })
      }
    }
  },
  computed: {
    jsDelivrURL() {
      return `https://www.jsdelivr.com/package/npm/${this.repo}`
    },
    badgeUrl() {
      return `https://data.jsdelivr.com/v1/package/npm/${this.repo}/badge`
    },
    authorImage() {
      if (this.npmInfo) {
        let repoUrl = this.repoMetadata.links.repository
        let sliced = repoUrl.split('/')
        let repoName = sliced[sliced.length - 2]
        return 'https://github.com/' + repoName + '.png?size=40'
      }
      return ''
    },
    authorLargeImage() {
      if (this.npmInfo) {
        let repoUrl = this.repoMetadata.links.repository
        let sliced = repoUrl.split('/')
        let repoName = sliced[sliced.length - 2]
        return 'https://github.com/' + repoName + '.png?size=200'
      }
      return ''
    },
    jumbotronChartData() {
      if (this.packageStats) {
        let collection = {
          labels: [],
          datasets: []
        }
        let stats = this.packageStats.dates
        let keys = Object.keys(stats)
        let data = []

        for (let key of keys) {
          collection.labels.push(m(key).format('MMM Do YY'))
          data.push(stats[key].total)
        }

        collection.datasets.push({
          label: '',
          data: data
        })

        return collection
      }
      return {
        labels: [],
        datasets: []
      }
    },
    repoMetadata() {
      if (this.npmInfo) {
        return this.npmInfo.collected.metadata
      }
    },
    repoScore() {
      if (this.npmInfo) {
        return this.npmInfo.score
      }
    },
    tags() {
      if (this.npmInfo) {
        if (this.repoMetadata.keywords) {
          return this.repoMetadata.keywords.slice(0, 10).filter(r => {
            return r !== ''
          })
        }
        return []
      }
      return []
    },
    repoDescription() {
      if (this.npmInfo) {
        return this.repoMetadata.description
      }
    },
    qualityScore() {
      if (this.npmInfo) {
        return this.repoScore.detail.quality * 100
      }
      return 0
    },
    maintenanceScore() {
      if (this.npmInfo) {
        return this.repoScore.detail.maintenance * 100
      }
      return 0
    },
    popularityScore() {
      if (this.npmInfo) {
        return this.repoScore.detail.popularity * 100
      }
      return 0
    },
    overallScore() {
      if (this.npmInfo) {
        return this.repoScore.final * 100
      }
      return 0
    },
    license() {
      if (this.npmInfo) {
        return this.repoMetadata.license
      }
    },
    npmScore() {
      return `https://badges.npms.io/${this.repo}.svg?style=flat-square`
    },
    lastUpdated() {
      if (this.npmInfo) {
        return m(this.repoMetadata.date).fromNow()
      }
    },
    repoLink() {
      if (this.npmInfo) {
        return this.repoMetadata.links.repository
      }
    },
    bugsLink() {
      if (this.npmInfo) {
        return this.repoMetadata.links.bugs
      }
    },
    npmLink() {
      if (this.npmInfo) {
        return this.repoMetadata.links.npm
      }
    },
    homepageLink() {
      if (this.npmInfo) {
        return this.repoMetadata.links.homepage
      }
    },
    defaultFile() {
      if (this.files) {
        return this.files.default
      }
    },
    defaultBranch() {
      if (this.githubData) {
        return this.githubData.default_branch
      }
    },
    forksCount() {
      if (this.githubData) {
        return this.githubData.forks_count
      }
      return 0
    },
    watchersCount() {
      if (this.githubData) {
        return this.githubData.watchers_count
      }
      return 0
    },
    stargazersCount() {
      if (this.githubData) {
        return this.githubData.stargazers_count
      }
      return 0
    },
    subscribersCount() {
      if (this.githubData) {
        return this.githubData.subscribers_count
      }
      return 0
    },
    npmDownloadsCount() {
      if (this.npmInfo) {
        let count = 0
        this.npmInfo.collected.npm.downloads.forEach(download => {
          count += download.count
        })

        if (count > 10000000) {
          return n(count).format('0,0.00a')
        } else {
          return n(count).format('0,0')
        }
      }
      return 0
    },
    jsDelivrDownloadsCount() {
      if (this.packageStats) {
        if (this.packageStats.total > 10000000) {
          return n(this.packageStats.total).format('0,0.00a')
        } else {
          return n(this.packageStats.total).format('0,0')
        }
      }
      return 0
    }
  }
}
</script>
