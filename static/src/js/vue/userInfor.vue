<template>
    <div>
        <!-- 头部标签 -->
        <header class="header">
            <router-link to="/"><span class="arrow-back"></span></router-link>
            <span class="head-title">车险投保</span>
            <span class="share"></span>
        </header>
        
        <a class="declare">
            被保险人须知 》》
        </a>
        <div class="usermsg-bar">基本信息</div>
        <form class="form-list">
            <div class="input-item">
                <label for="car-city" class="require-icon">车辆行驶城市</label>
                <input type="text" class="input-text" id="car-city">
            </div>
            <div class="input-item">
                <label for="car-id" class="require-icon">车牌号</label>
                <input type="text" class="input-text car-id-input" id="car-id">
                <div class="car-id-choose">选择</div>
            </div>
            <div class="input-item">
                <label for="car-name" class="require-icon">车主姓名</label>
                <input type="text" class="input-text" id="car-name">
            </div>
            

            <div class="input-item">
                <label for="car-id" class="require-icon">是否过户车</label>
                <div class="change-user-detail"><a @click="showQuestion">什么情况选择此项？</a></div>
                <div class="change-user-btn" :class="{'user-btn-bg':btnActive}">
                    <div class="change-btn" :class="{'btn-right':btnActive}" @click="changeBtn"></div>
                </div>
            </div>
            <div class="input-item" v-show="btnActive">
                <label for="car-date">过户日期</label>
                <input type="text" class="input-text" id="car-date">
            </div>
        </form>
        <!-- 底部 -->
        <router-link to="/carInfor">
            <footer class="user-footer clearfix">
                为爱车投保
            </footer>
        </router-link>
        <!-- 弹框 -->
        <div class="msg-bg" v-show="msgBoxActive">
            <div class="msg-box">
                <div class="msg-head">什么情况选择此项？</div>
                <div class="msg-content">
                    当车辆所有权变更登记后，首次使用最新车辆信息投保车险时需要勾选此项。
                </div>
                <div class="msg-close" @click="msgBoxClose">关闭</div>
            </div>
        </div>
    </div>
</template>

<script>
    require("../../scss/userInfor.scss");
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