<template>
    <div class="loginMain" >
        <!--<div class="login" >-->
            <form>
                <div class="loginInput">
                    <input type="text" placeholder="手机/邮箱/用户名">
                    <input type="button" class="clear" value="×">
                </div>
                <div class="loginInput">
                    <input type="text" placeholder="密码">
                    <input type="button" class="clear" value="×">
                </div>
                <div class="logbtn">
                    <input type="button" value="登录">
                    <a href="javascript:;">忘记密码？</a>
                </div>
            </form>
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "loginpMain"
    }
</script>

<style scoped>

</style>