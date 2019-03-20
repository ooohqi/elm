<template>
    <div class="discover">
        <discover-header></discover-header>
        <section>
            <ad></ad>
            <four-box :fourBox="fourBox"></four-box>
            <share></share>
            <discover-recommend :recommend="recommend"></discover-recommend>
        </section>
        <!--<discover-main :fourBox="fourBox" :data="recommend"></discover-main>-->
        <elm-footer></elm-footer>
    </div>
</template>

<script>
  import '../assets/css/discover.css'
  import discoverHeader from  '../components/discover/discoverHeader'
  import ad from "../components/discover/ad"
  import fourBox from "../components/discover/fourBox"
  import share from '../components/discover/share'
  import discoverRecommend from '../components/discover/discoverRecommend'
  import elmFooter from  '../components/common/elmFooter'
  import product from '../apis/product.js'
  export default {
      name: "discover",
      components:{
          discoverHeader,
          ad,
          fourBox,
          share,
          discoverRecommend,
          elmFooter
      },
      data(){
          return{
              recommend :[],
              fourBox: []
          }
      },
      methods:{
          _initdata(){
              product.ProductLists(data=>{
                  this.recommend = data.recommend
                  // this.product = data.recommend.product
                  this.fourBox = data.fourBox
                  // console.log(this.recommend)
              });
          }
      },
      mounted(){
          this._initdata()
      }
  }
</script>

<style scoped>
    .discover{
        display: flex;
        height:100%;
        flex-direction: column;
    }
    section{
        flex: 1;
        overflow-y: auto;
    }
</style>
