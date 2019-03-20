<template>
    <div class="mineHeader">
        <div class="mineHeaderTop">
            <p>我的</p>
            <div class="mineSet">
                <span class="iconfont icon-lingsheng"></span>
                <span class="iconfont icon-shezhi"></span>
            </div>
        </div>
        <router-link to="/loginCall" tag='div' class='mineHeaderBottom' exact>
            <div class="mineInfo">
                <img src="../../../static/img/mine1.jpg" alt="">
                <div class="mineInfoTxt">
                    <h5>立即登录</h5>
                    <div class="telnum">
                        <!--<span class="iconfont icon-lianxi"></span>-->
                        <p>登录后可享受更多特权</p>
                    </div>
                </div>
            </div>
            <span class="iconfont icon-jiantouyou"></span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "mineHeader"
    }
</script>

<style scoped>
    .mineHeader{
        width: 100%;
        background: linear-gradient(to right,#00aaff 0%,#0085fe 100%);
        display: -webkit-flex;
        flex-direction: column;
        font-size: .16rem;
        color: #fff;
        padding: 0.12rem 0.1rem;
        box-sizing: border-box;
    }
    .mineHeaderTop{
        width: 100%;
        padding-bottom: 0.12rem;
        display: -webkit-flex;
        -webkit-flex-direction: row;
        -webkit-align-items: center;
        -webkit-justify-content: space-between;
        font-size: 0.18rem;
    }
    .mineHeaderTop span{
        font-size: 0.2rem;
    }
    .mineHeaderTop span:first-child{
        margin-right: 0.25rem;
    }
    .mineHeaderBottom {
        padding: 0.18rem 0;
        box-sizing: border-box;
        width: 100%;
        display: -webkit-flex;
        -webkit-flex-direction: row;
        -webkit-align-items: center;
        -webkit-justify-content: space-between;
    }
    .mineInfo{
        /*width: 100%;*/
        display: -webkit-flex;
        -webkit-flex-direction: row;
        -webkit-align-items: center;
        -webkit-justify-content: space-between;
    }
    .mineInfo img{
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
    }
    .mineInfoTxt{
        padding-left: 0.2rem;
        color: #fff;
    }
    .mineInfo h5{
        font-size: 0.16rem;
        font-weight: 100;
    }
    .mineInfo .telnum{
        padding-top: 0.12rem;
        display: -webkit-flex;
        -webkit-flex-direction: row;
        -webkit-align-items: center;
        font-size: 0.1rem;
    }
    .mineInfo .telnum span{
        font-size: 0.14rem;
        margin-right: 0.07rem;
    }
    .mineHeaderBottom span{
        font-size: 0.16rem;
        color: #fff;
    }
</style>
