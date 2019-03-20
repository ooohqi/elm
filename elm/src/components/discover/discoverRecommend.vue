<template>
    <ul class="discoverRecommend">
        <li :key="index" v-for="(item,index) in recommend">
            <div class="drHeader">
                <h3>— <span :class="item.recommendClass"></span> {{item.recommendTit}} —</h3>
                <p>{{item.recommendP}}</p>
            </div>
            <product :data="item"></product>
            <limit :data="item"></limit>
            <p class="pMore">加载更多 ></p>
        </li>
    </ul>
</template>

<script>
    import product from './product'
    import limit from './limit'
    export default {
        props:['recommend'],
        name: "discoverRecommend",
        components:{
            product,
            limit
        }
    }
</script>

<style scoped>
    .discoverRecommend li{
        background: #fff;
        padding: 0 0.1rem;
        box-sizing: border-box;
        margin-bottom: 0.09rem;
    }
    .drHeader{
        padding-top: 0.2rem;
        padding-bottom: 0.05rem;
        text-align: center;
        font-size: 0.11rem;
        color: #999999;
    }
    .drHeader h3{
        font-size: 0.18rem;
        color: #333333;
    }
    .drHeader span{
        font-size: 0.18rem;
        color: #dd3535;
    }
    .pMore{
        text-align: center;
        color: #999999;
        font-size: 0.16rem;
        padding: 0.18rem 0;
    }
</style>
