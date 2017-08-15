<template>
    <div class="car-own">
        <!-- 头部标签 -->
        <header class="header">
            <router-link to="/carInfor"><span class="arrow-back"></span></router-link>
            <span class="head-title">车险投保</span>
            <span class="share"></span>
        </header>
        
        <form class="form-list">
            <div class="usermsg-bar">
                被保险人信息
                <input type="checkbox" id="business" class="input-radio checkbox-title">
                与车主是同一个人
            </div>
            <div class="input-item">
                <label for="phone-num" class="require-icon">被保险人姓名</label>
                <input type="text" class="input-text" id="phone-num">
            </div>
            <div class="input-item">
                <label for="phone-num" class="require-icon">被保险人手机号码</label>
                <input type="text" class="input-text" id="phone-num">
            </div>
            <div class="input-item">
                <label for="card-id" class="require-icon">被保险人身份证号</label>
                <input type="text" class="input-text car-id-input" id="card-id">
                <div class="car-id-choose">拍照</div>
            </div>

            <div class="usermsg-bar usermsg-bar-last">
                投保人信息
                <input type="checkbox" id="business" class="input-radio checkbox-title">
                与车主是同一个人
            </div>
            <div class="input-item">
                <label for="phone-num" class="require-icon">投保人姓名</label>
                <input type="text" class="input-text" id="phone-num">
            </div>
            <div class="input-item">
                <label for="phone-num" class="require-icon">投保人手机号码</label>
                <input type="text" class="input-text" id="phone-num">
            </div>
            <div class="input-item">
                <label for="card-id" class="require-icon">投保人身份证号</label>
                <input type="text" class="input-text car-id-input" id="card-id">
                <div class="car-id-choose">拍照</div>
            </div>

            <!-- 保险期时间 -->
            <div class="usermsg-bar">
                保险起期设置：
            </div>
            <div class="insurance-item">
                <input type="checkbox" class="input-radio" id="business">
                <label for="business">购买商业险</label>
                <span>起保日期：</span>
                <input type="text" class="insurance-input">
            </div>
            <div class="insurance-item">
                <input type="checkbox" class="input-radio" id="power">
                <label for="power">购买交强险</label>
                <span>起保日期：</span>
                <input type="text" class="insurance-input">
            </div>
            


    <!--         <span class="input-tips">
                未填写车主生日
            </span> -->

        </form>
        <!-- 底部 -->
        <footer class="car-footer clearfix">
            <router-link to="/carInfor"><div class="car-footer-left">上一步</div></router-link>
            <router-link to="/insurance"><div class="car-footer-right">下一步</div></router-link>
        </footer>
    </div>
</template>

<script>
    require("../../scss/carOwnInfor.scss");
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