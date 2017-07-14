import Vue from 'vue';
import VueRouter from 'vue-router';
//首页
import index from "./vue/index.vue";
//订单
import order from "./vue/order.vue";
//商品
import commodity from "./vue/commodity.vue";
//结账
import comSelection from "./vue/comSelection.vue";
//添加商品
import addGoods from "./vue/addGoods.vue";
//结账确认订单
import pay from "./vue/pay.vue";
//快速结账
import quickpay from "./vue/quickpay.vue";
//报表
import report from "./vue/report.vue";
//设置
import setting from "./vue/setting.vue";
//商品分类管理
import componentsClass from "./vue/componentsClass.vue";
//设备管理
import equipment from "./vue/equipment.vue";
//申请支付
import addApplication from "./vue/addApplication.vue";


Vue.use(VueRouter);

let routes;
let temp = [
    {
        path:'/',
        components:{
            index:index
        }
    },{
        path:'/order',
        components:{
            index:order
        }
    },{
        path:'/commodity',
        components:{
            index:commodity
        }
    },{
        path:'/quickpay',
        components:{
            index:quickpay
        }
    },{
        path:'/report',
        components:{
            index:report
        }
    },{
        path:'/setting',
        components:{
            index:setting
        }
    },{
        path:'/comSelection',
        components:{
            index:comSelection
        }
    },{
        path:'/pay',
        components:{
            index:pay
        }
    },{
        path:'/addGoods',
        components:{
            index:addGoods
        }
    },{
        path:'/componentsClass',
        components:{
            index:componentsClass
        }
    },{
        path:'/equipment',
        components:{
            index:equipment
        }
    },{
        path:'/addApplication',
        components:{
            index:addApplication
        }
    }
];

routes = [].concat(temp);

const router = new VueRouter({
    routes
});

export default router;