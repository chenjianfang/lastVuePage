<template>
    <div>
        <div class="idx-header clearfix">
            <div class="idx-logo"></div>
            <router-link to="/setting">
                <div class="idx-setting"></div>
            </router-link>
            <div class="idx-pay-entry">
                <router-link to="/comSelection">
                    <div class="idx-pay-entry-wrapper">
                        <span class="idx-money-icon"></span>
                        <span>结账</span>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="idx-split-line"></div>
        <div class="idx-index-menu">
            <ul class="idx-index-menu-wrapper clearfix">
                <li class="idx-index-menu-item">
                    <router-link to="/quickpay">
                        <div class="idx-menu-icon-box">
                            <span class="idx-menu-icon idx-menu-icon-1"></span>
                        </div>
                    </router-link>    
                    <p class="idx-menu-txt">快速结账</p>
                </li>
                <li class="idx-index-menu-item">
                    <router-link to="/order">
                        <div class="idx-menu-icon-box">
                            <span class="idx-menu-icon idx-menu-icon-2"></span>
                        </div>
                    </router-link>    
                    <p class="idx-menu-txt">订单</p>
                </li>
                <li class="idx-index-menu-item">
                    <router-link to="/commodity">
                        <div class="idx-menu-icon-box">
                            <span class="idx-menu-icon idx-menu-icon-3"></span>
                        </div>
                    </router-link>    
                    <p class="idx-menu-txt">商品</p>
                </li>
                <li class="idx-index-menu-item">
                    <router-link to="/report">
                        <div class="idx-menu-icon-box">
                            <span class="idx-menu-icon idx-menu-icon-4"></span>
                        </div>
                    </router-link>    
                    <p class="idx-menu-txt">报表</p>
                </li>
                <li class="idx-index-menu-item">
                    <router-link to="/componentsClass">
                        <div class="idx-menu-icon-box">
                            <span class="idx-menu-icon idx-menu-icon-4"></span>
                        </div>
                    </router-link>    
                    <p class="idx-menu-txt">商品分类</p>
                </li>
                <li class="idx-index-menu-item">
                    <router-link to="/equipment">
                        <div class="idx-menu-icon-box">
                            <span class="idx-menu-icon idx-menu-icon-4"></span>
                        </div>
                    </router-link>    
                    <p class="idx-menu-txt">设备管理</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    require("../../scss/index.scss");
    export default {
        data(){
            return {

            }
        },
        props:["storeval"],
        mounted:function(){
            this.storeval.goodsSelect = [];
            this.storeval.checkActivity = false;
        },
    }
</script>