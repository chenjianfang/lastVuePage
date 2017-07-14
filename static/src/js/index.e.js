import Vue from 'vue';
import router from './router.js';

require("../scss/common.scss");
var aaa = 101;

//已经选购的商品
const store = {
    goodsSelect:[], //已经选的商品
    checkActivity:false,//打印小票
    setGoodsSelect(newValue){
        this.goodsSelect = newValue;
    },
    getGoodsSelect(){
        return this.goodsSelect;
    }
};
//商品编辑
const onCommodityEdit = {
    classifyActive:1,
    detailCommodity:1
};

const vm = new Vue({
    router,
    data:{
        "msg":"你好",
        "store":store,
        "onCommodityEdit":onCommodityEdit
    },
    mounted(){
    },
    methods:{
        changeGoodsTotal(){
            console.log("changeGoodsTotal");
        }        
    }
});




//启动页
!(function(){
    let imgUrl = require("../images/index/init.jpg");
    let initPage = document.querySelector(".init-page");
    let IMG = document.createElement("img");
    IMG.src="/static/dist/images/index/init.jpg";
    IMG.onload=function(){
        initPage.appendChild(IMG);
        setTimeout(function(){
            initPage.parentNode.removeChild(initPage);
            vm.$mount("#app");
        },1000);
    }
})();











