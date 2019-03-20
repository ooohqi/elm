<template>
    <ul class="product" v-if="data.product?true:false">
        <li  :key="index"  v-for="(item,index) in data.product">
            <img :src="item.productImg" :alt="item.productAlt"/>
            <div class="productInfo">
                <h3>{{item.productTit}}</h3>
                <div class="productdel Evaluate">
                    <p>月售{{item.productSale}}份</p>
                    <p>好评率{{item.productComment}}</p>
                </div>
                <div class="productdel price">
                    <p>￥{{item.productPrice}}</p>
                    <p class="productOriginal" v-if="item.productOriginal">￥{{item.productOriginal}}</p>
                    <p class="productReduced" v-if="item.productReduced">{{item.productReduced}}</p>
                </div>
                <div class="productdel tradeName">
                    <span class="iconfont icon-jiameng"></span>
                    <p>{{item.productAddress}}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    // import data from '../../../../server/data/data'
    export default {
        name: "product",
        props:['data'],
        data(){
            return{
                // product:[],
                // loading:false,
                // post:null
            }
        }

    }
</script>

<style scoped>
  .product{
      margin-top: 0.05rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
  }
  .product li{
      border: 1px solid #f0f0f0;
      width: 49%;
      box-sizing: border-box;
      margin: 1% 1% 0 0;
  }
  .product li img{
      width: 100%;
      /*width: 1.64rem;*/
      /*height: 1.66rem;*/
  }
  .productInfo{
      padding: 0 0.1rem;
  }
  .productInfo h3{
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.15rem;
      padding: 0.02rem 0;
  }
  .productdel{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0.02rem 0;
  }
  .Evaluate {
      font-size: 0.1rem;
      color: #666666;
  }
  .Evaluate p:first-child{
      margin-right: 0.1rem;
  }
  .price p:first-child{
      font-size: 0.14rem;
      color: #ff6100;
  }
  .price .productOriginal{
      font-size: 0.08rem;
      color: #999999;
      margin-left: 0.04rem;
      text-decoration: line-through;
  }
  .price .productReduced{
      font-size: 0.1rem;
      color: #f76d6b;
      border: 1px solid #f76d6b;
      padding: 0 0.04rem;
      border-radius: 0.02rem;
      margin-left: 0.05rem;
  }
  .tradeName{
      border-top:1px dashed #cccccc;
      padding: 0.09rem 0;
      font-size: 0.12rem;
      color: #999999;
  }
  .tradeName .iconfont{
      font-size: 0.1rem;
      color: #bababa;
      margin-right: 0.06rem;
      margin-top: 0.02rem;
  }
</style>
