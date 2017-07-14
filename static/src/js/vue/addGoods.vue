<template>
    <div style="background:#fff">
        <header class="py-header">
            <router-link to="/commodity"><span class="py-arrow-back"></span></router-link>
            <span class="py-head-title">添加商品</span>
            <div></div>
        </header>
        <label class="upload" for="fileUp">
            <div class="show-img">
                <img :src="imgUrl" alt="" v-show="imgUrl.length != 0">
            </div>
            <input type="file" id="fileUp" class="upload-file" @change="changeFile">
            <span>+</span>上传图片
        </label>
        <div class="addGoods-list addGoods-code clearfix" @click="equipHandle">
            <span>设备</span>
            <div class="select-box">{{equipItem}}</div>
        </div>
        <div class="addGoods-list addGoods-code clearfix"  @click="classHandle">
            <span>分类</span>
            <div class="select-box">{{classItem}}</div>
        </div>
        <div class="addGoods-list">
            <span>商品名称</span><input type="text">
        </div>
        <div class="addGoods-list addGoods-price clearfix">
            <span>价格</span><input type="text">
            <span>元</span>
        </div>
        <div class="addGoods-list">
            <span>规格</span><input type="text">
        </div>
        <div class="addGoods-list">
            <span>单位</span><input type="text">
        </div>
        <textarea class="addGoods-textarea" placeholder="请输入备注信息"></textarea>
        <div class="addGoods-btn">完成</div>
        <selectCom :onSelectData="selectData" :onSelectShow="SelectShow" v-show="selectDevice" @click.native="selectBGHandle" v-on:deliver="onDeliver"></selectCom>
    </div>
</template>

<script>
    require("../../scss/addGoods.scss");
    import selectCom from "./select.vue";
    export default {
        data(){
            return {
               imgUrl:"",
               selectDevice:false,
               SelectShow:false,
               equipList:["设备1","设备2","设备3","设备4"], //设备
               classList:["分类1","分类2","分类3","分类4"], //分类
               selectData:[], //传递给select组件的数组
               equipItem:"",  //选择设备
               classItem:"", //选择分类
            }
        },
        props:["storeval","commodityEdit"],
        components:{
            selectCom
        },
        mounted(){
            console.log(this.commodityEdit);
        },
        methods:{
            changeFile(event){
                var that = this;
                var file = event.target.files[0];
                console.log(file);
                if(window.FileReader){
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = function(e){
                        that.imgUrl = e.target.result;
                        console.log(e.target.result);
                    }
                }
            },
            //分类
            classHandle(){
                this.selectData = this.classList;
                this.selectComHandle();
            },
            //设备选项
            equipHandle(){
                this.selectData = this.equipList;
                this.selectComHandle();
            },
            //点击选择框隐藏select组件
            selectBGHandle(){
                this.selectDevice = false;
                this.SelectShow = false;
            },
            selectComHandle(){
                this.selectDevice = true;
                (function(self){
                    setTimeout(function(){
                        console.log(self);
                        self.SelectShow = true;
                    },0);
                })(this)
            },
            //父子组件通信
            onDeliver(arg){
                console.log(arg);
                if(this.selectData == this.classList){
                    this.classItem = arg;
                }else{
                    this.equipItem = arg;
                }
            }
        },
    }
</script>