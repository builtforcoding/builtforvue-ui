module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'builtforvue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env:{
    ALGOLIA_APP_ID:'YCJ8BBRCVA',
    ALGOLIA_APP_KEY:'80e229f39b5f70abfbc141601061453d',
    ALGOLIA_DB_INDEX:'projects_index'
  },
  plugins: ['~/plugins/vue-instantsearch'],
}
