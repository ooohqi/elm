<template>
    <div class="cate">
        <cate-header></cate-header>
        <cate-sort></cate-sort>
        <recommend></recommend>
    </div>

</template>

<script>
    import cateHeader from '../components/cate/cateHeader'
    import cateSort from '../components/cate/cateSort'
    import recommend from '../components/index/recommend'
    export default {
        name: "cate",
        components:{
            cateHeader,
            cateSort,
            recommend
        }
    }
</script>

<style scoped>
    .cate{
        background: #fff;
    }
</style>