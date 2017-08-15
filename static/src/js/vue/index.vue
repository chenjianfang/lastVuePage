<template>
    <div>
        <!-- 头部标签 -->
        <header class="header">
            <span class="arrow-back"></span>
            <span class="head-title">车险详情</span>
            <span class="share">分享</span>
        </header>
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide loop-img-1"></div>
                <div class="swiper-slide loop-img-2"></div>
                <div class="swiper-slide loop-img-3"></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!-- 内容 -->
        <div class="insurance-title">
            <div class="insurance-left">
                车险名称车险名称车险名称车险名称车险名称车险名称车险名称
            </div>
            <div class="insurance-right">
                ￥<span>655</span>元
            </div>
        </div>
        <div class="insurance-detail">
            车险简介车险简介车险简介车险简介车险简介车险简介车险简介
            车险简介车险简介车险简介车险简介车险简介车险简介车险简介
            车险简介车险简介车险简介车险简介车险简介车险简介车险简介
            车险简介车险简介车险简介车险简介车险简介车险简介车险简介
            车险简介车险简介车险简介车险简介车险简介车险简介车险简介
        </div>
        <!-- 底部 -->
        <footer class="footer clearfix">
            <div class="footer-left">海报</div>
            <router-link to="/userInfor"><div class="footer-right">立即投保</div></router-link>
        </footer>
    </div>
</template>

<script>
    require("../../scss/index.scss");
    export default {
        data(){
            return {

            }
        },

    }
</script>