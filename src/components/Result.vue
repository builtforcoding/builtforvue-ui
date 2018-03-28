<template>
  <div class="post-module hover">
    <!-- Thumbnail-->
    <div class="thumbnail">
      <div class="category">v{{ result.version }}</div>
      <div class="date">
        Last Updated: {{ lastUpdated }}
        <!-- <div class="day">27</div>
        <div class="month">Mar</div> -->
      </div>
      <h1 class="title">
        <!-- <ais-highlight :result="result" attribute-name="name"></ais-highlight> -->
        <img :src="authorImage" alt="">
        <router-link :to="{ name: 'Detail', params: { author: authorUsername, repo: result.name, version: result.version }}">{{result.name}}</router-link>
        <!-- <a href="#">{{result.name}}</a> -->
      </h1>
      <div class="repository-score-content">
        <ul>
            <li>
                <div class="digits">{{ qualityScore }}</div>
                Quality
            </li>
            <li>
                <div class="digits">{{ popularityScore }}</div>
                Popularity
            </li>
            <li>
                <div class="digits">{{ maintainanceScore }}</div>
                Maintenance
            </li>
            <li>
                <div class="digits">{{ overallScore}}</div>
                Overall
            </li>
        </ul>
        <div class="clear"></div>
    </div>
    </div>
    <!-- Post Content-->
    <div class="post-content">
      <!-- <h2 class="sub_title">The city that never sleeps.</h2> -->
      <p class="description">{{ result.description }}</p>
      <div class="repository-links-content">
        <ul>
            <li>
              <a :href="repositoryUrl" target="_blank">
                  <i class="fab fa-github-alt"></i>
                </a>
            </li>
            <li>
                  <a :href="npmUrl" target="_blank">
                  <i class="fab fa-npm"></i>
                </a>
            </li>
            <li>
                  <a :href="bugsUrl" target="_blank">
                  <i class="fa fa-bug"></i>
                </a>
            </li>
            <li>
                <a :href="homepageUrl" target="_blank">
                  <i class="fa fa-link"></i>
                </a>
            </li>
        </ul>
        <div class="clear"></div>
    </div>
      <ul class="tags clearfix" v-show="tags.length > 0">
        <li v-for="tag in tags" :key="tag"><a href="#">{{tag}}</a></li>
      </ul>
      <div class="post-meta">
        <span class="comments">
          <i class="fa fa-user"></i>
          <a :href="authorUrl" target="_blank"> {{ authorUsername }}</a>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
let m = require('moment')
export default {
  props: ['result'],
  computed: {
    qualityScore () {
      return Math.floor(this.result.score_quality * 100)
    },
    popularityScore () {
      return Math.floor(this.result.score_popularity * 100)
    },
    maintainanceScore () {
      return Math.floor(this.result.score_maintenance * 100)
    },
    overallScore () {
      return Math.floor(this.result.final_score * 100)
    },
    npmUrl () {
      return this.result.npm_url
    },
    homepageUrl () {
      return this.result.homepage
    },
    repositoryUrl () {
      return this.result.repository
    },
    bugsUrl () {
      return this.result.bugs
    },
    lastUpdated () {
      return m(this.result.project_last_updated).fromNow()
    },
    tags () {
      return this.result.keywords.slice(0, 10).filter(r => {
        return (r !== '')
      })
    },
    authorUsername () {
      return this.result.author_username
    },
    authorImage () {
      let repoUrl = this.repositoryUrl
      let sliced = repoUrl.split('/')
      let repoName = sliced[sliced.length - 2]
      return 'https://github.com/' + repoName + '.png?size=30'
    },
    authorUrl () {
      return 'https://npmjs.com/~' + this.authorUsername
    },
    repoDetailURL () {
      return ''
    }
  }
}
</script>
