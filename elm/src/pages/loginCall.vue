<template>
    <div class="login">
        <login-header></login-header>
        <login-main></login-main>
        <login-footer></login-footer>
    </div>
</template>

<script>
    import "../assets/css/login.css";
    import loginHeader from '../components/loginCall/loginHeader'
    import loginMain from '../components/loginCall/loginMain'
    import loginFooter from '../components/loginCall/loginFooter'

    export default {
        name: 'loginCall',
        components: {
            loginHeader,
            loginMain,
            loginFooter
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