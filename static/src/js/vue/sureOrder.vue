<template>
    <div class="insurance-wrap">
        <!-- 头部标签 -->
        <header class="header">
            <router-link to="/order"><span class="arrow-back"></span></router-link>
            <span class="head-title">车险投保</span>
            <span class="share"></span>
        </header>
        
        <div class="order-content">
            <p>单号：111</p>
            <p class="order-protect">被保人：张小龙</p>
            <p>投保人：张小龙</p>
            <p class="order-price-num">总额：￥1222元</p>
            <p>核保成功，待支付</p>
        </div>
        <!-- 底部 -->
        <footer class="car-footer clearfix">
            <div class="car-footer-left" @click="orderBack">撤单</div>
            <div class="car-footer-right">前去支付</div>
        </footer>
        <div class="order-back-bg" v-show="msgBoxShow">
            <div class="order-back">
                <p>确定撤回保单吗？</p>
                <div class="order-btn-wrap">
                    <router-link to="/"><div class="back-sure">确定</div></router-link>
                    <div class="back-cancel" @click="backCancel">取消</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    require("../../scss/sureOrder.scss");
    export default {
        data(){
            return {
                msgBoxShow:false,
            }
        },
        methods:{
            orderBack(){
                this.msgBoxShow = true;
            },
            backCancel(){
                this.msgBoxShow = false;
            }
        }

    }
</script>