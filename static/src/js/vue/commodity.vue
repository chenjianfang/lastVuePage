<template>
    <div>
        <header class="cd-header">
                <router-link to="/"><span class="cd-arrow-back"></span></router-link>
                <router-link to="/addGoods"><span class="cd-head-menu">+</span></router-link>
            </header>
            <div class="py-pay-wrapper clearfix">
                <div class="classify">
                    <ul>
                        <li class="classify-item" :class="{'classify-act':classifyActive == value.id}" v-for="value of classifyLists" @click="classifySelect(value.id)" :key="value.id">{{value.name}}</li>
                    </ul>
                </div>
                <ul class="classify-detail">
                    <li class="py-pay-item clearfix" v-for="(value,index) of classifyDetail" :key="index" @click="redirAddGoods(value.id)">
                        <div class="py-goods-intro">
                            <p>名称：{{value.name}}</p>
                            <p>单价：<em>￥{{value.price}}</em></p>
                        </div>
                    </li>
                </ul>
            </div>
            
    </div>
</template>

<script>
    require("../../scss/commodity.scss");
    import router from "../router.js";
    export default {
        data(){
            return {
                //分类商品
                classifyLists:[
                    {
                        id:1,
                        name:"羊肉类"
                    },{
                        id:2,
                        name:"鸡肉类"
                    },{
                        id:3,
                        name:"马肉类"
                    },{
                        id:4,
                        name:"猪肉类"
                    }
                ],
                //详细商品
                classifyDetail:[
                    {
                        id: 1,
                        name:"一碗香",
                        price:29,
                        pyNum: 0
                    },{
                        id: 2,
                        name:"一碗香",
                        price:29,
                        pyNum: 0
                    },{
                        id: 3,
                        name:"一碗香",
                        price:29,
                        pyNum: 0
                    },{
                        id: 4,
                        name:"一碗香",
                        price:29,
                        pyNum: 0
                    },
                ],
                //当前商品分类ID
                classifyActive:1,
                //选中的当前商品ID
                detailCommodity:1
            }
        },
        props:["commodityEdit"],
        mounted(){
        },
        methods:{
            //弹框显示隐藏
            msgBoxToggle(){
                this.toggle = !this.toggle;
            },
            //商品分类选择
            classifySelect(id){
                this.classifyActive = id;
            },
            //商品编辑
            redirAddGoods(id){
                this.detailCommodity = id;
                this.commodityEdit.classifyActive = this.classifyActive;
                this.commodityEdit.detailCommodity = this.detailCommodity;
                router.push("/addGoods");
            }
        }
    }
</script>