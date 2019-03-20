<template>
    <div class="cateSort">
        <ul>
            <li>全部</li>
            <li>简餐便当</li>
            <li>面食粥点</li>
            <li>汉堡披萨</li>
            <!--<li>汉堡披萨</li>-->
            <!--<li>汉堡披萨</li>-->
            <!--<li>汉堡披萨</li>-->
        </ul>
        <span class="iconfont icon-jiantouxia"></span>
    </div>
</template>

<script>
    export default {
        name: "cateSort"
    }
</script>

<style scoped>
    .cateSort{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.13rem 0.11rem;
        /*background: #fff;*/
        font-size: 0.14rem;
        color: #8ed7ff;
        background: linear-gradient(to right,#00aaff 0%,#0085fe 100%);
    }
    .cateSort ul{
        flex:1;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        /*overflow-x: hidden;*/
    }
</style>