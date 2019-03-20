<template>
    <ul class="elmNav">
        <router-link to="/cate" tag="li" :key="index" v-for="(item,index) in navs">
            <img :src="item.imgAddress" :alt="item.altTxt" />
            <p>{{item.navTit}}</p>
        </router-link>
    </ul>
</template>

<script>
    export default {
        name: "elmNav",
        props:["navs"]
    }
</script>

<style scoped>
    .elmNav{
        width: 100%;
        padding: 0.05rem 0.1rem;
        box-sizing: border-box;
        display: -webkit-flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .elmNav li {
        width: 20%;
        margin-top: 0.08rem;
        display: -webkit-flex;
        flex-direction: column;
        align-items: center;
        color: #666666;
        font-size: 0.12rem;
        text-align: center;
    }
    .elmNav li img{
        width:0.46rem;
        height:0.46rem;
    }
    .elmNav li p{
        line-height: 0.24rem;
    }
</style>