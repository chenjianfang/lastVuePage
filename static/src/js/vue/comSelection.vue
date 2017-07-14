<template>
    <div style="height:100%;">
        <header class="py-header">
            <router-link to="/"><span class="py-arrow-back"></span></router-link>
            <span class="py-head-title">商品</span>
            <div></div>
        </header>
        <div class="py-pay-wrapper clearfix">
            <div class="classify">
                <ul>
                    <li class="classify-item" :class="{'classify-act':classifyActive == value.id}" v-for="value of classifyLists" @click="classifySelect(value.id)" :key="value.id">{{value.name}}</li>
                </ul>
            </div>
            <ul class="classify-detail">
                <li class="py-pay-item clearfix" v-for="(value,index) of classifyDetail" :key="index">
                    <div class="py-goods-intro">
                        <p>名称：{{value.name}}</p>
                        <p>单价：<em>￥{{value.price}}</em></p>
                    </div>
                    <div class="py-operation-num clearfix">
                        <span class="py-reduce-num py-ope-btn" v-show="value.pyNum !== 0" @click="reduceNum(index)">-</span>
                        <span class="py-num" v-show="value.pyNum !== 0">{{value.pyNum}}</span>
                        <span class="py-increase-num py-ope-btn" @click="increaseNum(index)">+</span>
                    </div>
                </li>
            </ul>
        </div>
        <footer class="py-footer clearfix">
            <div class="py-footer-col py-footer-col-1" @click="pritePage">
                <div class="py-checkbox" :class="{checkact:priteAct}"></div>
                <span>打印小票</span>
            </div>
            <div class="py-footer-col py-footer-col-2">
                <span class="py-sum-money">总：<em>￥{{sumMoney}}</em></span>

                <router-link to="/pay" v-if="sumMoney>0">
                    <span class="py-pay-deal-btn">结算</span>
                </router-link>
                <span v-else class="py-pay-deal-btn gray">结算</span>
            </div>
        </footer>
    </div>
</template>

<script>
    require("../../scss/comSelection.scss");
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
                //总钱
                sumMoney:0,
                //当前商品分类ID
                classifyActive:1,
                //选择了的商品,@paramet:{id:id,}
                seletedGoods:[],
                priteAct:true,
            }
        },
        props:["storeval"],
        mounted(){
            const that = this;
            //初始化已选择商品
            that.seletedGoods = this.storeval.getGoodsSelect();
            this.priteAct = this.storeval.checkActivity;
            this.storeval.getGoodsSelect().forEach(vl => {
                that.sumMoney += (vl.pyNum * vl.price);
                if(vl.gid == that.classifyActive){
                    that.classifyDetail.forEach((value,index) => {
                        if(value.id == vl.id){
                            that.classifyDetail[index].pyNum = vl.pyNum;
                        }
                    });
                }
            });
        },
        methods:{
            reduceNum(index){
                this.classifyDetail[index]["pyNum"] -= 1;
                this.sumMoney -= this.classifyDetail[index]["price"];
                //减一件商品
                let hasGoods = false,
                    hasGoodsIdx = 0;
                this.seletedGoods.forEach( (value,i) => {
                    if(value.id == this.classifyDetail[index]["id"]){
                        if(value.pyNum <= 1){
                            this.seletedGoods.splice(i,1);
                        }else{
                            this.seletedGoods[i].pyNum--;
                        }
                    }
                });
                this.storeval.setGoodsSelect(this.seletedGoods);
            },
            increaseNum(index){
                this.classifyDetail[index]["pyNum"] += 1;
                this.sumMoney += this.classifyDetail[index]["price"];

                //增加一件商品
                let hasGoods = false,
                    hasGoodsIdx = 0;
                this.seletedGoods.forEach( (value,i) => {
                    if(value.id == this.classifyDetail[index]["id"]){
                        hasGoods = true;
                        hasGoodsIdx = i;
                    }
                });
                if(!hasGoods){
                    this.seletedGoods.push({
                        gid:this.classifyActive,                    //商品分类ID
                        id:this.classifyDetail[index]["id"],        //商品ID
                        name:this.classifyDetail[index]["name"],    //商品名称
                        pyNum:1,                                    //商品数量
                        price:this.classifyDetail[index]["price"]
                    });
                }else{
                    this.seletedGoods[hasGoodsIdx].pyNum++;
                }
                this.storeval.setGoodsSelect(this.seletedGoods);
            },
            classifySelect(id){
                this.classifyActive = id;
            },
            //打印小票
            pritePage(){
                this.priteAct = !this.priteAct;
                this.storeval.checkActivity = this.priteAct;
            }
        },
        // computed(){
        //     cpsumMoney(){
        //         this.sumMoney
        //     }
        // }
    }
</script>