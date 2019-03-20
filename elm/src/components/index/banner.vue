<template>
    <div class="banner">
        <!--<img src="../../../static/img/lb1.jpg" alt="轮播图">-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in lbt"><img :src="item.lbtPic" alt="item.lbtAlt"></div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "banner",
        props:["navs","lbt"],
        mounted(){
            new Swiper ('.swiper-container', {
                direction: 'horizontal', // 水平切换选项
                loop: true, // 循环模式选项
                // autoplay: {
                //     delay: 1500,
                //     stopOnLastSlide: false, //如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
                //     disableOnInteraction:false  ////用户操作swiper之后，是否禁止autoplay。默认为true：停止
                // },
                // 分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true  ////此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换
                }
            })
        }
    }
</script>

<style scoped>
  .swiper-container{
    width: 100%;
    height: 0.85rem;
  }
  .swiper-container img{
    width: 100%;
    height: 0.85rem;
    border-radius: 0.03rem;
  }
</style>
<!--<style>-->
  <!--.swiper-container .swiper-pagination-bullet{-->
    <!--width: 10px;-->
    <!--height: 2px;-->
    <!--border-radius: 0;-->
  <!--}-->
  <!--.swiper-container .swiper-pagination-bullet-active{-->
    <!--background: #fff;-->
    <!--opacity: 0.8;-->
  <!--}-->
  <!--.swiper-container .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{-->
    <!--bottom:0;-->
  <!--}-->
<!--</style>-->
