import Vue from 'vue';
import router from './router.js';

import "../scss/common.scss";

const vm = new Vue({
    el:'#app',
    router,
    data:{
        "msg":"你好",
    },
    methods:{
        changeGoodsTotal(){
            console.log("changeGoodsTotal");
        }        
    }
});











