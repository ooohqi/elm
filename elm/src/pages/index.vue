<template>
    <div class="index">
        <elm-header></elm-header>
        <section>
            <banner :lbt="lbt"></banner>
            <elm-nav :navs="navs"></elm-nav>
            <panic-buying></panic-buying>
            <recommend></recommend>
        </section>
        <elm-footer></elm-footer>
    </div>
</template>

<script>
    import "../assets/css/index.css";
    import elmHeader from '../components/index/elmHeader'
    import elmNav from '../components/index/elmNav'
    import panicBuying from '../components/index/panicBuying'
    import banner from '../components/index/banner'
    import recommend from '../components/index/recommend'
    import elmFooter from '../components/common/elmFooter'
    import index from '../apis/index.js'

    export default {
        name: 'index',

        components: {
            elmHeader,
            banner,
            elmNav,
            panicBuying,
            recommend,
            elmFooter
        },
        data(){
            return {
                navs:[],
                lbt:[]
            }
        },
        methods:{
            _initdata(){
                index.ProductLists(data=>{
                    this.navs = data.navs
                    this.lbt = data.lbt
                });
            }
        },
        mounted(){
            this._initdata()
        }

    }
</script>

<style scoped>
    .index{
        display: flex;
        height:100%;
        flex-direction: column;
    }
    section{
        flex: 1;
        overflow-y: auto;
        background: #fff;
    }

</style>
