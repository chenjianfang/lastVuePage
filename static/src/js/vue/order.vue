<template>
    <div class="insurance-wrap">
        <!-- 头部标签 -->
        <header class="header">
            <router-link to="/insurance"><span class="arrow-back"></span></router-link>
            <span class="head-title">车险投保</span>
            <span class="share"></span>
        </header>
        
        <div class="insurance-declare">
            报价信息确认
        </div>
            <div class="declare-detail">
                <span>方案详情：</span>
                <div class="detail-wrapper">
                    <p>商业险起保日期：2017-08-09生效</p>
                    <p>交强险起保日期：2017-08-09生效</p>
                </div>
            </div>
            <div class="order-lists">
                <div class="order-item order-item-title">
                    <span class="order-name">保障条款</span>
                    <span class="order-price">保额</span>
                    <span class="order-sum">保费</span>
                </div>
                <div class="order-item">
                    <span class="order-name">机动车损失险</span>
                    <span class="order-price">1222</span>
                    <span class="order-sum">12221222</span>
                </div>
                <div class="order-item">
                    <span class="order-name">机动车损失险</span>
                    <span class="order-price">1222</span>
                    <span class="order-sum">12221222</span>
                </div>
            </div>
            <!-- 底部 -->
            <footer class="car-footer clearfix">
                <router-link to="/insurance"><div class="car-footer-left">上一步</div></router-link>
                <router-link to="/sureOrder"><div class="car-footer-right">提交核保</div></router-link>
            </footer>
    </div>
</template>

<script>
    require("../../scss/order.scss");
    export default {
        data(){
            return {
                btnActive:false,
                msgBoxActive:false,
            }
        },
        methods:{
            changeBtn(){
                this.btnActive = !this.btnActive;
            },
            showQuestion(){
                this.msgBoxActive = true;
            },
            msgBoxClose(){
                this.msgBoxActive = false;
            }
        }

    }
</script>