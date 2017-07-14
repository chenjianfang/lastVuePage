<template>
    <div style="background:rgb(240,240,242);">
        <header class="py-header">
            <router-link to="/setting"><span class="py-arrow-back"></span></router-link>
            <span class="py-head-title">移动支付申请</span>
            <div></div>
        </header>
        <div class="add-wrapper clearfix">
            <!-- 第一部分 -->
            <div class="add-item-box clearfix">
                <div class="add-item-wrapper">
                    <label class="upload-add" for="fileUp0">
                        <div class="show-img aa-img">
                            <img :src="imgUrl['0']" alt="" v-show="imgUrl['0'].length != 0">
                        </div>
                        <input type="file" id="fileUp0" class="upload-file" @change="changeFile($event,0)">
                        <span class="camera-icon" v-show="imgUrl['0'].length == 0"></span>
                    </label>
                    <p>营业执照</p>
                </div>
                <div class="add-item-wrapper">
                    <label class="upload-add" for="fileUp1">
                        <div class="show-img aa-img">
                            <img :src="imgUrl['1']" alt="食品经营许可证" v-show="imgUrl['1'].length != 0">
                        </div>
                        <input type="file" id="fileUp1" class="upload-file" @change="changeFile($event,1)">
                        <span class="camera-icon" v-show="imgUrl['1'].length == 0"></span>
                    </label>
                    <p>食品经营许可证</p>
                </div>
                <div class="add-item-wrapper">
                    <label class="upload-add" for="fileUp2">
                        <div class="show-img aa-img">
                            <img :src="imgUrl['2']" alt="" v-show="imgUrl['2'].length != 0">
                        </div>
                        <input type="file" id="fileUp2" class="upload-file" @change="changeFile($event,2)">
                        <span class="camera-icon" v-show="imgUrl['2'].length == 0"></span>
                    </label>
                    <p>门头照</p>
                </div>
            </div>
            
            <!-- 第二部分 -->
            <div class="add-item-box clearfix">
                <div class="add-item-wrapper">
                    <label class="upload-add" for="fileUp3">
                        <div class="show-img aa-img">
                            <img :src="imgUrl['3']" alt="" v-show="imgUrl['3'].length != 0">
                        </div>
                        <input type="file" id="fileUp3" class="upload-file" @change="changeFile($event,3)">
                        <span class="camera-icon" v-show="imgUrl['3'].length == 0"></span>
                    </label>
                    <p>法人身份证正面</p>
                </div>
                <div class="add-item-wrapper">
                    <label class="upload-add" for="fileUp4">
                        <div class="show-img aa-img">
                            <img :src="imgUrl['4']" alt="" v-show="imgUrl['4'].length != 0">
                        </div>
                        <input type="file" id="fileUp4" class="upload-file" @change="changeFile($event,4)">
                        <span class="camera-icon" v-show="imgUrl['4'].length == 0"></span>
                    </label>
                    <p>法人身份证反面</p>
                </div>
            </div>
            <!-- 第三部分 -->
            <div class="add-item-box clearfix">
                <div class="add-item-wrapper">
                    <label class="upload-add" for="fileUp5">
                        <div class="show-img aa-img">
                            <img :src="imgUrl['5']" alt="" v-show="imgUrl['5'].length != 0">
                        </div>
                        <input type="file" id="fileUp5" class="upload-file" @change="changeFile($event,5)">
                        <span class="camera-icon" v-show="imgUrl['5'].length == 0"></span>
                    </label>
                    <p>法人银行卡照片</p>
                </div>
                <div class="bank-card-wrapper">
                    <input type="text" placeholder="法人银行卡开户行" class="bank-card-num">
                </div>
            </div>
            <!-- 第四部分 -->
            <div class="add-item-box clearfix">
                <div class="add-item-wrapper">
                    <label class="upload-add" for="fileUp6">
                        <div class="show-img aa-img">
                            <img :src="imgUrl['6']" alt="" v-show="imgUrl['6'].length != 0">
                        </div>
                        <input type="file" id="fileUp6" class="upload-file" @change="changeFile($event,6)">
                        <span class="camera-icon" v-show="imgUrl['6'].length == 0"></span>
                    </label>
                    <p>店内照片1</p>
                </div>
                <div class="add-item-wrapper">
                    <label class="upload-add" for="fileUp7">
                        <div class="show-img aa-img">
                            <img :src="imgUrl['7']" alt="" v-show="imgUrl['7'].length != 0">
                        </div>
                        <input type="file" id="fileUp7" class="upload-file" @change="changeFile($event,7)">
                        <span class="camera-icon" v-show="imgUrl['7'].length == 0"></span>
                    </label>
                    <p>店内照片2</p>
                </div>
                <div class="add-item-wrapper">
                    <label class="upload-add" for="fileUp8">
                        <div class="show-img aa-img">
                            <img :src="imgUrl['8']" alt="" v-show="imgUrl['8'].length != 0">
                        </div>
                        <input type="file" id="fileUp8" class="upload-file" @change="changeFile($event,8)">
                        <span class="camera-icon" v-show="imgUrl['8'].length == 0"></span>
                    </label>
                    <p>店内照片3</p>
                </div>
            </div>
            <!-- 提交 -->
            <div class="aa-submit">
                提交申请
            </div>

        </div>
        
        
    </div>
</template>

<script>
    require("../../scss/addApplication.scss");
    export default {
        data(){
            return {
                "imgUrl":{
                    "0":"",
                    "1":"",
                    "2":"",
                    "3":"",
                    "4":"",
                    "5":"",
                    "6":"",
                    "7":"",
                    "8":""
                }
            }
        },
        mounted(){

        },
        methods:{
            changeFile(e,i){
                console.log(i);
                var that = this;
                var file = e.target.files[0];
                console.log(file);
                if(window.FileReader){
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = function(ev){
                        that.imgUrl[''+i+''] = ev.target.result;
                        console.log(that.imgUrl);
                    }
                }
            },
        },
    }
</script>