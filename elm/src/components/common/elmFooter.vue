<template>
    <ul class="elmFooter">
        <router-link to="/" tag="li" active-class="footNavs">
            <span class="iconfont icon-changyonglogo40"></span>
            <p>外卖</p>
        </router-link>
        <router-link to="/discover" tag="li" active-class="footNavs">
            <span class="iconfont icon-faxian"></span>
            <p>发现</p>
        </router-link>
        <router-link to="/order" tag="li" active-class="footNavs">
            <span class="iconfont icon-icon--copy"></span>
            <p>订单</p>
        </router-link>
        <router-link to="/mine" tag="li" active-class="footNavs">
            <span class="iconfont icon-wode"></span>
            <p>我的</p>
        </router-link>
    </ul>
</template>

<script>
    export default {
        name: "eleFooter",
        methods:{
            // $(document).ready(function (){// ready 事件
            //     $("li").each(function(index){//便利对象
            //         $(this).click(function(){//点击触发事件
            //             $("li").removeClass("active");//删除当前元素的样式
            //             $("li").eq(index).addClass("active");//添加当前元素的样式
            //         });
            //     });
            // });
        }
    }
</script>

<style scoped>
    .elmFooter{
        width: 100%;
        border-top: 1px solid #dddddd;
        display:-webkit-flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background: #fff;
        padding: 0.07rem 0;
    }
    .elmFooter li{
        display:-webkit-flex;
        flex-direction: column;
        align-items: center;
        color: #666666;
        font-size:0.1rem;
    }
    .elmFooter li .iconfont{
        font-size:0.21rem;
        color: #818181;
        margin-bottom: 0.04rem;
    }
    /*.elmFooter footNavs:hover{*/
        /*color: #009AFF;*/
    /*}*/
</style>
