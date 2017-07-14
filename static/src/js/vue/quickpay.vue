<template>
    <div>
        <header class="qp-header clearfix">
                <router-link to="/"><span class="qp-arrow-back"></span></router-link>
                <span class="qp-head-title">快速结账</span>
            </header>
            <form class="qp-pay-form" onsubmit="return false">
                <div class="qp-input-money">
                    <input class="qp-input-money-num" type="text" placeholder="0.00">
                    <span>元</span>
                </div>
                <textarea placeholder="请输入备注信息"></textarea>
                <div class="qp-console-pay" @click="consoleHandler">
                    <div class="qp-checkbox" :class="{checkact:consolePage}"></div>
                    <span>打印小票</span>
                </div>
                <input class="qp-input-submit" type="submit" value="提交">
            </form>
    </div>
</template>

<script>
    require("../../scss/quickpay.scss");
    export default {
        data(){
            return {
                consolePage:false
            }
        },
        methods:{
            consoleHandler(){
                this.consolePage = !this.consolePage;
            }
        }
    }
</script>