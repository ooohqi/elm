<template>
    <div class="login">
        <loginp-header></loginp-header>
        <loginp-main></loginp-main>
    </div>
</template>

<script>
    import "../assets/css/login.css"
    import loginpHeader from '../components/loginPass/loginpHeader'
    import loginpMain from '../components/loginPass/loginpMain'

    export default {
        name: 'loginPass',
        components: {
            loginpHeader,
            loginpMain
        }
    }
</script>

<style scoped>
    .login{
        display: flex;
        height:100%;
        flex-direction: column;
    }

</style>