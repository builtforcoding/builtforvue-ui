<template>
  <main role="main" class="about-us">
    <section class="jumbotron text-center">
      <h1 class="title">About</h1>
    </section>

    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <div class="lead lead-about">BuiltforVue provides a mirror for vue projects available on NPM.
            It combines information from npm and jsdelivr to provide useful stats to help choose the right package for your project.
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <h3>Get Involved</h3>
            <a href="#">Builtforvue</a> is open-source and we still have some work to do. Any contributions, ideas or bug reports are welcome. <br>Visit our GitHub and help us!
            <h5 class="mt-3">Help Us</h5>
            If you are a company or an individual and want to help us with the costs involved in development, infrastructure and promotion, you may donate money or anything else you think would be useful.
            Just send us an email or ask us on GitHub for more details.
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <h3>Tools Used</h3>

          <div class="card-deck tools-used">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Client</h5>
                <p class="card-text">
                  <ul>
                    <li><a href="https://vuejs.org">Vue.js</a></li>
                    <li><a href="https://nuxtjs.org">Nuxt.js</a></li>
                    <li><a href="http://www.algolia.com/">Algolia</a></li>
                    <li><a href="http://vuejs-templates.github.io/webpack/">vuejs-templates</a></li>
                    <li><a href="https://github.com/axios/axios">axios</a></li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Data Sponsors</h5>
                <p class="card-text">
                  <ul>
                    <li><a href="https://jsdelivr.com">jsDelivr</a></li>
                    <li><a href="https://npms.io">npms.io</a></li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Infrastructure</h5>
                <p class="card-text"><ul>
                  <li><a href="https://now.sh">now.sh</a></li>
                  <li><a href="https://fly.io">fly.io</a></li>
                </ul>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5 mb-15">
        <div class="col">
          <h3>How are the scores calculated?</h3>
          <a href="#">Builtforvue</a>, uses the statistics provided by npms analytics that continuously analyzes the npm ecosystem, gathering as much information as possible from a variety of sources.
          Using the collected information, a final score for each package is calculated based on four different aspects:

          <div class="card-deck scores-calculated mt-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Quality</h5>
                <p class="card-text">
                  Quality attributes are easy to calculate because they are self-contained. These are the kind of attributes that a person looks at first when checking out a package.
                  <ul>
                    <li>Has README? Has license? Has .gitignore and friends?</li>
                    <li>Is the version stable (> 1.x.x)? Is it deprecated?</li>
                    <li>Has tests? What's their coverage %? Is the build passing?</li>
                    <li>Has outdated dependencies? Do they have vulnerabilities?</li>
                    <li>Has custom website? Has badges?</li>
                    <li>Are there linters configured?</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Maintenance</h5>
                <p class="card-text">
                  Maintenance attributes allows us to understand if the package is active and healthy or if it is abandoned. These are typically the second kind of attributes that a person looks at when examining a package.
                  <ul>
                    <li>Ratio of open issues vs. total issues</li>
                    <li>The time it takes to close issues</li>
                    <li>Most recent commit</li>
                    <li>Commit frequency</li>
                    <li>Release frequency</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div class="card-deck scores-calculated mt-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Popularity</h5>
                <p class="card-text">
                  Popularity attributes allows us to understand the package adoption and community size.
                  These are the kind of attributes that a person looks at when they are undecided on the package choice.
                  <ul>
                    <li>Number of stars</li>
                    <li>Number of forks</li>
                    <li>Number of subscribers</li>
                    <li>Number of contributors</li>
                    <li>Number of dependents</li>
                    <li>Number of downloads</li>
                    <li>Downloads acceleration</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Personalities</h5>
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
      <div class="row mt-5 mb-15">
        <div class="col">
          <h3>What does our stack look like?</h3>
          <a frameborder="0" data-theme="dark" data-layers="1,2,3,4" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/f368826b7d62604e423f96031804e1"></a>
          <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script>
        </div>
      </div>
    </div>
  </main>
</template>
