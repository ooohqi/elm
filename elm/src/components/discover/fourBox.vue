<template>
    <ul class="fourBox">
        <li :key="index" v-for="(f,index) in fourBox">
            <div class="fourBoxLeft">
                <h3>{{f.fourH3}}</h3>
                <p>{{f.fourP}}</p>
            </div>
            <img :src="f.fourImg" :alt="f.fourAlt">
        </li>
    </ul>
</template>

<script>
    export default {
        name: "fourBox",
        props:["fourBox"]
    }
</script>

<style scoped>
    .fourBox{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-left:1px solid #efefef;
        border-top:1px solid #ededed;
        overflow: hidden;
        box-sizing: border-box;
        margin-bottom: 0.09rem;
    }
    .fourBox li{
        border-right:1px solid #efefef;
        border-bottom:1px solid #efefef;
        width: 50%;
        box-sizing: border-box;
        background: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        padding: 0.18rem 0;
        font-size: 0.12rem;
        color: #999999;
    }
    .fourBoxLeft h3{
        font-size: 0.16rem;
        color: #fe9900;
    }
    .fourBoxLeft h3,.fourBoxLeft p{
        padding: 0.03rem 0;
    }
    .fourBox li img{
        width: 0.44rem;
        height: 0.44rem;
    }
</style>
