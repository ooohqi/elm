import Vue from 'vue';
import VueRouter from 'vue-router'
import index from '../pages/index.vue'
import mine from '../pages/mine.vue'
import loginCall from '../pages/loginCall.vue'
import loginPass from '../pages/loginPass.vue'
import order from '../pages/order.vue'
import discover from '../pages/discover.vue'
import cate from '../pages/cate.vue'
import shop from '../pages/shop.vue'

Vue.use(VueRouter)

let router = new VueRouter({
        routes:[
              {path:"/",component:index,name:"index"},
              {path:"/discover",component:discover,name:"discover"},
              {path:"/order",component:order,name:"order"},
              {path:"/mine",component:mine,name:"mine"},
              {path:"/cate",component:cate,name:"cate"},
              {path:"/loginCall",component:loginCall,name:"loginCall"},
              {path:"/loginPass",component:loginPass,name:"loginPass"},
              {path:"/shop",component:shop,name:"shop"}
        ]
})

export default router
