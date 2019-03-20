<template>
    <div class="cateHeader">
        <div class="headerLeft">
            <router-link to="/" tag="span" active-class="iconfont icon-48copy17"></router-link>
            <!--<span class="iconfont icon-48copy17"></span>-->
            <p>美食</p>
        </div>
        <span class="iconfont icon-sousuo"></span>
    </div>
</template>

<script>
    export default {
        name: "cateHeader"
    }
</script>

<style scoped>
    .cateHeader{
        width: 100%;
        background: linear-gradient(to right,#00aaff 0%,#0085fe 100%);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: .16rem;
        color: #fff;
        padding: 0.2rem 0.1rem;
        box-sizing: border-box;
    }
    .headerLeft{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .iconfont{
        font-size: 0.18rem;
    }
    .headerLeft p{
        font-weight: 700;
    }
    .icon-48copy17{
        margin-left: 0.1rem;
        margin-right: 0.36rem;
    }
    .icon-sousuo{
        margin-right: 0.05rem;
    }
</style>