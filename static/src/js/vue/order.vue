<template>
    <div>
        <header class="od-header">
            <router-link to="/"><span class="od-arrow-back"></span></router-link>
            <span class="od-head-title">订单</span>
            <span class="od-head-menu" @click="menuToggle">
                <div class="od-head-menu-lists" v-show="toggle">
                    <span class="od-order-all">全部</span>
                    <span class="od-order-payed">已支付</span>
                    <span class="od-order-nopay">待支付</span>
                </div>
            </span>
        </header>
        <div class="od-order-box">
            <ul class="od-order-lists">
                <li class="od-order-item clearfix">
                    <div class="od-order-item-left">
                        <p class="od-order-num">订单号：<em>258885554444</em></p>
                        <p class="od-order-money">订单金额：<em>127</em></p>
                        <p class="od-order-deal-time">2016-02-02 19:08:00</p>
                    </div>
                    <div class="od-order-item-right">
                        <span>王晓兵</span>
                        <span class="od-pay-icon od-pay-red">待支付</span>
                    </div>
                </li>
                <li class="od-order-item clearfix">
                    <div class="od-order-item-left">
                        <p class="od-order-num">订单号：<em>258885554444</em></p>
                        <p class="od-order-money">订单金额：<em>127</em></p>
                        <p class="od-order-deal-time">2016-02-02 19:08:00</p>
                    </div>
                    <div class="od-order-item-right">
                        <span>王晓兵</span>
                        <span class="od-pay-icon od-pay-red">待支付</span>
                    </div>
                </li>
                <li class="od-order-item clearfix">
                    <div class="od-order-item-left">
                        <p class="od-order-num">订单号：<em>258885554444</em></p>
                        <p class="od-order-money">订单金额：<em>127</em></p>
                        <p class="od-order-deal-time">2016-02-02 19:08:00</p>
                    </div>
                    <div class="od-order-item-right">
                        <span>王晓兵</span>
                        <span class="od-pay-icon od-pay-red">待支付</span>
                    </div>
                </li>
                <li class="od-order-item clearfix">
                    <div class="od-order-item-left">
                        <p class="od-order-num">订单号：<em>258885554444</em></p>
                        <p class="od-order-money">订单金额：<em>127</em></p>
                        <p class="od-order-deal-time">2016-02-02 19:08:00</p>
                    </div>
                    <div class="od-order-item-right">
                        <span>王晓兵</span>
                        <span class="od-pay-icon od-pay-red">待支付</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    require("../../scss/order.scss");
    export default {
        data(){
            return {
                toggle:false
            }
        },
        props:["storeval"],
        created(){
            console.log(this.storeval);
        },
        methods:{
            menuToggle(){
                this.toggle = !this.toggle;
            }
        }
    }
</script>