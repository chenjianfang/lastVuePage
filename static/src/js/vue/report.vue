<template>
    <div>
        <header class="rp-header">
            <router-link to="/"><span class="rp-arrow-back"></span></router-link>
            <span class="rp-head-title">订单</span>
            <span class="rp-head-menu" @click="menuBox">
                <div class="rp-head-menu-lists" v-show="menuToggle">
                    <span class="rp-order-all">今天</span>
                    <span class="rp-order-payed">昨天</span>
                    <span class="rp-order-nopay">最近3天</span>
                    <span class="rp-order-nopay">最近一周</span>
                    <span class="rp-order-nopay">最近一月</span>
                    <span class="rp-order-nopay">热销商品</span>
                </div>
            </span>
        </header>
        <div class="rp-order-box">
            <ul class="rp-order-lists">
                <li class="rp-order-item clearfix">
                    <div class="rp-order-item-left">
                        <p class="rp-order-num">订单号：<em>258885554444</em></p>
                        <p class="rp-order-money">订单金额：<em>127￥</em></p>
                        <p class="rp-order-deal-time">2016-02-02 19:08:00</p>
                    </div>
                    <div class="rp-order-item-right">
                        <span class="rp-pay-icon rp-pay-blue">已支付</span>
                    </div>
                </li>
                <li class="rp-order-item clearfix">
                    <div class="rp-order-item-left">
                        <p class="rp-order-num">订单号：<em>258885554444</em></p>
                        <p class="rp-order-money">订单金额：<em>127￥</em></p>
                        <p class="rp-order-deal-time">2016-02-02 19:08:00</p>
                    </div>
                    <div class="rp-order-item-right">
                        <span class="rp-pay-icon rp-pay-blue">已支付</span>
                    </div>
                </li>
                <li class="rp-order-item clearfix">
                    <div class="rp-order-item-left">
                        <p class="rp-order-num">订单号：<em>258885554444</em></p>
                        <p class="rp-order-money">订单金额：<em>127￥</em></p>
                        <p class="rp-order-deal-time">2016-02-02 19:08:00</p>
                    </div>
                    <div class="rp-order-item-right">
                        <span class="rp-pay-icon rp-pay-blue">已支付</span>
                    </div>
                </li>
                <li class="rp-order-item clearfix">
                    <div class="rp-order-item-left">
                        <p class="rp-order-num">订单号：<em>258885554444</em></p>
                        <p class="rp-order-money">订单金额：<em>127￥</em></p>
                        <p class="rp-order-deal-time">2016-02-02 19:08:00</p>
                    </div>
                    <div class="rp-order-item-right">
                        <span class="rp-pay-icon rp-pay-blue">已支付</span>
                    </div>
                </li>
            </ul>
        </div>
        <footer class="rp-report-footer">
            <div class="rp-footer-row">
                <span>单量：30000单</span>
            </div>
            <div class="rp-footer-row">
                <span>总金额：<em>20000</em>元</span>
            </div>
        </footer>
    </div>
</template>

<script>
    require("../../scss/report.scss");
    export default {
        data(){
            return {
                "menuToggle":false
            }
        },
        methods:{
            //菜单显示
            menuBox(){
                this.menuToggle = !this.menuToggle;
            },
            //返回上一页
            routerBack(){
                this.$router.go(-1);
            }
        }
    }
</script>