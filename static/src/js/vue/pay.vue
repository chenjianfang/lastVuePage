<template>
    <div style="height:100%;">
        <header class="py-header">
            <router-link to="/comSelection"><span class="py-arrow-back"></span></router-link>
            <span class="py-head-title">结算</span>
            <div></div>
        </header>
        <ul class="pay-lists">
            <li class="lists-item clearfix" v-for="(value,index) of goodsList">
                <div class="list-left">{{value.name}}</div>
                <div class="list-right">
                    <span>￥{{value.price * value.pyNum}}</span>
                    <div class="list-right-right">
                        <span class="reduce num-btn" @click="reduceNum(index)" v-show="value.pyNum > 0">-</span>
                        <span class="number" v-show="value.pyNum > 0">{{value.pyNum}}</span>
                        <span class="increase num-btn" @click="increaseNum(index)">+</span>
                    </div>
                </div>
            </li>
        </ul>
        <footer class="py-footer">
            <!-- 支付方式 -->
            <div class="py-method">
                <p class="py-phone" @click="payMethod(0)">
                    <span class="cd-pay-checkbox" :class="{checkact:selectPayMethod==0}"></span>
                    <span class="cd-pay-text">手机支付</span>
                </p>
                <p class="py-cash" @click="payMethod(1)">
                    <span class="cd-pay-checkbox" :class="{checkact:selectPayMethod==1}"></span>
                    <span class="cd-pay-text">现金或刷卡</span>
                </p>
            </div>
            <!-- 桌号 -->
            <input type="text" class="py-num-table" placeholder="桌号">
            <span>{{cpallMoney}}￥</span>
            <input type="submit" value="提交" class="cd-pay-submit" @click="paySubmit">
        </footer>                     
    </div>
</template>

<script>
    require("../../scss/pay.scss");
    export default {
        data(){
            return {
                goodsList: this.storeval.goodsSelect,
                allMoney:0,
                selectPayMethod:0
            }
        },
        props:["storeval"],
        created(){
            console.log(this.storeval);
        },
        dataHandler(){
            allMoney
        },
        computed:{
            cpallMoney(){
                var temp = 0;
                this.goodsList.forEach(value => {
                    temp += (value.price * value.pyNum)
                });
                return temp;
            }
        },
        methods:{
            increaseNum(index){
                this.goodsList[index].pyNum += 1;
            },
            reduceNum(index){
                this.goodsList[index].pyNum -= 1;
            },
            //提交订单
            paySubmit(){
                
            },
            payMethod(arg){
                console.log(arg);
                this.selectPayMethod = arg;
            }
        }
    }
</script>