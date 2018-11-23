<template>
    <div class="author-info">
      <div class="row jumbotron" style="padding: 2rem;" v-if="authorData">
        <div class="col-4"></div>
        <div class="col-4">
          <div class="wrapper">  
            <div class="profile-card js-profile-card">
              <div class="profile-card__img">
                <img :src="avatarUrl" alt="profile card">
              </div>

              <div class="profile-card__cnt js-profile-cnt">
                <div class="profile-card__name">{{authorName}}</div>
                <div class="profile-card__txt"><strong>{{authorBio}}</strong></div>
                <div class="profile-card-loc">
                  <span class="profile-card-loc__icon">
                    <i class="fa fa-map-marker"></i>
                  </span>

                  <span class="profile-card-loc__txt">
                    {{authorLocation}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4"></div>
        
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <h2>{{authorName}}'s Projects</h2>
            <ais-index :app-id="appId" :api-key="appKey" :index-name="indexName" :query-parameters="{facetFilters:['author_username:' + author]}">
              <ais-results>
                <template slot-scope="{ result }">
                  <result :result="result"></result>
                </template>
              </ais-results>
            </ais-index>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import r from 'axios'
import Result from "../../components/Common/Result";

export default {
  components:{
    Result
  },
  head() {
    return {}
  },
  data() {
    return {
      author: '',
      authorData: null
    }
  },
  mounted() {
    this.fetchParams()
  },
  methods: {
    fetchParams() {
      let params = this.$route.params

      this.author = params.author
      this.getAuthorInfo()
    },
    getAuthorInfo() {
      r.get(`https://api.github.com/users/${this.author}`, {
        auth: { username: 'abishekrsrikaanth' }
      }).then(res => {
        this.authorData = res.data
      })
    }
  },
  computed: {
    avatarUrl() {
      if (this.authorData) {
        return this.authorData.avatar_url
      }
    },
    authorName(){
      if(this.authorData){
        return this.authorData.name
      }
    },
    authorLocation(){
      if(this.authorData){
        return this.authorData.location
      }
    },
    authorBio(){
      if(this.authorData){
        return this.authorData.bio
      }
    },
    appId() {
      return process.env.ALGOLIA_APP_ID;
    },
    appKey() {
      return process.env.ALGOLIA_APP_KEY;
    },
    indexName() {
      return process.env.ALGOLIA_DB_INDEX;
    }
  }
}
</script>

<style>
.author-info .jumbotron {
  position: relative;
  height: 400px;
}
.profile-info {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.avatar-image {
  width: 200px;
  border-radius: 100%;
}

.wrapper {
  width: 100%;
  height: auto;
  max-width: 600px;
  padding: 50px 20px;
  display: flex;
  color: #324e63;
}
@media screen and (max-width: 768px) {
  .wrapper {
    height: auto;
    padding-top: 100px;
  }
}

.profile-card {
  width: 100%;
  margin: auto;
  box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
  background: #fff;
  border-radius: 12px;
  position: relative;
}
.profile-card.active .profile-card__cnt {
  filter: blur(6px);
}
.profile-card.active .profile-card-message,
.profile-card.active .profile-card__overlay {
  opacity: 1;
  pointer-events: auto;
  transition-delay: .1s;
}
.profile-card.active .profile-card-form {
  transform: none;
  transition-delay: .1s;
}
.profile-card__img {
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 4;
  box-shadow: 0px 5px 50px 0px #46b784, 0px 0px 0px 7px #46b784;
}
@media screen and (max-width: 576px) {
  .profile-card__img {
    width: 120px;
    height: 120px;
  }
}
.profile-card__img img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.profile-card__cnt {
  margin-top: -35px;
  text-align: center;
  padding: 0 20px;
  padding-bottom: 40px;
  transition: all .3s;
}
.profile-card__name {
  font-weight: 700;
  font-size: 24px;
  color: #46b784;
  margin-bottom: 15px;
}
.profile-card__txt {
  font-size: 18px;
  font-weight: 500;
  color: #324e63;
  margin-bottom: 15px;
}
.profile-card__txt strong {
  font-weight: 700;
}
.profile-card-loc {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
}
.profile-card-loc__icon {
  display: inline-flex;
  font-size: 27px;
  margin-right: 10px;
}
.profile-card-inf {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 35px;
}
.profile-card-inf__item {
  padding: 10px 35px;
  min-width: 150px;
}
@media screen and (max-width: 768px) {
  .profile-card-inf__item {
    padding: 10px 20px;
    min-width: 120px;
  }
}
.profile-card-inf__title {
  font-weight: 700;
  font-size: 27px;
  color: #324e63;
}
.profile-card-inf__txt {
  font-weight: 500;
  margin-top: 7px;
}
.profile-card-social {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.profile-card-social__item {
  display: inline-flex;
  width: 55px;
  height: 55px;
  margin: 15px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #46b784;
  box-shadow: 0px 7px 30px rgba(43, 98, 169, 0.5);
  position: relative;
  font-size: 21px;
  flex-shrink: 0;
  transition: all .3s;
}
@media screen and (max-width: 768px) {
  .profile-card-social__item {
    width: 50px;
    height: 50px;
    margin: 10px;
  }
}
@media screen and (min-width: 768px) {
  .profile-card-social__item:hover {
    transform: scale(1.2);
  }
}
.profile-card-social__item.facebook {
  background: linear-gradient(45deg, #3b5998, #0078d7);
  box-shadow: 0px 4px 30px rgba(43, 98, 169, 0.5);
}
.profile-card-social__item.twitter {
  background: linear-gradient(45deg, #1da1f2, #0e71c8);
  box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.7);
}
.profile-card-social__item.instagram {
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  box-shadow: 0px 4px 30px rgba(120, 64, 190, 0.6);
}
.profile-card-social__item.behance {
  background: linear-gradient(45deg, #1769ff, #213fca);
  box-shadow: 0px 4px 30px rgba(27, 86, 231, 0.7);
}
.profile-card-social__item.github {
  background: linear-gradient(45deg, #333333, #626b73);
  box-shadow: 0px 4px 30px rgba(63, 65, 67, 0.6);
}
.profile-card-social__item.codepen {
  background: linear-gradient(45deg, #324e63, #414447);
  box-shadow: 0px 4px 30px rgba(55, 75, 90, 0.6);
}
.profile-card-social__item.link {
  background: linear-gradient(45deg, #d5135a, #f05924);
  box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.6);
}
.profile-card-social .icon-font {
  display: inline-flex;
}
.profile-card-ctr {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
@media screen and (max-width: 576px) {
  .profile-card-ctr {
    flex-wrap: wrap;
  }
}
.profile-card__button {
  background: none;
  border: none;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 19px;
  margin: 15px 35px;
  padding: 15px 40px;
  min-width: 201px;
  border-radius: 50px;
  min-height: 55px;
  color: #fff;
  cursor: pointer;
  backface-visibility: hidden;
  transition: all .3s;
}
@media screen and (max-width: 768px) {
  .profile-card__button {
    min-width: 170px;
    margin: 15px 25px;
  }
}
@media screen and (max-width: 576px) {
  .profile-card__button {
    min-width: inherit;
    margin: 0;
    margin-bottom: 16px;
    width: 100%;
    max-width: 300px;
  }
  .profile-card__button:last-child {
    margin-bottom: 0;
  }
}
.profile-card__button:focus {
  outline: none !important;
}
@media screen and (min-width: 768px) {
  .profile-card__button:hover {
    transform: translateY(-5px);
  }
}
.profile-card__button:first-child {
  margin-left: 0;
}
.profile-card__button:last-child {
  margin-right: 0;
}
.profile-card__button.button--blue {
  background: linear-gradient(45deg, #1da1f2, #0e71c8);
  box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.4);
}
.profile-card__button.button--blue:hover {
  box-shadow: 0px 7px 30px rgba(19, 127, 212, 0.75);
}
.profile-card__button.button--orange {
  background: linear-gradient(45deg, #d5135a, #f05924);
  box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.35);
}
.profile-card__button.button--orange:hover {
  box-shadow: 0px 7px 30px rgba(223, 45, 70, 0.75);
}
.profile-card__button.button--gray {
  box-shadow: none;
  background: #dcdcdc;
  color: #142029;
}
.profile-card-message {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 130px;
  padding-bottom: 100px;
  opacity: 0;
  pointer-events: none;
  transition: all .3s;
}
.profile-card-form {
  box-shadow: 0 4px 30px rgba(15, 22, 56, 0.35);
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 35px;
  transform: scale(0.8);
  position: relative;
  z-index: 3;
  transition: all .3s;
}
@media screen and (max-width: 768px) {
  .profile-card-form {
    max-width: 90%;
    height: auto;
  }
}
@media screen and (max-width: 576px) {
  .profile-card-form {
    padding: 20px;
  }
}
.profile-card-form__bottom {
  justify-content: space-between;
  display: flex;
}
@media screen and (max-width: 576px) {
  .profile-card-form__bottom {
    flex-wrap: wrap;
  }
}
.profile-card textarea {
  width: 100%;
  resize: none;
  height: 210px;
  margin-bottom: 20px;
  border: 2px solid #dcdcdc;
  border-radius: 10px;
  padding: 15px 20px;
  color: #324e63;
  font-weight: 500;
  font-family: 'Quicksand', sans-serif;
  outline: none;
  transition: all .3s;
}
.profile-card textarea:focus {
  outline: none;
  border-color: #8a979e;
}
.profile-card__overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  background: rgba(22, 33, 72, 0.35);
  border-radius: 12px;
  transition: all .3s;
}

</style>