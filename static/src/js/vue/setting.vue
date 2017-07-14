<template>
    <div>
        <header class="st-header clearfix">
            <router-link to="/"><span class="st-arrow-back"></span></router-link>
            <span class="st-head-title">设置</span>
        </header>
        <div class="st-set-lists">
            <div class="st-set-item">
                <div class="st-set-item-lable clearfix">
                    <span class="st-set-icon st-set-icon-1"></span>
                    <em>连接设备</em>
                </div>
                <span>绑定成功</span>
            </div>
            <div class="st-set-item">
                <div class="st-set-item-lable clearfix">
                    <span class="st-set-icon st-set-icon-1"></span>
                    <em>我的账户</em>
                </div>
            </div>
            <div class="st-set-item">
                <div class="st-set-item-lable clearfix">
                    <span class="st-set-icon st-set-icon-2"></span>
                    <em>关于我们</em>
                </div>
            </div>
            <div class="st-set-item" @click="payApplication">
                <div class="st-set-item-lable clearfix">
                    <span class="st-set-icon st-set-icon-2"></span>
                    <em>移动支付申请</em>
                </div>
            </div>
        </div>
        <!-- 退出 -->
        <div class="st-exit">退出</div>
    </div>
</template>

<script>
    require("../../scss/setting.scss");
    import router from "../router.js";
    export default {
        data(){
            return {

            }
        },
        methods:{
            payApplication(){
                router.push("/addApplication");
            }
        }
    }
</script>