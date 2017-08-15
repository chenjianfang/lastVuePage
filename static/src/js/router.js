import Vue from 'vue';
import VueRouter from 'vue-router';
//首页
import index from "./vue/index.vue";
//基本信息
import userInfor from "./vue/userInfor.vue";
//车辆信息
import carInfor from "./vue/carInfor.vue";
//车辆信息
import carOwnInfor from "./vue/carOwnInfor.vue";
//投保项目
import insurance from "./vue/insurance.vue";
//确认订单
import order from "./vue/order.vue";
//核销保单
import sureOrder from "./vue/sureOrder.vue";




Vue.use(VueRouter);

let routes;
let temp = [
    {
        path:'/',
        components:{
            index:index
        }
    },{
        path:'/userInfor',
        components:{
            index:userInfor
        }
    },{
        path:'/carInfor',
        components:{
            index:carInfor
        }
    },{
        path:'/carOwnInfor',
        components:{
            index:carOwnInfor
        }
    },{
        path:'/insurance',
        components:{
            index:insurance
        }
    },{
        path:'/order',
        components:{
            index:order
        }
    },{
        path:'/sureOrder',
        components:{
            index:sureOrder
        }
    }
];

routes = [].concat(temp);

const router = new VueRouter({
    routes
});
console.log(index);
export default router;