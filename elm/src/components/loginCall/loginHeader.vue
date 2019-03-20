<template>
    <div class="loginHeader">
        <div class="headerLeft">
            <router-link to="/mine">
                <span class="iconfont icon-48copy17"></span>
            </router-link>

            <p>登录</p>
        </div>
        <router-link to="/loginPass" tag="p" active-class="headerRight">密码登录</router-link>
        <!--<p class="headerRight">密码登录</p>-->
    </div>
</template>

<script>
    export default {
        name: "loginHeader"
    }
</script>

<style scoped>

</style>