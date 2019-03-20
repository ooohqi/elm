<template>
    <div class="loginMain" >
        <form>
            <div class="loginInput">
                <input type="text" placeholder="手机号">
                <input type="button" class="clear" value="×">
                <input type="button" class="identifying" value="获取验证码">
            </div>
            <div class="loginInput">
                <input type="text" placeholder="验证码">
                <input type="button" class="clear" value="×">
            </div>
            <div class="hint">温馨提示：未注册饿了么账号的手机，登录时将自动注册，并表示已同意<a href="javascript:;">《用户服务协议》</a>
                <a href="javascript:;">《隐私政策》</a>
            </div>
            <div class="logbtn">
                <input type="button" value="登录">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "loginMain"
    }
</script>

<style scoped>

</style>