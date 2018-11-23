const pkg = require('./package')
const webpack = require('webpack')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'BuiltForVue - NPM package subset for Vue Developers',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no'
      },
      {
        name: 'google-site-verification',
        content: 'eLpEiPLSU43BxbpduMpbIj7SHCteDYm-DXlQIeWjmdA'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'BuiltforVue provides a mirror for vue projects available on NPM. It combines information from npm and jsdelivr to provide useful stats to help choose the right package for your project'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins'
      },
      {
        rel: 'stylesheet',
        href: '/css/style.css'
      },
      {
        rel: 'canonical',
        href: 'https://www.builtforvue.com'
      }
    ],
    script: [],
    bodyAttrs: {}
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/vue-instantsearch'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/sitemap',
      {
        path: '/sitemap.xml',
        hostname: 'https://builtforvue.com',
        cacheTime: 1000 * 60 * 15,
        gzip: true
      }
    ],
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt'
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-116471985-1'
      }
    ],
    [
      'nuxt-social-meta',
      {
        url: 'https://www.builtforvue.com',
        title: 'BuiltForVue - A subset of the builtforcoding.com ecosystem.',
        description:
          'BuiltforVue provides a mirror for vue projects available on NPM. It combines information from npm and jsdelivr to provide useful stats to help choose the right package for your project',
        img: 'https://www.builtforvue.com/images/logo_black.png',
        locale: 'en_US',
        twitter: '@shakeofabiomen',
        themeColor: '#46b784'
      }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    },
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
