<template>
    <div class="order">
        <order-header></order-header>
        <order-main></order-main>
        <elm-footer></elm-footer>
    </div>
</template>

<script>
    import '../assets/css/order.css'
    import orderHeader from '../components/order/orderHeader'
    import orderMain from '../components/order/orderMain'
    import elmFooter from '../components/common/elmFooter'
    export default {
        name: "order",
        components:{
            orderHeader,
            orderMain,
            elmFooter
        }
    }
</script>

<style scoped>
    .order{
        display: flex;
        height:100%;
        flex-direction: column;
    }
</style>