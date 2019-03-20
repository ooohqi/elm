<template>
    <div class="mine">
        <mine-header></mine-header>
        <section>
            <wallet></wallet>
            <member></member>
            <connect></connect>
        </section>
        <elm-footer></elm-footer>
    </div>
</template>

<script>
    import '../assets/css/mine.css'
    import mineHeader from  '../components/mine/mineHeader'
    import wallet from '../components/mine/wallet'
    import member from '../components/mine/member'
    import connect from '../components/mine/connect'
    import elmFooter from  '../components/common/elmFooter'
    export default {
        name: "mine",
        components:{
            mineHeader,
            wallet,
            member,
            connect,
            elmFooter
        }
    }
</script>

<style scoped>
    .mine{
        display: flex;
        height:100%;
        flex-direction: column;
    }
    section{
        flex: 1;
        overflow-y: auto;
    }
</style>