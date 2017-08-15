<template>
    <div>
        <!-- 头部标签 -->
        <header class="header">
            <router-link to="/userInfor"><span class="arrow-back"></span></router-link>
            <span class="head-title">车险投保</span>
            <span class="share"></span>
        </header>
        
        <div class="car-declare">
            请填写车辆信息：
        </div>
        <form class="form-list">
            <div class="input-item">
                <label for="car-city" class="require-icon">初登日期</label>
                <input type="text" class="input-text" id="car-city">
            </div>
            <div class="input-item">
                <label for="car-id" class="require-icon">车架号</label>
                <input type="text" class="input-text" id="car-id">
            </div>
            <div class="input-item">
                <label for="car-power-id" class="require-icon">发动机号</label>
                <input type="text" class="input-text" id="car-power-id">
            </div>
            <div class="input-item">
                <label for="car-classify" class="require-icon">品牌型号</label>
                <input type="text" class="input-text" id="car-classify">
            </div>
            <div class="input-item">
                <label class="require-icon">车主姓名</label>
                <div class="input-text" style="border:none">张小龙</div>
            </div>
            <div class="input-item">
                <label for="phone-num" class="require-icon">手机号码</label>
                <input type="text" class="input-text" id="phone-num">
            </div>
            <div class="input-item">
                <label for="card-id" class="require-icon">车主身份证号</label>
                <input type="text" class="input-text car-id-input" id="card-id">
                <div class="car-id-choose">拍照</div>
            </div>
            


    <!--         <span class="input-tips">
                未填写车主生日
            </span> -->

        </form>
        <!-- 底部 -->
        <footer class="car-footer clearfix">
            <router-link to="/userInfor"><div class="car-footer-left">上一步</div></router-link>
            <router-link to="/carOwnInfor"><div class="car-footer-right">下一步</div></router-link>
        </footer>
    </div>
</template>

<script>
    require("../../scss/carInfor.scss");
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