<template>
    <ul class="limit" v-if="data.limit?true:false">
        <li v-for="(item,index) in data.limit">
            <img :src="item.limitImg" :alt="item.limitAlt"/>
            <div class="limitInfo">
                <h4>{{item.limitTit}}</h4>
                <div class="limitPrice">
                    <p>{{item.limitPrice}}金币</p>
                    <p>￥{{item.limitOriginal}}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "limit",
        props:['data'],
    }
</script>

<style scoped>
    .limit{
        padding: 0.12rem 0;
        display: flex;
        flex-direction: row;
    }
    .limit li{
        width: 33.33%;
        display: flex;
        flex-direction: column;
        /*align-items: center;*/
    }
    .limit img{
        width: 100%;
    }
    .limitInfo{
        margin-top: 0.07rem;
    }
    .limitInfo h4,.limitPrice p{
        padding: 0.06rem;
        box-sizing: border-box;
    }
    .limitInfo h4{
        font-size: 0.12rem;
        color: #333333;
        font-weight: 100;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .limitPrice {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .limitPrice p:first-child{
        color: #fe5339;
        font-size: 0.12rem;
    }
    .limitPrice p:last-child{
        color: #aaaaaa;
        font-size: 0.08rem;
        text-decoration: line-through;
    }
</style>