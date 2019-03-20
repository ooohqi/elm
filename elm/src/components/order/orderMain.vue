<template>
    <div class="orderMain">
        <h3>历史订单</h3>
        <ul>
            <li>
                <img src="../../../static/img/order1.jpg" alt="李灰蛋炒饭">
                <div class="orderInfo">
                    <div class="orderDetail orderInfoTop">
                        <h5>李灰蛋炒饭  ></h5>
                        <p>订单已送达</p>
                    </div>
                    <p class="orderTime">2019-01-12 21:27</p>
                    <div class="orderDetail orderInfoBottom">
                      <p>黑椒牛肉炒饭 等2件商品</p>
                      <p>￥32.9</p>
                    </div>
                    <div class="orderAgain">
                        <p>再来一单</p>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../../static/img/order1.jpg" alt="李灰蛋炒饭">
                <div class="orderInfo">
                    <div class="orderDetail orderInfoTop">
                        <h5>李灰蛋炒饭  ></h5>
                        <p>订单已送达</p>
                    </div>
                    <p class="orderTime">2019-01-12 21:27</p>
                    <div class="orderDetail orderInfoBottom">
                        <p>黑椒牛肉炒饭 等2件商品</p>
                        <p>￥32.9</p>
                    </div>
                    <div class="orderAgain">
                        <p>再来一单</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "orderMain"
    }
</script>

<style scoped>
    .orderMain{
        background: #fff;
        flex: 1;
        overflow-y: auto;
        padding: 0 0.12rem;
    }
    .orderMain h3{
        padding: 0.03rem 0;
    }
    .orderMain li{
        display: flex;
        flex-direction: row;
        color: #333333;
        padding: 0.15rem 0;
    }
    .orderMain li img{
        margin-right: 0.1rem;
        border-radius: 1px;
        width: 0.36rem;
        height: 0.36rem;
    }
    .orderInfo{
        border-bottom: 1px solid #d8d8d8;
    }
    .orderMain li .orderInfo{
        flex: 1;
    }
    .orderDetail{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .orderInfoTop{
        padding-bottom: 0.03rem;
    }
    .orderInfoTop h5{
        font-size: 0.16rem;
        font-weight: 100;
    }
    .orderInfoTop p{
        font-size: 0.13rem;
    }
    .orderTime{
        padding: 0.03rem 0;
        color: #999;
        font-size: 0.1rem;
    }
    .orderInfoBottom{
        padding: 0.16rem 0;
    }
    .orderInfoBottom p:first-child{
        font-size: 0.14rem;
    }
    .orderInfoBottom p:last-child{
        font-size: 0.12rem;
    }
    .orderAgain {
        margin-bottom: 0.2rem;
        display: flex;
        justify-content: flex-end;
    }
    .orderAgain p{
        border: 1px solid #d8d8d8;
        padding: 0.08rem 0.11rem;
        border-radius: 0.04rem;
        font-size: 0.12rem;
        color: #343434;
    }
</style>
